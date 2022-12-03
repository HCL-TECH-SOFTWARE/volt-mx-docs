                             

Installing Volt MX Foundry
============================

> **_Note:_** If a user installs Volt MX Foundry Console on a partition different from the user's home directory, the user must have read/write execute permissions.

This section of the document provides you with the instructions for installing and configuring Volt MX Foundry Console.

> **_Important:_** Ensure that you have the required hardware and access to the supporting software as mentioned in the [Prerequisites](Prerequisites.md) section and performed the steps as mentioned in the Pre-installation Tasks section.

Make sure you have proper administrative rights to install Volt MX Foundry on your computer.

You also need a user where Volt MX Foundry will be installed.

The **\<Install Location>** directory contains the log files documenting each invocation of the installer. To make problem identification easier, provide these log files to Volt MX when reporting an issue.

Single-Node Installation Procedure
----------------------------------

To install Volt MX Foundry Console using the installer, follow these steps:

1.  Execute the following command to switch to the user that you created.  
    
    \# su - username  

3.  Press **Enter**. You will be prompted to enter the password.
4.  Enter the password, and press **Enter**.
5.  Unzip the downloaded zip file, and go to the folder _**VoltMXFoundry\\_Installer\\_Linux**_.
6.  Start the installation by executing **./VoltMXFoundryConsoleInstaller-6.0.1.GA.bin**. Below is  the output from the installation process.

Preparing to install...  
Extracting the JRE from the installer archive...  
Unpacking the JRE...  
Extracting the installation resources from the installer archive...  
Configuring the installer for this system's environment...  
  
Launching installer...  
  
\===============================================================================  
Volt MX  Foundry Console (created with InstallAnywhere)  
\-------------------------------------------------------------------------------  
Preparing CONSOLE Mode Installation...  
\===============================================================================  
Introduction  
\------------  
The installer will guide you through the installation of Volt MX Foundry Console.  
  
It is strongly recommended that you quit all programs before continuing with this installation.  
  
Respond to each prompt to proceed to the next step in the installation. If you want to change something on a previous step, type 'back'.  
  
You may cancel this installation at any time by typing 'quit'.  
  
For help, refer ../../../voltmxonpremises/#installer.html  
  
PRESS <ENTER> TO CONTINUE:

8.  Press **Enter**. The _Prerequisites_ option appears.
    
    \=======================================================================  
    Prerequisites  
    \-------------  
    Please confirm that the following prerequisites have been met.  
      
    1\. MySQL 5.6 database server should be accessible.  
    2\. A corresponding database user should exist and that user should have all privileges.  
    3\. If you want to use your existing SSL certificate then please have the SSL certificate mapped to the domain name you want to use.  
    4\. If you want to install in multinode mode then JBoss cluster should be preconfigured.  
      
    \->1- Continue with Installation.  
       2- Abort Installation.  
      
    ENTER THE NUMBER OF THE DESIRED CHOICE, OR PRESS <ENTER> TO ACCEPT THE DEFAULT:
    
9.  To continue the installation, type 1. Or type 2 to abort and perform prerequisites. The _License Agreement_ option appears.
    
