                         


Application Servers Pre-Installation Tasks
==========================================

JBoss
-----

### JBoss Cluster - Domain Mode

<p>For information about setting up JBoss Cluster in domain mode, refer to <a href="https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0083295">JBoss EAP 7.2 Domain Mode Setup</a>.</p>


### Configure Load Balancer as Proxy in JBoss Multinode Setup (Optional if SSL Offloading at Load Balancer)

1.  Navigate to your Volt MX Foundry install directory and open the `domain.xml` file.

1.  In the `domain.xml`, update all the `http connector tags` to include the scheme and proxy-port details.
    
    For example,``  
    `<connector name="http" protocol="HTTP/1.1" scheme="https" socket-binding="http" proxy-name="loadbalancer hostname" proxy-port="443" secure="true"/>` ``
    

### Update Listen Interfaces in host.xml for JBoss Cluster

For JBoss domain mode installation, configure the following interface address.

1.  Go to `<JBOSS EAP dir>/domain/configuration/host.xml`
2.  In place of existing  `interfaces` xml tag, replace the default content with below details:

```
<interfaces>
        <interface name="management">
            <any-ipv4-address/>
        </interface>
        <interface name="public">
           <any-ipv4-address/\>
        </interface>
        <interface name="unsecure">
            <!-- Used for IIOP sockets in the standard configuration.
                 To secure JacORB you need to setup SSL -->
            <any-ipv4-address/>
        </interface>
		<interface name="any">  
            <any-ipv4-address/>  
        </interface> 
    </interfaces>
```

![](Resources/Images/ListenInterfaces_615x386.png)

### Comment the javax-persistence-module for Volt MX Engagement Services on JBoss Cluster

If you are installing Volt MX Engagement Services on JBoss domain mode installation, comment the below persistence module in the `domain.xml` file.

1.  Go to `<JBOSS EAP dir>/domain/configuration/domain.xml`
2.  Comment the below `xml` tag. Comment the persistence module at four places in the `domain.xml` file.

```
            <!-- <subsystem xmlns="urn:jboss:domain:jpa:1.1">
                <jpa default-datasource="" default-extended-persistence-inheritance="DEEP"/>
            </subsystem> \-->
```

<h3 id="how-to-configure-connector-jboss">How to Configure Connector - JBoss Standalone</h3>

For importing an app to Volt MX Foundry Console properly, you must have set the enough value for the `max-post-size` in the `standalone.xml` file. For more details, refer to [Configure Connectors - JBoss](../../../Foundry/voltmx_foundry_manual_install_guide/Content/Configuring_Connectors_and_WAR_JBoss.md)

<h3 id="how-to-increase-timeout-and-maximum-heap-size-settings-jboss">How to Increase Timeout and Maximum Heap Size Settings - JBoss Standalone</h3>

Restarting JBoss can cause deployment failures. To avoid these failures, you must increase the JBoss timeout and maximum heap size settings for cluster.

<b>To increase memory and timeout settings in JBoss (pre-configured JBoss), follow these steps:</b>

<ol>
<li>In the <code>standalone.bat</code> or <code>.sh</code> file, add the following properties to <code>Java_opts</code>:
<pre><code>-Djboss.as.management.blocking.timeout=8400  
-Xms2048m  
-Xmx4096m</code></pre>
</li>
<li>In the <code>&lt;JBoss_Home&gt;/standalone/configuration/standalone.xml</code> file, add <code>config deployment-timeout=”8400”</code> in the <code>deployment-scanner subsystem</code>, shown below:</li>

<pre><code>&lt;subsystem xmlns="urn:jboss:domain:deployment-scanner:2.0"&gt;  
&lt;deployment-scanner path="deployments" relative-to="jboss.server.base.dir" scan-interval="5000" deployment-timeout=”8400” runtime-failure-causes-rollback="${jboss.deployment.scanner.rollback.on.failure:false}"/&gt;  
&lt;/subsystem&gt;</code></pre>
</ol>

<b>To increase memory and timeout settings in JBoss Multinode, follow these steps:</b>  

<ol>
<li>In the <code>domain.bat</code> or <code>.sh</code> file, add the following properties to <code>Java_opts</code>:<br><code>-Djboss.as.management.blocking.timeout=8400</code>
</li>
<li>Set the heap size for the selected server groups as below in the <code>&lt;JBoss_Home&gt;/domain/configuration/domain.xml</code>.
<li>Search for <code>&lt;server-groups&gt;</code> tag in the domain.xml and set the heap size in the JVM settings.</li>  
<code>&lt;heap size="2048m" max-size="4096m"/&gt;</code>
</li>
</ol>

