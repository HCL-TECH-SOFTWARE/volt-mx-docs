---
layout: "documentation"
category: "undefined"
---
﻿ 

Build Native Local on
=====================

Overview
--------

**Build Native Local**, a feature introduced in V9, is used to build native app binaries in and store the binaries on a local machine.  
For example, if you have an Android device connected to your system, you can generate the .apk file locally and run it on your device by using adb.

Through the _build_ process, application components are collected and repeatedly compiled for testing purposes, to ensure a reliable final product. The build process creates new resources, updates the existing resources, or does both.

After you develop an application, you must build the application to do the following:

*   Test the application for its performance and appearance on a device or on emulators.
*   Install the application on devices.

You must sign in to using the login credentials of either your Cloud or on-premise environments to use the **Build Native Local** feature.

With the Build Native local feature, the dependency on Xcode for building iOS applications and the dependency on Android SDK for building Android applications has been removed.

The _publish_ process makes the built application accessible from [VoltMX Enterprise App Store](EAS.html#Publishing). When you build and publish a native application, it is hosted on the Enterprise App Store associated to your Cloud account and can be accessed from the server.

The plugins for the native builds will be downloaded when you build the app for the first time. Hence, it may take longer to build the app for the first time. Any subsequent builds will be [incremental](#Incremen) and faster.

If you add an external asset or library to the Iris project after a full build, you must clean up the project using the **Clean Build** option. The **Clean Build** option erases files that were generated during the previous build and makes the project ready for the subsequent build. Once the project is cleaned, Iris will perform a full build the next time you trigger a build.

If you do not clean the project and perform a build, Iris will not take into consideration the assets and libraries added while performing the build.

Incremental Build

While developing an application on Iris, you must undertake certain steps such as testing the application and building the binaries multiple times. For every change that you make in the app, the whole project needs to be built each time; thereby, increasing the build time.

When an app is built for the first time, a full build is performed. The subsequent builds are incremental. In an incremental build, the previously built state of the project is used and only those resources that are changed since the last build are regenerated.

You do not have to perform an incremental build and a full build separately. Iris will automatically decide whether to perform a full build or an incremental build based on the changes made.

The following are the scenarios where the build is always a full build.

*   If controllers that interact with the NFI are modified.
*   If the Project Settings for Android Mobile/Tablet are modified.

Prerequisites
-------------

**Following are the prerequisites to build a native app on a local machine within** :

*   Access to a Environment. You must sign in to using the login credentials of either your Cloud or on-premise environments.  If you want to use the on-premise environment, you must [configure to connect to the URL](LogInUsingCustAuth.html#ConfigureVoltMXFoundryInIrisEnterprise).
*   V9 or later.
*   For publishing to the Enterprise App Store, you must have V8 SP4 or later.
*   Configure the various Project Settings.  
    Go to **Project** > **Settings** and configure the build settings for each Native platform. For more information on Project Settings, click [here](Project Properties in VoltMX Iris.html#top).
*   Platform specific prerequisites:
    *   If you choose to build an application for the **iOS** platform, you must provide the Development method, Development Team ID and Keychain password. To do so, go to **Project Settings** > **Native** > **iPhone/iPad**. For more details on the iOS configurations, click [here](iOS Automatic Output Generation.html).
    
    If you do not configure the project settings, the Build process generates a .kar file.
    
    *   If you choose to build an application for the **Android** platform, you must provide the paths of the Android Home and Java Home. To do so, go to **Edit** > **Preferences** > **Build**. Under the Android section, provide the location of the **Android Home** and **Java Home**.
        
        On Mac machines, while browsing from Iris Preferences, you can use **Command + Shift +.** to view hidden folders such as the Library, System, etc.
        
    *   If you choose to build an application for the **Android** platform in **Release mode**, then the Android signing details are mandatory. To do so, go to **Project Settings** > **Native** > **Android Mobile/Tablet**. For more details on Android signing details, click [here](https://basecamp.voltmx.com/s/article-detail/a046A00000DkadFQAR/android-signing-configuration-in-iris-playstoreenterprise-distribution).
    *   If you choose to build an application for the **Windows** platform, you must ensure that you have [Setup the Development Environment](BuildApplicationsForWindows10.html#Developm) on your machine, and provide the windows application settings at ****Project Settings** > **Native** > **Windows****. For more details, click [here](Project Properties in VoltMX Iris.html#Windows).
        *   A Universal Windows app can be generated through a PWA app. Hence, ensure that you provide the PWA URL in the **Project Settings** > **Native** > **[Windows](Project Properties in VoltMX Iris.html#Windows)** settings. In addition to the PWA URL, and the Development Environment Setup, you must also have Windows SDK version 10.0.17763.0 or later installed on your device.
    
    You can generate a binary for a Windows app only on a Windows machine.
    
*   If you choose to build an application in **Protected mode**, then setting the public and private keys is mandatory. To do so, go to **Project Settings** > **Protected Mode**. For more details on how to generate public and private keys, click [here](ApplicationSecurity.html#Key).

Post Build Actions
------------------

The Build Native Local option in  builds the application for the selected native platforms and performs the selected Post Build Action. You must choose the Post Build Action in the **Build Native Local** window, before the build process begins. There are three types of Post Build Actions:

*   [Generate Native App](#Generate) – This action generates the binaries and build logs for your Native application and saves it on your file system
*   [Publish to my App Store](#Publish) – This action publishes the application to your Enterprise App Store
*   [Run on my Device](#Run) – This action installs the application to your connected device and enables you to view your app on your device

The Post Build Action is initiated after the Build is complete.

### Generate Native App

The Generate Native App action generates the binaries and build logs for your Native application and saves it on your file system. The Iris project does not have to be linked to to complete this action.

Once the build is completed,

*   If you have successfully built your Iris project for the Android channel, you will get Android mobile and/or tablet native APKs in your project's **workspace > binaries > local** folder.
*   If you have successfully built your Iris project for the iOS channel, you will get iOS mobile and/or tablet native IPAs in your project's **workspace > binaries > local** folder.
*   If you have successfully built your Iris project for the Windows channel, you will get windows mobile and/or tablet native APPXs in your project's **workspace > binaries > local** folder.
*   You will also get the build logs in your project's **workspace > binaries** folder. You can refer to the logs to analyze the build for failures or success.

You can generate native apps even for the Universal channel by selecting a platform from the Universal section. This generates the APK, IPA or APPX for each of the platforms and channels selected.

To understand any build failures, you can go through the log file. To understand Run and Publish actions related to this type of Build, refer [Post Successful Build](#Post_Success).

![](Resources/Images/GenNativeLoc.PNG)

### Publish to my App Store

The Publish to my App Store action generates native app binaries and publishes the application to your Enterprise App Store. After a successful publish, a confirmation window appears, which shares a link to view the Enterprise app store on your device.

To publish an app to the Enterprise App Store, logging in to your Account is mandatory.

![](Resources/Images/LocalBuild_EASPub.PNG)

You cannot build apps for the universal channel using this option.

For more information on Publish to my App Store, click [here](EAS.html#Publishing).

### Run on my device

The Run on my Device action installs the application to your connected device and enables you to view your app on your device.

Establish a USB connection between the computer that built the app, and your device.

**USB Tethering for iOS devices on Windows Machine:**  
**Prerequisites** - Ensure that the latest version of iTunes is installed on the Windows machine. Before you start viewing the app on your iOS device by using the USB feature on , open iTunes on your Windows machine.

If you connect your device to the system after selecting the post build action, use the **Refresh** option to refresh the list of available devices that are connected to the system.

Use the **Clear History** option to clear out old entries of devices that are not connected to the system.

![](Resources/Images/LocalBuild_RunOnDev.PNG)

Once this action is completed, by default Android devices launch the app. Whereas, for iOS devices you need to explicitly launch the app by tapping on the app icon.

Build a Native App Locally
--------------------------

To build an application, follow these steps:

1.  On your , from the main menu, select **Build**.
2.  From the context menu, select **Build Native Local**.
3.  Select the platforms and channels for which you want to build the application.
4.  From the **Post Build Action** drop-down menu, select the desired **Post Build Action**. For more details about the Post Build Action, click [here](#Post).
5.  You can choose to change the cloud environment on which your app is to be published. To do so, click **Change** beside the **Environment** option. By default, the Environment displayed is the one that was last selected.
6.  From the **Build Mode** drop-down list, select your desired build mode.
*   Click **Build**. The build generation begins.

You can check the status of your build in the Build tab. It undergoes various actions, like Project compression, uploading the compressed project to the cloud, and then the actual build begins. This process may take some time.

If there are any errors, they appear in the Build tab.

*   From the Build tab, click **View logs** to open the build logs for the build service on your system.

The app generated using the Build Native Local option cannot be viewed on the VoltMX VoltMX app.

Post Successful Build
---------------------

Once the build is completed, the details of the generated binaries are provided in the Build tab.

![](Resources/Images/GenerateSuccess.png)

*   Click on the binaries to open the path of the binaries in your local machine.
*   Click **Run** to run the app on your local device. If your post build action is already selected as Run on my Device, then the Run option is not enabled and there is no need to explicitly run the app again.
*   Click **Publish** to publish the App on Enterprise App Store. If your post build action is already selected as Publish to my App Store, then the Publish option is not enabled and there is no need to explicitly publish the app again.
*   Click **View Logs** to view the build related logs.

When an application is built for the Windows platform, the Publish and Run options are inactive.

Alternatively, once the build is complete, you will get notified by an email from " – Build Service", with download links for all the successfully built app binaries. The mail contains details related to the Build. It contains the Project name, Build Action Triggered by, Date of Build, Build duration details. The Build Information section contains details about the Channels for which the App has been built.

*   If you have successfully built your Iris project for the Android channel, you will get Android mobile and/or tablet native APKs link in the mail.
*   If you have successfully built your Iris project for the iOS channel, you will get iOS mobile and/or tablet native IPAs link in the mail. The mail will also contain the OTA (plist) link, through which you can directly install the app on your device.
*   You will also get the build logs. You can refer to the logs to analyze the build for failures or success.

The artifact links will be available only for 24 hours.

Cancel the Build
----------------

You can cancel the build once the build has been triggered. Sometime after the build process begins, a **Cancel** button appears in the Build tab.

You can perform any of the following actions:

*   Click **Cancel** once the actual build process has started: A cancellation dialog box appears. An email, which contains the list of build artifacts of the relevant channel and the build logs, is also sent to your registered email ID.
*   Click **Cancel** before the actual build starts: A cancellation dialog box appears. No email is sent to your registered email ID, as the build is canceled before any artifacts are created.

![](Resources/Images/BuildCancel.png)