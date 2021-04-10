---
layout: "documentation"
category: "voltmx_foundry_manual_install_guide"
---
                              

Create and Configure a Database for Accounts
--------------------------------------------

To create a database for Volt MX Accounts, follow these steps:

1.  Create a database for accounts with a custom name along with prefix and suffix. Prefix and suffix are optional. For example, database name is `<prefix>mfaccountsdb<suffix>`.
    
    **The following is a sample query for creating a database in MSSQL**:
    
     ```CREATE DATABASE mfaccountsdb;```
    
    The following is a sample query for creating a database in MySQL:
    
    ```CREATE DATABASE <DBNAME> DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;```
    
    > **_Note:_**  For Oracle databases a schema name should be in capital letters.  
       Find the word `mfaccountsdb` in SQL files located in the accounts scripts and replace it with `MFACCOUNTSDB`.
    
    > **_Note:_** For Oracle, create necessary tablespaces and Users before proceeding. Refer to [Prerequisites for Volt MX Foundry with Oracle](Database_Prerequsites.html#prerequisites-for-volt-mx-foundry-with-oracle).
    
    > **_Important:_**  If you have created an accounts database with a custom name (for example, `<prefix>mfaccountsdb<suffix>`), prepend the statement `use <prefix>mfaccountsdb<suffix>` in all SQL scripts in the beginning of every file in the `\VoltMXFoundry_Plugins\scripts\accountsdbmigration` folder.
    
    The following details are required for Flyway configuration:
    
    *   Schema name for accounts: `mfaccountsdb`
    *   Placeholders for Volt MX AccountsDB:
    {% highlight VoltMx %}
        # For Volt MX Accounts Services Database, replace the following placeholders**
        # in SQL migrations for your database**
        flyway.placeholders.VOLTMX_ACCOUNTS_LOG_LOCATION=<INSTLL_DIR>/logs
        flyway.placeholders.WAAS_BASE_URL=<PUBLIC_URL>/workspace
        flyway.placeholders.VOLTMX_ACCOUNTS_LOG_LEVEL=INFO
        flyway.placeholders.VOLTMX_ACCOUNTS_LOG_OPTION=logfile
        flyway.placeholders.COM_PROTOCOL=http
        flyway.placeholders.DISP_APP_SERVER=
        flyway.placeholders.DISP_DB_CHOICE=
        flyway.placeholders.DISP_INSTALLATION_CHOICE=Manual
        flyway.placeholders.DISP_INSTALL_MODE=Single
        flyway.placeholders.ONE_BOX_SETUP=yes
        flyway.placeholders.PREINSTALL_DB_NAME_LIST=
        flyway.placeholders.MF_INSTALLER_VERSION=
        flyway.placeholders.SELECTED_COMP=
        flyway.placeholders.USER_INSTALL_DIR=/root/MF73m
        
        flyway.placeholders.VOLTMX_ACCOUNTS_LOGGER_JNDI= same as <accounts schema jndi, 
        for example: 
        	- Tomcat             : java:comp/env/jdbc/voltmxaccounts
        	- JBoss              : java:/voltmxaccounts
        
        flyway.placeholders.MF_INSTALLER_VERSION=<enter Volt MX Foundry version number, 
        for example: 7.2.0.0>
        
        flyway.placeholders.DISP_INSTALLATION_CHOICE=<enter Volt MX Foundry installation choice, 
        for example: `NEW` or `Upgrade`>
        
        flyway.placeholders.SELECTED_COMP=<enter Volt MX Foundry components to be installed such as 
        Console Services,Identity Services, Integration Services, Engagement Services>
        
        flyway.placeholders.DISP_APP_SERVER=<enter application server details 
        such as Tomcat 7.0.70, JBoss 6.4, WebLogic 12c, or*WebSphere 8.5.5.5>
        
        flyway.placeholders.DISP_INSTALL_MODE=<enter install mode, 
        for example: `Standalone` or `Domain`>
        
        flyway.placeholders.COM_PROTOCOL=<enter protocol type, 
        for example: `http` or `https`>
        
        flyway.placeholders.DISP_DB_CHOICE=<enter db type, 
        for example: `MySQL`, `SqlServer`, or `Oracle`>
        
        flyway.placeholders.PREINSTALL_DB_NAME_LIST=<enter database names, 
        for example: VOLTMXMFACCOUNTSDB1, VOLTMXADMINDB1,VOLTMXMFCONSOLEDB,
        VOLTMXMFREPORTSDB1,VOLTMXIDGLOBALDB,VOLTMXIDCONFIGDB,VOLTMXVPNSDB>
        
        flyway.placeholders.USER_INSTALL_DIR=<enter install folder path. 
        Provide appropriate value for manual installation>
        
        flyway.placeholders.ONE_BOX_SETUP=<enter the choice for one node setup 
        such as `true` for development or `false` in case production>
    {% endhighlight %}

*   Tablespace Placeholders for Oracle:

    | Product Name | Tablespace Placeholders for Oracle |
    | --- | --- |
    | Accounts | ACCOUNTS\_DATA\_TABLESPACE, ACCOUNTS\_INDEX\_TABLESPACE, ACCOUNTS\_LOB\_TABLESPACE |
        

*   SQL files paths for Volt MX Accounts DB in VoltMXFoundry\_Plugins folder:
        
    | Path for SQL files in the VoltMXFoundry\_Plugins folder | Database | Component |
    | --- | --- | --- |
    | \\VoltMXFoundry\_Plugins\\scripts\\accountsdbmigration | MySQL | Accounts   |
    | \\VoltMXFoundry\_Plugins\\scripts\\migrations-accounts-oracle | Oracle |
    | \\VoltMXFoundry\_Plugins\\scripts\\migrations-accounts-sqlserver | SQL Server |
        
2.  Execute all SQL scripts by using the steps provided at [Configuring Flyway Command-line Tool](FlywayNew.html).
    
    Click here to view the [Accounts schema diagram](http://docs.voltmx.com/8_x_PDFs/MFSchema_Diagrams/accounts.png)
    

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

In flyway conf, set `flyway.baselineOnMigrate=true`

set `flyway.validateOnMigrate=false`
