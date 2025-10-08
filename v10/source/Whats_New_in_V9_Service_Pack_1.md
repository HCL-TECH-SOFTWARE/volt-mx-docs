
# What's new in V9 Service Pack 1 

This topic provides you the list of Volt MX V9.1 Iris & Foundry What's new features, enhancements, & defects' fix list with detailed information of each component.

For detailed information in a specific component, see below.

* [Volt MX Iris](#volt-mx-iris)

* [Volt MX Foundry](#volt-mx-foundry)

>**_Note:_** See all the defects' fix list [here](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0094476).

## Volt MX Iris

### Responsive Grid Layout

The Responsive Grid Layout feature provides a quick and convenient way to create a responsive layout for apps on the Web, Mobile, and Tablet channels. VoltMX Iris has introduced the Responsive Grid layout for the [FlexForm](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/FlexForm_Properties.md#flexResponsive), [FlexContainer](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/FlexContainer_Properties.md#flexResponsive), and [FlexScrollContainer](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/FlexScrollContainer_Properties.md#flexResponsive) widgets to enable a Bootstrap-like responsive grid experience. A new property, [responsiveConfig](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/FlexContainer_Properties.md#responsiveConfig), has also been introduced for the FlexContainer widget that allows you to set the width of a container and the space between adjacent containers.

For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/ResponsiveGridLayout.md).

<!-- AI ## AI Assisted Development

VoltMX Iris has introduced an AI Assisted Development feature to help developers with many commonly required Best practices. AI Assisted development works in combination with Volt MX IQ. This new feature helps review applications for unused resources, skins, and widgets. It also helps developers check for design best practices like if the same font family is used across the application. 

For more information about AI Assisted development, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/AIAssisted.md).
-->

### Find & Replace Skin Properties

The V9 Service Pack 1 release adds a new feature to find and replace skin properties for widgets being used across the project. This feature enables you to customize the Background, Border, and Font properties of the skins present in the current theme that is being used by the project. It provides a convenient and easy way for developers to re-skin a base application based on their design requirements.

For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/FindReplaceSkin.md).

### Emulator Support for iOS and Android

Support to connect to the iOS & Android Emulators has now been added to Volt MX Iris. This feature was missing during the porting of Iris Classic features in V9 and has now been re-introduced with an even simpler user experience. 

Volt MX Iris displays a list of configured emulators, using which you can launch and run apps in [iOS](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/SUGiPhone.md#Launch) and [Android](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/SUG_Android.md#Launch) native emulators.

### Rollback to a Previous Fix Pack

Developers can now Rollback to a specific Fix Pack within a Service Pack.

For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_starter_install_win/Content/Upgrade.md#Rollback).

### Rules Service Support in the Data and Services Panel

Support to configure, edit, and view a Rules Service through the Data and Services Panel has been added in Volt MX Iris.

For more information on the Rules Service support, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/DataPanel.md#Create_Rules).

### Support for Component Versioning

In Volt MX Iris, developers can now create and use different versions of a component in an application. This helps developers to add new features to a component without having to create a new component. The older components can then be upgraded to the newer versions.

For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/C_UsingComponents.md#Import2).

### Support to Add Components within a Segment

Support to add components (without contract) within a Segment widget or a Segment Template has been added in Volt MX Iris. Further, breakpoints can be added for a Segment widget in a Responsive Web app.

For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/C_UsingComponents.md#Add2).

### Mapping Editor Enhancement - Support to Map Breakpoint-Specific Data

Using Volt MX Iris, you can now map different data for different breakpoints or channels. The feature helps developers to showcase only the specific data required in a breakpoint or a channel.

For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/ActionsMapping.md#Map4).

### Hot Reload in Live Preview for Web

The Hot Reload feature in Volt MX Iris instantly displays modifications that are made to the Form or the FormControllers in Inline Preview, so that users can rapidly review and debug any issues with the code or the UI.

For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/HotReload.md).

### Support to View Debug Logs on the Volt MX App

Support to view the debug logs of the actions executed on the previewed child app has been added in the Volt MX app. You can also copy, download, share, and clear the logs.

For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_app_viewer/Content/Viewlogs.md).

### Support for New Build Options for Web Apps

Support to configure the post-build actions has been added in the **Build and Publish Web App** menu option. You can now generate a Web app archive without publishing the app to Volt MX Foundry.

For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/WebPublish.md#Post).

### Test Automation Enhancements

**Fetch and Edit a Widget Path**

The Test Automation feature is enhanced with new fetch and edit a widget path features. While the Test Automation is being recorded, developers can click on any widget in the application to view or edit the path of the widget. 

  For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/TestAutomation.md#fetchWidget). 

<!-- AI **Integration with Volt MX IQ**

