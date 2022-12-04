                                  

You are here: Important Considerations

CordovaBrowser Widget
=====================

Cordova is an open-source development framework for mobile applications that rely on JavaScript, HTML5, and CSS3 rather than the APIs that are specific to a given platform, such as iOS and Android.The layout of a Cordova app is built using web views. This layout is not created using any platform's native UI framework. But, unlike other web apps, Cordova apps cannot access native APIs and cannot be bundled as apps for publication.

Cordova Browser widget is a container that displays web application designed in the Cordova platform. This widget helps you to view HTML/JavaScript content without navigating away from the application.

Following are the real-time use cases of Cordova Browser widget:

*   To run video calling web applications developed in Cordova platform, you must use the Cordova Browser widget.
    
*   To view Cordova based travel applications that embed maps, you must use Cordova Browser widget.
    

> **_Note:_** In iOS applications created prior to iOS 12, CordovaBrowser widget uses UIWebView class in UIKit framework of iOS by default to display its contents. Apple has deprecated UIWebView class and recommends using the WKWebView class in WebKit framework.  
As UIWebView class has been deprecated and its support will be removed from Apple, you must change the Browser Type of CordovaBrowser widget to WKWebView class.  
  
When you modify the CordovaBrowser widget type to WKWebView, ensure that you add the _cordova-plugin-wkwebview-engine_ plugin to your Cordova apps.  
  
If the Cordova global version is 10.0 or higher, you must not add the _cordova-plugin-wkwebview-engine_ plugin to your cordova apps.  
  
If the Cordova global version is less than 10.0, you can add the _cordova-plugin-wkwebview-engine_ plugin. However, you cannot submit your application to the App Store as the previous versions of Cordova contains UIWebView.  
Hence Volt MX Iris recommends you to use global version 10.0 or higher while using Cordova.

Widgets are normally added to your application using Volt MX Iris, but can also be added from code. For general information on using widgets in Volt MX Iris, see [Designing an Application](../../../Iris/iris_user_guide/Content/Part_II_CreatingAnApplication.md) in the [Iris User Guide](../../../Iris/iris_user_guide/Content/Introduction.md).

For general information on the CordovaBrowser widget see the [](../../../Iris/iris_user_guide/Content/Button.md)[CordovaBrowser](../../../Iris/iris_user_guide/Content/CordovaBrowser.md) topic in the Volt MX Iris User Guide.

The CordovaBrowser widget capabilities can be broadly categorized into the following:

