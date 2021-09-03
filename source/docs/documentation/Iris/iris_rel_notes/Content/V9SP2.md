---
layout: "documentation"
category: "iris_rel_notes"
---


New Features and Enhancements in V9 Service Pack 2
==================================================

In this release, the following features have been introduced to provide an enhanced Volt MX Iris experience.

 

*   [Performance Improvements](#performance-improvements)
*   [Create and Use Form Templates](#create-and-use-form-templates)
*   [Component Updates](#component-updates)
    *   [Component Versioning Enhancement](#component-versioning-enhancement)
    *   [Update Existing Components](#update-existing-components)
    *   [Tooltip for Properties of a Component](#tooltip-for-properties-of-a-component)
    *   [Support to Add Components Within a Segment](#support-to-add-components-within-a-segment)
    *   [Reorder Properties and Groups](#reorder-properties-and-groups)
    *   [Generate getters and setters of a custom property](#generate-getters-and-setters-of-a-custom-property)
    *   [Define Conditional and Dependent Properties for Components with Contract](#define-conditional-and-dependent-properties-for-components-with-contract)
    *   [Support for JSON as a Property Type for Components with Contract](#support-for-json-as-a-property-type-for-components-with-contract)
    *   [i18N as a Pass-through Property for Components with Contract](#i18n-as-a-pass-through-property-for-components-with-contract)
    *   [Expose Component Event as a Pass-through Event in a Component with Contract](#expose-component-event-as-a-pass-through-event-in-a-component-with-contract)
*   [Data and Services Panel Enhancements](#data-and-services-panel-enhancements)
    *   [Support to Add Custom Verbs to a Form](#support-to-add-custom-verbs-to-a-form)
    *   [Support to Add Child Objects to a Form](#support-to-add-child-objects-to-a-form)
*   [Test Automation Enhancements](#test-automation-enhancements)
    *   [Configure Timeout for a TestCase](#configure-timeout-for-a-testcase)
    *   [View Screenshots of Failed Expectations](#view-screenshots-of-failed-expectations)
    *   [Add Assertions in Test Case Recordings](#add-assertions-in-test-case-recordings)
    *   [Automatically Add WaitFor for a New Test Case](#automatically-add-waitfor-for-a-new-test-case)
*   [Responsive Web Enhancements](#responsive-web-enhancements)
    *   [Custom CSS Splash Screen](#custom-css-splash-screen)
    *   [Protected Mode CI Build](#protected-mode-ci-build)
*   [Android Enhancements](#android-enhancements)
    *   [Support for Android Target SDK 30](#support-for-android-target-sdk-30)
    *   [5G Network APIs](#5g-network-apis)
    *   [In-App Update APIs](#in-app-update-apis)
    *   [In-App Review APIs](#in-app-review-apis)
    *   [Battery Optimization APIs](#battery-optimization-apis)
    *   [Google Play Update and Error Handling APIs](#google-play-services-update-and-error-handling-apis)
    *   [Auto-Reset Permissions](#auto-reset-permissions)
    *   [Disable Auto-Reset Permissions](#disable-auto-reset-permissions)
    *   [Security Provider Patching](#security-provider-patching)
    *   [Suggest Hints for Text Fields](#suggest-hints-for-text-fields)
    *   [Launch Settings](#launch-settings)
    *   [Install Source Details](#install-source-details)
    *   [Background Location Access](#background-location-access)
    *   [GeoLocation API Enhancements](#geolocation-api-enhancements)
    *   [Package Visibility Updates](#package-visibility-updates)
    *   [Authenticate using Device Credentials](#authenticate-using-device-credentials)
    *   [Cryptography API Enhancement - Base 64 String Support](#cryptography-api-enhancement-base-64-string-support)
    *   [2G and 4G Network Updates](#2g-and-4g-network-updates)
    *   [Biometric Authentication Enhancements (Beta)](#biometric-authentication-enhancements-beta)
*   [Support for Widget Extensions](#support-for-widget-extensions)
*   [Sign In With Apple](#sign-in-with-apple)
*   [ARRenderer Widget Enhancements](#arrenderer-widget-enhancements)
    *   [Save and Retrieve Real World position](#save-and-retrieve-real-world-position)
    *   [Real-time Image Recognition and Overlays](#real-time-image-recognition-and-overlays)
*   [Video Widget Enhancement - Closed Captions Support](#video-widget-enhancement-closed-captions-support)
*   [ListBox Widget Enhancements](#listbox-widget-enhancements)
*   [zIndex Support for Map Methods](#zindex-support-for-map-methods)
*   [Text Widget Enhancement -](#text-widget-enhancement)
    *   [Support for textCopyable property](#support-for-textcopyable-property)
*   [](#calendar-widget-enhancements)[Calendar Widget Enhancements](#calendar-widget-enhancements)
    *   [Enable or Disable Dates](#enable-or-disable-dates)
    *   [Repeat Events in Intervals](#repeat-events-in-intervals)
    *   [Calendar Enhancements for Responsive Web](#calendar-enhancements-for-responsive-web)
*   [Modify Skin Properties at Run time](#modify-skin-properties-at-run-time)
*   [Haptic Feedback Support - watchOS](#haptic-feedback-support-watchos)
*   [Accessibility Enhancement](#accessibility-enhancement)
*   [Security Enhancements](#security-enhancements)
    *   [Enable Android Verify Apps](#enable-android-verify-apps)
    *   [Prevent Android Tapjacking](#prevent-android-tapjacking)
*   [Component to Integrate Vector Animations - HCL Forge](#component-to-integrate-vector-animations-hcl-forge)

PERFORMANCE IMPROVEMENTS
------------------------

In the V9 Service Pack 2 release, several enhancements have been made at the core of Volt MX Iris to improve the performance. Volt MX Iris has implemented an on-demand approach to load assets that reduces the time taken to load and refresh a project. This enhancement is especially noticeable in larger projects. In addition, users will also notice faster Form saves and rectification. The memory footprint of Volt MX Iris has also been significantly reduced.

Create and Use Form Templates
-----------------------------

In the V9 Service Pack 2 release, Volt MX Iris introduces a feature that provides an easy way to reuse a form as a template across the project. Using Form Templates, you can display the same UI pattern across multiple forms, platforms, and projects. To use Form Templates, you must first create a form with the required UI elements and add it to a Collection Library. You can then drag-and-drop the template from the collection library onto a form or import the template into your project.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/FormTemplates.html).

Component Updates
-----------------

### Component Versioning Enhancement

In the V9 Service Pack 2 release, Volt MX Iris introduces support to view the version number and store multiple versions of a component under the **My Libraries** section. Components from the libraries can be directly added to a form or to the Project Components.

For more information on viewing and storing multiple versions of a component, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/C_UsingComponents.html#Mversion).

For more information on adding multiple versions of collections from Templates, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/C_UsingComponents.html#Addcomponent).

### Update Existing Components

In the V9 Service Pack 2 release, Volt MX Iris introduces support to update an existing component to a desired higher version. You can view all the higher versions of a component in the Update Component dialog box, and then select the version that you want to update to.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/C_UsingComponents.html#update-a-component-instance).

### Tooltip for Properties of a Component

In the V9 Service Pack 2 release, Volt MX Iris introduces the Tooltip feature for the custom properties of a Component with contract. Developers can provide detailed information about the functionality of the property that appears when a developer using the component hovers over the property in the component.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/C_CreatingComponent.html#Tooltip).

### Support to Add Components Within a Segment

In the V9 Service Pack 2 release, Volt MX Iris introduces support to add components (with contract) within a Segment Template.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/C_UsingComponents.html#Adding).

### Reorder Properties and Groups

In the V9 Service Pack 2 release, Volt MX Iris introduces the **Reorder Properties** option that enables developers to re-order or re-arrange the properties or groups of a Component (with Contract).

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/C_CreatingComponent.html#reorder-properties-or-groups).

### Generate getters and setters of a custom property

In the V9 Service Pack 2 release, Volt MX Iris supports the automatic generation of the getters and setters of a custom property. When you create or modify a custom property through the **Manage Properties** dialog box, the getters and setters of the property are automatically added to the **initGettersSetters** function in the controller file of the component.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/C_CreatingComponent.html#getters).

### Define Conditional and Dependent Properties for Components with Contract

In the V9 Service Pack 2 release, Volt MX Iris introduces the conditional rendering of properties feature allows you to define conditions and dependencies between properties for a component with contract. For example, using this feature, you can update the visibility of a dependent property based on the value of another property.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/C_CreatingComponent.html#Conditions).

### Support for JSON as a Property Type for Components with Contract

In the V9 Service Pack 2 release, Volt MX Iris introduces support to provide JSON as a Property Type for custom properties in the Manage Properties section for components with contract.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/C_CreatingComponent.html#JSON).

### i18N as a Pass-through Property for Components with Contract

From Volt MX Iris V9 Service Pack 2 release, you can add i18N properties as a Pass-through property for Components with contract. This helps users support Internationalization more easily in the components with contract. You can add the property from the Manage Properties section of the Components or add the property directly from the Properties panel.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/C_CreatingComponent.html#i18N).

### Expose Component Event as a Pass-through Event in a Component with Contract

In the V9 Service Pack 2 release, Volt MX Iris enables the capability to expose an event in a component with contract as a pass-through event. The pass-through event at the instance can then be used to modify the existing functionality in the event or to extend the functionality of the event.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/C_CreatingComponent.html#expose-events-of-a-component).

Data and Services Panel Enhancements
------------------------------------

*   ### Support to Add Custom Verbs to a Form

    From Volt MX Iris V9 Service Pack 2, you can drag and drop a Custom Verb from the Data and Services panel onto a form. Custom Verbs along with the fields and attributes of the custom verbs appear in the Data and Services panel. When you add a Custom Verb to a form, Volt MX Iris generates a popup that allows you to select templates for both the Request and Response UI generation.

    For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/DataPanel.html#custom-verbs-in-data-and-services-panel).

*   ### Support to Add Child Objects to a Form

    From Volt MX Iris V9 Service Pack 2, you can drag and drop Child Objects from the Data and Services panel onto a form. When you add a Child Object to a form, Volt MX Iris generates a custom UI for the Child Object and sends the metadata to the Volt MX Foundry Console.

    For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/DataPanel.html#add-child-objects-to-a-form).

*   CRUD Forms will now automatically ignore the Child Objects when you select a form from the Data and Services panel at the service level. For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/DataPanel.html#Crudnote).

Test Automation Enhancements
----------------------------

### Configure Timeout for a TestCase

Prior to the V9 Service Pack 2 release, there was no option to configure the timeout for individual test cases, and a default timeout of 5 seconds was applied to all test cases. In the V9 Service Pack 2 release, Volt MX Iris has introduced the Timeout feature in the Testcase Recorder window that allows you to configure the timeout value for each test case. This feature enables developers to identify the timeout value for each test case and then configure the timeout value.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/TestAutomation.html#timeout).

### View Screenshots of Failed Expectations

From Volt MX Iris V9 Service Pack 2, you can view the details of all the failed expectations of Jasmine Test Automation in the Results window of the Automator. The Results window displays a list of all the failed expectations along with the name of the test case, line in code, column number, test message, stack trace, and the screenshot of the failure.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/TestAutomation.html#screenshot).

### Add Assertions in Test Case Recordings

The Test Recorder in Volt MX Iris now supports all the assertion types provided by Jasmine Test Automation.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/TestAutomation.html#Assertion).

### Automatically Add WaitFor for a New Test Case

From Volt MX Iris V9 Service Pack 2, when a user performs an action to Navigate to a new form, the Test Case Recorder automatically adds the waitFor statement during the recording to ensure that the test execution considers the wait time for the form load.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/TestAutomation.html#waitforauto).

Responsive Web Enhancements
---------------------------

### Custom CSS Splash Screen

In the V9 Service Pack 2 release, Volt MX Iris introduces support to implement CSS and HTML capabilities in the splash screen for Responsive web apps, by using Custom CSS and Custom HTML code. Prior to the V9 Service Pack 2 release, you could only use images to implement the splash screen for Responsive Web apps.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Splash_Screen_Properties.html#configure-a-splash-screen-by-using-custom-css-html).

### Protected Mode CI Build

In the V9 Service Pack 2 release, Volt MX Iris introduces support to build web applications in the Protected mode by using the CI (Continuous Integration) build feature.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/SecureyourWebApplication.html#secure-web-application-by-using-ci-build).

Android Enhancements
--------------------

### Support for Android Target SDK 30

Support for the Android R (API level 30) Target SDK has been added in Volt MX Iris.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/AndroidR_Behavioral_Changes.html).

### 5G Network APIs

As the Android Framework has provided support for 5G network connection, Volt MX Iris has introduced support for the following 5G Network APIs

*   [voltmx.net.set5GNetworkListener]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.net_functions.html#set5GNetworkListener)
*   [voltmx.net.unregister5GNetworkListener]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.net_functions.html#unregister5GNetworkListener)
*   [voltmx.net.hasCapablity]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.net_functions.html#hasCapability)

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

### Google Play Services Update and Error Handling APIs

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the following APIs that can be used to check the status of the Google Play Services:

*   [voltmx.gms.getStatusString]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.gms_functions.html#getStatusString)
*   [voltmx.gms.isBaseLibraryAvailable]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.gms_functions.html#isBaseLibraryAvailable)
*   [voltmx.gms.isGooglePlayServicesAvailable]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.gms_functions.html#isGooglePlayServicesAvailable)
*   [voltmx.gms.isUserResolvableError]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.gms_functions.html#isUserResolvableError)
*   [voltmx.gms.makeGooglePlayServicesAvailable]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.gms_functions.html#makeGooglePlayServicesAvailable)
*   [voltmx.gms.raiseGooglePlayErrorResolutionIntent]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.gms_functions.html#raiseGooglePlayErrorResolutionIntent)
*   [voltmx.gms.showCustomErrorNotification]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.gms_functions.html#showCustomErrorNotification)
*   [voltmx.gms.showErrorNotification]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.gms_functions.html#showErrorNotification)
*   [voltmx.gms.showResolutionDialog]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.gms_functions.html#showResolutionDialog)

### Auto-Reset Permissions

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the [voltmx.application.isAutoRevokeWhitelisted]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_functions_runtimepermissionsapi.html#isAutoRevokeWhitelisted) API that helps users determine whether an application is exempt from having its permissions be automatically revoked when the app is unused for an extended period of time.

### Disable Auto-Reset Permissions

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the [voltmx.application.launchAutoRevokeSettings]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_functions_runtimepermissionsapi.html#launchAutoRevokeSettings) API that helps users navigate to the application permissions page in the system settings. In the permissions page, the user can configure the system's ability to automatically revoke the app permissions.

### Security Provider Patching

The Android Framework relies on Security Providers to provide secure network communications. To protect against intermittent vulnerabilities with the default security provider, Volt MX Iris introduces support for the [voltmx.gms.getSecurityProvidersList]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.gms_functions.html#getSecurityProvidersList), [voltmx.gms.installSecurityProvider]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.gms_functions.html#installSecurityProvider), and [voltmx.gms.installSecurityProviderAsync]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.gms_functions.html#installSecurityProviderAsync) APIs. By using these APIs, developers can ensure that the device has the latest security provider updates that protect against security exploits.

### Suggest Hints for Text Fields

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the [voltmx.gms.requestHint]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.gms_functions.html#requestHint) API that provides appropriate text suggestions as hints in situations where users need to fill text input fields (such as the email address or phone number fields in a sign-up form).

### Launch Settings

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the [voltmx.application.openSettings]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_functions.html#openSettings) API that launches the specified settings screen.

### Install Source Details

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the [voltmx.application.getInstallerSourceInfo]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_functions.html#getInstallerSourceInfo) API that returns the package name from which the application was installed. The package name helps in identifying the market that the application was downloaded from.

### Background Location Access

Apps that run on Android 11 (API level 30, or later) devices must already have access to foreground location before requesting for background location access. If the user denies permission for background location access, you can provide an educational UI to the user by using the [voltmx.application.getBackgroundPermissionOptionLabel]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_functions_runtimepermissionsapi.html#getBackgroundPermissionOptionLabel) API. The API provides the text for the option that educates the user to grant background access permission.

### GeoLocation API Enhancements

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the [voltmx.location.checkLocationSettings]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.location_functions.html#checkLocationSettings) API that allows you to check whether the current location settings meet the desired accuracy settings. In addition, support for the [accuracyMode]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.location_functions.html#accuracyMode), [requestModifyLocationSettings]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.location_functions.html#requestModifyLocationSettings), and [improveBGLocationUpdateFrequency]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.location_functions.html#improveBGLocationUpdateFrequency) parameters have been added in the positionoptions parameter of the [voltmx.location.getCurrentPosition]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.location_functions.html#getCurrentPosition) and the [voltmx.location.watchPosition]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.location_functions.html#watchPosition) APIs.

### Package Visibility Updates

Android 11 introduces restrictions on how apps query and interact with other apps installed on a device. Apps must use the `<queries>` element to define other packages that the app can interact with. In addition, you must add the `<queries>` element in the Android Manifest Entries to view a filtered list of email applications while using the [filterEmailAppsOnly]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.phone_functions.html#filterEmailAppsOnly) parameter of the [voltmx.phone.openEmail]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.phone_functions.html#phone.op2) API. Further, when you build an app in **Protected Mode**, you must add the `donotAddQueryAllPackages = true` entry in the **androidbuild.properties** file to disable the automatic addition of the QUERY\_ALL\_PACKAGES permission in the Android Manifest file.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Native_App_Properties.html#android-11-package-visibility-updates).

### Cryptography API Enhancement - Base 64 String Support

In the V9 Service Pack 2 release, the [voltmx.crypto.createHash]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.crypto_functions.html#createHash), and [voltmx.crypto.createHMacHash]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.crypto_functions.html#voltmx.cry2) have been enhanced to accept an additional input parameter, [options]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.crypto_functions.html#options). The **options** parameter is a data dictionary that contains the **returnBase64String** key.

### Authenticate using Device Credentials

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the **constants.LOCAL\_AUTHENTICATION\_MODE\_DEVICE\_CREDENTIALS** as an Authentication Mode constant has been added in the [voltmx.localAuthentication.getStatusForAuthenticationMode]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.localauthentication_functions.html#getStatusForAuthenticationMode) API. This constant determines whether the device has either PIN, PATTERN, or PASSWORD configured as the authentication mode.

### 2G and 4G Network Updates

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the [requestWithPermission]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.net_functions.html#requestWithPermission) key in the [optionsConfig]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.net_functions.html#optionsConfig) parameter of the [voltmx.net.getActiveNetworkType]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.net_functions.html#Fetching) and [voltmx.net.isNetworkAvailable]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.net_functions.html#Checking) APIs. By using the requestWithPermission key, developers can obtain information on whether a 2G or 4G Network is used for network communication. In addition, the [voltmx.net.getActiveNetworkType]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.net_functions.html#Fetching) has been enhanced to accept a [callback function]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.net_functions.html#callback) that is invoked when the value of the requestWithPermission key is set to `true`.

### Biometric Authentication Enhancements (Beta)

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the voltmx.localAuthentication.requestBiometricsEnroll API that requests users to set up biometric authentication. In addition, enhancements have been made to the Local Authentication APIs based on a Beta version of the Android Library to provide more security and a better user experience.

Support for Widget Extensions
-----------------------------

In the V9 Service Pack 2 release, Volt MX Iris introduces support to customize existing Flare Volt MX widgets by using the [voltmx.ui.defineExtendedWidge]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.ui_functions.html#ExtendedWidget)t API to create a new widget with additional functionality. Once you create the custom widget, you can use it as a regular widget across your project.

Sign In With Apple
------------------

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the [SigninWithApple widget]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/SigninWithApple.html) that enables application users to sign in to apps and websites by using their Apple ID. Use the voltmx.ui.signInWithApple to create the SigninWithApple widget. You can then use the [voltmx.signInWithApple.evaluateCredentialStateforUserID]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.signinwithapple_functions.html#evaluateCredentialStateforUserID) to get the current state of an opaque user ID that was specified previously.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/signinwithapple_api.html).

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

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the [startARImageDetection]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/ARRenderer_Methods.html#startARImageDetection) and [stopARImageDetection]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/ARRenderer_Methods.html#stopARImageDetection) methods for the ARRenderer widget. Using these methods, developers can scan an image and overlay another image or a video on top of the scanned image.

VIDEO WIDGET ENHANCEMENT - CLOSED CAPTIONS SUPPORT
--------------------------------------------------

In the V9 Service Pack 2 release, Volt MX Iris introduces support to display Closed Captions in the Video widget. Developers can add captions tracks and enable the captions.

To support this feature, the following properties and methods are added to the Video widget:

*   [enableCaptions]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Video_Basic_Properties.html#enableCaptions) property
*   [tracks]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Video_Basic_Properties.html#tracks) property
*   [setTracks]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Video_Method.html#setTracks) method

ListBox Widget Enhancements
---------------------------

Enhancements have been made to the ListBox widget on the Desktop Web channel to provide the same capabilities as a ListBox widget on the Mobile Native channel. In the V9 Service Pack 2 release, Volt MX Iris introduces support for the following properties to enable the addition of Skins to the ListBox items on the Desktop Web channel:

*   [disabledKeys]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/ListBox_Basic_Properties.html#disabledKeys)
*   [itemDisabledSkin]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/ListBox_Basic_Properties.html#itemDisabledSkin)
*   [itemHoverSkin]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/ListBox_Basic_Properties.html#itemHoverSkin)
*   [itemNormalSkin]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/ListBox_Basic_Properties.html#itemNormalSkin)

zIndex Support for Map Methods
------------------------------

In the V9 Service Pack 2 release, Volt MX Iris introduces support to provide the zIndex for the pins and shapes added to maps. While using the Map widget, you can add the zIndex parameter to the following methods:

*   [addPin]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Map_Methods.html#zIndexaddPin)
*   [addPins]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Map_Methods.html#zIndexaddPins)
*   [addPolygon]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Map_Methods.html#zIndexaddPolygon)
*   [addPolyline]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Map_Methods.html#zIndexaddPolyline)
*   [addCircle]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Map_Methods.html#zIndexaddCircle)
*   [updatePin]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Map_Methods.html#zIndexupdatePin)
*   [updatePins]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Map_Methods.html#zIndexupdatePins)

Text Widget Enhancement
-----------------------

*   ### Support for textCopyable property

    In the V9 Service Pack 2 release, Volt MX Iris introduces support for the **textCopyable** property for the [TextBox]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/TextBox_Properties.html#textCopyable1) and [TextArea]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/TextArea_Properties.html#textCopyable) widgets. By using this property, you can enable or disable the cut, copy and paste actions on the text entered in the TextBox and TextArea widgets.

*   The Desktop Web platform now supports the following properties of the TextBox and TextArea widgets:
    *   [autoCapitalize]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/TextArea_Properties.html#autoCapitalize) Property
    *   [restrictCharactersSet]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/TextArea_Properties.html#restrictCharactersSet) Property
    *   [textInputMode]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/TextArea_Properties.html#textInputmode) Property

Calendar Widget Enhancements
----------------------------

### Enable or Disable Dates

In the V9 Service Pack 2 release, Volt MX Iris introduces the [enableOrDisableDates]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Calendar_Properties.html#enableOrDisableDates) property for the Calendar widget. Using the **enableOrDisableDates** property, developers can enable or disable the list of dates for the Calendar widget to display.

### Repeat Events in Intervals

In the V9 Service Pack 2 release, the [voltmx.phone.addCalendarEvent]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.phone_functions.html#phone.ad) API is enhanced to accept [Interval]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.phone_functions.html#Interval) as an input parameter. By using the **Interval** parameter, developers can configure an event on the calendar to repeat on a biweekly, quarterly, or semi-annual basis.

### Calendar Enhancements for Responsive Web

Prior to the Volt MX Iris V9 Service Pack 2 release, you had to click the Calendar icon, and then click the month or year from a grid view, and then confirm the selections. From Volt MX Iris V9 Service Pack 2, the Calendar widget has been enhanced with a new look that lets you select the month and year from drop-down lists. Additionally, support for the following attributes has been added in the viewConfig property of the Calendar widget:

*   [gridCellHoverSkin]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Calendar_Properties.html#gridCellHoverSkin)
*   [gridMonthYearHoverSkin]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Calendar_Properties.html#gridMonthYearHoverSkin)
*   [gridMonthYearSelectedSkin]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Calendar_Properties.html#gridMonthYearSelectedSkin)
*   [monthYearDone]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Calendar_Properties.html#monthYearDone)
*   [monthYearCancel]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Calendar_Properties.html#monthYearCancel)

In addition, the [calendarMonthYearSelectionDropdownView]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_functions.html#DropdownView) parameter has been added in the [voltmx.application.setApplicationBehaviors]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_functions.html#voltmx.app5) API. This parameter allows you to enable or disable the new look of Calendar widget.

Modify Skin Properties at Run time
----------------------------------

In the V9 Service Pack 2 release, Volt MX Iris introduces the [voltmx.theme.setSkinsProperties]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.theme_functions.html#setSkinsProperties) API. By using this API, developers can dynamically configure the Skin properties for a widget. In addition, support for the following properties is added for a few widgets (such as Button, Calendar, Camera , CheckBoxGroup, FlexContainer, Label, ListBox, RadioButtonGroup, RichText, TextArea2, and TextBox2 widgets):

*   [backgroundColor]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Button_Properties.html#backgrou)
*   [backgroundColorMultiStepGradient]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Button_Properties.html#backgroundColorMultiStepGradient)
*   [backgroundColorTwoStepGradient]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Button_Properties.html#backgroundColorTwoStepGradient)
*   [backgroundImage]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Button_Properties.html#backgroundImage)
*   [borderColor]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Button_Properties.html#borderColor)
*   [borderColorGradient]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Button_Properties.html#borderColorGradient)
*   [borderStyle]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Button_Properties.html#borderStyle)
*   [borderWidth]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Button_Properties.html#borderWidth)
*   [cornerRadius]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Button_Properties.html#cornerRadius)
*   [disabledStateSkinProperties]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Button_Properties.html#disabledStateSkinProperties) (available on the Android platform)
*   [focusStateSkinProperties]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Button_Properties.html#focusStateSkinProperties)
*   [fontColor]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Button_Properties.html#fontColor)
*   [fontFamily]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Button_Properties.html#fontFamily)
*   [fontSize]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Button_Properties.html#fontSize)
*   [fontStyle]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Button_Properties.html#fontStyle)
*   [fontWeight]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Button_Properties.html#fontWeight)
*   [hoverStateSkinProperties]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Button_Properties.html#hoverStateSkinProperties) (available on the Responsive Web platform)
*   [pressedStateSkinProperties]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Button_Properties.html#pressedStateSkinProperties) (available on the Android platform)
*   [shadowColor]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Button_Properties.html#shadowColor)
*   [shadowOffset]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Button_Properties.html#shadowOffset)
*   [shadowRadius]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Button_Properties.html#shadowRadius)
*   [textShadowColor]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Button_Properties.html#textShadowColor)
*   [textShadowOffset]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Button_Properties.html#textShadowOffset)
*   [textShadowRadius]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Button_Properties.html#textShadowRadius)

Haptic Feedback Support - watchOS
---------------------------------

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the following events that can be used to provide haptic feedback on the watchOS:

*   [didAppear]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Watch.html#didAppear)
*   [interfaceDidScrollToTop]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Watch.html#interfaceDidScrollToTop)
*   [interfaceOffsetDidScrollToBottom]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Watch.html#interfaceOffsetDidScrollToBottom)
*   [interfaceOffsetDidScrollToTop]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Watch.html#interfaceOffsetDidScrollToTop)

Accessibility Enhancement
-------------------------

In the V9 Service Pack 2 release, Volt MX Iris introduces support to provide 0 or -1 as a value for the tab order . Prior to the V9 Service Pack 2 release, developers could only set values that were greater than zero.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/app_design_dev/Content/Accessibility_Iris.html#taborder2).

Security Enhancements
---------------------

The following security enhancements have been made in the V9 Service Pack 2 release of Volt MX Iris:

*   ### Enable Android Verify Apps

    Support for the following set of SafetyNet APIs has been added as part of the Volt MX Iris V9 ServicePack 2 release:

    *   Attestation API

        *   [voltmx.gms.safetynet.attest]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.gms_functions.html#attest)
    *   Verify Apps API

        *   [voltmx.gms.safetynet.isVerifyAppsEnabled]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.gms_functions.html#isVerifyAppsEnabled)
        *   [voltmx.gms.safetynet.enableVerifyApps]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.gms_functions.html#enableVerifyApps)
        *   [voltmx.gms.safetynet.listHarmfulApps]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.gms_functions.html#listHarmfulApps)

    For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/safetynetapi.html).

*   ### Prevent Android Tapjacking

    In the V9 Service Pack 2 release, Volt MX Iris introduces support for the [filterTouchesWhenObscured]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_functions.html#filterTouchesWhenObscured) parameter in the [voltmx.application.setApplicationBehaviors]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_functions.html#voltmx.app5) API to protect Android apps against Tapjacking mechanisms.


### Component to Integrate Vector Animations - HCL Forge

In the V9 Service Pack 2 release, a new component has been added to HCL Forge that can be used to integrate vector animations in Volt MX apps. This component simplifies the integration with Lottie and provides the necessary tooling that enhances the user experience of integrating vector animations into apps.

For more information about this feature, click [here](https://marketplace.hclvoltmx.com/items/lottieanimator).
