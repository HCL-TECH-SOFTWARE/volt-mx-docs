                           


Upgrading Foundry to 9.5 with MySQL upgrade
============================================

#### Upgrading Volt MX Foundry 9.2 or 9.5 with MySQL 5.7 to Volt MX Foundry 9.5.15 or greater

Prerequisites

Volt MX Foundry 9.2 or 9.5 with MySQL 5.7

Upgrade Steps
 
To upgrade Volt MX Foundry 9.2 or 9.5 with MySQL 5.7 to Volt MX Foundry 9.5.15 or greater, follow these steps:
 
1. Stop Foundry 9.2 or 9.5 server.
2. Backup Foundry data from MySQL 5.7 server. Below is list of Schema should be exported from MySQL 5.7 and imported to MySQL 8.0 server while upgrade. `<prefix> admindb<suffix> <prefix> idconfigdb<suffix> <prefix> kpnsdb <suffix> <prefix> mfaccountsdb <suffix> <prefix>mfconsoledb<suffix> <prefix> mfreportsdb <suffix>` and other schemas created during runtime
3. Stop MySQL 5.7 server.
4. Install MySQL 8.0.
5. Update the my.cnf or my.ini file of MySQL 8.0 by adding following changes under [client], [mysql] and [mysqld] section and restart the MySQL server.

    1  Ensure that you modify the my.cnf or my.ini with the following parameters: <br>
    [client]<br>
    default-character-set = utf8mb4<br>
    [mysql]<br>
    default-character-set = utf8mb4<br>
    [mysqld]<br>
    character-set-client-handshake = FALSE<br>
    character-set-server=utf8mb4<br>
    collation-server="utf8mb4_unicode_ci"<br>
    
    2  Next, restart the MySQL service and run the following query to verify the details:

```
        +----------------------+--------------------+
        | Variable_name        | Value              |
        +----------------------+--------------------+
        | collation_connection | utf8mb4_unicode_ci |
        | collation_database   | utf8mb4_unicode_ci |
        | collation_server     | utf8mb4_unicode_ci |
        +----------------------+--------------------+
        3 rows in set (0.00 sec)
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
<html>
<body>
<ol start="6">
  <li>Import Foundry data exported in step 2 to MySQL 8.0.</li>
  <li>Alter the character set and collation of foundry schemas
   (<prefix> admindb <suffix> <prefix> idconfigdb <suffix> <prefix>kpnsdb <suffix> <prefix> mfaccountsdb <suffix> <prefix> mfconsoledb <suffix> <prefix> mfreportsdb <suffix>) with following command:<br>   ALTER DATABASE < DATABASE_NAME > CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;</li>
  <li>Upgrade Foundry to 9.5.15 or greater. Refer to <a href="https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Foundry/voltmx_foundry_windows_install_guide/Content/Upgrading_VoltMX_Foundry_SP1.html">Upgrading Volt MX Foundry to V9</a>  for upgrade instructions.</li>
</ol>
</body>
</html>

#### Upgrading Volt MX Foundry 9.5 with MySQL 8.0 to Volt MX Foundry 9.5.15 or greater

Prerequisites
---------------
Volt MX Foundry 9.5 with MySQL 8.0

Upgrade Steps

To upgrade Volt MX Foundry 9.5.x with MySQL 8.0 to  Volt MX Foundry 9.5.15 or greater with MySQL 8.0, follow these steps:

1.  Stop Foundry 9.5 server.
2.  Update the my.cnf or my.ini file of MySQL 8.0 by adding following changes under [client], [mysql] and [mysqld] section and restart the MySQL server.

   
     1 Ensure that you modify the my.cnf or my.ini with the
       following parameters:<br>
       [client]<br>
       default-character-set = utf8mb4<br>
       [mysql]<br>
       default-character-set = utf8mb4<br>
       [mysqld]<br>
       character-set-client-handshake = FALSE<br>
       character-set-server=utf8mb4<br>
       collation-server="utf8mb4_unicode_ci"<br>

     2 Next, restart the MySQL service and run the following
       query to verify the details:

       mysql> show variables like 'collation%';

```
        +----------------------+--------------------+
        | Variable_name        | Value              |
        +----------------------+--------------------+
        | collation_connection | utf8mb4_unicode_ci |
        | collation_database   | utf8mb4_unicode_ci |
        | collation_server     | utf8mb4_unicode_ci |
        +----------------------+--------------------+
        3 rows in set (0.00 sec)
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
<html>
<body>
<ol start="3">
  <li>Alter the character set and collation of foundry schemas  
    `(<prefix>admindb<suffix>, <prefix>idconfigdb<suffix>,  <prefix>kpnsdb<suffix>, <prefix>mfaccountsdb<suffix>, <prefix>mfconsoledb<suffix>, <prefix>mfreportsdb<suffix>)` with following command:<br> ALTER DATABASE < DATABASE_NAME > CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;</br></li>
  <li>Upgrade Foundry to 9.5.15 or greater . Refer to <a href="https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Foundry/voltmx_foundry_windows_install_guide/Content/Upgrading_VoltMX_Foundry_SP1.html">Upgrading Volt MX Foundry to V9</a>  for upgrade instructions.</li>
