                               


CollectionView Methods
======================

This section provides the methods associated with the CollectionView widget. You can use these methods across all platforms.

> **_Note:_** The methods described in this section can be used only after you specify the mapping information between the widget IDs and the keys in the data using the [widgetDataMap](CollectionView_Properties.md#widgetDa) property.

Additionally, you can also specify _Meta Info_ for items as explained in [data](CollectionView_Properties.md#data) property.

* * *


<details close markdown="block"><summary>addAll Method</summary>

* * *

This method allows you to add new items to the collection.

### Syntax
```

addAll(data)
```

### Parameters

data

Specifies an array that represents data as key value pairs. The format of the array is explained in [data](CollectionView_Properties.md#data) property of the collection.

### Remarks

The new data is appended to the existing data. If the collection has no data, the new data is placed in the collection.

Using this method, you cannot add the items to the existing sections.

### Example

```

//Sample code to invoke addAll method by using a CollectionView widget.  
frmCollection.myCollection.addAll([{
    dataId1: "data1",
    dataId2: "data2",
    dataId3: "data3"
}, {
    dataId1: "datax",
    dataId2: "datay",
    dataId3: "dataz",
    template: box1
}]);  

```

### Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>addDataAt Method</summary>

* * *

Allows you to add one item of data at a given index or with in a section.

### Syntax
```

addDataAt(data,itemIndex,sectionIndex)
```

### Parameters

data

Specifies the JSObject to represent data as key value pairs. The format of the array of data is explained in [data](CollectionView_Properties.md#data) property of collection basic properties.

item data can also have the standard template key to indicate a new template for this added item. However it is developer responsibility to ensure widgetdatamap covers the widgets present in the new template.

itemIndex

Specifies the Index of the item within the section if the _sectionIndex_ is mentioned. If the _sectionIndex_ is not mentioned, the _itemIndex_ is treated in absolute terms independent of sections.

> > **_Note:_** Sections should not be counted as items when calculating the _itemIndex_.

Index is '0' based in JavaScript and should be less than "n", where "n" is the number of existing items within the section if _sectionIndex_ is mentioned. If the _sectionIndex_ is not mentioned "n" is the total number of items in a collection.

If the _itemIndex_ mentioned is greater than "n", then item is added at the end of the collection or at the end of the section depending on the _sectionIndex_.

sectionIndex

Optional. Specifies the Index of the section. If the index is not mentioned, the _itemIndex_ will be treated in absolute terms.

### Remarks

The new data is placed before the index. The existing data is pushed to the next item.

Animations get applied to the items only in the visible region and ignored if the items are in the invisible region.

You can apply specific animations to the displaced items using the [onitemDisplay](#onitemDisplay) method.

The widget/item model will be updated based on the animation fill modes, so that the widget/item would always show the appropriate values. Note that your app must provide itemTemplateId as an empty object in the data object of a item to update the item model

### Example

```

//Sample code to invoke addDataAt method by using a CollectionView widget.  
/*In this example, the data will be added to the second index of the CollectionView widget.*/  
  
var data = [{
    "lbl": "item 0",
    "btn": "Btn item - 0",
    "itemtemplateId": {}
}, {
    "lbl": "Template item 1",
    "img1": "icon.png",
    template: flexTemp2,
    "flexTemp2Id": {}
}, {
    "lbl": "item 2",
    "btn": "Btn item - 2",
    "itemtemplateId": {}
}];  
frmCollection.myCollection.addDataAt(data, 2);  

```

### Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>addGestureRecognizer Method</summary>

* * *

This API allows you to set a gesture recognizer for a specified gesture for a specified widget.

### Syntax
```

addGestureRecognizer(gestureType, gestureConfigParams, onGestureClosure)
```

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

This method allows you to add one section with items to the collection.

### Syntax
```

addSectionAt(data,sectionIndex)
```

### Parameters

data

Specifies an array to represent data as key value pairs. The format of the array of data is explained in [data](CollectionView_Properties.md#data) property of collection basic properties.

sectionIndex

Optional. Specifies the Index of the section.

Index is '0' based in JavaScript and should be less than "n", where "n" is the number of existing sections within the collection. If the index is greater than or equal to "n", then section is added at the end of the collection.

### Remarks

> **_Note:_** Sections and its items can have the standard template key to indicate a new template for this added item. However it is developer responsibility to ensure widgetdatamap covers the widgets present in the new template.

For example, the syntax to get the label text is `collection.selectedValue.label(text)`. In previous versions this was written as `collection.selectedValue.label.text`.

### Example

```

//Sample code to invoke addSectionAt method by using a CollectionView widget.  
/*In this example, the data will be added to the second section index of the CollectionView widget.*/  
  
var data = [
    ["section1", [{
        dataId1: "aaa"
    }, {
        dataId1: "bbb"
    }],
    ["section2", [{
        dataId1: "ccc"
    }, {
        dataId1: "ddd"
    }]
];  
frmCollection.myCollection.addSectionAt(data, 2);  

```

### Platform Availability

Available on all platforms

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

Return Values

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
<details close markdown="block"><summary>getIndicesForVisibleItems Method</summary>

* * *

This method returns a JavaScript object containing the section index and row index of the current visible item in the CollectionView widget.

### Syntax
```

getIndicesForVisibleItems()
```

### Parameters

No

### Return Values

Returns a JS Array. Each individual object of this array has the following format.

```

arrayObj = {  
sectionIndex: 1,  
itemIndex: 2  
};  

```

### Example

```

var object = form.gv.getIndicesForVisibleItems();
voltmx.print(object[sectionIndex]);
voltmx.print(object[itemIndex]);
```

### Platform Availability

Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>getVisibleItems Method</summary>

* * *

This method returns the object containing the items visible in the CollectionView widget.

### Syntax
```

getVisibleItems()
```

### Parameters

No

### Return Values

Returns JS cell models of all widgets in the visible region.

### Remarks

You can use **getVisibleItems**method to get the list of all the items in the visible area. You can use this widgetHandle for animation. In order to animate, use widgetHandle.animate () API. For more information on the animate method, refer the [Widget Animation Using Flex Forms](Animation.md#widget-level-animation-using-flex-forms) section.

### Example

```

var arr = form.gv.getVisibleItems();

```

Platform Availability

Available on all platforms

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

### Callback Example

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

This method removes all the widget on the container.

### Syntax
```

removeAll()
```

### Parameters

None

### Return Values

None

### Example

```

//This is a generic method that is applicable for various widgets.
//Here, we have shown how to invoke the clone Method for a CollectionView widget.  
  
frmCollection.myCollection.removeAll();  

```

### Exceptions

WidgetError

### Platform Availability

*   iOS, Android, Windows, and SPA

* * *

</details>
<details close markdown="block"><summary>removeAt Method</summary>

* * *

This method removes a widget at the given index from the Form container. If a widget is removed from the form, will reflect immediately from the Form hierarchy model perspective; however the changes are displayed when the Form appears. When the widgets are removed from the current visible Form, then the changes will reflect immediately.

### Syntax
```

removeAt(index)
```

### Parameters

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

### Return Values

Reference of the name of the widget to be removed.

### Example

```

/*Sample code to invoke the removeAt method without animation. In this sample code, the removeAt method deletes the data from the 15th Index position for a Segment widget.*/  
  
frmSegment.mySegment.removeAt(15);  
  
/*Sample code to invoke the removeAt method with animation to deletes the data from the 15th Index position for a Segment widget.*/  
  
frmSegment.mySegment.removeAt (15, animation);  

```

### Exceptions

WidgetError

### Remarks

> **_Note:_** If the index is not within the limits then _removeAt_ will be silent and doesn't yield any result.

### Platform Availability

*   iOS, Android, Windows, and SPA

* * *

</details>
<details close markdown="block"><summary>removeFromParent Method</summary>

* * *

This method allows you to remove a child widget from a parent widget.

### Syntax

removeFromParent()

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

This method allows you to remove a section at the given index within a collection.

### Syntax
```

removeSectionAt(sectionIndex,count)
```

### Parameters

sectionIndex

Specifies the Index of the section.

Index is '0' based in JavaScript and should be less than "n", where "n" is the number of existing sections within the collection. The operation is ignored if the _sectionIndex_ is not mentioned.

count

Specifies the number of items to remove, including the item at index.

### Example

```

//Sample code to invoke the removeSectionAt method by using a CollectionView widget.  
  
frmCollection.myCollection.removeSectionAt(2);

```

### Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>scrollToItemAtIndex Method</summary>

* * *

Scrolls the collection view so that the item at given index comes into the view port.

### Syntax
```

scrollToItemAtIndex (index)
```

### Parameters

index

a Javascript object that defines the section and the index of the item to display.

### Return Values

None

### Remarks

The Index parameter can contain the following key:value pairs:

*   itemIndex \[Number\]
*   sectionIndex \[Number\]. Optional

If sectionIndex is not passed and the collection has sections, this method will not execute.

### Behavior:

*   For vertical scrolling the item is brought to the top of the collection view.
*   For horizontal scrolling the item is brought to the left of the viewport.

Under some circumstances there may not be enough items in the collection to move the item to the top or to the left of the view, but it will always be displayed within the viewport.

This method should only be called when collection view is shown.

### Example

```

var itemIndex = {"itemIndex":5, "sectionIndex":6};
collView.scrollToItemAtIndex(itemIndex);
```

### Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

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
<details close markdown="block"><summary>setData Method</summary>

* * *

This method allows you to set new data to the collection.

### Syntax
```

setData(data)
```

### Parameters

data

Specifies an array to represent data as key value pairs. The format of the array of data is explained in [data](CollectionView_Properties.md#data) property of collection basic properties.

### Remarks

When you set new data, the existing data will be replaced with the new data. If the collection has no data, the new data is placed in the collection.

Updating a widget's data using the setData method as part of its own callbacks in a item's context results undefined behaviour.

### Example

```

//Sample code to invoke the setData method by using a CollectionView widget.  
  
frmCollection.myCollection.setData(
    [{
        dataId1: "data1",
        dataId2: "data2",
        dataId3: "data3"
    }, {
        dataId1: "datax",
        dataId2: "datay",
        dataId3: "dataz",
        template: box1
    }]
);

```

### Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>setDataAt Method</summary>

* * *

Allows you to set data or modify existing data of a item or within a section.

### Syntax
```

setDataAt(data,itemIndex,sectionIndex)
```

### Parameters

data

Specifies the JSObject to represent data as key value pairs. The format of the array of data is explained in [data](CollectionView_Properties.md#data) property of collection basic properties. itemdata can have the standard template key to indicate a new template for this item. However it is developer responsibility to ensure widgetDataMap covers the widgets present in the new template.

itemIndex

Specifies the Index of the item within the section if the _sectionIndex_ is mentioned. If the _sectionIndex_ is not mentioed, the _itemIndex_ is treated in absolute terms independent of sections.

> > **_Note:_** Sections should not be counted as items when calculating the _itemIndex_.

Index is '0' based in JavaScript and should be less than "n", where "n" is the number of existing items within the section if _sectionIndex_ is mentioned. If the _sectionIndex_ is not mentioned "n" is the total number of items in a collection.

If the itemIndex mentioned is not within the limits then no action takes place.

sectionIndex

Optional. Specifies the Index of the section. If the index is not mentioned, the _itemIndex_ will be treated in absolute terms.

### Remarks

The existing data of the item will be replaced with the new set. In case the index is not valid and not falling in range 0 <= index <= N, where N is the total number of records then the operation is ignored.

### Example

```

//Sample code to invoke the setDataAt method by using a CollectionView widget.  
  
var data = [{
 "lbl": "item 0",
 "btn": "Btn item - 0",
 "itemtemplateId": {}
}, {
 "lbl": "Template item 1",
 "img1": "icon.png",
 "template": flexTemp2,
 "flexTemp2Id": {}
}, {
 "lbl": "item 2",
 "btn": "Btn item - 2",
 "itemtemplateId": {}
}];
frmCollection.myCollection.setDataAt(data, 15);
```

### Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>setEnabled Method</summary>

* * *

This method specifies the widget that must be enabled or disabled.

### Syntax
```

setEnabled(enabled)
```

### Parameters

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

### Platform Availability

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

Return Values

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

This method allows you to set or modify a section with items to the collection.

### Syntax
```

setSectionAt(data,sectionIndex)
```

### Parameters

data

Specifies an array that represents the section data as key value pairs. The format of the array of data is explained in [data](CollectionView_Properties.md#data) property of collection basic properties. Sections and its items can have standard template key to indicate a new template for this added item. However it is developer responsibility to ensure widgetdatamap covers the widgets represent in the new template.

sectionIndex

Specifies the Index of the section.

Index is '0' based in JavaScript and should be less than "N", where "N" is the number of existing sections within the CollectionView widget. If not. setSectionAt will be silent and does not yield any results.

### Remarks

When you set new data, the existing data will be replaced with the new data. If the collection has no data, the new data is placed in the collection.

### Example

```

//Sample code to invoke the setSectionAt method by using a CollectionView widget.  
  
var data = [{
 "lbl": "item 0",
 "btn": "Btn item - 0",
 "itemtemplateId": {}
}, {
 "lbl": "Template item 1",
 "img1": "icon.png",
 "template": flexTemp2,
 "flexTemp2Id": {}
}, {
 "lbl": "item 2",
 "btn": "Btn item - 2",
 "itemtemplateId": {}
}];
frmCollection.myCollection.setSectionAt(data, 2);
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

This method is not applicable on Form, Popup, and Alert. It is also not applicable if the widget is placed in a [Segment](Segment.md). When the widget is placed in a Segment, the default _Visibility_ is set to _true_. If you want to change the value to _false_, you can do so by using [Segment](Segment_Methods.md#segmentedui-methods) methods.

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

