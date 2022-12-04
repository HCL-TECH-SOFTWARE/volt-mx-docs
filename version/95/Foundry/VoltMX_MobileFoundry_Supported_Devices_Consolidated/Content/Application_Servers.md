   

VoltMX Server Software Requirements
=================================

VoltMX Server supports the following application servers:

 
| Application Servers | Versions Supported |
| --- | --- |
| Tomcat | 
*   6.0.29
*   7.0.52  
    

 |
| WebLogic | 

*   10.x
*   12c
*   12.1.3  
    

 |
| WebSphere | 

*   6.x
*   7.x
*   8.0
*   8.5
*   8.5.5  
    

 |
| JBoss | 

*   5.1
*   6.2
*   6.4

 |

Application server combinations for respective OS and database for Release 6.5:

    
| Application Server Stack | Java Runtime Environment | Supported OS | VoltMX Server Build | Supported DBs |
| --- | --- | --- | --- | --- |
| 
Tomcat

• 6.0.29  
• 7.0.52

With

JBoss 6.2  
(for Reporting)

 | 

• JDK 1.6.0\_45  
(for Tomcat 6.0.29)

• JDK 1.7.0.45  
(for Tomcat 7.0.52)

• JDK 1.8

 | 

Linux

• CentOS 5.4

• openSUSE 11.3

• Red Hat Enterprise Linux 5.8 / 6.5

 | VoltMX Server with Memcached | 

• MySQL 5.1 and above

• Oracle 10g, 11g Standard Editions, Oracle 12c

• SQL Server 2008 / 2012

 |
| 

• JDK 1.7.0.45

• JDK 1.8

 | 

Windows Server 2008

Windows Server 2012

 | VoltMX Server without Memcached |
| 

JBoss 6.2

 | 

•JDK 1.6.0\_45    or

    JDK 1.7.0\_45

 | 

Linux

• CentOS 5.4

• openSUSE 11.3

• Red Hat Enterprise Linux 5.8 / 6.5

Windows

• Windows Server 2008

• Windows Server 2012

 | VoltMX Server with Memcached | 

• MySQL 5.1 and above

• Oracle 10g , 11g Standard Editions, Oracle 12c

• SQL Server 2008 / 2012

 |
| JBoss 6.4 | • JDK 1.8 |
| 

WebLogic

• 10.3.x

• 12c

• 12.1.3

 | 

• JDK 1.6.0\_11  
(for WebLogic 10.3.x)

• JDK 1.7.0\_15  
(for WebLogic 12c)

• JDK 1.8  
(for WebLogic 12.1.3)

 | 

Linux

• CentOS 5.4

• Red Hat Enterprise Linux 5.8 / 6.5

 | VoltMX Server without Memcached | 

• MySQL 5.1 and above

• Oracle 10g , 11g Standard Editions, Oracle 12c

• SQL Server 2008 / 2012

 |
| 

WebSphere

• 6.x

• 7.x

• 8.0

• 8.5

• 8.5.5

 | 

• IBM JDK 1.5  
(for WebSphere 6.x)

• IBM JDK 1.6  
(for WebSphere 7.x, 8.0 and 8.5)

• IBM JDK 1.8  
(for WebSphere 8.5.5)

 | 

Linux

• CentOS 5.4

• Red Hat Enterprise Linux 5.8 / 6.5

• Windows Server 2008 R2

• Windows Server 2012

 | VoltMX Server without Memcached | 

• MySQL 5.1 and above

• Oracle 10g , 11g Standard Editions

• SQL Server 2008 / 2012

• IBM DB2 10.1 (VoltMX Server 6.0.1 onwards)

 |

  Support for JDK 1.8 for Tomcat is available from VoltMX Studio 6.5.  
  
Support for JDK 1.8 for JBoss, WebLogic, and WebSphere is available from VoltMX Studio 7.0.

VoltMX Server Installer comes packaged with JBoss 6.2 and Tomcat\_7 .0.52.

Support for Windows OS is available for WebSphere 8.0 only.

Support for openSUSE version 11.3 is available from VoltMX Studio 5.6 onwards (ver 5.6.2.2.)

Application server combinations for respective OS and database For Release 6.0:

    
| Application Server Stack | Java Runtime Environment | Supported OS | VoltMX Server Build | Supported DBs |
| --- | --- | --- | --- | --- |
| 
Tomcat

• 6.0.29  
• 7.0.52  

With

Memcached 1.2.8 and  
Libevent 1.4.9  

With

JBoss 5.1 / 6.2  
(for Reporting)

 | 

• JDK 1.6.0\_45  
(for Tomcat 6.0.29)

• JDK 1.7.0.45  
(for Tomcat 7.0.52)

 | 

Linux

• CentOS 5.4

• openSUSE 11.3

• Red Hat Enterprise Linux 5.8 / 6.5

 | VoltMX Server with Memcached | 

• MySQL 5.1 and above

• Oracle 10g, 11g Standard Editions, Oracle 12c

• SQL Server 2008 / 2012

 |
| 

Tomcat

• 6.0.29  
• 7.0.52  

With

JBoss 5.1 / 6.2  
(for Reporting)

 | 

• JDK 1.7.0.45

 | 

Windows Server 2008

Windows Server 2012

 | VoltMX Server without Memcached |
| 

JBoss 5.1 / 6.2

With

Memcached 1.2.8 and  
Libevent 1.4.9

 | 

JDK 1.6.0\_45 or

JDK 1.7.0\_45

 | 

Linux

• CentOS 5.4

• openSUSE 11.3

• Red Hat Enterprise Linux 5.8 / 6.5

 | VoltMX Server with Memcached | 

• MySQL 5.1 and above

• Oracle 10g , 11g Standard Editions, Oracle 12c

• SQL Server 2008 / 2012

 |
| JBoss 5.1 / 6.2 | 

• JDK 1.7.0\_45

 | 

Windows Server 2008

Windows Server 2012

 | 

VoltMX Server without Memcached

 |
| 

WebLogic

• 10.3.x

• 12c

 | 

• JDK 1.6.0\_11  
(for WebLogic 10.3.x)

• JDK 1.7.0\_15  
(for WebLogic 12c)

 | 

Linux

• CentOS 5.4

• Red Hat Enterprise Linux 5.8 / 6.5

 | VoltMX Server without Memcached | 

• MySQL 5.1 and above

• Oracle 10g , 11g Standard Editions, Oracle 12c

• SQL Server 2008 / 2012

 |
| 

WebSphere

• 6.x

• 7.x

• 8.0

• 8.5

 | 

• IBM JDK 1.5  
(for WebSphere 6.x)

• IBM JDK 1.6  
(for WebSphere 7.x, 8.0 and 8.5)

 | 

Linux

• CentOS 5.4

• Red Hat Enterprise Linux 5.8 / 6.5

• Windows Server 2008 R2

• Windows Server 2012

 | VoltMX Server without Memcached | 

• MySQL 5.1 and above

• Oracle 10g , 11g Standard Editions

• SQL Server 2008 / 2012

• IBM DB2 10.1 (VoltMX Server 6.0.1 onwards)

 |

From VoltMX Server 6.0, support for without memcache version of middleware is not available through the installer.  
If you want to use middleware without memcache version, follow the manual installation process provided in VoltMX Server Documentation.  
Support for memcache and without memcache will be provided in next major release.
