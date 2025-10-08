                         


Log Location for Multinode Installation 
=======================================

For Tomcat
----------

 If you select domain mode (multi node) in the Installation Mode option, the logs folder will be created at the following locations:

*   For Volt MX Foundry: **<ROOT\>/VoltMXmflogs**
    *   If you install **Console**, the **<ROOT\>/voltmxmflogs** folder has three log files. They are: `mbaasportal.log` (for mbaas portal), `accountsService.log` (for accounts), and `workspaceService.log` (for workspace.)
    *   If you install **Identity Service**, the **<ROOT\>/voltmxmflogs** folder has one log file - `authService.log` (for authentication.)
*   For Volt MX Foundry Integration: **<ROOT\>/voltmxmflogs**
    *   If you install **Integration Service**, the **/voltmxmflogs** folder has five log files. They are: `admin.log` (for admin), `datasource-payload.log` (for datasource), `device-payload.log` (for device), `download.log` (download), and `middleware.log` (middleware.)
        
        > **_Note:_**    Based on the combination of components selected during installation, the **<ROOT\>/voltmxmflogs** folder will have log files for each component.  
        
*   For Volt MX Foundry Engagement Services: **<ROOT\>/vmslogs** log folder contains these log files: `vms.log`  and  `vms-messages.log`.
*   To check Tomcat Server logs, refer to the following location:  
    **<VoltMX Foundry\_Install\_DIR\>/tomcat/logs**

For JBoss
---------

 If you select domain mode (multi node) in the Installation Mode option, the logs folder will be created at the following locations:

*   For Volt MX Foundry: **<ROOT\>/voltmxmflogs**
    *   If you install **Console**, the **<ROOT\>/voltmxmflogs** folder has three log files. They are: `mbaasportal.log` (for mbaas portal), `accountsService.log` (for accounts), and `workspaceService.log` (for workspace.)
    *   If you install **Identity Service**, the **<ROOT\>/voltmxmflogs** folder has one log file - `authService.log` (for authentication.)
*   For Volt MX Foundry Integration: **<ROOT\>/voltmxmflogs**
    *   If you install **Integration Service**, the **/voltmxmflogs** folder has five log files. They are: `admin.log` (for admin), `datasource-payload.log` (for datasource), `device-payload.log` (for device), `download.log` (download), and `middleware.log` (middleware.)
        
        > **_Note:_**    Based on the combination of components selected during installation, the **<ROOT\>/voltmxmflogs** folder will have log files for each component.  
        
*   For Volt MX Foundry Engagement Services: **<ROOT\>/vmslogs** log folder contains these log files: `vms.log`  and  `vms-messages.log`.
*   To check JBoss Server logs, refer to the following location:  
    **<JBoss\_Install\_DIR\>/standalone/log**
