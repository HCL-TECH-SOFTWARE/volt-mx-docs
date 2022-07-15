---
layout: "documentation"
category: "iris_widget_prog_guide"
---
                                  

You are here: Creating a Browser Using a Constructor: voltmx.ui.Browser

Browser Widget
==============

The Browser widget is a container that displays URL content in your application. A Browser widget can also display HTML/ JavaScript content.

Using Browser widget you can view HTML/JavaScript content without navigating away from the application. Browser widgets also allow you to enable third-party cookies, and enable communication to the native platforms for using platform-specific capabilities.

The three key ways to load the content of a Browser widget are as follows:

*   **HTML content**: Load the content of a Browser widget with HTML code by using this method. For example, if you want to load a YouTube URL in your application, you must use the iframe tag to embed it to the HTML script. You can then add this HTML script in the required Browser widget to view the URL.
*   **Javascript file:** Access several JavaScript capabilities that are not supported in Volt MX Iris. You can write your code in a JavaScript file and add it to the Localfiles section of your application. You can then execute the JavaScript content by using a Browser widget. For example, you can use external JavaScript files to capture signatures in your application.
*   **URL:** Use this method when the content that is to be loaded in a Browser widget is susceptible to a lot of changes. You should publish the content to a server and then load that URL to the Browser widget. A perfect example for this is the Terms and Conditions page. As the terms and conditions of an organization are susceptible to a lot of changes, you need not republish your application whenever there is a change in the terms and conditions.

> **_Note:_** In previous versions of iOS applications, Browser widget uses UIWebView class in UIKit framework by default to display its contents. Apple has deprecated UIWebView class and recommends using the WKWebView class in WebKit framework.  
As UIWebView class has been deprecated and its support will be removed from Apple, you must change the Browser Type of Browser widget to WKWebView class.

Widgets are normally added to your application using Volt MX Iris, but can also be added from code. For general information on using widgets in Iris, see [Designing an Application]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Part_II_CreatingAnApplication.html) in the [Iris User Guide]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Introduction.html).

For general information on the Browser widget see the []({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Button.html)[Browser]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Browser.html) topic in the Volt MX Iris User Guide.

