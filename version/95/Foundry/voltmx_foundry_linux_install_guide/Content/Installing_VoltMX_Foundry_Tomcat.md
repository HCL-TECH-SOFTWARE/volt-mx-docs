                           


Installing Volt MX Foundry on Tomcat - Console-mode
================================================== 

> **_Note:_**  If a user installs Volt MX Foundry Console on a partition different from the user's home directory, the user must have read/write execute permissions.

This section of the document provides you with the instructions for installing and configuring Volt MX Foundry Console on a single node. For multi-node installations, refer the [Deployment Checklist and Example Case Studies](../../../Foundry/voltmx_Foundry_deployment_guide/Content/Deployment_Checklist.md).

> **_Important:_**  Ensure that you have the required hardware and access to the supporting software as mentioned in the [Prerequisites](Prerequisites.md) section and performed the steps as mentioned in the [Pre-installation Tasks](Pre-installation_Tasks.md) section.

Make sure you have proper administrative rights to install Volt MX Foundry on your computer.

You also need a user where Volt MX Foundry will be installed.

The **<Install Location>** directory contains the log files logging each invocation of the installer. To make problem identification easier, provide these log files to Volt MX when reporting an issue.

To install Volt MX Foundry Console on Tomcat using the installer, follow these steps:

<ol>
    <li>Execute the following command to switch to the user that you created.
    <pre><code style="display:block;background-color:#eee;"># su - username
    </code></pre>
    </li>
    <li>Press <b>Enter</b>. The system prompt you to enter the password.</li>
    <li>Enter the password, and press <b>Enter</b>.</li>
    <li>Unzip the `VoltMXFoundrySetup.tar.gz` file, and navigate to the folder <em><b>VoltMXFoundry_Installer_Linux</b></em>.</li>
    <li>Start the <b>./VoltMXFoundryInstaller-x.x.x.x_GA.bin</b> file by executing the following command:
    <pre><code style="display:block;background-color:#eee;">
    Preparing to install
    Extracting the JRE from the installer archive...
    Unpacking the JRE...
    Extracting the installation resources from the installer archive.
    Configuring the installer for this system's environment...

    Launching installer...

    ========================
    Volt MX  Foundry                                     
    (created with InstallAnywhere)
    -------------------------------
    Preparing CONSOLE Mode Installation...
    ======================================
    Introduction
    ------------

    This installer will install a new or upgrade an existing instance of Foundry.

    Volt MX  Foundry is a set of enterprise-grade mobile infrastructure services

    that makes it easy to build amazing apps that integrate and support all of

    your backend systems. With open, standards-based development, scalable and

    secure services, and exceptional agility, enterprises can dramatically reduce

    the cost and complexity of enterprise mobility projects.

    To proceed with installation, please confirm that the following prerequisites

    have been met -

    a. Database server with admin user for installation. MySQL, MariaDB, Oracle

    and MS SQL Server are the supported Database servers. MariaDB is supported for

    Tomcat/JBoss only

    b. Corresponding database user should exist and that user should have all

    required privileges as per the documentation.

    c.If you want to use your existing SSL certificate then please have the SSL

    certificate mapped to the domain name you want to use.

    d. If you want to install with JBoss as an option for application server, then

    have the application server preconfigured. Please note that single node JBoss

    is also bundled as part of the installer, in case you want to install afresh.

    To change input, type 'back' to go back to the previous step.

    To cancel the installation, type 'quit' at any time.

    For troubleshooting & help on the installation, use

    https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Foundry/installationGuides.html.
  

    For getting started on Volt MX Foundry, refer

    https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Introduction.html.

    If you have more questions or feedback, you can join our

    community at https://support.hcltechsw.com/community?id=community_forum&sys_id=1cdf6e1a1bf31898beab64e6ec4bcbae or raise a support ticket at https://support.hcltechsw.com/csm.

    ->1- Continue with Installation.
      2- Abort Installation.

    ENTER THE NUMBER OF THE DESIRED CHOICE, OR PRESS <ENTER> TO ACCEPT THE DEFAULT: 

