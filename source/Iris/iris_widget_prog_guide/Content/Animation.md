                               


Widget Animation Using Flex Forms
=================================

The widgets in Volt MX Iris helps you to implement animation for when placed in a container such as a FlexForm. To animate a widget means to move it, rotated it, and so forth. Your app can perform transformation, rotation, and scaling operations on widgets to move them, rotate them, or make them larger or smaller. Your app can perform both 2D and 3D animations. The 2D animations are supported on iOS, Android, Windows, and SPA platforms and the 3D animations are supported on iOS, SPA and Android.

The directions used for animations are as follows.

*   x-axis is towards the right of the widget
*   y-axis is towards bottom of the widget
*   z-axis is coming out of the screen

Animations take time for the user's device to perform. As a result, your app should not change a widget's properties immediately after initiating an animation. Because the animation may still be in progress, your app should wait to change the properties of widgets until after it is sure that the animation has completed.

To download a sample app to view the animations, click [here](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0083729).

Keyframe Animation
------------------

The most basic type of widget animation is called _keyframe animation_. Using keyframe animation, your all can specify specific transformations that happen at specific locations. For example, your all could specify that a Label widget moves +5 in the y direction, then move -6 in the x direction, and then rotate 90 degrees. Each of these three steps can be performed by specifying three key frames. In the case of this example, the Label widget "knows" how to fill in the intermediate step between each of the three key frames, if you give it the correct input.

When your app perform s keyframe animation, it must define the key frames to use in an animation definition object. The animation definition object is a JavaScript object that your app creates and passes to the voltmx.ui.createAnimation function. The sample code below illustrates how to create and use an animation definition object.

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

As the example shows, the animation definition object contains key-value pairs. The keys are integer percentages ranging from 0 to 100 inclusive. A key of 0 specifies the point at which 0% of the animation is complete. In other words, the 0 key is for the very start of the animation. Likewise, a key of 100 selects the point at which the animation is 100% completed, or the end of the animation sequence.

The values for each key in the animation definition objects are themselves JavaScript objects containing key-value pairs. For more information on the supported keys, see the documentation for the [voltmx.ui.createAnimation](../../../Iris/iris_api_dev_guide/content/voltmx.ui_functions_createanimation.md) function. In the example above, the keys used are "top" and "left", which specify the location of the top left corner of the widget being animated. The example shows the widget starting with its upper left corner at 0,0, relative to its container, at the start of the animation. By the time the animation finishes, the widget's upper left corner is located at 50,50. The widget's `animate` method uses these key frames and fills in everything in between.

