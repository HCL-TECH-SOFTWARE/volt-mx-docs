                              


transform Object
================

Use the transform Object to attach 2D and 3D transformations to a widget.

Methods
-------

The transform Object provides the following methods.


<details close markdown="block"><summary>rotate</summary>

* * *

This method returns an affine transformation matrix constructed by rotating receivers affine transform. Angle is a number in degrees and always measured from x-axis as shown.

### Syntax

```

rotate(angle)
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| angle \[Number\] | A number represents the angle, in degrees, by which this matrix rotates the coordinate system axes. A positive value specifies counterclockwise rotation and a negative value specifies clockwise rotation. |

 
### Example

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

### Return Values

Returns an affine transformation matrix constructed by rotating receivers affine transform.

### Exceptions

WidgetError

### Remarks

Default value is 0, if transform was never applied to the widget. The rotation does not result in any layout changes to parent or peer widgets. This is also applicable for widgets placed inside horizontal or vertical flex containers.

For example, if you want to rotate a widget in 360 degrees, you can follow the below sequence of steps:

   *  step1: Rotate the widget from 0  -   120
   *  step1: Rotate the widget from 120  -   240
   * step3: Rotate the widget from 240  -  360

Any value greater than 180 degrees may lead to shortest path rotation from its current position. For cross platform values, for example 190 degrees will make the object rotate -170 (190-360) in negative direction, as 170 is shortest path compared to 190.

### Availability

*   iOS
*   Android/Android Tablet
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>rotate3D</summary>

* * *

This method rotates the widget by angle on the unit directional vector formed by rx, ry, and rz.

### Syntax

```

rotate3D(  
    angle,  
    rx,  
    ry,  
    rz)
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| angle | Specify the angle, by which a widget to be rotated around rx, ry, and rz axises. |
| rx | Specify the x-axis value on which rotation to happen. |
| ry | Specify the y-axis value on which rotation to happen. |
| rz | Specify the z-axis value on which rotation to happen. |

 
### Example

```

var newTransform = voltmx.ui.makeAffineTransform();  
newTransform.rotate3D(45, 1, 0, 1); //rotates by 45degrees in x and z Axis.  
widget.transform = newTransform;
```

### Exceptions

| Error Code | Description |
| --- | --- |
| 100 | Invalid input |
| 101 | Incomplete input |

 
### Remarks

The value of angle should be in degrees and the range should be in between 180o to -180o. Any value greater or lesser than range will result into platform-specific behavior. Positive values of angle will rotate the widget in anti-clockwise direction and vice versa.

The values of rx, ry, and rz should be in the range of 0 - 1. If the (0,0,0) vector is specified, the behavior is platform-specific.

In the Android platform, the values between 0 - 1 are not accepted. Only '0' or '1' is accepted.

All the input parameters need to be specified. If any parameter found missing will result in an exception 101.

### Availability

Available in the IDE

iOS

Android

SPA

* * *

</details>
<details close markdown="block"><summary>scale</summary>

* * *

This method returns an affine transformation matrix constructed by scaling receivers affine transform. It is a JSObject with keys sx and sy and allow numbers only.

### Syntax

```

scale (  
   sx,   
   sy)
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| sx \[Number\] | The factor by which to scale the x-axis of the widget coordinate system. |
| sy \[Number\] | The factor by which to scale the y-axis of the widget coordinate system. |

 
Default values are {"sx":1, "sy":1}, if the transform was never applied to the widget.

### Example

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

### Return Values

Returns an affine transformation matrix constructed by scaling receivers affine transform.

### Exceptions

WidgetError

### Remarks

Scaling does not result in any layout changes to parent or peer widgets. This is applicable to the widgets placed inside horizontal or vertical flex containers. Negative values for sx and sy will make the widget flip in that direction.

Availability

*   iOS
*   Android/Android Tablet
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>scale3D</summary>

* * *

Scales a widget in three dimensions (x, y, z) coordinate system.

### Syntax

```

scale3D(  
    sx,  
    sy,  
    sz)
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| sx \[Number\] | Specify the value to be scaled in the x direction. |
| sy \[Number\] | Specify the value to be scaled in the y direction. |
| sz \[Number\] | Specify the value to be scaled in the z direction. |

 
### Example

```

var newTransform = voltmx.ui.makeAffineTransform();  
newTransform.scale3D(2, 0.5, 1);  
//scales by 200% in xDirection, 50% in yDirection and no scale happening in zDirection.  
widget.transform = newTransform;
```

