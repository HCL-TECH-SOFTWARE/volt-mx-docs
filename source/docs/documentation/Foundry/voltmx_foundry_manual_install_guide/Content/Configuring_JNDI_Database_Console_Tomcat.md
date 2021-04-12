---
layout: "documentation"
category: "voltmx_foundry_manual_install_guide"
---
                             

Configure JNDI - Tomcat
=======================

For MySQL
---------

### How to Configure JNDI

1.  Copy the `mysql-connector-java-8.0.12.jar` from the `VoltMXFoundry_Plugins\resources` folder.
2.  Paste the `mysql-connector-java-8.0.12.jar` file under user install directory inside the **Tomcat > Lib** folder - for example, `<User install directory>\apache-tomcat-9.0.33\lib`.

### How to Configure Data Source - Accounts

1.  Create the **accounts.xml** file in the `<User install directory>\apache-tomcat-9.0.33\conf\Catalina\localhost` folder.
2.  In the accounts.xml file, create two entries one for accounts and the other for reports by using the following template:

     ```<Resource auth="Container" testOnBorrow="true" testWhileIdle="true" validationQuery="SELECT 1" driverClassName="<DB\_Driver>" logAbandoned="true" maxActive="10" maxIdle="5" maxWait="120000" name="<JNDI\_NAME>" scope="Shareable" type="javax.sql.DataSource" url="<DB\_connection\_String>" username="<USER\_NAME>" password="<PWD>"/>```

3.  In the above created file, add the following data source configurations:
    
    In the following data source configurations, you must replace the following fields with appropriate values to access the database.
    
    The following table details field names to be configured for data source:
    
    | Field Name | Value |
    | --- | --- |
    | <DB\_Driver> | Database specific driver,<br>**MySQL**: `com.mysql.jdbc.Driver <br>`**ORACLE**: `oracle.jdbc.driver.OracleDriver <br>`**MSSQL**: `com.microsoft.sqlserver.jdbc.SQLServerDriver` |
    | <JNDI\_NAME> | jdbc/voltmxaccounts <br>jdbc/voltmxreports |
    | `<PWD>` | Database password |
    | `<DB_connection_String>` | Database connection string for the accounts and reports db<br>**MySQL**: `jdbc:mysql://hostname:port/databaseName?autoReconnect=true&amp;useSSL=false<br>`**ORACLE**: `jdbc:oracle:thin:@hostname:port Number:databaseName<br>`**MSSQL**: `jdbc:sqlserver://DBHOSTIP[\DBINSTANCENAME]:PORT;databasename=DBNAME` |
    | `<USER_NAME>` | Database username. For example, root |
    
4.  Save the `accounts.xml` file.

### How to Configure Data Source - Workspace

1.  Create the **workspace.xml** file in the `<User install directory>\apache-tomcat-9.0.33\conf\Catalina\localhost` folder.
2.  In the workspace.xml file, create two JNDI entries one for workspacesglobaldb and the other for waasglobaldb by using the following template:
    
    > **_Important:_** The JNDI names (for workspacesglobaldb and waasglobaldb) should point to same datasource.

    ```<Resource auth="Container" testOnBorrow="true" testWhileIdle="true" validationQuery="SELECT 1" driverClassName="<DB\_Driver>" logAbandoned="true" maxActive="10" maxIdle="5" maxWait="120000" name="<JNDI\_NAME>" scope="Shareable" type="javax.sql.DataSource" url="<DB\_connection\_String>" username="<USER\_NAME>" password="<PWD>"/>```
    
3.  In the above created file, add the following data source configurations:
    
    In the following data source configurations, you must replace the following fields with appropriate values to access the database.
    
    The following table details field names to be configured for data source:
    
    | Field Name | Value |
    | --- | --- |
    | <DB\_Driver> | Database specific driver,<br>**MySQL**: `com.mysql.jdbc.Driver <br>`**ORACLE**: `oracle.jdbc.driver.OracleDriver <br>`**MSSQL**: `com.microsoft.sqlserver.jdbc.SQLServerDriver` |
    | <JNDI\_NAME> | jdbc/**waasglobaldb** <br>jdbc/**workspacesglobaldb** |
    | `<PWD>` | Database password |
    | `<DB_connection_String>` | Database connection string, <br>**MySQL**:  `jdbc:mysql://hostname:port/databaseName?autoReconnect=true&amp;useSSL=false` <br>**ORACLE**: `jdbc:oracle:thin:@hostname:port Number:databaseName`<br>**MSSQL**: `jdbc:sqlserver://DBHOSTIP[\DBINSTANCENAME]:PORT;databasename=DBNAME` |
    | `<USER_NAME>` | Database username. For example, root |
    
4.  Save the `workspace.xml` file.
