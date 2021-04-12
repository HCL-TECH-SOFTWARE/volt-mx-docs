---
layout: "documentation"
category: "voltmx_foundry_manual_install_guide"
---
                             

Installing Volt MX Foundry
============================

> **_Note:_** If a user installs Volt MX Foundry Console on a partition different from the user's home directory, the user must have read/write execute permissions.

This section of the document provides you with the instructions for installing and configuring Volt MX Foundry Console.

> **_Important:_** Ensure that you have the required hardware and access to the supporting software as mentioned in the [Prerequisites](Prerequisites.html) section and performed the steps as mentioned in the Pre-installation Tasks section.

Make sure you have proper administrative rights to install Volt MX Foundry on your computer.

You also need a user where Volt MX Foundry will be installed.

The **<Install Location>** directory contains the log files documenting each invocation of the installer. To make problem identification easier, provide these log files to Volt MX when reporting an issue.

Single-Node Installation Procedure
----------------------------------

To install Volt MX Foundry Console using the installer, follow these steps:

1.  Execute the following command to switch to the user that you created.  
    

\# su - username  

3.  Press **Enter**. You will be prompted to enter the password.
4.  Enter the password, and press **Enter**.
5.  Unzip the downloaded zip file, and go to the folder _**VoltMXFoundry\_Installer\_Linux**_.
6.  Start the **./VoltMXFoundryConsoleInstaller-6.0.1.GA.bin** file by executing the following command:

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
  
