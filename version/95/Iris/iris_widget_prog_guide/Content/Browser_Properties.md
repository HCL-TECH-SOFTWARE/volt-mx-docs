                                 


## <a id="browser-properties"></a> Browser Properties


The properties for Browser widget are as follows:

* * *


<details close markdown="block"><summary>accessibilityConfig Property</summary>

* * *

Enables you to control accessibility behavior and alternative text for the widget.

For more information on using accessibility features in your app, see the [Accessibility](../../../Iris/app_design_dev/Content/Accessibility_Overview.md) appendix in the Volt MX IrisUser Guide.

### Syntax

accessibilityConfig

### Type

Object

### Read/Write

Read + Write

### Remarks

*   The accessibilityConfig property is enabled for all the widgets which are supported under the Flex Layout.

> **_Note:_** From Volt MX Iris V9 SP2 GA version, you can provide i18n keys as values to all the attributes used inside the `accessibilityConfig` property. Values provided in the i18n keys take precedence over values provided in `a11yLabel`, `a11yValue`, and `a11yHint` fields.

The accessibilityConfig property is a JavaScript object which can contain the following key-value pairs.

  
| Key | Type | Description | ARIA Equivalent |
| --- | --- | --- | --- |
| a11yIndex | Integer with no floating or decimal number. | This is an optional parameter. Specifies the order in which the widgets are focused on a screen. | For all widgets, this parameter maps to the `aria-index`, `index`, or `taborder` properties. |
| a11yLabel | String | This is an optional parameter. Specifies alternate text to identify the widget. Generally the label should be the text that is displayed on the screen. | For all widgets, this parameter maps to the `aria-labelledby` property of ARIA in HTML. > **_Note:_** For the Image widget, this parameter maps to the **alt** attribute of ARIA in HTML. |
| a11yValue | String | This is an optional parameter. Specifies the descriptive text that explains the action associated with the widget. On the Android platform, the text specified for a11yValue is prefixed to the a11yHint. | This parameter is similar to the a11yLabel parameter. If the a11yValue is defined, the value of a11yValue is appended to the value of a11yLabel. These values are separated by a space. |
| a11yHint | String | This is an optional parameter. Specifies the descriptive text that explains the action associated with the widget. On the Android platform, the text specified for a11yValue is prefixed to the a11yHint. | For all widgets, this parameter maps to the `aria-describedby` property of ARIA in HTML. |
| a11yHidden | Boolean | This is an optional parameter. Specifies if the widget should be ignored by assistive technology. The default option is set to _false_. This option is supported on iOS 5.0 and above, Android 4.1 and above, and SPA | For all widgets, this parameter maps to the `aria-hidden` property of ARIA in HTML. |
| a11yARIA | Object | This is an optional parameter. For each widget, the key and value provided in this object are added as the attribute and value of the HTML tags respectively. Any values provided for attributes such as `aria-labelledby` and `aria-describedby` using this attribute, takes precedence over values given in `a11yLabel` and `a11yHint` fields. When a widget is provided with the following key value pair or attribute using the a11yARIA object, the tabIndex of the widget is automatically appended as zero.`{"role": "main"}``aria-label` | This parameter is only available on the Desktop Web platform. |

### Android limitations

*   If the results of the concatenation of a11y fields result in an empty string, then `accessibilityConfig` is ignored and the text that is on widget is read out.
*   The soft keypad does not gain accessibility focus during the right/left swipe gesture when the keypad appears.

### SPA/Desktop Web limitations

*   When `accessibilityConfig` property is configured for any widget, the `tabIndex` attribute is added automatically to the `accessibilityConfig` property.
*   The behavior of accessibility depends on the Web browser, Web browser version, Voice Over Assistant, and Voice Over Assistant version.
*   Currently SPA/Desktop web applications support only a few ARIA tags. To achieve more accessibility features, use the attribute a11yARIA. The corresponding tags will be added to the DOM as per these configurations.

### Example 1

This example uses the button widget, but the principle remains the same for all widgets that have an accessibilityConfig property.

```

//This is a generic property that is applicable for various widgets.
//Here, we have shown how to use the accessibilityConfig Property for button widget.
/*You need to make a corresponding use of the accessibilityConfig property for other applicable widgets.*/

Form1.myButton.accessibilityConfig = {
    "a11yLabel": "Label",
    "a11yValue": "Value",
    "a11yHint": "Hint"    
};
```

### Example 2

This example uses the button widget to implement internationalization in `accessibilityConfig` property, but the principle remains the same for all widgets.

```

/*Sample code to implement internationalization in accessibilityConfig property in Native platform.*/

Form1.myButton.accessibilityConfig = {
    "a11yLabel": voltmx.i18n.getLocalizedString("key1")     
};  
/*Sample code to implement internationalization in accessibilityConfig property in Desktop Web platform.*/

Form1.myButton.accessibilityConfig = {
    "a11yLabel": "voltmx.i18n.getLocalizedString(\"key3\")"
};
```

### Platform Availability

*   Available in the IDE
*   iOS, Android, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>allowsInlineMediaPlayback Property</summary>

* * *

This property enables you to play a video inline in a Browser widget .

### Syntax

allowsInlineMediaPlayback

### Type

Boolean

### Read/Write

Read-only for WKWebView.

### Remarks

The default value of this property is false.

When you set the value of this property as true, the video in the Browser does not open on another screen. The video is played on the same screen.

To ensure that this property works for devices with iOS 10 and later, add the **playsinline** attribute to the video element inside the HTML document. For applications created for OS versions earlier than iOS 10, add the **webkit-playsinline** attribute to the video element in the HTML document.

### Example

Sample HTML document for iOS 10 and later:

```

<!DOCTYPE.html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

<video width="400" controls playsinline>
<source src="mov_bbb.mp4" type="video/mp4">
<source src="mov_bbb.ogg" type="video/ogg">

</video>

</body>
<html>
```

Sample HTML Document for devices earlier than iOS 10

```

<!DOCTYPE.html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

<video width="400" controls webkit-playsinline>
<source src="mov_bbb.mp4" type="video/mp4">
<source src="mov_bbb.ogg" type="video/ogg">

</video>

<p>
Video courtesy of
<a href="https://www.bigbuckbunny.org/" target="_blank">Big Buck Bunny</a>.
</p>

</body>
<html>
```
```

frmBrowser.myBrowser.allowsInlineMediaPlayback = true;
```

Platform Availability

*   Available on iOS platform only

* * *

</details>
<details close markdown="block"><summary>anchorPoint Property</summary>

* * *

Specifies the anchor point of the widget bounds rectangle using the widget's coordinate space.

### Syntax

anchorPoint

### Type

JSObject

### Read/Write

Read + Write

### Remarks

The value for this property is a JavaScript dictionary object with the keys "x" and "y". The values for the "x" and "y" keys are floating-point numbers ranging from 0 to 1. All geometric manipulations to the widget occur about the specified point. For example, applying a rotation transform to a widget with the default anchor point causes the widget to rotate around its center.

The default value for this property is center ( {"x":0.5, "y":0.5} ), that represents the center of the widgets bounds rectangle. The behavior is undefined if the values are outside the range zero (0) to one (1).

### Example

```

Form1.widget1.anchorPoint = {
    "x": 0.5,
    "y": 0.5
};
```

Platform Availability

*   iOS, Android, Windows, and SPA

* * *

</details>
<details close markdown="block"><summary>baseURL Property</summary>

* * *

This property is used to configure the base URL and load a resource file in a Browser widget.

### Syntax

baseURL

### Type

String

### Read/Write

Read + Write

### Remarks

The default value for this property is about:blank.

> **_Note:_** From Iris V8 SP4 onwards, you cannot provide an empty string to access the root folder. You must provide the value, "." , to access the root folder. Here is an example of the code  

frmBrowser.myBrowser.baseURL = ".";

This property is mandatory for loading a resource file inside a browser widget. The resource file can be an image file, audio file, video file or another HTML file.

### Example

```

//Sample code to access a base URL in Browser widget.  
frmBrowser.myBrowser.baseURL="http://www.abcd.com";  
  
/*Sample code to access a resource file in a browser widget, when it is packaged in an application.*/  
frmBrowser.myBrowser.baseURL = voltmx.io.FileSystem.getApplicationDirectoryPath();  

```

### Platform Availability

*   Available in the IDE
*   iOS

* * *

</details>
<details close markdown="block"><summary>bottom Property</summary>

* * *

This property determines the bottom edge of the widget and is measured from the bottom bounds of the parent container.

The bottom property determines the position of the bottom edge of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. In freeform layout, the distance is measured from the bottom edge of the parent container. In flow-vertical layout, the value is ignored. In flow-horizontal layout, the value is ignored.

