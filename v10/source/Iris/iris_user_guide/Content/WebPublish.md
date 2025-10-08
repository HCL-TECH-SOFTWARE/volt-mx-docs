                         


Publishing a Web App in Volt MX Iris
==========================================

Overview
--------

Web Publish, enables you to build and publish a web app from Volt MX Iris to your Volt MX Foundry cloud.

Seamless in-app Build and Publish Experience

Starting with Volt MX Iris V9 SP2, you can publish a web app to Volt MX Foundry, without leaving the Iris window. Earlier, one had to design their web app in Iris and then open the Volt MX Foundry console to the publish the web app. This process has now been simplified.

The Build and Publish Web feature is available in the Build menu of the Volt MX Iris application.

The publish process occurs in the background, and you can continue to use the Iris canvas while the app is being built and published.

Access to the Published URL within Volt MX Iris

Once the publish is complete, the published URL is displayed on the Build tab in Volt MX App. When you click the URL, the Iris Preview window opens. For more information on the Iris Preview window, click [here](LivePreview.md).

You can also click on **Copy** beside the URL to copy it and view the app in a web browser of your choice.

The Build tab in Iris displays the status of your app publish. If there are any errors, they appear in the Build tab. You can switch to the Console tab for a detailed view of the error logs.

Prerequisites
-------------

**Following are the prerequisites to publish a Web App within Volt MX Iris**:

1.  Sign in to your Volt MX Cloud account.
2.  Link a new or an existing foundry app to your Iris Project.

When you try to publish the app without logging into Volt MX Foundry, the login window appears.

If you try to publish the app, even when you do not have an associated Volt MX Foundry app, you will get a prompt to link a Volt MX Foundry app.

To change the selected Cloud account or Environment, go to **Project Settings** > **VoltMX Foundry**. hen, click the **VoltMX Foundry** tab. At the top of this tab, under Volt MX Foundry Environment, select an environment from the drop-down list. Click **Done**. If you do not see any environments listed, you need to create one. For more information, refer [Environments](../../../Foundry/voltmx_foundry_user_guide/Content/Environments.md) in the Volt MX Foundry Console User Guide.

To publish the Volt MX Iris web app to Volt MX Foundry, the app needs to be associated with a Volt MX Foundry app.

If no Foundry App is associated to your Iris project, an error message is displayed.

![](Resources/Images/NoFoundryAppLink_443x177.png)

You must either create a new Volt MX Foundry app or use an existing one. For information on how to create a new Volt MX Foundry app, see [How to Add Applications](../../../Foundry/voltmx_foundry_user_guide/Content/Adding_Applications.md) in the Volt MX Foundry Console User Guide.

**Following are the prerequisites to publish a Web App from Volt MX Iris to a DX Environment**

The Iris Preferences popup is now updated to support properties for seamless integration between Iris and DX. The properties are housed in a new category named "DXClient", as shown in the screenshot below.

<img src="Resources/Images/Iris_Preferences_DXClient_Default.png" width="500"><br>

1. Generate a Portlet for DX

    To generate a portlet, user needs to provide path to the Maven executable.

    <img src="Resources/Images/Iris_Preferences_DXClient_Portlet.png" width=500>

    Incase the user has not provided it in preferences, an error popup is displayed at the time of application build that prompts the user to add the path.

    <img src="Resources/Images/Iris_Preferences_GeneratePortlet_Build_Validation.png" width=500>

2. Publish a Portlet for DX

    In addition to providing Maven path, user needs to add properties that are required to publish the generated portlet to a DX environment.

    <img src="Resources/Images/Iris_Preferences_DXClient_Default.png" width=500>

    Incase the user has not enabled publish to DX in preferences, an error popup is displayed at the time of application build that prompts the user to enable this option.

    <img src="Resources/Images/Iris_Preferences_DeployPortlet_Build_Validation.png" width=500>


    <img src="Resources/Images/Iris_Preferences_DXClient_Deploy.png" width=500><br>


    Once all the properties are updated, the user will be able to initiate a build.


    <img src="Resources/Images/Iris_Preferences_DXClient_Complete.png" width=500>


3. ```MAVEN_HOME``` needs to be added to the environment variables on Windows machines.

4. If you want to connect to a DX environment with a Self-Signed Certificate, ensure that you perform at least one of the following actions:

    Add the ```process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;``` entry in the <install_dir>/config/default.js file.

    Add the ```NODE_TLS_REJECT_UNAUTHORIZED = 0;``` entry in the Environment variables of your System.

