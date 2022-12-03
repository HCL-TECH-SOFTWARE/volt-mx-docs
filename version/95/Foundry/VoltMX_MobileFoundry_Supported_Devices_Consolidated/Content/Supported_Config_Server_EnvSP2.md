  

Supported Configurations – Server Environment - V8 SP2
------------------------------------------------------

The **Supported Configurations** indicate that VoltMX may not have tested the specific version of a particular platform (JDK, an application server, a database, and an operating system), but still provides support to the platform. In case of any issue on the supported list of platforms, VoltMX provides support to resolve the issue within the appropriate Service-level Agreement (SLA).

The installation of the VoltMX Foundry software supports the following versions of Operating Systems, Java Application Servers, Java Runtime Environment (JRE), and Databases in any combinations that is valid/supported by the individual components. These combinations are supported on a server environment for deployment in production environments.

VoltMX Foundry is supported for install on Virtual Machines (VMs) for all the following supported Operating Systems.

### Operating Systems

#### **Windows Server**

*   Windows Server 2016
*   Windows Server 2012 R2
*   Windows Server 2012

#### Linux

*   CentOS
    *   CentOS 7
    *   CentOS 6.6
    *   CentOS 6.5
*   Red Hat Enterprise Linux (RHEL)
    
    *   RHEL 7
    *   RHEL 6
*   Ubuntu 14.04
*   Amazon Linux

#### AIX

*   AIX 7.1.0.0  is supported only with WebSphere and IBM Java.

### Application Servers

#### **Tomcat**

*   Tomcat 8.5.28

#### JBoss Enterprise Application Platform (EAP)

*   EAP 7.0
    
*   EAP 6.4

 If you are running JBoss in Domain node (multi node) for a production setup, get the appropriate licenses from Red Hat.

#### WebLogic

*   WebLogic 12.2.1.2.0
*   WebLogic 12.2.1.3.0
    
    WebLogic 12.1.2 and WebLogic 12.2.1 support different versions of basic Java framework like Jersey. For more details, refer [https://docs.oracle.com/middleware/1221/wls/NOTES/whatsnew.html#NOTES599](https://docs.oracle.com/middleware/1221/wls/NOTES/whatsnew.md#NOTES599).  
    Since WebLogic 12.1.2 is end of life, VoltMX chooses to support WebLogic 12.2.1.2+ only.
    

#### WebSphere

*   WebSphere 9.0 (9.0.7)
*   WebSphere 8.5.5.13
*   WebSphere 8.5.5.11
    
    WebSphere 8.5.5.12 is not supported due to a defect in WebSphere. For more details, refer [CLASSCASTEXCEPTIONS WHILE DOING A NAMING LOOKUP FOR BEANMANGER in WebSphere](http://www-01.ibm.com/support/docview.wss?uid=swg1PI85892&myns=swgws&mynp=OCSSEQTP&mync=R&cm_sp=swgws-_-OCSSEQTP-_-R).
    
    **SSL certificate**: To use your existing SSL certificate, map the SSL certificate to the domain name you want to use.
    

### Database Servers

#### MySQL

*   MySQL 5.7
*   MySQL 5.6

#### Oracle

*   Oracle: 12c  (12.1.0.2.0)
*   Oracle: 11g  (11.2.0.4)

#### Microsoft SQL Server

*   SQL Server 2016
*   SQL Server 2014
*   Azure SQL

#### DB2

*   IBM DB2 11.1
*   IBM DB2 10.5

#### MariaDB

*   MariaDB 10.2
*   MariaDB 10.1

A Database user used for install should be granted all required permissions as specified by the install guide.

Increase your database connection limit to use the same database for all components - such as VoltMX Foundry Console, VoltMX Identity Service, and VoltMX Integration Service.  
  
For example:  
To increase MySQL database connection limit, execute the following command:  
SET global max\_connections = 350;

MariaDB support is available for Tomcat and JBoss only.  

### Java Runtime Environment

*   Oracle JRE 1.8
*   IBM Java 1.8 (for WebSphere only)
    
    Java 1.7 is not supported from V8 Release onwards.