The bottom property is used only if the Height property is not provided.

### Syntax

bottom

### Type

String

### Read/Write

Read + Write

### Remarks

The property determines the bottom edge of the widget and is measured from the bottom bounds of the parent container.

If the layoutType is set as voltmx.flex.FLOW\_VERTICAL, the bottom property is measured from the top edge of bottom sibling widget. The vertical space between two widgets is measured from bottom of the top sibling widget and the top of the bottom sibling widget.

### Example

```

//Sample code to set the bottom property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.bottom = "50dp";

frmHome.widgetID.bottom = "10%";

frmHome.widgetID.bottom = "10px";
```

### Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA , and Desktop Web

* * *

</details>
<details close markdown="block"><summary>bounces Property</summary>

* * *

Specifies whether the scroll view bounces past the edge of the content and back again.

### Syntax

bounces

### Type

Boolean

The default value for this property is true.

If set to _false,_ the scroll view bounce is not applied.

If set to _true,_ the scroll view bounce is applied.

### Example

```

//Sample code to enable bounces property for a Browser widget.
frmBrowser.myBrowser.bounces=true;
```

### Platform Availability

*   Available in the IDE
*   iOS

* * *

</details>
<details close markdown="block"><summary>browserType Property</summary>

* * *

The `browserType` property helps you to set the type of web view that you want to load the web pages in your application.

### Syntax

browserType

### Type

Constant

You can set the following value to this property.

*   constants.BROWSER\_TYPE\_WKWEBVIEW: This is the default value of this property.

### Read/Write

Read + Write

### Example

```

/*Sample code to set the browserType property in myBrowser Browser widget in frmBrowser form.*/  
frmBrowser.myBrowser.browserType=constants.BROWSER_TYPE_WKWebView;
```

### Platform Availability

*   Available in IDE
*   iOS

* * *

</details>
<details close markdown="block"><summary>cacheConfig Property</summary>

* * *

This property is used to configure the cachePolicy and storagePolicy of the cache responses for the request at the app level.

### Syntax

CacheConfig

### Type

Dictionary

### Read / Write

Read + Write

### Input Parameters

| Parameter | Description |
| --- | --- |
| cacheConfig(JSDictionary) | The cacheConfig is a dictionary which configures the **cachePolicy** and **storagePolicy** of the cache responses. cacheConfig Constants The cache config has the following constantsfor **cachePolicy**: **voltmx.net.cache.USE\_PROTOCOL\_CACHE\_POLICY**: Specifies that the caching logic defined in the protocol implementation, if any, is used for a particular URL load request. This is the default policy for URL load requests. **voltmx.net.cache.RELOAD\_IGNORING\_LOCAL\_CACHE\_DATA**: Specifies that the data for the URL should be loaded from the originating source. No existing cache data should be used to satisfy a URL load request. **voltmx.net.cache.RETURN\_CACHE\_DATA\_ELSE\_LOAD**: Specifies that the existing cached data should be used to satisfy the request, regardless of its age or expiration date. If there is no existing data in the cache corresponding the request, the data is loaded from the originating source. **voltmx.net.cache.RETURN\_CACHE\_DATA\_DONT\_LOAD**: Specifies that the existing cached data should be used to satisfy the request, regardless of its age or expiration date. If there is no existing data in the cache corresponding the request, the data is not loaded from the originating source. The cache config has the following constantsfor **storagePolicy**: **voltmx.net.cache.DISK\_AND\_MEMORY**: The response stored in disk and memory. **voltmx.net.cache.MEMORY\_ONLY**: The response stored in memory only. **voltmx.net.cache.NOT\_ALLOWED**: The response stored neither in the memory nor on the disk.   |

### Example

```

//Sample code to add cacheConfig proerty to the browser widget
frmBrowser.myBrowser.cacheConfig = {
  cachePolicy: voltmx.net.cache.RELOAD_IGNORING_LOCAL_CACHE_DATA,
  cacheStoragePolicy: voltmx.net.cache.MEMORY_ONLY
}
```

### Platform Availability

iOS

* * *

</details>
<details close markdown="block"><summary>centerX Property</summary>

* * *

This property determines the center of a widget measured from the left bounds of the parent container.

The centerX property determines the horizontal center of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. In freeform layout, the distance is measured from the left edge of the parent container. In flow-vertical layout, the distance is measured from the left edge of the parent container. In flow-horizontal layout, the distance is measured from the right edge of the previous sibling widget in the hierarchy.

### Syntax

centerX

### Type

String

### Read/Write

Read + Write

### Remarks

If the layoutType is set as voltmx.flex.FLOW\_HORIZONTAL, the centerX property is measured from right edge of the left sibling widget.

### Example

```

//Sample code to set the centerX property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.centerX = "50dp";

frmHome.widgetID.centerX = "10%";

frmHome.widgetID.centerX = "10px";
```

### Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>centerY Property</summary>

* * *

This property determines the center of a widget measured from the top bounds of the parent container.

The centerY property determines the vertical center of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. In freeform layout, the distance is measured from the top edge of the parent container. In flow-horizontal layout, the distance is measured from the top edge of the parent container. In flow-vertical layout, the distance is measured from the bottom edge of the previous sibling widget in the hierarchy.

### Syntax

centerY

### Type

String

### Read/Write

Read + Write

### Remarks

If the layoutType is set as voltmx.flex.FLOW\_VERTICAL, the centerY property is measured from bottom edge of the top sibling widget.

### Example

```

//Sample code to set the centerY property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.centerY = "50dp";

frmHome.widgetID.centerY = "10%";

frmHome.widgetID.centerY = "10px";
```

### Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>clearCanvasBeforeLoading Property</summary> 

* * *

Clears the browser's canvas before data is loaded.

### Syntax

clearCanvasBeforeLoading

### Type

Boolean

### Read/Write

Read+Write

### Remarks

If this property is set to `true`, the browser widget will clear its canvas before it loads data. If it is `false`, it will not clear the canvas.

### Example

```

//Sample code to disable clearCanvasBeforeLoading property in Browser widget.  
frmBrowser.myBrowser.clearCanvasBeforeLoading=false;  

```

### Platform Availability

*   Android

* * *

</details>
<details close markdown="block"><summary>cursorType Property</summary>

* * *

In Desktop Web applications, when you hover the mouse over any widget, a mouse pointer appears. Using the cursorType property in Iris, you can specify the type of the mouse pointer.

### Syntax

cursorType

### Type

String.

You must provide valid CSS cursor value such as wait, grab, help, etc. to the cursorType property.

### Read/Write

Read + Write

### Remarks

To add the `cursorType` property using Volt MX Iris in a Desktop Web application, follow these steps.

1.  In Volt MX Iris, open the Desktop Web application. From the **Project** explorer, expand **Responsive Web/ Desktop**\> **Forms** and select the form to which you need to make the changes.
2.  On the canvas, select the widget for which you want to specify the cursor type. For example, button.
3.  From the **Properties** panel, navigate to the **Skin** tab > **Hover Skin** tab.  
    You will find that the details of the hover skin is not enabled here.
4.  Check the **Enable** option to add a hover skin to your widget.  
    The details and configurations of the hover skin is enabled.
5.  Under the **General** section, for the Platform option, click the ellipsis icon.  
    The **Fork Skin** window appears.
6.  In the **Fork Skin** window, for **Desktop**, check under **HTML5 SPA**.
7.  Click **Ok**. You have successfully forked your hover skin for Desktop Web application.  
    You can see that the **Cursor Type** property has been added under the **General** section.
8.  Select a value from the drop-down list to set the **Cursor Type** for the widget.

### Example

```

//This is a generic property and is applicable for many widgets.  
  
/*The example provided is for the Button widget. Make the required changes in the example while using other widgets.*/
  
frmButton.myButton.cursorType = "wait";

```

### Platform Availability

*   Available in IDE
*   Desktop Web

* * *

</details>
<details close markdown="block"><summary>customUserAgent Property</summary>

* * *

This property is used to set a custom user agent string for your browser widget.

### Syntax

customUserAgent

### Type

String

### Read/Write

Read + Write

### Remarks

If customUserAgent is not set for browser widget or is set to _null_, the default value is set by platform.
The default value for this property is _null_.

### Example

```
//Sample code to set customUserAgent in Browser widget.  
frmBrowser.myBrowser.customUserAgent = "VoltMX-Custom-User-Agent/1.0";  
```

### Platform Availability

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>detectTelNumber Property</summary>

* * *

Specifies if the Browser widget must support the detection of phone numbers in the web page and display the phone numbers as clickable Phone links. If you click the Phone link, the Phone application launches and dials the number.

