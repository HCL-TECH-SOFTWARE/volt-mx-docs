---
layout: "documentation"
category: "iris_rel_notes"
---
                         

New Features and Enhancements in V9 Preview
===========================================

In this release, the following features have been introduced to provide an enhanced Volt MX Iris experience.

 

*   [Create Forms within an App Group in Storyboard View](#create-forms-within-an-app-group-in-storyboard-view)
*   [Build Native Apps on a Local Machine](#build-native-apps-on-a-local-machine)
*   [Generate an app binary for the Volt MX VoltMX App](#generate-an-app-binary-for-the-volt-mx-voltmx-app)
*   [Customize the Generation of Data Model Objects](#customize-the-generation-of-data-model-objects)
*   [Mapping Editor Enhancements](#mapping-editor-enhancements)
*   [Action Editor Enhancements](#action-editor-enhancements)
*   [VoltMX IQ Enhancements](#volt-mx-iq-enhancements)
*   [Connect Volt MX Iris to an on-premise Volt MX Foundry Environment](#connect-volt-mx-iris-to-an-on-premise-volt-mx-foundry-environment)
*   [VoltMX Collab](#volt-mx-collab)
*   [Jasmine Test Framework Dashboard](#jasmine-test-framework-dashboard)
*   [Generate CRUD Forms for an Object Service](#generate-crud-forms-for-an-object-service)
*   [List Supported Environments](#list-supported-environments)
*   [Cache Progressive Web Apps](#cache-progressive-web-apps)
*   [Widget Enable property](#widget-enable-property)
*   [Resolve Conflicts in Designer and Developer actions](#resolve-conflicts-in-designer-and-developer-actions)
*   [Enhancements in voltmx.nosql APIs](#enhancements-in-volt-mx-nosql-apis)
*   [WebP format support for images](#webp-format-support-for-images)
*   [Update modified data of Segment widget](#update-modified-data-of-segment-widget)
*   [Android Enhancements](#android-enhancements)
*   [Deprecated widgets](#deprecated-widgets)
*   [Deprecated APIs](#deprecated-apis)

 

Create Forms within an App Group in Storyboard View
---------------------------------------------------

From Volt MX Iris V9, you can now create forms within App Groups in Storyboard view.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Create_the_Storyboard_of_your_App.html).

Build Native Apps on a Local Machine
------------------------------------

From Volt MX Iris V9, a new menu option, Build Native Local, is added in the Build Menu of Volt MX Iris. Use this menu option to build native app binaries in Volt MX Iris and store the binaries on a local machine.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/LocalBuildStarter.html).

Generate an app binary for the Volt MX VoltMX App
-----------------------------------------------

From Volt MX Iris V9, a new menu option, Custom Volt MX App, is added in the Build Menu of Volt MX Iris. When this menu option is selected, Volt MX Iris internally checks for NFIs in the app. If there are no NFIs, the QR code to download the Volt MX VoltMX App is shown. If the app uses NFIs, the Build process packages the NFIs with the app and generates a binary that you can view on the Volt MX VoltMX App.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Package_AppViewer.html).

Customize the Generation of Data Model Objects
----------------------------------------------

From Volt MX Iris V9, enhancements have been made to customize the generation of Data Model objects to include this option for Grid types of forms.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/DataPanel.html#customize-the-generation-of-data-model-objects).

Mapping Editor Enhancements
---------------------------

### Set Data for the Segment in a Component

From Volt MX Iris V9, a new feature has been introduced to auto-generate Templates and widgets for a Segment in a Component.

For more information about this enhancement, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/DataPanel.html#set-data-for-the-segment-in-a-component).

### Create a Template from a Default Segment Template

From Volt MX Iris V9, you can create a customized template from an auto-generated segment template.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Segment2.html#Create_a_Segment_Template).

### Set Data for the Widgets in the Section Header Template of a Segment

From Volt MX Iris V9, you can map the widgets of the Section Header Template of a Segment by using the Mapping Editor.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Segment2.html#Map_a_Segment's_Section_Header_Template).

### Set Data for Components with Contract

From Volt MX Iris V9, you can use the Mapping Editor to create data mappings among various forms, components with contract, and widget elements as well as global variables.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/C_CreatingComponent.html#set-data-for-components-with-contract-by-using-mapping-editor).

Action Editor Enhancements
--------------------------

### Consolidation of Service Invocation Actions

From Volt MX Iris V9, the service invocation action feature in the Action Editor has been revamped to include an Invoke a Service action that contains the option to invoke all types of services (Identity, Integration, Orchestration, Object Services) from one place.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/ActionsNetworkAPIs.html#invoke-a-service).

### Search Functionality and UX Updates

New fuzzy search functionality has been added to search for actions in the Action Editor. In addition, various user experience enhancements have been made in the Action Editor, such as a new error message banner and color differentiation of the main flow diagram and the nested flow.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/working_with_Action_Editor.html).

Volt MX  IQ Enhancements
--------------------

### Pause Design Suggestions

From Volt MX Iris V9, Volt MX IQ provides an option to pause the suggestions feature for an hour. Using the Pause suggestions feature, you can pause the design suggestions for the current form.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/VoltMX_IQ.html#Pause).

### Enable or Disable Design Suggestions

From Volt MX Iris V9, you can enable or disable Design Suggestions from the Help menu.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/VoltMX_IQ.html#enable-disable-design-suggestions).

### Create a Component from Design Suggestions

From Volt MX Iris V9, Volt MX IQ provides an option to convert a design suggestion into a component and import the component into your project.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/VoltMX_IQ.html#ConvertToComponent).

Connect Volt MX Iris to an on-premise Volt MX Foundry Environment
----------------------------------------------------------------

From Volt MX Iris V9, an option to sign in to an on-premise Volt MX Foundry environment has been provided in the Volt MX Foundry section of the Preferences tab. This feature has been introduced to support the porting of features from Volt MX Iris Classic to Volt MX Iris.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/LogInUsingCustAuth.html#connect-to-a-on-premise-environment).

Volt MX  Collab
-----------

From Volt MX Iris V9, Volt MX introduces the Collab feature that helps developers who use Git as the collaboration tool to avoid conflicts while working on the same Iris project. Collab notifies the developers who work on the same file or the same project and highlights possible conflicts.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Collab.html).

Jasmine Test Framework Dashboard
--------------------------------

From Volt MX Iris V9, a dashboard feature has been introduced in the Jasmine test framework. The dashboard provides an overview of the last five tests that have been executed and an option to play recorded tests.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/TestAutomation.html#automator).

Generate CRUD Forms for an Object Service
-----------------------------------------

The feature to generate CRUD forms has been enhanced to include features such as a new Dashboard form, breadcrumb links in the form templates, a new Login screen template, and much more.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/DataPanel.html#generate-crud-forms-for-an-object-service).

List Supported Environments
---------------------------

Prior to the Volt MX Iris V9 release, Iris would only list the environments to which you have full access. However, from Volt MX Iris V9, you can view environments to which you have full and read-only access.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/PublishVoltMXFoundryServicesApp.html#environment-list-in-iris).

Cache Progressive Web Apps
--------------------------

From Volt MX Iris V9, two new caching strategies, cacheMechanism function and replace Service worker file, have been introduced. You can use these caching strategies to cache static and dynamic data from third-party services.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/ProgressiveWebApp.html#progressive-web-apps-caching).

Widget Enable property
----------------------

From Volt MX Iris V9, you can change the actionability of widgets in an application by using the enable property for a particular widget.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/FlexContainer_Properties.html#enable).

Resolve Conflicts in Designer and Developer actions
---------------------------------------------------

From Volt MX Iris V9, if there are any conflicts in the actions of a widget or form when a project is imported from Volt MX Iris Classic, Volt MX Iris provides an option to resolve these conflicts.  
This feature has been introduced to support the porting of features from Volt MX Iris Classic into Volt MX Iris.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/MigrateProjectFromVoltMXStudioOrPrevVerIris.html#Resolve).

Enhancements in voltmx.nosql APIs
-------------------------------

From Volt MX Iris V9, the following APIs have been added or enhanced:

*   Added support for the [voltmx.nosql.createIndices]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx_functions.html#createIndices) API and the [voltmx.nosql.deleteIndices]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx_functions.html#deleteIndices) API. These APIs can be used to create and delete indices for a specific table in the database.
*   Added the [groupBy]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx_functions.html#groupBy) method for the result object in the [voltmx.nosql.fetchRecords]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx_functions.html#voltmx.nosql.fetchRecords) API. The API enables a developer to group records depending on a specified condition.

WebP format support for images
------------------------------

From Volt MX Iris V9, Iris supports the WebP format for images in the SPA and the Desktop Web platforms.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Adding_and_Managing_Images.html#import-and-use-images).

Update modified data of Segment widget
--------------------------------------

When the setDataAt method is used to modify a row in the segment widget, the data of the entire row gets updated. From Volt MX Iris V9, you can use the stopRerenderOnSetDataAt property of the Segment widget for the SPA and the Desktop Web platforms to update only the data that is modified.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Segment_Properties.html#stopRerenderOnSetDataAt).

Android Enhancements
--------------------

From Volt MX Iris V9, 64-bit architecture is the default architecture for Android builds.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Native_App_Properties.html#support-for-32-bit-and-64-bit-architectures-in-a-single-apk).

Deprecated widgets
------------------

From Volt MX Iris V9, all the deprecated widgets such as Charts, HBox, VBox, Line, Link, PopUp, ScrollBox, ImageGallery, HorizontalImageStrip, and MenuContainer, have been removed from Iris.

Deprecated APIs
---------------

From Volt MX Iris V9, the Data-store API and the Streaming API have been deprecated.
