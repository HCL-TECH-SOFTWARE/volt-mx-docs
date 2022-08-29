                         


Continuous Integration for Volt MX Iris
=============================================

Introduction
------------

CI Build allows the user to build and publish an app from the command line without any eclipse/installer dependency.

### Prerequisites

**Following are the prerequisites to install CI Build**:

1.  Ant must be installed on the system. The required version of Ant is specified in the `externaldependencies.json` file that is downloaded as part of the CI tool package.  
    Based on the version of the Volt MX Iris CI Tool, the required Ant versions are as follows:
    *   Ant Version 1.10.8 (or later) for Volt MX Iris V9 SP1.
    *   Ant Version 1.8.2 (or later) for Volt MX Iris V9.
2.  Node must be installed on the system. The required version of Node is specified in the `externaldependencies.json` file that is downloaded as part of the CI tool package.  
    Based on the version of the Volt MX Iris CI Tool, the required Node versions are as follows:
    *   Node Version 13.10.1 (or later) for Volt MX Iris V9 SP1.
    *   Node Version 11.14.0 (or later) for Volt MX Iris V9.
3.  Download and extract the zip file from the location:download.voltmx.com/iris\_enterprise/citools/<fix pack/service pack version>/iris-ci-tool-<fix pack/service pack version>.zip into the project location.  
    For example, for V9 SP2 FP37 the URL is [https://download.hclvoltmx.com/visualizer_enterprise/citools/9.2.37/visualizer-ci-tool-9.2.37.zip](https://download.hclvoltmx.com/visualizer_enterprise/citools/9.2.37/visualizer-ci-tool-9.2.37.zip)
4.  Copy plugindownload.js, package.json and build.js files from iris-ci-tool<fix pack/service pack version> folder.
5.  Open the command prompt in the project location and perform the npm install.
6.  Update plugin.dir and javaloc properties in HeadlessBuild.properties file.
  

 

### CI Build for Volt MX Iris


The following properties have a default value. You can configure them if required.

| Property Name | Property Key | Default Value | Property File Name |
| --- | --- | --- | --- |
| Accessibility config | isA11yConfigEnabled | false | projectprop.xml |
| Android wear minimum sdk version | andwearminsdkkey | 7.1 (25) | projectprop.xml |
| Android wear target sdk version | andweartargetsdkkey | 7.1(25) | projectprop.xml |
| Android wear maximum sdk version | andwearmaxsdkkey | None | projectprop.xml |
| Android (mobile/tablet) minimum sdk version | andminsdkkey | 4.0(14) | projectprop.xml |
| Android (mobile/tablet) target sdk version | andtargetsdkkey | 4.0(14) | projectprop.xml |
| Android (mobile/tablet) maximum sdk version | andmaxsdkkey | None | projectprop.xml |
| iOS Deployment target version | mac.iosdeploymenttarget |   | HeadlessBuild.properties |
| Apple watch Deployment target version | mac.watchosdeploymenttarget |   | HeadlessBuild.properties |
| iOS swift version | mac.swiftversion |   | HeadlessBuild.properties |
| Splash screen related changes |   |   | splashscreenproperties.json |

  

In case you want to modify any of the listed properties, you can find them in the following location: <workspace name>/<application name>.

### Configure HeadlessBuild.Properties

HeadlessBuild.properties file is present in the project location.

#### New Entries


<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 363px;"><col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><span style="font-family: monospace;">protectedmodeenabled.ios</span></td><td class="TableStyle-Basic-BodyD-Column1-Body1">If the user wants to build for iOS in protected mode, change the value to true.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><span style="font-family: monospace;">protectedmodeenabled.android</span></td><td class="TableStyle-Basic-BodyD-Column1-Body1">If the user wants to build for android in protected mode, change the value to true.</td></tr><tr class="TableStyle-Basic-Body-Body1" data-mc-conditions="Default.V9 SP2"><td class="TableStyle-Basic-BodyE-Column1-Body1"><span>protectedmodeenabled.web</span></td><td class="TableStyle-Basic-BodyD-Column1-Body1">If the user wants to build a web application in the protected mode, change the value to true.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><span style="font-family: monospace;">plugin.dir</span></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Points to the directory, where the plugins required for the build are copied.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><span style="font-family: monospace;">javaloc</span></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Java home (provide the folder location consisting bin where the Java is installed.)Example: <span style="font-family: monospace;">&lt;Install_location&gt;\VoltMXIrisEnterprise8.0\Java\jdk</span></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><span style="font-family: monospace;">androidHome</span></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Android SDK path</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">For Proxy setup, the following new entries are applicable:<span style="font-family: monospace;">proxy.host</span><span style="font-family: monospace;">proxy.port</span><span style="font-family: monospace;">proxy.username</span><span style="font-family: monospace;">proxy.password</span></td><td class="TableStyle-Basic-BodyA-Column1-Body1">If you are running CI build on a system behind a proxy, provide proxy details.</td></tr></tbody></table>

> **_Note:_** Any property which is in the projectProperties.json can be configured via the HeadlessBuild.properties file with the same key.

#### Existing Entries

**Add the following existing entries in HeadlessBuild.properties file:**

| Key Name | Description |
| --- | --- |
| project.name | Project name |
| mode | Only modes 0, 1 and 2 are supported |
| build.mode | The mode of the build. Release or Debug. |
| appid | ID of the application |
| **#cloud mode credentials**cloud.usernamecloud.password | Applicable only for cloud |
| **#mobilefoundry specific details**mobilefoundry.urlenvironment.nameaccountd.idmf.appname | Applicable only when you are trying to publish the app. |
| **#specify the environment you want to publish** Example:qa cloud.environment | Applicable only when you are trying to publish the app. |
| #The platforms for which the headless build need to run**#Mobile Channel**iphoneandroidspa.iphonespa.android**#Tablet**ipadandroidtabletspa.ipadspa.androidtabletspa.windowstablet**\# Desktop Channel**desktopweb**\# Wearables**iphonewatchandroidwearos | The value is either true or false. Enter true to build the platform else false.Please note that you cannot build Apple watch alone. When you build for Apple watch ensure that you build for iPhone as well. |
| #Provide the following details for IPA generation:mac.ipaddressmac.usernamemac.passwordkeychain.passworddevelopment.team.id`method`genipaiphone (to generate IPA for iPhone)genipaipad (to generate IPA for iPad) | Enter true to generate IPA for iPhone and iPad.For the method, possible values supported are **app-store**, **ad-hoc**, **enterprise**, and **development**. |
| Universal build for iOS:universal.iPhone`universal.android` | Enter true to perform universal build for iPhone.Enter true to perform universal build for Android. |
| #Windows platform for headless build:**#Mobile Channel**windowsphone10**#Tablet**windows10**#Desktop Channel**desktop\_kiosk | Window platforms |
| binaries.location | Location, where the binaries are saved after the app is successfully built. |
| `versiondefault_localeandroid.packagenameandroid.versioncodeios.bundleversion` | Support has been added for the following items from V8 SP1 onwards. |
| `keyAlias keyPasswordkeyStoreFilePathkeyStorePassword` | Support has provided for the Android signing keys from V8 SP1 onwards for signing. |
| `context.path.identity context.path.workspace context.path.accounts context.path.console` | Supported context paths for Volt MX Foundry components, if customized. |
| `login.siteminder.url` | Siteminder login URL if your on-premise Volt MX Foundry is protected by siteminder. |
| `iosappextension` | App extension of the iOS. |
| `iosappextension` | App extension of the iOS. |

> **_Important:_** There are many keys available in the **HeadlessBuild.properties** file. However, not all of them are applicable for the CI Build. The keys mentioned above are the only ones applicable for CI Build.

> **_Important:_** If you do not want to store your password in the headless build.properties file, you can use mfcli to encrypt your password. You can download the mfcli.jar from [https://community.hclvoltmx.com/downloads](https://community.hclvoltmx.com/downloads).  
  
Ensure that you use the corresponding version of MFCLI as that of the Iris. i.e 7.x iris, 7.x mfcli, 8.x iris, 8.x mfcli.  
  
To encrypt the password using mfcli (using default password.encryption.key),  
`java -jar mfcli.jar encrypt "VoltMX@1234"  
Encrypted password is: en1801f1abee7b9e12426c062509e1b18epd`

  

### Build the Application for Volt MX Iris

**Follow these steps to build the application:**

1.  Open the command prompt in the project location.
2.  Run the node command node build.js in any of the following formats. These commands will download the required plugins as well as build the application.
    *   node build.js --voltmxirisversion <version number> // This command will download the specified plugin version to'plugin.dir' location and build the app.
    *   node build.js // This command will build the app with existing plugins located in 'plugin.dir'.
    *   node build.js -clean // This command will re-extract the plugins from plugin.dir folder
    
    > **_Note:_** For Delta download or when the 'plugin.dir' location already has a set of plugins then, run the following command  
    node build.js -c --voltmxirisversion <version number>  
      
    This command will download the upgraded plugins and build the project.
    
3.  If the app is built successfully, the binaries are saved in the location defined in the binaries section of HeadlessBuild.properties file.
    
    > **_Note:_** If the binary location is not specified in the file, the binaries are saved in the following default location.  
    <projectLocation>/Binaries.
    

### Build .js Arguments

| Command | Usage |
| --- | --- |
| \--help -h | Help for the build.js arguments |
| \--clean -c -clean | Cleans extracted bundles folder and extracts plugins again. |
| \--voltmxirisversion -kvv | To download plug-ins of specified Iris version. |
| \--proxy | Forwards the request through the HTTP(s) proxy server if the script is running on a restricted network. You must provide proxy server details along with credentials if required. |

**Usage:**`node build.js --clean --voltmxirisversion 9.0.3 --proxy http://user_name:password@proxy.server.com:proxy_port`

### Error Codes

The error codes are indicative of failed stage or operation. The actual error messages differ from the description mentioned below:

**Example**: Error code 50 describes as one of the mandatory field is missing. Actual error message will list the fields missing.

| Error Code | Description |
| --- | --- |
| 50 | One or more mandatory fields are missing in HeadlessBuild.properties. |
| 51 | At least one platform should be selected for the build in HeadlessBuild.properties. |
| 52 | Plugin extraction failed (or) one or more mandatory plugins are missing. |
| 53 | Publishing Volt MX Foundry application failed. |
| 54 | Volt MX Foundry configuration details are missing in HeadlessBuild.properties.Example: error message will be (cloudname, cloudpassword, envname, accountID, mfAppName) is (or) are missing. |
| 55 | Project porting failed. |
| 56 | There are no forms created to build the selected channels.Example: There are no forms created for: Desktop |
| 57 | JAVA\_HOME not found in environment variables (or) expected Java version is not found. |
| 58 | ANT\_HOME not found in environment variables (or) expected ant version is not found. |
| 59 | Expected node version not found.Example: node version mismatch: required 7.10.0, found 6.10.2. |
| 60 | Expected Xcode version not found. |
| 61 | Expected Finalizer version not found. |
| 62 | Build failed for one or more selected platforms. |
| 64 | Android Home not found |
| 65 | Codegen Failed |
| 66 | Package Failed |
| 67 | Upload of web binaries failed |
| 68 | Binary Generation failed |
| 69 | IPA Generation Failed |

#### Platforms Supported

**Following platforms are supported to build the CI application:**

*   iPhone, iPad
*   Android mobile and tablet
*   SPA mobile, tablet and desktop web
*   SPA/DW publish
*   Windows mobile, tablet and kiosk
*   Apple watch and Android wear
