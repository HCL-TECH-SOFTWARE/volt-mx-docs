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
2.  Paste the `mysql-connector-java-8.0.12.jar` file under user install directory inside the `Tomcat > Lib folder` - for example, `<User install directory>\apache-tomcat-9.0.33\lib`.

### How to Configure Data Source

1.  Create the **authService.xml** file in the `<User install directory>\apache-tomcat-9.0.33\conf\Catalina\localhost` folder.
2.  In the authService.xml file, create two entries one for authglobaldb and the other for authconfig by using the following template:
    
    ```
     <Resource auth="Container" driverClassName="<DB\_Driver>" factory="org.apache.tomcat.jdbc.pool.DataSourceFactory" initialSize="5" jmxEnabled="true" logAbandoned="true" maxActive="10" maxIdle="10" maxWait="10000" minEvictableIdleTimeMillis="30000" minIdle="5" name="<JNDI\_NAME>" password="<PWD>" removeAbandoned="true" removeAbandonedTimeout="600" testOnBorrow="true" testOnReturn="false" testWhileIdle="true" timeBetweenEvictionRunsMillis="30000" type="javax.sql.DataSource" url="<DB\_connection\_String>" username="<USER\_NAME>" validationInterval="30000" validationQuery="SELECT 1"/>  
    ```
3.  In the `authService.xml` file, add the following data source configurations:
    
    In the following data source configurations, you must replace the following fields with appropriate values to access the database.
    
    The following table details field names to be configured for data source:
    
    | Field Name | Value |
    | --- | --- |
    | <DB\_Driver> | Database specific driver,<br>**MySQL**: `com.mysql.jdbc.Driver `<br>**ORACLE**: `oracle.jdbc.driver.OracleDriver `<br>**MSSQL**: `com.microsoft.sqlserver.jdbc.SQLServerDriver` |
    | <JNDI\_NAME> | jdbc/authglobaldb <br> jdbc/authconfig |
    | `<PWD>` | Database password |
    | `<DB_connection_String>` | Database connection string,<br> **MySQL**: `jdbc:mysql://hostname:port/databaseName?autoReconnect=true&amp;useSSL=false `<br>**ORACLE**: `jdbc:oracle:thin:@hostname:port Number:databaseName `<br>**MSSQL**: `jdbc:sqlserver://DBHOSTIP[\DBINSTANCENAME]:PORT;databasename=DBNAME` |
    | `<USER_NAME>` | Database username. For example, root |
    
4.  Save the `authService.xml` file.
