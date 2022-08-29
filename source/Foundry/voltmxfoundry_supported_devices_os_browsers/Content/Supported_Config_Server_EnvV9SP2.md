                            


Supported Configurations – Server Environment - V9 SP2
------------------------------------------------------

The installation of the Volt MX Foundry software supports the following versions of Operating Systems, Java Application Servers, Java Runtime Environment (JRE), and Databases in any combinations that is valid/supported by the individual components. These combinations are supported on a server environment for deployment in production environments.

> **_Note:_** The **Supported Configurations** indicate that Volt MX may not have tested the specific version of a particular platform (JDK, an application server, a database, and an operating system), but still provides support to the platform. In case of any issue on the supported list of platforms, Volt MX provides support to resolve the issue within the appropriate Service-level Agreement (SLA).

### Operating Systems

> **_Note:_** Volt MX Foundry is supported for install on Virtual Machines (VMs) for all the following supported Operating Systems.

#### **Windows Server**

*   Windows 2019
*   Windows Server 2016 Datacenter
*   Windows Server 2012 R2
*   Windows Server 2012

#### Linux

*   CentOS
    *   CentOS 8
    *   CentOS 7.6
    *   CentOS 7.5
*   Red Hat Enterprise Linux (RHEL)
    
    *   RHEL 8
    *   RHEL 7.7 (Maipo)
    *   RHEL 7.6
    *   RHEL 7.8
*   Ubuntu 19.04
*   Ubuntu 18.04.2 LTS

#### AIX

*   AIX 7.1.0.0  is supported only with WebSphere and IBM Java.

### Application Servers

#### **Tomcat**

*   Tomcat 9.0.45

#### JBoss Enterprise Application Platform (EAP)

*   EAP 7.2

> **_Important:_**  If you are running JBoss in Domain node (multi node) for a production setup, get the appropriate licenses from Red Hat.

### Database Servers

#### MySQL

*   MySQL 5.6
*   MySQL 5.7
*   MySQL Database HA ( active/passive ) Cluster

#### Oracle

*   Oracle 19c
*   Oracle 18c (18.3)
*   Oracle 12c release 2 (12.2.0.1.0)

#### Microsoft SQL Server

*   SQL Server 2017
*   SQL Server 2016 SP1 and later
*   Azure SQL

#### MariaDB

*   MariaDB 10.3.13
*   MariaDB 10.2

> **_Note:_** A Database user used for install should be granted all required permissions as specified by the install guide.

### Java Runtime Environment

*   Oracle JRE 11
*   OpenJDK 11


Supported Configurations – Development Environment - V9 SP2
-----------------------------------------------------------

For development environments, in addition to the versions of Operating Systems, Java Application Servers, Java Runtime Environment (JRE), and Databases in the table in the [Supported Configurations – Server Environment](Supported_Config_Server_EnvV9.md#supported-configurations-server-environment-v9), we support the following additional platforms:

### Operating Systems

#### Windows

*   Windows 10
*   Windows 8.1

### Containers

*   Docker (for on-premises Development use only) is supported for the following:
    
    <table style="border-left-style: solid;border-left-width: 1.5pt;border-left-color: #ccc;border-right-style: solid;border-right-width: 1.5pt;border-right-color: #ccc;border-top-style: solid;border-top-width: 1.5pt;border-top-color: #ccc;border-bottom-style: solid;border-bottom-width: 1.5pt;border-bottom-color: #ccc;margin-left: 0;margin-right: auto;mc-table-style: url('Resources/Stylesheets/Basic.css');width: 337px;" class="TableStyle_Basic" cellspacing="0"><colgroup><col style="width: 187px;"></colgroup><tbody><tr><td class="TableStyle_Basic_Body_0_0_RowSep_ColEnd" style="background-color: #a9a9a9;font-weight: bold;">Operating Systems</td></tr><tr><td class="TableStyle_Basic_Body_0_0_RowSep_ColEnd">WindowsLinux CentOSMac (versions El Capitan and Mojave)</td></tr><tr><td class="TableStyle_Basic_Body_0_0_RowSep_ColEnd" style="background-color: #a9a9a9;"><b>Databases</b></td></tr><tr><td class="TableStyle_Basic_Body_0_0_RowEnd_ColEnd">MySQLMicrosoft SQL Server Oracle</td></tr></tbody></table>
    
    For more details regarding this solution, refer to [Installing Volt MX Foundry using Single Container Solution](../../../Foundry/voltmxfoundry_single_container/Content/Introduction_Single.md).
    
*   Kubernetes Solution is supported for the following:
    
    <table style="border-left-style: solid;border-left-width: 1.5pt;border-left-color: #ccc;border-right-style: solid;border-right-width: 1.5pt;border-right-color: #ccc;border-top-style: solid;border-top-width: 1.5pt;border-top-color: #ccc;border-bottom-style: solid;border-bottom-width: 1.5pt;border-bottom-color: #ccc;margin-left: 0;margin-right: auto;mc-table-style: url('Resources/Stylesheets/Basic.css');width: 337px;" class="TableStyle_Basic" cellspacing="0"><colgroup><col style="width: 187px;"></colgroup><tbody><tr><td class="TableStyle_Basic_Body_0_0_RowSep_ColEnd" style="background-color: #a9a9a9;font-weight: bold;">Operating Systems</td></tr><tr><td class="TableStyle_Basic_Body_0_0_RowSep_ColEnd">Linux CentOS</td></tr><tr><td class="TableStyle_Basic_Body_0_0_RowSep_ColEnd" style="background-color: #a9a9a9;"><b>Databases</b></td></tr><tr><td class="TableStyle_Basic_Body_0_0_RowEnd_ColEnd">MySQLMicrosoft SQL Server Oracle</td></tr></tbody></table>
    

For more details regarding this solution, refer to [Installing Volt MX Foundry using Container Cluster Solution](../../../Foundry/voltmxfoundry_containers_solution_on-prem/Content/Introduction.md).

### Azure Cloud

*   MS Azure Cloud Solution is supported for the following:
    
    <table style="border-left-style: solid;border-left-width: 1.5pt;border-left-color: #ccc;border-right-style: solid;border-right-width: 1.5pt;border-right-color: #ccc;border-top-style: solid;border-top-width: 1.5pt;border-top-color: #ccc;border-bottom-style: solid;border-bottom-width: 1.5pt;border-bottom-color: #ccc;margin-left: 0;margin-right: auto;mc-table-style: url('Resources/Stylesheets/Basic.css');width: 337px;" class="TableStyle_Basic" cellspacing="0"><colgroup><col style="width: 187px;"></colgroup><tbody><tr><td class="TableStyle_Basic_Body_0_0_RowSep_ColEnd" style="background-color: #a9a9a9;font-weight: bold;">Operating System (for running the installation script)</td></tr><tr><td class="TableStyle_Basic_Body_0_0_RowSep_ColEnd">Ubuntu 16.04 or 18.04</td></tr><tr><td class="TableStyle_Basic_Body_0_0_RowSep_ColEnd" style="background-color: #a9a9a9;"><b>Databases</b></td></tr><tr><td class="TableStyle_Basic_Body_0_0_RowEnd_ColEnd">MySQLMicrosoft Azure SQL Server</td></tr></tbody></table>
    

For more details regarding this solution, refer to [Installation Guide for Volt MX Foundry on Azure Cloud](../../../Foundry/voltmxfoundry_on_azure/Content/Introduction.md).
