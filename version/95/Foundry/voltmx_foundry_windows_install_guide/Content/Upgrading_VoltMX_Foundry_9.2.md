                           


Upgrading Foundry from 9.2 to 9.5 with MySQL upgrade from 5.7 to 8.0
====================================================================

Prerequisites
-------------

### Upgrading Foundry to 9.5 with MySQL upgrade

Upgrading Volt MX Foundry 9.2 or 9.5 with MySQL 5.7 to Volt MX Foundry 9.5.15 or greater

Prerequisites

Volt MX Foundry 9.2 or 9.5 with MySQL 5.7

Upgrade Steps
 
To upgrade Volt MX Foundry 9.2 or 9.5 with MySQL 5.7 to Volt MX Foundry 9.5.15 or greater, follow these steps:
 
1. Stop Foundry 9.2 or 9.5 server. Stop MySQL 5.7 server.
2. Backup Foundry data from MySQL 5.7 server. Below is list of Schema should be exported from MySQL 5.7 and imported to MySQL 8.0 server while upgrade. < prefix >admindb< suffix > < prefix >idconfigdb< suffix > < prefix >kpnsdb< suffix > < prefix >mfaccountsdb< suffix > < prefix >mfconsoledb< suffix > < prefix >mfreportsdb< suffix >
3. Install MySQL 8.0.
4. Update the my.cnf or my.ini file of MySQL 8.0 by adding following changes under [client], [mysql] and [mysqld] section and restart the MySQL server.

   1. Ensure that you modify the my.cnf or my.ini with the following parameters: <br>
   [client]<br>
   default-character-set = utf8mb4<br>
   [mysql]<br>
   default-character-set = utf8mb4<br>
   [mysqld]<br>
   character-set-client-handshake = FALSE<br>
   character-set-server=utf8mb4<br>
   collation-server="utf8mb4_unicode_ci"<br>
 
   2. Next, restart the MySQL service and run the following query to verify the details:

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

   
   4.  Import Foundry data exported in step 2 to MySQL 8.0.
   5.  Alter the character set and collation of foundry schemas(<prefix>admindb<suffix> <prefix>idconfigdb<suffix> <prefix>kpnsdb<suffix> <prefix>mfaccountsdb<suffix> <prefix>mfconsoledb<suffix> <prefix>mfreportsdb<suffix>) with following command:
 
   ALTER DATABASE <DATABASE_NAME> CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
 
   6.  Upgrade Foundry to 9.5.15 or greater. Refer to Upgrading Volt MX Foundry to V9 for upgrade instructions.

Prerequisites
---------------
Volt MX Foundry 9.5 with MySQL 8.0

Upgrade Steps

To upgrade Volt MX Foundry 9.5.x with MySQL 8.0 to  Volt MX Foundry 9.5.15 or greater with MySQL 8.0, follow these steps:

   
1. Ensure that you modify the my.cnf or my.ini with the following parameters:<br>
[client]<br>
default-character-set = utf8mb4<br>
[mysql]<br>
default-character-set = utf8mb4<br>
[mysqld]<br>
character-set-client-handshake = FALSE<br>
character-set-server=utf8mb4<br>
collation-server="utf8mb4_unicode_ci"<br>

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

3. Alter the character set and collation of foundry schemas(< prefix >admindb< suffix >, < prefix >idconfigdb< suffix >, < prefix >kpnsdb< suffix >, < prefix >mfaccountsdb< suffix >, < prefix >mfconsoledb< suffix >, < prefix >mfreportsdb< suffix >) with following command:
 
ALTER DATABASE < DATABASE_NAME > CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
 
4. Upgrade Foundry to 9.5.15 or greater . Refer to Upgrading Volt MX Foundry to V9 for upgrade instructions.
 

2. Next, restart the MySQL service and run the following query to verify the details:
mysql> show variables like 'collation%';



1.  Stop Foundry 9.5 server.
2.  Update the my.cnf or my.ini file of MySQL 8.0 by adding following changes under [client], [mysql] and [mysqld] section and restart the MySQL server.

 
 
Upgrade Steps
To upgrade Volt MX Foundry 9.5.x with MySQL 8.0 to  Volt MX Foundry 9.5.15 or greater with MySQL 8.0, follow these steps:
1.  Stop Foundry 9.5 server.
2.  Update the my.cnf or my.ini file of MySQL 8.0 by adding following changes under [client], [mysql] and [mysqld] section and restart the MySQL server.
 
 
3) Add new section with heading "Upgrading Volt MX Foundry 9.5 with MySQL 8.0 to Volt MX Foundry 9.5.15 or greater":


Prerequisites
-------------
Volt MX Foundry 9.2 with MySQL 5.7


Upgrade Steps
-------------
To upgrade Volt MX Foundry 9.2 with MySQL 5.7 to Volt MX Foundry 9.5 with MySQL 8.0, follow these steps:

1.  Stop Foundry 9.2 server. Stop MySQL 5.7 server.
2.  Backup Foundry data from MySQL 5.7 server. Below is list of Schema should be exported from MySQL 5.7 and imported to MySQL 8.0 server while upgrade. 
    ```
    <prefix>admindb<suffix>
    <prefix>idconfigdb<suffix>
    <prefix>kpnsdb<suffix>
    <prefix>mfaccountsdb<suffix>
    <prefix>mfconsoledb<suffix>
    <prefix>mfreportsdb<suffix>
    ```
3.  Install MySQL 8.0.        
4.  Import Foundry data exported in step 2 to MySQL 8.0.    
5.  Upgrade Foundry to 9.5. Refer to [Upgrading Volt MX Foundry to V9](Upgrading_VoltMX_Foundry_SP1.html) for upgrade instructions.