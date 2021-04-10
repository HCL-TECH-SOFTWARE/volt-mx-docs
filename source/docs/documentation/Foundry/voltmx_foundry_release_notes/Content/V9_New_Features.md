---
layout: "documentation"
category: "voltmx_foundry_release_notes"
---
                          

Volt MX  Foundry V9 Release Notes
===============================

In this release, the following features have been either introduced or enhanced to provide a better Volt MX Foundry experience.

Console
-------

*   **Introduced Workflow**
    
    From Volt MX Foundry V9, Volt MX introduces a BPMN 2.0 compliant visual workflow editor as a Foundry back-end service. Workflow provides a simplified low code approach for server-side business processes to create an application workflow. The server-side workflow supports features like validation rules for changing states, setting security policies, updating third party systems, and sending user notifications.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Workflow.html).
    
*   **Introduced Rules as a Service**
    
    From Volt MX Foundry V9, Volt MX introduces Rules as a first-class service in Foundry. You can create new Rules services and invoke them from the client app or integrate them with workflow for a conditional logic. Rule logic can be configured and updated at run-time from a business administration application.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Rules_as_a_Service.html).
    
*   **Added a File Services adapters for AWS S3 and Cloudian.**
    
    From Volt MX Foundry V9, new Adapters for working with files in AWS S3 and Cloudian Storage have been added. These adapters can be invoked by the clients to securely upload/download content per user/group into a mounted drive on the client's premises or on the Cloud.
    
    For more information about AWS S3 adapter, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/AWS_S3_Adapter.html) and for Cloudian adapter, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Cloudian_Adapter.html).
    
*   **Added support to generate Object model by importing an MS Excel file for Storage.**
    
    From Volt MX Foundry V9, developers can create data model for objects in an Object Service by using the column data in MS Excel.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/ObjectsServices/Storage_ObjectServices.html).
    
*   **Enhanced the Open API service definition**
    
    From Volt MX Foundry V9, added the ability to modify the host URL and the base path during the Open API service definition. Reconfiguration of host URL and base path has also been added.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Open_API__Swagger_.html).
    
*   **Introduced Feature level access (Custom Access)**
    
    From Volt MX Foundry V9, you can define granular access to specific features of your Foundry Cloud environment, such as the ability to build only Client App, ability to access only App Services, ability to access only the Engagement services, or only the Logging Console, and so on. The Feature Level Access Permissions (Custom Access) functionality is supported only for Foundry Cloud.
    
    *   **Added support for a Build Client App only feature**
        
        The Build Client App feature allows developers to build apps by pointing to a production environment from Volt MX Iris, without the ability to publish any services or access to the Foundry admin console. This effectively works like a read-only role for the app developers.
        
    
    For more information about these features, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Settings_Cloud.html#users-cloud).
    
*   **Added an Operation Security level**
    
    From Volt MX Foundry V9, you can select **Private** as the Operation Security level to indicate that the current operation will be accessible only by other operations or services in the same account.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/XML.html).
    
*   **Support for primary and secondary App Key and App Secret.**
    
    Enhanced the security in the Volt MX app by adding support for primary and secondary app key and app secret. The primary and secondary keys are packaged with the web and native channels respectively when their apps are built-in Volt MX Iris.
    
    *   **Added ability to rotate App Keys**
        
        Different app keys are packaged for the web and native channels respectively with the ability to rotate keys.
        
        For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/SeparateAppKey-Secret.html).
        
*   **Simplified the object model definition - field names and types**.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/ObjectsServices/Stage_2.html#creating-objects-39-definition-and-map-to-back-end-objects-manually).
    
*   **Added support for Enumeration Datatype**
    
    The enum data type field restricts app users to enter only the pre-configured list of details as the input for that field.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/ObjectsServices/enumDatatypes.html).
    
*   **Added support to configure certain fields in Objects to be read-only.**
    
    You can configure the fields in a data model of Object Services as read-only fields. These locked fields cannot be modified by other users on the Foundry.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Lock_Unlock_Fields_ObjectServices_MFCLI.html).
    
*   **Added the ability to define multiple Pre-Processors and Post-Processors for services.**
    
    You can now define multiple pre-processors and post-processors for services to make the custom code modular and extendible.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Custom_Code_for_Invoking_Integration_from_pre-post-java.html).
    
*   **Added support for sending push notifications to EAS**
    
    EAS has been enhanced to leverage the Volt MX Engagement Services for sending manual push messages to all registered devices, or to a subset of devices, based on the device ID.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/PushNotificationsEas.html).
    
*   **Added support to create the app service document based on the alias hostname**.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Publish_LifeCycle.html#app-service-document-object-services-metadata-and-sync-client-code).
    
