                           


Approach 1: Changing Context Root Path after the installation using the Installer
---------------------------------------------------------------------------------

1.  Install Volt MX Foundry using the Installer.
    
    > **_Important:_** During Volt MX Foundry installation or after installation is completed, you should not configure details in the Administrator Account Configuration window.
    
2.  Rename the war files for required components.

*   For **Tomcat standalone** and **JBoss standalone** modes, rename the WARs directly from proper install location.
*   For **WebLogic** and **WebSphere**, and **JBoss** **domain** mode, follow these steps to rename WARs:
    
    1.  Rename the required WARs from the installation location.
    2.  Go to Console.
    3.  Delete WARs for those you have renamed.
    4.  Redeploy the renamed WARs to the Console.
    
    The following table details the list of installed WAR files and installation locations for Volt MX Foundry Components:
    
    | Component | File Name | Renamed WAR files | Path for installed WAR files for Volt MX Foundry |
    | --- | --- | --- | --- |
    |  **Console** | workspace.war | workspace`1`.war | **Tomcat** (standalone mode): `<VoltMX Foundry Install Path>\tomcat\webapps` **JBoss** (standalone mode): `<VoltMX Foundry Install Path>\jboss > standalone\deployments`  |
    |^^| mfconsole.war | mfconsole`1`.war |
    |^^| accounts.war | accounts`1`.war |
    | **Identity** | authService.war | authService`1`.war |
    | **Integration/****Admin/****Server** | middleware.warservices.waradmin.war | middleware`1`.warservices`1`.waradmin`1`.war |
    | Engagement Services | vpns.war | vpns`1`.war |
    

1.  Update `WAAS_BASE_URL` in the  `accounts_configurations` table by using the following SQL query:
    
    For example, `<prefix>mfaccountsdb<suffix>`.
    
    Sample query for UPDATE STATEMENT:
    
    *   MySQL
        
        UPDATE accounts\_configurations SET value='<http or https>://<server\_host>:<server\_port>/workspace1' WHERE name='WAAS\_BASE\_URL';
        
    *   Oracle
        
        UPDATE accounts\_configurations SET value='<http or https>://<server\_host>:<server\_port>/workspace1' WHERE name='WAAS\_BASE\_URL' ;
        
    *   SQL Server
        
        UPDATE accounts\_configurations SET value='<http or https>://<server\_host>:<server\_port>/workspace1' WHERE name='WAAS\_BASE\_URL' ;
        
2.  Open the renamed `mfconsole1.war` and do the following:
    1.  **Update** the following property in the `config.properties` file:
        *   VOLTMX\_ACCOUNT\_API\_BASE\_URL=`<http or https>://<server_host>:<server_port>/accounts1/api/v1_0/`
            
            The location for **config.properties**: `mfconsole1.war\WEB-INF\classes`
            
            > **_Note:_** A WAR file location varies based on an app server - for example, for Tomcat, WARs are found at <INSTALL\_DIR>\\tomcat\\webapps.
            
    2.  **Add** the following properties in the `config.properties` file:
        *   VOLTMX\_ACCOUNTS\_HEALTHCHECK\_URL=`<http or https>://<server_host>:<server_port>/accounts1/health_check`
            
        *   VOLTMX\_WORKSPACE\_HEALTHCHECK\_URL=`<http or https>://<server_host>:<server_port>/workspace1/api/v1/healthcheck`
            
3.  Update the following property in the `VOLTMX_SERVER_SERVICES_CONTEXT_PATH` in the `admindb` configuration table:
    
    VOLTMX\_SERVER\_SERVICES\_CONTEXT\_PATH=services1
    
    For example, `<prefix>admindb<suffix>`.
    
    Sample query for UPDATE STATEMENT:
    
    *   MySQL
        
        UPDATE server\_configuration SET prop\_value ='services1' WHERE prop\_name = 'VOLTMX\_SERVER\_SERVICES\_CONTEXT\_PATH';
        
    *   Oracle
        
        UPDATE server\_configuration SET prop\_value ='services1' WHERE prop\_name = 'VOLTMX\_SERVER\_SERVICES\_CONTEXT\_PATH';
        
    *   SQL Server
        
        UPDATE server\_configuration SET prop\_value ='services1' WHERE prop\_name = 'VOLTMX\_SERVER\_SERVICES\_CONTEXT\_PATH';
        
4.  Configure the following settings for application server, as follows:
    *   For **Tomcat**: In case you have renamed a `.war`, modify the following datasource file names as per the respective renamed war files:
        
        Path for datasource files:
        
        <INSTALL\_DIR>\\<App\_Server>\\conf\\Catalina\\localhost
        
        *   Rename `accounts.xml` to `account1.xml`
        *   Rename `workspace.xml` to `workspace1.xml`
        *   Rename `authService.xml` to `authService1.xml`
        *   Rename `admin.xml` to `admin1.xml`
        
    *   For **JBoss**, update `services.war\WEB-INF\jboss-web.xml` with the new services war name.
        
        For example, if `services` is renamed to `services1` then `services1.war\WEB-INF\jboss-web.xml`
        
        From:
        
        <context-root>/services</context-root>
        
        To:
        
        <context-root>/services1</context-root>
        
5.  Restart your app server.
6.  Launch Volt MX Foundry Console with new context path and do the registration using the new auth service URL format:  
    `<http or https>://<server_host>:<server_port>/<new mfconsole context path>  
    `
    
    For example: `<http or https>://<server_host>:<server_port>/<mfconsole1>`
    
    > **_Note:_**  You will need to launch Volt MX Foundry through a browser and complete the registration for the context based root instance.  
    For more details, refer to [How to Get Started With Volt MX Foundry Console.](../../../Foundry/voltmx_foundry_user_guide/Content/How_to_access_VoltMX_Foundry_Portal_on-Prem.md)
    
    > **_Note:_** After you complete registration, you can now also launch a context based root Volt MX Foundry through Iris Enterprise. Refer to [Access Volt MX Foundry Instance through Iris Enterprise](#).
    
7.  After you logged in to Console, create an environment with the new URLs.
    
    To create server feature with new context path, the URL format is: `<http or https>://<server_host>:<server_port>/<new admin context path>`
    
    If admin is renamed to admin1 then the sample URL format is as follows:
    
    <http or https>://<server\_host>:<server\_port>/admin1
    
8.  Update `service_url` after an environment is registered in the `accountsdb` table, as follows:
    
    Sample query for UPDATE STATEMENT (for MySQL/Oracle/MSSQL):
    
    *   UPDATE features SET service\_url = `‘<http or https>://<server_host>:<server_port>/adminservices1’ WHERE type = 'server';`
        
    *   UPDATE features SET service\_url = `‘<http or https>://<server_host>:<server_port>/vpns1’ WHERE type = 'vpns';`
    
    > **_Note:_** You can now use Volt MX Foundry Console with new context paths for your app development.
    
9.  Create an app in Volt MX Foundry Console.
10.  Publish the app.
