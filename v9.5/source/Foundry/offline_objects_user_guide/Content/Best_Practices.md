


Best Practices
==============

*   Object names across the offline enabled object services must be unique.
    *   Tables created on the device while setting up the sync environment do not handle duplicate names.
*   Gateway Request Timeouts
    *   Volt MX Cloud Gateway on AWS imposes a request timeout of 30 seconds, by default. This can be extended to 60 seconds with the help of a cloud support ticket.
    *   It means every upload or download request must finish within 60 seconds.
    *   Implement the recommendations made under Syncing large data sets for overcoming this issue.
*   Offline Objects work with both the project formats of Iris (that is Free-Form and Reference Architecture).
    
    *   Offline objects APIs work in both the project types. However, the generated code for models supports limited functionality.
    
    *   While using generated models, we recommended you to use the [Offline Object APIs](../../../Foundry/offline_objectsapi_reference_guide/Content/Introduction.md) in conjunction with the [generated models](Offline_Objects_with_Generated_Object_Models.md) in order to utilize the full functionality of the generated models and the Offline Object APIs.
*   Duplicate Records
    *   If the data runs into a request time-out, the client may sync the same data multiple times. In this case, the data is sent to the back end but the client does not receive a response. This might result in creating duplicate records.
        
        To overcome this issue, use the [Upload Cache](Upload_Cache.md) feature.
        
*   If there is an ongoing sync session for an entity, another sync session for the same entity is not allowed to prevent potential data inconsistencies.
*   Background Sync in the latest versions of iOS
    *   The latest versions of iOS impose [background execution](https://developer.apple.com/library/archive/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/BackgroundExecution/BackgroundExecution.md) limits on the background apps. To enable the background sync, follow the procedure described [here](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0083492).
*   In the case of a composite primary key, only one of the primary keys can be auto-generated.
*   Multi-parent hierarchical uploads are not supported.
*   Auto-generated primary keys of the type, String are not supported.
*   Device-side encryption cannot be enabled on the existing sync environment. It should be enabled during the initial setup or by resetting the device by using the [reset](Drop_Reset__and_Rollback.md) API.
*   Relationships between objects that belong to different object services are not supported on the device’s Read API.
*   Syncing to database views as the backend is not supported.
*   Batching support for RDBMS is available from V8 SP4 April FP Foundry release.
*   Limit the size of a single record to 1 MB or less due to the following reasons:
    
    *   SQLite fails to read records larger than 1MB from the device database.
    
    *   We recommend to save binary content as a file on the filesystem and its path in the database column instead of saving the entire content as a base64 encoded string into the database column.
*   The collection/array of records is not supported in sync flows between the Volt MX Foundry server and the back end.
*   Use [Progress Callbacks](Sync_Progress_Events.md) to update UI of progress in sync because users typically expect visual feedback of the long-running processes. Further, this provides stats of the sync process, providing info of the data synced.
*   If minor data model changes do not need the client app updates, use the [incrementalSetup](IncrementalSetup.md) feature.
