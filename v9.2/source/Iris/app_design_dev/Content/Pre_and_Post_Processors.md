                          

Volt MX  Application Design and Development Guidelines: [Application Design Guidelines](Application_Design_Guidelines_Overview.md) > Pre/Post Processors and URL Provider Guidelines

Pre/Post Processors and URL Provider Guidelines
-----------------------------------------------

This section explains a few guidelines to be followed while using Pre/Post processors and URL provider.

*   Use `log4j` debugging facilities instead of `System.out.println` or other custom framework.
*   Trim all user inputs before passing to services to remove any inadvertent trailing spaces. This can be done using a pre-processor.
*   Write most of the processing and business logic at the server side either in pre/post processors.
*   Check for `opstatus` (success or failure) value in the post-processor before processing any data.
*   Perform all the formatting, conversions, sorting, and so on in the post-processor to keep the UI code simple.

### Logging (Performance)

When using log4j in the pre/post-processors and URL Provider, check for the debug level before calling `logger.debug` or `logger.info`. See the code given below for more clarity.

##### Sample Usage

package com.voltmx.custom;

public class CustomPostProcessor implements PostProcessor {

//Define logger as static final to improve performance

private static final Logger logger= Logger.getLogger(com.voltmx.custom.CustomPostProcessor .class);

//Declare the check for debug or info enabled as static final to improve performance

   private static final boolean isDebugEnabled = logger.isDebugEnabled();

   private static final boolean isInfoEnabled = logger.isInfoEnabled();

    public Result execute (Result result, DataControllerRequest Request) {

       //Wrap logger.debug with isDebugEnabled to improve performance

         if (isDebugEnabled) {

                logger.debug("This is a debug statement");

         }

        //Wrap logger.info with isInfoEnabled to improve performance

          if (isInfoEnabled) {

                logger.info("This is an info statement");

          }

     }

}

If the package name of your custom class does not start with `com.voltmx` or `com.hcl` then add the package entry (`log4j.category.custompackagename`) in `middleware-log4j.properties`.

### Class Variables

Pre-processor, post-processor, and URLProvider are singleton classes. Any user specific data should not be stored in class variables, otherwise it will result in abnormal behavior. Common Data can be stored in class variables.

### Input Validation

Pre-processor must be used to validate all the inputs to overcome Denial-of-Service attacks. Even though the client side validations are performed, the server side validations are mandatory.

For example, user input must be validated at client and server also. Any data selection from collection widgets like ComboBox, ListBox, Segment, RadioButton, and CheckBoxGroup, and so on must have server validation.

##### Sample Usage

package com.voltmx.custom;

public class CustomPreProcessor implements PreProcessor {

     public boolean execute (HashMap map, DataControllerRequest request, Result result) {

        if (customValidation()) {

        } else {

             result.addParam(new Param("opstatus", "23", "int" ));

             result.addParam(new Param("errmsg", "Invalid Input", "string" ));

             return false;

        }

        return true;

     }  

}

### Session Recycle

If user navigates from non-authenticated to authenticated state or authenticated to non-authenticated state, then the session needs to be recycled to avoid Man-in-Middle Attack. Session recycle will change JSESSIONID or cacheid value.

##### Sample Usage

package com.voltmx.custom;

public class CustomPostProcessor implements PostProcessor {

     public Result execute (Result result, DataControllerRequest Request) {

        //get Session Object

        Session session = request.getSession(false);

        HashMap datamap = new HashMap(); //create temp data map

        //populate session data into temp data map

        if (session != null) {

             try {

             Enumeration enumeration = session.getAttributeNames();        while (enumeration.hasMoreElements()) { String sessionKey = (String) enumeration.nextElement(); Object sessionValue = session.getAttribute(sessionKey); datamap.put(sessionKey, sessionValue);

         } catch (Exception e) {

             //log error

        }    

//invalidate session

        session.invalidate();

     }  

     //create new session

     session = request.getSession(true);

     // populate the data to new session

      if (session != null) {

        for (Iterator itr = datamap.keySet().iterator(); itr.hasNext(); ) { String sessionKey = (String) itr.next(); Object sessionValue = datamap.get(sessionKey); session.setAttribute(sessionKey, sessionValue);

         }

     }   

        //clear the temp data map

        datamap.clear();

        datamap = null;

     }  

}

### Sensitive Data Logging

Do not log any sensitive data like userid, password etc in debug, info or error mode.

##### Sample Usage

package com.voltmx.custom;

public class CustomPreProcessor implements PreProcessor {

