
# What's new in V9 Service Pack 2 

This topic provides you the list of Volt MX V9.2 Iris & Foundry What's new features, enhancements, & defects' fix list with detailed information of each component.

For detailed information in a specific component, see below.

* [Volt MX Iris](#volt-mx-iris)

* [Volt MX Foundry](#volt-mx-foundry)

>**_Note:_** See all the defects' fix list [here](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0094476).

## Volt MX Iris

### Performance Improvements

Several enhancements have been made at the core of Volt MX Iris to improve the performance. Volt MX Iris has implemented an on-demand approach to load assets that reduces the time taken to load and refresh a project. 

This enhancement is especially noticeable in larger projects. In addition, users will also notice faster Form saves and rectification. The memory footprint of Volt MX Iris has also been significantly reduced.

### Component Updates

* [Reorder Properties and Groups of a Component](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/C_CreatingComponent.md#Reorder) 

* [Update Existing Components](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/C_UsingComponents.md#Update) 
* [Tooltip for Properties of a Component](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/C_CreatingComponent.md#Tooltip) 
* [Support to Add Components Within a Segment](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/C_UsingComponents.md#Adding) 
* [Define Conditional and Dependent Properties for Components with Contract](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/C_CreatingComponent.md#Conditions) 
* [Support for JSON as a Property Type for Components with Contract](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/C_CreatingComponent.md#JSON)
* [ Support for i18N as a Pass-through Property for Components with Contract](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/C_CreatingComponent.md#i18N)

### Create and Use Form Templates

Volt MX Iris has introduced the Form Template feature that provides an easy way to reuse a form as a template across the project. Using Form Templates, you can display the same UI pattern across multiple forms, platforms, and projects.

For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/FormTemplates.md) 

### Sign in with Apple

Support for the [SigninWithApple widget](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/SigninWithApple.md) has been introduced in Volt MX Iris. The widget enables application users to sign in to apps and websites by using their Apple ID.

### Data and Services Panel Enhancements

The Data and Services Panel now lists the Custom Verbs in Object Services. Developers can drag and drop Custom Verbs onto a form to generate the UI, and also map data to the attributes from the Mapping Editor in an action sequence.

For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/DataPanel.md#Custom). 

Developers can now drag and drop Child Objects from the Data and Services panel onto a form to generate the UI.

For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/DataPanel.md#Child).

### Test Automation Enhancements

**Configure Timeout for a Test Case** 

  Volt MX Iris has introduced the Timeout feature in the Testcase Recorder window that allows you to configure the timeout value for each test case.
  
  For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/TestAutomation.md#timeout). 

**Add Assertions in Test Case Recordings** 

  The Test Recorder in Volt MX Iris now supports all the assertion types provided by Jasmine Test Automation.
  
  For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/TestAutomation.md#Assertion).

**Automatically Add WaitFor for a New Test Case** 

  When a user performs an action to Navigate to a new form, the Test Case Recorder automatically adds the waitFor statement during the recording to ensure that the test execution considers the wait time for the form load.
  
  For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/TestAutomation.md#waitforauto).

**View Screenshots of Failed Expectations** 

  Developers can now view details of all the failed expectations of Jasmine Test Automation in the Results window of Volt MX Automator. The Results window displays a list of all the failed expectations along with the name of the test case, line in code, column number, test message, stack trace, and the screenshot of the failure.
  
  For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/TestAutomation.md#screenshot).

### Android Enhancements

**Support for Android Target SDK 30**

  Support for the [Android R ](API level 30)](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/AndroidR_Behavioral_Changes.md) Target SDK has been added in Volt MX Iris. 

**5G Network APIs** 

  Volt MX Iris has introduced APIs to support 5G network connections:
  
  * [voltmx.net.set5GNetworkListener](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.net_functions.md#set5GNetworkListener)

  * [voltmx.net.unregister5GNetworkListener](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.net_functions.md#unregister5GNetworkListener)

  * [voltmx.net.hasCapablity](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.net_functions.md#hasCapability) 

**In-App Update APIs** 

  By using the [In-App Update APIs](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_api_dev_guide/content/in-app_updates_api.md#top), developers can notify the user (while the user is using the app) that an app update is available for download. 

**Battery Optimization APIs** 

  VoltMX Iris has introduced APIs to configure the battery optimization settings of an app: 

  * [voltmx.application.isIgnoringBatteryOptimizations](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_functions.md#isIgnoringBatteryOptimizations)

  * [voltmx.application.launchBatteryOptimizationSettings](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_functions.md#launchBatteryOptimizationSettings)

  * [voltmx.application.requestIgnoreBatteryOptimizations](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_functions.md#requestIgnoreBatteryOptimizations)  
  
**Auto-Reset Permissions** 

  Volt MX Iris introduces support for the [voltmx.application.isAutoRevokeWhitelisted](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_functions_runtimepermissionsapi.md#isAutoRevokeWhitelisted) API that helps users determine whether an application is exempt from having its permissions be automatically revoked when the app is unused for an extended period of time. 

**Install Source Details** 

Volt MX Iris has introduced support for the [voltmx.application.getInstallerSourceInfo](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_functions.md#getInstallerSourceInfo) API that returns the package name from which the application was installed. 
  
**Background Location Access**

VoltMX Iris has introduced support for the [voltmx.application.getBackgroundPermissionOptionLabel](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_functions_runtimepermissionsapi.md#getBackgroundPermissionOptionLabel) API that displays an educational UI to the user to grant background access permission.

### Widget Enhancements

**Save and Retrieve Real World position in the ARRenderer widget** 

  Support for the following properties and methods has been added in the ARRenderer widget: 
  
  * [canSaveExperienceCallback](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/ARRenderer_Properties.md#canSaveExperienceCallback) property
  
  * [ enableCloudAnchors](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/ARRenderer_Properties.md#enableCloudAnchors) Property 
  
  * [clearExperience](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/ARRenderer_Methods.md#clearExperience) Method 
  
  * [hostCloudAnchor](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/ARRenderer_Methods.md#hostCloudAnchor) Method 
  
  * [loadExperience](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/ARRenderer_Methods.md#loadExperience) Method
  
  * [resolveCloudAnchor](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/ARRenderer_Methods.md#resolveCloudAnchor) Method
  
  * [saveExperience](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/ARRenderer_Methods.md#saveAnchor) Method 

**Real-time Image Recognition and Overlays in the ARRenderer widget** 

  VoltMX Iris introduces support for the [startARImageDetection](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/ARRenderer_Methods.md#startARImageDetection) and [stopARImageDetection](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/ARRenderer_Methods.md#stopARImageDetection) methods in the ARRenderer widget to help developers scan an image and overlay another image or a video on top of the scanned image. 

**Closed captions support for the Video Widget** 

  Support for the following properties and methods has been added in the Video widget: [enableCaptions](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/Video_Basic_Properties.md#enableCaptions) property [tracks](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/Video_Basic_Properties.md#tracks) property [setTracks](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/Video_Method.md#setTracks) method 

**Z-index support for map methods**

  While using the Map widget in Volt MX Iris, you can add the zIndex parameter to the following methods: 

  * [addPin](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/Map_Methods.md#zIndexaddPin) 
  
  * [addPins](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/Map_Methods.md#zIndexaddPins) 
  
  * [addPolygon](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/Map_Methods.md#zIndexaddPolygon) 
  
  * [addPolyline](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/Map_Methods.md#zIndexaddPolyline) 
  
  * [addCircle](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/Map_Methods.md#zIndexaddCircle) 
  
  * [updatePin](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/Map_Methods.md#zIndexupdatePin) 
  
  * [updatePins](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/Map_Methods.md#zIndexupdatePins) 

**Skin enhancements for Listbox Widget** 

  Volt MX Iris has introduced support for the following properties to enable the addition of Skins to the ListBox items on the Desktop Web channel:
  
  * [disabledKey](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/ListBox_Basic_Properties.md#disabledKeys)
  
  * [sitemDisabledSkin](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/ListBox_Basic_Properties.md#itemDisabledSkin)
  
  * [itemHoverSkin](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/ListBox_Basic_Properties.md#itemHoverSkin)
  
  * [itemNormalSkin](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/ListBox_Basic_Properties.md#itemNormalSkin) 

**Text Widget Enhancements** 

  Support for the textCopyable, autoCapitalize, restrictCharactersSet, and textInputMode properties has been added in the TextBox and TextArea widgets on the Responsive web platform. 

**Calendar Widget Enhancements**

   A new dropdown view has been introduced for the Calendar widget using the calendarMonthYearSelectionDropdownView parameter of the voltmx.application.setApplicationBehaviors API. 
   
   Support for the following properties has been added in the Calendar widget to provide a new look that lets you select the month and year from drop-down lists:
  
  * [gridCellHoverSkin](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/Calendar_Properties.md#gridCellHoverSkin)
  * [gridMonthYearHoverSkin](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/Calendar_Properties.md#gridMonthYearHoverSkin)
  * [gridMonthYearSelectedSkin](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/Calendar_Properties.md#gridMonthYearSelectedSkin)
  * [monthYearDone](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/Calendar_Properties.md#monthYearDone)
  * [monthYearCancel](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/Calendar_Properties.md#monthYearCancel) 
   
   Volt MX Iris has introduced the [enableOrDisableDates](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/Calendar_Properties.md#enableOrDisableDates) property to specify a list of dates for the Calendar widget to display. 
   
   The [voltmx.phone.addCalendarEvent](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.phone_functions.md#phone.ad) API is enhanced to accept [Interval](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.phone_functions.md#Interval) as an input parameter that lets developers configure an event on the calendar to repeat on a biweekly, quarterly, or semi-annual basis.

### Support for Widget Extensions

Support to customize existing Volt MX Flare widgets ](by using the [voltmx.ui.defineExtendedWidge](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.ui_functions.md#ExtendedWidget) API) to create and use a new widget with additional functionality has been introduced in Volt MX Iris.

### Protected Mode CI Build for Responsive Web Apps

Support to build web applications in the Protected mode by using the CI (Continuous Integration) build feature has been introduced in Volt MX Iris.

For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/SecureyourWebApplication.md#Secure).

### Custom CSS Splash Screen for Responsive Web Apps

VoltMX Iris has introduced support to implement CSS and HTML capabilities in the splash screen for Responsive web apps, by using Custom CSS and Custom HTML code. For more information on this feature, click here. 

For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/Splash_Screen_Properties.md#CustomCSS).

### Haptic Feedback Support for watchOS

VoltMX Iris has introduced support for the [didAppear](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/Watch.md#didAppear), [interfaceDidScrollToTop](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/Watch.md#interfaceDidScrollToTop), [interfaceOffsetDidScrollToBottom](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/Watch.md#interfaceOffsetDidScrollToBottom), and [interfaceOffsetDidScrollToTop](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_user_guide/Content/Watch.md#interfaceOffsetDidScrollToTop) events that can be used to provide haptic feedback on the watchOS.

### Modify Skin Properties at Run Time

Developers can dynamically modify the Skin properties for a Skin Object by using the [voltmx.theme.setSkinsProperties](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.theme_functions.md#setSkinsProperties) API. In addition, support to modify the Skin properties of a widget has been introduced in Volt MX Iris.

### Accessibility Enhancement

VoltMX Iris has introduced support to provide 0 or -1 as a value for the tab order.

For more information about this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/app_design_dev/Content/Accessibility_Iris.md#taborder2).

### Component to Integrate Vector Animations - HCL Forge

A new component has been added to HCL Forge that can be used to integrate vector animations in Volt MX apps. This component simplifies the integration with Lottie and provides the necessary tooling that enhances the user experience of integrating vector animations into apps.

For more information about this feature, click [here](https://marketplace.hclvoltmx.com/items/lottieanimator).


### Security Enhancements

The following security enhancements have been made in the V9 Service Pack 2 release of Volt MX Iris: Enable Android Verify Apps Prevent Android Tapjacking.


## Volt MX Foundry


### Added a new Red Hat PAM Adapter in Integration services

From Volt MX Foundry V9 SP2 onwards, a new Red Hat PAM adapter is added in the Volt MX Foundry Console. You can use this adapter to explore Rules, Process, and Cases defined in your Red Hat Process Automation Manager instance and create Services and Operations in the Foundry Console.

For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Red_Hat_PAM_Adapter.md).

### Support for OpenAPI 3.0 files in the OpenAPI (Swagger) adapter

From Volt MX Foundry V9 SP2 onwards, you can import OpenAPI 3.0 files to create Integration services and operations.

For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Open_API__Swagger_.md).

### Enhanced reconfiguration file

From Volt MX Foundry V9 SP2 onwards, a new simplified format of reconfiguration file is supported to improve the readability and simplify the editing of the file.

For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/ServiceConfigProfile.md#JSONFileStructure).

### Added a new type of Workflow service – Event triggered

From Volt MX Foundry V9 SP2 onwards, Foundry Workflow can now be initiated by listening to Foundry Events. The following three new Signal Events are introduced to support Event based invocations. 

* Signal Start (to start a workflow instance)
* Catch Signal (to resume a paused workflow)
* Throw Signal (to raise an Event from workflow).

 For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Workflow.md).

### Enhancements to Object linked workflows

From Volt MX Foundry V9 SP2 onwards, the ability to access parameters based on array index in the workflow designer while configuring conditional logic has been added.

For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Workflow.md#AdvancedConfig). 

Also, added the ability to store the Identity and Session scope parameters from incoming requests into FOUNDRY_WORKFLOW_CONTEXT at the User Task level.

For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Workflow.md#UserTaskWorkFlow).

### Enhancements to Workflow Audit history

The Workflow Audit history has been enhanced for the following:

* Added support to **manually retry a failed task** in a workflow along with **Editing** the payload via namespaces. This is a runtime edit to the erroneous payload and helps retry the failed task in a workflow and resume execution from point of failure.
* Added support to display the primary key of linked object in case of object linked workflows.
* Added support to display the Correlation ID values in case of Event triggered workflows. 

For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/vmf_integrationservice_admin_console_userguide/Content/Workflow.md).

### Added a new application Promotion Mechanism

From Volt MX Foundry V9 SP2 onwards, a new application promotion mechanism is introduced. From the snapshot page of an environment, a user can download a deployment package containing the application archive at the publish time and reconfiguration file. The Deployment package can be directly promoted to an environment without being impacted by the changes in console.

For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/AppPromotion.md).

### Support for PKCE in OAuth 2.0 Identity Providers

From Volt MX Foundry V9 SP2 onwards, all OAuth Identity providers support PKCE (proof key for code exchange) in authorization code flow. For backend Identity providers that support PKCE, Iris SDK and Identity will honor additional PKCE mechanism implicitly without any code changes. For the providers that do not support PKCE or in case of clients that use Volt MX V9.1 or lesser, the authorization code grant flow will continue to be honored without the PKCE enhancement. 

For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Identity10_VoltMX_OAuth2.md).

### Support for Refresh Token Grant type in OAuth 2.0 Identity Providers

From Volt MX Foundry V9 SP2 onwards, Refresh Token Grant Type support is added for OAuth 2.0 Identity services. The Refresh Token grant type is used by clients to exchange a refresh token for an access token when the access token has expired. This allows clients to continue to have a valid access token without further interaction with the user. A new Refresh login API is added in SDK to support the refresh login flow.

For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/VoltMXStudio/Invoking_Identity_Service_Iris.md#RefreshLogin).

### Added Console Access Control for Identity services

From Volt MX Foundry V9 SP2 onwards, console access control is added for Identity services. You can now control who can access and edit a particular Identity service.

For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/ConsoleAccessControl.md).

### Support for Remember consent in OAuth Provider

In OAuth Provider client consent dialogue, from Volt MX Foundry V9 SP2 onwards, a new option is added to remember the Consent provided by the user.

For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Identity11_OAuth.md).

### Enhancements to External User Authentication

From Volt MX Foundry V9 SP2 onwards, External User Authentication has been enhanced to support configuring multiple identity providers. You can now configure more than one Identity providers in a single Foundry account, which allows the users to log in to Foundry console by using multiple types of authentication providers.

For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Settings_Cloud.md#Accounts-Cloud).

### Enhancements to support application merger from Foundry CLI

From Volt MX Foundry V9 SP2 onwards, a new command is added in Foundry CLI to support application merge.

For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Merge_Templates_using_MFCLI.md).

### Support for Oracle 19c

From Volt MX Foundry V9 SP2 onwards, support for installing Volt MX Foundry on Oracle 19.c is added.

For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmxfoundry_supported_devices_os_browsers/Content/FoundryV9SP2.md).

### Enhancements to the MySQL support

From Volt MX Foundry V9 SP2 onwards, support for the following is added: 

* Support for installing Volt MX Foundry on MySQL 5.7.31. 
* Support for MySQL Cluster with Group Replication. 
* Support for case sensitive collations on MSSQL Server. 

For more information on this feature, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmxfoundry_supported_devices_os_browsers/Content/FoundryV9SP2.md).

### Enhancements to Foundry application Publish

* The Publish section has been enhanced to display environments status such as Available, Busy, and Unknown. This is a quick feedback mechanism to inform a user in case the server is busy publishing another application. 

* Added incremental application publish support to significantly reduce the publish time of an app after the first publish. 
* Added a new reconfiguration option to skip swagger generation steps during publish. 
* Improved error messaging in case of publish failures.

### HCL App Factory

**Added support for Flyway Migration**

  You can now use App Factory to fetch Flyway scripts from your source-control module, add specific commands and command-line options, and then run the scripts on your database.
  
  For more information, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_appfactory_user_guide/Content/Database.md). 
 
**Added support for Build on Push in Foundry projects**
 
   You can now configure watchers for your Volt MX Foundry projects, which will trigger the build job when changes are pushed to the source-control module.
   
   For more information, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_appfactory_user_guide/Content/BuildOnPush_Foundry.md). 
  
**Added new parameters in Project Settings**

  After you create an App Factory project, you can use the revamped Project Settings to configure parameters that are related to source control, internationalization, quality, and notifications.
    
  For more information, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_appfactory_user_guide/Content/Project_Settings.md). 
    
**Added support for Service Configuration Profiles** 

  You can now use Service Configuration Profiles in the Foundry build pipeline to configure endpoints for different environments, such as development, testing, or production.
     
  For more information, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_appfactory_user_guide/Content/BuildingFoundryApp.md). 

**Added support for Arxan Web Obfuscation** 

  You can now configure Web Protection parameters in the Iris build to enable Arxan Web Obfuscation for your app.
  
  For more information, click [here](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_appfactory_user_guide/Content/BuildingAnApp.md).	 








