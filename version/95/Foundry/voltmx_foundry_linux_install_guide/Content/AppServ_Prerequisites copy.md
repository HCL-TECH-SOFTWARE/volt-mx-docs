                          


Application Servers Prerequisites
=================================

Tomcat Prerequisites
--------------------

### How to Disable Weak Ciphers

To disable weak ciphers, modify the SSL Connector container attribute inside the `server.xml` with the required https connector tag details. The `server.xml` is located in the `<Install_Drive>\tomcat\conf` folder.

Add the following is a sample details to SSL connector tag:

```
SSLEnabled="true" sslEnabledProtocols="TLSv1.2" ciphers="TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256, TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384, TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA,TLS_ECDHE_RSA_WITH_RC4_128_SHA, TLS_RSA_WITH_AES_128_CBC_SHA256,TLS_RSA_WITH_AES_128_CBC_SHA,TLS_RSA_WITH_AES_256_CBC_SHA256, TLS_RSA_WITH_AES_256_CBC_SHA,SSL_RSA_WITH_RC4_128_SHA"
```

For example, the following is a sample modified https connector tag:

```
<connector port="443" maxhttpheadersize="8192" address="127.0.0.1" enablelookups="false" disableuploadtimeout="true" acceptCount="100" scheme="https" secure="true" clientAuth="false" **SSLEnabled="true" sslEnabledProtocols="TLSv1.2" ciphers="TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256, TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384, TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA,TLS_ECDHE_RSA_WITH_RC4_128_SHA, TLS_RSA_WITH_AES_128_CBC_SHA256,TLS_RSA_WITH_AES_128_CBC_SHA,TLS_RSA_WITH_AES_256_CBC_SHA256, TLS_RSA_WITH_AES_256_CBC_SHA,SSL_RSA_WITH_RC4_128_SHA"** keystoreFile="mydomain.key" keystorePass="password" truststoreFile="mytruststore.truststore" truststorePass="password"/>;
```

> **_Note:_** Upgrade the SSL Cipher list to the latest available versions.

### Heap and PermGen Settings

