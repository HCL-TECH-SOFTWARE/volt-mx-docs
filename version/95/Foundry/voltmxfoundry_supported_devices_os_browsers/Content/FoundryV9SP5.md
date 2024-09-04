                            


Supported Configurations – Server Environment - V9 SP5
------------------------------------------------------

The installation of the Volt Foundry software supports the following versions of Operating Systems, Java Application Servers, Java Runtime Environment (JRE), and Databases in any combinations that is valid/supported by the individual components. These combinations are supported on a server environment for deployment in production environments.

> **_Note:_** The **Supported Configurations** indicate that Volt MX may not have tested the specific version of a particular platform (JDK, an application server, a database, and an operating system), but still provides support to the platform. In case of any issue on the supported list of platforms, Volt MX provides support to resolve the issue within the appropriate Service-level Agreement (SLA).

### Operating Systems

> **_Note:_** Volt Foundry is supported for install on Virtual Machines (VMs) for all the following supported Operating Systems.


#### **Windows Server**

*   Windows Server 2022
*   Windows Server 2019
*   Windows Server 2016 Datacenter
*   Windows Server 2012 R2
*   Windows Server 2012

#### Linux

*   Red Hat Enterprise Linux (RHEL)
    
    *   RHEL 9
    *   RHEL 8.5
    *   RHEL 7.8
    *   RHEL 7.7 (Maipo)
    *   RHEL 7.6

*   Ubuntu

    *   Ubuntu 22.04
    *   Ubuntu 22
    *   Ubuntu 20

#### AIX

*   AIX 7.2.0.0  is supported only with WebSphere and IBM Java.

### Application Servers


#### **Tomcat**

*   Tomcat 9.0.62
    *   Tomcat 9.0.45 prior to HCL Volt MX version 9.2.1.9


#### JBoss Enterprise Application Platform (EAP)

*   EAP 7.4
*   EAP 7.3

> **_Important:_**  If you are running JBoss in Domain node (multi node) for a production setup, get the appropriate licenses from Red Hat.


#### **WebSphereLiberty**

*   WebSphereLiberty ND 22.0.


### Database Servers

#### MySQL

*   MySQL 8.0
*   MySQL Database HA ( active/passive ) Cluster


#### Oracle

*   Oracle 19c
*   Oracle 18c (18.3)

#### Microsoft SQL Server

*   SQL Server 2022
*   SQL Server 2019
*   SQL Server 2017
*   Azure SQL


#### MariaDB

*   MariaDB 10.11.4

> **_Note:_** A Database user used for install should be granted all required permissions as specified by the install guide.

### Java Runtime Environment

*   Oracle JRE 11
*   OpenJDK 11


Supported Configurations – Development Environment - V9 SP5
-----------------------------------------------------------

For development environments, in addition to the versions of Operating Systems, Java Application Servers, Java Runtime Environment (JRE), and Databases in the table in the [Supported Configurations – Server Environment](Supported_Config_Server_EnvV9.md#supported-configurations-server-environment-v9), we support the following additional platforms:

### Operating Systems

#### Windows

*   Windows 10


### Foundry Container Supported Config Matrix 

#### App servers 

* Tomcat 9.0.62 

#### DB’s 

* MySQL 8.0.x 
* Oracle 19c 
* MSSQL 2017/2019/2022

#### Platforms 

* Openshift 
* Amazon eks 
* Azure aks 
* K8s onpremise 
* GCP 
* Docker single container (supported on mac, linux and windows) 

### Kubernetes 

* 1.27.6

### Foundry container installation modes 

Foundry container can be installed in following ways 

* Script based 
* Helmchart ( supported from 9.5) 

Below table tells what mode of installation is supported on what platforms 

<html>
<head>
<style>
table {
}
</style>
</head>
<body>
<table>
  <tr>
    <th>Platforms</th>
    <th>Script </th>
    <th>HelmChart</th>
  </tr>
  <tr>
    <td>GCP</td>
    <td>No</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Azure aks</td>
    <td>No</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Openshift</td>
    <td>Yes</td>
    <td>Yes (Passthrough not supported)</td>
  </tr>
  <tr>
    <td>Amazon eks</td>
    <td>Yes</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>K8s onpremise</td>
    <td>Yes</td>
    <td>Yes (cluster should be preconfigured)</td>
  </tr>
  <tr>
    <td>Docker single container</td>
    <td>Yes</td>
    <td>No</td>
  </tr>
</table>
</body>
</html>
