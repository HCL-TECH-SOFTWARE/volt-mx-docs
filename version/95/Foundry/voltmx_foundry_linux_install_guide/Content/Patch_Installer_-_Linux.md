                         

You are here: Installing Hotfix Archives for Volt MX Foundry - Linux

Installing Hotfix Archives for Volt MX Foundry - Linux
=====================================================

The Volt MX Foundry Patch Installer can be used to apply patches (software updates) to Volt MX Foundry components for a specific GA release. The Patch Installer supports applying patches from Foundry 7.0.1 (GA) onwards.

**For example**:

To apply any `7.0.1.x` patches to versions below 7.0.1 GA (Foundry 7.0 GA o r 6.5.x), you need to upgrade from `V 6.5.x` or `V 7.0GA`   to  `7.0.1 GA` by using the installer, and then apply `7.0.1.x` patches.

The Patch Installer uses hotfix archives and applies the software updates to an existing Volt MX Foundry Installation. A hotfix archive (which is a `.zip` file) file can have artifacts for one or more components. While installing hotfix archives, all components in the .zip are installed to your existing Volt MX Foundry installation.  

Patch Installer GA Versions
===========================

The following GA versions are supported for patch installer and hotfix archives.

*   7.0.1 GA
*   7.1 GA
*   7.2 GA
*   7.3 GA
*   V8
*   V8 SP2
*   V8 SP3 FP1
*   V8 SP4 FP3 HF1

Prerequisites
=============

*   Ensure that you have a previous version of Volt MX Foundry GA installed on your system at an accessible network location.
    
    > **_Important:_** If you are required to install hotfix archives to a set of components for a specific release, you must have the supported Volt MX Foundry GA version (for example, Foundry 7.0.1) with required components installed on your system.  
      
    For example, if you are required to install hotfix archive for Console version V 7.0.1, you must have the Foundry 7.0.1 GA with Console installed on your system.
    
