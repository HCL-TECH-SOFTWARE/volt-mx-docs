  

Overview
========

This document highlights how a Iris developer can connect mobile applications to VoltMX Foundry back-end services and run a News and Weather sample on an Android emulator. VoltMX Foundry is VoltMX’s open standards, mobile back end as a service (MBaaS) offering allowing developers to quickly exposed key mobile services and enterprise services to mobile applications . The mobile front end applications can be built using Cordova, Native iOS, Native Android, JavaScript, VoltMX Iris Enterprise and other platforms that can leverage REST based services as part of a mobile framework.

![](Resources/Images/FoundryServices(News&Weather)/Contents.png)

**Figure 1: Overview of VoltMX Foundry**

Figure 1 shows you the overall architecture of VoltMX Foundry, including the client-side SDKs that are available for applications to connect to VoltMX Foundry. The JavaScript client SDK of VoltMX Foundry helps you develop the News and Weather application that is discussed in this user guide.

In the user guide, [VoltMX Foundry for News And Weather App](http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxlibrary/voltmxfoundry/KF_Services_News_and_Weather/Default.html), we learned how we could use VoltMX Connectors to quickly expose XML, SOAP, JSON, SAP and other back end services with VoltMX Foundry to create mobile optimized, REST based services.

Now we will use VoltMX Iris 7 Enterprise to connect a multichannel application to Foundry. In this document, we will do the following:

