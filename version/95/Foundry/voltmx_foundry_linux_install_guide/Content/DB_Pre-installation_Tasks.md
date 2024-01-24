                         
Database Pre-installation Tasks
======================

MySQL
-----

### Increase innodb\_log\_file\_size in my.cnf file - MySQL

> **_Note:_**  If the size of your application is more than the variable size of server database, an error occurs. Ensure the variable `max_allowed_packet_size` is set to a higher value than the application size.  
  
To avoid this error, increase the global variable in the server database.  
  
\- Modify the SQL Statement to `Set global max_allowed_packet=10*1024*1024`.  
In this statement the server database size is configured to 10-Megabytes(MB).  
  
For example, if your application size is 1024-kilobytes (1 MB) and you try to publish an application from Volt MX Studio of 2048-Kilobytes(2 MB) an error appears while publishing. Increase the  size of server database to a value more than 2048-Kilobytes (2 MB) for publishing the application.

For innodb\_log\_file\_size, the value is set to 48 M by default.

In the `my.cnf` file, increase the `innodb_log_file_size` = <value should be greater than 10% of max\_allowed\_packet>

Oracle
------

### Create Locator Component for Oracle Database

By default when an Oracle database is created using DBCA or Oracle Installer Enterprise Edition with create database option, the SDO\_Geometry object type will be default created as part of locator component.

If the database is created using scripts by following manual process, then the Locator component will not be created. You need to create the locator component for your Oracle database separately.

Verify if the locator component is already installed

Run the below queries in the Oracle database used for Installer:

```
Select comp_name, version, status from dba_registry where upper(comp_name) like '%MEDIA';

Select username from dba_users where username = 'MDSYS'
```

If the above statements return zero records and MDSYS schema is not created, then follow these steps to create the MDSYS schema and install the locator component manually.

The following steps need to be executed by a SYSDBA only.

To create Locator or MDSYS schema, follow these steps in option #1 or option #2:

*   **Option #1**. Follow DBCA or Oracle Installer enterprise edition with create database option to create Oracle database. Use the same database during Volt MX Foundry Installation.
*   **Option #2**. Run the following scripts on the database to be used for Volt MX Foundry, where Oracle locator is not installed.
    
    1.  Connect as SYSDBA
            <figure class="highlight"><code class="language-voltmx" data-lang="voltmx">
                sqlplus "/as sysdba"
            </code></figure>
    2.  Create MDSYS User if not exists:
            <figure class="highlight"><code class="language-voltmx" data-lang="voltmx">
                Create user mdsys identified by secret default tablespace sysaux
            </code></figure>        
        A secret is a dummy password. Provide the password that is used during MDSYS user creation.        
    3.  Run the below SQL to grant the privileges:
            <figure class="highlight"><code class="language-voltmx" data-lang="voltmx">
                SQL>@?/md/admin/mdprivs.sql
            </code></figure>
    4.  Connect to MDSYS user:
            <figure class="highlight"><code class="language-voltmx" data-lang="voltmx">
                Conn mdsys/secret
            </code></figure>
        A secret is dummy password. Provide the password that is used during MDSYS user creation.        
    5.  Run the below SQL to create the locator objects:
            <figure class="highlight"><code class="language-voltmx" data-lang="voltmx">
                SQL>@?/md/admin/catmdloc.sql
            </code></figure>
    
    All the above `.sql` files executed will be available as part of database software `md` folder.
    
    After executing the above steps, execute the following query to check if everything is fine:

    <figure class="highlight"><pre><code class="language-voltmx" data-lang="voltmx">
                Select * from dba_objects where owner='MDSYS' and object_name like 'SDO%';
    </code></pre></figure>
    
    Once the Oracle locator is installed, run the Installer to setup Volt MX Foundry. The system should not throw the error: `Invalid Data Type SDO_GEOMETRY`
    
    > **_Note:_** As per Oracle 12c Release 1 (12.1) documentation, Oracle Locator is available with the following editions:
       *   Oracle Database Standard Edition One
       *   Oracle Database Standard Edition
       *   Oracle Database Enterprise Edition
       *   Oracle Database Express Edition (Oracle Database XE)
      For more information regarding Oracle licensing, refer to Oracle Database documentation.
    
    > **_Important:_** **SDO\_GEOMETRY** is part of **Oracle Locator**, which is free and does not need additional licensing, but this is bundled with **Oracle Spatial**, which is part of enterprise edition licensing.  For more details, please go through the following Oracle reference document:  
       **Doc ID 1066837.1** :- Oracle Spatial and Oracle Locator Licensing Information.
    

Maria DB
--------

### Increase the table\_definition\_cache and table\_open\_cache values

To increase the values of table\_definition\_cache and table\_open\_cache in Maria DB, execute the following commands or update the ini or cnf file with:
    <figure class="highlight"><pre><code class="language-voltmx" data-lang="voltmx">{
        set GLOBAL table\_definition\_cache=4000; //For table\_definition\_cache; 4000 is the minimum value          
        set GLOBAL table\_open\_cache=2000; //For table\_open\_cache; 2000 is the minimum value
    }</code></pre></figure>
