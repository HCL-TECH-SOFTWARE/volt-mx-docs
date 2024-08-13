                            

Deploy WAR Files to Tomcat - Identity Services
----------------------------------------------

After you configure all properties files in WAR files, you must deploy these WARs through the app server.

> **_Important:_** The following configuration is same for all app servers, except the deployment paths for app servers.

To deploy configured auth service .WAR files to Tomcat, follow these steps:

1.  Copy the updated `.war` files, for example `authService.war`.
2.  Paste the files to the following location:
    *   For Tomcat, `<User install directory>\apache-tomcat-9.x.x\webapps`.
3.  Add the `jboss-client.jar` files, as follows:
    1.  Copy the .jars from `\VoltMXFoundry_Plugins\middleware\`
    2.  Paste the jars into  `<TOMCAT-HOME>\lib`  
        
4.  Configure auth resource Jars, as follows:  
    Copy the `jboss-logging-x.x.x.x.jar` from `\VoltMXFoundry_Plugins\resources\auth`  folder and paste it in the `\WEB-INF\lib` folder of the authservice war.
    
    a.  Copy the following three jars from `\VoltMXFoundry_Plugins\resources\auth`  folder:
       
       *   jaxb-api-x.x.jar
       *   jaxb-impl-x.x.x.jar 
       *   jboss-logging-x.x.x.x.jar 
            
    
    b.  Paste the jars to the `\WEB-INF\lib` folder of the authservice war.
5.  Configure your app server (Tomcat) as a service. This step is optional.
