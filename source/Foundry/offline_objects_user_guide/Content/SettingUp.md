
Setting up the Sync Environment
===============================

You must set up the sync environment on the device before using the Offline Objects feature. The first setup requires network connectivity. Setup fetches the metadata of the offline enabled object services that are linked to the Foundry app. After fetching the metadata, it creates the required object tables in SQLite for the native channels (Android, iOS, and Windows) and in IndexedDB for Web channels.

You must invoke the setup API on every app launch before using the offline objects APIs. After the sync environment is created, the subsequent invocation of setup loads the metadata from the device database into memory. Hence, network connectivity is not mandatory.

The subsequent invocations of the setup API do not incorporate the latest changes made to the offline enabled object services. If you want the local sync environment to fetch the latest metadata, you can use either the [reset](../../../Foundry/offline_objectsapi_reference_guide/Content/OfflineObjectReset.md) API or the [incrementalSetup](../../../Foundry/offline_objectsapi_reference_guide/Content/incrementalSetup.md) API.

*   The reset API recreates the client’s sync environment based on the latest metadata fetched from the Foundry app
    
    > **_Note:_** If the pending changes are not synchronized to the server before invoking the reset API, this reset might result in data loss.
    
*   The incrementalSetup API incorporates minor changes to the device database’s schema without any data loss.

> **_Note:_** If you want to encrypt the device database in the relevant [Application-level](../../../Foundry/offline_objectsapi_reference_guide/Content/Application_Level_APIs.md) API calls, supply the deviceDbEncryptionKey option. The encryption of the device database should be done while it is being created. You cannot encrypt the database after it is created.
