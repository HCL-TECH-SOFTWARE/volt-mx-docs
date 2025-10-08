                             

User Guide: [Orchestration](Orchestration.md) > Importing and Exporting Services

Importing and Exporting Services
================================

Volt MX  Foundry lets you import and export services, along with any associated identity and services, JAR files and data adapters. By using the export function, Volt MX Foundry bundles the services, JAR files, and data adapters your service uses together in a ZIP file, which can then be imported by other users into their Volt MX Foundry environments.

The import process will show you any potential conflicts by comparing your current files, JAR files and data adapters with the files in the import package. Any potential conflict will display as an icon on the right side of the service, JAR, or adapter listing in the Import Services window. You can get more information about the potential conflict and how to resolve it by hovering your mouse cursor over the icon.

Some of the possible warnings you might see during the import process are:

*   The service, JAR, or adapter already exists in your account and will be overwritten during the import process. Cancel the import to keep your current resource or continue the import to overwrite the existing resource.
*   A service with the same name, but a different type exists in the account. Rename or delete the existing resource before importing.
*   A read-only service with the same name already exists in the account. Change the service permissions before importing.

How to Import Services
----------------------

To import services, do the following:

1.  In API Management, click the **Identity**, **Integration**, or **Orchestration** tab.
2.  Click the **Import Service(s)** button.
3.  In the Import Service(s) window, either drag and drop the zip file into the window, or click **Browse** to locate the file on your system.
4.  Click the **Services**, **JARs**, and **Adapters** tabs to review the resources that will be imported. Any potential resource conflicts have an icon to the right of the resource. Hover your cursor over the icon for more information.
5.  When you have resolved the potential conflicts, Click **Import**.
6.  After the resources have imported, click **Close**.  
    

How to Export Services
----------------------

To export services, do the following:

1.  In API Management, click the **Identity**, **Integration**, or **Orchestration** tab.
2.  In the Services pane, click the cogwheel button next to the service that you want to export, and then select **Export**.
3.  In the Export Service window, a list of the service and all associated services, JARs and Adapters are displayed. Verify the list, and then click **Export**. A zip file is compiled and saved to your local system.
