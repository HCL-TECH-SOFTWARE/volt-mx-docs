


Performance Tuning
==================

Knowledge about the following areas helps in designing applications that are optimized for offline and sync scenarios:

*   Key application scenarios
*   Approximate data size to sync
*   Type of payloads

HCL recommends the following features to improve sync performance.

*   **Incremental Sync**
    
    Define the Change Tracking property for every object or table of an object-service in the Foundry app. By doing so, subsequent sync operation only fetches the records that were modified since the last sync.
    
*   **Downloading the Relevant Data**
    
    Use [downloadRequestQueryParams](../../../Foundry/offline_objectsapi_reference_guide/Content/ObjectService_startSync.md) and [filters](../../../Foundry/offline_objectsapi_reference_guide/Content/ObjectService_startSync.md) appropriately to download the relevant data on to the device such as downloading data for a specific user, location, or time range. Ensure to use appropriate sync type to skip non-relevant synchronization steps. For example, you can skip the download step for a table meant for only storing the created invoices and uploading them to the back end.
    
*   Use an appropriate batch size (number of records) in the upload and download requests based on the data size. If the back end supports hierarchical data, define relationships between objects and use the hierarchical uploads feature.
*   Instead of always triggering a sync process at the application-level (for all object services), use an appropriate scope and initiate the sync process. For example, you can trigger the sync process for those objects that are relevant to the current user scenario. Syncing at an object scope also allows you to skip objects that contain read-only data such as catalogs and manuals.
*   Decouple binary content from records.
*   Do not download binary content such as images as part of records. Keep the records simple and download the binary content outside of the sync API. For example, use the [getBinaryContent](../../../Foundry/voltmx_foundry_user_guide/Content/ObjectsAPIReference/OnlineObjectService_Class.md) API for downloading the base64 content from RDBMS/SAP and [getBinaryData](../../../Foundry/voltmx_foundry_user_guide/Content/VoltMXStudio/Binary_APIs.md) API to download from S3. You can mark the fields containing binary data as a blob in the Foundry app such that these fields are not downloaded to the device, by default.

For more information, refer to the [Offline Objects - Best Practices](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0083494) article.