</ol>
</body>
</html>

#### Upgrading Kony Fabric 8.4 with MySQL 5.7 to Volt MX Foundry 9.5.15 or greater

Prerequisites 
--------------

Kony Fabric 8.4 with MySQL 5.7 

Upgrade Steps 

To upgrade Kony Fabric with MySQL 5.7 to Volt MX Foundry 9.5.15 or greater, follow these steps: 

1. Stop Kony Fabric 8.4 server.

2. Backup Foundry data from MySQL 5.7 server. Below is list of Schema should be exported from MySQL 5.7 and imported to MySQL 8.0 server while upgrade. `<prefix> admindb <suffix> <prefix> idconfigdb <suffix> <prefix> kpnsdb <suffix> <prefix> mfaccountsdb <suffix> <prefix> mfconsoledb <suffix> <prefix> mfreportsdb <suffix>` and other schemas created during runtime
3. Stop MySQL 5.7 server.  
4. Install MySQL 8.0. 
5.  Update the my.cnf or my.ini file of MySQL 8.0 by adding following changes under [client], [mysql] and [mysqld] section and restart the MySQL server. 

    1 Ensure that you modify the my.cnf or my.ini with the following parameters:  
    [client]<br>
    default-character-set = utf8mb4<br>
    [mysql]<br> 
    default-character-set = utf8mb4<br>
    [mysqld]<br>
    character-set-client-handshake = FALSE<br>
    character-set-server=utf8mb4<br>
    collation-server="utf8mb4_unicode_ci"<br>

    2 Next, restart the MySQL service and run the following query to verify the details: 
    mysql> show variables like 'collation%'; 

```
    +----------------------+--------------------+ 
    | Variable_name        | Value              | 
    +----------------------+--------------------+ 
    | collation_connection | utf8mb4_unicode_ci | 
    | collation_database   | utf8mb4_unicode_ci | 
    | collation_server     | utf8mb4_unicode_ci | 
    +----------------------+--------------------+ 
    3 rows in set (0.00 sec) 
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
<ol start="6">
  <li>Import Foundry data exported in step 2 to MySQL 8.0.</li>
  <li>Alter the character set and collation of foundry schemas`(<prefix> admindb <suffix> <prefix> idconfigdb <suffix> <prefix> kpnsdb <suffix> <prefix> mfaccountsdb <suffix> <prefix> mfconsoledb <suffix> <prefix> mfreportsdb <suffix> )` with following command:<br> ALTER DATABASE < DATABASE_NAME > CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;</li>
  <li>Alter the character set and collation of kpnsdb tables by
   running following script:</li>
</ol>
</body>
</html>

    SET FOREIGN_KEY_CHECKS=0; 

    USE < prefix > kpnsdb < suffix >; 

    ALTER TABLE PNSApps CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci; 

    ALTER TABLE campaign CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci; 

    ALTER TABLE event_stl CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci; 

    ALTER TABLE events CONVERT TO CHARACTER SET utf8mb4 COLLATE  utf8mb4_unicode_ci; 

    ALTER TABLE Subscription CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci; 

    ALTER TABLE campaign_message CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci; 

    ALTER TABLE MessageRequest CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci; 

    ALTER TABLE event_push CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci; 

    ALTER TABLE event_push_stl CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci; 

    ALTER TABLE PNSApps_hst CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci; 

    SET FOREIGN_KEY_CHECKS=1; 

<ol start="9">
 <li>Upgrade Foundry to 9.5.15 or greater . Refer to <a href="https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Foundry/voltmx_foundry_windows_install_guide/Content/Upgrading_VoltMX_Foundry_SP1.html">Upgrading Volt MX Foundry to V9</a>  for upgrade instructions.</li>
</ol>
</body>
</html>

#### Upgrading Volt MX Foundry 9.2 with MySQL 5.7 to Volt MX Foundry versions earlier than 9.5.15

Prerequisites
-------------
Volt MX Foundry 9.2 with MySQL 5.7

Upgrade Steps
-------------
To upgrade Volt MX Foundry 9.2 with MySQL 5.7 to Volt MX Foundry 9.5 with MySQL 8.0, follow these steps:

1.  Stop Foundry 9.2 server. 
2.  Backup Foundry data from MySQL 5.7 server. Below is list of Schema should be exported from MySQL 5.7 and imported to MySQL 8.0 server while upgrade. 
    ```
    <prefix>admindb<suffix>
    <prefix>idconfigdb<suffix>
    <prefix>kpnsdb<suffix>
    <prefix>mfaccountsdb<suffix>
    <prefix>mfconsoledb<suffix>
    <prefix>mfreportsdb<suffix> and other schemas created during runtime
    ```
3.  Stop MySQL 5.7 server.
4.  Install MySQL 8.0.        
5.  Import Foundry data exported in step 2 to MySQL 8.0.    
6.  Upgrade Foundry to 9.5. Refer to [Upgrading Volt MX Foundry to V9](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Foundry/voltmx_foundry_windows_install_guide/Content/Upgrading_VoltMX_Foundry_SP1.html) for upgrade instructions.