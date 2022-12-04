  

Overview
========

This manual is intended for developers familiar with the Cordova framework. This document highlights how a Cordova developer can connect mobile applications to VoltMX Foundry back-end services and run a News and Weather sample app developed using Cordova on an Android emulator. VoltMX Foundry is VoltMX’s open standards, mobile back end as a service (MBaaS) allowing developers to quickly expose key mobile services and enterprise services to mobile applications. These mobile application can be built using Cordova, Native iOS, Native Android, JavaScript, VoltMX Studio and other platforms that can leverage REST-based services as part of a mobile framework.

This manual features a sample application created using Cordova to demonstrate how easy it is to connect Cordova applications to enterprise services based on SOAP, XML, JSON, or other protocols. Our sample application, The News & Weather App, uses the Google’s REST based service for news and CDYNE’s SOAP service for current weather and weather forecast. Both these services are not optimized by default for a mobile device and use two separate protocols to convey information from their services. In both cases, the services send back more data than will be needed for our mobile application. In the case of a mobile app, it’s ideal to send back a concise response that reduces bandwidth needs. In this lab, VoltMX Foundry will be used to expose these services to news and weather app as mobile optimized, REST based services that are easily ingested by the Cordova framework.

We assume that you:

1.  Have access to a VoltMX Foundry server that has installed the sample News and Weather application. If you do not have access to VoltMX Foundry, enroll in a 90-day trial at [http://www.voltmx.com/products/voltmxfoundry/trial](http://www.voltmx.com/products/voltmxfoundry/trial).
2.  Have access to the client-side Cordova development environment and an Android emulator. Click the following link to set up an Eclipse-based environment and an Android emulator in a Windows environment: [CRM Quick Start Guide](http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxfoundryaws/assets/docs/VoltMX_Foundry_CRM_Quick_Start_Guide/default.html).
3.  Have reviewed the [VoltMX Foundry for News and Weather App user guide](http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxlibrary/foundry/KF_Services_News_and_Weather/Default.html) and have published the application in your VoltMX Foundry environment.

Audience
--------

This manual is designed for IT professionals who use Cordova mobile applications that integrate with VoltMX Foundry services.

Overview of the News and Weather Cordova Application
----------------------------------------------------

The Cordova client application runs in an Eclipse-based Windows environment. The development environment has the following components:

1.  **Node.js** : The npm of Node.js helps install the Cordova libraries.
2.  **Eclipse**: This is the primary development environment that is used with the Android plug-in.
3.  **Android SDK**: The SDK helps install the Android APIs that are needed to run the application on the Android emulator.
4.  **Android plug-in for Eclipse**: The plug-in provides integration with the Android SDK that is installed.

The following steps are involved in executing the News and Weather Cordova app:

1.  Downloading the News and Weather Cordova client application from [github](https://github.com/voltmx/MobilefoundryFastTrack_NewNWeatherApp_PhoneGap).
2.  Importing the downloaded application into the development environment.
3.  Configuring the Cordova client application with the App key, App secret, and VoltMX Foundry URL of the published News and Weather application in VoltMX Foundry.
4.  Deploying and running the News and Weather application in the Android emulator.

Download and Install the News and Weather Cordova Application
-------------------------------------------------------------

To download and install the News and Weather Cordova application in the Eclipse environment, follow these steps:

1.  Enter [https://github.com/voltmx/MobilefoundryFastTrack\_NewNWeatherApp\_PhoneGap](https://github.com/voltmx/MobilefoundryFastTrack_NewNWeatherApp_PhoneGap), in your browser and click on Clone or Download (1 in the following figure). The application downloads to your local drive.  
    ![](Resources/Images/Download1.png)
2.  Extract the downloaded zip file into the VoltMX FoundryFastTrack\_NewWeatherApp\_PhoneGap folder (below).  
    ![](Resources/Images/Download2.png)
3.  Open the **Node.js** command prompt, in your development environment, and navigate to the **SampleAppMFNewsWeather** folder (3).  
    ![](Resources/Images/Download3.png)
4.  Run the following commands to add the plug-ins.
    
    cordova plugin add cordova-plugin-device
    
    cordova plugin add cordova-plugin-whitelist
    
    cordova plugin add cordova-plugin-inappBrowser
    
    cordova plugin add com.voltmx.sdk
    
    Once the plug-ins are successfully added, the following screen appears:  
    ![](Resources/Images/Download5.png)  
    
5.  To create the Android folder, type the command **cordova platform add android** (4).  
    ![](Resources/Images/Download6.png)
6.  Import the Android folder into your workspace. In the Eclipse-based, Cordova environment, click **File** > **Import** (5).  
    ![](Resources/Images/Download4.png)
7.  Select Existing Android Workspace (6) to select the Android folder that was created earlier.  
    ![](Resources/Images/Download7.png)
8.  Browse the **MobilefoundryFastTrack\_NewWeatherApp\_PhoneGap** folder that is installed on your machine and select the Android folder under Platforms. The Android folder (7) is under SampleAppMFNewsWeather folder.  
    
9.  Click **OK** to import two projects that are present in the Android folder into the workspace.  
    ![](Resources/Images/Download8.png)
    
    When the CodovaLib and MainActivity projects (8) are brought into the workspace, they compile.  
    ![](Resources/Images/Download9.png)  
    

Configuration of the Cordova Client Application
-----------------------------------------------

The section provides details of the configuration of Cordova client application. The configuration enables the client application to connect to VoltMX Foundry and provide data to the client application.

To configure the client application, follow these steps:

1.  Open the **config.js** (shown as 1 below) file in the eclipse editor. The config file is under **MainActivity**\> **assets** > **www** > **js** folder.
2.  The **keys** section (shown as 2 below) will need to be updated with the **Appkey**, **AppSecret** and **ServiceURL** of the published application in VoltMX Foundry. (The **Appkey**, **AppSecret** and **ServiceURL** are provided when the application is published in VoltMX Foundry).  
    ![](Resources/Images/Configuration.png)  
    

That’s it! We are done with the client-side configuration needed to run the News and Weather Cordova application.

Deploying and Executing the News and Weather Application
--------------------------------------------------------

The section provides details of deploying the News and Weather application in the Android emulator. To launch the application in the emulator and run the application, follow these steps:

1.  The next step is to launch the preconfigured android emulator .In the eclipse based Cordova environment, click on **Window**\> **Android Virtual Manager**, shown as 1 in the figure below, to start the emulator launch.  
    ![](Resources/Images/Deploy1.png)
2.  In the screen below, select the emulator that you have already created. In the figure it is called as **PhoneGapEmulator**. Click **Start**, shown as 2 in the figure below, to launch the emulator.  
    ![](Resources/Images/Deploy2.png)
3.  Once you see the emulator screen as below, the emulator is ready for the application to be deployed (Note: The emulator screen could look different based your emulator configuration). Please make sure that the emulator is completely launched before the application is deployed else it takes a long time for the application to launch on emulator.  
    ![](Resources/Images/Deploy3.png)
4.  Minimize the emulator and click on **MainActivity** (shown as 3 in figure below) on the left. Choose **Run** from the menu and click **Run As** > **Android Application** (shown as 4 in figure) below. This will launch the application on the emulator that is running.  
      
    ![](Resources/Images/Deploy4.png)
5.  Once the application is launched, **Top Stories** option of the application is chosen by default and that data is displayed. This data is displayed by invoking the VoltMX Foundry’s **News** service.
    
    Click on the hamburger menu (shown as 5 in the figure below) on the top left corner of the application in the emulator to display the menu options.
    
    Then two apps are installed on the emulator, the latest installed app may not launch. We recommend that you uninstall the first application before you install another. Restart the emulator after the second application is installed.  
    
      
    ![](Resources/Images/Deploy5.png)  
    
6.  Click World (6) to review the World news.
    
    The data is displayed by invoking the VoltMX Foundry’s News service. The category value that is passed to the **GetNewsForCategory** operation is **W** because of which world news is retrieved.  
    ![](Resources/Images/Deploy6.png)
    
7.  Once the world news is displayed, click on the “Local” in the hamburger menu to retrieve the local news.  
    ![](Resources/Images/Deploy7.png)
8.  The application’s **Local** screen displays current weather, weather forecast and the local news. This is done by invoking the VoltMX Foundry’s **NewsAndWeather** orchestration service. The application invokes the **NewsAndWeather** orchestration service by passing the NYC’s latitude and longitude values.  
      
    ![](Resources/Images/Deploy8.png)

Next steps
----------

This manual explained how to connect a Cordova client application to the existing VoltMX Foundry integration and orchestration services. The manual also demonstrated how to install and run the Cordova application in a preconfigured android emulator. If you want to give VoltMX Foundry a spin, sign up for a 90 day trial at [http://www.voltmx.com/products/voltmxfoundry/trial](http://www.voltmx.com/products/voltmxfoundry/trial).

<table style="margin-left: 0;margin-right: auto;" madcap:conditions="Default.HTML5 Only,Default.ScreenOnly"><colgroup><col> <col> <col></colgroup><tbody><tr><td>Rev</td><td>Author</td><td>Edits</td></tr><tr><td>7.1</td><td>PG</td><td>PG</td></tr></tbody></table>
