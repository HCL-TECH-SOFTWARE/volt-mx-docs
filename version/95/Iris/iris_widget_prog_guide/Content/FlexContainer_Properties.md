      

 FlexContainer Properties


The properties for FlexContainer widget are as follows.

* * *

accessibilityConfig Property

* * *

* * *

activeStateSkin Property

* * *

* * *

a11yNavigationMode

* * *

The property helps to specify the type of navigation order that should be used in the FlexContainer.

Syntax

a11yNavigationMode

Type

Number

Read/Write

Read + Write

Remarks

You can define any one of the following values to the property:

*   constants.ACCESSIBILITY\_NAVIGATION\_MODE\_NATIVE: Native accessibility navigation. Applies the platform's default accessibility navigation order. This is the default value for the property.
*   constants.ACCESSIBILITY\_NAVIGATION\_MODE\_PARENT: Applies a custom navigation for widgets based on the a11yIndices set to the child widgets.
*   constants.ACCESSIBILITY\_NAVIGATION\_MODE\_DEFAULT: Derives the property value from its immediate parent going all the way to form level.

Example

```
var flexContainer1 = new voltmx.ui.FlexContainer({
    "id": "flexContainer1",
    "top": "19dp",
    "left": "43dp",
    "width": "304dp",
    "height": "251dp",
    "zIndex": 1,
    "isVisible": true,
    "clipBounds": true,
    "layoutType": voltmx.flex.FREE\_FORM,
    "accessibilityConfig": {
        "a11yNavigationMode": constants.ACCESSIBILITY\_NAVIGATION\_PARENT
    }

});
```
```
//Sample code to set the a11yNavigationMode property to a FlexContainer widget.

myForm.myFlexContainer.accessibilityConfig = {
    "a11yNavigationMode": constants.ACCESSIBILITY\_NAVIGATION\_PARENT   
};
```

Availability

iOS

* * *

anchorPoint Property

* * *

* * *

autogrowMode Property (Deprecated)

* * *

This property is enables you to grow the height of the FlexContainer when child widgets or content is added on the FlexContainer. The options are:

The autogrowMode property is used to set the height of a widget dynamically based on the derived height of the widget’s content, or from the child widget’s contents. The options are:

*   voltmx.flex.AUTOGROW\_NONE (value is 0)
*   voltmx.flex.AUTOGROW\_HEIGHT (value is 1)

Syntax

autogrowMode

Type

Number

Read/Write

Read only

Remarks

If you want to configure this property in , configure the height property of FlexContainer as preferred, then generates the autogrowMode property as voltmx.flex.AUTOGROW\_HEIGHT.

The default value for this property is voltmx.flex.AUTOGROW\_NONE.

If one or all the child widgets height or other properties such as centerY, top, bottom, minHeight or maxHeight are used in determining the height given in percentage (%), then the autogrowMode property will not work for the FlexContainer and its height fallback to default configuration value.

Rules and priorities of autogrowMode property

*   The autogrowMode property is ignored if the height of the widget is computable either through explicit value or implicit calculation.
    
*   If the autogrowMode property is configured as voltmx.flex.AUTOGROW\_HEIGHT, then preferredSize (based on content or child widgets ) is computed, and min/max constraints are applied.
*   If the autogrowMode property is configured as voltmx.flex.AUTOGROW\_NONE, the default value is applied with min/max constraints.
*   The height of a FlexContainer widget will not grow dynamically if the height of any widget changes because of the change in widget's skin state (such as from normal to focus).
*   If a widgets top value is given in negative values, then the widget is clipped in case of Free Form and overlapped on the previous widget in case of Flow Vertical.
*   The autogrowMode property is not supported for a FlexContainer widget that is placed inside an HBox or a VBox.
*   For example, a FlexContainer (flexA) has a FlexContainer (flexB), which is not set to grow dynamically, whose clipBounds is set to false. The children of flexB that are out of the bounds of flexB do not have any effect on the height of flexA. Only the heights of direct children of flexA will decide the height of flexA.
*   In templates, FlexContainer will grow only in SegmentedUI Table View only. In all other views, autogrowMode property is not supported.
*   The autogrowMode property for a FlexContainer is not supported in the Tab Widget.
*   In the Windows platform, the autogrowMode property of a SegmentedUI is not supported inside a FlexContainer.
*   The autogrowMode property of a SegmentedUI with a large number of rows leads to performance and memory issues.
*   Excessive usage of auto grow flex containers inside a form will impact the performance of the application.
*   Rendering of widgets with preferred height or preferred width will take more time in mobile and tablet browsers compared to desktop browsers.
*   When animating the height property of the child widget of a FlexContainer in iOS, Windows, and SPA platforms, after the animation is complete, then parent containers height increases based on the value provided in 100th step when fillMode is configured as voltmx.anim.FILL\_MODE\_FORWARDS.
*   When animating the height property of the child widget of a FlexContainer in the Android platform, the parent container's height grows along with the child widget's height.

