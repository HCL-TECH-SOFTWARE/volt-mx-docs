---
layout: "documentation"
category: "iris_widget_prog_guide"
---
                                 


CordovaBrowser Properties
=========================

The properties for CordovaBrowserwidget are as follows.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[accessibilityConfig Property](javascript:void(0);)

* * *

Enables you to control accessibility behavior and alternative text for the widget.

For more information on using accessibility features in your app, see the [Accessibility]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Accessibility_Overview.html) appendix in the Volt MX IrisUser Guide.

Syntax

accessibilityConfig

Type

Object

Read/Write

Read + Write

Remarks

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

Android limitations

*   If the results of the concatenation of a11y fields result in an empty string, then `accessibilityConfig` is ignored and the text that is on widget is read out.
*   The soft keypad does not gain accessibility focus during the right/left swipe gesture when the keypad appears.

SPA/Desktop Web limitations

*   When `accessibilityConfig` property is configured for any widget, the `tabIndex` attribute is added automatically to the `accessibilityConfig` property.
*   The behavior of accessibility depends on the Web browser, Web browser version, Voice Over Assistant, and Voice Over Assistant version.
*   Currently SPA/Desktop web applications support only a few ARIA tags. To achieve more accessibility features, use the attribute a11yARIA. The corresponding tags will be added to the DOM as per these configurations.

Example 1

This example uses the button widget, but the principle remains the same for all widgets that have an accessibilityConfig property.

{% highlight voltMx %}//This is a generic property that is applicable for various widgets.
//Here, we have shown how to use the accessibilityConfig Property for button widget.
/*You need to make a corresponding use of the accessibilityConfig property for other applicable widgets.*/

Form1.myButton.accessibilityConfig = {
    "a11yLabel": "Label",
    "a11yValue": "Value",
    "a11yHint": "Hint"    
};
{% endhighlight %}

Example 2

This example uses the button widget to implement internationalization in `accessibilityConfig` property, but the principle remains the same for all widgets.

{% highlight voltMx %}/*Sample code to implement internationalization in accessibilityConfig property in Native platform.*/

Form1.myButton.accessibilityConfig = {
    "a11yLabel": voltmx.i18n.getLocalizedString("key1")     
};  
/*Sample code to implement internationalization in accessibilityConfig property in Desktop Web platform.*/

Form1.myButton.accessibilityConfig = {
    "a11yLabel": "voltmx.i18n.getLocalizedString(\"key3\")"
};
{% endhighlight %}

Platform Availability

*   Available in the IDE
*   iOS, Android, SPA, and Desktop Web

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[anchorPoint Property](javascript:void(0);)

* * *

Specifies the anchor point of the widget bounds rectangle using the widget's coordinate space.

Syntax

anchorPoint

Type

JSObject

Read/Write

Read + Write

Remarks

The value for this property is a JavaScript dictionary object with the keys "x" and "y". The values for the "x" and "y" keys are floating-point numbers ranging from 0 to 1. All geometric manipulations to the widget occur about the specified point. For example, applying a rotation transform to a widget with the default anchor point causes the widget to rotate around its center.

The default value for this property is center ( {"x":0.5, "y":0.5} ), that represents the center of the widgets bounds rectangle. The behavior is undefined if the values are outside the range zero (0) to one (1).

Example

{% highlight voltMx %}Form1.widget1.anchorPoint = {
    "x": 0.5,
    "y": 0.5
};
{% endhighlight %}

Platform Availability

*   iOS, Android, Windows, and SPA

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[baseURL Property](javascript:void(0);)

* * *

This property is used to configure the base URL that is displayed when a CordovaBrowser widget is rendered.

Syntax

baseURL

Type

String

Read/Write

Read + Write

Remarks

The default value for this property is false.

If the baseURL is not configured then the default URL is displayed. The default URL is the root folder of your application. Leaving this property blank or specifying it as nil introduces a security vulnerability on current versions of iOS that can enable an attacker to trick mobile device users into clicking on a malicious URL that accesses the device's entire file system. To prevent attacks using this property, developers should set baseURL to about:blank or some other known value. Under no circumstances should this property be left blank or specified as nil.

This property disables the cross site scripting to avoid security vulnerability.

Example

{% highlight voltMx %}
// The variable "browser" is an instance of a CordovaBrowser widget.			
frm.browser.baseURL = "http://www.abcd.com"; 
{% endhighlight %}

Platform Availability

*   Available in the IDE
*   Available on iOS platform only

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[bottom Property](javascript:void(0);)

* * *

This property determines the bottom edge of the widget and is measured from the bottom bounds of the parent container.

The bottom property determines the position of the bottom edge of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. In freeform layout, the distance is measured from the bottom edge of the parent container. In flow-vertical layout, the value is ignored. In flow-horizontal layout, the value is ignored.

The bottom property is used only if the Height property is not provided.

Syntax

bottom

Type

String

Read/Write

Read + Write

Remarks

