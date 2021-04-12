---
layout: "documentation"
category: "iris_rel_notes"
---
                         

New Features and Enhancements in V9 SP2 Fixpack 7
=================================================

In this release, the following features have been introduced to provide an enhanced Volt MX Iris experience.

 

*   [Selective Build Support for App Groups](#selective-build-support-for-app-groups)
*   [Support to set the Base Target for Responsive Web Apps](#support-to-set-the-base-target-for-responsive-web)
*   [HCL Cloud Support for Volt MX App](#hcl-cloud-support-for-volt-mx-app)
*   [Support for zIndex Configuration](#support-for-zindex-configuration)
*   [Configure Tablet Size for Universal App Binaries](#configure-tablet-size-for-universal-app-binaries)
*   [Clip Bounds Support for Custom Widgets](#clip-bounds-support-for-custom-widgets)
*   [](#ListBox)[Lazy Loading for Segment Rows](#lazy-loading-for-segment-rows)
*   [Test Automation API Enhancements](#test-automation-api-enhancements)
*   [Accessibility Enhancement](#accessibility-enhancement)

 

Selective Build Support for App Groups
--------------------------------------

In the V9 Service Pack 2 Fixpack 7 release, Volt MX Iris introduces support to hide and exclude app groups from the project and the app build process respectively. Hiding an app group from the project provides developers with better control on handling customization privileges of other developers. Excluding an app group from the app build process improves the performance of the app build.

For more information on hiding app groups from the project, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/OrganizingAppElementsInGroups.html#hide-an-application-group-in-the-project).

For more information on excluding app groups from the build process, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/OrganizingAppElementsInGroups.html#exclude-an-application-group-from-the-build-process).

Support to set the Base Target for Responsive Web
-------------------------------------------------

In the V9 Service Pack 2 Fixpack 7 release, Volt MX Iris introduces support to specify the **Base Target** that sets the default target for all the hyperlinks and forms present in a Responsive Web app page.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Project_Properties_in_VoltMX_Iris.html#responsive-web).

HCL Cloud Support for Volt MX App
-------------------------------------

In the V9 Service Pack 2 Fixpack 7 release, Volt MX Iris introduces support for users to Sign-In to the Volt MX App by using their HCL Cloud credentials. Using this feature, existing users who use the Volt MX cloud and new users who use the HCL cloud can preview apps by using the Volt MX App with the same user experience.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_app_viewer/Content/FunctionalPreviewStarter.html).

Support for zIndex Configuration
--------------------------------

In the V9 Service Pack 2 Fixpack 7 release, Volt MX Iris has enhanced support for the Z Index configuration. By using this feature, developers can configure the Z Index's value as **Auto** or **Custom** in Responsive Web apps.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/C_UsingComponents.html#configure-z-index-for-responsive-web-components).

Configure Tablet Size for Universal App Binaries
------------------------------------------------

In the V9 Service Pack 2 Fixpack 7 release, Volt MX Iris introduces support to configure the minimum length threshold that identifies a device as a Tablet for an Android Universal Binary.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Native_App_Properties.html#configure-tablet-size-for-universal-app-binaries).

Clip Bounds Support for Custom Widgets
--------------------------------------

In the V9 Service Pack 2 Fixpack 7 release, Volt MX Iris introduces support for the Clip Bounds property for custom widgets in a Responsive Web app. By using this feature, developers can enable or disable the visibility of the content overflow.

For more information on this feature, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/SPA_Custom_Widget.html#clip-bounds-property-for-custom-widget).

Lazy Loading for Segment Rows
-----------------------------

In the V9 Service Pack 2 Fixpack 7 release, Volt MX Iris introduces support for the [enableLazyLoad]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Segment_Properties.html#enableLazyLoad) property that enables the lazy loading capability for a Segment widget in Responsive Web apps. In addition, support for the [enableLazyLoadForSegment]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_functions.html#enableLazyLoadForSegment) parameter has been added in the [voltmx.application.setApplicationBehaviors]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_functions.html#voltmx.app5) API to support the lazy loading capability for segments. Further, support for the [loadingPlaceholderImage]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Segment_Properties.html#loadingPlaceholderImage) property has been added in the Segment widget to specify a custom background image while the lazy loading feature is enabled.

Test Automation API Enhancements
--------------------------------

In the V9 Service Pack 2 Fixpack 7 release, Volt MX Iris introduces support for the [voltmx.automation.getCurrentForm]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.automation_namespace.html#getCurrentForm) and [voltmx.automation.getWidgetsByFilter]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.automation_namespace.html#getWidgetsByFilter) APIs.  
In addition, support for the [Array of Objects]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.automation_namespace.html#Array) parameter has been added in the [voltmx.automation.textbox.enterText]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.automation_namespace.html#textbox.enterText), [voltmx.automation.textarea.enterText]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.automation_namespace.html#textarea.enterText), and [voltmx.automation.widget.touch]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.automation_namespace.html#widget.touch) APIs.

Accessibility Enhancement
-------------------------

In the V9 Service Pack 2 Fixpack 7 release, Volt MX Iris introduces support for the following enhancements in the Accessibility feature:

*   [The a11yARIA field is added to the Accessibility Config section in the Properties panel]({{ site.baseurl }}/docs/documentation/Iris/app_design_dev/Content/Accessibility_Iris.html#a11yARIA)
*   [Support to provide i18n keys in the Accessibility Config section]({{ site.baseurl }}/docs/documentation/Iris/app_design_dev/Content/Accessibility_Iris.html#i18Nnote)
*   [Automatic addition of tabIndex when the Role attribute is used]({{ site.baseurl }}/docs/documentation/Iris/app_design_dev/Content/Accessibility_Iris.html#roleARIA)
*   [Support to add the accessibilityConfig property as a pass-through property]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/C_CreatingComponent.html#accessibilityNote)
*   [Support to configure the accessibilityConfig property as breakpoint-forkable]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Responsive_Design_8_2.html#accessibilityNote)
