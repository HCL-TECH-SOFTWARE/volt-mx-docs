                            

Configure Connectors - Tomcat
=============================

1.  From the `<User_Install_Directory>\apache-tomcat-9.x.x\conf`, open the `server.xml`.
2.  In the `server.xml`, under the `<Service name="Catalina">` tag, add the connector tag:
    
    *   **For HTTP**
        
    ```
    <Connector server="VoltMX" port="$HTTP\_PORT$" protocol="HTTP/1.1" maxHttpHeaderSize="8192" maxThreads="150" enableLookups="false" acceptCount="25" disableUploadTimeout="true" tcpNoDelay="true" compression="on" compressionMinSize="512000" compressableMimeType="text.html,text/xml,text/css,text/plain,text/javascript,application/x-javascript,application/javascript,application/json,application/xml" connectionTimeout="20000" />
    ```
    
    *   **For HTTPS**
        
    ```
    <Connector server="VoltMX" port="$HTTP\_PORT$" protocol="HTTP/1.1" maxHttpHeaderSize="8192" maxThreads="150" enableLookups="false" acceptCount="25" disableUploadTimeout="true" tcpNoDelay="true" compression="on" compressableMimeType="text/css,text/javascript,text.html" connectionTimeout="20000" redirectPort="$HTTPS\_PORT$"/> <Connector port="$HTTPS\_PORT$" protocol="HTTP/1.1" SSLEnabled="true" maxThreads="150" minSpareThreads="25" maxSpareThreads="150" maxHttpHeaderSize="8192" connectionTimeout="20000" scheme="https" secure="true" clientAuth="false" enableLookups="false" acceptCount="25" disableUploadTimeout="true" server="VoltMX" tcpNoDelay="true" compression="on" compressionMinSize="512000" compressableMimeType="text.html,text/xml,text/css,text/plain,text/javascript,application/x-javascript,application/javascript,application/json,application/xml" sslProtocol="TLS" keystoreFile="$APPSERVER\_KEYSTORE\_FILE$" keystorePass="$APPSERVER\_KEYSTORE\_PASS$" keystoreType="$APPSERVER\_KEYSTORE\_TYPE$"/>
    ```

How to Configure Batch Files
----------------------------

### catalina.bat

`Catalina.bat` files are required to be configured in Tomcat server to work properly.

1.  From the `<User_Install_Directory>\apache-tomcat-9.x.x\bin`, open the `catalina.bat`.
2.  Before the `@echo off` command, add the following JVM memory configuration.
    *   For Windows:
        
    ```
    set JAVA\_OPTS= -server -Xms<bytes> -Xmx<bytes> -XX:NewSize=256m -XX:MaxNewSize=512m -XX:PermSize=512m -XX:MaxPermSize=1024m -XX:+CMSClassUnloadingEnabled -XX:+UseConcMarkSweepGC -XX:+CMSIncrementalMode -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=$LOG\_LOCATION$/heapdumps -Djava.awt.headless=true -Djava.net.preferIPv4Stack=true -Dnet.spy.log.LoggerImpl=net.spy.memcached.compat.log.Log4JLogger -Dfile.encoding=UTF8 -Dhttps.protocols=TLSv1.2
    ```

    > **_Important:_**  While installing Volt MX Foundry Components without Integration services (VoltMX Foundry Console, Identity Services, and Engagement Services), set the heap settings to: Min -Xms1024m / Max - Xmx1024m.
        
    > **_Important:_** While installing Volt MX Foundry Components including Integration services, set the heap settings to: Min -Xms2048m / Max - Xmx2048m.
        
    *   For Linux:
        
    ```
    JAVA\_OPTS="-Dhttps.protocols=TLSv1.2 -server -Xms<bytes> -Xmx<bytes> -XX:NewSize=256m -XX:MaxNewSize=512m -XX:PermSize=512m -XX:MaxPermSize=1024m -XX:+CMSClassUnloadingEnabled -XX:+UseConcMarkSweepGC -XX:+CMSIncrementalMode -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=$LOG\_LOCATION$/heapdumps -Djava.awt.headless=true -Djava.net.preferIPv4Stack=true -Dnet.spy.log.LoggerImpl=net.spy.memcached.compat.log.Log4JLogger -Dfile.encoding=UTF8"
    ```
        