The property determines the bottom edge of the widget and is measured from the bottom bounds of the parent container.

If the layoutType is set as voltmx.flex.FLOW\_VERTICAL, the bottom property is measured from the top edge of bottom sibling widget. The vertical space between two widgets is measured from bottom of the top sibling widget and the top of the bottom sibling widget.

Example

{% highlight voltMx %}//Sample code to set the bottom property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.bottom = "50dp";

frmHome.widgetID.bottom = "10%";

frmHome.widgetID.bottom = "10px";
{% endhighlight %}

Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA , and Desktop Web

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[centerX Property](javascript:void(0);)

* * *

This property determines the center of a widget measured from the left bounds of the parent container.

The centerX property determines the horizontal center of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. In freeform layout, the distance is measured from the left edge of the parent container. In flow-vertical layout, the distance is measured from the left edge of the parent container. In flow-horizontal layout, the distance is measured from the right edge of the previous sibling widget in the hierarchy.

Syntax

centerX

Type

String

Read/Write

Read + Write

Remarks

If the layoutType is set as voltmx.flex.FLOW\_HORIZONTAL, the centerX property is measured from right edge of the left sibling widget.

Example

{% highlight voltMx %}//Sample code to set the centerX property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.centerX = "50dp";

frmHome.widgetID.centerX = "10%";

frmHome.widgetID.centerX = "10px";
{% endhighlight %}

Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[centerY Property](javascript:void(0);)

* * *

This property determines the center of a widget measured from the top bounds of the parent container.

The centerY property determines the vertical center of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. In freeform layout, the distance is measured from the top edge of the parent container. In flow-horizontal layout, the distance is measured from the top edge of the parent container. In flow-vertical layout, the distance is measured from the bottom edge of the previous sibling widget in the hierarchy.

Syntax

centerY

Type

String

Read/Write

Read + Write

Remarks

If the layoutType is set as voltmx.flex.FLOW\_VERTICAL, the centerY property is measured from bottom edge of the top sibling widget.

Example

{% highlight voltMx %}//Sample code to set the centerY property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.centerY = "50dp";

frmHome.widgetID.centerY = "10%";

frmHome.widgetID.centerY = "10px";
{% endhighlight %}

Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[cursorType Property](javascript:void(0);)

* * *

In Desktop Web applications, when you hover the mouse over any widget, a mouse pointer appears. Using the cursorType property in Iris, you can specify the type of the mouse pointer.

Syntax

cursorType

Type

String.

You must provide valid CSS cursor value such as wait, grab, help, etc. to the cursorType property.

Read/Write

Read + Write

Remarks

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

Example

{% highlight voltMx %} //This is a generic property and is applicable for many widgets.  
  
/*The example provided is for the Button widget. Make the required changes in the example while using other widgets.*/
  
frmButton.myButton.cursorType = "wait";

{% endhighlight %}

Platform Availability

*   Available in IDE
*   Desktop Web

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[clearCanvasBeforeLoading](javascript:void(0);) 

* * *

Clears the browser's canvas before data is loaded.

Syntax

clearCanvasBeforeLoading

Type

Boolean

Read/Write

Read+Write

Remarks

If this property is set to `true`, the CordovaBrowser widget will clear its canvas before it loads data. If it is `false`, it will not clear the canvas.

Example

{% highlight voltMx %}//Sample code to disable clearCanvasBeforeLoading property in a CordovaBrowser widget.  
frmCBrowser.myCBrowser.clearCanvasBeforeLoading=false;  

{% endhighlight %}

Platform Availability

*   Android

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[detectTelNumber Property](javascript:void(0);)

* * *

Specifies if the Browser widget must support the detection of phone numbers in the web page and display the phone numbers as clickable Phone links. If you click the Phone link, the Phone application launches and dials the number.

Syntax

detectTelNumber

Type

Boolean

Read/Write

Read + Write

Remarks

The default value for this property is true.

If set to _false_, the Browser does not detect the Phone numbers.

If set to _true_, the Browser detects the phone numbers and displays them as links on the Phone.

Example

{% highlight voltMx %}//Sample code to enable detectTelNumber property in a CordovaBrowser widget.  
frmCBrowser.myCBrowser.detectTelNumber=true;  

{% endhighlight %}

Platform Availability

*   Available in the IDE
*   Available on all platforms

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[enable Property](javascript:void(0);)

* * *

The `enable` property is used to control the actionability of the widgets. In a scenario where you want to display a widget but not invoke any action on the widget, configure the `enable` property to false to achieve it.

This is a constructor level property and applicable for all widgets in Volt MX Iris.

Syntax

enable

Type

Boolean

Read/Write

Read + Write

Remarks

The default value of this property is true.

When `enable` property is configured to true, the action associated with a widget can be invoked by the user in the application.

When `enable` property is configured to false, the action associated with a widget cannot be invoked by the user in the application.

Example

{% highlight voltMx %}//This is a generic property and is applicable for many widgets.  
  