After your app builds an animation definition object, it must create a animationConfiguration object. For more information on animation configuration, please see the `AnimationConfiguration` object documentation in the [API Developer's Guide](../../../Iris/iris_api_dev_guide/content/introduction.md).

```
function animConfig() {
    var config = {
        "duration": 1,
        "iterationCount": 1,
        "delay": 0,
        "fillMode": voltmx.anim.FILL_MODE_FORWARDS
    };
    return config;
}
```

Finally, your app calls the widget's `animate` method to perform the animation.

```
FormAnimation.widgetAnimation.animate(animDef, animConfig);
```

Affine Transform Animation
--------------------------

Your app performs affine transform animations by first calling the [voltmx.ui.makeAffineTransform](../../../Iris/iris_api_dev_guide/content/voltmx.ui_functions_makeaffinetransform.md) function to create a `transform` object. Your app then calls the [methods](../../../Iris/iris_api_dev_guide/content/transform_object_methods.md#methods) of the `transform` object, such as rotate, scale, and translate, to set transformations to be performed. Your app can set as many transformations on the `transform` object as it needs to. The example below illustrates how this is done.

```
// Creates a transformation object that can be used in an animation definition. 
var transformObject = voltmx.ui.makeAffineTransform();

// Add a translation and a scale.					
transformObject.translate(10, 0);
transformObject.scale(0.1, 1);
```

The `transform` object is then used inside of an animation definition, as shown in the following sample code.

```
// Create the animation definition.			
animationDef = {
    "100": {
        "transform": transformObject
    }
};
```

The animation definition is a JavaScript object containing key-value pairs. The keys specify the percentage of the completed animation. So 0 selects the start of the animation and 100 selects the end.

Animations require an animation configuration. For more information on animation configuration, please see the `AnimationConfiguration` object documentation in the [API Developer's Guide](../../../Iris/iris_api_dev_guide/content/introduction.md).

```
//Create the animation configuration.
animationConfig = {
    "duration": 0.3,
    "fillMode": voltmx.anim.FILL_MODE_FORWARDS
};
```

After creating the `transform` object, the animation definition, and the animation configuration, your app must call the [voltmx.ui.createAnimation](../../../Iris/iris_api_dev_guide/content/voltmx.ui_functions_createanimation.md) function to create an `animation` object. When it does, it must pass the animation definition, which contains the `transform` object, to the `voltmx.ui.createAnimation` function as a parameter, as the following code example shows.

```
// Creates an object that defines an animation.
animationDefObject = voltmx.ui.createAnimation(animationDef);
```

At this point, the `animation` object is created and has a specific set of transformations associated with it. Your app can use the `animation` object to animate any flexform-based widget. To do so, it calls the widget's `animate` method and passes the `animation` object in as a parameter. The code in the example below demonstrates this process.

```
FormAnimation.widgetAnimation.animate(animationDefObject, animationConfig);
```

Your app can combine key frame animation and affine transform animation in a sequence. For example, it could perform an affine transformation from 0% to 50%, followed by a simple key frame animation from 50% to 100%.

```
// Creates a transformation object that can be used in an animation definition. 
var transformObject = voltmx.ui.makeAffineTransform();

// Add a translation and a scale.					
transformObject.translate(10, 0);
transformObject.scale(0.1, 1);

// Create the animation definition.			
animationDef = {
    "0": {
        "top": "0dp",
        "left": "0dp"
    },
    "50": {
        "top": "50dp",
        "left": "50dp"
    }
    "100": {
        "transform": transformObject
    }
};
```

Other Animation Types
---------------------

In addition to animating positional properties, such as top and left, your app can perform other types of animation. For example, it can change the background color, gradient color (if a gradient skin is set), or shadow color over time. It can also alter the border color and corner radius to perform animations on those properties. The exact list of widget properties that can be animated is as follows.

*   backgroundColor
*   shadowColor
*   shadowRadius
*   shadowOffset
*   borderColor
*   borderWidth
*   cornerRadius

### backgroundColor Animation

To perform a gradient animation for backgroundColor, use the following code:

```
// Gradient animation
var animDefinition = {
    "0": {
        "backgroundColor": {
            "angle": 0,
            "colors": ["909ffa", "fff000", "eef004"],
            "colorStops": [0, 50, 90]
        }
    },
    "50": {
        "backgroundColor": {
            "angle": 45,
            "colors": ["ea5075", "f1fa70", "eefd04"],
            "colorStops": [0, 90, 100]
        }
    },
    "100": {
        "backgroundColor": {
            "angle": 0,
            "colors": ["00ff00", "ff0000", "000000"],
            "colorStops": [0, 10, 30]
        }
    }
};

animDef = voltmx.ui.createAnimation(animDefinition);

var config = {
    "duration": 3,
    "iterationCount": 2,
    "delay": 0,
    "fillMode": voltmx.anim.FILL_MODE_FORWARDS
};

widgetAnimation.animate(animDef, config, null);
```

Note that:

*   Gradient animation will only work if the widget has a gradient skin set before animation.
*   The total number of colorStops given in the animation definition must be equal to that of gradient skin which is already set to widget.
*   The number of colorStops and colors given in the animation definition must be same.
*   angle is in degrees and counter clock wise.
*   The minimum number of colors should be 3 in animation definition for gradient animation to work . If total colors added are less than 3 then behavior will vary based on platform.

#### Platform-specific limitations for gradient animations.

##### Windows

Gradient animations will not work on the following widgets:

*   SegPageView in segment widget
*   Tab widget
*   Form widget
*   DataGrid
*   Switch

Animations are not smooth as other platforms because of limitation of the Windows platform.

Shadow animations are not supported.

When borderWidth is applied to a container widget, subWidgets or Children may be clipped or overlapped depending on the layout type.

##### iOS:

Gradient animations will not work on the following widgets:

*   Form
*   Calendar
*   Slider
*   DataGrid
*   Segment With Page view
*   Tab Pane and Tab Widgets

##### Android:

Gradient animations will not work for the following widgets:

*   Form
*   DataGrid
*   Slider
*   Segment With Page view

Shadow animations are not supported.

### Corner radius animation

```
//Corner radius animation
function cornerRadius() {
    var animDefinition = {
        "0": {
            "cornerRadius": 20
        },
        "50": {
            "cornerRadius": 25
        },
        "100": {
            "cornerRadius": 10
        }
    };
    animDef = voltmx.ui.createAnimation(animDefinition);
    var config = {
        "duration": 3,
        "iterationCount": 2,
        "delay": 0,
        "fillMode": voltmx.anim.FILL_MODE_FORWARDS
    };
    FormAnimation.widgetAnimation.animate(animDef, config, null);
};
```

### Shadow color animation

Animating the shadow color would use code similar to the following example.

```
// Animating the shadow color.
widgetAnimation.animate(voltmx.ui.createAnimation({
    "100": {
        "stepConfig": {
            "timingFunction": voltmx.anim.EASE
        },
        "shadowColor": "ffeb3800"
    }
}), {
    "delay": 0,
    "iterationCount": 5,
    "fillMode": voltmx.anim.FILL_MODE_BACKWARDS,
    "duration": 1.5
}, {
    "animationEnd": animationCallbackFn
});
```

The following sample shows how to animate the shadow radius.

```
// Animating the shadow radius.
widgetAnimation.animate(voltmx.ui.createAnimation({
    "100": {
        "stepConfig": {
            "timingFunction": voltmx.anim.EASE
        },
        "shadowRadius": 3
    }
}), {
    "delay": 0,
    "iterationCount": 5,
    "fillMode": voltmx.anim.FILL_MODE_BACKWARDS,
    "duration": 1.5
}, {
    "animationEnd": animationCallbackFn
});
```

The next sample shows how to animate the shadow offset.

```
// Animating the shadow offset. 
widgetAnimation.animate(voltmx.ui.createAnimation({
    "100": {
        "stepConfig": {
            "timingFunction": voltmx.anim.EASE
        },
        "shadowOffset": {
            "x": 11,
            "y": -15
        }
    }
}), {
    "delay": 0,
    "iterationCount": 5,
    "fillMode": voltmx.anim.FILL_MODE_BACKWARDS,
    "duration": 1.5
}, {
    "animationEnd": animationCallbackFn
});
```

Parent/Child Widget Animations
------------------------------

If a parent widget is animated, it is typically desirable to animate the child widget that the parent contains. Recall that all widgets have positional properties that specify such things as the location of the widget's upper left corner. Your app can specify the values of these properties in a variety of unit types, such as dp, px, or percentages. If your app is going to animate a parent widget, it is strongly recommended that your app specify the values of location properties such `top`, `left`, `right`, and `bottom` for both the parent and the child in percentages. If it doesn't, the child widgets are not animated together with the parent.

More specifically, animations are not performed for parent and child properties that are not both specified in percentages. For example, if the parent's `left` property is specified in percentages and the child's isn't, the child's `left` property will not be animated because it won't change. Likewise, if the child's `left` property is specified in percentages and the parent's isn't, the child's left property isn't changed, so animations involving the `left` property are not done on the child widget.

Animations are Asynchronous
---------------------------

Animations occur asynchronously. When your app calls a widget's `animate` method, it returns immediately and continues executing program statements while the animation proceeds. So during the time animations are occurring, your app can produce undefined behavior if it allows users to interact with the widget or widgets being animated. It is wise to disable user input during widget animations.

Also, layout events cannot be guaranteed to occur synchronously with specific key frames. If the widget your app is animating has a `doLayout` callback, undefined behavior may result. It is wise for your app to disable layout events during animations.

Your app can initiate multiple animations that run in parallel by simply calling the `animate` method on multiple widgets one after the other. There are specific caveats, however. The widgets being animated at the same time cannot share a parent/child relationship. They must also not be siblings inside a HORIZONTAL\_FLOW or VERTICAL\_FLOW container.

Attempting to perform parallel animations on the same widget can cause undefined behavior, as can canceling an animation that is currently in progress.

To sequence the animations one after the other, animation events have to be used. You can start a new animation at the end of the existing animation using `animationEnd` event. For more information, see the documentation for the _animationCallbacks_ parameter of the `animate` method of the widget your app is animating.

Animation Limitations
---------------------

Following are the limitations applicable to iOS, Android, SPA, and Windows platforms using widget level animations:

*   Do not use negative values for width- and height-related parameters as they may cause undefined behavior on some platforms.
*   The dimensional properties specify the values that you set, but the layout engine will determine final frames and the animation happens between the final computed values.
*   When widgets overlap, the z-index, along with the order in which the widgets are added, determines the overlapping order.

*   Animation properties in the animation steps must not be skipped in the middle for cross platform consistent animations. For example, if a property is present in step 0, not present in step 50, and present again in step 100, it may lead to inconsistent results. However, if the property is present in step 0 and 50, but not present in step 100, it is perfectly fine.

*   Calling the `rotate`, `scale`, and `translate` methods multiple times will overwrite the previous values. For example, `rotate(45);` followed by `rotate(50)` is not equal to `rotate(105)`, instead, it will be `rotate(50)`.

*   If the `rotate`, `scale`, and `translate` methods are in a transform object, irrespective of the invocation order of operations, the `voltmx.ui.makeAffineTransform` function applies the transform in the following order:
    *   Scale
    *   Rotate
    *   Translate

*   Layout parameter animations:
    *   Properties in the animation definition are interpolated between steps for smooth animation. If a property is not present in the intermediate steps then the property is not carried forward but interpolated between steps where the property is present. This rule of interpolation is applicable iOS, SPA, and Windows platforms for all properties except for layout parameters.
    *   In iOS, SPA, and Windows platforms for every step, resultant frame is calculated from the layout properties mentioned for the step. If layout parameters are not mentioned for the step then layout parameters are carried forward from the previous steps.
    *   This essentially mean in case of iOS, SPA, and Windows platforms, if layout parameters are not mentioned at a given step or layout parameters are mentioned in such a way that it does not yield any frame changes compared to the previous step then there will not be any visible layout related animations occurring between the steps.
    *   Android platform follows property based animation where there is no carried forward of layout parameters. If a layout property is not mentioned in the intermediate steps, then the property is interpolated between the steps where ever the layout property is present.
*   Background color animation:
    *   The animation on the background color works only when the backgroundColor property is set before applying an animation definition.
    *   Initial value of backgroundColor has to be specified explicitly. If not, platform will not deduce the values from the existing skin and will lead to undefined behavior.
    *   For the background color animations to work, the skin configured for the widget should not have background type as multi step gradient or image. It has to be single color background.
*   In iOS and Android platforms, matrix multiplication is used between the steps to arrive at the resultant transformation animation. This means in the final effect you may not see the effects of individual transform operations such as scale, rotate, and transform.
*   In iOS and Android platforms, the animation effect applied to the widget during the steps would be a cumulative effect of all the transformations applied together. The cumulative effect would be similar to matrix multiplication applied as per the defined order.  
    For example, for any widget when 0-90 degrees rotate animation is applied along with scale and translate animations, the 0-90 degrees rotation of the widget is not seen individually because of the cumulative animation properties applied.  
    For any widget, when scale (0, 0) animation is applied along with combination of translate and rotate animations will result in matrix multiplication as ‘0’. In this case, the rotation is not seen initially because of the multiplication results in zero.
*   In Desktop and SPA platforms, height and width transformation animation is not supported on the Switch widget. Also, Min/Max Height/Width animations cannot be applied on the Switch widget.
*   When FlexContainer is added dynamically to Box, Form or Popup with layoutType as voltmx.flex.VBOX\_LAYOUT, the height of the FlexContainer is calculated based on parent's width (i.e. Box, Form, and Popup).  
    For example, if FlexContainer is added to Popup and its height is defined as 100 percent, then FlexContainer Height is calculated based on Popup width. In this case FlexContainer height will be 100% of Popup's width.
    
*   3D transformations will not result in any kind of layout changes after the animation is complete.
*   When both 3D and 2D transforms are used together, whichever is applied last will override the older transform.

### Animation Limitations Using Flex Layout

*   The animations on the CheckBox and PickerView width and height will not work.
*   It is recommended not to combine Width and height with other properties for animating widgets as it might lead to undefined results.
*   If the widget has mufti-colored focus or non-focus skin (gradients, multi-step gradients, Vertical split), then backgroundColor animations will not work.
*   In Horizontal/Vertical flow flex layout no two widgets can have explicit animations. They can be mutually exclusive. If they are explicitly called on all/multiple widgets, the behavior is undefined.
    *   For example, say there are two buttons button1 and button2 inside a flex layout container with layoutType as Horizontal flow.
    *   In this scenario, the user cannot call button1.animate(…) followed by button2.animate(…). You have to call animate API only on either button1 or button2. The rest of the widgets will get implicit animations.
*   If an animation duration is zero (0), then a flicker may appear.
*   If an animation has layout properties combined with non-layout properties, then a small flicker may appear before the animations.
*   Browser widget with non integer width or height values, may result in a black line appearing at the corners.
*   The keyframe animation is not supported for headers and footers.
*   3D animations are not supported for Header and Footer in the iOS platform.
*   For Switch Widget, height and width animations are not supported on iOS platform.
*   The Z-index of a row corresponds to the order in which the are added to a SegmentedUI widget. Therefore, rows that are added first will have a lower Z-index value than rows that your app adds later.
*   The section header is not treated as a row when performing row operations.
*   In the iOS platform, a final layout is done after the animations due to which some widgets content may get adjusted accordingly.

### Animation Limitations on iOS

*   For the AutoGrow Segment, animations will get applied even for the rows which are not in the visible area. This is applicable for all methods.
*   For the onRowDisplay method, VISIBLE animations will be called only when a row is brought to visible region due to the ADD/REMOVE operation on the Segment widget.
*   Calling the removeAt/removeSectionAt methods multiple times simultaneously, results unexpected behavior. Because of this, the onRowDisplay method may be called in inconsistent order.
*   Z-index is low for the row added earlier and high for the row added later during the animation.
*   to make the row reflect the change in the animation values, set the value as an object. For example:
    *   `data:{"lbl1":"label"}` – In this case, the animation values may not be reflected in the data.
        
    *   `data:{"lbl1:{"text":"label"}}` - In this case, the animation values reflect in the data.
        
    *   If no data is set, the animation values will not be reflected.
        
*   If the data is not in the object format, the animation will be applied but may not retain when the view is recreated. The views are recreated when the Segment is scrolled and during revisit of forms.
*   Row animation in forward mode will be retained only when the FlexContainer used for rowTemplate is set as an object while setting the data for segment, and also map the rowTemplateID in the widget data map.
*   setAnimations is not applicable for AutoGrow Segment.
*   Segment section headers are not considered as rows while applying onRowDisplay, getFirstVisibleRow, and getLastVisibleRow methods.

### Animation Limitations on Android

*   6.0 specific animation APIs are applicable only to flex widgets.
*   Animations will not be smooth if high resolution images are used as part of the skin or source to image widgets.
*   It is suggested to use 9 patch images (drawables) wherever images are being used. I.e. as part of skins or source to image widget.
*   Animations will not be smooth if there are a hierarchy of views.
*   For achieving best animations results, refer to the below link:
    
    [http://developer.Android.com/guide/topics/graphics/hardware-accel.html#tips](http://developer.android.com/guide/topics/graphics/hardware-accel.html#tips)
    
*   In the Android platform, you cannot apply both 2D and 3D transformations to the widgets simultaneously.
*   Only rotate3D transform is supported in the Android platform.
*   In the Android platform, when rotate transformation is applied on multiple axises simultaneously, the rotation happens on axises individually, but not on the combined unit directional vector.

*   For AutoGrow Segment, animations will get applied even for the rows which are not in the visible area. This is applicable for all methods.
*   Orientation change when an animation is playing would end the animation and operation immediately.
    
*   Animation and operations may end immediately if setting or calling any method, which leads to a complete refresh of Segment. For example, changing `widgetdatamap` while animation is playing cancels the animation.
    
*   To make the row reflect the change in the animation values, set the value as an object. For example:
    *   `data:{"lbl1":"label"}` – In this case, the animation values may not be reflected in the data.
        
    *   `data:{"lbl1:{"text":"label"}}` - In this case, the animation values reflect in the data.
        
    *   If no data is set, the animation values will not be reflected.
        
*   If the data is not in the object format, the animation will be applied but may not retain when the view is recreated. The views are recreated when the Segment is scrolled and during revisit of forms.
*   Row animation in forward mode will be retained only when the FlexContainer used for rowTemplate is set as an object while setting the data for segment, and also map the rowTemplateID in the widgetDataMap.
*   setAnimations is not applicable for AutoGrow Segment.

### Animation Limitations on Windows

*   % values for translate() in transform will not work. The Values passed as “100dp”, “100px”, “50%”, “90” will not work. The valid value will be like 90 etc.
*   Calling rotate(), scale() and translate() multiple times will overwrite the previous values but not club or sum. Ex: rotate(45); rotate(50) is not equal to rotate(105), instead, it will be rotate(50).
*   Skew effect observed in iOS and SPA will not happen for some animations (ex: scale in combination with rotate) in Windows.
*   If scale, rotate, and translate are in transform object, the sequence applied in Windows will be as follows irrespective of the order mentioned in transform.
    
    *   scale
    *   rotate
    *   translate
*   Animation results may not be matching with other platforms when 2 dimensional or 2 positional properties are mentioned in step configuration for one widget when the values are given in percentage. Same is the case when parent and child are animated.
*   Animation may start little slower in all windows channels when more steps are provided with more percentage values.
*   Slight flickering of child widgets may happen when a child has % relationship with parent container and parent container is animating.
*   Animation smoothness of any container depends on:
    
    *   Number of direct children
    *   Number of children with more levels of hierarchy
    *   Number of children with % relationship
    *   Images and their size.
*   On Windows, your app should use transformations for animations instead of animating layout properties (Positional and dimensional).

*   For AutoGrow Segment, animations will get applied even for the rows which are not in the visible area. This is applicable for all methods.
*   Animations will be applied to invisible rows (which are loaded into memory due to virtualization) also.
*   OnRowDisplay, SetAnimations, getFirstVisibleRow, and getLastVisiibleRow method may not be supported on Windows.
*   The animation methods of the SegmentUI widget is not supported on Windows.
*   To make the row reflect the change in the animation values, set the value as an object. For example:
    *   data:{"lbl1":"label"} – In this case, the animation values may not be reflected in the data.
    *   data:{"lbl1:{"text":"label"}} - In this case, the animation values reflect in the data.
    *   If no data is set, the animation values will not be reflected.
*   If the data is not in the object format, the animation will be applied but may not retain when the view is recreated. The views are recreated when the Segment is scrolled and during revisit of forms.
*   Row animation in forward mode will be retained only when the FlexContainer used for rowTemplate is set as an object while setting the data for segment, and also map the rowTemplateID in the widgetDataMap.
    

### Animation Limitations on SPA

*   Default unit for input values in translate() API is dp. Other units are not supported.
*   Animation may start little slower in all windows channels when more steps are provided with more percentage values.
*   Slight flickering of child widgets may happen when child has % relationship with parent container and parent container is animating.
*   Animation smoothness of any container depends on:
    
    *   Number of direct children
    *   Number of children with more levels of hierarchy
    *   Number of children with % relations ship
    *   Images and their size.
*   If the widget skin contain gradient/multi gradient/image background then single color animation is not happening in SPA IPhone and SPA windows.
*   In SPA windows, if opacity is changed from 1 to 0 in animation, at the end of animation, widget may blink and start the next iteration. This is native Internet Explorer limitation.
*   If we apply animation on widget which is already animating then it cancels the previous animation, but widget model may not get updated with the final step configuration, even if fill mode is forward/both.
    
*   In the middle of the animation if you do the browser back, animation end event will not fire and widget model not update based on the animation fill mode.
*   Animations on Image widget may not be accurate. It depend on image size, image load time.
*   Positional and Dimensional properties are frame based animations. Whereas transform, background, opacity are Definition based animations. These properties are not deduced from the widget.
*   For a Map widget, if you perform animation with width or height related properties, then map widget may not get the new or updated map from google.
*   when you apply animation with combination of Rotate and Scale with Ease-In time function, the widget would flicker in IE browser.
*   In SPA, when rotate animation is more than 180 degrees for all widgets, the direction may vary with different combinations of Scale and/or Translate values in IE browser.
*   In Mac computers, full-page animation on Safari browser may not be as smooth as Chrome browser and there may be some flickering effect.
    
*   In the SPA platform, the rotate3D animation may differ in IE(10/11) browser when compared to Chrome, Firefox, and Safari browsers for few scenarios & axis-combinations. Start and end frames remain same across all browsers but the rotate animation path differ for IE browsers. Few such cases are rotate3D(150, 0,1,0), rotate3D(150,1,1,1), and rotate3D(210,1,0,1).
    

*   For AutoGrow Segment, animations will get applied even for the rows which are not in the visible area. This is applicable for all methods.
*   Multiple, simultaneous innovations of the removeAt or removeSectionAt methods results in undefined behavior.
*   Animations are applied to all of the specified rows, even if the rows are not in the visible area whenever one of the following methods are called.
    *   addDataAt
        
    *   addAll
        
    *   addSectionAt
        
    *   removeAt
        
    *   removeAll
        
    *   removeSectionAt
        
    *   setDataAt
        
    *   setSectionAt
        
    *   SetData
        
*   To make the row reflect the change in the animation values, set the value as an object. For example:
    *   data:{"lbl1":"label"} – In this case, the animation values may not be reflected in the data.
    *   data:{"lbl1:{"text":"label"}} - In this case, the animation values reflect in the data.
    *   If no data is set, the animation values will not be reflected.
*   If the data is not in the object format, the animation will be applied but may not retain when the view is recreated. The views are recreated when the Segment is scrolled and during revisit of forms.
*   Row animation in forward mode will be retained only when the FlexContainer used for rowTemplate is set as an object while setting the data for segment, and also map the rowTemplateID in the widgetDataMap.
    
*   setAnimations is not applicable for AutoGrow Segment.

### Animation Limitations on Desktop Web

*   In Desktop Web platform, when rotate animation is more than 180 degrees for all widgets, the direction may vary with different combinations of Scale and/or Translate values in IE browser.

