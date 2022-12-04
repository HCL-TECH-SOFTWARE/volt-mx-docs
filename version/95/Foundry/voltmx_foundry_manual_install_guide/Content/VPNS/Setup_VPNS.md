                            

Set Up Engagement Services
--------------------------

The Volt MX Foundry Engagement Services setup consists of configuring the _configResource.properties_, vms-log4j2.xml  and `database.properties` files.

To set up Volt MX Foundry Engagement Services, follow these steps:

1.  Extract the `vpns-resources.zip` from `\VoltMXFoundry_Plugins\vpns\` folder.
2.  Copy the following extracted files and folders to the vpns-config location - for example, `/home/core/vpns-config` folder.
    *   configResource.properties
    *   database.properties
    *   vms-log4j2.xml
    *   pns-ehcache.xml
    *   schema
    *   version.txt
3.  Provide the location of the files to the Volt MX Foundry Engagement Services in the `vpns.configLocation` system property set as a `-D` param in your application server.

### ConfigResource.properties

To configure properties for Engagement Services (VPNS), make changes in the configResource.properties file.

File location: `/home/core/vpns-config/ConfigResource.properties`

> **_Important:_** IBM WebSphere Application Server:  
Enable the following properties:  
`apple.notification.keymanager.algorithm=ibmX509`  
`apple.notification.trustmanager.algorithm=ibmPKIX`<br><br>
Disable the following properties:  
`apple.notification.keymanager.algorithm=sunx509  
``apple.notification.trustmanager.algorithm=sunx509`

> **_Note:_** For Security, one time configurable values are as follows:  
Default: SHA – 256  
Allowed Values: SHA-256, BCRYPT  

#### Enable proxy for Engagement Server

To enable proxy, enable the following parameters in the `configResource.properties` file with the appropriate values.

```
##############################################################
# HTTP Proxy Configuration 
############################################################## 
# Enable below properties and provide HTTP Proxy details. 
# If configured, HTTP Proxy will be used for Android, Blackberry, Windows Clouds connectivity.

# httpproxy.host=
# httpproxy.port=
# httpproxy.user=
# httpproxy.pwd=
############################################################## 

##############################################################
# SOCKS Proxy Configuration 
############################################################## 
# Enable below properties and provide SOCKS proxy details. 
# If configured, SOCKS proxy will be used for Apple Cloud connectivity.

# socksproxy.host=
# socksproxy.port=
# socksproxy.user=
# socksproxy.pwd=
##############################################################
```

> **_Note:_** If you want to disable the proxy, do the following:

*   Comment out the **proxy properties** mentioned above in the  `configResource.properties`  file.
*   Manually delete the same records from the **config\_resources** table in the Database

### vms-log4j2.properties

To control the application logging, edit the vms-log4j2.xml file.

File location: `/home/core/vpns-config/vms-log4j2.xml`

### database.properties

To control database properties for Engagement Services, make changes in the `database.properties` file.

File location: `/home/core/vpns-config/database.properties`

Database properties configures database details for Volt MX Foundry Engagement Services application. Provide respective database schema names, database driver class, database hibernate dialect and JDBC connection parameters for quartz. Allowed values are provided in the sample properties file.

### Start Application Server

Start your application server and observe the logs for any errors and exceptions.