/*The example provided is for the Button widget. Make the changes required in the example while using other widgets.*/
  
frmButton.myBtn.enable= true;
{% endhighlight %}

Platform Availability

*   Android, iOS, Windows, SPA, and Desktop web

 

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[enableCache Property](javascript:void(0);)

* * *

The property enables you to improve the performance of Positional Dimension Animations.

Syntax

enableCache

Type

Boolean

Read/Write

Read + Write

Remarks

The default value for this property is true.

> **_Note:_** When the property is used, application consumes more memory. The usage of the property enables tradeoff between performance and visual quality of the content. Use the property cautiously.

Example

{% highlight voltMx %}Form1.widgetID.enableCache = true;
{% endhighlight %}

Platform Availability

*   Available in the IDE.
*   Windows
*   Android (Not available in IDE)

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[enableFocusInTouchMode Property](javascript:void(0);)

* * *

(missing or bad snippet)

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[enableNativeCommunication Property](javascript:void(0);) 

* * *

Enables web apps to access Volt MX Iris native capabilities from within the web app's JavaScript code.

Syntax

enableNativeCommunication

Type

Boolean

Read/Write

Read only

Remarks

By default, this property is set `false`. Your app can only set this property in the Browser widget's constructor. After the constructor executes, this property is read-only.

Example

{% highlight voltMx %}//This property is applicable for Browser and CordovaBrowser widgets.

/*This example demonstrates how to use enableNativeCommunication property by using myBrowser Browser widget in frmBrowser FlexForm. You need to use enableNativeCommunication property for CordovaBrowser widget in a similar manner.*/  
FrmBrowser.myBrowser.enableNativeCommunication = true;
{% endhighlight %}

Platform Availability

*   iOS, Android, Windows, SPA, and Desktop Web

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[enableOverviewMode Property](javascript:void(0);)

* * *

Specifies whether the browser should load pages in overview mode. For example, zoom out the content to fit in the screen width.

Syntax

enableOverviewMode

Type

Boolean

Read/Write

Write only

Remarks

The default value for this property is false.

To use this property, you must set useWideViewport property and screenLevelWidget property to true, else the behavior is undefined.

Example

{% highlight voltMx %}//Sample code to enable enableOverviewMode property in a CordovaBrowser widget.  
frmCBrowser.myCBrowser.enableOverviewMod=true;  

{% endhighlight %}

Platform Availability

Available on Android

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[enableZoom Property](javascript:void(0);)

* * *

Specifies if Zoom (ability to change the scale of the view area) must be enabled.

Syntax

enableZoom

Type

Boolean

Read/Write

Read + Write

Remarks

The default value for this property is false.

If set to _true_, the Zoom feature is enabled.

If set to _false_, the Zoom feature is disabled.

Example

{% highlight voltMx %}//Sample code to enable enableZoom property in a CordovaBrowser widget.  
frmCBrowser.myCBrowser.enableZoo=true;  

{% endhighlight %}

Platform Availability

*   Available in the IDE
*   Available on all platforms except on Windows platform.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[height Property](javascript:void(0);)

* * *

It determines the height of the widget and measured along the y-axis.

The height property determines the height of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. For supported widgets, the height may be derived from either the widget or container’s contents by setting the height to “preferred”.

Syntax

height

Type

Number, String, and Constant

Read/Write

Read + Write

Remarks

Following are the available measurement options:

*   %: Specifies the values in percentage relative to the parent dimensions.
*   px: Specifies the values in terms of device hardware pixels.
*   dp: Specifies the values in terms of device independent pixels.
*   default: Specifies the default value of the widget.
*   voltmx.flex.USE\_PREFERED\_SIZE: When this option is specified, the layout uses preferred height of the widget as height and preferred size of the widget is determined by the widget and may varies between platforms.

Example

{% highlight voltMx %}//Sample code to set the height property for widgets by using DP, Percentage and Pixels.
frmCBrowser.browser1.height="50dp";

frmCBrowser.browser1. height="10%";

frmCBrowser.browser1. height="10px";

{% endhighlight %}

Platform Availability

*   Available in the IDE
*   iOS
*   Android
*   Windows
*   SPA

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[id Property](javascript:void(0);)

* * *

id is a unique identifier of Browser widget consisting of alpha numeric characters. Every Browser should have a unique id within a Form.

Syntax

id

Type

String

Read/Write

Read only

Example

{% highlight voltMx %}//Defining the properties for a Browser widget with id :"browserID"
var webBasic = {
    id: "browserID",
    isVisible: true,
    screenLevelWidget: false
};

var webLayout = {};

//Creating the Browser.
var browser = new voltmx.ui.Browser(webBasic, webLayout, {});

//Reading the id of the Browser		
voltmx.print("Browser id ::" + browser.id);
{% endhighlight %}

Platform Availability

*   Available in the IDE
*   Available on all platforms

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[info Property](javascript:void(0);)

* * *