</code></pre>
</li>
<li>Press <b>Enter</b>. The Software <em>License Agreement</em>  details appear.
 <pre><code style="display:block;background-color:#eee;">
    ==================

    License Agreement
    -----------------
    Installation and Use of Volt MX Foundry Requires Acceptance of the Following

    License Agreement:

    Volt MX is now part of the HCL group of companies

    VOLTMX, INC. SOFTWARE LICENSE AGREEMENT FOR FOUNDRY ("AGREEMENT")

    THE TERMS AND CONDITIONS CONTAINED HEREIN CONSTITUTE A LEGAL AGREEMENT.

    THIS AGREEMENT ("AGREEMENT") CONTAINS THE ENTIRE AGREEMENT BETWEEN YOU

    ("LICENSEE" or "You" or "you") AND VOLTMX, INC. ("VOLTMX") WITH RESPECT TO THE

    TERMS AND CONDITIONS DESCRIBED HEREIN. READ THIS AGREEMENT CAREFULLY BEFORE

    YOU CLICK THE "I ACCEPT" BUTTON BELOW. BY CLICKING ON THE "I ACCEPT" BUTTON,

    YOU ACKNOWLEDGE THAT (1) YOU ARE AUTHORIZED TO ENTER THIS AGREEMENT FOR AND ON

    BEHALF OF YOUR COMPANY, AND ARE DOING SO, AND (2) YOU HAVE READ, UNDERSTOOD,

    AND AGREE THAT YOU AND  VOLTMX SHALL BE BOUND BY THESE TERMS AND CONDITIONS AND

    ALL MODIFICATIONS AND ADDITIONS AGREED TO IN WRITING BY THE PARTIES.   IF YOU

    DO NOT AGREE WITH THESE TERMS AND CONDITIONS, CLICK ON THE "I DO NOT ACCEPT"

    BUTTON BELOW AND INSTALLATION WILL TERMINATE.

    DO YOU ACCEPT THE TERMS OF THIS LICENSE AGREEMENT? (Y/N): Y

</code></pre></li>

<li>Press <b>Enter</b> to continue with new installation.

The following installation types are supported for new installation:

<ol><li><b>Development</b> for single machine instance.</li>

<li><b>Non-Production</b> for larger environments like QA or UAT.</li>    

<li><b>Production</b> for the production instance.</li>

</ol>

<pre><code style="display:block;background-color:#eee;">

    ==============
    Licensing Type
    --------------
    To upgrade your existing instance for Foundry, provide the Database details of

    your existing instance. The Database schema will be updated to the latest

    version, no application data will be lost.

    Please select the type of environment you want to install.

    Development - Single server instance typically used for development

    Non-Production - A multi-server environment for testing or staging

    environments

    Production - A full production-grade environment

    1- Production
    2- Non-Production
  ->3- Development

    ENTER THE NUMBER FOR YOUR CHOICE, OR PRESS <ENTER> TO ACCEPT THE DEFAULT: 3 </code></pre>

</li>

<li>Enter your choice and press <b>Enter.</b> The Send Usage Data Anonymously details appear. Allows HCL to collect product usage information to make your Volt MX Foundry experience better. HCL does not save any of your private or application data.

<pre><code style="display:block;background-color:#eee;">

            ===========================
            Send Usage Data Anonymously
            --------------------------
            Help us make your Volt MX Foundry experience better by allowing us to collect

            product usage information. We will not save any of your private or application

            data.

            Send usage data anonymously.

            ->1- Yes
              2- No

            ENTER THE NUMBER FOR YOUR CHOICE, OR PRESS <ENTER> TO ACCEPT THE DEFAULT: 1 </code></pre>

 </li>

<li>Enter your choice and press <b>Enter.</b> The Install Components details appear.
<pre><code style="display:block;background-color:#eee;">
            =============================

            Install Components
            ------------------
            Please select Volt MX Foundry components to install.

            The Console is the administrative interface to manage your apps, environments

            and users.

            The Identity Services helps you to use a single gateway for all your

            authentication and authorization requests.

            The Integration Services helps you connect with any enterprise or third-party

            system to expose, transform and orchestrate your data as APIs.

            The API Developer Portal is a console that enables partner teams to discover,

            test and consume APIs.

            Engage your app users over sms, email and push using segmentation, location,

            campaigns and event driven messaging.

            A specialized component used to manage offline data synchronization between

            the backend system of record and the front-end app.

            Console, Identity and Integration Services are mandatory components of

            Volt MX Foundry. In a development scenario, all components can be installed on

            the same server. However, it is recommended to install these components on

            separate servers for a production environment.

            ->1- Console
            ->2- Identity Services
            ->3- Integration Services
            ->4- API Developer Portal
            ->5- Engagement Services

            ENTER A COMMA-SEPARATED LIST OF NUMBERS REPRESENTING THE DESIRED CHOICES, OR

            PRESS <ENTER> TO ACCEPT THE DEFAULT: 1,2,3,4,5 

</code></pre>
</li>
</ol>   

*   **Console** - To install Volt MX Foundry Console, type 1 and press **Enter**.  
        The system creates the following databases: `<prefix>mfconsoledb<suffix>`, `<prefix>mfaccountsdb<suffix>`, and  `<prefix>mfreportsdb<suffix>`.
*   **Identity Services** - To install Volt MX Identity Services, type 2 and press **Enter**.  
        The system creates the following database: `<prefix>idconfigdb<suffix>`.
*   **Integration Services** - To install Volt MX Foundry Integration, type 3 and press **Enter**.  
        The system creates the following databases: `VoltMXadmindb`  and  `mfreportsdb`.
*   **API Developer Portal** - To install developer portal, type 4 and press **Enter**.  
        
    > **_Note:_** During installation if you have selected **API Developer Portal**, the **API Developer Portal** is created. You can directly access your [VoltMX Developer Portal](../../../Foundry/voltmx_foundry_user_guide/Content/VoltMXDevPortal.md) in Volt MX Foundry Console.
        
