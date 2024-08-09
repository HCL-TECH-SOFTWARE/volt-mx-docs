                              

Create and Configure a Database for Accounts
--------------------------------------------

To create a database for Volt MX Accounts, follow these steps:

1.  Create a database for accounts with a custom name along with prefix and suffix. Prefix and suffix are optional. For example, database name is `<prefix>mfaccountsdb<suffix>`.
    
    **The following is a sample query for creating a database in MSSQL**:
    
```
CREATE DATABASE mfaccountsdb;
```
The following is a sample query for creating a database in MySQL:
```
CREATE DATABASE < DBNAME > DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
```

### For Foundry version 9.5.15 or greater:

To create mfaccountsdb:

```
The following is a sample query for creating a database in MySQL: CREATE DATABASE <DBNAME> DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```
 
> **_Note:_**  For Oracle databases a schema name should be in capital letters.  
Find the word `mfaccountsdb` in SQL files located in the accounts scripts and replace it with `MFACCOUNTSDB`.
    
> **_Note:_** For Oracle, create necessary tablespaces and Users before proceeding. Refer to [Prerequisites for Volt MX Foundry with Oracle](Database_Prerequsites.md#prerequisites-for-volt-mx-foundry-with-oracle).
    
> **_Important:_**  If you have created an accounts database with a custom name (for example, `<prefix>mfaccountsdb<suffix>`), prepend the statement `use <prefix>mfaccountsdb<suffix>` in all SQL scripts in the beginning of every file in the `\VoltMXFoundry_Plugins\scripts\accountsdbmigration` folder.
    
The following details are required for Flyway configuration:
    
*   Schema name for accounts: `mfaccountsdb`
 *   Placeholders for Volt MX AccountsDB:

<pre>
<code style="display:block;background-color:#eee;border: 1px solid #999;padding: 20px;">
<strong># For Volt MX Accounts Services Database, replace the following placeholders</strong>
<strong># in SQL migrations for your database</strong>
flyway.placeholders.KONY_ACCOUNTS_LOG_LOCATION= <strong>< INSTLL_DIR></strong>/logs
flyway.placeholders.WAAS_BASE_URL=<strong>< PUBLIC_URL></strong>/workspace
flyway.placeholders.KONY_ACCOUNTS_LOG_LEVEL=INFO
flyway.placeholders.KONY_ACCOUNTS_LOG_OPTION=logfile
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
        

flyway.placeholders.KONY_ACCOUNTS_LOGGER_JNDI= same as < accounts schema jndi, 
for example: 
      - Tomcat             : java:comp/env/jdbc/voltmxaccounts
      - JBoss              : java:/voltmxaccounts
        
flyway.placeholders.MF_INSTALLER_VERSION=< enter Volt MX Foundry version number,
for example: <strong>7.2.0.0</strong>>
        
flyway.placeholders.DISP_INSTALLATION_CHOICE=< enter Volt MX Foundry installation choice, 
for example: <mark style="background:lightgrey"><strong>NEW</strong></mark> or <mark style="background:lightgrey"><strong>Upgrade</strong></mark>>
        
flyway.placeholders.SELECTED_COMP=< enter Volt MX Foundry components to be installed such as <strong>Console Services,Identity Services, Integration Services, Engagement Services</strong>>
        
flyway.placeholders.DISP_APP_SERVER=< enter application server details 
such as <strong>Tomcat 7.0.70, JBoss 6.4, or WebSphere 8.5.5.5</strong>>
        
flyway.placeholders.DISP_INSTALL_MODE=< enter install mode, 
for example: <mark style="background:lightgrey"><strong>Standalone</strong></mark> or <mark style="background:lightgrey"><strong>Domain</strong></mark>>
        
flyway.placeholders.COM_PROTOCOL=< enter protocol type, 
for example: <mark style="background:lightgrey"><strong>http</strong></mark> or <mark style="background:lightgrey"><strong>https</strong></mark>>
        
flyway.placeholders.DISP_DB_CHOICE=< enter db type, 
for example: <mark style="background:lightgrey"><strong>MySQL</strong></mark>, <mark style="background:lightgrey"><strong>SqlServer</strong></mark>, or <mark style="background:lightgrey"><strong>Oracle</strong></mark>>
        
flyway.placeholders.PREINSTALL_DB_NAME_LIST=< enter database names, 
for example: <strong>VOLTMXMFACCOUNTSDB1, VOLTMXADMINDB1,VOLTMXMFCONSOLEDB,
VOLTMXMFREPORTSDB1,VOLTMXIDGLOBALDB,VOLTMXIDCONFIGDB,VOLTMXVPNSDB</strong>>
        
flyway.placeholders.USER_INSTALL_DIR=< enter install folder path. 
Provide appropriate value for manual installation>
        
flyway.placeholders.ONE_BOX_SETUP=<code enter the choice for one node setup 
such as <mark style="background:lightgrey"><strong>true</strong></mark> for development or <mark style="background:lightgrey"><strong>false</strong></mark> in case production>
</code>
</pre>


*   Tablespace Placeholders for Oracle:

    | Product Name | Tablespace Placeholders for Oracle |
    | --- | --- |
    | Accounts | ACCOUNTS\_DATA\_TABLESPACE, ACCOUNTS\_INDEX\_TABLESPACE, ACCOUNTS\_LOB\_TABLESPACE |
        

*   SQL files paths for Volt MX Accounts DB in VoltMXFoundry\_Plugins folder:
        
<details close markdown="block"><summary>Click here for more details</summary>
<table>
<tr>
<th>Path for SQL files in the QuantumFabric_Plugins folder</th>
<th>Database</th>
<th>Component</th>
</tr>
<tr>
<td>\VoltMXFoundry_Plugins\scripts\accountsdbmigration</td>
<td>MySQL</td>
<td rowspan=3>Accounts</td>
</tr>
<tr>
<td>\VoltMXFoundry_Plugins\scripts\migrations-accounts-oracle</td>
<td>Oracle</td>
</tr>
<tr>
<td>\VoltMXFoundry_Plugins\scripts\migrations-accounts-sqlserver</td>
<td>SQL Server</td>
</tr>
</table>
</details>


2.  Execute all SQL scripts by using the steps provided at [Configuring Flyway Command-line Tool](FlywayNew.md).
    
    Click here to view the [Accounts schema diagram](Resources/Images/accounts.png)


    <!-- Click here to view the [Accounts schema diagram](http://docs.voltmx.com/8_x_PDFs/MFSchema_Diagrams/accounts.png) -->
    

Since the structure of flyway has changed from Flyway 3.2.1 to Flyway 4.0.3 in Volt MX Foundry installer, execute the following statements to make the `schema_version` table compatible with Flyway 4.0.3.

<!-- ```


``` -->

<pre>
<code style="display: block;background-color: #eee;border: 1px solid #999;padding: 20px;">
<strong>Oracle:</strong>  
drop index "schema_version_ir_idx";  
drop index "schema_version_vr_idx";  
ALTER TABLE "schema_version" DROP constraint "schema_version_pk" drop index;  
ALTER TABLE "schema_version" DROP COLUMN "version_rank";  
ALTER TABLE "schema_version" modify("version" null);  
ALTER TABLE "schema_version" add constraint "schema_version_pk" primary key("installed_rank");  
  
<strong>MySQL:</strong>  
ALTER TABLE schema_version DROP INDEX schema_version_vr_idx;  
ALTER TABLE schema_version DROP INDEX schema_version_ir_idx;  
ALTER TABLE schema_version DROP PRIMARY KEY;  
ALTER TABLE schema_version DROP COLUMN version_rank;  
ALTER TABLE schema_version CHANGE version version VARCHAR(50);  
ALTER TABLE schema_version ADD PRIMARY KEY (installed_rank);  
  
<strong>SQL Server:</strong>  
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
</code>
</pre>


In flyway conf, set `flyway.baselineOnMigrate=true`

set `flyway.validateOnMigrate=false`