*   Download the Iris News and Weather Sample application from [GitHub](https://github.com/voltmx/News-and-Weather)
*   Import the application into Iris 7 Enterprise
*   Configure a sample application to connect to our News and Weather services that we published in the [VoltMX Foundry for News and Weather App guide](http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxlibrary/voltmxfoundry/KF_Services_News_and_Weather/Default.html) using VoltMX Foundry
*   Demonstrate how Iris 7 Enterprise helps you build Native iOS, Native Android, Native Windows, BlackBerry, , Mobile Web, and DesktopWeb apps from a single code base and run an application in the Android emulator.

Audience
--------

The manual is intended for developers and IT professions using or intending to use VoltMX Iris and VoltMX Foundry to build, integrate, and deploy mobile applications across multiple channels, including Native iOS, Native Android, Windows, BlackBerry, Mobile Web, and Desktop Web. Developers should be familiar with JavaScript.

Prerequisites
-------------

Before you review the document, we assume that:

1.  You can access a VoltMX Foundry server that has the sample News and Weather application installed. If you do not have access to VoltMX Foundry, enroll in a 90-day trial at [http://www.voltmx.com/products/voltmxfoundry/trial](http://www.voltmx.com/products/voltmxfoundry/trial).
2.  You have access to VoltMX Iris Enterprise 7 and a configured Android emulator that runs with your installation of Iris. If you do not have Iris Enterprise 7, refer to the preceding paragraph to enroll in a trial of VoltMX Foundry. You can download Iris 7 Enterprise from the VoltMX Foundry console by clicking on the Iris Enterprise tab as shown below:  
      
    ![](Resources/Images/FoundryServices(News&Weather)/IrisEnterprise.png)
    
    For additional information on installing Iris 7 Enterprise, and configuring the Android emulator and other emulators for Iris, refer to the following links:
    
    *   [Windows Install Guide](http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxlibrary/iris/iris_enterprise_install_win/Default.html)
    *   [Mac OSX Install Guide](http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxlibrary/iris/iris_enterprise_install_mac/Default.html)
    *   [Emulator Configuration](http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxlibrary/iris/iris_enterprise_install_win/Default.html#Install_and_Configure_Emulators.md?TocPath=_____6)
3.  You have reviewed the [VoltMX Foundry for News And Weather App](http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxlibrary/voltmxfoundry/KF_Services_News_and_Weather/Default.html) user guide that provides an overview of all the News and Weather VoltMX Foundry services. We also assume that you have published the News and Weather application to your VoltMX Foundry runtime environment. The publication process is described in the [VoltMX Foundry for News and Weather App](http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxlibrary/voltmxfoundry/KF_Services_News_and_Weather/Default.html) user guide.
    

Downloading and Importing the News and Weather Iris Application
---------------------------------------------------------------------

VoltMX maintains the most recent version of the News and Weather app on GitHub. To download and import the News and Weather application into your Iris 7 Enterprise IDE, follow these steps:

1.  Enter [https://github.com/voltmx/News-and-Weather](https://github.com/voltmx/News-and-Weather) in your browser, and click on “Clone or Download”(shown as 1 in figure above. The application downloads to your local drive. If you download the application, you will need to unzip the application. A root directory called News-and-Weather-master is created. Take note of the subdirectory, News-and-Weather. The subdirectory contains the working project code that we will import into Iris.  
      
    ![](Resources/Images/FoundryServices(News&Weather)/DownloadAPPIris1.png)  
      
    ![](Resources/Images/FoundryServices(News&Weather)/downloadAPPIris2.png)
2.  Click **File** > **Import**(shown as 2 in the figure above) to start the import process.  
      
    ![](Resources/Images/FoundryServices(News&Weather)/downloadAPPIris3.png)
3.  Click **Browse** ( as shown in 3 in figure above) to select the **NewsAndWeather** folder from the unzipped file to import into your workspace. Click **Finish** (shown as 4 above) to complete the import of the project.

Configuration of Iris Client Application
----------------------------------------------

In the last section, we downloaded the application and imported it into Iris, now we are going to configure the application to communicate with our VoltMX Foundry services. VoltMX Foundry requires an App Key, App Secret and Service URL for establishing a secure connection to your services. If you don’t have your AppKey, App secret, and Service URL, the following directions will show you how to find them on your VoltMX Foundry App and add them to your Iris app. If you haven’t published your services, please refer to the “VoltMX Foundry for News And Weather App” guide for configuring and deploying your services before proceeding. You will need the App Key, App Secret and Service URL to configure your sample app to communicate to VoltMX Foundry. Follow the steps below to configure the client application with the published VoltMX Foundry services.

1.  Log in to your account at [manage.voltmx.com](http://manage.voltmx.com/). Select the apps tab. You will see the News and Weather app in the console. ( as shown in figure 3 below).  
    ![](Resources/Images/FoundryServices(News&Weather)/ConfigIrisApp1.png)
2.  Open the app and click on the modules folder in the left side navigation. The VoltMX SDK contains all the helper classes that connect your application to VoltMX Foundry. In the sample app, config.js holds the parameters we will need to connect to VoltMX Foundry.  
    ![](Resources/Images/FoundryServices(News&Weather)/ConfigIrisApp2.png)
3.  Open the “config.js” file in the Iris editor The “keys” section (shown as 5 above) will need to be updated with the “Appkey”, “AppSecret” and “ServiceURL” of the published application in VoltMX Foundry. ( “Appkey”, “AppSecret” and “ServiceURL” are provided when the application is published in VoltMX Foundry)

That’s it! We are done with the client-side configuration that is needed to run the News and Weather application.

Deploying and Executing the News -and Weather Application
---------------------------------------------------------

This section provides the details of deploying the News and Weather application in Android emulator. To launch and run the application, follow these steps:

1.  After the project is successfully imported, it will be compiled. Click on “Project -> Run As -> TestEmulator -> Native” (shown as 1 below) and this will start and launch the application in the configured emulator.  
      
    Note: We assume you have already configured the Android emulator. For information on steps to create and configure the emulator, refer to [http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxlibrary/iris/iris\_enterprise\_install\_win/Default.html#Install\_and\_Configure\_Emulators.html%3FTocPath%3D\_\_\_\_\_6](http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxlibrary/iris/iris_enterprise_install_win/Default.html#Install_and_Configure_Emulators.md?TocPath=_____6)  
      
    ![](Resources/Images/FoundryServices(News&Weather)/DeployingApp1.png)  
      
    In the following figure, the emulator is called TestEmulator.  
    
2.  Once the application is successfully launched in the emulator, the Top Stories screen (2) is displayed.  
      
    ![](Resources/Images/FoundryServices(News&Weather)/DeployingApp2.png)
3.  Click on the hamburger/three-line menu (3) on the top left corner of the application in the emulator to display the menu options.  
    ![](Resources/Images/FoundryServices(News&Weather)/DeployingApp3.png)  
    
4.  Click on “World” (shown as 4 in figure below) to display the World news. This data is displayed by invoking VoltMX Foundry’s news service. The category value ( needed by the VoltMX Foundry service to retrieve the news) that is passed to the “GetNewsForCategory” operation of this service is “W” because of which world news is retrieved.  
    ![](Resources/Images/FoundryServices(News&Weather)/DeployingApp4.png)
    
5.  Click on Local (shown as 5 in figure below). The Local screen appears and displays the current weather, weather forecast and the local news. Using the latitude and longitude, the application invokes the NewsandWeather orchestration service to retrieve the requested information.  
      
    ![](Resources/Images/FoundryServices(News&Weather)/DeployingApp5.png)

<table style="margin-left: 0;margin-right: auto;" madcap:conditions="Default.HTML5 Only,Default.ScreenOnly"><colgroup><col> <col> <col></colgroup><tbody><tr><td>Rev</td><td>Author</td><td>Edits</td></tr><tr><td>V8</td><td>PG</td><td>PG</td></tr></tbody></table>
