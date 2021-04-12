---
layout: "documentation"
category: "iris_rel_notes"
---
                         

New Features and Enhancements in V9 SP1 M1
==========================================

In this release, the following features have been introduced to provide an enhanced Volt MX Iris experience.

 

*   [Enhancements in the Project Import process](#enhancements-in-the-project-import-process)
*   [Post Build Actions Support for Web Apps](#post-build-actions-support-for-web-apps)
*   [Rules Service support in the Data and Services Panel](#rules-service-support-in-the-data-and-services-panel)
*   [Configure Splash Screen for iOS Native Devices](#configure-splash-screen-for-ios-native-devices)
*   [Use Local HTML Content as Direct DOM](#use-local.html-content-as-direct-dom)
*   [AI Assisted Development](#ai-assisted-development)
*   [Hot Reload in Live Preview](#hot-reload-in-live-preview)
*   [Support To Add Components Within A Segment](#support-to-add-components-within-a-segment)
*   [Support for the Testing Framework in Volt MX IQ](#support-for-the-testing-framework-in-volt-mx-iq)
*   [Automation API Enhancements](#automation-api-enhancements)
*   [SSL Validation for WKWebView](#ssl-validation-for-wkwebview)
*   [Support for Android Target SDK 29](#support-for-android-target-sdk-29)
*   [autogrowMode property for TabPane widget](#autogrowmode-property-for-tabpane-widget)
*   [Support to Debug an App on the Volt MX App](#support-to-debug-an-app-on-the-volt-mx-app)
*   [API to Close a Database Handler](#api-to-close-a-database-handler)

 

Enhancements in the Project Import process
------------------------------------------

Enhancements have been made to the Project Import process that request user permission to import Volt MX Foundry Services, resolve conflicts in the Services, and overwrite existing projects. Further, the ability to import a Local Project from a Folder has been added.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/ImportVoltMXIrisProject.html#import-a-local-project).

Post Build Actions Support for Web Apps
---------------------------------------

Added support to configure the post-build actions to be executed after the Web archive generation in the Build and Publish Web App option. You can now generate a Web app archive without having to publish the app to Volt MX Foundry.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/WebPublish.html#post-build-actions).

Rules Service support in the Data and Services Panel
----------------------------------------------------

Added support to configure, edit, and view a Rules Service through the Data and Services Panel.

For more information on the Rules Service support, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/DataPanel.html#create-a-rules-service).

Configure Splash Screen for iOS Native Devices
----------------------------------------------

As Apple has deprecated support for Splash images from April 2020, support to customize a Splash screen for the Native iOS channel has been added in Volt MX Iris. For the Native iOS channel, you can customize the **Skin**, add the **Image** and **Label** widgets to the Splash screen, and also customize the properties for the widgets.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Splash_Screen_Properties.html#configure-the-splash-screen-for-ios-native-devices).

UsE Local HTML Content as Direct DOM
------------------------------------

The existing Web Assets feature has been enhanced to improve the user experience. A developer can now embed local web assets as direct DOM using the Browser widget. The feature is only available for the Web channel.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/AddLocalHTMLContent.html).

AI Assisted Development
-----------------------

Volt MX  Iris has introduced the AI Assisted Development feature to analyze applications for unused resources, skins, and widgets. AI Assisted Development also helps users check if the same font family is used throughout the application. You can also use Volt MX IQ to access the AI Assisted Development window in Iris.

For more information about AI Assisted development, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/AIAssisted.html).

Hot Reload in Live Preview
--------------------------

Volt MX  Iris has introduced the Hot Reload feature in live preview that improves the live preview experience. Using the Hot Reload Feature, users can instantly view any modifications made to the Form or FormControllers in the project. This feature allows users to fix any issues with the code or the UI, by switching between Volt MX Iris and the Live Preview window.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/HotReload.html).

Support To Add Components Within A Segment
------------------------------------------

Added support to add components (without contract) within a Segment widget or a Segment Template. Further, breakpoints can be added for a Segment widget in a Responsive Web app.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/C_UsingComponents.html#add-components-to-a-segment-template).

support for the Testing Framework in Volt MX IQ
-----------------------------------------------

Added support to access the Testing framework through Volt MX IQ in Iris. You can now open, create, and run, test cases, test plans and test suites using Volt MX IQ.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/VoltMX_IQ.html#test-project).

Automation API Enhancements
---------------------------

Support for multiple viewTypes has been added for the **CheckBoxGroup**, **ListBox**, and **RadioButtonGroup** widgets, and the following APIs have been modified to enhance the Test Automation Framework:

*   [voltmx.automation.checkboxgroup.click]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.automation_namespace.html#checkboxgroup.click)
*   [voltmx.automation.listbox.selectItem]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.automation_namespace.html#listbox.selectItem)
*   [voltmx.automation.radiobuttongroup.click]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.automation_namespace.html#radiobuttongroup.click)

SSL Validation for WKWebView
----------------------------

Volt MX  has introduced the [sslValidationBehavior]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Browser_Properties.html#sslValidationBehavior) property that handles the SSL pinning and validation for the Browser widget. For a Browser widget in an iOS app that uses the WKWebView engine, all the hosts in the public\_keys.json file must be pinned to load the data.

Support for Android Target SDK 29
---------------------------------

Support for the Android Q (API level 29) Target SDK has been added.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/AndroidQ_Behavioral_Changes.html).

APIs for Android Scoped Storage Access
--------------------------------------

If the targetSDK version of an Android app is 29 or later, scoped storage is enabled for the app, by default. Support for the legacy Storage APIs (getExternalStorageDirectoryPath) is not available in these apps. Therefore, you must use scoped Storage APIs such as [getExternalFilesDir]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.io.filesystem_functions.html#volt-mx-io-filesystem-getexternalfilesdir) and [getExternalFilesDirs]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.io.filesystem_functions.html#volt-mx-io-filesystem-getexternalfilesdirs) on devices that run on Android version 11, and later. Further, the [isExternalStorageEmulated]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.io.filesystem_functions.html#volt-mx-io-filesystem-isexternalstorageemulated) and the [isExternalStorageRemovable]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.io.filesystem_functions.html#volt-mx-io-filesystem-isexternalstorageremovable) APIs can be used to check if the primary shared or external storage media is emulated or is physically removable respectively.

autogrowMode property for TabPane widget
----------------------------------------

In earlier versions of Volt MX Iris, the height of the TabPane widget could not be specified dynamically if it was set as Preferred. From Volt MX Iris V9 SP1 M1, support for the [autogrowMode]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/TabPane_Properties.html#autogrow) property has been added to the TabPane widget. Using the autogrowMode property, you can specify the height of the TabPane widget dynamically.

Support to Debug an App on the Volt MX App
------------------------------------------

Support to view the detailed logs of the actions executed on the child app has been added in the Volt MX app. Users can also copy, download, share, and clear the logs.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_app_viewer/Content/Viewlogs.html).

API to Close a Database Handler
-------------------------------

Support for the [voltmx.db.closeDatabase]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.db_functions.html#volt-mx-db-closedatabase) API has been added in the iOS Framework. The API allows users to close the database handler of a specific database version.