When to Use

Case1: If the height of the FlexContainer is dependent on the heights of the child widgets that are added.

Case2: If you are using the FlexContainer in a SegmentedUI template, where each row of the SegmentedUI row height is dependent on the child widgets content. Configure the height property of the FlexContainer as preferred, then generates the autogrowMode property as voltmx.flex.AUTOGROW\_HEIGHT.

Example

Setting the autogrowMode property on an existing widget

```
//Sample code to set the autogrowMode property of a FlexContainer widget.
//Here, flexcontainer1 FlexContainer retains the height given in the height Property.
frmHome.flexcontainer1.autogrowMode=voltmx.flex.AUTOGROW\_NONE;

//Here, flexcontainer1 FlexContainer uses the child widget content to determine its height.
frmHome.flexcontainer1.autogrowMode=voltmx.flex.AUTOGROW\_HEIGHT;
```

Example

Setting the autogrowMode property on widget creation

```
//Flex Container Creation.
var flexcontainer1 = new voltmx.ui.FlexContainer({
    "id": "flexcontainer1",
    "isVisible": true,
    "width": "100%",
    "zIndex": 1,
    "clipBounds": true,
    "skin": "skin3",
    "autogrowMode": voltmx.flex.AUTOGROW\_HEIGHT,
    "layoutType": voltmx.flex.FREE\_FORM
});

flexcontainer1.setDefaultUnit(voltmx.flex.DP);
```

Platform Availability

Not available in the IDE.

*   iOS
*   Android / Android Tablet
*   Windows
*   SPA

* * *

backgroundColor Property

* * *

* * *

backgroundColorMultiStepGradient Property

* * *

* * *

backgroundColorTwoStepGradient Property

* * *

* * *

backgroundImage Property

* * *

* * *

blur Property

* * *

* * *

borderColor Property

* * *

* * *

borderColorGradient Property

* * *

* * *

borderStyle Property

* * *

* * *

borderWidth Property

* * *

* * *

bottom Property

* * *

* * *

centerX Property

* * *

* * *

centerY Property

* * *

* * *

childAlign Property- Deprecated as per DOC-4351

* * *

This property decides the stacking direction of the child widgets of a FlexContainer.

**Note**: This property is supported only in FlexContainer widgets

It can have any of the following possible values:

1.  voltmx.flex.ALIGN\_CHILD\_TOP\_TO\_BOTTOM
2.  voltmx.flex.ALIGN\_CHILD\_BOTTOM\_TO\_TOP
3.  voltmx.flex.ALIGN\_CHILD\_LEFT\_TO\_RIGHT
4.  voltmx.flex.ALIGN\_CHILD\_RIGHT\_TO\_LEFT

Syntax

childAlign

Type

Constant

Read/Write

Read + Write

Remarks

1.  The applicable values for a FlexContainer with layoutType as Horizontal are as follows:
    1.  voltmx.flex.ALIGN\_CHILD\_LEFT\_TO\_RIGHT (This is the default and fallback value)
    2.  voltmx.flex.ALIGN\_CHILD\_RIGHT\_TO\_LEFT
2.  The applicable values for a FlexContainer with layoutType as Vertical are as follows:
    1.  voltmx.flex.ALIGN\_CHILD\_TOP\_TO\_BOTTOM (This is the default and fallback value)
    2.  voltmx.flex.ALIGN\_CHILD\_BOTTOM\_TO\_TOP

Example

You can change the flow layout direction of a FlexContainer with ID as "flexContainer1" in form "frm1" during run time by entering the following code.

```
frm1.flexContainer1.childAlign = voltmx.flex.ALIGN\_CHILD\_RIGHT\_TO\_LEFT;
```

Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, and SPA

* * *

clipBounds Property

* * *

This property specifies whether to clip the child widgets when they go out of boundaries.

The clipBounds property specifies whether the container’s bounding box will “clip” the child widgets of the container. If set to false, all of the child widgets will be visible, even if outside of the parent container’s visible area.

Syntax

clipBounds

Type

Boolean

Read/Write

Read + Write

Remarks

The default value for this property is true.