<h3 id="how-to-configure-engagement-services-jboss">How to Configure Engagement Services - JBoss</h3>

When Engagement is selected as Foundry Component, based on the selected JBoss mode, you must add the following parameter in the JVM arguments present in <code>standalone.bat/domain.bat</code> (for Windows) or <code>standalone.sh/domain.sh</code> (for Unix):

<code>-DVMS_CORE_VERSION=2</code>



<!-- WebLogic
--------

### Customizing the WebLogic JVM heap size

For a successful deployment of Volt MX Foundry War files on WebLogic server, increase the Heap Size in WebLogic memory arguments. For more details, refer to [Heap and PermGen Settings](Troubleshooting.md#how-to-configure-heap-and-permgen-size).

To change the WebLogic JVM heap size, follow these steps:

1.  From the `{Server directory}/user_projects/domains/bin/` folder, and open the `setDomainEnv.sh` file in a text editor.
2.  Search for the following comment line:
```
\# IF USER_MEM_ARGS the environment variable is set, use it to override ALL MEM_ARGS values
```
3.  Immediately after the comment line, add the following line:
```
export USER_MEM_ARGS="-Xms6144m -Xmx6144m"
```
4.  Save the file, and then restart the WebLogic Server.

### Place MS SQL Server Connector JAR in the WebLogic Server

If you want to install MS SQL Server Database with WebLogic, then you need to manually place the `mssql-jdbc-7.2.2.jre11.jar` file in the WebLogic Server.

To add `mssql-jdbc-7.2.2.jre11.jar` file in the WebLogic Server, follow these steps:

1.  Copy the `mssql-jdbc-7.2.2.jre11.jar` file from the Volt MX Foundry Installation Folder to the `<WL_HOME>/server/lib` folder.
2.  Go to the `<WL_HOME>/user_projects/domains/base_domain/bin` folder and edit the `startWeblogic.cmd` file.
3.  Prepend your JAR file to the SAVE_CLASSPATH environment variable. For example:
```
set SAVE_CLASSPATH=%WL_HOME%/server/lib/`mssql-jdbc-7.2.2.jre11.jar`;%CLASSPATH%
```
4.  If Windows Integrated Auth is enabled, copy the `sqljdbc_auth.dll` file to the `<WL_HOME>/user_projects/domains/base_domain/bin` folder.
5.  Restart the server.

> **_Note:_** **<WL\_HOME>** is the folder in which WebLogic is installed.

### Place Oracle Server Connector JAR in the WebLogic Server

If you want to install Oracle Server Database with WebLogic, then you need to manually place the `ojdbc8.jar` file in the WebLogic Server.

To add the `ojdbc8.jar` file in the WebLogic Server, follow these steps:

1.  Copy the `ojdbc8.jar` file from the Volt MX Foundry Installation Folder to the `<WL_HOME>/server/lib` folder.
2.  Go to the `<WL_HOME>/user_projects/domains/base_domain/bin` folder and edit the `startWeblogic.cmd` file.
3.  Prepend your JAR file to the SAVE_CLASSPATH environment variable. For example:
```
set SAVE_CLASSPATH=%WL_HOME%/server/lib/`ojdbc8.jar`;%CLASSPATH%
```
4.  Restart the server.

> **_Note:_** **<WL\_HOME>** is the folder in which WebLogic is installed.

### Place MySQL Server Connector JAR in the WebLogic Server

If you want to install MySQL Server Database with WebLogic, then you need to manually place the  `mysql-connector-x-8.x.x.jar` file in the WebLogic Server.

To add `mysql-connector-x-8.x.x.jar` file in the WebLogic Server, follow these steps:

1.  Copy the `mysql-connector-x-8.x.x.jar` file from the Volt MX Foundry Installation Folder to the `<WL_HOME>/server/lib` folder.
2.  Go to the `<WL_HOME>/user_projects/domains/base_domain/bin` folder and edit the `startWeblogic.cmd` file.
3.  Prepend your JAR file to the SAVE_CLASSPATH environment variable. For example:
```
set SAVE_CLASSPATH=%WL_HOME%/server/lib/`mysql-connector-x-8.x.x.jar`;%CLASSPATH%
```
4.  Restart the server.

> **_Note:_** **<WL\_HOME>** is the folder in which WebLogic is installed.

<h3 id="how-to-configure-engagement-services-weblogic">How to Configure Engagement Services - WebLogic</h3>

When Engagement is selected as Foundry Component, you must add the following parameter in the JVM arguments present in `domain-name\StartWebLogic.cmd` (for Windows) or `domain-name\StartWebLogic.sh` (for Unix):

\-DVMS\_CORE\_VERSION=2 --> 