For help, refer {{ site.baseurl }}/docs/documentation/voltmxonpremises/#installer.html  
  
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
    
    \========================================================================  
    License Agreement  
    \-----------------  
    Installation and Use of Volt MX Foundry Console Requires Acceptance of the Following License Agreement:  
      
    VOLTMX, INC.  
    SOFTWARE LICENSE AGREEMENT  
      
    THE TERMS AND CONDITIONS CONTAINED HEREIN CONSTITUTE A LEGAL AGREEMENT.  
      
    THIS AGREEMENT ("AGREEMENT") CONTAINS THE ENTIRE AGREEMENT BETWEEN YOU ("LICENSEE") AND VOLTMX, INC. ("VOLTMX") WITH RESPECT TO THE TERMS AND CONDITIONS DESCRIBED HEREIN. READ THIS AGREEMENT CAREFULLY BEFORE YOU CLICK THE "I ACCEPT" BUTTON BELOW. BY CLICKING ON THE "I ACCEPT" BUTTON, YOU ACKNOWLEDGE THAT (1) YOU ARE AUTHORIZED TO ENTER THIS AGREEMENT FOR AND ON BEHALF OF YOUR COMPANY, AND ARE DOING SO, AND (2) YOU HAVE READ AND UNDERSTAND AND AGREE THAT YOU AND THE COMPANY SHALL BE BOUND BY THESE TERMS AND CONDITIONS AND ALL MODIFICATIONS AND ADDITIONS PROVIDED FOR. IF YOU DO NOT AGREE WITH THESE TERMS AND CONDITIONS, CLICK ON THE "I DO NOT ACCEPT" BUTTON BELOW AND INSTALLATION WILL TERMINATE.  
      
    Software products included with this product that are not Volt MX products are licensed to you by the software provider. Please refer to the license contained in the provider's product for the terms of use before using such products.  
      
    1\. License Grant. Volt MX grants you a limited, non-exclusive, non-transferable license to use, for developmental purposes only, the Volt MX software program(s),  
      
    PRESS <ENTER> TO CONTINUE:  
      
    known as the VoltMXTM Platform (the "Software") and related product documentation at no charge subject to the terms and restrictions set forth in this License Agreement. You are not permitted to use the Software in any manner not expressly authorized by this License. You acknowledge and agree that ownership of the Software and all subsequent copies thereof regardless of the form or media are held by Volt MX. The terms of this License will govern any Software upgrades provided by Volt MX that replace and/or supplement the original Software, unless such upgrade is accompanied by a separate license in which case the terms of that license will govern.  
      
    2\. Term of Agreement. Your license is effective until terminated by Volt MX. The License will terminate automatically if you fail to comply with any of the limitations or other requirements described herein. At termination you shall cease all use of the Software and destroy all copies, full or partial of the Software.  
      
    3\. Ownership Rights. The Software and related documentation are protected by United States copyright laws and international treaties. Volt MX, third party component providers and open source component providers own and retain all right, title and interest in and to the Software and related documentation, including all copyrights, patents, trade secret rights, trademarks and other intellectual property rights therein. Your possession, installation, or use of  
      
    PRESS <ENTER> TO CONTINUE:  
      
    the Software and related documentation does not transfer to you any title to the intellectual property in the Software and the related documentation, and you will not acquire any rights to the Software and product documentation, except the limited right to use it as expressly set forth in this Agreement.  
      
    4\. Use of Name and Trademarks. You shall not use the name, trade names or trademarks of Volt MX or any of its affiliates in any advertising, promotional literature or any other material, whether in written, electronic or other form, distributed to any third party, except in the form provided by Volt MX, and then solely for purposes of identifying Volt MX software.  
      
    5\. Restrictions.  
      
    (A) Except as provided in this Agreement, you may not rent, lease, lend, redistribute or sublicense the Software. You may not copy the Software except to make archival or backup copies, provided that the backup copy must include all copyright or other proprietary notices contained on the original. You may not copy the related product documentation. You may not modify, reverse engineer, decompile, or disassemble the Software, except to the extent the foregoing restriction is expressly prohibited by applicable law. The Software is not intended for use in the operation of nuclear facilities, aircraft navigation or communication systems, air traffic control systems, life support  
      
    PRESS <ENTER> TO CONTINUE:  
      
    machines or other equipment in which the failure of the Software could lead to death, personal injury or severe physical or environmental damage.  
      
    (B) Certain components of the Software are provided under various Open Source licenses that have been made available to Volt MX. You may modify or replace only these Open-Sourced Components; provided that (i) the resultant Software is used in place of the unmodified Software, on a single computer; and (ii) you otherwise comply with the terms of this License and any applicable licensing terms governing use of the Open-Sourced Components. Volt MX is not obligated to provide any maintenance, technical or other support for the resultant Software.  
      
    6\. Exclusion of Warranties. THE SOFTWARE IS PROVIDED TO LICENSEE "AS IS", AND ANY USE BY LICENSEE OF THE SOFTWARE WILL BE AT LICENSEE'S SOLE RISK. VOLTMX MAKES NO WARRANTIES RELATING TO THE SOFTWARE AND EXPRESSLY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION THOSE OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. SOME STATES AND JURISDICTIONS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES, SO THE ABOVE JURISDICTION MAY NOT APPLY TO YOU. The foregoing provisions shall be enforceable to the maximum extent permitted by applicable law.  
      
    7\. Limitation of Liability. TO THE EXTENT NOT PROHIBITED BY LAW, IN NO EVENT SHALL VOLTMX BE LIABLE FOR PERSONAL INJURY, OR ANY INCIDENTAL, SPECIAL, INDIRECT  
      
    PRESS <ENTER> TO CONTINUE:  
      
    OR CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, LOSS OF DATA, BUSINESS INTERRUPTON OR ANY OTHER COMMERCIAL DAMAGES OR LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OR INABILITY TO USE THE VOLTMX SOFTWARE, HOWEVER CAUSED, REGARDLESS OF THE THEORY OF LIABILTY (CONTRACT, TORT OR OTHERWISE) AND EVEN IF VOLTMX HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. SOME JUSISDICTIONS DO NOT ALLOW THE LIMITATION OF LIABILITY FOR PERSONAL INJURY, OR FOR INCIDENTIAL OR CONSEQUENTIAL DAMAGES, SO THIS LIMITATION MAY NOT APPLY TO YOU. In no event shall VoltMX's total liability to you for all damages (other than as may be required by applicable law in cases involving personal injury) exceed the amount of fifty dollars ($50.00). The foregoing limitations will apply even if the above stated remedy fails of its essential purpose.  
      
    8\. Export Law Assurances. You may not use or otherwise export or re-export the Software except as authorized by United States law and the laws of the jurisdiction in which the Software was obtained. In particular, but without limitation, the Software may not be exported or re-exported (a) into (or to a national or resident of) any U.S. embargoed countries (currently Cuba, Iran, Iraq, Libya, North Korea, Sudan, and Syria) or (b) to anyone on the U.S. Treasury Department's list of Specially Designated Nationals or the U.S. Department of Commerce Denied Person's List or Entity List. By using the Software, you represent and warrant that you are not located in, under control  
      
    PRESS <ENTER> TO CONTINUE:  
      
    of, or a national or resident of any such country or on any such list.  
      
    9\. United States Government. The Software and related explanatory written materials are "Commercial Items" as that term is defined at 48 C.F.R. ï¿½2.101, consisting of "Commercial Computer Software" and "Commercial Computer Software Documentation", as such terms are used in 48 C.F.R. ï¿½12.212 or 48 C.F.R. ï¿½227. 7202, as applicable. Consistent with 48 C.F.R. ï¿½12.212 or 48 C.F.R. ï¿½227. 7202-1 through 227.7202-4, as applicable, the Commercial Computer Software and Commercial Computer Software Documentation are being licensed to U.S. Government end users (a) only as Commercial Items and (b) with only those rights as are granted to all other end users pursuant to the terms and conditions herein.  
      
    10\. Governing Law. This Agreement is governed by the law of the State of Florida, U.S.A., without reference to conflict of laws principles. The application of the United Nations Convention of Contracts for the International Sale of Goods is expressly excluded.  
      
    11\. Assignment/Transfers. The parties may not assign or transfer this Agreement, in whole or in part, without the other Party's prior written consent. Any attempted assignment or transfer in violation of this Section will be null and void.  
      
    PRESS <ENTER> TO CONTINUE:  
      
    12\. Third Party Acknowledgements.  
      
    (A) Aspects of the Software utilize or include third party software and other copyrighted material. Acknowledgements, licensing terms and disclaimers for such material are available when accessing the Software on the Volt MX website, and your use of such material is governed by their respective terms.  
      
    (B) The Software includes certain software provided under various Open Source licenses. You may obtain complete machine-readable copies of the source code and licenses for the Open Source software at the Volt MX Open Source website (http://VoltMX.com/oslicenses). Open Source Software is distributed WITHOUT ANY WARRANTY, without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  
      
    13\. Severability. If any provision of this Agreement is held invalid, illegal or unenforceable, the validity, legality and enforceability of any of the remaining provisions of this Agreement shall not in any way be affected or impaired.  
      
    14\. Entire Agreement. This Agreement is the entire agreement between you and Volt MX concerning the Software and all related documentation and supersedes any  
      
    PRESS <ENTER> TO CONTINUE:  
      
    other prior or contemporaneous agreements or communications with respect to the Software and related documentation, whether written or oral. This Agreement may not be modified except by a written addendum issued by a duly authorized representative of Volt MX. No provision hereof shall be deemed waived unless such waiver shall be in writing and signed by Volt MX or a duly authorized representative of Volt MX.  
      
    Should you have any questions concerning this Agreement, or if you desire to contact Volt MX for any reason, please write to Volt MX, Inc., 7380 West Sand Lake Road, Suite 390, Orlando FL 32819, Attention: Legal Services.  
      
    DO YOU ACCEPT THE TERMS OF THIS LICENSE AGREEMENT? (Y/N): Y
    
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
      
    For details, refer to [Troubleshoot with SSL Certificate Issues](Troubleshooting.html#Service_Provider's_Certificate_Issues).
    
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
        
        > **_Important:_** To add an existing SSL certificate to cacerts file, refer to [How to Add Your Existing SSL Certificate](Troubleshooting.html#ExistingSelf-signedcertificate).
        
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
  
For details, refer to [Troubleshoot with SSL Certificate Issues](Troubleshooting.html#Service_Provider's_Certificate_Issues).
