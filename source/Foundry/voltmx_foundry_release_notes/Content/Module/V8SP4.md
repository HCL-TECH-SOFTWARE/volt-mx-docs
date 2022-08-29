                          

Volt MX  Foundry - V8 Service Pack 4
===============================

Volt MX  releases Service Packs bundled with latest plugins based on quarterly updates to a major version. The Service Packs contains consolidated fixes and minor features.

The following sections contain New Features, Fixed Issues, and Known Issues for the Volt MX Foundry V8 Service Pack 4 release information:

*   [New Features in V8 SP4](#new-features-in-v8-sp4)
*   [Performance Enhancements in V8 SP4](#performance-enhancements-in-v8-sp4)
*   [Fixed Issues in V8 SP4](#fixed-issues-in-v8-sp4)
*   [Known Issues in V8 SP4](#known-issues-in-v8-sp4)

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
    
*   Extended Support for ODATA methods such as **substringof**, **tolower**, **toupper**, **startswith**, and **endswith**.
*   Added ability to service monitor feature to send alerts via email if the performance of service degrades in terms of either percentage of errors, count of errors, or response time to a custom set of users. Different thresholds can be set for sending warnings and critical alert emails. Admin can choose the list of users and frequency for sending alerts.  
    For more information on this feature, click [here](../../../../Foundry/vmf_integrationservice_admin_console_userguide/Content/Monitoring.md#threshold).
*   You can now choose specific services from apps or app versions to add to the Developer Portal.  
    For more information on this feature, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/VoltMXDevPortal.md).
*   Added support for native app binary publish from Iris into EAS (iOS and Anroid).
    
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

Performance Enhancements in V8 SP4
==================================

Console and Runtime
-------------------

*   Enhanced delete operation in Object and Integration services to include filter-based deletions.
*   Enhanced the performance of trace logs and added the ability to auto-delete logs older than a certain time, and manually delete logs based on time.  
    For more information on this feature, click [here](../../../../Foundry/vmf_integrationservice_admin_console_userguide/Content/Trace_Logs.md#clear).
*   Enhanced Logs UI in the Admin Console.

Engagement
----------

*   Performance Enhancements in Cancel Message Flow.
*   Optimizations in Push Message Archival.
*   Optimizations in Daily Subscribers Report in Dashboard.
*   Enhanced overall stability.

Identity
--------

*   Enhanced support for identity reconfiguration to allow reuse of the same Identity service with configuration changes across different clouds.  
    For more information on this feature, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/Identity_ReConfig.md).
*   Enhanced custom Identity service by providing a hook-in that is invoked after the creation of an identity session.  
    For more information on this feature, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/Identity8_VoltMX_Custom.md).
*   Built-in user store has been enhanced by adding a new feature called access levels.  
    For more information on this feature, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/UserRepositoryIdentityService.md).

Offline Objects
---------------

*   Enhanced support for Web channel.
*   Enhanced download performance based on criteria.

App Factory
-----------

*   Enhanced Device Farm efficiency by using custom build mode up to 50%.
*   In Build Results Email Notifications, KAR file link is added as an artifact for the iOS channels builds. This artifact is shared if the build fails during IPA generation in CI pipeline. This helps you test the KAR file locally for debugging iOS build failures. KAR artifact is displayed only if the IPA build fails and KAR build succeeds.
*   The Foundry environment details that you selected during the build trigger event are included in Build Results Email Notifications. This helps you to track the environment that you have selected for a specific build.
*   Provided an option to download Console logs for a build.
    
    *   Navigate to **Project** > **Iris** > **Builds** > **buildIrisApp** **(or Channels > specific job)** > **select specific build** > **Console Output** > **View as plain text**. Right click and select Save as to download the Console log for a specific build.
    *   Similarly, Navigate to **Project** > **Iris** > **Tests** > **runTests** (or **Channels > specific job**) > **select specific build** > **Console Output** > **View as plain text**. Right click and select Save as to download the Console log for a specific test build.  
        
    
    These log files are also present in the `MustHave.zip`. If the build fails, the link to download the MustHaves is present under the **build-ID** in the Build History section.

Fixed Issues in V8 SP4
======================

Engagement
----------

*   Miscellaneous bug fixes.

Identity
--------

*   Fixed an issue where a Token Expired exception occurs while using a native application continuously for more than 15-20 minutes.
*   Fixed an issue where calling services from the Admin Console causes an error at the Gateway if the token did not contain app attributes. The service now populates the token with mock app attributes if there is no app associated with it. These attributes are only used to populate the metrics data and does not cause other issues.
*   Even after you have logged out of the application, the Claims token works until the cache expires.
*   The INTEGRITY\_KEY header must be added to Response when the integrity header value in the Request passes the validation.
*   Updated the bouncycastle to `1.59` and xmlsec to `1.5.6` due to security recommendations.
*   The **HttpOnly** parameter is missing in a few authService cookies.

Known Issues in V8 SP4
======================

Engagement
----------

*   It is not possible to add a title for Rich Push Template, even though the option to save Rich Push Template with title is provided.

Identity
--------

*   OAuth Provider type is not displayed under **Data Panel** > **Project Services**.
*   In the **Manage App Store Users** window, the **App Store** link navigates to the wrong link.
*   It is not possible to import more than 100 different groups via CSV import of users.

Volt MX  Foundry SDK
---------------

*   Login fails with an invalid SSO error, even after providing the correct user id and password.
