---
layout: "documentation"
category: "iris_rel_notes"
---


New Features and Enhancements in V9 Service Pack 1
==================================================

In this release, the following features have been introduced to provide an enhanced Volt MX Iris experience.

 

*   [New Responsive Grid Layout](#new-responsive-grid-layout)
*   [AI Assisted Development](#ai-assisted-development)
*   [Find and Replace Skin Properties](#find-and-replace-skin-properties)
*   [Emulator Support for iOS and Android](#emulator-support-for-ios-and-android)
*   [Rollback to a Previous Fix Pack](#rollback-to-a-previous-fix-pack)
*   [Enhanced Upgrade Feature](#enhanced-upgrade-feature)
*   [Enhancements in the Project Import process](#enhancements-in-the-project-import-process)
*   [Support for Component Versioning](#support-for-component-versioning)
*   [Support to Add Components Within A Segment](#support-to-add-components-within-a-segment)
*   [Mapping Editor Enhancement - Support to Map Breakpoint-specific Data](#mapping-editor-enhancement-support-to-map-breakpoint-specific-data)
*   [Embed Local HTML Content as a DOM Element](#embed-local-html-content-as-a-dom-element)
*   [Rules Service support in the Data and Services Panel](#rules-service-support-in-the-data-and-services-panel)
*   [Support to View Debug Logs on the Volt MX App](#support-to-view-debug-logs-on-the-volt-mx-app)
*   [Hot Reload in Live Preview for Web](#hot-reload-in-live-preview-for-web)
*   [Support for New Build Options for Web Apps](#support-for-new-build-options-for-web-apps)
*   [Test Automation Enhancements](#test-automation-enhancements)
    *   [Fetch and Edit a Widget Path](#fetch-and-edit-a-widget-path)
    *   [Intellisense Support for Testing Framework APIs](#intellisense-support-for-testing-framework-apis)
    *   [Integration with Volt MX IQ](#integration-with-volt-mx-iq)
    *   [Automation API Enhancements](#automation-api-enhancements)
*   [VoltMX IQ Enhancement - Enhanced Language Translation Support](#volt-mx-iq-enhancement-language-translation)
*   [Android Enhancements](#android-enhancements)
    *   [Support for Android Target SDK 29](#support-for-android-target-sdk-29)
    *   [Support for Cordova 9.0](#support-for-cordova-90)
    *   [Enhanced Scroll Functionality](#enhanced-scroll-functionality)
    *   [Scoped Storage Access APIs](#scoped-storage-access-apis)
    *   [Scoped Storage Enhancements for Media](#scoped-storage-enhancements-for-media)
    *   [RawBytes Object Enhancements](#rawbytes-object-enhancements)
    *   [Date and Time KeyBoard Styles](#date-and-time-keyboard-styles)
    *   [Keyboard show and hide callbacks](#keyboard-show-and-hide-callbacks)
    *   [Location Updates Enhancements](#location-updates-enhancements)
    *   [Enable Controller Cloning for Segment Row Template](#enable-controller-cloning-for-segment-row-template)
*   [Accessibility Enhancement - Support for Tab Order](#accessibility-enhancement-support-for-tab-order)
*   [Cookie Management APIs](#cookie-management-apis)
*   [SSL Validation for WKWebView](#ssl-validation-for-wkwebview)
*   [API to Close a Database Handler](#api-to-close-a-database-handler)
*   [Secure data input in TextBox and TextArea widgets](#secure-data-input-in-textbox-and-textarea-widgets)
*   [autogrowMode property for TabPane widget](#autogrowmode-property-for-tabpane-widget)
*   [Support for Sketch and Photoshop Extensions moved to Maintenance Mode](#sketch-and-photoshop-extensions-moved-to-maintenance-mode)

*   [V9SP1 Fixpack 10 Features](#v9sp1-fixpack-10-features)
    *   [Define Conditional and Dependent Properties for Components](#define-conditional-and-dependent-properties-for-components-with-contract)
    *   [Support for JSON as a Property Type for Components](#support-for-json-as-a-property-type-for-components-with-contract)
    *   [i18N as a Pass-through Property for Components](#i18n-as-a-pass-through-property-for-components-with-contract)
    *   [Expose Component Event as a Pass-through Event in a Component with Contract](#expose-component-event-as-a-pass-through-event-in-a-component-with-contract)

 

New Responsive Grid Layout
--------------------------

The Responsive Grid Layout feature provides a quick and convenient way to create a responsive layout for apps on the Web, Mobile, and Tablet channels.  
Volt MX  Iris has introduced the Responsive Grid layout for the [FlexForm]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/FlexForm_Properties.html#flexResponsive), [FlexContainer]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/FlexContainer_Properties.html#flexResponsive), and [FlexScrollContainer]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/FlexScrollContainer_Properties.html#flexResponsive) widgets to enable a Bootstrap-like responsive grid experience. A new property, [responsiveConfig]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/FlexContainer_Properties.html#responsiveConfig), has also been introduced for the FlexContainer widget that allows you to set the width of a container and the space between adjacent containers.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/ResponsiveGridLayout.html).

AI Assisted Development
-----------------------

Volt MX  Iris has introduced an AI Assisted Development feature to help developers with many commonly required Best practices. AI Assisted development works in combination with Volt MX IQ. This new feature helps with things like being able to review applications for unused resources, skins, and widgets. It also helps developers check for design best practices like if the same font family is used across the application.

For more information about AI Assisted development, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/AIAssisted.html).

**Find and Replace Skin Properties**
------------------------------------

A new **Find and Replace Skin Properties** option has been added in the Edit menu of Volt MX Iris. This feature enables you to customize the Background, Border, and Font properties of the skins present in the current theme that is being used by the project. It provides a convenient and easy way for developers to re-skin a base application based on their design requirements.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/FindReplaceSkin.html).

Emulator Support for iOS and Android
------------------------------------

Support to connect to the iOS & Android Emulators has now been added in Volt MX Iris. This feature was missing during the porting of Iris Classic features in V9 and has now been re-introduced with an even simpler user experience. In the build screen, Volt MX Iris displays a list of configured emulators, using which you can launch and run apps in [iOS]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/SUGiPhone.html#launch-the-app-using-run-on-my-device-or-the-emulator-menu) and [Android]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/SUG_Android.html#launch-the-app-using-run-on-my-device-or-the-emulator-menu) native emulators.

Rollback to a Previous Fix Pack
-------------------------------

Developers can now Rollback to a specific Fix Pack within a Service Pack.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_starter_install_win/Content/Upgrade.html#rollback-to-a-previous-version-of-volt-mx-iris).

Enhanced Upgrade Feature
------------------------

The upgrade process is enhanced giving the developers more flexibility to choose the Fix Pack or Service Pack version they want to upgrade to.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_starter_install_win/Content/Upgrade.html#update-volt-mx-iris).

Enhancements in the Project Import process
------------------------------------------

Enhancements have been made to the Project Import process that request user permission to import Volt MX Foundry Services, resolve conflicts in the Services, and overwrite existing projects. Further, the ability to import a Local Project from a Folder has been added.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/ImportVoltMXIrisProject.html#import-a-local-project).

Support for Component Versioning
--------------------------------

In Volt MX Iris, developers can now create and use different versions of a component in an application. This helps developers add new features to a component without having to create a new component. The older components can then be upgraded to the newer versions.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/C_UsingComponents.html#import-different-versions-of-an-existing-component).

Support To Add Components Within A Segment
------------------------------------------

Added support to add components (without contract) within a Segment widget or a Segment Template. Further, breakpoints can be added for a Segment widget in a Responsive Web app.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/C_UsingComponents.html#add-components-to-a-segment-template).

Mapping Editor Enhancement - Support tO mAP Breakpoint-sPECIFIC dATA
--------------------------------------------------------------------

Using Volt MX Iris you can now map different data for different breakpoints or channels. The feature helps developers to showcase only the specific data required in a breakpoint or a channel.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/ActionsMapping.html#map-data-across-channels-and-breakpoints).

Embed Local HTML Content as A DOM Element
-----------------------------------------

Using this feature, developers can now embed local web assets as content directly in the generated DOM using the Browser widget. The feature is only available for the Web channel.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/AddLocalHTMLContent.html#using-local-html-content-as-direct-dom).

Rules Service support in the Data and Services Panel
----------------------------------------------------

Added support to configure, edit, and view a Rules Service through the Data and Services Panel.

For more information on the Rules Service support, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/DataPanel.html#create-a-rules-service).

Support to View Debug Logs on the Volt MX App
---------------------------------------------

Support to view the detailed debug logs of the actions executed on the previewed child app has been added in the Volt MX app. Users can also copy, download, share, and clear the logs.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_app_viewer/Content/Viewlogs.html).

Hot Reload in Live Preview for Web
----------------------------------

Volt MX  Iris has introduced the Hot Reload feature in live preview that improves the live preview experience. Using the Hot Reload Feature, users can instantly view any modifications made to the Form or FormControllers in the project. This feature allows users to fix any issues with the code or the UI, by switching between Volt MX Iris and the Live Preview window.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/HotReload.html).

Support for New Build Options for Web Apps
------------------------------------------

Added support to configure the post-build actions to be executed after the Web archive generation in the Build and Publish Web App option. You can now generate a Web app archive without having to publish the app to Volt MX Foundry.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/WebPublish.html#post-build-actions).

Test Automation Enhancements
----------------------------

### Fetch and Edit a Widget Path

The Test Automation feature is enhanced with new fetch and edit a widget path features. While the Test Automation is being recorded, developers can click on any widget in the application to view or edit the path of the widget.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/TestAutomation.html#fetchWidget).

### Intellisense Support for Testing Framework APIs

Added Intellisense support for the Testing Framework APIs in Volt MX Iris.

### Integration with Volt MX IQ

Added support to access the Testing framework through Volt MX IQ in Iris. You can now open, create, and run, test cases, test plans and test suites using Volt MX IQ.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/VoltMX_IQ.html#test-project).

### Automation API Enhancements

Support for multiple viewTypes has been added for the **CheckBoxGroup**, **ListBox**, and **RadioButtonGroup** widgets, and the following APIs have been modified to enhance the Test Automation Framework:

*   [voltmx.automation.checkboxgroup.click]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.automation_namespace.html#checkboxgroup.click)
*   [voltmx.automation.listbox.selectItem]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.automation_namespace.html#listbox.selectItem)
*   [voltmx.automation.radiobuttongroup.click]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.automation_namespace.html#radiobuttongroup.click)
*   [voltmx.automation.alert.click]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.automation_namespace.html#alert.click)

Volt MX  IQ Enhancement - Language Translation
---------------------------------------------

Volt MX  IQ's language translation feature now supports all the locales supported by Google Translate.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/VoltMX_IQ.html#Locales_Google_Translate).

Android Enhancements
--------------------

### Support for Android Target SDK 29

Support for the Android Q (API level 29) Target SDK has been added.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/AndroidQ_Behavioral_Changes.html).

### Support for Cordova 9.0

Support for the Cordova version 9.0 has been added on the Android platform.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/CreateCordovaApplications.html#Android:_maximum_Cordova_version).

### Enhanced Scroll Functionality

To enhance the consistency of the scroll behavior across platforms, Volt MX Iris has introduced the [overScrollX]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/FlexScrollContainer_Properties.html#overScrollX) and [overScrollY]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/FlexScrollContainer_Properties.html#overScrollY) properties for the FlexScrollContainer widget on the Android platform. Further, to maintain consistent scrolling behavior, the Android platform also supports the [bounces]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/FlexScrollContainer_Properties.html#bounceAndroid), [allowHorizontalBounce]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/FlexScrollContainer_Properties.html#hbounceAndroid), and [allowVerticalBounce]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/FlexScrollContainer_Properties.html#vbounceAndroid) properties.

### Scoped Storage Access APIs

If the targetSDK version of an Android app is 29 or later, scoped storage is enabled for the app, by default. Therefore, the following Scoped Storage APIs are added to replace the Legacy Storage APIs (such as getExternalStorageDirectoryPath).

*   [voltmx.io.FileSystem.getExternalCacheDir]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.io.filesystem_functions.html#getExternalCacheDir)
*   [voltmx.io.FileSystem.getExternalCacheDirs]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.io.filesystem_functions.html#getExternalCacheDirs)
*   [voltmx.io.FileSystem.getExternalFilesDir]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.io.filesystem_functions.html#volt-mx-io-filesystem-getexternalfilesdir)
*   [voltmx.io.FileSystem.getExternalFilesDirs]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.io.filesystem_functions.html#volt-mx-io-filesystem-getexternalfilesdirs)
*   [voltmx.io.FileSystem.getNoBackupFilesDir]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.io.filesystem_functions.html#getNoBackupFilesDir)
*   [voltmx.io.FileSystem.getExternalStorageState]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.io.filesystem_functions.html#getExternalStorageState)
*   [voltmx.io.FileSystem.getFileSystemStats]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.io.filesystem_functions.html#voltmx.io.)
*   [voltmx.io.FileSystem.isExternalStorageEmulated]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.io.filesystem_functions.html#volt-mx-io-filesystem-isexternalstorageemulated)
*   [voltmx.io.FileSystem.isExternalStorageLegacy]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.io.filesystem_functions.html#isExternalStorageLegacy)
*   [voltmx.io.FileSystem.isExternalStorageRemovable]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.io.filesystem_functions.html#volt-mx-io-filesystem-isexternalstorageremovable)

### Scoped Storage Enhancements for Media

Support for the [HandleRecoverableException]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/image_methods.html#handleRecoverableException) parameter has been added in the [writeToMediaGallery]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/image_methods.html#writeToMediaGallery) API. In addition, the [findImageInGallery]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/image_methods.html#findImageInGallery) has been enhanced to support scoped storage on apps that use Android TargetSDK version 29 (or later).

### RawBytes Object Enhancements

*   Support to assign RawBytes as an input to the [Cryptography APIs]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.crypto_functions.html#functions) has been added on the Android platform.
*   The [voltmx.crypto.decrypt]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.crypto_functions.html#decrypt) and [voltmx.crypto.asymmetricDecrypt]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.crypto_functions.html#asymmetricDecrypt) APIs now support the [decryptToRawBytes]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.crypto_functions.html#decryptToRawBytes) property.
*   The following APIs have been added to the RawBytes Object:
    *   [voltmx.types.RawBytes.clear]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.types_objects_rawbytes.html#clear)
    *   [voltmx.types.RawBytes.getContentType]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.types_objects_rawbytes.html#getContentType)

### Date and Time KeyBoard Styles

Volt MX  Iris has introduced [keyboard styles]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/TextBox_Properties.html#dateTimekeyBoard) and a [text input mode]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/TextBox_Properties.html#dateTimeTextInputMode) for the Date and Time values in the TextBox and TextArea widgets on the Android platform.

### Keyboard show and hide callbacks

Volt MX  Iris has introduced the following events for the soft keyboard on the TextBox and TextArea widgets.

*   [onBackKeyPress]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/TextBox_Events.html#onBackKeyPress)
*   [onKeyboardDidHide]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/TextBox_Events.html#onKeyboardDidHide)
*   [onKeyboardDidShow]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/TextBox_Events.html#onKeyboardDidShow)
*   [onKeyboardWillHide]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/TextBox_Events.html#onKeyboardWillHide)
*   [onKeyboardWillShow]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/TextBox_Events.html#onKeyboardWillShow)

### Location Updates Enhancements

Support for the [requireBackgroundAccess]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.location_functions.html#requiredBackgroundAccess) parameter has been added in the [voltmx.location.getCurrentPosition]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.location_functions.html#getCurrentPosition) and [voltmx.location.watchPosition]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.location_functions.html#watchPosition) APIs.  
In addition, updates have been made to include [Android-specific Error Codes]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.location_functions.html#Android_ErrorCodes).

### Enable Controller Cloning for Segment Row Template

Volt MX  Iris has introduced the [enableCloneControllerForRowTemplates]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Segment_Properties.html#enableCloneControllerForRowTemplates) property for the Segment widget. This property is only available on the Android platform. It allows developers to clone the row template controller for each row of a Segment widget.

Accessibility Enhancement - Support For Tab Order
-------------------------------------------------

From Volt MX Iris V9 Service Pack 1, the Tab Order field has been introduced in the Accessibility Config properties of Responsive Web Forms.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/app_design_dev/Content/Accessibility_Iris.html#taborder).

Cookie Management APIs
----------------------

To support the WKWebView engine's usage of separate cookie storage, the [setCookies]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Browser_Methods.html#setCookies), [getCookies]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Browser_Methods.html#getCookies), [clearCookies]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Browser_Methods.html#clearCookies) methods have been added for the Browser widget.

Support for the [voltmx.net.setCookies]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.net_functions.html#setCookies) API has been added in the iOS Framework. The API allows users to add or replace cookies in the app cookie storage. In addition, support for the [cookieFormat]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.net_functions.html#cookieFormat) parameter has been added in the [voltmx.net.getCookies]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.net_functions.html#voltmx.net8) API.

A new [shareCookiesInBrowsers]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Browser_Properties.html#shareCookiesInBrowsers) property has also been added to enable the sharing of the cookies between browsers.

SSL Validation for WKWebView
----------------------------

Volt MX  has introduced the [sslValidationBehavior]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Browser_Properties.html#SSLValidationBehavior) property that handles the SSL pinning and validation for the Browser widget. For a Browser widget in an iOS app that uses the WKWebView engine, all the hosts in the public\_keys.json file must be pinned to load the data.

API to Close a Database Handler
-------------------------------

Support for the [voltmx.db.closeDatabase]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.db_functions.html#volt-mx-db-closedatabase) API has been added in the iOS Framework. The API allows users to close the database handler of a specific database version.

Secure data input in TextBox and TextArea widgets
-------------------------------------------------

Data input for TextBox and TextArea widgets has been enhanced with additional security by using the [isSensitiveText]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/TextBox_Properties.html#isSensitiveText) property.

autogrowMode property for TabPane widget
----------------------------------------

In earlier versions of Volt MX Iris, the height of the TabPane widget could not be specified dynamically if it was set as Preferred. From Volt MX Iris V9 Service Pack 1, support for the [autogrowMode]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/TabPane_Properties.html#autogrow) property has been added to the TabPane widget. Using the autogrowMode property, you can specify the height of the TabPane widget dynamically.

Sketch and Photoshop extensions moved to Maintenance Mode
---------------------------------------------------------

Support for the Sketch and Photoshop extension plugins is currently in maintenance mode. Volt MX Iris will continue to provide compatibility support for these features for new releases of Photoshop & Sketch. However, support is not provided for updates that require major software changes.

**V9SP1 Fixpack 10 Features**
-----------------------------

### Define Conditional and Dependent Properties for Components with Contract

In the V9 Service Pack 1 Fixpack 10 release, Volt MX Iris introduces the conditional rendering of properties feature allows you to define conditions and dependencies between properties for a component with contract. For example, using this feature, you can update the visibility of a dependent property based on the value of another property.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/C_CreatingComponent.html#Conditions).

### Support for JSON as a Property Type for Components with Contract

In the V9 Service Pack 1 Fixpack 10 release, Volt MX Iris introduces support to provide JSON as a Property Type for custom properties in the Manage Properties section for components with contract.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/C_CreatingComponent.html#JSON).

### i18N as a Pass-through Property for Components with Contract

From Volt MX Iris V9 Service Pack 1 Fixpack 10 release, you can add i18N properties as a Pass-through property for Components with contract. This helps users support Internationalization more easily in the components with contract. You can add the property from the Manage Properties section of the Components or add the property directly from the Properties panel.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/C_CreatingComponent.html#i18N).

### Expose Component Event as a Pass-through Event in a Component with Contract

With the V9 Service Pack 1 Fixpack 10 release, Iris enables the capability to expose an event in a component with contract as a pass-through event. The pass-through event at the instance can then be used to modify the existing functionality in the event or to extend the functionality of the event.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/C_CreatingComponent.html#expose-events-of-a-component).
