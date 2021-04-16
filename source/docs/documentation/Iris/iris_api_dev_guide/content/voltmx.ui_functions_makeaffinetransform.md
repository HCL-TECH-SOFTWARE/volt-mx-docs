---
layout: "documentation"
category: "iris_api_dev_guide"
---
                             


voltmx.ui.makeAffineTransform Function
====================================

The details of the voltmx.ui.makeAffineTransform function, which is part of the [voltmx.ui Namespace](voltmx.ui_functions.html), are as follows.


<details close markdown="block"><summary>voltmx.ui.makeAffineTransform</summary> 

* * *

Creates a transformation object that can be used in an animation definition.

### Syntax

{% highlight VoltMx %}
voltmx.ui.makeAffineTransform()
{% endhighlight %}

### Example

{% highlight VoltMx %}
/******************************************************************
 *	Name    : createAnimation
 *	Author  : Volt MX
 *	Purpose : To call makeAffineTransform API and createAnimation API on widgets.
 *******************************************************************/
function animation() {

    // Creates a transformation object that can be used in an animation definition. 
    var transformObject = voltmx.ui.makeAffineTransform();

    // Add a translation and a scale.					
    transformObject.translate(10, 0);
    transformObject.scale(0.1, 1);

    // Create the animation definition.			
    animationDef = {
        100: {
            "transform": transformObject
        }
    };

    //Create the animation configuration.
    animationConfig = {
        duration: 0.3,
        fillMode: voltmx.anim.FILL_MODE_FORWARDS
    };

    // Creates an object that defines an animation.
    animationDefObject = voltmx.ui.createAnimation(animationDef);
    Form0bf93c59bdc404d.Button00aaa01360b0349.animate(animationDefObject, animationConfig);

}
{% endhighlight %}

### Input Parameters

None.

### Return Vales

An object that can be used to specify a transformation.

* * *

</details>

