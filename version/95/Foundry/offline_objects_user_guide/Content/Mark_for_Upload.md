
Volt MX  Offline Objects User Guide: [Advanced Features](Advanced_Features.md) > Mark for Upload

Mark for Upload
===============

Mark for Upload feature defers the sync operation of local operations. All local operations (CRUD) are selected to be uploaded to the server, by default. Hence, set the MarkforUpload flag to False to defer the sync operation.

Consider a field-service based app in which, you have captured various stages of an entity that is not ready to be uploaded to the server. To stall its sync operation, you can set the **markForUpload** parameter to False. By doing so, this entity does not sync with the server. Now, when it is ready to be uploaded to the server, set the **markForUpload** flag to True.
