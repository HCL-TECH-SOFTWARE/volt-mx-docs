                              

Configure Engagement Services on JBoss Server
---------------------------------------------

This section is applicable if you use JBoss as the J2EE Web container for the setup. Before you begin, you must configure the JBoss server with the configuration that provides Datasource services or continue with the default configuration provided out of the box.

After you configure the JBoss server, you must perform these operations:

*   [Configure JBoss Server](#configure-jboss-server)
*   [Configure Datasources](#configure-datasource)
*   [Deploy Volt MX Foundry Engagement Services](#deploy-volt-mx-foundry-engagement-services)

### Configure JBoss Server

You must configure the JBoss Server to provide the memory arguments and the location of the Volt MX Foundry Engagement Services configuration files.

**To configure the JBoss server, follow these steps:**

1.  Go to `<JBoss Install Directory>/bin.`
2.  `Modify rub.bat` file for Windows with the following parameters:
    
    | Parameters (for JVM) | Required | Description |
    | --- | --- | --- |
    | \-Xmx2048m | Yes | Minimum Heap size: 2GB |
    | \-Xms2048m | Yes | Maximum Heap size: 2GB |
    | \-XX:MaxPermSize=512m | Yes | One-fourth of the main Heap memory assigned |
    | \-XX:UseParallelGC | Yes | This is a recommended setting |
    | \-Dvpns.configLocation | Yes | This is the directory where the `configResource.properties`, `database.properties`, and `vpns-log4j.propertie`s files must be placed.For example, if the location is `/data/vpns-config`, then you must specify the property as -`Dvpns.configLocation=/data/vpns-config` |
    | \-Dhibernate.dialect | Enables you to connect to the database. JDBC has to be configured on the AppServer level. | Oracle= org.hibernate.dialect. `Oracle10gDialect` |
    |-Dlog4j2.enableJndiJdbc=true| Yes| This parameter is to fix `log4j` vulnerability |
    
3.  `\-Xms2048m –Xmx2048m -Dvpns.configLocation=/data/vpns-config -Dlog4j2.enableJndiJdbc=true`
    
4.  Save the configuration.

Configure Datasource
--------------------

Configure datasources for the following databases:

*   [MySQL](#mysql)
*   [Microsoft SQL](#microsoft-sql)
*   [Oracle](#oracle)
*   [DB2](#db2)

> **_Note:_** From V8 SP4 FP1 HF1 onwards, DB2 support for Tomcat and JBoss Servers has been removed.

To configure the datasource, follow these steps:

### MySQL

1.  Create a new module for MySQL driver.
    1.  Create a folder hierarchy with path `$JBOSS_HOME/modules`
        
        $JBOSS\_HOME/modules/com/mysql/main
        
    2.  Copy `mysql-connector-x-8.x.x.jar` to `$JBOSS_HOME/modules/com/mysql/main`
    3.  Create `module.xml` file.
    4.  Add the following content.
    
```
        <module xmlns="urn:jboss:module:1.1" name="com.mysql">
        <properties>
        <property name="jboss.api" value="unsupported"/>
        </properties>
        <resources>
        <resource-root path="mysql-connector-x-8.x.x.jar"/>
        </resources>        
        <dependencies>
        <module name="javax.api"/>
        <module name="javax.transaction.api"/>
        <module name="javax.servlet.api" optional="true"/>
        </dependencies>
        </module>
  ```

2.  Configure data source in `$JBOSS_HOME/standalone/configuration/standalone.xml`
    1.  Add the following configuration with in \<datasources\> 
    
```
        <datasource jndi-name="java:/jdbc/vpnsdb" pool-name="vpnsds" enabled="true" use-java-context="true">
        <connection-url>vpns db connection url</connection-url>
        <driver>mysql</driver>
        <security>
        <user-name>vpns db username</user-name>
        <password>vpns db password</password>
        </security>
        <new-connection-sql>SELECT 1</new-connection-sql>
        <validation>
        <validate-on-match>true</validate-on-match>
        <check-valid-connection-sql>SELECT 1</check-valid-connection-sql>
        </validation>
        </datasource>
  ```
        
     2.  Add driver with in \<drivers\>
        `<driver name="mysql" module="com.mysql"/>`

3.  Disable default JPA in `jboss 6.2 $JBOSS_HOME/standalone/configuration/standalone.xml`
    1.  Remove the following tag:
```

        <subsystem xmlns="urn:jboss:domain:jpa:1.1">
        <jpa default-datasource="" default-extended-persistence-inheritance="DEEP"/>
        </subsystem>
```

### Microsoft SQL

1.  Create a new module for microsoft driver.
    1.  Create a folder hierarchy with path `$JBOSS_HOME/modules`
    2.  `$JBOSS_HOME/modules/com/microsoft/main`
    3.  Copy `` `mssql-jdbc-x.x.x.jreX` ``to `$JBOSS_HOME/modules/com/microsoft/main`
    4.  Create `module.xml`file.
    5.  Add the following content:

   ```
        <module xmlns="urn:jboss:module:1.1" name="com.microsoft">       
        <properties>
        <property name="jboss.api" value="unsupported"/>
        </properties>
        <resources>
        <resource-root path=" `mssql-jdbc-x.x.x.jreX`"/>
        </resources>
        <dependencies>
        <module name="javax.api"/>
        <module name="javax.transaction.api"/>
        <module name="javax.servlet.api" optional="true"/>
        </dependencies>
        </module>
```
        
2.  Configure data source in `$JBOSS_HOME/standalone/configuration/standalone.xml.`
    1.  Add the following configuration with in \<datasources\>
        
   ```
        <datasource jndi-name="java:/jdbc/vpnsdb" pool-name="vpnsds" enabled="true" use-java-context="true">
        <connection-url>vpns db connection url</connection-url>
        <driver>microsoft</driver>
        <security>
        <user-name>vpns db username</user-name>
        <password>vpns db password</password>
        </security>
        <new-connection-sql>SELECT 1</new-connection-sql>
        <validation>
        <validate-on-match>true</validate-on-match>
        <check-valid-connection-sql>SELECT 1</check-valid-connection-sql>
        </validation>
        </datasource>
  ```
    2.  Add driver with in <drivers>
        
        `<driver name="microsoft" module="com.microsoft"/>`
        
3.  Disable default JPA in `jboss 6.2 $JBOSS_HOME/standalone/configuration/standalone.xml`
    
    1.  Remove the following tag:
       
   ``` 
        <subsystem xmlns="urn:jboss:domain:jpa:1.1">
        
        <jpa default-datasource="" default-extended-persistence-inheritance="DEEP"/>
        
        </subsystem>
```

### Oracle

1.  Create a new module for oracle driver.
    1.  Create a folder hierarchy with path `$JBOSS_HOME/modules.`
    2.  `$JBOSS_HOME/modules/com/oracle/main`
    3.  Copy `ojdbc11` to `$JBOSS_HOME/modules/com/oracle/main`
    4.  Create `module.xml` file.
    5.  Add the following content:
```
        <module xmlns="urn:jboss:module:1.1" name="com.oracle"> 
        <properties>
        <property name="jboss.api" value="unsupported"/>
        </properties>
        <resources>
        <resource-root path="ojdbc11"/>
        </resources>
        <dependencies>
        <module name="javax.api"/>
        <module name="javax.transaction.api"/>
        <module name="javax.servlet.api" optional="true"/>
        </dependencies>
        </module>
```
        
2.  Configure data source in `$JBOSS_HOME/standalone/configuration/standalone.xml`
    1.  Add the following configuration with in \<datasources\>

   ```
        <datasource jndi-name="java:/jdbc/vpnsdb" pool-name="vpnsds" enabled="true" use-java-context="true">
        <connection-url>vpns db connection url</connection-url>
        <driver>oracle</driver>
        <security>
        <user-name>vpns db username</user-name>
        <password>vpns db password</password>
        </security>
        <new-connection-sql>select 1 from dual</new-connection-sql>
        <validation>
        <validate-on-match>true</validate-on-match>
        <check-valid-connection-sql>select 1 from dual</check-valid-connection-sql>
        </validation>
        </datasource>
```
        
    2.  Add driver with in <drivers>
        
        `<driver name="oracle" module="com.oracle"/>`
        
3.  Disable default JPA in `jboss 6.2 $JBOSS_HOME/standalone/configuration/standalone.xml`
4.  Remove the following tag:
```

    <subsystem xmlns="urn:jboss:domain:jpa:1.1">
    
    <jpa default-datasource="" default-extended-persistence-inheritance="DEEP"/>
    
    </subsystem>
```

### DB2

1.  Create a new module for db2 driver.
    1.    Create a folder hierarchy with path `$JBOSS_HOME/modules`
    2.   `$JBOSS_HOME/modules/com/db2/main`
    3.   Copy `db2jcc4.jar` to `$JBOSS_HOME/modules/com/db2/main`
    4.  Create `module.xml` file.
    5.  Add the following content:
```
        <module xmlns="urn:jboss:module:1.1" name="com.db2"> 
        <properties>
        <property name="jboss.api" value="unsupported"/>
        </properties>
        <resources>
        <resource-root path="db2jcc4.jar"/>
        </resources>
        <dependencies>
        <module name="javax.api"/>
        <module name="javax.transaction.api"/>
        <module name="javax.servlet.api" optional="true"/>
        </dependencies>
        </module>
```
        
2.  Configure data source in `$JBOSS_HOME/standalone/configuration/standalone.xml`
    1.  Add the following configuration with in \<datasources\>
```
        <datasource jndi-name="java:/jdbc/vpnsdb" pool-name="vpnsds" enabled="true" use-java-context="true"> 
        <connection-url>vpns db connection url</connection-url>
        <driver>db2</driver>
        <security>
        <user-name>vpns db username</user-name>
        <password>vpns db password</password>
        </security>
        <new-connection-sql>select 1 from sysibm.sysdummy1</new-connection-sql>
        <validation>
        <validate-on-match>true</validate-on-match>
        <check-valid-connection-sql>select 1 from sysibm.sysdummy1</check-valid-connection-sql>
        </validation>
        </datasource>
```

    2.  Add driver with in <drivers>
        
        `<driver name="db2" module="com.db2"/>`
        
    3.  Disable default JPA in `jboss 6.2 $JBOSS_HOME/standalone/configuration/standalone.xm`l
    4.  Remove the following tag:
```

        <subsystem xmlns="urn:jboss:domain:jpa:1.1">
        
        <jpa default-datasource="" default-extended-persistence-inheritance="DEEP"/>
        
        </subsystem>
```

Deploy Volt MX Foundry Engagement Services
--------------------------------------

1.  To deploy Volt MX Foundry Engagement Services to JBoss Server, copy and paste the _vpns.war_ file to the following location:
    
    `<JBoss Install Directory>/standalone/deployments/`
    
2.  After you deploy Volt MX Foundry Engagement Services, complete the Volt MX Foundry Engagement Services setup and start the JBoss server.
