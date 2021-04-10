---
layout: "documentation"
category: "voltmx_foundry_release_notes"
---
                          

Volt MX  Foundry V9 Preview Release Summary
======================================

With this release, Volt MX Foundry introduces a set of incremental features described below. These features can be used with Iris V8 as well as the future release of V9 GA. The release of V9 Preview can be treated as laying the foundation of V9 GA, that will include additional Volt MX Foundry features. The V9 GA release is targeted for end of the first quarter of 2020 and you can view our [V9 Roadmap webinar on Basecamp](https://support.hcltechsw.com/csm) for more details.

Console
-------

*   **Feature level access**
    
    Admins can restrict access to specific features of the Foundry environment, such as the App Services, Engagement services, Logging Console, etc.
    
    *   **Added support for a Build Client App only feature**
        
        The Build Client app role allows developers to be able to build apps by pointing to a production environment from Volt MX Iris, without the ability to publish any services or access to the Foundry admin console. This effectively works like a read-only role for app developers.
        
*   **Enhanced the security in the Volt MX app by adding support for primary and secondary appkey and appsecret.**
    
    The primary and secondary keys are packaged with the web and native channels respectively when their apps are built in Volt MX Iris.
    
    *   **Added ability to rotate appkeys**
        
        Different appkeys for web and native with ability to rotate keys.
        
*   **Added a new Operation Security level**
    
    Select **Private** from the Operation Security level to indicate that the current operation will be accessible only by other operations or services in the same account.
    
*   **Added support for the parameter prompt**
    
    As part of OIDC authorization to improve the logout flow while using the OAuth Provider.
    
*   **Added support for sending push notification to EAS**
*   Added support to create the app service document based on the **alias hostname**.
*   Added support for **Enumeration Datatype**.
*   Added support to access **custom features** of Volt MX Foundry environments.
*   Simplified the object model definition - **field names and types**.
*   Support to generate **Object model by importing an MS Excel file**, for Storage.
    
    Developers can create data model for objects in an Object Service by using the column data in MS Excel.
    
*   Added support to download the reconfigurations made to an app before publishing.
    
    When an app has been reconfigured before publish the reconfiguration information is available for viewing from App publish snapshots.
    
*   Added support for import and export of configurable server/client parameters (App Services) through MFCLI.

Identity
--------

*   **Restrict Identity services for server-to-server access**
    
    To differentiate the security mechanisms between client-to-server and server-to-server communication, the ability to restrict Identity services for the server-to-server communication has been provided.
    
*   **Enhanced the custom identity adapter**
    
    For supporting additional pass-through endpoints like user attributes, security attributes, and Multi Factor Authentication (MFA).
    
*   **Added support for Sign-Up in Volt MX User Repository**
    
    The Sign-up option allows the user to sign-up or register to the application by using their e-mail ID.
    
*   **Added concurrency options for Identity services**
    
    Options have been added to the Identity services to allow users to control the desired behavior for concurrent logins.
    
*   **The Single Sign-On option is available in Volt MX Iris**

Offline Objects
---------------

*   Added support for **Hierarchical Uploads for the Web platform**
*   The **Offline Objects** and **Generating Models’** features are available in Volt MX Iris
*   Added object-level support for clearing the offline data.  
    

Analytics
---------

*   **Export Standard Reports in Excel format**
    
    Added support to export standard chart-based reports in excel format.
    
*   Added support to install a new version app link while launching the Volt MX Foundry Mobile App. Deprecating support to the older version of Volt MX Foundry Mobile App.
*   Added the On-Premise support for collecting metrics for child services of Integration/Orchestration services and offline objects.

Integration Server
------------------

*   Added support to use **Hard Delete** option using the **X-VoltMX-Soft-Delete** header parameter for Storage Services, in the App Services Console.
*   Added support for **Transaction Manager** to execute a sequence of RDBMS operations.
*   Added support for managing the response received from the server while configuring the **Open API Service**.
    
    You can view the response parameters in a tree structure and select the required response parameters that the client app is expecting from the service.
    
*   Added support for adding more than one base jar while configuring a Java Service.
    *   Performance enhancements for **metadata browsing in SAP JCo Connector**.
    *   Simplified user experience for defining Relational Database connectors.
*   **Server-side events**
    
    Added support for server-side events. Developers can create or listen to events from Foundry services, request or response or custom code
    
*   Added support for **writing SQL query for Database adapter**.
    
    Database adapter can now be used to access external databases with a direct developer written query. This provides more granular access to the database.
    
*   **Improved the Service Definition UI of the RDBMS adapter**
    
    The User Interface of the RDBMS adapter's Service Definition page is improved for better user experience. The Database Driver Class and Connection URL boxes will now have pointers on how to fill these parameters.
    
*   **Added Throttling configuration**
    
    Added a field in Admin Console > Runtime Configuration to configure the throttling at service operation level.
    
*   **Monitoring for Server-side events**
    
    Added monitoring for Server-side events in Integration Server Admin console.
    

App Factory
-----------

*   **Build and publish Apps** across clouds and cloud accounts using App Factory.
    
    Allow users to build and publish apps to Docker images and Azure cloud from the App Factory console.
    
*   Run your **Jasmine test scripts on App Factory**  for Native apps, Responsive web apps, and Progressive web apps as part of your build process on devices or on the latest Google Chrome browser.
    *   Receive comprehensive results from each Jasmine Test run via email or review your test in App Factory’s testing console.
    *   The Jasmine testing framework is incompatible with the Cordova and web browser widgets with this release.
    *   The Jasmine testing framework cannot test OAuth based logins with this release.

Engagement Services
-------------------

*   **Added support for Application API key to enhance security**
    
    Added new APIs for the creation, modification and deletion of the App API key
    
    Enhanced the console to support the management of the newly added App API key feature.
    
*   **Enhancement of the Email API**
    
    Enhanced the email API to use templates to send emails.
    
*   **Enhancement of the Push API**
    
    Enhanced the Push API to return user defined key value pairs in the payload.
    
*   **Added Support for Salesforce SMS Aggregator**
    
    Added support for the new Salesforce SMS aggregator to send SMS messages in the Console.
    
    Enhanced existing APIs to support the creation and the management of the Salesforce SMS aggregator.
    
*   **Added custom parameters to the Fetch Push API**
