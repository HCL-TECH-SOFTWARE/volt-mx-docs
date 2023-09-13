                         


Database Prerequisites
----------------------

Before you install Volt MX Foundry Console Installer, you must perform the following Pre-Installation tasks:

*   Ensure access to a database server.
*   A database user should be granted all required permissions as per this document.
    
*   To use your existing SSL certificate, map the SSL certificate to the domain name you want to use.
*   To install in domain (multi-node) mode, the JBoss cluster should be preconfigured.

### Prerequisites for Volt MX Foundry with Oracle

For installing Volt MX Foundry Database for Oracle, complete the following steps:

> **_Note:_** Only a qualified Oracle Database Administrator (DBA) must handle the Oracle Database setup in order to successfully complete the Volt MX Foundry database deployment. Oracle software must be installed and basic database must be created before to continue with Volt MX Foundry database schema setup.  

> **_Important:_**  Ensure that a dedicated database user must not be an application user for installation of database. A dedicated user gets logged into audit logs.  
After granting privileges, disconnect existing session, and use new session in order to get the new privileges loaded to the user.

<details close markdown="block"><summary>Click here for more details on Oracle tablespaces and connection details:</summary>

*   Unicode support needs to be enabled in Database. This is possible only while creating a database needed for Volt MX Foundry with a Unicode character set with the properties for Database character set as `AL32UTF8` and National character set as `AL16UTF16`.

*   Create the following three **tablespaces**. These tablespaces will be used to create Volt MX Foundry database objects:
    
    *   Tables and data tablespace: MF\_DATA
        
    *   Index tablespace: MF\_INDEX
        
    *   Lob tablespace: MF\_LOB\_DATA
        
*   Using an SQLPlus or another Database client, connect to you Oracle database as Sysdba.  
    Replace the <DATA\_FILE\_PATH> with actual data file path on the Oracle database server.  
    
```

    CREATE TABLESPACE MF\_DATA DATAFILE '<DATA\_FILE\_PATH>/MF\_DATA\_01.DBF' SIZE 2048M AUTOEXTEND ON NEXT 100M MAXSIZE 5120M;
    CREATE TABLESPACE MF\_INDEX DATAFILE '<DATA\_FILE\_PATH>/MF\_INDEX\_01.DBF' SIZE 2048M AUTOEXTEND ON NEXT 100M MAXSIZE 5120M;
    CREATE TABLESPACE MF\_LOB\_DATA DATAFILE '<DATA\_FILE\_PATH>/MF\_LOB\_DATA\_01.DBF' SIZE 2048M AUTOEXTEND ON NEXT 100M MAXSIZE 5120M;
```
    
*   Create a dedicated database user with default tablespaces (MF\_DATA) and grant quota to two other tablespaces (MF\_INDEX and MF\_LOB\_DATA tablespaces).
    *   To create a user based on your Oracle 11g or 12c without PDB, which will be used in the JDBC.
    	```

	CREATE USER <install-user> IDENTIFIED BY <password> DEFAULT TABLESPACE MF_DATA TEMPORARY TABLESPACE TEMP PROFILE DEFAULT;
        GRANT DBA TO <install-user>;
        ALTER USER <install-user> QUOTA UNLIMITED ON MF_DATA;
        ALTER USER <install-user> QUOTA UNLIMITED ON MF_INDEX;
        ALTER USER <install-user> QUOTA UNLIMITED ON MF_LOB_DATA;
        
```<br>
*   To create a dedicated database user based on your Oracle 12c with PDB, then create a `dedicated database local user` inside PDB, which will be used in the Java Database Connectivity (JDBC) authentication.
```
Alter session set container = PDB<MF_DB> ;
        CREATE USER <dedicated-database-local-user> IDENTIFIED BY <password> DEFAULT TABLESPACE MF_DATA TEMPORARY TABLESPACE TEMP PROFILE DEFAULT  CONTAINER=CURRENT;
        GRANT DBA TO <install-local-user> CONTAINER=CURRENT;
        ALTER USER <install-local-user> QUOTA UNLIMITED ON MF_DATA CONTAINER=CURRENT;
        ALTER USER <install-local-user> QUOTA UNLIMITED ON MF_INDEX CONTAINER=CURRENT;
        ALTER USER <install-local-user> QUOTA UNLIMITED ON MF_LOB_DATA CONTAINER=CURRENT;
        
```

