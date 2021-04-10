---
layout: "documentation"
category: "voltmx_foundry_release_notes"
---
                          

Enhancements in Volt MX Foundry V9 Service Pack 1
================================================

In this release, the following features have been enhanced to provide a better Volt MX Foundry experience.

Console
-------

*   **File Service Adapters**
    
    From Volt MX Foundry V9 SP1, the File Service Adapters have been renamed as follows.
    
    *   **S3 File Storage** has been renamed to **AWS S3**.
    *   **Cloudian File Storage** has been renamed to **Cloudian**.
    
    For more information about the File Service adapters, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/FileServiceAdapters.html).
    

Integration Server
------------------

*   **Workflow**
    *   From Volt MX Foundry V9 SP1, the Workflow Audit history has been enhanced to display the Linked Object Primary Key. The number of columns for the Composite Primary Key will be dynamically generated, based on different object models with simple Primary Key and composite Primary Key.
    *   From Volt MX Foundry V9 SP1, the Workflow Instance ID has been added to middleware logs. This helps in improving debugging of service calls that are invoked via Workflow.
        
        For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/vmf_integrationservice_admin_console_userguide/Content/Workflow.html).
        
*   **Service Monitoring**
    
    *   From Volt MX Foundry V9 SP1, support has been added to display the parent service name along with the service and operation name in the Parent Service column for Foundry Service Performance measurement.
    *   Added support to display the **P90** and **P95** calculations for each of the categories in the Service Monitoring section in the Admin Console. This detail will be available in the exported CSV file.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/vmf_integrationservice_admin_console_userguide/Content/Monitoring.html#service).
    

Analytics and Metrics
---------------------

*   From Volt MX Foundry V9 SP1, a channel and platform input control support has been added to **Application Usage Detail** standard report to track the usage of application in any specific channel and platform.
    
    For more information, click [here]({{ site.baseurl }}/docs/documentation/Foundry/standard_metrics_reports_guide/Content/VoltMX_Analytics_-_Standard_Reports/Application_activity_Reports.html#application-usage-detail).
    
*   Enhanced the Metrics pipeline to encrypt personally identifiable information (PII) of a user based on the Protect PII setting or the country of origin.
    
    For more information, click [here]({{ site.baseurl }}/docs/documentation/Foundry/vmf_integrationservice_admin_console_userguide/Content/Runtime_Configuration.html).
    

Volt MX  Foundry SDK
------------------

*   **Updating a back-end environment**
    
    If the server URL has changed for the client, a manual update is needed to honor the updated back-end environment.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/VoltMXStudio/Initializing_VoltMX_JS_Client_SDK_Iris.html).
    
*   **Allowing the versioning of an application with updated artifacts**
    
    When the Iris app is linked with the Foundry app, it fetches the service doc and bundles it with the application. When the Foundry app is re-published and a call is made to the Identity Server, the SDK detects the changes. It replaces the bundled service doc with the new service doc.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/VoltMXStudio/Initializing_VoltMX_JS_Client_SDK_Iris.html).
    

Engagement Services
-------------------

*   **Enhanced Campaign creation by enabling checking of errors at each page**
    
    From Volt MX Foundry V9 SP1, the checking of any errors has been enabled in the current page for campaign creation and restart.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/vms_console_user_guide/Content/Campaigns/Adding_a_Campaign.html).
    
*   **Added the ability to create Engagement artifacts to support Volt MX App Versioning.**
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/vms_console_user_guide/Content/API_Versioning.html).
    
*   **Added support to associate the web subscriptions to a user in the Engagement server.**

Installer
---------

*   **Enhanced Volt MX Foundry on Azure**
    
    *   The architecture has been enhanced to reduce cost and improve security.
    *   The overall installation experience has been improved and now involves reduced user intervention.
    *   You can now access the AKS Cluster APIs of kubectl on specific IP addresses that are given by the admin.
    *   The resource allocation for pods has been tuned to improve performance and stability.
    *   The Redis cache for integration has been disabled.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmxfoundry_on_azure/Content/VoltMX_Foundry_on_Azure.html).
