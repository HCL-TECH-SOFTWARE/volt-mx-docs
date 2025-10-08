                              

Create and Configure a Database for Identity Services
-----------------------------------------------------

To create a database for Identity Services, follow these steps:

1.  Create a database for `idconfig` with a custom name along with prefix and suffix. Prefix and suffix are optional. For example, database name is `<prefix>idconfig<suffix>`.
    
    > **_Note:_**  For Oracle databases a schema name should be in capital letters.  
      
    > **_Note:_** For Oracle, create necessary tablespaces and Users before proceeding. Refer to [Prerequisites for Volt MX Foundry with Oracle](Database_Prerequsites.md#prerequisites-for-volt-mx-foundry-with-oracle).  
    
    > **_Important:_** In addition to the grants, add the following grants while creating an Oracle DB:  
      –  grant create any table to idconfig;  
      –  grant create any index to idconfig;  
      –  grant alter any table to idconfig;
    
The following is a sample query for creating a database in MSSQL:
    
`CREATE DATABASE idconfig;`
    
The following is a sample query for creating a database in MySQL:

`CREATE DATABASE `< DBNAME >` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;`

### For Foundry version 9.5.15 or greater:

The following is a sample query for creating a database in MySQL:

`CREATE DATABASE `< DBNAME >` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`

The following details are required for Flyway configuration:
    
*   Schema name for Identity: `idconfig`
*   Placeholders for Identity Services:

```
 
    # Volt MX Identity Services Database, replace the following placeholders 
    # in SQL migrations for your database flyway.placeholders.KONY_AUTH_LOG_LOCATION=C:VoltMXFoundry/logs
    flyway.placeholders.KONY_AUTH_LOG_OPTION=logfile  
    flyway.placeholders.KONY_AUTH_CONFIG=idconfig  
    flyway.placeholders.KONY_AUTH_GLOBAL_DB=idconfig (This placeholder is applicable only for MySQL)
    flyway.placeholders.KONY_AUTH_LOG_LEVEL=INFO
    flyway.placeholders.KONY_MFINSTALLER_VERSION=<MF_version format: 8.x.0_GA>
    flyway.placeholders.KONY_MFINSTALLER_TYPE=<enter the Volt MX Foundry installation type 
    such as production, non-production, or development>
```
    
  *   Tablespace Placeholders for Oracle:
  
  | Product Name | Tablespace Placeholders for Oracle |
  | --- | --- |
  | Identity or Auth | AUTH\_DATA\_TABLESPACE, AUTH\_INDEX\_TABLESPACE, AUTH\_LOB\_TABLESPACE |
        
  *   SQL files paths for Identity Services in VoltMXFoundry\_Plugins folder:
    
   | Path for SQL files in the VoltMXFoundry\_Plugins folder | Database | Component |
   | --- | --- | --- |
   | \VoltMXFoundry_Plugins\scripts\javamigrations-auth\com\voltmx\auth\migrations\mysql | MySQL | Identity |
   | \VoltMXFoundry_Plugins\scripts\javamigrations-auth\com\voltmx\auth\migrations\oracle | Oracle |
   | \VoltMXFoundry_Plugins\scripts\javamigrations-auth\com\voltmx\auth\migrations\sqlserver | SQL Server |
        
2.  Execute all SQL scripts by using the steps provided at [Configuring Flyway Command-line Tool](FlywayNew.md).
    
    Click here to view the [Identity schema diagram](Resources/Images/identity.png)

    

Since the structure of flyway has changed from Flyway 3.2.1 to Flyway 4.0.3 in Volt MX Foundry installer, execute the following statements to make the `schema_version` table compatible with Flyway 4.0.3.

> **Oracle:**  
drop index "schema\_version\_ir\_idx";  
drop index "schema\_version\_vr\_idx";  
ALTER TABLE "schema\_version" DROP constraint "schema\_version\_pk" drop index;  
ALTER TABLE "schema\_version" DROP COLUMN "version\_rank";  
ALTER TABLE "schema\_version" modify("version" null);  
ALTER TABLE "schema\_version" add constraint "schema\_version\_pk" primary key("installed\_rank");  
  
> **MySQL:**  
ALTER TABLE schema\_version DROP INDEX schema\_version\_vr\_idx;  
ALTER TABLE schema\_version DROP INDEX schema\_version\_ir\_idx;  
ALTER TABLE schema\_version DROP PRIMARY KEY;  
ALTER TABLE schema\_version DROP COLUMN version\_rank;  
ALTER TABLE schema\_version CHANGE version version VARCHAR(50);  
ALTER TABLE schema\_version ADD PRIMARY KEY (installed\_rank);  
  
> **SQL Server:**  
DROP INDEX schema\_version\_ir\_idx ON dbo.schema\_version  
GO  
DROP INDEX schema\_version\_vr\_idx ON dbo.schema\_version  
GO  
ALTER TABLE dbo.schema\_version DROP CONSTRAINT schema\_version\_pk  
GO  
ALTER TABLE dbo.schema\_version DROP COLUMN version\_rank  
GO  
ALTER TABLE dbo.schema\_version ADD CONSTRAINT schema\_version\_pk PRIMARY KEY CLUSTERED (installed\_rank)  
GO  
ALTER TABLE dbo.schema\_version ALTER COLUMN version nvarchar(50) NULL  
GO