*   If you are using Volt MX Foundry installer to setup Volt MX Foundry database, then please choose the below options based on your Oracle database version.
    
    *   If Oracle database is created with PDB option of Oracle 12c, use service name pointing to PDB in the JDBC URL such as `pdborcl` or `pdbmfdb
`
```
jdbc:oracle:thin:@<Database_Host_IP>:1521/pdbmfdb 
```<br>For example: jdbc:oracle:thin:@192.168.1.2:1521/pdbmfdb<br>
*   But if your database is 11g or 12c without PDB, then you can use `ORACLE_SID` in the JDBC URL such as  `orcl`  or  `mfdb`.
```
jdbc:oracle:thin:@<Database_Host_IP>:1521:mfdb
```<br>For example: jdbc:oracle:thin:@192.168.1.2:1521:mfdb
        
</details>

### Prerequisites for Volt MX Foundry with SQL Server

*   **Database User security role**: Create a database login `dbclient` using `SQL server authentication` with server roles as `sysadmin` and `public`
*   **Database and schema access**: Installer will make use of the above login to create necessary databases and schemas required for the selected Volt MX Foundry components.
*   **Database Growth sizing**: Refer to [VoltMX Foundry Deployment Guide > Database Growth Sizing](../../../Foundry/voltmx_Foundry_deployment_guide/Content/Deployment.md#database-growth-sizing)
*   **Database Transaction log size**: Allocate sufficient space for the Transaction log file based on all the transactions activity of all the Volt MX Foundry components installed and as per your database backup policy. Because transaction log sizing is linked to database backup. If additional application logging/events are enabled in multiple components of Volt MX Foundry, then you may need to consider additional size for the transaction log.
*   **Temp Database and temp log**: This is based on usage of all the databases on the server instance, by all applications connecting to these databases. In case of Volt MX Foundry, for sizing of the temp database, consider auto growth with increment size should be of 100MB and with maximum size to 10GB. But if application logging/events are enabled in multiple components of Volt MX Foundry, then the maximum size should be increased upto 20GB. This size will get reclaimed as and when the DB is restarted.
*   **Database versions**: You can use **SQL Server Standard Edition** or **SQL Server Enterprise Edition** database for installing Volt MX Foundry. Volt MX Foundry is compatible with these editions. There are no prerequisites specific to these editions as Volt MX Foundry uses features common to both editions.
*   **Backup plan**: You must use your organization's defined backup and retention policies for Backup strategies for your database.

### Prerequisites for Volt MX Foundry with MSSQL - Applicable for Engagement Services

Database collation needs to be set for a database. This is possible while creating a database with your required language as database collation. For example, use Database collation as **Arabic\_100\_CI\_AS** for Arabic language support. Similarly for other languages use appropriate collation for support. Use SQL Server Management Studio to create a database with the name as vpnsdb and with appropriate collation support.

### Prerequisites for Volt MX Foundry with MySQL

#### MySQL 8.0 is mandatory for Foundry V9.5.15 or above

#### MySQL configuration mandated for Foundry 9.5.15 or greater :

To support MySQL utf8mb4 charsets and collation, update the MySQL configuration file of MySQL 8.0 by adding following changes under [client], [mysql] and [mysqld] section and restart the MySQL server.

```
1. Ensure that you modify the my.cnf or my.ini with the following parameters: 


    [client]
    default-character-set = utf8mb4
    [mysql]
    default-character-set = utf8mb4
    [mysqld]
    character-set-client-handshake = FALSE
    character-set-server=utf8mb4
    collation-server="utf8mb4_unicode_ci"

2. Next, restart the MySQL service and run the following query to verify the details:

    mysql> show variables like 'collation%';
    +----------------------+--------------------+
    | Variable_name        | Value              |
    +----------------------+--------------------+
    | collation_connection | utf8mb4_unicode_ci |
    | collation_database   | utf8mb4_unicode_ci |
    | collation_server     | utf8mb4_unicode_ci |
    +----------------------+--------------------+

3. rows in set (0.00 sec)
   mysql> show variables like 'character%';

    +--------------------------+---------------------------------------------------------+
    | Variable_name            | Value                                                   |
    +--------------------------+---------------------------------------------------------+
    | character_set_client     | utf8mb4                                                 |
    | character_set_connection | utf8mb4                                                 |
    | character_set_database   | utf8mb4                                                 |
    | character_set_filesystem | binary                                                  |
    | character_set_results    | utf8mb4                                                 |
    | character_set_server     | utf8mb4                                                 |
    | character_set_system     | utf8mb3                                                 |
    | character_sets_dir       | C:\Program Files\MySQL\MySQL Server 8.0\share\charsets\ |
    +--------------------------+---------------------------------------------------------+
    8 rows in set (0.00 sec)
```

 
#### Applicable for Engagement Services for Foundry version earlier than 9.5.15

1.  Create the database needed for Engagement Services with unicode character set as UTF8. Also ensure that you modify the `my.cnf` or `my.ini` with the following parameters:
 ```

    [client]  
    default-character-set = utf8  
    [mysql]  
    default-character-set = utf8  
    [mysqld]|  
    character-set-client-handshake = FALSE  
    collation_server='utf8_unicode_ci'  
    character_set_server='utf8'  
```
   Next, restart the MySQL service and run the following query to verify the details:
 ```

    mysql> show variables like '%coll%';  
    +----------------------+-----------------+  
    | Variable_name | Value |  
    +----------------------+-----------------+  
    | collation_connection | utf8_unicode_ci |  
    | collation_database | utf8_unicode_ci |  
    | collation_server | utf8_unicode_ci |  
    +----------------------+-----------------+  
    3 rows in set (0.00 sec)  
    mysql> show variables like '%char%';  
    +--------------------------+----------------------------+  
    | Variable_name | Value |  
    +--------------------------+----------------------------+  
    | character_set_client | utf8 |  
    | character_set_connection | utf8 |  
    | character_set_database | utf8 |  
    | character_set_filesystem | binary |  
    | character_set_results | utf8 |  
    | character_set_server | utf8 |  
    | character_set_system | utf8 |  
    | character_sets_dir | /usr/share/mysql/charsets/ |  
    +--------------------------+----------------------------+
 ```

#### Applicable for Identity Services

If you are using any lower versions of MySQL 5.7 such as v5.7.12 or lower during installation, you may encounter an error due to which the installation rolls back. This error occurs due to a bug in the MySQL database.  
  
For more information, refer [MySQL Bugs](https://bugs.mysql.com/bug.php?id=79286)

Following are the error details:

*   **Error**: Migration V810\_27\_01\_\_DeleteDuplicateAcsUserIdProviderGuidRowsAddUniqueConstraint.sql failed
*   **SQL State**: HY000
*   **Error Code**: 1093
*   **Error Message**: You can't specify target table 'users' for update in FROM clause
*   **Location**: <Location where the installation is done>

To resolve this error, run the following commands in the MySQL Server:

1\. Execute the following command before running the installer:

`SET GLOBAL optimizer_switch = 'derived_merge=off';`

2\. Once the installation is done, set derived\_merge ON using the following command:

`SET GLOBAL optimizer_switch = 'derived_merge=on';`