In Windows platform, setting the clipBounds property to false on FlexContainer with Free form layout may not work if FlexContainer has border width. It automatically clips.

This property does not have any effect on the following scrollable widgets:

*   FlexScrollContainer
*   Map
*   SegmentedUI
*   Browser

Example

Setting the clipBounds property on an existing widget

```
//Sample code to set the clipBounds property of a FlexContainer widget.
//Here, the clipBounds property is used to clip the child widgets.
frmHome.flexcontainer1.clipBounds = true;

//Here, the clipBounds property shows the child widgets outside the container's bounds.
frmHome.flexcontainer1.clipBounds = false;

```

Setting the clipBounds property on widget creation

```
//Defining the properties for flexcontainer with clipBounds: true 
var flexcontainer1 = new voltmx.ui.Flexcontainer({
    "id": "&lt;ID for the Widget&gt;",
    "width": "200dp",
    "height": "150dp",
    "maxHeight": "200dp",
    "centerX": "180dp",
    "centerY": "200dp",
    "zIndex": 1,
    "isVisible": true,
    "clipBounds": true
});
```

Platform Availability

Available in the IDE.

*   iOS
*   Android
*   Windows
*   SPA

* * *

clipView Property

* * *

Defines a shape to clip the widget view.

Syntax

clipView ()

Type

JSObject

Parameters

shape

Optional. A key-value pair represents a shape of the clipping. You can clip a view as follows:

_VIEW\_CLIP\_SHAPE\_RECTANGLE_: The widget view is rectangle. By default, the value is set.

_VIEW\_CLIP\_SHAPE\_ROUNDED\_RECTANGLE_: The widget view is rectangle with rounded corners.

_VIEW\_CLIP\_SHAPE\_CIRCLE_: The widget view is circular.

bounds

Optional. A key-value pair represents the bounds of the shape to clip a view. Specify the bounds as an array of integers \[left, top, right, bottom\].

boundsInPixel

Optional. Defines whether the units of specified bounds should be in pixels or in percentage. The property takes the Boolean value.

_true_: Indicates the specified bounds should be in pixels.

_false_: Indicates the specified bounds should be in percentage.

radius

Optional. Specifies the radius of the clipping shape. Represents the corner radius of the rounded rectangular shape when the clipping shape is VIEW\_CLIP\_SHAPE\_ROUNDED\_RECTANGLE or represents the radius of a circle when the clipping shape is VIEW\_CLIP\_SHAPE\_CIRCLE.

Read/Write

Read + Write

Remarks

The property enables you to change the shape of a FlexContainer view. Without view clipping, all views are displayed in a regular rectangular shape. With the property, you can change the view shape to circular or rounded rectangle, irrespective of the shape of the background. Supported shapes to clipping a view are rectangle, rounded rectangle, and circle.

The clipView property is applicable only for the widgets added in the Flex Forms.

Example

Setting the clipView property on an existing widget

```
//Sample code to set clipView property of a FlexContainer widget.
myForm.myFlexContainer.clipView = {
 "shape": constants.VIEW\_CLIP\_SHAPE\_CIRCLE,
 "bounds": \[5, 5, 5, 5\],
 "boundsInPixel": true,
 "radius": 10
};
```

Setting the clipView property on widget creation

```
//Flex Container Creation
var flxCnt1 = new voltmx.ui.FlexContainer({
    "id": "flexcontainer1",
    "isVisible": true,
    "width": "80%",
    "zIndex": 1,
    "clipBounds": true,
    "skin": "skin3",
    "layoutType": voltmx.flex.FREE\_FORM,
    "clipView": {
        shape: constants.VIEW\_CLIP\_SHAPE\_CIRCLE,
        bounds: \[5, 5, 5, 5\],
        boundsInPixel: true,
        radius: 10
    }
});

flxCnt1.setDefaultUnit(voltmx.flex.DP);
```

Platform Availability

*   Android 5.0 and later versions.

* * *

cornerRadius Property

* * *

* * *

cursorType Property

* * *

* * *

disabledStateSkinProperties Property

* * *

* * *

enable Property

* * *

* * *

enableCache Property

* * *

* * *

enableHapticFeedback Property

* * *

Allows you to enable or disable haptic feedback on the FlexContainer widget.

Syntax

enableHapticFeedback

Type

Boolean.  
If the enableHapticFeedback property is not specified, haptic feedback is not enabled on the FlexContainer widget.

Read/Write

Read + Write

Remarks