A custom JSObject with the key value pairs that a developer can use to store the context with the widget. This will help in avoiding the globals to most part of the programming.

Syntax

info

Type

JSObject

Read/Write

Read + Write

Remarks

This is a **non-Constructor** property. You cannot set this property through widget constructor. But you can read and write data to it.

Info property can hold any JSObject. After assigning the JSObject to info property, the JSObject should not be modified. For example,

{% highlight voltMx %}
var inf = {a: 'hello'};
widget.info = inf; //works
widget.info.a = 'hello world'; 
/*This will not update the widget info a property to Hello world. 
widget.info.a will have old value as hello.*/
{% endhighlight %}

Example

{% highlight voltMx %}//Sample code to set info property for a CordovaBrowser widget

frmCBrowser.myCBrowser.info = {
    key: "zoom of browser"
};

//Reading the info of the CordovaBrowser widget.
voltmx.print("Browser info ::" + frmCBrowser.myCBrowser.info);
{% endhighlight %}

Platform Availability

Available on all platforms

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[isVisible Property](javascript:void(0);)

* * *

This property controls the visibility of a widget on the form.

Syntax

isVisible

Type

Boolean

Read/Write

Read + Write

Remarks

The default value for this property is true.

If set to _false,_ the widget is not displayed.

If set to _true,_ the widget is displayed.

You can also set the visibility of a widget dynamically from code using the setVisibility method.

Example

{% highlight voltMx %}//Sample code to set isVisible property for a CordovaBrowser widget

frmCBrowser.myCBrowser.isVisible=true;
{% endhighlight %}

Platform Availability

*   Available in the IDE
*   Available on all platforms

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[left Property](javascript:void(0);)

* * *

This property determines the lower left corner edge of the widget and is measured from the left bounds of the parent container.

The left property determines the position of the left edge of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. In freeform layout, the distance is measured from the left edge of the parent container. In flow-vertical layout, the distance is measured from the left edge of the parent container. In flow-horizontal layout, the distance is measured from the right edge of the previous sibling widget in the hierarchy.

Syntax

left

Type

String

Read/Write

Read + Write

Remarks

If the layoutType is set as voltmx.flex.FLOW\_HORIZONTAL, the left property is measured from right edge of the left sibling widget.

Example

{% highlight voltMx %}//Sample code to set the left property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.left = "50dp";

frmHome.widgetID.left = "10%";

frmHome.widgetID.left = "10px";
{% endhighlight %}

Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[loadPageInBrowser Property](javascript:void(0);)

* * *

The loadPageInBrowser property is used to specify if the URL in a CordovaBrowser widget should open inside the application or not.

Syntax

loadPageInBrowser

Type

Boolean

Read/Write

Read + Write

Remarks

The default value of loadPageInBrowser property is true.

If the value of this property is _true_, then the URL opens by using the default browser of the device.

If the value of this property is _false_, then the URL opens inside the application.

Example

{% highlight voltMx %}//Sample code to set loadPageInBrowser property for a CordovaBrowser widget.

frmCBrowser.myCBrowser.loadPageInBrowser=true;
{% endhighlight %}

Platform Availability

*   iOS

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[maxHeight Property](javascript:void(0);)

* * *

This property specifies the maximum height of the widget and is applicable only when the height property is not specified.

The maxHeight property determines the maximum height of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. The maxHeight value overrides the preferred, or “autogrow” height, if the maxHeight is less than the derived content height of the widget.

Syntax

maxHeight

Type

Number

Read/Write

Read + Write

Example

{% highlight voltMx %}//Sample code to set the maxHeight property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.maxHeight = "50dp";

frmHome.widgetID.maxHeight = "10%";

frmHome.widgetID.maxHeight = "10px";
{% endhighlight %}

Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[maxWidth Property](javascript:void(0);)

* * *

This property specifies the maximum width of the widget and is applicable only when the width property is not specified.

The Width property determines the maximum width of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. The maxWidth value overrides the preferred, or “autogrow” width, if the maxWidth is less than the derived content width of the widget.

Syntax

maxWidth

Type

Number

Read/Write

Read + Write

Example

{% highlight voltMx %}//Sample code to set the maxWidth property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.maxWidth = "50dp";

frmHome.widgetID.maxWidth = "10%";

frmHome.widgetID.maxWidth = "10px";
{% endhighlight %}

Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[minHeight Property](javascript:void(0);)

* * *

This property specifies the minimum height of the widget and is applicable only when the height property is not specified.

The minHeight property determines the minimum height of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. The minHeight value overrides the preferred, or “autogrow” height, if the minHeight is larger than the derived content height of the widget.

Syntax

minHeight

Type

Number

Read/Write

Read + Write

Example

{% highlight voltMx %}//Sample code to set the minHeight property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.minHeight = "50dp";

frmHome.widgetID.minHeight = "10%";

frmHome.widgetID.minHeight = "10px";
{% endhighlight %}

Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[minWidth Property](javascript:void(0);)

