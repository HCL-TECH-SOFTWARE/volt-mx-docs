                             

Configure Properties Files in WAR Files - Tomcat
================================================

Volt MX  Foundry identity console setup requires configuring properties files in the `authService.war` files. For more details, refer to [VoltMX Foundry Topology and Components](Foundry_Architecture_and_Components.md).

> **_Important:_**  The field names in the properties files of the following `.WAR` files are the same for all app servers. You must configure the values in the fields based on your app servers.

authService.war
---------------

To configure properties files in the authService.war file, follow these steps:

1.  In the ``authService.war`/WEB-INF/classes` ``, open the `authService.properties` file, and then edit the following parameters.
    
    #Database parameters  
```
    RDS_DB_TYPE=<Database Type>  
    RDS_HOSTNAME=<Dataserver IP/Hostname>  
    RDS_PORT=<Database port>  
    AUTH_GLOBAL_DBNAME=<VoltMX identity service global database name>  
    AUTH_CONFIG_DBNAME=<VoltMX identity service configuration database name>  
    MAX_ACTIVE_DBC=20  
    AUTH_GLOBAL_DB_MAX_ACTIVE_DBC=5  

    #General auth parameters  

    APPSERVER\_TYPE=<Application server type>  
    LOG\_LEVEL=INFO  
    LOG\_OPTION=logfile  
    LOG\_LOCATION=<USER\_INSTALL\_DIR>/logs  
    ADMIN\_USERSTORE\_PROVIDER=AUTH  

    #add the following property only for Oracle  
    TXN\_ISOLATION\_LEVEL=2
```
    
2.  In the `` `authService.properties` `` file, configure the following properties with proper values, shown below:
    
    *   RDS\_DB\_TYPE=<Database Type>. For example, RDS\_DB\_TYPE=MySQL, MSSQL, ORACLE, or MariaDB.
    *   APPSERVER\_TYPE=<Application server type>. For example, `TOMCAT`
    
    > **_Important:_** Enter the appropriate path for LOG\_LOCATION=<USER\_INSTALL\_DIR>.  
    For example:  
    \- For Windows: <C:/VoltMXFoundry>  
    \- For Linux: </home/user/VoltMXFoundry>
    
3.  In the `WEB-INF/classes`, edit the `authservice.key` file, shown below:

```
    master\_key=<Any Random GUID>  
    master\_key\_id=<Any Random GUID>
```
