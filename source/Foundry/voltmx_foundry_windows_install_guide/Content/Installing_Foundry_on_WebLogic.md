                         


Installing Volt MX Foundry on WebLogic
=====================================

This section of the document provides you with the instructions for installing and configuring Volt MX Foundry components.

> **_Important:_** You need the required hardware and access to the supporting software as mentioned in the [Prerequisites](Prerequisites.md) section and must perform the steps noted in the [Pre-installation Tasks](Pre-installation_Tasks.md) section.

Ensure that you have proper administrative rights to install Volt MX Foundry on your computer.

The **<Install Location>** directory contains the log files documenting each invocation of the installer or uninstaller. To make problem identification easier, provide these log files to HCL when reporting an issue.

To install Volt MX Foundry on WebLogic using the installer, follow these steps:

1.  Unzip the `VoltMXFoundrySetup.zip` file.
2.  Double-click `VoltMXFoundryInstaller-x.x.x.x_GA.exe` to launch the installer.  
    The **InstallAnywhere** dialog appears. The **InstallAnyWhere** dialog displays information about the progress of the software installation at run time.
    
    ![](Resources/Images/Install1.png)
    
    A dialog with the Volt MX Foundry logo appears.
    
    ![](Resources/Images/Install11_603x348.png)
    
3.  The **Welcome to Volt MX Foundry** windows appears.  
    Read the instructions carefully before installing Volt MX Foundry Console.
    
    ![](Resources/Images/Install2_596x456.png)
    
4.  Read the instructions carefully, and click **Next**.  
    The **LICENSE AGREEMENT** window appears.
    
5.  Scroll until end of the screen, and select the "**I accept the terms of the License Agreement**" option.
    
    > **_Note:_** To activate the License Agreement option, read carefully the whole agreement text.
    
    ![](Resources/Images/Install4_583x422.png)  
    
6.  Click **Next**. The **Install Components** window appears with the following supported installation types:
    
    *   **Development** for single machine instance.
    *   **Non-Production** for larger environments like QA or UAT.
    *   **Production** for the production instance.
    
    Installation environment is set to Development by default .
    
    ![](Resources/Images/MF_InstallType_578x470.png)
    
7.  Choose one of the appropriate install type based on your license - for example, Development, Non-Production, or Production.
8.  Select the **Send usage data anonymously** check box. Allows HCL to collect product usage information to make your Volt MX Foundry experience better. HCL does not save any of your private or application data. By default this check box is selected.
9.  Click **Next**. The ****Choose components to install**** window appears.
    
    ![](Resources/Images/Choose_Component_601x459.png)
    
