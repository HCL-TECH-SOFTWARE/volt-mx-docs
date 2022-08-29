                             

You are here: Animation API

Animation API
=============

Using the Animation API, you can create animations and 3D transformations on widgets that support animations. You can transform objects, define animations, and configure various properties of an animation. To associate an animation to a widget, the animation configuration object, the animation definition object, and the callbacks are passed to the methods of the widgets such as **addAll**, **addDataAt**, and **addSectionAt**.

The Animation API contains the following Namespaces and API elements:

**[AnimationConfiguration Object](animationconfiguration_object.md)**

| Key | Description |
| --- | --- |
| [delay](animationconfiguration_object.md#delay) | This key defines when the animation will start. |
| [direction](animationconfiguration_object.md#directio) | This key defines whether the animation must play in reverse on some or all cycles. |
| [duration](animationconfiguration_object.md#duration) | This key defines the time in seconds that an animation takes to complete one cycle. |
| [fillMode](animationconfiguration_object.md#fillMode) | This key defines what values are applied to the widget state by the animation outside the time it is executing. |
| [iterationCount](animationconfiguration_object.md#iteratio) | This key specifies the number of times an animation cycle is played. |

 

**[voltmx.ui Namespace](voltmx.ui_functions.md)**

| Function | Description |
| --- | --- |
| [voltmx.ui.createAnimation](voltmx.ui_functions_createanimation.md) | Creates an object that defines an animation. |
| [voltmx.ui.makeAffineTransform](voltmx.ui_functions_makeaffinetransform.md) | Creates a transformation object that can be used in an animation definition. |

**[voltmx.anim Namespace](voltmx.anim_constants.md)**

| Constant | Description |
| --- | --- |
| [Animation Effect Constants](voltmx.anim_constants.md#AnimationEffectConstants) | These constants are used to select what type of animation will take place. |
| [Animation Fill Mode Constants](voltmx.anim_constants.md#AnimationFillMode) | Specifies the fill mode being used when performing widget animations. |

 

**[Transform Object](transform_object_methods.md)**

| Method | Description |
| --- | --- |
| [rotate](transform_object_methods.md#rotate) | Returns an affine transformation matrix constructed by rotating receivers affine transform. |
| [rotate3D](transform_object_methods.md#rotate3D) | Rotates the widget by angle on the unit directional vector formed by rx, ry, and rz. |
| [scale](transform_object_methods.md#scale) | Returns an affine transformation matrix constructed by scaling receivers affine transform. |
| [scale3D](transform_object_methods.md#scale3D) | Scales a widget in three dimensions (x, y, z) coordinate system. |
| [setPerspective](transform_object_methods.md#setPersp) | Sets the perspective and sets the vanishing point at the center of the widget. |
| [translate](transform_object_methods.md#translat) | Returns an affine transformation matrix constructed by translating receivers affine transform. |
| [translate3D](transform_object_methods.md#translate3D) | Translates the widget from present location to new location by x, y, z amount. |

 

**Transform Objects:** Create a transform object by using the [voltmx.ui.makeAffineTransform](voltmx.ui_functions_makeaffinetransform.md) function. Using the transform object, you can set 2D and 3D transformations to a widget. You can rotate the widget using[rotate](transform_object_methods.md#rotate) and [rotate3D](transform_object_methods.md#rotate3D) methods; scale the widget using [scale](transform_object_methods.md#scale) and [scale3D](transform_object_methods.md#scale3D) methods; and translate the widget using [translate](transform_object_methods.md#translat) and [translate3D](transform_object_methods.md#translate3D) method. You can also set the perspective and the vanishing point using the [setPerspective](transform_object_methods.md#setPersp) method.

**Animation Definition Object:** Create an animation definition object by using the [voltmx.ui.createAnimation](voltmx.ui_functions_createanimation.md) function. The animation definition object defines the state of the widget at any specified point of time. Then configure properties of the animation by using the animation configuration object.

**Animation Configuration Object:** The animation configuration object has various key-value pairs that determine properties of the animation. You can set the animation [delay](animationconfiguration_object.md#delay), [duration](animationconfiguration_object.md#duration), [direction](animationconfiguration_object.md#directio), [iterationCount](animationconfiguration_object.md#iteratio), and the [fillMode](animationconfiguration_object.md#fillMode) properties that determine the state of the widget at the end of the animation.

<!--
To view the functionality of the Animation API in action, download the sample application from the link below. Once the application is downloaded, build and preview the application using the Volt MX App.

[![](resources/images/download_button_10_230x35.png)](https://github.com/kony/Animations_FeatureApp)

![](resources/prettify/onload.png)
-->
