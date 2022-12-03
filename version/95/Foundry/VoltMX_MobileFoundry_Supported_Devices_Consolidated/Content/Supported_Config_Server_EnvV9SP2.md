  

Supported Configurations – Server Environment - V9 SP2
------------------------------------------------------

The installation of the VoltMX Foundry software supports the following versions of Operating Systems, Java Application Servers, Java Runtime Environment (JRE), and Databases in any combinations that is valid/supported by the individual components. These combinations are supported on a server environment for deployment in production environments.

The **Supported Configurations** indicate that VoltMX may not have tested the specific version of a particular platform (JDK, an application server, a database, and an operating system), but still provides support to the platform. In case of any issue on the supported list of platforms, VoltMX provides support to resolve the issue within the appropriate Service-level Agreement (SLA).

### Operating Systems

VoltMX Foundry is supported for install on Virtual Machines (VMs) for all the following supported Operating Systems.

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
*   Ubuntu 19.04
*   Ubuntu 18.04.2 LTS

#### AIX

*   AIX 7.1.0.0  is supported only with WebSphere and IBM Java.

### Application Servers

#### **Tomcat**

*   Tomcat 9.0.33

#### JBoss Enterprise Application Platform (EAP)

*   EAP 7.2

 If you are running JBoss in Domain node (multi node) for a production setup, get the appropriate licenses from Red Hat.

#### WebSphere

*   WebSphere Liberty\_Core 19.0.0.12
*   WebSphere Liberty\_Core 20.3

#### WebLogic

*   WebLogic 14c (14.1.1.0)

### Database Servers

Active-Active cluster configuration support is only available for MySQL. The remaining Database type cluster setups are supported only in the Active-Passive configuration.

#### MySQL

*   MySQL 5.7 Active-Active Cluster - Group Replication
*   MySQL 5.7
*   MySQL 5.6
*   MySQL Database HA ( active/passive ) Cluster
*   MySQL 8.0.16

#### Oracle

*   Oracle 19c
*   Oracle 18c (18.3)
*   Oracle 12c release 2 (12.2.0.1.0)

#### Microsoft SQL Server

*   SQL Server 2017
*   SQL Server 2016
*   Azure SQL

#### MariaDB

*   MariaDB 10.3.13
*   MariaDB 10.2

A Database user used for install should be granted all required permissions as specified by the install guide.

### Java Runtime Environment

*   Oracle JRE 11
*   OpenJDK 11
