                              

Database Prerequisites
======================

Prerequisites for Volt MX Foundry with Oracle
--------------------------------------------

For installing Volt MX Foundry Database for Oracle, complete the following steps:

> **_Note:_** Only a qualified Oracle Database Administrator (DBA) must handle the Oracle Database setup in order to successfully complete the Volt MX Foundry database deployment. Oracle software must be installed and basic database must be created before to continue with Volt MX Foundry database schema setup.  

> **_Important:_**  Ensure that a dedicated database user must not be an application user for installation of database. A dedicated user gets logged into audit logs.  
After granting privileges, disconnect existing session, and use new session in order to get the new privileges loaded to the user.

> **_Note:_** Ensure that these grants are required for all the schemas/tables of all Volt MX Foundry components.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)Click here for Oracle tablespaces and connection details:](javascript:void(0);)

*   Unicode support needs to be enabled in Database. This is possible only while creating a database needed for Volt MX Foundry with a Unicode character set with the properties for Database character set as `AL32UTF8` and National character set as `AL16UTF16`.

*   Create the following three _tablespaces_. These tablespaces will be used to create Volt MX Foundry database objects:
    
    *   Tables and data tablespace: MF\_DATA
        
    *   Index tablespace: MF\_INDEX
        
    *   Lob tablespace: MF\_LOB\_DATA
        
*   Using an SQLPlus or another Database client, connect to the Oracle database as Sysdba.  
    Replace the <DATA\_FILE\_PATH> with actual data file path on the Oracle database server.  
```
CREATE TABLESPACE MF_DATA DATAFILE '<DATA_FILE_PATH>/MF_DATA_01.DBF' SIZE 2048M 
    AUTOEXTEND ON NEXT 100M MAXSIZE 5120M;
    
    CREATE TABLESPACE MF_INDEX DATAFILE '<DATA_FILE_PATH>/MF_INDEX_01.DBF' SIZE 2048M 
    AUTOEXTEND ON NEXT 100M MAXSIZE 5120M;
    
    CREATE TABLESPACE MF_LOB_DATA DATAFILE '<DATA_FILE_PATH>/MF_LOB_DATA_01.DBF' SIZE 
    2048M AUTOEXTEND ON NEXT 100M MAXSIZE 5120M;           
```
*   Create a database user with default tablespaces (MF\_DATA) and grant quota to two other tablespaces (MF\_INDEX and MF\_LOB\_DATA tablespaces).
    
    *   To create a user based on your Oracle 11g or 12c without PDB, which will be used in the JDBC.
        
        *   Before you create a user, first, you should identify the default temporary tablespace value for your database. Run the following query.
```
SQL> SELECT PROPERTY_VALUE FROM DATABASE_PROPERTIES 
            WHERE PROPERTY_NAME = 'DEFAULT_TEMP_TABLESPACE';
            
            PROPERTY_VALUE
            -------------------------------------------------------------------------------- 
            TEMPTS
```
            
            For example, the output of the above query is `TEMPTS`, and this value should be passed to the following `<TEMP>` placeholder.
            
            > **_Important:_** The default temporary tablespace value is required while creating users **with PDB** in Oracle database.
            
        