*   **Added support to download the reconfigurations made to an app before publishing.**
    
    From Volt MX Foundry V9, when an app has been reconfigured before publishing, the reconfiguration information is available for viewing from the app publish Snapshots.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Publish_LifeCycle.html).
    
*   **Added support for import and export of configurable server/client parameters (App Services) through MFCLI.**
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Export_Import_Configuration_Parameters_AppServices_MFCLI.html).
    
*   **Added an adapter for sending emails with attachments using signed S3 URLs from server-side.**
    
    From Volt MX Foundry V9, the Foundry server leverages Volt MX Engagement Services for sending the emails.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Email_Adapter.html).
    

Identity
--------

*   **The design time Identity provider data has been moved into Workspace.**
    
    From Volt MX Foundry V9, the design time configuration data for Identity Services is stored in Workspace. With this enhancement the Identity Server no longer stores the design time configuration data and only stores the runtime configuration once the Identity Service is published.
    
*   **Added concurrency options for Identity services**
    
    Options have been added to the Identity services to allow users to control the desired behavior for concurrent logins.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/ConcurrentUserLogins.html).
    
*   **Enhanced OIDC compliance for OAuth provider.**
    *   OpenID Connect support has been added to the OAuth Provider identity service.
    *   The Introspection API has been introduced to check the validity of the specified tokens.
    *   The Discover API has been added to obtain information about the provider configuration.
    *   Support to use the refresh token has been added. The refresh token can be used to obtain a new access token and a new ID token.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Identity11_OAuth.html).
    
*   **Added support for the parameter prompt**
    
    From Volt MX Foundry V9, parameter prompt has been added as part of OIDC authorization to improve the logout flow while using the OAuth Provider.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Identity11_OAuth.html).
    
*   **Restrict Identity services for server-to-server access**
    
    From Volt MX Foundry V9, to differentiate the security mechanisms between client-to-server and server-to-server communication, the ability to restrict Identity services for the server-to-server communication has been provided.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Identity2_MS_AD.html).
    
*   **Enhanced the Custom Identity Adapter**
    
    From Volt MX Foundry V9, the custom identity adapter has been enhanced for supporting additional pass-through endpoints like user attributes, security attributes, and Multi-Factor Authentication (MFA).
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Identity8_VoltMX_Custom.html#custom-identity-service).
    
*   **Added support for Sign-Up in Volt MX User Repository**
    
    From Volt MX Foundry V9, the Sign-up option allows you to sign-up or register to an application by using your email ID. You do not require an admin to add to you to the user repository.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/sign-Up_User_Flow.html).
    
*   **The Single Sign-On option is now available in Volt MX Iris**
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/single_Sign-On.html).
    

Integration Server
------------------

*   **Enhanced RDBMS adapter by adding Transaction Manager**
    
    From Volt MX Foundry V9, you can access external databases using a developer written query. Support for transactions has been added by providing the Transaction Manager. The user interface is simplified to configure Relational Database Services.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Custom_Code_for_Invoking_Integration_from_pre-post-java.html).
    
*   Simplified user experience for defining **Relational Database connectors**.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Relational_Database_Adapter.html).
    
*   **Added support for writing SQL query for Database adapter.**
    
    From Volt MX Foundry V9, the Database adapter can be used to access external databases with a direct developer written query. This provides more granular access to the database.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Relational_Database_Adapter.html).
    
*   **Improved the Service Definition UI of the RDBMS adapter**
    
    The User Interface of the RDBMS adapter's Service Definition page is improved for better user experience. From Volt MX Foundry V9, the Database Driver Class and Connection URL boxes will have pointers on how to fill these parameters.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Relational_Database_Adapter.html).
    
*   **Server-side events**
    
    From Volt MX Foundry V9, developers can create or listen to events from Foundry services, request or response or custom code.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/ServerEvents.html).
    
*   **Monitoring for Server-side events**
    
    Added monitoring for server-side events in the Integration Server Admin console.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/vmf_integrationservice_admin_console_userguide/Content/Server_Events_Monitoring.html).
    
*   **Added support for managing the response received from the server while configuring the Open API Service.**
    
    From Volt MX Foundry V9, you can view the response parameters in a tree structure and select the required response parameters that the client app is expecting from the service.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Open_API__Swagger_.html).
    
*   **Added support to use Hard Delete option using the X-VoltMX-Soft-Delete header parameter for Storage Services, in the App Services Console.**
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/ObjectsServices/Objectservices_Stage1.html).
    
*   **Added support for adding more than one base jar while configuring a Java Service.**
*   **Performance enhancements for metadata browsing in SAP JCo Connector**.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/SAP_JCO.html).
    
