                             


AnimationConfiguration Object
=============================

The `AnimationConfiguration` object is a JavaScript object that your app builds to perform animations on [widgets](../../../Iris/iris_widget_prog_guide/Content/Animation.md#widget-level-animation-using-flex-forms). The `AnimationConfiguration` object contains key-value pairs. The following keys are supported.


<details close markdown="block"><summary>delay</summary>

* * *

This key defines when the animation will start. It allows an animation to start executing after it is applied. This is specified in seconds and fractional values are allowed.

A delay value of zero (0) means the animation will execute as soon as it is applied. Otherwise, the value specifies an offset from the moment the animation is applied, and the animation will delay execution by that offset. The default value is zero and any negative or invalid values will default this property to zero.

This is used for the overall widget animation configuration and not the step-level configuration.

* * *

</details>
<details close markdown="block"><summary>direction</summary>

* * *

This key defines whether the animation must play in reverse on some or all cycles. If an animation is played in reverse, the timing functions are also reversed. For example, when played in reverse an ease-in animation would appear to be an ease-out animation.

Following are the possible predefined values:

*   voltmx.anim.DIRECTION\_NONE (default)

All iterations of the animation are played as specified.

*   voltmx.anim.DIRECTION\_ALTERNATE

The animation cycle iterations that have odd counts are played in the normal direction, and the animation cycle iterations that are even counts are played in a reverse direction.

This is used for the overall widget animation configuration and not the step-level configuration.

Values will be specified as a string containing one of the above values. Any other values will be ignored and the default is applied or the behavior is undefined, depending on the underlying hardware implementation.

* * *

</details>
<details close markdown="block"><summary>duration</summary>

* * *

This key defines the time in seconds that an animation takes to complete one cycle. This is used for the overall widget animation configuration and not the step-level configuration.

Possible values include all the positive float numbers with a precision of three and the default value is zero, which indicates that the animation is instantaneous. However, there will not be visible animation changes for a value of zero. However, technically the animation occurs and all animation callbacks get triggered.

Negative values will be treated as zero or may lead to undefined behavior.

* * *

</details>
<details close markdown="block"><summary>fillMode</summary>

* * *

This key defines what values are applied to the widget state by the animation outside the time it is executing. The value for this key is a member of the [Animation Fill Mode Constants](voltmx.anim_constants.md#AnimationFillMode).

* * *

</details>
<details close markdown="block"><summary>iterationCount</summary>

* * *

This key specifies the number of times an animation cycle is played. Default value is one (1), meaning the animation will play from beginning to end. A value of zero (0) will cause the animation to repeat forever until the view is live in the current hierarchy.

Possible values include all the positive integer numbers. Any invalid values such as negative values are ignored or may lead to undefined behavior.

* * *

</details>
<details close markdown="block"><summary>Common Example</summary>

* * *

```
var animDef = {
    "delay": 0.01,
    "iterationCount": "2",
    "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
    "duration": 0.25,
    "direction": voltmx.anim.DIRECTION_ALTERNATE
};
```

* * *
</details>

![](resources/prettify/onload.png)
