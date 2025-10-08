                               


ReactNativeContainer Properties
===============================

The properties of ReactNativeContainer widget are as follows.

* * *


<details close markdown="block"><summary>anchorPoint Property</summary> 

* * *

Specifies the anchor point of the widget-bounds rectangle by using the ReactNativeContainer widget's coordinate space.

### Syntax
```

anchorPoint
```

### Type

JSObject

### Read/Write

Read + Write

### Remarks

The value for this property is a JavaScript dictionary object with the keys **x** and **y**. The values for the x and y keys are floating-point numbers ranging from 0 to 1. All geometric manipulations to the widget occur about the specified point. For example, applying a rotation transform to a widget with the default anchor point causes the ReactNativeContainer widget to rotate around its center.

The default value for this property is center ( {"x":0.5, "y":0.5} ), that represents the center of the widgets bounds rectangle. The behavior is undefined if the values are outside the range zero (0) to one (1).

### Example

```

Form1.widget1.anchorPoint = {
    "x": 0.5,
    "y": 0.5
};
```

### Available in the IDE

Yes

### Platform Availability

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>bottom Property</summary>

* * *

This property determines the bottom edge of the widget and is measured from the bottom bounds of the parent container.

The bottom property determines the position of the bottom edge of the ReactNativeContainer widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. In freeform layout, the distance is measured from the bottom edge of the parent container. In flow-vertical layout, the value is ignored. In flow-horizontal layout, the value is ignored.

The bottom property is used only if the Height property is not provided.

### Syntax

bottom

### Type

String

### Read/Write

Read + Write

### Remarks

The property determines the bottom edge of the ReactNativeContainer widget and is measured from the bottom bounds of the parent container.

If the layoutType is set as voltmx.flex.FLOW\_VERTICAL, the bottom property is measured from the top-edge of the bottom sibling widget. The vertical space between two widgets is measured from bottom of the top sibling widget and the top of the bottom sibling widget.

### Example

```

//Sample code to set the bottom property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.bottom = "50dp";

frmHome.widgetID.bottom = "10%";

frmHome.widgetID.bottom = "10px";
```

### Available in the IDE

Yes

### Platform Availability

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>centerX Property</summary>

* * *

This property determines the center of a ReactNativeContainer widget measured from the left bounds of the parent container.

The centerX property determines the horizontal center of the ReactNativeContainer widget’s bounding box. The value may be set by using DP (Device Independent Pixels), Percentage, or Pixels. In free-form layout, the distance is measured from the left-edge of the parent container. In flow-vertical layout, the distance is measured from the left-edge of the parent container. In flow-horizontal layout, the distance is measured from the right-edge of the previous sibling widget in the hierarchy.

### Syntax

centerX

### Type
```

String
```

### Read/Write

Read + Write

### Remarks

If the layoutType is set as voltmx.flex.FLOW\_HORIZONTAL, the centerX property is measured from the right-edge of the left sibling widget.

### Example

```

//Sample code to set the centerX property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.centerX = "50dp";

frmHome.widgetID.centerX = "10%";

frmHome.widgetID.centerX = "10px";
```

### Available in the IDE

Yes

### Platform Availability

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>centerY Property</summary>

* * *

This property determines the center of a ReactNativeContainer widget measured from the top bounds of the parent container.

The centerY Property determines the vertical center of the widget’s bounding box. The value may be set by using DP (Device Independent Pixels), Percentage, or Pixels. In free-form layout, the distance is measured from the top-edge of the parent container. In flow-horizontal layout, the distance is measured from the top-edge of the parent container. In flow-vertical layout, the distance is measured from the bottom-edge of the previous sibling widget in the hierarchy.

### Syntax
```

centerY
```

### Type

String

### Read/Write

Read + Write

### Remarks

If the layoutType is set as voltmx.flex.FLOW\_VERTICAL, the centerY property is measured from bottom-edge of the top sibling widget.

### Example

```

//Sample code to set the centerY property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.centerY = "50dp";

frmHome.widgetID.centerY = "10%";

frmHome.widgetID.centerY = "10px";
```

### Available in the IDE

Yes

### Platform Availability

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>height Property</summary>

* * *

This property determines the height of the widget, and is measured along the y-axis.

The height property determines the height of the ReactNativeContainer widget’s bounding box. The value may be set by using DP (Device Independent Pixels), Percentage, or Pixels. For supported widgets, the height may be derived from either the widget or container’s contents by setting the height to Preferred.

### Syntax
```

height
```

### Type

Number, String, and Constant

### Read/Write

Read + Write

### Remarks

The available measurement options are as follows:

*   %: Specifies the values in percentage relative to the parent dimensions.
*   px: Specifies the values in terms of device hardware pixels.
*   dp: Specifies the values in terms of device independent pixels.
*   default: Specifies the default value of the widget.
*   voltmx.flex.USE\_PREFERED\_SIZE: When this option is specified, the layout uses the preferred height of the ReactNativeContainer widget as height and the preferred size of the ReactNativeContainer widget is determined by the widget, and may vary between platforms.

### Example

```

/*Sample code to set the height property for ReactNativeContainer widget by using DP, Percentage and Pixels.*/  
  
frmHome.reactnativecontainer1.height = "50dp";
  
frmHome.reactnativecontainer1.height = "10%";

frmHome.reactnativecontainer1.height = "10px";

```

### Available in the IDE

Yes

### Platform Availability

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>id Property</summary>

* * *

id is a unique identifier of ReactNativeContainer consisting of alpha-numeric characters. Every ReactNativeContainer should have a unique id within an application.

### Syntax
```

id
```

### Type

String - \[Mandatory\]

### Read/Write

Read-only

### Example

```

//Defining properties for ReactNativeContainer widget on a FlexForm
function addWidgetstestfrm() {
    var reactnativecontainer1 = new voltmx.ui.ReactNativeContainer({
        "id": "reactnativecontainer1",
        "top": "19dp",
        "left": "43dp",
        "width": "304dp",
        "height": "251dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "reactNativeAppID": "reactNativeSampleApp",
        "layoutType": voltmx.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});
    reactnativecontainer1.setDefaultUnit(voltmx.flex.DP);
    reactnativecontainer1.add();
    testfrm.add(
        reactnativecontainer1);
}

function testfrmGlobals() {
    var MenuId = [];
    testfrm = new voltmx.ui.Form2({
        "id": "testfrm",
        "width": "50dp",
        "height": "30dp",
        "zIndex": 1,
        "zoomScale": 22,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "layoutType": voltmx.flex.FREE_FORM,
        "addWidgets": addWidgetstestfrm
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": true

    });
    testfrm.setDefaultUnit(voltmx.flex.PX);
}
```

Available in the IDE

Yes

### Platform Availability

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>info Property</summary>

* * *

A custom JSObject with the key value pairs that a developer can use to store the context with the widget. This will help in avoiding the globals to most part of the programming.

### Syntax
```

info
```

### Type

JSObject

### Read/Write

Read + Write

### Remarks

> **_Note:_** This is a **non-Constructor** property. You cannot set this property through widget constructor. But you can read and write data to it.

The info property can hold any JSObject. After assigning the JSObject to info property, the JSObject should not be modified. For example,

```

var inf = {
    a: "hello"
};
widget.info = inf; //works
widget.info.a = "hello world";
//This will not update the widget info a property to hello world. 
//widget.info.a will have old value as hello.
```

### Example

```

//Sample code to set the info property of a ReactNativeContainer widget.  
  
frmRNativeC.myRNativeC.info={
   key: "ReactNativeContainerName"
};  
//Reading info of the ReactNativeContainer widget.
alert("ReactNativeContainer widget info is ::" +frmRNativeC.myRNativeC.info);

```

### Available in the IDE

No

### Platform Availability

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>isVisible Property</summary>

* * *

This property controls the visibility of a widget on the ReactNativeContainer.

### Syntax
```

isVisible
```

### Type

Boolean

### Read/Write

Read + Write

### Remarks

The default value of this property is true.

### Example

```

//Sample code to set the isVisible property of a ReactNativeContainer widget.  
  
frmRNativeC.myRNativeC.isVisible=true;
```

### Available in the IDE

Yes

### Platform Availability

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>left Property</summary>

* * *

This property determines the lower left corner edge of the ReactNativeContainer widget and is measured from the left bounds of the parent container.

The left property determines the position of the left edge of the ReactNativeContainer widget’s bounding box. The value may be set by using DP (Device Independent Pixels), Percentage, or Pixels. In free-form layout, the distance is measured from the left-edge of the parent container. In flow-vertical layout, the distance is measured from the left-edge of the parent container. In flow-horizontal layout, the distance is measured from the right-edge of the previous sibling widget in the hierarchy.

### Syntax
```

left
```

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

### Available in the IDE

Yes

### Platform Availability

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>maxHeight Property</summary>

* * *

This property specifies the maximum height of the ReactNativeContainer widget and is applicable only when the height property is not specified.

The maxHeight property determines the maximum height of the ReactNativeContainer widget’s bounding box. The value may be set by using DP (Device Independent Pixels), Percentage, or Pixels. The maxHeight value overrides the preferred, or autogrow height, if the maxHeight is less than the derived content height of the ReactNativeContainer widget.