*   **Added Throttling configuration**
    
    Added a field in Admin Console > Runtime Configuration to configure the throttling at service operation level.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/vmf_integrationservice_admin_console_userguide/Content/Runtime_Configuration.html).
    
*   **Added support for File Storage Configuration in Runtime Configuration.**
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/vmf_integrationservice_admin_console_userguide/Content/Runtime_Configuration.html#file-storage-configuration).
    
*   **Added the ability to define a custom quartz expression while defining a schedule for a job.**
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/vmf_integrationservice_admin_console_userguide/Content/Jobs.html#schedule).
    
*   **Added the ability to mask the value in the Server properties of Configurable Parameters.**
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/vmf_integrationservice_admin_console_userguide/Content/Configurable_Parameters.html).
    
*   **Added the ability to access Enterprise App Store from Desktop Web**
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/EnterpriseAppStore.html).
    
*   **Enhanced the Enterprise App Store app with a help feature to configure an iOS profile**.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/EnterpriseAppStore.html#trust-ios-certificates).
    
*   **Enhanced the API Proxy adapter to support HTTP Integrity**.

Offline Objects
---------------

*   Added support for **Hierarchical Uploads** for the Web platform.  
    
*   The **Offline Objects** and **Generating Models’** features are now available in Iris.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/offline_objects_user_guide/Content/Offline_Objects_with_Generated_Object_Models.html).
    
*   Added object-level support for clearing the offline data.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/offline_objectsapi_reference_guide/Content/Object_clearOfflineData.html).
    

Volt MX  Foundry SDK
------------------

*   **Added WebSocket APIs to support Server Events.**
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/VoltMXStudio/ServerEventAPIs.html).
    
*   **Added Server Events APIs support in Iris.**
    
    Added support to enable or disable Server Events APIs from the Project Settings in Volt MX Iris.
    

Analytics
---------

*   **Export Standard Reports in Excel format**
    
    Added support to export standard chart-based reports in excel format.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/standard_metrics_reports_guide/Content/Configure_Standard_Reports.html).
    
*   **Enhanced Volt MX Foundry Mobile App**
    
    Added support to install a new version app link while launching the Volt MX Foundry Mobile App. Deprecating support to the older version of Volt MX Foundry Mobile App.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_Foundry_analytics_mobile_app/Content/FoundryMobileApp.html).
    
*   **Added support to upgrade the custom metrics component.**
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_windows_install_guide/Content/CustomMetrics.html).
    
*   **Added the On-Premise support for collecting metrics for child services of Integration / Orchestration services and Offline Objects.**
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/custom_metrics_and_reports/Content/Creating_a_Custom_Report.html).
    
*   **Added the ability to download the complete crash log from the Application Error Detail Report on Cloud**.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/standard_metrics_reports_guide/Content/VoltMX_Analytics_-_Standard_Reports/Events_and_User_journey_reports.html#application-error-detail).
    
*   **Performed stability enhancements on Standard Reports Dashboard to ensure that a crash in one report does not result in a crash of the whole dashboard**.

Engagement Services
-------------------

*   **Added support for Application API key to enhance security**
    
    Added support to enable the use of a static key approach to send push notifications to an associated app via the engagement console and APIs. This static key can also be used to invoke other non-app specific APIs if the user has the correct set of permissions.
    
    Added APIs for the creation, modification, and the deletion of the App API key. For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/engagement_api_guide/Content/APIs_for_VoltMX_Messaging_Services/Authentication_API.html#x-volt-mx-app-api-key).  
    
    Enhanced the console to support the management of the App API key feature. For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/vms_console_user_guide/Content/Apps/AppAPIKey.html#Archival).
    
*   **Enhancement of the Email API**
    *   Enhanced the email API to use **templates** to send emails.
    *   Added the ability to send email **attachments** using the Email API.
    *   Added support to **download a file from a signed URL** and send it as an email attachment.
    
    For more information about these enhancements, click [here]({{ site.baseurl }}/docs/documentation/Foundry/engagement_api_guide/Content/REST_API_Email/EmailAPIs.html).
    
    *   Enhanced the console to support the sending of attachments in Emails. For more information about this, click [here]({{ site.baseurl }}/docs/documentation/Foundry/vms_console_user_guide/Content/Administration/Email_Configuration.html).
*   **Enhancement of the Push API**
    
    Enhanced the Push API to return user-defined key value pairs in the payload. Added custom parameters to the Fetch Push API.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/engagement_api_guide/Content/Push_Message_APIs/Fetch_All_Messages_from_VoltMX_Foundry_Engagement.html).
    
