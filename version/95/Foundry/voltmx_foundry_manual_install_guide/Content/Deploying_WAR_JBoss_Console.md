                            

Deploy WAR Files to JBoss - Console
-----------------------------------

After you configure all properties files in WAR files, you must deploy these WARs through the app server.

> **_Important:_** The following configuration is same for all app servers, except the deployment paths for app servers.

To deploy configured console .WAR files to JBoss, follow these steps:

1.  Copy the updated `.war` files such as `accounts.war`, `mbaasportal.war`, and `` `workspace.war` ``.
2.  Paste the files in the following location:
    *   For JBoss single node, `<JBoss-DIR>\standalone\deployments`.
    *   For JBoss multinode, `<JBoss-DIR>\<new_Folder- for example deployedWar folder>`  
        
        > **_Important:_**    For JBoss multinode, place the `mysql-connector-x-8.x.x.jar` file in the same location. This also applies to `accounts.war, authService.war, ROOT.war`, and `workspace.war`.
        
3.  Configure your app server (JBoss) as a service.
