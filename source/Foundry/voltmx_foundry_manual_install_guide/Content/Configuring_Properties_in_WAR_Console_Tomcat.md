                             

Configure Properties Files in WAR Files - Tomcat
================================================

Volt MX  Foundry Console setup consists of configuring properties files in the .war files such as `accountsAPI.war, mbaasportal.war`, apiportal.war, and `workspaceService.war`. For more details, refer to [VoltMX Foundry Topology and Components](Foundry_Architecture_and_Components.md).

> **_Important:_**  The field names in the properties files of the following `.WAR` files are the same for all app servers. You must configure the values in the fields based on your app servers.

accountsAPI.war
---------------

To configure properties files in the accountsAPI.war file, follow these steps:

1.  Rename the `accountsAPI.war`  to  `accounts.war`.
2.  In the `` `accounts.war/`WEB-INF/classes`` folder, open the `accounts.properties` file, and then edit the following parameters.
   
```

#This properties file is NOT meant for individual developer changes,  
#if you need to overwrite any of the following, please use -DPARAMS locally on your PC!!  
      
ACCOUNTS_DB_JNDI_NAME=`<ACCOUNTS_JNDI_NAME>` # For example, jdbc/voltmxaccounts  
REPORTS_DB_JNDI_NAME=`<REPORTS_JNDI_NAME>` # For example, jdbc/voltmxreports  
      
ACCOUNTS_DB_SQL_DIALECT= <DB Dialect>  
`# Dialect string for MySQL org.hibernate.dialect.MySQLDialect` 
      
`# Dialect string for Oracle org.hibernate.dialect.Oracle9Dialect`  
`# Dialect string for SQL Server org.hibernate.dialect.SQLServerDialect`  
      
`ORACLE_SID=<Oracle ServiceID/ServiceName> TXN_ISOLATION_LEVEL=2`  
      
ACCOUNTS_DB_CONNECTION_ISOLATION_LEVEL=2  
ACCOUNTS_DB_SQL_SHOW=false  
ACCOUNTS_DB_SQL_USE_SCROLLABLE_RESULTSET=true  
ACCOUNTS_ENCRYPTION_KEY=`<ANY_RANDOM_GUID like "8bf8cae5-d25e-497c-93b8-72300eab45d1">`  
VOLTMX_INTEGRATION_SERVICE_PORT=`<Integration service port>`
{%endhighlight %}

3.  In the `accounts.properties` file, enter the appropriate path for LOG\_LOCATION=<INSTLL\_DIR>.
    
    For example:
    
    *   For Windows: <C:/VoltMXFoundry>
    *   For Linux: </home/user/VoltMXFoundry>  
        

mbaasportal.war
---------------

To configure properties files in the mbaasportal.war file, follow these steps:

1.  Rename the `mbaasportal.war`  to  `mfconsole.war`.
2.  In the `mfconsole.war/``WEB-INF/classes`, open the `config.properties` file, and then edit the following parameters.
    
```

VOLTMX_ACCOUNT_API_BASE_URL=`<PUBLIC_URL>`/accounts/api/v1_0/  
LOG_LEVEL=INFO  
LOG_OPTION=logfile  
LOG_LOCATION=`<USER_INSTALL_DIR>`/logs  
WAAS_ENCRYPTION_KEY=`<Any random GUID like 3bcf2351-a3e5-44b3-ac06-ff1bd5f738cd>`  
UI_ACCOUNTS_URLS=false  
FoundryVersion=`<Version of Volt MX Foundry>`
```

workspaceService.war
--------------------

To configure properties files in the workspaceService.war file, follow these steps:

1.  Rename the `workspaceService.war`  to  `workspace.war`.
2.  In the  `workspace.war/``WEB-INF/classes`, open the `workspaceService.properties` file, and then edit the following parameters.
    
   ```

       RDS_DB_TYPE=`<Database Type>`  
       WORKSPACESDB_NAME=`<Workspace Service Database Name>`  
       WAASGLOBALDB_NAME=`<Workspace Service Database Name>`  
       RDS_HOSTNAME=`<Dataserver IP/Hostname>`  
       RDS_PORT=`<Database port>`  
       MAX_ACTIVE_DBC=25  
       APPSERVER_TYPE=`<Application Server Type>`  
       WAAS_ENCRYPTION_KEY=`<ANY_RANDOM_GUID like "3bcf2351-a3e5-44b3-ac06-ff1bd5f738cd">`<br> hibernate.dialect=`<DB Dialect>`  
       `# Dialect string for MySQL org.hibernate.dialect.MySQLDialect`  
       `# Dialect string for Oracle org.hibernate.dialect.Oracle9Dialect`<br> 
       `# Dialect string for SQL Server org.hibernate.dialect.SQLServerDialect`<br>
       `#Dialect string for DB2 org.hibernate.dialect.DB2Dialect`  
       `ORACLE_SID=<Oracle ServiceID/ServiceName> TXN_ISOLATION_LEVEL=2`  
   ```
3.  In the `workspaceService.properties` file, configure the following properties with proper values, shown below:
    
     *   RDS_DB_TYPE=<Database Type>. For example, RDS_DB_TYPE=MySQL, MSSQL, ORACLE, or MariaDB.
     *   APPSERVER_TYPE=<Application server type>. For example, APPSERVER_TYPE=`TOMCAT`
    
     > **_Important:_** Enter the appropriate path for LOG\_LOCATION=<USER\_INSTALL\_DIR>.  
     > For example:  
     > \- For Windows: <C:/VoltMXFoundry>  
     > \- For Linux: </home/user/VoltMXFoundry>

4.  In the  `workspace.war/``WEB-INF/classes`, edit the `workspaceService.key`, shown below:
```

    master_key=<Random GUI ID>
    master_key_id=<Random GUI ID>
```

apiportal.war
-------------

Configure apiportal.war to install developer portal with Volt MX Foundry console. A developer portal is used to connect to various back-end systems and expose the data as standard RESTful APIs that are protected by standard oAuth 2.0.

**Perform the following action, to configure** **apiportal.war** **file:**

1.  In the `apiportal.war/``WEB-INF/classes`, open the `config.properties` file, and then edit the following parameters.
 
 ```

    VOLTMX_ACCOUNT_API_BASE_URL=`<PUBLIC_URL>`/accounts/api/v1_0/
    LOG_LEVEL=INFO
    LOG_OPTION=logfile
    LOG_LOCATION=`<USER_INSTALL_DIR>`/logs/apiportal  
    VOLTMX_DEVELOPER_PORTAL_BASE_URL= <PUBLIC_URL>/apiportal
```