*   **Added Support for Salesforce SMS Aggregator**
    
    Added support for the Salesforce SMS aggregator to send SMS messages in the Console.
    
    Enhanced existing APIs to support the creation and the management of the Salesforce SMS aggregator.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/vms_console_user_guide/Content/Administration/SMS_Configuration.html#salesforce).
    
*   **Added the ability to send an SMS and an email without having an audience member in the Engagement server.**
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/engagement_api_guide/Content/REST_API__SMS/SMS_API_without_Audience_Member_Registration.html).
    
*   **Added support for the silent and web push messages when a combination of native and web subscriptions is chosen.**
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/vms_console_user_guide/Content/Adhoc/General_Channel_Type_Push_Message.html#silent-push).
    
*   **Deprecated Blackberry related code, UI features, and subscriptions.**

Installer
---------

*   **Added support for new versions of software and deprecated support for a few software.**
    
    *   Volt MX Foundry installer is bundled with an updated version of Tomcat 9.0.33.
    *   Volt MX Foundry installer is bundled with an updated version of JBoss 7.2.
    *   Volt MX Foundry V9 uses Java 11, hence WebLogic and WebSphere are not supported till they release newer versions which support Java 11.
    *   Added beta support for WebSphere Liberty Profile through the Command Line Installer Tool.
    *   Support for deploying Foundry using Docker containers has been added for MacOS. The on-prem installer for MacOS has been deprecated.
    *   Support for installing Volt MX Foundry on MySQL 8.0.16, Oracle 18.c (18.3).
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmxfoundry_supported_devices_os_browsers/Content/Introduction.html).
    

### Containers Solution (On Premises)

*   **Enhanced the installation to support the new version of Kubernetes Software**
    
    From Volt MX Foundry V9, the Volt MX Foundry Container Cluster Solution provides a flexible and scalable solution for deploying Volt MX Foundry on your On-Premises setup, including scaling the installation to multi-node systems and robust logging capabilities.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmxfoundry_containers_solution_on-prem/Content/Introduction.html).
    

### Cloud Installer on MS Azure

*   Added Azure Redis Cache support for Identity Server.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmxfoundry_on_azure/Content/VoltMX_Foundry_on_Azure.html#redis_cache).
    
*   Added support for configuring auto-scalability for cluster.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmxfoundry_on_azure/Content/Appendices.html#aks-autoscaling).
    
*   Added support for configuring geographically redundant backup.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmxfoundry_on_azure/Content/VoltMX_Foundry_on_Azure.html#Geo).
    
*   Added support for Service Principle Object ID.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmxfoundry_on_azure/Content/VoltMX_Foundry_on_Azure.html#servicePObj).
    
*   Enhanced steps to use the Kubernetes Dashboard.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmxfoundry_on_azure/Content/Appendices.html#kubernetes-dashboard).
    
*   Added support for Pod anti-affinity.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmxfoundry_on_azure/Content/Appendices.html#pod-anti-affinity).
    
*   Added support for the Azure File Share feature.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmxfoundry_on_azure/Content/Appendices.html#configure-backup-and-restore-for-azure-file-share).
    

App Factory
-----------

*   **Build and publish Apps across clouds and cloud accounts using App Factory.**
    
    From Volt MX Foundry V9, you can build and publish apps across clouds and cloud accounts using App Factory. Allows you to build and publish apps to Docker images and Azure Cloud from the App Factory console.
    
*   Run your **Jasmine test scripts on App Factory**  for Native apps, Responsive web apps, and Progressive web apps as part of your build process on native devices or on the latest Google Chrome browser.
    
    *   Receive comprehensive results from each Jasmine Test run via email or review your test in App Factory’s testing console.
    *   The Jasmine testing framework is incompatible with the Cordova and web browser widgets with this release.
    *   The Jasmine testing framework cannot test OAuth based logins with this release.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_appfactory_user_guide/Content/TestingAnAppJasmine.html).
    
*   Details to avoid deleting the `jenkins_github_ssh-certificates`, `jenkins_github_ssh-volt-mx-common`, and `jenkins_github_ssh-volt-mx-jenkins-job-DSL` SSH credentials have been provided, as they are system driven.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_appfactory_user_guide/Content/Working_with_AppFactory.html).
    
*   **The Cloud Build and App Factory analytics have been moved into metrics DB.**
*   **Improved the user interface for builds.**
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_appfactory_user_guide/Content/Configuration.html).
    
*   **Improved result emails including build notes generated from git commits.**
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_appfactory_user_guide/Content/BuildingAnApp.html).
    
*   **Added support for generating the 32 bit binaries and x86 architecture supported binaries.**
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_appfactory_user_guide/Content/Configuration.html).
    
*   **Added support for generating Android App Bundle binary.**
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_appfactory_user_guide/Content/Configuration.html).
