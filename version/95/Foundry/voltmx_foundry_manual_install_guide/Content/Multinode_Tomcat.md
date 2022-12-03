                             

How to Configure Volt MX Foundry on Tomcat Multinode
===================================================

In case of Tomcat multinode, configure the additional settings in each of the Tomcat node.

To install Volt MX Foundry Console on Tomcat multinode, follow these steps:

> **_Important:_**  Install Volt MX Foundry Console in different boxes pointing to same database before configuring the **VoltMX Foundry Get started!** page. For more details, refer to [How to Get started with Volt MX Foundry Console](../../../Foundry/voltmx_foundry_user_guide/Content/How_to_access_VoltMX_Foundry_Portal_on-Prem.md).

1.  Install standalone Volt MX Foundry on multiple nodes with Tomcat pointing to the same database.
2.  In the `accounts.properties` file, configure the `WAAS_BASE_URL`  with the load balancer URL for all the nodes.
3.  In the `accounts.properties` file, configure the `ACCOUNTS_ENCRYPTION_KEY` value with the same value as in all nodes.
    *   Path for the `accounts.properties` file:  
        `<Installer Folder>/tomcat/webapps/accounts/WEB-INF/classes/`
4.  In the `config.properties` file, configure the  `VOLTMX_ACCOUNT_API_BASE_URL`  with the load balancer URL for all the nodes.
    *   Path for the `config.properties` file:  
        `<Installer Folder>/tomcat/webapps/mfconsole/WEB-INF/classes/`
5.  Configure the `Authservice.key` value with the same value in all nodes.
    *   Path for the `authservice.key` file:  
        `<Installer Folder>/tomcat/webapps/authService/WEB-INF/classes/`
6.  Configure the `workspaceservice.key` value with the same value in all nodes.  
    Path for the `workspaceservice.key` file:  
    `<Installer Folder>/tomcat/webapps/workspace/WEB-INF/classes/`

Now that the Tomcat multinode setup is complete, you can access Volt MX Foundry Console from any of the nodes.

To view logs, refer to the log location folders specified in the Flyway placeholders configurations.
