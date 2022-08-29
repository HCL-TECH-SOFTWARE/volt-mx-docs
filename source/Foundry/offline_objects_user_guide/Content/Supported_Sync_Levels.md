

Supported Synchronization Levels
================================

The ability to sync data at an appropriate scope or level should be determined based on the volume of data to be downloaded and user scenarios. For example, consider that an object-service contains two objects or entities. If one of them has the read-only content such as steps to perform for a given task, sync operation at the object-service level could be redundant due to the read-only nature of the data. Performing sync operation at the desired object-level also improves the user experience because only the desired object’s data is downloaded. In contrast, executing the sync operation at an object-service level results in fetching data for all the objects of that object-service, which can be time-consuming and may not be required for the current user scenario.

Offline Objects support the following levels of synchronization.

*   [Objects Level](../../../Foundry/offline_objectsapi_reference_guide/Content/Object_Level.md)
*   [Object-Service Level](../../../Foundry/offline_objectsapi_reference_guide/Content/Object_Service_Level.md)
*   [Application Level](../../../Foundry/offline_objectsapi_reference_guide/Content/Application_Level_APIs.md)
