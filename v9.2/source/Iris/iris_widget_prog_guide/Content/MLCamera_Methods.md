                               
MLCamera Methods
================

MLCamera widget has the following methods associated with it.

* * *

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
<details close markdown="block"><summary>setImageClassifier Method</summary>

* * *

This method is used to set an imageClassifier object to the MLCamera widget. This object helps the MLCamera widget to recognize and classify the real-world objects.

For more information on Image Classifier and its related APIs, click here.

### Syntax

```

setImageClassifier(imageClassifier)
```

### Parameters

_imageClassifier_ \[JSObject\]-Mandatory

This object must be created using the [voltmx.ml.imageClassifier](../../../Iris/iris_api_dev_guide/content/voltmx.ml_namespace_functions.md#ImageClassifier) API.  

### Return Values

None

### Example

```

/*Sample code to invoke setImageClassifier Method using myMLCamera MLCamera widget in frmMLCamera Form and imageClassifier1 object.*/  
frmMLCamera.mlCamera.setImageClassifier(imageClassifier1);
```

### Platform Availability

*   iOS and Android

* * *

</details>
<details close markdown="block"><summary>startDetection Method</summary>

* * *

This method enables you to classify preview frames.

### Syntax

```

startDetection()
```

### Parameters

None

### Return Values

None

### Example

```

/*Sample code to invoke startDetection Method using myMLCamera MLCamera widget in frmMLCamera Form.*/

frmMLCamera.myMLCamera.startDetection();
```

### Platform Availability

*   iOS and Android

* * *

</details>
<details close markdown="block"><summary>stopDetection Method</summary>

* * *

This method is used to stop the classification of the preview frames.

### Syntax

```

stopDetection()
```

### Parameters

None

### Return Values

None

### Example

```

/*Sample code to invoke stopDetection Method using myMLCamera MLCamera widget in frmMLCamera Form.*/

frmMLCamera.myMLCamera.stopDetection();
```

### Platform Availability

*   iOS and Android

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

### Following are the parameters of the JSObject:

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