*   The enableHapticFeedback property is supported for FlexContainer widgets only when the onClick callback event is defined.
*   iOS
    
    *   The Haptic Feedback feature is available on iPhone 7 devices and later. These devices have Taptic Engine hardware and users can enable/disable Haptics from Device Settings-> Sounds & Haptics-> System Haptics.
        
*   Android
    *   Users can enable the Vibrate on touch feature from Settings-> Sound & notification-> Other sounds.
        
*   Windows
    *   Haptic Feedback is supported on Windows devices with OS build version 10.0.15063.0 or later.

Example

```

//Setting the enableHapticFeedback property on widget creation
var flexContainer1 = new voltmx.ui.FlexContainer({
    "enableHapticFeedback": true,
    "id": "flexContainer1",
    "top": "19dp",
    "left": "43dp",
    "width": "304dp",
    "height": "251dp",
    "zIndex": 1,
    "skin": "sknred",
    "isVisible": true,
    "clipBounds": true,
    "layoutType": voltmx.flex.FREE\_FORM
}, {
    "padding": \[0, 0, 0, 0\]
}, {});
//Setting the enableHapticFeedback property on an existing widget
<frmId>.<flexContainerID>.enableHapticFeedback = true;
```
```
//Sample code to set the enableHapticFeedback property of a FlexContainer widget.
frmFlexContainer.myFlexContainer.enableHapticFeedback=true;
```

Platform Availability

*   Android
    
*   iOS
*   Windows

* * *

focusStateSkinProperties Property

* * *

* * *

fontColor Property

* * *

* * *

fontFamily Property

* * *

* * *

fontSize Property

* * *

* * *

fontStyle Property

* * *

* * *

fontWeight Property

* * *

* * *

frame Property

* * *

The frame property reflects the calculated flex layout properties derived at application runtime. If a widget’s calculated position, width, or height has been manipulated at runtime, the frame property will reflect the final derived value. The frame property is a JSObject with the keys (x, y, width, height) measured in default system units.

Syntax

frame

Type

JSObject

Read/Write

Read only

Remarks

The frame values are correct when you app is processing the doLayout event. Accessing the frame property in the postShow event handler is not suggested as the layout cycles are still being calculated and the frame values might not be up to date.

Example

Getting the frame property on an existing widget

```

//Getting the derived width of an existing widget
var flexcontainerWidth = frmHome.flexcontainer1.frame.width;

//Getting the derived height of an existing widget
var flexcontainerWidth = frmHome.flexcontainer1.frame.height;

//Getting the derived left position of an existing widget
var flexcontainerLeft = frmHome.flexcontainer1.frame.x;

//Getting the derived top position of an existing widget
var flexcontainerTop = frmHome.flexcontainer1.frame.y;

//Getting all the derived frame properties of an existing widget
var flexcontainerFrame = frmHome.flexcontainer1.frame;

```

Platform Availability

Not available in the IDE.

*   iOS
*   Android
*   Windows
*   SPA

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
/\*Sample code to set the height property for a FlexContainer widget by using DP, Percentage and Pixels.\*/
frmFlexContainer.myFlexContainer.height="50dp";

frmFlexContainer.myFlexContainer. height="10%";

frmFlexContainer.myFlexContainer. height="10px";

