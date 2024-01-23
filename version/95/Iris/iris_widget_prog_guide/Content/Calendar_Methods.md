                                
Calendar Methods
================

Calendar has the following methods associated with it: 

<details close markdown="block"><summary>animate Method</summary>

* * *

Applies an animation to the widget.

### Syntax

```

animate (animationObj, animateConfig, animationCallbacks)
```

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

### Gesture Type:TAP

*   fingers \[Number\] - specifies the maximum number of fingers that must be respected for a gesture. Possible values are: 1. Default value is 1.
*   taps \[Number\] - specifies the maximum number of taps that must be respected for a gesture. Possible values are: 1 or 2. Default value is 1.

### For example:  

{fingers:1,taps:1}

### Gesture Type:SWIPE

*   fingers \[Number\] - specifies the maximum number of fingers that must be respected for a gesture. Possible values are: 1. Default value is 1.

### For example:

{fingers: 1}

### Gesture Type:LONGPRESS

*   pressDuration \[Number\] - specifies the minimum time interval (in seconds) after which the gesture is recognized as a LONGPRESS. For example, if pressDuration is 2 seconds, any continued press is recognized as LONGPRESS only if it lasts for at least 2 seconds. Default value is 1. This is not applicable to Windows.

### For example:

{pressDuration=1}.

### Gesture Type: PAN

*   fingers \[number\] specifies the minimum number of fingers needed to recognize this gesture. Default value is 1.
*   continuousEvents \[Boolean\] indicates if callback should be called continuously for every change beginning from the time the gesture is recognized to the time it ends.

### Gesture Type: ROTATION

*   Rotation gesture involves only two fingers.
*   continuousEvents \[Boolean\] indicates if callback must be called continuously for every change beginning from the time the gesture is recognized to the time it ends.

### Gesture Type:PINCH

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
<details close markdown="block"><summary>open Method</summary>

* * *

This method allows you to open the Calendar widget's popup view dynamically.

### Syntax

```

open()
```

### Example

```

//Sample code to invoke open Method for a Calendar widget.

frmCalendar.myCalendar.open();
```

### Platform Availability

*   Available on all platforms

* * *

</details>
<details close markdown="block"><summary>dismiss Method</summary>

* * *

This method allows you to dismiss the calendar widget's popup view on which the method is called.

### Syntax

```

dismiss()
```

### Example

```

//Sample code to invoke dismiss Method for a Calendar widget.

frmCalendar.myCalendar.dismiss();
```

### Platform Availability

*   Available on all platforms

* * *

</details>
<details close markdown="block"><summary id="clear">clear Method</summary>

* * *

This method enables you to clear the date in the calendar and the date format is shown.

<blockquote><em><b>Note: </b></em>
    <ul>
    <li>clear() method does not work if it is executed in the preShow event in Iris as other widgets like the Textbox widget.</li>    
    <li>Calendar clear happens at the widget level whereas Textbox clear happens at the model level.</li>
    </ul>
</blockquote>



### Syntax

```

clear()
```

### Remarks

When you use a placeholder, the placeholder text is shown instead of date format.

### Example

```

//Sample code to invoke clear Method for a Calendar widget.

frmCalendar.myCalendar.clear();
```

### Platform Availability

*   Available on all platforms

* * *

</details>
<details close markdown="block"><summary>clearAppointments Method</summary>

* * *

This method is used to clear existing appointments from the calendar view types.

### Syntax

```

clearAppointments()
```

### Optional Parameters

date

Optional. Specifies the start date in a tabular format which follows {dd,mm,yyyy} convention.

startDate

Optional.Specifies the start date in a tabular format which follows {dd,mm,yyyy} convention.

endDate

Optional. Specifies the end date in a tabular format which follows {dd,mm,yyyy} convention.

### Return Values

Boolean

### Remarks

You can clear the appointments from a particular date or appointments between two dates.

This is applicable to the following view types:

