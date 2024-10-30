                           

Upgrade from VoltMX Foundry V8 SP2
========================================


Before upgrading, run the following scripts for your database:
    
*   For Oracle:
```
delete from <admindb>.schema_version where script = 'V62.1__voltmxadmin-oracle-8.2.0.0.sql';
        
```
*   For MySQL:
```
delete from <admindb>.schema_version where script = 'V62.1__voltmxadmin-mysql-8.2.0.0.sql';
```
*   For DB2:
```
delete from <admindb>.schema_version where script = 'V62.1__voltmxadmin-db2-8.2.0.0.sql';
```
*   For SQL Server:
```
delete from <admindb>.schema_version where script = 'V62.1__voltmxadmin-sqlserver-8.2.0.0.sql';
```

