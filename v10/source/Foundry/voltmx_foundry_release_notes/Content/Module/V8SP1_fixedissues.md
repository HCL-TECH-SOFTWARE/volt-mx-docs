                          

Fixed Issues in V8 SP1
======================

Offline Objects
---------------

*   Sync failures are not reported back to the application. These errors are logged.
    
    Solution
    
    Sync errors are reported back to the app developer through Sync API.
    
*   You must enable all object services linked to the app for offline use, else the setup fails.
    
    Solution
    
    Setup ignores object services that are not offline enabled.
    

Installer
---------

*   Upgraded Apache Tomcat to V 8.5.23 to fix remote Code Execution CVE-2017-12617 vulnerability.
    
*   Tomcat Web app publish failing on Volt MX Foundry V8 upgraded using an existing DB from Volt MX Foundry v7.3 or earlier.
    
*   If you have published a Sync app with a custom conflict interceptor in Volt MX Foundry Console, and updated a record from backend, the Sync services fail.
