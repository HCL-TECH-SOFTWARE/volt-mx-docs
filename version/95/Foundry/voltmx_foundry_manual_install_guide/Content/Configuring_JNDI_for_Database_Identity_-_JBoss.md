                            

Configure Datasource for a Database - JBoss
===========================================

For MySQL
---------

### How to Configure JNDI for Single Node

To configure JNDI for MySQL, follow these steps:

1.  Create a directory `$JBOSS_HOME/modules/com/mysql/main`.
2.  Copy and paste the `mysql-connector-java-8.0.12.jar`  file under `$JBOSS_HOME/modules/com/mysql/main/`
3.  Create the `module.xml` file under `$JBOSS_HOME/modules/com/mysql/main/` with the following code:
    
If you are using MySQL, the module.xml is as follows:

```

<module xmlns="urn:jboss:module:1.1" name="com.mysql">
<properties>
<property name="jboss.api" value="unsupported"/>      
</properties>
<resources>
<resource-root path="<specify your MySQL Connector jar path>">
</resources>
<dependencies>
<module name="javax.api"/>
<module name="javax.transaction.api"/>
<module name="javax.servlet.api" optional="true"/> 
</dependencies>
</module>
```
       
### Data Source for Single Node and Multinode

*   **Single node**: Configure the `standalone.xml` located under `$JBOSS_HOME/standalone/configuration/`.
*   **Multinode**: Configure the `domain.xml` located under `$JBOSS_HOME/domain/configuration/` .

> **_Important:_**  In the following sections, to configure data sources, configure the driver tag  `<driver> </driver>`  according to the mode of installation - for example, single node or multinode.  
Ensure that you configure only single node or multinode.

#### Volt MX Identity Service Data Source  

Configure the   `<driver> </driver>`  tag in the `standalone.xml` file of MySQL Server.

*   **Datasource creation for authglobaldb**
```
<datasource jndi-name="java:/authglobaldb" pool-name="authds" enabled="true" use-java-context="true">  
    <connection-url>jdbc:mysql://<DB_SERVER_IP>:<DB_PORT>/<VoltMXIdentity Service Global DB name>?autoReconnect=true</connection-url>  
    <!-- Specify the driver as MySql for single-node -->  
    <driver>MySql</driver>  
    <!-- Specify the driver as mysql-connector-java-8.0.12.jar for multi-node -->  
    <driver>mysql-connector-java-8.0.12.jar</driver>  
    <pool>  
    <max-pool-size>5</max-pool-size>  
    <prefill>true</prefill>  
    </pool>  
    <security>  
    <user-name><DB_USER></user-name>  
    <password><DB_PASSWORD></password>  
    </security>  
    <new-connection-sql>SELECT 1</new-connection-sql>  
    <validation>  
    <validate-on-match>true</validate-on-match>  
    <check-valid-connection-sql>SELECT 1</check-valid-connection-sql>  
    </validation>  
    </datasource>
```
*   **Datasource creation for authconfigdb**
```
<datasource jndi-name="java:/authconfig" pool-name="authconfigds" enabled="true" use-java-context="true">  
    <connection-url>jdbc:mysql://<DB_SERVER_IP>:<DB_PORT>/<VoltMXIdentity Service Config DB name>?autoReconnect=true</connection-url>  
    <!-- Specify the driver as MySql for single-node -->  
    <driver>MySql</driver>  
    <!-- Specify the driver as mysql-connector-java-8.0.12.jar for multi-node -->  
    <driver>mysql-connector-java-8.0.12.jar</driver>  
    <pool>  
    <max-pool-size>5</max-pool-size>  
    <prefill>true</prefill>  
    </pool>  
    <security>  
    <user-name><DB_USER></user-name>  
    <password><DB_PASSWORD></password>  
    </security>  
    <new-connection-sql>SELECT 1</new-connection-sql>  
    <validation>  
    <validate-on-match>true</validate-on-match>  
    <check-valid-connection-sql>SELECT 1</check-valid-connection-sql>  
    </validation>  
    </datasource>
```
