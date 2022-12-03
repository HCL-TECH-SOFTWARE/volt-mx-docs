      

## <a id=""> FlexScrollContainer Properties


The FlexScrollContainer widget provides the following properties.

* * *

accessibilityConfig Property

* * *

* * *

activeStateSkin Property

* * *

* * *

allowHorizontalBounce Property

* * *

Specifies whether the scroll bounce is enabled or disabled in the horizontal direction.

From V9 SP1 release, this property is supported in the Android platform. To use this property in Android platform, you must set the value of [overScrollX](#overScrollX) property as `constants.OVER_SCROLL_ENABLE` or `constants.OVER_SCROLL_DISABLE`.

Syntax

allowHorizontalBounce

Type

Boolean

Read/Write

Read + Write

Remarks

The default value for this property is true (the scroll bounce is enabled in horizontal direction).

The **bounces** property takes precedence over this property.

Example

Setting the allowHorizontalBounce property on an existing widget:

```
Form1.flxScroll.allowHorizontalBounce = true;
```

Platform Availability

Available in the IDE.

*   iOS, Android, and SPA

* * *

allowVerticalBounce Property

* * *

Specifies whether the scroll bounce is enabled or disabled in the vertical direction.

From V9 SP1 release, this property is supported in the Android platform. To use this property in Android platform, you must the value of [overScrollY](#overScrollY) property as `constants.OVER_SCROLL_ENABLE` or `constants.OVER_SCROLL_DISABLE`.

Syntax

allowVerticalBounce

Type

Boolean

Read/Write

Read + Write

Remarks

The default value for this property is true (the scroll bounce is enabled in vertical direction).

The **bounces** property takes precedence over this property.

Example

Setting the allowVerticalBounce property on an existing widget:

```
Form1.flxScroll.allowVerticalBounce = true;
```

Platform Availability

Available in the IDE.

*   iOS, Android, and SPA

* * *

anchorPoint Property

* * *

* * *

animateIcons Property

* * *

When the value of this property is set as **true**, the **[pullToRefreshIcon](#pullToRefreshIcon)** and **[pushToRefreshIcon](#pushToRefreshIcon)** icons rotate by 180 degrees.

Syntax

animateIcons

Type

Boolean

Read/Write

Read + Write

Remarks

The default value for this property is false.

Example

Setting the animateIcons property on an existing widget:

```
Form1.flxScroll.animateIcons= true;
```

Platform Availability

*   Android
*   iOS
*   Windows
*   SPA

* * *

backgroundColor Property

* * *

* * *

blur Property

* * *

* * *

bottom Property

* * *

* * *

bounces Property

* * *

Specifies whether the scroll bounce is enabled or disabled.

From V9 SP1 release, this property is supported in the Android platform.  
To enable the rubber band effect in a FlexScrollContainer widget while scrolling horizontally, in Android platform , set the value of `bounce` property as `true` and the value of [overScrollX](#overScrollX) property as `constants.OVER_SCROLL_ENABLE` or `constants.OVER_SCROLL_DISABLE`.Similarly, to enable the rubber band effect in a FlexScrollContainer widget while scrolling vertically, in Android platform, set the value of `bounce` property as true and the value of [overScrollY](#overScrollY) as `constants.OVER_SCROLL_ENABLE` or `constants.OVER_SCROLL_DISABLE`.

Syntax

bounces

Type

Boolean

Read/Write

Read + Write

Remarks

The default value for this property is true (the scroll bounce is enabled).

Example

```
Form1.flxScroll.bounces = true;
```

Platform Availability

Available in the IDE.

*   iOS, Android, and SPA

* * *

bouncesZoom Property

* * *

Specifies whether the scroll view animates the content scaling when the scaling exceeds the maximum or minimum limits. If the value is set to true, and zooming exceeds either the minimum or maximum limits for scaling, the scroll view temporarily animates the content scaling just past these limits before returning to them. If the property is set to false, zooming stops immediately as it reaches scaling limits.

Syntax

bouncesZoom

Type

Boolean

Read/Write

Read + Write

Remarks

The default value for this property is true.

Example

```
Form1.flxScroll.bouncesZoom = true;
```

Platform Availability

Available in the IDE.

This property is available on iOS platform.

* * *

centerX Property

* * *

* * *

centerY Property

* * *

* * *

clipBounds Property

* * *

Child widgets will be clipped to the bounds of the FlexScrollContainer if this property is set to true.

Syntax

clipBounds

Type

Boolean

Read/Write

Read + Write

Remarks

The default value for this property is True.

This behavior can be used to achieve a “Peek view” in the following way:

*   Make width of the FlexScrollContainer widget lesser than the FlexForms width.
*   Set “clipBounds” to false for FlexScrollContainer widget.
*   Set “pagingEnabled” to true for FlexScrollContainer widget.
*   Set the width of child widgets to exceed that of the FlexScrollContainer when you wish Peek view to be enabled.

Example

```
//Defining properties for FlexScrollContainer
function addWidgetstestfrm() {
    var flexScrollContainer1 = new voltmx.ui.FlexScrollContainer({
        "id": "flexScrollContainer1",
        "top": "19dp",
        "left": "43dp",
        "width": "304dp",
        "height": "251dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": false,
        "layoutType": voltmx.flex.FREE\_FORM
    }, {
        "padding": \[0, 0, 0, 0\]
    }, {});
    flexScrollContainer1.setDefaultUnit(voltmx.flex.DP);
    flexScrollContainer1.add();
    testfrm.add(
        flexScrollContainer1);
}
```
```
//Sample code to set the clipBounds property of a FlexScrollContainer widget.
//Here, the clipBounds property is used to clip the child widgets.
frmHome.flexScrContainer1.clipBounds = true;

//Here, the clipBounds property shows the child widgets outside the container's bounds.
frmHome.flexScrContainer1.clipBounds = false;

```

Platform Availability

Available in the IDE.

*   iOS
*   Android

* * *

contentOffset Property

* * *

* * *

contentOffsetMeasured Property

* * *

Specifies the x and y coordinates of the top-left of the scrollable region measured in dp.

Syntax

contentOffsetMeasured

Type

JSObject ( possible keys x, y and the values are numbers specified in dp)

Read/Write

Read only

Example

```
 var offset = Form1.flxScroll.contentOffsetMeasured;
  voltmx.print("The content offset measured is:"+offset);
```

Platform Availability

Not available in the IDE.

*   iOS
*   Android
*   Windows

* * *

contentSize Property

* * *

Specifies the width and height of the container to accommodate all the widgets placed in it. This will returns the values that developer has set, but never reflects the actual computed content size.

Syntax

contentSize

Type

JSObject (x and y values can be specified in dp, px, and %)

Read/Write

Read + Write

Example

```
Form1.flxScroll.contentSize={
   "width":"100%",
   "height":"100%"
 };
```

Platform Availability

Available in the IDE.

*   iOS
*   Android
*   Windows

* * *

contentSizeMeasured Property

* * *

Specifies the width and height of the container measured in dp.

Syntax

contentSizeMeasured

Type

JSObject (width and height values are numbers specified in dp)

Read/Write

Read only

Example

```
var contentSize1 = Form1.flxScroll.contentSizeMeasured;
alert("content size measured of flex scroll container" + contentSize1);
```

Platform Availability

Not available in the IDE.

*   iOS
*   Android
*   Windows
*   SPA

* * *

cursorType Property

* * *

* * *

decelerating Property

* * *

Returns whether the content is moving in the scroll view after the user lifted their finger. True is returned, if the scroll container is decelerating as a result of flick gesture.

Syntax

decelerating

Type

Boolean

Read/Write

Read only

Example

```
Form1.flxScroll.decelerating = true;
```

Platform Availability

Not available in the IDE.

This property is available on iOS platform.

* * *

disableZoom Property

* * *

This property allows you to enable or disable zooming the FlexScrollContainer.

Syntax

disableZoom

Type

Boolean

Read/Write

Read + Write

Remarks

The default value for this property is true. If set to _true,_ the zooming action on FlexScrollContainer is disabled. User cannot zoom the FlexScrollContainer. If set to _false,_ the zooming action on FlexScrollContainer is enabled. User can zoom the FlexScrollContainer.

Example

```
Form1.flxScroll.disableZoom = false;
```

Platform Availability

Available in the IDE.

Windows Tablet

* * *

dragging Property

* * *

Specify whether the user has begun scrolling the content. True is returned, if the user's finger is in contact with the device screen and has moved.

Syntax

dragging

Type

Boolean

Read/Write

Read only

Example

```
Form1.flxScroll.dragging = true;
```

Platform Availability

Not available in the IDE.

This property is available on iOS platform.

* * *

enable Property

* * *

* * *

enableCache Property

* * *

* * *

enableGpuScrolling Property

* * *

This property enables you to specify how most of the property updates and events for the FlexScrollContainer are handled.

When the enableGpuScrolling property is set to true, the system handles the scrolling events, and the scrolling is smooth. However, generation of scroll events with exact property updates such as content offset are not generated in regular intervals. Use the default value when the fine control of the scrolling is not required.

When this property is set to false, the scrolling events are handled by the widget. In this scenario, all events are generated with exact property updates. However, scrolling may not be as smooth as when the property is set to true. Set this property to false, when fine control on scrolling is required.

Syntax

enableGpuScrolling

Type

Boolean

Read/Write

Read + Write

Remarks

The default value for this property is true.

This property must be set in the Form's init or preshow. When the widget is created dynamically, this property must be set before the widget is added to the Form.

Example

```
//Sample code to enable GPU Scrolling in a FlexScrollContainer widget.
myForm.myflexScroll.enableGpuScrolling = true;
```

Platform Availability

Available in the IDE.

Windows

* * *

enableOnScrollWidgetPositionForSubwidgets Property

* * *

This property enables the FlexScrollContainer widget to iterate into all the widgets that make use of the onScrollWidgetPosition event. The property is available for FlexForm and FlexScrollContainer widgets.

Syntax

enableOnScrollWidgetPositionForSubwidgets

Type

Boolean

Read/Write

Read + Write

Example

```
/\*Sample code to set enableOnScrollWidgetPositionForSubwidgets property in a FlexScrollContainer widget as true\*/
myForm.myfleScroll.enableOnScrollWidgetPositionForSubwidgets = true;
```

Platform Availability

*   Not available in the IDE
*   iOS
*   Android
*   Windows
*   SPA

* * *

enableScrolling Property

* * *

Specifies whether the scrolling is enabled on the container or not.

Syntax

enableScrolling

Type

Boolean

Read/Write

Read + Write

Remarks

The default value for this property is true.

This property does not restrict the scrolling programmatically through scroll container properties and APIs.

Example

```
Form1.flxScroll.enableScrolling = true;
```

Platform Availability

Available in the IDE.

*   iOS, Android, Windows, SPA, and Desktop Web

* * *

height Property

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

**Example – Setting the height property on an existing widget**

Example

```
/\*Sample code to set the height property for a FlexScrollContainer widget by using DP, Percentage and Pixels.\*/
frmFlexContainer.myFlexScrollContainer.height="50dp";

frmFlexContainer.myFlexScrollContainer.height="10%";

frmFlexContainer.myFlexScrollContainer.height="10px";

```

**Example – Setting the height property on widget creation**

```
//Defining the properties for flexscrollcontainer with height: "150dp" 
var flexscrollcontainer1 = new voltmx.ui.FlexScrollContainer({
    "id": "&lt;ID for the Widget&gt;",
    "top": "19dp",
    "width": "200dp",
    "height": "150dp",
    "right": "23dp",
    "zIndex": 1,
    "isVisible": true,
    "clipBounds": true
});
```

Platform Availability

*   Available in the IDE
*   iOS
*   Android
*   Windows
*   SPA

* * *

horizontalScrollIndicator Property

* * *

Specifies whether the scroll indicator to be shown or not in the horizontal direction.

Syntax

horizontalScrollIndicator

Type

Boolean

Read/Write

Read + Write

Remarks

The default value for this property is true.

Scroll Indicators may not be shown permanently. But depending on the platform scroll indicators may appear only during scrolling.

Example

```
Formtest.flxScroll.horizontalScrollIndicator = true;
```

Platform Availability

Available in the IDE.

*   iOS
*   Android
*   Windows
*   SPA

* * *

id Property

* * *

id is a unique identifier of form consisting of alpha numeric characters. Every FlexScrollContainer should have a unique id within an application.

Syntax

id

Type

String - \[Mandatory\]

Read/Write

Read only

Example

```
//Defining id property for FlexScrollContainer 
function addWidgetstestfrm() {
    var flexScrollContainer1 = new voltmx.ui.FlexScrollContainer({
        "id": "flexScrollContainer1",
        "top": "19dp",
        "left": "43dp",
        "width": "304dp",
        "height": "251dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "layoutType": voltmx.flex.FREE\_FORM
    }, {
        "padding": \[0, 0, 0, 0\]
    }, {});
    flexScrollContainer1.setDefaultUnit(voltmx.flex.DP);
    flexScrollContainer1.add();
    testfrm.add(
        flexScrollContainer1);
}
```

Platform Availability

Available in the IDE.

*   iOS
*   Android
*   Windows
*   SPA

* * *

info Property

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

```
var inf = {
    a: "hello"
};
widget.info = inf; //works
widget.info.a = "hello world";
//This will not update the widget info a property to hello world. 
//widget.info.a will have old value as hello.
```

Example

```
var inf = {
    a: "hello"
};
widget.info = inf; //works
widget.info.a = "hello world";
//This will not update the widget info a property to hello world. 
//widget.info.a will have old value as hello.Example
//Defining the properties for a FlexScrollContainer with info property.
var flxScrollConBasic = {
    "id": "flxScrollCon",
    "width": "50dp",
    "height": "30dp",
    "zIndex": 1,
    "zoomScale": 22,
    "minZoomScale": 1.0,
    "maxZoomScale": 1.0,
    "layoutType": voltmx.flex.FREE\_FORM,
    "addWidgets": addWidgetsflxScrollCon
};

var flxScrollConLayout = {
    "padding": \[0, 0, 0, 0\],
    "displayOrientation": constants.FORM\_DISPLAY\_ORIENTATION\_PORTRAIT,
    "paddingInPixel": false
};

var flxScrollConPSP = {
    "retainScrollPosition": true
};

//Creating the FlexContainer.
var flxScrollCon = new voltmx.ui.FlexScrollContainer(flxScrollConBasic, flxScrollConLayout,
    flxScrollConPSP);
flxScrollCon.info = {
    key: "FlexScrollContainerName"
};
//Reading info of the FlexScrollContainer. 
voltmx.print("FlexScrollContainer info ::" + flxScrollCon.info);
```
```
//Sample code to set info property for a FlexScrollContainer widget.

frmFlexContainer.myFlexScrContainer.info = {
    key: "FlexScrollContainerName"
};

//Reading the info of the FlexScrollContainer widget.
voltmx.print("FlexScrollContainer widget info:" +frmFlexContainer.myFlexScrContainer.info);
```

Platform Availability

Not available in the IDE.

*   iOS
*   Android
*   Windows
*   SPA

* * *

isMaster Property

* * *

Specifies whether the container is a master container.

Syntax

isMaster

Type

Boolean

Read/Write

Read Only after initialization.

Remarks

If the `isMaster` property is true, the current widget is a master container and all of the rules and limitations of master containers apply to it. For more information, please see [Masters](Masters.mdl) in the Overviews section of this guide, as well as [Using Masters](http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxlibrary/iris/iris_user_guide/Default.htmll) in the [Iris User Guide](http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxlibrary/iris/iris_user_guide/Default.htmll).

Your app can set the `isMaster` property in this container's constructor. After that, this property is read-only.

Example

```

Form1.flexScrollContainer1.isMaster = true;
```

* * *

isVisible Property

* * *

This property controls the visibility of a widget on the FlexScrollContainer.

Syntax

isVisible

Type

Boolean

Read/Write

Read only

Example

```
Form1.flexScrollContainer1.isVisible = true;
```

Platform Availability

Available in the IDE.

*   iOS
*   Android
*   Windows
*   SPA

* * *

layoutType Property

* * *

Specifies if the arrangement of the widgets either in free form or horizontal or vertical direction.

Syntax

layoutType

Type

Number

Read/Write

Read + Write

Remarks

The default value for this property is voltmx.flex.FREE\_FORM.

![](Resources/Images/layouttype.png)

The available options are:

*   `voltmx.flex.FREE_FORM`: The calculations for free form layout type are:  
      
    *   left is measured from the left bounds of the parent, right is measured from the right bounds of the parent and centerX measured from the left bounds of the parent.
    *   top is measured from the top bounds of the parent, bottom is measured from the bottom bounds of the parent and centerY measured from the bop bounds of the parent.
    *   For x-axis values are width, left, right, centerX in case of % units are relative to parent's width.
    *   For y-axis values are height, top, bottom, centerY in case of % units are relative to parent's height.
*   `voltmx.flex.FLOW_HORIZONTAL`: The calculations for horizontal layout type are:  
      
    *   left is measured from right edge of the left sibling widget and right is measured from the left edge of the right sibling widget.
    *   horizontal space between two widgets is right of the left sibling widget + left of the right sibling widget.
    *   order of the widgets appearing in the flow is the order in which the widgets are added.
    *   top and bottom properties are measured from the boundaries of the parent.
*   `voltmx.flex.FLOW_VERTICAL`: The calculations for vertical layout type are:  
      
    *   top is measured from bottom edge of the top sibling widget and bottom is measured from the top edge of bottom sibling widget.
    *   vertical space between two widgets is bottom of the top sibling widget + top of the bottom sibling widget.
    *   order of the widgets appearing in the flow is the order in which the widgets are added.
    *   left and right properties are measured from the boundaries of the parent.
*   `voltmx.flex.RESPONSIVE_GRID`: When you assign the value of the layoutType property as `voltmx.flex.RESPONSIVE_GRID`, you can assign different layouts for different breakpoints. Here are the some of the things to consider when you assign the Responsive Grid layout.  
    *   Widgets are aligned from left to right with the span and offset values provided in the Look tab of the Properties panel.
    *   You can only provide FlexContainer widget as the direct child after assigning this value to the parent.
    *   The FlexScrollContainer cell respects height, minHeight, maxHeight property only.
    *   If the width of a child widget exceeds the width of the container widget, the next child widget is wrapped and placed in the next row.

Example

```
Form1.flexScrollContainer1.layoutType = voltmx.flex.FREE\_FORM;
```

Platform Availability

Available in the IDE.

*   iOS
*   Android
*   Windows
*   SPA

* * *

left Property

* * *

* * *

maxHeight Property

* * *

* * *

maxWidth Property

* * *

* * *

maxZoomScale Property

* * *

Specifies the maximum scale factor that can be applied to the scroll view's content. The widgets cannot be zoomed beyond the maximum zoom value. The default value is 1.

Syntax

maxZoomScale

Type

Number

Read/Write

Read + Write

Remarks

For example, If you have a form with a flexScrollContainer and an image widget inside flexScrollContainer, when you pinch the screen on flexScrollContainer it will call the function configured using widgetToZoom event. If the function returns image, the image will be zoomed.

```
myForm.myflexScrollContainer.maxZoomScale = 10;

```

Platform Availability

Available in the IDE.

Available on iOS platform only

* * *

minHeight Property

* * *

* * *

minWidth Property

* * *

* * *

minZoomScale Property

* * *

Specifies the minimum scale factor that can be applied to the scroll view's content. The widgets cannot be zoomed below the minimum zoom value. The default value is 1.

Syntax

minZoomScale

Type

Number

Read/Write

Read + Write

Remarks

For example, If you have a form with a FlexScrollContainer and an image widget inside FlexScrollContainer, when you pinch the screen on FlexScrollContainer it will call the function configured using widgetToZoom event. If the function returns image, the image will be zoomed.

```
myForm.myflexScrollContainer.minZoomScale = 1;
```

Platform Availability

Available in the IDE.

Available on iOS platform only.

* * *

opacity Property

* * *

* * *

overScrollX Property

* * *

This property is used to implement over scrolling behavior in Android platform horizontally.

Over scrolling is the behavior in which a parent FlexScrollContainer widget scrolls when a child FlexScrollContainer widget reaches its horizontal or vertical boundary.

By default in Android platform, the parent FlexScrollContainer widget automatically scrolls once the child FlexScrollContainer widget has reached its boundary. However, from V9 SP1 release VoltMX Iris has introduced overScrollX and [overScrollY](#overScrollY) property to maintain consistency throughout various platforms. When you enable any of these properties, the parent FlexScrollContainer widget will start scrolling only after you lift your finger and scroll the child widget again.

`overScrollX` property is supported only when you set [enableScrolling](#enableSc) property to true.

Syntax

overScrollX

Type

Constants

The default value for this property is `constants.OVER_SCROLL_DEFAULT`.

The available options that you can assign to this property are:

*   `constants.OVER_SCROLL_DEFAULT`: When you assign this value to the `overScrollX` property, the FlexScrollContainer widget displays the native platform behavior.  
    In Android platform, when you assign this value, if the user continues scrolling the child FlexScrollContainer widget even after it reaches its boundary, the parent FlexScrollContainer widget will start scrolling automatically.
*   `constants.OVER_SCROLL_ENABLE`: When you assign this value to the `overScrollX` property, the parent FlexScrollContainer widget does not scroll automatically once the child FlexScrollContainer widget has reached its boundary. You must lift your finger and scroll the child widget again.
*   `constants.OVER_SCROLL_DISABLE`: When you assign this value to the `overScrollX` property, the over scrolling to the parent FlexScrollContainer widget is disabled. The parent container does not scroll even if you lift your finger and scroll the child widget again.

To get the rubber band effect in a FlexScrollContainer widget in the horizontal direction, you must set the value of overScrollX property to `constants.OVER_SCROLL_ENABLE` or `constants.OVER_SCROLL_DISABLE` and enable either the [bounces](#bounces) property or [allowHorizontalBounce](#allowHor) property.

Read/Write

Read + Write

Example

```
//Sample code to enable the overScrollX property in a Segment widget.
frmSegment.mySegment.overScrollX=constants.OVER\_SCROLL\_ENABLE;
   
```

Platform Availability

*   Android

* * *

overScrollY Property

* * *

This property is used to implement over scrolling behavior in Android platform vertically.

Over scrolling is the behavior in which a parent FlexScrollContainer widget scrolls when a child FlexScrollContainer widget reaches its horizontal or vertical boundary.

By default in Android platform, the parent FlexScrollContainer widget automatically scrolls once the child FlexScrollContainer widget has reached its boundary. However, from V9 SP1 release VoltMX Iris has introduced [overScrollX](#overScrollX) and `overScrollY` property to maintain consistency throughout various platforms. When you enable any of these properties, the parent FlexScrollContainer widget will start scrolling only after you lift your finger and scroll the child widget again.

`overScrollY` property is supported only when you set [enableScrolling](#enableSc) property to true.

Syntax

overScrollY

Type

Constants

The default value for this property is `constants.OVER_SCROLL_DEFAULT`.

The available options that you can assign to this property are:

*   `constants.OVER_SCROLL_DEFAULT`: When you assign this value to the `overScrollY` property, the FlexScrollContainer widget displays the native Android behavior. That means that the parent FlexScrollContainer widget starts scrolling automatically after the child FlexScrollContainer widget has reached its boundary.
*   `constants.OVER_SCROLL_ENABLE`: When you assign this value to the `overScrollY` property, the parent FlexScrollContainer widget does not scroll automatically once the child FlexScrollContainer widget has reached its boundary. You must lift your finger and scroll again.
*   `constants.OVER_SCROLL_DISABLE`: When you assign this value to the `overScrollY` property, the over scrolling to the parent FlexScrollContainer widget is disabled. The parent container does not scroll even if you lift your finger and scroll the child widget again.

To get the rubber band effect in a FlexScrollContainer widget in the vertical direction, you must set the value of `overScrollY` property to `constants.OVER_SCROLL_ENABLE` or `constants.OVER_SCROLL_DISABLE` and enable either the [bounces](#bounces) property or [allowVerticalBounce](#allowVer) property.

Read/Write

Read + Write

Example

```
//Sample code to enable the overScrollY property in a Segment widget.
frmSegment.mySegment.overScrollY=constants.OVER\_SCROLL\_ENABLE;
   
```

Platform Availability

*   Android

* * *

pagingEnabled Property

* * *

Specifies the whether the paging is enabled for the scroll container. If this property is set to true, the scroll view stops on multiples of the scroll view's bounds when the user scrolls.

Syntax

pagingEnabled

Type

Boolean

Read/Write

Read + Write

Example

```
Form1.flxScroll.pagingEnabled = true;
```

Remarks

The default value for this property is false.

Platform Availability

Available in the IDE.

*   iOS
*   Android
*   Windows

* * *

parent Property

* * *

* * *

pullToRefreshI18NKey Property

* * *

This property specifies the i18N key for the "Pull to refresh" text when the FlexScrollContainer is pulled from the top. **pullToRefreshI18NKey** is applicable only when the value of the [scrollDirection](FlexScrollContainer_Properties.mdl#scrollDi) Property is vertical.

Syntax

pullToRefreshI18NKey

Type

String

Read/Write

Read + Write

Example

```
Form1.flxScroll.pullToRefreshI18NKey= "Pull To Refresh";
```

Remarks

*   The default value of this key is **Pull to refresh**.
*   The value for the i18N key is got from the existing application locale specific i18N resource bundle. If the key is not found in the resource bundle, then the default (english locale) title text is used. For more internationalization APIs, refer the [Internationalization APIs](http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxlibrary/iris/iris_api_dev_guide/content/internationalization.htmll).
*   When the [scrollDirection](FlexScrollContainer_Properties.mdl#scrollDi) Property of the **FlexScrollContainer** is set as vertical, the text provided in the **pullToRefreshI18NKey** and **[pushToRefreshI18NKey](#pushToRefreshI18NKey)** attributes takes precedence over the icons provided in **[pullToRefreshIcon](#pullToRefreshIcon)** and **[pushToRefreshIcon](#pushToRefreshIcon)**.
*   When the [scrollDirection](FlexScrollContainer_Properties.mdl#scrollDi) Property of the **FlexScrollContainer** is set as horizontal, only the icons provided in **[pullToRefreshIcon](#pullToRefreshIcon)** and **[pushToRefreshIcon](#pushToRefreshIcon)** are displayed.

Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

* * *

pullToRefreshIcon Property

* * *

This property specifies the icon to be displayed when the FlexScrollContainer is pulled from the top.

Syntax

pullToRefreshIcon

Type

String

Read/Write

Read + Write

Example

```
Form1.flxScroll.pullToRefreshIcon = "topArrow.png";
```

Remarks

*   When the [scrollDirection](FlexScrollContainer_Properties.mdl#scrollDi) Property of the **FlexScrollContainer** is set as vertical, the text provided in the **[pullToRefreshI18NKey](#pullToRefreshI18NKey)** and **[pushToRefreshI18NKey](#pushToRefreshI18NKey)** attributes takes precedence over the icons provided in **[pullToRefreshIcon](#pullToRefreshIcon)** and **[pushToRefreshIcon](#pushToRefreshIcon)**.
*   When the [scrollDirection](FlexScrollContainer_Properties.mdl#scrollDi) Property of the **FlexScrollContainer** is set as horizontal, only the icons provided in **[pullToRefreshIcon](#pullToRefreshIcon)** and **[pushToRefreshIcon](#pushToRefreshIcon)** are displayed.

Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

* * *

pullToRefreshSkin Property

* * *

This property specifies the skin to be applied to the text that is displayed when the FlexScrollContainer is pulled from the top. **pullToRefreshSkin** property is applicable only when the value of the [scrollDirection](FlexScrollContainer_Properties.mdl#scrollDi) Property is vertical and when the text is displayed.

Syntax

pullToRefreshSkin

Type

String

Read/Write

Read + Write

Example

```
Form1.flxScroll.pullToRefreshSkin = "pullSkin";
```

Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

* * *

pushToRefreshI18NKey Property

* * *

This property specifies the i18N key for the "Push to refresh" text when the FlexScrollContainer is pushed from the bottom. **pushToRefreshI18NKey** is applicable only when the value of the [scrollDirection](FlexScrollContainer_Properties.mdl#scrollDi) Property is vertical.

Syntax

pushToRefreshI18NKey

Type

String

Read/Write

Read + Write

Example

```
Form1.flxScroll.pushToRefreshI18NKey= "Push To Refresh";
```

Remarks

*   The default value of this key is **Push to refresh**.
*   The value for the i18N key is got from the existing application locale specific i18N resource bundle. If the key is not found in the resource bundle, then the default (english locale) title text is used. For more internationalization APIs, refer the [Internationalization APIs](http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxlibrary/iris/iris_api_dev_guide/content/internationalization.htmll).
*   When the [scrollDirection](FlexScrollContainer_Properties.mdl#scrollDi) Property of the **FlexScrollContainer** is set as vertical, the text provided in the **[pullToRefreshI18NKey](#pullToRefreshI18NKey)** and **[pushToRefreshI18NKey](#pushToRefreshI18NKey)** attributes takes precedence over the icons provided in **[pullToRefreshIcon](#pullToRefreshIcon)** and **[pushToRefreshIcon](#pushToRefreshIcon)**.
*   When the [scrollDirection](FlexScrollContainer_Properties.mdl#scrollDi) Property of the **FlexScrollContainer** is set as horizontal, only the icons provided in **[pullToRefreshIcon](#pullToRefreshIcon)** and **[pushToRefreshIcon](#pushToRefreshIcon)** are displayed.

Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

* * *

pushToRefreshIcon Property

* * *

This property specifies the icon to be displayed when the FlexScrollContainer is pushed from the bottom.

Syntax

pushToRefreshIcon

Type

String

Read/Write

Read + Write

Example

```
Form1.flxScroll.pushToRefreshIcon = "downArrow.png";
```

Remarks

*   When the [scrollDirection](FlexScrollContainer_Properties.mdl#scrollDi) Property of the **FlexScrollContainer** is set as vertical, the text provided in the **[pullToRefreshI18NKey](#pullToRefreshI18NKey)** and **[pushToRefreshI18NKey](#pushToRefreshI18NKey)** attributes takes precedence over the icons provided in **[pullToRefreshIcon](#pullToRefreshIcon)** and **[pushToRefreshIcon](#pushToRefreshIcon)**.
*   When the [scrollDirection](FlexScrollContainer_Properties.mdl#scrollDi) Property of the **FlexScrollContainer** is set as horizontal, only the icons provided in **[pullToRefreshIcon](#pullToRefreshIcon)** and **[pushToRefreshIcon](#pushToRefreshIcon)** are displayed.

Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

* * *

pushToRefreshSkin Property

* * *

This property specifies the skin to be applied to the text that is displayed when the FlexScrollContainer is pushed from the bottom. **pushToRefreshSkin** property is applicable only when the value of the [scrollDirection](FlexScrollContainer_Properties.mdl#scrollDi) Property is vertical and when the text is displayed.

Syntax

pushToRefreshSkin

Type

String

Read/Write

Read + Write

Example

```
Form1.flxScroll.pushToRefreshSkin = "pushSkin";
```

Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

* * *

releaseToPullRefreshI18NKey Property

* * *

This property specifies the i18N key for the "Release to refresh" text, when the FlexScrollContainer is pulled from the top. **releaseToPullRefreshI18NKey** is applicable only when the value of the [scrollDirection](FlexScrollContainer_Properties.mdl#scrollDi) Property is vertical.

Syntax

releaseToPullRefreshI18NKey

Type

String

Read/Write

Read + Write

Example

```
Form1.flxScroll.releaseToPullRefreshI18NKey = "Release To Refresh";
```

Remarks

*   The default value of this key is **Release to refresh**.
*   The value for the i18N key is got from the existing application locale specific i18N resource bundle. If the key is not found in the resource bundle, then the default (english locale) title text is used. For more internationalization APIs, refer the [Internationalization APIs](http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxlibrary/iris/iris_api_dev_guide/content/internationalization.htmll).

Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

* * *

releaseToPushRefreshI18NKey Property

* * *

This property specifies the i18N key for the "Release to refresh" text, when the FlexScrollContainer is pushed from the bottom. **releaseToPushRefreshI18NKey** is applicable only when the value of the [scrollDirection](FlexScrollContainer_Properties.mdl#scrollDi) Property is vertical.

Syntax

releaseToPushRefreshI18NKey

Type

String

Read/Write

Read + Write

Example

```
Form1.flxScroll.releaseToPushRefreshI18NKey = "Release To Refresh";
```

Remarks

*   The default value of this key is **Release to refresh**.
*   The value for the i18N key is got from the existing application locale specific i18N resource bundle. If the key is not found in the resource bundle, then the default (english locale) title text is used. For more internationalization APIs, refer the [Internationalization APIs](http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxlibrary/iris/iris_api_dev_guide/content/internationalization.htmll).

Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

* * *

retainContentAlignment Property

* * *

* * *

retainFlexPositionProperties Property

* * *

* * *

retainFlowHorizontalAlignment Property

* * *

* * *

reverseLayoutDirection Property

* * *

The _reverseLayoutDirection_ property specifies the stacking order of the child widgets of FlexContainer. It is not applicable when the value of the [layoutType](#layoutTy) Property is _voltmx.flex.FREE\_FORM_.

The default value of the property is false.

Syntax

reverseLayoutDirection

Type

Boolean

Read / Write

Read + Write

Remarks

1.  If the value of _reverseLayoutDirection_ property is set as false:
    *   When the value of _layoutType_ property is, voltmx.flex.FLOW\_HORIZONTAL, the child widgets are stacked from left to right.
    *   When the value of _layoutType_ property is, voltmx.flex.FLOW\_VERTICAL, the child widgets are stacked from top to bottom.
2.  If the value of _reverseLayoutDirection_ property is set as true:
    *   When the value of _layoutType_ property is, voltmx.flex.FLOW\_HORIZONTAL, the child widgets are stacked from right to left.
    *   When the value of _layoutType_ property is, voltmx.flex.FLOW\_VERTICAL, the child widgets are stacked from bottom to top.

Limitations

*   When the value of _reverseLayoutDirection_ property is true, the frame values of the child widgets are calculated with respect to the [left](#left) property of FlexScrollContainer. The frame values given for different features of FlexScrollContainer widget, such as animation, must reflect this change.
*   When the _reverseLayoutDirection_ property is set as true and any new widget is added or removed dynamically, the scroll of **FlexScrollContainer** is from the left.

Example

You can change the flow layout direction of a FlexScrollContainer with ID as "flexScrContainer" in form "myForm" during run time by entering the following code.

Example 1:

```
var flexScrContainer= new voltmx.ui.FlexScrollContainer({
    "id": " flexScrContainer",
    "top": "60%",
    "left": "0dp",
    "width": "100%",
    "autogrowMode": voltmx.flex.AUTOGROW\_HEIGHT,
    "zIndex": 1,
    "isVisible": true,
    "clipBounds": true,
    "Location": "\[0,0\]",
    "skin": "flexSkin3",
    " reverseLayoutDirection": true,
    "layoutType": voltmx.flex.FLOW\_HORIZONTAL,
}, {
    "padding": \[0, 0, 0, 0\]
}, {});
```

Example 2:

```
//Sample code to set reverse the layout direction in a FlexScrollContainer widget.  
  
myForm.flexScrContainer.reverseLayoutDirection = true;
```

Platform Availability

*   Available in the IDE
*   iOS
*   Android
*   Windows
*   Desktop Web
*   SPA

* * *

right Property

* * *

* * *

scrollDirection Property

* * *

* * *

scrollsToTop Property

* * *

This property enables you to scroll the FlexScrollCotainer to top on tapping a device’s status bar.

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

```
Form3.flxScroll.scrollsToTop = true;
```

Platform Availability

Not available in the IDE.

*   iPhone
*   iPad

* * *

<a name="shadowColor">shadowColor Property

* * *

Specifies the color for the shadow of the widget.

Syntax

shadowColor

Type

Color constant or Hexadecimal number

Read/Write

Read + Write

Remarks

*   Colors can be specified using a 6 digit or an 8-digit hex value with alpha position. For example, ffff65 or ffffff00.
*   When the 4-byte color format (RGBA) string is used, an alpha (A) value of 65 specifies that the color is transparent. If the value is 00, the color is opaque. The Alpha value is in percentage and must be given in the hexadecimal value for the color (100% in hexadecimal value is 65).  
      
    For example, red complete opaque is FF000000. Red complete transparent is FF000065. The values 0x and # are not allowed in the string.
*   A color constant is a String that is defined at the theme level. Ensure that you append the **$** symbol at the beginning of the color constant.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the shadow property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.
*   On the Android platform, if the clipBounds property and the rounded corner is enabled for the FlexScrollContainer widget, the shadowColor appears beyond the rounded corner area.

Example

This example uses the button widget, but the principle remains the same for all widgets that have the shadowColor property.

```
Form1.btn1.shadowColor = "ea5075";
```

Platform Availability

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

shadowOffset Property

* * *

This property specifies the current coordinates of the shadow region in the widget.

Syntax

shadowOffset

Type

JSON Object

Read/Write

Read + Write

Remarks

*   The JSON Object contains the X-coordinate and Y-coordinates for the offset in the following format:
    
    `{x: value in pixels, y: value in pixels}`
    
*   The default unit for the value of this property is pixels.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the shadow property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

Example

This example uses the button widget, but the principle remains the same for all widgets that have the shadowOffset property.

```
Form1.btn1.shadowOffset= {
    "x": "3",
    "y": "27"
};
```

Platform Availability

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

shadowRadius Property

* * *

Specifies the radius for the blur value of the shadow.

Syntax

shadowRadius

**Type**

Number

Read/Write

Read + Write

Remarks

*   The default value of the shadowRadius property for a Responsive Web app is 0.
*   The default unit for the value of this property is pixels.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the shadow property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

Example

This example uses the button widget, but the principle remains the same for all widgets that have the shadowRadius property.

```
 Form1.btn1.shadowRadius = 6;
```

Platform Availability

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

<a name="shouldGroup"></a>shouldGroup Property

* * *

This property enables the grouping of elements within a FlexScrollContainer widget, to mitigate redundancy while invoking multiple elements that have the same context.

Syntax

shouldGroup

Type

Boolean

Read/Write

Read + Write

Example

```
//Sample code to enable the shouldGroup property for a FlexScrollContainer widget.   
  
 var flxPagesHdr = new voltmx.ui.FlexSScrollContainer({
                "autogrowMode": voltmx.flex.AUTOGROW\_NONE,
                "clipBounds": false,
                "height": "180dp",
                "id": "flxPagesHdr",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE\_FORM,
                "left": "-1dp",
                "isModalContainer": false,
                "skin": "slFbox0jdc689d7cdb74a",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100,
                "shouldGroup" : true
            }, {
                "paddingInPixel": false
            }, {});

```

Remarks

Ensure that Accessibility Config is enabled for the app, before you use the shouldGroup property.

Platform Availability

*   Available in the IDE
*   Android
*   iOS

* * *

showFadingEdges Property

* * *

This property enables you to define the display of fading edges for the FlexScrollForm widget.

Syntax

showFadingEdges

Type

String

Read/Write

Read + Write

Example

```
Form3.flxScroll.showFadingEdges = true;
```

Platform Availability

Available in the IDE.

*   iOS
*   Android
*   Windows
*   SPA

* * *

skin Property

* * *

Specifies a background skin for FlexScrollForm widget.

Syntax

skin

Type

String

Read/Write

Read + Write

Remarks

Transparent skin is not supported on SPA (Windows) platform.

Example

```
//Defining the properties for a FlexScrollContainer with skin="sknred".
var flxScrollConBasic = {
    "id": "flxScrollCon",
    "width": "50dp",
    "height": "30dp",
    "zIndex": 1,
    "zoomScale": 22,
    "minZoomScale": 1.0,
    "maxZoomScale": 1.0,
    "top": "19dp",
    "left": "43dp",
    "skin": "sknred",
    "isVisible": true,
    "clipBounds": true,
    "layoutType": voltmx.flex.FREE\_FORM,
    "addWidgets": addWidgetsflxScrollCon
};

var flxScrollConLayout = {
    "padding": \[0, 0, 0, 0\],
    "displayOrientation": constants.FORM\_DISPLAY\_ORIENTATION\_PORTRAIT,
    "paddingInPixel": false
};

var flxScrollConPSP = {
    "retainScrollPosition": true
};

//Creating the FlexContainer.
var flxScrollCon = new voltmx.ui.FlexScrollContainer(flxScrollConBasic, flxScrollConLayout,
    flxScrollConPSP);
```
```
//Sample code to set skin property for a FlexScrollContainer widget.   
  
myForm.myFlexScrContainer.skin="sknred"; 

```

Platform Availability

Available in the IDE.

*   iOS
*   Android
*   Windows
*   SPA

* * *

top Property

* * *

* * *

tracking Property

* * *

Specifies whether the user has touched the content to initiate scrolling. This property returns true, if the user’s finger is in contact with the device screen.

Syntax

tracking

Type

Boolean

Read/Write

Read only

Example

```
//Sample code to read the tracking property of a FlexScrollContainer widget.  
  
voltmx.print("To track the user s finger"+Form1.flxScroll.tracking);  
//Sample code to set the tracking property in a FlexScrollContainer widget.  
  
myForm.myFlexScrollContainer.tracking=true;  

```

Platform Availability

Not available in the IDE.

This property is available on iOS platform.

* * *

transform Property

* * *

* * *

verticalScrollIndicator Property

* * *

Specifies whether the scroll indicator must be shown in the vertical direction.

Syntax

verticalScrollIndicator

Type

Boolean

Read/Write

Read + Write

Remarks

The default value for this property is true.

Scroll Indicators may not be shown permanently. But depending on the platform scroll indicators may appear only during scrolling.

Example

```
Form1.flxScroll.verticalScrollIndicator = true;
```

Platform Availability

Available in the IDE.

*   iOS
*   Android
*   Windows
*   SPA

* * *

widgetSwipeMove Property

* * *

* * *

width Property

* * *

* * *

zIndex Property

* * *

* * *

zooming Property

* * *

A boolean value indicates whether the content view is currently zooming in or out.

Syntax

zooming

Type

Boolean

Read/Write

Read only

Example

```
Form1.flxScroll.zooming = true;
```

Platform Availability

Available in the IDE.

This property is available on iOS platform.

* * *

zoomScale Property

* * *

Specifies the current scale factor applied to the FlexScrollContainer content.

Syntax

zoomScale

Type

Number

Read/Write

Read + Write

Remarks

The default value for this property is 1.

Example

```
Form1.zoomScale = 1.0;
```

Platform Availability

*   Available in the IDE.
*   This property is available on iOS platform.

* * *