For Oracle Java 11, configure the heap settings for your application servers. [Tomcat heap and PermGen settings](Troubleshooting.md#configuring-heap-and-permgen-size-for-tomcat).

JBoss Prerequisites
-------------------

### Heap and PermGen Settings

For Oracle Java 11, configure the heap settings for your application servers. [JBoss heap and PermGen settings](Troubleshooting.md#configuring-heap-and-permgen-size-for-jboss).

### Configuration of Database Driver module

<!-- 1.  Extract the  [com.zip](http://docs.voltmx.com/8_x_PDFs/com.zip)  file. -->

1.  Extract the  [com.zip](https://github.com/HCL-TECH-SOFTWARE/volt-mx-docs/raw/master/voltmxlibrary/foundry/zip/user_guide/com.zip)  file.
    
    The unzipped folder structure will be `com\mysql\main`.
    
2.  Stop the JBoss Application Server.
3.  For JBoss configured in the standalone mode, copy the extracted `com.zip` folder and place it in the  `{JBOSS_HOME}/modules/` path. For the domain mode, place the unzipped `com.zip` folder (`com\mysql\main\)` in the `{JBOSS_HOME}/modules/` path for each of the master/slave machines.
    
4.  Open and edit the appropriate configuration file based on the configured JBoss mode.
    
    For example, `domain.xml` in the domain mode and `standalone-full.xml` in the standalone mode. These files are available at `{JBOSS_HOME}/domain/configuration` and `{JBOSS_HOME}/standalone/configuration` folders respectively.
    
5.  Search for the `<subsystem xmlns="urn:jboss:domain:ee:4.0">` tag and add the appropriate global module based on the database selected.
    
    For example, add the following code for the domain mode:
    <pre><code>
    &lt;global-modules&gt;  
    &lt;module name="com.mysql" slot="main"/&gt;  
    &lt;/global-modules&gt;
    </code></pre> 

6.  Save the changes. 

7.  Start the JBoss Server.

### Configure the Standalone Existing JBoss

To install Volt MX Foundry on an existing standalone JBoss, follow the steps to configure the standalone JBoss:

1.  Open the `standalone.xml` from the `<JBoss_Home>/standalone/configuration`.
2.  Configure Hostname/IP in the `standalone.xml` file for JBoss, as below:
    <pre><code>
     &lt;interfaces&gt;
     &lt;interface name="management"&gt;
     &lt;inet-address value="127.0.0.1"/&gt;
     &lt;/interface&gt;
     &lt;interface name="public"&gt;
     &lt;inet-address value="<myHostName>"/&gt;
     &lt;/interface&gt;
     &lt;/interfaces&gt;
    </code></pre>  
3.  Configure JBoss to listen for remote management requests as below:
    *   Add `<socket-binding name="management-native" interface="management" port="${jboss.management.native.port:9999}"/>` under the `<socket-binding-group>`
    *   Add following section under the `<management-interfaces>`
        <pre><code>
        &lt;native-interface security-realm="ManagementRealm"&gt;  
        &lt;socket-binding native="management-native"/&gt;  
        &lt;/native-interface&gt;
        </code></pre>

4.  For Engagement Services to work, remove the following subsystem:
    <pre><code>
    &lt;subsystem xmlns="urn:jboss:domain:jpa:1.1"&gt;
    &lt;jpa default-datasource="" default-extended-persistence-inheritance="DEEP"/&gt;|
    &lt;/subsystem&gt;
    </code></pre> 

1.  In case of installing all the Volt MX Foundry components, follow these steps to increase heap size by setting the `JAVA_OPTS` in the `<JBOSS_DIR>\standalone\bin\standalone.sh/bat`:
    
    *   **standalone.bat**:
        `set "JAVA_OPTS= -server -Xms2048m -Xmx2048m"`

    *   **standalone.sh**:
        `JAVA_OPTS="-server -Xms1024M -Xmx1024M"`


<h3><a name="JBoss_DomainMode"></a>Configure the existing Domain mode JBoss</h3>
<p>To install VoltMX Foundry on an existing domain mode JBoss, follow these steps to configure the domain mode JBoss:</p>
<ol>
<li>From the <code class="codefirst">&lt;JBoss_Home&gt;/domain/configuration</code> folder, open the <code class="codefirst">domain.xml</code> file.</li>
<li>Configure Hostname/IP in the <code class="codefirst">domain.xml</code> file for JBoss, as specified in the following code snippet:<pre class="prettyprint">&lt;interfaces&gt;
&lt;interface name="management"/&gt;
&lt;interface name="private"&gt;
&lt;inet-address value="${jboss.bind.address.private:127.0.0.1}"/&gt;
&lt;/interface&gt;
&lt;interface name="public"/&gt;
&lt;interface name="unsecure"&gt;
&lt;inet-address value="${jboss.bind.address.unsecure:127.0.0.1}"/&gt;
&lt;/interface&gt;
&lt;/interfaces&gt;
</pre></li>
<li>In case you are installing all the VoltMX Foundry components, you must increase the heap size by changing the values under <code class="codefirst">jvms</code> in the <code class="codefirst">host-master.xml</code> file:<pre class="prettyprint">&lt;jvms&gt;
&lt;jvm name="default"&gt;
&lt;heap size="2048m" max-size="2048m"/&gt;
&lt;jvm-options&gt;
&lt;option value="-server"/&gt;
&lt;option value="-XX:MetaspaceSize=2048m"/&gt;
&lt;option value="-XX:MaxMetaspaceSize=2048m"/&gt;
&lt;/jvm-options&gt;
&lt;/jvm&gt;
&lt;/jvms&gt;
</pre></li>
</ol>



### Configure the Log Locations - JBoss

To specify the log location where the logs for all Volt MX Foundry components will be generated, you must add the following parameter in the JVM arguments present in `standalone.bat/domain.bat`( for Windows) or `standalone.sh/domain.sh`(for Unix):

\-Duser.home="&lt;log location&gt;"

### Configure the Standalone Existing JBoss with Self-Signed Certificate (JBoss 7.1)

If you need to use existing JBoss with self-signed certificate, follow these steps:

1.  Add an Existing SSL Certificate to Cacerts. For more details, click [How to Add an Existing Secure Sockets Layer (SSL) Certificate](Post-Installation_Tasks.md#how-to-add-an-existing-ssl-certificate-to-cacerts).
2.  Copy the keystore file to `<JBoss_Home>/standalone/configuration` folder.
    
3.  Modify the `standalone.xml` by adding the following `security-realm` in the `security-realms` section.

    <pre><code>
    &lt;security-realm name="WebSocketRealm"&gt;
    &lt;server-identities&gt;
    &lt;ssl>
    &lt;keystore path="<Keystore_file_name>" relative-to="jboss.server.config.dir" keystore password="<Keystore_password>"/&gt;
    &lt;/ssl&gt;
    &lt;/server-identities&gt;
    &lt;/security-realm&gt;                     
    </code></pre>
    
    Here `<Keystore_file_name>` = Name of the keystore file. (for example, `keystore.jks`)`  
    <Keystore_password>` = Password of keystore file.
    

1.  In the standalone.xml, add the following `https-listener` tag for `default-server` in the Subsystem `urn:jboss:domain:undertow:3.1`.

    `<https-listener name="https" max-post-size="262144000" security-realm="WebSocketRealm" socket-binding="https"/>`

### Configure Port Settings for Multinode Loadbalancer Setups

Before installing Volt MX Foundry on an application server, for the application server to communicate with a Web Server properly, you must open the port 80.  


### How to Disable Weak Ciphers in JBoss

To disable weak ciphers, replace the `https-listener` under JBoss `subsystem/undertow`, for example, `<subsystem xmlns="urn:jboss:domain:undertow:3.1">`

For example, the following is a sample for https connector tag:

```
<https-listener name="https" socket-binding="connect" security-realm="ApplicationRealm" verify-client="REQUIRED"/>
```

For example, the following is a sample modified https connector tag:

```
<https-listener name="https" enabled-protocols="TLSv1,TLSv1.1,TLSv1.2" enabled-cipher-suites="SSL_RSA_WITH_3DES_EDE_CBC_SHA,SSL_DHE_RSA_WITH_3DES_EDE_CBC_SHA, TLS_RSA_WITH_AES_128_CBC_SHA,TLS_DHE_DSS_WITH_AES_128_CBC_SHA, TLS_DHE_RSA_WITH_AES_128_CBC_SHA,TLS_RSA_WITH_AES_256_CBC_SHA, TLS_DHE_DSS_WITH_AES_256_CBC_SHA,TLS_DHE_RSA_WITH_AES_256_CBC_SHA, TLS_ECDH_ECDSA_WITH_3DES_EDE_CBC_SHA,TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA, TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA,TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA, TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA,TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA, TLS_ECDH_RSA_WITH_3DES_EDE_CBC_SHA,TLS_ECDH_RSA_WITH_AES_128_CBC_SHA, TLS_ECDH_RSA_WITH_AES_256_CBC_SHA,TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA, TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA, TLS_ECDH_anon_WITH_3DES_EDE_CBC_SHA,TLS_ECDH_anon_WITH_AES_128_CBC_SHA, TLS_ECDH_anon_WITH_AES_256_CBC_SHA" verify-client="REQUIRED" security-realm="ApplicationRealm" socket-binding="connect"/>

```


<!-- WebLogic Prerequisites
----------------------

### Heap and PermGen Settings

For Oracle Java 11, configure the heap settings for your application servers. [WebLogic heap and PermGen settings](Troubleshooting.md#configuring-heap-and-permgen-size-for-weblogic)

### Security Configurations

To add environments to Volt MX Foundry Console, add the following configuration inside the  `security-configuration`  tag of the `config.xml` file of WebLogic Server.  
  
`<enforce-valid-basic-auth-credentials>false</enforce-valid-basic-auth-credentials>  
  
`After configuring the `security-configuration` tag, restart the server from WebLogic console. In case of WebLogic cluster, restart all servers from WebLogic console.

### Configure the Log Locations - WebLogic

To specify the log location where the logs for all Volt MX Foundry components will be generated, you must add the following parameter in the JVM arguments present in `bin/startWebLogic.cmd`( for Windows) or `bin/startWebLogic.sh`(for Unix):

\-Duser.home="<log location>"   -->


