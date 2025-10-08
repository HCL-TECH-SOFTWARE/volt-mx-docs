                          

Building a Foundry app
=====================

To build a Foundry App build, you need to run the **buildFoundryApp** job. When you perform a build for the first time, you need to configure the build settings. App Factory stores the settings from the build to make configurations of the future builds easier by providing the **Rebuild** option.

To run the buildFoundryApp job and configure the parameters, follow these steps:

1.  Open the folder of your App Factory project, and then navigate to **Foundry** → **Builds** → **buildFoundryApp**.
2.  Run the job by using the **Build with parameters** option. You can access the option by following either of these steps.  
    
    > **_Note:_** If you don’t see the option, you might not have ownership permissions to the project. You can verify whether your name is listed in the Folder Owners section of the project. The Primary owner of the project can add users as secondary owners to grant permissions to the builds.
    
    *   On the right-side of the job row, select the icon that represents Build with Parameters
    *   Open the drop-down list for the **buildFoundryApp** job, and then select **Build with Parameters**
    *   Open the **buildFoundryApp** job and click **Build with Parameters** on the left panel  


3.  Make sure that you have configured the Foundry Project Settings, and then configure the build parameters for the job. For more information about the parameters, refer to the following sections.  
    
    
    <details close markdown="block"><summary>Source Control related parameters</summary>
    
    <table style="width: 80%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic"  cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"><col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">SCM_BRANCH</td><td class="TableStyle-Basic-BodyA-Column1-Body1"> Specifies the branch, release tag, or the commit ID of the repository that contains the source code of the Foundry app.</td></tr></tbody></table>
    
    </details>
    <details close markdown="block"><summary>Java related parameters</summary>
    
    > **_Important:_** The JAR files that you want to use for your project must follow the Maven naming convention. For more information, refer to [JAR file naming convention](#JAR).
      
    <table style="width: 80%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"><col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">CLEAN_JAVA_ASSETS</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Specifies whether App Factory must remove the JAR files of the Foundry source code that are stored in the repository before the app is imported to Foundry.You can use the parameter with BUILD_JAVA_ASSETS to clean the existing JAR files, and then use the JAR files that are built by the Maven POM scripts in the build pipeline.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">BUILD_JAVA_ASSETS</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Specifies whether App Factory must build and import the Java dependencies from the repository. If this parameter is enabled, App Factory checks out the Java source code, compiles it, packages it, and then bundles it with the Foundry app.If this parameter is enabled, App Factory displays the following build parameters:JAVA_PROJECTS_DIRMVN_GOALS_AND_OPTIONS<span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>Only Maven 3 is supported as the Java build mechanism.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><a name="JAVA_PROJECTS_DIR"></a>JAVA_PROJECTS_DIR</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Specifies the path of the directory that contains the Java assets that you want to build.For example, if your Java assets are stored in <code class="file_names">path/to/Java/Asset1</code> and <code class="file_names">path/to/Java/Asset2</code>, the Java directory is <code class="file_names">path/to/Java</code>.If your Java assets are stored in a separate repository, add the name of the repository as a prefix to the path of the directory.For example, if your repository name is <code class="file_names">JavaRepo.git</code>, and your Java assets are stored in <code class="file_names">path/to/Java</code>, the Java directory is <code class="file_names">JavaRepo/path/to/Java</code>.<span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>This parameter is displayed only if BUILD_JAVA_ASSETS is enabled.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">MVN_GOALS_AND_OPTIONS</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Specifies the Maven goals that you want to run to build the Java assets. You can also add command line options for the mvn command.The default Maven goals are: <code class="codefirst">clean package</code>.You can invoke Maven with a different set of goals, maven profiles, or additional arguments by using the -D option.For example: <code class="codefirst">clean package -DskipTests -Darg1=foo1 -Darg2=foo2</code><span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>This parameter is displayed only if BUILD_JAVA_ASSETS is enabled.</td></tr></tbody></table>
      
    </details>
    <details close markdown="block"><summary>Foundry related parameters</summary>
      
    <table><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">FOUNDRY_APP_CONFIG</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Specifies the configuration that App Factory uses to connect the Iris (client) app to corresponding Foundry (server) app.The configuration includes the hosting type, cloud account, environment name, and the Foundry app name.The build pipeline refers to this parameter for the Foundry Account details to Import and Publish the app. For more information, refer to <a href="ManagingCredentials.html#Adding_Foundry" target="_blank">Adding new VoltMX Foundry App Config</a>.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">IMPORT</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Specifies whether App Factory must import the Foundry app to the Foundry cloud that is specified in the FOUNDRY_APP_CONFIG.If the parameter is disabled and you want to import the app, you must download the package from the link that is shared in the email and manually import it to Foundry.If this parameter is enabled, App Factory displays the following build parameters:FOUNDRY_CREDENTIALS_IDIMPORT_FOUNDRY_APP_VERSIONPUBLISH<span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>To publish the Foundry app to an environment, you must import the app to the Foundry cloud.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">FOUNDRY_CREDENTIALS_ID</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Specifies the credentials that App Factory uses to import and publish the app to the Foundry cloud. The Foundry cloud must be specified in the FOUNDRY_APP_CONFIG. For more information, refer to <a href="ManagingCredentials.html#Cloud" target="_blank">Adding New Cloud Credentials</a>.<span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>This parameter is displayed only if IMPORT is enabled.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">IMPORT_FOUNDRY_APP_VERSION</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Specifies the location from which the version of the Foundry app is fetched.To fetch the app version, you can use either of these sources:<b>Meta.json</b> file that is stored in the repositoryFOUNDRY_APP_CONFIG parameterType the version manually<div class="Note" data-mc-autonum="<b><i><span style=&quot;color: #0a9c4a;&quot; class=&quot;mcFormatColor&quot;>Note: </span></i></b>"><span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>If you select the <b>Type it in</b> option, App Factory displays the FOUNDRY_APP_VERSION parameter.This parameter is displayed only if IMPORT is enabled.</div></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">FOUNDRY_APP_VERSION</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Specifies the version of the Foundry app that you want to import.The version must be in the format &lt;major&gt;.&lt;minor&gt;, for example: <b>1.0</b> or <b>999.99</b>. The major version must be between 1 and 999, and the minor version must be between 1 and 99.<br><span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>This parameter is applicable only if the IMPORT_FOUNDRY_APP_VERSION is selected as <b>Type it in</b>.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">PUBLISH</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Specifies whether App Factory must publish the app to the Foundry environment.If the parameter is disabled and you want to publish the app to a run-time environment, you need to manually publish the app from the Foundry console.If you enable this parameter, App Factory displays the following parameters:SERVICE_CONFIG_PATH<span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>This parameter is displayed only if IMPORT is enabled.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><a name="SKIP_WEB_CLIENT_DEPLOYMENT"></a>SKIP_WEB_CLIENT_DEPLOYMENT</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Specifies whether App Factory must skip deploying the client web app. If the parameter is disabled, App Factory overwrites the client web app in the App Services (run time).<br><b>Note:</b><br>1.For composite apps, deployment of the web app is skipped only for the base app. The web app is deployed (and overwritten) for the linked micro apps.<br>2.To use this parameter, you must upgrade your project. Otherwise, the web client is overwritten by default.<br>3.This parameter is applicable only if the Foundry app contains web client assets and the PUBLISH parameter is selected.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><a name="SERVICE_CONFIG"></a>SERVICE_CONFIG_PATH</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Specifies the path to the service configuration JSON file relative to the root of the source code repository. For information about service configuration, refer to <a href="../../../Foundry/voltmx_foundry_user_guide/Content/ServiceConfigProfile.html" target="_blank">Managing Service Profiles</a>.<span class="autonumber"><span><b><i><span style="color: #ff6600;" class="mcFormatColor">Important: </span></i></b></span></span>This parameter is only applicable for Foundry Console versions V9SP2 or later.App Factory supports custom locations for the configuration file, but HCL recommends naming the folder <code class="codefirst" style="font-size: 11pt;">configuration</code>. HCL also recommends naming every JSON file after the environment it is meant for. For example: If your environment is called <b>Test Env</b>, your configuration file should be <code class="codefirst" style="font-size: 11pt;">configuration/Test_Env.json</code>.<span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>This parameter is displayed only if the <code class="codefirst">PUBLISH</code> parameter is selected.</td></tr></table>
      
    </details>  

    <details close markdown="block"><summary>Testing</summary>
    > **_Note:_** The test resources must be included as a Maven project at `<foundry_project_source>/<testResources>/Cucumber/`. Make sure that the `pom.xml` file is in the `testResources/Cucumber/` folder.
    Alternatively, you can upload the test resources as a zip file in the TEST_ZIP_PACKAGE parameter.
    <table style="width: 80%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"><col class="TableStyle-Basic-Column-Column1"></colgroup>
    <tbody>
    <tr class="TableStyle-Basic-Body-Body1">
    <th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th>
    <th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th>
    </tr>
    <tr class="TableStyle-Basic-Body-Body1">
    <td class="TableStyle-Basic-BodyE-Column1-Body1">
    RUN_TESTS
    </td>
    <td class="TableStyle-Basic-BodyD-Column1-Body1">
    Specifies whether App Factory runs tests as part of the buildFoundryApp job. 
    </td>
    </tr>
    <tr class="TableStyle-Basic-Body-Body1">
    <td class="TableStyle-Basic-BodyE-Column1-Body1">
    MVN_OPTIONS
    </td>
    <td class="TableStyle-Basic-BodyD-Column1-Body1">
    Specifies the Maven options that can be included for the test run. You can also add command-line options for the `mvn` command. You can invoke Maven with a different set of goals, maven profiles, or additional arguments by using the -D option. For example: `clean package -DskipTests -Darg1=foo1 -Darg2=foo2`
    </td>
    </tr>    
    <tr class="TableStyle-Basic-Body-Body1">
    <td class="TableStyle-Basic-BodyE-Column1-Body1">
    TEST_ZIP_PACKAGE
    </td>
    <td class="TableStyle-Basic-BodyD-Column1-Body1">
    Specifies a URL to the zip package that contains the test resources.<br><b>Note:</b>Make sure that the URL is public and accessible from App Factory.<br>If you have included the test resources in the SCM, you can skip this parameter.
    </td>
    </tr>
    <tr class="TableStyle-Basic-Body-Body1">
    <td class="TableStyle-Basic-BodyE-Column1-Body1">
    TEST_REPORTS_DIRS
    </td>
    <td class="TableStyle-Basic-BodyD-Column1-Body1">
    Specifies the custom reports that are generated during the test run. For example, `target/cucumber/cucumber.json.`. You can include multiple reports by separating them with a comma (,).
    </td>
    </tr>
    </tbody>
    </table>
    </details>  



    <details close markdown="block"><summary>Custom Hooks related parameters</summary>
      
    <table style="width: 80%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"><col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">RUN_CUSTOM_HOOKS</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Specifies whether Custom Hooks must be run as part of the build pipeline. If this parameter is disabled, App Factory does not run Custom Hooks in the build pipeline.</td></tr></tbody></table>

    </details>  
    
4. After you configure the parameters for the **buildFoundryApp** job, click BUILD.

After a Build is successfully triggered, you can check the status of the build in the **Build History** panel. The following screenshot displays a build that is in progress (#4965) with the progress indicator icon.

![](Resources/Images/Foundry_buildStatus.png)

You can click the icon to see the detailed output of the current build, or click the progress bar to open the build page of the job. From the build page, you can click **Console Output** to display the detailed output of the running build.


