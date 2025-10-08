
Drop, Reset, and Rollback APIs
==============================

A device might contain outdated data due to various reasons such as the device being in the offline mode for too long, backend data getting refreshed, and task re-assignment. Drop, Reset and Rollback are the three application-level APIs that help you to resolve the scenarios mentioned. These APIs can be used to reset the downloaded data on the device as follows.

*   Drop API clears the entire database from the devices and recreates the sync environment based on the current object service schema.
*   Reset API clears the device database and retains the tables.
*   Rollback API reverts the changes done to the device database through CRUD operations. This API rolls back the changes that are not yet uploaded to the backend and resets the device’s database to the previous successful sync state.

For more information about these APIs, refer to the [Offline Objects API Reference Guide](../../../Foundry/offline_objectsapi_reference_guide/Content/Offline_Objects_API_Reference.md?TocPath=_____1).

Consider a field-service based app for which, you are assigned to attend to inspection requests of a different region than you usually do. Now, in order to clear the previous region’s database from the device, you can either use the drop API or the reset API. Now, while working on the inspection requests of the currently assigned region, you might make a few changes to the local device records. In this due course, if you had sent incorrect information and want to restore the previous data records, you can use the rollback API.
