                              

Configuring Engagement Services Database
----------------------------------------

To create a database for Engagement Services, follow these steps:

1.  Create a database with a name `"vpnsdb"` with character set as `"utf8`" and collate as `"utf8_unicode_ci"` using the following command. The database name can contain a custom name along with prefix and suffix. Prefix and suffix are optional. For example, schema name is `<prefix>vpnsdb<suffix>`.
    
    The following is a sample query for creating a database in MySQL

    `\-> CREATE DATABASE vpnsdb CHARACTER SET utf8 COLLATE utf8\_unicode\_ci;`

    ### For Foundry version 9.5.15 or greater:

    Create a database with a name `"vpnsdb"` with character set as `"utf8mb4"` and collate as `"utf8mb4_unicode_ci"` using the following command. The database name can contain a custom name along with prefix and suffix. Prefix and suffix are optional. 

    <b>For example</b>: schema name is `<prefix>vpnsdb<suffix>`.

    The following is a sample query for creating a database in MySQL

    ```
    \-> CREATE DATABASE vpnsdb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
    ```
    
    The following is a sample query for creating a database in DB2
    
    `CREATE SCHEMA "schema\_name" AUTHORIZATION dbclient;`
    
    > **_Note:_**  For DB2 and Oracle databases, a schema name should be in capital letters.
    
    > **_Note:_** To create necessary tablespaces for Oracle and DB, and pre-requisites for MySQL and MS SQL, refer to [Database Prerequisites](Database_Prerequsites.md#prerequisites-for-volt-mx-foundry-with-oracle).
    
    The following details are required for Flyway configuration:
    
    *   Schema name for Engagement Services: `vpnsdb`
    *   Placeholders for Engagement Services:
```
flyway.placeholders.VMS_DBNAME
```
    
  *   Tablespace Placeholders for DB2 and Oracle:
        
  | Product Name | Tablespace Placeholders for DB2 and Oracle |
  | --- | --- |
  | Engagement Services (VMS) | VMS\_DATA\_TABLESPACE, VMS\_INDEX\_TABLESPACE, VMS\_LOB\_TABLESPACE |
        
  *   SQL files paths for Engagement Services in VoltMXFoundry\_Plugins folder:
        
  | Path for SQL files in the VoltMXFoundry\_Plugins folder | Database | Component |
  | --- | --- | --- |
  | \\VoltMXFoundry\_Plugins\\scripts\\mysql-vpns-migrations | MySQL | Engagement Services   |
  | \\VoltMXFoundry\_Plugins\\scripts\\oracle-vpns-migrations | Oracle |
  | \\VoltMXFoundry\_Plugins\\scripts\\mssql-vpns-migrations | SQL Server |
        
2.  Execute all SQL scripts by using the steps provided at [Configuring Flyway Command-line Tool](FlywayNew.md).
    
    Click here to view the [Engagement Services schema diagram](http://docs.voltmx.com/8_x_PDFs/MFSchema_Diagrams/engagement.png)