### Syntax
```

maxHeight
```

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

*   Available in IDE
*   iOS, Android

* * *

</details>
<details close markdown="block"><summary>maxWidth Property</summary>

* * *

This property specifies the maximum width of the ReactNativeContainer widget and is applicable only when the width property is not specified.

The Width property determines the maximum width of the ReactNativeContainer widget’s bounding box. The value may be set by using DP (Device Independent Pixels), Percentage, or Pixels. The maxWidth value overrides the preferred, or autogrow” width, if the maxWidth is less than the derived content width of the ReactNativeContainer widget.

### Syntax
```

maxWidth
```

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

### Available in the IDE

Yes

### Platform Availability

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>minHeight Property</summary>

* * *

This property specifies the minimum height of the ReactNativeContainer widget and is applicable only when the height property is not specified.

The minHeight property determines the minimum height of the ReactNativeContainer widget’s bounding box. The value may be set by using DP (Device Independent Pixels), Percentage, or Pixels. The minHeight value overrides the preferred, or autogrow height, if the minHeight is larger than the derived content height of the ReactNativeContainer widget.

### Syntax
```

minHeight
```

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

### Available in the IDE

Yes

### Platform Availability

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>minWidth Property</summary>

* * *

This property specifies the minimum width of the ReactNativeContainer widget and is applicable only when the width property is not specified.

The minWidth property determines the minimum width of the ReactNativeContainer widget’s bounding box. The value may be set by using DP (Device Independent Pixels), Percentage, or Pixels. The minWidth value overrides the preferred, or autogrow width, if the minWidth is larger than the derived content width of the widget.

### Syntax
```

minWidth
```

### Type

Number

### Read/Write

Read-only

### Example

```

//Sample code to set the minWidth property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.minWidth = "50dp";

frmHome.widgetID.minWidth = "10%";

frmHome.widgetID.minWidth = "10px";
```

### Platform Availability

*   Available in IDE
*   iOS, Android

* * *

</details>
<details close markdown="block"><summary>nativeModulePackages Property</summary>

* * *

If the embedded React Native app contains Native modules, then those modules are listed through the nativeModulePackages Property.

> **_Note:_** You can refer the getPackages Method of MainApplication.java of ReactNative app to know exactly which Native modules are being added (the MainReactPackage Native module is added by default).

> **_Note:_** You must specify fully qualified names of the class (for example, **com.package.class**).

### Syntax
```

nativeModulePackages
```

### Type

JSArray of Strings

### Read/Write

Read + Write

### Config Bucket

pspConfig

### Example

```

//Sample code to set the nativeModulePackages property for ReactNativeContainer widget.  
  
frmHome.reactnativecontainer1.nativeModulePackages=["com.org.class1", "com.org.class2", "a.b.c.one"];
```

### Platform Availability

*   Android

* * *

</details>
<details close markdown="block"><summary>parent Property</summary>

* * *

Helps you access the parent of the ReactNativeContainer widget. If the ReactNativeContainer widget is not part of the widget hierarchy, the parent property returns null.

### Syntax
```

parent
```

### Read/Write

Read only

### Remarks

> **_Note:_** The property works for the ReactNativeContainer widget whether it is placed inside a FlexContainer, a Form, or an HBox.

### Example

```

function func() {

    voltmx.print("The parent of the widget" + JSON.stringify(Form1.widgetID.parent));

}
```

### Platform Availability

*   Not Available in IDE
*   iOS, Android

* * *

</details>
<details close markdown="block"><summary>reactNativeAppID Property</summary>

* * *

The app name of the React Native project, which is mentioned in the app.json file located at the root folder of the React Native app folder.

> **_Note:_** If the React Native Container is already displayed, then setting the new _reactNativeAppID_ property will not reflect the changes immediately; it is reflected when the container is shown again.

### Syntax
```

reactNativeAppID
```

Type

String

### Read/Write

Read + Write

### Config Bucket

basicConfig

### Example

```

//Sample code to set the reactNativeAppID property for ReactNativeContainer widget.  
  
frmHome.reactnativecontainer1.reactNativeAppID="reactNativeSampleApp";
```

Platform Availability

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>right Property</summary>

* * *

This property determines the lower-right corner of the ReactNativeContainer widget and is measured from the right bounds of the parent container.

The right property determines the position of the right edge of the ReactNativeContainer widget’s bounding box. The value may be set by using DP (Device Independent Pixels), Percentage, or Pixels. In free-form layout, the distance is measured from the left edge of the parent container. In flow-vertical layout, the value is ignored. In flow-horizontal layout, the value is ignored.

