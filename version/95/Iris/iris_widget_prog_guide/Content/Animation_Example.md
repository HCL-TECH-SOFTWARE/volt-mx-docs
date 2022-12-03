                               


Animation - Example and Sample App
==================================

Below is an example that shows a simple animation:

```
function animation() {
    frm1.widget1.animate(getAnimationObject(),
        animConfig(), {
            "animationStart": function() {
                //Write Code Here
            },
            "animationEnd": endCallBack
        }
    );
}

function getAnimationObject() {
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
    return animDef;
}

function animConfig() {
    var config = {
        "duration": 10,
        "iterationCount": 1,
        "delay": 2,
        "direction": voltmx.anim.DIRECTION_NONE,
        "fillMode": voltmx.anim.FILL_MODE_NONE
    };
    return config;
}

function endCallBack() {
    //Write Code Here
}
```
