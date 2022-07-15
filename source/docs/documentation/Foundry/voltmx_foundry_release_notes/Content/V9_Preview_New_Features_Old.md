---
layout: "documentation"
category: "voltmx_foundry_release_notes"
---
                          

Volt MX  Foundry V9 Preview Release Notes
====================================

With this release, Volt MX Foundry introduces a set of incremental features described below. These features can be used with Iris V8 as well as the future release of V9 GA. The release of V9 Preview can be treated as laying the foundation of V9 GA, that will include additional Volt MX Foundry features. The V9 GA release is targeted for end of the first quarter of 2020 and you can view our [V9 Roadmap webinar on Basecamp](https://support.hcltechsw.com/csm) for more details.

Console
-------

*   **Feature level access**
    
    Admins can restrict access to specific features of the Foundry environment, such as the App Services, Engagement services, Logging Console, etc.
    
    *   **Added support for a Build Client App only feature**
        
        The Build Client app role allows developers to build apps by pointing to a production environment from Volt MX Iris, without the ability to publish any services or access to the Foundry admin console. This effectively works like a read-only role for app developers.
        
    
    For more information about these features, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Settings_Cloud.html#users-cloud).
    
*   **Enhanced the security in the Volt MX app by adding support for primary and secondary appkey and appsecret.**
    
    The primary and secondary keys are packaged with the web and native channels respectively when their apps are built in Volt MX Iris.
    
    *   **Added ability to rotate appkeys**
        
        Different appkeys for web and native with the ability to rotate keys.
        
        For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/SeparateAppKey-Secret.html).
        
*   **Added support for the parameter prompt**
    
    As part of OIDC authorization to improve the logout flow while using the OAuth Provider.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Identity11_OAuth.html).
    
*   **Added support for sending push notification to EAS**
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/PushNotificationsEas.html).
    
*   Added support to create the app service document based on the **alias hostname**.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Publish_LifeCycle.html#app-service-document-object-services-metadata-and-sync-client-code).
    
*   Added support to access **custom features** of Volt MX Foundry environments.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Settings_Cloud.html#users-cloud).
    
*   Simplified the object model definition - **field names and types**.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/ObjectsServices/Stage_2.html#creating-objects-39-definition-and-map-to-back-end-objects-manually).
    
*   Support to generate **Object model by importing an MS Excel file** for Storage.
    
    Developers can create data model for objects in an Object Service by using the column data in MS Excel.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide#ObjectsServices/Storage_ObjectServices.html).
    
*   Added support to download the reconfigurations made to an app before publishing.
    
    When an app has been reconfigured before publishing, the reconfiguration information is available for viewing from App publish snapshots.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Publish_LifeCycle.html).
    
*   Added support for import and export of configurable server/client parameters (App Services) through MFCLI.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Export_Import_Configuration_Parameters_AppServices_MFCLI.html).
    

Identity
--------

*   **Restrict Identity services for server-to-server access**
    
    To differentiate the security mechanisms between client-to-server and server-to-server communication, the ability to restrict Identity services for the server-to-server communication has been provided.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Identity2_MS_AD.html).
    
*   **Enhanced the custom identity adapter**
    
    For supporting additional pass-through endpoints like user attributes, security attributes, and Multi Factor Authentication (MFA).
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Identity8_VoltMX_Custom.html#custom-identity-service).
    
*   **Added support for Sign-Up in Volt MX User Repository**
    
    The Sign-up option allows the user to sign-up or register to the application by using their e-mail ID.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide#sign-Up_User_Flow.html).
    
*   **Added concurrency options for Identity services**
    
    Options have been added to the Identity services to allow users to control the desired behavior for concurrent logins.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/ConcurrentUserLogins.html).
    
*   **The Single Sign-On option is available in Volt MX Iris**
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/single_Sign-On.html).
    

Offline Objects
---------------

