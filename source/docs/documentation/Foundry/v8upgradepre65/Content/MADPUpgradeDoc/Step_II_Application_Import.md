---
layout: "documentation"
category: "v8upgradepre65"
---
                           

[![](../Resources/Images/pdf.png)](http://docs.voltmx.com/voltmxlibrary/beta/v8upgradepre65.pdf "VoltMX Foundry UpgradeHUB Guide")


Importing the Application to Volt MX Iris Enterprise 7.x Version
-------------------------------------------------------------------

1.  This step assumes that you have installed Volt MX Iris Enterprise edition on your system. 

2.  Using the **File** menu, select the **Import** option to import the exported zip file created in the previous step. Alternatively, you can directly point to the 6.5.x project location for the import. Once selected, click **Finish**.  

> **_Note:_** Do not select the **Import services into Foundry** check box at this stage as you create the Foundry app in [Creating of Foundry app from Iris](Step_III_Creation_of_MF_app.html).

You can refer the [5.2 Importing the 6.5 project into Iris](Importing_the_6_5_project.html) section for relevant screenshots.

While you import the client application, the following tasks are performed in the background:

*   For projects imported from Volt MX Studio, all old widgets (Image, Segment, Image Gallery - all these widgets have a 2nd version and the app should use them) found in the upgrade process are deleted from the application.
*    Duplicate widgets are renamed automatically.
*    Duplicate skins are renamed automatically.
*    Reserved keywords are renamed automatically.
*    You can find all changes in a log file located in the project root folder. The name of the log file is `<ApplicationName>_upgradeLog.log`. If there are no upgrade changes, the log file is not created.
*    You must take necessary actions on any of the issues in the warning section in the log file.

### Importing the 6.5 Project in Iris

To export an application Iris, do the following:

1.  Import the 6.5 exported project to Iris Enterprise by using File -> Import -> Local Project.
    
    ![Screenshot (47)](../Resources/Images/MADPUpgradeDoc/Importing_the_6_5_project_673x402.png)
    

1.  While importing the app, the system asks you whether you want to upgrade. Click **Upgrade**.
    
    ![](../Resources/Images/MADPUpgradeDoc/Importing_the_6_5_project_1_626x330.png)
    

Now the Studio project is imported to Iris.
