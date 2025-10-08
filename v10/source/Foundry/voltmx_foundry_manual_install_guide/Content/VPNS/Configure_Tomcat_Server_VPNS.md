                             

Configure Engagement Services - Tomcat\_Server
----------------------------------------------

To configure Engagement Services on Tomcat server, follow these steps:

1.  Go to `<Tomcat Installation Directory>/bin`
2.  Modify the `catalina.bat`  file with the following parameters:
    
    | Parameters (for JVM) | Required | Description |
    | --- | --- | --- |
    | \-Xmx2048m | Yes | Minimum Heap size: 2GB |
    | \-Xms2048m | Yes | Maximum Heap size: 2GB |
    | \-XX:MaxPermSize=512m | Yes | One-fourth of the main Heap memory assigned |
    | \-XX:+UseConcMarkSweepGC | Yes | This is a recommended setting |
    | \-XX:HeapDumpPath | Optional | This parameter is to get `Heap Dump Path` |
    | \-Dvpns.configLocation | Yes | This is the directory where the `configResource.properties`, `database.properties`, and `vmslog4j2. xml` files must be placed.For example, if the location is`/data/vpns-config`, then you must specify the property as -`Dvpns.configLocation=/data/vpns-config` |
    | \-Dlog4j2.enableJndiJdbc=true | Yes | This parameter is to fix `log4j` vulnerability |
    
    > **_Note:_** \-Dhibernate.dialect : This parameter mentioned in the above table is required only for Oracle database.
    
    **Example**: This is a sample for above mentioned parameters.
    
```
set JAVA_OPTS="-server -Xms2048m -Xmx2048m -XX:NewSize=512m -XX:MaxNewSize=256m -XX:PermSize=512m -XX:MaxPermSize=1024m -XX:+CMSClassUnloadingEnabled -XX:+UseConcMarkSweepGC -XX:+CMSIncrementalMode -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/home/vpns/logs/heapdumps -Djava.awt.headless=true -Djava.net.preferIPv4Stack=true -Dnet.spy.log.LoggerImpl=net.spy.memcached.compat.log.Log4JLogger -Dfile.encoding=UTF8 -Dvpns.configLocation=/data/vpns-config/ -Dlog4j2.enableJndiJdbc=true"
```
3.  Configure following jvm parameters:
    
    \-Xms2048m –Xmx2048m -Dvpns.configLocation=<path of the vpns config location extracted from vpns-resources.tar>
    
4.  Configure JRE Home. Example: Set `JRE_HOME=C:/Program Files/Java/jre1.8.0_221`.
5.  Save the configuration.
6.  Configure the datasource.
    
    Database
    --------

### MySQL
    
   1.  Copy `mysql-connector-x-8.x.x.jar` to `<Tomcat installation directory>/lib`
   2.  Create the **vpns.xml** file in the `<User install directory>\apache-tomcat-9.x.x\conf\Catalina\localhost` folder.
   3.  In the **vpns.xml** file, add the following data source configurations:
```
<Resource name="jdbc/vpnsdb" auth="Container" type="javax.sql.DataSource" scope="Shareable" factory="org.apache.tomcat.jdbc.pool.DataSourceFactory" maxActive="50" minIdle="1" maxIdle="10" testWhileIdle="true" maxWait="10000" initialSize="10" testOnBorrow="true" validationQuery="SELECT 1" removeAbandoned="false"
       removeAbandonedTimeout="180" logAbandoned="false" username="username" password="password" driverClassName="com.mysql.jdbc.Driver"
       url="jdbc:mysql://<host>:<port>/
        <database>?autoReconnect=true&amp;
        useUnicode=yes&amp;characterEncoding=UTF-8&amp;cachePrepStmts=true&amp;
        cacheCallableStmts
        =true&amp;cacheServerConfiguration=true&amp;useLocalSessionState
        =true&amp;elideSetAutoCommits
        =true&amp;alwaysSendSetIsolation=false&amp;enableQueryTimeouts=false&amp;
        rewriteBatchedStatements=true&amp;max_allowed_packet=104857600 "/>
```
    
   4. Replace the value given below in the above configuration.
 
 | Configuration Value | Description |
 | --- | --- |
        | host | Database server IP/name |
        | port | Database server port |
        | username | Database user name |
        | password | Database password |
        | database | Database name |
        
    
### Oracle
    
   1.  Copy `ojdbc11.jar` to `<Tomcat installation directory>/lib`
   2.  Create the **vpns.xml** file in the `<User install directory>\apache-tomcat-9.x.x\conf\Catalina\localhost` folder.
   3.  In the **vpns.xml** file, add the following data source configurations:
```
<Resource name="jdbc/vpnsdb" auth="Container" type="javax.sql.DataSource" scope="Shareable"
        
        factory="org.apache.tomcat.jdbc.pool.DataSourceFactory" maxActive="30" minIdle="1" maxIdle="10" testWhileIdle="true"
        
        maxWait="10000" initialSize="10" testOnBorrow="true" validationQuery="select 1 from dual" removeAbandoned="false"
        
        removeAbandonedTimeout="180" logAbandoned="false" username="username" password="password" driverClassName="oracle.jdbc.driver.OracleDriver" url="jdbc:oracle:thin:@host:port:sid"/>
```
   
   4.  Replace the value given below in the above configuration.
  
  | Configuration Value | Description |
  | --- | --- |
  | host | Database server IP/name |
        | port | Database server port |
        | username | database user name |
        | password | Database password |
        | sid | Oracle service id/name |
        
### SQLServer
    
  1.  Copy `sqljdbc4-4.1.jar`to `<Tomcat installation directory>/lib`
  2.  Create the **vpns.xml** file in the `<User install directory>\apache-tomcat-9.x.x\conf\Catalina\localhost` folder.
  3.  In the **vpns.xml** file, add the following data source configurations:
```
<Resource name="jdbc/vpnsdb" auth="Container" type="javax.sql.DataSource" scope="Shareable"factory="org.apache.tomcat.jdbc.pool.DataSourceFactory" maxActive="50" minIdle="1" maxIdle="10" testWhileIdle="true" maxWait="10000" initialSize="10" testOnBorrow="true" validationQuery="SELECT 1" removeAbandoned="false"
        
   removeAbandonedTimeout="180" logAbandoned="false" username="username" password="password"
   driverClassName="com.microsoft.sqlserver.jdbc.SQLServerDriver" url="jdbc:sqlserver://host:port;databaseName=database;user=username;
   password=password;sendStringParametersAsUnicode=true;"/>
   ```
   
  4.  Replace the value given below in the above configuration.
  
  | Configuration Value | Description |
  | --- | --- |
        | host | Database server IP/name |
        | port | Database server port |
        | username | Database user name |
        | password | Database password |
        | database | Database name |
        

Deploy Engagement Services
--------------------------

1.  To deploy Engagement Services .wars to Tomcat Server, copy and past the `vpns.war` file to the following location:
    
    `<Tomcat installation directory>/webapps/`
    
2.  After you deploy Engagement Services, complete the Engagement Services setup and start the Tomcat Server.

Post Upgrade
------------

To start Tomcat server, post upgrade follow these steps:

1.  Clean up tomcat work directory.
    
    <Tomcat installation directory\>/work/Catalina/<host\>/
    
2.  Remove `vpns` folder in the above path and re-start Tomcat service.
