---
layout: "documentation"
category: "iris_api_dev_guide"
---
                             


voltmx.ui.createAnimation Function
================================

The details of the voltmx.ui.createAnimation function, which is part of the [voltmx.ui Namespace](voltmx.ui_functions.html), are as follows.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.ui.createAnimation Function](javascript:void(0);) 

* * *

Creates an object that defines an animation.

Syntax

voltmx.ui.createAnimation(  
    animationDefinition);

Input Parameters

| Parameter | Description |
| --- | --- |
| animationDefinition | An object that defines the transformations to perform during the animation. |

 

Example

{% highlight voltMx %}var transformObject = voltmx.ui.makeAffineTransform();
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
{% endhighlight %}

Return Values

Returns an instantiated `animation` object.

* * *

![](resources/prettify/onload.png)
