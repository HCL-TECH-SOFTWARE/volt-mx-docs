                                


FlexForm Methods
================

The FlexForm widget has the following methods associated with it:

* * *


<details close markdown="block"><summary>add Method</summary>

* * *

This method is used to add widgets to the FlexForm. When the widgets are added to the current visible FlexForm, then the changes will reflect immediately. Adding a widget to the FlexForm hierarchy, which is already a part of the other widget hierarchy, will lead to undefined behaviors. You have to explicitly remove the widget from one hierarchy before adding it to another FlexForm.

<b>Syntax</b>

```

add(widgetArray);
```

<b>Parameters</b>

widgetArray \[JSObject\]

Comma separated list of widgets.

formid \[widgetref\]

Handle to the widget instance.

<b>Return Values</b>

None

<b>Exceptions</b>

WidgetError

<b>Example</b>

```
//Sample code to invoke add method by using a FlexForm.
var myFlexScroll = new voltmx.ui.FlexScrollContainer({
 "id": "myFlexScroll",
 "top": "5dp",
 "left": "6dp",
 "width": "97.15%",
 "height": "271dp",
 "zIndex": 1,
 "isVisible": true,
 "enableScrolling": true,
 "scrollDirection": voltmx.flex.SCROLL_BOTH,
 "horizontalScrollIndicator": true,
 "verticalScrollIndicator": true,
 "bounces": true,
 "allowHorizontalBounce": true,
 "allowVerticalBounce": true,
 "pagingEnabled": true,
 "Location": "[6,5]",
 "bouncesZoom": true,
 "zoomScale": 1.0,
 "minZoomScale": 1.0,
 "maxZoomScale": 1.0,
 "layoutType": voltmx.flex.FREE_FORM
}, {});
testfrm.add(myFlexScroll);
```

<b>Platform Availability</b>

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>addAt Method</summary>

* * *

This method is used to add widgets to the Form container at the specified index. Widget is prepended if index <0 and appended at the end of the container if the index > size+1. Size is the number of widgets already present in the container. If a new widget is added or removed will reflect immediately from the form hierarchy model perspective, however the changes are displayed when the Form appears. When the widgets are added to the current visible form, then the changes will reflect immediately. Adding a widget to the Form or Box hierarchy, which is already a part of the other widget hierarchy, will lead to undefined behaviors. You have to explicitly remove the widget from one hierarchy before adding it to another Form or Box.

<b>Syntax</b>

```

addAt(widgetref,index);
```

<b>Parameters</b>

widgetref

Reference of the name of the widget.

index \[Number\]

Index number at which the widget is to be added.

<b>Return Values</b>

None

<b>Exceptions</b>

WidgetError

<b>Example</b>

```
//Sample code to invoke addAt method by using a FlexForm.  
var myButton = new voltmx.ui.Button({
 "focusSkin": "defBtnFocus",
 "height": "50dp",
 "id": "myButton",
 "isVisible": true,
 "left": "77dp",
 "skin": "defBtnNormal",
 "text": "Checking",
 "top": "19dp",
 "width": "260dp",
 "zIndex": 1
}, {
 "contentAlignment": constants.CONTENT_ALIGN_CENTER,
 "displayText": true,
 "padding": [0, 0, 0, 0],
 "paddingInPixel": false
}, {});
myForm.addAt(myButton, 1);
```

<b>Platform Availability</b>

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>addGestureRecognizer Method</summary>

* * *

This API allows you to set a gesture recognizer for a specified gesture for a specified widget.

<b>Syntax</b>

```

addGestureRecognizer(gestureType, gestureConfigParams, onGestureClosure);
```


<b>Parameters</b>

_gestureType_

\[Number\] - Mandatory

Indicates the type of gesture to be detected on the widget.

See Remarks for possible values.

_gestureConfigParams_

\[object\] - Mandatory

The parameter specifies a table that has the required configuration parameters to setup a gesture recognizer.

The configuration parameters vary based on the type of the gesture.

See Remarks for possible values.

_onGestureClosure_

\[function\] - Mandatory

Specifies the function that needs to be executed when a gesture is recognized.

This function will be raised asynchronously

See Remarks for the syntax of this function.

<b>Return Values</b>

String - Reference to the gesture is returned.

<b>Remarks</b>

The values for the _gestureType_parameter are:

\[Number\] - Mandatory

Indicates the type of gesture to be detected on the widget. The following are possible values:

*   1 – constants.GESTURE\_TYPE\_TAP
*   2 - constants.GESTURE\_TYPE\_SWIPE
*   3 – constants.GESTURE\_TYPE\_LONGPRESS
*   4 – constants.GESTURE\_TYPE\_PAN
*   5 – constants.GESTURE\_TYPE\_ROTATION
*   6 - constants.GESTURE\_TYPE\_PINCH
*   7 - constants.GESTURE\_TYPE\_RIGHTTAP

The values for the _gestureConfigParams_parameter are:

\[object\] - Mandatory

The parameter specifies a table that has the required configuration parameters to setup a gesture recognizer. The configuration parameters vary based on the type of the gesture.

This parameter supports the following key-value pairs:

Gesture Type:TAP

*   fingers \[Number\] - specifies the maximum number of fingers that must be respected for a gesture. Possible values are: 1. Default value is 1.
*   taps \[Number\] - specifies the maximum number of taps that must be respected for a gesture. Possible values are: 1 or 2. Default value is 1.

For example:  

{fingers:1,taps:1}

Gesture Type:SWIPE

*   fingers \[Number\] - specifies the maximum number of fingers that must be respected for a gesture. Possible values are: 1. Default value is 1.

For example:

{fingers: 1}

Gesture Type:LONGPRESS

*   pressDuration \[Number\] - specifies the minimum time interval (in seconds) after which the gesture is recognized as a LONGPRESS. For example, if pressDuration is 2 seconds, any continued press is recognized as LONGPRESS only if it lasts for at least 2 seconds. Default value is 1. This is not applicable to Windows.

For example:

{pressDuration=1}.

Gesture Type: PAN

*   fingers \[number\] specifies the minimum number of fingers needed to recognize this gesture. Default value is 1.
*   continuousEvents \[Boolean\] indicates if callback should be called continuously for every change beginning from the time the gesture is recognized to the time it ends.

Gesture Type: ROTATION

*   Rotation gesture involves only two fingers.
*   continuousEvents \[Boolean\] indicates if callback must be called continuously for every change beginning from the time the gesture is recognized to the time it ends.

Gesture Type:PINCH

*   Pinch gesture invloves two fingures.
*   continuousEvents \[Boolean\] indicates if callback should be called continuously every change beginning from the time the gesture is recognized to the time it ends.

The syntax for the _onGestureClosure_callback function are:

\[function\] - Mandatory

Specifies the function that needs to be executed when a gesture is recognized.

This function will be raised asynchronously and has the following Syntax:

onGestureClosure(widgetRef, gestureInfo, context)

*   widgetRef - specifies the handle to the widget on which the gesture was recognized.
*   gestureInfo - Table with information about the gesture. The contents of this table vary based on the gesture type.
*   context - Table with SegmentedUI row details.

gestureInfo table has the following key-value pairs:

