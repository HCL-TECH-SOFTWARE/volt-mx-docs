---
layout: "documentation"
category: "iris_user_guide"
---
                          


Migrate a Project from an Earlier Version of Volt MX Studio or Iris
----------------------------------------------------------------------

You can import projects into Volt MX Iris that were originally created using Volt MX Studio and earlier versions of Volt MX Iris.

If your project was created using a version of Volt MX Studio older than 6.0, you first must import it into Volt MX Studio 6.0 (with the latest hotfix) and then you can import it into Volt MX Iris.

> **_Important:_***   If your project was originally created using Volt MX Iris 2.5 that was then imported into Volt MX Studio 6.5, and you import it into the latest version of Volt MX Iris, the action sequences are not imported.
*   If yours is a Volt MX Iris 2.5 or earlier project, importing it updates it so that it can take advantage of all the features of Volt MX Iris, but your earlier version of Volt MX Iris you will no longer be able to open it.

To migrate your application to Volt MX Iris, do the following: 

1.  If your application is built in Volt MX Studio versions prior to 6.0, import your application to Volt MX Studio 6.0 GA version (with the latest hotfix applied).  
    It is recommended that you take a backup of your project before importing it into Volt MX Iris.
2.  After importing to Volt MX Studio 6.0 GA, do the following:
    1.  Right-click on the project and select **Utilities**.
    2.  From the options available, select **Upgrade the project to the current version**.
    3.  A confirmation message appears. Click **OK**.
3.  Once the project is upgrade, export your application.
4.  Import the application to Volt MX Iris. To do so, on the **File** menu (the **Project** menu in Volt MX Iris), click **Import**.
5.  Do one of the following:

*   If your project is located in a standard project folder structure (i.e. has not been zipped up as an archive (.zip) file), click the **Browse** button for **Select project root**, navigate to the root folder of the project you want to import, and then click **OK**.
*   If you are importing an archive (.zip) file, click **Select archive file**, click its **Browse** button, navigate to the root folder of the project you want to import, and then click **OK**.

7.  In the case of a Volt MX Iris project, to convert designer actions to developer actions, select **Copy 'Designer Actions' to 'Developer Actions'**. Be aware that in doing so, any developer actions that the project contains are overwritten.
8.  In the case of a Volt MX Studio project, to import its services to Volt MX Foundry, select **Import services into Volt MX Foundry**. In Volt MX Iris, all services are managed through Volt MX Foundry. Importing them adds them to the Volt MX Foundry workspace.

> **_Important:_** If the app that you are migrating from Volt MX Studio or an earlier version of Volt MX Iris was configured with custom connectors, you need to migrate them to Volt MX Foundry as a consolidated service definition (CSD). For more information, see [Migrate a Consolidated Service Definition to Volt MX Foundry]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/CSD-LegacySerivce.html) in the _VoltMX Foundry Console User Guide_.

10.  Click **Finish**. Volt MX Iris imports the project.
    
    For projects imported from Volt MX Studio, all deprecated widgets found in the upgrade process are deleted from the application.
    
    *   Duplicate widgets are renamed automatically.
    *   Duplicate skins are renamed automatically.
    *   Reserved keywords are renamed automatically.
    *   You can find all changes in a log file located in the project root folder. For example, **<ApplicationName>\_upgradeLog.log**. If there were no changes in the application, the log file will not be created.
    *   You must take necessary action on any of the issues in the warning section in the log file.
    
    > **_Important:_***   Ensure that you import the splash image when importing projects from Volt MX Studio. Importing the splash image will fix any inconsistencies related to Flex and VBox properties.
    *   Refresh of model files will take place if **Import service to Volt MX Foundry** is selected while migrating the app. If **Import service to Volt MX Foundry** is cleared at time of migration and later the import to Volt MX Foundry is performed then the refresh of sync client code will not happen automatically. In this case, right-click **VoltMX Foundry** in Project Explorer and select **Refresh Sync Client Code** option.
11.  In the Migration Report dialog box, click **Save**.  Locate and open the migration report, open the project in Volt MX Studio and, using the migration report to guide you, fix the issues. After all the issues are fixed, export the application from Volt MX Studio. Then in Volt MX Iris, attempt to import the project again.
