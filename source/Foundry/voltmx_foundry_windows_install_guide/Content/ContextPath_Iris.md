                         


Accessing Context Based Root Volt MX Foundry Instance through Iris
-----------------------------------------------------------------------

After you complete registration for a context based root for a Volt MX Foundry instance by using [the installer](ContextPath.md) or [manual steps](ContextRoot_MI.md), you can now also launch the context based Volt MX Foundry through Iris. The `headless-build.properties` configuration is required only for CI build.

To access a context based root Volt MX Foundry instance through Iris, follow these steps:

1.  Navigate to the folder where Volt MX Iris is installed.  
    For example, `C:\IrisInstaller-GA-x.x.x.x`
2.  Enter the following values in `<install_dir>/install_config.js`
```
exports.foundry =
{ "consolecontext": "",   
 "identitycontext": "",   
 "accountscontext": "",   
 "workspacecontext": "" };
```4.  After adding the relevant custom context paths which are applicable, start/restart(if already launched) Iris and then change the Foundry URL in **Preferences**.

> **_Note:_** To switch back to Foundry on-premise without the custom context paths, you must close Iris, clear the entries from `install_config` and restart Iris.

6.  Configure the `HeadlessBuild.properties` file for contexts that you have configured for Volt MX Foundry, as follows:
    1.  Open the `HeadlessBuild.properties` file. Refer to [Configure the HeadlessBuild.properties File](../../../Iris/iris_user_guide/Content/CommandLine.md#Configur).
    2.  In the `HeadlessBuild.properties` file, add the required contexts at the end of the file.
        
        For example:
        
        *   For console, the URL: `context.path.console=console1`
        *   For identity, the URL: `context.path.identity=identity1`
        *   For workspace, the URL: `context.path.workspace=workspace1`
        *   For accounts, the URL: `context.path.identity=accounts1`
    
    > **_Note:_** The `headless-build.properties` configuration is required only for CI build.
    
7.  Save the file.
8.  Launch Volt MX Foundry Console through Iris. You can now build apps using new context based Volt MX Foundry instance.
    
    For more details on how to add applications, refer to [VoltMX Foundry User Guide](../../../Foundry/voltmx_foundry_user_guide/Content/Adding_Applications.md).
    
    For more details on designing an app, adding actions and skins, and building apps using Iris, refer to [VoltMX Iris User Guide](../../../Iris/iris_user_guide/Content/Introduction.md).
