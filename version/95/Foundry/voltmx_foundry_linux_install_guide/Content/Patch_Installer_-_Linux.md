                         

You are here: Installing Hotfix Archives for Volt Foundry - Linux 

Installing Hotfix Archives for Volt Foundry - Linux
=====================================================

The Volt Foundry Patch Installer can be used to apply patches (software updates) to Volt Foundry components for a specific GA release. The Patch Installer supports applying patches from Foundry 7.0.1 (GA) onwards.

**For example**:

To apply any `9.5.x` patches to versions below 9.5.x GA (Foundry 9.5.x GA or 6.5.x), you need to upgrade from `V 9.5.x` or `V 9.5.x.GA`   to  `9.5.x GA` by using the installer, and then apply `9.5.x` patches.

The Patch Installer uses hotfix archives and applies the software updates to an existing Volt Foundry Installation. A hotfix archive (which is a `.zip` file) file can have artifacts for one or more components. While installing hotfix archives, all components in the .zip are installed to your existing Volt Foundry installation. 


Prerequisites
-------------

*   Ensure that you have a previous version of Volt Foundry GA installed on your system at an accessible network location.
    
    > **_Important:_** If you are required to install hotfix archives to a set of components for a specific release, you must have the supported Volt Foundry GA version (for example, Foundry 9.5.x) with required components installed on your system.  
      
    For example, if you are required to install hotfix archive for Console version V 9.5.x, you must have the Foundry 9.5.x GA with Console installed on your system.
    
