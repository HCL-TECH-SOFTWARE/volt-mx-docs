                          

New Features in V8 SP2
======================


<details close markdown="block"><summary>Console</summary>

*   Added support for versioning of Volt MX Foundry applications. For more information, refer [Volt MX Foundry Application Versioning](../../../../Foundry/voltmx_foundry_user_guide/Content/App_Versioning.md).    
*   Added support for viewing the published applications from the Environment page. For more information, refer [Viewing Applications Published to a Runtime Environment](../../../../Foundry/voltmx_foundry_user_guide/Content/Published_Apps-Environments.md).
    
*   Added support to improve the testing experience for Integration Service. For more information on new testing experience, refer [Integration Service Designer](../../../../Foundry/voltmx_foundry_user_guide/Content/Services.md#IntSD).
    
*   Added support for testing API proxy connector and importing API Proxy operations from an OpenAPI (Swagger) file. For more information, refer [Adding API Proxy](../../../../Foundry/voltmx_foundry_user_guide/Content/Services.md#AddingAPIProxy).
    
*   Publish reconfiguration support is extended to all Integration services. For more information, refer [Application Reconfiguration](../../../../Foundry/voltmx_foundry_user_guide/Content/App_ReConfig.md).
    
*   Added support that enables users with "Report Full Access" to run the reports without accessing the cloud.
    

</details>
<details close markdown="block"><summary>Offline Objects</summary>

*   Integrated offline enabled Objects API access through MVC models.
    
*   Added support for Service-Driven Objects (SDO) for Offline Objects. For more information, refer [Support for SDO from Offline Objects](../../../../Foundry/voltmx_foundry_user_guide/Content/ObjectsServices/Objectservices_Stage3.md#mapping-verbs-for-objects-for-service-driven-objects).
    
*   Added support for Sync Config Policies (Upload/Download). For detailed information, refer [Sync Configuration Policies](../../../../Foundry/offline_objects_user_guide/Content/SyncConfigPolicies.md).
    
*   Added support to download the binary data. For detailed information on downloading binary data, refer [Object getBinary](../../../../Foundry/offline_objectsapi_reference_guide/Content/ObjectgetBinary.md).
    
*   Added support to disable change tracking. For API information, refer [Offline Objects API Reference Guide](../../../../Foundry/offline_objectsapi_reference_guide/Content/Offline_Objects_API_Reference.md).
    
*   Added support to mark records for upload. For information on Mark for Upload API, refer [Object Mark for Upload](../../../../Foundry/offline_objectsapi_reference_guide/Content/Object_markForUpload.md).
    
*   Offline Objects support incremental metadata support. For information on Incremental setup API, refer [Object Incremental Setup](../../../../Foundry/offline_objectsapi_reference_guide/Content/Incremental_Setup.md).
    
*   Added support for cancelSync API. For API information, refer [Offline Objects API Reference Guide](../../../../Foundry/offline_objectsapi_reference_guide/Content/Offline_Objects_API_Reference.md).
    
*   Offline Objects now support upload cache. For information on Upload Cache, refer [Configuring Offline Objects Services Server](../../../../Foundry/offline_objects_gettingstarted/Content/offline_objects_server.md).
    
*   Offline Objects provide batching support for hierarchical data. For more information, refer [Batching Support .](../../../../Foundry/offline_objects_gettingstarted/Content/Batching.md)
    

</details>
<details close markdown="block"><summary>Volt MX Foundry SDK</summary>

*   Added binary support for S3 and File System (via NFS drive). For more information, refer [Binary APIs](../../../../Foundry/voltmx_foundry_user_guide/Content/VoltMXStudio/Binary_APIs.md).
    
*   Ability to cache the response of an Integration/Object/Identity/Logic Service is provided.
    
*   Added support to fetch client app properties configured in App Services.
    

</details>
<details close markdown="block"><summary>Identity</summary>

*   Added support to publish different identity service configurations to different environments in an account. . If you are accessing identity services directly, refer [Publishing of identity services to different environments](../../../../Foundry/voltmx_foundry_user_guide/Content/Publish.md) for additional parameters that needs to be passed.
    
*   Added support to HTTP message body integrity from Volt MX Foundry. For more information, refer [How to enable HTTP Message Body Integrity](../../../../Foundry/voltmx_foundry_user_guide/Content/ServiceConfig-Identiy-Apps.md).
    

</details>
<details close markdown="block"><summary>Accounts/Metrics</summary>

*   Added Web Application Firewall (WAF) support to Volt MX Foundry products.
    
*   Added support to optimize data load logic to increase performance.
    

</details>
<details close markdown="block"><summary>Integration</summary>

*   Enabled the support for testing services in Volt MX Foundry Starter Edition.
    
*   Added throttling support for [Object](../../../../Foundry/voltmx_foundry_user_guide/Content/ObjectsServices/Objectservices_Stage1.md#objectsthrottling) and [Orchestration](../../../../Foundry/voltmx_foundry_user_guide/Content/Orchestration.md#orchestthrottling) services.
    
*   Added support for dynamic loading of SSL certificates. For more information on SSL, refer [SSL Certificates](../../../../Foundry/vmf_integrationservice_admin_console_userguide/Content/SSL_Certificates.md).
    
*   Introduced real-time server monitoring in App Services. For more information, refer [Service Monitor](../../../../Foundry/vmf_integrationservice_admin_console_userguide/Content/Service_Monitor.md).
    
*   Enabled safe JavaScript in Volt MX Foundry Community Edition.  
    
*   Provision to access Identity scope parameters in Java and JavaScript Integration services. For more information, refer [Integration](../../../../Foundry/voltmx_foundry_user_guide/Content/Services.md).
    
*   Provision to enable General Data Protection Regulations (GDPR) of EU in App Services. For GDPR settings, refer [GDPR Policy](../../../../Foundry/vmf_integrationservice_admin_console_userguide/Content/Runtime_Configuration.md).  
    
*   Excel based modifiable CSV data files are exported from storage services.
    
*   Significant Improvement in publishing performance and added support of zero downtime during publishing.
    

</details>
<details close markdown="block"><summary>Installer</summary>

*   Offline Sync features are now available with Integration component using Offline Objects. For more information, refer [Offline Objects Getting Started Guide](../../../../Foundry/offline_objects_gettingstarted/Content/Offline_Objects_Getting_Started.md). Sync Services is deprecated as a separate component, and will be unselected by default in the Install Components Screen.
    
*   The new version of Apache Tomcat v8.5.28 is bundled with the installer. The new Tomcat version addresses security concerns highlighted in [http://tomcat.apache.org/security-8.html#Fixed\_in\_Apache\_Tomcat\_8.5.28](http://tomcat.apache.org/security-8.html#Fixed_in_Apache_Tomcat_8.5.28).
    
*   New version of Websphere v9 is supported for remote deployments.
    

</details>
<details close markdown="block"><summary>Management</summary>

*   Enterprise Appstore for Volt MX Foundry Community edition.
    
*   Automate JAR generate to do away with JAR commits for Launchpad.
    

</details>
<details close markdown="block"><summary>Engagement</summary>

*   Added support for cloud push processing optimizations.
    
*   **Importing Events** - The new feature enables the admin to perform insert, update/insert, and delete all & insert of events in Volt MX Engagement Server. The feature helps the user to do a bulk import of events (for Cloud version only).
    
*   **Retain Event Registration ID** - While importing events, the new feature enable to retain the existing event ID (19 digits) in the system if needed (for Cloud version only).
    
*   **Importing Templates (Push, SMS, email, and Pass)** - The new feature enables the admin to perform insert, update/insert, and delete all and insert of templates in Volt MX Engagement Server. The feature helps the user to do a bulk import of templates (for Cloud version only).
    
*   **Role-based Custom Attribute Creation Permission** - The user can add a custom user attribute only if the Admin has assigned the following permissions (for Cloud version only):
    
    *   ROLE\_CONFIGURATIONS
        
    *   ROLE\_CREATE\_ATTRIBUTES
        
*   SQL performance enhancements in Engagement server (cloud and on-prem).
    

</details>
<details close markdown="block"><summary>App Factory</summary>

*   Added support for Custom Hooks. For more information, refer [Running CustomHooks](../../../../Foundry/voltmx_appfactory_user_guide/Content/CustomHooks.md).
    
*   Added capabilities for better debugging. For more information, refer [Troubleshooting](../../../../Foundry/voltmx_appfactory_user_guide/Content/Troubleshooting.md).
