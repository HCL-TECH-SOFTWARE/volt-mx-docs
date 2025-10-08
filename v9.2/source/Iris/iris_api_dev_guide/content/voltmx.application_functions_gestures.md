                            


Functions
=========

The Gesture API contains the following functions, which are part of the [voltmx.application Namespace](voltmx.application_functions.md).


<details close markdown="block"><summary>voltmx.application.addGestureRecognizerForAllForms</summary>

* * *

Using the addGestureRecognizerForAllForms function, you can set a gesture recognizer for all the forms.

### Syntax

```

voltmx.application.addGestureRecognizerForAllForms ([gestureType](#gestureType1), [gestureConfigParams](#gestureConfigParams1),[onGestureClosure](#onGestureClosure1))
```

### Input Parameters

#### gestureType \[Number\] - Mandatory

Indicates the type of gesture that must be detected on the widget. Following are the possible gestureType values:

*   1 – constants.GESTURE\_TYPE\_TAP
*   2 - constants.GESTURE\_TYPE\_SWIPE
*   3 – constants.GESTURE\_TYPE\_LONGPRESS
*   4 – constants.GESTURE\_TYPE\_PAN
*   5 – constants.GESTURE\_TYPE\_ROTATION
*   6 - constants.GESTURE\_TYPE\_PINCH
*   7 - constants.GESTURE\_TYPE\_RIGHTTAP

> **_Note:_**  
*   RIGHTTAP is applicable only to Windows 10 platform.
*   ROTATION is not supported on Android.

### gestureConfigParams \[object\] - Mandatory

Specifies a table that has the configuration parameters that are required to setup a gesture recognizer. The configuration parameters vary based on the type of the gesture.

| Gesture Type | Configuration Parameter |
| --- | --- |
| TAP | fingers \[Number\] - specifies the maximum number of fingers that are allowed for a gesture. The possible values are 1, 2. Default value is 1.taps \[Number\] - specifies the maximum number of taps that are allowed for a gesture. The possible values are 1, 2. Default value is 1. |
| SWIPE | fingers \[ Number\] - specifies the maximum number of fingers that are allowed for a gesture. The possible values are 1, 2. Default value is 1. |
| LONGPRESS | pressDuration \[Number\] - specifies the minimum time interval (in seconds) after which the gesture is recognized. The default value is 1. This is not applicable to Windows. For example, {pressDuration:1} |
| PAN | fingers \[number\] - specifies the minimum number of fingers that are required to recognize this gesture. Default value is 1. continuousEvents \[Boolean\] - indicates if callback should be called continuously for every change beginning from the time the gesture is recognized to the time it ends. |
| ROTATION | fingers \[Number\] - The number of fingers that are required to recognize the gesture. The Default value is 2. continuousEvents \[Boolean\] - indicates if callback must be called continuously for every change beginning from the time the gesture is recognized to the time it ends. |
| PINCH | fingers \[Number\] - The number of fingers that are required to recognize the gesture. The Default value is 2. continuousEvents \[Boolean\] indicates if callback should be called continuously every change beginning from the time the gesture is recognized to the time it ends. |

### onGestureClosure \[function\] - Mandatory

Specifies the function that needs to be executed when a gesture is recognized. This function will be raised asynchronously and has the following signature:

```

onGestureClosure(widgetRef, gestureInfo, context)
```

| Parameter | Description |
| --- | --- |
| widgetRef | specifies the handle to the widget on which the gesture was recognized. |
| gestureInfo | Table with information about the gesture. The contents of this table vary based on the gesture type. |
| context | Table with SegmentedUI row details. |

 

### gestureInfo table has the following key-value pairs:

| Key | Description |
| --- | --- |
| gestureType \[number\] | Indicates the gesture type |
| gesturesetUpParams \[object\] | Specifies the set up parameters passed while adding the gesture recognizer |
| gesturePosition \[number\] | Indicates the position where the gesture is recognized. Possible values are: 1 for TOPLEFT2 for TOPCENTER3 for TOPRIGHT4 for MIDDLELEFT5 for MIDDLECENTER6 for MIDDLERIGHT7 for BOTTOMLEFT8 for BOTTOMCENTER9 for BOTTOMRIGHT10 for CENTER |
| swipeDirection \[number\] | Indicates the direction of swipe. Direction is w.r.t the view and not device orientation. This parameter is applicable only if the gesture type is SWIPE. Possible values are: 1 for LEFT 2 for RIGHT 3 for TOP4 for BOTTOM |
| gestureX \[number\] | specifies the X coordinate of the point (in pixels) where the gesture has occurred. The coordinate is relative to the widget coordinate system. |
| gestureY \[number\] | specifies the Y coordinate of the point (in pixels) where the gesture has occurred. The coordinate is relative to the widget coordinate system. |
| widgetWidth \[number\] | specifies the width of the widget (in pixels). |
| widgetHeight \[number\] | specifies the height of the widget (in pixels). |
| gestureState\[number\] | Indicates the gesture state. The gestureState is applicable only for continuous gestures like PAN, ROTATION, and PINCH.1 – gesture state begin2 - gesture state changed3 – gesture state ended |
| rotation \[number\] | Rotation of the gesture in degrees since its last change.( Applicable only when gesture type is ROTATION) |
| velocityX and velocityY | horizontal and vertical component of velocity expressed in points per second. (Applicable only for PAN gesture type) |
| velocity \[number\] | velocity of pinch in scale per second. (Applicable only for Pinch gesture) |
| scale \[number\] | scale factor relative to the points of the two touches in screen coordinates. |
| touchType\[number\] | (Applicable to windows platform only)0 - constants.TOUCHTYPE\_FINGER1 - constants.TOUCHTYPE\_PEN2 - constants.TOUCHTYPE\_MOUSE |
| translationX and translationY \[number\] | Cumulative distance as number. (Applicable only for PAN gesture type) |

 

