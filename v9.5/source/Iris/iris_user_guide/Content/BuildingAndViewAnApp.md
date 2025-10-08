                          

You are here: Building an Application

Building and Viewing an Application
===================================

Volt MX  Iris gives you different ways of building and viewing your app, depending on your needs. In Volt MX Iris Classic, you can build your app either from the **Product** menu, or from a command line. And you can view your built app either by previewing it on a mobile device, or by using device emulators and simulators that you configure.

For a smooth build in Volt MX Iris Classic, you'll want to ensure that the following issues have been addressed:

*   Ensure that Volt MX Foundry is set up in Volt MX Iris and that you have selected a default Volt MX Foundry environment to publish to. For more information, see [Connect to the Volt MX Foundry Console](Connect_to_VoltMXFoundry.md).
*   Be prepared to provide your Volt MX Iris licensing information the first time you build an application.
*   You can choose to not generate print statements during either or both Debug Mode builds and Release Mode builds. For more information, see [Disable Print Statements in Builds](DisablePrintStatementsInBuilds.md).
*   For Android, ensure you have set the minimum SDK version to between 4.0 and 4.4. To change this setting, on the **File** menu, click **Settings**. Click the **Native** tab, and then click the **Android** sub-tab. The Minimum setting is located in the SDK Versions section of the dialog box. After changing the setting, click **Finish**.
*   For Android, ensure you have set the location of the Android SDK. To do so, on the **Window** menu, click **Preferences**. In the left pane, double-click **VoltMX Iris**, and then click **Build**. If it hasn't done so already, at this point Volt MX Iris auto-detects the Android SDK and asks if you would like to use the path that it has discovered as the Android Home. If you wish to, click **OK**. If Volt MX Iris did not auto-detect the Android SDK, in the **Android Home** text box, enter the path to the Android SDK packages. To ensure you don't introduce errors into the path that you type, you may want to click the accompanying **Browse** button, navigate to the Android SDK's location, and then click **OK**.
*   For Android, ensure you have set the SDK home environment variable for your computer. To do so, see [Set the Android SDK Home Environment Variable](SUG_Android.md#set-the-android-sdk-home-environment-variable).

> **_Important:_** If your app contains deprecated widgets, it's possible that their skins may make reference to the Helvetica font. If you are not explicitly using Helvetica in your app, you should verify your app's configuration and manually remove references to Helvetica before submitting it to the store. The following topics are covered with regard to building an app using Volt MX Iris.

[Build an iOS Application](BuildAnAppForiOS.md)

[Build an Android Application](BuildAnAppForAndroid.md)

[Build a Universal Application](BuildUniversalApp.md)

[Build an SPA Application](BuildAnSPAApplication.md)

[Build a Native App on a Local machine](LocalBuildStarter.md)

[Disable Print Statements in Builds](DisablePrintStatementsInBuilds.md)

[Perform a Headless Build](CommandLine.md)

[Continuous Integration](CI_BUILD_VoltMX_Iris_Classic.md)

[Publish a Project to VoltMXFoundry](PublishVoltMXFoundryServicesApp.md)

[Preview an App on a Device](PreviewAnAppOnADevice.md#FunctionalPreviewEnterprise.md)

[Monitor an App's Performance](MonitorAppPerformance.md)

[View an Application on an Emulator](Viewing_an_Application_on_Emulators.md)

[iOS Build Automation](iOS_Automatic_Output_Generation.md)

[Open Webapp and Build Folders](OpenBuildFolder.md)

[Incremental Build](#incremental-build)

Build in the Background
-----------------------

When a user builds an application in Volt MX Iris, till Volt MX Iris V8, the user was not allowed to perform any other activities on Iris till the build is complete. The user is effectively blocked from performing any design activities when the build is in progress. From Volt MX Iris V 8.1 release onwards, some parts of the build process happens in the background thus enabling a user to continue with their design activities while the build is in progress.

When you click on Build, the Initiating Build message appears. Then, the dialog box minimizes to the console panel, and the build continues in the background. You can see the Build status in the Build tab next to the Console and Search tabs in the console panel.

The tab displays information on different types of builds you chose and their status. A blue progress bar displays the progress of the build for each of the channels you chose. Once the build process is complete, an alert pop up appears on the screen. Once you close the alert popup, the build panel displays the build status for each one of the channels.

Incremental Build
-----------------

While developing any application on Iris, you must undertake certain steps such as testing the application and building the binaries multiple times. For every change that you make in the app, the whole project needs to be built each time; thereby, increasing the build time.

To ensure that there is a faster turnaround, a new feature, Incremental Build is introduced in Volt MX Iris V8 SP4 release.

When an app is built for the first time, a full build is performed. The subsequent builds are incremental. In an incremental build, the previously built state of the project is used and only those resources that are changed since the last build are regenerated.

The following are the scenarios where the build is always a full build.

*   If controllers that interact with the NFI are modified.
    
*   If controllers that interact with third-party libraries are modified.
    
*   If any changes are made to the property window. For example, SDK/iOS deployment.
    
*   If a HCL Forge component is added into the Iris project.
    
*   If a new app module(group) is added into the Iris project.
    
*   If any changes are made to plugins like Sketch and Adobe Photoshop.
    
*   If the following project settings are modified:
    *   Accessibility Config
    *   Enable Cordova
    *   Enable Action Bar (for Android native platform)
    *   Enable Responsive Web (for Desktop Web platform)
    *   Enable i18n Layout Config
    *   Enable designer/ developer actions

You do not have to perform an incremental build and a full build separately. Iris will automatically decide whether to perform a full build or an incremental build based on the changes made.

If you add an external asset or library to the Iris project after a full build, you must clean up the project using the **Clean** menu. The **Clean** menu erases files that were generated during the previous build and makes the project ready for the subsequent build. Once the project is cleaned, Iris will perform a full build the next time you trigger a build.

If you do not clean the project and perform a build, Iris will not take into consideration the assets and libraries added while performing the build.

> **_Note:_** The Incremental build is supported only by the regular build.
