                            

Configure Middleware Home
-------------------------

APPLICABLE FOR ALL APPLICATION SERVERS

Extract the `middleware_home.zip` from the `VoltMXFoundry_Plugins\middleware\middleware_home.zip`, and place the unzipped `middleware_home` folder in your install directory.

Modify the variables in the following files:

*   middleware\_home/middleware/middleware-bootconfig/admin/serverconsole.properties
*   middleware\_home/middleware/middleware-bootconfig/middleware.properties
*   middleware\_home/middleware/middleware-bootconfig/oscache.properties
*   middleware\_home/middleware/middleware-bootconfig/admin/deployment-config.properties

### Set Middleware Home - Tomcat

1.  Go to the artifacts you downloaded from Volt MX Downloads. For example, `\VoltMXFoundry_Plugins`
2.  Go to your Tomcat install location and open the `conf` folder.  
    Location for `conf` folder: `\TomcatInstallerFolder>\apache-tomcat-8.5.32-windows-x64\apache-tomcat-8.5.32\conf`
3.  Open the `Catalina.properties` file from the `conf` folder.
4.  Set the following path for **middleware home** property in the `Catalina.properties` file.
```
middleware.home=<YourLocalDrive>:/InstallerAssests/Manual/Tomcat/install/middleware_home
```
5.  Go to <MFINstallLocation>/middleware\_home/middleware/middleware-bootconfig/admin folder, edit `serverconsole.properties` file and make the following changes based on your database type
```
#Server Console configuration properties file

#########################################################################
#Hibernate Dialect related properties.
#########################################################################
#For SQL Server
#voltmxadmindb.dialect=com.voltmx.console.admin.dialect.CustomSQLServerDialect
#
#For MySQL
#voltmxadmindb.dialect=com.voltmx.console.admin.dialect.CustomMySQLDialect
#
#For Oracle thin driver
#voltmxadmindb.dialect=com.voltmx.console.admin.dialect.CustomOracleDialect
#
#########################################################################

voltmxadmindb.dialect=com.voltmx.console.admin.dialect.CustomMySQLDialect

#########################################################################
#Admin and Report Database JNDI Names
#########################################################################

admindb.jndi.name=jdbc/voltmxadmindb
reportsdb.jndi.name=jdbc/voltmxreportsdb

#########################################################################
#Database Type (mysql/oracle/sqlserver)
#########################################################################

admindb.dbtype=mysql
reportsdb.dbtype=mysql

#########################################################################

```7.  In the `middleware_home/middleware/middleware-bootconfig` folder, rename the `middleware_single.properties` file as `middleware.properties`.
8.  In the `middleware_home/middleware/middleware-bootconfig/admin` folder, rename the `deployment-config_tomcat.properties` file as `deployment-config.properties`.
9.  Go to <MFINstallLocation>/middleware\_home/middleware/middleware-bootconfig/admin folder, edit `deployment-config.properties` file and make the following changes

> **_Note:_** Replace the variables enclosed in $\_$ with values based on your configuration.  
For example, replace `$SERVER_CHOICE$` with `TOMCAT`.

```
   config.usersdb.validation=false

   config.wap-default.type=$SERVER_CHOICE$

   config.wap-default.host=$HOST_IP$

   config.wap-default.port=$HTTPS_PORT$

   config.wap-default.deploy.URL=$COM_PROTOCOL$://$HOST_IP$:$HTTPS_PORT$/manager/text

   config.wap-default.deploy.managerPWD=m@n@g3r123

   config.sms-default.type=$SERVER_CHOICE$

   config.sms-default.host=$HOST_IP$

   config.sms-default.port=$HTTPS_PORT$

   config.sms-default.deploy.URL=$COM_PROTOCOL$://$HOST_IP$:$HTTPS_PORT$/manager

   config.sms-default.deploy.managerPWD=m@n@g3r123

   config.sms-default.deploy.dir=$USER_INSTALL_DIR$/middleware_home/apps

   config.rc-default.type=$SERVER_CHOICE$

   config.rc-default.host=$HOST_IP$

   config.rc-default.port=$HTTPS_PORT$

   config.rc-default.deploy.dir=$USER_INSTALL_DIR$/middleware_home/lib/apps

   app.store.location=$USER_INSTALL_DIR$/middleware_home/appstore
```

### Set Middleware Home - JBoss

1.  Go to the artifacts you downloaded from Volt MX Downloads. For example, `\VoltMXFoundry_Plugins`
2.  Create a lib directory, and inside that create a database directory in your middleware home, For example, `$MIDDLEWARE_HOME\lib\database`. Place your respective database connector jar along with `module.xml` and its contents in MIDDLEWARE\_HOME\\lib\\database\\.
3.  Go to your JBoss install location and open the `<JBossInstallDir>\bin` folder.  
    Location for `bin` folder: `\JBossInstallDir>\bin`
