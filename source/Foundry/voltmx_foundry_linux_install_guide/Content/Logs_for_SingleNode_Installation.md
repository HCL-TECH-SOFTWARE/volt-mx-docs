                         


Log Location for Single Node Installation
=========================================

For Tomcat
----------

 If you select the single node in the Installation Mode window, the logs folder will be created at the following locations:

*   For Volt MX Foundry: **<UserInstallDirectory>/logs**
    *   If you install **Console**, the **<UserInstallDirectory>/logs** folder has three log files. They are: `mbaasportal.log` (for mbaas portal), `accountsService.log` (for accounts), and `workspaceService.log` (for workspace.)
    *   If you install **Identity Service**, the **<UserInstallDirectory>/logs** folder has one log file - `authService.log` (for authentication.)
*    For Volt MX Foundry Integration: **<UserInstallDirectory>/logs**
    *   If you install **Integration Service**, the **<UserInstallDirectory>/logs** folder has five log files. They are: `admin.log` (for admin), `datasource-payload.log` (for datasource), `device-payload.log` (for device), `download.log` (download), and `middleware.log` (middleware.)
        
        > **_Note:_**    Based on the combination of components selected during installation, the **<UserInstallDirectory>/logs** folder will have log files each component.  
        
*   For Volt MX Foundry Engagement Services: **<UserInstallDirectory>/logs** folder contains these log files: `vms.log`  and  `vms-messages.log`.
*   To check Tomcat Server logs, refer to the following location:  
    **<VoltMX Foundry\_Install\_DIR>/tomcat/logs**

For JBoss
---------

 If you select the single node in the Installation Mode window, the logs folder will be created at the following locations:

*   For Volt MX Foundry: **<UserInstallDirectory>/logs**
    *   If you install **Console**, the **<UserInstallDirectory>/logs** folder has three log files. They are: `mbaasportal.log` (for mbaas portal), `accountsService.log` (for accounts), and `workspaceService.log` (for workspace.)
    *   If you install **Identity Service**, the **<UserInstallDirectory>/logs** folder has one log file - `authService.log` (for authentication.)
*    For Volt MX Foundry Integration: **<UserInstallDirectory>/logs**
    *   If you install **Integration Service**, the **<UserInstallDirectory>/logs** folder has five log files. They are: `admin.log` (for admin), `datasource-payload.log` (for datasource), `device-payload.log` (for device), `download.log` (download), and `middleware.log` (middleware.)
        
        > **_Note:_**    Based on the combination of components selected during installation, the **<UserInstallDirectory>/logs** folder will have log files each component.  
        
*   For Volt MX Foundry Engagement Services: **<UserInstallDirectory>/logs** folder contains these log files: `vms.log`  and  `vms-messages.log`.
*   To check JBoss Server logs, refer to the following location:  
    **<JBoss\_DIR>/standalone/log**
