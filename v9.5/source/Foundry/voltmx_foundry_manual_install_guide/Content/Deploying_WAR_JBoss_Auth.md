                            

Deploy WAR Files to JBoss - Identity Services
---------------------------------------------

After you configure all properties files in WAR files, you must deploy these WARs through the app server.

> **_Important:_** The following configuration is same for all app servers, except the deployment paths for app servers.

To deploy configured auth service .WAR files to JBoss, follow these steps:

1.  Copy the updated `.war` files, for example `authService.war`.
2.  Paste the files in the following location:
    *   For JBoss single node, `<JBoss-DIR>\standalone\deployments`.
3.  Configure your app server (JBoss) as a service.