*   **Engagement Services** - To install Volt MX Foundry Engagement Services, type 5 and press **Enter**.  
        The system creates the following database: `<prefix>vpnsdb<suffix>`.
    
## Reports Database
    
The reports database is used for configuring reports.
    
The Installer creates the `mfreportsdb` if you choose either Console or Integration Services:
    
*   **Console** without Integration Services (with or without Engagement Services)
*   **Console** and **Integration Services** (with or without Engagement Services)
*   **Integration Services** without Console (with or without Engagement Services)
    
## Reports Database for Integration on a Separate Node:
    
While installing console and integration on separate nodes, the installer prompts you to point the reports database during the integration installation.  
      
For example:  
      
You have installed only Console on one node. The installer creates these three databases such as `<>mfreportsdb<>` along with the `<>mfconsoledb<>` and `<>mfaccountsdb<>`. For example, your report database name is `voltmxmfreportsdb1`  
      
When you install the integration with or without one or more components (identity, or Engagement Services ) on a separate node, the installer displays the **Reports Database Name** field in the **Database Details** window. If the installer prompts you to enter the existing reports db, enter the reports database name (for example, `voltmxmfreportsdb1`) in the **Database Details window > Reports Database Name** field.  
      
Refer to [creating a reports database](#reports-database), for example, **&lt;prefix>mfreports&lt;suffix>**.

<ol>
  <li value="10">Press <b>Enter</b> to continue the installation. The Install Folder details appear.</li>
</ol>

```
===============
Install Folder  
---------------
Please choose a destination folder for this installation.  
NOTE: The installation path should not contain any special characters.  
Default Install Folder: /home/user1/VoltMXFoundry  
ENTER AN ABSOLUTE PATH, OR PRESS < ENTER > TO ACCEPT THE DEFAULT  

```
> **_Note:_**  By default, Volt MX Foundry is installed at the home directory of the user.

<ol>
  <li value="11">Press <b>Enter</b> to continue the installation. The installer prompts for the_Application Server_ details as follows:</li>
</ol>

```
===================   
Application Server  
-------------------
Enter requested information  
->1- Tomcat  
2- JBoss
ENTER THE NUMBER FOR YOUR CHOICE, OR PRESS <ENTER> TO ACCEPT THE DEFAULT::

```
<ol>
  <li value="12">In the <b>Application Server</b>, type 1.</li>
</ol>

> **_Note:_** By default Tomcat manager password in used by Volt MX Foundry for Web Application publish. To change the default Tomcat manager password, the new password needs to be replaced in the `password` value for user `manager` in `<tomcat-users>` tag in `tomcat-users.xml`.  
      
Now to replace the value in database, the password value should be encrypted. To encrypt the database password, follow these steps mentioned in the [Encrypt\_Passwords](../../../Foundry/voltmx_foundry_manual_install_guide/Content/Encrypt_Passwords.md) section.  
      
Once the password is encrypted, replace the encrypted value in the `prop_value` column in the row where prop\_value is `management_server_password` of `<DatabasePrefix>admindb<DatabaseSuffix>` database in the `server_configuration` table.
    

<li>Press <b>Enter</b>. The _HTTP or HTTPS_ details appear asking you to choose the HTTP or HTTPS.
<pre><code style="display:block;background-color:#eee;">=============== 
    HTTP or HTTPS  
    -------------  
    Please select the communication protocol you want to use. We recommend that you use HTTPS in production environment.  
    ->1- HTTP  
    2- HTTPS  
    ENTER THE NUMBER FOR YOUR CHOICE, OR PRESS <ENTER> TO ACCEPT THE DEFAULT:: 
    
</code></pre>  
</li>

<li>In  HTTP or HTTPS if you select 1 and press Enter, the following details in the - Details for Application Server details appear.
<pre><code style="display:block;background-color:#eee;">
    =============================== 
    Details for Application Server  
    ------------------------------   
    Please enter the Hostname/IP Address and port you want to use. The default value is the IP Address of this machine.  
    Hostname/IP Address (Default: ): <IP address>  
    HTTP Port (Default: 8080): 8181  
    Tomcat Shutdown Port (Default: 38011): 
    
</code></pre>  
</li>

> **_Important:_** In case of Tomcat, enter the Tomcat shutdown port.
    

<li>In the _HTTP or HTTPS, if you type 2 and press <b>Enter</b>, the following details in the _Details for Application Server_ details appear.
<pre><code style="display:block;background-color:#eee;">=============================== 
    Details for Application Server  
    -------------------------------- 
    Please enter the Hostname/IP Address and port you want to use. The default value is the IP Address of this machine.  
    NOTE: If you want to use your existing SSL certificate then please have the SSL certificate mapped to the domain name you want to use.  
    Hostname/IP Address (Default: ): <IP address>  
    HTTP Port (Default: 8080):  
    HTTPS Port (Default: 8443):  
    Tomcat Shutdown Port (Default: 38011): 
    
</code></pre>  
</li>

> **_Important:_** After installing Volt MX Foundry, import your SSL certificate (for example, domain.subdomain.crt) into your Volt MX Foundry installer's JRE trusted certificate authority (CA) certificates file - for example, `<INSTALL_DIR>/jre/lib/security/cacerts`  
      
If your SSL certificate is not configured, the system displays an error - for example, "peer not authenticated".  
      
For details, refer to [Troubleshoot with SSL Certificate Issues](Troubleshooting.md#Service_Provider's_Certificate_Issues).
    
> **_Note:_**  Based on the inputs provided in the previous  [HTTP or HTTPS  >  a](#Step11a)  or  [HTTP or HTTPS  >  b](#Step11b), one of the following error messages appears:
    
*   If a port is already in use, the installer displays the following error message:
        
```
===============================================================================  
Validation of Host Detail  
-------------------------  
Port 22 is already in use.  

Please provide a different port.  

 ->1- Go back to give valid input.  
   2- Abort Installation.  

ENTER THE NUMBER OF THE DESIRED CHOICE, OR PRESS <ENTER> TO ACCEPT THE DEFAULT:
```
        
    
*   If you provide an invalid port, the installer displays the following error message:
        
```
===============================================================================  
Port Validation  
---------------  
Please enter a valid port. Port should be in between 1-65535.  
 ->1- Go back to give valid port.  
   2- Abort Installation.  

ENTER THE NUMBER OF THE DESIRED CHOICE, OR PRESS <ENTER> TO ACCEPT THE DEFAULT::

```
        
    
*   If you provide an invalid Hostname/IP address, the installer displays the following error message:
        
```
===============================================================================  
Invalid Hostname/IP Address  
---------------------------  

Please enter a valid hostname/IP address.  

 ->1- Go back to give valid details.  
   2- Abort Installation.  

ENTER THE NUMBER OF THE DESIRED CHOICE, OR PRESS <ENTER> TO ACCEPT THE DEFAULT:

```
<ol>
  <li value="13">Provide the <b>Hostname/IP Address</b>, <b>HTTP Port</b>, and <b>HTTPS Port</b>, and press <b>Enter</b>. The_SSL Configuration for HTTPS Communication_ details appear only if you select HTTPS. Choose one of the following two options:</li>
</ol>

```
==============================================
SSL Configuration for HTTPS Communication  
-----------------------------------------------  
Please select the appropriate option to proceed.  

 ->1- Create self-signed certificate  
   2- Provide SSL certificate  

ENTER THE NUMBER FOR YOUR CHOICE, OR PRESS <ENTER> TO ACCEPT THE DEFAULT::  

```
    
In the _SSL Configuration for HTTPS Communication_, if you select 1, the _Details for self-signed SSL Certificate_ details appear.
        
> **_Important:_** To add an existing SSL certificate to cacerts file, refer to [How to Add Your Existing SSL Certificate](Post-Installation_Tasks.md#how-to-add-an-existing-ssl-certificate-to-cacerts).
        

```       
========================================================================  
Details for self-signed SSL Certificate  
-----------------------------------------  

Please provide the following details to create self-signed certificate. All the fields are mandatory.  

Please note that the path of self-signed certificate will be  /root/VoltMXFoundry/keystore.jks.  

Organizational Unit (DEFAULT: ): platform  

Host Name (DEFAULT: ): voltmx.com  

Company (DEFAULT: ): Volt MX  

City (DEFAULT: ): HYD  

State (DEFAULT: ): AP  

Country (DEFAULT: ): IND  

```
        
> **_Note:_** The path for a self-signed certificate will be in this location: `<install folder>\keystore.jks`
        
a.  In the _SSL Configuration for HTTPS Communication_, if you select 2, the _SSL Certificate Details_ details appear.
        
> **_Note:_** Provide path for .jks file as input.
        
```
========================
SSL Certificate Details  
-----------------------  
Please provide the following details  

Absolute Path to Keystore File (Default: ): /downloads/_.hcl.net.2016.jks  

```
        
b.  Type the details. The installer prompts for _Password for keystore file_ details as follows:
        
```
============================= 
Password for keystore file  
-----------------------------

Password should contain minimum six characters and should not contain space.  

Please enter the password:

```
        
*   If you enter an incorrect password -- for example, one that is fewer than six characters, contains a space, or is empty -- the following error message for an invalid keystore password is displayed.
```
=============================
Password for keystore file  
------------------------------

===============================
Invalid Keystore Password  
-------------------------  
Keystore password must be at least six characters and should not contain space.  

PRESS <ENTER> TO ACCEPT THE FOLLOWING (OK):

```
<ol>
  <li value="14">Type the password.</li>
  <li value="15">Press <b>Enter</b>. The_Database Choice_details appear:</li>
</ol>
    
```
================= 
Database Choice  
------------------
Please select the database provider of your choice.

->1- MySQL 5.7
  2- MySQL 5.7 Cluster - Group Replication
  3- Oracle 19c (19.3.0)
  4- SQL Server 2017
  5- MariaDB 10.3. 13

ENTER THE NUMBER FOR YOUR CHOICE, OR PRESS <ENTER> TO ACCEPT THE DEFAULT::  

```
<ol>
  <li value="16">In the_Database Choice_,choose the DB:</li>
</ol>

*   In the _Database Choice_ if you select 1, the _MySQL Database Details_ appear.
        
```
======================= 
MySQL Database Details  
-------------------------

Please enter MySQL database server details  

Database Server IP (DEFAULT: localhost): <IP address>  

Port (DEFAULT: 3306):  

Username (DEFAULT: ): root  

```
        
a.  Enter the following details:

*   **Database Server IP**: Enter the server Hostname/IP to be used to create a database of selected components of Volt MX Foundry. By default, the server Hostname/IP is set as localhost.
*   **Port**: Enter the database port of the MySQL Server. By default, this field is set to 3306 for MySQL.
*   **Username**: Enter the user name used while creating the database user - for example, dbclient.

b.  Provide a password and press **Enter**.

c.  If you are using an encrypted database password, type the key that you received from the encryption tool and press Enter. Otherwise, leave the field blank and press Enter. For more information, refer to [How to encrypt the database password](./Troubleshooting.md#how-to-encrypt-the-database-password).

*   If the database connection fails, the following error message displays.
            
```
==========================
Database Connection Failed  
--------------------------  
Database connection failed.  

For the following reasons: Communications link failure  

The last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.  

PRESS <ENTER> TO ACCEPT THE FOLLOWING (OK):

```
                
*   If the database server not compatible, the following error message displays:
                
```
===================================== 
Incompatible Database Server Version  
------------------------------------  
Minimum requirement for MySQL database server is 5.7.  

PRESS <ENTER> TO ACCEPT THE FOLLOWING (OK):

```
                
*   In the _Database Choice_ if you select 2, the _Oracle Database Details_ appear.
        
```
=========================
Oracle Database Details  
-------------------------

Please enter Oracle database server details.  

Database Server Hostname/IP (Default: 10.10.24.51): <Hostname/IP>  

Port (Default: 1521):  

Service ID / Service Name(Default: ):  

System Username (Default: ): 

``` 
        
a.  Enter the following details:
  *   **Database Server IP**: Enter the server Hostname/IP to be used to create a database of selected components of Volt MX Foundry. By default, the server Hostname/IP is set as localhost.
  *   **Port**: Enter the database port of the Oracle Server. By default, this field is set to 1521 for oracle.
  *   **Service ID** **/ Service Name**: Enter Oracle service ID or service name. Service ID is unique alias given to an instance name of Oracle DB.       
  *   **System Username**: Enter the user name used while creating the database user.

b.  Press **Enter**. The installer prompts for _Enter Password for Database User_ details as follows:
            
```
=================================
Enter Password for Database User  
---------------------------------
Please enter the password: 

``` 
            
c. Provide a password and press **Enter**.

d. If you are using an encrypted database password, type the key that you received from the encryption tool and press Enter. Otherwise, leave the field blank and press Enter. For more information, refer to [How to encrypt the database password](./Troubleshooting.md#how-to-encrypt-the-database-password).



*   If the database connection fails, the following error message displays.
                

```
========================== 
Database Connection Failed  
--------------------------  
Database connection failed.  

For the following reasons: Communications link failure  

The last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.  

PRESS <ENTER> TO ACCEPT THE FOLLOWING (OK):

```
                
*   If the database server not compatible, the following error message displays:
                
```
==================================== 
Incompatible Database Server Version  
------------------------------------


PRESS <ENTER> TO ACCEPT THE FOLLOWING (OK):

```
                
        
Select the tablespace for Oracle database:
            
> **_Important:_**  If tablespaces were already created, the DBA must grant quota (permissions) on these tablespaces to installer with admin option.  
              
The DBA also must include grant quota on the schemas from installer login.

```     
==================== 
Tablespace Choice  
--------------------  

Please select the Table Space type  

->1- Default Tablespace  
 2- User Defined Tablespace  

ENTER THE NUMBER FOR YOUR CHOICE, OR PRESS <ENTER> TO ACCEPT THE DEFAULT::  

```
            
*   **Default Tablespace**: If selected, the database schema and SQL scripts migration happens automatically to the default tablespace - for example, `USERS`
*   **User Defined Tablespace**: If selected, enter the tablespaces for the following:

```   
=========================
Ask for the Tablespaces  
-------------------------

Please enter the names of the Tablespaces  

Data Tablespace (Default: ): VoltMX123  
Index Tablespace (Default: ):  
LOB Table Space (Default: ):  

```
                
*   **Data Tablespace**:  
Enter the name for Data tablespace.  

This is a mandatory field. If the Data tablespace field is empty, the installers displays the error message:

```
===================================== 
TableSpace details not provided  
-------------------------------------- 
Please provide a valid Tablespace for at least the Data field for the installation wizard to proceed further. PRESS <ENTER> TO ACCEPT THE FOLLOWING (OK):  

```

If the Data tablespace (for example, VoltMX123) does not exist, the installers displays the error message:
                    
```
=====================================
Invalid TableSpace Details  
------------------------------------
Installation wizard is not able to access the VoltMX123 TableSpace provided with give credentials. Please verify the details again. PRESS <ENTER> TO ACCEPT THE FOLLOWING (OK): 

``` 
                    
*   **Index Index Tablespace**: Enter the name for Index tablespace.  
If input for Index Tablespace is not provided, then the value will be set to the provided Datatable space value.
*   **LOB Tablespace**: Enter the name for LOB tablespace.  
If input for LOB Tablespace is not provided, then the value will be set to the provided Datatable space value.
*   In the _Database Choice_ if you select 3, the _SQL Server Database Details_ appear.
        
```
===============================
SQLServer Database Details  
-------------------------------

Please enter SQL database server details.  

Database Server Hostname/IP (Default: 10.10.24.51): <Hostname/IP>  

Port (Default: 1433):  

Username 9Default: ):  

Instance Name (Optional) (Default: ):

```
        
a.  Enter the following details:

*   **Database Server IP**: Enter the server Hostname/IP to be used to create a database of selected components of Volt MX Foundry. By default, the server Hostname/IP is set as localhost.
*   **Port**: Enter the database port of the SQL Server. By default, this field is set to 1433 for SQL.
*   **Username**: Enter the user name used while creating the database user - for example, dbclient.
*   **Instance Name (Optional)**: Enter the instance name for the database. This information is optional.

b.  Press **Enter**. The installer prompts for _Enter Password for Database User_ details as follows:

```
=====================================
Enter Password for Database User  
--------------------------------------
Please enter the password:  

```
            
c.  Provide a password and press **Enter**.

d.  If you are using an encrypted database password, type the key that you received from the encryption tool and press Enter. Otherwise, leave the field blank and press Enter. For more information, refer to [How to encrypt the database password](./Troubleshooting.md#how-to-encrypt-the-database-password).

*   If the database connection fails, the following error message displays.

```
=========================== 
Database Connection Failed  
--------------------------  
Database connection failed.  

For the following reasons: Communications link failure  

The last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.  

PRESS <ENTER> TO ACCEPT THE FOLLOWING (OK):

```
                
*   If the database server not compatible, the following error message displays:
                
```
==================================== 
Incompatible Database Server Version  
-----------------------------------  
PRESS <ENTER> TO ACCEPT THE FOLLOWING (OK):

```
                
> **_Important:_** Follow the below steps only if you want install Volt MX Foundry on Tomcat with Microsoft Azure SQL Server database.
                
*   For **Microsoft Azure (MSSQL)**, If you want to install Volt MX Foundry V8 on Tomcat with Microsoft Azure SQL, you must edit the `authService.xml` file from the existing Tomcat with Microsoft SQL Server install location. For more details, refer the following section on how to configure identity to work on Microsoft Azure SQL.
                    
                    
<details close markdown="block"><summary>Click here</summary>
                    
Configure Identity on Tomcat with Microsoft Azure SQL Server

To run identity on Tomcat with Microsoft Azure SQL, you must edit the `authService.xml` file from the existing Tomcat with MSSQL install location.
                    
a.  Open the `authService.xml` file from the existing Tomcat with MSSQL install location.  
Sample Location for authService.xml from Tomcat with MSSQL install folder,

`<LocalDrive>\VoltMXFoundryInstallerV8\tomcat\conf\Catalina\localhost\authService.xml`

b.  Modify the following the `authService.xml` file:


```
<?xml version="1.0" encoding="utf-8" ?>
<!-- The contents of this file will be loaded for each web application -->
<Context>

<Resource auth="Container" driverClassName="com.microsoft.sqlserver.jdbc.SQLServerDriver"  
factory="org.apache.tomcat.jdbc.pool.DataSourceFactory" initialSize="5" jmxEnabled="true" logAbandoned="true" maxActive="10" maxIdle="5" maxWait="10000" minEvictableIdleTimeMillis="30000" minIdle="2" name="jdbc/authglobaldb" password="<Password>" removeAbandoned="true" removeAbandonedTimeout="600" testOnBorrow="true" testOnReturn="false" testWhileIdle="true" timeBetweenEvictionRunsMillis="30000" type="javax.sql.DataSource" url="jdbc:sqlserver://<DBServerIP:PORT>;databasename=<auth database name>;sendStringParametersAsUnicode=true;" username="<User_Name>" validationInterval="30000" validationQuery="SELECT 1"/>

<Resource auth="Container" driverClassName="com.microsoft.sqlserver.jdbc.SQLServerDriver"  
factory="org.apache.tomcat.jdbc.pool.DataSourceFactory" initialSize="5" jmxEnabled="true" logAbandoned="true" maxActive="10" maxIdle="5" maxWait="10000" minEvictableIdleTimeMillis="30000" minIdle="2" name="jdbc/authconfig" password="<Password>" removeAbandoned="true" removeAbandonedTimeout="600" testOnBorrow="true" testOnReturn="false" testWhileIdle="true" timeBetweenEvictionRunsMillis="30000" type="javax.sql.DataSource" url="jdbc:sqlserver::/<DBServerIP:PORT>;databasename=<auth database name>;sendStringParametersAsUnicode=true;" username="<User_Name>" validationInterval="30000" validationQuery="SELECT 1"/>

</Context>

```

</details>
                    
*   In the _Database Choice_ if you select 5, the _MariaDB Database Details_ appear.
        
```
============================
MariaDB Database Details  
-----------------------------

Please enter MariaDB database server details.  

Database Server Hostname/IP (Default: 10.10.24.51): <Hostname/IP>  

Database Port (Default: 1433):  

Database Username (Default: ):  

Instance Name (Optional) (Default: ):

```
        
a.  Enter the following details:

*   **Database Server IP**: Enter the server Hostname/IP to be used to create a database of selected components of Volt MX Foundry. By default, the server Hostname/IP is set as localhost.
*   **Database Port**: Enter the database port of the MariaDB Server. By default, this field is set to 3306 for MariaDB.
*   **Database Username**: Enter the user name used while creating the database user - for example, dbclient.

b.  Press **Enter**. The installer prompts for _Enter Password for Database User_ details as follows:
            
```
=====================================
Enter Password for Database User  
-------------------------------------  
Please enter the password:  

```
            
c.  Provide a password and press **Enter**.

d.  If you are using an encrypted database password, type the key that you received from the encryption tool and press Enter. Otherwise, leave the field blank and press Enter. For more information, refer to [How to encrypt the database password](./Troubleshooting.md#how-to-encrypt-the-database-password).

*   If the database connection fails, the following error message displays.
    
```
==========================
Database Connection Failed  
--------------------------  
Database connection failed.  

For the following reasons: Communications link failure  

The last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.  

PRESS <ENTER> TO ACCEPT THE FOLLOWING (OK):

```
    
*   If the database server not compatible, the following error message displays:
    
```
====================================
Incompatible Database Server Version  
------------------------------------  

PRESS <ENTER> TO ACCEPT THE FOLLOWING (OK):

```
 <ol>
  <li value="17">Press <b>Enter</b>. The installation prompts for Database name prefix and suffix details as follows:</li>
</ol>


```
===============================
Database name prefix and suffix  
-------------------------------  

Please enter database name prefix and suffix. Please provide existing Prefix and Suffix if you intend to upgrade to the new Volt MX Foundry Database.  

Database Name Prefix (Default: voltmx): tomcat  

Database Name Suffix (Default: 1): 54

```
    
*   Database Name Prefix: Enter valid prefix databases - for example, Volt MX.
 *   Database Name Suffix: Enter valid suffix for all databases - for example, 1.

 <ol>
  <li value="18">Enter the prefix and suffix for the database and press <b>Enter</b>. The_Administrator Account Configuration_details appear.</li>
</ol>

The **Administrator Account Configuration** details help you to configure your super administrator account.
    
The **Administrator Account Configuration** window appears only while installing Console and Identity Services along with one or all other Volt MX Foundry components such as Integration Services, and Engagement Services on Tomcat or JBoss on a single node. You can select the components at [Install Components](#InstallComponentsSN).

```
===================================
Administrator Account Configuration  
------------------------------------

Please configure your Administrator Account. We require your First Name, Last Name, Email Address and Password. Your Name is used for display purposes in the console, the Email address will be used as your login ID and we do not use it to send unsolicited emails.  

Public URL (Default: ):  

First Name (Default: ):  

Last Name (Default: ):  

Email (Default: ):  

```
    
a.  In the **Administrator Account Configuration**, enter the following details to create the administrator account.

*   **Public URL**: The URL field is filled with required details, for example. `<Hostname/IP address>:<port>`. Change these details, if required.
        
*   **First Name**: Enter the first name of the user.
        
*   **Last Name**: Enter the last name of the user.
        
*   **Email**: Enter the email address of the user. It can include alphanumeric and special characters that follow standard email address form.
        
> **_Note:_** During Volt MX Foundry installation if you have configured your super administrator account, you can directly log in to Volt MX Foundry Console.
            
b.  Press **Enter**. The _Password for the Administrator Account_ details appear.
        
```
======================================  
Password for the Administrator Account  
--------------------------------------- 
Please Enter the Password:  


Confirm Password for the Administrator Account Configuration  

Please Enter the Password:  

```
        
c.  Enter the admin log-in password and press **Enter**. The _Confirm Password for the Administrator Account Configuration_ details appear.
        
```
==============================================================
Confirm Password for the Administrator Account Configuration  
--------------------------------------------------------------

Please Enter the Password:

```
<ol>
  <li value="19">Re-enter the admin log-in password and press <b>Enter</b>. The_VoltMX Foundry server startup_details appear.</li>
</ol>

```
=======================================
Volt MX Foundry server startup details  
----------------------------------------

Do you want to start the Volt MX Foundry server after successful installation of Volt MX Foundry  
 ->1- Yes  
   2- No  

ENTER THE NUMBER FOR YOUR CHOICE, OR PRESS <ENTER> TO ACCEPT THE DEFAULT::

```

<ol>
  <li value="20">To start the server automatically after the successful installation of Volt MX Foundry, press <b>Enter</b>.</li>
</ol>
    
> **_Note:_** To start the server manually after the successful installation of Volt MX Foundry, refer to [Starting Volt MX Foundry Console.](../../../Foundry/voltmx_foundry_manual_install_guide/Content/Starting_VoltMX_Foundry_Console.md)
    
The _Pre-Installation Summary_ details appear.
    
```
=================================================  
Pre-Installation Summary  
-----------------------  
Please review the following before continuing:  

Installation Type:  
New Installation  

Install Components:  
Console, Developer Portal, Identity Services, Integration Services and Engagement Services  

Install Folder:  
/home/User/VoltMXFoundryInstaller-DEV-8.4.1.438  

Application Server:  
Tomcat 8.5.32  

Application Server Details:  
Hostname/IP Address: 10.11.12.201, Protocol: HTTP, HTTP Port: 8080,  

Database Choice:  
MySQL 5.7  

Database Details:  
Hostname/IP Address: mbaastest22.hcl.net, User: mfuser, Port: 3306  

Database Names:  
Test_mfconsoledb_438, Test_mfaccountsdb_438, Test_mfreportsdb_438, Test_idconfigdb_438, Test_admindb_438 and Test_vpnsdb_438  

Admin Account Details:  
First Name:test, Last Name:one, Email:bvtuser@voltmx.com  

PRESS <ENTER> TO CONTINUE: =========================================================== Installing... ------------- \[==================|==================|==================\]

```
<ol>
  <li value="21">Type the details and press <b>Enter</b>. The_Ready To Install_ details appear.</li>
</ol>
    
```
=====================================
Ready To Install  
--------------------------------------

Installer is now ready to install Volt MX Foundry Console onto your system at the following location:  

/home/user1/VoltMXFoundry  

PRESS <ENTER> TO INSTALL:

```  
<ol>
  <li value="22">Press <b>Enter</b> to continue the installation.</li>
</ol>
    
```
===============  
Installing...  
---------------

[==================|==================|==================|==================\] \[------------------|------------------|------------------|------------------\]

```

<ol>
  <li value="23">Press <b>Enter</b>. The_Installation Complete_details appear.</li>
</ol>

```
========================
Installation Complete  
------------------------

Congratulations. Volt MX Foundry has been successfully installed to:  

/home/user1/VoltMXFoundry  

Console URL: https://00.00.00.00:port/mfconsole  
Identity Service URL: https://00.00.00.00:port/authService  
Integration Service URL: https://00.00.00.00:port/admin  
Engagement Services URL: http://00.00.00.000:port/vpns  

PRESS <ENTER> TO EXIT THE INSTALLER: \[user1@cnt6-01c downloads\]$

```
 <ol>
  <li value="24">Press <b>Enter</b> to complete the installation. After the installation is completed, the installer creates logs in the install folder.</li>
</ol>   

> **_Important:_** When you are using a third party tool (for example, PuTTY) for installing Volt MX Foundry remotely, if any network connection issues occur at the end of the installation, the installer stops the installation and the installation log is not created.
    

> **_Important:_**  After installing Volt MX Foundry, import your SSL certificate (for example, domain.subdomain.crt) into your Volt MX Foundry installer's JRE trusted certificate authority (CA) certificates file - for example,  
`<INSTALL_DIR>/jre/lib/security/cacerts`  
  
If your SSL certificate is not configured, the system displays an error - for example, "peer not authenticated".  
  
For details, refer to [Troubleshoot with SSL Certificate Issues](Troubleshooting.md#Service_Provider's_Certificate_Issues).

> **_Note:_** You can now access Volt MX Foundry Console by using the URLs. For more details, refer to [Accessing Volt MX Foundry Console - On-premises](../../../Foundry/voltmx_foundry_user_guide/Content/How_to_access_VoltMX_Foundry_Portal_on-Prem.md).  
![](Resources/Images/MFWelcome_649x407.png)  
  
During installation if you have configured your super administrator account, you can directly [log in to Volt MX Foundry Console](../../../Foundry/voltmx_foundry_user_guide/Content/How_to_access_VoltMX_Foundry_Portal_on-Prem.md) by using the Console URL.  
  
![](Resources/Images/Sign-inMF_648x363.png)
