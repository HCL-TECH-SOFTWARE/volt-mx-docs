                             

How to Stop and Start Volt Foundry
====================================

After you install Volt Foundry, you must restart your application server to take effect all installed configurations.

Tomcat Server
-------------

To stop and start Tomcat Server, follow these steps:

### Windows - To stop and start Tomcat Server

1.  Stop server: `{AppServer Location}tomcat\bin > shutdown.bat`
2.  Start server: `{AppServer Location}tomcat\bin > startup.bat`

### Linux - To stop and start Tomcat Server

*   Stop server: `{AppServer Location}tomcat/bin > shutdown.sh`
*   Start server: `{AppServer Location}tomcat/bin > startup.sh`

JBoss Server
------------

To stop and start JBoss Server, follow these steps:

### Windows - To stop and start JBoss Server

1.  Stop server: Restart Windows service from `services.msc`
2.  Start server: `{AppServer Location}/jboss/bin > standalone.bat`

### Linux - To stop and start JBoss Server

1.  Stop server: Kill running Volt Foundry on JBoss service using command in Linux
2.  Start server: `[/root/Foundry83JBOSSSINGLE/jboss/bin]# ./startjboss.sh`
