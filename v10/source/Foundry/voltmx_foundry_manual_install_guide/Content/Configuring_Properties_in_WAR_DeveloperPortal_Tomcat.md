                             

Configure apiportal.war to Tomcat - Developer Portal
====================================================

Configure apiportal.war to install developer portal with Volt MX Foundry console. A developer portal is used to connect to various back-end systems and expose the data as standard RESTful APIs that are protected by standard OAuth 2.0.

**Perform the following action, to configure** **apiportal.war** **file:**

1.  In the `apiportal.war/``WEB-INF/classes`, open the `config.properties` file, and then edit the following parameters.
```
VoltMX_ACCOUNT_API_BASE_URL=<PUBLIC_URL>/accounts/api/v1_0/
    LOG_LEVEL=INFO
    LOG_OPTION=logfile
    LOG_LOCATION=<USER_INSTALL_DIR>/logs/apiportal  
    VoltMX_DEVELOPER_PORTAL_BASE_URL= <PUBLIC_URL>/apiportal
```

Deploy apiportal.WAR file to Tomcat - Developer Portal
======================================================

After you configure the properties files in apiportal.war file, you must deploy the WAR file through the app server to install developer portal with Volt MX Foundry console.

**To deploy configured developer portal .WAR files to Tomcat, follow these steps:**

1.  Copy the updated `apiportal.war` file.
2.  Paste the files in the following location:
    *   For Tomcat, `<User install directory>\apache-tomcat-9.x.x\webapps`.
    *   For Tomcat, add the `jboss-client.jar`
        1.  Copy the .jars from `\VoltMXFoundry_Plugins\middleware\`
        2.  Paste the jars into  `<TOMCAT-HOME>\lib`  
            
3.  Configure your app server (Tomcat) as a service (This step is optional).
