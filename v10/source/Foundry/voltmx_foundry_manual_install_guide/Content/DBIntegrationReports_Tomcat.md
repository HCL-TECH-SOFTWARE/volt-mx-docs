                              

Create and Configure a Database for Reports
-------------------------------------------

To create a database for Reports, follow these steps:

1.  Create a database for **reports** with a custom name along with prefix and suffix. Prefix and suffix are optional. For example, database name is `<prefix>reportsdb<suffix>`.
    
**The following is sample query for creating a database in MSSQL:**
    
    CREATE DATABASE reportsdb;
    
The following is a sample query for creating a database in MySQL:

```
   CREATE DATABASE \`< DBNAME >\` DEFAULT CHARACTER SET utf8 COLLATE utf8\_unicode\_ci;
```

#### For Foundry version 9.5.15 or greater:

The following is a sample query for creating a database in MySQL:

```
    CREATE DATABASE \`< DBNAME >\`DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```
    
> **_Note:_**  For Oracle databases, a schema name should be in capital letters.  
      
Find the word `reportsdb` in SQL files located in the admin scripts and replace it with `REPORTSDB`.
    
> **_Note:_** For Oracle, create necessary tablespaces. Refer to [Prerequisites for Volt MX Foundry with Oracle](Database_Prerequsites.md#prerequisites-for-volt-mx-foundry-with-oracle).
    
The following details are required for Flyway configuration:
    
*   Schema name for reports: `reportsdb`
*   Placeholders for Reports:
```
# For Reports (reportsdb), replace the following placeholders in SQL migrations for your database
        flyway.placeholders.KONY_METRICS_LOGGER_JNDI=java:comp/env/jdbc/voltmxreports
        flyway.placeholders.KONY_METRICS_LOG_LEVEL=INFO
        flyway.placeholders.KONY_METRICS_LOG_OPTION=logfile
        flyway.placeholders.KONY_METRICS_LOG_LOCATION=<log_location_for_metrics> 
```
*   Tablespace Placeholders for Oracle:
        
| Product Name | Tablespace Placeholders for Oracle |
| --- | --- |
| Reports / Metrics | METRICS\_DATA\_TABLESPACE, METRICS\_INDEX\_TABLESPACE, METRICS\_LOB\_TABLESPACE |
        
*   SQL files paths for Reports in VoltMXFoundry\_Plugins folder:
        
        
<details close markdown="block"><summary>Click here for more details</summary>
        
| Path for SQL files in the VoltMXFoundry\_Plugins folder | Database | Component |
| --- | --- | --- |
| \\VoltMXFoundry\_Plugins\\middleware\\reportsdb\_mysql | MySQL | ReportsDB   |
| \\VoltMXFoundry\_Plugins\\middleware\\reportsdb\_oracle | Oracle |
| \\VoltMXFoundry\_Plugins\\middleware\\reportsdb\_mssql | SQL Server |
</details>       
2.  Execute all SQL scripts by using the steps provided at [Configuring Flyway Command-line Tool](FlywayNew.md).
    
Click here to view the [ReportsDB (Metrics) schema diagram](http://docs.voltmx.com/8_x_PDFs/MFSchema_Diagrams/metrics.png)
    

Since the structure of flyway has changed from Flyway 3.2.1 to Flyway 4.0.3 in Volt MX Foundry installer, execute the following statements to make the `schema_version` table compatible with Flyway 4.0.3.

>**Oracle:**  
drop index "schema\_version\_ir\_idx";  
drop index "schema\_version\_vr\_idx";  
ALTER TABLE "schema\_version" DROP constraint "schema\_version\_pk" drop index;  
ALTER TABLE "schema\_version" DROP COLUMN "version\_rank";  
ALTER TABLE "schema\_version" modify("version" null);  
ALTER TABLE "schema\_version" add constraint "schema\_version\_pk" primary key("installed\_rank");  
  
>**MySQL:**  
ALTER TABLE schema\_version DROP INDEX schema\_version\_vr\_idx;  
ALTER TABLE schema\_version DROP INDEX schema\_version\_ir\_idx;  
ALTER TABLE schema\_version DROP PRIMARY KEY;  
ALTER TABLE schema\_version DROP COLUMN version\_rank;  
ALTER TABLE schema\_version CHANGE version version VARCHAR(50);  
ALTER TABLE schema\_version ADD PRIMARY KEY (installed\_rank);  
  
  
>**SQL Server:**  
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
