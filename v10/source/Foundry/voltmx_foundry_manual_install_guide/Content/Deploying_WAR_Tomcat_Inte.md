                            

Deploy WAR Files to Tomcat - Integration Services
-------------------------------------------------

After you configure all properties files in WAR files, you must deploy these WARs through the app server.

> **_Important:_** The following configuration is same for all app servers, except the deployment paths for app servers.

To deploy configured integration WAR files to Tomcat, follow these steps:

1.  Copy the updated `.war` files such as `admin.war`, `middleware.war`, `services.war`, and  `apps.war`.
2.  Paste the files in the following location:
    *   For Tomcat, `<User install directory>\apache-tomcat-9.x.x\webapps`.
    *   For Tomcat, add the `jboss-client.jar`
        1.  Copy the .jars from `\VoltMXFoundry_Plugins\middleware\`
        2.  Paste the jars into  `<TOMCAT-HOME>\lib`  
            
            > **_Note:_** If you are using Tomcat 8 or above versions, copy the `ant-1.7.1.jar` file to  `<TOMCAT-HOME>\lib` location.
            
3.  Configure your app server (Tomcat) as a service. This step is optional.