* * *

This property specifies the minimum width of the widget and is applicable only when the width property is not specified.

The minWidth property determines the minimum width of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. The minWidth value overrides the preferred, or “autogrow” width, if the minWidth is larger than the derived content width of the widget.

Syntax

minWidth

Type

Number

Read/Write

Read only

Example

{% highlight voltMx %}//Sample code to set the minWidth property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.minWidth = "50dp";

frmHome.widgetID.minWidth = "10%";

frmHome.widgetID.minWidth = "10px";
{% endhighlight %}

Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[mixedContentMode Property](javascript:void(0);)

* * *

This property is used to set the behavior of CordovaBrowser widget, when a secure URL tries to load a content that is not secure.

Syntax

mixedContentMode

Type

Constant

Read/Write

Read + Write

Remarks

The default value of this property is constants.BROWSER\_MIXED\_CONTENT\_NEVER\_ALLOW.

You can set any of the following value to this property.

*   constants.BROWSER\_MIXED\_CONTENT\_ALWAYS\_ALLOW: When the `mixedContentMode` property is set to this value, the CordovaBrowser widget will load all content from a secure origin. This mode of loading content is least secure and is not recommended.
*   constants.BROWSER\_MIXED\_CONTENT\_NEVER\_ALLOW: When the `mixedContentMode` property is set to this value, the CordovaBrowser widget will not load a content without certifications even if it is from a secure origin. This mode of loading content is secure and is recommended.
*   constants.BROWSER\_MIXED\_CONTENT\_COMPATIBILITY\_MODE: When the `mixedContentMode` property is set to this value, the CordovaBrowser widget behaves similar to a web browser and attempts to load the content without certifications. This content may be loaded or blocked depending on the release and is not explicitly defined. You can use this mode of loading content when your application is not in control of the content, but the content is being operated from a secure environment.

Example

{% highlight voltMx %}//Sample code to set mixedContentMode property for a CordovaBrowser widget.   
  
frmCBrowser.myCBrowser.mixedContentMode = constants.BROWSER_MIXED_CONTENT_COMPATIBILITY_MODE;

{% endhighlight %}

Platform Availability

*   Android 5.0 onwards

> **_Note:_** In an application with target SDK as Android 9 (API level 28), the cleartext content for specific domains is blocked. To enable cleartext for specific domains, you must configure cleartexttraffic in the network security configuration. For more information on cleartexttraffic, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Android_Pie_Behavioral_Changes.html).

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[opacity Property](javascript:void(0);)

* * *

Specifies the opacity of the widget. The value of this property must be in the range 0.0 (transparent) to 1.0 (opaque). Any values outside this range are fixed to the nearest minimum or maximum value.

Specifies the opacity of the widget. Valid opacity values range from 0.0 (transparent), to 1.0 (opaque). Values set to less than zero will default to zero. Values more than 1.0 will default to 1. Interaction events set on a transparent widget will still be fired. To disable the events, also set the “isVisible” property to “false”.

Syntax

opacity

Type

Number

Read/Write

Read + Write

Remarks

> **_Note:_** This property has more priority compared to the values coming from the configured skin.

Example

{% highlight voltMx %}//Sample code to make the widget transparent by using the opacity property.
frmHome.widgetID.opacity = 0;

//Sample code to make the widget opaque by using the opacity property.
frmHome.widgetID.opacity = 1;
{% endhighlight %}

Platform Availability

*   Not available in the IDE.
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[parent Property](javascript:void(0);)

* * *

Helps you access the parent of the widget. If the widget is not part of the widget hierarchy, the parent property returns null.

Syntax

parent

Read/Write

Read only

Remarks

> **_Note:_** The property works for all the widgets inside a FlexForm, FlexContainer or FlexScrollContainer.

Example

{% highlight voltMx %}function func() {

    voltmx.print("The parent of the widget" + JSON.stringify(Form1.widgetID.parent));

}
{% endhighlight %}

Platform Availability

*   Not available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[requestURLConfig Property](javascript:void(0);)

* * *

Specifies the configurations for the requested URL in key-value pairs as a JavaScript object.

Syntax

requestURLConfig

Type

JSObject

Read/Write

Read + Write

Remarks

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

{% highlight voltMx %}[["key1","value1"],["key2","value2"],["keyn", "valuen"]]
{% endhighlight %}

Example

{% highlight voltMx %}//Sample code to invoke requestURLConfig property for a CordovaBrowser widget.
  
var urlConf = {
    URL: "https://www.google.co.in/",
    requestMethod: constants.BROWSER_REQUEST_METHOD_GET,
    headers: headersConf
};  
frmCBrowser.myCBrowser.requestURLConfig=urlConf;

{% endhighlight %}

Platform Availability

*   Available in the IDE
*   Available on all platforms

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[retainContentAlignment Property](javascript:void(0);)

* * *

This property is used to retain the content alignment property value, as it was defined.

