
Clear Offline Data
==================

Offline Objects provides different types of data reset capabilities that let you build robust use cases. The ability to clear data on the local device database falls into the following categories:

*   Reset or rollback records with pending changes in the device.
*   Delete records or empty tables.

If you want to revert local changes, use the rollback API. This API resets the records with local changes to the previous sync state. It provides the undo capability on local or pending changes. This functionality is available at various sync scopes.

If you want to drop the entire data from the tables and resynchronize it, use the clearOfflineData API. For example, in a field-service based app, when a field inspector is assigned a new task, he/she will need to clear the previous task’s data. Similarly, the ability to clear and resynchronize specific tables allows you to share devices across multiple users. This lets you carry out user-specific business activities in an organization.

For more information about clear offline data, refer to the [Offline Objects API Reference Guide](../../../Foundry/offline_objectsapi_reference_guide/Content/Offline_Objects_API_Reference.md).
