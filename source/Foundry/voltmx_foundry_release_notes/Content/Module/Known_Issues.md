                         

Known Issues / Limitations
==========================

Known Issues in Foundry Console and Identity
-------------------------------------------------

The known issues in 7.0 are:

*   Persistent Sync is not supported for Object Services
*   Mule soft connector is not supported in Beta

*   When Volt MX Foundry Messaging is installed on WebLogic, the Messaging service fails to start with Oracle database.  
    
    **Workaround  
    **
    
    For the Messaging service to work with Oracle DB, set the following parameter in the `setDomainEnv.sh` or `cmd` and run the `setDomainEnv.sh` before starting the WebLogic server.
    
    `-Dhibernate.dialect=org.hibernate.dialect.Oracle10gDialect`
    

*   Sometimes, even after showing 100% installation progress, Foundry Installer takes around 20 more minutes to complete installation on Windows.
*   JBoss fails to start after installation intermittently. For JBoss to work properly, start JBoss server manually.

*   Desktop Web and SAP apps are not supported on WebSphere configuration.
*   Query with 2 AND filters are not supported in Object Services with SAP.
*   Persistent Sync is not supported with Object Services.

For SDK:

*   MBaaS6813 -Use of SDK is not supported with API proxy (pass through) services
*   MBaaS6980 - SDK does not refresh backend claims token when refreshing Identity claims token
    
*   MBaaS7245 - Binary download of more than 10 MB may fail intermittently because of timeout issues
    
*   MBaaS7272 – Windows 8 and 10 tablets send channel as “mobile” in metrics IST calls
    

For Sync SDK:

*   MBaaS6201 - Relationship mapping is not supported from Foundry for create operation. You must edit sync configuration manually.
*   MBaaS5010 – Error reporting for failures, in child object’s operations is not supported.
*   MBaaS5116 - Different operations in same batch is not supported for hierarchical upload.
*   MBaaS5911 – There is no client side support to add cookie.
*   MBaaS5205 - Offline application with high load requirements is not supported on Android M
    
*   In iOS 9, the allow self-signed certificate flag has to be set to `YES` in order to hit HTTPS syncconsole
