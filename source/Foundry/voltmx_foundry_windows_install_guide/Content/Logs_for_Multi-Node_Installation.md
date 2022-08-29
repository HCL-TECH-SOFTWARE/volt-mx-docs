                         


Log Location for Multinode Installation
---------------------------------------

### For Tomcat

 If you select domain mode (multinode) in the Installation Mode option, the logs folder will be created at the following locations:

*   For Volt MX Foundry: **<USERHOME>\\voltmxmflogs**
    *   If you install **Console**, the **<USERHOME>\\voltmxmflogs** folder has three log files. They are: `mbaasportal.log` (for mbaas portal), `accountsService.log` (for accounts), and `workspaceService.log` (for workspace.)
    *   If you install **Identity Services**, the **<USERHOME>\\voltmxmflogs** folder has one log file - `authService.log` (for authentication.)
*   For Volt MX Foundry Integration: **<USERHOME>\\voltmxmflogs**
    *   If you install **Integration Services**, the **\\voltmxmflogs** folder has five log files. They are: `admin.log` (for admin), `datasource-payload.log` (for datasource), `device-payload.log` (for device), `download.log` (download), and `middleware.log` (middleware.)
        
        > **_Note:_**    Based on the combination of components selected during installation, the **<USERHOME>\\voltmxmflogs** folder will have log files for each component.  
        
*   For Volt MX Foundry Engagement Services: **<USERHOME>\\vmslogs** log folder contains these log files: `vms.log`  and  `vms-messages.log`.
*   To check Tomcat Server logs, refer to the following location:  
    **<VoltMXFoundry\_Install\_DIR>\\tomcat\\logs**

### For JBoss

 If you select domain mode (multi node) in the Installation Mode option, the logs folder will be created at the following locations:

*   For Volt MX Foundry: **<USERHOME>\\voltmxmflogs**
    *   If you install **Console**, the **<USERHOME>\\voltmxmflogs** folder has three log files. They are: `mbaasportal.log` (for mbaas portal), `accountsService.log` (for accounts), and `workspaceService.log` (for workspace.)
    *   If you install **Identity Services**, the **<USERHOME>\\voltmxmflogs** folder has one log file - `authService.log` (for authentication.)
*   For Volt MX Foundry Integration: **<USERHOME>\\voltmxmflogs**
    *   If you install **Integration Services**, the **\\voltmxmflogs** folder has five log files. They are: `admin.log` (for admin), `datasource-payload.log` (for datasource), `device-payload.log` (for device), `download.log` (download), and `middleware.log` (middleware.)
        
        > **_Note:_**    Based on the combination of components selected during installation, the **<USERHOME>\\voltmxmflogs** folder will have log files for each component.  
        
*   For Volt MX Foundry Engagement Services: **<USERHOME>\\voltmxmflogs** log folder contains these log files: `vms.log`  and  `vms-messages.log`.
*   To check JBoss Server logs, refer to the following location:  
    **<JBOSS\_Install\_DIR>\\standalone\\log**

### For WebLogic

 If you select domain mode (multi node) in the Installation Mode option, the logs folder will be created at the following locations:

*   For Volt MX Foundry: **<USERHOME>\\voltmxmflogs**
    *   If you install **Console**, the **<USERHOME>\\voltmxmflogs** folder has three log files. They are: `mbaasportal.log` (for mbaas portal), `accountsService.log` (for accounts), and `workspaceService.log` (for workspace.)
    *   If you install **Identity Services**, the **<USERHOME>\\voltmxmflogs** folder has one log file - `authService.log` (for authentication.)
    *   If you install **Integration Services**, the **\\voltmxmflogs** folder has five log files. They are: `admin.log` (for admin), `datasource-payload.log` (for datasource), `device-payload.log` (for device), `download.log` (download), and `middleware.log` (middleware.)
        
        *   For example, on Windows, if an admin installed Volt MX Foundry as a User1, product logs are located at  C:\\Users\\User1\\voltmxmflogs
        
        > **_Note:_**    Based on the combination of components selected during installation, the **<USERHOME>\\voltmxmflogs** folder will have log files for each component.  
        
*   For Volt MX Foundry Engagement Services: **<USERHOME>\\voltmxmflogs** log folder contains these log files: `vms.log`  and  `vms-messages.log`.
*   For WebLogic Server logs, by default, the server log file is located below the server instance's root directory: `root-directory\server-name\server-name.log`  
    For example, if you created a domain in the c:\\user\_projects\\domains\\MyDomain directory, and you used the `c:\user_projects\domains\MyDomain\startWebLogicServer.cmd` script to start the server, then, by default, the log file is located in `c:\user_projects\domains\MyDomain\MyServer\MyServer.log`.  
      
    If the Server File Name field contains only a filename, the log file is located in the root-directory\\server-name directory.  
      
    For more details, refer to [docs.oracle.com](http://docs.oracle.com/cd/E13222_01/wls/docs81/ConsoleHelp/logging.html#1045661).
