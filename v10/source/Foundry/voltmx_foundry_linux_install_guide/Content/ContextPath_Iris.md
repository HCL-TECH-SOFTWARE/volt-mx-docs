# <a name="ContextRootViz"></a>Accessing Context Based Root VoltMx Foundry Instance through VoltMx Iris

After you complete registration for a context based root for a VoltMx Foundry instance by using [the installer](./ContextPath.md) or [manual steps](./ContextRoot_MI.md), you can now also launch the context based VoltMx Foundry through VoltMx Iris. The `headless-build.properties` configuration is required only for CI build.

<!-- To access a context based root VoltMx Foundry instance through Iris, follow these steps:  

1.  Add the below keys in the `eclipse.ini` file, as follows:
    1.  Navigate to the folder where VoltMx Iris is installed.  
        For example, `<IrisEnterpriseInstallFolder>\_VoltMx Iris_installation`

    2.  Open the `eclipse.ini` file and add the following keys at the end of the file:

        <pre class="prettyprint">-Dvoltmx.mf.consolecontext=<new mfconsole context path>. For example, mfconsole1.
        -Dvoltmx.mf.accountscontext=<new accounts context path>. For example, accounts1.  
        -Dvoltmx.mf.workspacecontext=<new workspace context path>. For example, mfworkspace1.  
        -Dvoltmx.mf.identitycontext=<new identity context path>. For example, mfidentity1.</pre>

2.  Save the `eclipse.ini` file.
3.  Launch VoltMx Iris. -->

4.  Configure VoltMx Foundry in VoltMx Iris.  
    For more details, refer to [Configure VoltMx Foundry in VoltMx Iris](./../../../Iris/iris_user_guide/Content/LogInUsingCustAuth.md).

    <!-- Under **Windows** menu > **Preferences** > **VoltMx Foundry URL**, the URL should be the new context based root URL:  
    `<http or https>://<server_host>:<server_port>/<new mfconsole context path>`   -->

    You can now access context based root VoltMx Foundry Console through Iris.

5.  Configure the `HeadlessBuild.properties` file for contexts that you have configured for VoltMx Foundry, as follows:

    1.  Open the `HeadlessBuild.properties` file. Refer to [Configure the HeadlessBuild.properties File](./../../../Iris/iris_user_guide/Content/CommandLine.md).
    2.  In the `HeadlessBuild.properties` file, add the required contexts at the end of the file.

        For example:

        *   For console, the URL: `context.path.console=console1`
        *   For identity, the URL: `context.path.identity=identity1`
        *   For workspace, the URL: `context.path.workspace=workspace1`
        *   For accounts, the URL: `context.path.identity=accounts1`

    The `headless-build.properties` configuration is required only for CI build.

6.  Save the file.
7.  Launch VoltMx Foundry Console through Iris. You can now build apps using new context based VoltMx Foundry instance.

    For more details on how to add applications, refer to [VoltMx Foundry User Guide](./../../voltmx_foundry_user_guide/Content/Adding_Applications.md).

    For more details on designing an app, adding actions and skins, and building apps using Iris, refer to [VoltMx Iris User Guide](./../../../Iris/iris_user_guide/Content/Introduction.md).