10.  Select one or more check boxes for the supported components. By default, the **Console**, **Identity Services**, **Integration Services**, **Developer Portal**, and **Engagement Services** check boxes are selected:
    
    *   **Console** - To install Volt MX Foundry Console, select the **Console** check box.  
        The system creates the following databases: `<prefix>mfconsoledb<suffix>`, `<prefix>mfaccountsdb<suffix>`, and  `<prefix>mfreportsdb<suffix>`.
    *   **Identity Services** - To install Volt MX Identity Services, select the **Identity Services** check box.  
        The system creates the following database: `<prefix>idconfigdb<suffix>`.
    *   **Integration Services** - To install Volt MX Foundry Integration Services, select the **Integration Services** check box.  
        The system creates the following databases: `voltmxadmindb`  and  `mfreportsdb`.
    *   **API Developer Portal** - To install developer portal, select the **API Developer Portal** check box.  
        
        > **_Note:_** During installation if you have selected **API Developer Portal**, the **API Developer Portal** is created. You can directly access your [Developer Portal](../../../Foundry/voltmx_foundry_user_guide/Content/VoltMXDevPortal.md) in Volt MX Foundry Console.
        
    *   **Engagement Services** - To install Volt MX Foundry Engagement Services, select the **Engagement Services** check box.  
        The system creates the following database: `<prefix>vpnsdb<suffix>`.
    
    **Reports Database**
    
    The reports database is used for configuring reports.
    
    The Installer creates the `mfreportsdb` if you are installing the following Volt MX Foundry components:
    
    *   **Console** without Integration Services (with or without Engagement Services)
    *   **Console** and **Integration Services** (with or without Engagement Services)
    *   **Integration Services** without Console (with or without Engagement Services)
    
    > **_Important:_**  If you try to install Integration and Console in different nodes, ensure that you point to the same reports database to make reports feature work properly.
    
    Reports Database for Integration on a Separate Node:
    
    While installing console and integration on separate nodes, the installer prompts you to point the reports database during the integration installation.  
      
    For example:  
    You have installed only Console on one node. The installer creates these three databases such as `<>mfreportsdb<>` along with the `<>mfconsoledb<>` and `<>mfaccountsdb<>`. For example, your report database name is `voltmxmfreportsdb1`  
      
    When you install the integration with or without one or more components (identity, or Engagement Services) on a separate node, the installer displays the **Reports Database Name** field in the **Database Details** window. If the installer prompts you to enter the existing reports db, enter the reports database name (for example, `voltmxmfreportsdb1`) in the **Database Details window > Reports Database Name** field. Refer to the [Database Details](#DatabaseDetails) window.  
      
    Refer to [creating a reports database, for example, **<prefix>mfreports<suffix>**](#CreatingReportsDB).  
    
11.  Click **Next**. The **Install Folder** window appears. The selected path appears in the **Where would you like to install** field.
    
    ![](Resources/Images/Install5_583x422.png)
    
12.  Click **Choose** to browse the required folder from your system.
13.  Click **Next**. The **Application Server** window appears asking you to choose the application server. By default, the Application Sever is set to Tomcat.
    
    ![](Resources/Images/Application_Server_WebLogic.png)
    
14.  In the **Application Server** window, select **WebLogic**.
15.  Click **Next** to display the **Service Details** window.
16.  In the **Service Details** window, enter your current system log-in details.
17.  Click **Next**. Enter the details:
    
    1.  The following window will appear only if you select all the check boxes at [Install Components](#InstallComponents).
        
        ![](Resources/Images/AppServerDetails-WebLogic.png)
        
        *   **Fully Qualified Public URL of Volt MX Foundry Console**:  Enter load balancer URL to use public communication.
            
        *   **Hostname/IP Address of WebLogic Administrator Server**: Enter IP Address/Hostname of the WebLogic Administrator Server.  
            
        *   **WebLogic Administrator Port**: Enter native port of WebLogic Administrator Server.
        *   **WebLogic Administrator Server User**: Enter the log-in username for WebLogic Administrator Server.
            
        *   **WebLogic Administrator Server User Password**: Enter the log-in password for WebLogic Administrator Server.  
            
    
    1.  Click **Next**. The **Server Groups** window appears.  
        A WebLogic Server group consists of multiple server instances that run simultaneously on the same machine or on different machines. Volt MX Foundry supports **WebLogic Servers** and **WebLogic Clusters**.
        
        ![](Resources/Images/ServerGroups-Weblogic_538x389.png)
        
    2.  Enter server groups separated by commas - for example, 1, 2, shown in the previous step. Click **Next**. The system displays the selected groups in the **Selected Server Group** window, shown below:
        
        ![](Resources/Images/SelectedServerGroups-Weblogic_533x387.png)
        
    3.  Click **Next**. The following screen appears for WebLogic connector Jar.
        *   **MS SQL**: If you want to install Volt MX Foundry on WebLogic with MS SQL, you must place the SQL connector jar ( `mssql-jdbc-7.2.2.jre11.jar` ) in the WebLogic Server path.
            
            
<details close markdown="block"><summary>For more details, follow the steps in the below screen. Click here</summary>
            
            To use Volt MX Foundry with WebLogic Server in combination with MS SQL database, place the SQL connector jar (mssql-jdbc-7.2.2.jre11.jar) in the WebLogic Server.
            
            Perform the following steps to complete pre-requisites before continuing with installation :
            
            1.  Copy the mssql-jdbc-7.2.2.jre11.jar from your Volt MX Foundry Installation folder.
            2.  Paste the mssql-jdbc-7.2.2.jre11.jar into the `<WL_HOME>/server/lib` folder
            3.  Go to the `<WL_HOME>/user_projects/domains/base_domain/bin` and edit the startWeblogic script file.
```
For Windows: startWeblogic.cmd
```
            4.  Prepend your JAR file to the SAVE_CLASSPATH environment variable.
```
set SAVE_CLASSPATH=%WL_HOME%/server/lib/mssql-jdbc-7.2.2.jre11.jar;%CLASSPATH%
```
            5.  If Windows Integrated Auth is enabled, the sqljdbc\_auth.dll should be copied to the folder at: `<WL_HOME>/user_projects/domains/base_domain/bin`
            6.  Restart the server.
            
            > **_Note:_** <WL\_HOME> is the folder where WebLogic is installed.
            
        
        ![](Resources/Images/WeblogicconnectorJAR_581x447.png)
        
        *   **Oracle**: To use Volt MX Foundry with WebLogic Server in combination with Oracle database, you must place the Oracle connector jar (ojdbc8.jar) in the WebLogic Server path.
            
            </details>
<details close markdown="block"><summary>For more details, follow the steps in the below screen. Click here</summary>
            
            Perform the following steps to complete pre-requisites before continuing with installation :
            
            1.  Copy the ojdbc8.jar from your Volt MX Foundry Installation folder.
            2.  Paste the ojdbc8.jar into the `<WL_HOME>/server/lib` folder
            3.  Go to the `<WL_HOME>/user_projects/domains/base_domain/bin` and edit the startWeblogic script file.
```
For Windows: startWeblogic.cmd
```
            4.  Prepend your JAR file to the SAVE_CLASSPATH environment variable.
```
set SAVE_CLASSPATH=%WL_HOME%/server/lib/ojdbc8.jar;%CLASSPATH%
```
            5.  Restart the server.
            
            > **_Note:_** <WL\_HOME> is the folder where WebLogic is installed.
            
            ![](Resources/Images/Important_Message_Oracle.png)
            
        *   **MySQL**: To use Volt MX Foundry with WebLogic Server in combination with MySQL database, you must place the MySQL connector jar (mysql-connector-java-8.0.12.jar) in the WebLogic Server path.
            
            </details>
<details close markdown="block"><summary>For more details, follow the steps in the below screen. Click here</summary>
            
            Perform the following steps to complete pre-requisites before continuing with installation :
            
            1.  Copy the mysql-connector-java-8.0.12.jar from your Volt MX Foundry Installation folder.
            2.  Paste the mysql-connector-java-8.0.12.jar into the `<WL_HOME>/server/lib` folder
            3.  Go to the `<WL_HOME>/user_projects/domains/base_domain/bin` and edit the startWeblogic script file.
```
For Windows: startWeblogic.cmd
```
            4.  Prepend your JAR file to the SAVE_CLASSPATH environment variable.
```
set SAVE_CLASSPATH=%WL_HOME%/server/lib/mysql-connector-java-8.0.12.jar;%CLASSPATH%
```
            5.  Restart the server.
            
            > **_Note:_** <WL\_HOME> is the folder where WebLogic is installed.
            
            ![](Resources/Images/Important_Message_MySql.png)
            
18.  Click **Next**. The **Database Details** window appears. From the **Database Choice** drop-down, choose one of the databases to display database details and fill the details. By default, this option is set to MySQL.  
    *   Enter the following database details for **MySQL**.
        
        ![](Resources/Images/MySQL_547x422.png)
        
        **MySQL Cluster - Group Replication** is a new replication type supported from MySQL 5.7 onwards. In case your Foundry setup consists of a MySQL Cluster with Group Replication, please select the same from the list of Database Type Providers instead of the default MySQL option.
        
        ![](Resources/Images/mysqlcluster1.png)
        
        *   **Database Server Hostname/IP**: Enter the DB server Hostname/IP to be used to create a database of selected components of Volt MX Foundry. By default, the server Hostname/IP is set as localhost.
        *   **Database Port**: Enter the database port of the MySQL Server. By default, this field is set to 3306 for MySQL.
        *   **Database User**: Enter the user name used while creating the database user - for example, dbclient.
        *   **Database Password**: Enter the user password used while creating the database user.
        *   **Database Name Prefix**: Enter the valid prefix databases - for example, Volt MX.
        *   **Database Name Suffix**: Enter the valid suffix for all databases - for example, 1.
    *   Enter the following database details for **Oracle**.
        
        ![](Resources/Images/Oracle_589x452.png)
        
        *   **Database Server Hostname/IP**: Enter the DB server Hostname/IP to be used to create a database of selected components of Volt MX Foundry. By default, the server Hostname/IP is set as localhost.
        *   **Database Port**: Enter the database port of the Oracle Server. By default, this field is set to 1521 for oracle.
        *   **Service ID / Service Name:** Enter Oracle service ID or service name. Service ID is unique alias given to an instance name of Oracle DB.
        *   Select the tablespace for Oracle database:
            
            > **_Important:_**  If tablespaces were already created, the DBA must grant quota (permissions) on these tablespaces to the installer with admin option.  
              
            The DBA also must include grant quota on the schemas from installer login.
            
            *   **Default Tablespace**: If selected, the database schema and SQL scripts migration happen automatically to the default tablespace for example, `USERS`
            *   **User Defined Tablespace**: If selected, enter the tablespaces for the following:
                *   **Data Tablespace**:  
                    Enter the name for Data tablespace.  
                    
                    This is a mandatory field. If the Data tablespace field empty, the installer displays the error message:
                    
                    ![](Resources/Images/TableSpaceError2.png)
                    
                    If the Data tablespace (for example, SampleData) does not exist, the installer displays the error message:
                    
                    ![](Resources/Images/TableSpaceError1.png)
                    
                *   **Index Tablespace**: Enter the name of Index tablespace.  
                    If the input for Index Tablespace is not provided, then the value will be set to the provided Datatable space value.
                *   **LOB Tablespace**: Enter the name for LOB tablespace.  
                    If the input for LOB Tablespace is not provided, then the value will be set to the provided Datatable space value.
        *   **Database System User**: Enter the user name used while creating the database user - for example, dbclient.
        *   **Database System Password**: Enter the user password used while creating the database user.
        *   **Database Name Prefix**: Enter the valid prefix databases - for example, jboss.
        *   **Database Name Suffix**: Enter the valid suffix for all databases - for example, 54.
      
    *   Enter the following database details for **SQL Server**.
        
        > **_Important:_**
        
        If you want to enable Windows Authentication Support on SQL Server, run the following command to start the installation process after extracting the artefact:
        
```
VoltMXFoundryInstaller-9.2.x.x_GA.exe -Dprop.java.library.path=<location of sqljdbc_auth.dll>
```
        
        > **_Note:_** If you choose to enable Windows Authentication support on SQL Server, you do not need to provide the **Database System User** and **Database System Password**.
        
        ![](Resources/Images/SQLServer_551x422.png)
        
        *   **Database Server Hostname/IP**: Enter the DB server Hostname/IP to be used to create a database of selected components of Volt MX Foundry. By default, the server Hostname/IP is set as localhost.
        *   **Database Port**: Enter the database port of the SQL Server. By default, this field is set to 1433 for SQL.
        *   **Database System User**: Enter the user name used while creating the database user - for example, dbclient.
        *   **Instance Name (optional)**: Enter the instance name for the database. This information is optional.
        *   **Database System Password**: Enter the user password used while creating the database user.
        *   **Database Name Prefix**: Enter the valid prefix databases - for example, jboss.
        *   **Database Name Suffix**: Enter the valid suffix for all databases - for example, 54.
        
        If a database faces connection issues, the system displays an error message. For example:  
        ![](Resources/Images/Database_connection_failed.png)
        
19.  After entering database server details, click **Next**.
    
    If a database exists, the system displays the warning message: `One or more databases already exist. Do you want to use existing databases? If yes, then the schema may be upgraded.` shown below:
    
    ![](Resources/Images/DBexist.png)
    
    > **_Important:_** If you are installing Volt MX Foundry V9 ServicePack 2 on an application server using the existing database and in case if there is a change in server details, you must update the `management_server` details in the `admin` database with the application server instance details for the WebAapp publish to work. You must update the following fields in the `server_configuration` table of the **admin DB**:  
      
    \- management\_server\_host\_name <application\_instance hostname>  \- management\_server\_port <soap port of application\_instance>  \- management\_server\_user <application\_instance admin username>  \- management\_server\_password <application\_instance admin password>   - management\_server\_groups <application\_instance groups details>
    
20.  Enter the databases details, and click **Next**. The **Pre-Installation Summary** window appears.
21.  Click **Install**. The **Installing Volt MX Foundry** window appears.
    
    ![](Resources/Images/Installing_583x422.png)
    
    > **_Note:_**  Sometimes, even after showing 100% installation progress, Volt MX Foundry Installer takes around 20 more minutes to complete installation on Windows.
    
    Once the installation completes, the **Install Complete** window appears with the confirmation message.
    
    ![](Resources/Images/Complete_583x422.png)  
    
22.  Click **Done** to close the window.
    
    > **_Note:_** You can now access Volt MX Foundry Console by using the URLs. For more details, refer to [Accessing Volt MX Foundry Console - On-premises](../../../Foundry/voltmx_foundry_user_guide/Content/How_to_access_VoltMX_Foundry_Portal_on-Prem.md).  
      
      
      
    During installation if you have configured your super administrator account, you can directly [log in to Volt MX Foundry Console](../../../Foundry/voltmx_foundry_user_guide/Content/How_to_access_VoltMX_Foundry_Portal_on-Prem.md) by using the Console URL.
