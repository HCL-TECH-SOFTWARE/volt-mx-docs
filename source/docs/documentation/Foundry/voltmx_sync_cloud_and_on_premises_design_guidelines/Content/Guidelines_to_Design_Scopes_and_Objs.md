---
layout: "documentation"
category: "voltmx_sync_cloud_and_on_premises_design_guidelines"
---
                           


Guidelines to Design SyncScopes and SyncObjects
===============================================

While designing SyncScope and SyncObject, as a developer, you should ensure the SyncObject model represents what the application needs and is not a blind replica of the Enterprise Backend model. Do not define the attributes that you never use in the application as a part of the SyncObject. Define only those tables or business objects in the SyncConfiguration that you actually use in the application.

You should make the objects that share similar DataSource and similar synchronization characteristics as part of the same SyncScope. Synchronization characteristics include how frequently the data changes on the device and the backend.
