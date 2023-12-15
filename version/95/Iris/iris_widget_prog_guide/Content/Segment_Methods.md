                                


SegmentedUI Methods
===================

This section provides the methods associated with the SegmentUI widget. You can use these methods across all platforms.

> **_Note:_** The methods described in this section can be used only after you specify the mapping information between the widget IDs and the keys in the data using the [widgetDataMap](Segment_Properties.md#widgetDa) property.

The animation methods in this section help you apply 2D and 3D animations and transforms to the segment rows. Animations get applied to the rows only in the visible region. These methods adhere to animation modes defined as part of animation definition. You can make animation callbacks that are defined as part of animations. The animation methods work only at the segment level.

Positional and dimensional animations can be applied to individual row elements, but not supported at segment row level.

> **_Note:_** These animations apply only for the TABLEVIEW type.

Additionally, you can also specify the _Meta Info_ for the rows as explained in [data](Segment_Properties.md#data) property.

* * *


<details close markdown="block"><summary>addAll Method</summary>

* * *

This method allows you to add new data to the segment.

### Syntax
```

addAll(data)
```

### Parameters

data

Specifies an array to represent data as key value pairs. The format of the array of data is explained in [data](Segment_Properties.md#data) property of segment basic properties.

animation

Optional. This parameter is used to associate an animation with the item described by data.

The animation parameter has three parameters:

definition

An object defined using the voltmx.ui.createAnimation() API. Refer to voltmx.ui.createAnimation in the API programmers Guide for more details.

config

As defined in Animation Configuration. For more information, please see the `AnimationConfiguration` object documentation in the [API Developer's Guide](../../../Iris/iris_api_dev_guide/content/introduction.md).

callbacks

A dictionary that represents JavaScript functions that work as animation call backs. For more information, see `AnimationConfiguration` object documentation in the [API Developer's Guide](../../../Iris/iris_api_dev_guide/content/introduction.md).

### Remarks

The new data is appended to the existing data. If the segment has no data, the new data is placed in the segment.

Using this method, you cannot add the rows to the existing sections.

Animations get applied to the rows only in the visible region and ignored if the rows are in the invisible region.

You can apply specific animations to the displaced rows using the [onRowDisplay](#onRowDisplay) method.

If the animation property is defined in the addAll method, the animation will be applied to all elements added to the row.

The widget/row model will be updated based on the animation fill modes, so that the widget/row would always show the appropriate values. Note that your app must provide rowTemplateId as an empty object in the data object of a row to update the row model.

### Example

```

//Sample code to use addAll method without animation  
formSegment.mysegment.addAll([{
    dataId1: "data1",
    dataId2: "data2",
    dataId3: "data3"
}, {
    dataId1: "datax",
    dataId2: "datay",
    dataId3: "dataz",
    template: box1
}]);  
//Sample code to use addAll method with animation  
formSegment.mysegment.addAll([{
        dataId1: "data1",
        dataId2: "data2",
        dataId3: "data3"
    }, {
        dataId1: "datax",
        dataId2: "datay",
        dataId3: "dataz",
        template: box1
    }],
    animation 
);  
  

```

### Platform Availability

Available on all platforms

* * *

</details>
<details close markdown="block"><summary>addDataAt Method</summary>

* * *

Allows you to add one row of data at a given index or within a section.

### Syntax
```

addDataAt(data,rowIndex,sectionIndex)
```

### Parameters

data

Specifies the JSObject to represent data as key value pairs. The format of the array of data is explained in [data](Segment_Properties.md#data) property of segment basic properties.

Row data can also have the standard template key to indicate a new template for this added row. However it is developer responsibility to ensure widgetdatamap covers the widgets present in the new template.

rowIndex

Specifies the Index of the row within the section if the _sectionIndex_ is mentioned. If the _sectionIndex_ is not mentioned, the _rowIndex_ is treated in absolute terms independent of sections.

> > **_Note:_** Sections should not be counted as rows when calculating the _rowIndex_.

Index is '0' based in JavaScript and should be less than "n", where "n" is the number of existing rows within the section if _sectionIndex_ is mentioned. If the _sectionIndex_ is not mentioned "n" is the total number of rows in a segment.

If the _rowIndex_ mentioned is greater than "n", then row is added at the end of the segment or at the end of the section depending on the _sectionIndex_.

sectionIndex

Optional. Specifies the Index of the section. If the index is not mentioned, the _rowIndex_ will be treated in absolute terms.

> **_Note:_** In Android platform, the `sectionIndex` parameter is a mandatory parameter.

animation

Optional. This parameter is used to associate an animation at given operation.

The animation parameter has three parameters:

definition

An object defined using voltmx.ui.createAnimation() API. Refer to voltmx.ui.createAnimation in the API programmers Guide for more details.

config

As defined in Animation Configuration. For more information, please see the `AnimationConfiguration` object documentation in the [API Developer's Guide](../../../Iris/iris_api_dev_guide/content/introduction.md).

callbacks

A dictionary that represents JavaScript functions that work as animation call backs. For more information, see `AnimationConfiguration` object documentation in the [API Developer's Guide](../../../Iris/iris_api_dev_guide/content/introduction.md).

### Remarks

The new data is placed before the index. The existing data is pushed to the next row.

Animations get applied to the rows only in the visible region and ignored if the rows are in the invisible region.

You can apply specific animations to the displaced rows using the [onRowDisplay](#onRowDisplay) method.

The widget/ row model will be updated based on the animation fill modes, so that the widget/row would always show the appropriate values. Note that your app must provide rowTemplateId as an empty object in the data object of a row to update the row model

For example, the syntax to get the label text is `segment.selectedValue.label(text)`. Earlier this was written as `segment.selectedValue.label.text`.

### Example

```

/*Sample code to use addDataAt method without animation. In this sample code, the data is added above the 15th Index position in the first section of the Segment, mySegment.*/  
formSegment.mysegment.addDataAt(dataObj1, 15);  
  
/*Sample code to use addDataAt method with animation. In this sample code, the data is added above the 15th Index position in the first section of the Segment, mySegment.*/  
formSegment.mysegment.addDataAt(dataObj1, 15, animation);  
  
/*Sample code to use addDataAt method in Android platform. In this sample code, the data is added above the 15th index position in the zeroth section of mySegment Segment.*/  
formSegment.mysegment.addDataAt(dataObj1, 15,0);  

```

### Platform Availability

Available on all platforms

* * *

</details>
<details close markdown="block"><summary>addGestureRecognizer Method</summary>

* * *

This API allows you to set a gesture recognizer for a specified gesture for a specified widget.

Syntax

addGestureRecognizer(gestureType, gestureConfigParams, onGestureClosure)

Parameters

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

### For example:  

{fingers:1,taps:1}

Gesture Type:SWIPE

*   fingers \[Number\] - specifies the maximum number of fingers that must be respected for a gesture. Possible values are: 1. Default value is 1.

### For example:

{fingers: 1}

Gesture Type:LONGPRESS

*   pressDuration \[Number\] - specifies the minimum time interval (in seconds) after which the gesture is recognized as a LONGPRESS. For example, if pressDuration is 2 seconds, any continued press is recognized as LONGPRESS only if it lasts for at least 2 seconds. Default value is 1. This is not applicable to Windows.

### For example:

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

### This function will be raised asynchronously and has the following Syntax:

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

### context table has the following key-value pairs:

*   rowIndex \[number\] : row index of the segui where gesture was recognised. (Applicable to gestures added to segUI rows)
*   sectionIndex \[number\] : section index of the segui where gesture was recognised. (Applicable to gestures added to segUI rows)

It is not recommend to define gestures for widgets that have a default behavior associated with it.

If you click (tap) a button (any clickable widget), the default behavior is to trigger an onClick event. If you define a Tap gesture on such widgets, the gesture closure is executed in addition to the onClick event.

If you swipe a larger form, the default behavior is to scroll up and down depending on the direction in which you swipe. If you define a SWIPE gesture on such forms, the gesture closure gets executed in addition to scrolling the form.

If you swipe a Segmented UI with huge number of rows, the default behavior is to scroll the Segmented UI. If you define a SWIPE gesture on such segments, the gesture closure gets executed in addition to scrolling the form.

### Gestures can be added only for the following widgets:

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
<details close markdown="block"><summary>addSectionAt Method</summary>

* * *

This method allows you to add one section with rows to the segment.

### Syntax
```
 
addSectionAt(data,sectionIndex)
```

### Parameters

data

Specifies an array to represent data as key value pairs. The format of the array of data is explained in [data](Segment_Properties.md#data) property of segment basic properties.

sectionIndex

Specifies the Index of the section.

Index is '0' based in JavaScript and should be less than "n", where "n" is the number of existing sections within the segment. If the index is greater than or equal to "n", then section is added at the end of the segment.

animation

Optional. This parameter is used to associate an animation at given operation.

The animation parameter has three parameters:

definition

An object defined using voltmx.ui.createAnimation() API. Refer to voltmx.ui.createAnimation in the API programmers Guide for more details.

config

As defined in Animation Configuration. For more information, please see the `AnimationConfiguration` object documentation in the [API Developer's Guide](../../../Iris/iris_api_dev_guide/content/introduction.md).

callbacks

A dictionary that represents JavaScript functions that work as animation call backs. For more information, see `AnimationConfiguration` object documentation in the [API Developer's Guide](../../../Iris/iris_api_dev_guide/content/introduction.md).

### Remarks

> **_Note:_** Sections and its rows can have the standard template key to indicate a new template for this added row. However it is developer responsibility to ensure widgetdatamap covers the widgets present in the new template.

Animations get applied to the rows only in the visible region and ignored if the rows are in the invisible region.

You can apply specific animations to the displaced rows using the [onRowDisplay](#onRowDisplay) method.

The widget/row model will be updated based on the animation fill modes, so that the widget/row would always show the appropriate values. Note that your app must provide rowTemplateId as an empty object in the data object of a row to update the row model

For example, the syntax to get the label text is `segment.selectedValue.label(text)`. In previous versions this was written as `segment.selectedValue.label.text`.

### Example

```

/*Sample code to use the addSectionAt method without animation. In this sample code, the data is added above the 15th Index position in the Segment,mySegment.*/  
  
formSegment.mysegment.addSectionAt(dataObj1, 15);  
  
/*Sample code to use addSectionAt method with animation. In this sample code, the data is added above the 15th Index position in the Segment,mySegment.*/  
  
formSegment.mysegment.addSectionAt (dataObj1, 15, animation);
```

### Platform Availability

Available on all platforms

* * *

</details>
<details close markdown="block"><summary>animate Method</summary>

* * *

Applies an animation to the widget.

### Syntax
```

animate (animationObj, animateConfig, animationCallbacks)
```

### Parameters

_animationObj_

An `animation` object created using [voltmx.ui.createAnimation] function.

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

animationStart(source, animationHandle, elapsedTime);

where `source` is the widget being animated, `animationHandle` is the handle returned by the `applyAnimation` method, and `elapsedTime` is the amount of time the animation has been running in seconds, when this event is fired..

This event occurs at the start of the animation. If there is 'animation-delay' configured then this event will fire only after the delay period. This event gets called asynchronously.

The callback for the `animationEnd` key in the JavaScript object passed in this method's _animationCallbacks_ parameter has the following signature.

animationEnd(source, animationHandle, elapsedTime);

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
<details close markdown="block"><summary>animateRows Method</summary>

* * *

This method associates animations with a specific row and its elements.

### Syntax
```

animateRows(rowAnimationConfig)
```

### Parameters

rowAnimationConfig

The array of elements and their animation definitions. This parameter has following fields:

  
| Argument | Description |
| --- | --- |
| rows | An array of one or more row objects. Each row object is in the following format: sectionIndex: The section number that contains the row. rowIndex: The row number. |
| widgetRef | An array of IDs of the widgets in the row to be animated. |
| animation | The animation object in the following format: definition: The animation definition object. config: The configuration definition object. callbacks: Optional callback functions. |

> **_Note:_** If the widget ID is not specified, the animation is applied at row level.

### Return Values

None

### Remarks

Using this method, you can apply animation to multiple rows so that all rows are animated simultaneously. The callbacks will be called only once for each row. You can even club the animations, but either at row level or at row elements level, not both at the same time. The rows being animated with this method should be in the visible region.

When a particular row is animated in a SegmentedUI widget, no animation is applied on the rows being displaced unless and until animation is applied. For example, suppose a Segment widget contains four rows and animation is applied only to the second row. When the second row gets animated, it which triggers displacement on the third and fourth rows. The displaced rows (3rd and 4th) may not get animated automatically unless animations are applied on them. In this case, you can apply specific animations to the displaced rows using the animateRows method.

The widget/row model will be updated based on the animation fill modes, so that the widget/row would always show the appropriate values. Note that your app must provide rowTemplateId as an empty object in the data object of a row to update the row model.

If your app calls this method on a SegmentedUI widget and the SegmentedUI widget is in a FlexContainer widget whose [autogrowMode](FlexContainer_Properties.md#autogrow) property is set to voltmx.flex.AUTOGROW\_HEIGHT, then animateRows will apply the animations for all of the specified rows. The animations will even be applied to rows outside the visible area.

If the orientation of the user's device changes while animations are being performed, the animations end immediately. Animations will also end immediately whenever your app calls any method or function that causes a complete refresh of the SegmentedUI widget. For example, if your app changes the SegmentedUI widget's data map while an animation is playing, the animation current animation will end and all subsequent animations are skipped.

### Example

```

var transformObject = voltmx.ui.makeAffineTransform();
transformObject.translate(10, 0);
transformObject.scale(0.1, 1);

var animationDef = {
 "100": {
  "transform": transformObject
 }
};
var animationConfig = {
 duration: 0.3,
 fillMode: voltmx.anim.FILL_MODE_FORWARDS
};
var row1 = {
 sectionIndex: 0,
 rowIndex: 1
};
var row2 = {
 sectionIndex: 0,
 rowIndex: 1
};
var animationDefObject = voltmx.ui.createAnimation(animationDef);
form1.segment1.animateRows({
 rows: [row1, row2],
 widgets: [myWidget],
 animation: {
  definition: animationDefObject,
  config: animationConfig
 }
});
```

### Platform Availability

Available on Android, iOS, SPA, Desktop Web, and Windows tablet.

* * *

</details>
<details close markdown="block"><summary>clearSearch Method</summary>

* * *

This method clears the filtered results of the Segment widget generated using the [searchText](#searchText) Method. If the filtered results are displayed in the Segment widget, this method also resets the Segment to display the full master data.

### Syntax
```

clearSearch()
```

### Example

```

this.view.SegSearch.clearSearch();
```

### Platform Availability

*   Android
*   iOS
*   SPA

* * *

</details>
<details close markdown="block"><summary>convertPointFromWidget Method</summary>

* * *

This method allows you to convert the coordinate system from a widget to a point (receiver's coordinate system).

### Syntax
```

convertPointFromWidget(point, fromWidget)
```

### Parameters

_point_

\[JSObject\]- Mandatory

You can specify an object with keys as x and y. You can specify the values in all (dp, px and %) units of measurement.

_fromWidget_

\[widgetref\]- Mandatory

This parameter is the handle to the widget instance. Based on this parameter, the coordinate system is converted from the widget to a point (receiver's coordinate system).

### Example

```

Form1.widget1.convertPointFromWidget({
    x: "10dp",
    y: "20dp"
}, widget2);
```

### Platform Availability

*   iOS, Android, Windows, and SPA

* * *

</details>
<details close markdown="block"><summary>convertPointToWidget Method</summary>

* * *

Using the convertPointToWidget method, you can modify the co-ordinate system. You can convert the receiver's co-ordinate system from a **point** to a **Widget**.

### Syntax
```

convertPointToWidget(point, toWidget)
```

### Parameters

_point_

\[JSObject\]- Mandatory. You can specify an object with keys as x and y. You can specify the values in all (dp, px and %) units of measurement.

_toWidget_

\[widgetref\] - Mandatory. This parameter is the handle to the widget instance. Based on this parameter, the coordinate system is converted from a point to a widget.

### Example

```

Form1.widget2.convertPointToWidget({
    x: "20dp",
    y: "30dp"
}, widget1);
```

### Platform Availability

*   iOS, Android, Windows, and SPA

* * *

</details>
<details close markdown="block"><summary>getBadge Method</summary>

* * *

This API enables you to read the badge value (if any) attached to the specified widget. If the specified widget does not have a badge attached to it, it returns an empty string.

### Syntax
```

getBadge()
```

### Optional Parameter

uniqueIdentifier

Unique identifier of a widget which is a handle to the widget.

### Return Values

Returns a string containing the badge value applied to the specified widget. If the specified widget has no badge value attached to it, it returns an empty string.

### Remarks

When a badge is removed, the widgets are re-formatted to accommodate the cleared badge values.

On the iOS platform, this method is applicable on Label, Button, Image, TextBox, and TextArea widgets only.

### Example

```

//This is a generic method that is applicable for various widgets.
//Here, we have shown how to use the getBadge Method for button widget.
//You need to make a corresponding call of the getBadge method for other applicable widgets.
function getBadge() {
    //To get a badge value on a Button with ID btn1 placed on a form frm1, use the following snippet:
    var badgeVal = frm1.btn1.getBadge();
    alert("badge value is::" + badgeVal);

    //For instance, the corresponding getBadge method call on the Label widget is as follows:
    frm1.lbl1.getBadge();
}
```

### Platform Availability

*   iOS

* * *

</details>
<details close markdown="block"><summary>getFirstVisibleRow Method</summary>

* * *

This method returns a JavaScript object containing the first visible row section index and row index.

### Syntax
```

getFirstVisibleRow()
```

### Parameters

No

### Return Values

A JavaScript object in the following format.

```

contextDef={
	sectionIndex=0,
	 rowIndex = 1,
}
```

### Example

```

var object = form.segment.getFirstVisibleRow();
voltmx.print(object[sectionIndex]);
voltmx.print(object[rowIndex]);
```

### Platform Availability

Available on Android, iOS, SPA, and desktop Web.

* * *

</details>
<details close markdown="block"><summary>getLastVisibleRow Method</summary>

* * *

This method returns a JavaScript object containing the last visible row's section index and row index.

### Syntax
```

getLastVisibleRow()
```

### Parameters

No

### Return Values

JavaScript object which would be of the following format

```

contextDef = {
  sectionIndex:0,
  rowIndex:1,
};
```

### Example

```

var object1 = form1.segment.getLastVisibleRow();
voltmx.print(object1[sectionIndex]);
voltmx.print(object1[rowIndex]);
```

### Platform Availability

Available on all platforms except on Windows

* * *

</details>
<details close markdown="block"><summary>getUpdatedSearchResults Method</summary>

* * *

This method is used to return the filtered list that you get after applying the [searchText](#searchText) Method on the Segment.

### Syntax
```

getUpdatedSearchResults()
```

### Parameters

No

### Return Values

The _getUpdatedSearchResults_ Method returns an array of index values of the Segment. The first index value is the sectionIndex of the data and the second index value is the rowIndex of the data.

The list of search results is in the following format:

\[\[sectionIndex, rowIndex\], \[sectionIndex, rowIndex\],\[sectionIndex, rowIndex\],\[sectionIndex, rowIndex\], ......... \]

### Example

```

var newList=self.view.SegSearch.getUpdatedSearchResults();
```

### Platform Availability

*   Android
*   iOS
*   SPA

* * *

</details>
<details close markdown="block"><summary>registerForPeekandPop Method</summary>

* * *

This method registers a widget to enable 3D Touch peek and pop gestures.

### Syntax
```

registerForPeekandPop(onPeekCallback, onPopCallback)
```

### Parameters

onPeekCallback

A callback function that is invoked when the user slightly presses (soft press) the widget.

Callback Syntax

onPeekCallback(widget)

Callback Input Parameters

_widget_

A widget reference that is registered for peek and pop.

Callback Return Values

  A PreviewInfoTable. See the Remarks section for a description of this table.

### Callback Example

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

onPopCallback(widget,peekForm)

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

### Remarks

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

### Example of a PreviewInfoTable:

```

var previewInfoTable = {
    "peekForm": frmSecond,
    "focusRect": [0, 0, 200, 200],
    "contentSize": [320, 480]
};
```

### Return Values

None.

### Platform Availability

*   iOS 9.0 and later

* * *

</details>
<details close markdown="block"><summary>removeAll Method</summary>

* * *

This method is used to remove all the existing rows and sections in a segment.

### Syntax
```

removeAll()
```

### Parameters

animation

Optional. This parameter is used to associate an animation at given operation.

The animation parameter has three parameters:

definition

An object defined using voltmx.ui.createAnimation() API. Refer to voltmx.ui.createAnimation in the API programmers Guide for more details.

config

As defined in Animation Configuration. For more information, please see the `AnimationConfiguration` object documentation in the [API Developer's Guide](../../../Iris/iris_api_dev_guide/content/introduction.md).

callbacks

A dictionary that represents JavaScript functions that work as animation call backs. For more information, see `AnimationConfiguration` object documentation in the [API Developer's Guide](../../../Iris/iris_api_dev_guide/content/introduction.md).

### Remarks

Animations get applied to the rows only in the visible region and ignored if the rows are in the invisible region.

You can apply specific animations to the displaced rows using the [onRowDisplay](#onRowDisplay) method.

The widget/row model will be updated based on the animation fill modes, so that the widget/row would always show the appropriate values. Note that your app must provide rowTemplateId as an empty object in the data object of a row to update the row model.

For example, the syntax to get the label text is `segment.selectedValue.label(text)`. Earlier this was written as `segment.selectedValue.label.text`.

### Example

```

//Sample code to use the removeAll method without animation.  
  
formSegment.mysegment.removeAll();  
  
//Sample code to use the removeAll method with animation.  
  
formSegment.mysegment.removeAll (animation);  

```

### Platform Availability

Available on all platforms

* * *

 </details>
<details close markdown="block"><summary> [removeAt Method</summary> 

* * *

This method is used to remove the row at the given index or a row with in a section.

### Syntax
```

removeAt(rowIndex,sectionIndex)
```

### Parameters

rowIndex

Specifies the Index of the row within the section if the _sectionIndex_ is mentioned. It the _sectionIndex_ is not mentioed, the _rowIndex_ is treated in absolute terms independent of sections.

Index is '0' based in JavaScript and should be less than "n", where "n" is the number of existing rows within the section if _sectionIndex_ is mentioned. If the _sectionIndex_ is not mentioned "n" is the total number of rows in a segment.

If the _rowIndex_ mentioned is not within the limits then no action takes place.

sectionIndex

Optional. Specifies the Index of the section. If the index is not mentioned, the _rowIndex_ will be treated in absolute terms.

> **_Note:_** In Android platform, the `sectionIndex` parameter is a mandatory parameter.

animation

Optional. This parameter is used to associate an animation at given operation.

The animation parameter has three parameters:

definition

An object defined using voltmx.ui.createAnimation() API. Refer to voltmx.ui.createAnimation in the API programmers Guide for more details.

config

As defined in Animation Configuration. For more information, please see the `AnimationConfiguration` object documentation in the [API Developer's Guide](../../../Iris/iris_api_dev_guide/content/introduction.md).

callbacks

A dictionary that represents JavaScript functions that work as animation call backs. For more information, see `AnimationConfiguration` object documentation in the [API Developer's Guide](../../../Iris/iris_api_dev_guide/content/introduction.md).

### Remarks

> **_Note:_** Sections should not be counted as rows when calculating the _rowIndex_.

If the index is not within the limits then _removeAt_ will be silent and doesn't yield any result.

Animations get applied to the rows only in the visible region and ignored if the rows are in the invisible region.

You can apply specific animations to the displaced rows using the [onRowDisplay](#onRowDisplay) method.

The widget/row model will be updated based on the animation fill modes, so that the widget/row would always show the appropriate values. Note that your app must provide rowTemplateId as an empty object in the data object of a row to update the row model.

For example, the syntax to get the label text is `segment.selectedValue.label(text)`. Earlier this was written as `segment.selectedValue.label.text`.

### Example

```

/*Sample code to use the removeAt method without animation. In this sample code, the removeAt method removes the data from the 15th Index position.*/  
formSegment.mysegment.removeAt(15);  
  
/*Sample code to use the removeAt method with animation to remove the data from the15th Index position.*/  
formSegment.mysegment.removeAt (15, animation);  
  
/* In this sample code, the data in the 15th-row index position in the zeroth section of mySegment Segment is removed.*/  
formSegment.mysegment.removeAt(dataObj1, 15,0);  

```

### Platform Availability

Available on all platforms

* * *

</details>
<details close markdown="block"><summary>removeFromParent Method</summary>

* * *

This method allows you to remove a child widget from a parent widget.

### Syntax
```

removeFromParent()
```

### Read/Write

Yes - (Read and Write)

### Example

```

//This is a generic method that is applicable for various widgets.
//Here, we have shown how to use the removeFromParent Method for a Calendar widget.
//You need to make a corresponding call of the removeFromParent method for other applicable widgets.

Form1.calendar.removeFromParent();

```

### Platform Availability

*   iOS, Android , Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>removeGestureRecognizer Method</summary>

* * *

This method allows you to remove the specified gesture recognizer for the specified widget.

### Syntax
```

removeGestureRecognizer(gestureHandle)
```

### Parameters

gestureHandle - Mandatory

Specifies the handle to the gesture returned by addGestureRecognizer call.

### Example

```

//Sample code to remove Double tap gesture from frmGestures FlexForm.  
frmGestures.removeGestureRecognizer(doubletp);  

```

### Platform Availability

*   Available on all platforms except Desktop Web and Android.

* * *

</details>
<details close markdown="block"><summary>removeSectionAt Method</summary>

* * *

This method allows you to remove a section at the given index within a segment.

### Syntax
```

removeSectionAt(sectionIndex)
```

### Parameters

sectionIndex

Specifies the Index of the section.

Index is '0' based in JavaScript and should be less than "n", where "n" is the number of existing sections within the segment. The operation is ignored if the _sectionIndex_ is not mentioned.

animation

Optional. This parameter is used to associate an animation at given operation.

The animation parameter has three parameters:

definition

An object defined using voltmx.ui.createAnimation() API. Refer to voltmx.ui.createAnimation in the API programmers Guide for more details.

config

As defined in Animation Configuration. For more information, please see the `AnimationConfiguration` object documentation in the [API Developer's Guide](../../../Iris/iris_api_dev_guide/content/introduction.md).

callbacks

A dictionary that represents JavaScript functions that work as animation call backs. For more information, see `AnimationConfiguration` object documentation in the [API Developer's Guide](../../../Iris/iris_api_dev_guide/content/introduction.md).

### Remarks

Animations get applied to the rows only in the visible region and ignored if the rows are in the invisible region.

You can apply specific animations to the displaced rows using the [onRowDisplay](#onRowDisplay) method.

The widget/row model will be updated based on the animation fill modes, so that the widget/row would always show the appropriate values. Note that your app must provide rowTemplateId as an empty object in the data object of a row to update the row model.

For example, the syntax to get the label text is `segment.selectedValue.label(text)`. Earlier this was written as `segment.selectedValue.label.text`.

### Example

```

/*Sample code to use the removeSectionAt method without animation. In this code, removeSectionAt method removes the section from the 2nd Index position.*/  
  
formSegment.mysegment.removeSectionAt(2);  
  
/*Sample code to use the removeSectionAt method with animation. In this code, removeSectionAt method is used to remove the section from the 2nd Index position.*/  
  
formSegment.mysegment.removeSectionAt(2, animation);  

```

### Platform Availability

Available on all platforms

* * *

</details>
<details close markdown="block"><summary>resetSwipeMove Method</summary>

* * *

This method is applicable only when the _widgetSwipeMove_ Property is configured for the Segment. When you swipe a widget in a Segment widget, use the _resetSwipeMove_ Method to reset the widget swipe to its initial state. The resetSwipeMove Method, resets the translate position to zero.

### Syntax
```

resetSwipeMove()
```

### Parameters

swipeWidget

This parameter specifies the ID of the widget on which you have specified the widgetSwipeMove Property and have performed the swipe.

context\[Object\]

This parameter is applicable only when the Segment has a row template or a section template. The _context_ Object contains the following attributes:

_rowIndex\[Number\]_: This attribute specifies the row index of _swipeWidget_ in the Segment.

_sectionIndex\[Number\]_: This attributes specifies the section index of _swipeWidget_ in the Segment.

Limitations

Android limitation: Swipe action will no longer appear on the specified position defined in the sub-boundaries once the finger is out of the widget.

### Example

```

frmSegment.mySegment.resetSwipeMove(swipeWidget,context);
```

### Platform Availability

*   Android
*   iOS
*   SPA

* * *

</details>
<details close markdown="block"><summary>searchText Method</summary>

* * *

This method searches the data given inside the Segment widget.

### Syntax
```

searchText (searchCondition, config)
```

### Input Parameters

config

This is an optional parameter and it has the following fields:

<table style="width: 100%;mc-table-style: url('Resources/Stylesheets1/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 111px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 72px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 145px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="text-align: center;">Field Name</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Type</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="text-align: center;">Default Value</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="text-align: center;">Description</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">updateSegment</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Boolean</td><td class="TableStyle-Basic-BodyE-Column1-Body1">true</td><td class="TableStyle-Basic-BodyD-Column1-Body1">When the value of this field is true, the segment renders the search results.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">showSectionHeaderFooter</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Boolean</td><td class="TableStyle-Basic-BodyB-Column1-Body1">true</td><td class="TableStyle-Basic-BodyA-Column1-Body1">When the value of this field is true, the header and footer of the segment renders along with the search results.</td></tr></tbody></table>

_searchCondition_

This is a mandatory parameter. This parameter has an array of search conditions separated by an Operator. Following is an example of the parameter with two search criteria:

searchCondition: \[ SearchCritera-1, Operator, SearchCritera-2, \]

Each search criteria are JS objects with the following fields:

<table style="width: 100%;mc-table-style: url('Resources/Stylesheets1/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 111px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 72px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 184px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="text-align: center;">Field Name</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Type</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="text-align: center;">Default Value</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="text-align: center;">Description</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">textToSearch</td><td class="TableStyle-Basic-BodyE-Column1-Body1">String</td><td class="TableStyle-Basic-BodyE-Column1-Body1">&nbsp;</td><td class="TableStyle-Basic-BodyD-Column1-Body1">This is a mandatory field. It contains the text that is searched through the segment.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">caseSensitive</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Boolean</td><td class="TableStyle-Basic-BodyE-Column1-Body1">true</td><td class="TableStyle-Basic-BodyD-Column1-Body1">This is an optional field. This field specifies if the text in the textToSearch parameter should be case sensitive or not.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">searchType</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Constants</td><td class="TableStyle-Basic-BodyE-Column1-Body1">SEGUI_SEARCH_CRITERIA_CONTAINS</td><td class="TableStyle-Basic-BodyD-Column1-Body1">This is an optional field. This field specifies how the text should be searched through the segment. The values that can be provided for this field is provided in the Remarks section.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">searchableWidgets</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Array</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Empty Array</td><td class="TableStyle-Basic-BodyA-Column1-Body1">This is an optional field. This field specifies the widgets that needs to be searched. If this field has an empty array, then all the widgets inside the segment widget is searched.</td></tr></tbody></table>

Operator

This is an optional parameter. However, if there are more than one searchCriteria, then this parameter becomes mandatory. This parameter can have the following values:

*   constants.SEGUI\_SEARCH\_CRITERIA\_OPERATOR\_AND
*   constants.SEGUI\_SEARCH\_CRITERIA\_OPERATOR\_OR ( Default)

### Return Values

Returns an array of index values of the segment. The first index value is the sectionIndex and the second index value is the rowIndex of the data. Following is the sample of the output:

\[ \[ 0 ,5 \] ,\[ 0 ,6 \] ,\[ 0 ,7 \] ,\[ 0 ,8 \] ,\[ 1 ,5 \] ,\[ 1 ,6 \] ,\[ 1 ,7 \] ,\[ 1 ,8 \] \]

### Remarks

The different search types are:

*   constants.SEGUI\_SEARCH\_CRITERIA\_CONTAINS
*   constants.SEGUI\_SEARCH\_CRITERIA\_ENDSWITH
*   constants.SEGUI\_SEARCH\_CRITERIA\_STARTSWITH
*   constants.SEGUI\_SEARCH\_CRITERIA\_NOT\_CONTAINS
*   constants.SEGUI\_SEARCH\_CRITERIA\_NOT\_ENDSWITH
*   constants.SEGUI\_SEARCH\_CRITERIA\_NOT\_STARTSWITH
*   constants.SEGUI\_SEARCH\_CRITERIA\_GREATER
*   constants.SEGUI\_SEARCH\_CRITERIA\_GREATER\_EQUAL
*   constants.SEGUI\_SEARCH\_CRITERIA\_LESSER
*   constants.SEGUI\_SEARCH\_CRITERIA\_LESSER\_EQUAL
*   constants.SEGUI\_SEARCH\_CRITERIA\_EQUAL
*   constants.SEGUI\_SEARCH\_CRITERIA\_NOT\_EQUAL

> **_Note:_** 1.If a non-numerical **searchText** does not yield results using the given **searchCriteria**(such as greater, greatedEqual, etc.) , the **searchCriteria** performs the search as **SEGUI\_SEARCH\_CRITERIA\_CONTAINS** by default.  
2\. Following is the list of supported widgets for the **searchableWidgets** field: Label, TextBox, TextArea, Button and Calendar.

### Example

```

var result = self.view.segmentSearch.searchText(
 [{//search criteria one
   "textToSearch": this.view.textBoxSearch.text,
   "caseSensitive": false,
   "searchType": constants.SEGUI_SEARCH_CRITERIA_CONTAINS,
   "searchableWidgets": ["lblTime", "lblHeading"]
  },
  constants.SEGUI_SEARCH_CRITERIA_OPERATOR_OR, [//operator
   [{//search criteria two
    "textToSearch": "app",
    "caseSensitive": false,
    "searchType": constants.SEGUI_SEARCH_CRITERIA_CONTAINS,
    "searchableWidgets": ["lblTime", "lblHeading"]
   }],
   constants.SEGUI_SEARCH_CRITERIA_OPERATOR_OR,//operator
   {//search criteria three
    "textToSearch": "Dev",
    "caseSensitive": true,
    "searchType": constants.SEGUI_SEARCH_CRITERIA_CONTAINS,
    "searchableWidgets": ["lblTime", "lblHeading"]
   }

  ],
 ], {//config parameter

  "updateSegment": true,
  "showHeaderFooter": true

 }
);
```

### Platform Availability

*   Android
*   iOS
*   SPA

* * *

</details>
<details close markdown="block"><summary>setAnimations Method</summary>

* * *

This method is used to associate animations to the rows at each operation.

### Syntax
```

setAnimations (animationConfig)
```

### Parameters

animationConfig

The animation definitions to be associated with the row.

### Return Values

None

### Remarks

The animationConfig parameter is an animation definition consisting of two arguments: _visible_ preserve">var var _invisible_. The _visible_ argument contains animation definition, callback, and configuration to be applied when a row is being brought to the visible canvas. The _invisible_ argument contains animation definition, callback, and configuration to be applied when a row is being moved out of the visible canvas.

The visible animations set using the setAnimations method are not invoked when the onRowDisplay method is used to define animations for elements.

When visible animation is set and segment is scrolled, because of which a row is brought to the visible region with the visible animation applied and the end state of visible animation is reflected on the row. This overrides the animation state set by the add/remove/set operations.

In Android and iOS platforms, the setAnimations method is not applicable for the AutoGrow Segment.

### Example

```

var transformObject = voltmx.ui.makeAffineTransform();
transformObject.translate(10, 0);
transformObject.scale(0.1, 1);
animationDef = {
    100: {
        "transform": transformObject
    }
};

animationConfig = {
    duration: 0.3,
    fillMode: voltmx.anim.FILL_MODE_FORWARDS
};
animationDefObject = voltmx.ui.createAnimation(
    animationDef
);
form.segment.setAnimations({
    visible: {
        definition: animationDefObject,
        config: animationConfig,
        callbacks: null
    }
});
```

### Platform Availability

Available on all platforms except on Windows.

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
<details close markdown="block"><summary>setBadge Method</summary>

* * *

This method enables you to set the badge value to the given widget at the upper, right corner of the widget.

### Syntax
```

setBadge(badgeText)
```

### Parameters

badgeText \[String\] - Mandatory

Specifies the Text value that appears within the badge. If the length of the badgeText is greater than 1, the badge is a rounded rectangle. For example, if you specify the text of the badge as 88, the number appears in a rounded rectangular badge. If the length of the badge text is 1, the badge is always a circle. The badge can occupy up to 70% of the width of the parent widget. For example, on a button with a width of 100 pixels, a badge with about 100 characters will occupy only 70 pixels of the button width. The badge text is truncated and shows about 30 characters followed by three dots.

skin \[String\] - Optional

The parameter specifies the background color for the badge. The default color is red.

### Return Values

None

### Exceptions

Error

### Remarks

The color for the badge can be defined using a skin. The default color for the badge is red with white lettering.

If you pass an empty string as a parameter, the badge applied to the widget is cleared.

A Badge can be applied only to the FlexContainer Widget. To apply badge to other widgets, place the corresponding widget inside the FlexContainer, then apply Badge to the FlexContainer Widget. Also make sure that the clipBounds property of the FlexContainer are set to false.

If the badge value is a single character (a character or a number), the badge shape is a circle.

![](Resources/Images/widgetbadge.png)

If the badge value contains multiple characters, the badge shape is a rectangle with rounded corners and borders.

The badge can occupy a maximum of 70% width of the parent widget (widget on which badge is applied). For example, on a button with a width of 100 pixels, a badge with about 100 characters will occupy only 70 pixels of the button width. The badge value is truncated and about 30 characters followed by three dots.

When a badge is set, the widgets are re-arranged to accommodate the badge.

For iOS platform, this method is applicable on Box, Label, and Image widgets only.

For Android platform, this method is applicable on Button and Image widgets only.

### Example

```

//This is a generic method that is applicable for various widgets.
//Here, we have shown how to use the setBadge Method for button widget.
//You need to make a corresponding call of the setBadge method for other applicable widgets.
function setBadge() {
    /*To set a badge value with skin "badgeSkin" on a button btn1
placed on a form frm1, use the following code: */
    frm1.btn1.setBadge("2", "badgeSkin");
}
//For instance, the corresponding setEnabled method call on the Label widget is as follows:
form.lbl1.setBadge("4", "badgeSkin");
```

### Platform Availability

*   iOS

For more information about the badge APIs refer the _API Reference Document_.

* * *

</details>
<details close markdown="block"><summary id="setData">setData Method</summary>

* * *

This method allows you to set new data to the segment.

### Syntax
```

setData(data)
```

### Parameters

data

Specifies an array to represent data as key value pairs. The format of the array of data is explained in [data](Segment_Properties.md#data) property of segment basic properties.

animation

Optional. This parameter is used to associate an animation at given operation.

The animation parameter has three parameters:

definition

An object defined using voltmx.ui.createAnimation() API. Refer to voltmx.ui.createAnimation in the API programmers Guide for more details.

config

As defined in Animation Configuration. For more information, please see the `AnimationConfiguration` object documentation in the [API Developer's Guide](../../../Iris/iris_api_dev_guide/content/introduction.md).

callbacks

A dictionary that represents JavaScript functions that work as animation call backs. For more information, see `AnimationConfiguration` object documentation in the [API Developer's Guide](../../../Iris/iris_api_dev_guide/content/introduction.md).

### Remarks

When you set new data, the existing data will be replaced with the new data. If the segment has no data, the new data is placed in the segment.

Updating a widget's data using the setData method as part of its own callbacks in a segment row's context results undefined behaviour.

Animations get applied to the rows only in the visible region and ignored if the rows are in the invisible region.

You can apply specific animations to the displaced rows using the [onRowDisplay](#onRowDisplay) method.

The widget/row model will be updated based on the animation fill modes, so that the widget/row would always show the appropriate values. Note that your app must provide rowTemplateId as an empty object in the data object of a row to update the row model.

For example, the syntax to get the label text is `segment.selectedValue.label(text)`. Earlier this was written as `segment.selectedValue.label.text`.

### Example

```

//Sample code to use setData method without animation.  
  
formSegment.mysegment.segment.setData([{

      dataId1:"data1",
      dataId2:"data2",
      dataId3:"data3"
    }, 
    {
      dataId1:"datax",
      dataId2:"datay", 
      dataId3:"dataz", 
      template:box1
    }
  ]
);  
  
//Sample code to use setData method with animation.  
  
formSegment.mysegment.setData([
    {
      dataId1:"data1",
      dataId2:"data2",
      dataId3:"data3"
    }, 
    {
      dataId1:"datax",
      dataId2:"datay",
      dataId3:"dataz",
      template:box1
    }
  ]
), animation);  

```

### Platform Availability

Available on all platforms

* * *

</details>
<details close markdown="block"><summary>setDataAt Method</summary>

* * *

Allows you to set data or modify an existing data of a row or within a section.

### Syntax
```

setDataAt(data,rowIndex,sectionIndex)
```

### Parameters

data

Specifies the JSObject to represent data as key value pairs. The format of the array of data is explained in [data](Segment_Properties.md#data) property of segment basic properties. Rowdata can have the standard template key to indicate a new template for this row. However it is developer responsibility to ensure widgetDataMap covers the widgets present in the new template.

rowIndex

Specifies the Index of the row within the section if the _sectionIndex_ is mentioned. If the _sectionIndex_ is not mentioed, the _rowIndex_ is treated in absolute terms independent of sections.

> > **_Note:_** Sections should not be counted as rows when calculating the _rowIndex_.

Index is '0' based in JavaScript and should be less than "n", where "n" is the number of existing rows within the section if _sectionIndex_ is mentioned. If the _sectionIndex_ is not mentioned "n" is the total number of rows in a segment.

If the rowIndex mentioned is not within the limits then no action takes place.

sectionIndex

Optional. Specifies the Index of the section. If the index is not mentioned, the _rowIndex_ will be treated in absolute terms.

> **_Note:_** In Android platform, the `sectionIndex` parameter is a mandatory parameter.

animation

Optional. This parameter is used to associate an animation at given operation.

The animation parameter has three parameters:

definition

An object defined using voltmx.ui.createAnimation() API. Refer to voltmx.ui.createAnimation in the API programmers Guide for more details.

config

As defined in Animation Configuration. For more information on animation configuration, please see the `AnimationConfiguration` object documentation in the [API Developer's Guide](../../../Iris/iris_api_dev_guide/content/introduction.md).

callbacks

A dictionary that represents JavaScript functions that work as animation call backs. For more information, see `AnimationConfiguration` object documentation in the [API Developer's Guide](../../../Iris/iris_api_dev_guide/content/introduction.md).

### Remarks

The existing data of the row will be replaced with the new set. In case the index is not valid and not falling in range 0 <= index <= N, where N is the total number of records then the operation is ignored.

Animations get applied to the rows only in the visible region and ignored if the rows are in the invisible region.

You can apply specific animations on the displaced rows using the [onRowDisplay](#onRowDisplay) method.

The widget/row model will be updated based on the animation fill modes, so that the widget/row would always show the appropriate values. Note that your app must provide rowTemplateId as an empty object in the data object of a row to update the row model.

For example, the syntax to get the label text is `segment.selectedValue.label(text)`. Earlier this was written as `segment.selectedValue.label.text`.

### Example

```

//Example of a data object that needs to be set in the 15th Index of the Segment.  
  
dataObj1 = {
    globaDdataId1: "label3",
    globaDataId2: "label4",
    globalDataId3: "label5"
};  
//Sample code to use setDataAt method without animation.  
formSegment.mysegment.setDataAt(dataObj1, 15);  
  
//Sample code to use setDataAt method with animation.  
formSegment.mysegment.setDataAt(dataObj1, 15, animation);  
  
/*Sample code to use setDataAt method in Android platform. In this sample code,the data is removed and new data is updated at the 15th-row index position in the zeroth section of mySegment Segment.*/  
formSegment.mysegment.setDataAt(dataObj1, 15,0);  

```

### Platform Availability

Available on all platforms

* * *

</details>
<details close markdown="block"><summary>setEnabled Method</summary>

* * *

This method specifies the widget that must be enabled or disabled.

### Syntax
```

setEnabled(enabled)
```

Parameters

_enabled_

\[Boolean\] - Mandatory

true -Indicates widget is enabled.

false - Indicates widget is disabled.

### Return Values

None

### Exceptions

Error

### Remarks

Browser widget does not support this method in SPA.

This method is not applicable in Map widget.

### Example

```

//This is a generic method that is applicable for various widgets.
//Here, we have shown how to use the setEnabled Method for button widget.
//You need to make a corresponding call of the setEnabled method for other applicable widgets.

form1.myButton.setEnabled(false);
```

Platform Availability

Available on all platforms except SPA.

* * *

</details>
<details close markdown="block"><summary>setFocus Method</summary>

* * *

This method specifies the widget on which there must be focus.

**Default :** true

### Syntax
```

setFocus(focus)
```

### Parameters

_focus_ \[Boolean\]- Mandatory

true -Indicates focus is set on a widget.

false - Indicates focus is not set on a widget.

### Return Values

None

### Exceptions

Error

### Remarks

You should not call this method in **preShow** of a form as it is not respected by all platforms. In android platform, this method is not respected in **preShow** of a form. You can give focus to a particular widget only after it is rendered on the screen, hence it should be called in postShow of a form.

This method is not applicable in Form widget.

### Example

```

//This is a generic method that is applicable for various widgets.
//Here, we have shown how to use the setFocus Method for button widget.
//You need to make a corresponding call of the setFocus method for other applicable widgets.

form1.myButton.setFocus(true);
```

### Platform Availability

Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>setOnPeek Method</summary>

* * *

This method sets and overrides the existing onPeekCallback for the widget.

### Syntax
```

setOnPeek(onPeekCallback)
```

### Parameters

onPeekCallback

A callback function that is invoked when the user slightly presses (soft press) the widget.

Callback Syntax

onPeekCallback(widget)

Callback Parameters

_widget_

A widget reference that is registered for peek and pop.

Callback Return Values

PreviewInfoTable. See the Remarks section for a description of this table.

### Callback Example

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

### Return Values

None.

### Remarks

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

### Example of a PreviewInfoTable:

```

var previewInfoTable = {
    "peekForm": frmSecond,
    "focusRect": [0, 0, 200, 200],
    "contentSize": [320, 480]
};
```

### Example

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

### Platform Availability

*   iOS 9.0 and later

* * *

</details>
<details close markdown="block"><summary>setOnPop Method</summary>

* * *

This method overrides the existing onPopCallback for the widget.

### Syntax
```

setOnPop(onPopCallback)
```

### Parameters

onPopCallback

A callback function that is invoked when the user slightly presses (soft press) the widget.

Callback Syntax

onPopCallback(widget,peekForm)

Callback Parameters

_widget_

 A widget reference that is registered for peek and pop.

_peekForm_

 A form reference that is displayed as preview/peek.

Callback Return Values

 A form reference.

Callback Remarks

 Use this callback to set the content for pop. The form handle returned by this callback is used for pop content. In general, the form that is used for preview is used for pop content also. If the pop callback is not implemented, peek disappears and the app returns to its previous state.

### Callback Example

```

function onPopCallback(widget, peekForm) {
    // preview form used for pop also
    return peekForm;
}
```

### Return Values

None.

### Example

```

function settingPop() {
    Form1.setOnPop(myonPopcallback);
}

function myonPopcallback(widgetref, peekForm) {
    // preview form used for pop also
    return peekForm;
}
```

### Platform Availability

*   iOS 9.0 and later

* * *

</details>
<details close markdown="block"><summary>setSectionAt Method</summary>

* * *

This method allows you to set or modify a section with rows to the segment.

### Syntax
```

setSectionAt(arrayofdata,sectionIndex)
```

### Parameters

arrayofdata

Specifies an array that represents the section data as key value pairs. The format of the array of data is explained in [data](Segment_Properties.md#data) property of segment basic properties. Sections and its rows can have standard template key to indicate a new template for this added row. However it is developer responsibility to ensure widgetdatamap covers the widgets represent in the new template.

sectionIndex

Specifies the Index of the section.

Index is '0' based in JavaScript and should be less than "N", where "N" is the number of existing sections within the segmentedUI widget. If not. setSectionAt will be silent and does not yield any results.

### Remarks

When you set new data, the existing data will be replaced with the new data. If the segment has no data, the new data is placed in the segment.

Animations get applied to the rows only in the visible region and ignored if the rows are in the invisible region.

You can apply specific animations to the displaced rows using the [onRowDisplay](#onRowDisplay) method.

The widget/row model will be updated based on the animation fill modes, so that the widget/row would always show the appropriate values. Note that your app must provide rowTemplateId as an empty object in the data object of a row to update the row model.

For example, the syntax to get the label text is `segment.selectedValue.label(text)`. Earlier this was written as `segment.selectedValue.label.text`.

### Example

```

//Example of a data object that needs to be set in the 2nd Section Index of the Segment.  
  
var dataObj1 = [{
    "lbl": "Row 0",
    "btn": "Btn Row - 0",
    "rowtemplateId": {}
}, {
        "lbl": "Template Row 1",
        "img1": "icon.png",
        template: flexTemp2,
        "flexTemp2Id": {}
    }, {
        "lbl": "Row 2",
        "btn": "Btn Row - 2",
        "rowtemplateId": {}
    }];  
//Sample code to use setSectionAt method without animation.  
  
formSegment.mysegment.setSectionAt(dataObj1, 15);  
  
//Sample code to use setSectionAt method with animation.  
  
formSegment.mysegment.setSectionAt(dataObj1, 15, animation);  

```

### Platform Availability

Available on all platforms

* * *

</details>
<details close markdown="block"><summary>setVisibility Method</summary>

* * *

Use this method to set the visibility of the widget.

**Default :** true

### Syntax
```

setVisibility(visible)
```

### Parameters

_visible_

\[Boolean\] - Mandatory

true -Indicates visibility is true.

false - Indicates visibility is false.

_animationConfig_

\[JSObject\] - Optional. The parameter specifies the animation configuration of the object. This is not supported in SPA and Desktop Web platforms.

Following are the parameters of the JSObject:

_animEffect_

Optional. The parameter specifies the animation effect. Following are the available options of animation effect:

*   constants.ANIMATION\_EFFECT\_EXPAND: This is applicable when the visibility is turned on. Specifies the widget must expand gradually by increasing the height of the widget.
*   constants.ANIMATION\_EFFECT\_COLLAPSE: This is applicable when the visibility is turned off. Specifies the widget must collapse gradually by decreasing the height of the widget.
*   constants.ANIMATION\_EFFECT\_REVEAL: This is applicable when the visibility is turned on. Specifies the widget must appear gradually by decreasing the transparency of the widget.
*   constants.ANIMATION\_EFFECT\_FADE: This is applicable when the visibility is turned off. Specifies the widget must disappear gradually by increasing the transparency of the widget.
*   constants.ANIMATION\_EFFECT\_NONE: This is the default option. Specifies animation should not be applied to the widget. However the layout animations are applied on the Form.

_animDuration_

Optional. The parameter specifies the duration of the animation effect in seconds. The default value is 1 second. The negative values are ignored and defaulted to 1 second.

_animDelay_

Optional. This parameter specifies the delay of the animation effect in seconds. The default value is 0 second. The negative values are ignored and defaulted to 0 second.

_animCurve_

Optional. The parameter specifies the animation curve to be applied while playing the animation. An animation curve defines the speed of the animations at different intervals of the animation duration. Following are the available options of animation curve:

*   constants.ANIMATION\_CURVE\_EASEIN: Specifies the animation effect to start slow in the beginning.
*   constants.ANIMATION\_CURVE\_EASEOUT: Specifies the animation effect to slowdown towards the end.
*   constants.ANIMATION\_CURVE\_EASEINOUT: Specifies the animation effect to start slow and slowdown towards the end.
*   constants.ANIMATION\_CURVE\_LINEAR: This is the default value. Specifies the animation effect to continue with the same speed from start to end.

![](Resources/Images/bezier_479x107.png)

animCallBacks - Optional

It is a JS dictionary containing the events invoked by the platform during the animation life cycle. Following are the available events:

*   **animStarted**: Invoked at the beginning of the animation without any parameters. Following is the Syntax of the event: function animStarted()
*   **animEnded**: Invoked at the end of the animation without any parameters. Following is the Syntax of the event: function animEnded()

### Return Values

None

### Exceptions

Error

### Remarks

This method is not applicable on Form, Popup, and Alert. It is also not applicable if the widget is placed in a [Segment](Segment.md). When the widget is placed in a Segment, the default _Visibility_ is set to _true_. If you want to change the value to _false_, you can do so by using [Segment](#segmentedui-methods) methods.

Passing an invalid type other than the above events lead to run time exceptions/ crashes.

This method is not supported on the widgets FlexForm, FlexContainer, and FlexScrollContainer.

### Example

```

//This is a generic method that is applicable for various widgets.
//Here, we have shown how to invoke the setVisibility Method for a button widget with animation.
//You need to make a corresponding call of the setVisibility method for other applicable widgets.

form1.myButton.setVisibility(
    false, {
        "animEffect": constants.ANIMATION_EFFECT_COLLAPSE,
        "animDuration": 1,
        "animDelay": 0,
        "animCurve": constants.ANIMATION_CURVE_LINEAR,
        "animCallBacks": {
            "animStarted": startCallBackFunc,
            "animEnded": endCallBackFunc
        }
    });
//Sample code to invoke setVisibility Method for button widget without animation.
form1.myButton.setVisibility(false);
```

### Platform Availability

Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>unregisterForPeekandPop Method</summary>

* * *

This method unregisters a widget from 3D Touch peek and pop gestures.

### Syntax
```

unregisterForPeekandPop()
```

### Parameters

None.

### Return Values

None.

### Example

```

Form1.unregisterForPeekAndPop();
```

### Platform Availability

*   iOS 9.0 and later

* * *

