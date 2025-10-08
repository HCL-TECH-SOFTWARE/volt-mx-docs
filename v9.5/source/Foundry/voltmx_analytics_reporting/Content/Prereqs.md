                          

You are here: Software Requirements 

Prerequisites
=============

The following section explain the software and hardware required to install JasperReports Server.

Software Requirements
---------------------

<b>Software Requirements for JasperReports Server V 8.2.0</b>

<table>
<tr>
<th>Purpose</th>
<th>Software Requirement</th>
</tr>
<tr>
<td>Installer</td>
<td><b>Windows:</b></td>
</tr>
<tr>
<td></td>
<td>-&gt; TIB_js-jrs_8.2.0_win_x86_64.exe</td>
</tr>
<tr>
<td></td>
<td><b>Ubuntu Linux:</b></td>
</tr>
<tr>
<td></td>
<td>-&gt; TIB_js-jrs_8.2.0_linux_x86_64.run</td>
</tr>
<tr>
<td></td>
<td>Jaspersoft - Professional edition download from
here:<br><a href="https://www.tibco.com/downloads">
https://edelivery.tibco.com/storefront/index.ep</a>
</td>
</tr>
<tr>
<td></td>
<td>After you install JasperReports Server 8.2.0, you
must apply the<br>
hotfix_JRSPro8.2.0_cumulative_20240822_0330
hotfix to support the security fixes</td>
</tr>
<tr>
<td></td>
<td>Follow readme.txt file under
JasperReports-Server-v8-2-0-cumulative-
hotfix-20240822_0330</td>
</tr>
<tr>
<td></td>
<td>
<ul>
<li>
    JasperReports-Server-v8-2-0-cumulative-hotfix available here:<br>
    <a href="https://support.tibco.com/wolken-support/file_structure">hthttps://support.tibco.com/wolken-support/file_structure</a>
</li>
</ul>
</td >
</tr>
</table>



Software Requirements for JasperReports Server V 7.x
-----------------------------------------------------
<table>
<tr>
<th>Purpose</th>
<th>Software Requirement</th>
</tr>
<tr>
<td>Installer</td>
<td><b>Windows:</b></td>
</tr>
<tr>
<td></td>
<td><ul><li>jasperreports-server-7.1-windows-x64-installer.exe</li></ul></td>
</tr>
<tr>
<td></td>
<td><b>Linux:</b></td>
</tr>
<tr>
<td></td>
<td><ul><li>jasperreports-server-7.1-linux-x64-installer.run</li></ul></td>
</tr>
</table>

> **_Note:_**  HCL VoltMX Foundry Products support only JasperReports Server Professional or Jasper Reports Server Enterprise edition (AWS Cloud) and not the community edition.  

> **_Important:_** Make sure to download TIBCO JasperReports Server version 8.2.0 and install it before configuring user attributes in How to Set Up the Jasper Reports Server. <br>
The license key for JasperReports Server for On-premises, you must procure the license from TIBCO. 

> **_Note:_**  For JasperReports Server Installation Documentation, refer to the following:<br><br>
[https://docs.tibco.com/products/tibco-jasperreports-server-8-2-0](https://docs.tibco.com/)<br><br>
[http://community.jaspersoft.com/documentation/tibco-jasperreports-server-installation-guide/v60/introduction](http://community.jaspersoft.com/documentation/tibco-jasperreports-server-installation-guide/v60/introduction)<br><br>[http://community.jaspersoft.com/documentation/tibco-jasperreports-server-installation-guide/v60/jasperreports-server-distributions](http://community.jaspersoft.com/documentation/tibco-jasperreports-server-installation-guide/v60/jasperreports-server-distributions)<br><br>[https://community.jaspersoft.com/documentation/tibco-jasperreports-server-community-edition-release-notes/v71/release-distributions](https://community.jaspersoft.com/documentation/tibco-jasperreports-server-community-edition-release-notes/v71/release-distributions)


Supported Databases and Drivers
-------------------------------

  
| Database Version | Database Connectivity Drivers |
| --- | --- |
| MySQL 5.7.X and 8.X | mysql-connector-java-8.x.x <br> Click the below link to download the .jar:<br>[https://downloads.mysql.com/archives/c-j/](https://downloads.mysql.com/archives/c-j/) |
| | mysql-connector-j-8.x.x.jar <br> (For Mysql server  8.0.33 DataBase) |
| | **In the case of MySQL 8.x Database with JasperReports Server V 8.2.0, ensure that you must delete the mariadb-java-client-2.5.3.jar file if it exist in your system.** |
| |For example: &lt;jasperinstall-dir&gt;/apache-tomcat/lib/mariadb-java-client-2.5.3.jar|
| Microsoft SQL Server 2012, 2014 and 2019 | mssql-jdbc-7.2.2.jre8.jar <br> Click the below link to download the .jar: <br> [https://msdn.microsoft.com/en-us/sqlserver/aa937724.aspx](https://msdn.microsoft.com/en-us/sqlserver/aa937724.aspx) |
| Oracle 11g, 12c | ojdbc8.jar <br> Click the below link to download the .jar: <br>[https://www.oracle.com/database/technologies/appdev/jdbc-downloads.html](https://www.oracle.com/database/technologies/appdev/jdbc-downloads.html) |
| IBM - DB2 10.1 | db2jcc4.jar<br>Click the below link to download the .jar:<br>[http://www-01.ibm.com/support/docview.wss?uid=swg21363866](http://www-01.ibm.com/support/docview.wss?uid=swg21363866) |

Hardware Requirements
---------------------

  
| Supported OS | Resource | Footprint | Minimum | Recommended |
| --- | --- | --- | --- | --- |
| Windows -  Windows 2008 -  Windows 7 -  Windows 8 | Disk | 600 MB | 10 GB free | 40 GB+ |
|^^| RAM |   | 512 MB | 1 GB + |
|^^| Processor |   | 1 GHz (single Pentium) | 1.5 GHz + (multi-core Pentium) |
| Linux  -  Red Hat Enterprise Linux 5, 6 -  Novell SUSE Linux Enterprise 10, 11 -  Debian 6 -  Ubuntu 10 | Disk | 600 MB | 10 GB free | 40 GB+ |
|^^| RAM |   | 512 MB | 1 GB + |
|^^| Processor |   | 1 GHz (single Pentium) | 1.5 GHz + (multi-core Pentium) |

Supported Foundry Versions
-------------------------

  
| Volt MX Foundry Version | Jasper Reports Server Version |
| --- | --- |
| For V9 and later versions | JRS 8.2.0|

Reports Database
----------------

While installing Volt MX Foundry, the system creates the reports database, `<prefix>mfreports<suffix>`, based on the following choices only:

*   If you select **Console** check box, the system creates the reports database.
*   If you select **Console** and **Integration Service** check boxes, the system creates the reports database.
    
*   If you select **all** (components: Console, Identity Service, and Integration Service) check boxes, the system creates the reports database.
    

For more details, refer to [VoltMX Foundry Installer\_Guide > Installing Volt MX Foundry > Install Components window.](../../../Foundry/voltmx_foundry_windows_install_guide/Content/Installing_VoltMX_Foundry_on_Windows.md)

> **_Note:_**  In the Installing Volt MX Foundry page, scroll down to the **Install Components** window.

A reports database is created in the **VoltMX Foundry Installation > Pre-Installation Summary** window, shown below:


![](Resources/Images/ReportsDB.png)
