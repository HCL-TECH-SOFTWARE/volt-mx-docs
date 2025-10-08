                         

You are here: Installing Hotfix Archives for Volt Foundry - Windows

Installing Hotfix Archives for Volt Foundry - Windows
=======================================================


The Volt Foundry Patch Installer can be used to apply patches (software updates) to Volt Foundry components for a specific GA release.

<b>For example:</b>

To apply a `10.x.x` patch to a version earlier than `10.x.x GA`, you need to upgrade to  10.x.x GA  by using the installer, and then apply the `10.x.x` patch.

The Patch Installer uses hotfix archives and applies the software updates to an existing Volt Foundry Installation. A hotfix archive (which is a `.zip` file) can have artifacts for one or more components. While installing hotfix archives, all components in the archive are installed to your existing Volt Foundry installation.

### Prerequisites

* Ensure that you have a previous version of Volt Foundry GA installed on your system at an accessible network location.

> **_IMPORTANT:_** If you are required to install hotfix archives to a set of components for a specific release, you must have the supported Volt Foundry GA version (for example, Volt Foundry 10.x.x) with required components installed on your system.<br>
<b>For example</b>, if you are required to install hotfix archive for Console version V 10.x.x, you must have Foundry 10.x.x GA with Console installed on your system.</br>


* Ensure that  `VoltFoundryPatchInstaller-10.x.x.QA.exe`  file has execute permission

* Please stop the windows Foundry service before applying the patch.


<b>To download Volt Foundry Patch Installer and hotfixes, follow these steps:</b>

1. Login to the <a href="https://hclsoftware.flexnetoperations.com/flexnet/operationsportal/logon.do" target="_blank">HCL License & Download Portal.</a>

      If you do not have login credentials, follow the steps discussed in this article, <a href="https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0069114" target="_blank">How to register to HCLSoftware portals.</a> For more info on the portal, refer to <a href="https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0073344" target="_blank">this article.</a> or contact support by creating a Download Case.

2. Locate HCL Volt MX in Your Downloads, and select HCL Volt Foundry
   v10.x.x.

3. Download the required hotfix components.


<b>To install Volt Foundry patch using the installer, follow these steps:</b>

1. Unzip the `Volt Foundry-10.x.x.GA.zip` file, and navigate to
   the Volt MX <b>Foundry_Patch_Installer_Windowsfolder</b>.

2. Double-click `VoltFoundryPatchInstaller-10.x.x.QA.exe` to
   launch the installer.<br>
   The <b>InstallAnywhere</b> dialog appears and displays the progress of the launching the installer.


      ![](Resources/Images/voltmx_Foundry_Patch_Installer.png)  


      A dialog with the Volt Foundry logo appears.


      ![](Resources/Images/voltmx-logo.png)  



<ol start="3">
  <li>Next, the <b>Introduction</b> window appears asking for following
   details: Enter the details to proceed with the upgrade:</li>
