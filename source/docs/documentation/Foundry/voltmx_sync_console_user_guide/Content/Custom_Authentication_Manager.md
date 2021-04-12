---
layout: "documentation"
category: "voltmx_sync_console_user_guide"
---
                           

Custom Authentication Manager
=============================

Volt MX  Foundry Sync server supports custom authentication where you can authenticate using the custom code written in Java.

You can use custom authentication manager in the below situations.

*   Data source has a login web service call that returns authentication token and you need to pass the same authentication token in subsequent web service calls.
*   To authenticate the user using Single sign on, and OAuth.
    

To configure custom authentication, follow these steps:

1.  Write the java class by implementing spring **com.voltmx.sync.console.auth.IAuthenticationManager** interface.
2.  Bundle the java class with dependent classes in a jar and copy the jar to the `<sync.home>/apache-tomcat-7.0.26/webapps/syncconsole/WEB-INF/lib` folder. If you also have any other dependent third-party jars, then copy those also to the `<sync.home>/apache-tomcat-7.0.26/webapps/syncconsole/WEB-INF/lib` folder.
3.  [Create an Authentication Profile](User_Management.html#Creating__an_Authentication_Profile).
4.  [Assign an Authentication Profile to an Application](Sync_Configuration.html#assign-authentication-profile-to-application).
5.  Restart Volt MX Foundry Sync server.
    
    > **_Note:_** You may have to add `syncconsole` classes, in classpath of the project to compile your project.  
    For example, `<sync.home>/apache-tomcat-7.0.26/webapps/syncconsole/WEB-INF/classes`.
    

Other Features of Custom Authentication Manager
-----------------------------------------------

The other features of Custom Authentication Manager are:

*   Using the Custom Authentication Manager, you can override the **ConfigParam** defined under `Service/ServiceConfig` in the Volt MX Foundry Sync configuration file.  
    For example, endpointURL, and userid
*   You can also put any variable, for example, _authentication token_ in context, and map the same in subsequent web service calls.  
    For example,
    *   Use the below code to put the context variable into the context from custom authentication manager{% highlight voltMx %}_ctxParams.put("TOKEN", <token-value>);_
        {% endhighlight %}
    *   Use the below param mapping in the Volt MX Foundry Sync configuration to take the mapping from the context.  
        {% highlight voltMx %}_<Param Name="token" Source="CONTEXT" SourceValue="TOKEN"/>_
        {% endhighlight %}

An Example of SalesForce Authentication Manager
-----------------------------------------------

{% highlight voltMx %}package com.voltmx.sync.console.auth;

import java.net.URL;
import java.util.HashMap;
import java.util.Map;

import javax.xml.soap.MessageFactory;
import javax.xml.soap.Name;
import javax.xml.soap.SOAPBody;
import javax.xml.soap.SOAPBodyElement;
import javax.xml.soap.SOAPConnection;
import javax.xml.soap.SOAPConnectionFactory;
import javax.xml.soap.SOAPEnvelope;
import javax.xml.soap.SOAPFault;
import javax.xml.soap.SOAPMessage;

import org.apache.log4j.Logger;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;
import org.w3c.dom.NodeList;

import com.voltmx.sync.syncconfig.IConfigConstants.SourceValue;

@Service("salesforceAuthenticationManager")
public class SalesforceAuthenticationManager implements 
IAuthenticationManager {
	
	private static final String SALESFORCE\_DUMMY\_PASSWORD = 
       "DummySalesforcePassword";
	private static Logger logger = Logger.getLogger
       (SalesforceAuthentication
       Manager.class);
	
	@Override
	public Authentication authenticate(Authentication arg0) throws 
       AuthenticationException {
		SyncAuthentication token = (SyncAuthentication) arg0;
		String userName = token.getPrincipal().toString();
		String password = token.getCredentials().toString();		
		try {
		        Authentication respToken = callLoginService(  
                       userName, password, token);
			return respToken;
		} catch (Exception e) {
			logger.error("Salesforce authentication failed : " + 
                       e,e);
			token.setAuthenticated(false);
		}
		return token;
	}

	private Authentication callLoginService(String userName,
               String password, SyncAuthentication token) throws Exception {
		Map<String, Object> authDetails = token.getAuthContextParams();
		//ConsoleConfigProperties props = ConsoleConfigProperties
                 .getInstance();
		String propURN = authDetails.get("namespace").toString();
               //props.getPropertyValue("salesforce.namespace");
		String URN = (propURN!=null?propURN:"urn:partner
               .soap.sforce.com");
		try {
			//Preparing the SOAP request
			SOAPMessage message = MessageFactory.newInstance()
                       .createMessage();
			SOAPBody body = message.getSOAPBody();
			SOAPEnvelope envelope = message.getSOAPPart()
                       .getEnvelope();
			Name bodyElement = envelope.createName
                      ("login", "urn", URN);
			SOAPBodyElement loginElement = body.addBodyElement
                       (bodyElement);			
			Name user = envelope.createName("username"
                       , "urn", URN);
			loginElement.addChildElement(user).addTextNode
                       (userName);
			Name pass = envelope.createName("password"
                       , "urn", URN);
			loginElement.addChildElement(pass)
                       .addTextNode(password);
			//Setting the login soap action
			message.getMimeHeaders().addHeader("SOAPAction",
                        URN + "/Soap/loginRequest");
			//Connection to invoke the login service
			SOAPConnectionFactory soapConnectionFactory =
                        SOAPConnectionFactory.newInstance();
			SOAPConnection connection =
                        soapConnectionFactory.createConnection();

			String salesforceURL = authDetails.get("url")
                        .toString();//props.getPropertyValue          
                       ("salesforce.url");			
			URL endpoint = new URL(salesforceURL != null 
                       ?salesforceURL:  
                       "https://login.salesforce.com/services/Soap/u/25.0");
			SOAPMessage response = 
			connection.call(message, endpoint);
			connection.close();
			//response.writeTo(System.out);
			NodeList nodeList = response.getSOAPBody()
                       .getElementsByTagNameNS(URN, "sessionId");
			if(nodeList.getLength() == 0){
				SOAPFault fault = response.getSOAPBody(
                               ).getFault();
				throw new Exception("Error while Salesforce 
                               Login :" + fault.getFaultString());
			}
			//System.out.println(nodeList
                         .item(0).getTextContent());
			NodeList urlList = response.getSOAPBody()
                       .getElementsByTagNameNS(URN, "serverUrl");
			NodeList emailList = response.getSOAPBody()
                       .getElementsByTagNameNS(URN, "userEmail");
			Map<String, Object> ctxParams = new HashMap
                       <String, Object>();
			//Adding SessionId in context so that webservice 
                         mapping can use for mapping
			ctxParams.put(SourceValue.SESSION\_ID.toString(),
                       nodeList.item(0).getTextContent());
			// Overriding the endpoint url by setting the 
                          middleware config parameter
			ctxParams.put("endpointUrl", urlList.item(0)
                       .getTextContent());
			//USER\_EMAIL and USER\_PASSWORD are used to create 
                         the user in the sync console
			ctxParams.put("USER\_EMAIL", emailList.item(0)
                       .getTextContent());
			ctxParams.put("USER\_PASSWORD",
                        SALESFORCE\_DUMMY\_PASSWORD);
			//List<GrantedAuthority> authorityList 
                         = new ArrayList<GrantedAuthority>();
			//authorityList.add(new GrantedAuthorityImpl
                         ("ROLE\_USER"));
			//If any context parameters need to pass to   
                        sync services then create the SyncAuthentication instance    			    	
			SyncAuthentication responseToken = 
                       new SyncAuthentication(token.getPrincipal(), 
                       token.getCredentials(), null);
			responseToken.setAuthContextParams(ctxParams);
			return responseToken;
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
			throw e;
		}
	}
}
{% endhighlight %}
