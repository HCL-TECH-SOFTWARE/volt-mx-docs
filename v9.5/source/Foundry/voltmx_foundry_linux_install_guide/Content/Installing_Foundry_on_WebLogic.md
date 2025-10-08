

# Installing Volt Foundry on WebLogic - Console-mode


> **_Note:_** If a user installs Volt MX Console on a partition different from the user's home directory, the user must have read/write execute permissions.

This section of the document provides you with the instructions for installing and configuring Volt MX Console.

> **_Important:_** Ensure that you have the required hardware and access to the supporting software as mentioned in the [Prerequisites](Prerequisites.md) section and must perform the steps noted in the [Pre-installation Tasks](Pre-installation_Tasks.md) section.

Make sure you have proper administrative rights to install Volt MX on your computer.

You also need a user where Volt MX will be installed.

The **<Install Location\>** directory contains the log files logging each invocation of the installer. To make problem identification easier, provide these log files to Volt MX when reporting an issue.

**To install Volt MX Console on WebLogic using the installer, follow these steps:**

<ol>
<li>
Execute the following command to switch to the user that you created.<br>
<code># su - username</code>
</li>
<li>Press <b>Enter</b>. The system prompt you to enter the password.</li>
<li>Enter the password, and press <b>Enter</b>.</li>
<li>Unzip the <code>VoltFoundrySetup.tar.gz</code> file, and navigate to the folder <em><b>VoltFoundry_Installer_Linux</b></em>.</li>
<li>
Start the <b>./VoltFoundryInstaller-x.x.x.x_GA.bin</b> file by executing the following command:
<pre><code>
[foundry@foundrytest12 VoltFoundry_Installer_Linux]$ ./VoltFoundryInstaller-9.5.15.0_GA.bin
Preparing to install
Extracting the JRE from the installer archive...
Unpacking the JRE...
Extracting the installation resources from the installer archive...
Configuring the installer for this system's environment...

Launching installer...

===============================================================================
Volt Foundry        (created with InstallAnywhere)
-------------------------------------------------------------------------------

Preparing CONSOLE Mode Installation...

===============================================================================
Introduction
------------

This installer will install a new or upgrade an existing instance of Foundry.

Volt Foundry is a set of enterprise-grade mobile infrastructure services that
makes it easy to build amazing apps that integrate and support all of your
backend systems. With open, standards-based development, scalable and secure
services, and exceptional agility, enterprises can dramatically reduce the
cost and complexity of enterprise mobility projects.

To proceed with installation, please confirm that the following prerequisites
have been met -

1. Database server with admin user for installation. MySQL, MariaDB, Oracle
and MS SQL Server are the supported Database servers. MariaDB is supported for
Tomcat/JBoss only
2. Corresponding database user should exist and that user should have all
required privileges as per the documentation.
3. If you want to use your existing SSL certificate then please have the SSL
certificate mapped to the domain name you want to use.
4. If you want to install with JBoss as an option for application server, then
have the application server preconfigured. Please note that single node JBoss
is also bundled as part of the installer, in case you want to install afresh.

To change input, type 'back' to go back to the previous step.
To cancel the installation, type 'quit' at any time.

For troubleshooting & help on the installation, use
https://opensource.hcltechsw.
com/volt-mx-docs/docs/documentation/Foundry/installing_foundry.html.

For getting started on Volt Foundry, refer
https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltm
x_foundry_user_guide/Content/Introduction.html.

If you have more questions or feedback, you can join our
community at https://support.hcltechsw.com/csm?id=volt_mx_support or raise a
support ticket at https://support.hcltechsw.
com/csm?id=sc_cat_item&sys_id=5d63dc0fdb0c60140104c59b139619c2.

->1- Continue with Installation.
    2- Abort Installation.

ENTER THE NUMBER OF THE DESIRED CHOICE, OR PRESS &lt;ENTER&gt; TO ACCEPT THE
DEFAULT:
</code></pre> 
</li>
<li>
Press Enter. The Software License Agreement  details appear.
<pre><code>
===============================================================================
License Agreement
-----------------

Installation and Use of Volt Foundry Requires Acceptance of the Following
License Agreement:

LICENSE INFORMATION DOCUMENT

Program Name:
HCL Volt Foundry 9.5.15

The following terms apply to the use of the Program:

Definitions:
Licensee. For the purposes of this License Information Document, Licensee
shall also mean Customer, an
End User or other holder of an entitlement to which the License Information
Document relates.

Limited use right
As described in the HCL Master License Agreement available at:
https://www.hcltechsw.com/wps/portal/resources/master-agreements or the
applicable agreement between
HCL and Licensee ("MLA") and this License Information Document, HCL grants
Licensee a limited
right to use the Program. This right is limited to the level of Authorized Use
defined in License Metric
below or other specified level of use, paid for by Licensee and evidenced by
the proof of entitlement.

PRESS &lt;ENTER&gt; TO CONTINUE:

Licensee's use may also be subject to other restrictions as prescribed in this
License Information
Document.

