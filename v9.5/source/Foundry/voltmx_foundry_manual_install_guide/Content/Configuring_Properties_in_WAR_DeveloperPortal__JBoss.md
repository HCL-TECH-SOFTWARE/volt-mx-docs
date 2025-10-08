                             

Configure Properties Files in JBoss - Developer Portal
======================================================

Volt MX  Foundry Developer Portal set up consists of configuring properties files in the apiportal.war file.

### apiportal.war

Configure apiportal.war to install developer portal with Volt MX Foundry console. A developer portal is used to connect to various back-end systems and expose the data as standard RESTful APIs that are protected by standard oAuth 2.0.

**Perform the following action, to configure** **apiportal.war** **file:**

1.  In the `apiportal.war/``WEB-INF/classes`, open the `config.properties` file, and then edit the following parameters.
```
VOLTMX_ACCOUNT_API_BASE_URL=<PUBLIC_URL>/accounts/api/v1_0/
    LOG_LEVEL=INFO
    LOG_OPTION=logfile
    LOG_LOCATION=<USER_INSTALL_DIR>/logs/apiportal  
    VOLTMX_DEVELOPER_PORTAL_BASE_URL= <PUBLIC_URL>/api
```

Deploy WAR Files to JBoss - Developer Portal
============================================

After you configure all properties files in WAR file, you must deploy the WAR through the app server.

To deploy configured apiportal.WAR file to JBoss, follow these steps:

1.  Copy the updated `apiportal.war` file.
2.  Paste the files in the following location:
    *   For JBoss single node, `<JBoss-DIR>\standalone\deployments`.
    *   For JBoss multinode, `<JBoss-DIR>\<new_Folder- for example deployedWar folder>`
        
3.  Configure your app server (JBoss) as a service.
