---
layout: "documentation"
category: "iris_rel_notes"
---
                         

New Features and Enhancements in V9 Service Pack 1
==================================================

In this release, the following features have been introduced to provide an enhanced Volt MX Iris experience.

 

*   [Simple Responsive Design](#simple-responsive-design)
*   [Emulators Support for iOS and Android](#emulators-support-for-ios-and-android)
*   [Enhanced Theme feature - Support to Rebrand a Project](#enhanced-theme-feature-support-to-rebrand-a-project)
*   [Rollback to a specific version of  Volt MX Iris](#rollback-to-a-specific-version-of)
*   [Enhanced Upgrade Feature](#enhanced-upgrade-feature)
*   [Support for Component Versioning](#support-for-component-versioning)
*   [Mapping Editor Enhancement - Support to Map Breakpoint-specific Data](#mapping-editor-enhancement-support-to-map-breakpoint-specific-data)
*   [Test Automation Enhancement - Fetch and Edit a Widget Path](#test-automation-enhancement-fetch-and-edit-a-widget-path)
*   [Android Enhancements](#android-enhancements)
    *   [Enhanced Scroll Functionality](#enhanced-scroll-functionality)
    *   [Scoped Storage Access APIs](#scoped-storage-access-apis)
    *   [RawBytes Object Enhancements](#rawbytes-object-enhancements)
    *   [Date and Time KeyBoard Styles](#date-and-time-keyboard-styles)
    *   [Handle Recoverable Exception](#handle-recoverable-exception)
    *   [Location Updates Enhancements](#location-updates-enhancements)
    *   [Gradle Entry for the BottomSheet widget](#gradle-entry-for-the-bottomsheet-widget)
    *   [Enable Controller Cloning for Segment Row Template](#enable-controller-cloning-for-segment-row-template)
*   [Volt MX IQ - Enhanced Language Translation Support](#volt-mx-iq-enhanced-language-translation)
*   [Cookie Management APIs](#cookie-management-apis)
*   [Secure data input in TextBox and TextArea widgets](#secure-data-input-in-textbox-and-textarea-widgets)
*   [Accessibility Enhancement - Support for Tab Order](#accessibility-enhancement-support-for-tab-order)

 

Simple Responsive Design
------------------------

The Simple Responsive Design feature provides a quick and convenient way to create responsive apps for the Web, Mobile, and Tablet channels.  
Volt MX  Iris has introduced the Responsive Grid layout for the [FlexForm]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/FlexForm_Properties.html#flexResponsive), [FlexContainer]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/FlexContainer_Properties.html#flexResponsive), and [FlexScrollContainer]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/FlexScrollContainer_Properties.html#flexResponsive) widgets to support the Simple Responsive Design feature. A new property, [responsiveConfig]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/FlexContainer_Properties.html#responsiveConfig), has also been introduced for the FlexContainer widget that allows you to set the width of a container and the space between adjacent containers.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Responsive_Design.html).

Emulators Support for iOS and Android
-------------------------------------

Developers can now view their apps on iOS and Android emulators. In the build screen, Volt MX Iris displays a list of configured emulators, using which you can launch and run apps in [iOS]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/SUGiPhone.html#launch-the-app-using-run-on-my-device-or-the-emulator-menu) and [Android]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/SUG_Android.html#launch-the-app-using-run-on-my-device-or-the-emulator-menu) native emulators.

Enhanced Theme feature - Support to Rebrand a Project
-----------------------------------------------------

The Theme feature is enhanced with a new rebrand capability. The **Find and Replace Skin Properties** option has been added in the Edit menu of Volt MX Iris. This feature enables you to customize the Background, Border, and Font properties of the skins present in the current theme of the project.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/FindReplaceSkin.html).

Rollback to a specific version of  Volt MX Iris
-----------------------------------------------------

Developers can now Rollback to a specific Fix Pack within a Service Pack.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_starter_install_win/Content/Upgrade.html#rollback-to-a-previous-version-of-volt-mx-iris).

Enhanced Upgrade Feature
------------------------

The upgrade process is enhanced giving the developers more flexibility to choose the Fix Pack or Service Pack version they want to upgrade to.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_starter_install_win/Content/Upgrade.html#update-volt-mx-iris).

Support for Component Versioning
--------------------------------

In Volt MX Iris, developers can now create and use different versions of a component in an application.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/C_UsingComponents.html#import-different-versions-of-an-existing-component).

Mapping Editor Enhancement - Support tO mAP Breakpoint-sPECIFIC dATA
--------------------------------------------------------------------

Using Volt MX Iris you can now map different data for different breakpoints or channels. The feature helps developers to showcase only the specific data required in a breakpoint or a channel.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/ActionsMapping.html#map-data-across-channels-and-breakpoints).

Test Automation Enhancement - Fetch and Edit a Widget Path
----------------------------------------------------------

The Test Automation feature is enhanced with new fetch and edit a widget path features. While the Test Automation is being recorded, developers can click on any widget in the application to view or edit the path of the widget.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/TestAutomation.html#fetchWidget).

Android Enhancements
--------------------

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

### RawBytes Object Enhancements

*   Support to assign RawBytes as an input to the [Cryptography APIs]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.crypto_functions.html#functions) has been added on the Android platform.
*   The [voltmx.crypto.decrypt]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.crypto_functions.html#decrypt) and [voltmx.crypto.asymmetricDecrypt]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.crypto_functions.html#asymmetricDecrypt) APIs now support the [decryptToRawBytes]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.crypto_functions.html#decryptToRawBytes) property.
*   The following APIs have been added to the RawBytes Object:
    *   [voltmx.types.RawBytes.clear]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.types_objects_rawbytes.html#clear)
    *   [voltmx.types.RawBytes.getContentType]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.types_objects_rawbytes.html#getContentType)

### Date and Time KeyBoard Styles

Volt MX  Iris has introduced [keyboard styles]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/TextBox_Properties.html#dateTimekeyBoard) and a [text input mode]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/TextBox_Properties.html#dateTimeTextInputMode) for the Date and Time values in the TextBox and TextArea widgets on the Android platform.

### Handle Recoverable Exception

Support for the [HandleRecoverableException]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/image_methods.html#handleRecoverableException) parameter has been added in the [writeToMediaGallery]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/image_methods.html#writeToMediaGallery) API.

### Location Updates Enhancements

Support for the [requireBackgroundAccess]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.location_functions.html#requiredBackgroundAccess) parameter has been added in the [voltmx.location.getCurrentPosition]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.location_functions.html#getCurrentPosition) and [voltmx.location.watchPosition]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.location_functions.html#watchPosition) APIs.  
In addition, updates have been made to include [Android-specific Error Codes]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.location_functions.html#Android_ErrorCodes).

### Gradle Entry for the BottomSheet widget

From AndroidSDK version 26, if an app contains a BottomSheet widget, you must add additional dependencies in the Android gradle entries. For more information on the Gradle entries that you must provide, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/BottomSheet.html#gradleEntry).

### Enable Controller Cloning for Segment Row Template

Volt MX  Iris has introduced the [enableCloneControllerForRowTemplates]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Segment_Properties.html#enableCloneControllerForRowTemplates) property for the Segment widget. This property is only available on the Android platform. It allows developers to clone the row template controller for each row of a Segment widget.

Volt MX  IQ - Enhanced Language Translation
------------------------------------------

Volt MX  IQ's language translation feature now supports all the locales supported by Google Translate.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/VoltMX_IQ.html).

Cookie Management APIs
----------------------

To support the WKWebView engine's usage of separate cookie storage, the [setCookies]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Browser_Methods.html), [getCookies]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Browser_Methods.html), [clearCookies]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Browser_Methods.html) methods have been added for the Browser widget.

Support for the [voltmx.net.setCookies]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.net_functions.html#setCookies) API has been added in the iOS Framework. The API allows users to add or replace cookies in the app cookie storage. In addition, support for the [cookieFormat]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.net_functions.html.html#cookieFormat) parameter has been added in the [voltmx.net.getCookies]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.net_functions.html.html#voltmx.net8) API.

A new [shareCookiesInBrowsers]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Browser_Methods.html) property has also been added to enable the sharing of the cookies between browsers.

Secure data input in TextBox and TextArea widgets
-------------------------------------------------

Data input for TextBox and TextArea widgets has been enhanced with additional security by using the [isSensitiveText]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/TextBox_Properties.html#isSensitiveText) property.

Accessibility Enhancement - Support For Tab Order
-------------------------------------------------

From Volt MX Iris V9 Service Pack 1, the Tab Order field has been introduced in the Accessibility Config properties of Desktop Web Forms.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/app_design_dev/Content/Accessibility_Iris.html#taborder).
