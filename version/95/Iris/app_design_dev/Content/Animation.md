                            

Volt MX Application Design and Development Guidelines: [Flex Layout Guidelines](Flex_Layout_Guidelines_Overview.md) > Flex Layout Animation

Widget Level Animation Using Flex Forms
---------------------------------------

Widget Level Animation feature enables you to animate widgets placed in a container (for example, Form). This feature supports 2D and 3D animations and transformations. The 2D animations are supported on iOS, Android, Windows, and SPA platforms and the 3D animations are supported on iOS, SPA and Android (limited support) for the applications created in JavaScript language using the Volt MX Platform.

When the transformation matrix is identity, the 3D directions are as follows:

*   x-axis is towards the right of the widget
*   y-axis is towards bottom of the widget
*   z-axis is coming out of the screen

> **_Note:_** 3D animations should be applied on widgets when they are in normal state. Otherwise it may have undefined behavior.

The animation is classified into the following sub classes:

*   [Key Frame Animations](#key-frame-animations)
*   [Animation Properties Events and Methods](#animation-properties-events-and-methods)

Key Frame Animations
--------------------

Key frame animations allows you to define animations by changing the widget level properties.

### Key Frame Animation Definition

Key frame definition consists of one or more properties of the widget along with changes in their values and the steps (key frame) involved in changing the value from the initial value to final value. Each step from initial value to the final value can be configured with an animation behavior.

Key frame animation can be defined dictionary of steps with each step configured again using a JavaScript Object (Dictionary). Step-config is optional parameter. Following is the syntax:

> **_Note:_** If the animation definition does not follow the above syntax then animate API throws Invalid Animation Definition exception.

```
{  
         
<step>: { 
 
<widget_property> : <value> , 

<widget_property> : <value> ,

 …

stepConfig : { … }
}

		,
<step>: { 

<widget_property>  : <value> , 

<widget_property>  : <value> ,  

…

stepConfig : { … }

}
,
       ….

}

```

References
----------

APIs does not completely adhere to the CSS3 specifications but is influenced by CSS3 animations and transformations. 

The following URLs help as a reference:

*   [http://dev.w3.org/csswg/css3-animations/](http://dev.w3.org/csswg/css3-animations/)
*   [http://dev.w3.org/csswg/css3-2d-transforms/](http://dev.w3.org/csswg/css3-2d-transforms/)
*   [http://cubic-bezier.com/](http://cubic-bezier.com/)
*   [http://dev.w3.org/csswg/css3-2d-transforms/](http://dev.w3.org/csswg/css3-2d-transforms/)
*   [http://dev.w3.org/csswg/css3-3d-transforms/](http://dev.w3.org/csswg/css3-3d-transforms/)

Animation Properties Events and Methods
---------------------------------------

Following are the widget level properties, events, and methods that are allowed to be part of the animation definition.


<details close markdown="block"><summary id="animateH">animate</summary>

This method applies the animation to the widget immediately, if the widget is part of the currently visible view hierarchy. If widget is not part of the currently visible view hierarchy then this API invocation is ignored. This method is asynchronous and immediately returns and do not wait for the animation to start or complete.

All the animation callbacks will receive animate as a second parameter.

<b>Signature</b>

```

animate(  
   animationObj,  
  animationConfig,  
   animationCallbacks)
```


<b>Input Parameters</b>

animationObj

An object defined using voltmx.ui.createAnimation() API. Refer voltmx.ui.createAnimation for more details.

animationConfig

Optional. As defined in [Animation Configuration](#animation-configurations) section.

animationCallbacks\[JSObject\]

Optional. A dictionary represents JavaScript functions that work as animation call backs. Following are the animation callbacks:

> *   animationStart (source, animationHandle, elapsedTime): This event occurs at the start of the animation. If there is 'animation-delay' configured then this event will fire only after the delay period. This event gets called asynchronously.
> *   animationEnd (source, animationHandle, elapsedTime): The animationEnd event occurs when the animation finishes. This event gets called asynchronously.
> 
> > > _source:_ A widget that is being animated.
> > > 
> > > _animationHandle:_ A handle returned by applyAnimation method.
> > > 
> > > _elapsedTime:_ The amount of time the animation has been running in seconds, when this event is fired.

<b>Return Values</b>

Returns a handle to the animation, that is platform-defined object. This handle is of no use for now, but is returned for the future requirements such as cancellation of animations etc.

<b>Remarks</b>

This method throws Invalid Animation Definition Exception if animation definition, does not follow the dictionary structure expected. This method is ignored if this is called on widget whose immediate parent is not FlexForm, FlexContainer or FlexScrollContainer.

<b>Example</b>

```
//Sample code of animation   
  
function AnimateBoth()
{
  var getFuncName = frm1.listbox18.selectedKey;
	
	if(getFuncName == "BothLT") {
		frm1.textbox26.animate(myAnimDefinition(), animConfiguration(), {});
	}
	else if(getFuncName == "BothTBL"){
	frm1.textbox26.animate(myAnimDefinitionsc1(), animConfiguration(), {});
	
	}
}  

```

<b>Availability</b>

*   iOS
*   Android/Android Tablet
*   Windows
*   SPA

This method creates an animation object that can be used to animate the widgets using animate API.

<b>Signature</b>

```

voltmx.ui.createAnimation (  
   animationDef)
```


<b>Input Parameters</b>

animationDef \[Number\]

A sample animation definition.

> ```
{
>     <step>: {
> 
>         <widget_property>: <value>,
>         <widget_property>: <value>,
>         ---
>       
>     stepConfig: {…}
>     }
> 	<step>: {
> 
>         <widget_property>: <value>,
>         <widget_property>: <value>,
>         ---
>           
>     stepConfig: {…}
>     },
> 		---      
> }
> 
> ```

<b>Return Values</b>

None

<b>Exceptions</b>

WidgetError

<b>Remarks</b>

Values cannot be specified using pixels.

<b>Example</b>

```
//Sample code of animation   
  
function myAnimDefinition()
{
	var animDefinition = 
	{
       0 : 
	   {
         "width":50,
         "left":0
        },
       100 : 
	   {
         "width":50,
         "left":90
        }
      } ;
	animDef = voltmx.ui.createAnimation(animDefinition);
	return animDef;
}  

```

<b>Availability</b>

*   iOS
*   Android/Android Tablet
*   Windows
*   SPA

</details>
<details close markdown="block"><summary>anchorPoint</summary>

Specifies the anchor point of the widget bounds rectangle using the widgets coordinate space. The possible values are dictionary with x,y as possible keys with the values as numbers ranging from 0 to 1. All geometric manipulations to the widget occur about the specified point. For example, applying a rotation transform to a widget with the default anchor point causes the widget to rotate around its center.

<b>Syntax</b>

```

anchorPoint
```

<b>Type</b>

JSObject

<b>Permissions</b>

Read + Write

<b>Remarks</b>

The default value for this property is center ( {"x":0.5, "y":0.5} ), that represents the center of the widgets bounds rectangle. The behavior is undefined if the values are outside the range zero (0) to one (1).

<b>Availability</b>

Not available in the IDE.

*   iOS
*   Android
*   Windows
*   SPA

</details>
<details close markdown="block"><summary>transform</summary>

This property is set to identify transform by default. Any transformations applied to the widget, occur relative to the widget anchor point. Values that can be set to this property must be created using voltmx.ui.makeAffineTransform.

<b>Syntax</b>

```

transform
```

<b>Type</b>

JSObject

<b>Permissions</b>

Read + Write

<b>Example</b>

```
//Sample code of animation 
function animDeftranslate() {
    var transformProp1 = voltmx.ui.makeAffineTransform();
    transformProp1.translate(100, 100);
    var transformProp2 = voltmx.ui.makeAffineTransform();
    transformProp2.scale(2, 2);
    var transformProp3 = voltmx.ui.makeAffineTransform();
    transformProp3.rotate(90);
    var animDefinitionOne = {
        0: {
            "transform": transformProp1
        },
        50: {
            
            "transform": transformProp2
        },
        100: {
           
            "transform": transformProp3
        }
    }
    animDef = voltmx.ui.createAnimation(animDefinitionOne);
    return animDef;

}

Function getParent() {

    Var result = this.parent;
}  
  

```

<b>Availability</b>

Not available in the IDE.

*   iOS
*   Android
*   Windows
*   SPA

</details>
<details close markdown="block"><summary>voltmx.ui.makeAffineTransform</summary>

This method creates a 2D transform object. A 2D transform object can be used to scale, translate, and rotate the widgets in a two-dimensional space.

<b>Signature</b>

```

voltmx.ui.makeAffineTransform( )
```

<b>Input Parameters</b>

None

<b>Return Values</b>

It returns the identity transform.

<b>Exceptions</b>

WidgetError

<b>Remarks</b>

Irrespective of the invocation order of operations, voltmx.ui.makeAffineTransform method applies the transform in the sequence of scale, translate, and rotate operations.

<b>Example</b>

```
//Sample code of animation 
function animDeftranslate() {
    var transformProp1 = voltmx.ui.makeAffineTransform();
    transformProp1.translate(10, 10);
    var transformProp2 = voltmx.ui.makeAffineTransform();
    transformProp2.translate(20, 20);
    var transformProp3 = voltmx.ui.makeAffineTransform();
    transformProp3.translate(30, 30);
    var animDefinitionOne = {
        0: {
            "anchorPoint": {
                "x": 0.5,
                "y": 0.5
            },
            "transform": transformProp1
        },
        50: {
            "anchorPoint": {
                "x": 0.5,
                "y": 0.5
            },
            "transform": transformProp2
        },
        100: {
            "anchorPoint": {
                "x": 0.5,
                "y": 0.5
            },
            "transform": transformProp3
        }
    }
    animDef = voltmx.ui.createAnimation(animDefinitionOne);
    return animDef;

}

Function getParent() {

    Var result = this.parent;
}  
  

```

<b>Availability</b>

*   iOS
*   Android/Android Tablet
*   Windows
*   SPA

</details>
<details close markdown="block"><summary>rotate</summary>

This method returns an affine transformation matrix constructed by rotating receivers affine transform. Angle is a number in degrees and always measured from x-axis as shown.

<b>Signature</b>

```

rotate(angle)
```

<b>Input Parameters</b>

angle \[Number\]

A number represents the angle, in degrees, by which this matrix rotates the coordinate system axes. A positive value specifies counterclockwise rotation and a negative value specifies clockwise rotation.

<b>Return Values</b>

Returns an affine transformation matrix constructed by rotating receivers affine transform.

<b>Exceptions</b>

WidgetError

<b>Remarks</b>

Default value is 0, if transform was never applied to the widget. The rotation does not result in any layout changes to parent or peer widgets. This is also applicable for widgets placed inside horizontal or vertical flex containers.

For example, if you want to rotate a widget in 360 degrees, you can follow the below sequence of steps:

> step1: Rotate the widget from 0  -   120
> 
> step1: Rotate the widget from 120  -   240
> 
> step3: Rotate the widget from 240  -  360

Any value greater than 180 degrees may lead to shortest path rotation from its current position. For cross platform values, for example 190 degrees will make the object rotate -170 (190-360) in negative direction, as 170 is shortest path compared to 190.

<b>Example</b>

```
//Sample code of animation 
function animDeftranslate() {
    var transformProp1 = voltmx.ui.makeAffineTransform();
    transformProp1.translate(100, 100);
    var transformProp2 = voltmx.ui.makeAffineTransform();
    transformProp2.scale(2, 2);
    var transformProp3 = voltmx.ui.makeAffineTransform();
    transformProp3.rotate(90);
    var animDefinitionOne = {
        0: {
            "transform": transformProp1
        },
        50: {
            
            "transform": transformProp2
        },
        100: {
           
            "transform": transformProp3
        }
    }
    animDef = voltmx.ui.createAnimation(animDefinitionOne);
    return animDef;

}

Function getParent() {

    var result = this.parent;
}
```

<b>Availability</b>

*   iOS
*   Android/Android Tablet
*   Windows
*   SPA

</details>
<details close markdown="block"><summary>rotate3D ()</summary>

This method rotates the widget by angle on the unit directional vector formed by rx, ry, and rz.

<b>Syntax</b>

```

rotate3D(  
    angle,  
    rx,  
    ry,  
    rz)
```

<b>Parameters</b>

angle

Specify the angle, by which a widget to be rotated around rx, ry, and rz axises.

rx

Specify the x-axis value on which rotation to happen.

ry

Specify the y-axis value on which rotation to happen.

rz

Specify the z-axis value on which rotation to happen.

<b>Exceptions</b>

  
| Error Code | Description |
| --- | --- |
| 100 | Invalid input |
| 101 | Incomplete input |

<b>Remarks</b>

The value of angle should be in degrees and the range should be in between 180o to -180o. Any value greater or lesser than range will result into platform-specific behavior. Positive values of angle will rotate the widget in anti-clockwise direction and vice versa.

The values of rx, ry, and rz should be in the range of 0 - 1. If the (0,0,0) vector is specified, the behavior is platform-specific.

In the Android platform, the values between 0 - 1 are not accepted. Only '0' or '1' is accepted.

All the input parameters need to be specified. If any parameter found missing will result in an exception 101.

<b>Example</b>

```
var newTransform = voltmx.ui.makeAffineTransform();  
newTransform.rotate3D(45, 1,0,1); //rotates by 45degrees in x and z Axis.  
widget.transform = newTransform;
```

<b>Availability</b>

Available in the IDE

iOS

Android

SPA

</details>
<details close markdown="block"><summary>scale</summary>

This method returns an affine transformation matrix constructed by scaling receivers affine transform. It is a JSObject with keys sx and sy and allow numbers only.

<b>Signature</b>

```

scale (  
   sx,   
   sy)
```

<b>Input Parameters</b>

sx \[Number\]

The factor by which to scale the x-axis of the widget coordinate system.

sy \[Number\]

The factor by which to scale the y-axis of the widget coordinate system.

Default values are {"sx":1, "sy":1}, if the transform was never applied to the widget.

<b>Return Values</b>

Returns an affine transformation matrix constructed by scaling receivers affine transform.

<b>Exceptions</b>

WidgetError

<b>Remarks</b>

Scaling does not result in any layout changes to parent or peer widgets. This is applicable to the widgets placed inside horizontal or vertical flex containers. Negative values for sx and sy will make the widget flip in that direction.

<b>Example</b>

```
//Sample code of animation 
function animDeftranslate() {
    var transformProp1 = voltmx.ui.makeAffineTransform();
    transformProp1.translate(100, 100);
    var transformProp2 = voltmx.ui.makeAffineTransform();
    transformProp2.scale(2, 2);
    var transformProp3 = voltmx.ui.makeAffineTransform();
    transformProp3.rotate(90);
    var animDefinitionOne = {
        0: {
            "transform": transformProp1
        },
        50: {
            
            "transform": transformProp2
        },
        100: {
           
            "transform": transformProp3
        }
    }
    animDef = voltmx.ui.createAnimation(animDefinitionOne);
    return animDef;

}

Function getParent() {

    Var result = this.parent;
}
```

<b>Availability</b>

*   iOS
*   Android/Android Tablet
*   Windows
*   SPA

</details>
<details close markdown="block"><summary>scale3D ()</summary>

Scales a widget in three dimensions (x, y, z) coordinate system.

<b>Syntax</b>

```

scale3D(  
    sx,  
    sy,  
    sz)
```

<b>Parameters</b>

sx

Specify the value to be scaled in the x direction.

sy

Specify the value to be scaled in the y direction.

sz

Specify the value to be scaled in the z direction.

<b>Exceptions</b>

  
| Error Code | Description |
| --- | --- |
| 100 | Invalid input |
| 101 | Incomplete input |

<b>Remarks</b>

The default values of the sx, sy, and sz directions are (1, 1, 1). Any value with in the 0 - 1 range scales down the widget and the value greater than '1' scales up in the specified directions. As all the widgets are not 3D meshes, this function may not be applicable for z-axis and may have platform-specific behavior. The scale3D method should not be applied on zero dimension widgets. If applied, the behavior is undefined.

All the input parameters need to be specified. If any parameter found missing will result in an exception 101.

<b>Example</b>

```
var newTransform = voltmx.ui.makeAffineTransform();  
newTransform.scale3D(2, 0.5, 1);  
//scales by 200% in xDirection, 50% in yDirection and no scale happening in zDirection.  
widget.transform = newTransform;
```

<b>Availability</b>

Available in the IDE

iOS

SPA

</details>
<details close markdown="block"><summary>translate</summary>

This method returns an affine transformation matrix constructed by translating receivers affine transform. It is a JavaScript object with keys tx and ty and allow numbers in dp.

<b>Signature</b>

```

translate (  
   tx,  
   ty)
```


<b>Input Parameters</b>

tx \[Number\]

The value by which to move the x-axis of the widget coordinate system.

ty \[Number\]

The factor by which to move the y-axis of the widget coordinate system.

Default values are {"tx":0, "ty":0} if the transform was never applied to the widget.

<b>Return Values</b>

Returns an affine transformation matrix constructed by translating receivers affine transform.

<b>Exceptions</b>

WidgetError

<b>Remarks</b>

Translate does not result in any layout changes to parent or peer widgets. This is applicable to the widgets placed inside horizontal or vertical flex containers.

> **_Note:_** Values cannot be specified using percentage and pixels.

<b>Example</b>

```
//Sample code of animation 
function animDeftranslate() {
    var transformProp1 = voltmx.ui.makeAffineTransform();
    transformProp1.translate(100, 100);
    var transformProp2 = voltmx.ui.makeAffineTransform();
    transformProp2.scale(2, 2);
    var transformProp3 = voltmx.ui.makeAffineTransform();
    transformProp3.rotate(90);
    var animDefinitionOne = {
        0: {
            "transform": transformProp1
        },
        50: {
            
            "transform": transformProp2
        },
        100: {
           
            "transform": transformProp3
        }
    }
    animDef = voltmx.ui.createAnimation(animDefinitionOne);
    return animDef;

}

Function getParent() {

    Var result = this.parent;
}
```

<b>Availability</b>

*   iOS
*   Android/Android Tablet
*   Windows
*   SPA

</details>
<details close markdown="block"><summary>translate3D ()</summary>

Translate the widget from present location to new location by x, y, z amount.

<b>Syntax</b>

```

translate3D(  
    tx,  
    ty,  
    tz)
```

<b>Parameters</b>

tx

Specify the value to be moved in the x direction from present location.

ty

Specify the value to be moved in the y direction from present location.

tz

Specify the value to be moved in the z direction from present location.

<b>Exceptions</b>

  
| Error Code | Description |
| --- | --- |
| 100 | Invalid input |
| 101 | Incomplete input |

<b>Remarks</b>

The values of tx, ty, and tz should be floating numbers. If the [setPerspective](#setPersp) method is not used, the widget moving in the z direction will not have any visual effect.

All the input parameters need to be specified. If any parameter found missing will result in an exception 101.

<b>Example</b>

```
var newTransform = voltmx.ui.makeAffineTransform();  
newTransform.translate3D(223,12,56); //translates by 223 xAxis,12 in yAxis,56 in zAxis  
widget.transform = newTransform;
```

<b>Availability</b>

Available in the IDE

iOS

SPA

</details>
<details close markdown="block"><summary>setPerspective ()</summary>

This method sets the perspective and sets the vanishing point at the center of the widget.

<b>Syntax</b>

```

setPerspective(  
    distanceOfViewerToPlane)
```

<b>Parameters</b>

distanceOfViewerToPlane

The distance between the viewer and object. Always the value of this parameter should be greater than zero. Otherwise results an exception 100.

<b>Exceptions</b>

  
| Error Code | Description |
| --- | --- |
| 100 | Invalid input |
| 101 | Incomplete input |

<b>Remarks</b>

The perspective has to be set in combination with other transforms. The perspective set by itself will not have any effect. If perspective is set to transform in any key frame, the perspective will be applied to that particular key frame itself in the KeyFrameAnimation.

The perspective is platform dependent so that each platform has different perspective of a view for same value. The default perspective on the Android platform is 1280. Any perspective less than 1280 makes the camera perspective closer to the view and greater than 1280 makes perspective far from the view.

In the Android platform, when perspective is not specified, the default perspective is applied.

For the iOS platform, the value of the distanceOfViewerToPlane parameter should be greater than max (width, height) values of the widget view's frame. For example, if the value of (width, height) is (100, 50), the parameter value should be greater than 100. The effect of this parameter vary visually on different platforms for the same value. The units of the distanceOfViewerToPlane parameter is platform-specific.

All the input parameters need to be specified. If any parameter found missing will result in an exception 101.

<b>Example</b>

```
var newTransform = voltmx.ui.makeAffineTransform();  
newTransform.setPerspective(1000.0);  
//Sets the perspective as such this will have no effect until it is combined with other transformation matrix.  
newTransform.rotate3D(45, 1,0,1);  
//rotates by 45degrees in x and z Axis. Now the perspective can be observed  
widget.transform = newTransform;
```

<b>Availability</b>

Available in the IDE

iOS

SPA

### Widget Skin Properties

Following widget skin properties can be animated: 

</details>
<details close markdown="block"><summary>backgroundColor</summary>

Specifies the background color of the widget in hex format.

<b>Syntax</b>

```

backgroundColor
```

<b>Type</b>

String

<b>Permissions</b>

Read + Write

<b>Remarks</b>

There is no default value. It accepts 6 dig or 8 digit with alpha position are allowed. For example, ffffff or ffffff00.

When the 4-byte color format (RGBA) string is used, an alpha (A) value of FF specifies that the color is transparent. If the value is 00, the color is opaque. For example, red complete opaque is FF000000. Red complete transparent is FF0000FF. This change is made for backward compatibility.

> **_Note:_** This property has more priority compared to the values coming from the configured skin.The values 0x and # are not allowed in the hex format.

> **_Note:_** Initial value of backgroundColor has to be specified explicitly. If not, platform will not deduce the values from the existing skin and will lead to undefined behavior.

<b>Availability</b>

Not available in the IDE.

*   iOS
*   Android
*   Windows
*   SPA

</details>
<details close markdown="block"><summary>opacity</summary>

Specifies the opacity of the widget. The value of this property must be in the range 0.0 (transparent) to 1.0 (opaque). Any values outside this range are fixed to the nearest minimum or maximum value.

<b>Syntax</b>

```

opacity
```

<b>Type</b>

Number

<b>Permissions</b>

Read + Write

<b>Remarks</b>

This property has more priority compared to the values coming from the configured skin.

<b>Availability</b>

Not available in the IDE.

*   iOS
*   Android
*   Windows
*   SPA

Animation Configurations
------------------------

Animation configuration specifies the render behavior of an object during the animation. For example, you can specify how long an animation occur or the direction the animation should occur. The animation configurations are part of overall animation and not the step level configuration.

Following are the components of animation configuration:

</details>
<details close markdown="block"><summary>duration</summary>

This property defines the time in seconds that an animation takes to complete one cycle. This is overall animation level configuration and not the step level configuration.

Possible values include all the positive float numbers with a precision of three and the default value is zero, which indicates that animation is instantaneous. However, there will not be visible animation changes, technically animation occurs and all animation callbacks get triggered.

> **_Note:_** Negative values will be treated as zero or may lead to undefined behavior.

</details>
<details close markdown="block"><summary>iterationCount</summary>

This property specifies the number of times an animation cycle is played. Default value is one (1), meaning the animation will play from beginning to end. A value of zero (0) will cause the animation to repeat forever until the time view is live in the current hierarchy.

> **_Note:_** Possible values include all the positive integer numbers. Any invalid values such as negative values would be ignored or may lead to undefined behavior.

</details>
<details close markdown="block"><summary>direction</summary>

This property defines whether the animation must play in reverse on some or all cycles. If an animation is played in reverse, the timing functions are also reversed. For example, when played in reverse an ease-in animation would appear to be an ease-out animation.

Following are the possible predefined values: 

*   voltmx.anim.DIRECTION\_NONE (default)

All iterations of the animation are played as specified.

*   voltmx.anim.DIRECTION\_ALTERNATE

The animation cycle iterations that are of odd counts are played in the normal direction, and the animation cycle iterations that are even counts are played in a reverse direction.

Note that this is overall animation level configuration and not the step level configuration.

> **_Note:_** Values will be specified as a string containing one of the above values and any other values will be ignored and default is applied or may lead to undefined behavior.

</details>
<details close markdown="block"><summary>delay</summary>

This property defines when the animation will start. It allows an animation to start executing after it is applied. This is specified in seconds and fractional values are allowed.

Delay value of zero (0) means the animation will execute as soon as it is applied. Otherwise, the value specifies an offset from the moment the animation is applied, and the animation will delay execution by that offset. Default value is zero and any negative or invalid values will default this property to zero.

> **_Note:_** This is overall animation level configuration and not the step level configuration.

</details>
<details close markdown="block"><summary>fillMode</summary>

This property defines what values are applied to the widget state by the animation outside the time it is executing.

Following are the options:

*   voltmx.anim.FILL\_MODE\_FORWARDS: The values configured in the last step of animation definition are the final values that are applied to the widget at the end of animation.

*   voltmx.anim.FILL\_MODE\_BACKWARDS: The values configured in the first step of animation definition are applied to the widget at the beginning of the animation (even before the delay ends). At the end of animation, values are reset to the values, that were there before the start of the animation.

*   voltmx.anim.FILL\_MODE\_BOTH: The animation is applied twice on the widget. First at the beginning of the animation, before the animation delay with the values configured in the first step of the animation, and second at the end of the animation, with the values configured in the last step of the animation definition.

*   voltmx.anim.FILL\_MODE\_NONE (default): The values in animation definition are never set to the actual widget. In this case, the widget comes back to original state after the animation is completed.

Following is the table showing the behavior of the animatable properties when queried during or at the end of the animation.

  
| Fill-mode | In delay state | Animation states | Final state | Model Update |
| --- | --- | --- | --- | --- |
| Direction: None |||   ||
| None | Y | RGB | Y | No update |
| Forwards | Y | RGB | B | A.E.A update with 100th step |
| Backwards | R | RGB | Y | A.B.A update with 0th step, A.E.A update with initial value |
| Both | R | RGB | B | A.B.A update with 0th step, A.E.A update with 100th step |
| Direction: Alternate,   Iteration Count = even  value |||   ||
| None | Y | RGB => BGR | Y | No update |
| Forwards | Y | RGB => BGR | R | A.E.A update with 0th step |
| Backwards | R | RGB => BGR | Y | A.B.A update with 0th step, A.E.A update with initial value |
| Both | R | RGB => BGR | R | A.B.A update with 0th step, A.E.A update with 0th step |
| Direction: : Alternate,  Iteration Count = odd value |||   ||
| None | Y | RGB => BGR => RGB | Y | No update |
| Forwards | Y | RGB => BGR => RGB | B | A.E.A update with 100th step |
| Backwards | R | RGB => BGR => RGB | Y | A.B.A update with 0th step, A.E.A update with initial value |
| Both | R | RGB => BGR => RGB | B | A.B.A update with 0th step, A.E.A update with 100th step |

> **_Note:_** This is overall animation level configuration and not the step level configuration. Values will be specified as string containing one of the above values and any other values would be ignored or may lead to undefined behavior.

<b>Example</b>

```
function animConfig(){
 var config = {
    "duration":1,
    "iterationCount":1,
    "delay":0,
    "fillMode":voltmx.anim.FILL_MODE_FORWARDS
 };
 return config;
}
```

Applying Animations
-------------------

Every widget provides animate API to animate the widgets.

Following are the types of animations you can apply:

1.  [Sequential and Parallel Animations](#sequential-and-parallel-animations)
2.  [Querying Widget Properties](#querying-widget-properties)
3.  [Layout Callbacks during Animation](#layout-callbacks-during-animation)
4.  [Flex Container and Child Widgets](#flex-container-and-child-widgets)
5.  [Multiple Parallel Animations](#multiple-parallel-animations)
6.  [Interactions on the Widget during Animation](#interactions-on-the-widget-during-animation)

Sequential and Parallel Animations
----------------------------------

To sequence the animations one after the other, animation events have to be used. You can start a new animation at the end of the existing animation using `animationEnd` event.

All animations initiated by animate API gets executed asynchronously. Essentially calling animate API on widgets sequentially one after the other leads to parallel execution of the animations.

Querying Widget Properties
--------------------------

Following is the table showing the behavior of the animatable properties when queried during or at the end of the animation. Only when the model is updated (last column) then the values are available when queried.

  
| Fill-mode | In delay state | Animation states | Final state | Model Update |
| --- | --- | --- | --- | --- |
| Direction: None |||   ||
| None | Y | RGB | Y | No update |
| Forwards | Y | RGB | B | A.E.A update with 100th step |
| Backwards | R | RGB | Y | A.B.A update with 0th step, A.E.A update with initial value |
| Both | R | RGB | B | A.B.A update with 0th step, A.E.A update with 100th step |
| Direction: Alternate,   Iteration Count = even  value |||   ||
| None | Y | RGB => BGR | Y | No update |
| Forwards | Y | RGB => BGR | R | A.E.A update with 0th step |
| Backwards | R | RGB => BGR | Y | A.B.A update with 0th step, A.E.A update with initial value |
| Both | R | RGB => BGR | R | A.B.A update with 0th step, A.E.A update with 0th step |
| Direction: : Alternate,  Iteration Count = odd value |||   ||
| None | Y | RGB => BGR => RGB | Y | No update |
| Forwards | Y | RGB => BGR => RGB | B | A.E.A update with 100th step |
| Backwards | R | RGB => BGR => RGB | Y | A.B.A update with 0th step, A.E.A update with initial value |
| Both | R | RGB => BGR => RGB | B | A.B.A update with 0th step, A.E.A update with 100th step |

Layout Callbacks during Animation
---------------------------------

doLayout callbacks are not guaranteed to be called in synchronization with steps configured in animation and may not get called in any determined fashion. It is suggested to unhook any layout events during the animations.

Flex Container and Child Widgets
--------------------------------

When dimensional and positional properties of the flex container are animated then all child widgets sharing percentage (%) relationship with the parent also gets animated.Percentage (%) Relationship between parent and child can be established by specifying one or positional, dimensional properties of the widgets in percentage (%) units.

Actual animation that child widget goes through depends on the property that is animated on the container and the property of the child widget that shares the percentage (%) relationship with the parent.

If there is no percentage (%) relationship between the parent and child then child will not go through any animation as parent gets animated.

Multiple Parallel Animations
----------------------------

Parallel animations on widgets that do not have any dependencies on other widgets (for example, widgets can share dependency through parent and child widgets with percentage % relationship or the widgets inside HORIZONTAL\_FLOW, VERTICAL\_FLOW share dependency on siblings) will work across platforms consistently without any issues.

*   Parallel animations on multiple widgets, that do not share any relationship, must not have any issues, and must work consistently.

*   Parallel animations on widgets, that share dependency, may lead to inconsistent results and should be avoided.

*   Parallel animations on the same widget, for example, calling animate method on the same widget, and then the first animation gets canceled due to the second animation.

*   Parallel animations cancellation may lead to undefined behavior and animation-fill-mode property may not work as expected.

> **_Note:_** Any implicit animations due to widget dependency are not treated as parallel animations.

Interactions on the Widget during Animation
-------------------------------------------

Interacting with the widget during animation may also lead to undefined behaviors. Behavior depends on underlying platform.

As a guideline, developers must avoid writing code that changes the widget properties if they are being animated.

> **_Note:_** For example, changing properties of the widget immediately after widget.animate() may lead to undefined behaviors. Ideally, any changes on the widget must happen after animation, in animationEnd() event.

</details>