</ol>

   *    Please provide the location of the patch file: Provide the
        patch file location of the Volt Foundry component that you wish to install to current version. For example, middleware.zip.
        For information about creating a patch file, refer to [Creating a patch file for Foundry components](#creating-a-patch-file-for-foundry-components).
   *    Please provide the location of existing installation. The
        default install location appears in this field.
        Provide the location of existing Volt Foundry installation that you wish to upgrade with the selected patch version.


   ![](Resources/Images/voltmx_introduction.png)  



<ol start="4">
  <li>Click <b>Next</b>. <b>The Pre-Installation Summary</b> window appears.</li>
</ol>


   ![](Resources/Images/voltmx_preinstalled_summary.png) 


   The installer takes backup of the current install folder. The backup folder will have a suffix of `_{Patch_File_Name}`. For example, if the hotfix name is VPNS.XXX, then the suffix of the backup folder will be `_VPNS.XXX`.

   > **_IMPORTANT:_** The Installer does not support automatic backups of database and other artifacts. The Installer does not support rollback in case of a failure during the upgrade.<br>
   -  You must take backup of your database and other artifacts
      before upgrading.<br>
   -  After the upgrade, republish your Volt Foundry
      applications.</br>

<ol start="5">
  <li>Click <b>Install</b>. The <b>Installing Volt Foundry</b> window appears and the <b>installation starts</b>.</li>
</ol>

   Once the installation completes, the Installation window appears with the confirmation message.


![](Resources/Images/voltmx_introduction1.png) 


   The installation of Volt Foundry is finished. In case of any errors during the installation, refer to the installation log for details. Installation log is located at below location: For example, `C:\VoltMXFoundry900\`

![](Resources/Images/Patch5.png) 

<ol start="6">
<li>Click <b>Done</b> to complete the installation. After the installation
   is completed, the installer creates logs in the install folder.</li>
</ol>

   For troubleshooting tips to resolve problems that you may encounter during installation, refer to the following:

   [FAQs and Troubleshooting](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Foundry/voltmx_foundry_windows_install_guide/Content/Troubleshooting.html)


   The <b> < Install Location > </b> directory contains the log files logging each invocation of the installer. To make problem identification easier, provide these log files to Volt Foundry when reporting an issue.

## Creating a patch file for Foundry components

To create a patch file for Foundry components, you need to create a zip file with the relevant files. The contents for the zip must be downloaded from the link to the build artifacts.

For information about the files and file structure for individual Foundry components, refer to the following sections.

<details close markdown="block"><summary>Identity (auth.zip)</summary>

*  auth.zip
   
   *  auth (folder)
      *  authService.war
      *  migrations.jar
      *  jboss-logging-3.1.0.CR2.jar
      *  mysql-connector-java-5.1.48.jar
      *  db.sql
      *  auth_config.zip
      *  migrations-auth-db2.zip
      *  migrations-auth-oracle.zip
      *  migrations-auth-sqlserver.zip
      *  migrations.zip

</details>


<details close markdown="block"><summary>Portal (portal.zip)</summary>

*  portal.zip
   
   *  portal (folder)
      *  mbaasportal.war

</details>


<details close markdown="block"><summary>Workspace (waas.zip)</summary>

*  waas.zip
   
   *  waas (folder)
      *  workspaceService.war
      *  waasdb.sql
      *  migrations.zip
      *  migrations-waas-db2.zip
      *  migrations-waas-oracle.zip
      *  migrations-waas-sqlserver.zip
      *  configfiles.zip

</details>



<details close markdown="block"><summary>Accounts (accounts.zip)</summary>

*  accounts.zip
   
   *  accounts (folder)
      *  migrations-accounts-sqlserver.zip
      *  migrations-accounts-oracle.zip
      *  migrations-accounts-db2.zip
      *  accountsdbmigration.zip
      *  accountsAPI.war

</details>


<details close markdown="block"><summary>Metrics Database Scripts (metricsflyway.zip)</summary>

*  metricsflyway.zip
   
   *  metricsflyway (folder)
      *  reportsdb_oracle.zip
      *  reportsdb_mysql.zip
      *  reportsdb_mssql.zip
      *  reportsdb_db2.zip

</details>


<details close markdown="block"><summary>Metrics Processing (metricsprocessing.zip)</summary>

*  metricsprocessing.zip
   
   *  metricsprocessing (folder)
      *  metrics.ear

</details>


<details close markdown="block"><summary>Integration/Middleware (middleware.zip)</summary>

*  middleware.zip
   
   *  middleware (folder)
      *  websphere_metainf.zip
      *  shared-libraries-was8.x.tar
      *  services.war
      *  schema.zip
      *  middleware.war
      *  middleware-system.jar
      *  middleware-libraries.zip
      *  middleware-libraries.tar
      *  middleware-bootconfig.tar
      *  VoltMXWebController.jar
      *  VoltMXWebCommons.jar
      *  VoltMXLuaVM.jar
      *  VoltMXLogger.jar
      *  VoltMXLogger-debug.jar
      *  VoltMXIoT.tar
      *  voltmxcache-derby.jar
      *  jboss-client.jar
      *  install.zip
      *  devicestore-MIDDLEWARE.tar
      *  devicedb_sqlserver.zip
      *  devicedb_oracle.zip
      *  devicedb_mysql.zip
      *  devicedb_db2.zip
      *  derby.jar
      *  admindb_sqlserver.zip
      *  admindb_oracle.zip
      *  admindb_mysql.zip
      *  admindb_db2.zip
      *  admin.war

</details>


<details close markdown="block"><summary>Engagement/Push Notification Service (vpns.zip)</summary>

*  vpns.zip
   
   *  vpns (folder)
      *  sqlserver.zip
      *  sharedlib.tar
      *  quartz-2.2.1.jar
      *  oracle.zip
      *  mysql.zip
      *  vpns.war
   *  vpns-resources.zip
db2.zip

</details>





