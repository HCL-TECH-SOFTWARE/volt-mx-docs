                          

You are here: Hostname/Port changes for Tomcat Application Server

FAQs and Troubleshooting
========================

This section lists the troubleshooting tips to resolve problems that you may encounter during installation.

*   **Issue**: After installing VoltMX Foundry on a Tomcat application server with a MySQL database, publishing of Integration Services fails with the following error: 

    <pre><code>Internal Error. Failed to check Server state - Failed to propagate Integration Services to Runtime. Status [deploy_failed]. Details - Database Migration failed with error : org.flywaydb.core.internal.exception.FlywaySqlException: Unable to obtain connection from database (jdbc:mysql://&lt;URL&gt;:&lt;Port No.&gt;) for user '&lt;user&gt;': Communications link failure The last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.
    SQL State : 08S01 Error Code : 0 Message : Communications link failure The last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server. [ Tracking id - &lt;ID&gt;]</code></pre>

    **Workaround**:
    
    To resolve this error, add the following -D parameter to the `catalina.sh` file: 

    `-DSERVER_DB_USE_SSL=false`


*   **Issue**: If you have upgraded from Foundry V8.x or lower versions to V9 GA or higher versions, some of the services fail to work because of an internal authentication error. These services, such as the **Foundry Admin Adapter**, **Email Adapter**, and **Workflow Email** services, fail with the following error:
    
    <pre><code>{
    returned HTTP [400], Response Body [{"details":{"message":"Could not find trust security group for given envId","errcode":0,"errmsg":"Could not find trust security group for given envId"},"httpstatus":"Bad Request","requestid":"5e36d604-09ab-4fbb-9437-42c1d828140f;98","domain":"AUTH","code":-65,"mfcode":"Auth-65","message":"Some of the input parameters provided are invalid"}]
    }</code></pre>
	
    
    **Workaround:**
    
    To avoid the error, you must perform the following:
    
    1.  Log in to Foundry Console which you upgraded for V9.x.
    2.  In your Volt MX Foundry account, click **Environments**. The Environments page appears.
    3.  Click **MODIFY** for the environment. The **Modify Environment** page appears, shown below:
        
        ![](Resources/Images/Foundry-Environments-onpremise_642x281.png)
        
    4.  In the **Modify Environment** page, click **SAVE**.

*   **Issue**: While upgrading from Foundry 7.3 to Volt MX Foundry V9 and then upgrading to a version after V9, the upgrade fails due to the following error: _"java.sql.SQLSyntaxErrorException: Table 'prefixidglobaldbsuffix.schema\_version' doesn't exist"_.
    
    **Workaround**:
    
    To avoid this issue, perform the following step:
    
    *   Delete the idglobaldb schema before upgrading to the version later than V9.

*   **Issue**
    
    The upgrade installation from v8.2.1.3 to v9.x rolls back.
    
    **Workaround**
    
    Before the upgrade, execute the following SQL statement from admin database:
    
    <pre><code>
    For MySQL:
     delete from &lt;admindb&gt;.schema_version where script = 'V62.1__voltmxadmin-mysql-8.2.0.0.sql';  
      
    For SQLServer:
     delete from &lt;admindb&gt;.schema_version where script = 'V62.1__voltmxadmin-sqlserver-8.2.0.0.sql';  
     

    For Oracle:
     delete from &lt;admindb&gt;.schema_version where script = 'V62.1__voltmxadmin-oracle-8.2.0.0.sql';  
    
    </code></pre>
      
    

*   **Issue**
    
    If you upgrade the integration service or install on new server using the existing database but with a different server details like fully qualified URL port, and when you publish an app, the app publish fails.
    
    **Workaround**
    
    You must update management server details in the `server_configuration` table in admin database.
    

*   **How to change the Hostname/IP address** and **port** details of the existing Volt MX Foundry Server.
    
    After the installation of Volt MX Foundry, if you want to change the existing Hostname/IP address that was used during the installation of Volt MX Foundry, follow these steps:
    
    1.  Go to your Volt MX Foundry install folder.
    2.  Go to `scripts` folder - for example, `<MFinstallfolder>/scripts`. The `scripts` folder contains a .sql file for the database type that you selected while installing Volt MX Foundry.
    3.  Open the `.sql` file in a text editor.
        
        > **_Important:_** If you want to access Volt MX Foundry Console with a new port, change the value for the `NEW_PORT` with the new value. Otherwise, assign the value of the `OLD_PORT` to the `NEW_PORT` variable.
        
        > **_Important:_** If you want to access Volt MX Foundry Console with a hostname/IP address, change the value for the `NEW_HOST` with the new value. Otherwise, assign the value of the `OLD_HOST` to the `NEW_HOST` variable.
        
    4.  Change the values for the following variables.
        
        *   For MySQL, MariaDB, DB2, and SQL Server, replace the values for the `NEW_HOST` and the `NEW_PORT` with new values.
        *   For Oracle, replace all the occurrences of the `NEW_HOST` and the `NEW_PORT` with new values.
        
        > **_Important:_** If you have selected your database as DB2, follow the steps provided in the .sql file in the `<MFinstallfolder>/scripts` folder.
        
    5.  Run the SQL script on the database where you have installed Volt MX Foundry.
        

*   **Issue**
    
    If the `java.sql. BatchUpdateException: Prepared statement needs to be re-prepared` error is logged in the Identity service logs or if certain operations fail to work properly when an identity service is invoked, do the following.
    
    **Workaround**
    
    Add the following server variable in MariaDB ini file located in the MariaDB installation folder.

    `table_open_cache=64`
    
   
    
    Path for MariaDB ini file,
    
     `<USER_INSTALL_DIR>\MariaDB 10.1\data\my.ini`
    

*   **Issue**
    
    If you face the error dialogue "`Windows error 2 occurred while loading the Java VM`" while launching the Volt MX Foundry Patch Installer, because of the following:
    
    Volt MX Foundry Patch Installer runs with your system's default Java. If an user machine has Java 8 installed, then check if the machine's `System Environment Path for Java`  or  `JAVA_HOME`  is set to `c:\programdata\oracle\java\javapath`
    
    **Workaround**
    
    1.  Remove the current path from `JAVA_HOME` and set the new path as `C:\Program Files (x86)\Java\jre1.8.0_40\bin`
    2.  Launch the Volt MX Foundry Patch Installer.
    3.  After the installation completed, reset the machine's  `System Environment Path for Java`  or  `JAVA_HOME` path to it's original path. For example `c:\programdata\oracle\java\javapath`

*   **Issue**
    
    If your service provider's certificate is not configured, the system displays an error - "peer not authenticated."
    
    **Workaround**
    
    For trusted certification issues, refer to [SSL Certificate Issues](Post-Installation_Tasks.md#Service_Provider's_Certificate_Issues).
    

*   **Issue**  
    
    When you publish a number of apps, the system throws the error - too many open files.
    
    For example:
    
    **Workaround**
    
    Update some of the default kernel parameter settings in your Linux environment. For more details, refer to [Tuning File Descriptor Limits on Linux](Pre-installation_Tasks.md#Tuning)
    

*   **Issue**
    
    When customer wants to install Volt MX Foundry with Oracle as database type, the system throws the error: `Invalid Data Type SDO_GEOMENTRY`
    
    **Workaround**
    
    Install Oracle locator, which is required for Volt MX Foundry installation. For more details, refer to [Pre-installation Tasks > Create Locator Component for Oracle Database](DB_Pre-installation_Tasks.md#create-locator-component-for-oracle-database)
    

*   **Issue**
    
    Upgrading from Foundry 6.5.2, 7.0.1 or 7.1.1 with MS SQL Server fails. Installer is rolling back, as the schema version table is not migrating properly while upgrade.
    
    **Workaround**
    
    To avoid this issue, follow these step:
    
    Remove the `version_rank` column from `schema_version` table in each schema by following queries before upgrade.
    
    <pre><code>{drop index schema_version_vr_idx on master.&lt;SCHEMA_NAME&gt;.schema_version;
    alter table master.&lt;SCHEMA_NAME&gt;.schema_version drop column version_rank;
    }</code></pre>

    

*   **Issue**
    
    Auth (VoltMX Identity Service) datasources are not created when upgraded from Foundry 6.5.2.GA to 7.2.GA.
    
    **Workaround**
    
    Create datasource for `authconfigdb` and `authglobaldb`. For more details, refer to [Configuring\_JNDI\_for\_Database](../../../Foundry/voltmx_foundry_manual_install_guide/Content/Configuring_JNDI_Database_Identity_Tomcat.md) **\> Data Source for Single Node and Multinode** > **VoltMX Identity Service Data Source** section.
    

*   **Issue**
    
    If you have installed Foundry 7.3 or older, and when you use the existing database for Volt MX Foundry V8 on JBoss, the Web Application publish fails. 

    **Workaround**

    Update the `management_server_port` in the `server_configuration` table of `admindb` with the `jboss.management.http.port` in the `<USER_INSTALL_DIR>\jboss\standalone\configuration\standalone.xml`.
    

*   **Issue**
    
    If you do not want to use a DB user with DBA role or Equivalent privileges for the Volt MX Foundry installation on ORACLE database, follow these steps:

    **Workaround**

    Manual Steps:

    1. Create Component Users (schema) with the required grants as below.

        <pre><code>{
        CREATE USER &lt;prefix&gt;MFCONSOLEDB&lt;suffix&gt; identified by &lt;password&gt; default tablespace &lt;dataTablespace&gt; profile default;
        ALTER USER &lt;prefix&gt;MFCONSOLEDB&lt;suffix&gt; QUOTA UNLIMITED ON USERS;
        GRANT CONNECT,RESOURCE,CREATE VIEW TO &lt;prefix&gt;MFCONSOLEDB&lt;suffix&gt;;
        GRANT CREATE JOB TO &lt;prefix&gt;MFCONSOLEDB&lt;suffix&gt;;
        GRANT MANAGE SCHEDULER TO &lt;prefix&gt;MFCONSOLEDB&lt;suffix&gt;;
        CREATE USER &lt;prefix&gt;MFACCOUNTSDB&lt;suffix&gt; identified by &lt;password&gt; default tablespace &lt;dataTablespace&gt; profile default;
        ALTER USER &lt;prefix&gt;MFACCOUNTSDB&lt;suffix&gt; QUOTA UNLIMITED ON USERS;
        GRANT CONNECT,RESOURCE,CREATE VIEW TO &lt;prefix&gt;MFACCOUNTSDB&lt;suffix&gt;;
        GRANT CREATE JOB TO &lt;prefix&gt;MFACCOUNTSDB&lt;suffix&gt;;
        GRANT MANAGE SCHEDULER TO &lt;prefix&gt;MFACCOUNTSDB&lt;suffix&gt;</code></pre>

        <pre><code>CREATE USER &lt;prefix&gt;MFREPORTSDB&lt;suffix&gt; identified by &lt;password&gt; default tablespace &lt;dataTablespace&gt; profile default;
        ALTER USER &lt;prefix&gt;MFREPORTSDB&lt;suffix&gt; QUOTA UNLIMITED ON USERS;
        GRANT CONNECT,RESOURCE,CREATE VIEW TO &lt;prefix&gt;MFREPORTSDB&lt;suffix&gt;;
        GRANT CREATE JOB TO &lt;prefix&gt;MFREPORTSDB&lt;suffix&gt;;
        GRANT MANAGE SCHEDULER TO &lt;prefix&gt;MFREPORTSDB&lt;suffix&gt;;</code></pre>  


        <pre><code>CREATE USER &lt;prefix&gt;IDCONFIGDB&lt;suffix&gt; identified by &lt;password&gt; default tablespace &lt;dataTablespace&gt; profile default;
        ALTER USER &lt;prefix&gt;IDCONFIGDB&lt;suffix&gt; QUOTA UNLIMITED ON USERS;
        GRANT CONNECT,RESOURCE,CREATE VIEW TO &lt;prefix&gt;IDCONFIGDB&lt;suffix&gt;;
        GRANT CREATE JOB TO &lt;prefix&gt;IDCONFIGDB&lt;suffix&gt;;
        GRANT MANAGE SCHEDULER TO &lt;prefix&gt;IDCONFIGDB&lt;suffix&gt;;
        GRANT CREATE TABLE TO &lt;prefix&gt;IDCONFIGDB&lt;suffix&gt;;
        GRANT CREATE ANY INDEX TO &lt;prefix&gt;IDCONFIGDB&lt;suffix&gt;;
        GRANT ALTER ANY TABLE TO &lt;prefix&gt;IDCONFIGDB&lt;suffix&gt;;</code></pre>  


        <pre><code>CREATE USER &lt;prefix&gt;ADMINDB&lt;suffix&gt; identified by &lt;password&gt; default tablespace &lt;dataTablespace&gt; profile default;
        ALTER USER &lt;prefix&gt;ADMINDB&lt;suffix&gt; QUOTA UNLIMITED ON USERS;
        GRANT CONNECT,RESOURCE,CREATE VIEW TO &lt;prefix&gt;ADMINDB&lt;suffix&gt;;
        GRANT CREATE JOB TO &lt;prefix&gt;ADMINDB&lt;suffix&gt;;
        GRANT MANAGE SCHEDULER TO &lt;prefix&gt;ADMINDB&lt;suffix&gt;;</code></pre>  


        <pre><code>CREATE USER &lt;prefix&gt;VPNSDB&lt;suffix&gt; identified by &lt;password&gt; default tablespace &lt;dataTablespace&gt; profile default;
        ALTER USER &lt;prefix&gt;VPNSDB&lt;suffix&gt; QUOTA UNLIMITED ON USERS;
        GRANT CONNECT,RESOURCE,CREATE VIEW TO &lt;prefix&gt;VPNSDB&lt;suffix&gt;;
        GRANT CREATE JOB TO &lt;prefix&gt;VPNSDB&lt;suffix&gt;;
        GRANT MANAGE SCHEDULER TO &lt;prefix&gt;VPNSDB&lt;suffix&gt;; 
        }</code></pre>



    2. Create a non DBA user with the below grants. This user will be given to the Installer.

        <pre><code>{
        CREATE USER &lt;INSTALLER_USER&gt; IDENTIFIED BY &lt;password&gt;;
        GRANT CREATE SESSION TO &lt;INSTALLER_USER&gt; WITH ADMIN OPTION;
        GRANT SELECT ANY DICTIONARY TO &lt;INSTALLER_USER&gt;;
        ALTER USER &lt;INSTALLER_USER&gt; QUOTA UNLIMITED ON &lt;dataTablespace&gt;;
        ALTER USER &lt;INSTALLER_USER&gt; QUOTA UNLIMITED ON &lt;indexTablespace&gt;;
        ALTER USER &lt;INSTALLER_USER&gt; QUOTA UNLIMITED ON &lt;dataTablespace&gt;;
        }</code></pre>
        
    
    >  **_Note:_** The password for the component users and the installer user have to be same.    

*   **Issue** 
    
    For storage services to work, change the following storagedb entries in the admindb.
    
    
    **Workaround**
    
    Manual Steps:
    
    <pre><code>{ 
    storage_database_type - oracle  
    storage_database_hostname - Database hostname/IP  
    storage_database_port - Database Port  
    storage_database_username - DBA username  
    storage_database_password - DBA Password  
    storage_database_instance - service ID/service name  
    storage_data_tablespace - Data Tablespace name  
    storage_index_tablespace - Index Tablespace name  
    storage_lob_tablespace - Lob Tablespace name
    }</code></pre>
    
        

*   **Issue**
        
    If you do not want to use a DB user with DBA role or Equivalent privileges for the Volt MX Foundry installation on MSSQL, follow these steps:

    **Workaround**

    Manual Steps:

    <pre><code> 
    Create database &lt;prefix&gt;mfreportsdb&lt;suffix&gt;;
    Create database &lt;prefix&gt;mfaccountsdb&lt;suffix&gt;;
    Create database &lt;prefix&gt;mfconsoledb&lt;suffix&gt;;
    Create database &lt;prefix&gt;admindb&lt;suffix&gt;;
    Create database &lt;prefix&gt;vpnsdb&lt;suffix&gt;;
    Create database &lt;prefix&gt;idconfigdb&lt;suffix&gt;;
    CREATE LOGIN loginId WITH PASSWORD = 'loginpwd'
    GO
    use msdb
    GO
    create user userId from LOGIN loginId;
    GO
    EXEC sp_addrolemember 'SQLAgentUserRole', 'userId'
    EXEC sp_addrolemember 'SQLAgentReaderRole', 'userId'
    EXEC sp_addrolemember 'SQLAgentOperatorRole', 'userId'
    GO
    use &lt;prefix&gt;mfreportsdbAN&lt;suffix&gt;
    GO
    create user userId from LOGIN loginId;
    GO
    GRANT ALTER ANY DATABASE DDL TRIGGER TO userId
    GO
    GRANT CREATE TABLE,CREATE TYPE,CREATE PROCEDURE,SELECT,UPDATE,DELETE,INSERT,EXECUTE,REFERENCES,CREATE VIEW,ALTER,VIEW Definition TO userId
    GO
    use &lt;prefix&gt;mfaccountsdb&lt;suffix&gt;
    GO
    create user userId from LOGIN loginId;
    GO
    GRANT ALTER ANY DATABASE DDL TRIGGER TO userId
    GO
    GRANT CREATE TABLE,CREATE TYPE,CREATE PROCEDURE,SELECT,UPDATE,DELETE,INSERT,EXECUTE,REFERENCES,CREATE VIEW,ALTER,VIEW Definition TO userId
    GO
    use &lt;prefix&gt;mfconsoledb&lt;suffix&gt;
    GO
    create user userId from LOGIN loginId;
    GO
    GRANT ALTER ANY DATABASE DDL TRIGGER TO userId
    GO
    GRANT CREATE TABLE,CREATE TYPE,CREATE PROCEDURE,SELECT,UPDATE,DELETE,INSERT,EXECUTE,REFERENCES,CREATE VIEW,ALTER,VIEW Definition TO userId
    GO
    use &lt;prefix&gt;admindb&lt;suffix&gt;
    GO
    create user userId from LOGIN loginId;
    GO
    GRANT CREATE TABLE,CREATE TYPE,CREATE PROCEDURE,SELECT,UPDATE,DELETE,INSERT,EXECUTE,REFERENCES,CREATE VIEW,ALTER TO userId
    GO
    use &lt;prefix&gt;vpnsdb&lt;suffix&gt;
    GO
    CREATE SCHEMA &lt;prefix&gt;vpnsdb&lt;suffix&gt;;
    GO
    create user userId from LOGIN loginId;
    GO
    GRANT CREATE TABLE,CREATE TYPE,CREATE PROCEDURE,SELECT,UPDATE,DELETE,INSERT,EXECUTE,REFERENCES,CREATE VIEW,ALTER TO userId
    GO
    use &lt;prefix&gt;idconfigdb&lt;suffix&gt;
    GO
    create user userId from LOGIN loginId;
    GO
    GRANT CREATE TABLE,CREATE TYPE,CREATE PROCEDURE,SELECT,UPDATE,DELETE,INSERT,EXECUTE,REFERENCES,CREATE VIEW,ALTER TO userId
    GO</code></pre>

    >  **_Note:_** The whole script must be run at once.

    >  **_Note:_** The loginId and password must be the same as used for Volt MX Foundry Installation.

    >  **_Note:_** The <prefix\> and <suffix\> provided must be the same across the script and must also be provided at the time of the Volt MX foundry Installation.

    >  **_Note:_** You can use the same loginId and userId to avoid confusion.

    >  **_Note:_** The userId must be same across the script.


*   **Issue**
    
    If you do not want to use a DB user with DBA role or Equivalent privileges for the Volt MX Foundry installation on IBM DB2, follow these steps:
    
    
    **Workaround**
    
    
    Manual Steps:
    
    > **_Important:_** Only DB2 database administrator (DBA) or equivalent DB user will have access to a create database.
    
    
    1.  Create a user based on your Operating System level.
        
        *   Refer for linux: [Creating group and user IDs for a DB2 database installation (Linux and UNIX)](https://www.ibm.com/support/knowledgecenter/en/SSEPGG_9.5.0/com.ibm.db2.luw.qb.server.doc/doc/t0006742.md)
        *   Refer for Windows: [Creating a dedicated DB2 user (Windows)](https://www.ibm.com/support/knowledgecenter/en/SSYGQH_5.5.0/admin/install/t_db_create_lcuser.md)
    2.  Create databases by logging as Admin with following queries:

         <pre><code>{
            CREATE SCHEMA &lt;prefix&gt;ADMINDB&lt;suffix&gt; AUTHORIZATION userid  
            CREATE SCHEMA &lt;prefix&gt;MFCONSOLEDB&lt;suffix&gt; AUTHORIZATION userid  
            CREATE SCHEMA &lt;prefix&gt;MFACCOUNTSDB&lt;suffix&gt; AUTHORIZATION userid  
            CREATE SCHEMA &lt;prefix&gt;MFREPORTSDB&lt;suffix&gt; AUTHORIZATION userid  
            CREATE SCHEMA &lt;prefix&gt;VPNSDB&lt;suffix&gt; AUTHORIZATION userid  
            CREATE SCHEMA &lt;prefix&gt;IDCONFIGDB&lt;suffix&gt; AUTHORIZATION userid  
        }</code></pre> 

    3.  Grant database level permissions to the user:
         
         <pre><code>{    
            GRANT CREATEIN,ALTERIN,DROPIN ON SCHEMA &lt;prefix&gt;ADMINDB&lt;suffix&gt; TO userid;  
            GRANT CREATEIN,ALTERIN,DROPIN ON SCHEMA &lt;prefix&gt;MFCONSOLEDB&lt;suffix&gt; TO userid;  
            GRANT CREATEIN,ALTERIN,DROPIN ON SCHEMA &lt;prefix&gt;MFACCOUNTSDB&lt;suffix&gt; TO userid;  
            GRANT CREATEIN,ALTERIN,DROPIN ON SCHEMA &lt;prefix&gt;MFREPORTSDB&lt;suffix&gt; TO userid;  
            GRANT CREATEIN,ALTERIN,DROPIN ON SCHEMA &lt;prefix&gt;VPNSDB&lt;suffix&gt; TO userid;  
            GRANT CREATEIN,ALTERIN,DROPIN ON SCHEMA &lt;prefix&gt;IDCONFIGDB&lt;suffix&gt; TO userid;  
         }</code></pre>
		
    4.  Grant schema level permissions to the user:
         
         <pre><code>{
         GRANT createtab,CONNECT,DATAACCESS,IMPLICIT_SCHEMA,ACCESSCTRL ON database TO USER userid;
         }</code></pre>
    
    > **_Note:_** The loginId and password must be the same as used for Volt MX Foundry Installation.
    
    > **_Note:_** The <prefix\> and <suffix\> provided must be the same across the script and must also be provided at the time of the Volt MX foundry Installation.
    

*   **Issue**
    
    After entering Database details the DB connection fails with the following error:

    ![](Resources/Images/error_troubleshooting.png)

    **Workaround**

    
    The password used for the Database must not contain exclamation marks (!).
    
*   **Issue**
    
    If you are using any lower versions of MySQL 5.7 such as v5.7.12 or lower during installation, you may encounter an error due to which the installation rolls back. This error occurs due to a bug in the MySQL database.  
    For more information, refer [MySQL Bugs](https://bugs.mysql.com/bug.php?id=79286)
    
    Following are the error details:
    
    *   **Error**: Migration V810\_27\_01\_\_DeleteDuplicateAcsUserIdProviderGuidRowsAddUniqueConstraint.sql failed
    *   **SQL State**: HY000
    *   **Error Code**: 1093
    *   **Error Message**: You can't specify target table 'users' for update in FROM clause
    *   **Location**: Location where the installation is done

    **Workaround**
    
    
    To resolve this issue, refer [Prerequisites for Volt MX Foundry with MySQL- Applicable for Identity Services](DB_PRe-reqs.md).  
      

Hostname/Port changes for Tomcat Application Server
---------------------------------------------------

Volt MX  Foundry On-Premises Installer provides a script to change the Hostname or Port of the installed Volt MX Foundry instance. In your installed Tomcat Application Server, you must also perform the following changes:

In `//tomcat/webapps/apiportal/WEB-INF/classes/config.properties`, replace the existing URL with the new URL in the following fields:

*   `VOLTMX_ACCOUNT_API_BASE_URL=`
*   `VOLTMX_DEVELOPER_PORTAL_BASE_URL=`

In `//tomcat/webapps/mfconsole/WEB-INF/classes/config.properties`, replace the existing URL with the new URL in the `VOLTMX_ACCOUNT_API_BASE_URL=` field.

In `//tomcat/conf/server.xml`, replace the port number with the new port number in the `<Connector server="VoltMX" port=` field.

In `//tomcat/webapps/accounts/WEB-INF/classes/accounts.properties`, replace the port number with the new port number in the following fields:

*   `VOLTMX_INTEGRATION_SERVICE_PORT=`
*   `VOLTMX_MESSAGING_SERVICE_PORT=`

Hostname/Port changes for JBoss Application Server
--------------------------------------------------

Volt MX  Foundry On-Premises Installer provides a script to change the Hostname or Port of the installed Volt MX Foundry instance. The script can be found in the installation folder. In your installed JBoss Application Server, you must follow the instructions in the script and also perform the following steps:

1.  In the standalone.xml file replace the IP address/port number with the new IP address/port number.
2.  In `mfconsole.war\WEB-INF\classes\config.properties`, replace the existing URL with the new URL in the `VOLTMX_ACCOUNT_API_BASE_URL=` field.
3.  In `apiportal.war\WEB-INF\classes\config.properties`, replace the existing URL with the new URL in the following fields:
    *   `VOLTMX_ACCOUNT_API_BASE_URL=`
    *   `VOLTMX_DEVELOPER_PORTAL_BASE_URL=`
4.  In `accounts.war\WEB-INF\classes\accounts.properties`, replace the port number with the new port number in the `VOLTMX_INTEGRATION_SERVICE_PORT=` field.

How to Configure JBoss Cluster
------------------------------

*   Refer to [https://access.redhat.com/solutions/218053](https://access.redhat.com/solutions/218053) to setup EAP in Domain mode.
*   Refer to [https://docs.jboss.org/mod\_cluster/1.1.0.html/Quick\_Start\_Guide.html](https://docs.modcluster.io/#jboss-as) to configure the mod\_cluster.
    *   Refer to [https://access.redhat.com/solutions/2332111](https://access.redhat.com/solutions/2332111) to integrate the mod\_cluster with JBoss.

<!-- How to Configure a Custom JAR File on WebLogic
----------------------------------------------

When an administrator installs only integration services on Weblogic and would like to use it as a standalone server (without integrating to Volt MX Foundry) for Volt MX Studio apps, then app services which use custom code for pre-processor and post-processor will fail. For these services to work properly, add the custom code jar file to middleware.war and redeploy.

To add custom jar to middleware.war after installation, follow these steps:

1.  Uninstall the middleware.war file from **WebLogic Console > Deployments** tab.
2.  Go to your Volt MX Integration Server install location and **Deployments** folder.
3.  Open the middleware.war file and do the following:
4.  In the `middleware.war`  file, go to `WEB-INF/lib` folder and add custom jar file.
5.  Save the  `middleware.war`  file.
6.  Deploy the  `middleware.war`  file back to server. -->


Configuring Heap and PermGen Size for Tomcat
--------------------------------------------

By default, the heap settings for Tomcat allocated are Min -`Xms1024m` / Max - `Xmx2048m`, and default permgen settings are: -XX:PermSize=`1024m` \-XX:MaxPermSize=`1024`m

For better performance in case of several publishes, update the following heap and permgen settings  in the file: `{Installation directory}/tomcat/bin/catalina.sh`

*   heap settings: Min -`Xms1024m` / Max - `Xmx1024m`.
    
    > **_Important:_** While installing Volt MX Foundry Components including Integration services, set the heap settings to: Min -Xms2048m / Max - Xmx2048m.
    
*   permgen settings : -XX:PermSize=`1024m` -XX:MaxPermSize=`2048m`

Configuring Heap and PermGen Size for JBoss
-------------------------------------------

In case of multinode, do the following:

*   Configure the Min -`Xms2048m` / Max - `Xmx4096m` heap settings in the file: `{ Server directory }/domain/configuration/host.xml`
*   Configure the Min -`Xms2048m` / Max - `Xmx4096m` heap settings in the file: `{ Server directory }/domain/configuration/domain.xml`
*   Configure permgen settings : -XX:PermSize=`1024m` -XX:MaxPermSize=`2048m`

In case of single node, configure the settings in `<Install directory>/jboss/standalone/configuration/standalone.xml`


<!-- Configuring Heap and PermGen Size for WebLogic
----------------------------------------------

*   Configure the Min -`Xms6144m` / Max - `Xmx6144m` heap settings in the file: `{Server directory }/user_projects/domains/bin/setDomainEnv.sh`
*   Configure permgen settings : -XX:PermSize=`1024m` -XX:MaxPermSize=`2048m`

1.  Go to the `{Server directory}/user_projects/domains/bin/` folder, and open the `setDomainEnv.sh` file in a text editor.
2.  Search for the following comment line:
```
\# IF USER_MEM_ARGS the environment variable is set, use it to override ALL MEM_ARGS values
```
3.  Immediately after the comment line, add the following line:
```
export USER_MEM_ARGS="-Xms6144m -Xmx6144m"
```
4.  Save the file, and then restart the WebLogic Server. -->


How to Configure Volt MX Foundry Behind a Reverse Proxy
------------------------------------------------------

If you want to access everything via a proxy URL, including Volt MX Foundry Console (for example, design time for your app developers) and authService, and integration services (for example, runtime from users using your apps), follow these steps:

1.  Install Volt MX Foundry with internal details like your internal IP and HTTP port.
2.  After installation, stop the Volt MX Foundry Console (without configuring authservice details) and update following property files:
    1.  In the  `accounts.war/WEB-INF/classes`  folder, open the `accounts.properties`  file, and update the `WAAS_BASE_URL=<PUBLIC_URL_OF_YOUR_APACHE>/workspace` property with a public URL instead of the private URL. By default, the private URL is set during installation.
        
        Examples of proxy URLs:
        
        *   `WAAS_BASE_URL=http://test.voltmx.com/workspace`
        *   `WAAS_BASE_URL=https://test.voltmx.com:8443/workspace`
        *   `WAAS_BASE_URL=http://test.voltmx.com:8080/workspace`  

    2.  Following are the changes to be made in the war for each App Server:
        *   **Tomcat**: In `mfconsole.war/WEB-INF/classes`, open the `config.properties` file, and update the `VOLTMX_ACCOUNT_API_BASE_URL=<PUBLIC_URL_OF_YOUR_APACHE>/accounts/api/v1_0/` property with a public URL instead of the private URL that was generated during installation.
        *   **JBoss - Standalone (Bundled JBoss)**: In `Standalone/deployments/mfconsole.war`, open the `config.properties` file, and update the `VOLTMX_ACCOUNT_API_BASE_URL=<PUBLIC_URL_OF_YOUR_APACHE>/accounts/api/v1_0/` property with a public URL instead of the private URL that was generated during installation.
        *   **JBoss - Pre-configured and Domain mode**: Take a backup of the existing war. Undeploy `mfconsole.war`. In `mfconsole.war/WEB-INF/classes`, open the `config.properties` file, update the `VOLTMX_ACCOUNT_API_BASE_URL=<PUBLIC_URL_OF_YOUR_APACHE>/accounts/api/v1_0/` property with a public URL instead of the private URL that was generated during installation, and re-deploy the war file.

        <!-- *   **WebLogic**: In `mfconsole.war/WEB-INF/classes`, open the `config.properties` file, and update the `VOLTMX_ACCOUNT_API_BASE_URL=<PUBLIC_URL_OF_YOUR_APACHE>/accounts/api/v1_0/` property with a public URL instead of the private URL that was generated during installation. -->

3.  Start Volt MX Foundry Console.
4.  Launch your Volt MX Foundry Console in browser by using `<PUBLIC_URL_OF_YOUR_APACHE>/mfconsole`. Now auth setup pages comes up.
5.  Enter auth URL with public URL like `<PUBLIC_URL_OF_YOUR_APACHE>/authService`. If you provide an internal IP here, appconfig will show internal IPs.
6.  Also after log in to Volt MX Foundry Console, while registering server, provide the PUBLIC\_URL to register integration server. Now all the URLs will have the public hostnames.
    
    If you want to give public access only to runtime services like authservice and integration services you can skip step 2 and step 3 from the above procedure. This will make sure service doc will have all public URLs.
    
    > **_Note:_** Proxy configuration should have preserver host directive for Volt MX Foundry to work correctly after start up.  
      
    For example, in case of apache proxy, use `` `ProxyPreserveHost On`  
    ``and in case of NGINX, use `proxy_set_header Host $host;` (For more information, refer [Passing request headers](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy#passing-request-headers))
    

How to Configure Frontend HTTPS to Tomcat HTTP Redirection
----------------------------------------------------------

If you are installing Volt MX Foundry on Tomcat on HTTP and wants to route requests via HTTPS apache or loadbalancer, add a connector in the `tomcat/server.xml` with the following attributes:

proxyName="<ProxyHost>" proxyPort="<ProxyPort>" scheme="https" secure="true"

Example:

<pre><code>&lt;Connector server="VoltMXTEST" port="8080" protocol="HTTP/1.1" proxyName="mbaastest10.hcl.net" proxyPort="443" scheme="https" secure="true" maxHttpHeaderSize="8192" maxThreads="150" enableLookups="false" acceptCount="25" disableUploadTimeout="true" tcpNoDelay="true" compression="on" compressableMimeType="text/css,text/javascript,text.html" connectionTimeout="20000" URIEncoding="UTF-8"/&gt;
</code></pre>

<a id="encrypt"></a>

How to encrypt the database password
------------------------------------

> **IMPORTANT:** Encryption is only supported for Tomcat application servers.

Quantum Fabric provides a 256-bit AES/GCM/NoPadding encryption utility, which can be used to encrypt your database password. To encrypt your database password, follow these steps:

1. Download and extract the installation zip file or tar file.
2. From the extracted folder, open a terminal (console), and then execute the following command: `java -jar EncryptionUtility.jar`

3. In the **Enter Password to be Encrypted** field, type the password that is used to access your database.
4. In the **Enter Key to be Encrypted** field, type the key that must be used to encrypt the password.

The console then displays the **Encrypted Password** and **Encrypted Key**. These values must be typed in the `Database Password` and `Encrypted Rotational Key` boxes on the [Database Details](../../voltmx_foundry_windows_install_guide/Content/Installing_Foundry_on_Tomcat.html#DatabaseDetails) screen.

