                             


voltmx.anim Namespace
===================

The voltmx.anim namespace is part of the [Animation API](animationapi.md). It provides the following API elements.

Constants
---------

The `voltmx.anim` namespace provides the following constants.


<details close markdown="block"><summary>Animation Effect Constants</summary> 

* * *

These constants are used to select what type of animation will take place.

| Constant | Description |
| --- | --- |
| voltmx.anim.ANIMATION\_EFFECT\_AUTOMATIC | Use the default animation style. |
| voltmx.anim.ANIMATION\_EFFECT\_BOTTOM | Add the new data at the bottom. |
| voltmx.anim.ANIMATION\_EFFECT\_FADE | Fade new data into the current location. |
| voltmx.anim.ANIMATION\_EFFECT\_LEFT | Add the new data in from the left. |
| voltmx.anim.ANIMATION\_EFFECT\_MIDDLE | Move existing data below the add point downward and insert the new data into the middle. |
| voltmx.anim.ANIMATION\_EFFECT\_NONE | No animation effect. |
| voltmx.anim.ANIMATION\_EFFECT\_TOP | Add the new data from the top. |

 

The following constants are used to define the velocity of animation.

| Constant | Description |
| --- | --- |
| voltmx.anim.EASE | Ensures that the timing of your animations matches that of most system animations. |
| voltmx.anim.EASE\_IN | Animation begins slowly and then speeds up as it progresses. |
| voltmx.anim.EASE\_OUT | Animation begins quickly and then slows down as it progresses. |
| voltmx.anim.EASE\_IN\_OUT | Animation begins slowly, accelerates through the middle of its duration, and then slow again before completing. |
| voltmx.anim.Linear | Animation to occur evenly over its duration. |

 

### Remarks

These constants are usable with the following widget methods, which are documented in the [VoltMX Iris\> Widget Programmer's Guide](../../../Iris/iris_widget_prog_guide/Content/Overview.md). These methods are available on all widgets that support animation.

*   addDataAt
    
*   addAll
    
*   addSectionAt
    
*   removeAt
    
*   removeAll
    
*   removeSectionAt
    
*   setDataAt
    
*   setSectionAt
    
*   SetData
    

Currently, animations are supported for the [SegmentedUI](../../../Iris/iris_widget_prog_guide/Content/Segment_Properties.md#segmentedui-properties) widget.

### Example 1

```

animation = voltmx.anim.ANIMATION_EFFECT_LEFT;
form.segments.addAt(data, sectionIndex, rowIndex, animation);

```

### Example 2

```

function animateWidget() {
    <Widget>.animate(voltmx.ui.createAnimation({
        "100": {
            "stepConfig": {
                "timingFunction": voltmx.anim.EASE_IN_OUT
            },
            "width": "20%",
            "height": "5%"
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
        "duration": 1.5
    }, {
        "animationEnd": null
    });
}
```

* * *

</details>
<details close markdown="block"><summary>Animation Fill Mode Constants</summary> 

* * *

Specifies the fill mode being used when performing [widgetanimations](../../../Iris/iris_widget_prog_guide/Content/Animation.md#widget-level-animation-using-flex-forms).

| Constant | Description |
| --- | --- |
| voltmx.anim.FILL\_MODE\_BACKWARDS | The values configured in the first step of animation definition are applied to the widget at the beginning of the animation (even before the delay ends). At the end of animation, values are reset to the values, that were there before the start of the animation. Therefore, the widget returns to its starting point after the animation ends. |
| voltmx.anim.FILL\_MODE\_BOTH | The animation is applied twice on the widget. First at the beginning of the animation, before the animation delay with the values configured in the first step of the animation, and second at the end of the animation, with the values configured in the last step of the animation definition. |
| voltmx.anim.FILL\_MODE\_FORWARDS | The values configured in the last step of animation definition are the final values that are applied to the widget at the end of animation. So the widget stays where it is at the end of the animation. |
| voltmx.anim.FILL\_MODE\_NONE | The values in animation definition are never set to the actual widget. In this case, the widget comes back to original state after the animation is completed. This is the default. |

  

### Example

```
                    
function animConfig() {
    var config = {
        "duration": 1,
        "iterationCount": 1,
        "delay": 0,
        "fillMode": voltmx.anim.FILL_MODE_FORWARDS
    };
    return config;
}
```

* * *

</details>

![](resources/prettify/onload.png)
