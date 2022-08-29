                         


Log Location for Single Node Installation
-----------------------------------------

### For Tomcat

 If you select the single node in the Installation Mode window, the logs folder will be created at the following locations:

*   For Volt MX Foundry: **<UserInstallDirectory>\\logs**
    *   If you install **Console**, the **<UserInstallDirectory>\\logs** folder has three log files. They are: `mbaasportal.log` (for mbaas portal), `accountsService.log` (for accounts), and `workspaceService.log` (for workspace.)
    *   If you install **Identity Service**, the **<UserInstallDirectory>\\logs** folder has one log file - `authService.log` (for authentication.)
*    For Volt MX Foundry Integration: **<UserInstallDirectory>\\logs**
    *   If you install **Integration Service**, the **<UserInstallDirectory>\\logs** folder has five log files. They are: `admin.log` (for admin), `datasource-payload.log` (for datasource), `device-payload.log` (for device), `download.log` (download), and `middleware.log` (middleware.)
        
        > **_Note:_**    Based on the combination of components selected during installation, the **<UserInstallDirectory>\\logs** folder will have log files for each component.  
        
*   For Volt MX Foundry Engagement Services: **<UserInstallDirectory>\\logs** folder contains these log files: `vms.log`  and  `vms-messages.log`.
*   To check Tomcat Server logs, refer to the following location:  
    **<VoltMXFoundry\_Install\_DIR>\\tomcat\\logs**

### For JBoss

 If you select the single node in the Installation Mode window, the logs folder will be created at the following locations:

*   For Volt MX Foundry: **<UserInstallDirectory>\\logs**
    *   If you install **Console**, the **<UserInstallDirectory>\\logs** folder has three log files. They are: `mbaasportal.log` (for mbaas portal), `accountsService.log` (for accounts), and `workspaceService.log` (for workspace.)
    *   If you install **Identity Service**, the **<UserInstallDirectory>\\logs** folder has one log file - `authService.log` (for authentication.)
*    For Volt MX Foundry Integration: **<UserInstallDirectory>\\logs**
    *   If you install **Integration Service**, the **<UserInstallDirectory>\\logs** folder has five log files. They are: `admin.log` (for admin), `datasource-payload.log` (for datasource), `device-payload.log` (for device), `download.log` (download), and `middleware.log` (middleware.)
        
        > **_Note:_**    Based on the combination of components selected during installation, the **<UserInstallDirectory>\\logs** folder will have log files for each component.  
        
*   For Volt MX Foundry Engagement Services: **<UserInstallDirectory>\\logs** folder contains these log files: `vms.log`  and  `vms-messages.log`.
*   To check JBoss Server logs, refer to the following location:  
    **<JBOSS\_DIR>\\standalone\\logs**

### For WebLogic

 If you select the single node in the Installation Mode window, the logs folder will be created at the following locations:

*   For Volt MX Foundry: **<USERHOME>\\voltmxmflogs**
    *   If you install **Console**, the **<USERHOME>\\voltmxmflogs** folder has three log files. They are: `mbaasportal.log` (for mbaas portal), `accountsService.log` (for accounts), and `workspaceService.log` (for workspace.)
    *   If you install **Identity Service**, the **<USERHOME>\\voltmxmflogs** folder has one log file - `authService.log` (for authentication.)
    *   If you install **Integration Service**, the **<USERHOME>\\voltmxmflogs** folder has five log files. They are: `admin.log` (for admin), `datasource-payload.log` (for datasource), `device-payload.log` (for device), `download.log` (download), and `middleware.log` (middleware.)
        
        *   For example, on Windows, if an admin installed Volt MX Foundry as a User1, product logs are located at  C:\\Users\\User1\\voltmxmflogs    
        
        > **_Note:_**    Based on the combination of components selected during installation, the **<USERHOME>\\voltmxmflogs** folder will have log files for each component.  
        
*   For Volt MX Foundry Engagement Services: **<USERHOME>\\voltmxmflogs** folder contains these log files: `vms.log`  and  `vms-messages.log`.
*   For WebLogic Server logs, by default, the server log file is located below the server instance's root directory: `root-directory\server-name\server-name.log`  
    For example, if you created a domain in the c:\\user\_projects\\domains\\MyDomain directory, and you used the `c:\user_projects\domains\MyDomain\startWebLogicServer.cmd` script to start the server, then, by default, the log file is located in `c:\user_projects\domains\MyDomain\MyServer\MyServer.log`.  
      
    If the Server File Name field contains only a filename, the log file is located in the root-directory\\server-name directory.  
      
    For more details, refer to [http://docs.oracle.com/cd/E13222\_01/wls/docs81/ConsoleHelp/logging.html#1045661](http://docs.oracle.com/cd/E13222_01/wls/docs81/ConsoleHelp/logging.html#1045661)
