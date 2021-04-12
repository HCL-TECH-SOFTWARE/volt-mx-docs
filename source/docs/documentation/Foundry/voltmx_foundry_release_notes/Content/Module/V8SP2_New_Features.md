---
layout: "documentation"
category: "voltmx_foundry_release_notes"
---
                          

New Features in V8 SP2
======================

[![Closed](../../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[Console](javascript:void(0);)

*   Added support for versioning of Volt MX Foundry applications. For more information, refer [Volt MX Foundry Application Versioning]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/App_Versioning.html).    
*   Added support for viewing the published applications from the Environment page. For more information, refer [Viewing Applications Published to a Runtime Environment]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Published_Apps-Environments.html).
    
*   Added support to improve the testing experience for Integration Service. For more information on new testing experience, refer [Integration Service Designer]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Services.html#IntSD).
    
*   Added support for testing API proxy connector and importing API Proxy operations from an OpenAPI (Swagger) file. For more information, refer [Adding API Proxy]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Services.html#AddingAPIProxy).
    
*   Publish reconfiguration support is extended to all Integration services. For more information, refer [Application Reconfiguration]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/App_ReConfig.html).
    
*   Added support that enables users with "Report Full Access" to run the reports without accessing the cloud.
    

[![Closed](../../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[Offline Objects](javascript:void(0);)

*   Integrated offline enabled Objects API access through MVC models.
    
*   Added support for Service-Driven Objects (SDO) for Offline Objects. For more information, refer [Support for SDO from Offline Objects]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/ObjectsServices/Objectservices_Stage3.html#mapping-verbs-for-objects-for-service-driven-objects).
    
*   Added support for Sync Config Policies (Upload/Download). For detailed information, refer [Sync Configuration Policies]({{ site.baseurl }}/docs/documentation/Foundry/offline_objects_user_guide/Content/SyncConfigPolicies.html).
    
*   Added support to download the binary data. For detailed information on downloading binary data, refer [Object getBinary]({{ site.baseurl }}/docs/documentation/Foundry/offline_objectsapi_reference_guide/Content/ObjectgetBinary.html).
    
*   Added support to disable change tracking. For API information, refer [Offline Objects API Reference Guide]({{ site.baseurl }}/docs/documentation/Foundry/offline_objectsapi_reference_guide/Content/Offline_Objects_API_Reference.html).
    
*   Added support to mark records for upload. For information on Mark for Upload API, refer [Object Mark for Upload]({{ site.baseurl }}/docs/documentation/Foundry/offline_objectsapi_reference_guide/Content/Object_markForUpload.html).
    
*   Offline Objects support incremental metadata support. For information on Incremental setup API, refer [Object Incremental Setup]({{ site.baseurl }}/docs/documentation/Foundry/offline_objectsapi_reference_guide/Content/Incremental_Setup.html).
    
*   Added support for cancelSync API. For API information, refer [Offline Objects API Reference Guide]({{ site.baseurl }}/docs/documentation/Foundry/offline_objectsapi_reference_guide/Content/Offline_Objects_API_Reference.html).
    
*   Offline Objects now support upload cache. For information on Upload Cache, refer [Configuring Offline Objects Services Server]({{ site.baseurl }}/docs/documentation/Foundry/offline_objects_gettingstarted/Content/offline_objects_server.html).
    
*   Offline Objects provide batching support for hierarchical data. For more information, refer [Batching Support .]({{ site.baseurl }}/docs/documentation/Foundry/offline_objects_gettingstarted/Content/Batching.html)
    

[![Closed](../../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[Volt MX Foundry SDK](javascript:void(0);)

*   Added binary support for S3 and File System (via NFS drive). For more information, refer [Binary APIs]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/VoltMXStudio/Binary_APIs.html).
    
*   Ability to cache the response of an Integration/Object/Identity/Logic Service is provided.
    
*   Added support to fetch client app properties configured in App Services.
    

[![Closed](../../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[Identity](javascript:void(0);)

*   Added support to publish different identity service configurations to different environments in an account. . If you are accessing identity services directly, refer [Publishing of identity services to different environments]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Publish.html) for additional parameters that needs to be passed.
    
*   Added support to HTTP message body integrity from Volt MX Foundry. For more information, refer [How to enable HTTP Message Body Integrity]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/ServiceConfig-Identiy-Apps.html).
    

[![Closed](../../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[Accounts/Metrics](javascript:void(0);)

*   Added Web Application Firewall (WAF) support to Volt MX Foundry products.
    
*   Added support to optimize data load logic to increase performance.
    

[![Closed](../../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[Integration](javascript:void(0);)

*   Enabled the support for testing services in Volt MX Foundry Starter Edition.
    
*   Added throttling support for [Object]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/ObjectsServices/Objectservices_Stage1.html#objectsthrottling) and [Orchestration]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Orchestration.html#orchestthrottling) services.
    
*   Added support for dynamic loading of SSL certificates. For more information on SSL, refer [SSL Certificates]({{ site.baseurl }}/docs/documentation/Foundry/vmf_integrationservice_admin_console_userguide/Content/SSL_Certificates.html).
    
*   Introduced real-time server monitoring in App Services. For more information, refer [Service Monitor]({{ site.baseurl }}/docs/documentation/Foundry/vmf_integrationservice_admin_console_userguide/Content/Service_Monitor.html).
    
*   Enabled safe JavaScript in Volt MX Foundry Community Edition.  
    
*   Provision to access Identity scope parameters in Java and JavaScript Integration services. For more information, refer [Integration]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Services.html).
    
*   Provision to enable General Data Protection Regulations (GDPR) of EU in App Services. For GDPR settings, refer [GDPR Policy]({{ site.baseurl }}/docs/documentation/Foundry/vmf_integrationservice_admin_console_userguide/Content/Runtime_Configuration.html).  
    
*   Excel based modifiable CSV data files are exported from storage services.
    
*   Significant Improvement in publishing performance and added support of zero downtime during publishing.
    

[![Closed](../../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[Installer](javascript:void(0);)

*   Offline Sync features are now available with Integration component using Offline Objects. For more information, refer [Offline Objects Getting Started Guide]({{ site.baseurl }}/docs/documentation/Foundry/offline_objects_gettingstarted/Content/Offline_Objects_Getting_Started.html). Sync Services is deprecated as a separate component, and will be unselected by default in the Install Components Screen.
    
*   The new version of Apache Tomcat v8.5.28 is bundled with the installer. The new Tomcat version addresses security concerns highlighted in [http://tomcat.apache.org/security-8.html#Fixed\_in\_Apache\_Tomcat\_8.5.28](http://tomcat.apache.org/security-8.html#Fixed_in_Apache_Tomcat_8.5.28).
    
*   New version of Websphere v9 is supported for remote deployments.
    

[![Closed](../../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[Management](javascript:void(0);)

*   Enterprise Appstore for Volt MX Foundry Community edition.
    
*   Automate JAR generate to do away with JAR commits for Launchpad.
    

[![Closed](../../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[Engagement](javascript:void(0);)

*   Added support for cloud push processing optimizations.
    
*   **Importing Events** - The new feature enables the admin to perform insert, update/insert, and delete all & insert of events in Volt MX Engagement Server. The feature helps the user to do a bulk import of events (for Cloud version only).
    
*   **Retain Event Registration ID** - While importing events, the new feature enable to retain the existing event ID (19 digits) in the system if needed (for Cloud version only).
    
*   **Importing Templates (Push, SMS, email, and Pass)** - The new feature enables the admin to perform insert, update/insert, and delete all and insert of templates in Volt MX Engagement Server. The feature helps the user to do a bulk import of templates (for Cloud version only).
    
*   **Role-based Custom Attribute Creation Permission** - The user can add a custom user attribute only if the Admin has assigned the following permissions (for Cloud version only):
    
    *   ROLE\_CONFIGURATIONS
        
    *   ROLE\_CREATE\_ATTRIBUTES
        
*   SQL performance enhancements in Engagement server (cloud and on-prem).
    

[![Closed](../../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[App Factory](javascript:void(0);)

*   Added support for Custom Hooks. For more information, refer [Running CustomHooks]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_appfactory_user_guide/Content/CustomHooks.html).
    
*   Added capabilities for better debugging. For more information, refer [Troubleshooting]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_appfactory_user_guide/Content/Troubleshooting.html).
