                          

You are here: How to Stop and Start Volt MX Foundry

How to Stop and Start Volt MX Foundry
====================================

After you install Volt MX Foundry, you must restart your application server to take effect all installed configurations.

Tomcat Server
=============

To stop and start Tomcat Server, follow these steps:

*   Stop server: `{AppServer Location}tomcat/bin > shutdown.sh`
*   Start server: `{AppServer Location}tomcat/bin > startup.sh`

JBoss Server
============

To stop and start JBoss Server, follow these steps:

1.  Stop server: Kill running Volt MX Foundry on JBoss service using command in Linux
2.  Start server: `[/root/Foundry83JBOSSSINGLE/jboss/bin]# ./startjboss.sh`

For Multinode - JBoss
---------------------

Start the services for the appropriate service groups that you have configured through the JBoss Management Console from the master node.

For more detailed information on administration of the app server, refer to the [JBoss Server Documentation](https://docs.jboss.org/author/display/AS71/).
