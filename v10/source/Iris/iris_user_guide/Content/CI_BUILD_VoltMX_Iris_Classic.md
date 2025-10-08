                         

Continuous Integration
======================

Introduction
------------

CI Build allows the user to build and publish an app from the command line without any eclipse/installer dependency.

### Prerequisite

**Following are the prerequisites to install CI Build**:

1.  Ant (version >1.8.2) and Node (version > 7.10.0) should be installed in the system.
2.  Copy the following plugins from <<install\_location>>\\VoltMXIrisEnterprisex.x\\VoltMX\_Iris\_Enterprise\\plugins to a new folder.
    
    *   com.voltmx.desktopweb\_x.x
        
    *   com.voltmx.ios\_x.x
        
    *   com.voltmx.mobile.foundry.client.sdk\_x.x
        
    *   com.voltmx.spa\_x.x
        
    *   com.voltmx.studio.iris.core.win64\_x.x(for Windows 64-bit users)
        
    *   com.voltmx.studio.iris.core.win32\_x.x (for Windows 32-bit users)
    *   com.voltmx.studio.iris.core.mac64\_x.x (for Mac 64-bit users)
    *   com.voltmx.studio.iris.core.mac32\_x.x (for Mac 32-bit users)
    *   com.voltmx.thirdparty.jars\_x.x
        
    *   com.voltmx.windows\_x.x
        
    *   com.voltmx.windows8\_x.x
        
    *   com.voltmx.windows10\_x.x
        
    *   com.voltmx.windowsphone8\_x.x
        
    *   com.pat.android\_x.x
        
    *   com.pat.tabrcandroid\_x.x
        
    *   com.pat.tool.keditor\_x.x
        
    *   com.voltmx.cloudmiddleware\_x.x
        
    *   com.voltmx.webcommons\_x.x
        
    *   com.voltmx.cloudthirdparty\_x.x
    
    > **_Note:_** Windows platform is not supported in the version 8.0.
    
