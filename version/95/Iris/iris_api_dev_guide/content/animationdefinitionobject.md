                             


AnimationDefinition Object
==========================

The `AnimationDefinition` object contains key-value pairs and defines the state of a widget at any specified point of time. You can perform transformation, rotation, and scaling operations on widgets to move them, rotate them, or make them larger or smaller.

Key Frame Animation
-------------------

Using the Key frame animation, you can specify the transformations that must happen at specified locations. The Key frame definition consists of steps (key frames) that contain properties of a widget along with their values at specified points of time. Each step from initial value to the final value can be configured with an animation behavior.

For example, you could specify that a Label widget moves +5 in the y direction, then move -6 in the x direction, and then rotate 90 degrees. Each of these three steps can be performed by specifying three key frames.

When your app performs Key frame animation, it must define the key frames to use in an animation definition object. The animation definition object is a JavaScript object that your app creates and passes to the `voltmx.ui.createAnimation` function.

Following is the syntax of a Key frame:

{ <step>:  
{ <widget\_property> : <value> ,  
<widget\_property> : <value> , …  
stepConfig : { … } //optional parameter  
  
}

**Example**

```
var animDefinition = {
    "0": {
        "top": "0dp",
        "left": "0dp"
    },
    "100": {
        "top": "50dp",
        "left": "50dp"
    }
};
animDef = voltmx.ui.createAnimation(animDefinition);
```

For more information on Key frame animation, refer [Widget Animation Using Flex forms.](../../../Iris/iris_widget_prog_guide/Content/Animation.md#widget-level-animation-using-flex-forms)

![](resources/prettify/onload.png)
