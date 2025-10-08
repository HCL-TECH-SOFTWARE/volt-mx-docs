## Frequently Asked Questions (FAQs)

1.  **Question**: What is the standard way of handling http status codes (401, and 404) from the VoltMX MobileFoundry Integration Service? Is this where the PreProcessor and PostProcessor logic comes into play?

    **Answer**:
    a.  In PostProcessor, Result object is available, in that user can use the below code snippet to find the httpStatus code.
        <pre><code>
         Param statusCodeparam = result.findParam("httpStatusCode");
         int httpStatusCode = Integer.parseInt(statusCodeparam.getValue());
        </code></pre>


    b.  By default, you pass the http status code in the resultset json to device, the below is the sample output string.
        <pre><code>resultset = {"httpStatusCode":200,"marketIndex":[{"indName":"Dow Jones Ind.","indVal":"15618.22","symbol":"0DJIA","indValChg":" -20.90"},{"indName":"Nasdaq Comp.","indVal":"3939.86","symbol":"0NDQC","indValChg":"3.27"},{"indName":"NYSE Composite","indVal":" 10011.65","symbol":"0NYC","indValChg":"-52.46"},{"indName":"S & P 500","indVal":"1762.97","symbol":"0S&P5","indValChg":" -4.96"}],"opstatus":0}
        </code></pre>
        The user can use the below snippet in `.js` file to get the httpStatusCode from JSON resultset object.
        `int statusCode = resultset["httpStatusCode "];`

2.   **Question**: How can one authenticate to this same RESTful api? I see options for Basic Authentication in the Application Properties menu and when working with service defs in VoltMX Studio but I really need to be able to dynamically assign those values in code i.e. User authenticates with Active Directory and then authenticates with REST endpoints.

     **Answer**: Dynamically basic authentication, every request user can pass the username and password in request params with the following specified param names:

    1.  userid
    2.  pwd

    If user has any domain and hostname, then use the following specified param names:

    1.  domain
    2.  hname

    In middleware, first it checks in request parameters, if not available it checks in session, that is, session.getAttribute(userid), if not available in request and session, then it takes from service definition file.

    in JS code level:

    <pre><code>var inputParamTable={};  
    inputParamTable["appID"] = "ServicesApp";  
    inputParamTable["serviceID"] = "BasicAuthService"; inputParamTable["userid"] = "steve";  
    inputParamTable["pwd"] = "apple";
    inputParamTable["domain"] = "kits";  
    inputParamTable["hname"] = "apple";
    </code></pre>

    If user wants to store userid and password in session, then you also consider from session, for this user need to write the below code in pre / post processor.

    `Session session = request.getSession(false); session.setAttribute("userid", "steve"); session.setAttribute("pwd", "******");`

2.  **Question**: if end server having proxy enabled authentication, then you need to configure the below -D parameters:

    `voltmx.http.proxyHost`  

    `voltmx.http.proxyPort`  

    `voltmx.http.proxyUser`
      
    `voltmx.http.proxyPassword`

2.   **Question**: if end server is with NTLM enabled authentication then need to configure the additional below -D parameter:

     `voltmx.proxy.ntlm.domainName`

2.   **Question**: Adding Headers.

     1. Add "Content-Type" and Set scope is session in IDE headers section, then write preprocessor for this service and use the below snippet in preprocessor.

        `Session session = request.getSession(); session.setAttribute("Content-Type"," application/json");`

     2. if user want to pass header values in request parameters,

        Set scope is request in IDE headers section, then pass the header value with same key which is defined in Header section as request scope.

        For example,
        <pre><code>IDE header section
        Content-Type - request scope
        in input params of the service request  
        Content-Type=application/json
        </code></pre>

2.   **Question**: Adding Custom Cookies in header

     1.  Create cookie object using http client 4.1 API, org.apache.http.cookie.Cookie

     2.  In pre or post processor, use the below snippet:
         `Session session = request.getSession(false); session.setAttribute("KCookie",cookie);`

2.   **Question**: If user want to change the url or user authentication details dynamically, implements URLProvider2 class and write user own logic to override the service def values.

2.   **Question**: if Request is more than 1024 MB then linux default values will not allow to forward the request, so below setting need to be done in Linux OS.

     Below changes are applied on QNBDEV server to resolve the BREservice issue.

     Login to Linux shell with root privileges.

     <pre><code>&#x23;vi /etc/sysctl.conf (Add the below values)  
     &#x23;increase TCP max buffer size settable using setsockopt()net.core.rmem_max = 16777216  
     net.core.wmem_max = 16777216  
     &#x23;recommended for hosts with jumbo frames enabled net.ipv4.tcp_mtu_probing=1</code></pre>
