---
layout: "documentation"
category: "iris_rel_notes"
---
                         

New Features and Enhancements in V9
===================================

In this release, the following features have been introduced to provide an enhanced Volt MX Iris experience.

 

*   [Support for Responsive Web Components](#support-for-responsive-web-components)
*   [Build a Universal Windows Platform App](#build-a-universal-windows-platform-app)
*   [Modify the Test Plan File](#modify-the-test-plan-file)
*   [PDFView Widget](#pdfview-widget)
*   [Get Push Notifications Status](#get-push-notifications-status)
*   [Image Recognition API and Widget](#image-recognition-api-and-widget)
*   [Android Enhancement](#android-enhancement)
*   [Get Open GLES version](#get-open-gles-version)
*   [Augmented Reality API and Widget](#augmented-reality-api-and-widget)
*   [Support for onBreakpointChange event in Components](#support-for-onbreakpointchange-event-in-components)
*   [Support for CSS 3.0](#support-for-css-3-0)
*   [Map Callout Visibility](#map-callout-visibility)
*   [Deprecated Support for UIWebView](#deprecated-support-for-uiwebview)

 

Support for Responsive Web Components
-------------------------------------

From Volt MX Iris V9, you can create components with different breakpoints for responsive web apps. You can create layouts for different breakpoints and then insert it into a responsive web form.

For more information on using responsive web components, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Responsive_Design_8_2.html#responsive-web-components).

Build a Universal Windows Platform App
--------------------------------------

From Volt MX Iris V9, you can generate a Universal Windows Platform app binary using the Build Native Local option in the Build menu of Volt MX Iris. You must configure the required settings and certificates in the Windows Native settings before you build the application.

For more information on generating a Windows native app, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/LocalBuildStarter.html#BuildLocalWindows).

Modify the Test Plan File
-------------------------

To enable testing in Volt MX Iris, a default testPlan.js file is present in the Test Plan folder. You can modify the testPlan.js file in the following ways:

*   Invoke the require function for a test plan
*   Invoke the require function for selected test suites

For more information on writing a test plan, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/TestAutomation.html#modify-the-testplan-js-file).

PDFView Widget
--------------

From iOS 11, a new widget to view PDFs on iOS devices is added. In previous versions of Volt MX Iris, the Browser widget was used to render the PDF content. You can load a PDF using the PDFView widget via a URL or a file Path.

For more information on PDF Viewer, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.ui_functions.html#PDFView).

Get Push Notifications Status
-----------------------------

A new API to allow an application on a device to get Push Notifications Settings status is added. The getApplicationNotificationSettings API takes an object with notification type and callback as the input.

For more information on this API, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.application_functions.html#voltmx.application.getApplicationNotificationSettings).

Image Recognition API and Widget
--------------------------------

Image Classification API

Image Classification is a technique used to classify real time objects based on the trained model categories. Using the Image Classification API, a developer can identify the name, label, entity or category of an object based on the image captured either from the device camera or by using an image from the device gallery.

For more information, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/imageclassificationapi.html#image-classification-api).

MLCamera widget

In previous versions of Iris, you had to use FFI to provide the capabilities of Image Recognition in Android and iOS applications. From Volt MX Iris V9, you can use the MLCamera widget and Image Classification APIs to implement image recognition in your application. Using this capability, you can scan and classify real- world objects.

For more information, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/MLCamera.html).

Android Enhancement
-------------------

The Local Authentication APIs have been enhanced to support additional biometrics such as Face and Iris based authentication along with touch-based authentication.  
If you have used the Local authentication API in your Volt MX Iris V8 projects, before moving your project to the V9 release, ensure that you read the [Local Authentication Migration guidelines](https://basecamp.voltmx.com/s/feed/0D52K00004LZUWw) article on Base Camp.

> **_Note:_** Face and Iris based biometric support is subject to the availability of the feature on the device.

For more information on Local Authentication APIs, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/localauthapi.html).

Get Open GLES version
---------------------

A new API, the voltmx.os.getOpenGLESVersion, is added in this release. The API returns the maximum OpenGLES Version supported by a device. Depending on the OpenGLES value returned, you can determine if the device supports Augmented Reality capabilities.

For more information, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.os_functions.html#getOpenGIES).

Augmented Reality API and Widget
--------------------------------

**VoltMX.ui.ARRenderer API**

A new VoltMX.ui.ARRenderer API is added in this release. The ARRenderer API creates the ARRenderer widget. The AR Renderer widget occupies some space on a form depending on its positional and dimensional properties.

For more information on the VoltMX.ui.ARRenderer API, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.ui_functions.html#ARRenderer).

ARRenderer widget

In previous versions of Iris, you had to use FFIs to provide the capabilities of augmented reality in Android and iOS applications. From Volt MX Iris V9, you can use the ARRenderer widget to implement augmented reality in your application. Using this widget, you can scan an area and then add a 3D object to that area.

For more information on the AR Renderer widget, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/ARRenderer.html).

Support for onBreakpointChange event in Components
--------------------------------------------------

From Volt MX Iris V9, the onBreakpointChange event has been added to Responsive Web components. When you select a Component that has been designed for Responsive Web Breakpoints, the event appears in the Action tab of the Properties panel in Volt MX Iris.

For more information, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/FlexForm_Events.html#RWComponents).

Support for CSS 3.0
-------------------

From Volt MX Iris V9, the Responsive Web platform supports CSS 3.0, and has deprecated support for the contextMenu and blockedUISkin properties. In addition, the Adaptive Web and Responsive Web applications now support the textStyle property for the Label widget.

For more information, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Label_Properties.html#textSyle).

Map Callout Visibility
----------------------

From Volt MX Iris V9, Responsive Web applications support the setCalloutVisibility method for the Map widget. In addition, when the visibility of the Map widget is set as false, the setCalloutVisibility method will have no impact.

For more information, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Map_Methods.html).

Deprecated Support for UIWebView
--------------------------------

Apple will not support UIWebView from April 2020. Hence, the support for UIWebView has been deprecated in Iris. It is recommended to use WKWebView to display the contents of the Browser widget and the CordovaBrowser widget.
