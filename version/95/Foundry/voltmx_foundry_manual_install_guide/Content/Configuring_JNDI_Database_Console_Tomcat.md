                             

Configure JNDI - Tomcat
=======================

For MySQL
---------

### How to Configure JNDI

1.  Copy the `mysql-connector-x-8.x.x.jar` from the `VoltMXFoundry_Plugins\resources` folder.
2.  Paste the `mysql-connector-x-8.x.x.jar` file under user install directory inside the **Tomcat > Lib** folder - for example, `<User install directory>\apache-tomcat-9.x.x\lib`.

### How to Configure Data Source - Accounts

1.  Create the **accounts.xml** file in the `<User install directory>\apache-tomcat-9.x.x\conf\Catalina\localhost` folder.
2.  In the accounts.xml file, create two entries one for accounts and the other for reports by using the following template:

 ```<Resource auth="Container" testOnBorrow="true" testWhileIdle="true" validationQuery="SELECT 1" driverClassName="<DB\_Driver>" logAbandoned="true" maxActive="10" maxIdle="5" maxWait="120000" name="<JNDI\_NAME>" scope="Shareable" type="javax.sql.DataSource" url="<DB\_connection\_String>" username="<USER\_NAME>" password="<PWD>"/>
```

3.  In the above created file, add the following data source configurations:
    
    In the following data source configurations, you must replace the following fields with appropriate values to access the database.
    
    The following table details field names to be configured for data source:
    
| Field Name | Value |
| --- | --- |
| <DB\_Driver> | Database specific driver,<br>i.    MySQL: `com.mysql.jdbc.Driver`<br>ii.    ORACLE: `oracle.jdbc.driver.OracleDriver`<br>iii.    MSSQL: `com.microsoft.sqlserver.jdbc.SQLServerDriver` |
| <JNDI\_NAME> | i.    jdbc/voltmxaccounts <br>ii.    jdbc/voltmxreports |
| `<PWD>` | Database password |
| `<DB_connection_String>` | Database connection string for the accounts and reports db<br>i.    MySQL: `jdbc:mysql://hostname:port/databaseName?autoReconnect=true&amp;useSSL=false`<br>ii.    ORACLE: `jdbc:oracle:thin:@hostname:port Number:databaseName`<br>iii.    MSSQL: `jdbc:sqlserver://DBHOSTIP[\DBINSTANCENAME]:PORT;databasename=DBNAME` |
| `<USER_NAME>` | Database username. For example, root |
    
4.  Save the `accounts.xml` file.

### How to Configure Data Source - Workspace

1.  Create the **workspace.xml** file in the `<User install directory>\apache-tomcat-9.x.x\conf\Catalina\localhost` folder.
2.  In the workspace.xml file, create two JNDI entries one for workspacesglobaldb and the other for waasglobaldb by using the following template:
    
    > **_Important:_** The JNDI names (for workspacesglobaldb and waasglobaldb) should point to same datasource.

```<Resource auth="Container" testOnBorrow="true" testWhileIdle="true" validationQuery="SELECT 1" driverClassName="<DB\_Driver>" logAbandoned="true" maxActive="10" maxIdle="5" maxWait="120000" name="<JNDI\_NAME>" scope="Shareable" type="javax.sql.DataSource" url="<DB\_connection\_String>" username="<USER\_NAME>" password="<PWD>"/>
```
    
3.  In the above created file, add the following data source configurations:
    
    In the following data source configurations, you must replace the following fields with appropriate values to access the database.
    
    The following table details field names to be configured for data source:
    
| Field Name | Value |
| --- | --- |
| <DB\_Driver> | Database specific driver,<br>i.    MySQL: `com.mysql.jdbc.Driver` <br>ii.    ORACLE: `oracle.jdbc.driver.OracleDriver`<br>iii.    MSSQL: `com.microsoft.sqlserver.jdbc.SQLServerDriver` |
| <JNDI\_NAME> | i.    jdbc/**waasglobaldb** <br>ii.    jdbc/**workspacesglobaldb** |
| `<PWD>` | Database password |
| `<DB_connection_String>` | Database connection string, <br>i.    MySQL:  `jdbc:mysql://hostname:port/databaseName?autoReconnect=true&amp;useSSL=false` <br>ii.    ORACLE: `jdbc:oracle:thin:@hostname:port Number:databaseName`<br>iii.    MSSQL: `jdbc:sqlserver://DBHOSTIP[\DBINSTANCENAME]:PORT;databasename=DBNAME` |
| `<USER_NAME>` | Database username. For example, root |
    
4.  Save the `workspace.xml` file.
