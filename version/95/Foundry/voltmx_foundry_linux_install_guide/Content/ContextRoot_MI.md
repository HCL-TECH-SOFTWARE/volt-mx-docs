                          


Approach 2: Changing Context Root using Manual Install Steps
============================================================

1.  Install Volt MX Foundry using manual steps provided in [VoltMX Foundry Manual Installation Guide](../../../Foundry/voltmx_foundry_manual_install_guide/Content/Introduction.md).
2.  Rename the war files for required components.
    *   For **Tomcat standalone** and **JBoss standalone** modes, rename the WARs directly from proper install location.
    *   For **JBoss** **domain** mode, follow these steps to rename WARs:
        
        1.  Rename the required WARs from the installation location.
        2.  Go to Console.
        3.  Delete WARs for those you have renamed.
        4.  Redeploy the renamed WARs to the Console.
        
        The following table details the list of installed WAR files and installation locations for Volt MX Foundry Components:
        
        | Component | File Name | Renamed WAR files | Path for installed WAR files for Volt MX Foundry |
        | --- | --- | --- | --- |
        |  **Console** | workspace.war | workspace`1`.war | **Tomcat** (standalone mode): `<VoltMX Foundry Install Path>\tomcat\webapps`<br>**JBoss** (standalone mode): `<VoltMX Foundry Install Path>\jboss > standalone\deployments`  |
        |^^| mfconsole.war | mfconsole`1`.war |
        |^^| accounts.war | accounts`1`.war |
        | **Identity** | authService.war | authService`1`.war |
        | **Integration/****Admin/****Server** | middleware.war<br>services.war<br>admin.war | middleware`1`.war<br>services`1`.war<br>admin`1`.war |
        | **Engagement Services** | vpns.war | vpns`1`.war |
        

1.  Update `WAAS_BASE_URL` in the  `accounts_configurations` table by using the following SQL query:
    
    For example, `<prefix>mfaccountsdb<suffix>`.
    
    Sample query for UPDATE STATEMENT:
    
    *   MySQL
        
        `UPDATE accounts_configurations SET value='<http or https>://<server_host>:<server_port>/workspace1' WHERE name='WAAS_BASE_URL';`
        
    *   Oracle
        
        `UPDATE accounts_configurations SET value='<http or https>://<server_host>:<server_port>/workspace1' WHERE name='WAAS_BASE_URL' ;`
        
    *   SQL Server
        
        `UPDATE accounts_configurations SET value='<http or https>://<server_host>:<server_port>/workspace1' WHERE name='WAAS_BASE_URL' ;`
        
2.  Open the renamed `mfconsole1.war` and do the following:
    1.  **Update** the following property in the `config.properties` file:
        *   VOLTMX\_ACCOUNT\_API\_BASE\_URL=`<http or https>://<server_host>:<server_port>/accounts1/api/v1_0/`
            
            The location for **config.properties**: `mfconsole1.war\WEB-INF\classes`
            
            > **_Note:_** A WAR file location varies based on an app server - for example, for Tomcat, WARs are found at &lt;INSTALL\_DIR&gt;\\tomcat\\webapps.
            
    2.  **Add** the following properties in the `config.properties` file:
        *   VOLTMX\_ACCOUNTS\_HEALTHCHECK\_URL=`<http or https>://<server_host>:<server_port>/accounts1/health_check`
            
        *   VOLTMX\_WORKSPACE\_HEALTHCHECK\_URL=`<http or https>://<server_host>:<server_port>/workspace1/api/v1/healthcheck`
            
3.  Update the following property in the `VOLTMX_SERVER_SERVICES_CONTEXT_PATH` in the `admindb` configuration table:
    
    `VOLTMX_SERVER_SERVICES_CONTEXT_PATH=services1`
    
    For example, `<prefix>admindb<suffix>`.
    
    Sample query for UPDATE STATEMENT:
    
    *   MySQL
        
        `UPDATE server_configuration SET prop_value ='services1' WHERE prop_name = 'VOLTMX_SERVER_SERVICES_CONTEXT_PATH';`
        
    *   Oracle
        
        `UPDATE server_configuration SET prop_value ='services1' WHERE prop_name = 'VOLTMX_SERVER_SERVICES_CONTEXT_PATH';`
        
    *   SQL Server
        
        `UPDATE server_configuration SET prop_value ='services1' WHERE prop_name = 'VOLTMX_SERVER_SERVICES_CONTEXT_PATH';`
        
4.  Configure the following properties with the customized JNDI names:
    
    | Component | File Name | File Name | Properties to be added/updated |
    | --- | --- | --- | --- |
    | Accounts | accounts.properties | Accounts.war\\WEB-INF\\classes | ACCOUNTS\_DB\_JNDI\_NAME=jdbc/voltmxaccounts REPORTS\_DB\_JNDI\_NAME=jdbc/voltmxreports |
    | **Integration/****Admin/****Server** | serverconsole.properties | admin.war\\WEB-INF\\middleware\\middleware-bootconfig\\admin | admindb.jndi.name=jdbc/voltmxadmindb reportsdb.jndi.name=jdbc/voltmxreports |
    
5.  Configure the following settings for application server, as follows:
    *   For **Tomcat** : In case you have renamed a `.war`, modify the following datasource file names as per the respective renamed war files:
        
        Path for datasource files:
        
        &lt;INSTALL\_DIR&gt;\\&lt;App\_Server&gt;\\conf\\Catalina\\localhost
        
        *   Rename `accounts.xml` to `account1.xml`
        *   Rename `workspace.xml` to `workspace1.xml`
        *   Rename `authService.xml` to `authService1.xml`
        *   Rename `admin.xml` to `admin1.xml`
        
    *   For **JBoss**, update `services.war\WEB-INF\jboss-web.xml` with the new services war name.
        
        For example, if `services` is renamed to `services1` then `services1.war\WEB-INF\jboss-web.xml`
        
        From:
        
        `<context-root>/services</context-root>`
        
        To:
        
        `<context-root>/services1</context-root>`
        
6.  Restart your app server.
7.  Launch Volt MX Foundry Console with new context path and do the registration using the new auth service URL format:  
    `<http or https>://<server_host>:<server_port>/<new mfconsole context path>  
    `
    
    For example: `<http or https>://<server_host>:<server_port>/<mfconsole1>`
    
    > **_Note:_**  You will need to launch Volt MX Foundry through a browser and complete the registration for the context based root instance.  
    For more details, refer to [How to Get Started With Volt MX Foundry Console](../../../Foundry/voltmx_foundry_user_guide/Content/How_to_access_VoltMX_Foundry_Portal_on-Prem.md)
    
8.  After you logged in to Console, create an environment with the new URLs.
    
    To create server feature with new context path, the URL format is: `<http or https>://<server_host>:<server_port>/<new admin context path>`
    
    If admin is renamed to admin1 then the sample URL format is as follows:
    
    &lt;http or https&gt;://&lt;server\_host&gt;:&lt;server\_port&gt;/admin1
    
9.  Update `service_url` after an environment is registered in the `accountsdb` table, as follows:
    
    Sample query for UPDATE STATEMENT (for MySQL/Oracle/MSSQL):
    
    *   UPDATE features SET service\_url = `‘<http or https>://<server_host>:<server_port>/adminservices1’ WHERE type = 'server';`
        
    *   UPDATE features SET service\_url = `‘<http or https>://<server_host>:<server_port>/vpns1’ WHERE type = 'vpns';`
    
    > **_Note:_** You can now use Volt MX Foundry Console with new context paths for your app development.
    
10.  Create an app in Volt MX Foundry Console.
11.  Publish the app.