Added support to access the Testing framework through Volt MX IQ in Iris. You can now open, create, and run, test cases, test plans and test suites using Volt MX IQ. 

  For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/VoltMX_IQ.md#Test). 
-->

**Added Intellisense support for the Testing Framework APIs in Volt MX Iris.**

**Automation API Enhancements**

Support for multiple viewTypes has been added for the **CheckBoxGroup, ListBox**, and **RadioButtonGroup** widgets, and the following APIs have been modified to enhance the Test Automation Framework:

  * [voltmx.automation.checkboxgroup.click](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.automation_namespace.md#checkboxgroup.click)
  * [voltmx.automation.listbox.selectItem](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.automation_namespace.md#listbox.selectItem)
  * [voltmx.automation.radiobuttongroup.click](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.automation_namespace.md#radiobuttongroup.click)
  * [voltmx.automation.alert.click](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.automation_namespace.md#alert.click)

### Support for Android TargetSDK 29

Support for the Android Q (API level 29) Target SDK has been added in Volt MX Iris. 

For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/AndroidQ_Behavioral_Changes.md).

### APIs for Android Scoped Storage Access

If the targetSDK version of an Android app is 29 or later, scoped storage is enabled for the app, by default. Therefore, support for the following APIs has been added in the voltmx.io.filesystem namespace for the Android platform:

* [voltmx.io.FileSystem.getExternalCacheDir](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.io.FileSystem_Functions.md#getExternalCacheDir) 
* [voltmx.io.FileSystem.getExternalCacheDirs](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.io.FileSystem_Functions.md#getExternalCacheDirs) 
* [voltmx.io.FileSystem.getExternalFilesDir](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.io.filesystem_functions.md#getExternalFilesDir) 

* [voltmx.io.FileSystem.getExternalFilesDirs](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.io.filesystem_functions.md#voltmx.io.FileSystem.getExternalFilesDirs)  

* [voltmx.io.FileSystem.getNoBackupFilesDir](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.io.FileSystem_Functions.md#getNoBackupFilesDir)
*  [voltmx.io.FileSystem.getExternalStorageState](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.io.FileSystem_Functions.md#getExternalStorageState) 
* [voltmx.io.FileSystem.getFileSystemStats](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.io.FileSystem_Functions.md#voltmx.io.) 

* [voltmx.io.FileSystem.isExternalStorageEmulated](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.io.filesystem_functions.md#isExternalStorageEmulated) 
*  [voltmx.io.FileSystem.isExternalStorageLegacy](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.io.FileSystem_Functions.md#isExternalStorageLegacy) 

* [voltmx.io.FileSystem.isExternalStorageRemovable](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.io.filesystem_functions.md#isExternalStorageRemovable)

### Embed Local HTML Content as a Direct DOM Element

Using this feature developers can now embed local web assets as content directly in the generated DOM using the Browser widget in Web apps.

For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/AddLoca.mdContent.html#Using).

### SSL Validation for WKWebView

The SSLValidationBehavior property that handles the SSL pinning and validation has been added for the Browser widget. This is an iOS specific property and helps the user to decide whether SSL validation must be performed for all URLs. For a Browser widget in an iOS app that uses the WKWebView engine, all the hosts in the public_keys.json file must be pinned to load the data.

For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/Browser_Properties.md#sslValidationBehavior).

### API to Close a Database Handler

Support for the [voltmx.db.closeDatabase](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.db_functions.md#closedatabase) API has been added for the iOS platform. The API allows users to close the database handler of a specific database version.

### Accessibility Enhancement - Support for Tab Order

From VoltMX Iris V9 Service Pack 1, the Tab Order field has been introduced in the Accessibility Config properties of Responsive Web Forms. 

For more information about this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/app_design_dev/Content/Accessibility_Iris.md#taborder).


## Volt MX Foundry

### File Storage Adapter

From Volt MX Foundry V9 Service Pack 1, a new adapter called File Storage has been introduced. The File Storage Adapter is an out-of-the-box adapter that can be used to store and retrieve files from a default storage system. The adapter uses S3 (Simple Storage Service) as the back-end storage. This adapter is also added to Integration Services.

For more information about File Storage adapter, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/File_Storage_Adapter.md).

### Foundry Admin Adapter

The Foundry Admin Adapter allows the use of administrative APIs on the Volt MX Foundry runtime server. This allows external systems to invoke these APIs to read or modify settings on the Foundry server.

For more information about this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Foundry_Admin_Adapter.md).

### Upgrade Mechanism for Apps on EAS

From Volt MX Foundry V9 Service Pack 1, you can define upgrade policies for child apps published to the Enterprise App Store. 

For more information about this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/%20AppVersionUpgradePolicyEAS.md).

### Timer Task in Foundry Workflow

A new Timer task has been added to Foundry Workflow. By using the Timer task users can configure a delay between tasks for a fixed period of time or a delay based on an expression.

For more information about this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Workflow.md).

### Retry Failed Task in Workflow

The Workflow Audit history has been enhanced with the capability to manually retry a failed task in Workflow. Users with admin access can view the error details of the failed task and do a read-only **Retry** of that task. After the task is successfully executed, the workflow will resume and proceed to execute the next task.

For more information about this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/vmf_integrationservice_admin_console_userguide/Content/Workflow.md).

### GDPR Policy Settings

Personally Identifiable Information(PII) data like User ID and IP address will be encoded in Metrics when client requests originate from GDPR countries. From Volt MX Foundry V9 Service Pack 1, a new option has been added to the GDPR Policy Settings in the Integration Server that enables encoding PII data for all the requests and stop logging PII Data into Integration Server. 

For more information about this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/vmf_integrationservice_admin_console_userguide/Content/Runtime_Configuration.md#GDPR).

### Enhanced Service Monitoring

From Volt MX Foundry V9 Service Pack 1, Parent Service details in Service monitor are enhanced to identify the parent service correctly. Added support to display the P90 and P95 calculations to each of the categories for the Service Monitoring section in the Admin Console. This detail will be available in the exported CSV file.

For more information about this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/vmf_integrationservice_admin_console_userguide/Content/Monitoring.md#Service).

### Custom Code Profiling

From Volt MX Foundry V9 Service Pack 1, users can measure and profile the performance of the custom code that is used in their applications using New Relic.

For more information about this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/vmf_integrationservice_admin_console_userguide/Content/Monitoring.md).

### Invoking Object Services from Service Manager

A new interface has been provided to invoke Object Services from the Service manager. If an Object service is invoked by using this interface, the pre-processors and post-processors of the Object services are executed.

For more information about this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Advanced_Configurations_-Object_Services.md).

### UI Enhancements in OAuth Provider

From Volt MX Foundry V9 Service Pack 1, the consent screen for the OAuth Provider Identity service can be customized to take permissions from users and has the ability to remove the permissions from users.

For more information about this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Identity11_OAuth.md#OAuth_Provider).

### Ability to Send Voice SMS

From Volt MX Foundry V9 Service Pack 1, you can send Voice SMS to any subscriber by using Twilio and Nexmo providers. 

For more information about this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/vms_console_user_guide/Content/Administration/SMS_Configuration.md#Voice).

### Create Segments for the Web Channel

From Volt MX Foundry V9 Service Pack 1, support has been added to select Web channel in the OSType field while creating segments.

For more information about this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/vms_console_user_guide/Content/Segments/Adding_a_Segment.md).

### Engagement Artifacts to Support Volt MX App Versioning

From Volt MX Foundry V9 Service Pack 1, the ability to create Engagement artifacts to support Volt MX App Versioning has been added.

For more information about this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/vms_console_user_guide/Content/API_Versioning.md).

### Deprecated Blackberry-Related Code, UI Features, and Subscriptions.

From Volt MX Foundry V9 Service Pack 1, the code, UI features, and subscriptions for the Blackberry platform have been deprecated.

### Command Line Installer

From Volt MX Foundry V9 Service Pack 1, you can install Foundry via the command line installer on Liberty v20.0.0.4.

For more information about this, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_rel_notes/Content/(/volt-mx-docs/docs/documentation/Foundry/voltmx_foundry_manual_install_guide/Content/Installing_Foundry_WebSphereLiberty.md)).

### HCL AppFactory

**Device Filtering** 

  From Volt MX Foundry V9 Service Pack 1, support has been added to create device pools by using filters. By using the new search capabilities, you can filter the devices to run your test scripts on by manufacturer, model, OS version, and availability.
  
  For more information, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_appfactory_user_guide/Content/Configuring_Device_Pools.md). 
  
**SonarQube Integration**

  With Iris From Volt MX Foundry V9 Service Pack 1, you can integrate your projects with the SonarQube server to run quality analysis on the codebase of your Iris projects.
  
  For more information, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_appfactory_user_guide/Content/Project_Settings.md). 
  
**Added support to add Sonar token as credentials for projects**

  For more information, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_appfactory_user_guide/Content/Working_with_AppFactory.md). 
  
**Added support to import, build, and export the Java assets**

   From Volt MX Foundry V9 Service Pack 1, you can import any version of your Foundry applications and their custom Java code from source control, compile them, bundle them, and deploy them to your target environment.
   
   For more information about this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_appfactory_user_guide/Content/BuildingFoundryApp.md). 
   
**Added support for app versioning in Foundry App Configuration**

   For more information, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_appfactory_user_guide/Content/Working_with_AppFactory.md). 
   
**Added support to run CustomHooks for Foundry jobs**

   For more information, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_appfactory_user_guide/Content/CustomHooksFoundry.md).