> **_Note:_** For a more hands-on approach on the functionality of Browser widget, import and preview the **Browser Feature** sample app by using Volt MX Iris.  
[![](Resources/Images/Download_Button_10_230x35.png)](https://marketplace.hclvoltmx.com/items/browser-feature-app)

The Browser widget capabilities can be broadly categorized into the following:

*   [3D Touch](#3d-touch)
*   [Animations](#animations)
*   [Data Management](#data-management)
*   [Layout](#layout)
*   [Navigation Features](#navigation-features)
*   [User Input Handling](#user-input-handling)
*   [Enabling RTL](#enabling-rtl)
*   [Miscellaneous](#miscellaneous)
*   [Configurations Common To All Widgets](#configurations-common-to-all-widgets)

 

#### 3D Touch

| Methods | Description |
| --- | --- |
| [registerForPeekandPop](Browser_Methods.html#register) | Registers a widget to enable 3D Touch peek and pop gestures. |
| [setOnPeek](Browser_Methods.html#setOnPek) | Sets and overrides the existing onPeekCallback for the widget. |
| [setOnPop](Browser_Methods.html#setOnPop) | Overrides the existing onPopCallback for the widget. |
| [unregisterForPeekandPop](Browser_Methods.html#unregist) | Unregisters a widget from 3D Touch peek and pop gestures. |

 

| Properties | Description |
| --- | --- |
| [enableFocusInTouchMode](Browser_Properties.html#enableFocusInTouchMode) | Enables or disables the Browser widget from scrolling to the top of the device screen. |

#### Animations

| Methods | Description |
| --- | --- |
| [animate](Browser_Methods.html#animate) | Applies an animation to the widget. |

#### Data Management

| Methods | Description |
| --- | --- |
| [clearHistory](Browser_Methods.html#clearHis) | Clears the page history of the specified Browser. |
| [clearCookies](Browser_Methods.html#clearCookies) | Clears the cookies in the storage of the parent app in iOS platform. |
| [clone](Browser_Methods.html#clone) | When this method is used on a container widget, all the widgets inside the container are cloned. |
| [getCookies](Browser_Methods.html#getCookies) | Retrieves cookies from the WKHTTPCookieStore to the parent app in iOS platform. |
| [loadData](Browser_Methods.html#loadData) | Enables you to load the data into the Browser with the provided configuration. |
| [setCookies](Browser_Methods.html#setCookies) | Sets the cookies from WKHTTPCookieStore in the parent app in iOS platform. |
| [setResponse](Browser_Methods.html#setResponse) | Sets credentials that should be sent to the browser widget. |

 

| Properties | Description |
| --- | --- |
| [cacheConfig](Browser_Properties.html#cacheConfig) | Used to configure the cachePolicy and storagePolicy of the cache responses. |
| [clearCanvasBeforeLoading](Browser_Properties.html#clearCanvasBeforeLoading) | Clears the browser's canvas before data is loaded. |
| [shareCookiesInBrowsers](Browser_Properties.html#shareCookiesInBrowsers) | Enables the browsers to share cookies in iOS platform. |
| [SSLValidationBehavior](Browser_Properties.html#SSLValidationBehavior) | Sets the behavior of the SSL validations in iOS platform. |
| [supportedURLSchemes](Browser_Properties.html#supportedURLSchemes) | Provides the strings of the SSL pinning keys which are required to launch application URLs using the Browser widget. |

#### Layout

| Events | Description |
| --- | --- |
| [doLayout](Button_Events.html#doLayout) | Invoked for every widget when the widget position and dimensions are computed. |

 

| Properties | Description |
| --- | --- |
| [anchorPoint](Browser_Properties.html#anchorPo) | Specifies the anchor point of the widget bounds rectangle using the widget's coordinate space. |
| [bottom](Browser_Properties.html#bottom) | Determines the bottom edge of the widget and is measured from the bottom bounds of the parent container. |
| [centerX](Browser_Properties.html#centerX) | Determines the center of a widget measured from the left bounds of the parent container. |
| [centerY](Browser_Properties.html#centerY) | Determines the center of a widget measured from the top bounds of the parent container. |
| [enableZoom](Browser_Properties.html#enableZoom) | Specifies if Zoom (ability to change the scale of the view area) must be enabled. |
| [height](Browser_Properties.html#height) | Determines the height of the widget and measured along the y-axis. |
| [left](Browser_Properties.html#left) | Determines the lower left corner edge of the widget and is measured from the left bounds of the parent container. |
| [maxHeight](Browser_Properties.html#maxHeigh) | Specifies the maximum height of the widget and is applicable only when the height property is not specified. |
| [maxWidth](Browser_Properties.html#maxWidth) | Specifies the maximum width of the widget and is applicable only when the width property is not specified. |
| [minHeight](Browser_Properties.html#minHeigh) | Specifies the minimum height of the widget and is applicable only when the height property is not specified. |
| [minWidth](Browser_Properties.html#minWidth) | Specifies the minimum width of the widget and is applicable only when the width property is not specified. |
| [padding](Browser_Properties.html#padding) | Defines the space between the content of the widget and the widget boundaries. |
| [paddingInPixel](Browser_Properties.html#paddingInPixel) | Indicates if the padding is to be applied in pixels or in percentage. |
| [right](Browser_Properties.html#right) | Determines the lower right corner of the widget and is measured from the right bounds of the parent container. |
| [top](Browser_Properties.html#top) | Determines the top edge of the widget and measured from the top bounds of the parent container. |
| [width](Browser_Properties.html#width) | Determines the width of the widget and is measured along the x-axis. |
| [zIndex](Browser_Properties.html#zIndex) | Specifies the stack order of a widget. |

#### Navigation Features

| Methods | Description |
| --- | --- |
| [canGoBack](Browser_Methods.html#canGoBac) | Specifies whether the browser can navigate back into history. |
| [canGoForward](Browser_Methods.html#canGoFor) | Specifies whether the browser can navigate forward into history. |
| [goBack](Browser_Methods.html#goBack) | Provides you with the ability to navigate one step back in the browser history. |
| [goForward](Browser_Methods.html#goForwar) | Provides you with the ability to navigate one step forward in the browser history. |
| [reload](Browser_Methods.html#reload) | Provides you with the ability to reload the current web page. |

#### User Input Handling

| Events | Description |
| --- | --- |
| [onScrollWidgetPosition](Browser_Events.html#onScrollWidgetPosition) | This event callback is invoked by the platform when the widget location position gets changed on scrolling. |
| [onReachingBegining](Browser_Events.html#onReachingBegining) | Specifies the scrolling events which gets called when scrolling reaches beginning of the widget. |
| [onReachingEnd](Browser_Events.html#onReachingEnd) | Specifies the scrolling events which gets called when scrolling reaches the end of the widget. |

 

| Methods | Description |
| --- | --- |
| [addGestureRecognizer](Browser_Methods.html#addGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |
| [removeGestureRecognizer](Browser_Methods.html#removeGestureRecognizer) | Allows you to remove the specified gesture recognizer for the specified widget. |
| [setGestureRecognizer](Browser_Methods.html#setGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |

 

| Properties | Description |
| --- | --- |
| [enableParentScrollingWhenReachToBoundaries](Browser_Properties.html#enableParent) | Makes the content of the Browser scrollable. |
| [scrollsToTop](Browser_Properties.html#scrollsT) | Enables you to scroll the Browser to top, on tapping a device’s status bar. |

#### Enabling RTL

| Properties | Description |
| --- | --- |
| [retainContentAlignment](Browser_Properties.html#retainContentAlignment) | Helps to retain the content alignment of the widget while applying RTL. |
| [retainFlexPositionProperties](Browser_Properties.html#retainFlexPositionProperties) | Helps to retain the left, right and padding properties while applying RTL. |
| [retainFlowHorizontalAlignment](Browser_Properties.html#retainFlowHorizontalAlignment) | Enables you to change the horizontal flow of the widget from left to right. |

#### Miscellaneous

| Methods | Description |
| --- | --- |
| [evaluateJavaScript](Browser_Methods.html#evaluate) | Accepts a JavaScript snippet in the form of a string. |
| [evaluateJavaScriptAsync](Browser_Methods.html#evaluate2) | Accepts a JavaScript snippet and a callback function as inputs. |
| [getBadge](Browser_Methods.html#getBadge) | Enables you to read the badge value (if any) attached to the specified widget. |
| [getHTMLFilesInWebFolder](Browser_Methods.html#getHTMLFilesInWebFolder) | Retrieves a list of the HTML files of the specified type. |
| [isCordovaAppsEnabled](Browser_Methods.html#isCordovaAppsEnabled) | Retrieves a Boolean value that indicates whether Apache Cordova apps are enabled. |
| [isHtmlPreviewEnabled](Browser_Methods.html#isHtmlPreviewEnabled) | Retrieves a Boolean value that indicates whether your app can open an HTML preview. |
| [isWebAppDevelopmentEnabled](Browser_Methods.html#isWebAppDevelopmentEnabled) | Retrieves a Boolean value indicating whether web app development is enabled in the app. |
| [setBadge](Browser_Methods.html#setBadge) | Enables you to set the badge value to the given widget at the upper, right corner of the widget. |
| [setSafeBrowsingResponse]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Browser_Methods.html#setSafeBrowsingResponse) | Sets an action for a Browser widget, when the onSafeBrowsingHit event is triggered. |

 

| Properties | Description |
| --- | --- |
| [allowsInlineMediaPlayback](Browser_Properties.html#allowsInlineMediaPlayback) | Enables you to play a video inline in a Browser widget . |
| [baseURL](Browser_Properties.html#baseURL) | Used to configure the base URL that is displayed when a browser is rendered. |
| [bounces](Browser_Properties.html#bounces) | Specifies whether the scroll view bounces past the edge of the content and back again. |
| [browserType](Browser_Properties.html#browserType) | Specifies the type of the web view used to load the web pages in iOS applications. |
| [cursorType](Browser_Properties.html#cursorType) | Specifies the type of mouse pointer used. |
| [detectTelNumber](Browser_Properties.html#detectTelNumber) | Specifies if the Browser widget must support the detection of phone numbers in the web page and display the phone numbers as clickable Phone links. |
| [enableOverviewMode](Browser_Properties.html#enableOv) | Specifies whether the browser should load pages in overview mode. |
| [enableNativeCommunication](Browser_Properties.html#enableNativeCommunication) | Enables web apps to access native capabilities from within the web app's JavaScript code. |
| [enableSafeBrowsing]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Browser_Properties.html#enableSafeBrowsing) | Enables or disables the Safe Browsing feature in a Browser widget. |
| [enableSoftwareRendering](Browser_Properties.html#enableSoftwareRendering) | Sets the rendering of the browser contents using software, not hardware. |
| [enableThirdPartyCookies](Browser_Properties.html#enableThirdPartyCookies) | Specifies if third party cookies must be enabled. |
| [.htmlString](Browser_Properties.html#htmlString) | Specifies the HTML content for the Browser widget. |
| [opacity](Browser_Properties.html#opacity) | Specifies the opacity of the widget. |
| [playVideoInFullScreen](Browser_Properties.html#playVideoInFullScreen) | You can use this property to enable Full Screen viewing of videos in webpages in Browser widget. |
| [requestURLConfig](Browser_Properties.html#requestURLConfig) | Specifies the configurations for the requested URL in key-value pairs as a JavaScript object. |
| [screenLevelWidget](Browser_Properties.html#screenLevelWidget) | Specifies whether the widget should occupy the whole container or not when your Browser widget has a large HTML content to display. |
| [showProgressIndicator](Browser_Properties.html#showProg) | Specifies if the progress indicator must be displayed before loading the URL or executing an event. |
| [settings](Browser_Properties.html#settings) | Helps you to configure the Browser Widget settings. |
| [transform](Browser_Properties.html#transform) | Contains an animation transformation that can be used to animate the widget. |
| [useWideViewport](Browser_Properties.html#useWideV) | Specifies whether the browser should enable support for the "viewport" HTML meta tag or should use the wide viewport. |
| [zoomDensity](Browser_Properties.html#zoomDens) | Specifies the default zoom density of the page. |

 

| Events | Description |
| --- | --- |
| [handleRequest](Browser_Events.html#handleRe) | An event callback which gets invoked by the platform before browser widget navigates to a new URL. |
| [onFailure](Browser_Events.html#onFailure) | An event callback which gets invoked by the platform when the given URL fails to load. |
| [onPageFinished](Browser_Events.html#onPageFinished) | Sent when a page is finished loading. |
| [onPageStarted](Browser_Events.html#onPageStarted) | Sent when a page starts loading. |
| [onProgressChanged](Browser_Events.html#onProgressChanged) | Shows you the progress of the page loading in the Browser Widget. |
| [onReceive](Browser_Events.html#onReceive) | Triggered whenever a page is loaded that has an event callback such as digest authentication. |
| [onSafeBrowsingHit]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Browser_Events.html#onSafeBrowsingHit) | Registers a callback that notifies the application that a loading URL has been flagged by Safe Browsing. |
| [onSuccess](Browser_Events.html#onSuccess) | Invoked by the platform when the given request URL is successful in loading the data. |

#### Configurations common to all widgets

| Methods | Description |
| --- | --- |
| [convertPointFromWidget](Browser_Methods.html#convertPointFromWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [convertPointToWidget](Browser_Methods.html#convertPointToWidget) | Using the convertPointToWidget method, you can modify the co-ordinate system. |
| [removeFromParent](Browser_Methods.html#removeFromParent) | Allows you to remove a child widget from a parent widget. |
| [setEnabled](Browser_Methods.html#setEnabled) | Specifies the widget that must be enabled or disabled. |
| [setFocus](Browser_Methods.html#setFocus) | Specifies the widget on which there must be focus. |
| [setVisibility](Browser_Methods.html#setVisibility) | Use this method to set the visibility of the widget. |

 

| Properties | Description |
| --- | --- |
| [accessibilityConfig](Browser_Properties.html#accessibilityConfig) | Enables you to control accessibility behavior and alternative text for the widget. |
| [isVisible](Browser_Properties.html#isVisible) | Controls the visibility of a widget on the form. |
| [enable](Browser_Properties.html#enable) | Allows you to make a widget visible but not actionable. |
| [enableCache](Browser_Properties.html#enableCa) | Enables you to improve the performance of Positional Dimension Animations. |
| [id](Browser_Properties.html#id) | id is a unique identifier of Browser widget consisting of alpha numeric characters. |
| [info](Browser_Properties.html#info) | A custom JSObject with the key value pairs that a developer can use to store the context with the widget. |
| [parent](Browser_Properties.html#parent) | Helps you access the parent of the widget. |

Browser Widget Basics
---------------------

In This Section information on how to program with the Browser Widget.

### Creating a Browser Using a Constructor: voltmx.ui.Browser

You can dynamically create an instance of the Browser widget as follows.

{% highlight voltMx %}
var webtemp = new voltmx.ui.Browser(basicConf, layoutConf, pspConf);
{% endhighlight %}

*   **basicConf** is an object with basic properties.
*   **layoutConf** is an object with layout properties.
*   **pspConf** is an object with platform specific properties.

> **_Note:_** The configuration properties should be passed only in the respective configuration objects otherwise they are ignored

1.  Use the requestURLConfig property to specify the HTML content (static HTML content or a URL), as in the following example.
    
    {% highlight voltMx %}
    var urlConf = {
        URL: "help/index.html",
        requestMethod: constants.BROWSER_REQUEST_METHOD_GET
    };
    
    var webBasic = {
        id: "browserID",
        isVisible: true,
        requestURLConfig: UrlConf
    };
    var webLayout = {
        containerHeight: 100
    };
    var webPsp = {};
    var browserID = new voltmx.ui.Browser(webBasic, webLayout, webPsp);
    frm1.add(browserID);
    {% endhighlight %}
2.  (Optional) If you choose to display HTML content from a URL, specify onfailure and onsuccess Events.
3.  (Optional) You can choose to display a loading screen while the content is being loaded from a URL. For more information about the loading screen, see the _Windows Library_ section of the _API Reference Guide_.
4.  (Optional) On iPhone platform, you can move back and forward through the web page history using the [Browser](Browser_Methods.html) Methods.

### Changing the Text Size through the Larger Text option in iOS

You can now change the text size of Browser widget through the Larger Text option from Settings -> General -> Accessibility -> Larger Text in iOS.

To support this feature, you must implement the 'dynamicTypeList' dictionary in the voltmx.application.setApplicationBehaviors function as follows:

{% highlight voltMx %}
voltmx.application.setApplicationBehaviors({
    dynamicTypeList: {
        enableChangeTextSizeFromAccessibility: true,
        fontTextStyle: constants.FONT_TEXT_STYLE_BODY
    }
});
{% endhighlight %}

Input Parameters

*   enableChangeTextSizeFromAccessibility (BOOL): If set to true, you can change the text size through the Larger Text option from Settings -> General -> Accessibility -> Larger Text in iOS. Otherwise, the text size will not be changed.
    
*   fontTextStyle: This is the font style applied on the Browser widget. If you pass only the enableChangeTextSizeFromAccessibility key-value pair in the dictionary and don’t send the fontTextStyle key-value pair, the default value for fontTextStyle will be constants.FONT\_TEXT\_STYLE\_BODY. The values for fontTextStyle are as follows:
    *   constants.FONT\_TEXT\_STYLE\_BODY
        
    *   constants.FONT\_TEXT\_STYLE\_HEADLINE
        
    *   constants.FONT\_TEXT\_STYLE\_SUBHEADLINE
        
    *   constants.FONT\_TEXT\_STYLE\_FOOTNOTE
        
    *   constants.FONT\_TEXT\_STYLE\_CAPTION1
        
    *   constants.FONT\_TEXT\_STYLE\_CAPTION2
        
    *   constants.FONT\_TEXT\_STYLE\_TITLE1 (available in iOS 9.0 and later)
        
    *   constants.FONT\_TEXT\_STYLE\_TITLE2 (available in iOS 9.0 and later)
        
    *   constants.FONT\_TEXT\_STYLE\_TITLE3 (available in iOS 9.0 and later)
        
    *   constants.FONT\_TEXT\_STYLE\_CALLOUT (available in iOS 9.0 and later)
        
    *   constants.FONT\_TEXT\_STYLE\_LARGETITLE (available in iOS 11.0 and later)

To make the Browser widget compatible with this feature, you must set the font in the css or modify the inline style as follows:

Inline Style

{% highlight voltMx %}
<h1 style=”font:-apple-system-body”>
{% endhighlight %}

In CSS

{% highlight voltMx %}
h1

{font: -apple-system-headline;}
{% endhighlight %}

The following values are supported for the font in the Browser widget:

*   \-apple-system-body
    
*   \-apple-system-headline
    
*   \-apple-system-subheadline
    
*   \-apple-system-caption1
    
*   \-apple-system-caption2
    
*   \-apple-system-footnote
    
*   \-apple-system-short-body
    
*   \-apple-system-short-headline
    
*   \-apple-system-short-subheadline
    
*   \-apple-system-short-caption1
    
*   \-apple-system-short-footnote
    
*   \-apple-system-tall-body
    

Platform Availability

*   iOS

Limitations

*   If you enable this feature, the font size and font family from the respective skin is not respected.
    
*   This feature is available only in iOS.
    

### Accessing Native Functionality

For security reasons it is important that web apps in the Browser widget do not have access to native capabilities by default. Therefore, when your app starts, this access is disabled. However, you can enable it by setting the Browser widget's [enableNativeCommunication](Browser_Properties.html#enableNativeCommunication) property. Your app can only set this property in the Browser widget's constructor. After the constructor executes, this property is read-only.

Executing JavaScript in the Native Context

If your app sets the `enableNativeCommunication` property to `true` when it starts, then your app can call the [voltmx.evaluateJavaScriptInNativeContext]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx_functions.html#evaluateJavaScript) API to execute JavaScript functions within the context of your web app's JavaScript modules.

JavaScript modules within your web app are the JavaScript modules in the **LocalFiles** folder, or one of its subfolders.

Your app can also include JavaScript modules that are executed in the native context. These modules are located in the **Modules** folder in your project, or one of its subfolders. JavaScript modules in the **Modules** folder generally contain event handlers for form events, functions to help process application data. So your app can be a hybrid app that uses widgets, JavaScript, and other Volt MX Iris capabilities together with bundled web content that is hosted in a Browser widget.

If your app is a hybrid app that contains JavaScript modules that are executed in the native context (i.e., modules located in **Modules** folder, or one of its subfolders), it can call globally available functions and execute them within the web app's context by invoking the Browser widget's [evaluateJavaScript](Browser_Methods.html#evaluate) method. The call would look similar to the following example.

{% highlight voltMx %}browserWidget.evaluateJavaScript("displayAlert(‘Hello World’)");  

{% endhighlight %}

Security Considerations

Volt MX  Iris recommends that you only enable the `enableNativeCommunication` property for local packaged content, not for dynamically downloaded content.

There is a known security risk on the Android operating system for versions 4.1 (API 16) or earlier. Volt MX Iris highly recommends that you not enable the `enableNativeCommunication` property on any version of Android prior to 4.2 (API 17).

Push Notifications

When using push notifications with the Browser widget, your app should never bypass [push notifications]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/push_notifications.html) to use Cordova push notifications. This will cause an error. Always use the push notifications rather than the Cordova push notifications.

### Important Considerations

The Browser widget has the following important considerations:

*   On iOS and Android platforms, when the Browser widget is set as non-screen level widget and you keep some widgets before browser and after browser then double scrolling issue will be seen which is native iOS issue. You should use the browser widget as screen level widget and move other widgets to header or footer of the form.
*   The Browser widget, unlike other widgets, is considered to be "heavy" widget as far as memory and performance is considered.
*   The Browser widget uses a lot of initial RAM. The RAM usage grows in proportion to the number of images and static text rendered.
*   If there are multiple instances of the Browser widget in the same application, there may be issues related to sharing of information. For example, cookies etc.
*   You must not place multiple Browser widgets in a screen. As a guideline, you must not have more than two Browser widgets in an application.
*   You must _not_ use the Browser widget as a RichText widget. It should only be used to display large HTML content.
*   You must avoid using the Browser widget to create an application which looks and behaves like a mini web browser. Users normally expect to use the native browser to browse web content. Replicating this functionality within your application is not recommended.
*   On Android, for 4.2 and below the browser widget does not clip correctly to the bounds of a parent flex container with rounded edges. This is a native Android limitation. Clipping works correctly in API Level 18(4.3 and above).
*   On SPA platform, <script> tag is not supported.
*   On SPA (Windows) platform, content is rendered using a URL, opening a new tab is not technically possible. It opens in the current tab itself.

### i18N Keys

The Android platform has introduced a set of i18N keys to configure the Geo Location Alert as per the end-user's choice. The following are the platform-defined i18N keys with default values. You can override the default values.

*   GEO\_LOCATION\_ALERT\_TITLE ="Location"
*   GEO\_LOCATION\_ALERT\_DESCRIPTION = URL + " wants to know your location"
*   GEO\_LOCATION\_ALERT\_REMEMBER =" Remember Preference"
*   GEO\_LOCATION\_ALERT\_ACCEPT ="Show Location"
*   GEO\_LOCATION\_ALERT\_DECLINE ="Decline"

Type

String

Read/Write

Read + Write

Example

{% highlight voltMx %}voltmx.i18n.updateResourceBundle({
        "platform.web.geolocation.alert.description": "SpanishDescription",
        "platform.web.geolocation.alert.accept": "SpanishAccept",
        "platform.web.geolocation.alert.decline": "SpanishDecline",
        "platform.web.geolocation.alert.title ": "",
        "SpanishTitle ": "",
        "platform.web.geolocation.alert.remember": "SpanishRemember"
    },

    "es_US"
);  

{% endhighlight %}

Accessible from IDE

Yes

Platform Availability

Android

