                              

Create and Configure a Database for Workspace Services
------------------------------------------------------

To create a database for **Workspace Services**, follow these steps:

1.  Create a database for  `mfconsoledb` with a custom name along with prefix and suffix. Prefix and suffix are optional. For example, database name is `<prefix>mfconsoledb<suffix>`.
    
    > **_Note:_**  For Oracle databases, a schema name should be in capital letters.
    
    > **_Note:_** For Oracle, create necessary tablespaces and Users before proceeding. Refer to [Prerequisites for Volt MX Foundry with Oracle](Database_Prerequsites.md#prerequisites-for-volt-mx-foundry-with-oracle).
    
    *   **The following is a sample query for creating a database in SQL Server**:
```CREATE DATABASE mfconsoledb;
```
        
    *   The following is a sample query for creating a database in MySQL:
    
   ```CREATE DATABASE \`<DBNAME>\` DEFAULT CHARACTER SET utf8 COLLATE utf8\_unicode\_ci;
```
        
    
    > **_Important:_**  For workspace, you can create database with a custom name instead the default databases such as  `mfconsoledb`.  
      For example, if you have created a workspace database with a custom name ( `<prefix>mfconsoledb<suffix>`), replace the custom database name in all SQL scripts in the `\VoltMXFoundry_Plugins\scripts\waasdbmigrations\commondbscripts`  folder.  
    
2.  Execute all SQL scripts for the component by using the steps provided at [Configuring Flyway Command-line Tool](FlywayNew.md).
    
    **The following details pre-requisites for Flyway configuration:**
    
    *   Schema name for workspace: `mfconsoledb`
    *   Placeholders for Workspace Services:
```

      # Volt MX Workspace Services Database, replace the following placeholders 
        # in SQL migrations for your database
        flyway.placeholders.VOLTMX_WAAS_LOG_LOCATION=C:VoltMXFoundry/logs
        flyway.placeholders.VOLTMX_WAAS_LOG_LEVEL=INFO
        flyway.placeholders.VOLTMX_WAAS_LOG_OPTION=logfile
        flyway.placeholders.VOLTMX_WORKSPACES_GLOBAL_DB
        flyway.placeholders.VOLTMX_WAAS_GLOBAL_DB
```
  * Tablespace Placeholders for Oracle:
    
    | Product Name | Tablespace Placeholders for Oracle |
    | --- | --- |
    | Workspace | WAAS\_DATA\_TABLESPACE , WAAS\_INDEX\_TABLESPACE , WAAS\_LOB\_TABLESPACE |
        
 * SQL files paths for Workspace Services in VoltMXFoundry\_Plugins folders.
    
    | Path for SQL files in the VoltMXFoundry\_Plugins folder | Database | Component |
    | --- | --- | --- |
    | \\VoltMXFoundry\_Plugins\\scripts\\waasdbmigrations\\commondbscripts | MySQL | Workspace   |
    | \\VoltMXFoundry\_Plugins\\scripts\\mmigrations-waas-oracle\\commondbscripts | Oracle |
    | \\VoltMXFoundry\_Plugins\\scripts\\migrations-waas-sqlserver\\commondbscripts | SQL Server |


3.  Execute all SQL scripts by using the steps provided at [Configuring Flyway Command-line Tool](FlywayNew.md).
    
    In flyway conf, set `flyway.baselineOnMigrate=true`
    
    set `flyway.validateOnMigrate=false`
    
    Click here to view the [Workspace schema diagram](Resources/Images/workspace.png)