### Syntax

detectTelNumber

### Type

Boolean

### Read/Write

Read + Write

### Remarks

The default value for this property is true.

If set to _false_, the Browser does not detect the Phone numbers.

If set to _true_, the Browser detects the phone numbers and displays them as links on the Phone.

### Example

```

//Sample code to enable detectTelNumber property in Browser widget.  
frmBrowser.myBrowser.detectTelNumber=true;  

```

### Platform Availability

*   Available in the IDE
*   Available on all platforms

* * *

</details>
<details close markdown="block"><summary>enable Property</summary>

* * *

The `enable` property is used to control the actionability of the widgets. In a scenario where you want to display a widget but not invoke any action on the widget, configure the `enable` property to false to achieve it.

This is a constructor level property and applicable for all widgets in Volt MX Iris.

### Syntax

enable

### Type

Boolean

### Read/Write

Read + Write

### Remarks

The default value of this property is true.

When `enable` property is configured to true, the action associated with a widget can be invoked by the user in the application.

When `enable` property is configured to false, the action associated with a widget cannot be invoked by the user in the application.

### Example

```

//This is a generic property and is applicable for many widgets.  
  
/*The example provided is for the Button widget. Make the changes required in the example while using other widgets.*/
  
frmButton.myBtn.enable= true;
```

### Platform Availability

*   Android, iOS, Windows, SPA, and Desktop web

 

* * *

</details>
<details close markdown="block"><summary>enableCache Property</summary>

* * *

The property enables you to improve the performance of Positional Dimension Animations.

### Syntax

enableCache

### Type

Boolean

### Read/Write

Read + Write

### Remarks

The default value for this property is true.

> **_Note:_** When the property is used, application consumes more memory. The usage of the property enables tradeoff between performance and visual quality of the content. Use the property cautiously.

### Example

```

Form1.widgetID.enableCache = true;
```

### Platform Availability

*   Available in the IDE.
*   Windows
*   Android (Not available in IDE)

* * *

</details>
<details close markdown="block"><summary>enableFocusInTouchMode Property</summary>

* * *

This property is applicable in Android native platform, when a Browser or a CordovaBrowser widget appears in the middle of mobile device screen. When the user touches the Browser or CordovaBrowser widget, the screen scrolls up, and moves the widget to the top of the screen.  
When `enableFocusInTouchMode` property is configured to _false_, the widget will not move to the top of the screen. When configured to _true_, the widget will move to the top of the screen.

This property is applicable only for Browser and CordovaBrowser widgets.

### Syntax

enableFocusInTouchMode

### Type

Boolean

### Read/Write

Read + Write

### Example

```

//This property is applicable for Browser and CordovaBrowser widgets.

/*This example demonstrates how to use enableFocusInTouchMode property by using myBrowser Browser widget in frmBrowser FlexForm. You need to use enableFocusInTouchMode property for CordovaBrowser widget in a similar manner.*/

frmBrowser.myBrowser.enableFocusInTouchMode= false;

```

### Platform Availability

*   Android
    

 

* * *

</details>
<details close markdown="block"><summary>enableNativeCommunication Property</summary> 

* * *

Enables web apps to access Volt MX Iris native capabilities from within the web app's JavaScript code.

### Syntax

enableNativeCommunication

### Type

Boolean

### Read/Write

Read only

### Remarks

By default, this property is set `false`. Your app can only set this property in the Browser widget's constructor. After the constructor executes, this property is read-only.

### Example

```

//This property is applicable for Browser and CordovaBrowser widgets.

/*This example demonstrates how to use enableNativeCommunication property by using myBrowser Browser widget in frmBrowser FlexForm. You need to use enableNativeCommunication property for CordovaBrowser widget in a similar manner.*/  
FrmBrowser.myBrowser.enableNativeCommunication = true;
```

### Platform Availability

*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>enableOverviewMode Property</summary>

* * *

Specifies whether the browser should load pages in overview mode. For example, zoom out the content to fit in the screen width.

### Syntax

enableOverviewMode

### Type

Boolean

### Read/Write

Write only

### Remarks

The default value for this property is false.

To use this property, you must set useWideViewport property and screenLevelWidget property to true, else the behavior is undefined.

### Example

```

//Sample code to enable enableOverviewMode property in Browser widget.  
frmBrowser.myBrowser.enableOverviewMode=true;  

```

### Platform Availability

Available on Android 8

* * *

</details>
<details close markdown="block"><summary>enableParentScrollingWhenReachToBoundaries Property</summary>

* * *

Makes the content of the Browser scrollable.

### Syntax

enableParentScrollingWhenReachToBoundaries

### Type

Boolean

### Read/Write

Read+Write

### Remarks

This is a non-Constructor property.

Default value of this property is **true**.

You must set this property as false to make the Browser content scrollable. For example, if a Browser has PDF content in it, you must set this property as false to make the content scrollable.

Limitation

If a Browser has a scrollable parent, the parent cannot be scrolled further once you reach the end of the Browser. Touch the parent to scroll it. This limitation is applicable when you set this property to **false**.

### Example

```

formHome.browser.enableParentScrollingWhenReachToBoundaries = false;
```

### Platform Availability

*   Android

* * *

</details>
<details close markdown="block"><summary>enableSafeBrowsing Property</summary>

* * *

This property helps you to enable or disable the Safe Browsing feature in a _Browser_ widget.

### Syntax

enableSafeBrowsing

### Type

Boolean

### Read/Write

Read+Write

### Remarks

*   The default value of this property is _true_.
*   Safe Browsing is available by default on devices with WebView version 66 and later (Android 5.0 and later).
*   Safe Browsing protects the browser/Webview against malware and phishing attacks. In Volt MX Iris, you can use the **enableSafeBrowsing** property to enable and disable this feature in the _Browser_ widget.

> **_Note:_** Android Apps where the **target SDK** has been set less than Android 8 (API level 26), cannot use **enableSafeBrowsing** Property. Such apps should add the following manifest tag to enable Safe Browsing. To add the tag go to Project Settings>Native>Android>Tags>**Child Tag Entries under<manifest> tag** and provide the following code.  
  
`<meta-data android:name="android.webkit.WebView.EnableSafeBrowsing" android:value="true" />`  
  
This manifest tag is also helpful if you have multiple Browser widgets in your application. However, this tag has lower precedence over enableSafeBrowsing Property.  

### Example

```

//Sample code to enable enableSafeBrowsing property in Browser widget.  
frmBrowser.myBrowser.enableSafeBrowsing=true;  

```

### Platform Availability

*   Android(API Level 26 and later)

* * *

</details>
<details close markdown="block"><summary>enableSoftwareRendering Property</summary>

* * *

Sets the rendering of the browser contents using software, not hardware.

### Syntax

enableSoftwareRendering

### Type

Boolean

### Read/Write

Read + Write

### Remarks

The default value for this property is false.

This property is only supported on Android. By default the Browser contents on Android devices is rendered by the hardware rendering layer. In a few devices, hardware rendering of the Browser widget may fail under low memory situations leading to blank area in the Browser widget’s space on screen.

To handle this issue, the browser rendering can be moved from hardware to software which ensures that the Browser widget is always displayed properly.

If you configure the enableSoftwareRendering property value as True, the Browser widget refresh rate decreases. The decrease in the Browser widget refresh rate will impact the refresh rate of animations, GIFs, and videos in the browser.

### Example

```

formHome.browser.enableSoftwareRendering = true;
```

### Platform Availability

*   Android

* * *

</details>
<details close markdown="block"><summary>enableThirdPartyCookies Property</summary>

* * *

Specifies if third party cookies must be enabled.

### Syntax

enableThirdPartyCookies

### Type

Boolean

### Read/Write

Read + Write

### Example

```

formHome.browser.enableThirdPartyCookies = true;
```

### Platform Availability

*   Android

* * *

</details>
<details close markdown="block"><summary>enableZoom Property</summary>

* * *

Specifies if Zoom (ability to change the scale of the view area) must be enabled.

### Syntax

enableZoom

### Type

Boolean

### Read/Write

Read + Write

### Remarks

The default value for this property is false.

If set to _true_, the Zoom feature is enabled.

If set to _false_, the Zoom feature is disabled.

### Example

```

//Sample code to enable enableZoom property in Browser widget.  
frmBrowser.myBrowser.enableZoom=true;  

```

### Platform Availability

*   Available in the IDE
*   Available on all platforms except Windows platform

* * *

</details>
<details close markdown="block"><summary>height Property</summary>

* * *

It determines the height of the widget and measured along the y-axis.

The height property determines the height of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. For supported widgets, the height may be derived from either the widget or container’s contents by setting the height to “preferred”.