*   Download the `patchinstaller(binary)` and `hotfix archives` from [downloads/manual/](https://hclsoftware.flexnetoperations.com/flexnet/operationsportal/entitledDownloadFile.action?downloadPkgId=HCL_Volt_Foundry_v9.2.x&orgId=HCL&fromRecentFile=false&fromRecentPkg=true&fromDL=false) with your credentials.
*   Ensure that  `VoltFoundryPatchInstaller-9.5.x.QA.bin`  file has execute permission.
    
    
    <details close markdown="block"><summary>Click here for more details on How to download patch installer and hotfix archives:</summary>
        
    To download Volt Foundry Patch Installer and hotfixes, follow these steps:
        
    1.   Log in to [](http://developer.voltmx.com/VoltMXReleases)[downloads/manual/](http://community.hclvoltmx.com/downloads/manual/). You can obtain a user name and password from your sales representative or partner.
    2.  Navigate to the **Volt Foundry** section.
    3.  From the **Volt Foundry Patch Installer**, select the specific release from the **Version** drop-down list and then click on the specific release related files you want to download based on your platform (Windows or Linux).  
            For example, if you want to download `Volt Foundry Patch Installer 8.0 GA`, select the `8.0 GA` version from the drop-down list, and then click the **Installer\_Linux** link.
    4.  For the required hotfix components, select the specific release from the **Version** drop-down list and then click **Download**.

    </details>
    
*   For GA version 8.3 - Patch installers (8.3.1), using Tomcat and Oracle, you must ensure that the following additional files are added into the component zip folder.
    
    *   Add `ojdbc8.jar` manually into the Auth patch zip file.
    
    > **_Note:_** After including the **ojdbc8.jar** in the Auth patch zip file, the hibernate dialect gets changed from `org.hibernate.dialect.Oracle10gDialect` to `org.hibernate.dialect.Oracle9Dialect`.
    
*   For GA version 8.4 - Patch installers (8.4.3.1), add the `mysql-connector-java-8.x.x` into the VPNS zip file.

To install Volt Foundry patch using the installer, follow these steps:

<ol>
<li>Execute the following command to switch to the user that you created.<br><code># su - username</code></li>
<li>Press <b>Enter</b>. The system prompts you to enter the password.</li>
<li>Enter the password, and press <b>Enter</b>.</li>
<li>Unzip the <code>VoltFoundrySetup-9.x.x.GA.tar.gz</code> file, and navigate to the VoltFoundry_Patch_Installer_Linux folder.</li>
<li>Start the VoltFoundryPatchInstaller-9.5.x.QA.bin file by executing the following command:<br><code>./VoltFoundryPatchInstaller-9.5.x.QA.bin</code>
<pre><code>[root@mbaastest11 ~]# chmod +x VoltFoundryPatchInstaller-9.5.x.QA.bin
[root@mbaastest11 ~]# ./VoltFoundryPatchInstaller-9.5.x.QA.bin
Preparing to install...
Extracting the installation resources from the installer archive...
Configuring the installer for this system's environment...

Launching installer...
====================================
Volt Foundry (created with InstallAnywhere)
------------------------------------
Preparing CONSOLE Mode Installation...</code></pre>
</li>
<li>To continue the installation, press <b>Enter</b>. The Introduction page appears asking for following details. Enter the details to proceed with the upgrade:
<ul>
<li><b>Please provide the location of the patch file</b>: Provide the patch file location of the Volt Foundry component that you wish to install to current version. For example, <code>sample.zip</code>. For information about creating a patch file, refer to <a href="#prerequisites">Creating a patch file for Foundry components</a>.</li>
<li><b>Please provide the location of existing installation</b>: The default install location appears in this field. Provide the location of existing Volt Foundry installation that you wish to upgrade with the selected patch version.

<pre><code>
====================================
Introduction
------------

Thank you for choosing to upgrade Volt Foundry!

Please provide the below details to proceed with the upgrade.
Please provide the location of the patch file : (Default: ): /root/sample.zip
Please provide the location of existing installation : (Default: ): /root/MFJB6525132
</code></pre>
</li></ul>
</li>
<li>Press Enter. The Pre-Installation Summary details appear.<br>
<pre><code>
====================================
Pre-Installation Summary
------------------------

This patch will update the following components : &lt;List of components&gt;

Please refer to <a href="https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/VMX_release_notes.html">release notes</a>.  


A copy of your installation will be placed in /root/&lt;Previous-MobileFoundry-install-folder_PatchName&gt;. To revert to the previous version of your installation, please replace the contents from the above mentioned folder.

If you accept terms and conditions,to proceed with the update, please press “Enter".

PRESS &lt;ENTER&gt; TO CONTINUE:</code></pre>
</li>
<li>Press <b>Enter</b> to continue the installation.<br>
The installer takes backup of the current install folder. The backup folder will have a suffix of <code>_{Patch_File_Name}.</code> For example, if the hotfix name is VPNS.XXX, then the suffix of the backup folder will be <code>_VPNS.XXX</code>.
<blockquote><em><b>Important: </b></em>The Installer does not support automatic backups of database and other artifacts. The Installer does not support rollback in case of a failure during the upgrade.<br>
- You must take backup of your database and other artifacts before upgrading.<br>
- After the upgrade, republish your Volt Foundry applications.
</blockquote>
<pre><code>
=============================
Installing...
-----------------------------------------

[==================|==================|==================]
[------------------|------------------|------------------]
</code></pre>
The Installation Complete details appear.
<pre><code>
=============================
Installation Complete
-----------------------------------------

Congratulations. Volt Foundry has been successfully installed to:

/root/MFJB6525132

&lt;List of components installed<&gt;> URL: https://00.00.00.00:port/vpns

PRESS &lt;ENTER&gt; TO EXIT THE INSTALLER: [user1@cnt6-01c downloads]$
</code></pre>
</li>
<li>
Press <b>Enter</b> to complete the installation. After the installation is completed, the installer creates logs in the install folder.
The &lt;Install Location&gt; directory contains the log files logging each invocation of the installer. To make problem identification easier, provide these log files to Volt MX when reporting an issue.
<blockquote><em><b>Important: </b></em>
When you are using a third party tool (for example, PuTTY) for installing Volt Foundry remotely, if any network connection issues occur at the end of the installation, the installer stops the installation and the installation log is not created.
</blockquote>
For troubleshooting tips to resolve problems that you may encounter during installation, refer to <a href="../Content/Troubleshooting.html">FAQs and Troubleshooting</a>
</li>
</ol>



## <a name="Creating"></a>Creating a patch file for Foundry components

To create a patch file for Foundry components, you need to create a zip file with the relevant files. The contents for the zip must be downloaded from the link to the build artifacts.

For information about the files and file structure for individual Foundry components, refer to the following sections.


<details close markdown="block"><summary>Identity (`auth.zip`)</summary>

*   `auth.zip`
    *   `auth` (folder)
        *   `authService.war`
        *   `migrations.jar`
        *   `jboss-logging-3.1.0.CR2.jar`
        *   `mysql-connector-java-5.1.48.jar`
        *   `db.sql`
        *   `auth_config.zip`
        *   `migrations-auth-db2.zip`
        *   `migrations-auth-oracle.zip`
        *   `migrations-auth-sqlserver.zip`
        *   `migrations.zip`

</details> 

<details close markdown="block"><summary>Portal (`portal.zip`)</summary>

*   `portal.zip`
    *   `portal` (folder)
        *   `mbaasportal.war`

</details>

<details close markdown="block"><summary>Workspace (`waas.zip`)</summary>

*   `waas.zip`
    *   `waas` (folder)
        *   `workspaceService.war`
        *   `waasdb.sql`
        *   `migrations.zip`
        *   `migrations-waas-db2.zip`
        *   `migrations-waas-oracle.zip`
        *   `migrations-waas-sqlserver.zip`
        *   `configfiles.zip`

</details> 
<details close markdown="block"><summary>Accounts (`accounts.zip`)</summary>


*   `accounts.zip`
    *   `accounts` (folder)
        *   `migrations-accounts-sqlserver.zip`
        *   `migrations-accounts-oracle.zip`
        *   `migrations-accounts-db2.zip`
        *   `accountsdbmigration.zip`
        *   `accountsAPI.war`

</details> 
<details close markdown="block"><summary>Metrics Database Scripts (`metricsflyway.zip`)</summary>


*   `metricsflyway.zip`
    *   `metricsflyway` (folder)
        *   `reportsdb_oracle.zip`
        *   `reportsdb_mysql.zip`
        *   `reportsdb_mssql.zip`
        *   `reportsdb_db2.zip`

</details> 
<details close markdown="block"><summary>Metrics Processing (`metricsprocessing.zip`)</summary>


*   `metricsprocessing.zip`
    *   `metricsprocessing` (folder)
        *   `metrics.ear`

</details> 


<details close markdown="block"><summary>Integration/Middleware (`middleware.zip`)</summary>


*   `middleware.zip`
    *   `middleware` (folder)
        *   `websphere_metainf.zip`
        *   `shared-libraries-was8.x.tar`
        *   `services.war`
        *   `schema.zip`
        *   `middleware.war`
        *   `middleware-system.jar`
        *   `middleware-libraries.zip`
        *   `middleware-libraries.tar`
        *   `middleware-bootconfig.tar`
        *   `VoltMXWebController.jar`
        *   `VoltMXWebCommons.jar`
        *   `VoltMXLuaVM.jar`
        *   `VoltMXLogger.jar`
        *   `VoltMXLogger-debug.jar`
        *   `VoltMXIoT.tar`
        *   `voltmxcache-derby.jar`
        *   `jboss-client.jar`
        *   `install.zip`
        *   `devicestore-MIDDLEWARE.tar`
        *   `devicedb_sqlserver.zip`
        *   `devicedb_oracle.zip`
        *   `devicedb_mysql.zip`
        *   `devicedb_db2.zip`
        *   `derby.jar`
        *   `admindb_sqlserver.zip`
        *   `admindb_oracle.zip`
        *   `admindb_mysql.zip`
        *   `admindb_db2.zip`
        *   `admin.war`

</details>

<details close markdown="block"><summary>Engagement/Push Notification Service (`vpns.zip`)</summary>


*   `vpns.zip`
    *   `vpns` (folder)
        *   `sqlserver.zip`
        *   `sharedlib.tar`
        *   `quartz-2.2.1.jar`
        *   `oracle.zip`
        *   `mysql.zip`
        *   `vpns.war`
        *   `vpns-resources.zip`
        *   `db2.zip`

</details>