### context table has the following key-value pairs:

| Key | Description |
| --- | --- |
| rowIndex \[number\] | Row index of the segment UI where gesture is recognized. (Applicable to gestures added to segUI rows) |
| sectionIndex \[number\] | Section index of the segment UI where gesture is recognized. (Applicable to gestures added to segUI rows) |

 

### Example

```

//Defining a function
function formGesture(widgetID, gestureInfo) {
    var y = voltmx.type(gestureInfo); //expected value of y = table
    var z = voltmx.type(gestureInfo.gesturesetUpParams); //expected values of z = table
    var a = gestureInfo.gestureType;
    var b = gestureInfo.gesturesetUpParams;
    var c = gestureInfo.gesturePosition;
    var d = gestureInfo.gestureX;
    var e = gestureInfo.gestureY;
    var f = gestureInfo.widgetWidth;
    var g = gestureInfo.widgetHeight;
    voltmx.print("*******************************************");
    if (voltmx.os.toNumber(gestureInfo.gestureType) == 2) {
        h = gestureInfo.swipeDirection;
        voltmx.print("swipe direction is: " + h);
    } else {
        h = "";
    }
    if (voltmx.os.toNumber(a) == 1) {
        b1 = "fingers: " + gestureInfo.gesturesetUpParams.fingers;
        b2 = "taps: " + gestureInfo.gesturesetUpParams.taps;
        voltmx.print("" + b1 + "" + b2);
    } else if (voltmx.os.toNumber(a) == 2) {
        b1 = "fingers :" + gestureInfo.gesturesetUpParams.fingers;
        b2 = "";
        voltmx.print("" + b1 + "" + b2);
    } else if (voltmx.os.toNumber(a) == 3) {
        b1 = "pressduration:" + gestureInfo.gesturesetUpParams pressDuration;
        b2 = "";
        voltmx.print("" + b1 + "" + b2);
    }

    voltmx.print("widget id is: " + widgetID[id]); //will print the widgetID. 
    //To print widgetID use widgetID.id
    voltmx.print("type of gestureInfo is: " + y);
    voltmx.print("type of gesturesetUpParams is: " + z);
    voltmx.print("gestureType is: " + a); //gestureType=1 or 2 or 3
    voltmx.print("gesturesetUpParams is: " + b.fingers); 
  /*gesturesetUpParams 
    = {
        fingers = 1, taps = 1
    }
    or {
        fingers = 1, taps = 2
    }
    or {
        fingers = 1
    }
    or {
        pressDuration = 1
    }*/
    voltmx.print("gesturePosition is: " + c); //gesturePosition=1 or 2 or 3 or .....9
    voltmx.print("gestureX is: " + d); //ex: gestureX=30
    voltmx.print("gestureY is: " + e); //ex: gestureY=100
    voltmx.print("widgetWidth is: " + f); //ex: widgetWidth=320
    voltmx.print("widgetHeight is: " + g); //ex: widgetHeight=28
    //gesturePosition, gestureX, gestureY, widgetWidth, widgetHeight params are not applicable in android
    voltmx.print("*******************************************");
}

function callbackSingleTapGesture() {
    var x = {
        fingers: 1,
        taps: 1
    };
    try {
        voltmx.application.addGestureRecognizerForAllForms(1, x,
            formGesture);
    } catch (err) {
        alert(typeof err);
        alert("error in function callbackSingleTapGesture: " + err.message);
    }
}
```

### Return Values

String - Reference to the gesture is returned.

### Platform Availability

Available on all platforms except Server Side Mobile Web and Desktop Web.

* * *

</details>
<details close markdown="block"><summary>voltmx.application.removeGestureRecognizerForAllForms</summary>

* * *

This method allows you to remove a specified gesture recognizer for all Forms.

### Syntax

```

voltmx.application.removeGestureRecognizerForAllForms(uniqueIdentifier)
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| uniqueIdentifier - Mandatory | Reference to the gesture. The reference to the gesture is returned by the setGestureRecognizerForAllForms. |

 

### Example

```

function callbackClearLongPressGesture() {
    try {
        voltmx.application.removeGestureRecognizerForAllForms(uniqueidentifier);
    } catch (err) {
        alert(typeof err);
        alert("error in function callbackClearLongPressGesture: " + err.message);
    }
}
```

### Platform Availability

Available on all platforms except Server Side Mobile Web and Desktop Web.

* * *
</details>

![](resources/prettify/onload.png)
