                            

Configure Connectors - JBoss
============================

How to Configure enable-welcome-root Value - JBoss
--------------------------------------------------

After you set up Volt MX Foundry, to access the Volt MX Foundry console successfully, set the `enable-welcome-root value` to `false` in the `domain.xml` file in your JBoss.

To configure enable-welcome-root value in the standalone.xml file, follow these steps:

1.  In master node, open the `standalone.xml` file from `JBOSSDIR\domain\configuration`, and search for enable-welcome-root="true".
2.  Replace enable-welcome-root="true" with enable-welcome-root="false".  
    You can access Volt MX Foundry Console now.

How to Configure Connector - JBoss
----------------------------------

For importing an app to Volt MX Foundry Console properly, you must have set the enough value for the `max-post-size` in the `standalone.xml` file. To configure the `max-post-size`, follow these steps:

### For HTTP

Configure the following in the standalone.xml file.

1.  Open the standalone.xml file for HTTP.
2.  Configure the following connector tag in standalone.xml file.
    
    <connector name="http" protocol="HTTP/1.1" scheme="http" socket-binding="http"/>  
    <http-listener name="default" max-post-size="262144000" socket-binding="http" redirect-socket="https"/>
    
3.  Save the file.

### For HTTPS

Configure the following in the standalone.xml file.

1.  Open the standalone.xml file for HTTPS.
2.  Configure the following connector tag in the standalone.xml file.
    
    <connector name="http" protocol="HTTP/1.1" scheme="http" socket-binding="http" redirect-port="<HTTPS\_PORT>"/> <connector name="HTTPS" protocol="HTTP/1.1" scheme="https" socket-binding="https" secure="true">  
    <ssl name="https" password="<KEYSTORE\_PASS>" certificate-key-file="<KEYSTORE\_FILE>" protocol="TLSv1,TLSv1.1,TLSv1.2"/>  
    </connector>
    
    The following attributes in the connector tag need to be configured with values - for example:
    
    *   port="1021"
    *   password="password"
    *   certificate-key-file="path for the .jks file"
3.  Configure the following management connector tag under the `<management><security-realms>` tag:
    
    <security-realm name="WebSocketRealm"> <server-identities> <ssl> <keystore path="certs/voltmxwild-2017.jks" relative-to="jboss.server.config.dir" keystore-password="<KEYSTORE\_PASS>"/> </ssl> </server-identities> </security-realm>
    
4.  Configure the following HTTPs post size tag under the `<subsystem xmlns="urn:jboss:domain:undertow:3.1"> <buffer-cache name="default"/><server name="default-server">` tag:
    
    <http-listener name="default" max-post-size="262144000" socket-binding="http" redirect-socket="https"/> <https-listener name="https" max-post-size="262144000" security-realm="WebSocketRealm" socket-binding="https"/>
    
5.  Save the file.
