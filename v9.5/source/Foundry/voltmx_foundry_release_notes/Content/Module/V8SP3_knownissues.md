                          

Known Issues in V8 SP3
======================

Installer
---------

*   **Issue**:
    
    Logs for Metrics are not being generated in the `LOG_ROOT/voltmxmflogs` location as defined in the `LOG_ROOT JVM custom property` in WebSphere.
    
    **Workaround:**
    
    Update the value of `VOLTMX_METRICS_LOG_LOCATION` in the  `metrics_configuration`  table of the `ReportsDB` schema with `${sys:LOG_ROOT}/voltmxmflogs`.
    

*   **Issue**: While upgrading Identity from Foundry 7.0/7.1 to Volt MX Foundry V8.x with the selected database as MSSQL, the upgrade fails due to the following errors that occur due to the Flyway tool version upgraded from 3.x to 4.x:
    
    *   Failed to DROP INDEX "<auth\_schema>"."schema\_version\_ir\_idx"
        
    *   Failed to DROP INDEX "<auth\_schema>"."schema\_version\_vr\_idx"
        
    
    **Workaround**
    
    To avoid the issue, follow the steps respective to your database:
    
    Remove the version\_rank column from the schema\_version table in the authglobaldb by following queries before the upgrade.
    
```
DROP INDEX schema_version_ir_idx ON dbo.schema_version
    GO
    DROP INDEX schema_version_vr_idx ON dbo.schema_version
    GO
    ALTER TABLE dbo.schema_version DROP CONSTRAINT schema_version_pk
    GO
    ALTER TABLE dbo.schema_version DROP COLUMN version_rank
    GO
    ALTER TABLE dbo.schema_version ADD CONSTRAINT schema_version_pk PRIMARY KEY CLUSTERED (installed_rank)
    GO
    ALTER TABLE dbo.schema_version ALTER COLUMN version nvarchar(50) NULL
    GO
    
```

*   **Issue**: Existing SPA app unpublish or republish post upgrade from Volt MX Foundry 7.3.x to 8.x fails:
    
    **Workaround**
    
    When you install Volt MX Foundry running on an existing database created for Foundry V7.3 or older, you must delete all the existing SPA applications, and re-publish the apps.
    

*   **Issue**: SPA app publish post upgrade from Volt MX Foundry 7.3.x to 8.x on JBoss application server fails.
    
    **Workaround**
    
    Update the management\_server\_port in the server\_configuration table of admindb with jboss.management.http.port in the <USER\_INSTALL\_DIR>\\jboss\\standalone\\configuration\\standalone.xml.
    

*   **Issue**: Creation of an environment for Integration and Sync components on Volt MX Foundry installed on Websphere with HTTPS fails.
    
    **Workaround**
    
    To add -D parameters in the JVM arguments, refer [Enable TLSv Protocol on WebSphere](../../../../Foundry/resources/websphere_faqs.md#EnableTLSV1.2).
