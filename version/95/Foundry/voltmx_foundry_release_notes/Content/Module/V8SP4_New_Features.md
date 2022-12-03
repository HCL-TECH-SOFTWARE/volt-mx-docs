                           

New Features in V8 SP4
======================

Console and Runtime
-------------------

*   Added support for Mock JSON as a new adapter type for Integration services.  
    For more information on this feature, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/MockData_Adapter.md).
*   Added support for Audit logs for Foundry User Activity.  
    For more information on this feature, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/Settings_Cloud.md#audit-logs-cloud).
*   Added support for SAP JCO adapter as a new adapter for Integration services.  
    For more information on this feature, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/SAP_JCO.md).
*   Added support for pre-processor for Orchestration services.  
    For more information on this feature, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/Orchestration.md#Creating).
*   Added ability to test Orchestration services.  
    For more information on this feature, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/Test_an_Orechestration_Service_Operation.md).
*   Added support for Concurrent Looping in Orchestration services.
*   Added ability to add sample data for storage service.  
    For more information on this feature, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/ObjectsServices/Storage_ObjectServices.md).
*   Added support for reconfiguring schema name in Relational Database connector.  
    For more information on this feature, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/IntegrationReConfig.md#RDBMS).
*   Added ability to pin your favorite apps for Quick Access.
*   Added ability to export the list of users.  
    For more information on this feature, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/Settings_Cloud.md#export-users-of-account-to-excel-file).
*   Added support to configure custom SSL certs for community clouds.
*   Added API support for scheduling jobs to get details, update, delete, and get list.  
    For more information on this feature, click [here](../../../../Foundry/vmf_integrationservice_admin_console_userguide/Content/Job_Scheduling_APIs.md).
*   Extended Support for ODATA methods such as substringof, tolower, toupper, startswith, and endswith.
*   Added ability to service monitor feature to send alerts via email if the performance of service degrades in terms of either percentage of errors, count of errors, or response time to a custom set of users. Different thresholds can be set for sending warnings and critical alert emails. Admin can choose the list of users and frequency for sending alerts.  
    For more information on this feature, click [here](../../../../Foundry/vmf_integrationservice_admin_console_userguide/Content/Monitoring.md#threshold).
*   You can now choose specific services from apps or app versions to add to the Developer Portal.  
    For more information on this feature, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/VoltMXDevPortal.md).
*   Added support for native app binary publish from Iris into EAS (iOS and Android).
    
    *   You can now access EAS on web browsers on Mobile and Tablet devices.
    *   Use built-in user repository or connect to the existing enterprise user repository.
    *   Added a new simplified Enterprise App Store (EAS) Service built directly into the Volt MX Foundry run-time server.
    
    For more information on this feature, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/EnterpriseAppStore.md).

Engagement
----------

*   Provided support for Progressive Web App notifications.  
    For more Information on this feature, click [here](../../../../Foundry/vms_console_user_guide/Content/Apps/Web.md).
*   Provided support for stop and re-run existing campaigns.  
    For more Information on this feature, click [here](../../../../Foundry/vms_console_user_guide/Content/Campaigns/Restarting_a_Campaign.md).
*   Provided support for the creation of users with French characters in their names.
*   Provided support for the creation of a message template with a title.  
    For more Information on this feature, click [here](../../../../Foundry/vms_console_user_guide/Content/Message_Template/Adding_Message_Templates.md).
*   Provided support for the use of APNS token to send push messages.
*   Provided support for OS type-based segmentation for Push Notifications.  
    For more Information on this feature, click [here](../../../../Foundry/vms_console_user_guide/Content/Segments/Adding_a_Segment.md).
*   Added support for HTTP/2 protocol of APNS to send iOS push messages, which results in higher push throughput.  
    For more Information on this feature, click [here](../../../../Foundry/vms_console_user_guide/Content/Apps/Apple.md).
*   Added support for mutable-content tag, which was introduced by Apple in iOS 10.

Offline Objects
---------------

*   Added support for building Windows 10 apps.
*   Added object-level support for delete by criteria.  
    For more information on this feature, click [here](../../../../Foundry/offline_objectsapi_reference_guide/Content/ObjectDelete.md).
*   Added object-level support for update by criteria.  
    For more information on this feature, click [here](../../../../Foundry/offline_objectsapi_reference_guide/Content/ObjectUpdate.md).
*   Added support for application-level sync.  
    For more information on this feature, click [here](../../../../Foundry/offline_objectsapi_reference_guide/Content/OfflineObjectstartSync.md).
*   Added a new API to get a list of records pending for upload.  
    For more information on this feature, click [here](../../../../Foundry/offline_objectsapi_reference_guide/Content/ObjectgetPendingRecordsForUpload.md).
*   Added a new API to track the status of binary downloads.  
    For more information on this feature, click [here](../../../../Foundry/offline_objectsapi_reference_guide/Content/ObjectgetBinaryStatus.md).

Analytics
---------

*   Added support for getting performance data of services for component services for Orchestration and Object services.  
    For more information on this feature, click [here](../../../../Foundry/standard_metrics_reports_guide/Content/standard_metrics_reports_guide.md).
*   Added support for import of custom reports and custom dashboards by enabling the reuse of custom reports across various accounts.  
    For more information, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/Export_Import_Custom_Reports_Dashboards_MFCLI.md).
*   Added new out-of-the-box reports for Offline objects.  
    For more information on this feature, click [here](../../../../Foundry/standard_metrics_reports_guide/Content/Offline_Objects_Reports.md).

Volt MX  Foundry SDK
---------------

*   Ability to add field-level metadata in objects in Object service. The metadata can then be accessed from the client app of the Object Model via custom functions that are registered with generated models to run various custom logic, such as encryption and conversion.  
    For more information, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/DataEncryptionObjects.md).
*   Enhanced SSO support for Android and later versions.  
    For more information, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/Application_SSO.md#SSO_Permsns).

App Factory
-----------

*   Schedule Volt MX Foundry builds and migrations from one environment to another by using App Factory Scheduling.  
    For more information on this feature, click [here](../../../../Foundry/voltmx_appfactory_user_guide/Content/VoltMXFoundryTriggers.md).  
    
*   Customize the tests that are run from App Factory and their order by using Custom Testing settings.  
    For more information on how to configure your Custom Environment Build, click [here](../../../../Foundry/voltmx_appfactory_user_guide/Content/CustomTestEnvRun_RawMode.md).
*   Control the version of Appium that is used to test apps.  
    For more information on this feature, click [here](../../../../Foundry/voltmx_appfactory_user_guide/Content/Configuration.md#Appium).  
    
*   Added an ability to build Volt MX Foundry Cloud apps directly from Volt MX Iris.
