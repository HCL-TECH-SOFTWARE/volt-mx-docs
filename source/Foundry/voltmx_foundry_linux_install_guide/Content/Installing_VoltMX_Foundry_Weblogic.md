                          


Installing Volt MX Foundry on WebLogic - Console-mode
====================================================

> **_Note:_**  If a user installs Volt MX Foundry Console on a partition different from the user's home directory, the user must have read/write execute permissions.

This section of the document provides you with the instructions for installing and configuring Volt MX Foundry Console.

> **_Important:_**  Ensure that you have the required hardware and access to the supporting software as mentioned in the [Prerequisites](Prerequisites.md) section and performed the steps as mentioned in the [Pre-installation Tasks](Pre-installation_Tasks.md) section.

Make sure you have proper administrative rights to install Volt MX Foundry on your computer.

You also need a user where Volt MX Foundry will be installed.

The **<Install Location>** directory contains the log files logging each invocation of the installer. To make problem identification easier, provide these log files to HCL when reporting an issue.

To install Volt MX Foundry Console on WebLogic using the installer, follow these steps:

1.  Execute the following command to switch to the user that you created.  
    

\# su - username  

3.  Press **Enter**. The system prompt you to enter the password.
4.  Enter the password, and press **Enter**.
5.  Unzip the `VoltMXFoundrySetup.tar.gz` file, and navigate to the folder _**VoltMXFoundry\_Installer\_Linux**_.
6.  Start the **./VoltMXFoundryInstaller-x.x.x.x\_GA.bin** file by executing the following command:

Preparing to install...  
Extracting the JRE from the installer archive...  
Unpacking the JRE...  
Extracting the installation resources from the installer archive...  
Configuring the installer for this system's environment...  
  
Launching installer...  
  
\===============================================================================  
Volt MX  Foundry (created with InstallAnywhere)  
\-------------------------------------------------------------------------------  
Preparing CONSOLE Mode Installation...  
\===============================================================================  
Introduction  
\------------  
This installer will install a new or upgrade an existing instance of Volt MX Foundry.  
  
Volt MX  Foundry is a set of enterprise-grade mobile infrastructure services that makes it easy to build amazing apps that integrate and support all of your backend systems. With open, standards-based development, scalable and secure services, and exceptional agility, enterprises can dramatically reduce the cost and complexity of enterprise mobility projects.  
  
To proceed with installation, please confirm that the following prerequisites have been met -  
  
1\. Database server for installation. MySQL, MariaDB, Oracle, and MS SQL Server are the          
    supported databases. MariaDB is supported for Tomcat/JBoss only.  
 2. Corresponding database user should exist and that user should have all required       
    privileges as per the documentation.  
 3. If you want to use your existing SSL certificate then please have the SSL certificate  
    mapped to the domain name you want to use.  
4\. If you want to install with JBoss/ WebLogic as an option for application    
    server, then have the application server preconfigured. Please note that single node  
    JBoss is also bundled as part of the installer, in case you want to install afresh.  
  
To change input, type 'back' to go back to the previous step.  
To cancel the installation, type 'quit' at any time.  