Supporting Programs
Supporting programs are additional software provided to Licensee to support
the operation and
functionality of the Program ("Supporting Programs"). Licensee is authorized
to install and use the
Supporting Programs listed below in accordance with the license grant in the
Master License Agreement,
the relevant Order or such other relevant agreement for the Program only. The
Supporting Programs may
not be used for any other purpose.
A Supporting Program may be subject to the terms of a separate License
Information Document
(published here: HCL License Agreements (hcltechsw.com) and those terms, if
any, shall also apply to
the use of that Supporting Program. In the event of conflict, the terms in
this License Information
document supersede the terms of the Supporting Program. Sufficient
entitlements to the Program must be

PRESS &lt;ENTER&gt; TO CONTINUE:

obtained, as a whole, to cover installation and use of all of the Supporting
Programs unless separate
entitlements are provided within this License Information document. When
Licensee's right to use the
Program expires or terminates, Licensee must discontinue use, destroy or
promptly return all copies of the
Supporting Programs to HCL or the party from whom the Program was acquired. If
use of the Supporting
Programs is required beyond the limits of the Proof of Entitlement please
contact a HCL sales
representative or the relevant third party to obtain the appropriate license.
The following are Supporting Programs licensed with the Program:

-       HCL Leap

The following restrictions apply to the use of the Supporting Programs:
Notwithstanding any provision in this License Information document, Licensee
is permitted to use only
the following components or functions of the identified Supporting Program:

-       HCL Leap may only be used by Volt Foundry B2E license holders and for an
equivalent number of

PRESS &lt;ENTER&gt; TO CONTINUE:

entitled users.

-       The entitlement to HCL Leap provided by Volt Foundry does not include
entitlement to IBM
WebSphere Application Server Network Deployment or to IBM DB2 Advanced
Workgroup Server
Edition ("IBM DB2").

Software Development Kit
If the Program includes a Software Development Kit ("SDK"), the terms and
conditions of this
paragraph apply solely for the use of the SDK.  The SDK may include software,
APIs and
associated documentation.  The SDK is provided solely for Licensee's internal
use to develop
software that enables the integration of third party software or hardware with
the Program, or to
develop software that functions with the Program, such as an agent.
Licensee's use of the SDK
is restricted solely to enhance Licensee's internal use of the Program.  No
distribution rights of

PRESS &lt;ENTER&gt; TO CONTINUE:

any kind are granted to Licensee regarding the Program.  In addition to the
limitations on use set
forth in the MLA and License Information Document, Licensee may not reproduce,
disclose,
market, or distribute the SDK or the documentation or any applications
containing any
executable versions of the SDK to third parties, on the internet, or use such
executables in excess
of the applicable authorized use limitation.  If there is a conflict between
the terms of this section
and the terms of any other section in MLA and License Information Document,
the terms of this
section will prevail solely with respect to the use of the SDK. TO THE MAXIMUM
EXTENT
PERMITTED BY APPLICABLE LAW, AND NOTWITHSTANDING ANYTHING
CONTAINED HEREIN TO THE CONTRARY, THE SDK IS PROVIDED AND LICENSED
"AS IS" WITHOUT ANY WARRANTY OR REPRESENTATION OF ANY KIND, EITHER
EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, ANY WARRANTIES OR
REPRESENTATIONS OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY OR
FITNESS FOR PURPOSE, AS WELL AS ANY EXPRESS WARRANTIES PROVIDED
ELSEWHERE IN THIS AGREEMENT. HCL WILL NOT BE LIABLE FOR ANY COSTS OR
DAMAGES AND WILL NOT INDEMNIFY OR DEFEND LICENSEE TO THE EXTENT

PRESS &lt;ENTER&gt; TO CONTINUE:

SUCH ACTION IS BASED UPON A CLAIM ARISING FROM SDK.

Redistributables
The Program may include  third party re-distributable components listed in the
table below
("Redistributable Code") which Licensee is authorized to install use and
redistribute for its own internal
business purposes or where permitted and as relevant, as part and in support
of Licensee's application.
Such use shall be in accordance with any applicable third party license terms
and conditions.  When
Licensee's right to use the Program expires or terminates and unless otherwise
agreed to by the Parties in
the MLA, Licensee must discontinue use, destroy or promptly return all copies
of the Redistributable
Code to HCL.

Source Components and Sample Materials
The Program may include some components in source code form ("Source
Components") and other
materials identified as "Sample Materials" Licensee may copy and modify Source
Components and

PRESS &lt;ENTER&gt; TO CONTINUE:

Sample Materials for internal use only provided such use is within the limits
of the license rights under
this License Information document and Agreement, provided however that
Licensee may not alter or
delete any copyright information or notices contained in the Source Components
or Sample
Materials. HCL provides the Source Components and Sample Materials without
obligation of support and
"AS IS", WITH NO WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING
THE WARRANTY OF TITLE, NON-INFRINGEMENT OR NON-INTERFERENCE AND THE
IMPLIED WARRANTIES AND CONDITIONS OF MERCHANTABILITY AND FITNESS FOR A
PARTICULAR PURPOSE.

Privacy
Licensee acknowledges and agrees that HCL may use third party software, cookie
and tracking
technologies to collect, maintain, process and use analytics data and personal
information in gathering
product usage statistics and information designed to help improve user
experience and/or to tailor
interactions with users in accordance with the HCL Privacy Statement,
available at:

PRESS &lt;ENTER&gt; TO CONTINUE:

https://www.hcltech.com/privacy-statement.

Third Party Data and Services
The Program may contain links to or be used to access third party data
services, databases, web services,
software, or other third party content (all, "content"). Access to this
content is provided "AS-IS", WITH
NO WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING THE WARRANTY OF
TITLE, NON-INFRINGEMENT OR NON-INTERFERENCE AND THE IMPLIED WARRANTIES
AND CONDITIONS OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
Access can be terminated by the relevant third parties at their sole
discretion at any time. In the event
that Third Party Software is included in the Program(s), such Third Party
Software is made
available to Licensee in accordance with the licenses for such Third Party
Software. Licensee may
be required to enter into separate agreements with the third parties for the
access to or use of such content.
HCL is not a party to any such separate agreements and as an express condition
of this license Licensee
agrees to comply with the terms of such separate agreements.


PRESS &lt;ENTER&gt; TO CONTINUE:

Program-unique Terms

The following component parts are licensed for use with the Program
HCL Volt Flare
HCL Volt Foundry
HCL Volt Iris

The following restrictions apply to the use of the Program
Israel. This product requires, for each Customer in Israel, an Encryption
License import from MOD, if not
for internal use.
France. French encryption import requirements met – ANSSI Declaration Number
21060215, dated
15JUN2021.

Metric
The following units of measure may apply to Licensee's use of the Program:

"Unique User"
User is a unique person or entity that uses any customer application,
developed on the HCL Volt Foundry
software, at least once per any contract year and is identified by either

PRESS &lt;ENTER&gt; TO CONTINUE:

their user ID when authenticating
within the application or by a unique device identifier when using the
application without authenticating.
Multiple devices used under the same authenticated user ID count as one User.
Multiple devices used by
anonymous users each count as a User.  The Program may be installed on any
number of computers or
servers and each Unique User may have simultaneous access to any number of
instances of the Program
at one time. Licensee must obtain separate, dedicated entitlements for each
Unique User given access to
the Program in any manner directly or indirectly (for example: via a
multiplexing program, device, or
application server) through any means. An entitlement for an Authorized User
is unique to that Unique
User and may not be shared, nor may it be reassigned other than for the
permanent transfer of the Unique
User entitlement to another person or entity.

Named User
Named User is defined as an employee, contractor, or outsource provider under

PRESS &lt;ENTER&gt; TO CONTINUE:

the employment (direct
or contractually) of the Customer or Customer's member organizations with a
unique identifying
username, password, or combination of the two that uses a B2E use case app at
least once in a standard
calendar quarter. Multiple devices used under the same username, password, or
combination of the two,
count as one Named User.

B2E/B2B
B2E Use Case is defined as apps designed for an audience of employees,
contractors, non-employee
partners, affiliates or outsource providers under the employment (directly or
contractually) of the
customer/company.

B2C
B2C Use Cases are defined as apps designed for an audience of non-employee
customers not supported
by the B2E use case. Each use case licensed by Customer, supported by a hosted
cloud environment,
will require a separate cloud instance for each use case. The maximum number

PRESS &lt;ENTER&gt; TO CONTINUE:

of apps that can be
hosted on any one cloud instance is twenty.

Session
Session is defined as user interaction with an application either as an
interactive session or triggered
application logic executed in the background as a non-interactive session. The
Session begins when the
app is started. It is continued until the app is idle for thirty (30) minutes
or until the user ends the app
process or operating system explicitly closing the app. The maximum duration
for a session is four (4)
hours. If an app session continues for four (4) hours, a new session is
automatically created.

Supported Channels
Supported Channels means a specified device category or other channel
supported by the platform,
which include one or more of the following: (i) native applications on
handheld mobile devices; (ii) native
applications on tablet devices; (iii) mobile web browser applications for
handheld mobile devices and

PRESS &lt;ENTER&gt; TO CONTINUE:

tablets); (iv) desktop web browser applications; and (v) progressive web
applications.

DO YOU ACCEPT THE TERMS OF THIS LICENSE AGREEMENT? (Y/N): Y
</code></pre>
</li>
<li>
Press <b>Enter</b> to continue with new installation.The following installation types are supported for new installation: 
<ul>
<li><b>Production</b> for the production instance.</li>
<li><b>Non-Production</b> for larger environments like QA or UAT.</li>
<li><b>Development</b> for single machine instance.</li>
</ul>
<pre><code>
===============================================================================
Licensing Type
--------------

To upgrade your existing instance for Foundry, provide the Database details of
your existing instance. The Database schema will be updated to the latest
version, no application data will be lost.

Please select the type of environment you want to install.
Development – Single server instance typically used for development
Non-Production – A multi-server environment for testing or staging
environments
Production – A full production-grade environment

    1- Production
    2- Non-Production
->3- Development

ENTER THE NUMBER FOR YOUR CHOICE, OR PRESS &lt;ENTER&gt; TO ACCEPT THE DEFAULT:
</code></pre>
</li>
<li>Enter your choice and press Enter. The Send Usage Data Anonymously details appear. Allows Volt MX to collect product usage information to make your Volt MX experience better. Volt MX does not save any of your private or application data.<a name="InstallComponentsSN"></a>
<pre><code>
===============================================================================
Send Usage Data Anonymously
---------------------------

Help us make your Volt Foundry experience better by allowing us to collect
product usage information. We will not save any of your private or application
data.

Send usage data anonymously.

  ->1- Yes
    2- No

ENTER THE NUMBER FOR YOUR CHOICE, OR PRESS &lt;ENTER&gt; TO ACCEPT THE DEFAULT:
</code></pre>
</li>
<li>
Enter your choice and press <b>Enter.</b> The Install Components details appear.
<pre><code>
===============================================================================
Install Components
------------------

Please select Volt Foundry components to install.
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

 Console, Identity and Integration Services are mandatory components of Volt
Foundry. In a development scenario, all components can be installed on the
same server. However, it is recommended to install these components on
separate servers for a production environment.

  ->1- Console
  ->2- Identity Services
  ->3- Integration Services
  ->4- API Developer Portal
  ->5- Engagement Services

ENTER A COMMA-SEPARATED LIST OF NUMBERS REPRESENTING THE DESIRED CHOICES, OR
   PRESS &lt;ENTER&gt; TO ACCEPT THE DEFAULT:
</code></pre>
<ul>
<li><b>Console</b> - To install Volt MX Console, type 1 and press <b>Enter</b>.  
        The system creates the following databases: <code>&lt;prefix&gt;mfconsoledb&lt;suffix&gt;</code>, <code>&lt;prefix&gt;mfaccountsdb&lt;suffix&gt;</code>, and  <code>&lt;prefix&gt;mfreportsdb&lt;suffix&gt;</code>.</li>
<li><b>Identity Services</b> - To install Volt MX Identity Services, type 2 and press <b>Enter</b>.  
        The system creates the following database: <code>&lt;prefix&gt;idconfigdb&lt;suffix&gt;</code>.</li>
<li><b>Integration Services</b> - To install Volt MX Integration, type 3 and press <b>Enter</b>.  
        The system creates the following databases: <code>voltmxadmindb</code>  and  <code>mfreportsdb</code>.</li>
<li><b>API Developer Portal</b> - To install developer portal, type 4 and press <b>Enter</b>. 
<blockquote><em><b>Note:</b></em> During installation if you have selected <b>API Developer Portal</b>, the <b>API Developer Portal</b> is created. You can directly access your <a href="../../../Foundry/voltmx_foundry_user_guide/Content/VoltMXDevPortal.html">VoltMX Developer Portal</a> in Volt Foundry Console.</blockquote>
</li>
<li><b>Engagement Services</b> - To install Volt MX Engagement Services, type 5 and press <b>Enter</b>. The system creates the following database: <code>&lt;prefix&gt;kpnsdb&lt;suffix&gt;</code>.</li>
</ul>
</li>

<b><u>Reports Database</u></b> <br>

The reports database is used for configuring reports. <br>

The Installer creates the <code>mfreportsdb</code> if you choose either Console or Integration Services: <br>

*   Console without Integration Services (with or without Engagement Services)<br>
*   Console and Integration Services (with or without Engagement Services)<br>
*   Integration Services without Console (with or without Engagement Services)<br><br>

<b id ="CreatingReportsDB"><u>Reports Database for Integration on a Separate Node:</u></b> <br>

While installing console and integration on separate nodes, the installer prompts you to point the reports database during the integration installation.  <br> For example: <br> <br>

You have installed only Console on one node. The installer creates these three databases such as <code><>mfreportsdb<></code> along with the <code><>mfconsoledb<></code> and <code><>mfaccountsdb<></code>. For example, your report database name is <code>voltmxmfreportsdb1</code>. <br> <br>

When you install the integration with or without one or more components (identity, or Engagement Services ) on a separate node, the installer displays the Reports Database Name field in the Database Details window. If the installer prompts you to enter the existing reports db, enter the reports database name (for example, <code>voltmxmfreportsdb1</code>) in the Database Details window > Reports Database Name field.  <br><br>

Refer to <a href=#CreatingReportsDB>creating a reports database, for example, &lt;prefix&gt;mfreports&lt;suffix&gt;</a>. <br>

<li>Press <b>Enter</b> to continue the installation. The Install Folder details appear.
<pre><code>
===============================================================================
Install Folder
--------------

Please choose a destination folder for this installation. The installation
path should not contain any special characters.


Default Install Folder: /home/foundry/VoltFoundryInstaller-GA-9.5.15.0

ENTER AN ABSOLUTE PATH, OR PRESS &lt;ENTER&gt; TO ACCEPT THE DEFAULT
:
</code></pre>
<blockquote><em><b>Note: </b></em>By default, Volt MX is installed at the home directory of the user.</blockquote>
</li>

<li>Press Enter to continue the installation. The installer prompts for the Application Server details as follows:
<pre><code>
===============================================================================
Application Server
------------------

Enter requested information

  ->1- Tomcat 9.0.62
    2- JBoss 7.4
    3- WebLogic 14c (14.1.1.0)

ENTER THE NUMBER FOR YOUR CHOICE, OR PRESS &lt;ENTER&gt; TO ACCEPT THE DEFAULT: 3

</code></pre>
</li>

<li>In the Application Server, type 3 and press Enter. installation. The Application Server Details details for WebLogic appear.

<pre><code>
===============================================================================
Application Server Details
--------------------------

Please enter the details of your existing WebLogic server.

Fully Qualified Public URL of Volt Foundry (Default: ): **************

Hostname/IP Address of WebLogic Administration Server (Default:
   **************): **************

WebLogic Administration Port (Default: **************):

WebLogic Administration Server User (Default: **************):
</code></pre>
<ol>
<li>
    Enter the following details for WebLogic Server:
    <ul>
    <li><b>Fully Qualified Public URL of Volt MX (Default:)</b>: Enter load balancer URL to use public communication.</li>    
    <li><b>IP Address/Hostname of WebLogic Management Server (Default: 10.10.24.51)</b>: Enter IP Address/Hostname of the WebLogic Management Server.</li>    
    <li><b>WebLogic Management Port (Default: 7001)</b>: Enter native port of WebLogic Management Server.</li>    
    <li><b>WebLogic Management Server User (Default: weblogic)</b>: Enter the log-in username for WebLogic Management Server.</li>
    </ul>
</li>
<li>Press Enter. The installer prompts for WebLogic Management Server User Password details as follows:
<pre><code>
===============================================================================
WebLogic Management Server User Password
----------------------------------------

Please enter the password:
</code></pre>
</li>
<li>
Enter the log-in password for WebLogic server and press Enter.The Server Groups details appear.A WebLogic Server group consists of multiple server instances that run simultaneously on the same machine or on different machines. Volt MX supports WebLogic Servers and WebLogic Clusters.
<pre><code>

===============================================================================
Server Groups
-------------

A WebLogic Server group consists of multiple WebLogic Server instances running
simultaneously and working together to provide increased scalability and
reliability. The server instances that constitute a group can run on the same
machine, or be located on different machines. Each server instance in a group
must run the same version of WebLogic Server.

1. AdminServer

Enter comma separated server groups number you want to use (e.g.: 1,2 or
   all) (Default: all):

</code></pre>
</li>
<li>Enter server groups with a comma separated - for example, 1, 2, shown above.
The Selected Server Group details appear.
<pre><code>

===============================================================================
Selected Server Group
---------------------

You have selected below mentioned server groups.

1. AdminServer

  ->1- Continue with installation.
    2- Go back to select again.

ENTER THE NUMBER OF THE DESIRED CHOICE, OR PRESS &lt;ENTER&gt; TO ACCEPT THE
   DEFAULT:
</code></pre>
</li>
</ol>
</li>

<li>Press Enter. The Database Choice details appear:
<pre><code>
===============================================================================

Please select the database provider of your choice.

  ->1- MySQL 8.0
    2- MySQL 8.0 Cluster - Group Replication
    3- Oracle 19c (19.3.0)
    4- SQL Server 2019

ENTER THE NUMBER FOR YOUR CHOICE, OR PRESS &lt;ENTER&gt; TO ACCEPT THE DEFAULT:
</code></pre>
</li>

<li>

   In the Database Choice, choose the DB:
  <ul>

  <li>In the Database Choice if you select 1, the MySQL Database Details appear.
  <pre><code>
===============================================================================
MySQL Database Details
----------------------

Please enter MySQL database server details.

Database Server Hostname/IP (Default: localhost): foundrytest21.fnxlabs.com

Port (Default: *************** ): ************

Username (Default: ): ***************

===============================================================================
Password for Database User
--------------------------

Please enter the password:


===============================================================================
Encrypted Rotational Key for Database User
------------------------------------------


Please enter the Encrypted Rotational Key:


===============================================================================
Database name prefix and suffix
-------------------------------

Please enter database name prefix and suffix.

If prefix is VoltMX and suffix is 1 then database names will be ***************.

Please provide existing Prefix and Suffix if you intend to upgrade to the new
Volt Foundry Database

Database Name Prefix (Default: ): Tes_

Database Name Suffix (Default: ): _t


===============================================================================
Important Information
---------------------

Please read before continuing:

To use Volt Foundry with WebLogic Server in combination with MySQL database,
place the MySQL connector jar (mysql-connector-java-8.x.x.jar) in the
WebLogic Server.

Perform the following steps to complete pre-requisites before continuing with
installation :-

1. Copy the mysql-connector-java-8.x.x.jar from your Volt Foundry
Installation folder - /home/foundry/VoltFoundryInstaller-GA-9.5.15.0
location.
2. Paste the mysql-connector-java-8.x.x.jar into the &lt;WL_HOME&gt;/server/lib
folder
3. Go to the &lt;WL_HOME&gt;/user_projects/domains/base_domain/bin and edit the
startWeblogic script file.
- For Windows: startWeblogic.cmd
- For Linux: startWeblogic.sh
4. Prepend your JAR file to the SAVE_CLASSPATH environment variable.
For Example
        Windows: set SAVE_CLASSPATH=%WL_HOME%/server/lib/mysql-connector-java-8.x.x.
jar;%CLASSPATH%
        Linux: SAVE_CLASSPATH="${WL_HOME}/server/lib/mysql-connector-java-8.x.x.
jar:${CLASSPATH}"
5. Restart the server.

PRESS &lt;ENTER&gt; TO CONTINUE:


Note: &lt;WL_HOME&gt; is the folder where WebLogic is installed.


IMPORTANT INFORMATION COMPLETE. PRESS &lt;ENTER&gt; TO CONTINUE:


</code></pre>
    <ol>
        <li>
            Enter the following details:
            <ul>
            <li><b>Database Server IP</b>: Enter the server Hostname/IP to be used to create a database of selected components of Volt Foundry. By default, the server Hostname/IP is set as localhost.</li>
            <li><b>Port</b>: Enter the database port of the MySQL Server. By default, this field is set to 3306 for MySQL.</li>    
            <li><b>Username</b>: Enter the user name used while creating the database user - for example, dbclient.</li>
            </ul>
        </li>    
        <li>Provide a password and press Enter.
            <ul>
            <li>If the database connection fails, the following error message displays.
                <pre><code>=====================================
Database Connection Failed
--------------------------
Database connection failed.

For the following reasons: Communications link failure

The last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.

PRESS &lt;ENTER&gt; TO ACCEPT THE FOLLOWING (OK):
</code></pre>
        </li>
        <li>
        If the database server not compatible, the following error message displays:
        <pre><code>
=====================================
Incompatible Database Server Version
------------------------------------
Minimum requirement for MySQL database server is 5.7.

PRESS &lt;ENTER&gt; TO ACCEPT THE FOLLOWING (OK):
</code></pre>
        </li>
    </li>
    </ol>
  </li>
  <li>In the Database Choice if you select 2, the Oracle Database Details appear.
  <pre><code>
===============================================================================
Oracle Database Details
-----------------------

Please enter Oracle database server details.

Database Server Hostname/IP (Default: localhost): foundrytest2.fnxlabs.com

Port (Default: xxxx ):   xxxxxxxxxxxxxx

Service ID / Service Name (Default: ): xxxxxxxxxxxxxx

System Username (Default: ): xxxxxxxxxxxxxx




===============================================================================
Password for Database User
--------------------------


Please enter the password:



===============================================================================
Encrypted Rotational Key for Database User
------------------------------------------


Please enter the Encrypted Rotational Key:



===============================================================================
Tablespace Choice
-----------------

Please select the Tablespace type

  ->1- Default Tablespace
    2- User Defined Tablespace

ENTER THE NUMBER FOR YOUR CHOICE, OR PRESS &lt;ENTER&gt; TO ACCEPT THE DEFAULT:




===============================================================================
Database name prefix and suffix
-------------------------------

Please enter database name prefix and suffix.

If prefix is xxxx and suffix is 1 then database names will be xxxxxxxxxxxxxx.

Please provide existing Prefix and Suffix if you intend to upgrade to the new
Volt Foundry Database

Database Name Prefix (Default: ): Tes_

Database Name Suffix (Default: ): _t




===============================================================================
Important Information
---------------------

Please read before continuing:

To use Volt Foundry with WebLogic Server in combination with Oracle database,
place the Oracle connector jar (ojdbc11.jar) in the WebLogic Server.

Perform the following steps to complete pre-requisites before continuing with
installation :-

1. Copy the ojdbc11.jar from your Volt Foundry Installation folder -
/home/foundry/VoltFoundryInstaller-GA-9.5.15.0 location.
2. Paste the ojdbc11.jar into the &lt;WL_HOME&gt;/server/lib folder
3. Go to the &lt;WL_HOME&gt;/user_projects/domains/base_domain/bin and edit the
startWeblogic script file.
- For Windows: startWeblogic.cmd
- For Linux: startWeblogic.sh
4. Prepend your JAR file to the SAVE_CLASSPATH environment variable.
For Example
Windows: set SAVE_CLASSPATH=%WL_HOME%/server/lib/ojdbc11.jar;%CLASSPATH%
Linux: SAVE_CLASSPATH="${WL_HOME}/server/lib/ojdbc11.jar:${CLASSPATH}"
5. Restart the server.

Note: &lt;WL_HOME&gt; is the folder where WebLogic is installed.


IMPORTANT INFORMATION COMPLETE. PRESS &lt;ENTER&gt; TO CONTINUE:
  </code></pre>
  <ol>
       <li> Enter the following details:
            <ul>
                <li><b>Database Server IP</b>: Enter the server Hostname/IP to be used to create a database of selected components of Volt Foundry. By default, the server Hostname/IP is set as localhost.</li>                
                <li><b>Port</b>: Enter the database port of the Oracle Server. By default, this field is set to 1521 for oracle.</li>                
                <li><b>Service ID/ Service Name</b>: Enter Oracle service ID or service name. Service ID is unique alias given to an instance name of Oracle DB.</li>                
                <li><b>System Username</b>: Enter the user name used while creating the database user.</li>
            </ul>
       </li> 
       <li>Press Enter. The installer prompts for Enter Password for Database User details as follows:
       <pre><code>
==============================
Enter Password for Database User
-----------------------------------------
Please enter the password:
</code></pre>
       </li>
       <li>Provide a password and press Enter.
            <ul>
                <li>
                    If the database connection fails, the following error message displays.
                    <pre><code>
=====================================
Database Connection Failed
--------------------------
Database connection failed.

For the following reasons: Communications link failure

The last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.

PRESS &lt;ENTER&gt; TO ACCEPT THE FOLLOWING (OK):
</code></pre>
                </li>                
                <li>If the database server not compatible, the following error message displays
                <pre><code>
=====================================
Incompatible Database Server Version
------------------------------------


PRESS &lt;ENTER&gt; TO ACCEPT THE FOLLOWING (OK):
</code></pre>
                </li>                
            </ul>
       </li>
      <li> Select the tablespace for Oracle database:
        <blockquote><em><b>Note: </b></em> If tablespaces were already created, the DBA must grant quota (permissions) on these tablespaces to installer with admin option.The DBA also must include grant quota on the schemas from installer login.</blockquote>
                    <pre><code>
==============================
Tablespace Choice
-----------------------------------------

Please select the Table Space type

->1- Default Tablespace
 2- User Defined Tablespace

ENTER THE NUMBER FOR YOUR CHOICE, OR PRESS &lt;ENTER&gt; TO ACCEPT THE DEFAULT::
</code></pre>
            <ul> 
                <li><b>Default Tablespace</b>: If selected, the database schema and SQL scripts migration happens automatically to the default tablespace - for example, USERS</li>                
                <li><b>User Defined Tablespace</b>: If selected, enter the tablespaces for the following:
                <pre><code>
==============================
Ask for the Tablespaces
-----------------------------------------

Please enter the names of the Tablespaces

Data Tablespace (Default: ): xxxxxxxxxxxxxx
Index Tablespace (Default: ):
LOB Table Space (Default: ):
</code></pre>
                </li>
                <li>
                <b>Data Tablespace</b>:
Enter the name for Data tablespace.
This is a mandatory field. If the Data tablespace field is empty, the installers displays the error message:<pre><code>
==============================
TableSpace details not provided
---------------------------------------
Please provide a valid Tablespace for at least the Data field for the installation wizard to proceed further. PRESS &lt;ENTER&gt; TO ACCEPT THE FOLLOWING (OK):
</code></pre>
If the Data tablespace (for example, Volt123) does not exist, the installers displays the error message:<pre><code>
==============================
Invalid TableSpace Details
---------------------------------------
Installation wizard is not able to access the Volt123 TableSpace provided with give credentials. Please verify the details again. PRESS &lt;ENTER&gt; TO ACCEPT THE FOLLOWING (OK):
</code></pre>
                </li>                
                <li><b>Index Tablespace</b>: Enter the name for Index tablespace.
If input for Index Tablespace is not provided, then the value will be set to the provided Datatable space value.</li>                             
                <li><b>LOB Tablespace</b>: Enter the name for LOB tablespace.
If input for LOB Tablespace is not provided, then the value will be set to the provided Datatable space value.</li>          
            </ul>
      </li>       
  </ol>
  </li>
  
  
  
  <li>In the Database Choice if you select 3, the SQL Server Database Details appear.
       <pre><code>===============================================================================
SQL Server Database Details
---------------------------

Please enter SQL Server database server details.

Database Server Hostname/IP (Default: localhost): foundrytest20.fnxlabs.com

Port (Default: xxxx):

Username (Default: ): xxxxxxxxxxxxxx

Instance Name (Optional) (Default: ): xxxxxxxxxxxxxx

</code></pre> 
    <ol>
    <li>Enter the following details: <br>
        1. <b>Database Server IP</b>: Enter the server Hostname/IP to be used to create a database of selected components of Volt Foundry. By default, the server Hostname/IP is set as localhost.<br>
        2. <b>Port</b>: Enter the database port of the SQL Server. By default, this field is set to 1433 for SQL.<br>
        3. <b>Username</b>: Enter the user name used while creating the database user - for example, dbclient.<br>
        4. <b>Instance Name (Optional)</b>: Enter the instance name for the database. This information is optional.
    </li>
    <li>Press Enter. The installer prompts for Enter Password for Database User details as follows:
    <pre><code>
 ===============================================================================
 Password for Database User
 --------------------------

 Please enter the password:  


 ===============================================================================
 Encrypted Rotational Key for Database User
 ------------------------------------------


 Please enter the Encrypted Rotational Key:
</code></pre>
</li>    
    <li>Provide a password and press Enter.
    If the database connection fails, the following error message displays.
    <pre><code>
=====================================
Database Connection Failed
--------------------------
Database connection failed.

For the following reasons: Communications link failure

The last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.

PRESS &lt;ENTER&gt; TO ACCEPT THE FOLLOWING (OK):
</code></pre>
If the database server not compatible, the following error message displays:
<pre><code>
=====================================
Incompatible Database Server Version
------------------------------------


PRESS &lt;ENTER&gt; TO ACCEPT THE FOLLOWING (OK):
</code></pre>
    </li>    
    </ol>
  </li>
  </ul> 
</li>

<li>Press Enter. The installation prompts for Database name prefix and suffix details as follows:
<pre><code>
===============================================================================
Database name prefix and suffix
-------------------------------

Please enter database name prefix and suffix.

If prefix is VoltMX and suffix is 1 then database names will be VoltMXXXXXX1.

Please provide existing Prefix and Suffix if you intend to upgrade to the new
Volt Foundry Database

Database Name Prefix (Default: ): Tes_

Database Name Suffix (Default: ): _t
</code></pre>
- Database Name Prefix: Enter valid prefix databases - for example, VoltMX. <br>
- Database Name Suffix: Enter valid suffix for all databases - for example, 1.
</li>
<li>
Enter the prefix and suffix for the database and press Enter. The Important Information details appear:
<pre><code>
===============================================================================
Important Information
---------------------

Please read before continuing:

To use Volt Foundry with WebLogic Server in combination with MS SQL database,
place the SQL connector jar (mssql-jdbc-12.2.0.jre11.jar) in the WebLogic
Server.

Perform the following steps to complete pre-requisites before continuing with
installation :-

1. Copy the mssql-jdbc-12.2.0.jre11.jar from your Volt Foundry Installation
folder - /home/foundry/VoltFoundryInstaller-GA-9.5.15.0 location.
2. Paste the mssql-jdbc-12.2.0.jre11.jar into the &lt;WL_HOME&gt;/server/lib folder
3. Go to the &lt;WL_HOME&gt;/user_projects/domains/base_domain/bin and edit the
startWeblogic script file.
- For Windows: startWeblogic.cmd
- For Linux: startWeblogic.sh
4. Prepend your JAR file to the SAVE_CLASSPATH environment variable.
For Example
        Windows: set SAVE_CLASSPATH=%WL_HOME%/server/lib/mssql-jdbc-12.2.0.jre11.
jar;%CLASSPATH%
        Linux: SAVE_CLASSPATH="${WL_HOME}/server/lib/mssql-jdbc-12.2.0.jre11.
jar:${CLASSPATH}"
5. If Windows Integrated Auth is enabled, the sqljdbc_auth.dll should be
copied to the folder at
&lt;WL_HOME&gt;/user_projects/domains/base_domain/bin

PRESS &lt;ENTER&gt; TO CONTINUE:

6. Restart the server.

Note: &lt;WL_HOME&gt; is the folder where WebLogic is installed.


IMPORTANT INFORMATION COMPLETE. PRESS &lt;ENTER&gt; TO CONTINUE:
</code></pre>
</li>
<li>Press Enter. The Volt Foundry server startup details appear.
<pre><code>
=====================================  
Volt Foundry server startup details  
-----------------------------------  

    Do you want to start the Volt Foundry server after successful installation of Volt Foundry  
    ->1- Yes  
      2- No  

    ENTER THE NUMBER FOR YOUR CHOICE, OR PRESS &lt;ENTER&gt; TO ACCEPT THE DEFAULT::
</code></pre>
</li>
<li>To start the server automatically after the successful installation of Volt MX, press Enter.
<blockquote><em><b>Note:</b></em> To start the server manually after the successful installation of Volt MX, refer to <a href="../../../Foundry/voltmx_foundry_manual_install_guide/Content/Starting_VoltMX_Foundry_Console.html">Starting Volt MX Console.</a></blockquote>
The Pre-Installation Summary details appear.
<pre><code>
===============================================================================
Pre-Installation Summary
------------------------

Please review the following before continuing:

Installation Type:
    New Installation

Install Components:
    Console, Developer Portal, Identity Services, Integration Services and Engagement Services

Install Folder:
    /home/foundry/VoltFoundryInstaller-GA-9.5.15.0

Application Server:
    WebLogic 14c (14.1.1.0)

Application Server Details:
    Hostname/IP Address: xxxxxxxxxxxxxx, Port: xxxx, User: xxxxxx

Database Choice:
    SQL Server xxxx

Database Details:
    Hostname/IP Address: xxxxxxxxxxx, User: xxxxxx, Instance Name: xxxxxxxxx, Port: xxxx

Database Names:
    xxxxxxxx, xxxxxxxx, xxxxxxxx, xxxxxxxx, xxxxxxxx and xxxxxxxx

PRESS &lt;ENTER&gt; TO CONTINUE:
</code></pre>
</li>

<li>Type the details and press Enter. The Ready To Install details appear.
<pre><code>
==============================
Ready To Install
-----------------------------------------

Installer is now ready to install Volt Foundry Console onto your system at the following location:

/home/user1/VoltFoundry

PRESS <ENTER\> TO INSTALL:
</code></pre>

</li>
<li>Press Enter to continue the installation.
<pre><code>
==============================
Installing...
-----------------------------------------

[==================|==================|==================]
[------------------|------------------|------------------]
</code></pre>
</li>
<li>Press Enter. The Installation Complete details appear.
<pre><code>
==============================
Installation Complete
-----------------------------------------

Congratulations. Volt Foundry has been successfully installed to:

/home/user1/VoltFoundry

Console URL: https://00.00.00.00:port/mfconsole
Identity Service URL: https://00.00.00.00:port/authService
Integration Service URL: https://00.00.00.00:port/admin
Engagement Services URL: http://00.00.00.000:port/kpns

PRESS <ENTER\> TO EXIT THE INSTALLER: [xxxxxxxxx downloads]$
</code></pre>
</li>
<li>Press Enter to complete the installation. After the installation is completed, the installer creates logs in the install folder.

<blockquote><em><b>Important: </b></em>When you are using a third party tool (for example, PuTTY) for installing Volt MX remotely, if any network connection issues occur at the end of the installation, the installer stops the installation and the installation log is not created.</blockquote>

</li>
</ol>

> **_Note:_** You can now access Volt Foundry Console by using the URLs. For more details, refer to [Accessing Volt Foundry Console - On-premises](../../../Foundry/voltmx_foundry_user_guide/Content/How_to_access_VoltMX_Foundry_Portal_on-Prem.md).  
During installation if you have configured your super administrator account, you can directly [log in to Volt Foundry Console](../../../Foundry/voltmx_foundry_user_guide/Content/How_to_access_VoltMX_Foundry_Portal_on-Prem.md) by using the Console URL.

