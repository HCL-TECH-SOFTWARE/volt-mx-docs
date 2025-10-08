                            

Configure Datasource for a Database - JBoss
===========================================

For MySQL
---------

### How to Configure JNDI for Single Node

To configure JNDI for MySQL, follow these steps:

1.  Create a directory `$JBOSS_HOME/modules/com/mysql/main`.
2.  Copy and paste the `mysql-connector-x-8.x.x.jar`  file under `$JBOSS_HOME/modules/com/mysql/main/`
3.  Create the `module.xml` file under `$JBOSS_HOME/modules/com/mysql/main/` with the following code:
    
    If you are using MySQL, the module.xml is as follows:
    
    <module xmlns="urn:jboss:module:1.1" name="com.mysql">  
     <properties>  
     <property name="jboss.api" value="unsupported"/>      </properties>  
    <resources>  
    <resource-root path="<specify your MySQL Connector jar path>"/>  
    </resources>  
    <dependencies>  
    <module name="javax.api"/>  
    <module name="javax.transaction.api"/>  
    <module name="javax.servlet.api" optional="true"/> </dependencies>  
    </module>
    

### Data Source for Single Node and Multinode

*   **Single node**: Configure the `standalone.xml` located under `$JBOSS_HOME/standalone/configuration/` depending on the database type.
*   **Multinode**: Configure the `domain.xml` located under `$JBOSS_HOME/domain/configuration/` depending on the database type.

> **_Important:_**  In the following sections, to configure data sources, configure the driver tag  `<driver> </driver>`  according to the mode of installation - for example, single node or multinode.  
  
Ensure that you configure only single node or multinode.

#### Volt MX Integration Data Source for Admin DB and Reports DB

##### For Admin DB

To configure your Admin DB, add the following datasource inside the `<datasources>` tag in the `standalone.xml` file.

```
<datasource jndi-name="java:/jdbc/voltmxadmindb" pool-name="voltmxadminds" enabled="true" use-java-context="true">
<connection-url>
jdbc:mysql://<Database IP:port/Admin_DB_Name?autoReconnect=true
</connection-url>
<driver>< Specify the driver for mysql></driver>
<new-connection-sql>SELECT 1</new-connection-sql>
<pool>
<min-pool-size>10</min-pool-size>
<max-pool-size>30</max-pool-size>
<flush-strategy>IdleConnections</flush-strategy>
</pool>
<security>
<user-name><DB_USER></user-name>
<password><DB_PASSWORD></password>
</security>
<validation>
<check-valid-connection-sql>SELECT 1</check-valid-connection-sql>
<validate-on-match>true</validate-on-match>
</validation>
</datasource>  

```

##### For Reports DB

To configure your Reports DB, add the following datasource inside the `<datasources>` tag in the `standalone.xml` file.

```
<datasource jndi-name="java:/voltmxreports" pool-name="voltmxreportsds" enabled="true" use-java-context="true">
<connection-url> jdbc:mysql://<Database IP:port/Reports_DB_Name?autoReconnect=true
</connection-url>
<driver>< Specify the driver for mysql></driver>
<new-connection-sql>SELECT 1</new-connection-sql>
<pool>
<min-pool-size>10</min-pool-size>
<max-pool-size>30</max-pool-size>
<flush-strategy>IdleConnections</flush-strategy>
</pool>
<security>
<user-name><DB_USER></user-name>
<password><DB_PASSWORD></password>
</security>
<validation>
<check-valid-connection-sql>SELECT 1</check-valid-connection-sql>
<validate-on-match>true</validate-on-match>
</validation>
</datasource>

```

#### Configuring Database Drivers Globally - Admin DB and Reports DB

To make your database drivers available globally, add the following inside the `<subsystem xmlns="urn:jboss:domain:ee:1.2">` tag of the `standalone.xml` file.

The following configured details are for MySQL. Specify the required configuration based on your database:

> **_Note:_** The `<module name="org.hornetq" slot="main"/>` is deprecated from JBoss 7.

```
<subsystem xmlns="urn:jboss:domain:ee:1.2"> <global-modules>
<module name="javaee.api" slot="main"/>
<module name="com.mysql" slot="main"/>
<module name="javaee.api" slot="main"/>
<module name="org.jboss.remote-naming" slot="main"/>
</global-modules>
<spec-descriptor-property-replacement>false</spec-descriptor-property-replacement>
<jboss-descriptor-property-replacement>true</jboss-descriptor-property-replacement>
<annotation-property-replacement>false</annotation-property-replacement>
</subsystem>
```

#### Configure Driver Details

Configure the following only for singlenode.

Configure the   `<driver> </driver>`  tag in the `standalone.xml` file.

<!--The following configured details are for MySQL-->  
<drivers>  
<driver name="MySql" module="com.mysql"/>  
</drivers>
