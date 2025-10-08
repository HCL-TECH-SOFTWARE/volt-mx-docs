                            

Deploy WAR Files to Tomcat - Console
------------------------------------

After you configure all properties files in WAR files, you must deploy these WARs through the app server.

> **_Important:_** The following configuration is same for all app servers, except the deployment paths for app servers.

To deploy configured console .WAR files to Tomcat, follow these steps:

1.  Copy the updated `.war` files such as `accounts.war`, `mbaasportal.war`, and `` `workspace.war` ``.
2.  Paste the files in the following location:
    *   For Tomcat, `<User install directory>\apache-tomcat-9.x.x\webapps`.
    *   For Tomcat, add the `jboss-client.jar`
        1.  Copy the .jars from `\VoltMXFoundry_Plugins\middleware\`
        2.  Paste the jars into  `<TOMCAT-HOME>\lib`  
            
3.  Configure your app server (Tomcat) as a service. This step is optional.

Deploy apiportal.WAR file to Tomacat - Developer Portal
-------------------------------------------------------

After you configure the properties files in apiportal.war file, you must deploy the WAR file through the app server to install developer portal with Volt MX Foundry console.

**To deploy configured developer portal .WAR files to Tomcat, follow these steps:**

1.  Copy the updated `apiportal.war` file.
2.  Paste the files in the following location:
    *   For Tomcat, `<User install directory>\apache-tomcat-9.x.x\webapps`.
    *   For Tomcat, add the `jboss-client.jar`
        1.  Copy the .jars from `\VoltMXFoundry_Plugins\middleware\`
        2.  Paste the jars into  `<TOMCAT-HOME>\lib`  
            
3.  Configure your app server (Tomcat) as a service. This step is optional.
