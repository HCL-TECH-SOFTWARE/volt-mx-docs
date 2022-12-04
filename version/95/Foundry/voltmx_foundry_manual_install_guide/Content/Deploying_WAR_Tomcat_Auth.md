                            

Deploy WAR Files to Tomcat - Identity Services
----------------------------------------------

After you configure all properties files in WAR files, you must deploy these WARs through the app server.

> **_Important:_** The following configuration is same for all app servers, except the deployment paths for app servers.

To deploy configured auth service .WAR files to Tomcat, follow these steps:

1.  Copy the updated `.war` files, for example `authService.war`.
2.  Paste the files to the following location:
    *   For Tomcat, `<User install directory>\apache-tomcat-8.5.32\webapps`.
3.  Add the `jboss-client.jar` files, as follows:
    1.  Copy the .jars from `\VoltMXFoundry_Plugins\middleware\`
    2.  Paste the jars into  `<TOMCAT-HOME>\lib`  
        
4.  Configure auth resource Jars, as follows:  
    Copy the `jboss-logging-3.1.0.CR2.jar` from `\VoltMXFoundry_Plugins\resources\auth`  folder and paste it in the `\WEB-INF\lib` folder of the authservice war.
    
    a.  Copy the following three jars from `\VoltMXFoundry_Plugins\resources\auth`  folder:
       
       *   jaxb-api-2.1.jar
       *   jaxb-impl-2.2.3-1.jar
       *   jboss-logging-3.1.0.CR2.jar
            
    
    b.  Paste the jars to the `\WEB-INF\lib` folder of the authservice war.
5.  Configure your app server (Tomcat) as a service. This step is optional.