5. Ensure that Maven version 3.9.x is installed.

6. Ensure that Java version 8 or 11 is installed.


Folowing properties are mandatory in order to publish to an DX environment

| Property | Description |
| --- | --- |
| Enable Publish to DX Environment | This option enables the user to configure properties for publishing the MX app to the DX environment. |
| Protocol | Specifies the DX Connect protocol. |
| Hostname | Specifies the hostname of the DX environment. <br>Example: “localhost”, “dx.sbx0032.play.hclsofy.com”. <br><br> Note: Specific to Iris version 9.5.45, for host name **localhost**, Volt MX Iris connects to the DX environment using the <b>http</b> protocol. For non local hosts, <b>https</b> protocol is used to connect to the DX environment.|
| Connect Port | Specifies the port number of the Configuration Wizard(cw_profile). |
| Connect Username | Specifies the username that is required for authenticating to the Configuration Wizard(cw_profile). |
| Connect Password | Specifies the password that is required for authenticating to the Configuration Wizard(cw_profile). |
| Validate | Verifies if the DX environment is available based on the hostname provided.<br><br> Note : Ensure that Connect Username and Connect Password are provided prior to validating. |
| Username | Specifies the DX username, which will be used to authenticate with the DX environment to publish a portlet. |
| Password | Specifies the DX password, which will be used to authenticate with the DX environment to publish a portlet. |
| DX Protocol | Specifies the DX protocol. |
| DX Port | Specifies the DX port. |

Post Build Actions
------------------

The Build and Publish Web option in Volt MX Iris builds the application for the selected Web platforms and performs the selected Post Build Action. You must choose the Post Build Action in the **Build and Publish Web** window, before the build process begins. There are three types of Post Build Actions:

