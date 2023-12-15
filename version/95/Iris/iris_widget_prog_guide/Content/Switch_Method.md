                               


Switch Methods
============== 

Switch widget is associated with the following method:


* * *

<details close markdown="block"><summary>addGestureRecognizer Method</summary>

* * *

This API allows you to set a gesture recognizer for a specified gesture for a specified widget.

### Syntax

`addGestureRecognizer(gestureType, gestureConfigParams, onGestureClosure)`

### Parameters

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

### Return Values

String - Reference to the gesture is returned.

### Remarks

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

For example:  {fingers:1,taps:1}

Gesture Type:SWIPE

*   fingers \[Number\] - specifies the maximum number of fingers that must be respected for a gesture. Possible values are: 1. Default value is 1.

For example: {fingers: 1}

Gesture Type:LONGPRESS

*   pressDuration \[Number\] - specifies the minimum time interval (in seconds) after which the gesture is recognized as a LONGPRESS. For example, if pressDuration is 2 seconds, any continued press is recognized as LONGPRESS only if it lasts for at least 2 seconds. Default value is 1. This is not applicable to Windows.

For example: {pressDuration=1}.

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

`onGestureClosure(widgetRef, gestureInfo, context)`

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

### Example

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

### Platform Availability

*   iOS, Windows

* * *

</details>

<details close markdown="block"><summary>animate Method</summary>

* * *

Applies an animation to the widget.

### Syntax

`animate (animationObj, animateConfig, animationCallbacks)`

### Parameters

_animationObj_

An `animation` object created using [voltmx.ui.createAnimation](../../../Iris/iris_api_dev_guide/content/voltmx.ui_functions.md#createAn) function.

_animationConfig_

As defined in widget level animation section.

_animationCallbacks_

A JavaScript dictionary that contains key-value pairs. The following keys are supported.

| Key | Description |
| --- | --- |
| animationEnd | A JavaScript function that is invoked with the animation ends. For more information, see the **Remarks** section below. |
| animationStart | A JavaScript function that is invoked with the animation starts. For more information, see the **Remarks** section below. |

### Return Values

Returns a platform-specific handle to the animation. This handle currently not used, but is returned for possible future requirements use.

### Remarks

The callback for the `animationStart` key in the JavaScript object passed in this method's _animationCallbacks_ parameter has the following signature.

`animationStart(source, animationHandle, elapsedTime);`

where `source` is the widget being animated, `animationHandle` is the handle returned by the `applyAnimation` method, and `elapsedTime` is the amount of time the animation has been running in seconds, when this event is fired..

This event occurs at the start of the animation. If there is 'animation-delay' configured then this event will fire only after the delay period. This event gets called asynchronously.

The callback for the `animationEnd` key in the JavaScript object passed in this method's _animationCallbacks_ parameter has the following signature.

`animationEnd(source, animationHandle, elapsedTime);`

where source is the widget being animated, animationHandle is the handle returned by the applyAnimation method, and elapsedTime is the amount of time the animation has been running in seconds, when this event is fired.

This event occurs at the end of the animation. This event gets called asynchronously.

The `animate` method throws an Invalid Animation Definition Exception if animation definition, does not follow the dictionary structure expected. This method is ignored if it is called on a widget whose immediate parent is not FlexContainer or a FlexScrollContainer.

If the widget is not part of the currently visible view hierarchy, calling this method does nothing. Because this method is asynchronous and immediately returns, it does not wait for the animation to start or complete.

### Example

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

### Platform Availability

*   iOS, Android, Windows, and SPA

* * *

</details>

<details close markdown="block"><summary>clone Method</summary>

* * *

When this method is used on a container widget, then all the widgets inside the container are cloned. This method takes an optional parameter. If the widgetid is not passed then the cloned copy will have the same ID as original widget.

If the widget ID is passed as a parameter then it will be prefixed to the existing ID and will assign it to cloned copy of the container. For all other widgets of the container and its child widgets.

For example, if the widget ID is "fc1" and the widget ID passed to clone API is "ref1", then the cloned widget ID will be "ref1fc1". For a child widget placed in a container with widget ID as "wid1", the cloned copy will have the widget ID as "ref1wid1".

Exceptions are not displayed if widget ID parameter is not unique. Instead when the cloned copy is added to the same form as of original container then it may lead to unexpected behaviors. So it is your responsibility to provide unique widget ID.

### Syntax

`clone()`

### Parameters

widgetId \[String\]

Optional. Reference of the name of the widget.

### Return Values

Cloned copy of the widget.

### Exceptions

None

### Remarks

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

### Example

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

### Platform Availability

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