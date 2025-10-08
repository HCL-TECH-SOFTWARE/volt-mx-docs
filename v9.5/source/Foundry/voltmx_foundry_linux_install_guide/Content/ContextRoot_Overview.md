                          


Context Root-path
=================

A context root identifies a Web application archive (WAR) file in an application server. The context root of a Web application determines which URLs application server will delegate to your web application.

When Volt MX Foundry installed, the required components' WARs are deployed to an app server. By default, a default context path based on the name of the deployment is used. When you reinstall Volt MX Foundry on the same app server, the newly installed instance overrides the first instance.

With context root configuration for Volt MX Foundry, you can install multiple sets of Volt MX Foundry instances on one app server such as for `Dev_Instance`, `QA_Instnace`, and `Prod_Instance`.

A context root for each Web module of Volt MX Foundry (for example, `mfconsole.war, accounts.war, workspace.war, admin.war, services.war, middleware.war`, and `vpns.war`) is defined in the application deployment descriptor during application assembly.

You can use this field to assign a different context root to a Web module. The context root is combined with the defined servlet mapping (from the WAR file) to compose the full URL that users type to access the servlet. For example, if the context root is `/myapphome` and the servlet mapping is `MyFirstPage`, then the URL is `http://host:port/myapphome/MyFirstPage`.

For example, You have installed the Volt MX Foundry Console and the integration services on one app server: **AppServer1**. And you are required to install Volt MX Foundry Components (console, identity services, integration services, and engagement services) to the same **AppServer1**. You can install multiple instances of Volt MX Foundry on the **AppServer1** app server by configuring the context root-path for each instance separately. The following sections help you configure context root path for Volt MX Foundry.

*   [Approach 1: Changing Context Root Path after the installation using the Installer](ContextPath.md)
*   [Approach 2: Changing Context Root using Manual Install Steps](ContextRoot_MI.md)
