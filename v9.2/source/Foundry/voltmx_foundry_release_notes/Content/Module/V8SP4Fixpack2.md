                           

Volt MX  Foundry V8 Service Pack 4 Fix Pack 2 (April FP)
===================================================

In this release, features were modified to provide an enhanced experience on Volt MX Foundry. The following are the new features introduced, enhancements added, and known issues.

*   [New Features](#new-features)
*   [Enhancements](#enhancements)
*   [Known Issues](#known-issues)

New Features
------------

### Console

*   A new option has been added to write custom pre-processors and post-processors by using Rules. Previously, only the Java and JavaScript code options were available in Console. For more information on this feature, [click here](../../../../Foundry/voltmx_foundry_user_guide/Content/Rules.md).

Enhancements
------------

### Console

*   Support for Clustered mode in MongoDB Adapter has been added. For more information on this feature, [click here](../../../../Foundry/voltmx_foundry_user_guide/Content/MongoDB_Adapter.md).
*   The Volt MX Foundry landing page has been simplified and enhanced. For more information on this feature, [click here](../../../../Foundry/voltmx_foundry_user_guide/Content/Adding_Applications.md).
*   Audit Logs have been enhanced with support for pagination and export options. For more information on this feature, [click here](../../../../Foundry/voltmx_foundry_user_guide/Content/Settings_Cloud.md#audit-logs-cloud).

### Integration Server

*   Performance enhancements have been added for Object Services.
*   Usability enhancements have been introduced for Service List.
*   Ability to export and import Configuration Parameters has been added. For more information on this feature, [click here](../../../../Foundry/vmf_integrationservice_admin_console_userguide/Content/Configurable_Parameters.md).
*   Ability to export and delete Orphan Storage Schemas has been added. For more information on this feature, [click here](../../../../Foundry/voltmx_foundry_user_guide/Content/ObjectsServices/Storage_ObjectServices.md#how-to-delete-unused-data-for-storage-object-services-using-the-app-services-console).
*   Out-of-the-box support for batching records has been added as part of Database Adapter for MySQL.
*   A sample app for managing data in Storage Objects has been developed to facilitate adding and editing data in Storage Objects without using APIs.

### Volt MX Enterprise App Store

*   Accessibility from Volt MX Foundry Console and Volt MX Iris to Enterprise App Store has been improved. For more information on this feature, [click here](../../../../Foundry/voltmx_foundry_user_guide/Content/EnterpriseAppStore.md#accessing-eas-app-link).
*   The UI to display a valid error message when a user tries to access an unpublished Enterprise App Store has been enhanced. For more information on this feature, [click here](../../../../Foundry/voltmx_foundry_user_guide/Content/EnterpriseAppStore.md#handling-eas-unavailability).

### Identity

*   Ability to [clone](../../../../Foundry/voltmx_foundry_user_guide/Content/UserRepositoryIdentityService.md#cloning-a-user-repository-identity-service) and [export](../../../../Foundry/voltmx_foundry_user_guide/Content/UserRepositoryIdentityService.md#exporting-users-from-a-user-repository) Users from the User Repository service has been added.
*   Ability to create a unique User Repository using the "User Repository" Identity Connector has been added. Out-of-the-box Volt MX User Repository service has been deprecated from this release. For more information on this feature, [click here](../../../../Foundry/voltmx_foundry_user_guide/Content/Identity12_VoltMXUR.md#user-repository-identity-service).

### Offline Objects and SDK

*   Support for Offline Objects has been improved in Windows 10 – Cancel Sync API. For more information on this feature, [click here](../../../../Foundry/offline_objectsapi_reference_guide/Content/Offline_Objects_API_Reference.md).
*   Support for Offline Objects has been enhanced in Desktop Web – Batching, Track Changes, App-level Sync, and Sync Policies. For more information on this feature, [click here](../../../../Foundry/offline_objectsapi_reference_guide/Content/Offline_Objects_API_Reference.md).
*   TLS 1.2 support for .NET SDK has been introduced. For more information on this feature, [click here](../../../../Foundry/voltmx_foundry_user_guide/Content/Windows/Prerequisites_windows.md).

### Analytics

*   Ability to differentiate between Interactive and Non-interactive sessions in Standard Reports has been added.

### Engagement

*   Support for the new FCM Notification and Data Message Android Payload formats along with backward compatibility (GCM v2) has been introduced. For more information on this feature, [click here](../../../../Foundry/vms_console_user_guide/Content/Administration/General_-_Settings.md#Payload).

### App Factory

*   Support for the latest version of Jenkins has been provided.
*   Support for cross-account publishing of Volt MX Foundry apps that allow a developer to deploy Volt MX Foundry apps from one cloud account to a different cloud account has been introduced.

Known Issues
------------

*   **Issue #1**
    
    Batch download of an empty table gives a JSONNullExpection.
    
    **Workaround**
    
    For batching to work in SDO, custom mapping should be explicitly written for the following batch parameters:
    
    *   nextBatchId
    *   hasMoreRecords
