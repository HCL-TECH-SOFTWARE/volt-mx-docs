                             

Pre-Installation Tasks - Database
=================================

Configuring Flyway Command-line Tool
------------------------------------

The following section helps you configure placeholders and properties in the `flyway.conf` file and execute SQL scripts for your database. The details that are required to configure flyway properties for a component's database are available in the database sections of an app server in the document.

> **_Note:_** Before configuring flyway properties for your database, download the Flyway Command-line Tool from [https://flywaydb.org/getstarted/download.html](https://flywaydb.org/download) to your local system, and unzip the `flyway-commandline-<x.x.x>-<Operating_Platform>`. You can download the Flyway Command-line Tool specific to your Operating System. The supported version is Flyway 4.0.3.

1.  Go to the `\flyway\conf` folder and open the `flyway.conf` file.
2.  Configure your database properties for the current module with relevant data in the `flyway.conf` file.
    
    The following is a sample for configuring properties in the `flyway.conf` file.
    
```
\# --------
    # Most drivers are included out of the box.
    # * = driver must be downloaded and installed in /drivers manually
    # H2                : jdbc:h2:<file>
    # Hsql              : jdbc:hsqldb:file:<file>
    # Google Cloud SQL* : jdbc:google:mysql://<project-id>:<instance-name>/<database>
    # MariaDB           : jdbc:mariadb://<host>:<port>/<database>?<key1>=<value1>&<key2>=<value2>...
    # MySQL             : jdbc:mysql://<host>:<port>/<database>?<key1>=<value1>&<key2>=<value2>...
    # Oracle*           : jdbc:oracle:thin:@//<host>:<port>/<service>
    # PostgreSQL        : jdbc:postgresql://<host>:<port>/<database>?<key1>=<value1>&<key2>=<value2>...
    # solidDB*          : jdbc:solid://<host>:<port>?<key1>=<value1>&<key2>=<value2>...
    # SQL Azure*        : jdbc:sqlserver://<servername>.database.windows.net;databaseName=<database>
    # SQL Server        : jdbc:jtds:sqlserver://<host>:<port>/<database>
    # SQLite            : jdbc:sqlite:<database>
    # Vertica*          : jdbc:vertica://<host>:<port>/<database>
    
    **#Flyway URL for MySQL**
    flyway.url=jdbc:mysql://<host>:<port>
    
    **#Flyway URL for MSSQL**  
    flyway.url=jdbcjdbc:sqlserver://<IP>:<PORT>/<database_name>:currentSchema=<schema_name>;
    
    # Fully qualified class name of the JDBC driver (autodetected by default based on flyway.url)
    # flyway.driver=
    
    # User to use to connect to the database (default: <<null>>)
    flyway.user=**<DBAdminUserName>**
    
    # Password to use to connect to the database (default: <<null>>)
    flyway.password=**<DBAdminUserPassword>**
    
    # Comma-separated list of schemas managed by Flyway. These schema names are case-sensitive.
    # (default: The default schema for the data source connection)
    # Consequences:
    # - The first schema in the list will be automatically set as the default one during the migration.
    # - The first schema in the list will also be the one containing the metadata table.
    # - The schemas will be cleaned in the order of this list.
    **flyway.schemas=<DBName>**
    
    Note: For Identity services, the schema name should be <authconfigdb_name>.
    
    **\# Replace placeholders for Volt MX Foundry Components**  
    Placeholders for **Console**: [Accounts](DBConsoleAccounts.md), [Workspace Services](DBConsoleWaas.md#Placeholders)  
    Placeholders for **[Identity Services](DBIdentity.md#Placeholders)**  
    Placeholders for **Integration Services**: [Admin Server](DBIntegrationAdmin.md#Placeholders), [Reports](DBIntegrationReports.md#Placeholders)  
    Placeholders for **[Engagement Services](DBEngagement.md#Placeholders)**  
      
      
    
```
```
Placeholders for [mfaccountsdb](DBConsoleAccounts.md)  
    Placeholders for [mfconsoledb](DBConsoleWaas.md)  
    Placeholders for [idconfig](DBIdentity.md)  
    Placeholders for [admindb](DBIntegrationAdmin.md) ([admindb](DBIntegrationAdmin_Tomcat.md) for Tomcat)  
    Placeholders for [reportsdb](DBIntegrationReports.md) ([reportsdb](DBIntegrationReports_Tomcat.md) for Tomcat)  
      
    Placeholders for [vpnsdb](VPNS/DB_Setup_VMS_Flyway.md)
```
3.  Save the `flyway.conf` file.
4.  Add your database driver into the Flyway **drivers** folder. For example, `flyway-4.0.3\drivers`.
    
    The following jars are required for your database.
    
    
<details close markdown="block"><summary>Click here for more details.</summary>
    
    | Database | JARs |
    | --- | --- |
    | MySQL | mysql-connector-x-8.x.x.jar |
    | Oracle | ojdbc6\_g.jar |
    | MS SQL | mssql-jdbc-7.0.0.jre8 |
</details>

5.  **To execute your database SQL scripts,** copy all required database SQL files from Volt MX Foundry\_Plugins folder and paste them to the `Flyway SQL` (For example, `C:\flyway\sql or /opt/flyway/sql`   depending on Windows or Linux) folder of the Flyway Command-line Tool.
6.  **For only identity services, to execute your database SQL scripts**, do the following:
    1.  Copy the **migrations.jar** from the `VoltMXFoundry_Plugins\scripts\javamigrations-auth\` folder.
    2.  Paste the **migrations.jar** to the `C:\flyway\jars\`, for example, `C:\flyway\jars\migrations.jar`.
    3.  Go to the `\flyway\conf` folder and open the `flyway.conf` file.
    4.  Add the following database class path: `flyway.locations=com.voltmx.auth.migrations.<<db_name>>`
7.  From the command line, execute the SQL scripts for your database:  
      
    
    *   For **Oracle**, execute the SQL scripts with the following Flyway migrate command along with the following placeholder parameters: **`<Product_Prefix>_DATA_TABLESPACE, <Product_Prefix>_INDEX_TABLESPACE`**, and  `<Product_Prefix>_LOB_TABLESPACE`
        
        > **_Note:_**   While creating databases in Oracle, you can provide one name or separate names for tablespace, index space and lob space. If the same name is given, that name will need to be passed for all these parameters.
        
        For example, the following is the flyway command to execute SQL scripts for AUTH (identity services) with separate tablespace names:
        
        `<commandprompt> flyway migrate -placeholders.AUTH_DATA_TABLESPACE="TS32K" -placeholders.AUTH_INDEX_TABLESPACE="IDX32K" -placeholders.AUTH_LOB_TABLESPACE="LOB32K"`
        
    *   For **MySQL** and **SQL Server**, execute the following Flyway migrate command:  
        `<commandprompt> flyway migrate`  
        
    
    The SQL files will be executed in the `Flyway SQL` folder. For example, `C:\flyway\sql or /opt/flyway/sql`   depending on Windows or Linux, or specific to your storage file path.
