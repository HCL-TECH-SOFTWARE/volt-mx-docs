---
layout: "documentation"
category: "iris_rel_notes"
---
                         

New Features and Enhancements in V9 SP2 M1
==========================================

In this release, the following features have been introduced to provide an enhanced Volt MX Iris experience.

 

*   [Create and Use Form Templates](#create-and-use-form-templates)
*   [Component Updates](#component-updates)
*   [Data and Services Panel Enhancements](#data-and-services-panel-enhancements)
*   [Test Automation Enhancements](#test-automation-enhancements)
*   [Android Enhancements](#android-enhancements)
*   [Support for Widget Extensions](#support-for-widget-extensions)
*   [Sign In With Apple Credentials](#sign-in-with-apple-credentials)
*   [Calendar Enhancements for Responsive Web](#calendar-enhancements-for-responsive-web)
*   [ListBox Widget Enhancements](#listbox-widget-enhancements)
*   [zIndex Support for Map Methods](#zindex-support-for-map-methods)
*   [Text Widget Enhancement - Support for textCopyable property](#text-widget-enhancement)

 

Create and Use Form Templates
-----------------------------

In the V9 Service Pack 2 release, Volt MX Iris introduces a Form Template feature that provides an easy way to reuse the format of a form across the project. Using Form Templates, you can display the same UI pattern across multiple forms, platforms, and projects. To use Form Templates, you must first create a form with the required UI elements and add it to a Collection Library. You can then drag-and-drop the template from the collection library onto a form or import the template into your project.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/FormTemplate.html).

Component Updates
-----------------

### Component Versioning Enhancement

In the V9 Service Pack 2 release, Volt MX Iris introduces support to view the version number and store multiple versions of a component in the **My Libraries** section. In addition, you can drag and drop templates from a collection onto a form, and also add multiple versions of collections from the Templates tab.

For more information on viewing and storing multiple versions of a component, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/C_UsingComponents.html#Mversion).

For more information on adding multiple versions of collections from Templates, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/C_UsingComponents.html#Addcomponent).

### Update Existing Components

In the V9 Service Pack 2 release, Volt MX Iris introduces support to update an existing component to a desired higher version. You can view all the higher versions of a component in the Update Component dialog box, and then select the version that you want to update to.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/C_UsingComponents.html#update-a-component-instance).

### Define Conditional and Dependent Properties for Components

In the V9 Service Pack 2 release, Volt MX Iris introduces the conditional rendering of properties feature that allows you to define conditional and dependent properties for a component. You can update the visibility of a dependent property based on the value of a conditional property.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/C_CreatingComponent.html#Condition).

### Tooltip for Properties of a Component

In the V9 Service Pack 2 release, Volt MX Iris introduces the Tooltip feature for the custom properties of a Component. Developers can provide detailed information about the functionality of the property that appears when a developer using the component hovers over the property in the Volt MX Iris project.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/C_CreatingComponent.html#ToolTip).

### Support for JSON as a Property Type for Components

In the V9 Service Pack 2 release, Volt MX Iris introduces support to provide JSON as a Property Type and a JSON code snippet as the Default Value for a property in the Manage Properties section for components.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/C_CreatingComponent.html#JSON).

### i18N as a Pass-through Property for Components

From Volt MX Iris V9 Service Pack 2, you can add i18N properties as a Pass-through property for Components. You can add the property from the Manage Properties section of the Components or add the property directly from the Properties panel.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/C_CreatingComponent.html#i18N).

### Support to Add Components Within A Segment

In the V9 Service Pack 2 release, Volt MX Iris introduces support to add components (with contract) within a Segment Template.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/C_UsingComponents.html#Adding).

Data and Services Panel Enhancements
------------------------------------

*   ### Support to Add Custom Verbs to a Form
    
    From Volt MX Iris V9 Service Pack 2, you can drag and drop a Custom Verb from the Data and Services panel onto a form. Custom Verbs along with the fields and attributes of the custom verbs appear in the Data and Services panel. When you add a Custom Verb to a form, Volt MX Iris generates a popup that allows you to select templates for both the Request and Response UI generation.
    
    For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/DataPanel.html#custom-verbs-in-data-and-services-panel).
    
*   ### Support to Add Child Objects to a Form
    
    From Volt MX Iris V9 Service Pack 2, you can drag and drop Child Objects from the Data and Services panel onto a form. When you add a Child Object to a form, Volt MX Iris generates a custom UI for the Child Object and sends the metadata to the Volt MX Foundry Console.
    
    For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/DataPanel.html#add-child-objects-to-a-form).
    
*   CRUD Forms will now automatically ignore the Child Objects when you select a form from the Data and Services panel at the service level. For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/DataPanel.html#Crudnote).
*   A warning message appears when you map the Request and Response nodes on the Mapping Editor. For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/DataPanel.html#Mapnote).

Test Automation Enhancements
----------------------------

### Configure Timeout for a TestCase

Prior to the V9 Service Pack 2 release, there was no option to configure the timeout for individual test cases, and a default timeout of 5 seconds was applied to all test cases. In the V9 Service Pack 2 release, Volt MX Iris has introduced the Timeout feature in the Testcase Recorder window that allows you to configure the timeout value for each test case. This feature enables developers to identify the timeout value for each test case and then configure the timeout value.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/TestAutomation.html#timeout).

### View Screenshots of Failed Expectations

From Volt MX Iris V9 Service Pack 2, you can view the details of all the failed expectations of Jasmine Test Automation in the Results window of the Automator. The Results window displays a list of all the failed expectations along with the name of the test case, line in code, column number, test message, stack trace, and the screenshot of the failure.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/TestAutomation.html#screenshot).

### Add Assertions in Test Case Recordings

Volt MX  Iris now supports all the assertion types provided by Jasmine Test Automation.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/TestAutomation.html#Assertion).

### Automatically Add WaitFor for a New Testcase

From Volt MX Iris V9 Service Pack 2, when a user performs an action on a new form, the Test Case Recorder automatically adds the waitFor statement during the recording.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/TestAutomation.html#waitforauto).

Android Enhancements
--------------------

### Support for Android Target SDK 30

Support for the Android R (API level 30) Target SDK has been added in Volt MX Iris.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/AndroidR_Behavioral_Changes.html).

### Support for 5G Network APIs

As the Android Framework has provided support for 5G network connection, Volt MX Iris has introduced support for the following 5G Network APIs

*   [voltmx.net.set5GNetworkListener]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.net_functions.html#set5GNetworkListener)
*   [voltmx.net.unregister5GNetworkListener]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.net_functions.html#unregister5GNetworkListener)
*   [voltmx.net.hasCapablity]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.net_functions.html#hasCapability)

### Background Location Access

Apps that run on Android 11 (API level 30, or later) devices must already have access to foreground location before requesting for background location access. If the user denies permission for background location access, you can provide an educational UI to the user by using the [voltmx.application.getBackgroundPermissionOptionLabel]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_functions_runtimepermissionsapi.html#getBackgroundPermissionOptionLabel) API. The API provides the text for the option that educates the user to grant background access permission.

### GeoLocation API Enhancements

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the [voltmx.location.checkLocationSettings]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.location_functions.html#checkLocationSettings) API that allows you to check whether the current location settings meet the desired accuracy settings. In addition, support for the [accuracyMode]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.location_functions.html#accuracyMode), [requestModifyLocationSettings]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.location_functions.html#requestModifyLocationSettings), and [improveBGLocationUpdateFrequency]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.location_functions.html#improveBGLocationUpdateFrequency) parameters have been added in the positionoptions parameter of the [voltmx.location.getCurrentPosition]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.location_functions.html#getCurrentPosition) and the [voltmx.location.watchPosition]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.location_functions.html#watchPosition) APIs.

### Package Visibility Updates

Android 11 introduces restrictions on how apps query and interact with other apps installed on a device. Apps must use the `<queries>` element to define other packages that the app can interact with. In addition, you must add the `<queries>` element in the Android Manifest Entries to view a filtered list of email applications while using the [filterEmailAppsOnly]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.phone_functions.html#filterEmailAppsOnly) parameter of the [voltmx.phone.openEmail]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.phone_functions.html#phone.op2) API. Further, when you build an app in **Protected Mode**, you must add the `donotAddQueryAllPackages = true` entry in the **androidbuild.properties** file to disable the automatic addition of the QUERY\_ALL\_PACKAGES permission in the Android Manifest file.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Native_App_Properties.html#PackageVisibility).

### Support for SafetyNet APIs

Support for the following set of SafetyNet APIs has been added as part of the Volt MX Iris V9 ServicePack 2 release:

*   Attestation API
    
    *   [voltmx.safetynet.attest]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/safetynetapi.html#attest)
*   Verify Apps API
    
    *   [voltmx.safetynet.isVerifyAppsEnabled]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/safetynetapi.html#isVerifyAppsEnabled)
    *   [voltmx.safetynet.enableVerifyApps]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/safetynetapi.html#enableVerifyApps)
    *   [voltmx.safetynet.listHarmfulApps]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/safetynetapi.html#listHarmfulApps)

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/safetynetapi.html).

### Auto-Reset Permissions

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the [voltmx.application.isAutoRevokeWhitelisted]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_functions_runtimepermissionsapi.html#isAutoRevokeWhitelisted) API that helps users determine whether an application is exempt from having its permissions be automatically revoked when the app is unused for an extended period of time.

### Authenticate using Device Credentials

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the **constants.LOCAL\_AUTHENTICATION\_MODE\_DEVICE\_CREDENTIALS** as an Authentication Mode constant has been added in the [voltmx.localAuthentication.getStatusForAuthenticationMode]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.localauthentication_functions.html#getStatusForAuthenticationMode) API. This constant determines whether the device has either PIN, PATTERN, or PASSWORD configured as the authentication mode.

Support for Widget Extensions
-----------------------------

In the V9 Service Pack 2 release, Volt MX Iris introduces support to customize existing Volt MX widgets (widgets in the Volt MX widget class) by using the [voltmx.ui.defineExtendedWidge]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.ui_functions.html#ExtendedWidget)t API to create a new widget with additional functionality. Once you create the custom widget, you can use it as a regular widget across your project.

Sign In With Apple Credentials
------------------------------

In the V9 Service Pack 2 release, Volt MX Iris introduces support for the [SigninWithApple widget]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/SigninWithApple.html) that enables application users to sign in to apps and websites by using their Apple ID. Use the voltmx.ui.signInWithApple to create the SigninWithApple widget. You can then use the [voltmx.signInWithApple.evaluateCredentialStateforUserID]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.signinwithapple_functions.html#evaluateCredentialStateforUserID) to get the current state of an opaque user ID that was specified previously.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/signinwithapple_api.html).

Calendar Enhancements for Responsive Web
----------------------------------------

Prior to the Volt MX Iris V9 Service Pack 2 release, you had to click the Calendar icon, and then click the month or year from a grid view, and then confirm the selections. From Volt MX Iris V9 Service Pack 2, the Calendar widget has been enhanced with a new look that lets you select the month and year from drop-down lists. To support this enhancement, support for the following attributes has been added in the viewConfig property of the Calendar widget:

*   [gridCellHoverSkin]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Calendar_Properties.html#gridCellHoverSkin)
*   [gridMonthYearHoverSkin]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Calendar_Properties.html#gridMonthYearHoverSkin)
*   [gridMonthYearSelectedSkin]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Calendar_Properties.html#gridMonthYearSelectedSkin)
*   [monthYearDone]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Calendar_Properties.html#monthYearDone)
*   [monthYearCancel]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Calendar_Properties.html#monthYearCancel)

 

In addition, the [calendarMonthYearSelectionDropdownView]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_functions.html#DropdownView) parameter has been added in the [voltmx.application.setApplicationBehaviors]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_functions.html#voltmx.app5) API. This parameter allows you to enable or disable the new look of Calendar widget.

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
