                            

Accessing Context Based Root Volt MX Foundry Instance through Volt MX Iris
-------------------------------------------------------------------------------

After you complete registration for a context based root for a Volt MX Foundry instance by using [the installer](ContextPath.md) or [manual steps](ContextRoot_MI.md), you can now also launch the context based Volt MX Foundry through Volt MX Iris.

To access a context based root Volt MX Foundry instance through Iris, follow these steps:  

1.  Launch Volt MX Iris.
2.  Configure Volt MX Foundry in Volt MX Iris.  
    For more details, refer to [Configure Volt MX Foundry in Volt MX Iris](../../../Iris/iris_user_guide/Content/LogInUsingCustAuth.md#ConfigureMobileFoundryInIrisEnterprise).
    
    You can now access context based root Volt MX Foundry Console through Iris.
    
3.  Configure the `HeadlessBuild.properties` file for contexts that you have configured for Volt MX Foundry, as follows:
    
    1.  Open the `HeadlessBuild.properties` file. Refer to [Configure the HeadlessBuild.properties File](../../../Iris/iris_user_guide/Content/CommandLine.md#Configur).
    2.  In the `HeadlessBuild.properties` file, add the required contexts at the end of the file.
        
        For example:
        
        *   For console, the URL: `context.path.console=console1`
        *   For identity, the URL: `context.path.identity=identity1`
        *   For workspace, the URL: `context.path.workspace=workspace1`
        *   For accounts, the URL: `context.path.identity=accounts1`
        
        > **_Note:_** The `headless-build.properties` configuration is required only for CI build.
        
4.  Save the file.
5.  Launch Volt MX Foundry Console through Iris. You can now build apps using new context based Volt MX Foundry instance.
    
    For more details on how to add applications, refer to [VoltMX Foundry User Guide](../../../Foundry/voltmx_foundry_user_guide/Content/Adding_Applications.md).
    
    For more details on designing an app, adding actions and skins, and building apps using Iris, refer to [VoltMX Iris User Guide](../../../Iris/iris_user_guide/Content/Introduction.md).