For getting started on Volt MX Foundry, please refer to [Volt MX Resources](https://support.hcltechsw.com/csm?id=volt_mx_support).

Access our forum community [here](https://support.hcltechsw.com/community?id=community_home). 

If you have more questions or feedback, you can join our [forum community](https://support.hcltechsw.com/community?id=community_forum&sys_id=1cdf6e1a1bf31898beab64e6ec4bcbae) or raise a [support case](https://support.hcltechsw.com/csm).
  
<!-- For troubleshooting & help on the installation, use [../../../Foundry/resources/installer.html](../../../Foundry/resources/installer.md)  
  
For getting started on Volt MX Foundry, refer [https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/)  
  
For upgrading Volt MX Foundry, refer [online documentation](../../../Foundry/voltmx_foundry_linux_install_guide/Content/Upgrading_VoltMX_Foundry_on_Linux.md).  
  
If you have more questions or feedback, you can join our [http://community.hclvoltmx.com/](http://community.hclvoltmx.com/) or, raise a [http://support.voltmx.com/](http://support.voltmx.com/).   -->

\->1- Continue with Installation.  
   2- Abort Installation.  
  
ENTER THE NUMBER OF THE DESIRED CHOICE, OR PRESS <ENTER> TO ACCEPT THE DEFAULT:

8.  Press **Enter**. The Software _License Agreement_  details appear.
    
    \========================================================================  
    License Agreement  
    \-----------------  
    Installation and Use of Volt MX Foundry Console Requires Acceptance of the Following License Agreement:  
      
    VOLTMX, INC.  
    SOFTWARE LICENSE AGREEMENT  
      
    THE TERMS AND CONDITIONS CONTAINED HEREIN CONSTITUTE A LEGAL AGREEMENT.  
      
    THIS AGREEMENT ("AGREEMENT") CONTAINS THE ENTIRE AGREEMENT BETWEEN YOU ("LICENSEE") AND VOLTMX, INC. ("VOLTMX") WITH RESPECT TO THE TERMS AND CONDITIONS DESCRIBED HEREIN. READ THIS AGREEMENT CAREFULLY BEFORE YOU CLICK THE "I ACCEPT" BUTTON BELOW. BY CLICKING ON THE "I ACCEPT" BUTTON, YOU ACKNOWLEDGE THAT (1) YOU ARE AUTHORIZED TO ENTER THIS AGREEMENT FOR AND ON BEHALF OF YOUR COMPANY, AND ARE DOING SO, AND (2) YOU HAVE READ AND UNDERSTAND AND AGREE THAT YOU AND THE COMPANY SHALL BE BOUND BY THESE TERMS AND CONDITIONS AND ALL MODIFICATIONS AND ADDITIONS PROVIDED FOR. IF YOU DO NOT AGREE WITH THESE TERMS AND CONDITIONS, CLICK ON THE "I DO NOT ACCEPT" BUTTON BELOW AND INSTALLATION WILL TERMINATE.  
      
    DO YOU ACCEPT THE TERMS OF THIS LICENSE AGREEMENT? (Y/N): Y
    
9.  Press **Enter** to continue with new installation.
    
    The following installation types are supported for new installation:
    
    *   **Production** for the production instance.
    *   **Non-Production** for larger environments like QA or UAT.
    *   **Development** for single machine instance.
    
    \===============================================================================  
    Licensing Type  
    \--------------  
      
    Please select the type of environment you want to install. Development – Single server instance typically used for development Non-Production – A multi-server environment for testing or staging environments Production – A full production-grade environment .  
      
         1- Production  
         2- Non-Production  
       ->3- Development  
      
    ENTER THE NUMBER FOR YOUR CHOICE, OR PRESS <ENTER> TO ACCEPT THE DEFAULT::
    
10.  Enter your choice and press **Enter.** The _Send Usage Data Anonymously_ details appear. Allows HCL to collect product usage information to make your Volt MX Foundry experience better. HCL does not save any of your private or application data.
    
    \===============================================================================  
    Send Usage Data Anonymously  
    \-------------- ------------  
      
    Help us make your Volt MX Foundry experience better by allowing us to collect product usage information. We will not save any of your private or application data.  
      
    Send usage data anonymously.  
      
       ->1- Yes  
         2- No  
      
    ENTER THE NUMBER FOR YOUR CHOICE, OR PRESS <ENTER> TO ACCEPT THE DEFAULT::
    
11.  Enter your choice and press **Enter.** The _Install Components_ details appear.
    
    \=======================================================================  
    Install Components  
    \------------------  
    Please select Volt MX Foundry components to install.  
    The Console is the administrative interface to manage your apps, environments and users.  
    The Identity Services helps you to use a single gateway for all your authentication and authorization requests.  
    The Integration Services helps you connect with any enterprise or third-party system to expose, transform and orchestrate your data as APIs.  
    The API Developer Portal is a console that enables partner teams to discover, test and consume APIs.  
    Engage your app users over sms, email and push using segmentation, location, campaigns and event driven messaging.  
    A specialized component used to manage offline data synchronization between the backend system of record and the front-end app.  
    Console, Identity and Integration Services are mandatory components of Volt MX Foundry.  
    In a development scenario, all components can be installed on the same server. However, it is recommended to install these components on separate servers for a production environment.  
      
       ->1- Console  
      ->2- Identity Services  
      ->3- Integration Services  
      ->4- API Development Portal  
      ->5- Engagement Services  
      
    ENTER A COMMA-SEPARATED LIST OF NUMBERS REPRESENTING THE DESIRED CHOICES, OR PRESS <ENTER> TO ACCEPT THE DEFAULT::  
    
    *   **Console** - To install Volt MX Foundry Console, type 1 and press **Enter**.  
        The system creates the following databases: `<prefix>mfconsoledb<suffix>`, `<prefix>mfaccountsdb<suffix>`, and  `<prefix>mfreportsdb<suffix>`.
    *   **Identity Services** - To install Volt MX Identity Services, type 2 and press **Enter**.  
        The system creates the following database: `<prefix>idconfigdb<suffix>`.
    *   **Integration Services** - To install Volt MX Foundry Integration, type 3 and press **Enter**.  
        The system creates the following databases: `voltmxadmindb`  and  `mfreportsdb`.
    *   **API Developer Portal** - To install developer portal, type 4 and press **Enter**.  
        
        > **_Note:_** During installation if you have selected **API Developer Portal**, the **API Developer Portal** is created. You can directly access your [VoltMX Developer Portal](../../../Foundry/voltmx_foundry_user_guide/Content/VoltMXDevPortal.md) in Volt MX Foundry Console.
        
    *   **Engagement Services** - To install Volt MX Foundry Engagement Services, type 5 and press **Enter**.  
        The system creates the following database: `<prefix>vpnsdb<suffix>`.
    
    **Reports Database**
    
    The reports database is used for configuring reports.
    
    The Installer creates the `mfreportsdb` if you choose either Console or Integration Services:
    
    *   **Console** without Integration Services (with or without Engagement Services)
    *   **Console** and **Integration Services** (with or without Engagement Services)
    *   **Integration Services** without Console (with or without Engagement Services)
    
    Reports Database for Integration on a Separate Node:
    
    While installing console and integration on separate nodes, the installer prompts you to point the reports database during the integration installation.  
      
    For example:  
      
    You have installed only Console on one node. The installer creates these three databases such as `<>mfreportsdb<>` along with the `<>mfconsoledb<>` and `<>mfaccountsdb<>`. For example, your report database name is `voltmxmfreportsdb1`  
      
    When you install the integration with or without one or more components (identity, or Engagement Services ) on a separate node, the installer displays the **Reports Database Name** field in the **Database Details** window. If the installer prompts you to enter the existing reports db, enter the reports database name (for example, `voltmxmfreportsdb1`) in the **Database Details window > Reports Database Name** field.  
      
    Refer to [creating a reports database, for example, **<prefix>mfreports<suffix>**](#CreatingReportsDB).
    
12.  Press **Enter** to continue the installation. The _Install Folder_ details appear.
    
    \=======================================================================  
    Install Folder  
    \---------------------  
      
    Please choose a destination folder for this installation.  
      
    NOTE: The installation path should not contain any special characters.  
      
    Default Install Folder: /home/user1/VoltMXFoundry  
      
    ENTER AN ABSOLUTE PATH, OR PRESS <ENTER> TO ACCEPT THE DEFAULT  
    :
    
    > **_Note:_**  By default, Volt MX Foundry is installed at the home directory of the user.
    
13.  Press **Enter** to continue the installation. The installer prompts for the _Application Server_ details as follows:
    
    \===============================================================================
    
    Application Server
    
    \------------------
    
    Enter requested information
    
    \->1- Tomcat 9.0.33
    
    2- JBoss 7.2
    
    3- WebLogic 14c (14.1.1.0)
    
    ENTER THE NUMBER FOR YOUR CHOICE, OR PRESS <ENTER> TO ACCEPT THE DEFAULT:
    
14.  In the **Application Server**, type 3 and press **Enter**. installation. The Application Server Details details for WebLogic appear.
    
    \==============================================================================================================================================================
    
    Application Server Details
    
    \--------------------------
    
    Please enter the details of your existing WebLogic server.
    
    Fully Qualified Public URL of Volt MX Foundry (Default: ):
    
    Hostname/IP Address of WebLogic Administration Server (Default: ):
    
    WebLogic Administration Port (Default: 7001):
    
    WebLogic Administration Server User (Default: weblogic):
    
    1.  Enter the following details for **WebLogic Server**:
        *   **Fully Qualified Public URL of Volt MX Foundry (Default: )**: Enter load balancer URL to use public communication.
        *   **IP Address/Hostname of WebLogic Management Server (Default: 10.10.24.51)**: Enter IP Address/Hostname of the WebLogic Management Server.  
            
        *   **WebLogic Management Port (Default: 7001)**: Enter native port of WebLogic Management Server.
        *   **WebLogic Management Server User (Default: weblogic)**: Enter the log-in username for WebLogic Management Server.
    2.  Press **Enter.** The installer prompts for _WebLogic Management Server User Password_ details as follows:
        
        \===============================================================================  
        Weblogic Management Server User Password  
        \--------------------------  
          
        Please enter the password:
        
    3.  Enter the log-in password for WebLogic server and press **Enter****.** The _Server Groups_  details appear.  
        A WebLogic Server group consists of multiple server instances that run simultaneously on the same machine or on different machines. Volt MX Foundry supports **WebLogic Servers** and **WebLogic Clusters**.
        
        \===============================================================================  
        Server Groups  
        \-------------  
        A WebLogic Server group consists of multiple WebLogic Server instances running simultaneously and working together to provide increased scalability and reliability. The server instances that constitute a group can run on the same machine, or be located on different machines. Each server instance in a group must run the same version of WebLogic Server.  
          
        1\. AdminServer  
        2\. Cluster-0 (Cluster)  
          
        Enter comma separated server groups number you want to use (e.g.: 1,2 or all) (Default: all):
        
    4.  Enter server groups with a comma separated - for example, 1, 2, shown above.
        
        The Selected Server Group details appear.
        
        \=======================================================================  
        Selected Server Group  
        \---------------------  
        You have selected below mentioned server groups.  
        1\. AdminServer  
          
        \->1- Continue with installation.  
                 2- Go back to select again.  
          
        ENTER THE NUMBER OF THE DESIRED CHOICE, OR PRESS <ENTER> TO ACCEPT THE DEFAULT:
        
15.  Press **Enter**. The _Database Choice_ details appear:
    
    \========================================================================  
    Database Choice  
    \-----------------------------------------  
    Please select the database provider of your choice.
    
    \->1- MySQL 5.7
    
    2- MySQL 5.7 Cluster - Group Replication
    
    3- Oracle 19c (19.3.0)
    
    4- SQL Server 2017
    
      
      
    ENTER THE NUMBER FOR YOUR CHOICE, OR PRESS <ENTER> TO ACCEPT THE DEFAULT::  
    
16.  In the _Database Choice_, choose the DB:
    *   In the _Database Choice_ if you select 1, the _MySQL Database Details_ appear.
        
        \========================================================================  
        MySQL Database Details  
        \-----------------------------------------  
          
        Please enter MySQL database server details  
          
        Database Server IP (DEFAULT: localhost): <IP address>  
          
        Port (DEFAULT: 3306):  
          
        Username (DEFAULT: ): root  
        
        To use Volt MX Foundry with WebLogic Server in combination with MySQL database, place the MySQL connector jar (mysql-connector-java-8.0.12.jar) in the WebLogic Server.
        
        Perform the following steps to complete pre-requisites before continuing with installation :-
        
        1\. Copy the mysql-connector-java-8.0.12.jar from your Volt MX Foundry Installation folder.
        
        2\. Paste the mysql-connector-java-8.0.12.jar into the <WL\_HOME>/server/lib folder
        
        3\. Go to the <WL\_HOME>/user\_projects/domains/base\_domain/bin and edit the startWeblogic script file.
        
        \- For Windows: startWeblogic.cmd
        
        \- For Linux: startWeblogic.sh
        
        4\. Prepend your JAR file to the SAVE\_CLASSPATH environment variable.
        
        For Example
        
        Windows: set SAVE\_CLASSPATH=%WL\_HOME%/server/lib/mysql-connector-java-8.0.12.jar;%CLASSPATH%
        
        Linux: SAVE\_CLASSPATH="${WL\_HOME}/server/lib/mysql-connector-java-8.0.12.jar:${CLASSPATH}"
        
        6\. Restart the server.
        
        Note: <WL\_HOME> is the folder where WebLogic is installed.
        
        1.  Enter the following details:
            *   **Database Server IP**: Enter the server Hostname/IP to be used to create a database of selected components of Volt MX Foundry. By default, the server Hostname/IP is set as localhost.
            *   **Port**: Enter the database port of the MySQL Server. By default, this field is set to 3306 for MySQL.
            *   **Username**: Enter the user name used while creating the database user - for example, dbclient.
        2.  Provide a password and press **Enter**.
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
                Minimum requirement for MySQL database server is 5.7.  
                  
                PRESS <ENTER> TO ACCEPT THE FOLLOWING (OK):
                
    *   In the _Database Choice_ if you select 2, the _Oracle Database Details_ appear.
        
        \========================================================================  
        Oracle Database Details  
        \-----------------------------------------  
          
        Please enter Oracle database server details.  
          
        Database Server Hostname/IP (Default: 10.10.24.51): <Hostname/IP>  
          
        Port (Default: 1521):  
          
        Service ID / Service Name(Default: ):  
          
        System Username (Default: ):  
        
        To use Volt MX Foundry with WebLogic Server in combination with Oracle database, place the Oracle connector jar (ojdbc8.jar) in the WebLogic Server.
        
        Perform the following steps to complete pre-requisites before continuing with installation :-
        
        1\. Copy the ojdbc8.jar from your Volt MX Foundry Installation folder.
        
        2\. Paste the ojdbc8.jar into the <WL\_HOME>/server/lib folder
        
        3\. Go to the <WL\_HOME>/user\_projects/domains/base\_domain/bin and edit the startWeblogic script file.
        
        \- For Windows: startWeblogic.cmd
        
        \- For Linux: startWeblogic.sh
        
        4\. Prepend your JAR file to the SAVE\_CLASSPATH environment variable.
        
        For Example
        
        Windows: set SAVE\_CLASSPATH=%WL\_HOME%/server/lib/ojdbc8.jar;%CLASSPATH%
        
        Linux: SAVE\_CLASSPATH="${WL\_HOME}/server/lib/ojdbc8.jar:${CLASSPATH}"
        
        6\. Restart the server.
        
        Note: <WL\_HOME> is the folder where WebLogic is installed.
        
        1.  Enter the following details:
            *   **Database Server IP**: Enter the server Hostname/IP to be used to create a database of selected components of Volt MX Foundry. By default, the server Hostname/IP is set as localhost.
            *   **Port**: Enter the database port of the Oracle Server. By default, this field is set to 1521 for oracle.
            *   **Service ID** **/ Service Name**: Enter Oracle service ID or service name. Service ID is unique alias given to an instance name of Oracle DB.
                
            *   **System Username**: Enter the user name used while creating the database user.
        2.  Press **Enter**. The installer prompts for _Enter Password for Database User_ details as follows:
            
            \========================================================================  
            Enter Password for Database User  
            \-----------------------------------------  
            Please enter the password:  
            
        3.  Provide a password and press **Enter**.
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
                  
                  
                PRESS <ENTER> TO ACCEPT THE FOLLOWING (OK):
                
        
        1.  Select the tablespace for Oracle database:
            
            > **_Important:_**  If tablespaces were already created, the DBA must grant quota (permissions) on these tablespaces to installer with admin option.  
              
            The DBA also must include grant quota on the schemas from installer login.
            
            \========================================================================  
            Tablespace Choice  
            \-----------------------------------------  
              
            Please select the Table Space type  
              
            \->1- Default Tablespace  
             2- User Defined Tablespace  
              
            ENTER THE NUMBER FOR YOUR CHOICE, OR PRESS <ENTER> TO ACCEPT THE DEFAULT::  
            
            *   **Default Tablespace**: If selected, the database schema and SQL scripts migration happens automatically to the default tablespace - for example, `USERS`
            *   **User Defined Tablespace**: If selected, enter the tablespaces for the following:
                
                \========================================================================  
                Ask for the Tablespaces  
                \-----------------------------------------  
                  
                Please enter the names of the Tablespaces  
                  
                Data Tablespace (Default: ): VoltMX123  
                Index Tablespace (Default: ):  
                LOB Table Space (Default: ):  
                
                *   **Data Tablespace**:  
                    Enter the name for Data tablespace.  
                    
                    This is a mandatory field. If the Data tablespace field is empty, the installers displays the error message:
                    
                    \========================================================================  
                    TableSpace details not provided  
                    \---------------------------------------  
                    Please provide a valid Tablespace for at least the Data field for the installation wizard to proceed further. PRESS <ENTER> TO ACCEPT THE FOLLOWING (OK):  
                    
                    If the Data tablespace (for example, VoltMX123) does not exist, the installers displays the error message:
                    
                    \========================================================================  
                    Invalid TableSpace Details  
                    \---------------------------------------  
                    Installation wizard is not able to access the VoltMX123 TableSpace provided with give credentials. Please verify the details again. PRESS <ENTER> TO ACCEPT THE FOLLOWING (OK):  
                    
                *   **Index Index Tablespace**: Enter the name for Index tablespace.  
                    If input for Index Tablespace is not provided, then the value will be set to the provided Datatable space value.
                *   **LOB Tablespace**: Enter the name for LOB tablespace.  
                    If input for LOB Tablespace is not provided, then the value will be set to the provided Datatable space value.
    *   In the _Database Choice_ if you select 3, the _SQL Server Database Details_ appear.
        
        \========================================================================  
        SQLServer Database Details  
        \-----------------------------------------  
          
        Please enter SQL database server details.  
          
        Database Server Hostname/IP (Default: 10.10.24.51): <Hostname/IP>  
          
        Port (Default: 1433):  
          
        Username 9Default: ):  
          
        Instance Name (Optional) (Default: ):
        
        To use Volt MX Foundry with WebLogic Server in combination with MS SQL database, place the SQL connector jar (mssql-jdbc-7.2.2.jre11.jar) in the WebLogic Server.
        
        Perform the following steps to complete pre-requisites before continuing with installation :-
        
        1\. Copy the mssql-jdbc-7.2.2.jre11.jar from your Volt MX Foundry Installation folder.
        
        2\. Paste the mssql-jdbc-7.2.2.jre11.jar into the <WL\_HOME>/server/lib folder
        
        3\. Go to the <WL\_HOME>/user\_projects/domains/base\_domain/bin and edit the startWeblogic script file.
        
        \- For Windows: startWeblogic.cmd
        
        \- For Linux: startWeblogic.sh
        
        4\. Prepend your JAR file to the SAVE\_CLASSPATH environment variable.
        
        For Example
        
        Windows: set SAVE\_CLASSPATH=%WL\_HOME%/server/lib/mssql-jdbc-7.2.2.jre11.jar;%CLASSPATH%
        
        Linux: SAVE\_CLASSPATH="${WL\_HOME}/server/lib/mssql-jdbc-7.2.2.jre11.jar:${CLASSPATH}"
        
        5\. If Windows Integrated Auth is enabled, the sqljdbc\_auth.dll should be copied to the folder at
        
        <WL\_HOME>/user\_projects/domains/base\_domain/bin
        
        6\. Restart the server.
        
        Note: <WL\_HOME> is the folder where WebLogic is installed.
        
        1.  Enter the following details:
            *   **Database Server IP**: Enter the server Hostname/IP to be used to create a database of selected components of Volt MX Foundry. By default, the server Hostname/IP is set as localhost.
            *   **Port**: Enter the database port of the SQL Server. By default, this field is set to 1433 for SQL.
            *   **Username**: Enter the user name used while creating the database user - for example, dbclient.
            *   **Instance Name (Optional)**: Enter the instance name for the database. This information is optional.
        2.  Press **Enter**. The installer prompts for _Enter Password for Database User_ details as follows:
            
            \========================================================================  
            Enter Password for Database User  
            \-----------------------------------------  
            Please enter the password:  
            
        3.  Provide a password and press **Enter**.
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
                  
                  
                PRESS <ENTER> TO ACCEPT THE FOLLOWING (OK):
                
17.  Press **Enter**. The installation prompts for Database name prefix and suffix details as follows:
    
    \===============================================================================  
    Database name prefix and suffix  
    \-------------------------------  
      
    Please enter database name prefix and suffix. Please provide existing prefix and suffix if you intend to upgrade to the new Volt MX Foundry Database.  
      
    Database Name Prefix (Default: HCL): tomcat  
      
    Database Name Suffix (Default: 1): 54
    
    *   Database Name Prefix: Enter valid prefix databases - for example, HCL.
    *   Database Name Suffix: Enter valid suffix for all databases - for example, 1.
18.  Enter the prefix and suffix for the database and press **Enter**. The _Important Information_ details appear:
    
    \===============================================================================  
    Important Information  
    \---------------------  
    Required manual step: Before proceeding further with this installation, please do the following manual steps:  
      
    1\. Copy voltmxlib folder from <USER\_INSTALL\_DIR> to your <Websphere\_Install\_Dir>/AppServer. This is required for the configuration of shared libraries and successful deployment of applications.  
      
      
    PRESS <ENTER> TO ACCEPT THE FOLLOWING (OK):
    
19.  Press **Enter**. The _VoltMX Foundry server startup_ details appear.
    
    \===============================================================================  
    Volt MX Foundry server startup details  
    \-----------------------------------  
      
    Do you want to start the Volt MX Foundry server after successful installation of Volt MX Foundry  
    \->1- Yes  
       2- No  
      
    ENTER THE NUMBER FOR YOUR CHOICE, OR PRESS <ENTER> TO ACCEPT THE DEFAULT::
    
20.  To start the server automatically after the successful installation of Volt MX Foundry, press **Enter**.
    
    > **_Note:_** To start the server manually after the successful installation of Volt MX Foundry, refer to [Starting Volt MX Foundry Console.](../../../Foundry/voltmx_foundry_manual_install_guide/Content/Starting_VoltMX_Foundry_Console.md)
    
    The _Pre-Installation Summary_ details appear.
    
    \===============================================================================  
    Pre-Installation Summary  
    \------------------------  
      
    Please review the following before continuing:  
      
    Installation Type:  
    New Installation Install  
      
    Components:  
    Console, Developer Portal, Identity Services, Integration Services and Engagement Services  
      
    Install Folder:  
    /root/VoltMXFoundryInstaller-GA-9.2.x.x  
      
    Application Server:  
    WebLogic 12c (12.2.1.2.0)  
      
    Application Server Details:  
    Hostname/IP Address: , Port: 7001, User: weblogic  
      
    Database Choice:  
    MySQL 5.7  
      
    Database Details:  
    Hostname/IP Address: , User: mfuser, Port: 3306  
      
    Database Names:  
    premfconsoledbinstall, premfaccountsdbinstall, premfreportsdbinstall, preidconfigdbinstall, preadmindbinstall, and prevpnsdbinstall  
      
    PRESS ENTER TO CONTINUE:
    
21.  Type the details and press **Enter**. The _Ready To Install_  details appear.
    
    \========================================================================  
    Ready To Install  
    \-----------------------------------------  
      
    Installer is now ready to install Volt MX Foundry Console onto your system at the following location:  
      
    /home/user1/VoltMXFoundry  
      
    PRESS <ENTER> TO INSTALL:  
    
22.  Press **Enter** to continue the installation.
    
    \========================================================================  
    Installing...  
    \-----------------------------------------  
      
    \[==================|==================|==================|==================\] \[------------------|------------------|------------------|------------------\]
    
23.  Press **Enter**. The _Installation Complete_ details appear.
    
    \========================================================================  
    Installation Complete  
    \-----------------------------------------  
      
    Congratulations. Volt MX Foundry has been successfully installed to:  
      
    /home/user1/VoltMXFoundry  
      
    Console URL: https://00.00.00.00:port/mfconsole  
    Identity Service URL: https://00.00.00.00:port/authService  
    Integration Service URL: https://00.00.00.00:port/admin  
    Engagement Services URL: http://00.00.00.000:port/vpns  
      
    PRESS <ENTER> TO EXIT THE INSTALLER: \[user1@cnt6-01c downloads\]$
    
24.  Press **Enter** to complete the installation. After the installation is completed, the installer creates logs in the install folder.
    
    > **_Important:_** When you are using a third party tool (for example, PuTTY) for installing Volt MX Foundry remotely, if any network connection issues occur at the end of the installation, the installer stops the installation and the installation log is not created.
    

> **_Note:_** You can now access Volt MX Foundry Console by using the URLs. For more details, refer to [Accessing Volt MX Foundry Console - On-premises](../../../Foundry/voltmx_foundry_user_guide/Content/How_to_access_VoltMX_Foundry_Portal_on-Prem.md#how-to-get-started-with-foundry-console).  
  
  
  
During installation if you have configured your super administrator account, you can directly [log in to Volt MX Foundry Console](../../../Foundry/voltmx_foundry_user_guide/Content/How_to_access_VoltMX_Foundry_Portal_on-Prem.md#how-to-log-in-to-foundry-console) by using the Console URL.
