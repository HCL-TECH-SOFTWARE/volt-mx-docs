                          

Fixed Issues in V8 SP2
======================

Offline Objects
---------------

Upload batching support is not available for Object Services with relationships (hierarchical payloads).

**Solution**

Upload batching is supported for flat and hierarchical payloads.

Integration
-----------

Default values of input parameters are not accessible in a Java Service.  
For example, For a Java service in the Volt MX Foundry App, default values can be configured for the input parameters. But middleware is not sending the default values of the input parameters to the Java service.

Installer
---------

*   Admin privileges were required for the installer, if the selected database is Oracle/MySQL. Non-Admin (lesser privileges) now works during installation process across all the databases.
    
*   Access to reporting queue is failed after upgrading from Foundry 7.0, 7.1 and 7.2.0.1 to Volt MX Foundry 8.1 in Tomcat and JBoss single-node.
    
*   Internationalization(i8ln) characters are not sent in push/SMS/emails from Messaging in Tomcat.
    
*   Installing Volt MX Foundry by providing an existing service name fails. Service name is now appended with a number. Example: ServiceName, ServiceName1, ServiceName2 and so on.
    

Engagement
----------

From the Adhoc Information page, the expiry date and time could be set only for the scheduled push messages. There was no option to set the date and time for the priority push messages.

**Solution**

The option to set the date and time for the priority push message is provided on the Adhoc Information page (for Cloud version only).