```
CREATE USER <install-user> IDENTIFIED BY <password> DEFAULT TABLESPACE MF_DATA TEMPORARY TABLESPACE <TEMP> PROFILE DEFAULT;
        GRANT <*Grants list> TO <install-user> with admin option;
        ALTER USER <install-user> QUOTA UNLIMITED ON MF_DATA;
        ALTER USER <install-user> QUOTA UNLIMITED ON MF_INDEX;
        ALTER USER <install-user> QUOTA UNLIMITED ON MF_LOB_DATA;
        
```
```
\-------<\*Grants list for Oracle 11g or 12c without PDB>-------
        CREATE TABLE, CREATE VIEW, CREATE SEQUENCE, CREATE TRIGGER, CREATE PROCEDURE, CREATE TYPE, CREATE JOB,
        CREATE USER, ALTER USER,
        CREATE SESSION, ALTER SESSION, 
        CREATE TABLESPACE, ALTER TABLESPACE,
        CREATE ANY TABLE, SELECT ANY TABLE, ALTER ANY TABLE, INSERT ANY TABLE, LOCK ANY TABLE, DELETE ANY TABLE,  UPDATE ANY TABLE, DROP ANY TABLE,
        CREATE ANY INDEX, ALTER ANY INDEX, DROP ANY INDEX,
        CREATE ANY SEQUENCE, SELECT ANY SEQUENCE, DROP ANY SEQUENCE,
        CREATE ANY VIEW, DROP ANY VIEW,  
        CREATE ANY PROCEDURE, EXECUTE ANY PROCEDURE, DROP ANY PROCEDURE, CREATE ANY TYPE, DROP ANY TYPE,
        CREATE ANY TRIGGER, DROP ANY TRIGGER,
        MANAGE SCHEDULER, CREATE ANY JOB
        
``` 
    
    *   To create a user based on your Oracle 12c with PDB, then create a `local user` inside PDB, which will be used in the Java Database Connectivity (JDBC) authentication.
        
        *   Before you create a user, first, you should identify the default temporary tablespace value for your database. Run the following query. ```
SQL> SELECT PROPERTY_VALUE FROM DATABASE_PROPERTIES 
            WHERE PROPERTY_NAME = 'DEFAULT_TEMP_TABLESPACE';
            
            PROPERTY_VALUE
            -------------------------------------------------------------------------------- 
            TEMPTS
```
            
            For example, the output of the above query is `TEMPTS`, and this value should be passed to the following `<TEMP>` placeholder.
            
            > **_Important:_** The default temporary tablespace value is required while creating users **without PDB** in Oracle database.  
            
        
```
Alter session set container = PDB<MF_DB> ;
        CREATE USER <dedicated-database-local-user> IDENTIFIED BY <password> DEFAULT TABLESPACE MF_DATA TEMPORARY TABLESPACE <TEMP> PROFILE DEFAULT  CONTAINER=CURRENT;
        GRANT <**Grants list> TO <install-local-user> with admin option CONTAINER=CURRENT;
        ALTER USER <install-local-user> QUOTA UNLIMITED ON MF_DATA CONTAINER=CURRENT;
        ALTER USER <install-local-user> QUOTA UNLIMITED ON MF_INDEX CONTAINER=CURRENT;
        ALTER USER <install-local-user> QUOTA UNLIMITED ON MF_LOB_DATA CONTAINER=CURRENT;
        
```
```
\-------<\*\*Grants list for Oracle  12c with PDB>-------
        CREATE TABLE, CREATE VIEW, CREATE SEQUENCE, CREATE TRIGGER, CREATE PROCEDURE, CREATE TYPE, CREATE JOB,
        CREATE USER, ALTER USER,
        CREATE SESSION, ALTER SESSION, 
        CREATE TABLESPACE, ALTER TABLESPACE,
        CREATE ANY TABLE, SELECT ANY TABLE, ALTER ANY TABLE, INSERT ANY TABLE, LOCK ANY TABLE, DELETE ANY TABLE,  UPDATE ANY TABLE, DROP ANY TABLE,
        CREATE ANY INDEX, ALTER ANY INDEX, DROP ANY INDEX,
        CREATE ANY SEQUENCE, SELECT ANY SEQUENCE, DROP ANY SEQUENCE,
        CREATE ANY VIEW, DROP ANY VIEW,  
        CREATE ANY PROCEDURE, EXECUTE ANY PROCEDURE, DROP ANY PROCEDURE, CREATE ANY TYPE, DROP ANY TYPE,
        CREATE ANY TRIGGER, DROP ANY TRIGGER,
        MANAGE SCHEDULER, CREATE ANY JOB
        
```

*   If you are using the Volt MX Foundry installer to set up the Volt MX Foundry database, then please choose the below options based on your Oracle database version.
    
    *   If Oracle database is created with PDB option of Oracle 12c, use service name pointing to PDB in the JDBC URL such as `pdborcl` or `pdbmfdb
`
```
jdbc:oracle:thin:@<Database_Host_IP>:1521**/pdbmfdb** 
```
        
        For example: jdbc:oracle:thin:@192.168.1.2:1521/pdbmfdb
        
    
    *   But if your database is 11g or 12c without PDB, then you can use `ORACLE_SID` in the JDBC URL such as  `orcl`  or  `mfdb`.
```
jdbc:oracle:thin:@<Database_Host_IP>:1521:mfdb
```
        
        For example: jdbc:oracle:thin:@192.168.1.2:1521:mfdb
        

Prerequisites for Volt MX Foundry with MSSQL- Applicable for Engagement Services
-------------------------------------------------------------------------------