> **_Note:_** Locale-level configurations take priority when invalid values are given to this property, or if it is not defined.

The mirroring widget layout properties should be defined as follows.

{% highlight voltMx %}function getIsFlexPositionalShouldMirror(widgetRetainFlexPositionPropertiesValue) {
    return (isI18nLayoutConfigEnabled &&
    localeLayoutConfig[defaultLocale]
    ["mirrorFlexPositionalProperties"] == true &&
    !widgetRetainFlexPositionPropertiesValue);
}
{% endhighlight %}

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

Syntax

retainContentAlignment

Type

Boolean

Read/Write

No (only during widget-construction time)

Example

{% highlight voltMx %}//This is a generic property that is applicable for various widgets.
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
{% endhighlight %}

Platform Availability

*   Available in IDE
*   Windows, iOS, Android, and SPA

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[retainFlexPositionProperties Property](javascript:void(0);)

* * *

This property is used to retain flex positional property values as they were defined. The flex positional properties are left, right, and padding.

> **_Note:_** Locale-level configurations take priority when invalid values are given to this property, or if it is not defined.

The mirroring widget layout properties should be defined as follows.

{% highlight voltMx %}function getIsFlexPositionalShouldMirror(widgetRetainFlexPositionPropertiesValue) {
    return (isI18nLayoutConfigEnabled &&
    localeLayoutConfig[defaultLocale]
    ["mirrorFlexPositionalProperties"] == true &&
    !widgetRetainFlexPositionPropertiesValue);
}
{% endhighlight %}

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

Syntax

retainFlexPositionProperties

Type

Boolean

Read/Write

No (only during widget-construction time)

Example

{% highlight voltMx %}//This is a generic property that is applicable for various widgets.
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
{% endhighlight %}

Platform Availability

*   Available in IDE
*   Windows, iOS, Android, and SPA

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[retainFlowHorizontalAlignment Property](javascript:void(0);)

* * *

This property is used to convert Flow Horizontal Left to Flow Horizontal Right.

> **_Note:_** Locale-level configurations take priority when invalid values are given to this property, or if it is not defined.

The mirroring widget layout properties should be defined as follows.

{% highlight voltMx %}function getIsFlexPositionalShouldMirror(widgetRetainFlexPositionPropertiesValue) {
    return (isI18nLayoutConfigEnabled &&
    localeLayoutConfig[defaultLocale]
    ["mirrorFlexPositionalProperties"] == true &&
    !widgetRetainFlexPositionPropertiesValue);
}
{% endhighlight %}

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

Syntax

retainFlowHorizontalAlignment

Type

Boolean

Read/Write

No (only during widget-construction time)

Example

{% highlight voltMx %}//This is a generic property that is applicable for various widgets.
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
{% endhighlight %}

Platform Availability

*   Available in IDE
*   Windows, iOS, Android, and SPA

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[right Property](javascript:void(0);)

* * *

This property determines the lower right corner of the widget and is measured from the right bounds of the parent container.

The right property determines the position of the right edge of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. In freeform layout, the distance is measured from the left edge of the parent container. In flow-vertical layout, value is ignored. In flow-horizontal layout, the value is ignored.

The right property is used only if the width property is not provided.

Syntax

right

Type

String

Read/Write

Read + Write

Remarks

If the layoutType is set as voltmx.flex.FLOW\_HORIZONTAL, the right property is measured from left edge of the right sibling widget. The horizontal space between two widgets is measured from right of the left sibling widget and left of the right sibling widget.

Example

{% highlight voltMx %}//Sample code to set the right property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.right = "50dp";

frmHome.widgetID.right = "10%";

frmHome.widgetID.right = "10px";
{% endhighlight %}

Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[screenLevelWidget Property](javascript:void(0);)

* * *

Specifies whether the widget should occupy the whole container or not when your Browser widget has a large HTML content to display.

Syntax

screenLevelWidget

Type

Boolean

Read/Write

No

Remarks

The default value for this property is false.

You must set the value to _true_ for your Browser widget occupy the complete Form and results in a good user experience.

If set to _false_, the widget does not occupy the whole container and a scroll bar appears on the Browser widget and the Form resulting in a bad user experience while scrolling.

You must not place more than one Browser widget as a screen level widget inside a Form. Also, if you choose to make a Browser widget a Screen Level Widget, you must place only the Browser widget in the Form and must not place any other widgets in the Form.

Do not set the screen level widget property to true for more than one widget in the form. If you have multiple widgets with this property set as true, there may be issues with how information is displayed along with some scrolling issues.

Few guidelines for using _screenLevelWidget_ property for Browser widget.

*   Placing any widgets below the Browser widget on a form is not advised as this leads to double scrolling issues. Use Browser widget as screen level widget and place the rest of the widgets as part of headers and footers.
*   In order to control the height of the Browser widget, place browser widget as screen level widget inside the ScrollBox and control the height of the ScrollBox.

