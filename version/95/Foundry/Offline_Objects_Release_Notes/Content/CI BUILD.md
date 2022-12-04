  

Continuous Integration App Factory
==================================

Introduction
------------

CI Build allows user to build and publish app from the command line without any eclipse/installer dependency.

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
        
    *   com.voltmx.cloudthirdparty\_x.x
        
    
    Windows platform is not supported in the version 8.0.
    
3.  Copy package.json and build.json files from download.voltmx.com/iris\_enterprise/citools/<fix pack/service pack version>/iris-ci-tool-<fix pack/service pack version>.zip in the project location.
4.  Open the command prompt in the project location and perform the npm install.

### Configure HeadlessBuild.Properties

HeadlessBuild.properties file is present in the project location.

#### New Entries

**Upgrade Enterprise project to 8.x or add the below new entries in** **HeadlessBuild.properties** **file**:

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 363px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><span style="font-family: monospace;">protectedmodeenabled.ios=false</span></td><td class="TableStyle-Basic-BodyD-Column1-Body1">If the user want to build for iOS in protected mode, change the value to true.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><span style="font-family: monospace;">protectedmodeenabled.android=false</span></td><td class="TableStyle-Basic-BodyD-Column1-Body1">If the user want to build for android in protected mode, change the value to true.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><span style="font-family: monospace;">plugin.dir=</span></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Points to the directory, where the plugins required for the build are copied.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><span style="font-family: monospace;">javaloc=</span></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Java home (provide the folder location consisting bin where the Java is installed.)</p><p>Example: <span style="font-family: monospace;">&lt;Install_location&gt;\VoltMXIrisEnterprise8.0\Java\jdk</span></p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><span style="font-family: monospace;">androidHome=</span></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Android SDK path</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">For Proxy setup, the following new entries are applicable:<br><span style="font-family: monospace;">proxyhost=</span><br style="font-family: monospace;"><span style="font-family: monospace;">proxyport=</span><br style="font-family: monospace;"><span style="font-family: monospace;">proxyuser=</span><br style="font-family: monospace;"><span style="font-family: monospace;">proxypassword=</span><br></td><td class="TableStyle-Basic-BodyA-Column1-Body1">&nbsp;</td></tr></tbody></table>

#### Existing Entires

**Add the following existing entries in HeadlessBuild.properties file:**

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 363px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><span style="font-family: monospace;">project.name=</span></td><td class="TableStyle-Basic-BodyD-Column1-Body1">&nbsp;</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><span style="font-family: monospace;">mode=</span></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Only modes 0, 1 and 2 are supported</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><span style="font-family: monospace;">build.mode=</span></td><td class="TableStyle-Basic-BodyD-Column1-Body1">&nbsp;</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><span style="font-family: monospace;">appid=</span></td><td class="TableStyle-Basic-BodyD-Column1-Body1">&nbsp;</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-family: monospace;"><b>#cloud mode credentials</b><br>cloud.username=<br>cloud.password=</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Applicable only for cloud</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-family: monospace;"><b>#mobilefoundry specific details</b><br>mobilefoundry.url<br>environment.name<br>accound.id<br>mf.appname</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Applicable only when you are trying to publish the app.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-family: monospace;"><b>#specify the environment you want to publish</b> Example:qa<br>cloud.environment=</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Applicable only when you are tyring to publish the app.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>#The platforms for which the headless build need to run<br><b>#Mobile Channel</b><br><span style="font-family: monospace;">iphone=</span><br style="font-family: monospace;"><span style="font-family: monospace;">android=</span><br style="font-family: monospace;"><span style="font-family: monospace;">spa.iphone=</span><br style="font-family: monospace;"><span style="font-family: monospace;">spa.android=</span><br style="font-family: monospace;"><span style="font-family: monospace;">spa.blackberry=</span><br style="font-family: monospace;"><span style="font-family: monospace;">spa.winphone=</span><br><b>#Tablet</b><br><span style="font-family: monospace;">ipad=</span><br style="font-family: monospace;"><span style="font-family: monospace;">androidtablet=</span><br><span style="font-family: monospace;">spa.ipad=</span><br style="font-family: monospace;"><span style="font-family: monospace;">spa.androidtablet=</span><br style="font-family: monospace;"><span style="font-family: monospace;">spa.windowstablet=</span><br><b># Desktop Channel</b><br><span style="font-family: monospace;">desktopweb=</span></p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>The value is either true or false. Enter true to build the platform else false.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><span style="font-family: monospace;">binaries.location=</span></td><td class="TableStyle-Basic-BodyA-Column1-Body1">location where the binaries are saved after the app is successfully built.</td></tr></tbody></table>

#### Platforms Supported

**Following platforms are supported to build the CI application:**

*   iPhone, iPad
*   android mobile and tablet
*   SPA mobile, tablet and Desktop web
*   SPA/DW publish

### Build the Application

**Follow these steps to build the application:**

1.  Copy the build.js file to the project location.
2.  Update the HeadlessBuild.properties file of the project, provide the necessary entries.
3.  Open the command prompt in the project location.
4.  Run the node command node build.js

If there is a change in the plugin (or) running CI for the first time use –clean parameter, as below:

node build.js –clean

7.  If the app is built successfully, the binaries are saved in the location defined in the binaries section of HeadlessBuild.properties file.
    
    If the binary location is not specified in the file, the binaries are saved in the following default location.  
    <projectLocation>/Binaries.