```

**Example – Setting the height property on widget creation**

```
//Defining the properties for flexcontainer with height: "150dp" 
var flexcontainer1 = new voltmx.ui.Flexcontainer({
    "id": "<ID for the Widget>",
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

hoverStateSkinProperties Property

* * *

* * *

id Property

* * *

id is a unique identifier of FlexContainer consisting of alpha numeric characters. Every FlexContainer should have a unique id within an application.

Syntax

id

Type

String - \[Mandatory\]

Read/Write

Read only

Example

```
//Defining properties for FlexContainer on a FlexForm
function addWidgetstestfrm() {
    var flexContainer1 = new voltmx.ui.FlexContainer({
        "id": "flexContainer1",
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
    flexContainer1.setDefaultUnit(voltmx.flex.DP);
    flexContainer1.add();
    testfrm.add(
        flexContainer1);
}

function testfrmGlobals() {
    var MenuId = \[\];
    testfrm = new voltmx.ui.Form2({
        "id": "testfrm",
        "width": "50dp",
        "height": "30dp",
        "zIndex": 1,
        "zoomScale": 22,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "layoutType": voltmx.flex.FREE\_FORM,
        "addWidgets": addWidgetstestfrm
    }, {
        "padding": \[0, 0, 0, 0\],
        "displayOrientation": constants.FORM\_DISPLAY\_ORIENTATION\_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": true

    });
    testfrm.setDefaultUnit(voltmx.flex.PX);
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
//Defining the properties for a FlexContainer with info property.
var flxConBasic = {
    "id": "flxCon",
    "width": "50dp",
    "height": "30dp",
    "zIndex": 1,
    "zoomScale": 22,
    "minZoomScale": 1.0,
    "maxZoomScale": 1.0,
    "layoutType": voltmx.flex.FREE\_FORM,
    "addWidgets": addWidgetsflxCon
};

var flxConLayout = {
    "padding": \[0, 0, 0, 0\],
    "displayOrientation": constants.FORM\_DISPLAY\_ORIENTATION\_PORTRAIT,
    "paddingInPixel": false
};

var flxConPSP = {
    "retainScrollPosition": true
};

//Creating the FlexContainer.
var flxCon = new voltmx.ui.FlexContainer(flxConBasic, flxConLayout, flxConPSP);
flxCon.info = {
    key: "FlexContainerName"
};
//Reading info of the FlexContainer. 
voltmx.print("FlexContainer info ::" + flxCon.info);
```
```
//Sample code to set info property for a FlexContainer widget.

frmFlexContainer.myFlexContainer.info = {
    key: "FlexContainerName"
};

//Reading the info of the FlexContainer widget.
voltmx.print("FlexContainer widget info ::" +frmFlexContainer.myFlexContainer.info);
```

Platform Availability

Not available in the IDE.

*   iOS, Android, Windows, SPA

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

If the `isMaster` property is true, the current widget is a master container and all of the rules and limitations of master containers apply to it. For more information, please see [Masters](Masters.md) in the Overviews section of this guide.

Your app can set the `isMaster` property in this container's constructor. After that, this property is read-only.

Example

```

var isMasterContainer = flexContainer1.isMaster;
```

* * *

isModalContainer Property

* * *

When you use the FlexContainer as a popup, this property helps to prevent user interaction beyond the edges of the FlexContainer.

Syntax

isModalContainer

Type

Boolean

Read/Write

Read + Write

Remarks

A modal window is a child window that requires user interaction before the control goes to the parent window. When a child window opens from a parent window (such as a popup), to make the parent window non-interactive , set the isModalContainer property as true.

The default value of this property is false.

If ModalContainer property is set to true in any of the FlexContainer widget, the Z Index value of that container and all of its parent containers should be set to **Custom**.

Example

```

Form1.FlexPopup.isModalContainer = true;
```

Platform Availability

*   Available in IDE
*   iOS
*   Android
*   Windows
*   SPA
*   Desktop web

* * *

isVisible Property

* * *

This property controls the visibility of a widget on the FlexContainer.

Syntax

isVisible

Type

Boolean

Read/Write

Read + Write

Remarks

The default value for this property is true.

Example

```
//Defining properties for FlexContainer on a FlexForm
function addWidgetstestfrm() {
    var flexContainer1 = new voltmx.ui.FlexContainer({
        "id": "flexContainer1",
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

    flexContainer1.setDefaultUnit(voltmx.flex.DP);
    flexContainer1.add();
    testfrm.add(
        flexContainer1);
}

function testfrmGlobals() {
    var MenuId = \[\];
    testfrm = new voltmx.ui.Form2({
        "id": "testfrm",
        "width": "50dp",
        "height": "30dp",
        "zIndex": 1,
        "zoomScale": 22,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "layoutType": voltmx.flex.FREE\_FORM,
        "addWidgets": addWidgetstestfrm
    }, {
        "padding": \[0, 0, 0, 0\],
        "displayOrientation": constants.FORM\_DISPLAY\_ORIENTATION\_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": true

    });

    testfrm.setDefaultUnit(voltmx.flex.PX);
}
```
```
//Sample code to set isVisible property for a FlexContainer widget.
frmFlexContainer.myFlexContainer.isVisible=true;
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

This property can only be set during widget construction.

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
    *   The FlexContainer cell respects height, minHeight, maxHeight property only.
    *   If the width of a child widget exceeds the width of the container widget, the next child widget is wrapped and placed in the next row.

Example

```
//Defining properties for FlexContainer on a FlexForm
function addWidgetstestfrm() {
    var flexContainer1 = new voltmx.ui.FlexContainer({
        "id": "flexContainer1",
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

    flexContainer1.setDefaultUnit(voltmx.flex.DP);
    flexContainer1.add();
    testfrm.add(
        flexContainer1);
}

function testfrmGlobals() {
    var MenuId = \[\];
    testfrm = new voltmx.ui.Form2({
        "id": "testfrm",
        "width": "50dp",
        "height": "30dp",
        "zIndex": 1,
        "zoomScale": 22,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "layoutType": voltmx.flex.FREE\_FORM,
        "addWidgets": addWidgetstestfrm
    }, {
        "padding": \[0, 0, 0, 0\],
        "displayOrientation": constants.FORM\_DISPLAY\_ORIENTATION\_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": true

    });

    testfrm.setDefaultUnit(voltmx.flex.PX);
}
```
```
//Sample code to set layoutType property for a FlexContainer widget.
frmFlexContainer.myFlexContainer.layoutType=voltmx.flex.FREE\_FORM;
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

minHeight Property

* * *

* * *

minWidth Property

* * *

* * *

opacity Property

* * *

* * *

parent Property

* * *

* * *

pressedStateSkinProperties Property

* * *

* * *

responsiveConfig Property

* * *

This property is used to make different layouts for different breakpoints in FlexContainer widgets. You can assign the width and space between FlexContainers for each breakpoint as per your requirement.

For more information about the Simple Responsive design, click [here](https://{../../../Iris/iris_user_guide/Content/SimpleResponsiveDesign.md).

Syntax

responsiveConfig

Type

JSON object.

The following table shows the attributes that can be assigned to the `responsiveConfig` property.

   
| Attributes | Type | Key/ Value Pairs | Description |
| --- | --- | --- | --- |
| span | JSON Object | 
*   In Mobile and Tablet platforms, the keys are: `portrait` and `landscape`.
*   In Desktop Web platform, breakpoints assigned to the form are the keys.
*   You can assign the numbers from 0 to 12 to the keys.
*   The default value is 12.

 | 

*   `span` is the twelve points in which the width of a FlexContainer is divided.
*   If you provide any value greater than 12, it will be treated as 12.
*   If you provide any value less than zero, it will be treated as 0.
*   If no value is assigned to a particular breakpoint, the `span` value assigned to the previous breakpoint is considered.
*   If no value is provided for this key, then default value is applied to all the breakpoints.

 |
| offset | JSON Object | 

*   In Mobile and Tablet platforms, the keys are: `portrait` and `landscape`.
*   In Desktop Web platform, breakpoints assigned to the form are the keys.
*   You can assign the numbers from 0 to 12 to the keys.
*   The default value is 0.

 | 

*   `offset` is the twelve point space between FlexContainers is divided.
*   If you provide any value greater than 12, it will be treated as 12.
*   If you provide any value less than zero, it will be treated as 0.
*   If no value is assigned to a particular breakpoint, the `offset` value assigned to the previous breakpoint is considered.
*   If no value is provided for this key, then default value is applied to all the breakpoints.

 |

Read/Write

No- Constructor level property

Example 1

```
/\*Sample code to set the responsiveConfig property to a FlexContainer widget in Desktop Web platform.\*/
var myFlex = new voltmx.ui.FlexContainer({
 "responsiveConfig": {
  "span": {
   "640": 6,
   "768": 4,
   "1200": 3,
   "1366": 2
  },
  "offset": {
   "640": 0,
   "768": 1,
   "1366": 2
  },
 },
 "height": "100%",
 "id": "myFlex",
 "layoutType": voltmx.flex.FLOW\_HORIZONTAL
}, {}, {});
```

Example 2

```
/\*Sample code to set the responsiveConfig property to a FlexContainer widget in Mobile and Tablet platforms.\*/
var myFlex = new voltmx.ui.FlexContainer({
 "responsiveConfig": {
  "span": {
   "portrait": 6,
   "landscape": 3
  },
  "offset": {
   "portrait": 0,
   "landscape": 0
  },
 },
 "height": "100%",
 "id": "myFlex",
 "layoutType": voltmx.flex.FLOW\_HORIZONTAL
}, {}, {});
```

Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

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

*   When the value of _reverseLayoutDirection_ property is true, the frame values of the child widgets are calculated with respect to the [left](FlexScrollContainer_Properties.md#left) property of FlexContainer. The frame values given for different features of FlexContainer widget, such as animation, must reflect this change.

Example

You can change the flow layout direction of a FlexContainer with ID as "flexContainer1" in form "myForm" during run time by entering the following code.

Example 1:

```
var flexContainer1 = new voltmx.ui.FlexContainer({
    "id": " flexcontainer1",
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
//Sample code to enable reverseLayoutDirection property for a FlexContainer widget. myForm.myFlexContainer.reverseLayoutDirection = true;
```

Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, Desktop Web, and SPA

* * *

right Property

* * *

* * *

rippleBackground Property

* * *

Defines the ripple background for a FlexContainer Widget.

Syntax

rippleBackground

Type

JSObject

Parameters

rippleColor

Optional. Defines the color for the ripples.

You can define the ripple color in the RGBA format, where the R, G, and B range from 00 to ff, and the A (transparency) ranges from 00 (zero percent) to 64 (100 percent). Or, you can define the rippleColor as a key-value pair for each view state. The keys allowed are normal and pressed.

contentLayers

Optional. Array of two JS Objects. Each JS Object contains following key-value pairs to define a layer for ripple background. You can define the background for the ripple as a skin or as a background color.

background

Defines the background for the ripples. You can define the color in the RGBA format, where the R, G, and B range from 00 to ff, and the A (transparency) ranges from 00 (zero percent) to 64 (100 percent). Or, you can specify a skin as the background.

backgroundType

Defines the type of a background. You can define:

_RIPPLE\_CONTENT\_LAYER\_COLOR_: Background as color in the RGBA format.

_RIPPLE\_CONTENT\_LAYER\_SKIN_: Background as a skin.

Mask

Defines the bounds for the ripple animation. The property takes the Boolean value and by default is set to false.

padding

Defines the space around the ripple background. Specify an array of four integers \[left, top, right, bottom\]

paddingInPixel

Defines whether the units of specified padding values should be in pixels or in percentage. The property takes the Boolean value.

_true_: Indicates the specified padding values should be in pixels.

_false_: Indicates the specified padding values should be in percentage.

paddingMode

Optional. Defines how layer padding should affect the bounds of subsequent layers. You can define:

_RIPPLE\_PADDING\_MODE\_NEST_: Nests each layer inside padding of the previous layer.

_RIPPLE\_PADDING\_MODE\_STACK_: Stacks each layer on top of the previous layer. This is the default value.

Read/Write

Read + Write

Remarks

If you set rippleBackground, skin, and focusSkin properties to the FlexContainer Widget through a constructor, the rippleBackground property takes the priority. Later, if you modify or set the skin properties such as skin, focusSkin, pressedSkin, and disabledSkins dynamically, the skin properties take priority.

Example

Setting the rippleBackground property on an existing widget

```
//Sample code to set the rippleBackground property for a FlexContainer widget. 
myForm.myFlexContainer.rippleBackground = {
 rippleColor: "ffff0000",
 contentLayers: \[{
  background: "ffffff00",
  backgroundType: constants.RIPPLE\_CONTENT\_LAYER\_COLOR,
  mask: false,
  padding: \[10, 10, 10, 10\]
 }, {
  background: btnSkin,
  backgroundType: constants.RIPPLE\_CONTENT\_LAYER\_SKIN,
  mask: true
 }\],
 paddingMode: constants.PADDING\_MODE\_NEST
};
```

Example

Setting the rippleBackground property on widget creation

```
//Flex Container Creation.
var flxCnt1 = new voltmx.ui.FlexContainer({
    "id": "flexcontainer1",
    "isVisible": true,
    "width": "80%",
    "zIndex": 1,
    "clipBounds": true,
    "skin": "skin3",
    "layoutType": voltmx.flex.FREE\_FORM,
    "rippleBackground": {
        rippleColor: "ffff0000",
        contentLayers: \[{
            background: "ffffff00",
            backgroundType: constants.RIPPLE\_CONTENT\_LAYER\_COLOR,
            mask: false,
            padding: \[10, 10, 10, 10\]
        }, {
            background: btnSkin,
            backgroundType: constants.RIPPLE\_CONTENT\_LAYER\_SKIN,
            mask: true
        }\],
        paddingMode: constants.PADDING\_MODE\_NEST
    }
});
flxCnt1.setDefaultUnit(voltmx.flex.DP);
```

Platform Availability

*   Android 5.0 and later versions.

* * *

## <a id="shadowColor-Property"></a>shadowColor Property

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
*   On the Android platform, if the clipBounds property and the rounded corner is enabled for the FlexContainer widget, the shadowColor appears beyond the rounded corner area.

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

shadowDepth Property

* * *

Defines the depth of the shadow effect applied to the FlexContainer Widget.

Syntax

shadowDepth

Type

Number

Read/Write

Read + Write

Remarks

The depth of the shadow should be specified in DP (Device Independent Pixels) units. The higher the value of shadowDepth, the appearance of the FlexContainer Widget is elevated from the screen and the casted shadow becomes soft.

Example

Setting the shadowDepth property on an existing widget

```
//Sample code to set shadowDepth property for a FlexContainer widget.   
  
myForm.myFlexContainer.shadowDepth=10;
```

Example

Setting the shadowDepth property on widget creation

```
//Flex Container Creation.
var flxCnt1 = new voltmx.ui.FlexContainer({
    "id": "flexcontainer1",
    "isVisible": true,
    "width": "80%",
    "zIndex": 1,
    "clipBounds": true,
    "skin": "skin3",
    "layoutType": voltmx.flex.FREE\_FORM,
    "shadowDepth": 10,
    "shadowType": constants.VIEW\_BOUNDS\_SHADOW
});
flxCnt1.setDefaultUnit(voltmx.flex.DP);
```

Platform Availability

*   Android 5.0 and later versions.

* * *

 ## <a id="hadowOffset-Property"></a>shadowOffset Property

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

## <a id="shadowRadius-Property"></a>shadowRadius Property

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

* * * shadowType Property

* * *

Sets a type of the shadow effect to apply to the FlexContainer Widget.

Syntax

shadowType

Type

Number

Read/Write

Read + Write

Remarks

The property specifies a shape for the widget's shadow that is cast. You can apply any one of the following shadow types:

_VIEW\_BOUNDS\_SHADOW_: Shadow matches the widget's rectangular bounds.

_PADDED\_VIEW\_BOUNDS\_SHADOW_: Shadow matches the widget's rectangular padded bounds.

_BACKGROUND\_SHADOW_: Shadow matches the widget's background. This is the default value.

Example

Setting the shadowType property on an existing widget

```
//Sample code to set the shadowType property for a FlexContainer widget.   
  
myForm.myFlexContainer.shadowType = constants.VIEW\_BOUNDS\_SHADOW; 

```

Example

Setting the shadowType property on widget creation

```
//Flex Container Creation.
var flxCnt1 = new voltmx.ui.FlexContainer({
    "id": "flexcontainer1",
    "isVisible": true,
    "width": "80%",
    "zIndex": 1,
    "clipBounds": true,
    "skin": "skin3",
    "layoutType": voltmx.flex.FREE\_FORM,
    "shadowDepth": 10,
    "shadowType": constants.VIEW\_BOUNDS\_SHADOW
});
flxCnt1.setDefaultUnit(voltmx.flex.DP);
```

Platform Availability

*   Android 5.0 and later versions.

* * *

shouldGroup Property

* * *

This property enables the grouping of elements within a FlexContainer widget, to mitigate redundancy while invoking multiple elements that have the same context.

Syntax

shouldGroup

Type

Boolean

Read/Write

Read + Write

Example

```
//Sample code to enable the shouldGroup property for a FlexContainer widget.   
  
 var flxPagesHdr = new voltmx.ui.FlexContainer({
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
*   iOS
*   Android

* * *

skin Property

* * *

This property specifies a background skin for FlexContainer widget.

Syntax

skin

Type

String

Read/Write

Read + Write

Example

```
//Defining properties for FlexContainer on a FlexForm
function addWidgetstestfrm() {
    var flexContainer1 = new voltmx.ui.FlexContainer({
        "id": "flexContainer1",
        "top": "19dp",
        "left": "43dp",
        "width": "304dp",
        "height": "251dp",
        "zIndex": 1,
        "skin": "sknred",
        "isVisible": true,
        "clipBounds": true,
        "layoutType": voltmx.flex.FREE\_FORM
    }, {
        "padding": \[0, 0, 0, 0\]
    }, {});
    flexContainer1.setDefaultUnit(voltmx.flex.DP);
    flexContainer1.add();
    testfrm.add(
        flexContainer1);
}

function testfrmGlobals() {
    var MenuId = \[\];
    testfrm = new voltmx.ui.Form2({
        "id": "testfrm",
        "zIndex": 1,
        "zoomScale": 22,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "layoutType": voltmx.flex.FREE\_FORM,
        "addWidgets": addWidgetstestfrm
    }, {
        "padding": \[0, 0, 0, 0\],
        "displayOrientation": constants.FORM\_DISPLAY\_ORIENTATION\_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": true

    });
    testfrm.setDefaultUnit(voltmx.flex.PX);
}
```
```
//Sample code to set skin property for a FlexContainer widget.   
  
myForm.myFlexContainer.skin="sknred"; 

```

Platform Availability

Available in the IDE.

*   iOS
*   Android
*   Windows
*   SPA

* * *

textShadowColor Property

* * *

* * *

textShadowOffset Property

* * *

* * *

textShadowRadius Property

* * *

* * *

top Property

* * *

* * *

transform Property

* * *

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