3.  Copy package.json and build.js files from download.voltmx.com/iris\_enterprise/citools/<fix pack/service pack version>/iris-ci-tool-<fix pack/service pack version>.zip in the project location. For example, For Fix Pack 8 of V8 the URL is [http://download.voltmx.com/iris\_enterprise/citools/8.0.8/iris-ci-tool-8.0.8.zip](http://download.voltmx.com/iris_enterprise/citools/8.0.8/iris-ci-tool-8.0.8.zip)
4.  Open the command prompt in the project location and perform the npm install.

### Configure HeadlessBuild.Properties

HeadlessBuild.properties file is present in the project location.

#### New Entries

**Upgrade Volt MX Iris Classic project to 8.x or add the below new entries in** **HeadlessBuild.properties** **file**:

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 363px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><span style="font-family: monospace;">protectedmodeenabled.ios</span></td><td class="TableStyle-Basic-BodyD-Column1-Body1">If the user wants to build for iOS in protected mode, change the value to true.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><span style="font-family: monospace;">protectedmodeenabled.android</span></td><td class="TableStyle-Basic-BodyD-Column1-Body1">If the user wants to build for android in protected mode, change the value to true.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><span style="font-family: monospace;">plugin.dir</span></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Points to the directory, where the plugins required for the build are copied.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><span style="font-family: monospace;">javaloc</span></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Java home (provide the folder location consisting bin where the Java is installed.) Example: <span style="font-family: monospace;">&lt;Install_location&gt;\VoltMXIrisEnterprise8.0\Java\jdk</span></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><span style="font-family: monospace;">androidHome</span></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Android SDK path</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">For Proxy setup, the following new entries are applicable:<span style="font-family: monospace;">proxy.host</span><span style="font-family: monospace;">proxy.port</span><span style="font-family: monospace;">proxy.username</span><span style="font-family: monospace;">proxy.password</span></td><td class="TableStyle-Basic-BodyA-Column1-Body1">If you are running CI build on a system behind a proxy, provide proxy details.</td></tr></tbody></table>

#### Existing Entries

**Add the following existing entries in HeadlessBuild.properties file:**

  
| Key Name | Description |
| --- | --- |
| project.name | Project name |
| mode | Only modes 0, 1 and 2 are supported |
| build.mode | The mode of the build. Release or Debug. |
| appid | ID of the application |
| **#cloud mode credentials** cloud.usernamecloud.password | Applicable only for cloud |
| **#mobilefoundry specific details** mobilefoundry.urlenvironment.nameaccountd.idmf.appname | Applicable only when you are trying to publish the app. |
| **#specify the environment you want to publish** Example:qa cloud.environment | Applicable only when you are trying to publish the app. |
| #The platforms for which the headless build need to run**#Mobile Channel**iphoneandroidspa.iphonespa.android**#Tablet**ipadandroidtabletspa.ipadspa.androidtabletspa.windowstablet**\# Desktop Channel**desktopweb**\# Wearables**iphonewatchandroidwearos | The value is either true or false. Enter true to build the platform else false. Please note that you cannot build Apple watch alone. When you build for Apple watch ensure that you build for iPhone as well. |
| #Provide the following details for IPA generation:mac.ipaddressmac.usernamemac.passwordkeychain.passworddevelopment.team.id`method`genipaiphone (to generate IPA for iPhone)genipaipad (to generate IPA for iPad) | Enter true to generate IPA for iPhone and iPad. For the method, possible values supported are **app-store**, **ad-hoc**, **enterprise**, and **development**. |
| Universal build for iOS:universal.iPhone`universal.android` | Enter true to perform universal build for iPhone. Enter true to perform universal build for Android. |
| #Windows platform for headless build:**#Mobile Channel**windowsphone10**#Tablet**windows10**#Desktop Channel**desktop\_kiosk | Window platforms |
| binaries.location | Location, where the binaries are saved after the app is successfully built. |
| `versiondefault_localeandroid.packagenameandroid.versioncodeios.bundleversion` | Support has been added for the following items from V8 SP1 onwards. |
| `keyAlias keyPasswordkeyStoreFilePathkeyStorePassword` | Support has provided for the Android signing keys from V8 SP1 onwards for signing. |
| `context.path.identity context.path.workspace context.path.accounts context.path.console` | Supported context paths for Volt MX Foundry components, if customized. |
| `login.siteminder.url` | Siteminder login URL if your on-premise Volt MX Foundry is protected by siteminder. |
| `iosappextension` | App extension of the iOS. |
| #Supported platforms for Generate Native Library generatenativelibrary **#Mobile Channel** iPhone Android Windowsphone10 **#Tablet Channel** iPad Android Tablet Windows10 | The value is either True or False. Enter false to build the Generate Native Library. |

> **_Important:_** There are many keys available in the **HeadlessBuild.properties** file. However, not all of them are applicable for the CI Build. The keys mentioned above are the only ones applicable for CI Build.

> **_Important:_** If you do not want to store your password in the headless build.properties file, you can use mfcli to encrypt your password. You can download the mfcli.jar from [https://community.hclvoltmx.com/downloads](https://community.hclvoltmx.com/downloads).  
  
Ensure that you use the corresponding version of MFCLI as that of the Iris. i.e 7.x iris, 7.x mfcli, 8.x iris, 8.x mfcli.  
  
To encrypt the password using mfcli (using default password.encryption.key),  
`java -jar mfcli.jar encrypt "VoltMX@1234"  
Encrypted password is: en1801f1abee7b9e12426c062509e1b18epd`

#### Platforms Supported

**Following platforms are supported to build the CI application:**

*   iPhone, iPad
*   Android mobile and tablet
*   SPA mobile, tablet and desktop web
*   SPA/DW publish
*   Windows mobile, tablet and kiosk

### Build the Application

**Follow these steps to build the application:**

1.  Copy the build.js file to the project location.
2.  Update the HeadlessBuild.properties file of the project, provide the necessary entries.
3.  Open the command prompt in the project location.
4.  Run the node command node build.js

If there is a change in the plugin use –clean parameter, as below:

node build.js –clean

7.  If the app is built successfully, the binaries are saved in the location defined in the binaries section of HeadlessBuild.properties file.
    
    > **_Note:_** If the binary location is not specified in the file, the binaries are saved in the following default location.  
    <projectLocation>/Binaries.
    

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
