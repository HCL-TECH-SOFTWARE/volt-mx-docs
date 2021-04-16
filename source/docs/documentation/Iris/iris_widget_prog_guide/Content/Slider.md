---
layout: "documentation"
category: "iris_widget_prog_guide"
---
                               

You are here: Creating a Slider

Slider Widget
=============

A Slider widget allows you to select a _value_ from a defined range of values by moving the thumb (an indicator) in a horizontal direction. The Slider widget consists of a seekbar (or track), and a thumb (a control that you can slide). You can optionally choose to display a minimum value and a maximum value. When you drag the thumb along the slider, the value or process is updated continuously, and is displayed on the track (you must define an event to achieve this behavior).

A Slider widget allows you to select a value from a range of values by moving the thumb (an indicator) in a horizontal direction.

Following are real-time use cases of slider widget:

*   **Volume and brightness controls:** Slider is mainly used in controlling volume and brightness in devices.
    
*   **Price Range:** You can select the price range using a slider in a shopping application.
    
*   **Adjusting zoom levels:** Slider widget can be used to adjust the zoom levels of a document, map etc.
    
*   **Media Player:** Slider widget can also be used as a seek bar in Media player related applications. It can be used to track the progress of the song being played.
    

Widgets are normally added to your application using Volt MX Iris, but can also be added from code. For general information on using widgets in Volt MX Iris, see [Designing an Application]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Part_II_CreatingAnApplication.html) in the [Iris User Guide]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Introduction.html).

For general information on the Slider widget see the []({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Button.html)[Slider]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Slider.html) topic in the Volt MX Iris User Guide.

The Slider widget capabilities can be broadly categorized into the following:

*   [Layout](#layout)
*   [Data Management](#data-management)
*   [Animations](#animations)
*   [3D Touch](#3d-touch)
*   [User Input Handling](#user-input-handling)
*   [UI Appearance](#ui-appearance)
*   [Enabling RTL](#enabling-rtl)
*   [Miscellaneous](#miscellaneous)
*   [Configurations Common To All Widgets](#configurations-common-to-all-widgets)

#### Layout

  
| Events | Description |
| --- | --- |
| [doLayout](Slider_Events.html#doLayout) | Invoked for every widget when the widget position and dimensions are computed. |

 

| Properties | Description |
| --- | --- |
| [anchorPoint](Slider_Properties.html#anchorPo) | Specifies the anchor point of the widget bounds rectangle using the widget's coordinate space. |
| [bottom](Slider_Properties.html#bottom) | Determines the bottom edge of the widget and is measured from the bottom bounds of the parent container. |
| [centerX](Slider_Properties.html#centerX) | Determines the center of a widget measured from the left bounds of the parent container. |
| [centerY](Slider_Properties.html#centerY) | Determines the center of a widget measured from the top bounds of the parent container. |
| [height](Slider_Properties.html#height) | Determines the height of the widget and measured along the y-axis. |
| [left](Slider_Properties.html#left) | Determines the lower left corner edge of the widget and is measured from the left bounds of the parent container. |
| [maxHeight](Slider_Properties.html#maxHeigh) | Specifies the maximum height of the widget and is applicable only when the height property is not specified. |
| [maxWidth](Slider_Properties.html#maxWidth) | Specifies the maximum width of the widget and is applicable only when the width property is not specified. |
| [minHeight](Slider_Properties.html#minHeigh) | Specifies the minimum height of the widget and is applicable only when the height property is not specified. |
| [minWidth](Slider_Properties.html#minWidth) | Specifies the minimum width of the widget and is applicable only when the width property is not specified. |
| [padding](Slider_Properties.html#padding) | Defines the space between the content of the widget and the widget boundaries. |
| [paddingInPixel](Slider_Properties.html#paddingInPixel) | Indicates if the padding is to be applied in pixels or in percentage. |
| [right](Slider_Properties.html#right) | Determines the lower right corner of the widget and is measured from the right bounds of the parent container. |
| [thickness](Slider_Properties.html#thickne) | Specifies the thickness of the seekbar. |
| [top](Slider_Properties.html#top) | Determines the top edge of the widget and measured from the top bounds of the parent container. |
| [width](Slider_Properties.html#width) | Determines the width of the widget and is measured along the x-axis. |
| [zIndex](Slider_Properties.html#zIndex) | Specifies the stack order of a widget. |

  

#### Animations

| Methods | Description |
| --- | --- |
| [animate](Slider_Method.html#animate) | Applies an animation to the widget. |

 

| Properties | Description |
| --- | --- |
| [transform](Slider_Properties.html#transfor) | Contains an animation transformation that can be used to animate the widget. |
| [widgetSwipeMove](Slider_Properties.html#widgetSwipeMove) | Used to enable and configure the left or right swipe actions for a widget. |

 

#### Data Management

| Methods | Description |
| --- | --- |
| [clone](Slider_Method.html#clone) | When this method is used on a container widget, then all the widgets inside the container are cloned. |

 

| Properties | Description |
| --- | --- |
| [enableCache](Slider_Properties.html#enableCa) | Enables you to improve the performance of Positional Dimension Animations. |

#### 3D Touch

| Methods | Description |
| --- | --- |
| [registerForPeekandPop](Slider_Method.html#register) | Registers a widget to enable 3D Touch peek and pop gestures. |
| [setOnPeek](Slider_Method.html#setOnPek) | Sets and overrides the existing onPeekCallback for the widget. |
| [setOnPop](Slider_Method.html#setOnPop) | Overrides the existing onPopCallback for the widget. |
| [unregisterForPeekandPop](Slider_Method.html#unregist) | Unregisters a widget from 3D Touch peek and pop gestures. |

#### User Input Handling

| Events | Description |
| --- | --- |
| [onScrollWidgetPosition](Slider_Events.html#onScrollWidgetPosition) | Invoked by the platform when the widget location position gets changed on scrolling. |
| [onSelection](Slider_Events.html#onSelect) | Invoked by the platform when the user makes a selection. |
| [onSlide](Slider_Events.html#onSlide) | Invoked by the platform when there is a change in the default selected value. |
| [onTouchEnd](Slider_Events.html#onTouchEnd) | Invoked by the platform when the user touch is released from the touch surface. |
| [onTouchMove](Slider_Events.html#onTouchMove) | Invoked by the platform when the touch moves on the touch surface continuously until movement ends. |
| [onTouchStart](Slider_Events.html#onTouchStart) | Invoked by the platform when the user touches the touch surface. |

 

| Methods | Description |
| --- | --- |
| [removeGestureRecognizer](Slider_Method.html#removeGestureRecognizer) | Allows you to remove the specified gesture recognizer for the specified widget. |
| [setGestureRecognizer](Slider_Method.html#setGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |

#### UI Appearance

| Properties | Description |
| --- | --- |
| [enableThumbTintColor](Slider_Properties.html#enableTh) | Enables you to configure thumbTintColor property. |
| [focusThumbImage](Slider_Properties.html#focusThumbImage) | Specifies the image to indicate that there is focus on the thumb. |
| [leftSkin](Slider_Properties.html#leftSkin) | Determines the lower left corner edge of the widget and is measured from the left bounds of the parent container. |
| [maxLabelSkin](Slider_Properties.html#maxLabel) | Specifies the text or number to be displayed for the maximum value of the slider. |
| [minLabelSkin](Slider_Properties.html#minLabel) | Specifies the text or number to be displayed for the minimum value of the slider. |
| [orientation](Slider_Properties.html#orientat) | Specifies the orientation of the slider widget. |
| [rightSkin](Slider_Properties.html#rightSkin) | Skin to be applied to the background of the slider on right side of the thumb image. |
| [thickness](Slider_Properties.html#thickne) | Specifies the thickness of the seekbar. |
| [thumbHeight](Slider_Properties.html#thumbHeight) | Specifies the height of the thumb for the Slider Widget. |
| [thumbImage](Slider_Properties.html#thumbImage) | Specifies the image to indicate the thumb. |
| [thumbOffset](Slider_Properties.html#thumbOffset) | If the thumb image is a valid drawable (not null), by default, half of its width is used as the new thumb offset. |
| [thumbTintColor](Slider_Properties.html#thumbTin) | Specifies the color for thumb tint. |
| [thumbWidth](Slider_Properties.html#thumbWidth) | Specifies the width of the thumb for the Slider Widget. |
| [viewType](Slider_Properties.html#viewType) | Specifies the view type of the Slider widget. |

#### Enabling RTL

| Properties | Description |
| --- | --- |
| [retainContentAlignment](Slider_Properties.html#retainContentAlignment) | Helps to retain the content alignment of the widget while applying RTL. |
| [retainFlexPositionProperties](Slider_Properties.html#retainFlexPositionProperties) | Helps to retain the left, right and padding properties while applying RTL. |
| [retainFlowHorizontalAlignment](Slider_Properties.html#retainFlowHorizontalAlignment) | Enables you to change the horizontal flow of the widget from left to right. |

#### Miscellaneous

| Methods | Description |
| --- | --- |
| [getBadge](Slider_Method.html#getBadge) | Enables you to read the badge value (if any) attached to the specified widget. |
| [setBadge](Slider_Method.html#setBadge) | Enables you to set the badge value to the given widget at the upper, right corner of the widget. |

| Properties | Description |
| --- | --- |
| [cursorType](Slider_Properties.html#cursorType) | Specifies the type of the mouse pointer used. |
| [selectedValue](Slider_Properties.html#selectedValue) | Specifies the value that must be displayed as selected when rendered. |
| [step](Slider_Properties.html#step) | Specifies the value by which the slider is increased or decreased between the allowed slider values. |

#### Configurations Common To All Widgets

| Methods | Description |
| --- | --- |
| [convertPointFromWidget](Slider_Method.html#convertPointFromWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [convertPointToWidget](Slider_Method.html#convertPointToWidget) | Allows you to convert the coordinate system from a point (receiver's coordinate system) to a widget. |
| [removeFromParent](Slider_Method.html#removeFromParent) | Allows you to remove a child widget from a parent widget. |
| [setEnabled](Slider_Method.html#setEnabled) | Specifies the widget that must be enabled or disabled. |
| [setFocus](Slider_Method.html#setFocus) | Specifies the widget on which there must be focus. |
| [setVisibility](Slider_Method.html#setVisibility) | Use this method to set the visibility of the widget. |

| Properties | Description |
| --- | --- |
| [accessibilityConfig](Slider_Properties.html#accessibilityConfig) | Enables you to control accessibility behavior and alternative text for the widget. |
| [enable](Slider_Properties.html#enable) | Allows you to make a widget visible but not actionable. |
| [id](Slider_Properties.html#id) | A unique identifier of Slider consisting of alpha numeric characters. |
| [info](Slider_Properties.html#info) | A custom JSObject with the key value pairs that a developer can use to store the context with the widget. |
| [isVisible](Slider_Properties.html#isVisibl) | Controls the visibility of a widget on the form. |
| [parent](Slider_Properties.html#parent) | Helps you access the parent of the widget. |

Slider Widget Basics
--------------------

### Creating a Slider Using a Constructor: voltmx.ui.Slider

{% highlight voltMx %}
var slider = new voltmx.ui.Slider(basicConf, layoutConf, pspConf);
{% endhighlight %}

*   **basicConf** is an object with basic properties.
*   **layoutConf** is an object with layout properties.
*   **pspConf** is an object with platform specific properties.

> **_Note:_** The configuration properties should be passed only in the respective configuration objects otherwise they are ignored

Example

{% highlight voltMx %}//The following function is the callback function for onSelectCallback event
function onSelectCallBck(slider) {
    /*Write your logic here */
}

//Defining the properties for Slider with "onSelectCallback" event 
var sliderBasic = {
    id: "slider",
    info: {
        key: "SLIDER"
    },
    min: 0,
    max: 100,
    step: 1,
    isVisible: true,
    leftSkin: "lKin",
    rightSkin: "rSkin",
    thumbImage: "thumb.png",
    focusThumbImage: "fThumb.png",
    selectedValue: 50,
    onSelection: onSelectCallBck
}
var sliderLayout = {
    margin: [5, 5, 5, 5],
    marginInPixel: true,
    widgetAlignment: constants.WIDGET_ALIGN_CENTER,
    containerWeight: 99
};

var sliderPSP = {};

//Creating the Slider.
var slider = new voltmx.ui.Slider(sliderBasic, sliderLayout, sliderPSP);

//Reading onSelectCallback event of the Slider.
alert("Slider onSelectCallback is ::" + slider.onSelectCallback);
{% endhighlight %}

### Customizing Appearance

You can customize the appearance of the Slider widget using the following platform specific properties:

*   leftSkin: Specifies the skin to be applied to the background of the slider on left side of the thumb image of the seekbar.
*   rightSkin: Specifies the skin to be applied to the background of the slider on right side of the thumb image of the seekbar.
*   minLabel: Specifies the text or number to be displayed for the minimum value of the slider.
*   maxLabel: Specifies the text or number to be displayed for the maximum value of the slider.
*   thickness: Specifies the thickness of the seekbar.
*   minLabelSkin: Specifies the skin for the _minLabel_ property of the slider.
*   maxLabelSkin: Specifies the skin for the _maxLabel_ property of the slider.

### Important Considerations

*   **All platforms (except iPhone)**: The slider widget does not display the minimum and maximum values unless the minLabel and maxLabel are specified.
*   **iPhone:** You cannot display the minimum and maximum values. You can use the minValueImage and the maxValueImage to indicate the values.

