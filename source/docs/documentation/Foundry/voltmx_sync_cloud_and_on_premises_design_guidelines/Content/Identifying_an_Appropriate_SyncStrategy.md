---
layout: "documentation"
category: "voltmx_sync_cloud_and_on_premises_design_guidelines"
---
                           

Identifying an Appropriate SyncStrategy
=======================================

Deciding upon a SyncStrategy is one of the key architectural/design decisions that you need to make while developing any enterprise grade offline application. It is based on number of input parameters and system constraints. The following are some of the recommendations that can help you determine how to choose an appropriate strategy:

### OTA Sync Strategy

OTA Sync Strategy is a recommended solution when:

*   Enterprise backend is highly available to the Volt MX Foundry Sync Server.
    
*   The Enterprise backend can be provisioned or unprovisioned. Provisioned means, the typical database design patterns are followed, for example, tracking deletes through a soft delete flag and tracking lastupdated timestamp for each data item (or a table row). These elements are essential for OTA Sync as they are needed for sending appropriate updates back to the client database and keep the processing as low as possible on the VoltMXSync server.
    
*   The Enterprise backend can provide delta changes based on the last updated timestamp the devices send.
    
*   It is essential that the user gets access to the latest updates on the Enterprise backend every time the user performs sync.
    

### PersistentSync

PersistentSync is a recommended solution when:

*   The Enterprise backend is not highly available.
    
*   A scheduled system down time does not allow user to access the Enterprise backend (due to time zone differences).
    
*   The Enterprise backend is provisioned or unprovisioned. Provisioned is term used for signifying that typical database design patterns are followed, for example, tracking deletes through a soft delete flag and tracking lastupdated timestamp for each data item (or a table row). An unprovisioned backend does not follow these characteristics.
    
*   It is acceptable that users are productive even with an information set that is "outdated" or "stale" by a few hours.
    

> **_Note:_** There is a need to keep the system and operational costs down by not replicating the Enterprise backend on VoltMXSync Server.