3.  Set JRE home if it is not set. For example, use the following command:
    
    `set "JRE_HOME=<User_Install_Directory>\jre"`
    
4.  Save the `catalina.bat` file.

### service.bat - (Only for Windows)

If you wish to configure a Windows service for this server, follow these steps

1.  From the `<User_Install_Directory>\apache-tomcat-9.x.x\bin`, open the `service.bat`.
2.  Set JRE home if it is not set. For example, use the following command:
    
    `set "JRE_HOME=<User_Install_Directory>\jre"`
    
3.  Set catalina home if it is not set. For example, use the following command:
    
    `set "CATALINA\_HOME=<User\_Install\_Directory>\\tomcat"`
    
4.  To configure the service name for the service you install, use the following commands:
    
    
    `set SERVICE_NAME=<Service_Name>_SVC` <br/>
    `set PR_DISPLAYNAME=<Service_Name>`
    
5.  Save the `service.bat` file.

Heap and PermGen Settings - Tomcat
----------------------------------

For Oracle Java 7 and Java 8, configure the heap settings for your application servers. In the case of Oracle Java 7, you also need to configure PermGen settings.

### Configuring Heap and PermGen Size for Tomcat

By default, the heap settings for Tomcat allocated are Min -`Xms1024m` / Max - `Xmx2048m`, and default permgen settings are: -XX:PermSize=`1024m` \-XX:MaxPermSize=`1024`m

For better performance in case of several publishes, update the following heap and permgen settings  in the file: `{Installation directory}/tomcat/bin/catalina.bat`

*   heap settings: Min -`Xms1024m` / Max - `Xmx1024m`.
    
    > **_Important:_**  While installing Volt MX Foundry Components including Integration services, set the heap settings to: Min -Xms2048m / Max - Xmx2048m
    
*   permgen settings : -XX:PermSize=`1024m` -XX:MaxPermSize=`2048m`

How to Disable Weak Ciphers in Tomcat
-------------------------------------

To disable weak ciphers, modify the SSL Connector container attribute inside the `server.xml` with the required https connector tag details. The `server.xml` is located in the `<Install_Drive>\tomcat\conf` folder.

Add the following is a sample details to SSL connector tag:

```
SSLEnabled="true" sslEnabledProtocols="TLSv1.2" ciphers="TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256, TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384, TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA,TLS_ECDHE_RSA_WITH_RC4_128_SHA, TLS_RSA_WITH_AES_128_CBC_SHA256,TLS_RSA_WITH_AES_128_CBC_SHA,TLS_RSA_WITH_AES_256_CBC_SHA256, TLS_RSA_WITH_AES_256_CBC_SHA,SSL_RSA_WITH_RC4_128_SHA"
```

For example, the following is a sample modified https connector tag:

```
<connector port="443" maxhttpheadersize="8192" address="127.0.0.1" enablelookups="false" disableuploadtimeout="true" acceptCount="100" scheme="https" secure="true" clientAuth="false" SSLEnabled="true" sslEnabledProtocols="TLSv1.2" ciphers="TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256, TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384, TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA,TLS_ECDHE_RSA_WITH_RC4_128_SHA, TLS_RSA_WITH_AES_128_CBC_SHA256,TLS_RSA_WITH_AES_128_CBC_SHA,TLS_RSA_WITH_AES_256_CBC_SHA256, TLS_RSA_WITH_AES_256_CBC_SHA,SSL_RSA_WITH_RC4_128_SHA" keystoreFile="mydomain.key" keystorePass="password" truststoreFile="mytruststore.truststore" truststorePass="password"/>;
```

> **_Note:_** Upgrade the SSL Cipher list to the latest available versions.
