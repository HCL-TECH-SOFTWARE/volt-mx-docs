                           


Upgrading Foundry from 9.2 to 9.5 with MySQL upgrade from 5.7 to 8.0
====================================================================

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