                          

You are here: How to Start and Stop Volt MX Foundry

How to Stop and Start Volt MX Foundry
====================================

After you install Volt MX Foundry, you must restart your application server to take effect all installed configurations.

Tomcat Server
-------------

To stop and start Tomcat Server, follow these steps:

1.  Stop server: `{AppServer Location}tomcat\bin > shutdown.bat`
2.  Start server: `{AppServer Location}tomcat\bin > startup.bat`

JBoss Server
------------

To stop and start JBoss Server, follow these steps:

1.  Stop server: Restart Windows service from `services.msc`
2.  Start server: `{AppServer Location}/jboss/bin > startjboss.bat`

### For Multinode - JBoss

Start the services for the appropriate service groups that you have configured through the JBoss Management Console from the master node.

<!-- For more detailed information on administration of the app server, refer to the [JBoss Server Documentation](https://docs.jboss.org/author/display/AS7/Getting+Started+Guide#GettingStartedGuide-StartingJBossApplicationServer7). -->
For more detailed information on administration of the app server, refer to the [JBoss Server Documentation](https://docs.jboss.org/author/display/AS71/).

WebLogic Server
---------------

To stop and start WebLogic Server, follow these steps:

1.  Stop server: `{WebLogic Installation}/User Projects/domain_name/bin>stopWebLogic.cmd`
2.  Start server: `{WebLogic Installation}/User Projects/domain_name>startWebLogic.cmd`

For more detailed information on administration of the app server, refer to the [WebLogic Server documentation](https://docs.oracle.com/cd/E13222_01/wls/docs70/adminguide/startstop.md).
