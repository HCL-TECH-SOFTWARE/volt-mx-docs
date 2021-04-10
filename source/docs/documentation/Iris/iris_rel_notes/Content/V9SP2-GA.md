---
layout: "documentation"
category: "iris_rel_notes"
---
                         

New Features and Enhancements in V9 Service Pack 2
==================================================

In this release, the following features have been introduced to provide an enhanced Volt MX Iris experience.

 

*   [Component Updates](#component-updates)
*   [Responsive Web Enhancements](#responsive-web-enhancements)
*   [Android Enhancements](#android-enhancements)
*   [ARRenderer Widget Enhancements](#arrenderer-widget-enhancements)
*   [Video Widget Enhancement - Closed Captions Support](#video-widget-enhancement-closed-captions-support)
*   [](#calendar-widget-enhancements)[Calendar Widget Enhancements](#Calendar)
*   [Dynamic Configuration of Skin Properties](#dynamic-configuration-of-skin-properties)
*   [Haptic Feedback Support - watchOS](#haptic-feedback-support-watchos)
*   [Tab Order Enhancement](#tab-order-enhancement)

Component Updates
-----------------

### Reorder Properties and Groups

In the V9 Service Pack 2 release, Volt MX Iris introduces the **Reorder Properties** option that enables developers to re-order or re-arrange the properties or groups of a Component (with Contract).

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/C_CreatingComponent.html#reorder-properties-or-groups).

### Generate getters and setters of a custom property

In the V9 Service Pack 2 release, Volt MX Iris introduces support to automatically generate the getters and setters of a custom property. When you create or modify a custom property through the **Manage Properties** dialog box, the getters and setters of the property are automatically added to the **initGettersSetters** function in the controller file of the component.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/C_CreatingComponent.html#getters).

Responsive Web Enhancements
---------------------------

### Custom CSS Splash Screen

In the V9 Service Pack 2 release, Volt MX Iris introduces support to implement CSS and HTML capabilities in the splash screen for Responsive web apps, by using Custom CSS and Custom HTML code. Prior to the V9 Service Pack 2 release, you could only use images to implement the splash screen for Responsive Web apps.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Splash_Screen_Properties.html#configure-a-splash-screen-by-using-custom-css.html).

### Protected Mode CI Build

In the V9 Service Pack 2 release, Volt MX Iris introduces support to build web applications in the Protected mode by using the CI (Continuous Integration) build feature.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/SecureyourWebApplication.html#SecureCIbuild).

Android Enhancements
--------------------

### In-App Update APIs

On devices that use target SDK API version 21 (and later), the Google Play Core library allows in-app updates. By using the In-App Update APIs, developers can notify the user (while the user is using the app) that an app update is available for download.

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the following in-app update APIs

*   [voltmx.application.checkForAppUpdate]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_in-app_updates_functions.html#checkForAppUpdate)
*   [voltmx.application.completeAppUpdate]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_in-app_updates_functions.html#completeAppUpdate)
*   [voltmx.application.registerAppUpdateListener]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_in-app_updates_functions.html#registerAppUpdateListener)
*   [voltmx.application.requestForAppUpdate]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_in-app_updates_functions.html#requestForAppUpdate)
*   [voltmx.application.unRegisterAppUpdateListener]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_in-app_updates_functions.html#unRegisterAppUpdateListener)

### In-App Review APIs

From the Android 5.0 (API level 21) release, the Google Play Core library supports the in-app review feature that provides users with an option to provide a review for the app (while the user is using the app).  
In the V9 Service Pack 2 release, Volt MX Iris introduces support for the [voltmx.application.requestReviewFlow]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_functions_requestreview.html#requestReviewFlow) API that provides information required to launch the in-app review flow for an app.  
In addition, the [voltmx.application.requestReview]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_functions_requestreview.html#requestReview) API has been enhanced to accept **config** as an input parameter.

### Battery Optimization APIs

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the following Battery Optimization APIs:

*   [voltmx.application.isIgnoringBatteryOptimizations]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_functions.html#isIgnoringBatteryOptimizations)
*   [voltmx.application.launchBatteryOptimizationSettings]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_functions.html#launchBatteryOptimizationSettings)
*   [voltmx.application.requestIgnoreBatteryOptimizations]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_functions.html#requestIgnoreBatteryOptimizations)

### Disable Auto-Reset Permissions

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the [voltmx.application.launchAutoRevokeSettings]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_functions_runtimepermissionsapi.html#launchAutoRevokeSettings) API that helps users navigate to the application permissions page in the system settings. In the permissions page, the user can configure the system's ability to modify the app permissions.

### Install Source Details

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the [voltmx.application.getInstallerSourceInfo]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_functions.html#getInstallerSourceInfo) API that returns the package name from which the application was installed. The package name helps in identifying the market that the application was downloaded from.

### Cryptography API Enhancement - Base 64 String Support

In the V9 Service Pack 2 release, the [voltmx.crypto.createHash]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.crypto_functions.html#createHash), and [voltmx.crypto.createHMacHash]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.crypto_functions.html#voltmx.cry2) have been enhanced to accept an additional input parameter, [options]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.crypto_functions.html#options). The **options** parameter is a data dictionary that contains the **returnBase64String** key.

ARRenderer Widget Enhancements
------------------------------

### Save and Retrieve Real World position

In the V9 Service Pack 2 release, Volt MX Iris introduces support to save the real-world position or planes, and then add a 3D object to that area. In addition, developers can also retrieve the same object when they scan the same plane.

To support this feature, the following properties and methods have been added to the ARRenderer widget:

*   [canSaveExperienceCallback]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/ARRenderer_Properties.html#canSaveExperienceCallback) property
*   [enableCloudAnchors]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/ARRenderer_Properties.html#enableCloudAnchors) Property
*   [clearExperience]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/ARRenderer_Methods.html#clearExperience) Method
*   [hostCloudAnchor]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/ARRenderer_Methods.html#hostCloudAnchor) Method
*   [loadExperience]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/ARRenderer_Methods.html#loadExperience) Method
*   [resolveCloudAnchor]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/ARRenderer_Methods.html#resolveCloudAnchor) Method
*   [saveExperience]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/ARRenderer_Methods.html#saveExperience) Method

### Real-time Image Recognition and Overlays

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the [StartARImageDetection]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/ARRenderer_Methods.html#StartARImageDetection) and [stopARImageDetection]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/ARRenderer_Methods.html#stopARImageDetection) methods for the ARRenderer widget. Using these methods, developers can scan an image and overlay another image or a video on top of the scanned image.

VIDEO WIDGET ENHANCEMENT - CLOSED CAPTIONS SUPPORT
--------------------------------------------------

In the V9 Service Pack 2 release, Volt MX Iris introduces support to display Closed Captions in the Video widget. Developers can add captions tracks and enable the captions.

To support this feature, the following properties and methods are added to the Video widget:

*   [enableCaptions]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Video_Basic_Properties.html#enableCaptions) property
*   [tracks]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Video_Basic_Properties.html#tracks) property
*   [setTracks]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Video_Method.html#setTracks) method

Calendar Widget Enhancements
----------------------------

### Enable or Disable Dates

In the V9 Service Pack 2 release, Volt MX Iris introduces the [enableOrDisableDates]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Calendar_Properties.html#enableOrDisableDates) property for the Calendar widget. Using the **enableOrDisableDates** property, developers can configure the list of dates for the Calendar widget to display.

### Repeat Events in Intervals

In the V9 Service Pack 2 release, the [voltmx.phone.addCalendarEvent]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.phone_functions.html#phone.ad) API is enhanced to accept [Interval]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.phone_functions.html#Interval) as an input parameter. By using the **Interval** parameter, developers can configure an event on the calendar to repeat on a biweekly, quarterly, or semi-annual basis.

Dynamic Configuration of Skin Properties
----------------------------------------

In the V9 Service Pack 2 release, Volt MX Iris introduces the [voltmx.theme.setSkinsProperties]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.theme_functions.html#setSkinsProperties) API. By using this API, developers can configure the Skin properties for a widget at run time. In addition, support for the following properties is added for a few widgets (such as Button, Calendar, Camera , CheckBoxGroup, Label, FlexContainer ,ListBox, RadioButtonGroup, RichText, TextBox2, TextArea2, and PickerView widgets):

*   focusStateSkin
*   pressedStateSkin (available on the Android platform)
*   disabledStateSkin (available on the Android platform)
*   hoverSkinState (available on the Responsive Web platform)

Haptic Feedback Support - watchOS
---------------------------------

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the following events that can be used to provide haptic feedback on the watchOS:

*   [didAppear]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Watch.html#didAppear)
*   [interfaceDidScrollToTop]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Watch.html#interfaceDidScrollToTop)
*   [interfaceOffsetDidScrollToBottom]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Watch.html#interfaceOffsetDidScrollToBottom)
*   [interfaceOffsetDidScrollToTop]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Watch.html#interfaceOffsetDidScrollToTop)

Tab Order Enhancement
---------------------

In the V9 Service Pack 2 release, Volt MX Iris introduces support to provide 0 or -1 as a value for the tab order. Prior to the V9 Service Pack 2 release, developers could only set values that were greater than zero.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/app_design_dev/Content/Accessibility_Iris.html#taborder2).
