## Upgrading VoltMX Foundry using installer

This section explains upgrading VoltMX Foundry Components through the installer. 



The Installer does not support automatic backups of database and other artifacts. The Installer does not support rollback in case of a failure during the upgrade.  

 -  You must take backup of your database and other artifacts before upgrading.  

 -  After the upgrade, republish your VoltMX Foundry applications.

The **<Install Location\>** directory contains the log files documenting each invocation of the installer or uninstaller. To make problem identification easier, provide these log files to Temenos when reporting an issue.

When you upgrade, the Installer detects the installed components from properties. The installer takes backup of the current install folder. The backed up folder is renamed with an underscore `_{previous_installed_version}`. The Installer validates the installed VoltMX Foundry components (for example: app server, database server and configuration.)

Based upon the type of installation you have, the upgrade procedure is two types.

*   Automated Installation (Single node, multi-node)

You need to upgrade VoltMX Foundry installation from the master node.

## Prerequisites

*   You can download the latest VoltMX Foundry Installer from [VoltMX Downloads](https://hclsoftware.flexnetoperations.com/flexnet/operationsportal/entitledDownloadFile.action?downloadPkgId=HCL_Volt_Foundry_v9.2.x&orgId=HCL&fromRecentFile=false&fromRecentPkg=true&fromDL=false) with your credentials.
*   Ensure that VoltMXFoundryInstaller.exe (x.x) file has execute permission.
*   This is hidden because through Installer, Upgrade to 7.1 is going with default tablespace USERS for all tablespace place holders hence we need to hide Oracle tablespace details.
*   In case you want to upgrade VoltMX Foundry to 7.1 on Oracle, upgrade Oracle schemas.<madcap:dropdown><madcap:dropdownhead>

    <madcap:dropdownhotspot madcap:conditions="Default.OnlineOnly">Click here for more details:</madcap:dropdownhotspot>

    </madcap:dropdownhead><madcap:dropdownbody><madcap:snippetblock src="Resources/Snippets/OracleUpgradeto7.1.flsnp"></madcap:snippetblock></madcap:dropdownbody></madcap:dropdown>

<a name="Install_Step1"></a>To upgrade VoltMX Foundry Console using the installer, follow these steps:

1.  Unzip the `VoltMXFoundrySetup.zip` file.
2.  Double-click `VoltMXFoundryInstaller.GA.exe` to launch the installer.  
    The **InstallAnywhere** dialog appears. The **InstallAnywhere** dialog displays information about the progress of the software installation at run time.

    ![](Resources/Images/Install1.png)

    A dialog with the VoltMX logo appears.

    ![](Resources/Images/Install11.png)

3.  The **Welcome to VoltMX Foundry** windows appears.  
    Read the instructions carefully before installing VoltMX Foundry Console.

    ![](Resources/Images/Install2.png)

    <!-- For VoltMX Products Installers documentation, click [here](http://docs.voltmx.com/voltmxonpremises#installer.htm). -->

4.  Read the instructions carefully, and click **Next**.  
    The **LICENSE AGREEMENT** window appears.

5.  Scroll until end of the screen, and select the "**I accept the terms of the License Agreement**" option.

    To activate the License Agreement option, read carefully the whole agreement text.

    ![](Resources/Images/Install4.png)  

6.  Click **Next**. <a name="InstallComponents"></a>The **Install Components** window appears with two options: **New Installation** and **Upgrade**.

    ![](Resources/Images/MF_InstallType_572x466.png)

7.  Choose the **Upgrade** option for upgrading the existing installation.
8.  Click **Next**. The **Install Folder** window appears. The default install location appears in **Location of the existing install** field.

    ![](Resources/Images/Upgrade2.png)

9.  Provide the location of the existing VoltMX Foundry component that you wish to upgrade to this version. Click **Install**. The **Pre-Installation Summary** window appears.

    ![](Resources/Images/Pre-install_Summary_580x425.png)

10.  Click **Install**. The installation starts.


12.  The **Backup completed** dialog appears. The installer has taken backup of the current install folder. The backup folder will have a suffix of `_{previous_installed_version}`. Click **OK** to complete the upgrade.

    ![](Resources/Images/Upgrade_Backup.png)

    Once the installation completes, the **Install Complete** window appears with the confirmation message.

13.  The Application Server startup status warning dialog appears. Click **OK**.

    ![](Resources/Images/Upgrade_Server_Startup.png)

    The installation of VoltMX Foundry is finished. In case of any errors during the installation, refer to the installation log for details. Installation log is located at below location: For example, `<LocalDrive>:\VoltMXFoundryInstallFolder\`

    ![](Resources/Images/UpgradeLogs.png)

14.  Click **Done** to complete the installation.