     public boolean execute (HashMap map, DataControllerRequest request, Result result) {

        //Do not log sensitive information

        logger.debug("userid:" + map.get("userid"));

        logger.debug("password:" + map.get("password"));

     }

}

### Duping Authentication

There is a possibility from the device or man-in-middle to dupe the server that authentication is successful even though authentication has failed. If proper validations are not added, user can access the sensitive information. To overcome this problem, maintain a flag in session for successful authentication at server and also clear the flag in session after successful logout or sign-out.

##### Sample Usage

package com.voltmx.custom;

public class LoginPostProcessor implements PostProcessor {

     public Result execute (Result result, DataControllerRequest Request) {

        //get Session Object

        Session session = request.getSession(false);

        //check for login is successful and then add a flag in session

        session.setAttribute("login", true);

     }

}

package com.voltmx.custom;

public class AccountDetailPreProcessor implements PreProcessor {

     public boolean execute (HashMap map, DataControllerRequest request, Result result) {

        //get Session Object

        Session session = request.getSession(false);

        // get the Flag

        boolean flag = (Boolean)session.getAttribute("login");

        if (! flag) {

           //sent error response to client

           result.addParam(new Param("opstatus", "23", "int" ));

           result.addParam(new Param("errmsg", "User is not logged in", "string" ));

           return false;

        }  

        return true;

     }

}

package com.voltmx.custom;

public class LogoutPostProcessor implements PostProcessor {

     public Result execute (Result result, DataControllerRequest Request) {

        //get Session Object

        Session session = request.getSession(false);

        // check for logout is successful and then remove the flag from session

        session.removeAttribute("login");

     }

}

### Sensitive Data Encryption

Asymmetric keys or Public-private keys (PKI) must be used to encrypt the sensitive data. For Symmetric keys, changing the seed will be a maintenance issue.

### Invoking Services

In some cases, order of invoking services is must. For example, service-2 can be invoked after successful invocat ion of service-1. Validation must be captured in service-2 pr processor to ensure service-1 is invoked.

### Post-Processor Execution in Case of Exception

If an exception occurs while executing a service, you do not have control to handle the exception. To handle the exception, a new feature @OnException is added to update the result object with the help of post-processor. Also provided the flexibility to write your own business logic based on the requirement like a positive scenario.

> **_Note:_** The method signature is similar to execute(). Subsequently, all existing positive scenario cases can also be implemented for the exception case.

To implement this feature, add a new method with @OnException annotation as shown below.

```
@OnException
public Result yourMethodName (@VoltMXContext Result result, 
@VoltMXContext DataControllerRequest request, @VoltMXContext DataControllerResponse response,
@VoltMXException Exception exception) {
If (exception instanceof ConnectorException) {
result.addParam(new Param("opstatus", "2323", "int" ));
result.addParam(new Param("errmsg", "Socket timeout while connecting to endpoint", "string" ));
}
return result;
}
```

@OnException – annotation to identify the exception API in post-processor

@VoltMXContext – annotation for the parameters in case of exception

**@VoltMXException** – annotation for an exception parameter in case of exception

**Example**

For a JSON service, if the response is not JSON type, the middleware sends a 5001 error code . For an XML service, if the response is invalid, the middleware sends an 8006 error code. If the HTML comes from a service, the response can be parsed using @OnException. Based on the code, you have to write the business logic to parse the HTML or modify the result object.

The sample code to parse the HTML using @OnException follows:

```
@OnException
public Result processHTMLRespose (@VoltMXContextwe Result result, @VoltMXContext
DataControllerRequest request, @VoltMXContext DataControllerResponse response,                                                         
@VoltMXException Exception exception) {
	if (exception instanceof ConnectorException){
	String errorCode = 
((ConnectorException)exception).getErrorCode();			
	if("5001".equals(errorCode) || "777777".equals(errorCode)){
	result.setParam(new Param("RELOGIN", "true", "string"));
	String.htmlString = response.getResponse();
	Document doc = Jsoup.parse.htmlString);
	String smPostPreserveValue = 
	doc.select("INPUT[NAME=SMPostPreserve]").get(0).attr("VALUE");
		if(smPostPreserveValue != null && 
		!"".equalsIgnoreCase(smPostPreserveValue.trim())){
			result.setParam(new Param("SMPostPreserve", 
smPostPreserveValue, "string"));
			}
		}	
	}
	return result;
}
```

For the preceding HTML parsing, we used jsoup-1.8.1.jar.