10.  Press **Y** to accept the agreement.The _Install Components_ option appears.
    
    \=======================================================================  
    Install Components  
    \------------------  
    Please select components to install. The Volt MX Identity Service helps you to use a single channel for all your authentication and authorization requests. The Volt MX Foundry Console is the administrative interface. In a development scenario, these can be installed on the same box. However, it is recommended to install these components on separate boxes for production environments.  
      
    \->1- All Components  
      2- Volt MX Identity Service  
       3- Volt MX Foundry Console  
      
    ENTER THE NUMBER FOR YOUR CHOICE, OR PRESS <ENTER> TO ACCEPT THE DEFAULT::  
    
    *   **All Components** - To install all components, select 1. The system will display both the [VoltMX Identity Service Database Details](#All_Components_VoltMX_Identity_Service) and **[VoltMX Foundry Console Database Details](#AllComponents_VoltMX_Foundry_Console)**.
    *   **VoltMX Identity Service** - To install Volt MX Identity Service, select 2. The system will display the [VoltMX Identity Service Database Details](#All_Components_VoltMX_Identity_Service) only.
    *   **VoltMX Foundry Console**\- To install Volt MX Foundry Console, select 3. The system will display the **[VoltMX Foundry Console Database Details](#AllComponents_VoltMX_Foundry_Console)** only.

11.  Press **Enter** to continue the installation. The _Install Folder_ option appears.
    
    \=======================================================================  
    Install Folder  
    \---------------------  
      
    Please choose a destination folder for this installation.  
      
    NOTE: The installation path should not contain any special characters.  
      
    Default Install Folder: /home/user1/VoltMXFoundry  
      
    ENTER AN ABSOLUTE PATH, OR PRESS <ENTER> TO ACCEPT THE DEFAULT  
    :
    
    > **_Note:_** By default, Volt MX Foundry is installed at the home directory of the user.
    
12.  Press **Enter** to continue the installation. The _Installation Mode_ option appears.
    
    \===============================================================================  
    Installation Mode  
    \-----------------  
    Please select your required installation mode. Standalone mode is for single node deployment whereas domain mode is for multi node deployment in JBoss cluster. Please note that if you want to install in domain mode then JBoss cluster should be preconfigured.  
      
    Note: If you are running JBoss in Domain node for a production setup, please procure appropriate licenses from Red Hat, Inc.  
      
     ->1- Standalone Mode (Single Node)  
       2- Domain Mode (Multi Node)  
      
    ENTER THE NUMBER FOR YOUR CHOICE, OR PRESS <ENTER> TO ACCEPT THE DEFAULT::
    
    > **_Important:_** To install single-node, choose 1- Standalone Mode.  
      
    To install multi-node, select 2- Domain Mode. Before installing domain mode, ensure that the JBoss cluster is configured on your install system. For more details, refer to Multi-Node Installation Procedure.
    
13.  In the Installation Mode if you select 1, the _HTTP or HTTPS_ option appear.
    
    \========================================================================  
    HTTP or HTTPS  
    \-------------  
    Please select the communication protocol you want to use.  
    \->1- HTTP  
       2- HTTPS  
      
    ENTER THE NUMBER FOR YOUR CHOICE, OR PRESS <ENTER> TO ACCEPT THE DEFAULT::  
    

1.  In _HTTP or HTTPS_  if you select 1, the following details in the _Details for Application Server_ option appear.
    
    \===============================================================================Details for Application Server  
    \------------------------------  
      
    Please enter the Hostname/IP Address and port you want to use. The default value is the IP Address of this machine.  
      
    Hostname/IP Address (Default: ): <IP address>  
      
    HTTP Port (Default: 8080): 8181  
    
2.  In the _HTTP or HTTPS,_ if you select 2, the following details in the _Details for Application Server_ option appears.
    
    \===============================================================================  
    Details for Application Server  
    \------------------------------  
      
    Please enter the Hostname/IP Address and port you want to use. The default value is the IP Address of this machine.  
      
    NOTE: If you want to use your existing SSL certificate then please have the SSL certificate mapped to the domain name you want to use.  
      
    Hostname/IP Address (Default: ): <IP address>  
      
    HTTP Port (Default: 8080):  
      
    HTTPS Port (Default: 8443):
    
    > **_Important:_** After installing Volt MX Foundry, import your SSL certificate (for example, domain.subdomain.crt) into your Foundry installer's JRE trusted certificate authority (CA) certificates file - for example, `<INSTALL_DIR>/jre/lib/security/cacerts`  
      
    If your SSL certificate is not configured, the system will display an error - for example, "peer not authenticated".  
      
    For details, refer to [Troubleshoot with SSL Certificate Issues](Troubleshooting.md#Service_Provider's_Certificate_Issues).
    
    > **_Note:_** Based on the inputs provided in the previous  [Step 11 > a](#Step11a)  or  [Step 11 > b](#Step11b), one of the following error messages appears:
    
    *   If a port is already in use, the following error message displays:
        
        \===============================================================================  
        Validation of Host Detail  
        \-------------------------  
        Port 22 is already in use.  
          
        Please provide a different port.  
          
        \->1- Go back to give valid input.  
           2- Abort Installation.  
          
        ENTER THE NUMBER OF THE DESIRED CHOICE, OR PRESS <ENTER> TO ACCEPT THE DEFAULT:
        
    
    *   If you provide an invalid port, the following error message displays:
        
        \===============================================================================  
        Port Validation  
        \---------------  
        Please enter a valid port. Port should be in between 1-65535.  
        \->1- Go back to give valid port.  
           2- Abort Installation.  
          
        ENTER THE NUMBER OF THE DESIRED CHOICE, OR PRESS <ENTER> TO ACCEPT THE DEFAULT::
        
    
    *   If you provide an invalid Hostname/IP address, the following error message displays:
        
        \===============================================================================  
        Invalid Hostname/IP Address  
        \---------------------------  
          
        Please enter a valid hostname/IP address.  
          
        \->1- Go back to give valid details.  
           2- Abort Installation.  
          
        ENTER THE NUMBER OF THE DESIRED CHOICE, OR PRESS <ENTER> TO ACCEPT THE DEFAULT:
        

15.  Provide the **Hostname/IP Address**, **HTTP Port**, and **HTTPS Port**, and press Enter. The _SSL Configuration for HTTPS Communication_ option appears only if you select HTTPS.
    
    \========================================================================  
    SSL Configuration for HTTPS Communication  
    \-----------------------------------------  
      
    Please select the appropriate option to proceed.  
      
    \->1- Create self-signed certificate  
       2- Provide SSL certificate  
      
    ENTER THE NUMBER FOR YOUR CHOICE, OR PRESS <ENTER> TO ACCEPT THE DEFAULT::  
    
    1.  In the _SSL Configuration for HTTPS Communication_, if you select 1, the _Details for self-signed SSL Certificate_ option appears.
        
        > **_Important:_** To add an existing SSL certificate to cacerts file, refer to [How to Add Your Existing SSL Certificate](Troubleshooting.md#ExistingSelf-signedcertificate).
        
        \========================================================================  
        Details for self-signed SSL Certificate  
        \-----------------------------------------  
          
        Please provide the following details to create self-signed certificate. All the fields are mandatory.  
          
        Please note that the path of self-signed certificate will be  /root/VoltMXFoundry/keystore.jks.  
          
        Organizational Unit (DEFAULT: ): platform  
          
        Host Name (DEFAULT: ): voltmx.com  
          
        Company (DEFAULT: ): Volt MX  
          
        City (DEFAULT: ): HYD  
          
        State (DEFAULT: ): AP  
          
        Country (DEFAULT: ): IND  
        
        > **_Note:_** The path for a self-signed certificate will be in this location: `<install folder>\keystore.jks`
        
    2.  In the _SSL Configuration for HTTPS Communication_, if you select 2, the _SSL Certificate Details_ option appears.
        
        \========================================================================  
        SSL Certificate Details  
        \-----------------------  
        Please provide the following details  
          
        Absolute Path to Keystore File (Default: ): /downloads/\_.hcl.net.2016.jks  
        
    3.  Type the details. The _Password for keystore file_ option appears.
        
        \========================================================================  
        Password for keystore file  
        \-----------------------------------------  
          
        Password should contain minimum six characters and should not contain space.  
          
        Please enter the password:
        
        *   If you enter an incorrect password -- for example, one that is fewer than six characters, contains a space, or is empty -- the following error message for an invalid keystore password is displayed.
            
            \========================================================================  
            Password for keystore file  
            \-----------------------------------------  
              
            \========================================================================  
            Invalid Keystore Password  
            \-------------------------  
            Keystore password must be at least six characters and should not contain space.  
              
            PRESS <ENTER> TO ACCEPT THE FOLLOWING (OK):
            
16.  Type the password. The _MySQL Database Details_ option appears.
    
    \========================================================================  
    MySQL Database Details  
    \-----------------------------------------  
      
    Please enter MySQL database server details  
      
    Database Server IP (DEFAULT: localhost): <IP address>  
      
    Port (DEFAULT: 3306):  
      
    Username (DEFAULT: ): root  
    
    Enter the following details:
    
    *   **Database Server IP**: Enter the server Hostname/IP to be used to create a database of selected components of Volt MX Foundry. By default, the server Hostname/IP is set as localhost.
    *   **Port**: By default, this field is set to 3306.
    *   **Username**: Enter the user name used while creating the database user - for example, dbclient.
17.  Press **Enter**. The _Enter Password for Database User_ option appears. 
    
    \========================================================================  
    Enter Password for Database User  
    \-----------------------------------------  
    Please enter the password:  
    
    *   If the database connection fails, the following error message displays.
        
        \===============================================================================  
        Database Connection Failed  
        \--------------------------  
        Database connection failed.  
          
        For the following reasons: Communications link failure  
          
        The last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.  
          
        PRESS <ENTER> TO ACCEPT THE FOLLOWING (OK):
        
    
    *   If the database server not compatible, the following error message displays:
        
        \===============================================================================  
        Incompatible Database Server Version  
        \------------------------------------  
        Minimum requirement for MySQL database server is 5.6.  
          
        PRESS <ENTER> TO ACCEPT THE FOLLOWING (OK):
        
18.  Provide a password and press **Enter**. One of the following options appears based on the selection at [Install Components](#InstallComponentsSN).
    *   In the [Install Components](#InstallComponentsSN), if you select **All Components** or **VoltMX Identity Service**, then the _VoltMX Identity Service Database Details_ option appears:
        
        \===============================================================================  
        Volt MX Identity Service Database Details  
        \--------------------------------------  
        Please enter database details for Volt MX Identity Service.  
          
        Global Database Name (Default: voltmxidglobaldb): voltmxidglobaldbdoc  
          
        Configuration Database Name (Default: voltmxidconfigdb): voltmxidconfigdbdoc
        
    *   In the [Install Components](#InstallComponentsSN), if you select **All Components** or **VoltMX Foundry Console**, the _VoltMX Foundry Console Database Details_ option appears:
        
        \===============================================================================  
        Volt MX Foundry Console Database Details  
        \------------------------------------------  
          
        Please enter database name for Volt MX Foundry Console and Accounts.  
          
        Volt MX Foundry Console Database Name (Default: voltmxmfconsoledb): voltmxmfconsoledbdoc  
          
        Volt MX Foundry Accounts Database Name (Default: voltmxmfaccountsdb): voltmxmfaccountsdbdoc
        

1.  Type account details and press **Enter**. The _Pre-Installation Summary_ option appears.
    
    \===============================================================================  
    Pre-Installation Summary  
    \------------------------  
    Please review the following before continuing:  
      
    Install Folder:  
    /root/VoltMXFoundry  
      
    Components:  
    Volt MX Identity Service and Volt MX Foundry Console  
      
    Installation Mode:  
    Standalone Mode  
      
    Database Server:  
    <IP address>  
      
    Database Names:  
    voltmxidglobaldb1, voltmxidconfigdb1, voltmxmfconsoledb1 & voltmxmfaccountsdb1  
      
    PRESS <ENTER> TO CONTINUE:
    
    The following table explains the components and database names that are displayed based on the option chosen in [Install Components](#InstallComponentsSN).
    
    | Options in Install Components | The system displays ||
    | --- | --- | --- |
    | Components as | Database Server as |
    | --- | --- |
    | 1- All components | Volt MX Identity Service   and  VoltMX Foundry Console | voltmxidglobaldbdoc, voltmxidconfigdbdoc, voltmxmfconsoledbdoc and voltmxmfaccountsdbdoc |
    | 2- Volt MX Identity Service | Volt MX Identity Service | voltmxidglobaldbdoc and voltmxidconfigdbdoc |
    | 3- Volt MX Foundry Console | Volt MX Foundry Console | voltmxmfconsoledbdoc and voltmxmfaccountsdbdoc |
    
2.  Type the details and press **Enter**. The _Ready To Install_ option appears.
    
    \========================================================================  
    Ready To Install  
    \-----------------------------------------  
      
    Installer is now ready to install Volt MX Foundry Console onto your system at the following location:  
      
    /home/user1/VoltMXFoundry  
      
    PRESS <ENTER> TO INSTALL:  
    
3.  Press **Enter**. The _Installing_ option appears.
    
    \========================================================================  
    Installing...  
    \-----------------------------------------  
      
    \[==================|==================|==================|==================\] \[------------------|------------------|------------------|------------------\]
    
4.  Press **Enter**. The _Installation Complete_ option appears.
    
    \========================================================================  
    Installation Complete  
    \-----------------------------------------  
      
    Congratulations. Volt MX Foundry Console has been successfully installed to:  
      
    /home/user1/VoltMXFoundry  
      
    Volt MX Identity Service URL: https://00.00.00.00:port/authService  
      
    PRESS <ENTER> TO EXIT THE INSTALLER: \[user1@cnt6-01c downloads\]$
    
    Based on the selection in [Install Components](#InstallComponentsSN), the installer displays Volt MX Identity Service URL or  VoltMX Foundry Console URL. For example, when you select:
    
    *   _1 All components_ or _2 Volt MX Identity Service_, the installer displays `VoltMX Identity Service URL: https://00.00.00.00:port/authService`
    *   _1 All components or 3 Volt MX Foundry Console_, the installer displays `VoltMX Foundry Console URL: https://00.00.00.00:port/`

> **_Important:_** After installing Volt MX Foundry, import your SSL certificate (for example, domain.subdomain.crt) into your Foundry installer's JRE trusted certificate authority (CA) certificates file - for example,  
`<INSTALL_DIR>/jre/lib/security/cacerts`  
  
If your SSL certificate is not configured, the system will display an error - for example, "peer not authenticated".  
  
For details, refer to [Troubleshoot with SSL Certificate Issues](Troubleshooting.md#Service_Provider's_Certificate_Issues).