*   CALENDAR\_VIEW\_TYPE\_DAY\_VIEW
*   CALENDAR\_VIEW\_TYPE\_WEEK\_VIEW
*   CALENDAR\_VIEW\_TYPE\_MONTH\_VIEW

The date format of the appointment dates should be in the same format as provided in the dateComponents.

On Windows platform, when the viewType is set as CALENDAR\_VIEW\_TYPE\_DAY\_VIEW or CALENDAR\_VIEW\_TYPE\_WEEK\_VIEW or CALENDAR\_VIEW\_TYPE\_MONTH\_VIEW, only the below date formats are accepted: "Mon, 13 Oct 2014", "10/13/2014", or "2014-10-12"

### Example

```

/*Sample code to invoke clearAppointments Method to remove appointments for 12-10-2014.*/

frmCalendar.myCalendar.clearAppointments("12-10-2014");
```

### Platform Availability

*   Available on Windows10

* * *

</details>
<details close markdown="block"><summary>clearData Method</summary>

* * *

This method allows you to remove the data that is set through [setData](#setData) method.

### Syntax

```

clearData()
```

### Example

```

//Sample code to invoke clearData Method for a Calendar widget.

frmCalendar.myCalendar.clearData();
```

### Platform Availability

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>clone Method</summary>

* * *

When this method is used on a container widget, then all the widgets inside the container are cloned. This method takes an optional parameter. If the widgetid is not passed then the cloned copy will have the same ID as original widget.

If the widget ID is passed as a parameter then it will be prefixed to the existing ID and will assign it to cloned copy of the container. For all other widgets of the container and its child widgets.

For example, if the widget ID is "fc1" and the widget ID passed to clone API is "ref1", then the cloned widget ID will be "ref1fc1". For a child widget placed in a container with widget ID as "wid1", the cloned copy will have the widget ID as "ref1wid1".

Exceptions are not displayed if widget ID parameter is not unique. Instead when the cloned copy is added to the same form as of original container then it may lead to unexpected behaviors. So it is your responsibility to provide unique widget ID.

### Syntax

```

clone()
```

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
<details close markdown="block"><summary>deleteAppointments Method</summary>

* * *

This method allows you to delete existing appointments or array of string consisting of unique ids that represent each appointment to any of the calendar scheduler views.

### Syntax

```

deleteAppointments()
```

> > **_Note:_** Array of string consists of unique IDs that represent each appointment when user taps on the device.

### Optional Parameters

appointments\[Array\]

Optional. This parameter accepts an array of appointments or string as input.

### Return Values

Boolean, returns false if the appointment specified in the array is not deleted.

### Remarks

This event is applicable to the following view types:

*   CALENDAR\_VIEW\_TYPE\_DAY\_VIEW
*   CALENDAR\_VIEW\_TYPE\_WEEK\_VIEW
*   CALENDAR\_VIEW\_TYPE\_MONTH\_VIEW

The maximum duration of an appointment can be displayed is only for two days. If the appointment lasts for more than two days, a separate appointment should be created and added.

### Example

```

//Sample code to invoke deleteAppointments Method for a Calendar widget.

/*The ids "cdb345" and "def125" are the unique ids of appointment obtained 
when user taps on the appointment.*/
  
var deleteAppt = ["cdb345", "def125"];
frmCalendar.myCalendar.deleteAppointments(deleteAppt);
```

### Platform Availability

*   Available on Windows

* * *

</details>
<details close markdown="block"><summary>enableRangeOfDates Method</summary>

* * *

This method allows you to enable/disable the range of dates that fall between the [startdate](Calendar_Properties.md#validSta) and [enddate](Calendar_Properties.md#validEnd) and disables/enables the rest of the dates.

### Syntax

```

enableRangeOfDates(startDate,enddate,skin,enable);
```

### Parameters

startDate

Specifies the start date in an array format which follows \[dd,mm,yyyy\] format.

endDate

Specifies the end date in an array format which follows \[dd,mm,yyyy\] format.

skin

Specifies the skin to be used to represent the enabled or disabled dates.

enable

Specifies the Boolean value that indicates if the dates listed must be enabled or disabled.

### Example

```

/*Sample code to invoke enableRangeOfDates from 20-05-2012 to 24-05-2012 in a Calendar widget.*/

frmCalendar.myCalenda.enableRangeOfDates([20, 05, 2012], [24, 05, 2012], "cellskn1", true);
```

### Platform Availability

*   Available on all platforms

* * *

</details>
<details close markdown="block"><summary>getAppointments Method</summary>

* * *

This method is used to get the appointments from the calendar view types.

### Syntax

```

getAppointments()
```

### Optional Parameters

date

Optional. Specifies the start date in a tabular format which follows {dd,mm,yyyy} convention.

startDate

Optional. Specifies the start date in a tabular format which follows {dd,mm,yyyy} convention.

endDate

Optional. Specifies the end date in a tabular format which follows {dd,mm,yyyy} convention.

### Return Values

Returns an array of appointments as JSON string

### Remarks

You can get the appointments for a particular date or appointments between two dates. This is applicable to the following view types:

*   CALENDAR\_VIEW\_TYPE\_DAY\_VIEW
*   CALENDAR\_VIEW\_TYPE\_WEEK\_VIEW
*   CALENDAR\_VIEW\_TYPE\_MONTH\_VIEW

The maximum duration of an appointment can be displayed is only for two days. If the appointment lasts for more than two days, a separate appointment should be created and added.

The date format of the appointment dates should be in the same format as provided in the dateComponents.

### Example

```

//Sample code to invoke getAppointments Method for 12-10-2014 in a Calendar widget.  
var CalendarApppoint=frmCalendar.myCalendar.getAppointments("12-10-2014");  

```

### Platform Availability

*   Available on Windows

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
<details close markdown="block"><summary>modifyAppointment Method</summary>

* * *

This method allows you to modify the existing appointment with new appointment.

### Syntax

```

modifyAppointment()
```

### Optional Parameters

oldAppointment

Optional. This parameter accepts an array of appointments or string as input.

newAppointment

Optional. This parameter accepts an array of appointments or string as input.

### Return Values

Boolean

### Remarks

This is applicable for following calendar view types:

*   CALENDAR\_VIEW\_TYPE\_DAY\_VIEW
*   CALENDAR\_VIEW\_TYPE\_WEEK\_VIEW
*   CALENDAR\_VIEW\_TYPE\_MONTH\_VIEW

The maximum duration of an appointment can be displayed is only for two days. If the appointment lasts for more than two days, a separate appointment should be created and added.

### Example

```

//Sample code to invoke modifyAppointment Method for Calendar widget.  
//In this example, the modifyAppointment Method replaces oldAppt with thenewAppt in the Calendar.  
  
frmCalendar.myCalendar.modifyAppointment (oldAppt, newAppt);  

```

### Platform Availability

*   Available on Windows

* * *

</details>
<details close markdown="block"><summary>navigateToNextMonth Method</summary>

* * *

This method allows you to navigate to next month of the calendar widget.

### Syntax

```

navigateToNextMonth()
```

### Example

```

//Sample code to invoke navigateToNextMonth Method for a Calendar widget.

frmCalendar.myCalendar.navigateToNextMonth();
```

### Platform Availability

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>navigateToPreviousMonth Method</summary>

* * *

This method allows you to navigate to previous month of the calendar widget.

### Syntax

```

navigateToPreviousMonth()
```

### Example

```

//Sample code to invoke navigateToPreviousMonth Method for a Calendar widget.

frmCalendar.myCalendar.navigateToPreviousMonth();
```

### Platform Availability

*   iOS
*   Android

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

### Callback Syntax

onPeekCallback(widget)

### Callback Input Parameters

_widget_

A widget reference that is registered for peek and pop.

### Callback Return Values

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

### Callback Syntax

onPopCallback(widget,peekForm)

### Callback Input Parameters

_widget_

A widget reference that is registered for peek and pop.

_peekForm_

A form reference that is displayed as preview/peek.

### Callback Return Values

  A form reference.

### Callback Remarks

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
<details close markdown="block"><summary>removeDataAt Method</summary>

* * *

This method allows you to remove data set in a specific argument.

### Syntax

```

removeDataAt(date)
```

### Parameters

date

Specifies the date in a tabular format which follows {dd/mm/yyyy} convention.

### Example

```

//Sample code to invoke removeDataAt Method for a Calendar widget.

frmCalendar.myCalendar.removeDataAt("31/12/2012");
```

### Platform Availability

*   iOS and Android

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

### For more information about the badge APIs refer the _API Reference Document_.

* * *

</details>
<details close markdown="block"><summary>setContext Method</summary>

* * *

Specifies the calendar that must be displayed for the context and also helps you to position the calendar on the screen.

### Syntax

```

setContext(context)
```

### Parameters

context

Set of key value pairs providing information about the widget and the anchoring used to position the calendar on the screen.

Following are the key value pairs of this JSObject:

> anchor

> It is a set of flags that are used to anchor the calendar with respect to the dimensions of the widget. Possible values are (_"top", "bottom", "right", "left"_).

> widget

> Reference to an existing widget with respect to which the calendar has to be anchored (Pass the Formid if the calendar is to be positioned with respect to a Form. This Form is assumed to be the form on which the calendar will be overlaid).
> 
> > **_Note:_** From V8 SP3 onwards, the Calendar-clone Model feature is available for touch events. You can invoke the setContext API for the touch events handler of Calendar widget, when the Calendar widget is placed within a Segment.
> 
> > **_Note:_** From V8 SP4 onwards, you can specify String values to the **widget** parameter only when the Calendar widget is placed within a Segment.  
> For example: _context2 = {'widget': 'any id within row template', 'anchor': 'right'};_

### Remarks

*   The calendar can be positioned relative to a widget on the screen and _setcontext_ enables you to do that.
*   The context contains information regarding the _widget_ for which the calendar must be shown and also the _anchoring_ of the calendar on the widget (left, right, center, top, or bottom).

### Example

```

//Sample code to invoke setContext Method for a Calendar widget.  
/*Sample code to define the context Object that makes the Calendar appear below the Calendar widget.*/
var context1 = {
    "widget": frmCalendar.myCalendar,
    "anchor": "bottom"
};

//setContext method call  
frmCalendar.myCalendar.setContext(context1);  

```

### Platform Availability

*   Desktop Web

* * *

</details>
<details close markdown="block"><summary>setData Method</summary>

* * *

This method allows you to set new data to the widgets as specified in the widgetDataMap.

### Syntax

```

setData(dictionary)
```

### Parameters

dictionary

Specifies the dates in a table format which follows {dd/mm/yyyy} convention.

Dictionary is of format: {"dd/mm/yyyy":{widget data confirming to widgetDataMapForCell } }

### Example

```

var data1 = {
	"12/11/2012":{
		template:newBox,
		lblAppointments: "4",
		lblTasks: "2"
	},
	"02/01/2012":{
		"lblAppointments": "4",
		"lblTasks": "21"
	}
};
frmHome.mycal.setData(data1);
```

### Example

### Platform Availability

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>setDataAt Method</summary>

* * *

This method allows you to set new data to the segment.

### Syntax

```

setDataAt(date,data)
```

### Parameters

date

Specifies the dates in a table format which follows {dd/mm/yyyy} convention.

data

Data should confirm to widgetDataMapForCell.

### Remarks

When you set new data, the existing data will be replaced with the new data. If the calendar has no data, the new data is placed in the calendar.

### Example

```

//Sample code to invoke setDataAt Method for a Calendar widget.  
  
frmCalendar.myCalendar.setDataAt("31/12/2012", {
    template: newBox,
    lblAppointments: "4",
    lblTasks: "2"
});  

```

### Platform Availability

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>setDatesSkin Method</summary>

* * *

This method allows you to set the skin and control the look and feel of each cell in the calendar.

### Syntax

```

setDatesSkin(dates,skin)
```

### Parameters

dates

Specifies the dates in a table format which follows {dd,mm,yyyy} convention.

skin

Specifies the skin to be used to represent the enabled or disabled dates.

### Remarks

This API works on all the dates of the calendar. The dates need not be between [startdate](Calendar_Properties.md#validSta) and [enddate](Calendar_Properties.md#validEnd).

### Example

```

//Sample code to invoke setDatesSkin Method for a Calendar widget.  
//This code assigns textar skin to the dates 27-04-2012, 30-04-2012 and 01-04-2012.  
  
frmCalendar.myCalendar.setDatesSkin([
    [27, 04, 2012],
    [30, 04, 2012],
    [01, 04, 2012]
], "textar");  

```

### Platform Availability

*   Available on all platforms

* * *

</details>
<details close markdown="block"><summary>setEnabled Method</summary>

* * *

This method allows you to enable/disable a list of dates if the [startdate](Calendar_Properties.md#validSta) and [enddate](Calendar_Properties.md#validEnd) are not set in the calendar, then this API is used to enable/disable any date in the calendar.

### Syntax

```

setEnabled(enabled)
```

### Parameters

dates - Optional

Specifies the dates in a table format which follows {dd,mm,yyyy} convention.

skin - Optional

Specifies the skin to be used to represent the enabled or disabled dates.

enabled

Specifies the Boolean value that indicates if the dates listed must be enabled or disabled.

### Remarks

This method clears the dates that have been enabled/disabled earlier and considers the dates used in the method as the latest dates. When the enable flag is true, the dates passed in this method are enabled and remaining dates between [startdate](Calendar_Properties.md#validSta) and [enddate](Calendar_Properties.md#validEnd) are disabled. When the enable flag is false, the dates passed in this method are disabled and remaining dates between [startdate](Calendar_Properties.md#validSta) and [enddate](Calendar_Properties.md#validEnd) are enabled.

### Example

```

//Sample code to invoke setEnabled method for a Calendar widget.

frmCalendar.myCalendar.setEnabled([[07, 06, 2018], [27, 06, 2018], [1, 06, 2018], [15, 06, 2018], [18, 06, 2018], "textar", true);
```

### Platform Availability

*   Windows and SPA

* * *

</details>
<details close markdown="block"><summary>setEnableAll Method</summary>

* * *

This method allows you to enable all the dates that fall between the [startdate](Calendar_Properties.md#validSta) and [enddate](Calendar_Properties.md#validEnd). The look and feel of the dates is configured by the cell skin.

### Syntax

```

setEnableAll()
```

### Example

```

//Sample code to invoke setEnableAll method for a Calendar widget.

frmCalendar.myCalendar.setEnableAll();
```

### Platform Availability

*   Available on all platforms

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
<details close markdown="block"><summary>setGestureRecognizer Method</summary>

* * *

This method allows you to set a gesture recognizer for a specified gesture for a specified widget. You can set a Gesture recognizer only for a FlexForm, a FlexContainer, and a FlexScrollContainer. The setGestureRecognizer method is deprecated and should not be used in new software. However, Swipe Distance and Swipe Velocity parameters are not deprecated. So if you want to use the Swipe Distance and Swipe velocity parameters, use the setGestureRecognizer method. To use all other parameters, you must use the addGestureRecognizer method.

### Syntax

```

setGestureRecognizer (gestureType,setupParams,gestureHandler)
```

### Parameters

_gestureType_

\[Number\] - Mandatory

### Specifies the type of gesture that needs to be detected on the widget. The following are possible values:

*   1 for TAP
*   2 for SWIPE
*   3 for LONGPRESS

_setupParams_

\[array of arrays\] - Mandatory

The parameter specifies an object that has the configuration parameters to setup a gesture recognizer. See Remarks for the values for this parameter.

gestureHandler

\[function\] - Mandatory

The parameter specifies the function that needs to be executed when a gesture is recognized. See Remarks for the functions syntax.

onGesturefunction(widgetRef,gestureInfo)

*   _widgetRef_ - This parameter specifies the handle to the widget on which the gesture was recognized.
*   _gestureInfo_ - This parameter specifies an array that provides information about the gesture. The contents of this array vary based on the gesture type.

### Volt MX Iris populates the details in the _gestureInfo_ array. This array has the following key-value pairs:

*   _gestureType_ \[number\] - indicates the gesture type; **1** for TAP, **2** for SWIPE, and **3** for LONGPRESS.
*   _gesturesetUpParams_ \[object\] - this array is the set up parameters passed while adding the gesture recognizer.
*   _gesturePosition_ \[number\] - indicates the position where the gesture was recognized. Possible values are: **1** for TOPLEFT, **2** for TOPCENTER, **3** for TOPRIGHT, **4** for MIDDLELEFT, **5** for MIDDLECENTER, **6** for MIDDLERIGHT, **7** for BOTTOMLEFT, **8** for BOTTOMCENTER, **9** for BOTTOMRIGHT, **10** for CENTER. This parameter is applicable only on iPhone.

*   _swipeDirection_ \[number\] -indicates the direction of swipe. This parameter is applicable only if the gesture type is SWIPE. Possible values are: **1** for LEFT, **2** for RIGHT, **3** for TOP, **4** for BOTTOM.
*   _gestureX_ \[number\] - specifies the X coordinate of the point (in pixels) where the gesture has occurred. The coordinate is relative to the widget coordinate system. This parameter is applicable only on iPhone.
*   _gestureY_ \[number\] - specifies the Y coordinate of the point (in pixels) where the gesture has occurred. The coordinate is relative to the widget coordinate system. This parameter is applicable only on iPhone.
*   _widgetWidth_ \[number\] - specifies the width of the widget (in pixels). This parameter is applicable only on iPhone.
*   _widgetHeight_ \[number\] - specifies the height of the widget (in pixels). This parameter is applicable only on iPhone.

### Return Values

String - Reference(uniqueidentifier) to the gesture is returned.

### Exceptions

Error

### Remarks

This method is applicable on Form, Box, and ScrollBox widgets only.

Configuration of setupParams

The configuration parameters vary based on the type of the gesture.

### Gesture Type:TAP

*   fingers \[number\] - This parameter specifies the maximum number of fingers that must be respected for a gesture. Possible values are: 1. Default value is 1.
*   taps \[number\] - This parameter specifies the maximum number of taps that must be respected for a gesture. Possible values are: 1 or 2. Default value is 1.

### For example:

{fingers:1,taps:1}

### Gesture Type:SWIPE

*   fingers \[number\] - This parameter specifies the maximum number of fingers that must be respected for a gesture. Possible values are: 1. Default value is 1.
*   swipedistance \[number\] - This parameter specifies the distance between the pixel from where the swipe started to the pixel where the swipe stopped (finger is moved up or removed). The default value is 50 pixels. This parameter is applicable only on android. This parameter is applicable only if the gesture type is SWIPE.
*   swipevelocity \[number\] - This parameter specifies the velocity of the swipe measured in pixels per second. The default value is 75. This parameter is applicable only on android. This parameter is applicable only if the gesture type is SWIPE.

### For example:

{fingers:1,swipedistance:50,swipevelocity:75}

### Gesture Type:LONGPRESS

*   pressDuration \[number\] - This parameter specifies the minimum time interval (in seconds) after which the gesture is recognized as a LONGPRESS. For example, if the _pressDuration_ is 2 seconds, any continued press is recognized as LONGPRESS only if it lasts for at least 2 seconds. Default value is 1. This parameter is not customizable on android platform. The default value on android platform is 500 ms. Any value you pass to this parameter is ignored and the default value is used.

### For example:

{pressDuration:1}

Function syntax for the _GestureHandler_ parameter

The parameter specifies the function that needs to be executed when a gesture is recognized. This function has the following Syntax:

onGesturefunction(widgetRef,gestureInfo)

*   _widgetRef_ - This parameter specifies the handle to the widget on which the gesture was recognized.
*   _gestureInfo_ - This parameter specifies an array that provides information about the gesture. The contents of this array vary based on the gesture type.

Volt MX Iris populates the details in the _gestureInfo_ array. This array has the following key-value pairs:

*   _gestureType_ \[number\] - indicates the gesture type; **1** for TAP, **2** for SWIPE, and **3** for LONGPRESS.
*   _gesturesetUpParams_ \[object\] - this array is the set up parameters passed while adding the gesture recognizer.
*   _gesturePosition_ \[number\] - indicates the position where the gesture was recognized. Possible values are: **1** for TOPLEFT, **2** for TOPCENTER, **3** for TOPRIGHT, **4** for MIDDLELEFT, **5** for MIDDLECENTER, **6** for MIDDLERIGHT, **7** for BOTTOMLEFT, **8** for BOTTOMCENTER, **9** for BOTTOMRIGHT, **10** for CENTER. This parameter is applicable only on iPhone.

*   _swipeDirection_ \[number\] -indicates the direction of swipe. This parameter is applicable only if the gesture type is SWIPE. Possible values are: **1** for LEFT, **2** for RIGHT, **3** for TOP, **4** for BOTTOM.
*   _gestureX_ \[number\] - specifies the X coordinate of the point (in pixels) where the gesture has occurred. The coordinate is relative to the widget coordinate system. This parameter is applicable only on iPhone.
*   _gestureY_ \[number\] - specifies the Y coordinate of the point (in pixels) where the gesture has occurred. The coordinate is relative to the widget coordinate system. This parameter is applicable only on iPhone.
*   _widgetWidth_ \[number\] - specifies the width of the widget (in pixels). This parameter is applicable only on iPhone.
*   _widgetHeight_ \[number\] - specifies the height of the widget (in pixels). This parameter is applicable only on iPhone.

### Example

```

//The below function will get invoked  when a gesture is recognized. 
function myTap(myWidget, gestureInfo) {
    alert(" Tap Gesture detected");
    alert("gestureType :" + gestureInfo.gestureType);
    alert("gesturePosition :" + gestureInfo.gesturePosition);
    //write any further logic here
}

//Setting Gesture configuration.
var setupTblTap = {
    fingers: 1,
    taps: 2
}; //double tap gesture

//To add a TAP gesture recognizer on a hbox with ID hbx1 placed on a form frm1
var tapGesture = frm1.hbx1.setGgestureRecognizer(1, setupTblTap, myTap);
```

### Platform Availability

*   iOS, Windows, and SPA

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

### Callback Syntax

onPeekCallback(widget)

### Callback Parameters

_widget_

A widget reference that is registered for peek and pop.

### Callback Return Values

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

### Callback Syntax

onPopCallback(widget,peekForm)

### Callback Parameters

_widget_

 A widget reference that is registered for peek and pop.

_peekForm_

 A form reference that is displayed as preview/peek.

### Callback Return Values

 A form reference.

### Callback Remarks

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
<details close markdown="block"><summary>switchToDate Method</summary>

* * *

This method is used to switch date from the calendar view types.

### Syntax

```

switchToDate()
```

### Parameters

date

Specifies the start date in a tabular format which follows {dd,mm,yyyy} convention.

### Return Values

Boolean

### Remarks

This is applicable for following calendar view types:

*   CALENDAR\_VIEW\_TYPE\_DAY\_VIEW
*   CALENDAR\_VIEW\_TYPE\_WEEK\_VIEW
*   CALENDAR\_VIEW\_TYPE\_MONTH\_VIEW

The date format of the appointment dates should be in the same format as provided in the dateComponents.

### Example

```

//Sample code to invoke switchToDate method for a Calendar widget.

frmCalendar.myCalendar.switchToDate("12-10-2014");
```

### Platform Availability

*   Available on Windows

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
</details>