*   Download the `patchinstaller(binary)` and `hotfix archives` from [downloads/manual/](https://hclsoftware.flexnetoperations.com/flexnet/operationsportal/entitledDownloadFile.action?downloadPkgId=HCL_Volt_Foundry_v9.2.x&orgId=HCL&fromRecentFile=false&fromRecentPkg=true&fromDL=false) with your credentials.
*   Ensure that  `VoltMXFoundryPatchInstaller.bin`  file has execute permission.
    
    
    <details close markdown="block"><summary>Click here for more details on How to download patch installer and hotfix archives:</summary>
        
    To download Volt MX Foundry Patch Installer and hotfixes, follow these steps:
        
    1.   Log in to [](http://developer.voltmx.com/VoltMXReleases)[downloads/manual/](http://community.hclvoltmx.com/downloads/manual/). You can obtain a user name and password from your sales representative or partner.
    2.  Navigate to the **VoltMX Foundry** section.
    3.  From the **VoltMX Foundry Patch Installer**, select the specific release from the **Version** drop-down list and then click on the specific release related files you want to download based on your platform (Windows or Linux).  
            For example, if you want to download `VoltMX Foundry Patch Installer 8.0 GA`, select the `8.0 GA` version from the drop-down list, and then click the **Installer\_Linux** link.
    4.  For the required hotfix components, select the specific release from the **Version** drop-down list and then click **Download**.

    </details>
    
*   For GA version 8.3 - Patch installers (8.3.1), using Tomcat and Oracle, you must ensure that the following additional files are added into the component zip folder.
    
    *   Add `ojdbc8.jar` manually into the Auth patch zip file.
    
    > **_Note:_** After including the **ojdbc8.jar** in the Auth patch zip file, the hibernate dialect gets changed from `org.hibernate.dialect.Oracle10gDialect` to `org.hibernate.dialect.Oracle9Dialect`.
    
*   For GA version 8.4 - Patch installers (8.4.3.1), add the `mysql-connector-java-5.1.44.jar` into the VPNS zip file.

To install Volt MX Foundry patch using the installer, follow these steps:

1.  Execute the following command to switch to the user that you created.  
    
    <figure class="highlight"><pre><code class="language-voltmx" data-lang="voltmx">{
        # su - username
    }</code></pre></figure>

2.  Press **Enter**. The system prompts you to enter the password.
3.  Enter the password, and press **Enter**.
4.  Unzip the `VoltMXFoundrySetup-8.x.x.GA.tar.gz` file, and navigate to the VoltMXFoundry\_Patch\_Installer\_Linux folder.
5.  Start the `VoltMXFoundryPatchInstaller-8.x.x.GA.bin` file by executing the following command:  
    `./VoltMXFoundryPatchInstaller-8.x.x.GA.bin`

    <figure class="highlight"><pre><code class="language-voltmx" data-lang="voltmx">{
        \[root@mbaastest11 ~\]# chmod +x VoltMXFoundryPatchInstaller-8.x.x.GA.bin  
        \[root@mbaastest11 ~\]# ./VoltMXFoundryPatchInstaller-8.x.x.GA.bin  
        Preparing to install...  
        Extracting the installation resources from the installer archive...  
        Configuring the installer for this system's environment...  
        
        Launching installer...  
        
        \===============================================================================  
        Volt MX  Foundry (created with InstallAnywhere)  
        \-------------------------------------------------------------------------------  
        Preparing CONSOLE Mode Installation...  
    }</code></pre></figure>

6.  To continue the installation, press **Enter**. The _Introduction_ page appears asking for following details. Enter the details to proceed with the upgrade:
    
    *   **Please provide the location of the patch file**: Provide the patch file location of the Volt MX Foundry component that you wish to install to current version. For example, `sample.zip`.
        
    *   **Please provide the location of existing installation** .The default install location appears in this field.  
        Provide the location of existing Volt MX Foundry installation that you wish to upgrade with the selected patch version.
        
        <figure class="highlight"><pre><code class="language-voltmx" data-lang="voltmx">{
            \===============================================================================  
            Introduction  
            \------------  
            
            Thank you for choosing to upgrade Volt MX Foundry!  
            
            Please provide the below details to proceed with the upgrade.  
            Please provide the location of the patch file : (Default: ): /root/sample.zip  
            Please provide the location of existing installation : (Default: ): /root/MFJB6525132
        }</code></pre></figure>
        
7.  Press **Enter**. The _Pre-Installation Summary_ details appear.
    
    <figure class="highlight"><pre><code class="language-voltmx" data-lang="voltmx">{
    \===============================================================================  
    Pre-Installation Summary  
    \------------------------  
            
    This patch will update the following components : <List of components>  
            
    To see detailed release notes, please refer [Release Notes](../../../Foundry/voltmx_foundry_release_notes/Content/VoltMX_Foundry_Release_Notes.md)  
            
    A copy of your installation will be placed in /root/<Previous-Foundry-install-folder\_PatchName>. To revert to the previous version of your installation, please replace the contents from the above mentioned folder.  
            
    If you accept terms and conditions [Terms and Condition](../../../Foundry/resources/license.md)  
            
    To proceed with the update, please press “enter"  
            
    PRESS <ENTER> TO CONTINUE:
    }</code></pre></figure>
8.  Press **Enter** to continue the installation.
    
    The installer takes backup of the current install folder. The backup folder will have a suffix of `_{Patch_File_Name}`. For example, if the hotfix name is VPNS.XXX, then the suffix of the backup folder will be `_VPNS.XXX`.
    
    > **_Important:_** The Installer does not support automatic backups of database and other artifacts. The Installer does not support rollback in case of a failure during the upgrade.  
      
     -  You must take backup of your database and other artifacts before upgrading.  
      
     -  After the upgrade, republish your Volt MX Foundry applications.
    
    <figure class="highlight"><pre><code class="language-voltmx" data-lang="voltmx">{
    \========================================================================  
    Installing...  
    \-----------------------------------------  
        
    \[==================|==================|==================|==================\] \[-----------------  
    }</code></pre></figure>
    
    The _Installation Complete_ details appear.
    
    <figure class="highlight"><pre><code class="language-voltmx" data-lang="voltmx">{
    \========================================================================  
    Installation Complete  
    \-----------------------------------------  
        
    Congratulations. Volt MX Foundry has been successfully installed to:  
        
    /root/MFJB6525132  
        
    <List of components installed> URL: https://00.00.00.00:port/vpns  
        
    PRESS <ENTER> TO EXIT THE INSTALLER: \[user1@cnt6-01c downloads\]$
    }</code></pre></figure>
9.  Press **Enter** to complete the installation. After the installation is completed, the installer creates logs in the install folder.
    
    The **<Install Location>** directory contains the log files logging each invocation of the installer. To make problem identification easier, provide these log files to Volt MX when reporting an issue.
    
    > **_Important:_** When you are using a third party tool (for example, PuTTY) for installing Volt MX Foundry remotely, if any network connection issues occur at the end of the installation, the installer stops the installation and the installation log is not created.
    
    For troubleshooting tips to resolve problems that you may encounter during installation, refer to the following:
    
    *   [FAQs and Troubleshooting](Troubleshooting.md)