Database collation needs to be set for a database. This is possible while creating a database with your required language as database collation. For example, use Database collation as **Arabic\_100\_CI\_AS** for Arabic language support. Similarly for other languages use appropriate collation for support. Use SQL Server Management Studio to create a database with the name as vpnsdb and with appropriate collation support.

Prerequisites for Volt MX Foundry with MySQL
-------------------------------------------

### Applicable for Engagement Services

1.  Create the database needed for Engagement Services with unicode character set as UTF8. Also ensure that modify the `my.cnf` or `my.ini` with the following parameters:
    
    \[client\]  
    default-character-set = utf8  
    \[mysql\]  
    default-character-set = utf8  
    \[mysqld\]|  
    character-set-client-handshake = FALSE  
    collation\_server='utf8\_unicode\_ci'  
    character\_set\_server='utf8'  
    
2.  Next, restart the MySQL service and run the following query to verify the details:
    
    mysql> show variables like '%coll%';  
    +----------------------+-----------------+  
    | Variable\_name | Value |  
    +----------------------+-----------------+  
    | collation\_connection | utf8\_unicode\_ci |  
    | collation\_database | utf8\_unicode\_ci |  
    | collation\_server | utf8\_unicode\_ci |  
    +----------------------+-----------------+  
    3 rows in set (0.00 sec)  
    mysql> show variables like '%char%';  
    +--------------------------+----------------------------+  
    | Variable\_name | Value |  
    +--------------------------+----------------------------+  
    | character\_set\_client | utf8 |  
    | character\_set\_connection | utf8 |  
    | character\_set\_database | utf8 |  
    | character\_set\_filesystem | binary |  
    | character\_set\_results | utf8 |  
    | character\_set\_server | utf8 |  
    | character\_set\_system | utf8 |  
    | character\_sets\_dir | /usr/share/mysql/charsets/ |  
    +--------------------------+----------------------------+
    

<h3 id="applicable-for-identity-services">Applicable for Identity Services</h3>

If you are using any lower versions of MySQL 5.7 such as v5.7.12 or lower during installation, you may encounter an error due to which the installation rolls back. This error occurs due to a bug in the MySQL database.

For more information, refer [MySQL Bugs](https://bugs.mysql.com/bug.php?id=79286)

Following are the error details:

*   **Error**: Migration V810\_27\_01\_\_DeleteDuplicateAcsUserIdProviderGuidRowsAddUniqueConstraint.sql failed
*   **SQL State**: HY000
*   **Error Code**: 1093
*   **Error Message**: You can't specify target table 'users' for update in FROM clause
*   **Location**: <Location where the installation is done>

To resolve this error, run the following commands in the MySQL Server:

1.  Execute the following command before running the installer:

`SET GLOBAL optimizer_switch = 'derived_merge=off';`

3.  Once the installation is done, set derived\_merge ON using the following command:

`SET GLOBAL optimizer_switch = 'derived_merge=on';`

<h2 id="increase-innodb_log_file_size-in-myini-file-for-engagement-services">Increase innodb_log_file_size in my.ini file (For Engagement Services)</h2>


> **_Note:_**  If the size of your application is more than the variable size of server database, an error occurs. Ensure the variable `max_allowed_packet_size` is set to a higher value than the application size.  
  
To avoid this error increase the global variable in the server database.  
  
\- Modify the SQL Statement to `Set global max_allowed_packet=10*1024*1024`.  
In this statement the server database size is configured to 10-Megabytes(MB).  
  
For example, if your application size is 1024-kilobytes (1 MB) and you try to publish an application from Volt MX Iris of 2048-Kilobytes(2 MB) an error appears while publishing. Increase the  size of server database to a value more than 2048-Kilobytes (2 MB) for publishing the application.

For innodb\_log\_file\_size, the value is set to 48M by default.

In the `my.ini` file, increase the `innodb_log_file_size` = <value should be greater than 10% of max\_allowed\_packet=500>

> **_Note:_** When uploading larger files will get an error `Packets larger than max_allowed_packet are not allowed`.

Prerequisites for Volt MX Foundry with MariaDB
---------------------------------------------

### Increase the table\_definition\_cache and table\_open\_cache values

To increase the values of table\_definition\_cache and table\_open\_cache in Maria DB, execute the following commands or update the ini or cnf file with:

set GLOBAL table\_definition\_cache=4000; //For table\_definition\_cache; 4000 is the minimum value  
  
set GLOBAL table\_open\_cache=2000; //For table\_open\_cache; 2000 is the minimum value
