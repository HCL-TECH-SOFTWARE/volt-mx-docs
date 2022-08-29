                          


Upgrading Volt MX Foundry to V9
==============================

This section explains upgrading Volt MX Foundry Components through the installer. For an upgrade to work, the minimum installation version should be Foundry 7.x.GA / 8.4.X.GA.

> **_Important:_** The new Volt MX Foundry Upgrade process works by upgrading the existing database to the latest version and by installing fresh application server artifacts, such as data sources, WARs, etc. For installation details such as hostname, database port, prefix, suffix, etc., you must refer to the installation logs of your previous setup.

*   The Installer does not support automatic backups of database and other artifacts. You must perform a cleanup of the existing application server artifacts and take a backup of the custom artifacts.
*   The Installer does not support rollback in case of a failure during the upgrade. In order to rollback you must restore your backed up database and server artifacts before upgrading .
*   After the upgrade, you must republish your Volt MX Foundry applications. The application WAR artifacts maybe required to be built with the latest plugins.
*   If the application server setup is a clustered setup, the installation needs to be done by connecting to the Management Server and port.
*   For bundled Tomcat and Standalone JBoss, stop the running app server, start a fresh installation, and ensure that you provide the same Hostname, Ports, and Database schema prefix and suffix as the previous installation.
*   For remote servers such as Pre-Configured JBoss, Multi-Node JBoss, or WebLogic, perform a cleanup of the app server artifacts, start a fresh installation, and ensure that you provide the same Hostname, Ports, and Database schema prefix and suffix as the previous installation. HCL recommends performing the cleanup of the app server by using the Management Console.

The **<Install Location>** directory contains the log files logging each invocation of the installer. To make problem identification easier, provide these log files to HCL when reporting an issue.

Prerequisites
=============

