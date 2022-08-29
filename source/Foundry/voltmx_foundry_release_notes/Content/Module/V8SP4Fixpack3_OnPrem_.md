                           

Volt MX  Foundry V8 Service Pack 4 Fix Pack 3 (On-Premises)
======================================================

In this release, features were modified to provide an enhanced experience on Volt MX Foundry. The following are the enhancements added and known issues in this release.

*   [Enhancements](#enhancements)
*   [Known Issues](#known-issues)

Enhancements
------------

### Installer

*   Added a new docker image with all services in a single container to deploy Volt MX Foundry in Local Developer machines. For more information on this feature, click [here](../../../../Foundry/voltmxfoundry_single_container/Content/Introduction_Single.md).
*   Added support for creation of data sources, shared libraries for WebSphere and deployment of WARS/EARS in the Volt MX Foundry Command Line Installer. For more information on this feature, click [here](../../../../Foundry/voltmxfoundry_cli/Content/Introduction.md).
*   Added basic user input validations to the Foundry Command Line Installer.

Known Issues
------------

*   **Issue #1**
    
    Upgrade from 8.2.1.3 GA to V8 SP4 gets reverted.
    
    **Workaround**
    
    Before upgrading to V8 SP4, run the following scripts for your database:
    
```
For MySQL
    ------------
    delete from <admindb>.schema_version where script = 'V62.1__voltmxadmin-mysql-8.2.0.0.sql';
    For SQLServer
    ---------------
    delete from <admindb>.schema_version where script = 'V62.1__voltmxadmin-sqlserver-8.2.0.0.sql';
    For Oracle
    ----------
    delete from <admindb>.schema_version where script = 'V62.1__voltmxadmin-oracle-8.2.0.0.sql';
    For DB2
    --------
    delete from <admindb>.schema_version where script = 'V62.1__voltmxadmin-db2-8.2.0.0.sql';
    
```
*   **Issue #2**
    
    While upgrading Identity from Foundry 7.0/7.1 to Volt MX Foundry V8.x with the selected database as MSSQL, the upgrade fails due to the following errors. These errors occur due to the Flyway tool version upgraded from 3.x to 4.x.
    
    *   Failed to `DROP INDEX "<auth_schema>"."schema_version_ir_idx"`
    *   Failed to `DROP INDEX "<auth_schema>"."schema_version_vr_idx"`
    
    **Workaround**
    
    To avoid the issue, perform the following step with respect to your database:
    
    Remove the `version_rank column` from the `schema_version` table in the `authglobaldb` by passing the following queries before the upgrade.
    
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
    
    After upgrading Volt MX Foundry from version 7.3.x to version 8.x, the unpublishing or republishing of an existing SPA app fails.
    
    **Workaround**
    
    When you install Volt MX Foundry running on an existing database created for Foundry V7.3 or earlier, you must delete the existing SPA applications and re-publish the apps.
    
*   **Issue #4**
    
    SPA app publish post upgrade from Volt MX Foundry 7.3.x to 8.x on JBoss application server fails.
    
    **Workaround**
    
    Update the `management_server_port` in the `server_configuration` table of `admindb` with jboss.management.http.port in the `<USER_INSTALL_DIR>\jboss\standalone\configuration\standalone.xml`.
    
*   **Issue #5**
    
    Creation of an environment for Integration component on Volt MX Foundry installed on WebSphere with HTTPS fails.
    
    **Workaround**
    
    To add -D parameters in the JVM arguments, refer to [Enable TLSv Protocol on WebSphere](../../../../Foundry/resources/websphere_faqs.md#EnableTLSV1.2).
    
*   **Issue #6**
    
    After the installation of Volt MX Foundry on WebSphere by using the Volt MX Foundry Command Line Installer, the launch of the Volt MX Foundry Console URL results in an internal server error. The issue is caused because of the missing javassist-3.20.0-GA file in the generated Identity shared libraries folder(voltmxlib\\identity).
    
    **Workaround**
    
    The javassist-3.20.0-GA file can be downloaded from the maven repository [https://mvnrepository.com/artifact/org.javassist/javassist/3.20.0-GA](https://mvnrepository.com/artifact/org.javassist/javassist/3.20.0-GA).
    
*   **Issue #7**
    
    When the **migrate DB** command of the Volt MX Foundry Command Line Installer is executed from a Linux machine, the execution of Foundry Identity migrations is skipped. The issue is caused by ANT being unable to locate the migrations jar in the CLI lib folder in the Linux environment.
    
    Workaround
    
    Run the migrate DB command from a Windows machine.
    
*   **Issue #8**
    
    Installation of Volt MX Foundry on WebLogic is paused with an error message in logs. The error message reads: “Caused By: weblogic.application.ModuleException: Context path '/mfconsole' is already in use by the module: mfconsole.war application: mfconsole.war”.
    
    **Workaround**
    
    Go to the WebLogic Console and click **activate changes** that will allow the installation to proceed.
