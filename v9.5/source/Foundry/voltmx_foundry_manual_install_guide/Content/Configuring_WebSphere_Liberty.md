                            

How to Configure Installation Mode - WebSphere Liberty Server
=============================================================

Pre-installation Tasks:

1.  Install Open JDK 11 or if already installed set it as the default JAVA to be used.
2.  Use either the default server or create a new server as shown in [Creating a Liberty server manually](https://www.ibm.com/support/knowledgecenter/en/SS7K4U_liberty/com.ibm.websphere.wlp.zseries.doc/ae/twlp_setup_new_server.md).
3.  Install the **jsp-2.2** and **servlet-3.1** features using **installUtility** available in `<wlp_profile>/bin` folder. In case **adminCenter** is needed install the **admincenter-1.0** feature.
4.  In the root location of the created server, create a `jvm.options` file with the following required properties:
    *   \-Xms1024m
    *   \-Xmx6096m
    *   \-XX:+HeapDumpOnOutOfMemoryError
    *   \-XX:HeapDumpPath=/home/logs
    *   \-DLOG\_ROOT=/home/logs
5.  If you select **VoltMX Engagement services** for install, in the same `jvm.options` file , configure the following parameters:
    *   \-DVMS\_CORE\_VERSION=2
    *   \-DVMS\_VERTX\_CACHE\_DIR\_BASE=/home/DELETE/vms\_vertx\_cache
6.  To enable SSL (required in case AdminCenter feature is enabled):
    *   In the `server.xml` configuration file, under **feature manager**, uncomment the following feature tags: `<feature>transportSecurity-1.0</feature>` and `<feature>appSecurity-2.0</feature>`.
    *   Generate a SSL certificate of type p12 using the **securityUtility** command and the **createSSLCertificate** option as outlined in [securityUtility command](https://www.ibm.com/support/knowledgecenter/SSAW57_liberty/com.ibm.websphere.wlp.nd.multiplatform.doc/ae/rwlp_command_securityutil.md).  
        For example: `./securityUtility createSSLCertificate --server=server1 --password=Liberty --validity=365`
    *   Provide the encoded password in the password field of the **defaultKeyStore**.
    *   Import the generated `key.p12` file into the cacerts of the Java that is being used.  
        For example: `keytool -v -importkeystore -srckeystore /home/wlp/usr/servers/server1/resources/security/key.p12 -srcstoretype PKCS12 -destkeystore cacerts`
    *   Uncomment the appropriate HTTP endpoint, and provide the value for the HTTP/HTTPS ports.