*   [Build and Publish Web App](#build-and-publish-web-app) – This action publishes the application to your Volt MX Foundry environment.
*   [Publish to my App Store](#publish-to-my-app-store) – This action publishes the Web application to your Enterprise App Store.
*   [Generate Web App](#generate-web-app) – This action generates the archive for your Web application and saves it on your file system.
*   [Generate a Portlet for DX](#generate-a-portlet-for-dx) - This action generates a DX compatible portlet for your Web application and saves it on you file system.
*   [Build and Publish Portlet to DX](#build-and-publish-portlet-to-dx) - This action publishes the DX compatible portlet to your DX environment.

The Post Build Action is initiated after the Build is complete.

### Build and Publish Web App

The Build and Publish Web App action publishes the application to your Volt MX Foundry environment and enables you to view your app by providing a link.

The Build and Publish Web app option also publishes the Volt MX Foundry app to the Volt MX Cloud.

To publish an app to the Volt MX Cloud, logging in to your Volt MX Account is mandatory.

<!-- <img src="Resources/Images/publishWebApp_389x413.png" alt="" style="width:85%"> vm-->

### Publish to my App Store

The Publish to my App Store action generates the web app archive and publishes the application to your Enterprise App Store. After a successful publish, a confirmation window appears, which shares a link to view the Enterprise app store on your device.

To publish an app to the Enterprise App Store, logging in to your Volt MX Account is mandatory.

For more information on Publish to my App Store, click [here](EAS.md#publish-apps-to-the-enterprise-app-store).

### Generate Web App

The Generate Web App action generates the archives for your Web application and saves it on your file system. The Iris project does not have to be linked to Volt MX Foundry to complete this action.

Once the build is complete, the generated web archives will appear in your project's Volt MX Iris workspace > binaries folder. You can then upload and publish the app on Volt MX Foundry.

Alternatively, once the build is complete, you will get notified by an email from "VoltMX Iris – Build Service", with download links for all these binaries.

### Generate a Portlet for DX

The Generate a Portlet action generates a portlet for your web application and saves it on your file system. This option also publishes the Volt MX Foundry app to the respective Foundry environment.

Once the build is complete, the generated portlet will appear in your project's workspace > binaries > TXArtifacts folder. You can then upload and publish the portlet on DX manually or using DX Client.

<blockquote>
<em><b>Note:</b></em>
<ol>
<li>The feature is available in Iris versions starting 9.5.45 and is not supported in 9.2.x versions.</li>
<li>Desktop Web is the only supported platform.</li>
<li>In Iris, projects of type “Reference Architecture” (the default project type) are supported. Projects of the type “Free Form” are not supported.</li>
<li>Specific to Iris version 9.5.45, in order to build a portlet, user needs to make sure the following folder and its contents have write permissions.<br>
<code>&lt;Path to Iris installation folder&gt;/Volt Iris/kbuild/TXTemplate</code></li>
<li>In order to publish a portlet, user needs to ensure either of the following:
<ul>
<li>Specific to Iris versions 9.5.45 and 9.5.46, make sure the folder below has write permissions:<br>
<code>&lt;Path to Iris installation folder&gt;/Volt Iris</code></li>
<li>Set environment variable <b>VOLUME_DIR</b> prior to launching Iris.</li>
<ul>
i) On Windows, run the following steps
<ul>
<li style="list-style-type:square;">Open a command prompt at location <code>&lt;Path to Iris installation folder&gt;/Volt Iris</code></li>
<li style="list-style-type:square;">Run command <code>set VOLUME_DIR= &lt;path to directory with write permissions&gt;</code></li>
<li style="list-style-type:square;">Run batch file "run_win.bat" to launch Iris.</li>
</ul>
ii) On Mac, run the following steps
<ul>
<li style="list-style-type:square;">Open a terminal at location <code>&lt;Path to Iris installation folder&gt;/Volt Iris</code></li>
<li style="list-style-type:square;">Run command <code>export VOLUME_DIR= &lt;path to directory with write permissions&gt;</code></li>
<li style="list-style-type:square;">Run batch file "run_win.sh" to launch Iris.</li>
</ul>
</ul>
</ul>
</li>
</ol>
</blockquote>

### Build and Publish Portlet to DX

The Build and Publish Portlet to DX action publishes the generated portlet to your DX environment and enables you to view your app in the Manage Portlet section in DX. This option also publishes the Volt MX Foundry app to the respective Foundry environment.

<blockquote>
<em><b>Note:</b></em>
<ol>
<li>The feature is available in Iris versions starting 9.5.45 and is not supported in 9.2.x versions.</li>
<li>Desktop Web is the only supported platform.</li>
<li>In Iris, projects of type “Reference Architecture” (the default project type) are supported. Projects of the type “Free Form” are not supported.</li>
<li>Specific to Iris version 9.5.45, in order to build a portlet, user needs to make sure the following folder and its contents have write permissions.<br>
<code>&lt;Path to Iris installation folder&gt;/Volt Iris/kbuild/TXTemplate</code></li>
<li>In order to publish a portlet, user needs to ensure either of the following:
<ul>
<li>Specific to Iris versions 9.5.45 and 9.5.46, make sure the folder below has write permissions:<br>
<code>&lt;Path to Iris installation folder&gt;/Volt Iris</code></li>
<li>Set environment variable <b>VOLUME_DIR</b> prior to launching Iris.</li>
<ul>
i) On Windows, run the following steps
<ul>
<li style="list-style-type:square;">Open a command prompt at location <code>&lt;Path to Iris installation folder&gt;/Volt Iris</code></li>
<li style="list-style-type:square;">Run command <code>set VOLUME_DIR= &lt;path to directory with write permissions&gt;</code></li>
<li style="list-style-type:square;">Run batch file "run_win.bat" to launch Iris.</li>
</ul>
ii) On Mac, run the following steps
<ul>
<li style="list-style-type:square;">Open a terminal at location <code>&lt;Path to Iris installation folder&gt;/Volt Iris</code></li>
<li style="list-style-type:square;">Run command <code>export VOLUME_DIR= &lt;path to directory with write permissions&gt;</code></li>
<li style="list-style-type:square;">Run batch file "run_win.sh" to launch Iris.</li>
</ul>
</ul>
</ul>
</li>
</ol>
</blockquote>

Publish a Web app
-----------------

Before you publish a web app, ensure that you have a project in which you have a Web app designed.

**To publish a Web app, follow these steps**:

1. Open the Volt MX Iris project in which you have designed a web app.  
2. Sign in to your Volt MX Cloud account.  
3. Link your Iris Project to a Volt MX Foundry app. You can link your Project to a new or an existing Foundry app.
4. On the **Data & Services** panel, click the hamburger menu near the **Refresh** button.
5. Click either **Create New App** or **Link to Existing App**. The Volt MX Foundry console appears.
6. If you have not already, sign in to your Volt MX Foundry account by using your cloud credentials.
7. If you choose:
       * **Create New App**, a new Foundry app with the same name as the Iris Project is created.
       * **Link to Existing App**, a list of existing apps from your Volt MX Foundry account are displayed.
8. To select the Volt MX Foundry app that you want to associate your Volt MX Iris app with, click **Associate** beside the App Name.


    ![](Resources/Images/AssociateFoundryApp_638x384.png)

    The app you chose/created is successfully linked to your Iris Project.

9.  Close the Volt MX Foundry window and return to Volt MX Iris by clicking on the Iris icon on the left navigation pane.
10.  From the main menu of Volt MX Iris, select **Build** > **Build and Publish Web**.  
    The Build and Publish Web window appears.  
    <img src="Resources/Images/Build_and_Publish_Web_App.png" width=500>
    
11.   Select the required Platforms and Channels for which you want to build and publish your web app.
12.   From the **Post Build Action** drop-down menu, select the desired **Post Build Action**. For more details about the Post Build Action, click [here](#post-build-actions).
13.   From the **Build Mode** drop-down list, select your desired build mode.

      *   **Debug mode** \- To help you identify and fix errors, Volt MX Iris emits the complete symbolic debug information . To lessen the amount of time necessary to complete the build, the build is not optimized for code execution, so it may tend to execute slower than a build optimized for release. Also, the inclusion of the symbolic debug information causes the final executable to be larger than a release build.

      *   **Release mode** - Volt MX Iris optimizes the build for execution, requiring more time to generate the build. It also does not emit the complete symbolic debug information, making the final executable smaller than a debug build.

      *   **Protected Mode** - Applications built in Volt MX Iris can use the additional security enhancements by building the application in the _Protected Mode_. Volt MX IrisPlatform code for iOS and Android is equipped with mechanisms that can protect your application by detecting attacks like tampering, swizzling, debugging, jail breaking (iOS), rooting (Android), and information disclosure. Additional security mechanisms are provided through the use of White Box Cryptography to protect application business logic and source code. Application reacts to the attack by exiting upon detecting attacks to prevent further attempts. If you choose to build an application in **Protected mode**, then setting the public and private keys is mandatory. To do so, go to **Project Settings** > **Protected Mode**. For more details on how to generate public and private keys, click [here](ApplicationSecurity.md#rsa-key-pair-generation-encryption-and-usage).

      *   **Test Mode** - To help you identify and fix errors, Volt MX Iris provides the ability to Test the application on the device or an emulator. When you build an app using the Test Mode, you can leverage the Jasmine testing framework of Volt MX Iris to thoroughly test your app and ensure your application is errors free. You can run jasmine test cases, test suites and test plans by building an app using the Test mode.

14.  You can choose to change the cloud environment on which your app will be published. To do so click on **Change** beside the **Environment** option.

15. You can select the **Vanity Domain** from the drop down. The base domain is identified by appended text “[Base]” in the displayed domain name.

    > **_Note:_** Change to vanity domain made in the popup is not persisted.

15. If you do not want to use the SHA1, MD2, MD4, and MD5 hashing algorithms in your application, check **Strict Mode**. If you do use any of those algorithms, leave **Strict Mode** unchecked. Otherwise, you will receive an "Unsupported algorithm" error message.

16.  Once all the required settings are ready, click **Build**.  
    The progress of the Web App Publish is displayed in the Build tab of Iris.  
    Once the publish process is complete, a Web App URL appears on the Build tab.
17.  Click on the generated URL to preview your Web app in the [**Live Preview** mode](LivePreview.md#live-preview).  
    The Iris Preview window appears. You can use this window to debug the application.
18.  You can also click on **Copy** to copy the URL to your clipboard and view it in a web browser of your choice.  
    ![](Resources/Images/WebPublishURL_603x200.png)
19.  Click on **View Logs** to access the logs of the publish process.
20.  An **Application was deployed mail** will also be sent to your registered e-mail account. This mail will contain the App details along with the App URL. Click on the URL in the mail to open the web app in your default web browser.

Generate a Portlet for DX
-----------------

Before you generate a Portlet for DX, ensure that you have a project in which you have a Web app designed.

**To generate a portlet for DX, follow these steps**:

1. Open the Volt MX Iris project in which you have designed a web app.  
2. Sign in to your Volt MX Cloud account.  
3. Link your Iris Project to a Volt MX Foundry app. You can link your Project to a new or an existing Foundry app.
4. On the **Data & Services** panel, click the hamburger menu near the **Refresh** button.
5. Click either **Create New App** or **Link to Existing App**. The Volt MX Foundry console appears.
6. If you have not already, sign in to your Volt MX Foundry account by using your cloud credentials.
7. If you choose:
       * **Create New App**, a new Foundry app with the same name as the Iris Project is created.
       * **Link to Existing App**, a list of existing apps from your Volt MX Foundry account are displayed.
8. To select the Volt MX Foundry app that you want to associate your Volt MX Iris app with, click **Associate** beside the App Name.

    ![](Resources/Images/AssociateFoundryApp_638x384.png)

    The app you chose/created is successfully linked to your Iris Project.

9.  Close the Volt MX Foundry window and return to Volt MX Iris by clicking on the Iris icon on the left navigation pane.
10.  From the main menu of Volt MX Iris, select **Build** > **Build and Publish Web**.  
    The Build and Publish Web window appears.  

       <img src="Resources/Images/GenerateAPortletForDX.png" width=500>

    
11.  Select platform "Responsive Web".
12.  From the **Post Build Action** drop-down menu, select the **Generate a Portlet for DX** as a **Post Build Action**. For more details about the Post Build Action, click [here](#post-build-actions).
13.  From the **Build Mode** drop-down list, select your desired build mode.

     *   **Debug mode** \- To help you identify and fix errors, Volt MX Iris emits the complete symbolic debug information . To lessen the amount of time necessary to complete the build, the build is not optimized for code execution, so it may tend to execute slower than a build optimized for release. Also, the inclusion of the symbolic debug information causes the final executable to be larger than a release build.

     *   **Release mode** - Volt MX Iris optimizes the build for execution, requiring more time to generate the build. It also does not emit the complete symbolic debug information, making the final executable smaller than a debug build.

     *   **Protected Mode** - Applications built in Volt MX Iris can use the additional security enhancements by building the application in the _Protected Mode_. Volt MX Iris platform code for iOS and Android is equipped with mechanisms that can protect your application by detecting attacks like tampering, swizzling, debugging, jail breaking (iOS), rooting (Android), and information disclosure. Additional security mechanisms are provided through the use of White Box Cryptography to protect application business logic and source code. Application reacts to the attack by exiting upon detecting attacks to prevent further attempts. If you choose to build an application in **Protected mode**, then setting the public and private keys is mandatory. To do so, go to **Project Settings** > **Protected Mode**. For more details on how to generate public and private keys, click [here](ApplicationSecurity.md#rsa-key-pair-generation-encryption-and-usage).

14.  You can choose to change the cloud environment on which your app will be published. To do so click on **Change** beside the **Environment** option.

15. You can select the **Vanity Domain** from the drop down. The base domain is identified by appended text “[Base]” in the displayed domain name.

    > **_Note:_** Change to vanity domain made in the popup is not persisted.

16. If you do not want to use the SHA1, MD2, MD4, and MD5 hashing algorithms in your application, check **Strict Mode**. If you do use any of those algorithms, leave **Strict Mode** unchecked. Otherwise, you will receive an "Unsupported algorithm" error message.

17.  Once all the required settings are ready, click **Build**.  
    The progress is displayed in the Build tab of Iris. Once the build process is complete, a link to the generated portlet appears in the Build tab.

      <img src="Resources/Images/Generate_A_Portlet_Build_Tab.png" width=900>

18.  Click on the generated link to navigate to the generated portlet in your file explorer.  


Publish a Portlet for DX
-------------------------

1. Open the Volt MX Iris project in which you have designed a web app.  
2. Sign in to your Volt MX Cloud account.  
3. Link your Iris Project to a Volt MX Foundry app. You can link your Project to a new or an existing Foundry app.
4. On the **Data & Services** panel, click the hamburger menu near the **Refresh** button.
5. Click either **Create New App** or **Link to Existing App**. The Volt MX Foundry console appears.
6. If you have not already, sign in to your Volt MX Foundry account by using your cloud credentials.
7. If you choose:
       * **Create New App**, a new Foundry app with the same name as the Iris Project is created.
       * **Link to Existing App**, a list of existing apps from your Volt MX Foundry account are displayed.
8. To select the Volt MX Foundry app that you want to associate your Volt MX Iris app with, click **Associate** beside the App Name.

    ![](Resources/Images/AssociateFoundryApp_638x384.png)
      
   
    The app you chose/created is successfully linked to your Iris Project.

9.  Close the Volt MX Foundry window and return to Volt MX Iris by clicking on the Iris icon on the left navigation pane.
10.  From the main menu of Volt MX Iris, select **Build** > **Build and Publish Web**. The Build and Publish Web window appears.

      <img src="Resources/Images/BuildAndPublishPortletToDX.png" width=500>

    
11.  Select platform **Responsive Web**.
12.  From the **Post Build Action** drop-down menu, select the **Build and Publish Portlet to DX** as a **Post Build Action**. For more details about the Post Build Action, click [here](#post-build-actions).
13.  From the **Build Mode** drop-down list, select your desired build mode.

     *   **Debug mode** \- To help you identify and fix errors, Volt MX Iris emits the complete symbolic debug information . To lessen the amount of time necessary to complete the build, the build is not optimized for code execution, so it may tend to execute slower than a build optimized for release. Also, the inclusion of the symbolic debug information causes the final executable to be larger than a release build.

     *   **Release mode** - Volt MX Iris optimizes the build for execution, requiring more time to generate the build. It also does not emit the complete symbolic debug information, making the final executable smaller than a debug build.
     
     *   **Protected Mode** - Applications built in Volt MX Iris can use the additional security enhancements by building the application in the _Protected Mode_. Volt MX IrisPlatform code for iOS and Android is equipped with mechanisms that can protect your application by detecting attacks like tampering, swizzling, debugging, jail breaking (iOS), rooting (Android), and information disclosure. Additional security mechanisms are provided through the use of White Box Cryptography to protect application business logic and source code. Application reacts to the attack by exiting upon detecting attacks to prevent further attempts. If you choose to build an application in **Protected mode**, then setting the public and private keys is mandatory. To do so, go to **Project Settings** > **Protected Mode**. For more details on how to generate public and private keys, click [here](ApplicationSecurity.md#rsa-key-pair-generation-encryption-and-usage).

14.  You can choose to change the cloud environment on which your app will be published. To do so click on **Change** beside the **Environment** option.

15. You can select the **Vanity Domain** from the drop down. The base domain is identified by appended text “[Base]” in the displayed domain name.

    > **_Note:_** Change to vanity domain made in the popup is not persisted.

15. If you do not want to use the SHA1, MD2, MD4, and MD5 hashing algorithms in your application, check **Strict Mode**. If you do use any of those algorithms, leave **Strict Mode** unchecked. Otherwise, you will receive an "Unsupported algorithm" error message.
16.  Once all the required settings are ready, click **Build**.  
    The progress is displayed in the Build tab of Iris.  
    Once the publish process is complete, a URL to the Manage Portlet section in the DX environment appears in the Build tab.
17.  Click on the generated URL to view the deployed portlet in the DX environment.
18.  You can also click on **Copy** to copy the URL to your clipboard and view it in a web browser of choice.

      <img src="Resources/Images/Publish_A_Portlet_Build_Tab.png" width=900>


---

## Limitations

1. Only one MX app can be added in one DX page. Multiple MX apps in one DX page are not supported.
2. App state management is not supported. In DX, if user navigates from page #1 that contains an MX app portlet, to page #2 and switches back to page #1, the previous state of MX app in page #1 is not retained.
3. To avoid CORS issues for apps that use Foundry services available at a different domain from that of DX, the DX domain should be whitelisted in Foundry.
4. **Test** as a build mode in Build and Publish Web popup is not supported.


### Enable Node Build for Responsive Web Apps

From the V9 ServicePack4 Fixpack 21, the build performance of Responsive Web Apps (that use the CSS Library mode) has been enhanced to use Node builds. With the introduction of Node builds, the time taken to build a Responsive Web App has reduced significantly.

Follow these steps to enable Node Builds for Responsive Web Apps:

1. Navigate to the location of your project. For example, `<your workspace folder>/<appid>/`.

2. Create a New Folder with the name **custombuild** (if it doesn’t already exist).

3. In the custombuild folder, create a new file, **spadw.properties**.

4. In the spadw.properties file, add the following entry:

    **desktopwebNodeBuild=true**

5. Save and close the file.

6. Build and Publish the project as usual.

Observe the time taken to build the app is less than half the time it used to take.