*   You can download the Volt MX Foundry Installer from [https://hclsoftware.flexnetoperations.com](https://hclsoftware.flexnetoperations.com/flexnet/operationsportal/entitledDownloadFile.action?downloadPkgId=HCL_Volt_Foundry_v9.2.x&orgId=HCL&fromRecentFile=false&fromRecentPkg=true&fromDL=false) with your credentials.
*   Ensure that VoltMXFoundryInstaller.bin (x.x) file has execute permission.
*   Ensure that you have the path of your Previous Install Directory.
*   Ensure that you stop the application server of your existing Foundry/VoltMX Foundry instance, which you want to upgrade.
*   Ensure that data base is upgraded as per V9.x supported database versions. Refer [https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_foundry_manual_install_guide/Content/Database_Prerequsites.html](https://github01.hclpnp.com/pages/phoenix-temenos/volt-mx-doc-opnsrc/docs/documentation/Foundry/voltmx_foundry_linux_install_guide/Content/Upgrading_VoltMX_Foundry_SP1.md)

To upgrade Volt MX Foundry Console using the installer, follow these steps:

1.  Execute the following command to switch to the user that you created.  

\# su - username
       

2.  Press **Enter**. The system prompts you to enter the password.
3.  Enter the password, and press **Enter**.
4.  Unzip the `VoltMXFoundrySetup.tar.gz` file, and navigate to the folder _**VoltMXFoundry\_Installer\_Linux**_.
5.  Start the VoltMXFoundryInstaller.GA.bin file by executing the following command:  
    `./VoltMXFoundryInstaller-GA.bin`
6.  Continue the installation until you reach the **Database Choice** screen.
    
    > **_Note:_** Upgrade steps for Volt MX Foundry until the **Database Choice** section are same that as a fresh installation.
    
    For more details on how to install Volt MX Foundry components on an application server with a database, refer [Installation Modes - Volt MX Foundry](Installing_Modes.md)
    
7.  From the **Please select the database provider of your choice**, choose one of the databases to display database details and fill the details.

        \========================================================================  
        Database Choice  
        \-----------------------------------------  
        Please select the database of your choice.  
        
        \->1- MySQL  
           2- Oracle  
           3- SQL Server  
           4- MariaDB  
        
        ENTER THE NUMBER FOR YOUR CHOICE, OR PRESS <ENTER> TO ACCEPT THE DEFAULT:: 


    
8.  Enter the database server details such as hostname, port, user, and password.
9.  Press **Enter**. The installation prompts for Database name prefix and suffix details as follows:
    
        \===============================================================================  
        Database name prefix and suffix  
        \-------------------------------  
        
        Please enter database name prefix and suffix.  
        
        If prefix is Volt MX and suffix is 1 then database names will be VoltMXXXXXX1.  
        
        Please provide existing Prefix and Suffix if you intend to upgrade to the new Volt MX Foundry Database  
        
        Database Name Prefix (Default: ):  
        
        Database Name Suffix (Default: ):

    
    
        *     Database Name Prefix: Enter the `prefix` of an existing Volt MX Foundry database - for example, Volt MX.

        *     Database Name Suffix: Enter the `suffix` of an existing Volt MX Foundry database- for example, 1.   
        Press **Enter**. The Warning message appears.
     
        \=========================================== 
        Warning - Database already exists  
        \---------------------------------  
      
            One or more databases already exist. Do you want to use existing databases? If yes, then the schema may be upgraded.  
      
            \->1- No, Go back  
            2- Yes, Use existing  
      
            ENTER THE NUMBER OF THE DESIRED CHOICE, OR PRESS <ENTER> TO ACCEPT THE DEFAULT: 2 

         
    
10.  Press **2** to accept use existing database.
     The Warning message appears.
     

      
         ===============================================================================  
         Copy encryption keys and other required data
         from prior Foundry instance. You can skip
         this now and manually update your instance
         after  the installation is complete.  
         1- SKIP
         \->2- OK  
         ENTER THE NUMBER FOR YOUR CHOICE, OR PRESS
         <ENTER> TO ACCEPT THE DEFAULT:

        
    
11.  Press **2** to update the encryption keys and
         other required data from your existing Volt MX
         Foundry Instance.

         ===============================================================================  
         Previous Installation Directory  
         -------------------------------  
      
         Please choose the previous installation directory.  
      
         Previous Installation Directory (Default: /root):  
      
      
         \===============================================================================  
         Volt MX Foundry server startup details  
         \----------------------------------  
      
         Do you want to start the Volt MX Foundry server after successful installation of Volt MX Foundry  
      
         \->1- Yes
         2- No 

         ENTER THE NUMBER FOR YOUR CHOICE, OR PRESS
         <ENTER> TO ACCEPT THE DEFAULT::
         
    
     If you choose to skip providing the keys, go to your upgraded Volt MX Foundry install location and paste the following details that you copied from the previous Foundry install folder:
    
       *   `authService.key`: <Install Location>\\tomcat\\webapps\\authService\\WEB-INF\\classes\\authservice.key
       *   `workspaceService.key`: <Install Location>\\tomcat\\webapps\\workspace\\WEB-INF\\classes\\workspaceService.key
       *    `ACCOUNTS_ENCRYPTION_KEY`: <Install Location>\\tomcat\\webapps\\accounts\\WEB-INF\\classes\\accounts.properties
    
       Restart or redeploy the war components after you update the keys.
    
12. Press **Enter**. Skip the _Administrator /Account
    Configuration_ details.      
    While installing Volt MX Foundry using an existing database, you must not configure your super administrator account again.  
    
    > **_Note:_** You can directly log in to Volt MX Foundry Console using the existing credentials after a successful upgrade.  
    
13. If you do not skip configuring the _Administrator
    /Account Configuration_ details, the following screen appears.
    
         \===============================================================================  
         Administrator/Account Configuration  
         \-------------------------------  
      
         Please configure your Administrator Account. We require your First Name, Last Name, Email Address and Password. We use your email address as a login name and we do not use it to send unsolicited emails.  
      
         Public URL (Default: ):  
      
         First Name (Default: ):  
      
         Latest Name (Default: ):  
      
         Email (Default: ):  
    
14.  Provide the location of the existing Foundry
     component that you wish to upgrade to this
     version and press **Enter**. The
     _Pre-Installation Summary_ details appear.
    
     > **_Note:_**  The existing schemas and upgraded for the new instance. The databases for the selected components are created based on the prefix and suffix that you provided.
    
         \===============================================================================  
         Pre-Installation Summary  
         \------------------------  
         Please review the following before continuing:  
      
         Install Type:  
         Upgrade Installation  
      
         Install Components:  
         Console, Identity Services and Integration
         Services  
      
         Install Folder:  
         /root/UP652TO70  
      
         Application Server:  
         <App Server, Installation Mode>  
      
         Application Server Details:  
         <Hostname/IP Address>  
      
         Database Choice:  
         <database>  
      
         Database Details:  
         <IP address>  
      
         Database Names:  
         voltmxxxxx1, voltmxxxxx1, voltmxxxxx1 &
         voltmxxxxx1  
      
         PRESS <ENTER> TO CONTINUE:
    
15. Press **Enter**. The _Installation Complete_
    details appear.
    
         \========================================================================  
         Installation Complete  
         \-----------------------------------------  
      
         Congratulations. Volt MX Foundry has been
         successfully installed to:  
      
         /root/UP652TO70  
      
         Console URL: https://00.00.00.00:port/mfconsole  
         Identity Service URL: https://00.00.00.00:port/authService  
         Integration Service URL: https://00.00.00.00:port/admin  
         Engagement Services URL: https://00.00.00.000:port/vpns  
      
      
          PRESS <ENTER> TO EXIT THE INSTALLER: \
          [user1@cnt6-01c downloads\]$
    
16. Press **Enter** to complete the installation.
         After the installation is completed, the
         installer creates logs in the install folder.
    
       > **_Important:_** When you are using a third party tool (for example, PuTTY) for installing Volt MX Foundry remotely, if any network connection issues occur at the end of the installation, the installer stops the installation and the installation log is not created.
    
17. You can now access Volt MX Foundry Console by using the URLs. For more details, refer to [Accessing Volt MX Foundry Console - On-premises](../../../Foundry/voltmx_foundry_user_guide/Content/How_to_access_VoltMX_Foundry_Portal_on-Prem.md).