The right property is used only if the width property is not provided.

### Syntax
```

right
```

### Type

String

### Read/Write

Read + Write

### Remarks

If the layoutType is set as voltmx.flex.FLOW\_HORIZONTAL, the right property is measured from the left-edge of the right sibling widget. The horizontal space between two widgets is measured from right of the left sibling widget and left of the right sibling widget.

### Example

```

//Sample code to set the right property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.right = "50dp";

frmHome.widgetID.right = "10%";

frmHome.widgetID.right = "10px";
```

### Platform Availability

*   Available in IDE
*   iOS, Android

* * *

</details>
<details close markdown="block"><summary>top Property</summary>

* * *

This property determines the top-edge of the ReactNativeContainer widget and measured from the top bounds of the parent container.

The top property determines the position of the top edge of the ReactNativeContainer widget’s bounding box. The value may be set by using DP (Device Independent Pixels), Percentage, or Pixels. In free-form layout, the distance is measured from the top-edge of the parent container. In flow-vertical layout, the distance is measured from the bottom-edge of the previous sibling widget in the hierarchy. In flow-horizontal layout, the distance is measured from the left-edge of the parent container.

### Syntax
```

top
```

### Type

String

### Read/Write

Read + Write

### Remarks

If the layoutType is set as voltmx.flex.FLOW\_VERTICAL, the top property is measured from the bottom-edge of the top sibling widget. The vertical space between two widgets is measured from bottom of the top sibling widget and top of the bottom sibling widget.

### Example

```

//Sample code to set the top property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.top = "50dp";

frmHome.widgetID.top = "10%";

frmHome.widgetID.top = "10px";
```

### Platform Availability

*   Available in IDE
*   iOS, Android

* * *

</details>
<details close markdown="block"><summary>transform Property</summary>

* * *

Contains an animation transformation that can be used to animate the ReactNativeContainer widget.

### Syntax
```

transform
```

### Type

JSObject

### Read/Write

Read + Write

### Remarks

This property is set to the identify transform by default. Any transformations applied to the widget occur relative to the ReactNativeContainer widget's anchor point. The transformation contained in this property must be created by using the [voltmx.ui.makeAffineTransform](../../../Iris/iris_api_dev_guide/content/voltmx.ui_functions.md#makeAffi) function.

### Example

This example uses a Button widget, but the principle remains the same for the ReactNativeContainer widget.

```

//Animation sample
var newTransform = voltmx.ui.makeAffineTransform();
newTransform.translate3D(223, 12, 56);

//translates by 223 xAxis,12 in yAxis,56 in zAxis
widget.transform = newTransform;
```

### Platform Availability

*   Available in IDE
*   iOS, Android

* * *

</details>
<details close markdown="block"><summary>width Property</summary>

* * *

This property determines the width of the ReactNativeContainer widget and is measured along the x-axis.

The width property determines the width of the ReactNativeContainer widget’s bounding box. The value may be set by using DP (Device Independent Pixels), Percentage, or Pixels. For supported widgets, the width may be derived from either the widget or container’s contents by setting the width to Preferred.

### Syntax
```

width
```

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

Example

```

//Sample code to set the width property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.width = "50dp";

frmHome.widgetID.width = "10%";

frmHome.widgetID.width = "10px";
```

### Available in the IDE

Yes

### Platform Availability

*   Available in IDE
*   iOS, Android

* * *

</details>
<details close markdown="block"><summary>zIndex Property</summary>

This property specifies the stack order of the ReactNativeContainer widget. A ReactNativeContainer with a higher zIndex is always in front of a widget with a lower ReactNativeContainer.

The zIndex property is used to set the stack, or layer order of a ReactNativeContainer widget. Widgets with higher values will appear “over”, or “on top of” widgets with lower values. Widgets layered over other widgets will override any interaction events tied to widgets beneath. Modifying the zIndex does not modify the order of the widgets in the Volt MX Iris hierarchy, inside of a flexContainer or form. zIndex accepts both negative and positive values.

### Syntax
```

zIndex
```

### Type

Number

### Read/Write

Read + Write

### Remarks

The default value for this property is 1.

> **_Note:_** Modifying the zIndex does not modify the order of the widgets inside the ReactNativeContainer. If zIndex is same for group of overlapping widgets then the widget order decides the order of overlapping. The last added widget is displayed on top.

### Example

```

//Sample code to set the zIndex property for widgets.  
frmHome.widgetID.zIndex = 300;
```

### Platform Availability

*   Available in IDE
*   iOS, Android

* * *

