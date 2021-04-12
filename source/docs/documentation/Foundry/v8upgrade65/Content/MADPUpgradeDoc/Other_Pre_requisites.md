---
layout: "documentation"
category: "v8upgrade65"
---
                          

[![](../Resources/Images/pdf.png)](http://docs.voltmx.com/voltmxlibrary/beta/v8upgrade65.pdf "VoltMX Foundry UpgradeHUB Guide")


### Upgrade Guidelines

*   If the application is using a combination of flex and box layouts within the same form, this must be changed. This combination is strictly not supported in 7.x versions. You must ensure that flex forms have only flex constructs and box forms have only box constructs. From tooling this combination was never allowed, but if your app is dynamically adding box layouts into flex or vice versa, then these would cause runtime issues and potential crashes. It is recommended that you change such instances, if any.
*   Raw bytes APIs have been unified. If the app is using rawbytes to store or pass rawbytes directly into the local/data storage APIs, then you must change the code. It is now mandatory that you actually convert the rawbytes to base64 (using voltmx.convertToBase64 api) and vice versa using (voltmx.convertToRawBytes).
*   The iOS splash screen now supports different screen resolutions. It is mandatory that the developer provides for all resolutions if he is using splash screen as a part of his application even if they were not given in the previous version of the app.
*   Legacy Studio generates functions when actions are defined using the action editor. The name of the function is not an exposed API. If applications have taken a dependence on these names, then you must ensure that you avoid it as these names will be different post the upgrade. This will result in the app not being launched or functions going missing.
*   If the application is using a segment/scroll container within the header/footer templates, then this combination is no longer supported in 7.x versions. Post the upgrade, you must change the form to Flex form, along with other widgets in it to Flex and use a flex container with segment/flex scroll and position using the positional parameters of the flex.
*   SPA and Desktopweb have the validation of duplicate widget IDs even during run time. Errors are thrown on the console if the application is using duplicate widget IDs.
*   Due to security reasons,.html rendering support has been removed for the Label widget. For example, label.text = .html> is not supported.
*   Post 7.x for SPA and Desktopweb, Jetty server has been discontinued and node js server has been used instead. To test the SPA/Desktopweb application locally, you need to enable CORS on the Foundry instance where the services are hosted.
*   The servicedef.xml contains a list of services used in Foundry app. The services in the file can be edited and renamed. Manual edit/ accidental changes leads to duplication of service IDs which is not recommended. The servicedef.xml must not contain duplicate service ID’s.
*   There are few composite services which internally call integration/object services. In few cases, the servicedef.xml file may not contain the integration/object service which is being called by the composite service.
*   Many kinds of connectors/services can be defined in the servicedef.xml file. Java is one of the service for which you need to mention the class for execution. You must upload a jar in the Server which contains the required class defined in servicedef.xml.  
      
    In few cases, wrong jar files are uploaded to server or the Jar does not contain the class defined in servicedef.xml which results in error.  
    
*   ControllerDef.xml file contains all the connectors like JSON/JAVA/XML and the classes which must be invoked when you use any one of the service. These are VoltMX's default classes. But replacing those classes with their custom classes may lead to issues.
*   There is a default class for MWServlet which must be used while using middleware/VoltMX Foundry. But replacing that class with their own class may lead to many problems during upgrade.