### Syntax

height

### Type

Number, String, and Constant

### Read/Write

Read + Write

### Remarks

Following are the available measurement options:

*   %: Specifies the values in percentage relative to the parent dimensions.
*   px: Specifies the values in terms of device hardware pixels.
*   dp: Specifies the values in terms of device independent pixels.
*   default: Specifies the default value of the widget.
*   voltmx.flex.USE\_PREFERED\_SIZE: When this option is specified, the layout uses preferred height of the widget as height and preferred size of the widget is determined by the widget and may varies between platforms.

### Example

```

//Sample code to set the height property for widgets by using DP, Percentage and Pixels.
frmHome.browser1.height="50dp";

frmHome.browser1. height="10%";

frmHome.browser1. height="10px";
```

### Platform Availability

*   Available in the IDE
*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary id="htmlString">htmlString Property</summary>

* * *

Specifies the HTML content for the Browser widget.

### Syntax

`htmlString`

### Type

String

### Read/Write

Read + Write

### Remarks

In Desktop Web platform, the `htmlString` property accepts any tag that is allowed inside the `body` tag. For example, you cannot provide the `title` tag inside the `htmlString` property as the `title` tag is allowed only inside the `head` tag of HTML document.

### Example 1

```

/*Sample code to set htmlString property in Browser widget for Desktop Web platform.*/
var htmlStringWelcome= "<h1>Welcome</h1>";
frmBrowser.myBrowser.htmlString=htmlStringWelcome;
```

### Example 2

```

/*Sample code to set htmlString property in Browser widget for all other platforms.*/
var htmlWelcome= "<html><head><body><h1>Welcome</h1></body></head></html>";
frmBrowser.myBrowser.htmlString=htmlWelcome;
```


### Platform Availability

*   Available on all platforms

* * *

</details>
<details close markdown="block"><summary>id Property</summary>

* * *

id is a unique identifier of Browser widget consisting of alpha numeric characters. Every Browser should have a unique id within a Form.

### Syntax

id

### Type

String

### Read/Write

Read only

### Example

```

//Defining the properties for a Browser widget with id :"browserID"
var webBasic = {
    id: "browserID",
    isVisible: true,
    screenLevelWidget: false
};

var webLayout = {
    containerWeight: 100
};

//Creating the Browser.
var browser = new voltmx.ui.Browser(webBasic, webLayout, {});

//Reading the id of the Browser
alert("Browser id ::" + browser.id);
```

### Platform Availability

*   Available in the IDE
*   Available on all platforms

* * *

</details>
<details close markdown="block"><summary>info Property</summary>

* * *

A custom JSObject with the key value pairs that a developer can use to store the context with the widget. This will help in avoiding the globals to most part of the programming.

### Syntax

info

### Type

JSObject

### Read/Write

Read + Write

### Remarks

This is a **non-Constructor** property. You cannot set this property through widget constructor. But you can read and write data to it.

Info property can hold any JSObject. After assigning the JSObject to info property, the JSObject should not be modified. For example,

```

var inf = {a: 'hello'};
widget.info = inf; //works
widget.info.a = 'hello world'; //This will not update the widget info a property to Hello world. 
//widget.info.a will have old value as hello.
```

### Example

```

//Sample code to set info property for a Browser widget

frmBrowser.myBrowser.info = {
    key: "zoom of browser"
};

//Reading the info of the Browser widget.
voltmx.print("Browser info ::" + frmBrowser.myBrowser.info);
```

### Platform Availability

*   Available on all platforms

* * *

* * *

</details>
<details close markdown="block"><summary>isPopUpBlockEnabled Property</summary>

* * *

This property indicates whether pop-ups invoked by the Window.open() API are blocked in the WKWebView browser.

### Syntax

isPopUpBlockEnabled

### Type

Boolean

### Read/Write

Read + Write

### Remarks

*   If the value is set to true, the pop-up web page that is invoked by the Window.open() API is blocked and does not open.
*   If the value is set to false, the pop-up web page opens in the same browser window, invoked by an event of the Window.open() API.
*   The default value for this property is false.
*   When the Window.close() API is invoked, the page navigates back to the space that the pop-up event was triggered from.


### Example

```

// Sample Code to block pop-ups
var browser0 \= new voltmx.ui.Browser({
"isPopUpBlockEnabled": true
)};
```

### Platform Availability

*   Available on the iOS platform
 

* * *

</details>
<details close markdown="block"><summary>isVisible Property</summary>

* * *

This property controls the visibility of a widget on the form.

### Syntax

isVisible

### Type

Boolean

### Read/Write

Read + Write

### Remarks

The default value for this property is true.

If set to _false,_ the widget is not displayed.

If set to _true,_ the widget is displayed.

You can also set the visibility of a widget dynamically from code using the setVisibility method.

### Example

```

//Sample code to set isVisible property for a Browser widget
frmBrowser.myBrowser.isVisible=true;
```

### Platform Availability

*   Available in the IDE
*   Available on all platforms

* * *

</details>
<details close markdown="block"><summary>left Property</summary>

* * *

This property determines the lower left corner edge of the widget and is measured from the left bounds of the parent container.

The left property determines the position of the left edge of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. In freeform layout, the distance is measured from the left edge of the parent container. In flow-vertical layout, the distance is measured from the left edge of the parent container. In flow-horizontal layout, the distance is measured from the right edge of the previous sibling widget in the hierarchy.

### Syntax

left

### Type

String

### Read/Write

Read + Write

### Remarks

If the layoutType is set as voltmx.flex.FLOW\_HORIZONTAL, the left property is measured from right edge of the left sibling widget.

### Example

```

//Sample code to set the left property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.left = "50dp";

frmHome.widgetID.left = "10%";

frmHome.widgetID.left = "10px";
```

### Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>limitsNavigationsToAppBoundDomains Property</summary>

* * *

The iOS App-Bound Domains feature limits the tracking risk of in-app browsing, by restricting domain access by the app to those you specify. To use the feature, you add the WKAppBoundDomains key to `<projectDirectory>/resources/common/infoplist_configuration.json`and supply an array of domain name strings as the value. Here is a sample infoplist_configuration.json file entry to set app bound domains.
```
{ 
   "WKAppBoundDomains" : ["https://www.ExampleDomainl.com", "https://www.ExampleDomain2.com", "https://www.ExampleDomain3.com"]
}
``` 

By default, Browser widgets with Browser Type = WKWebView can use JavaScript injection, custom style sheets, cookie manipulation, and message handlers. However, once you add "WKAppBoundDomains" to infoplist_configuration.json, all WKWebView Browser instances in the app lose these capabilities. To restore access to these APIs, set limitsNavigationsToAppBoundDomains to true in the Browser widget configuration.

> **_Note:_**  You can also access the limitsNavigationsToAppBoundDomains property through code as part of the pspConfig Object. However, you can only enable (or add) this property when you create the Browser widget instance. You cannot change the value of this property after the Browser widget is initialized. 

### Syntax

limitsNavigationsToAppBoundDomains 

### Type

Boolean

### Read/Write

Read Only

### Remarks

The default value of this property is false. 

### Example

```
limitsNavigationsToAppBoundDomains = true;
```

### Platform Availability

*   iOS 14 and later versions

* * *

</details>
<details close markdown="block"><summary>maxHeight Property</summary>

* * *

This property specifies the maximum height of the widget and is applicable only when the height property is not specified.

The maxHeight property determines the maximum height of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. The maxHeight value overrides the preferred, or “autogrow” height, if the maxHeight is less than the derived content height of the widget.

### Syntax

maxHeight

### Type

Number

### Read/Write

Read + Write

### Example

```

//Sample code to set the maxHeight property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.maxHeight = "50dp";

frmHome.widgetID.maxHeight = "10%";

frmHome.widgetID.maxHeight = "10px";
```

### Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>maxWidth Property</summary>

* * *

This property specifies the maximum width of the widget and is applicable only when the width property is not specified.

The Width property determines the maximum width of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. The maxWidth value overrides the preferred, or “autogrow” width, if the maxWidth is less than the derived content width of the widget.

### Syntax

maxWidth

### Type

Number

### Read/Write

Read + Write

### Example

```

//Sample code to set the maxWidth property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.maxWidth = "50dp";

frmHome.widgetID.maxWidth = "10%";

frmHome.widgetID.maxWidth = "10px";
```

### Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>minHeight Property</summary>

* * *

This property specifies the minimum height of the widget and is applicable only when the height property is not specified.

The minHeight property determines the minimum height of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. The minHeight value overrides the preferred, or “autogrow” height, if the minHeight is larger than the derived content height of the widget.

### Syntax

minHeight