*   [Layout](#layout)
*   [Navigation Features](#navigation-features)
*   [Animations](#animations)
*   [Data Management](#data-management)
*   [3D Touch](#3d-touch)
*   [User Input Handling](#user-input-handling)
*   [Enabling RTL](#enabling-rtl)
*   [Miscellaneous](#miscellaneous)
*   [Configurations Common To All Widgets](#configurations-common-to-all-widgets)

#### Layout

  
| Events | Description |
| --- | --- |
| [doLayout](CordovaBrowser_Events.md#doLayout) | Invoked for every widget when the widget position and dimensions are computed. |

 

| Properties | Description |
| --- | --- |
| [anchorPoint](CordovaBrowser_Properties.md#anchorPo) | Specifies the anchor point of the widget bounds rectangle using the widget's coordinate space. |
| [bottom](CordovaBrowser_Properties.md#bottom) | Determines the bottom edge of the widget and is measured from the bottom bounds of the parent container. |
| [centerX](CordovaBrowser_Properties.md#centerX) | Determines the center of a widget measured from the left bounds of the parent container. |
| [centerY](CordovaBrowser_Properties.md#centerY) | Determines the center of a widget measured from the top bounds of the parent container. |
| [enableZoom](CordovaBrowser_Properties.md#enableZoom) | Specifies if Zoom (ability to change the scale of the view area) must be enabled. |
| [height](CordovaBrowser_Properties.md#height) | Determines the height of the widget and measured along the y-axis. |
| [left](CordovaBrowser_Properties.md#left) | Determines the lower left corner edge of the widget and is measured from the left bounds of the parent container. |
| [maxHeight](CordovaBrowser_Properties.md#maxHeigh) | Specifies the maximum height of the widget and is applicable only when the height property is not specified. |
| [maxWidth](CordovaBrowser_Properties.md#maxWidth) | Specifies the maximum width of the widget and is applicable only when the width property is not specified. |
| [minHeight](CordovaBrowser_Properties.md#minHeigh) | Specifies the minimum height of the widget and is applicable only when the height property is not specified. |
| [minWidth](CordovaBrowser_Properties.md#minWidth) | Specifies the minimum width of the widget and is applicable only when the width property is not specified. |
| [right](CordovaBrowser_Properties.md#right) | Determines the lower right corner of the widget and is measured from the right bounds of the parent container. |
| [screenLevelWidget](CordovaBrowser_Properties.md#screenLevelWidget) | Specifies whether the widget should occupy the whole container or not when your Browser widget has a large.md content to display. |
| [showProgressIndicator](CordovaBrowser_Properties.md#showProg) | Specifies if the progress indicator must be displayed before loading the URL or executing an event. |
| [top](CordovaBrowser_Properties.md#top) | Determines the top edge of the widget and measured from the top bounds of the parent container. |
| [width](CordovaBrowser_Properties.md#width) | Determines the width of the widget and is measured along the x-axis. |
| [zIndex](CordovaBrowser_Properties.md#zIndex) | Specifies the stack order of a widget. |

 

#### Navigation Features

| Methods | Description |
| --- | --- |
| [canGoBack](CordovaBrowser_Methods.md#canGoBac) | Specifies whether the CordovaBrowser can navigate back into history. |
| [canGoForward](CordovaBrowser_Methods.md#canGoFor) | Specifies whether the CordovaBrowser can navigate forward into history. |
| [goBack](CordovaBrowser_Methods.md#goBack) | Provides you with the ability to navigate one step back in the browser history. |
| [goForward](CordovaBrowser_Methods.md#goForwar) | Provides you with the ability to navigate one step forward in the browser history. |
| [reload](Browser_Methods.md#reload) | Provides you with the ability to reload the current web page. |

#### Animations

| Methods | Description |
| --- | --- |
| [animate](CordovaBrowser_Methods.md#animate) | Applies an animation to the widget. |

 

| Properties | Description |
| --- | --- |
| [transform](CordovaBrowser_Properties.md#transfor) | Contains an animation transformation that can be used to animate the widget. |

#### Data Management

| Methods | Description |
| --- | --- |
| [clearHistory](CordovaBrowser_Methods.md#clearHis) | Clears the page history of the specified CordovaBrowser. |
| [clone](CordovaBrowser_Methods.md#clone) | When this method is used on a container widget, then all the widgets inside the container are cloned. |
| [loadData](CordovaBrowser_Methods.md#loadData) | Enables you to load the data into the CordovaBrowser widget with the provided configuration. |

 

| Events | Description |
| --- | --- |
| [handleRequest](CordovaBrowser_Events.md#handleRe) | Invoked by the platform before CordovaBrowser widget navigates to a new URL. |
| [onFailure](CordovaBrowser_Events.md#onFailure) | Invoked by the platform when the given URL fails to load. |
| [onProgressChanged](CordovaBrowser_Events.md#onProgressChanged) | Shows you the progress of the page loading in the CordovaBrowser Widget. |
| [onSuccess](CordovaBrowser_Events.md#onSuccess) | Invoked by the platform when the given request URL is successful in loading the data. |

 

| Properties | Description |
| --- | --- |
| [baseURL](CordovaBrowser_Properties.md#baseURL) | Used to configure the base URL that is displayed when a CordovaBrowser is rendered. |
| [clearCanvasBeforeLoading](CordovaBrowser_Properties.md#clearCanvasBeforeLoading) | Clears the browser's canvas before data is loaded. |
| [detectTelNumber](CordovaBrowser_Properties.md#detectTelNumber) | Specifies if the Browser widget must support the detection of phone numbers in the web page and display the phone numbers as clickable Phone links. |
| [enableNativeCommunication](CordovaBrowser_Properties.md#enableNativeCommunication) | Enables web apps to access native capabilities from within the web app's JavaScript code. |
| [loadPageInBrowser](CordovaBrowser_Properties.md#loadPageInBrowser) | Enables the URL in CordovaBrowser widget to open inside the application. |
| [requestURLConfig](CordovaBrowser_Properties.md#requestURLConfig) | Specifies the configurations for the requested URL in key-value pairs as a JavaScript object. |
| [settings](CordovaBrowser_Properties.md#settings) | Helps you to configure the Browser Widget settings. |
| [zoomDensity](CordovaBrowser_Properties.md#zoomDens) | Specifies the default zoom density of the page. |

 

#### 3D Touch

| Methods | Description |
| --- | --- |
| [registerForPeekandPop](CordovaBrowser_Methods.md#register) | Registers a widget to enable 3D Touch peek and pop gestures. |
| [setOnPeek](CordovaBrowser_Methods.md#setOnPek) | Sets and overrides the existing onPeekCallback for the widget. |
| [setOnPop](CordovaBrowser_Methods.md#setOnPop) | Overrides the existing onPopCallback for the widget. |
| [unregisterForPeekandPop](CordovaBrowser_Methods.md#unregist) | Unregisters a widget from 3D Touch peek and pop gestures. |

 

| Properties | Description |
| --- | --- |
| [enableFocusInTouchMode](CordovaBrowser_Properties.md#enableFocusInTouchMode) | Enables or disables the Browser widget from scrolling to the top of the device screen. |

#### User Input Handling

| Events | Description |
| --- | --- |
| [onScrollWidgetPosition](CordovaBrowser_Events.md#onScrollWidgetPosition) | Invoked by the platform when the widget location position gets changed on scrolling. |
| [scrollingEvents](CordovaBrowser_Events.md#scrollin) | Called when scrolling reaches beginning of the widget or end of the widget. |

 

| Methods | Description |
| --- | --- |
| [addGestureRecognizer](CordovaBrowser_Methods.md#addGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |
| [removeGestureRecognizer](CordovaBrowser_Methods.md#removeGestureRecognizer) | Allows you to remove the specified gesture recognizer for the specified widget. |
| [setGestureRecognizer](CordovaBrowser_Methods.md#setGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |

 

#### Enabling RTL

| Properties | Description |
| --- | --- |
| [retainContentAlignment](CordovaBrowser_Properties.md#retainContentAlignment) | Helps to retain the content alignment of the widget while applying RTL. |
| [retainFlexPositionProperties](CordovaBrowser_Properties.md#retainFlexPositionProperties) | Helps to retain the left, right and padding properties while applying RTL. |
| [retainFlowHorizontalAlignment](CordovaBrowser_Properties.md#retainFlowHorizontalAlignment) | Enables you to change the horizontal flow of the widget from left to right. |

#### Miscellaneous

| Properties | Description |
| --- | --- |
| [cursorType](CordovaBrowser_Properties.md#cursorType) | Specifies the type of the mouse pointer used. |
| [enableOverviewMode](CordovaBrowser_Properties.md#enableOv) | Specifies whether the browser should load pages in overview mode. |
| [opacity](CordovaBrowser_Properties.md#opacity) | Specifies the opacity of the widget. |

 

| Methods | Description |
| --- | --- |
| [evaluateJavaScript](CordovaBrowser_Methods.md#evaluate) | Accepts a JavaScript snippet in the form of a string. |
| [evaluateJavaScriptAsync](CordovaBrowser_Methods.md#evaluate2) | Accepts a JavaScript snippet and a callback function as inputs. |
| [getHTMLFilesInWebFolder](CordovaBrowser_Methods.md#ge.mdFilesInWebFolder) | Retrieves a list of the HTML files of the specified type. |
| [getBadge](CordovaBrowser_Methods.md#getBadge) | Enables you to read the badge value (if any) attached to the specified widget. |
| [isCordovaAppsEnabled](CordovaBrowser_Methods.md#isCordovaAppsEnabled) | Retrieves a Boolean value that indicates whether Apache Cordova apps are enabled. |
| [isHtmlPreviewEnabled](CordovaBrowser_Methods.md#i.mdPreviewEnabled) | Retrieves a Boolean value that indicates whether your app can open an HTML preview. |
| [isWebAppDevelopmentEnabled](CordovaBrowser_Methods.md#isWebAppDevelopmentEnabled) | Retrieves a Boolean value indicating whether web app development is enabled in the app. |
| [setBadge](CordovaBrowser_Methods.md#setBadge) | Enables you to set the badge value to the given widget at the upper, right corner of the widget. |

#### Configurations common to all widgets

| Properties | Description |
| --- | --- |
| [accessibilityConfig](CordovaBrowser_Properties.md#accessibilityConfig) | Enables you to control accessibility behavior and alternative text for the widget. |
| [enable](CordovaBrowser_Properties.md#enable) | Allows you to make a widget visible but not actionable. |
| [enableCache](CordovaBrowser_Properties.md#enableCa) | Enables you to improve the performance of Positional Dimension Animations. |
| [id](CordovaBrowser_Properties.md#id) | id is a unique identifier of Browser widget consisting of alpha numeric characters. |
| [info](CordovaBrowser_Properties.md#info) | A custom JSObject with the key value pairs that a developer can use to store the context with the widget. |
| [isVisible](CordovaBrowser_Properties.md#isVisible) | Controls the visibility of a widget on the form. |
| [parent](CordovaBrowser_Properties.md#parent) | Helps you access the parent of the widget. |

 

| Methods | Description |
| --- | --- |
| [convertPointFromWidget](CordovaBrowser_Methods.md#convertPointFromWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [convertPointToWidget](CordovaBrowser_Methods.md#convertPointToWidget) | Using the convertPointToWidget method, you can modify the co-ordinate system. |
| [removeFromParent](CordovaBrowser_Methods.md#removeFromParent) | Allows you to remove a child widget from a parent widget. |
| [setEnabled](CordovaBrowser_Methods.md#setEnabled) | Specifies the widget that must be enabled or disabled. |
| [setFocus](CordovaBrowser_Methods.md#setFocus) | Specifies the widget on which there must be focus. |
| [setVisibility](CordovaBrowser_Methods.md#setVisibility) | Use this method to set the visibility of the widget. |

> **_Important:_** For Cordova browser, the.htmlString property is not available.

CordovaBrowser Widget Basics
----------------------------

### Important Considerations

The CordovaBrowser widget has the following important considerations:

*   On iOS and Android platforms, when the CordovaBrowser widget is set as non-screen level widget, and if you keep some widgets before and after the browser, then double scrolling issue will be seen. This is a native iOS issue. To avoid this, use the CordovaBrowser widget as screen level widget and move other widgets to the header or footer of the form.
*   The CordovaBrowser widget, unlike other widgets, is considered to be "heavy" widget as far as memory and performance is considered.
*   The CordovaBrowser widget uses a lot of initial RAM. The RAM usage grows in proportion to the number of images and static text rendered.
*   If there are multiple instances of the CordovaBrowser widget in the same application, there may be issues related to sharing of information. For example, cookies etc.
*   You must not place multiple CordovaBrowser widgets in a screen. As a guideline, you must not have more than two CordovaBrowser widgets in an application.
*   You must _not_ use CordovaBrowser widget as a RichText widget. It should only be used to display large HTML content.
*   You must avoid using the CordovaBrowser widget to create an application which looks and behaves like a mini web browser. Users normally expect to use the native browser to browse web content. Replicating this functionality within your application is not recommended.
*   Server side Mobile Web platform does not support CordovaBrowser widget in startup form.
*   On SPA platform, <script> tag is not supported.
*   On SPA (Windows) platform, content is rendered using a URL, opening a new tab is not technically possible. It opens in the current tab itself.

### Building Web and Apache Cordova Apps

As of Volt MX Iris 7.1, developers can package their web apps or Cordova/ PhoneGap apps inside a Volt MX Iris app that uses the CordovaBrowser widget.

Web Apps are written in JavaScript and can execute in most browsers. Packaging a web app into a Volt MX Iris CordovaBrowser widget makes it highly portable across many types of devices. Most web developers who are proficient in JavaScript will find that they can port their web apps to Volt MX Iris easily and with very little modification by simply dragging and dropping a CordovaBrowser widget into a Volt MX Iris app, The rest of the development is done within the CordovaBrowser widget. This capability gives web developers a straightforward way to transition into developing mobile apps everywhere.

Apache Cordova is an open source project that was donated to the Apache Software Foundation. Also known as PhoneGap, Apache Cordova is a development environment that enables developers familiar with HTML, CSS, and JavaScript to build cross-platform mobile applications. Like web apps, Cordova apps can run within the CordovaBrowser widget. Therefore, anyone familiar with Apache Cordova or PhoneGap development is able to create apps within Volt MX Iris so that they can run their apps virtually anywhere.

Typically, developers who are creating web or Cordova apps within Volt MX Irissize the CordovaBrowser widget so that it fills or nearly fills the device's screen. The CordovaBrowser widget then executes the web or Cordova app. All of the files for web apps and Apache Cordova apps can be packaged into the Volt MX Iris app and stored locally on the device. Your web app's asset files can consist of any file type that the CordovaBrowser widget supports, such as HTML, CSS, JS, JPG, PNG, and MP4 files.

### How to Build a Web App in the CordovaBrowser Widget

To build a web app using Volt MX Iris, use the steps below.

1.  Start a new project in Volt MX Iris and drag a CordovaBrowser widget onto the app's form.
2.  Go to the **Projects** pane and find the **Web** folder in your project's hierarchy. In the **Web** folder is a subfolder called **localfiles**.
3.  Copy your web app's asset files (HTML, CSS, JS, PNG, and other files) into the **localfiles** folder. You may create sub-folders and store your app's assets in them if you want to.
    
    > **_Important:_** When your app accesses its asset files, such as JPG, MP4, or CSS files, it **must** use relative addressing and not absolute addressing.
    
4.  Build your app for as many platforms as you want to support in just the same way you would build and other Volt MX Iris app.

### How to Build an Apache Cordova App in the CordovaBrowser Widget

To build a Cordova app using Volt MX Iris, use the steps below.

1.  Start a new project in Volt MX Iris and drag a CordovaBrowser widget onto the app's form.
2.  Go to the **Projects** pane and find the **Web** folder in your project's hierarchy. In the **Web** folder is a subfolder called **cordova**.
3.  Copy your web app's asset files (HTML, CSS, JS, PNG, and other files) into the **cordova** folder. You may create subfolders and store your app's assets in them if you want to.
    
    > **_Important:_** When your app accesses its asset files, such as JPG, MP4, or CSS files, it **must** use relative addressing and not absolute addressing.
    
4.  Build your app for as many platforms as you want to support in just the same way you would build and other Volt MX Iris app.

### Relative Addressing

As noted above, all accesses to the asset files in your web app must use relative addressing. For example, suppose your web app contains a file called index.html that is stored in a folder called **help**. The help folder, in turn, is a subfolder of **LocalFiles**. Accesses to the index.html file would resemble the following code snippet.

```
//refers to file MyWebproject/web/localfiles/help/index.html
var urlConf = {
    URL: "help/index.html",
    requestMethod: constants.BROWSER_REQUEST_METHOD_GET
};

var webBasic = {
    id: "browserID",
    isVisible: true,
    screenLevelWidget: false,
    requestURLConfig: UrlConf
};
```

### Accessing Native Functionality

For security reasons it is important that web apps in the CordovaBrowser widget do not have access to native capabilities by default. Therefore, when your app starts, this access is disabled. However, you can enable it by setting the CordovaBrowser widget's [enableNativeCommunication](CordovaBrowser_Properties.md#enableNativeCommunication) property. Your app can only set this property in the CordovaBrowser widget's constructor. After the constructor executes, this property is read-only.

Executing JavaScript in the Native Context

If your app sets the `enableNativeCommunication` property to `true` when it starts, then your app can call the [voltmx.evaluateJavaScriptInNativeContext](../../../Iris/iris_api_dev_guide/content/voltmx_functions.md#evaluateJavaScript) function to execute JavaScript functions within the context of your web app's JavaScript modules.

JavaScript modules within your web app are the JavaScript modules in the **LocalFiles** folder, or one of its subfolders.

Your app can also include JavaScript modules that are executed in the native context. These modules are located in the **Modules** folder in your project, or one of its subfolders. JavaScript modules in the **Modules** folder generally contain event handlers for form events, functions to help process application data. So your app can be a hybrid app that uses widgets, JavaScript, and other Volt MX Iris capabilities together with bundled web content that is hosted in a CordovaBrowser widget.

If your app is a hybrid app that contains JavaScript modules that are executed in the native context (i.e., modules located in **Modules** folder, or one of its subfolders), it can call globally available functions and execute them within the web app's context by invoking the CordovaBrowser widget's [evaluateJavaScript](CordovaBrowser_Methods.md#evaluate) method. The call would look similar to the following example.

```
browserWidget.evaluateJavaScript(“displayAlert(‘Hello World’)”);
```

Security Considerations

Volt MX  Iris recommends that you only enable the `enableNativeCommunication` property for local packaged content, not for dynamically downloaded content.

There is a known security risk on the Android operating system for versions 4.1 (API 16) or earlier. Volt MX Iris highly recommends that you not enable the `enableNativeCommunication` property on any version of Android prior to 4.2 (API 17).

Push Notifications

When using push notifications with the CordovaBrowser widget, your app should never bypass [push notifications](../../../Iris/iris_api_dev_guide/content/push_notifications.md) to use Cordova push notifications. This will cause an error. Always use the push notifications rather than the Cordova push notifications.

