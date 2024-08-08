                              

Configure JNDI for Integration - Tomcat
=======================================

For MySQL
---------

### How to Configure JNDI

1.  Copy the `mysql-connector-x-8.x.x.jar` from the `VoltMXFoundry_Plugins\resources` folder.
2.  Paste the `mysql-connector-x-8.x.x.jar` file under user install directory inside the **Tomcat > Lib** folder - for example, `<User install directory>\apache-tomcat-9.x.x\lib`.

### How to Configure Data Source - Context.xml

1.  Open the `context.xml` file located under `<User install directory>\apache-tomcat-9.x.x\conf` depending on the database type.
2.  In the `context.xml` file, create two entries one for voltmxadmindb and the other for KDCDB by using the following template:
    
```

    <JarScanner scanManifest="false"/>  
    <Resource name=<JNDI_NAME> auth="Container" type="javax.sql.DataSource" maxActive="10" maxIdle="5" maxWait="10000" scope="Shareable"
      factory="org.apache.tomcat.jdbc.pool.DataSourceFactory" username="<USER_NAME>" password="<PWD>" driverClassName="<DB_Driver>"
      defaultReadOnly="true" url="<AdminDB_Connection_String>" testWhileIdle="true" testOnBorrow="true" testOnReturn="false" validationQuery="SELECT
      1" validationInterval="30000" timeBetweenEvictionRunsMillis="30000" initialSize="1" minIdle="0" removeAbandonedTimeout="300"
      removeAbandoned="true" logAbandoned="true" minEvictableIdleTimeMillis="30000" jmxEnabled="true"/>
```

3.  In the `context.xml` file, add the following data source configurations:
    
    In the following data source configurations, you must replace the following fields with appropriate values to access the database.
    
    The following table details field names to be configured for data source:
    
    | Field Name | Value |
    | --- | --- |
    | \<DB\_Driver\> | Database specific driver,<br><br>i.    **MySQL**: `com.mysql.jdbc.Driver`<br>ii.    **ORACLE**: `oracle.jdbc.driver.OracleDriver`<br>iii.    **MSSQL**: `com.microsoft.sqlserver.jdbc.SQLServerDriver` |
    | \<JNDI\_NAME\> | i.    JNDI string.jdbc/voltmxadmindb<br>ii.    jdbc/KDCDB |
    | \<PWD\> | Database password |
    | \<DB\_connection\_String\> | Database connection string, <br><br>i.    **MySQL**: `jdbc:mysql://localhost:3306/databaseName?autoReconnect=true&useSSL=false`<br>ii.    **ORACLE**: `jdbc:oracle:thin:@hostname:port Number:databaseName`<br>iii.    **MSSQL**: `jdbc:sqlserver://DBHOSTIP[\DBINSTANCENAME]:PORT;databasename=DBNAME` |
    | \<USER\_NAME\> | Database username. For example, root |
    
    *   The following JNDI configuration template is for **VoltMX Integration Service** component:
4.  Save the `context.xml` file.

### How to Configure Data Source - Admin.xml

1.  Go to `<User install directory>\apache-tomcat-9.x.x\conf\Catalina\localhost` folder.
2.  Create the admin.xml file.
3.  In the `admin.xml` file, add the following data source configurations:
    
    In the following data source configurations, you must replace the following fields with appropriate values to access the database.
    
    The following table details field names to be configured for data source:
    
    | Field Name | Value |
    | --- | --- |
    | \<DB\_Driver\> | Database specific driver,<br><br>i.    **MySQL**: `com.mysql.jdbc.Driver`<br>ii.    **ORACLE**: `oracle.jdbc.driver.OracleDriver`<br>iii.    **MSSQL**: `com.microsoft.sqlserver.jdbc.SQLServerDriver` |
    | \<JNDI\_NAME\> | i.    jdbc/voltmxreports. |
    | \<PWD\> | Database password |
    | \<DB\_connection\_String\> | Database connection string, <br><br>i.    **MySQL**: `jdbc:mysql://hostname/databaseName`<br>ii.    **ORACLE**: `jdbc:oracle:thin:@hostname:port Number:databaseName`<br>iii.    **MSSQL**: `jdbc:sqlserver://DBHOSTIP[\DBINSTANCENAME]:PORT;databasename=DBNAME` |
    | \<USER\_NAME\> | Database username. For example, root |
    
    *   The following JNDI configuration template is for **VoltMX Integration Service** (reportsdb) component:
    
```

        <?xml version="1.0" encoding="utf-8" ?>  
        <Context>  
        <Resource auth="Container" driverClassName=="<DB_Driver>" factory="org.apache.tomcat.jdbc.pool.DataSourceFactory" initialSize="5"
        jmxEnabled="true" logAbandoned="true" maxActive="10" maxIdle="5" maxWait="10000" minEvictableIdleTimeMillis="30000" minIdle="2"
        name="jdbc/voltmxreports" password="<PWD>" removeAbandoned="true" removeAbandonedTimeout="600" testOnBorrow="true"
        testOnReturn="false" testWhileIdle="true" timeBetweenEvictionRunsMillis="30000" type="javax.sql.DataSource" url="<AdminDB_Connection_String>"
        username="<USER_NAME>" validationInterval="30000" validationQuery="SELECT 1"/>  
        </Context>
```
        
4.  Save the `admin.xml` file.