### Type

Number

### Read/Write

Read + Write

### Example

```

//Sample code to set the minHeight property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.minHeight = "50dp";

frmHome.widgetID.minHeight = "10%";

frmHome.widgetID.minHeight = "10px";
```

### Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>minWidth Property</summary>

* * *

This property specifies the minimum width of the widget and is applicable only when the width property is not specified.

The minWidth property determines the minimum width of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. The minWidth value overrides the preferred, or “autogrow” width, if the minWidth is larger than the derived content width of the widget.

### Syntax

minWidth

### Type

Number

### Read/Write

Read only

### Example

```

//Sample code to set the minWidth property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.minWidth = "50dp";

frmHome.widgetID.minWidth = "10%";

frmHome.widgetID.minWidth = "10px";
```

### Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>mixedContentMode Property</summary>

* * *

This property is used to set the behavior of Browser widget, when a secure URL tries to load a content that is not secure.

### Syntax

mixedContentMode

### Type

Constant

### Read/Write

Read + Write

### Remarks

The default value of this property is constants.BROWSER\_MIXED\_CONTENT\_NEVER\_ALLOW.

You can set any of the following value to this property.

*   constants.BROWSER\_MIXED\_CONTENT\_ALWAYS\_ALLOW: When the `mixedContentMode` property is set to this value, the Browser widget will load all content from a secure origin. This mode of loading content is least secure and is not recommended.
*   constants.BROWSER\_MIXED\_CONTENT\_NEVER\_ALLOW: When the `mixedContentMode` property is set to this value, the Browser widget will not load a content without certifications even if it is from a secure origin. This mode of loading content is secure and is recommended.
*   constants.BROWSER\_MIXED\_CONTENT\_COMPATIBILITY\_MODE: When the `mixedContentMode` property is set to this value, the Browser widget behaves similar to a web browser and attempts to load the content without certifications. This content may be loaded or blocked depending on the release and is not explicitly defined. You can use this mode of loading content when your application is not in control of the content, but the content is being operated from a secure environment.

> **_Note:_** In an application with target SDK as Android 9 (API level 28), the cleartext content for specific domains is blocked. To enable cleartext for specific domains, you must configure cleartexttraffic in the network security configuration. For more information on cleartexttraffic, click [here](../../../Iris/iris_user_guide/Content/Android_Pie_Behavioral_Changes.md).

### Example

```

//Sample code to set mixedContentMode property for a Browser widget.   
  
frmBrowser.myBrowser.mixedContentMode = constants.BROWSER_MIXED_CONTENT_COMPATIBILITY_MODE;

```

### Platform Availability

*   Android 5.0 onwards

> **_Note:_** In an application with target SDK as Android 9 (API level 28), the cleartext content for specific domains is blocked. To enable cleartext for specific domains, you must configure cleartexttraffic in the network security configuration. For more information on cleartexttraffic, click [here](../../../Iris/iris_user_guide/Content/Android_Pie_Behavioral_Changes.md).

* * *

</details>
<details close markdown="block"><summary>opacity Property</summary>

* * *

Specifies the opacity of the widget. The value of this property must be in the range 0.0 (transparent) to 1.0 (opaque). Any values outside this range are fixed to the nearest minimum or maximum value.

Specifies the opacity of the widget. Valid opacity values range from 0.0 (transparent), to 1.0 (opaque). Values set to less than zero will default to zero. Values more than 1.0 will default to 1. Interaction events set on a transparent widget will still be fired. To disable the events, also set the “isVisible” property to “false”.

### Syntax

opacity

### Type

Number

### Read/Write

Read + Write

### Remarks

> **_Note:_** This property has more priority compared to the values coming from the configured skin.

### Example

```

//Sample code to make the widget transparent by using the opacity property.
frmHome.widgetID.opacity = 0;

//Sample code to make the widget opaque by using the opacity property.
frmHome.widgetID.opacity = 1;
```

### Platform Availability

*   Not available in the IDE.
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>padding Property</summary>

* * *

Defines the space between the content of the widget and the widget boundaries. You can use this option to define the top, left, right, and bottom distance between the widget content and the widget boundary.

When you are defining the padding (for any platform) the _first_ time, the value that you enter in the padding field (top, left, right, or bottom) is auto-populated across all the platforms.

  
The following image illustrates a widget with a defined padding:

![](Resources/Images/Padding.png)

### Syntax

padding

### Type

Array of numbers

### Read / Write

Read+Write

### Limitations

Desktop Web/ SPA platforms do not support _padding_ property in Image widget, Slider widget and Switch widget.

### Example

```

//Sample code to set the padding property for widgetID Button widget in frmHome Form.
frmHome.widgetID.padding= [2,2,2,2];
```

### Platform Availability

*   Available in IDE
*   Desktop Web and SPA

* * *

</details>
<details close markdown="block"><summary>paddingInPixel Property</summary>

* * *

This property specifies whether the padding property is to be applied in pixels or in percentage.

### Syntax

paddingInPixel

### Type

Boolean

### Read/Write

Read Only

### Remarks

The default value of this property is _false_.

If the value of this property is _true,_ the padding are applied in pixels.

