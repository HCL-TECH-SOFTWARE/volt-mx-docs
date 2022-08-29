                             


voltmx.ui.createAnimation Function
================================

The details of the voltmx.ui.createAnimation function, which is part of the [voltmx.ui Namespace](voltmx.ui_functions.md), are as follows.


<details close markdown="block"><summary>voltmx.ui.createAnimation Function</summary> 

* * *

Creates an object that defines an animation.

### Syntax

```

voltmx.ui.createAnimation(  
    animationDefinition);
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| animationDefinition | An object that defines the transformations to perform during the animation. |

 
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
animationDefObject = voltmx.ui.createAnimation(animationDef);	
```

### Return Values

Returns an instantiated `animation` object.

* * *
</details>
![](resources/prettify/onload.png)
