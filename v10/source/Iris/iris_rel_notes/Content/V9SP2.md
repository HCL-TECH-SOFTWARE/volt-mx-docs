

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

For more information on this feature, click [here](../../../Iris/iris_user_guide/Content/FormTemplates.md).

Component Updates
-----------------

### Component Versioning Enhancement

In the V9 Service Pack 2 release, Volt MX Iris introduces support to view the version number and store multiple versions of a component under the **My Libraries** section. Components from the libraries can be directly added to a form or to the Project Components.

For more information on viewing and storing multiple versions of a component, click [here](../../../Iris/iris_user_guide/Content/C_UsingComponents.md#Mversion).

For more information on adding multiple versions of collections from Templates, click [here](../../../Iris/iris_user_guide/Content/C_UsingComponents.md#Addcomponent).

### Update Existing Components

In the V9 Service Pack 2 release, Volt MX Iris introduces support to update an existing component to a desired higher version. You can view all the higher versions of a component in the Update Component dialog box, and then select the version that you want to update to.

For more information on this feature, click [here](../../../Iris/iris_user_guide/Content/C_UsingComponents.md#update-a-component-instance).

### Tooltip for Properties of a Component

In the V9 Service Pack 2 release, Volt MX Iris introduces the Tooltip feature for the custom properties of a Component with contract. Developers can provide detailed information about the functionality of the property that appears when a developer using the component hovers over the property in the component.

For more information on this feature, click [here](../../../Iris/iris_user_guide/Content/C_CreatingComponent.md#Tooltip).

### Support to Add Components Within a Segment

In the V9 Service Pack 2 release, Volt MX Iris introduces support to add components (with contract) within a Segment Template.

For more information on this feature, click [here](../../../Iris/iris_user_guide/Content/C_UsingComponents.md#Adding).

### Reorder Properties and Groups

In the V9 Service Pack 2 release, Volt MX Iris introduces the **Reorder Properties** option that enables developers to re-order or re-arrange the properties or groups of a Component (with Contract).

For more information on this feature, click [here](../../../Iris/iris_user_guide/Content/C_CreatingComponent.md#reorder-properties-or-groups).

### Generate getters and setters of a custom property

In the V9 Service Pack 2 release, Volt MX Iris supports the automatic generation of the getters and setters of a custom property. When you create or modify a custom property through the **Manage Properties** dialog box, the getters and setters of the property are automatically added to the **initGettersSetters** function in the controller file of the component.

For more information on this feature, click [here](../../../Iris/iris_user_guide/Content/C_CreatingComponent.md#getters).

### Define Conditional and Dependent Properties for Components with Contract

In the V9 Service Pack 2 release, Volt MX Iris introduces the conditional rendering of properties feature allows you to define conditions and dependencies between properties for a component with contract. For example, using this feature, you can update the visibility of a dependent property based on the value of another property.

For more information on this feature, click [here](../../../Iris/iris_user_guide/Content/C_CreatingComponent.md#Conditions).

### Support for JSON as a Property Type for Components with Contract

In the V9 Service Pack 2 release, Volt MX Iris introduces support to provide JSON as a Property Type for custom properties in the Manage Properties section for components with contract.

For more information on this feature, click [here](../../../Iris/iris_user_guide/Content/C_CreatingComponent.md#JSON).

### i18N as a Pass-through Property for Components with Contract

From Volt MX Iris V9 Service Pack 2 release, you can add i18N properties as a Pass-through property for Components with contract. This helps users support Internationalization more easily in the components with contract. You can add the property from the Manage Properties section of the Components or add the property directly from the Properties panel.

For more information on this feature, click [here](../../../Iris/iris_user_guide/Content/C_CreatingComponent.md#i18N).

### Expose Component Event as a Pass-through Event in a Component with Contract

In the V9 Service Pack 2 release, Volt MX Iris enables the capability to expose an event in a component with contract as a pass-through event. The pass-through event at the instance can then be used to modify the existing functionality in the event or to extend the functionality of the event.

For more information on this feature, click [here](../../../Iris/iris_user_guide/Content/C_CreatingComponent.md#expose-events-of-a-component).

Data and Services Panel Enhancements
------------------------------------

*   ### Support to Add Custom Verbs to a Form

    From Volt MX Iris V9 Service Pack 2, you can drag and drop a Custom Verb from the Data and Services panel onto a form. Custom Verbs along with the fields and attributes of the custom verbs appear in the Data and Services panel. When you add a Custom Verb to a form, Volt MX Iris generates a popup that allows you to select templates for both the Request and Response UI generation.

    For more information on this feature, click [here](../../../Iris/iris_user_guide/Content/DataPanel.md#custom-verbs-in-data-and-services-panel).

*   ### Support to Add Child Objects to a Form

    From Volt MX Iris V9 Service Pack 2, you can drag and drop Child Objects from the Data and Services panel onto a form. When you add a Child Object to a form, Volt MX Iris generates a custom UI for the Child Object and sends the metadata to the Volt MX Foundry Console.

    For more information on this feature, click [here](../../../Iris/iris_user_guide/Content/DataPanel.md#add-child-objects-to-a-form).

*   CRUD Forms will now automatically ignore the Child Objects when you select a form from the Data and Services panel at the service level. For more information on this feature, click [here](../../../Iris/iris_user_guide/Content/DataPanel.md#Crudnote).

Test Automation Enhancements
----------------------------

### Configure Timeout for a TestCase

Prior to the V9 Service Pack 2 release, there was no option to configure the timeout for individual test cases, and a default timeout of 5 seconds was applied to all test cases. In the V9 Service Pack 2 release, Volt MX Iris has introduced the Timeout feature in the Testcase Recorder window that allows you to configure the timeout value for each test case. This feature enables developers to identify the timeout value for each test case and then configure the timeout value.

For more information on this feature, click [here](../../../Iris/iris_user_guide/Content/TestAutomation.md#timeout).

### View Screenshots of Failed Expectations

From Volt MX Iris V9 Service Pack 2, you can view the details of all the failed expectations of Jasmine Test Automation in the Results window of the Automator. The Results window displays a list of all the failed expectations along with the name of the test case, line in code, column number, test message, stack trace, and the screenshot of the failure.

For more information on this feature, click [here](../../../Iris/iris_user_guide/Content/TestAutomation.md#screenshot).

### Add Assertions in Test Case Recordings

The Test Recorder in Volt MX Iris now supports all the assertion types provided by Jasmine Test Automation.

For more information on this feature, click [here](../../../Iris/iris_user_guide/Content/TestAutomation.md#Assertion).

### Automatically Add WaitFor for a New Test Case

From Volt MX Iris V9 Service Pack 2, when a user performs an action to Navigate to a new form, the Test Case Recorder automatically adds the waitFor statement during the recording to ensure that the test execution considers the wait time for the form load.

For more information on this feature, click [here](../../../Iris/iris_user_guide/Content/TestAutomation.md#waitforauto).

Responsive Web Enhancements
---------------------------

### Custom CSS Splash Screen

In the V9 Service Pack 2 release, Volt MX Iris introduces support to implement CSS and HTML capabilities in the splash screen for Responsive web apps, by using Custom CSS and Custom HTML code. Prior to the V9 Service Pack 2 release, you could only use images to implement the splash screen for Responsive Web apps.

For more information on this feature, click [here](../../../Iris/iris_user_guide/Content/Splash_Screen_Properties.md#configure-a-splash-screen-by-using-custom-css.md).

### Protected Mode CI Build

In the V9 Service Pack 2 release, Volt MX Iris introduces support to build web applications in the Protected mode by using the CI (Continuous Integration) build feature.

For more information on this feature, click [here](../../../Iris/iris_user_guide/Content/SecureyourWebApplication.md#secure-web-application-by-using-ci-build).

Android Enhancements
--------------------

### Support for Android Target SDK 30

Support for the Android R (API level 30) Target SDK has been added in Volt MX Iris.

For more information on this feature, click [here](../../../Iris/iris_user_guide/Content/AndroidR_Behavioral_Changes.md).

### 5G Network APIs

As the Android Framework has provided support for 5G network connection, Volt MX Iris has introduced support for the following 5G Network APIs

*   [voltmx.net.set5GNetworkListener](../../../Iris/iris_api_dev_guide/content/voltmx.net_functions.md#set5GNetworkListener)
*   [voltmx.net.unregister5GNetworkListener](../../../Iris/iris_api_dev_guide/content/voltmx.net_functions.md#unregister5GNetworkListener)
*   [voltmx.net.hasCapablity](../../../Iris/iris_api_dev_guide/content/voltmx.net_functions.md#hasCapability)

### In-App Update APIs

On devices that use target SDK API version 21 (and later), the Google Play Core library allows in-app updates. By using the In-App Update APIs, developers can notify the user (while the user is using the app) that an app update is available for download.

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the following in-app update APIs

*   [voltmx.application.checkForAppUpdate](../../../Iris/iris_api_dev_guide/content/voltmx.application_in-app_updates_functions.md#checkForAppUpdate)
*   [voltmx.application.completeAppUpdate](../../../Iris/iris_api_dev_guide/content/voltmx.application_in-app_updates_functions.md#completeAppUpdate)
*   [voltmx.application.registerAppUpdateListener](../../../Iris/iris_api_dev_guide/content/voltmx.application_in-app_updates_functions.md#registerAppUpdateListener)
*   [voltmx.application.requestForAppUpdate](../../../Iris/iris_api_dev_guide/content/voltmx.application_in-app_updates_functions.md#requestForAppUpdate)
*   [voltmx.application.unRegisterAppUpdateListener](../../../Iris/iris_api_dev_guide/content/voltmx.application_in-app_updates_functions.md#unRegisterAppUpdateListener)

### In-App Review APIs

From the Android 5.0 (API level 21) release, the Google Play Core library supports the in-app review feature that provides users with an option to provide a review for the app (while the user is using the app).  
In the V9 Service Pack 2 release, Volt MX Iris introduces support for the [voltmx.application.requestReviewFlow](../../../Iris/iris_api_dev_guide/content/voltmx.application_functions_requestreview.md#requestReviewFlow) API that provides information required to launch the in-app review flow for an app.  
In addition, the [voltmx.application.requestReview](../../../Iris/iris_api_dev_guide/content/voltmx.application_functions_requestreview.md#requestReview) API has been enhanced to accept **config** as an input parameter.

### Battery Optimization APIs

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the following Battery Optimization APIs:

*   [voltmx.application.isIgnoringBatteryOptimizations](../../../Iris/iris_api_dev_guide/content/voltmx.application_functions.md#isIgnoringBatteryOptimizations)
*   [voltmx.application.launchBatteryOptimizationSettings](../../../Iris/iris_api_dev_guide/content/voltmx.application_functions.md#launchBatteryOptimizationSettings)
*   [voltmx.application.requestIgnoreBatteryOptimizations](../../../Iris/iris_api_dev_guide/content/voltmx.application_functions.md#requestIgnoreBatteryOptimizations)

### Google Play Services Update and Error Handling APIs

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the following APIs that can be used to check the status of the Google Play Services:

*   [voltmx.gms.getStatusString](../../../Iris/iris_api_dev_guide/content/voltmx.gms_functions.md#getStatusString)
*   [voltmx.gms.isBaseLibraryAvailable](../../../Iris/iris_api_dev_guide/content/voltmx.gms_functions.md#isBaseLibraryAvailable)
*   [voltmx.gms.isGooglePlayServicesAvailable](../../../Iris/iris_api_dev_guide/content/voltmx.gms_functions.md#isGooglePlayServicesAvailable)
*   [voltmx.gms.isUserResolvableError](../../../Iris/iris_api_dev_guide/content/voltmx.gms_functions.md#isUserResolvableError)
*   [voltmx.gms.makeGooglePlayServicesAvailable](../../../Iris/iris_api_dev_guide/content/voltmx.gms_functions.md#makeGooglePlayServicesAvailable)
*   [voltmx.gms.raiseGooglePlayErrorResolutionIntent](../../../Iris/iris_api_dev_guide/content/voltmx.gms_functions.md#raiseGooglePlayErrorResolutionIntent)
*   [voltmx.gms.showCustomErrorNotification](../../../Iris/iris_api_dev_guide/content/voltmx.gms_functions.md#showCustomErrorNotification)
*   [voltmx.gms.showErrorNotification](../../../Iris/iris_api_dev_guide/content/voltmx.gms_functions.md#showErrorNotification)
*   [voltmx.gms.showResolutionDialog](../../../Iris/iris_api_dev_guide/content/voltmx.gms_functions.md#showResolutionDialog)

### Auto-Reset Permissions

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the [voltmx.application.isAutoRevokeWhitelisted](../../../Iris/iris_api_dev_guide/content/voltmx.application_functions_runtimepermissionsapi.md#isAutoRevokeWhitelisted) API that helps users determine whether an application is exempt from having its permissions be automatically revoked when the app is unused for an extended period of time.

### Disable Auto-Reset Permissions

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the [voltmx.application.launchAutoRevokeSettings](../../../Iris/iris_api_dev_guide/content/voltmx.application_functions_runtimepermissionsapi.md#launchAutoRevokeSettings) API that helps users navigate to the application permissions page in the system settings. In the permissions page, the user can configure the system's ability to automatically revoke the app permissions.

### Security Provider Patching

The Android Framework relies on Security Providers to provide secure network communications. To protect against intermittent vulnerabilities with the default security provider, Volt MX Iris introduces support for the [voltmx.gms.getSecurityProvidersList](../../../Iris/iris_api_dev_guide/content/voltmx.gms_functions.md#getSecurityProvidersList), [voltmx.gms.installSecurityProvider](../../../Iris/iris_api_dev_guide/content/voltmx.gms_functions.md#installSecurityProvider), and [voltmx.gms.installSecurityProviderAsync](../../../Iris/iris_api_dev_guide/content/voltmx.gms_functions.md#installSecurityProviderAsync) APIs. By using these APIs, developers can ensure that the device has the latest security provider updates that protect against security exploits.

### Suggest Hints for Text Fields

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the [voltmx.gms.requestHint](../../../Iris/iris_api_dev_guide/content/voltmx.gms_functions.md#requestHint) API that provides appropriate text suggestions as hints in situations where users need to fill text input fields (such as the email address or phone number fields in a sign-up form).

### Launch Settings

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the [voltmx.application.openSettings](../../../Iris/iris_api_dev_guide/content/voltmx.application_functions.md#openSettings) API that launches the specified settings screen.

### Install Source Details

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the [voltmx.application.getInstallerSourceInfo](../../../Iris/iris_api_dev_guide/content/voltmx.application_functions.md#getInstallerSourceInfo) API that returns the package name from which the application was installed. The package name helps in identifying the market that the application was downloaded from.

### Background Location Access

Apps that run on Android 11 (API level 30, or later) devices must already have access to foreground location before requesting for background location access. If the user denies permission for background location access, you can provide an educational UI to the user by using the [voltmx.application.getBackgroundPermissionOptionLabel](../../../Iris/iris_api_dev_guide/content/voltmx.application_functions_runtimepermissionsapi.md#getBackgroundPermissionOptionLabel) API. The API provides the text for the option that educates the user to grant background access permission.

### GeoLocation API Enhancements

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the [voltmx.location.checkLocationSettings](../../../Iris/iris_api_dev_guide/content/voltmx.location_functions.md#checkLocationSettings) API that allows you to check whether the current location settings meet the desired accuracy settings. In addition, support for the [accuracyMode](../../../Iris/iris_api_dev_guide/content/voltmx.location_functions.md#accuracyMode), [requestModifyLocationSettings](../../../Iris/iris_api_dev_guide/content/voltmx.location_functions.md#requestModifyLocationSettings), and [improveBGLocationUpdateFrequency](../../../Iris/iris_api_dev_guide/content/voltmx.location_functions.md#improveBGLocationUpdateFrequency) parameters have been added in the positionoptions parameter of the [voltmx.location.getCurrentPosition](../../../Iris/iris_api_dev_guide/content/voltmx.location_functions.md#getCurrentPosition) and the [voltmx.location.watchPosition](../../../Iris/iris_api_dev_guide/content/voltmx.location_functions.md#watchPosition) APIs.

### Package Visibility Updates

Android 11 introduces restrictions on how apps query and interact with other apps installed on a device. Apps must use the `<queries>` element to define other packages that the app can interact with. In addition, you must add the `<queries>` element in the Android Manifest Entries to view a filtered list of email applications while using the [filterEmailAppsOnly](../../../Iris/iris_api_dev_guide/content/voltmx.phone_functions.md#filterEmailAppsOnly) parameter of the [voltmx.phone.openEmail](../../../Iris/iris_api_dev_guide/content/voltmx.phone_functions.md#phone.op2) API. Further, when you build an app in **Protected Mode**, you must add the `donotAddQueryAllPackages = true` entry in the **androidbuild.properties** file to disable the automatic addition of the QUERY\_ALL\_PACKAGES permission in the Android Manifest file.

For more information on this feature, click [here](../../../Iris/iris_user_guide/Content/Native_App_Properties.md#android-11-package-visibility-updates).

### Cryptography API Enhancement - Base 64 String Support

In the V9 Service Pack 2 release, the [voltmx.crypto.createHash](../../../Iris/iris_api_dev_guide/content/voltmx.crypto_functions.md#createHash), and [voltmx.crypto.createHMacHash](../../../Iris/iris_api_dev_guide/content/voltmx.crypto_functions.md#voltmx.cry2) have been enhanced to accept an additional input parameter, [options](../../../Iris/iris_api_dev_guide/content/voltmx.crypto_functions.md#options). The **options** parameter is a data dictionary that contains the **returnBase64String** key.

### Authenticate using Device Credentials

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the **constants.LOCAL\_AUTHENTICATION\_MODE\_DEVICE\_CREDENTIALS** as an Authentication Mode constant has been added in the [voltmx.localAuthentication.getStatusForAuthenticationMode](../../../Iris/iris_api_dev_guide/content/voltmx.localauthentication_functions.md#getStatusForAuthenticationMode) API. This constant determines whether the device has either PIN, PATTERN, or PASSWORD configured as the authentication mode.

### 2G and 4G Network Updates

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the [requestWithPermission](../../../Iris/iris_api_dev_guide/content/voltmx.net_functions.md#requestWithPermission) key in the [optionsConfig](../../../Iris/iris_api_dev_guide/content/voltmx.net_functions.md#optionsConfig) parameter of the [voltmx.net.getActiveNetworkType](../../../Iris/iris_api_dev_guide/content/voltmx.net_functions.md#Fetching) and [voltmx.net.isNetworkAvailable](../../../Iris/iris_api_dev_guide/content/voltmx.net_functions.md#Checking) APIs. By using the requestWithPermission key, developers can obtain information on whether a 2G or 4G Network is used for network communication. In addition, the [voltmx.net.getActiveNetworkType](../../../Iris/iris_api_dev_guide/content/voltmx.net_functions.md#Fetching) has been enhanced to accept a [callback function](../../../Iris/iris_api_dev_guide/content/voltmx.net_functions.md#callback) that is invoked when the value of the requestWithPermission key is set to `true`.

### Biometric Authentication Enhancements (Beta)

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the voltmx.localAuthentication.requestBiometricsEnroll API that requests users to set up biometric authentication. In addition, enhancements have been made to the Local Authentication APIs based on a Beta version of the Android Library to provide more security and a better user experience.

Support for Widget Extensions
-----------------------------

In the V9 Service Pack 2 release, Volt MX Iris introduces support to customize existing Flare Volt MX widgets by using the [voltmx.ui.defineExtendedWidge](../../../Iris/iris_api_dev_guide/content/voltmx.ui_functions.md#ExtendedWidget)t API to create a new widget with additional functionality. Once you create the custom widget, you can use it as a regular widget across your project.

Sign In With Apple
------------------

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the [SigninWithApple widget](../../../Iris/iris_widget_prog_guide/Content/SigninWithApple.md) that enables application users to sign in to apps and websites by using their Apple ID. Use the voltmx.ui.signInWithApple to create the SigninWithApple widget. You can then use the [voltmx.signInWithApple.evaluateCredentialStateforUserID](../../../Iris/iris_api_dev_guide/content/voltmx.signinwithapple_functions.md#evaluateCredentialStateforUserID) to get the current state of an opaque user ID that was specified previously.

For more information on this feature, click [here](../../../Iris/iris_api_dev_guide/content/signinwithapple_api.md).

ARRenderer Widget Enhancements
------------------------------

### Save and Retrieve Real World position

In the V9 Service Pack 2 release, Volt MX Iris introduces support to save the real-world position or planes, and then add a 3D object to that area. In addition, developers can also retrieve the same object when they scan the same plane.

To support this feature, the following properties and methods have been added to the ARRenderer widget:

*   [canSaveExperienceCallback](../../../Iris/iris_widget_prog_guide/Content/ARRenderer_Properties.md#canSaveExperienceCallback) property
*   [enableCloudAnchors](../../../Iris/iris_widget_prog_guide/Content/ARRenderer_Properties.md#enableCloudAnchors) Property
*   [clearExperience](../../../Iris/iris_widget_prog_guide/Content/ARRenderer_Methods.md#clearExperience) Method
*   [hostCloudAnchor](../../../Iris/iris_widget_prog_guide/Content/ARRenderer_Methods.md#hostCloudAnchor) Method
*   [loadExperience](../../../Iris/iris_widget_prog_guide/Content/ARRenderer_Methods.md#loadExperience) Method
*   [resolveCloudAnchor](../../../Iris/iris_widget_prog_guide/Content/ARRenderer_Methods.md#resolveCloudAnchor) Method
*   [saveExperience](../../../Iris/iris_widget_prog_guide/Content/ARRenderer_Methods.md#saveExperience) Method

### Real-time Image Recognition and Overlays

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the [startARImageDetection](../../../Iris/iris_widget_prog_guide/Content/ARRenderer_Methods.md#startARImageDetection) and [stopARImageDetection](../../../Iris/iris_widget_prog_guide/Content/ARRenderer_Methods.md#stopARImageDetection) methods for the ARRenderer widget. Using these methods, developers can scan an image and overlay another image or a video on top of the scanned image.

VIDEO WIDGET ENHANCEMENT - CLOSED CAPTIONS SUPPORT
--------------------------------------------------

In the V9 Service Pack 2 release, Volt MX Iris introduces support to display Closed Captions in the Video widget. Developers can add captions tracks and enable the captions.

To support this feature, the following properties and methods are added to the Video widget:

*   [enableCaptions](../../../Iris/iris_widget_prog_guide/Content/Video_Basic_Properties.md#enableCaptions) property
*   [tracks](../../../Iris/iris_widget_prog_guide/Content/Video_Basic_Properties.md#tracks) property
*   [setTracks](../../../Iris/iris_widget_prog_guide/Content/Video_Method.md#setTracks) method

ListBox Widget Enhancements
---------------------------

Enhancements have been made to the ListBox widget on the Desktop Web channel to provide the same capabilities as a ListBox widget on the Mobile Native channel. In the V9 Service Pack 2 release, Volt MX Iris introduces support for the following properties to enable the addition of Skins to the ListBox items on the Desktop Web channel:

*   [disabledKeys](../../../Iris/iris_widget_prog_guide/Content/ListBox_Basic_Properties.md#disabledKeys)
*   [itemDisabledSkin](../../../Iris/iris_widget_prog_guide/Content/ListBox_Basic_Properties.md#itemDisabledSkin)
*   [itemHoverSkin](../../../Iris/iris_widget_prog_guide/Content/ListBox_Basic_Properties.md#itemHoverSkin)
*   [itemNormalSkin](../../../Iris/iris_widget_prog_guide/Content/ListBox_Basic_Properties.md#itemNormalSkin)

zIndex Support for Map Methods
------------------------------

In the V9 Service Pack 2 release, Volt MX Iris introduces support to provide the zIndex for the pins and shapes added to maps. While using the Map widget, you can add the zIndex parameter to the following methods:

*   [addPin](../../../Iris/iris_widget_prog_guide/Content/Map_Methods.md#zIndexaddPin)
*   [addPins](../../../Iris/iris_widget_prog_guide/Content/Map_Methods.md#zIndexaddPins)
*   [addPolygon](../../../Iris/iris_widget_prog_guide/Content/Map_Methods.md#zIndexaddPolygon)
*   [addPolyline](../../../Iris/iris_widget_prog_guide/Content/Map_Methods.md#zIndexaddPolyline)
*   [addCircle](../../../Iris/iris_widget_prog_guide/Content/Map_Methods.md#zIndexaddCircle)
*   [updatePin](../../../Iris/iris_widget_prog_guide/Content/Map_Methods.md#zIndexupdatePin)
*   [updatePins](../../../Iris/iris_widget_prog_guide/Content/Map_Methods.md#zIndexupdatePins)

Text Widget Enhancement
-----------------------

*   ### Support for textCopyable property

    In the V9 Service Pack 2 release, Volt MX Iris introduces support for the **textCopyable** property for the [TextBox](../../../Iris/iris_widget_prog_guide/Content/TextBox_Properties.md#textCopyable1) and [TextArea](../../../Iris/iris_widget_prog_guide/Content/TextArea_Properties.md#textCopyable) widgets. By using this property, you can enable or disable the cut, copy and paste actions on the text entered in the TextBox and TextArea widgets.

*   The Desktop Web platform now supports the following properties of the TextBox and TextArea widgets:
    *   [autoCapitalize](../../../Iris/iris_widget_prog_guide/Content/TextArea_Properties.md#autoCapitalize) Property
    *   [restrictCharactersSet](../../../Iris/iris_widget_prog_guide/Content/TextArea_Properties.md#restrictCharactersSet) Property
    *   [textInputMode](../../../Iris/iris_widget_prog_guide/Content/TextArea_Properties.md#textInputmode) Property

Calendar Widget Enhancements
----------------------------

### Enable or Disable Dates

In the V9 Service Pack 2 release, Volt MX Iris introduces the [enableOrDisableDates](../../../Iris/iris_widget_prog_guide/Content/Calendar_Properties.md#enableOrDisableDates) property for the Calendar widget. Using the **enableOrDisableDates** property, developers can enable or disable the list of dates for the Calendar widget to display.

### Repeat Events in Intervals

In the V9 Service Pack 2 release, the [voltmx.phone.addCalendarEvent](../../../Iris/iris_api_dev_guide/content/voltmx.phone_functions.md#phone.ad) API is enhanced to accept [Interval](../../../Iris/iris_api_dev_guide/content/voltmx.phone_functions.md#Interval) as an input parameter. By using the **Interval** parameter, developers can configure an event on the calendar to repeat on a biweekly, quarterly, or semi-annual basis.

### Calendar Enhancements for Responsive Web

Prior to the Volt MX Iris V9 Service Pack 2 release, you had to click the Calendar icon, and then click the month or year from a grid view, and then confirm the selections. From Volt MX Iris V9 Service Pack 2, the Calendar widget has been enhanced with a new look that lets you select the month and year from drop-down lists. Additionally, support for the following attributes has been added in the viewConfig property of the Calendar widget:

*   [gridCellHoverSkin](../../../Iris/iris_widget_prog_guide/Content/Calendar_Properties.md#gridCellHoverSkin)
*   [gridMonthYearHoverSkin](../../../Iris/iris_widget_prog_guide/Content/Calendar_Properties.md#gridMonthYearHoverSkin)
*   [gridMonthYearSelectedSkin](../../../Iris/iris_widget_prog_guide/Content/Calendar_Properties.md#gridMonthYearSelectedSkin)
*   [monthYearDone](../../../Iris/iris_widget_prog_guide/Content/Calendar_Properties.md#monthYearDone)
*   [monthYearCancel](../../../Iris/iris_widget_prog_guide/Content/Calendar_Properties.md#monthYearCancel)

In addition, the [calendarMonthYearSelectionDropdownView](../../../Iris/iris_api_dev_guide/content/voltmx.application_functions.md#DropdownView) parameter has been added in the [voltmx.application.setApplicationBehaviors](../../../Iris/iris_api_dev_guide/content/voltmx.application_functions.md#voltmx.app5) API. This parameter allows you to enable or disable the new look of Calendar widget.

Modify Skin Properties at Run time
----------------------------------

In the V9 Service Pack 2 release, Volt MX Iris introduces the [voltmx.theme.setSkinsProperties](../../../Iris/iris_api_dev_guide/content/voltmx.theme_functions.md#setSkinsProperties) API. By using this API, developers can dynamically configure the Skin properties for a widget. In addition, support for the following properties is added for a few widgets (such as Button, Calendar, Camera , CheckBoxGroup, FlexContainer, Label, ListBox, RadioButtonGroup, RichText, TextArea2, and TextBox2 widgets):

*   [backgroundColor](../../../Iris/iris_widget_prog_guide/Content/Button_Properties.md#backgrou)
*   [backgroundColorMultiStepGradient](../../../Iris/iris_widget_prog_guide/Content/Button_Properties.md#backgroundColorMultiStepGradient)
*   [backgroundColorTwoStepGradient](../../../Iris/iris_widget_prog_guide/Content/Button_Properties.md#backgroundColorTwoStepGradient)
*   [backgroundImage](../../../Iris/iris_widget_prog_guide/Content/Button_Properties.md#backgroundImage)
*   [borderColor](../../../Iris/iris_widget_prog_guide/Content/Button_Properties.md#borderColor)
*   [borderColorGradient](../../../Iris/iris_widget_prog_guide/Content/Button_Properties.md#borderColorGradient)
*   [borderStyle](../../../Iris/iris_widget_prog_guide/Content/Button_Properties.md#borderStyle)
*   [borderWidth](../../../Iris/iris_widget_prog_guide/Content/Button_Properties.md#borderWidth)
*   [cornerRadius](../../../Iris/iris_widget_prog_guide/Content/Button_Properties.md#cornerRadius)
*   [disabledStateSkinProperties](../../../Iris/iris_widget_prog_guide/Content/Button_Properties.md#disabledStateSkinProperties) (available on the Android platform)
*   [focusStateSkinProperties](../../../Iris/iris_widget_prog_guide/Content/Button_Properties.md#focusStateSkinProperties)
*   [fontColor](../../../Iris/iris_widget_prog_guide/Content/Button_Properties.md#fontColor)
*   [fontFamily](../../../Iris/iris_widget_prog_guide/Content/Button_Properties.md#fontFamily)
*   [fontSize](../../../Iris/iris_widget_prog_guide/Content/Button_Properties.md#fontSize)
*   [fontStyle](../../../Iris/iris_widget_prog_guide/Content/Button_Properties.md#fontStyle)
*   [fontWeight](../../../Iris/iris_widget_prog_guide/Content/Button_Properties.md#fontWeight)
*   [hoverStateSkinProperties](../../../Iris/iris_widget_prog_guide/Content/Button_Properties.md#hoverStateSkinProperties) (available on the Responsive Web platform)
*   [pressedStateSkinProperties](../../../Iris/iris_widget_prog_guide/Content/Button_Properties.md#pressedStateSkinProperties) (available on the Android platform)
*   [shadowColor](../../../Iris/iris_widget_prog_guide/Content/Button_Properties.md#shadowColor)
*   [shadowOffset](../../../Iris/iris_widget_prog_guide/Content/Button_Properties.md#shadowOffset)
*   [shadowRadius](../../../Iris/iris_widget_prog_guide/Content/Button_Properties.md#shadowRadius)
*   [textShadowColor](../../../Iris/iris_widget_prog_guide/Content/Button_Properties.md#textShadowColor)
*   [textShadowOffset](../../../Iris/iris_widget_prog_guide/Content/Button_Properties.md#textShadowOffset)
*   [textShadowRadius](../../../Iris/iris_widget_prog_guide/Content/Button_Properties.md#textShadowRadius)

Haptic Feedback Support - watchOS
---------------------------------

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the following events that can be used to provide haptic feedback on the watchOS:

*   [didAppear](../../../Iris/iris_user_guide/Content/Watch.md#didAppear)
*   [interfaceDidScrollToTop](../../../Iris/iris_user_guide/Content/Watch.md#interfaceDidScrollToTop)
*   [interfaceOffsetDidScrollToBottom](../../../Iris/iris_user_guide/Content/Watch.md#interfaceOffsetDidScrollToBottom)
*   [interfaceOffsetDidScrollToTop](../../../Iris/iris_user_guide/Content/Watch.md#interfaceOffsetDidScrollToTop)

Accessibility Enhancement
-------------------------

In the V9 Service Pack 2 release, Volt MX Iris introduces support to provide 0 or -1 as a value for the tab order . Prior to the V9 Service Pack 2 release, developers could only set values that were greater than zero.

For more information about this feature, click [here](../../../Iris/app_design_dev/Content/Accessibility_Iris.md#taborder2).

Security Enhancements
---------------------

The following security enhancements have been made in the V9 Service Pack 2 release of Volt MX Iris:

*   ### Enable Android Verify Apps

    Support for the following set of SafetyNet APIs has been added as part of the Volt MX Iris V9 ServicePack 2 release:

    *   Attestation API

        *   [voltmx.gms.safetynet.attest](../../../Iris/iris_api_dev_guide/content/voltmx.gms_functions.md#attest)
    *   Verify Apps API

        *   [voltmx.gms.safetynet.isVerifyAppsEnabled](../../../Iris/iris_api_dev_guide/content/voltmx.gms_functions.md#isVerifyAppsEnabled)
        *   [voltmx.gms.safetynet.enableVerifyApps](../../../Iris/iris_api_dev_guide/content/voltmx.gms_functions.md#enableVerifyApps)
        *   [voltmx.gms.safetynet.listHarmfulApps](../../../Iris/iris_api_dev_guide/content/voltmx.gms_functions.md#listHarmfulApps)

    For more information on this feature, click [here](../../../Iris/iris_api_dev_guide/content/safetynetapi.md).

*   ### Prevent Android Tapjacking

    In the V9 Service Pack 2 release, Volt MX Iris introduces support for the [filterTouchesWhenObscured](../../../Iris/iris_api_dev_guide/content/voltmx.application_functions.md#filterTouchesWhenObscured) parameter in the [voltmx.application.setApplicationBehaviors](../../../Iris/iris_api_dev_guide/content/voltmx.application_functions.md#voltmx.app5) API to protect Android apps against Tapjacking mechanisms.


### Component to Integrate Vector Animations - HCL Forge

In the V9 Service Pack 2 release, a new component has been added to HCL Forge that can be used to integrate vector animations in Volt MX apps. This component simplifies the integration with Lottie and provides the necessary tooling that enhances the user experience of integrating vector animations into apps.

For more information about this feature, click [here](https://marketplace.hclvoltmx.com/items/lottieanimator).
