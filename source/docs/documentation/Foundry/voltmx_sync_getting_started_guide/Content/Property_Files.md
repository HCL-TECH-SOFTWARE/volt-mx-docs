---
layout: "documentation"
category: "voltmx_sync_getting_started_guide"
---
                    


Property Files
--------------

The following property files are available under **<sync.home>/conf**:

*   **SyncConsole**
    
    The property file contains properties which include:
    
    *   Hibernate Dialects.
    *   LDAP.
    *   ADS.
    *   Salesforce.
        
        > **_Note:_** Mention the following keys and provide their values if you want to externalize the Salesforce URL and namespace.
        
        *   salesforce.url
        *   salesforce.namespace
*   **SyncServices**
    
    This is the property file which contains the below properties:
    
    *   Database and Connection pool details.
    *   Services JNDI details.
    *   ReplicaDB and UploadQueueDB.
    *   Schedule Jobs.
    *   Proxy Settings.
*   **Application -Securities**
    
    This is the property file which contains the below property:
    

*   Salesforce authentication manager details.

*   **SyncLicense**
    
    This property file contains Sync License properties file for activating new license.
