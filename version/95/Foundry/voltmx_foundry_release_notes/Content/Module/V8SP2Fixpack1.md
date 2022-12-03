                          

Volt MX  Foundry V8 SP2 Fix Pack 1
=============================

Console
-------

### New Features

*   Sample Code for Object services and verbs from Volt MX Foundry Console.
*   Enhancements to Test Functionality UX from Volt MX Foundry Console.
*   Stabilization and defect fixes.

Identity
--------

Performance improvements and bug fixes.

Integration
-----------

### New Features

Enabled dynamic deployment of static content of SPA application.

*   This helps in limiting the usage of the heap memory and thus, publish more SPA Apps than the earlier version.
*   This enables publishing of SPA Apps for the topologies where the independent nodes are configured over a cluster.
*   This gives you the ability to configure Response Headers dynamically in Admin Console for the new SPA deployment model.

Engagement (for Volt MX Cloud)
---------------------------

Performance improvements in push message creation and sending to improve overall throughput.

### Fixed Issues

*   Fixed an issue where the creation of segments was failing when done on the Adhoc and Campaign pages.
*   Fixed an issue where deletion, modification, and activation fails for certain imported events.

Engagement (for On-Premises)
----------------------------

Bug fixes and performance improvements in push throughput and overall stability.

### New Features

*   **Importing Events** - This new feature enables the admin (Engagement Console user) to perform `insert`, `update/insert` (upsert), `delete all and insert` (delsert) of events in Volt MX Engagement Server. The feature helps the user to do a bulk import of events.
*   **Retain Event Registration ID** - While importing events, this new feature enables the admin (Engagement Console user) to retain the existing event ID (19 digits) in the system if needed.
*   **Importing Templates (Push, SMS, email, and Pass)** - This new feature enables the admin (Engagement Console user) to perform `insert`, `update/insert` (upsert), `delete all and insert` (delsert) of templates in Volt MX Engagement Server. This feature helps the user to perform a bulk import of templates.
*   **Role-based Custom Attribute Creation Permission** - The user can add a custom user attribute only if the admin (Engagement Console user) has assigned the following permissions: `ROLE_CONFIGURATIONS` and `ROLE_CREATE_ATTRIBUTES`.
*   **Setting Expiry Time for Priority Messages** - From the Adhoc Information page, the expiry date and time can be set for the scheduled push messages and priority pushes (send now).
*   **Push RequestID in Bulk Push** - The admin (Engagement Console user) can now get the requestId of the pushes sent as a part of Bulk Push. This can be done by calling the `Get File Upload Status` by ID API.
*   **Adhoc Push CSV Upload** - The admin (Engagement Console user) can now send pushes to a list of specific KSID/UFID/DEVICEIDs by uploading a csv file while sending push from Engagement console. This feature is useful when the admin (Engagement Console user) needs to send pushes only to specific subscribers.

### Fixed Issues

*   Fixed an issue where the creation of segments was failing when done on the Adhoc and Campaign pages.
*   Fixed an issue where deletion, modification, and activation fails for certain imported events.

Installer
---------

### New Features

*   Installer now supports connecting to Microsoft SQL Server using the Windows Integrated Security mechanism. This is in addition to the existing Microsoft SQL Server username/password mechanism.

### Fixed Issues

*   If you choose **user-defined tablespace** in the Windows Installer, the database schema still gets created in the default tablespace, for example, Users tablespace in Oracle and UserSpace tablespace in DB2.

### Known Issues

*   Runtime invocation of the MySQL RDBMS service fails if you select any Database other than MySQL during Volt MX Foundry installation.  
    This issue is applicable to all the Appservers which are not bundled in the Installer(i.e. other than bundled standalone JBoss, Tomcat)
*   AuthService component fails to startup on WebSphere V9.  
    You need to manually redeploy the AuthService EARcomponent. For manual redeployment steps, refer [Additional Notes on WebSphere V9](../../../../Foundry/voltmx_foundry_manual_install_guide/Content/Deploying_WAR_WAS_Auth.md#NotesWebSphere9).
*   While upgrading Identity from Foundry 7.0/7.1 to Volt MX Foundry V8.x with database selected as MSSQL, the upgrade fails due to the following errors which occur due to the Flyway tool version being upgraded from 3.x to 4.x:
    
    Failed to DROP INDEX "<auth\_schema>"."schema\_version\_vr\_idx"
    
    Failed to DROP INDEX "<auth\_schema>"."schema\_version\_ir\_idx"
    
    *   **Workaround**
        
        To avoid the issue, follow these steps based on your database:
        
        Remove the `version_rank` column from the `schema_version` table in the `authglobaldb` using the following queries before the upgrade.
        
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
*   Existing SPA App Unpublish/Republish fails after upgrading from Volt MX Foundry 7.3.x to Volt MX Foundry V8.x
    *   **Workaround**
        
        When you install Volt MX Foundry running on an existing database that is created for Foundry 7.3 or older, you need to delete all the existing SPA applications and re-publish the apps.
        
*   Publishing an SPA app fails on JBoss application server after upgrading from Volt MX Foundry 7.3.x to Volt MX Foundry V8.x
    
    *   **Workaround**
        
        Update the `management_server_port` in the `server_configuration` table of `admindb` with the `jboss.management.http.port` in the `<USER_INSTALL_DIR>\jboss\standalone\configuration\standalone.xml`.
        
*   Creation of an environment, for Integration and Sync components, fails on Volt MX Foundry installed on WebSphere with HTTPS.
    
    *   **Workaround**
        
        To add -D parameters in the JVM arguments, refer [Enable TLSv Protocol on WebSphere](../../../../Foundry/resources/websphere_faqs.md#EnableTLSV1.2).
        

Analytics and Metrics
---------------------

Performance improvements and bug fixes.
