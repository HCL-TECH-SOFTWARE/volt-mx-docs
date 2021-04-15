---
layout: "documentation"
category: "iris_widget_prog_guide"
---

SegmentedUI Objects
===================

The following objects are used with the SegmentedUI widget.

* * *

<details close markdown="block"><summary>animation Object</summary>

* * *

Contains the definition of an animation.

### Syntax

{% highlight VoltMx %}
animation={definition:defObject, config:{}, callbacks:{}}
{% endhighlight %}

### Members

_definition_

An object that specifics which operations (translate, rotate, or scale) are performed by the animation.

_config_

An animation configuration object that contains the duration and fill mode of the animation.

_callbacks_

Optional. One or more callback functions.

### Example

{% highlight VoltMx %}
var transfromObject = voltmx.ui.makeAffineTransform();
transfromObject.translate(10, 0);
transfromObject.scale(0.1, 1);
animationDef = {
    100: {
        "transform": transfromObject
    }
}
animationConfig = {
    duration: 0.3,
    fillMode: voltmx.anim.FILL_MODE_FORWARDS
}
animationDefObject = voltmx.ui.createAnimation(animationDef);
animation = {
    definition: animationDefObject,
    config: animationConfig
}
form.segments.addAt(data, sectionIndex, rowIndex, animation);
{% endhighlight %}

* * *

</details>
<details close markdown="block"><summary>animationConfiguration Object</summary> 

* * *

Contains the configuration specification of an animation.

### Syntax

{% highlight VoltMx %}
animationConfig={duration: <d>,fillMode: <f>}
{% endhighlight %}

### Members

_<d>_

A floating point number that specifies the time length of the animation.

_<f>_

A value from the set of voltmx.anim.FILL\_MODE\* that specifies the fill mode.

### Example

{% highlight VoltMx %}
animationConfig = {
	duration: 0.3,
	fillMode: voltmx.anim.FILL_MODE_FORWARDS
}

{% endhighlight %}

* * *

 </details>

<details close markdown="block"><summary>animationContext Object</summary> 

* * *

Specifies the section and row index of the animation.

### Syntax

{% highlight VoltMx %}
animationContext={sectionIndex=<s>,rowIndex = <r>}
{% endhighlight %}

### Members

_sectionIndex_

An integer value that specifies the section number.

_rowIndex_

An integer value that specifies the row number.

### Example

{% highlight VoltMx %}
contextDef1 = {
	sectionIndex=0,
	rowIndex = 1,
}

{% endhighlight %}

* * *

 </details>
 
<details close markdown="block"><summary>transformationObject Object</summary> 

* * *

Defines the transformations to be performed during the animation of a widget in a Segment row.

### Members

_translate(x,y)_

A method that sets the x and y values of the translation to be performed during the animation. When applied to a widget, the widget will be moved x in the horizontal direction and y in the vertical direction.

_scale(x,y)_

A method that sets the x and y values of the scale operation. When applied to the widget, the width of the widget will be scaled by x and the height will be scaled by y.

_rotate(angle)_

A method that sets the angle of rotation for the animation.

### Remarks

To create a transformationObject, call the voltmx.ui.makeAffineTransform function.

### Example

{% highlight VoltMx %}
var transformObject = voltmx.ui.makeAffineTransform();
transformObject.translate(10, -5);
transformObject.scale(0.5, 2.0);
transformObject.rotate(10);

{% endhighlight %}

* * *
</details>