On iPhone, Android, and Windows platforms, if this property is set to _true_, the following are applicable:

iPhone

> When a browser widget is used on the form, make sure that all other widgets are part of header or footer of the form.

Android

Only the widgets placed above the Browser widget (which is a screen level widget) are visible. The widgets placed below the Browser widget are not visible when rendered.

Windows

> The widgets placed above and below the Browser widget (which is a screen level widget) are not visible when rendered.

> **_Note:_** If you configure Application level Header and Footer, they will be visible even if the browser is a screen level widget.

Example

{% highlight voltMx %}//Sample code to enable screenLevelWidget property in a CordovaBrowser widget.  
frmCBrowser.myCBrowser.screenLevelWidget=true;  

{% endhighlight %}

Platform Availability

*   Available in the IDE
*   Available on all platforms except Desktop Web, and SPA

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[scrollsToTop Property](javascript:void(0);)

* * *

This property enables you to scroll the Browser to top, on tapping a device’s status bar.

Syntax

scrollsToTop

Type

Boolean

Read/Write

Read + Write

Remarks

The default value for this property is true.

If this property is true for more than one widget, then this property is not applied to any of the widgets.

Example

{% highlight voltMx %}//Sample code to enable scrollsToTop property in a CordovaBrowser widget.  
frmCBrowser.myCBrowser.scrollsToTo=true;  

{% endhighlight %}

Platform Availability

*   iPhone
*   iPad

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[settings Property](javascript:void(0);)

* * *

The settings property helps you to configure the Browser Widget settings.

Syntax

settings

Type

Boolean

Read/Write

Read + Write

Remarks

The property is configured as key-value pairs. The settings property accepts the enableJavaScript key. The enableJavaScript key allows to enable or disable the JavaScript in the Browser Widget. Following are the values accepted by the key:

*   `{"enableJavaScript":true}`
*   `{"enableJavaScript":false}`

The default value for the enableJavaScript key is true.

If the enableJavaScript key is set to _false_, the JavaScript is disabled in the Browser Widget.

If the enableJavaScript key is set to _true_, the JavaScript is enabled in the Browser Widget.

The values other than "true" and "false" are discarded.

> **_Note:_** Once the JavaScript is disabled and the Browser Widget is loaded, it is not possible to enable the JavaScript dynamically.

Example

{% highlight voltMx %}//Sample code to enable settings property in a CordovaBrowser widget.  
frmCBrowser.myCBrowser.settings= {
    "enableJavaScript": false,
 };  
  

{% endhighlight %}

Platform Availability

*   Android

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[showProgressIndicator Property](javascript:void(0);)

* * *

Specifies if the progress indicator must be displayed before loading the URL or executing an event.

Syntax

showProgressIndicator

Type

Boolean

Read/Write

Read + Write

Remarks

The default value for this property is true.

If set to _false_, the progress indicator is not displayed on the widget.

If set to _true_, the progress indicator is displayed on the widget.

Example

{% highlight voltMx %}//Sample code to enable showProgressIndicator property in a CordovaBrowser widget.  
frmCBrowser.myCBrowser.showProgressIndicator=true;  

{% endhighlight %}

Platform Availability

*   iOS
*   Android

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[top Property](javascript:void(0);)

* * *

This property determines the top edge of the widget and measured from the top bounds of the parent container.

The top property determines the position of the top edge of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. In freeform layout, the distance is measured from the top edge of the parent container. In flow-vertical layout, the distance is measured from the bottom edge of the previous sibling widget in the hierarchy. In flow-horizontal layout, the distance is measured from the left edge of the parent container.

Syntax

top

Type

String

Read/Write

Read + Write

Remarks

If the layoutType is set as voltmx.flex.FLOW\_VERTICAL, the top property is measured from the bottom edge of the top sibling widget. The vertical space between two widgets is measured from bottom of the top sibling widget and top of the bottom sibling widget.

Example

{% highlight voltMx %}//Sample code to set the top property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.top = "50dp";

frmHome.widgetID.top = "10%";

frmHome.widgetID.top = "10px";
{% endhighlight %}

Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[transform Property](javascript:void(0);)

* * *

Contains an animation transformation that can be used to animate the widget.

Syntax

transform

Type

JSObject

Read/Write

Read + Write

Remarks

This property is set to the identify transform by default. Any transformations applied to the widget occur relative to the widget's anchor point. The transformation contained in this property must be created using the [voltmx.ui.makeAffineTransform]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.ui_functions.html#makeAffi) function.

Example

This example uses the button widget, but the principle remains the same for all widgets that have a transform property.

{% highlight voltMx %}//Animation sample
var newTransform = voltmx.ui.makeAffineTransform();
newTransform.translate3D(223, 12, 56);

//translates by 223 xAxis,12 in yAxis,56 in zAxis
widget.transform = newTransform;
{% endhighlight %}

Platform Availability

*   iOS, Android, Windows, and SPA

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[useWideViewport Property](javascript:void(0);)

