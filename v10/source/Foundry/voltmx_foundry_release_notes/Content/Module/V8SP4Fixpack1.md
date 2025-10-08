                           

Volt MX  Foundry V8 Service Pack 4 Fix Pack 1
========================================

New Features
------------

### Installer

*   **VoltMX Foundry CLI**
    
    Volt MX Foundry V8 SP4 Fixpack 1 installer supports new Command line tool to assist with the manual install process.
    
*   **Cluster-level data source creation support for WebSphere**
    
    Volt MX Foundry V8 SP4 Fixpack 1 installer supports data source creation at cluster level for WebSphere.
    

### Offline Objects

Starting from Volt MX Foundry V8 SP4, **VoltMX Sync(legacy)** is no longer included in the default installer. This is because new apps requiring offline capability should utilize offline objects, which is included in the Foundry runtime. For more information regarding the deprecation of Sync Services refer to the [Introducing Offline Objects](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0083859) article.

> **_Note:_** Customers using Sync in their existing apps will have to maintain the older version for legacy Sync to work and they should upgrade only the server to V8 SP4.

Known Issues
------------

### Installer

*   **Issue #1**
    
    While upgrading from Volt MX Foundry 8.2.1.3 GA to Volt MX Foundry V8 SP4, the upgrade rolls back.
    
    **Workaround**
    
    To avoid the issue, execute the following scripts for your respective database before upgrading to Volt MX Foundry V8 SP4:
    
    *   For Oracle:
```
delete from <admindb>.schema_version where script = 'V62.1__voltmxadmin-oracle-8.2.0.0.sql';
        
```
    *   For MySQL:
```
delete from <admindb>.schema_version where script = 'V62.1__voltmxadmin-mysql-8.2.0.0.sql';
```
    *   For DB2:
```
delete from <admindb>.schema_version where script = 'V62.1__voltmxadmin-db2-8.2.0.0.sql';
```
    *   For SQL Server:
```
delete from <admindb>.schema_version where script = 'V62.1__voltmxadmin-sqlserver-8.2.0.0.sql';
```

*   **Issue #2**
    
    While upgrading Identity from Foundry 7.0/7.1 to Volt MX Foundry V8.x with the database set as MSSQL, the upgrade fails due to the following errors:
    
    *   The following errors occur due to the Flyway tool version upgrade from 3.x to 4.x.
        
        *   Failed to DROP INDEX "<auth\_schema>"."schema\_version\_ir\_idx"
        *   Failed to DROP INDEX "<auth\_schema>"."schema\_version\_vr\_idx"
        
        **Workaround**
        
        To avoid the issue, follow these steps:
        
        Remove the `version_rank` column from the `schema_version` table in the `authglobaldb` by following queries before the upgrade.
        
        *   For MSSQL:
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
*   **Issue #3**
    
    After upgrading from Volt MX Foundry 7.3.x to Volt MX Foundry V8 SPx, the unpublish or republish process of an existing SPA app fails.
    
    **Workaround**
    
    To avoid the issue, when you install Volt MX Foundry running on an existing database created for Foundry V7.3 or prior, you must delete all the existing SPA applications and re-publish the apps.
    
*   **Issue #4**
    
    After upgrading from Volt MX Foundry 7.3.x to Volt MX Foundry V8 SPx, the SPA app publish on JBoss application server fails.
    
    **Workaround**
    
    To avoid the issue, update the `management_server_port` in the `server_configuration` table of admindb with `jboss.management.http.port` in the <USER\_INSTALL\_DIR>\\jboss\\standalone\\configuration\\standalone.xml.
    
*   **Issue #5**
    
    When Volt MX Foundry is installed on WebSphere with HTTPS, the creation of an environment for an Integration component fails.
    
    **Workaround**
    
    To avoid the issue, add -D parameters in the JVM arguments. For information regarding the -D parameters, refer to [Enable TLSv Protocol on WebSphere](../../../../Foundry/resources/websphere_faqs.md#EnableTLSV1.2).