Exceptions

| Error Code | Description |
| --- | --- |
| 100 | Invalid input |
| 101 | Incomplete input |

 
### Remarks

The default values of the sx, sy, and sz directions are (1, 1, 1). Any value with in the 0 - 1 range scales down the widget and the value greater than '1' scales up in the specified directions. As all the widgets are not 3D meshes, this function may not be applicable for z-axis and may have platform-specific behavior. The scale3D method should not be applied on zero dimension widgets. If applied, the behavior is undefined.

All the input parameters need to be specified. If any parameter found missing will result in an exception 101.

### Availability

Available in the IDE

iOS

SPA

* * *

</details>
<details close markdown="block"><summary id="setPersp">setPerspective</summary>

* * *

This method sets the perspective and sets the vanishing point at the center of the widget.

### Syntax

```

setPerspective(  
    distanceOfViewerToPlane)
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| distanceOfViewerToPlane | The distance between the viewer and object. Always the value of this parameter should be greater than zero. Otherwise results an exception 100. |

 
### Example

```

var newTransform = voltmx.ui.makeAffineTransform();  
newTransform.setPerspective(1000.0);  
//Sets the perspective as such this will have no effect until it is combined with other transformation matrix.  
newTransform.rotate3D(45, 1, 0, 1);  
//rotates by 45degrees in x and z Axis. Now the perspective can be observed  
widget.transform = newTransform;
```

Exceptions

| Error Code | Description |
| --- | --- |
| 100 | Invalid input |
| 101 | Incomplete input |

 
### Remarks

The perspective has to be set in combination with other transforms. The perspective set by itself will not have any effect. If perspective is set to transform in any key frame, the perspective will be applied to that particular key frame itself in the KeyFrameAnimation.

The perspective is platform dependent so that each platform has different perspective of a view for same value. The default perspective on the Android platform is 1280. Any perspective less than 1280 makes the camera perspective closer to the view and greater than 1280 makes perspective far from the view.

In the Android platform, when perspective is not specified, the default perspective is applied.

For the iOS platform, the value of the distanceOfViewerToPlane parameter should be greater than max (width, height) values of the widget view's frame. For example, if the value of (width, height) is (100, 50), the parameter value should be greater than 100. The effect of this parameter vary visually on different platforms for the same value. The units of the distanceOfViewerToPlane parameter is platform-specific.

All the input parameters need to be specified. If any parameter found missing will result in an exception 101.

### Availability

Available in the IDE

iOS

SPA

* * *

</details>
<details close markdown="block"><summary>translate</summary>

* * *

This method returns an affine transformation matrix constructed by translating receivers affine transform. It is a JavaScript object with keys tx and ty and allow numbers in dp.

### Syntax

```

translate (  
   tx,  
   ty)
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| tx \[Number\] | The value by which to move the x-axis of the widget coordinate system. |
| ty \[Number\] | The factor by which to move the y-axis of the widget coordinate system. |

 
Default values are {"tx":0, "ty":0} if the transform was never applied to the widget.

### Example

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

### Return Values

Returns an affine transformation matrix constructed by translating receivers affine transform.

### Exceptions

WidgetError

### Remarks

Translate does not result in any layout changes to parent or peer widgets. This is applicable to the widgets placed inside horizontal or vertical flex containers.

> **_Note:_** Values cannot be specified using percentage and pixels.

### Availability

*   iOS
*   Android/Android Tablet
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>translate3D</summary> 

* * *

Translates the widget from present location to new location by x, y, z amount.

### Syntax

```

translate3D(  
    tx,  
    ty,  
    tz)
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| tx | Specify the value to be moved in the x direction from present location. |
| ty | Specify the value to be moved in the y direction from present location. |
| tz | Specify the value to be moved in the z direction from present location. |

 
### Example

```

var newTransform = voltmx.ui.makeAffineTransform();  
newTransform.translate3D(223, 12, 56); //translates by 223 xAxis,12 in yAxis,56 in zAxis  
widget.transform = newTransform;
```

### Exceptions

| Error Code | Description |
| --- | --- |
| 100 | Invalid input |
| 101 | Incomplete input |

 
### Remarks

The values of tx, ty, and tz should be floating numbers. If the [setPerspective](#setPersp) method is not used, the widget moving in the z direction will not have any visual effect.

All the input parameters need to be specified. If any parameter found missing will result in an exception 101.

### Availability

Available in the IDE

iOS

SPA

* * *

![](resources/prettify/onload.png)