If the value of this property is _false,_ the padding are applied as set in [padding](#padding) property.

### Limitations

Desktop Web/ SPA platforms do not support _paddingInPixel_ property in Image widget, Slider widget and Switch widget.

### Example

```

//Sample code to read paddingInPixel property for widgetID Button widget in frmHome form.

voltmx.print("PaddingInPixel property value is:"+fromHome.widgetID.paddingInPixel);
```

### Platform Availability

*   Desktop Web and SPA.

* * *

</details>
<details close markdown="block"><summary>parent Property</summary>

* * *

Helps you access the parent of the widget. If the widget is not part of the widget hierarchy, the parent property returns null.

### Syntax

parent

### Read/Write

Read only

### Remarks

> **_Note:_** The property works for all the widgets inside a FlexForm, FlexContainer or FlexScrollContainer.

### Example

```

function func() {

    voltmx.print("The parent of the widget" + JSON.stringify(Form1.widgetID.parent));

}
```

### Platform Availability

*   Not available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>playVideoInFullScreen Property</summary>

* * *

You can use this property to enable Full Screen viewing of videos in webpages in Browser widget. After enabling this property, by clicking the Full Screen Expansion button, you can make the videos play in full-screen view.

### Syntax

playVideoInFullScreen

### Type

Boolean

### Read/Write

Read + Write

### Example

```

frm1.browser1.playVideoInFullScreen = true;

```

### Platform Availability

*   Android

* * *

</details>
<details close markdown="block"><summary>requestURLConfig Property</summary>

* * *

Specifies the configurations for the requested URL in key-value pairs as a JavaScript object.

### Syntax

requestURLConfig

### Type

JSObject

### Read/Write

Read + Write

### Remarks

The following are the keys that are accepted in this object.

*   URL - Mandatory

Specifies the initial URL that must be requested from the server. The URL must begin with http:// .

*   requestMethod - Optional

Specifies the HTTP method to use for requesting the initial URL. You can choose either:

> *   BROWSER\_REQUEST\_METHOD\_GET (Default)
>     
>     > **_Note:_** SPA platforms supports BROWSER\_REQUEST\_METHOD\_GET option only.
>     

> *   BROWSER\_REQUEST\_METHOD\_POST

*   requestData - Optional

Specifies the key-value pairs that must be sent to the initial URL. It accepts an array of array. For example,

```

[["key1","value1"],["key2","value2"],["keyn", "valuen"]
```

### Example

```

//Sample code to invoke requestURLConfig property for a Browser widget.
  
var urlConf = {
    URL: "https://www.google.co.in/",
    requestMethod: constants.BROWSER_REQUEST_METHOD_GET,
    headers: headersConf
};  
frmBrowser.myBrowser.requestURLConfig=urlConf;

```

### Platform Availability

*   Available in the IDE
*   Available on all platforms

* * *

</details>
<details close markdown="block"><summary>retainContentAlignment Property</summary>

* * *

This property is used to retain the content alignment property value, as it was defined.

> **_Note:_** Locale-level configurations take priority when invalid values are given to this property, or if it is not defined.

The mirroring widget layout properties should be defined as follows.

```

function getIsFlexPositionalShouldMirror(widgetRetainFlexPositionPropertiesValue) {
    return (isI18nLayoutConfigEnabled &&
    localeLayoutConfig[defaultLocale]
    ["mirrorFlexPositionalProperties"] == true &&
    !widgetRetainFlexPositionPropertiesValue);
}
```

The following table illustrates how widgets consider Local flag and Widget flag values.

| Properties | Local Flag Value | Widget Flag Value | Action |
| --- | --- | --- | --- |
| Mirror/retain FlexPositionProperties | true | true | Use the designed layout from widget for all locales. Widget layout overrides everything else. |
| Mirror/retain FlexPositionProperties | true | false | Use Mirror FlexPositionProperties since locale-level Mirror is true. |
| Mirror/retain FlexPositionProperties | true | not specified | Use Mirror FlexPositionProperties since locale-level Mirror is true. |
| Mirror/retain FlexPositionProperties | false | true | Use the designed layout from widget for all locales. Widget layout overrides everything else. |
| Mirror/retain FlexPositionProperties | false | false | Use the Design/Model-specific default layout. |
| Mirror/retain FlexPositionProperties | false | not specified | Use the Design/Model-specific default layout. |
| Mirror/retain FlexPositionProperties | not specified | true | Use the designed layout from widget for all locales. Widget layout overrides everything else. |
| Mirror/retain FlexPositionProperties | not specified | false | Use the Design/Model-specific default layout. |
| Mirror/retain FlexPositionProperties | not specified | not specified | Use the Design/Model-specific default layout. |

### Syntax

retainContentAlignment

### Type

Boolean

### Read/Write

No (only during widget-construction time)

### Example

```

//This is a generic property that is applicable for various widgets.
//Here, we have shown how to use the retainContentAlignment property for Button widget.
/*You need to make a corresponding use of the 
retainContentAlignment property for other applicable widgets.*/
var btn = new voltmx.ui.Button({
    "focusSkin": "defBtnFocus",
    "height": "50dp",
    "id": "myButton",
    "isVisible": true,
    "left": "0dp",
    "skin": "defBtnNormal",
    "text": "text always from top left",
    "top": "0dp",
    "width": "260dp",
    "zIndex": 1
}, {
    "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
    "displayText": true,
    "padding": [0, 0, 0, 0],
    "paddingInPixel": false,
    "retainFlexPositionProperties": false,
    "retainContentAlignment": true
}, {});
```

### Platform Availability

*   Available in IDE
*   Windows, iOS, Android, and SPA

* * *

</details>
<details close markdown="block"><summary>retainFlexPositionProperties Property</summary>

* * *

This property is used to retain flex positional property values as they were defined. The flex positional properties are left, right, and padding.

> **_Note:_** Locale-level configurations take priority when invalid values are given to this property, or if it is not defined.

The mirroring widget layout properties should be defined as follows.

```

function getIsFlexPositionalShouldMirror(widgetRetainFlexPositionPropertiesValue) {
    return (isI18nLayoutConfigEnabled &&
    localeLayoutConfig[defaultLocale]
    ["mirrorFlexPositionalProperties"] == true &&
    !widgetRetainFlexPositionPropertiesValue);
}
```

The following table illustrates how widgets consider Local flag and Widget flag values.

| Properties | Local Flag Value | Widget Flag Value | Action |
| --- | --- | --- | --- |
| Mirror/retain FlexPositionProperties | true | true | Use the designed layout from widget for all locales. Widget layout overrides everything else. |
| Mirror/retain FlexPositionProperties | true | false | Use Mirror FlexPositionProperties since locale-level Mirror is true. |
| Mirror/retain FlexPositionProperties | true | not specified | Use Mirror FlexPositionProperties since locale-level Mirror is true. |
| Mirror/retain FlexPositionProperties | false | true | Use the designed layout from widget for all locales. Widget layout overrides everything else. |
| Mirror/retain FlexPositionProperties | false | false | Use the Design/Model-specific default layout. |
| Mirror/retain FlexPositionProperties | false | not specified | Use the Design/Model-specific default layout. |
| Mirror/retain FlexPositionProperties | not specified | true | Use the designed layout from widget for all locales. Widget layout overrides everything else. |
| Mirror/retain FlexPositionProperties | not specified | false | Use the Design/Model-specific default layout. |
| Mirror/retain FlexPositionProperties | not specified | not specified | Use the Design/Model-specific default layout. |

### Syntax

retainFlexPositionProperties

### Type

Boolean

### Read/Write

No (only during widget-construction time)

### Example

```

//This is a generic property that is applicable for various widgets.
//Here, we have shown how to use the retainFlexPositionProperties property for Button widget.
/*You need to make a corresponding use of the 
retainFlexPositionProperties property for other applicable widgets.*/
var btn = new voltmx.ui.Button({
    "focusSkin": "defBtnFocus",
    "height": "50dp",
    "id": "myButton",
    "isVisible": true,
    "left": "0dp",
    "skin": "defBtnNormal",
    "text": "always left",
    "top": "0dp",
    "width": "260dp",
    "zIndex": 1
}, {
    "contentAlignment": constants.CONTENT_ALIGN_CENTER,
    "displayText": true,
    "padding": [0, 0, 0, 0],
    "paddingInPixel": false,
    "retainFlexPositionProperties": true,
    "retainContentAlignment": false
}, {});
```

### Platform Availability

*   Available in IDE
*   Windows, iOS, Android, and SPA

* * *

</details>
<details close markdown="block"><summary>retainFlowHorizontalAlignment Property</summary>

* * *

This property is used to convert Flow Horizontal Left to Flow Horizontal Right.

> **_Note:_** Locale-level configurations take priority when invalid values are given to this property, or if it is not defined.

The mirroring widget layout properties should be defined as follows.

```

function getIsFlexPositionalShouldMirror(widgetRetainFlexPositionPropertiesValue) {
    return (isI18nLayoutConfigEnabled &&
    localeLayoutConfig[defaultLocale]
    ["mirrorFlexPositionalProperties"] == true &&
    !widgetRetainFlexPositionPropertiesValue);
}
```

The following table illustrates how widgets consider Local flag and Widget flag values.

| Properties | Local Flag Value | Widget Flag Value | Action |
| --- | --- | --- | --- |
| Mirror/retain FlexPositionProperties | true | true | Use the designed layout from widget for all locales. Widget layout overrides everything else. |
| Mirror/retain FlexPositionProperties | true | false | Use Mirror FlexPositionProperties since locale-level Mirror is true. |
| Mirror/retain FlexPositionProperties | true | not specified | Use Mirror FlexPositionProperties since locale-level Mirror is true. |
| Mirror/retain FlexPositionProperties | false | true | Use the designed layout from widget for all locales. Widget layout overrides everything else. |
| Mirror/retain FlexPositionProperties | false | false | Use the Design/Model-specific default layout. |
| Mirror/retain FlexPositionProperties | false | not specified | Use the Design/Model-specific default layout. |
| Mirror/retain FlexPositionProperties | not specified | true | Use the designed layout from widget for all locales. Widget layout overrides everything else. |
| Mirror/retain FlexPositionProperties | not specified | false | Use the Design/Model-specific default layout. |
| Mirror/retain FlexPositionProperties | not specified | not specified | Use the Design/Model-specific default layout. |

### Syntax

retainFlowHorizontalAlignment

### Type

Boolean

### Read/Write

No (only during widget-construction time)

### Example

```

//This is a generic property that is applicable for various widgets.
//Here, we have shown how to use the retainFlowHorizontalAlignment property for Button widget.
/*You need to make a corresponding use of the 
retainFlowHorizontalAlignment property for other applicable widgets. */
var btn = new voltmx.ui.Button({
 "focusSkin": "defBtnFocus",
 "height": "50dp",
 "id": "myButton",
 "isVisible": true,
 "left": "0dp",
 "skin": "defBtnNormal",
 "text": "always left",
 "top": "0dp",
 "width": "260dp",
 "zIndex": 1
}, {
 "contentAlignment": constants.CONTENT_ALIGN_CENTER,
 "displayText": true,
 "padding": [0, 0, 0, 0],
 "paddingInPixel": false,
 "retainFlexPositionProperties": true,
 "retainContentAlignment": false,
 "retainFlowHorizontalAlignment ": false
}, {});
```

### Platform Availability

*   Available in IDE
*   Windows, iOS, Android, and SPA

* * *

</details>
<details close markdown="block"><summary>right Property</summary>

* * *

This property determines the lower right corner of the widget and is measured from the right bounds of the parent container.

The right property determines the position of the right edge of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. In freeform layout, the distance is measured from the left edge of the parent container. In flow-vertical layout, value is ignored. In flow-horizontal layout, the value is ignored.

The right property is used only if the width property is not provided.

### Syntax

right

### Type

String

### Read/Write

Read + Write

### Remarks

If the layoutType is set as voltmx.flex.FLOW\_HORIZONTAL, the right property is measured from left edge of the right sibling widget. The horizontal space between two widgets is measured from right of the left sibling widget and left of the right sibling widget.

### Example

```

//Sample code to set the right property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.right = "50dp";

frmHome.widgetID.right = "10%";

frmHome.widgetID.right = "10px";
```

### Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>screenLevelWidget Property</summary>

* * *

Specifies whether the widget should occupy the whole container or not when your Browser widget has a large HTML content to display.

### Syntax

screenLevelWidget

### Type

Boolean

### Read/Write

No

### Remarks

The default value for this property is false.

You must set the value to _true_ for your Browser widget occupy the complete Form and results in a good user experience.

If set to _false_, the widget does not occupy the whole container and a scroll bar appears on the Browser widget and the Form resulting in a bad user experience while scrolling.

You must not place more than one Browser widget as a screen level widget inside a Form. Also, if you choose to make a Browser widget a Screen Level Widget, you must place only the Browser widget in the Form and must not place any other widgets in the Form.

Do not set the screen level widget property to true for more than one widget in the form. If you have multiple widgets with this property set as true, there may be issues with how information is displayed along with some scrolling issues.

Few guidelines for using _screenLevelWidget_ property for Browser widget.

*   Placing any widgets below the Browser widget on a form is not advised as this leads to double scrolling issues. Use Browser widget as screen level widget and place the rest of the widgets as part of headers and footers.
*   In order to control the height of the Browser widget, place browser widget as screen level widget inside the ScrollBox and control the height of the ScrollBox.

On iPhone, Android, and Windows 10 platforms, if this property is set to _true_, the following are applicable:

iPhone

> When a browser widget is used on the form, make sure that all other widgets are part of header or footer of the form.

Android

Only the widgets placed above the Browser widget (which is a screen level widget) are visible. The widgets placed below the Browser widget are not visible when rendered.

Windows

> The widgets placed above and below the Browser widget (which is a screen level widget) are not visible when rendered.

> **_Note:_** If you configure Application level Header and Footer, they will be visible even if the browser is a screen level widget.

### Example

```

//Sample code to enable screenLevelWidget property in Browser widget.  
frmBrowser.myBrowser.screenLevelWidget=true;  

```

### Platform Availability

*   Available in the IDE
*   Available on all platforms except Desktop Web, and SPA

* * *

</details>
<details close markdown="block"><summary>scrollsToTop Property</summary>

* * *

This property enables you to scroll the Browser to top, on tapping a device’s status bar.

### Syntax

scrollsToTop

### Type

Boolean

### Read/Write

Read + Write

### Remarks

The default value for this property is true.

If this property is true for more than one widget, then this property is not applied to any of the widgets.

### Example

```

//Sample code to disable scrollsToTop property in Browser widget.  
frmBrowser.myBrowser.scrollsToTop=false;  

```

### Platform Availability

*   iPhone
*   iPad

* * *

</details>
<details close markdown="block"><summary>settings Property</summary>

* * *

The settings property helps you to configure the Browser Widget settings.

### Syntax

settings

### Type

Boolean

### Read/Write

Read + Write

### Remarks

enableJavaScript Key

The property is configured as key-value pairs. The settings property accepts the enableJavaScript key. The enableJavaScript key allows to enable or disable the JavaScript in the Browser Widget. Following are the values accepted by the key:

*   `{“enableJavaScript”:true}`
*   `{“enableJavaScript”:false}`

The default value for the enableJavaScript key is true.

If the enableJavaScript key is set to _false_, the JavaScript is disabled in the Browser Widget.

If the enableJavaScript key is set to _true_, the JavaScript is enabled in the Browser Widget.

The values other than "true" and "false" are discarded.

> **_Note:_** Once the JavaScript is disabled and the Browser Widget is loaded, it is not possible to enable the JavaScript dynamically.

**allowFileAccess Key**

The settings property accepts the **allowFileAccess** key, which enables or disables file access in the Browser Widget.

```

{“allowFileAccess”:true}
{“allowFileAccess”:false}
```

The default value for allowFileAccess is true.

If the allowFileAccess is set to false, file access is disabled in the browser widget.

If the allowFileAccess is set to true, file access is enabled in the browser widget.

The values other than **true** and **false** are discarded.

The **allowFileAccess** key enables or disables file system access only. Assets and resources are still accessible using `file:///android_asset` and `file:///android_res`

If the Browser widget has to access any files through java script code ( for example, in button onclick accessing the sdcard files) , the **enableJavaScript** key and the **allowFileAccess** key should be configured to **true**. If the **enableJavaScript** is set to false and the **allowFileAccess** is set to **true**, the browser widget cannot access files.

Once the **allowFileAccess** key is disabled, and the Browser Widget is loaded, it is not possible to enable the **allowFileAccess** key dynamically.

### Example

```

//Sample code to enable settings property in Browser widget.  
frmBrowser.myBrowser.settings= {
    "enableJavaScript": false,
    "allowFileAccess": false
};  

```

### Platform Availability

*   Android

* * *

</details>
<details close markdown="block"><summary>shareCookiesInBrowsers Property</summary>

* * *

In the iOS platform, the Browser widget uses WKWebView engine to load data. WKWebView engine does not allow you to use cookie from one browser in another. From Iris V9 SP1 version, you can use the _shareCookiesInBrowsers_ property to enable sharing of cookies between browsers. You can only share the cookies between browsers that have enabled the _shareCookiesInBrowsers_ property.  
This is a constructor level property.  

### Syntax

shareCookiesInBrowsers

### Type

Boolean

The default value of this property is _false_.

When the value of this property is _true_, you can share the cookies between the browsers.

When the value of this property is _false_, you cannot share the cookies between the browsers.

### Read/Write

Read Only

### Example

```

//Sample code to enable the shareCookiesInBrowsers property in Browser widget.
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
var webPsp = {
 "shareCookiesInBrowsers": true
};
var browserID = new voltmx.ui.Browser(webBasic, webLayout, webPsp);
```

### Platform Availability

*   iOS 11 and onwards

* * *

</details>
<details close markdown="block"><summary>showProgressIndicator Property</summary>

* * *

Specifies if the progress indicator must be displayed before loading the URL or executing an event.

### Syntax

showProgressIndicator

### Type

Boolean

### Read/Write

Read + Write

### Remarks

The default value for this property is true.

If set to _false_, the progress indicator is not displayed on the widget.

If set to _true_, the progress indicator is displayed on the widget.

### Example

```

//Sample code to disable showProgressIndicator property in Browser widget.  
frmBrowser.myBrowser.showProgressIndicator=false;  

```

### Platform Availability

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>SSLValidationBehavior Property</summary>

* * *

Prior to Iris V9 SP1 version, in the iOS platform, SSL validations occurred based on the values of _[allowbundledonly](../../../Iris/iris_user_guide/Content/Certificate_Pinning.md#enable-certificate-pinning-in-ios)_ and _[VoltMXHTTPPublicKeyPinning](../../../Iris/iris_user_guide/Content/Public_Key_Pinning.md#enable-public-key-pinning)_ in the `infoplist_configuration.json` file. From the Iris V9 version onwards, Browser widget supports only WKWebview engine. WKWebView engine enables pinning for all HTTPS URLs used inside the Browser widget. This means that all the hosts accessed in the Browser widget can be pinned using either public key pinning or SSL certificate pinning.  
  
From the Iris V9 SP 1 version , you can use the `SSLValidationBehavior` property to handle the SSL pinning and validation behavior of Browser widget in the iOS platform. This property can be used when public key pinning or SSL certificate pinning is enabled.

### Syntax

SSLValidationBehavior

### Type

Constant

You can provide any of the following constants as input to `SSLValidationBehavior` property.

*   `constants. SSL_VALIDATION_BEHAVIOR_NONE` : When this value is assigned to the _SSLValidationBehavior_ property, no Pinning validations will be performed on any URL.
*   `constants.SSL_VALIDATION_BEHAVIOR_DEFAULT`: When this value is assigned to the_SSLValidationBehvior_ property, only those URLs that are pinned are validated. All the URLs that are not pinned are rejected. This is the default value of this property.
*   `constants. SSL_VALIDATION_BEHAVIOR_CHECK_DECLARED_ALLOW_OTHERS` : When this value is assigned to the _SSLValidationBehavior_ property, the URLs that are pinned are validated. The URLs that are not pinned are not validated but these URLs are not rejected.

For more information on the behavior of these constants, refer the table provided under **Remarks**.

### Read/Write

Read Only

### Remarks

The following table lists the behavior of _SSLValidationBehavior_ property with the various values of _[allowbundledonly](../../../Iris/iris_user_guide/Content/Certificate_Pinning.md#enable-certificate-pinning-in-ios)_ and _[VoltMXHTTPPublicKeyPinning](../../../Iris/iris_user_guide/Content/Public_Key_Pinning.md#enable-public-key-pinning)_ in _infoplist\_configuration.json_ file.

| allowbundledonly(Certificate Pinning) | VoltMXHTTPPublishKeyPinning (Public Key Pinning) | SSLValidationBehavior | Result |
| --- | --- | --- | --- |
| False | True | SSL\_VALIDATION\_BEHAVIOR\_NONE | All URLs are bypassed. |
| True | False | SSL\_VALIDATION\_BEHAVIOR\_NONE | All URLs are bypassed. |
| False | True | SSL\_VALIDATION\_BEHAVIOR\_DEFAULT | Only pinned URLs are validated. Rest of the URLs are rejected. |
| True | False | SSL\_VALIDATION\_BEHAVIOR\_DEFAULT | Only the URLs with the certificates pinned are validated. Rest of the URLs are rejected. |
| False | True | SSL\_VALIDATION\_BEHAVIOR\_CHECK\_DECLARED\_ALLOW\_OTHERS | The pinned URLs are validated. Rest are bypassed |
| True | False | SSL\_VALIDATION\_BEHAVIOR\_CHECK\_DECLARED\_ALLOW\_OTHERS | The pinned certificates are validated. Rest are bypassed |

### Example

```

//Sample code to set the behavior of SSL pinning in Browser widget.
var myBrowser = new voltmx.ui.Browser({
 id: "myBrowser",
 isVisible: true,
}, {
 containerHeight: 100,
 margin: [10, 10, 10, 10]
}, {
 SSLValidationBehavior: constants.SSL_VALIDATION_BEHAVIOR_NONE
});  

```

### Platform Availability

*   iOS

* * *

</details>
<details close markdown="block"><summary>supportedURLSchemes Property</summary>

* * *

This property is used to deep link URLs between applications. The `supportedURLSchemes` property is used to provide the keys of the custom URLs required to launch the application URLs using the Browser widget.

### Syntax

supportedURLSchemes

### Type

Array of Strings

### Read/Write

Read + Write

### Example

```

//Sample code to add keys in supportedURLSchemes property in Browser widget.  
  
frmBrowser.myBrowser.supportedURLSchemes =[“customURLkey1”,"customURLkey2”];  

```

### Platform Availability

*   iOS

* * *

</details>
<details close markdown="block"><summary>top Property</summary>

* * *

This property determines the top edge of the widget and measured from the top bounds of the parent container.

The top property determines the position of the top edge of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. In freeform layout, the distance is measured from the top edge of the parent container. In flow-vertical layout, the distance is measured from the bottom edge of the previous sibling widget in the hierarchy. In flow-horizontal layout, the distance is measured from the left edge of the parent container.

### Syntax

top

### Type

String

### Read/Write

Read + Write

### Remarks

If the layoutType is set as voltmx.flex.FLOW\_VERTICAL, the top property is measured from the bottom edge of the top sibling widget. The vertical space between two widgets is measured from bottom of the top sibling widget and top of the bottom sibling widget.

### Example

```

//Sample code to set the top property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.top = "50dp";

frmHome.widgetID.top = "10%";

frmHome.widgetID.top = "10px";
```

### Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>transform Property</summary>

* * *

Contains an animation transformation that can be used to animate the widget.

### Syntax

transform

### Type

JSObject

### Read/Write

Read + Write

### Remarks

This property is set to the identify transform by default. Any transformations applied to the widget occur relative to the widget's anchor point. The transformation contained in this property must be created using the [voltmx.ui.makeAffineTransform](../../../Iris/iris_api_dev_guide/content/voltmx.ui_functions.md#makeAffi) function.

### Example

This example uses the button widget, but the principle remains the same for all widgets that have a transform property.

```

//Animation sample
var newTransform = voltmx.ui.makeAffineTransform();
newTransform.translate3D(223, 12, 56);

//translates by 223 xAxis,12 in yAxis,56 in zAxis
widget.transform = newTransform;
```

### Platform Availability

*   iOS, Android, Windows, and SPA

* * *

</details>
<details close markdown="block"><summary>useWideViewport Property</summary>

* * *

Specifies whether the browser should enable support for the "viewport" HTML meta tag or should use the wide viewport. If this property is set to true, it loads the browser with the attributes defined in the meta tag of the webpage. It scales the web page as defined in the.html.

### Syntax

useWideViewport

### Type

Boolean

### Read/Write

Write only

### Remarks

The default value for this property is false.

If this property is set to true, it loads the browser with the attributes defined in the meta tag of the webpage. It scales the web page as defined in the.html.

### Example

```

//Sample code to enable useWideViewport property in Browser widget.  
frmBrowser.myBrowser.useWideViewport=true;  

```

### Platform Availability

Available on Android / Android Tablet  platforms

* * *

</details>
<details close markdown="block"><summary>width Property</summary>

* * *

This property determines the width of the widget and is measured along the x-axis.

The width property determines the width of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. For supported widgets, the width may be derived from either the widget or container’s contents by setting the width to “preferred”.

### Syntax

width

### Type

Number, String, and Constant

### Read/Write

Read + Write

### Remarks

Following are the options that can be used as units of width:

*   %: Specifies the values in percentage relative to the parent dimensions.
*   px: Specifies the values in terms of device hardware pixels.
*   dp: Specifies the values in terms of device independent pixels.
*   default: Specifies the default value of the widget.
*   voltmx.flex.USE\_PREFERED\_SIZE: When this option is specified, the layout uses preferred width of the widget as width and preferred size of the widget is determined by the widget and may varies between platforms.

### Example

```

//Sample code to set the width property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.width = "50dp";

frmHome.widgetID.width = "10%";

frmHome.widgetID.width = "10px";
```

### Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>zIndex Property</summary>

* * *

This property specifies the stack order of a widget. A widget with a higher zIndex is always in front of a widget with a lower zIndex.

The zIndex property is used to set the stack, or layer order of a widget. Widgets with higher values will appear “over”, or “on top of” widgets with lower values. Widgets layered over other widgets will override any interaction events tied to widgets beneath. Modifying the zIndex does not modify the order of the widgets in the Volt MX Iris hierarchy, inside of a flexContainer or form. The zIndex property accepts only positive values.

### Syntax

zIndex

### Type

Number

### Read/Write

Read + Write

### Remarks

The default value for this property is 1.

> **_Note:_** Modifying the zIndex does not modify the order of the widgets inside the FlexContainer. If zIndex is same for group of overlapping widgets then widget order decides the order of overlapping. The last added widget is displayed on top.

From Volt MX Iris V9 SP2 FP7, developers can configure the Z Index value for a Responsive Web app as **Auto** or **Custom**. When the selected Z Index value is **Auto**, the default Z Index value of 1 is applied. When the selected Z Index value is **Custom**, developers can specify a desired numeric value.

Prior to the V9 SP2 FP7 release, the default value for the Z Index was **1**. When developers imported any third-party libraries with the Z index set as **Auto**, content overflow was disabled as the value of Auto is less than 1.

> **_Note:_** The Z Index value Auto is supported only when the Enable JS Library mode is configured as unchecked.

For existing components, the value of the Z Index is configured as **1** for the Native channel. For the Responsive Web channel, the Z Index will be set as **Custom** with **1** as the value.

For new components, the value of the Z Index is configured as **1** for the Native channel. For the Responsive Web channel, the Z Index will be set as **Auto** or **1** based on the project level settings.

> **_Note:_** If ModalContainer property is set to true in any of the FlexContainer widget, the Z Index value of that container and all of its parent containers should be set to **Custom**.

**voltmx.flex.ZINDEX\_AUTO** : Constant to configure the Z Index value as **auto** programmatically.

```

//Sample code to set the ZIndex value to Auto  
 var flx = new voltmx.ui.FlexContainer({ 
  "id": "flx"
  "zIndex": voltmx.flex.ZINDEX_AUTO
});

```
```

//Sample code to set the ZIndex value to Auto
flx.zIndex = voltmx.flex.ZINDEX\_AUTO;

```

### Example

```

//Sample code to set the zIndex property for widgets.  
frmHome.widgetID.zIndex = 300;
```

### Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>zoomDensity Property</summary>

* * *

Specifies the default zoom density of the page.

### Syntax

zoomDensity

### Type

Number

### Read/Write

Write only

### Remarks

*   0 - FAR ( makes 100% with 240dpi)
*   1 - MEDIUM (makes 100% with 160dpi)
*   2 - CLOSE (makes 100% with 120dpi)

### Example

```

//Sample code to set zoomDensity property in Browser widget.  
frmBrowser.myBrowser.zoomDensity=0;   

```

### Platform Availability

Available on Android

</details>
* * *