* * *

Specifies whether the browser should enable support for the "viewport" HTML meta tag or should use the wide viewport. If this property is set to true, it loads the browser with the attributes defined in the meta tag of the webpage. It scales the web page as defined in the.html.

Syntax

useWideViewport

Type

Boolean

Read/Write

Write only

Remarks

The default value for this property is false.

If this property is set to true, it loads the browser with the attributes defined in the meta tag of the webpage. It scales the web page as defined in the.html.

Example

{% highlight voltMx %}//Sample code to enable useWideViewport property in a CordovaBrowser widget.  
frmCBrowser.myCBrowser.useWideViewpor=true;  

{% endhighlight %}

Platform Availability

Available on Android / Android Tablet  platforms

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[width Property](javascript:void(0);)

* * *

This property determines the width of the widget and is measured along the x-axis.

The width property determines the width of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. For supported widgets, the width may be derived from either the widget or container’s contents by setting the width to “preferred”.

Syntax

width

Type

Number, String, and Constant

Read/Write

Read + Write

Remarks

Following are the options that can be used as units of width:

*   %: Specifies the values in percentage relative to the parent dimensions.
*   px: Specifies the values in terms of device hardware pixels.
*   dp: Specifies the values in terms of device independent pixels.
*   default: Specifies the default value of the widget.
*   voltmx.flex.USE\_PREFERED\_SIZE: When this option is specified, the layout uses preferred width of the widget as width and preferred size of the widget is determined by the widget and may varies between platforms.

Example

{% highlight voltMx %}//Sample code to set the width property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.width = "50dp";

frmHome.widgetID.width = "10%";

frmHome.widgetID.width = "10px";
{% endhighlight %}

Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[zIndex Property](javascript:void(0);)

* * *

This property specifies the stack order of a widget. A widget with a higher zIndex is always in front of a widget with a lower zIndex.

The zIndex property is used to set the stack, or layer order of a widget. Widgets with higher values will appear “over”, or “on top of” widgets with lower values. Widgets layered over other widgets will override any interaction events tied to widgets beneath. Modifying the zIndex does not modify the order of the widgets in the Volt MX Iris hierarchy, inside of a flexContainer or form. The zIndex property accepts only positive values.

Syntax

zIndex

Type

Number

Read/Write

Read + Write

Remarks

The default value for this property is 1.

> **_Note:_** Modifying the zIndex does not modify the order of the widgets inside the FlexContainer. If zIndex is same for group of overlapping widgets then widget order decides the order of overlapping. The last added widget is displayed on top.

From Volt MX Iris V9 SP2 FP7, developers can configure the Z Index value for a Responsive Web app as **Auto** or **Custom**. When the selected Z Index value is **Auto**, the default Z Index value of 1 is applied. When the selected Z Index value is **Custom**, developers can specify a desired numeric value.

Prior to the V9 SP2 FP7 release, the default value for the Z Index was **1**. When developers imported any third-party libraries with the Z index set as **Auto**, content overflow was disabled as the value of Auto is less than 1.

> **_Note:_** The Z Index value Auto is supported only when the Enable JS Library mode is configured as unchecked.

For existing components, the value of the Z Index is configured as **1** for the Native channel. For the Responsive Web channel, the Z Index will be set as **Custom** with **1** as the value.

For new components, the value of the Z Index is configured as **1** for the Native channel. For the Responsive Web channel, the Z Index will be set as **Auto** or **1** based on the project level settings.

> **_Note:_** If ModalContainer property is set to true in any of the FlexContainer widget, the Z Index value of that container and all of its parent containers should be set to **Custom**.

**voltmx.flex.ZINDEX\_AUTO** : Constant to configure the Z Index value as **auto** programmatically.

{% highlight voltMx %}//Sample code to set the ZIndex value to Auto  
 var flx = new voltmx.ui.FlexContainer({ 
  "id": "flx"
  "zIndex": voltmx.flex.ZINDEX_AUTO
});

{% endhighlight %}{% highlight voltMx %}//Sample code to set the ZIndex value to Auto
flx.zIndex = voltmx.flex.ZINDEX\_AUTO;

{% endhighlight %}

Example

{% highlight voltMx %}//Sample code to set the zIndex property for widgets.  
frmHome.widgetID.zIndex = 300;
{% endhighlight %}

Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[zoomDensity Property](javascript:void(0);)

* * *

Specifies the default zoom density of the page. Platform Availability

Syntax

zoomDensity

Type

Number

Read/Write

Write only

Remarks

The available options are:

*   0 - FAR ( makes 100% with 240dpi)
*   1 - MEDIUM (makes 100% with 160dpi)
*   2 - CLOSE (makes 100% with 120dpi)

Example

{% highlight voltMx %}//Sample code to set the zoomDensity property in a CordovaBrowser widget.  
frmCBrowser.myCBrowser.zoomDensity=0;  

{% endhighlight %}

Platform Availability

Available on Android

* * *

