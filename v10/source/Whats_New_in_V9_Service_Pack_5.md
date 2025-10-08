
# What's new in V9 Service Pack 5 

This topic provides you the list of Volt MX V9.5 Iris & Foundry What's new features, enhancements, & defects' fix list with detailed information of each component.

For detailed information in a specific component, see below.

* [Volt MX Iris](#volt-mx-iris)

* [Volt Foundry](#volt-foundry)

>**_Note:_** See all the defects' fix list [here](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0101356).

## Volt MX Iris

### Micro Apps Architecture

Large applications are easier to be modularized into smaller applications using the Micro apps architecture. Using Micro Apps, users can create standalone and independent apps that can be combined together to form a larger application. Micro apps reduce the complexity for application developers by dividing large apps into smaller and easily manageable apps.

Following on the Micro Apps capability, Volt MX Iris has further enhanced the Micro Apps feature to include the following new features:

*   [Export Themes from a Composite App](Iris/iris_microapps/Content/MicroApp.md#export-composite-app-themes) with or without exporting the Themes from the linked Micro Apps.

*   Support for Wearables in Micro Apps

*   [Import](Iris/iris_microapps/Content/MicroApp.md#import-a-project-with-micro-apps) and [Export](Iris/iris_microapps/Content/MicroApp.md#export-a-project-with-micro-apps) Composite Projects which contain multiple Micro Apps
*   [Re-order Micro Apps within a Project](Iris/iris_microapps/Content/MicroApp.md#update-the-order-of-micro-apps-in-a-project)


For more information on this feature, click [here](Iris/iris_microapps/Content/MicroApp.md).

### Navigation Manager

Volt MX Iris has added support for a Navigation Manager which enables the concept of model-driven navigation, where the entire navigation flow of the app resides in a single place. Users can use the Navigation Manager to define the navigation paths between forms and between multiple Micro Apps. The model-driven navigation approach enhances the readability of the application flow and the maintainability of the application code.

For more information on this feature, click [here](Iris/voltmx_ref_arch_api/Content/NavigationManager.md).

### Test Automation Enhancements

The following new features have been added in the Volt MX Test Automation framework:

*   You can now create test suites and test plans that contain test cases from the dependent Micro Apps present in a Composite app.
*   For information on creating Test Suites, click [here](Iris/iris_user_guide/Content/TestAutomation.md#test-suite).
*   For information on creating Test Plans, click [here](Iris/iris_user_guide/Content/TestAutomation.md#test-plan).
*   Volt MX Iris has added the ability to group failed Test Cases and re-run the Tests.

*   Support for Data Externalization for the input data of Test Cases
*   Volt MX Iris has introduced support for Cross-Application Testing in situations where developers need to test the functionality of multiple applications in a single test run with proper sequencing of tests and communication between the test apps.
*   In addition, support for the following APIs has been added in Volt MX Iris to support the cross-app testing functionality:
     *   [voltmx.automation.getParentInfo](Iris/iris_api_dev_guide/content/voltmx.automation_namespace.md#getParentInfo)
    *   [voltmx.automation.launchApp](Iris/iris_api_dev_guide/content/voltmx.automation_namespace.md#launchApp)
     *   [voltmx.automation.sendEvent](Iris/iris_api_dev_guide/content/voltmx.automation_namespace.md#sendEvent)
    *   [voltmx.automation.sendEventToParent](Iris/iris_api_dev_guide/content/voltmx.automation_namespace.md#sendEventToParent)
    *   [voltmx.automation.waitForEvent](Iris/iris_api_dev_guide/content/voltmx.automation_namespace.md#waitForEvent)
    
*   Support for the following Automation APIs has been added in Volt MX Iris:
    *   [voltmx.automation.actionSheet.click](Iris/iris_api_dev_guide/content/voltmx.automation_namespace.md#actionSheetItem.click)
    *   [voltmx.automation.isLoadingScreenVisible](Iris/iris_api_dev_guide/content/voltmx.automation_namespace.md#isLoadingScreenVisible)
    *   [voltmx.automation.waitForLoadingScreenToDismiss](Iris/iris_api_dev_guide/content/voltmx.automation_namespace.md#waitForLoadingScreenToDismiss)
    

**Support for Page Object Models (POM)**

A Page Object is a JSON Object that  contains information about all the  elements (widgets) present on a particular Page (Form, Component, or Template).

For more information on this feature, click [here](Iris/iris_user_guide/Content/TestAutomation.md#POMTest).

Additionally, you can use the [voltmx.automation.pageObjectModel.getPageObjects API](Iris/iris_api_dev_guide/content/voltmx.automation_namespace.md#getPageObjects) to retrieve and return the specified Page Objects in a Test Case.

**Support for Gestures APIs**

The [voltmx.automation.gesture.swipe](Iris/iris_api_dev_guide/content/voltmx.automation_namespace.md#gesture.swipe) and [voltmx.automation.gesture.tap](Iris/iris_api_dev_guide/content/voltmx.automation_namespace.md#gesture.tap) APIs have been added 
to support the Swipe and Tap Gestures on the Android platform.

### Configure Style Constants

Volt MX Iris has introduced support to configure Style Constants for Colors and Fonts. Using the Style Constants feature, users can create and apply pre-defined styles for colors and fonts, and use these styles in the skins throughout the project. This helps the app developers to easily manage their application branding through the style constants.

In addition, the **Skins** tab in the Project Explorer has been renamed as the **Themes** tab.

You can now [Import](Iris/iris_user_guide/Content/StyleConstants.md#ImportStyles) and [Export](Iris/iris_user_guide/Content/StyleConstants.md#ExportStyles) Style Constants for Colors and Fonts with the associated resources in Volt MX Iris.

Additionally, you can define Style Constants for Color with the **Two Step Gradient** and **Multi Step Gradient** Color Types.

For more information on this feature, click [here](Iris/iris_user_guide/Content/StyleConstants.md).

### Filters for Project Explorer

Volt MX Iris now provides the capability to optimize the project explorer view for each tab by configuring the visibility of different entities and channels. This filter can be applied to nodes in a project and for each Micro App in case of a larger application. The filter enables users to declutter the project explorer palette by hiding unused or empty nodes.

For more information on this feature, click [here](Iris/iris_user_guide/Content/FilterProject.md).

### Productivity Enhancements

The V9 SP5 release includes several new features in Volt MX Iris to further simplify the app design and development experience and enable better productivity for app developers.

*   [Pinning and distribution tools](Iris/iris_user_guide/Content/Look.md#widget-pinning) have been added in the Properties panel to align child widgets in reference to the parent widget and the neighboring widgets to simplify the widget layout.
*   Support for the Color picker has been added to select color swatches from the project.
*   Support for the Search option has been added to select Fonts from the project.
*   Enhancements have been made to simplify the development of applications while adhering to Accessibility guidelines.
*   Improvements have been made to the application build time.

*   The Data Panel and Action Editor now support the listing of the fields for Custom XML mappings in a Volt Foundry Object Service.
*   Added support to specify the build format for Android and iOS apps. The supported build formats for Android apps are .apk (Android Package) and .aab (Android App Bundle). The supported build formats for iOS apps are .ipa (iOS App Store Package) and .kar (Volt MX Archive).

For more information about this feature, click [here](Iris/iris_user_guide/Content/Project_Properties_in_VoltMX_Iris.md#BuildFormat).

### Component Enhancements

*   Support to configure [Color as a Property type](Iris/iris_user_guide/Content/C_CreatingComponent.md#Color) for custom properties of components with contract has been added in Volt MX Iris.
*   Volt MX Iris has enhanced the support to [Delete a component](Iris/iris_user_guide/Content/C_CreatingComponent.md#Delete) where all of its associated assets are cleanly deleted along with the component.


* Volt MX Iris now adds the capability to extend the various layers within a Iris Component. The extension capabilities provide developers with the ability to safely extend their applications. Developers can add multiple Views to a component and flip the view in their apps.

  *   Added support to [create and configure multiple views for a component](Iris/iris_user_guide/Content/C_CreatingComponent.md#ComponentView) (with contract).
  *   Added support to [create a business controller](Iris/iris_user_guide/Content/C_CreatingComponent.md#BusinessController) for a component with a contract.
  *   The business controller can further be extended by creating a business controller extension

### Support for iOS App Clips 

Support to integrate iOS App Clips has been added in Volt MX Iris. An app clip is a lightweight part of an app that is discoverable, when needed, and lets users perform everyday tasks swiftly, without downloading and installing the whole app.

For more information on this feature, click [here](Iris/iris_user_guide/Content/Iris_AppClips.md#top).

### Configure iOS Home Screen Widgets

Support to integrate iOS Home Screen Widgets has been added in Volt MX Iris. A widget elevates key content from an app and displays it on the home screen of an iPhone or iPad, where users can see it at a glance.

For more information on this feature, click [here](Iris/iris_user_guide/Content/Iris_WidgetKit.md).

### Support for App Level Containers

Support for the [voltmx.application.setAppLevelWidget API](Iris/iris_api_dev_guide/content/voltmx.application_functions.md#setAppLevelWidget) that configures a container widget at the application level has been added in Volt MX Iris. This enables app developers to design Headers and Footers consistently in iOS and Android apps that span across multiple forms.

In addition, support for the [appLevelWidgetConfig property](Iris/iris_widget_prog_guide/Content/FlexForm_Properties.md#appLevelWidgetConfig) has been added in the FlexForm widget to enable or disable the header or footer of the app for that particular Form.

### Widget Enhancements

**Group Elements in Container Widgets**

Use the shouldGroup property to enable the grouping of elements present in the [FlexContainer](Iris/iris_widget_prog_guide/Content/FlexContainer_Properties.md#shouldGroup) and [FlexScrollContainer](Iris/iris_widget_prog_guide/Content/FlexScrollContainer_Properties.md#shouldGroup) widgets.

**Calendar Widger Enhancements**

Use the [calendarStyle](Iris/iris_widget_prog_guide/Content/Calendar_Properties.md#calendarStyle) property to customize the Calendar that is displayed in iOS apps. Use the [applyCellSkinsFontStyles](Iris/iris_widget_prog_guide/Content/Calendar_Properties.md#applyCellSkinsFontStyles) property to specify whether font attributes must be applied to the Calendar widget in Android apps.

**Support for Shadow Properties** 

Volt MX Iris has introduced support for the [shadowColor](Iris/iris_widget_prog_guide/Content/FlexContainer_Properties.md#shadowColor), [shadowOffset](Iris/iris_widget_prog_guide/Content/FlexContainer_Properties.md#shadowOffset), and [shadowRadius](Iris/iris_widget_prog_guide/Content/FlexContainer_Properties.md#shadowRadius) properties on the Android platform for the following widgets:

*   [FlexContainer](Iris/iris_widget_prog_guide/Content/FlexContainer_Properties.md#shadowColor)
*   [FlexScrollContainer](Iris/iris_widget_prog_guide/Content/FlexScrollContainer_Properties.md#shadowColor)
*   [Label](Iris/iris_widget_prog_guide/Content/Label_Properties.md#shadowColor)

**Block Pop-ups in Browser widget**

*   Added support to block pop-ups from appearing in the Browser widget by using the [isPopUpBlockEnabled](Iris/iris_widget_prog_guide/Content/Browser_Properties.md#isPopUpBlockEnabled) property.

**Automatically re-size the TextArea widget**

*   Added support to dynamically resize the TextArea widget based on the number of lines of text entered. If the text exceeds the maximum limit, a scroll bar appears in the TextArea widget.
*   For more information about this feature, click [here](Iris/iris_widget_prog_guide/Content/TextArea_Properties.md#autoResize)
*   [Provide String Values for the autoComplete property of the TextBox widget](Iris/iris_widget_prog_guide/Content/TextBox_Properties.md#autocomplete-property).


**Extended Widget Support in Segment Template**

*   Volt MX Iris has introduced support for the Widget Extensions feature for a Segment Template.

For more information on this feature, click [here](Iris/iris_user_guide/Content/UsingExtendedWidgets.md#Widget).

### iOS Home Screen Widget Enhancements

You can now apply the Flex Horizontal and Flex Vertical directional layouts to an iOS Home Screen widget to align its child widgets.

For more information on the Flex Layout support, click [here](Iris/iris_user_guide/Content/Iris_WidgetKit.md#LayoutSupport).

Additionally, you can now provide multiple URLs for specific tap targets during the widget view construction.

For more information on providing multiple URLs for tap targets, click [here](Iris/iris_user_guide/Content/Iris_WidgetKit.md#MultipleURLs).



### iOS Enhancements

**Enable Data Protection for iOS Apps**

*   Support to enable [Data Protection Entitlements](Iris/iris_user_guide/Content/iOS_Automatic_Output_Generation.md#DataProtection) for iOS apps has been added in Volt MX Iris. Data protection is an iOS feature that prevents unauthorized access to an app's files by encrypting user data.

**Enable App Bound Domains for iOS Apps**

*   To support the App Bound Domains feature that was introduced in the iOS 14 release, Volt MX Iris has introduced support for the [limitsNavigationsToAppBoundDomains](Iris/iris_widget_prog_guide/Content/Browser_Properties.md#limitsNavigationsToAppBoundDomains) property in Browser widgets that use WKWebView as the ViewType.

**Generate Native Bindings**

*   Support to generate the third-party native bindings for .xcFramework projects, generate native bindings for supported architectures in System Frameworks, and generate outputs for NFI Frameworks has been added through the NFI Generation Tool.

### Android Enhancements

*   Volt MX Iris has introduced support for the [Universal App Tablet Breakpoint](Iris/iris_user_guide/Content/Project_Properties_in_VoltMX_Iris.md#UniversalAndroid) setting that configures the minimum length threshold for identifying a device as a Tablet for an Android Universal Binary.
*   Volt MX Iris has introduced support for the [splashOrientationClassifier](Iris/iris_user_guide/Content/Native_App_Properties.md#splashOrientationClassifier) property that provides screen orientation modes at a granular-level for a particular Splash Screen Orientation mode. In addition, support for the [displayOrientationClassifier](Iris/iris_widget_prog_guide/Content/FlexForm_Properties.md#displayOrientationClassifier) property has been added to the FlexForm widget.
*   Support to configure the [addSMSRetrieverSupport](Iris/iris_user_guide/Content/Native_App_Properties.md#SMSRetriever) key in the androidbuild.properties file to enable the SMS Retriever has been added in Volt MX Iris.
*   Volt MX Iris has introduced support for the following properties to enable the auto-fill feature while entering an OTP:
    *   [setImportantForAutoFill](Iris/iris_widget_prog_guide/Content/TextArea_Properties.md#setImportantForAutofill) property in the TextArea widget
    *   [textContentType](Iris/iris_widget_prog_guide/Content/TextBox_Properties.md#textcontenttype) property in the TextBox widget

### Responsive Web Enhancements

Volt MX Iris has introduced support for the following properties to provide spacing within a Responsive Container in the Responsive Grid Layout:

*   [Padding](Iris/iris_user_guide/Content/ResponsiveGridLayout.md#Padding)
*   [GutterX](Iris/iris_user_guide/Content/ResponsiveGridLayout.md#GutterX)
*   [GutterY](Iris/iris_user_guide/Content/ResponsiveGridLayout.md#GutterY)

Volt MX Iris has introduced support for the latest ECMA script. In case, developers need to fall back on the older ECMA script, they can use the [Enable ES5 Build](Iris/iris_user_guide/Content/Project_Properties_in_VoltMX_Iris.md#EnableES5) setting that enables ECMA standard conversion of the ES6 (and later) syntax to the ES5 syntax in Responsive Web apps.

**Highlight the Active Widget**

Volt MX Iris has introduced support for the following widget-level properties and events to display focus on the active widget:

*   [activeStateSkin Property](Iris/iris_widget_prog_guide/Content/Button_Properties.md#activeStateSkin)
*   [onBlur Event](Iris/iris_widget_prog_guide/Content/Button_Events.md#onBlur)
*   [onFocus Event](Iris/iris_widget_prog_guide/Content/Button_Events.md#onFocus)

**Embed Local Videos in Web Apps**

Volt MX Iris has introduced support to embed videos present in the device's local storage into Responsive Web apps.

For more information about this feature, click [here](Iris/iris_widget_prog_guide/Content/Video.md#Limitati).


### Accessibility Enhancements

As part of the ongoing Accessibility enhancements, the following enhancements have been made in Volt MX Iris:

*   Support for the tagName attribute has been added in the accessibilityConfig property for the [FlexContainer](Iris/app_design_dev/Content/Accessibility_Iris.md#FlexContainer) and [FlexScrollContainer](Iris/app_design_dev/Content/Accessibility_Iris.md#FlexScrollContainer) widgets.
*   Support to provide the role of a table for the Segment widget has been added in the [tagName](Iris/app_design_dev/Content/Accessibility_Iris.md#tagName1) attribute of the accessibilityConfig property.
*  Support to provide the role of a button for the Segment widget has been added in the tagName attribute of the accessibilityConfig property.

For more information about this feature, click [here](Iris/app_design_dev/Content/Accessibility_Iris.md#tagName1). 


### Integrate Volt MX Components in Angular Apps

*   You can now integrate the Volt MX Framework with Angular apps by embedding Volt MX Components in Angular Components as Webpack 5 modules. For more information on this feature, click [here](Iris/iris_user_guide/Content/VoltMXAngular.md).
*   Additionally, you can use the new [Volt MX Listener APIs](Iris/iris_api_dev_guide/content/voltmxlistener_api.md) to enable communication and pass data between the component

### Support and Maintenance Updates

*   Volt MX Iris is now supported on MacBooks that use M1 processors.
*   Volt MX Iris is now supported on MacBooks that run the MacOS monterey.
*   Support for XCFramework has been added for iOS apps.

### <a id="hot-reload-enhancement"></a>  Hot Reload Enhancement

The Hot Reload feature in Responsive Web Apps can now be used to view updates made in Reference Architecture Extensions, Form Controllers (including Form Controller Extensions), Segment Templates, and Components (including component controller modules, component controller extensions, and widget actions).

For more information on this feature, click [here](Iris/iris_user_guide/Content/HotReload.md#Component).


### Pop-up Title for Rooted Devices

You can now use the **ROOT\_DETECTION\_TITLE** key in the Internationalization Configuration to provide a title for the pop-up of rooted (or jail-broken) devices.

For more information on this feature, click [here](Iris/iris_user_guide/Content/Internationalization.md#rootDetection).


### Expose Child Components in a Nested Component

You can now expose a child component within another component. The pass-through and custom properties, events, and methods of the child component then appear in the Properties panel when you select the child component.

For more information on this feature, click [here](Iris/iris_user_guide/Content/C_CreatingComponent.md#ExposeComponent).



### OS Compatibility Support

**iOS 16 Support**

Support for iOS 16 has been added in Volt MX Iris.

**Android 13 Support**

Iris builds are compatible with Android 13.


### Android Framework Enhancements

*  Local Authentication API Enhancements
*   Added support for the [voltmx.localAuthentication.requestBiometricsEnroll API](Iris/iris_api_dev_guide/content/voltmx.localauthentication_functions.md#requestBiometricsEnroll) that directs users to the device settings page, where they can enroll for biometrics.
*   In addition, support for the voltmx.localAuthentication APIs has been enhanced by adding the [authenticators](Iris/iris_api_dev_guide/content/voltmx.localauthentication_functions.md#authenticators) parameter.


### Volt MX App Updates
For Volt MX App (both mobile and tablets) updates will be made available in Appstore and Google Play Store in phases following the release. 



## Volt Foundry


### SSL Pinning Support for Native Channels

SSL Pinning is now supported for the Android and iOS channels, which can be used to connect to WebSockets on Volt Foundry.

For more information about this feature, click [here](Foundry/voltmx_foundry_user_guide/Content/VoltMXStudio/ServerEventAPIs.md).



### Volt MX Microservices Adapter

You can now use the Volt MX Microservices Adapter in Object Services to create and reuse data models, access back-end operations, enable authorization APIs, and manage API definitions from a single source file.

For more information about this feature, click [here](Foundry/voltmx_foundry_user_guide/Content/HCLMicroservicesAdapter.md).


### Improved Service Monitoring

The service monitoring table now contains a new column called **service type**.

For more information about this feature, click [here](Foundry/vmf_integrationservice_admin_console_userguide/Content/Monitoring.md).


### Looping support in Workflows

You can use looping in Service tasks, Script tasks, and Rule tasks to invoke a service for a collection of items and combine all the responses.

For more information about this feature, click [here](Foundry/voltmx_foundry_workflow/Content/Workflow.md#advanced-configurations-workflow).

### Added Parallel Gateway node to Workflows 

You can now use the Parallel Gateway node in Workflows to fork into multiple paths of execution or to join multiple incoming paths of execution.

For more information about this feature, click [here](Foundry/voltmx_foundry_workflow/Content/Workflow.md#parallel-gateways-_sync-workflow_).

### Enhancements to Workflow Audit history

Support to display the trigger type in case of Integration linked workflows has been added to the Workflow Audit history.

For more information about this feature, click [here](Foundry/vmf_integrationservice_admin_console_userguide/Content/Workflow.md).

### Workflow Adapter in Integration Services

The Foundry Workflow adapter has been introduced for Integration Services in Volt Foundry.

For more information about this feature, click [here](Foundry/voltmx_foundry_user_guide/Content/FoundryWorkflowAdapter.md).

### Integration Service trigger type in Workflow services

The Integration Service trigger type has been introduced in Workflow services. Workflows that are of the Integration Service (Sync/Async) type must be linked to an Integration Service that uses the Foundry Workflow adapter.

For more information about this feature, click [here](Foundry/voltmx_foundry_workflow/Content/Workflow.md#supported-workflow-types).

### Enhancements to JavaScript SDK


*   Enhanced support to use PKCE for the end-to-end authorization code flow.

    For more information about this feature, click [here](Foundry/voltmx_foundry_user_guide/Content/Identity10_VoltMX_OAuth2.md#PKCE).

*   Added support to login to an OAuth 2.0 provider in the same browser window.

    For more information about this feature, click [here](Foundry/voltmx_foundry_user_guide/Content/JS/Invoking_Identity_Service_JS.md#singlewindowlogin).
 
*   Added support to use Server Event APIs, which can be used to connect a client app and a WebSocket on Volt Foundry.

    For more information about this feature, click [here](Foundry/voltmx_foundry_user_guide/Content/JS/ServerEventAPIs_JS.md).

### Add operations and verbs to Locked Apps

Locked apps now support adding new operations in Integration services and adding verbs in Object services.

For more information about this feature, click [here](Foundry/voltmx_foundry_user_guide/Content/LockApp.md).

<!--
### Enhanced Security for caching

Added support to enable an SSL connection between the Authentication Service and Redis to allow secure connections for caching.

For more information about this feature, click [here](Foundry/voltmxfoundry_on_azure/Content/VoltMX_Foundry_on_Azure.md#configuration).
-->

### Private Key JWT in OAuth 2.0 Services

You can now use Private Key JWT in OAuth 2.0 Identity services to enhance the security of token requests.

For more information about this feature, click [here](Foundry/voltmx_foundry_user_guide/Content/Identity10_VoltMX_OAuth2.md).


### View the Pre and Post Processors linked to a Foundry app

You can now view all the Java Pre and Post Processors that are linked to the services of an app on a single screen.

For more information about this feature, click [here](Foundry/voltmx_foundry_user_guide/Content/ViewingVerbsandPrePostProcessors.md).

### Modularity support for Foundry apps

Support to manage the dependent apps of a Composite Foundry app has been added to the Volt Foundry Console.

For more information about this feature, click [here](Foundry/voltmx_foundry_user_guide/Content/ManagingLinkedAppsinCompositeFoundryApp.md).

### PKCE support for the JavaScript SDK

Support for PKCE (Proof Key for Code Exchange) has been added to the JavaScript SDK.

For more information about this feature, click [here](Foundry/voltmx_foundry_user_guide/Content/JS/Invoking_Identity_Service_JS.md#login-with-provider-type-as-oauth-2_0-with-deep-link-url).


### PKCE support between Volt Foundry and the back-end OAuth Service

You can now enable PKCE between Volt Foundry and back-end OAuth Services has been added to the OAuth 2.0 Identity Services.

For more information about this feature, click [here](Foundry/voltmx_foundry_user_guide/Content/Identity10_VoltMX_OAuth2.md#pkce-support-in-foundry).

### OpenAPI Specification support for Object Verb Mapping

The OpenAPI Specification feature has been added to the Object Verb Mapping. With the OpenAPI Specification tab, you can customize the documentation of the Request and Response parameters for your APIs.

For more information about this feature, click [here](Foundry/voltmx_foundry_user_guide/Content/OpenAPISpec_Objects.md).

### Support to replace Identity Service references in MFCLI

The replace-identity-service-references command has been added to MFCLI. You can use this command to replace existing Identity Service references, such as Backend Token and Enhanced Identity filters, with another Identity Service.

For more information about this feature, click [here](Foundry/voltmx_foundry_user_guide/Content/Replacing_Identity_Services.md).

### Version Upgrade mechanism in MFCLI

Support for the Version Upgrade mechanism has been added to MFCLI. You can use this feature to update the versions for Foundry apps and services.

For more information about this feature, click [here](Foundry/voltmx_foundry_user_guide/Content/Version_Upgrade_Apps_Services_MFCLI.md).

### Updates to Server Events APIs

*   Added the setupServerEvents API, which can be used to establish a connection between a client app and a WebSocket on Volt Foundry.

    For more information about this feature, click [here](Foundry/voltmx_foundry_user_guide/Content/VoltMXStudio/ServerEventAPIs.md).

*   Moved the global callbacks, such as onEventCallback (onMessageCallback), onErrorCallback, and onCloseCallback, to the setupServerEvents API.
*   Added local callbacks for the following APIs:
    *   subscribeServerEvents
    *   unsubscribeServerEvents
    *   publishServerEvents
*   Added response codes from the server and the client to create custom messages for client apps.

 For more information about this feature, click [here](Foundry/voltmx_foundry_user_guide/Content/VoltMXStudio/ServerEventAPIs.md).

### Enhancements to the Engagement Adapter

Support to invoke services by using an API key has been added to the Engagement adapter.

For more information about this feature, click [here](Foundry/engagement_api_guide/Content/Engagement_Adapter/Adapter_Overview.md).

### Reconfigure scheme for Swagger 2.0 services

Support to reconfigure the scheme property has been added to services that use Swagger 2.0. The scheme can be reconfigured at the design time from the Foundry Console, or while publishing an app to the run time.

For more information, click [here](Foundry/voltmx_foundry_user_guide/Content/Open_API__Swagger_.md).

### Path Parameters support in OAuth 2.0

Support to add path parameters has been added to the OAuth 2.0 Identity Service.

For more information about this feature, click [here](Foundry/voltmx_foundry_user_guide/Content/Identity10_VoltMX_OAuth2.md).

### Custom Front-End URLs support in Object Services

Support to map an object verb to a custom Front End URL has been added to Object Services. The Front-End URL is exposed for the object verbs as part of the API developer portal. With this feature, you can expose the objects and their associated verbs as URLs that follow the REST API convention.

For more information about this feature, click [here](Foundry/voltmx_foundry_user_guide/Content/FrontEndAPIURL_Objects.md).

<!--
### Enhancements to Cloud Installer on MS Azure

Added support to use multiple nodepools in a single cluster on Azure Kubernetes Service (AKS).

For more information about this feature, click [here](Foundry/voltmxfoundry_on_azure/Content/VoltMX_Foundry_on_Azure.md#multiple-node-pools-in-azure-kubernetes-service).
-->

### Support for WebSockets to the Volt Foundry Cloud

You can now use WebSockets to connect to the Volt Foundry Cloud.

For more information about this feature, click [here](Foundry/voltmx_foundry_user_guide/Content/ServerEvents.md#websocket-endpoint-for-events-__serverevents_stream_).

### Enhancements to Foundry on Red Hat OpenShift

Added support to enable HTTPS passthrough mode for creating routes on OpenShift.

For more information about this feature, click [here](Foundry/voltmxfoundry_on_openshift/Content/configuration_and_setup.md#application-server-details).

### Enhancements to Volt Foundry Installer

**Encryption support for passwords**

The Volt Foundry Installers now support encryption of passwords. Use the Encryption Utility provided with the installer to encrypt the password and use it during installation.

For information about this feature, refer to the following links:

*   For the Windows installer, click [here](Foundry/voltmx_foundry_windows_install_guide/Content/Troubleshooting.md#Encrypt_DB_Password).
*   For the Linux installer, click [here](Foundry/voltmx_foundry_linux_install_guide/Content/Troubleshooting.md#Encrypt_DB_Password).

**Enhancements to the MySQL support**

Added following support from Volt Foundry V9 SP5 onwards:

* Support for MySQL 8.0

For more information on this feature, click [here](Foundry/voltmxfoundry_supported_devices_os_browsers/Content/FoundryV9SP5.md).

### Volt Foundry Containers

**Support extension for Red Hat UBI**

The containers for the Foundry components now run on the Red Hat Universal Base Image (UBI).

For information about this feature, refer to the following links:

*   For the On-Premises Containers solution, click [here](Foundry/voltmxfoundry_containers_solution_on-prem/Content/VoltMX_Foundry_Containers_Solution_On-Prem.md#overview).
*   For the Single-container solution, click [here](Foundry/voltmxfoundry_single_container/Content/VoltMX_Foundry_Single_Container_Solution_On-Prem_.md#overview).
*   For the Amazon EKS solution, click [here](Foundry/voltmxfoundry_on_amazon_eks/Content/foundry_on_amazon_eks.md).
*   For the Red Hat OpenShift solution, click [here](Foundry/voltmxfoundry_on_openshift/Content/foundry_on_openShift.md).

**Encryption support for passwords**

You can now use the Encryption Utility provided with the installer to encrypt your database password and use it in the installer configuration.

For information about this feature, refer to the following links:

*   For the On-Premises Containers solution, click [here](Foundry/voltmxfoundry_containers_solution_on-prem/Content/Containers_Solution_Appendices.md#Encrypting).
*   For the Single-container solution, click [here](Foundry/voltmxfoundry_single_container/Content/Single_Container_Appendices.md).
*   For the Amazon EKS solution, click [here](Foundry/voltmxfoundry_on_amazon_eks/Content/additional_considerations.md#encrypt-the-database-password).
*   For the Red Hat OpenShift solution, click [here](Foundry/voltmxfoundry_on_openshift/Content/additional_considerations.md#encrypt-the-database-password).

**Support for GCP**
Added support for installing Volt Foundry Kubernetes container on GCP from Volt Foundry V9 SP5 onwards:

For more information on this feature, click [here](Foundry/voltmxfoundry_supported_devices_os_browsers/Content/FoundryV9SP5.md).

<!--
**Support for Azure**
Added support for installing Volt Foundry Kubernetes container on Azure from Volt Foundry V9 SP5 onwards:

For more information on this feature, click [here](Foundry/voltmxfoundry_supported_devices_os_browsers/Content/FoundryV9SP5.md).
-->

### Helm Charts for installing Foundry to existing Kubernetes cluster

A Helm chart has been added to facilitate installing Foundry to an existing Kubernetes cluster.  This support is in addition to the existing Single Container and Containers Solution.

For more information about this feature, click [here](Foundry/voltmxfoundry_containers_helm/Content/Introduction.md).

### Volt MX App Factory

**Cucumber testing support for Foundry apps**

You can now use the Cucumber framework to run tests for Foundry apps. Use one of the new jobs (**runFoundryTests** or **createFoundryTests**) to run tests on your Foundry code.

For more information about this feature, click [here](Foundry/voltmx_appfactory_user_guide/Content/TestFoundryApp_Cucumber.md).

**Added support to build Micro Apps**
Support to build Micro Apps has been added to Iris projects.
For more information about this feature, click [here](Foundry/voltmx_appfactory_user_guide/Content/BuildingAnApp.md).
**Added support for App Store Connect API Keys**
You can now use App Store Connect API Keys to generate signing certificates for iOS apps.

For more information about this feature, click [here](Foundry/voltmx_appfactory_user_guide/Content/ManagingCredentials.md#Adding_Apple_API_Key).


**Added the App Factory Command-line Interface**
Support for a command-line interface has been added to App Factory. The App Factory Command-line Interface (AFCLI) can be used to manage the project creation and configuration from external systems.

For more information about this feature, click [here](Foundry/voltmx_appfactory_user_guide/Content/AppFactoryCLI.md).

**Added support for Test Code Coverage**
Support for Test Code Coverage has been added to the Jasmine Test Framework. This feature can be used to check the percentage of code that is covered during a test run.

For more information about this feature, click [here](Foundry/voltmx_appfactory_user_guide/Content/BuildingAnApp.md#Testing).

**Added support to rerun failed test cases**
Support to rerun failed test cases has been added to the Jasmine Test Framework. This feature can be used to track the failed test cases, which can then be run in a separate test suite.

For more information about this feature, click [here](Foundry/voltmx_appfactory_user_guide/Content/BuildingAnApp.md#Testing).


**Foundry apps support in AFCLI**

You can now configure and build Foundry apps by using the App Factory command-line interface. Specify the new **appfactory-service** argument as **Foundry** to run the command for Foundry apps.

For more information about this feature, click [here](Foundry/voltmx_appfactory_user_guide/Content/AppFactoryCLI.md).

**Cross-app testing support for native channels**

You can now run cross-application tests for the Android and iOS channels. Implement the corresponding APIs in your source code and run a cross-app test by using the Jasmine framework.

For more information about this feature, click [here](Foundry/voltmx_appfactory_user_guide/Content/CrossAppTesting.md).

**Support to override test data for Jasmine tests**

You can now override the test data for Jasmine tests. Upload a custom data file to App Factory (or the source code), which is used during the test run to override the data.

For more information about this feature, click [here](Foundry/voltmx_appfactory_user_guide/Content/TestingAnAppJasmine.md#Testing).





