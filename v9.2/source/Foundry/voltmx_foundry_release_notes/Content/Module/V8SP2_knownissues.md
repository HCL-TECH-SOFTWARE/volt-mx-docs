                          

Known Issues in V8 SP2
======================

Offline Objects
---------------

*   Binary download support through Offline Objects is available only for storage or RDBMS based adapters.
    

Installer
---------

*   If you choose the user-defined tablespace in Windows Installer, the database schema is still created in default tablespace (i.e. Users tablespace in Oracle and UserSpace tablespace in DB2).
    
*   MySQL RDBMS service runtime invocation fails if the selected Volt MX Foundry database during installation is other than MySQL. The issue is applicable to all appservers which are not bundled in the installer (i.e. other than bundled standalone JBoss and Tomcat).
    
*   Startup of AuthService component on WebSphere v9 fails. Manual redeployment of AuthService EAR component is required. For more information, refer [Additional Notes on WebSphere9](../../../../Foundry/voltmx_foundry_manual_install_guide/Content/Deploying_WAR_WAS_Auth.md#NotesWebSphere9).
    

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
    
    When you install Volt MX Foundry running on an existing database created for Foundry V7.3 or older, you must delete all the existing SPA applications and re-publish the apps.
    

*   **Issue**: SPA app publish post upgrade from Volt MX Foundry 7.3.x to 8.x on JBoss application server fails.
    
    **Workaround**
    
    Update the management\_server\_port in the server\_configuration table of admindb with jboss.management.http.port in the <USER\_INSTALL\_DIR>\\jboss\\standalone\\configuration\\standalone.xml.
    

*   **Issue**: Creation of an environment for Integration and Sync components on Volt MX Foundry installed on Websphere with HTTPS fails.
    
    **Workaround**
    
    To add -D parameters in the JVM arguments, refer [Enable TLSv Protocol on WebSphere](../../../../Foundry/resources/websphere_faqs.md#EnableTLSV1.2).
    

Engagement
----------

*   Creation of segments fails when done on the Adhoc and Campaign pages. While sending messages the system displays an error message that the request failed due to security token expiration. However, the segment creation works from the Segments page.
    
*   The deletion, modification, and activation fails for certain imported events.