*   Added support for **Hierarchical Uploads** for the Web platform.  
    
*   The **Offline Objects** and **Generating Models’** features are available in Iris.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/offline_objectsapi_reference_guide/Content/Offline_Objects_with_Generated_Object_Models.html).
    
*   Added object-level support for clearing the offline data.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/offline_objectsapi_reference_guide/Content/Object_clearOfflineData.html).
    

Analytics
---------

*   **Export Standard Reports in Excel format**
    
    Added support to export standard chart-based reports in excel format.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/standard_metrics_reports_guide/Content/Configure_Standard_Reports.html).
    
*   Added support to install a new version app link while launching the Volt MX Foundry Mobile App. Deprecating support to the older version of Volt MX Foundry Mobile App.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_Foundry_analytics_mobile_app/Content/FoundryMobileApp.html).
    
*   Added support to upgrade custom metrics component.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_windows_install_guide/Content/CustomMetrics.html).
    
*   Added the On-Premise support for collecting metrics for child services of Integration/Orchestration services and offline objects.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/custom_metrics_and_reports#Creating_a_Custom_Report.html).
    

App Factory
-----------

*   **Build and publish Apps** across clouds and cloud accounts using App Factory.
    
    Allow users to build and publish apps to Docker images and Azure cloud from the App Factory console.
    
*   Run your **Jasmine test scripts on App Factory**  for Native apps, Responsive web apps, and Progressive web apps as part of your build process on devices or on the latest Google Chrome browser.
    
    *   Receive comprehensive results from each Jasmine Test run via email or review your test in App Factory’s testing console.
    *   The Jasmine testing framework is incompatible with the Cordova and web browser widgets with this release.
    *   The Jasmine testing framework cannot test OAuth based logins with this release.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_appfactory_user_guide/Content/TestingAnAppJasmine.html).
    

Admin Console
-------------

*   Added support for **File Storage Configuration** in Runtime Configuration.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/vmf_integrationservice_admin_console_userguide/Content/Runtime_Configuration.html).
    

Engagement Services
-------------------

*   **Added support for Application API key to enhance security**
    
    Added new APIs for the creation, modification, and the deletion of the App API key. For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/engagement_api_guide/Content/engagement_api_guide.html).  
    
    Enhanced the console to support the management of the newly added App API key feature. For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/vms_console_user_guide/Content/Apps/AppAPIKey.html).
    
*   **Enhancement of the Email API**
    
    Enhanced the email API to use templates to send emails.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/engagement_api_guide/Content/REST_API_Email/Email_API_With_Audience_Id___Email.html).
    
*   **Enhancement of the Push API**
    
    Enhanced the Push API to return user-defined key value pairs in the payload.
    
*   **Added Support for Salesforce SMS Aggregator**
    
    Added support for the new Salesforce SMS aggregator to send SMS messages in the Console.
    
    Enhanced existing APIs to support the creation and the management of the Salesforce SMS aggregator.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/vms_console_user_guide/Content/Administration/SMS_Configuration.html#salesforce).
    
*   **Added custom parameters to the Fetch Push API**
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/engagement_api_guide/Content/Push_Message_APIs/Fetch_All_Messages_from_VoltMX_Foundry_Engagement.html).
    

Installer
---------

*   **Support for New Versions of Software**
    
    Volt MX Foundry V9 installer supports new versions of several required software.
    
    *   Volt MX Foundry installer is bundled with an updated version of Tomcat 9.0.29.
    *   Volt MX Foundry installer is bundled with an updated version of JBoss 7.2.
    *   Support for WebLogic and WebSphere servers has been deprecated.
    *   Support for installing Volt MX Foundry on MySQL 8.0.16, Oracle 18.c (18.3).
    *   Support for installing Volt MX Foundry on MacOS has been deprecated.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmxfoundry_supported_devices_os_browsers/Content/Introduction.html).
    

Cloud Installer on MS Azure
---------------------------

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