*   gestureType \[number\] – indicates the gesture type; 1 for TAP, 2 for SWIPE, and 3 for LONGPRESS,4 for PAN, 5 for ROTATION, 6 for PINCH and 7 for RIGHTTAP
*   gesturesetUpParams \[object\] – specifies the set up parameters passed while adding the gesture recognizer
*   gesturePosition \[number\] – indicates the position where the gesture was recognized. Possible values are: 1 for TOPLEFT, 2 for TOPCENTER, 3 for TOPRIGHT, 4 for MIDDLELEFT, 5 for MIDDLECENTER, 6 for MIDDLERIGHT, 7 for BOTTOMLEFT, 8 for BOTTOMCENTER, 9 for BOTTOMRIGHT, 10 for CENTER
*   swipeDirection \[number\] –indicates the direction of swipe. This parameter is applicable only if the gesture type is SWIPE. Possible values are: 1 for LEFT, 2 for RIGHT, 3 for TOP, 4 for BOTTOM. Direction is w.r.t the view and not device orientation.
*   gestureX \[number\] – specifies the X coordinate of the point (in pixels) where the gesture has occurred. The coordinate is relative to the widget coordinate system.
*   gestureY \[number\] – specifies the Y coordinate of the point (in pixels) where the gesture has occurred. The coordinate is relative to the widget coordinate system.
*   widgetWidth \[number\] – specifies the width of the widget (in pixels)
*   widgetHeight \[number\] – specifies the height of the widget (in pixels)
*   gestureState\[number\] – indicates the gesture state as below
*   1 – gesture state begin
*   2 - gesture state changed
*   3 – gesture state ended.
*   \* gestureState is applicable only for continuous gestures like PAN, ROTATION and PINCH.
*   rotation \[number\] rotation of the gesture in degrees since its last change.( Applicable only when gesture type is ROTATION
*   velocityX and velocityY : horizontal and vertical component of velocity expressed in points per second. (Applicable only for PAN gesture type)
*   velocity \[number\]: velocity of pinch in scale per second (Applicable for Pinch gesture)
*   scale \[number\]:scale factor relative to the points of the two touches in screen coordinates
*   touchType\[number\]:(windows only)
*   0 - constants.TOUCHTYPE\_FINGER
*   1 - constants.TOUCHTYPE\_PEN
*   2 - constants.TOUCHTYPE\_MOUSE
*   translationX and translationY \[number\] : cumulative distance as number. (Applicable only for PAN gesture type)

context table has the following key-value pairs:

*   rowIndex \[number\] : row index of the segui where gesture was recognised. (Applicable to gestures added to segUI rows)
*   sectionIndex \[number\] : section index of the segui where gesture was recognised. (Applicable to gestures added to segUI rows)

It is not recommend to define gestures for widgets that have a default behavior associated with it.

If you click (tap) a button (any clickable widget), the default behavior is to trigger an onClick event. If you define a Tap gesture on such widgets, the gesture closure is executed in addition to the onClick event.

If you swipe a larger form, the default behavior is to scroll up and down depending on the direction in which you swipe. If you define a SWIPE gesture on such forms, the gesture closure gets executed in addition to scrolling the form.

If you swipe a Segmented UI with huge number of rows, the default behavior is to scroll the Segmented UI. If you define a SWIPE gesture on such segments, the gesture closure gets executed in addition to scrolling the form.

Gestures can be added only for the following widgets:

*   Flex Container
    
*   Flex Scroll Container.
    

In the android platform, the top and bottom gestures work only when the scrolling is disabled for Form and parent scrolling containers. By default, the scrolling is enabled for the Form and scrolling containers.

*   RIGHTTAP applicable only to Windows 10
*   ROTATION is not supported on android.

<b>Example</b>

```
 //Sample code to add Gestures to the frmGestures FlexForm.
//Code to add DOUBLE TAP gesture to the frmGestures, FlexForm.
var doubletp = {
 fingers: 1,
 taps: 2
};
frmGestures.addGestureRecognizer(1, doubletp, onGestureFunction);
//Code to add SINGLE TAP gesture to the frmGestures FlexForm.
var singleTp = {
 fingers: 1,
 taps: 1
};
frmGestures.addGestureRecognizer(1, singleTp, onGestureFunction);
//Code to add SWIPE gesture to the frmGestures FlexForm.
var swipeForm = {
 fingers: 1,
 swipedistance: 50,
 swipevelocity: 75
};
frmGestures.addGestureRecognizer(2, swipeForm, onGestureFunction);
//Code to add LONGPRESS gesture to the frmGestures FlexForm.
var longPressForm = {
 pressDuration: 2
};
frmGestures.addGestureRecognizer(3, longPressForm, onGestureFunction);

function onGestureFunction(commonWidget, gestureInfo) {
 voltmx.print("The Gesture type is:" + gestureInfo.gestureType);

}
```

<b>Platform Availability</b>

*   iOS, Windows

* * *

* * *

</details>
<details close markdown="block"><summary>animate Method</summary>

* * *

Applies an animation to the widget.

<b>Syntax</b>

```

animate (animationObj, animateConfig, animationCallbacks);
```

<b>Parameters</b>

_animationObj_

An `animation` object created using [voltmx.ui.createAnimation](../../../Iris/iris_api_dev_guide/content/voltmx.ui_functions.md#createAn?TocPath=References|voltmx.ui_Namespace|Functions|_____5) function.

_animationConfig_

As defined in widget level animation section.

_animationCallbacks_

A JavaScript dictionary that contains key-value pairs. The following keys are supported.

| Key | Description |
| --- | --- |
| animationEnd | A JavaScript function that is invoked with the animation ends. For more information, see the **Remarks** section below. |
| animationStart | A JavaScript function that is invoked with the animation starts. For more information, see the **Remarks** section below. |

<b>Return Values</b>

Returns a platform-specific handle to the animation. This handle currently not used, but is returned for possible future requirements use.

<b>Remarks</b>

The callback for the `animationStart` key in the JavaScript object passed in this method's _animationCallbacks_ parameter has the following signature.

animationStart(source, animationHandle, elapsedTime);

where `source` is the widget being animated, `animationHandle` is the handle returned by the `applyAnimation` method, and `elapsedTime` is the amount of time the animation has been running in seconds, when this event is fired..

This event occurs at the start of the animation. If there is 'animation-delay' configured then this event will fire only after the delay period. This event gets called asynchronously.

The callback for the `animationEnd` key in the JavaScript object passed in this method's _animationCallbacks_ parameter has the following signature.

animationEnd(source, animationHandle, elapsedTime);

where source is the widget being animated, animationHandle is the handle returned by the applyAnimation method, and elapsedTime is the amount of time the animation has been running in seconds, when this event is fired.

This event occurs at the end of the animation. This event gets called asynchronously.

The `animate` method throws an Invalid Animation Definition Exception if animation definition, does not follow the dictionary structure expected. This method is ignored if it is called on a widget whose immediate parent is not FlexContainer or a FlexScrollContainer.

If the widget is not part of the currently visible view hierarchy, calling this method does nothing. Because this method is asynchronous and immediately returns, it does not wait for the animation to start or complete.

<b>Example</b>

```
//Sample code of animation
function AnimateBoth() {
    var getFuncName = frm1.listbox18.selectedKey;
    if (getFuncName == "BothLT") {
        frm1.textbox26.animate(myAnimDefinition(),
            animConfiguration(), {});
    } else if (getFuncName == "BothTBL") {
        frm1.textbox26.animate(myAnimDefinitionsc1(),
            animConfiguration(), {});
    }
}
```

<b>Platform Availability</b>

*   iOS, Android, Windows, and SPA

* * *

</details>
<details close markdown="block"><summary>clone Method</summary>

* * *

When this method is used on a container widget, then all the widgets inside the container are cloned. This method takes an optional parameter. If the widgetid is not passed then the cloned copy will have the same ID as original widget.

If the widget ID is passed as a parameter then it will be prefixed to the existing ID and will assign it to cloned copy of the container. For all other widgets of the container and its child widgets.

For example, if the widget ID is "fc1" and the widget ID passed to clone API is "ref1", then the cloned widget ID will be "ref1fc1". For a child widget placed in a container with widget ID as "wid1", the cloned copy will have the widget ID as "ref1wid1".

<b>Exceptions</b> are not displayed if widget ID parameter is not unique. Instead when the cloned copy is added to the same form as of original container then it may lead to unexpected behaviors. So it is your responsibility to provide unique widget ID.

<b>Syntax</b>

```

clone();
```

<b>Parameters</b>

widgetId \[String\]

Optional. Reference of the name of the widget.

<b>Return Values</b>

Cloned copy of the widget.

<b>Exceptions</b>

None

<b>Remarks</b>

*   This method is not supported on SegmentedUI2 widget.
*   Gestures for the FlexContainer are not cloned. You have to reapply the gestures on the cloned object.
*   In Android platform, cloned Map widget will not work if prefix is not passed as parameter to the API.

*   To apply focusSkin for dynamically created widgets or cloned widgets, assign focusSkin dynamically after adding the widget to the form hierarchy. This is applicable for SPA and Desktop web platforms.
```
formid.widgetid.focusSkin = "skinname";
```
*   To apply hoverSkin for dynamically created widgets or cloned widgets, assign hoverSkin dynamically after adding the widget to the form hierarchy. This is applicable for the Desktop web platform.
```
formid.widgetid.hoverSkin = "skinname";
```

<b>Example</b>

```

//This is a generic method that is applicable for various widgets.
//Here, we have shown how to use the clone Method for a FlexContainer widget.
//You need to make a corresponding call of the clone method for other applicable widgets.  
var flex2 = frmFlex.flexContainer1.clone();
//Here, flexContainer1 is a FlexContainer widget that is already present in frmFlex FlexForm.
frmFlex.add(flex2);
//For instance, the corresponding clone method call on the Label widget is as follows:
var myLabel=frmFlex.lbl1.clone();  

```

<b>Platform Availability</b>

*   iOS, Android, Windows, and SPA

* * *

</details>
<details close markdown="block"><summary>closeNavigationDrawer Method</summary>

* * *

Close the NavigationDrawer on forms that have been created using a template that supports the NavigationDrawer. See remarks for more information.

<b>Syntax</b>

```

closeNavigationDrawer(widgetArray);
```

<b>Parameters</b>

widgetArray \[JSObject\]

Comma separated list of widgets.

formid \[widgetref\]

Optional. Handle to the widget instance.

<b>Return Values</b>

None

<b>Remarks</b>

This method supports the [NavigationDrawer](FlexForm.md#using-the-navigation-drawer). It is not available unless the FlexForm has been created from a template that supports the NavigationDrawer. The NavigationDrawer is based on the [Android native Navigation drawer](https://material.io/guidelines/patterns/navigation-drawer.md#). It is only supported on Android.

<b>Example</b>

```
//Sample code to close the NavigationDrawer
formObject.closeNavigationDrawer();
```

<b>Platform Availability</b>

*   Android

* * *

</details>
<details close markdown="block"><summary>destroy Method</summary>

* * *

This method is used to destroy any unwanted forms at any point in time, and allows increasing the application life by reducing the memory usage.

<b>Syntax</b>

```

destroy();
```

<b>Parameters</b>

formname

Reference of the name of the Form.

<b>Return Values</b>

None

<b>Exceptions</b>

None

<b>Remarks</b>

> **_Note:_** Destroying the current form might lead to unexpected behavior.

<b>Example</b>

```
//Sample code to invoke destroy method by using a FlexForm.  
  
myForm.destroy();  

```

<b>Platform Availability</b>

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>forceLayout Method</summary>

* * *

When this method is called, underlying OS layout cycle is forced to layout the widgets of the FlexContainer. FlexContainer does not issue layout as and when layout changes happen to the widgets inside FlexContainer.

<b>Syntax</b>

```

forceLayout();
```

<b>Parameters</b>

None

<b>Return Values</b>

None

<b>Exceptions</b>

WidgetError

<b>Remarks</b>

> **_Note:_** This method asynchronously forces the layout while method returns immediately.

The layout cycles of a FlexContainer are triggered automatically in the below cases:

*   Except in Android, at the end of JavaScript closure execution, if there are changes in the widgets of currently visible view hierarchy, that require layout cycles.
*   When a form and other top-level containers marked as FlexContainer get visible.
*   When there is a change in view hierarchy (addition or removal of widgets in the view hierarchy)
*   When a container size is changed, its layout is triggered or when device orientation is changed.
*   When you force the layout of the FlexContainer as needed using the forceLayout method.

Changing the widget layout properties does not mean layout cycles are automatically triggered. Layout manage can choose to cache the positions and dimensions of the widgets inside FlexContainer for performance reasons and reuse all valid cache values during the layout cycles.

The forceLayout should be called on the parent only when any of the positional or dimensional properties of any child widgets are modified. Other properties such as zIndex, backgroundColor, transform, and visibility does not need a forceLayout call.

When to Use

Case1: If you have a SegmentedUI inside a FlexForm and you want to change the SegmentedUI layout properties dynamically. In this case you have to call the forceLayout after configuring the new layout properties.

<b>Example</b>

```
//Sample code to invoke forceLayout method by using a FlexContainer widget.  
  
myForm.myFlexContainer.forceLayout();  

```

<b>Platform Availability</b>

*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>getTitleVerticalPositionAdjustment Method</summary>

* * *

Gets the position of the title vertically on the navigation bar. This method only functions if the [titleBarAttributes](FlexForm_Properties.md#titleBarAttributes) property is set.

<b>Syntax</b>

```

getTitleVerticalPositionAdjustmentMethod(barMetrics);
```

<b>Parameters</b>

_barMetrics_

A JavaScript object containing a set of key:value pairs that contain information on the background image. See <b>Remarks</b> for more information.

<b>Return Values</b>

adjustment. A JavaScript variable containing the value of the title adjustment.

<b>Remarks</b>

keyList is a JavaScript object that contains key:value pairs in the following format:

{barMetrics:barMetricValue} where barMetricValue is one of the following constants:

*   **constants.BAR\_METRICS\_DEFAULT** applies for all orientations.
*   **constants.BAR\_METRICS\_COMPACT**, - applies for landscape only.
*   **constants.BAR\_METRICS\_PROMPT**, - applies when prompt is shown.
*   **constants.BAR\_METRICS\_COMPACT\_PROMPT** - applies when prompt is shown for landscape mode.

<b>Example</b>

```
//Sample code to invoke getTitleVerticalPositionAdjustment method by using a FlexForm widget.  
var titleAttributes = {
    "barStyle": constants.BAR_STYLE_DEAFULT,
    "hidesBackButton": false
};

Form1.titleBarAttributes = titleAttributes;
var adjustmentForm = Form1.getTitleVerticalPositionAdjustment({
    "barMetrics": constants.BAR_METRICS_DEFAULT
});
```

<b>Platform Availability</b>

*   iOS 9.0 and later

* * *

</details>
<details close markdown="block"><summary>hideTitleBar Method</summary>

* * *

This method gives you the control to hide a titlebar within a form.

<b>Syntax</b>

```

hideTitleBar();
```

<b>Parameters</b>

formid \[widgetref\]

Handle to the widget instance.

<b>Return Values</b>

None

<b>Exceptions</b>

None

<b>Example</b>

```
//Sample code to invoke hideTitleBar method by using a FlexForm.  
  
myForm.hideTitleBar();  

```

<b>Platform Availability</b>

This method is available on iPhone/iPad.

* * *

</details>
<details close markdown="block"><summary>openNavigationDrawer Method</summary>

* * *

Open the NavigationDrawer on forms that have been created using a template that supports the NavigationDrawer. See <b>Remarks</b> for more information.

<b>Syntax</b>

```

openNavigationDrawer();
```

<b>Parameters</b>

None

<b>Return Values</b>

None

<b>Remarks</b>

This method supports the [NavigationDrawer](FlexForm.md#using-the-navigation-drawer). It is not available unless the FlexForm has been created from a template that supports the NavigationDrawer. The NavigationDrawer is based on the [Android native Navigation drawer](https://material.io/guidelines/patterns/navigation-drawer.md#). It is only supported on Android.

<b>Example</b>

```
//Sample code to open the NavigationDrawer.
formObject.openNavigationDrawer();

```

<b>Platform Availability</b>

*   Android

* * *

</details>
<details close markdown="block"><summary>registerForPeekandPop Method</summary>

* * *

This method registers a widget to enable 3D Touch peek and pop gestures.

<b>Syntax</b>

```

registerForPeekandPop(onPeekCallback, onPopCallback);
```

<b>Parameters</b>

onPeekCallback

A callback function that is invoked when the user slightly presses (soft press) the widget.

Callback Syntax

```

onPeekCallback(widget);
```

Callback Input Parameters

_widget_

A widget reference that is registered for peek and pop.

Callback Return Values

  A PreviewInfoTable. See the Remarks section for a description of this table.

Callback Example

```
function onPeekCallback(widget) {
    var previewInfoTable = {
        "peekForm": frmSecond,
        "focusRect": [0, 0, 200, 200],
        "contentSize": [320, 480]
    };
    return previewInfoTable;
}
```

onPopCallback (Optional)

A callback function that is invoked when the user further presses (hard press) the preview that is displayed for the widget.

Callback Syntax

```

onPopCallback(widget,peekForm);
```

Callback Input Parameters

_widget_

A widget reference that is registered for peek and pop.

_peekForm_

A form reference that is displayed as preview/peek.

Callback Return Values

  A form reference.

Callback Remarks

Use this callback to set the content for pop. The form handle returned by this callback is used for pop content. In general, the form that is used for preview is used for pop content also. If the pop callback is not implemented, peek disappears and the app returns to its previous state.

Callback Example

```
function onPopCallback(widget, peekForm) {
    // preview form used for pop also
    return peekForm;
}
```

<b>Remarks</b>

A PreviewInfoTable has the following format.

**Name:** peekForm

**Description:** The form reference that will be displayed as preview. If an invalid form reference is given, the preview will not be shown.

**Type:** form reference

**Name:** focusRect (Optional)

**Description:** An array representing a rectangle in widgets view coordinates. If provided, this rectangle will be focused while its surrounding area will be blurred, indicating a preview is available for the widget. If not provided, entire view area of the widget will be focused. If either the width or height is zero, the widget's view width/height is used. The values are supported in percentage(with regard to widget bounds), dp, or pixels. The values are strings. If a string value is given without any format specifier, it defaults to dp. If an array of numbers is given, it is assumed they are dp values.

**Type:** Array \[x, y, width, height\]

Example: \[“0dp”, “0dp”, “200dp”, “300dp”\], \[“10%”, “10%”, “75%”, “50%”\], \[“10px”, “10px”, “200px”, “480px”\]

**Name:** contentSize (Optional)

**Description:** An array representing the preferred content size of the preview. This allows the user to adjust the preferred width/height dimensions of the preview. If not provided, the preview is shown with default values. If either the width or height is zero, the default preview width/height is used. It is recommended that one of the width/height values be zero for proper adjustment of the other value. For example, if width = 0, the height is adjustable and vice versa. Providing positive values simultaneously for both width and height will result in distorted appearance of preview. The values are supported in dp, pixels, and percentage(with regard to screen bounds). The actual width/height of the preview may vary slightly due to resizing per aspect ratio. The values are strings. If a string value is given without any format specifier, it defaults to dp. If array of numbers is given, it is assumed they are dp values.

**Type:** Array \[width, height\]

Example: \[“0dp”, “100dp”\], \[“100%”, “0%”\], \[“0px”, “240px”\]

Example of a PreviewInfoTable:

```
var previewInfoTable = {
    "peekForm": frmSecond,
    "focusRect": [0, 0, 200, 200],
    "contentSize": [320, 480]
};
```

<b>Return Values</b>

None.

<b>Platform Availability</b>

*   iOS 9.0 and later

* * *

</details>
<details close markdown="block"><summary>remove Method</summary>

* * *

This method removes a widget from the form container. If a widget is removed from a form, will reflect immediately from the Form hierarchy model perspective; however the changes are displayed when the Form appears. When the widgets are removed from the current visible Form, then the changes will reflect immediately.

<b>Syntax</b>

```

remove(widgetref);
```

<b>Parameters</b>

widgetref

Reference of the name of the widget.

formid \[widgetref\]

Handle to the widget instance.

<b>Return Values</b>

The current Form handle is returned.

<b>Example</b>

```
//Sample Code to invoke remove method by using a FlexContainer widget.  
  
/*In this example, the myFlexContainer FlexContainer invokes remove method to delete myButton button.*/  
  
myForm.myFlexContainer.remove(myForm.myFlexContainer.myButton);  

```

<b>Exceptions</b>

WidgetError

<b>Platform Availability</b>

*   iOS, Android, Windows, and SPA

* * *

</details>
<details close markdown="block"><summary>removeAt Method</summary>

* * *

This method removes a widget at the given index from the Form container. If a widget is removed from the form, will reflect immediately from the Form hierarchy model perspective; however the changes are displayed when the Form appears. When the widgets are removed from the current visible Form, then the changes will reflect immediately.

<b>Syntax</b>

```

removeAt(index);
```

<b>Parameters</b>

index \[Number\]

Specifies the position in number format.

animation

Optional. This parameter is used to associate an animation at given operation.

The animation parameter has three parameters:

definition

An object defined using voltmx.ui.createAnimation() API. Refer to voltmx.ui.createAnimation in the API programmers Guide for more details.

config

As defined in Animation Configuration. For more information, please see the `AnimationConfiguration` object documentation in the [API Developer's Guide](../../../Iris/iris_api_dev_guide/content/introduction.md).

callbacks

A dictionary that represents JavaScript functions that work as animation call backs. For more information, see `AnimationConfiguration` object documentation in the [API Developer's Guide](../../../Iris/iris_api_dev_guide/content/introduction.md).

<b>Return Values</b>

Reference of the name of the widget to be removed.

<b>Example</b>

```
/*Sample code to invoke the removeAt method without animation. In this sample code, the removeAt method deletes the data from the 15th Index position for a Segment widget.*/  
  
frmSegment.mySegment.removeAt(15);  
  
/*Sample code to invoke the removeAt method with animation to deletes the data from the 15th Index position for a Segment widget.*/  
  
frmSegment.mySegment.removeAt (15, animation);  

```

<b>Exceptions</b>

WidgetError

<b>Remarks</b>

> **_Note:_** If the index is not within the limits then _removeAt_ will be silent and doesn't yield any result.

<b>Platform Availability</b>

*   iOS, Android, Windows, and SPA

* * *

</details>
<details close markdown="block"><summary>removeAll Method</summary>

* * *

This method removes all the widget on the container.

<b>Syntax</b>

```

removeAll();
```

<b>Parameters</b>

None

<b>Return Values</b>

None

<b>Example</b>

```
//This is a generic method that is applicable for various widgets.
//Here, we have shown how to invoke the clone Method for a CollectionView widget.  
  
frmCollection.myCollection.removeAll();  

```

<b>Exceptions</b>

WidgetError

<b>Platform Availability</b>

*   iOS, Android, Windows, and SPA

* * *

</details>
<details close markdown="block"><summary>removeGestureRecognizer Method</summary>

* * *

This method allows you to remove the specified gesture recognizer for the specified widget.

<b>Syntax</b>

```

removeGestureRecognizer(gestureHandle);
```

<b>Parameters</b>

gestureHandle - Mandatory

Specifies the handle to the gesture returned by addGestureRecognizer call.

<b>Example</b>

```
 //Sample code to remove Double tap gesture from frmGestures FlexForm.  
frmGestures.removeGestureRecognizer(doubletp);  

```

<b>Platform Availability</b>

*   Available on all platforms except Desktop Web and Android.

* * *

* * *

</details>
<details close markdown="block"><summary>replaceAt Method</summary>

* * *

This method replaces a widget with another widget in a form. If a widget is replaced from the form, will reflect immediately from the Form hierarchy model perspective; however the changes are displayed when the Form appears.

<b>Syntax</b>

```

replaceAt(widgetref,index)
```

<b>Parameters</b>

widgetref

Reference of the name of the widget.

index \[Number\]

Specifies the position in number format. Following are the rules applicable for index:

> *   If the _index < 0_, then first widget in the container gets replaced.
> *   If the _index > size -1_, then the last widget in the container widget gets replaced. The term _size_ refers to the number of widgets present in the container widget.
> 
> animation
> 
> Optional. This parameter is used to associate an animation at given operation.
> 
> The animation parameter has three parameters:
> 
> definition
> 
> An object defined using voltmx.ui.createAnimation() API. Refer to voltmx.ui.createAnimation in the API programmers Guide for more details.
> 
> config
> 
> As defined in Animation Configuration. For more information, please see the `AnimationConfiguration` object documentation in the [API Developer's Guide](../../../Iris/iris_api_dev_guide/content/introduction.md).

<b>Return Values</b>

Reference of the name of the widget to be removed.

<b>Exceptions</b>

WidgetError

<b>Remarks</b>

> **_Note:_** Post this operation widget that was replaced will get garbage collected unless you hold explicitly a reference to the replaced widget.

<b>Platform Availability</b>

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>scrollToBeginning Method</summary>

* * *

This method gives you the control to scroll to the beginning of the form.

<b>Syntax</b>

```

scrollToBeginning();
```

<b>Parameters</b>

None

<b>Return Values</b>

None

<b>Exceptions</b>

WidgetError

<b>Example</b>

```
//Sample code to invoke scrollToBeginning method by using FlexForm.  
myForm.scrollToBeginning();  

```

<b>Platform Availability</b>

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>scrollToEnd Method</summary>

* * *

This method gives you the control to scroll to the end of the FlexForm.

<b>Syntax</b>

```

scrollToEnd();
```

<b>Parameters</b>

None

<b>Return Values</b>

None

<b>Exceptions</b>

WidgetError

<b>Example</b>

```
//Sample code to invoke scrollToEnd method by using FlexForm.  
myForm.scrollToEnd();  

```

<b>Platform Availability</b>

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>scrollToWidget Method</summary>

* * *

This method gives you the control to scroll the FlexForm up to the position of selected widget. If the complete widget cannot fit into the container's view port, container scroll to the extent possible where top-left of the widget is displayed. There is no scrolling if the widget is already visible completely with in the view port.

<b>Syntax</b>

```

scrollToWidget(widgetref);
```

<b>Parameters</b>

widgetref

Reference of the name of the widget, for the container to scroll.

animate

Optional. A Boolean value to indicate that zooming to rect should happen with animation.

<b>Return Values</b>

None

<b>Exceptions</b>

WidgetError

<b>Remarks</b>

> **_Note:_** In iOS platform, this method brings the widget to viewable area on the form.

> **_Note:_** In Android platform, the widget reference provided in the `scrollToWidget` method for FlexScrollContainer widget must be a direct child. You cannot provide the reference of a widget inside the direct child widget. For example: if `myFlexScroll` is a FlexScrollContainer with `testFlex` FlexContainer as its direct child and `myBtn` Button widget is a child of testFlex. You can use `scrollToWidget` method in `myFlexScroll` FlexScrollContainer only using the widget reference of `testFlex` FlexContainer. You cannot provide the widget reference of `myBtn` Button.

<b>Example</b>

```
//Sample code to invoke scrollToWidget Method for a FlexScrollContainer widget.  
//Here btnScroll Button is a child widget of myFlxScrlContainer FlexScrollContainer.

frmHome.myFlxScrlContainer.scrollToWidget(frmHome.myFlxScrlContainer.btnScroll);
```

<b>Platform Availability</b>

*   iOS, Android, Windows, and SPA

* * *

</details>
<details close markdown="block"><summary>setActive Method</summary>

* * *

This method specifies the widget that must be active and brings the widget onto the viewport. Use this method to set the focus on widgets that cannot be brought into focus by using the setFocus method.

**_Note:_** For widgets that can be brought into focus by using the setFocus method, the behavior of this method is similar to the **setFocus** method. To set focus on widgets such as Label, FlexContainer, FlexScrollContainer, and others by using the setActive method, you must set the tabIndex attribute of the **accessibilityConfig** property.  

When you use this method to set a widget as active, the activeStateSkin property and onFocus event configured for the widget are applied to it. <br>
For the Segment and CollectionView widgets, you can specify the rows that need to be in focus by specifying the rowIndex and itemIndex as an input parameter respectively. If you do not specify an input parameter, the whole widget is set as active.

### Syntax
```
setActive(rowIndex/itemIndex, sectionIndex, widgetPath)
```

### Parameters

* rowIndex [Number] - Optional: Specifies the index of the Segment row that must be in focus.
* itemIndex [Number] - Optional: Specifies the index of the CollectionView item that must be in focus.
* sectionIndex [Number] - Optional: Specifies the index of the Segment section that must be in focus.
* widgetPath [String] - Optional: The widget path is a dot-seperated string that contains the path to the widget (present in a Segment row) from the root to the widget that must be in focus.

### Return Values

None

### Remarks

* If a widget is disabled, it cannot be set as active.
* You cannot set the child elements of a Segment, CollectionView, or DataGrid widget as active by using the setActive method.
* The Web Framework provides support for both the setActive and the setFocus methods. However, Temenos recommends that you use only one of the methods for a widget. 
* If you set the onFocus Event for a widget that is set as active (by using the setActive method), ensure that you do not make any layout changes in the event callback of the onFocus Event to avoid UI glitches.
For example, consider the following code:

```
this.view.tb.onFocus = function(eventobject) {
var lbl = new kony.ui.Label({id: "lblTest"});
this.view.add(lbl);
this.view.lblTest.text = 'onFocus Button';
}.bind(this);

//focus on the textbox present at the top of the form
this.view.tb.setActive();
```

When the setActive API is invoked on the TextBox widget, the TextBox is marked as active and made visible in the viewport. This makes the scrollbar scroll to the top of the Form where the TextBox widget is present. However, the creation of the Label widget in the callback of the onFocus Event changes the layout, making the scrollbar scroll back to the bottom of the form.



### Example

```
//This is a generic method that is applicable for various widgets.
//Here, we have shown how to use the setActive method for the FlexContainer and Segment
 widgets.
//You need to make a corresponding call of the setActive method for other applicable widgets.

//sample code to set the FlexContainer widget as active
this.view.flx.setActive();

//sample code to set focus on the button present within a component in the third row in first section of a Segment
this.view.seg.setActive(2,0,"CompWOC.btn1");
```

### Platform Availability

*   Responsive Web


* * *

</details>
<details close markdown="block"><summary>setBackgroundImageForNavbar Method</summary>

* * *

Set the background image for the title bar for iOS specific applications. This method only functions if [titleBarAttributes](FlexForm_Properties.md#titleBarAttributes) is set.

<b>Syntax</b>

```

setBackgroundImageForNavbar(keyList);
```

<b>Parameters</b>

_keyList_

A JavaScript object containing a set of key:value pairs that contain information on the background image. See Remarks for more information.

<b>Return Values</b>

None

<b>Remarks</b>

keyList is a JavaScript object that contains key:value pairs in the following format:

{image:"imagename", barMetrics:barMetricValue} where imagename is a string identifier for the image, and barMetricValue is one of the following constants:

*   **constants.BAR\_METRICS\_DEFAULT** applies for all orientations.
*   **constants.BAR\_METRICS\_COMPACT**, - applies for landscape only.
*   **constants.BAR\_METRICS\_PROMPT**, - applies when prompt is shown. The setTitleVerticalPositionAdjustment Method is disabled when this constant is used.
*   **constants.BAR\_METRICS\_COMPACT\_PROMPT** - applies when prompt is shown for landscape mode.

If the barMetrics is set as constants.BAR\_METRICS\_PROMPT, the setTitleVerticalPositionAdjustment API does not work.

<b>Example</b>

```
//Sample code to invoke setBackgroundImageForNavbar method by using a FlexForm.  
frmHome.setBackgroundImageForNavbar({
    "image": "background.png",
    "barMetrics": constants.BAR_METRICS_COMPACT
});
```

<b>Platform Availability</b>

*   iOS

* * *

</details>
<details close markdown="block"><summary>setContentOffset Method</summary>

* * *

This method gives you the control to offset a portion of the content in a Form to bring the widgets in invisible area to visible area. If you have a scrollable widget with many widgets in it, using this method, you can bring the widget into device default visible area (current view port).

For example, if you have a scrollbox with 20 images in a Form and only first image is present in view port. If you want to bring 13th image into view port, specify x and y values with this method to bring 13th image into the current view port.

<b>Syntax</b>

```

setContentOffset(contentOffset);
```

<b>Parameters</b>

contentOffset

A JSObject with the possible keys as x, y and the values can be numbers or strings. Values can be specified in all possible units of measurement(dp, px, and %).

animate

Optional. A Boolean value to indicate that zooming to rectangle should happen with animation.

<b>Return Values</b>

None

<b>Exceptions</b>

WidgetError

<b>Example</b>

```
//Sample code to invoke setContentOffset method by using a FlexForm.  
frmHome.setContentOffset({
    "x": 0,
    "y": 20,
    true
});
```

<b>Platform Availability</b>

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>setDefaultUnit Method</summary>

* * *

Specifies the default unit to be used for interpretation of numbers with no qualifiers when passed to layout properties. It is assumed that all the unqualified numbers specified for child widget layout properties and parent widget layout properties to follow the default unit specified.

<b>Syntax</b>

```

setDefaultUnit(unit);
```


<b>Parameters</b>

unit - (Mandatory): Specifies the position in number format.Following are the options:

> *   voltmx.flex.DP: Specifies the values in terms of device independent pixels.
> *   voltmx.flex.PX: Specifies the values in terms of device hardware pixels.
> *   voltmx.flex.PERCENTAGE(Default): Specifies the values in percentage relative to the parent dimensions.

<b>Return Values</b>

None

<b>Exceptions</b>

WidgetError

<b>Remarks</b>

> **_Note:_** Irrespective of the number of times this method is called, system picks up the default unit configured through this method just before the layout triggers.

<b>Example</b>

```
//Sample Code to invoke setDefaultUnit method by using a FlexForm.  
  
myForm.setDefaultUnit(voltmx.flex.PX);  

```

<b>Platform Availability</b>

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>setHidesBackButton Method</summary>

* * *

Hides or shows the back button. This method only functions if the [titleBarAttributes](FlexForm_Properties.md#titleBarAttributes) property is set.

<b>Syntax</b>

```

setHidesBackButton(keyValues);
```

<b>Parameters</b>

_keyValues_

A JSObject that contains key:value pairs. It has this format: {hidesBackButton:boolean, animated:boolean}.

<b>Return Values</b>

None

<b>Exceptions</b>

WidgetError

<b>Example</b>

```
//Sample code to invoke setHidesBackButton method by using a FlexForm.  
Form1.setHidesBackButton({
    "hidesBackButton": false,
    "animated": false

});
```

<b>Platform Availability</b>

*   iOS

* * *

</details>
<details close markdown="block"><summary>setLeftBarButtonItems Method</summary>

* * *

Allows you to add BarButtonItems to the left side of the NavigationBar. This method only functions if the [titleBarAttributes](FlexForm_Properties.md#titleBarAttributes) property is set.

<b>Syntax</b>

```

setLeftBarButtonItems(keyValues);
```

<b>Parameters</b>

_keyValues_

A JSObject that contains key:value pairs. It has this format: {items:array of BarButtonItem objects, animated:boolean}.

The BarButtonItem object is documented in the API Programmers Guide.

<b>Return Values</b>

None

<b>Exceptions</b>

WidgetError

<b>Example</b>

```
//Sample code to invoke setLeftBarButtonItems method by using a FlexForm.  
  
var itemArray = new voltmx.ui.BarButtonItem({
    "type": constants.BAR_BUTTON_IMAGE,
    "tintColor": "#ffffff",
    "style": constants.BAR_ITEM_STYLE_PLAIN,
    "enabled": true,
    "action": bar_function,
    "metaData": {
        "image": "icon.png"
    }
});
Form1.setLeftBarButtonItems({
    "items": itemArray,
    "animated": false
});

function bar_function() {
    voltmx.print("bar button clicked!!");
}
```

<b>Platform Availability</b>

*   iOS

* * *

</details>
<details close markdown="block"><summary>setOnPeek Method</summary>

* * *

This method sets and overrides the existing onPeekCallback for the widget.

<b>Syntax</b>

```

setOnPeek(onPeekCallback);
```

<b>Parameters</b>

onPeekCallback

A callback function that is invoked when the user slightly presses (soft press) the widget.

Callback Syntax

```

onPeekCallback(widget);
```

Callback Parameters

_widget_

A widget reference that is registered for peek and pop.

Callback Return Values

PreviewInfoTable. See the Remarks section for a description of this table.

Callback Example

```
function onPeekCallback(widget, contextInfo) {
    var previewInfoTable = {
        "peekForm": frmSecond,
        "focusRect": [0, 0, 200, 200],
        "contentSize": [320, 480]
    };
    return previewInfoTable;
}
```

<b>Return Values</b>

None.

<b>Remarks</b>

A PreviewInfoTable has the following format.

**Name:** peekForm

**Description:** The form reference that will be displayed as preview. If an invalid form reference is given, the preview will not be shown.

**Type:** form reference

**Name:** focusRect (Optional)

**Description:** An array representing a rectangle in widgets view coordinates. If provided, this rectangle will be focused while its surrounding area will be blurred, indicating a preview is available for the widget. If not provided, entire view area of the widget will be focused. If either the width or height is zero, the widget's view width/height is used. The values are supported in percentage(with regard to widget bounds), dp, or pixels. The values are strings. If a string value is given without any format specifier, it defaults to dp. If an array of numbers is given, it is assumed they are dp values.

**Type:**Array \[x, y, width, height\]

Example: \[“0dp”, “0dp”, “200dp”, “300dp”\], \[“10%”, “10%”, “75%”, “50%”\], \[“10px”, “10px”, “200px”, “480px”\]

**Name:**contentSize (Optional)

**Description:**An array representing the preferred content size of the preview. This allows the user to adjust the preferred width/height dimensions of the preview. If not provided, the preview is shown with default values. If either the width or height is zero, the default preview width/height is used. It is recommended that one of the width/height values be zero for proper adjustment of the other value. For example, if width = 0, the height is adjustable and vice versa. Providing positive values simultaneously for both width and height will result in distorted appearance of preview. The values are supported in dp, pixels, and percentage(with regard to screen bounds). The actual width/height of the preview may vary slightly due to resizing per aspect ratio. The values are strings. If a string value is given without any format specifier, it defaults to dp. If array of numbers is given, it is assumed they are dp values.

**Type:**Array \[width, height\]

Example: \[“0dp”, “100dp”\], \[“100%”, “0%”\], \[“0px”, “240px”\]

Example of a PreviewInfoTable:

```
var previewInfoTable = {
    "peekForm": frmSecond,
    "focusRect": [0, 0, 200, 200],
    "contentSize": [320, 480]
};
```

<b>Example</b>

```
function settingPeek() {
    Form1.setOnPeek(onMyPeekcallback);
}

function onMyPeekcallback(widgetref, contextInfo) {
    if (typeof(contextInfo) === undefined) {
        return null;
    }

    var previewInfoTable = {
        "peekForm": frmSecond,
        "focusRect": [0, 0, 200, 200],
        "contentSize": [320, 480]
    };
    return previewInfoTable;

}
```

<b>Platform Availability</b>

*   iOS 9.0 and later

* * *

</details>
<details close markdown="block"><summary>setOnPop Method</summary>

* * *

This method overrides the existing onPopCallback for the widget.

<b>Syntax</b>

```

setOnPop(onPopCallback);
```

<b>Parameters</b>

onPopCallback

A callback function that is invoked when the user slightly presses (soft press) the widget.

Callback Syntax

```

onPopCallback(widget,peekForm);
```

Callback Parameters

_widget_

 A widget reference that is registered for peek and pop.

_peekForm_

 A form reference that is displayed as preview/peek.

Callback Return Values

 A form reference.

Callback Remarks

 Use this callback to set the content for pop. The form handle returned by this callback is used for pop content. In general, the form that is used for preview is used for pop content also. If the pop callback is not implemented, peek disappears and the app returns to its previous state.

Callback Example

```
function onPopCallback(widget, peekForm) {
    // preview form used for pop also
    return peekForm;
}
```

<b>Return Values</b>

None.

<b>Example</b>

```
function settingPop() {
    Form1.setOnPop(myonPopcallback);
}

function myonPopcallback(widgetref, peekForm) {
    // preview form used for pop also
    return peekForm;
}
```

<b>Platform Availability</b>

*   iOS 9.0 and later

* * *

</details>
<details close markdown="block"><summary>setPreviewActionItems Method</summary>

* * *

This method sets the preview actions for a form to be displayed when the user swipes up the preview/peek of a form.

<b>Syntax</b>

```

setPreviewActionItems(previewActionItems);
```

<b>Parameters</b>

previewActionItems

An array of preview action item configurations. A preview action item has the following format.

**type**: Constant

Specifies whether the preview action item is an individual or group item. The possible values are:

*   voltmx.forcetouch.PREVIEW\_ACTION\_TYPE\_GROUP
*   voltmx.forcetouch.PREVIEW\_ACTION\_TYPE\_INDIVIDUAL

The default is voltmx.forcetouch.PREVIEW\_ACTION\_TYPE\_INDIVIDUAL.

**title**: String (Mandatory)

The required, user-visible title of the preview action item.

**style**: Constant

The optional style parameter of the preview action item. The possible values are:

*   voltmx.forcetouch.PREVIEW\_ACTION\_STYLE\_DEFAULT
*   voltmx.forcetouch.PREVIEW\_ACTION\_STYLE\_SELECTED
*   voltmx.forcetouch.PREVIEW\_ACTION\_STYLE\_DESTRUCTIVE

The default value is voltmx.forcetouch.PREVIEW\_ACTION\_STYLE\_DEFAULT.

These values are defined in the Apple documentation. See [index.html](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIPreviewActionItem_Protocol/index.md#//apple_ref/c/tdef/UIPreviewActionStyle) for more information.

**actions**: Array of preview action items.

Applicable only for grouped preview action items. It represents a subgroup array of preview action items that are displayed on click of the grouped preview action item.

**onPreviewAction**: callback

The callback function that is invoked when the user selects this preview action item. Applicable only for individual preview action items.

**Syntax**

```

onPreviewAction(previewActionConfig,previewForm);
```

**Input Parameters**

_previewActionConfig_

A dictionary consisting of title and style key-value pairs of the tapped preview action item.

_previewForm_

Preview form reference.

**Example**

```
function previewaction1(previewActionConfig, previewForm) {
    voltmx.print("Copy Preview action invoked.");
}
```

<b>Return Values</b>

None.

<b>Example</b>

```
frmSecond.setPreviewActionItems(
    [{ //1 - group previewaction item
        "type": voltmx.forcetouch.PREVIEW_ACTION_TYPE_GROUP,
        "title": "copy",
        "style": voltmx.forcetouch.PREVIEW_ACTION_STYLE_SELECTED,
        "actions": [{
            "type": voltmx.forcetouch.PREVIEW_ACTION_TYPE_INDIVIDUAL,
            "title": "subcopy1",
            "style": voltmx.forcetouch.PREVIEW_ACTION_STYLE_DEFAULT,
            "onPreviewAction": previewaction1
        }, {
            "title": "subcopy2",
            "style": voltmx.forcetouch.PREVIEW_ACTION_STYLE_DEFAULT,
            "onPreviewAction": previewaction2
        }]
    }, {
        //2 - individual preview action item
        "type": voltmx.forcetouch.PREVIEW_ACTION_TYPE_INDIVIDUAL,
        "title": "add",
        "style": voltmx.forcetouch.PREVIEW_ACTION_STYLE_DEFAULT,
        "onPreviewAction": previewaction3
    }, {
        //3 - individual preview action item
        "type": voltmx.forcetouch.PREVIEW_ACTION_TYPE_INDIVIDUAL,
        "title": "delete",
        "style": voltmx.forcetouch.PREVIEW_ACTION_STYLE_DESTRUCTIVE,
        "onPreviewAction": previewaction4
    }]
);
```

<b>Platform Availability</b>

*   iOS 9.0 and later

* * *

</details>
<details close markdown="block"><summary>setRightBarButtonItems Method</summary>

* * *

Allows you to add BarButtonItems to the Right side of the Navigation Bar. This method only functions if the [titleBarAttributes](FlexForm_Properties.md#titleBarAttributes) property is set.

<b>Syntax</b>

```

setRightBarButtonItems(keyValues);
```

<b>Parameters</b>

_keyValues_

A JSObject that contains key:value pairs. It has this format: {items:array of BarButtonItem objects, animated:boolean}.

The BarButtonItem object is documented in the API Programmers Guide.

<b>Return Values</b>

None

<b>Example</b>

```
//Sample code to invoke setRightBarButtonItems method by using a FlexForm.  
  
var itemArray = new voltmx.ui.BarButtonItem({
    "type": constants.BAR_BUTTON_IMAGE,
    "tintColor": "#ffffff",
    "style": constants.BAR_ITEM_STYLE_PLAIN,
    "enabled": true,
    "action": bar_function,
    "metaData": {
        "image": "icon.png"
    }
});
Form1.setRightBarButtonItems(config)({
    "items": itemArray,
    "animated": false
});

function bar_function() {
    voltmx.print("bar button clicked!!");
}
```

<b>Platform Availability</b>

*   iOS

* * *

</details>
<details close markdown="block"><summary>setTitleBarLeftSideButtonSkin Method</summary>

* * *

This method enables you to set the properties for a left-side button of a titlebar.

<b>Syntax</b>

```

setTitleBarLeftSideButtonSkin(text,skin,callBack);
```

<b>Parameters</b>

formid \[widgetref\]

Handle to the widget instance.

text \[String\]

Specifies the text of the title bar left side button.

skin \[String\]

Specifies the skin of the button. It supports fontColor and image properties only.

callBack \[event call back\]

Specifies the event call back to be invoked on tapping left button.

<b>Return Values</b>

None

<b>Exceptions</b>

None

<b>Platform Availability</b>

This method is available on iPhone/iPad.

* * *

</details>
<details close markdown="block"><summary>setTitleBarRightSideButtonSkin Method</summary>

* * *

This method enables you to set the properties for a right-side button of a titlebar.

<b>Syntax</b>

```

setTitleBarRightSideButtonSkin(text,skin,callBack);
```

<b>Parameters</b>

formid \[widgetref\]

Handle to the widget instance.

text \[String\]

Specifies the text of the title bar right side button.

skin \[String\]

Specifies the skin of the button. It supports fontColor and image properties only.

callBack \[event call back\]

Specifies the event call back to be invoked on tapping right button.

<b>Return Values</b>

None

<b>Exceptions</b>

None

<b>Platform Availability</b>

This method is available on iPhone/iPad.

* * *

</details>
<details close markdown="block"><summary>setTitleVerticalPositionAdjustment Method</summary>

* * *

Set position of the title vertically on the navigation bar. This method only functions if the [titleBarAttributes](FlexForm_Properties.md#titleBarAttributes) property is set.

<b>Syntax</b>

```

setTitleVerticalPositionAdjustment(barMetrics);
```

<b>Parameters</b>

_barMetrics_

A JavaScript object containing a set of key:value pairs that contain information on the background image. See <b>Remarks</b> for more information.

<b>Return Values</b>

None

<b>Remarks</b>

keyList is a JavaScript object that contains key:value pairs in the following format:

{adjustment:"value", barMetrics:barMetricValue} where value is a string identifier for the adjustment, and barMetricValue is one of the following constants:

*   **constants.BAR\_METRICS\_DEFAULT** applies for all orientations.
*   **constants.BAR\_METRICS\_COMPACT**, - applies for landscape only.
*   **constants.BAR\_METRICS\_PROMPT**, - applies when prompt is shown.
*   **constants.BAR\_METRICS\_COMPACT\_PROMPT** - applies when prompt is shown for landscape mode.

<b>Example</b>

```
//Sample code to invoke setTitleVerticalPositionAdjustment method by using a FlexForm.  
  
var adjustmentForm = 10;

Form1.setTitleVerticalPositionAdjustment({
    "adjustment": adjustmentForm,
    "barMetrics": constants.BAR_METRICS_COMPACT
});
```

<b>Platform Availability</b>

*   iOS

* * *

</details>
<details close markdown="block"><summary>setZoomScale Method</summary>

* * *

This method allows you the zoom the widgets with an option to animate. The default value of the scale is 1. When you set the scale value as 2, the widget will be zoomed by factor of 2 (twice the size of its original size).

<b>Syntax</b>

```

setZoomScale(scale);
```

<b>Parameters</b>

_scale_

A floating point value that specifies the current scale factor applied to the FlexForm content.

_animate_

Optional. A boolean value to indicate that zoom scale should happen with animation.

<b>Return Values</b>

None

<b>Exceptions</b>

WidgetError

<b>Remarks</b>

> **_Note:_** You must configure widgetToZoom event to view the zooming effect.

For example, If you have a form with a flexScrollContainer and an image widget inside flexScrollContainer, when you pinch the screen on flexScrollContainer it will call the function configured using widgetToZoom event. If the function returns image, the image will be zoomed.

```
//Sample code to invoke setZoomScale method by using a FlexForm.  
  
myForm.setZoomScale(2, true);

```

<b>Platform Availability</b>

Available on iOS platform only.

* * *

</details>
<details close markdown="block"><summary>show Method</summary>

* * *

This method is used to display the FlexForm.

<b>Syntax</b>

```

show();
```

<b>Parameters</b>

None

<b>Return Values</b>

None

<b>Exceptions</b>

None

<b>Example</b>

```
//Sample code to invoke show method for a FlexForm.

myForm.show();
```

<b>Platform Availability</b>

*   iOS, Android, Windows, and SPA

* * *

</details>
<details close markdown="block"><summary>showTitleBar Method</summary>

* * *

This method gives you the control to show a titlebar to a FlexForm.

<b>Syntax</b>

```

showTitleBar();
```

<b>Parameters</b>

None

<b>Return Values</b>

None

<b>Exceptions</b>

None

<b>Example</b>

```
 //Sample code to invoke showTitleBar method by using a FlexForm.  
  
myForm.showTitleBar();  

```

<b>Platform Availability</b>

This method is available on iPhone/iPad.

* * *

</details>
<details close markdown="block"><summary>unregisterForPeekandPop Method</summary>

* * *

This method unregisters a widget from 3D Touch peek and pop gestures.

<b>Syntax</b>

```

unregisterForPeekandPop();
```


<b>Parameters</b>

None.

<b>Return Values</b>

None.

<b>Example</b>

```
Form1.unregisterForPeekAndPop();
```

<b>Platform Availability</b>

*   iOS 9.0 and later

* * *

</details>
<details close markdown="block"><summary>widgets Method</summary>

* * *

This method returns an array of the widget references which are direct children of Form.

<b>Syntax</b>

```

widgets();
```

<b>Parameters</b>

None

<b>Return Values</b>

This method returns _Read only_ array of widget references. Modifying the array and changing the position of widgets in this array doesn't reflect in the Form hierarchy, however you can get handle to the widgets through this array and modify the widgets through widget level methods as exposed by individual widgets.

<b>Exceptions</b>

WidgetError

<b>Example</b>

```
//Sample code to read the direct child widgets of a FlexForm.

var myWidgets=myForm.widgets();  
  
voltmx.print("The child widgets inside myForm FlexForm are:"+myWidgets);  

```

<b>Platform Availability</b>

*   iOS, Android, Desktop Web, SPA, and Windows

* * *

</details>