4.  Open the `standalone.bat` file from the `bin` folder. In case of Linux, `standalone.sh`
5.  Set the **JAVA\_OPTS** variable in the `standalone.bat` file, shown below:
    
    set "JAVA\_OPTS= -server -Xms2048m -Xmx2048m -XX:NewSize=512m -XX:MaxNewSize=256m -XX:PermSize=512m -XX:MaxPermSize=1024m -XX:+CMSClassUnloadingEnabled -Djava.awt.headless=true -Djava.net.preferIPv4Stack=true -Dsun.rmi.dgc.client.gcInterval=3600000 -Dsun.rmi.dgc.server.gcInterval=3600000 -XX:+UseConcMarkSweepGC -XX:+CMSClassUnloadingEnabled -XX:+CMSIncrementalMode -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=<specify the part for your\_log\_location>/logs/heapdumps -Dmiddleware.home=<specify your middleware home for the install directory that extracted, for example: <InstallDrive>:\\install>\-Dnet.spy.log.LoggerImpl=net.spy.memcached.compat.log.Log4JLogger -Djboss.as.management.blocking.timeout=1200"
    
6.  In the `middleware_home/middleware/middleware-bootconfig` folder,
    1.  Rename the `middleware_single.properties` file as `middleware.properties` for Bundled JBoss.
    2.  Rename the `middleware_remote.properties` file as `middleware.properties` for Pre-Configured or MultiNode JBoss.
7.  In the `middleware_home/middleware/middleware-bootconfig/admin` folder, rename the `deployment-config_jboss.properties` file as `deployment-config.properties`.
8.  Go to <MFINstallLocation>/middleware\_home/middleware/middleware-bootconfig/admin folder, edit `deployment-config.properties` file and make the following changes

> **_Note:_** Replace the variables enclosed in $\_$ with values based on your configuration.  
For example, replace `$SERVER_CHOICE$` with `JBoss`.

```
   config.usersdb.validation=false

   config.wap-default.type=$SERVER_CHOICE$

   config.wap-default.host=$HOST_IP$

   config.wap-default.port=$HTTPS_PORT$

   #config.wap-default.deploy.URL=__config.wap-default.deploy.URL__

   #config.wap-default.deploy.managerID=manager

   #config.wap-default.deploy.managerPWD=m@n@g3r123  
  
   #config.wap-default.deploy.dir=$USER_INSTALL_DIR$/jboss/standalone/deployments  
   #config.sms-default.type=Tomcat  

   #config.sms-default.host=localhost

   #config.sms-default.port=80

   #config.sms-default.deploy.URL=__config.sms-default.deploy.URL__

   #config.sms-default.deploy.dir=__config.sms-default.deploy.dir__

   #config.sms-default.deploy.managerID=manager

   #config.sms-default.deploy.managerPWD=m@n@g3r123

   config.rc-default.type=$SERVER_CHOICE$

   config.rc-default.host=$HOST_IP$

   config.rc-default.port=$HTTPS_PORT$

   config.rc-default.deploy.dir=$USER_INSTALL_DIR$/jboss/standalone/deployments

   app.store.location=$USER_INSTALL_DIR$/middleware_home/appstore  
```11.  Go to <MFINstallLocation>/VoltMXFoundry\_Plugins/middleware/admin.war/WEB-INF folder, edit the `web.xml` file and make the following changes
    *   Search for <!--###JBOSS62 CONFIGURATION###, and replace it with " ".
    *   Search for ###JBOSS62 CONFIGURATION###-->, and replace it with " ".
12.  Go to <MFINstallLocation>/VoltMXFoundry\_Plugins/middleware/admin.war/WEB-INF folder, edit the `applicationContext.xml` file and make the following changes
    *   Search for <!--###JBOSS HIBERNATE PROPERTIES###, and replace it with " ".
    *   Search for ###JBOSS HIBERNATE PROPERTIES###-->, and replace it with " ".

> **_Important:_**  For ActiveMQ (If INSTALL\_MODE=SINGLE; COMP\_SERVER\_ENABLED = true or COMP\_ALL\_ENABLED=true),

*   Expand $IA\_PROJECT\_DIR$\\resources\\common\\server\_files\\ActiveMQ\_jars.zip.
*   Execute ANT $IA\_PROJECT\_DIR$\\resources\\common\\scripts\\add-activemq-jar-to-integration-wars.xml
*   Properties file : $IA\_PROJECT\_DIR$\\resources\\common\\scripts\\create-shared-libs.properties

> **_Important:_**   For Non-JBoss,

*   Expand admin.war into admin\_temp, and delete $USER\_INSTALL\_DIR$$/$VoltMXFoundry\_Plugins$/$middleware$/$admin.war
*   Delete the following files:
    *   $USER\_INSTALL\_DIR$$/$admin\_temp$/$WEB-INF$/$jboss-deployment-structure.xml
    *   $USER\_INSTALL\_DIR$$/$admin\_temp$/$WEB-INF$/$jboss-web.xml
*   Set the following variables:
    *   $MODIFIED\_WAR\_FILE$ = $USER\_INSTALL\_DIR$$/$VoltMXFoundry\_Plugins$/$middleware$/$admin.war
    *   $WAR\_INPUT\_DIR$ = $USER\_INSTALL\_DIR$$/$admin\_temp
*   Execute ant
    *   $IA\_PROJECT\_DIR$\\resources\\common\\server\_files\\create-war.xml
    *   Properties file = $IA\_PROJECT\_DIR$\\resources\\common\\server\_files\\create-war.properties
*   Delete admin\_temp
