---
layout: "documentation"
category: "iris_widget_prog_guide"
---
                                

You are here: Creating a FlexContainer Using a Constructor: voltmx.ui.FlexContainer

FlexContainer Widget
====================

The FlexContainer widget is a container that can provide a unique UI/UX property to a collection of widgets. For example, consider a scenario where you have a Login form in your app. In this Login form, you can have a header, footer, and a body content containing the text boxes for entering the user ID and password. You can use three FlexContainers here: one for the header, a second one for the footer, and the third one for the body content with the text boxes. You can specify separate backgrounds, layouts, and other features to these containers.

Here are a few features of the FlexContainer widget:

**Layout:** You can specify the layout of a FlexContainer and its child widgets by using different positional properties. You can also specify if you want the widgets to be placed vertically, horizontally, or without any positional restrictions. These layout features help you to design a form and ascertain how it will look in a device.

**Skin:** FlexContainer helps you to define a background for your widgets. You can blur your container, provide a shadow effect to your FlexContainer, and even make the FlexContainer transparent.

**Templates and Components:** When you have a UI/UX design in an application that must be reused in multiple areas, you need to create it as a template or as a component. A FlexContainer is created by default for both templates and components.

**Animations:** You can make your FlexContainer move, rotate, and more by using the animation options. An example for this is the sliding menu/hamburger menu, which can be designed to slide from left to right or right to left as per your specification.

**Using it as an Overlay:** Another important feature of FlexContainer is that it can be used as an overlay to other forms. You can give it a higher z-index so that it appears as if it is on top of other widgets. This feature is very useful when you want to give a tour of your application or when you want to display a popup.

**Haptic Feedback:** If you want to enable Haptic feedback for a certain area in your form, you can make use of a FlexContainer in this scenario. This is useful when you want the user to get the haptic feedback for a group of widgets rather than one widget.

A FlexContainer widget allows you to arrange widgets in the orientation you specify. It can hold any number of widgets.

You can add the FlexContainer Widget only to the FlexForm. This widget will be available in the Widgets palette when the FlexForm is selected in the app canvas.

Widgets are normally added to your application using Volt MX Iris, but can also be added from code. For general information on using widgets in Volt MX Iris, see [Designing an Application]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Part_II_CreatingAnApplication.html) in the [Iris User Guide]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Iris_User_Guide.html).

For general information on the FlexContainer widget see the []({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Button.html)[FlexContainer]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Flex_Container.html) topic in the Volt MX Iris User Guide.

Components in Volt MX Iris provide ways of reusing code, and are based on special cases of the FlexContainer.

For a more hands-on approach on the functionality of FlexContainer widget, import and preview the **Pop-up using FlexContainer Feature** sample app by using Volt MX Iris.

[![](Resources/Images/Download_Button_10_230x35.png)](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0083869)

The FlexContainer widget capabilities can be broadly categorized into the following:

*   [Layout](#layout)
*   [Animations](#animations)
*   [Data Management](#data-management)
*   [3D Touch](#3d-touch)
*   [Gestures](#gestures)
*   [Life Cycle Events](#life-cycle-events)
*   [UI Appearance](#ui-appearance)
*   [Enabling RTL](#enabling-rtl)
*   [Miscellaneous](#miscellaneous)
*   [Common configurations to all widgets](#configurations-common-to-all-widgets)

#### Layout

  
| Events | Description |
| --- | --- |
| [doLayout](FlexContainer_Events.html#doLayout) | This event is invoked for every widget when the widget position and dimensions are computed. |

 

| Properties | Description |
| --- | --- |
| [anchorPoint](FlexContainer_Properties.html#anchorPo) | Specifies the anchor point of the widget bounds rectangle using the widget's coordinate space. |
| [bottom](FlexContainer_Properties.html#bottom) | Determines the bottom edge of the widget and is measured from the bottom bounds of the parent container. |
| [centerX](FlexContainer_Properties.html#centerX) | Determines the center of a widget measured from the left bounds of the parent container. |
| [centerY](FlexContainer_Properties.html#centerY) | Determines the center of a widget measured from the top bounds of the parent container. |
| [height](FlexContainer_Properties.html#height) | Determines the height of the widget and measured along the y-axis. |
| l[ayoutType](FlexContainer_Properties.html#layoutTy) | Specifies if the arrangement of the widgets either in free form or horizontal or vertical direction. |
| [left](FlexContainer_Properties.html#left) | Determines the lower left corner edge of the widget and is measured from the left bounds of the parent container. |
| [maxHeight](FlexContainer_Properties.html#maxHeigh) | Specifies the maximum height of the widget and is applicable only when the height property is not specified. |
| [maxWidth](FlexContainer_Properties.html#maxWidth) | Specifies the maximum width of the widget and is applicable only when the width property is not specified. |
| [minHeight](FlexContainer_Properties.html#minHeigh) | Specifies the minimum height of the widget and is applicable only when the height property is not specified. |
| [minWidth](FlexContainer_Properties.html#minWidth) | Specifies the minimum width of the widget and is applicable only when the width property is not specified. |
| [responsiveConfig](FlexContainer_Properties.html#responsiveConfig) | Determines the various width and space between FlexContainer widgets for different breakpoints. |
| [reverseLayoutDirection](FlexContainer_Properties.html#reverselayoutdirection) | Decides the stacking direction of a FlexContainer's child widgets. |
| [right](FlexContainer_Properties.html#right) | Determines the lower right corner of the widget and is measured from the right bounds of the parent container. |
| [top](FlexContainer_Properties.html#top) | Determines the top edge of the widget and measured from the top bounds of the parent container. |
| [width](FlexContainer_Properties.html#width) | Determines the width of the widget and is measured along the x-axis. |
| [zIndex](FlexContainer_Properties.html#zIndex) | Specifies the stack order of a widget. |

 

| Methods | Description |
| --- | --- |
| [forceLayout](FlexContainer_Methods.html#forceLay) | When this method is called, underlying OS layout cycle is forced to layout the widgets of the FlexContainer. |

 

#### Animations

| Methods | Description |
| --- | --- |
| [animate](FlexContainer_Methods.html#animate) | Applies an animation to the widget. |

 

| Properties | Description |
| --- | --- |
| [transform](FlexContainer_Properties.html#transfor) | Contains an animation transformation that can be used to animate the widget. |
| [widgetSwipeMove](FlexContainer_Properties.html#widgetSwipeMove) | Used to enable and configure the left or right swipe actions for a widget. |

 

#### Data Management

| Methods | Description |
| --- | --- |
| [add](FlexContainer_Methods.html#add) | Used to add widgets to the FlexContainer. |
| [addAt](FlexContainer_Methods.html#addAt) | Used to add widgets to the FlexContainer at the specified index. |
| [clone](FlexContainer_Methods.html#clone) | When this method is used on a container widget, then all the widgets inside the container are cloned. |
| [remove](FlexContainer_Methods.html#form.get2) | Removes a widget from the form container. |
| [removeAt](FlexContainer_Methods.html#removeAt) | Removes a widget at the given index from the Form container. |
| [removeAll](FlexContainer_Methods.html#removeAl) | Removes all the widget on the container. |

| Events | Description |
| --- | --- |
| [addWidgets](FlexContainer_Events.html#addWidge) | An event callback invoked by the platform when the FlexContianer or FlexScrollContianer widget is accessed for the first time after its construction. |

#### 3D Touch

| Methods | Description |
| --- | --- |
| [registerForPeekandPop](FlexContainer_Methods.html#register) | Registers a widget to enable 3D Touch peek and pop gestures. |
| [setOnPeek](FlexContainer_Methods.html#setOnPek) | Sets and overrides the existing onPeekCallback for the widget. |
| [setOnPop](FlexContainer_Methods.html#setOnPop) | Overrides the existing onPopCallback for the widget. |
| [unregisterForPeekandPop](FlexContainer_Methods.html#unregist) | Unregisters a widget from 3D Touch peek and pop gestures. |

#### Gestures

| Events | Description |
| --- | --- |
| [onClick](FlexContainer_Events.html#onClick) | A callback event is invoked by the platform when the user performs a click action on the FlexContainer widget. |
| [onHover](FlexContainer_Events.html#onHover) | An event callback is invoked by the platform when the mouse enters into, moves within, or leaves from the widget region. |
| [onScrollWidgetPosition](FlexContainer_Events.html#onScrollWidgetPosition) | This event callback is invoked by the platform when the widget location position gets changed on scrolling. |
| [onTouchEnd](FlexContainer_Events.html#onTouchEnd) | An event callback is invoked by the platform when the user touch is released from the touch surface. |
| [onTouchMove](FlexContainer_Events.html#onTouchEnd) | An event callback is invoked by the platform when the touch moves on the touch surface continuously until movement ends. |
| [onTouchStart](FlexContainer_Events.html#onTouchStart) | An event callback is invoked by the platform when the user touches the touch surface. |

 

| Methods | Description |
| --- | --- |
| [addGestureRecognizer](FlexContainer_Methods.html#addGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |
| [removeGestureRecognizer](FlexContainer_Methods.html#removeGestureRecognizer) | Allows you to remove the specified gesture recognizer for the specified widget. |
| [setGestureRecognizer](FlexContainer_Methods.html#setGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |

 

#### Life cycle Events

| Events | Description |
| --- | --- |
| [init](FlexContainer_Events.html#init) | Invoked only once in widgets life cycle that is when the FlexContainer or FlexScrollContainer is ready with its widget hierarchy. |

#### UI Appearance

| Properties | Description |
| --- | --- |
| [backgroundColor](FlexContainer_Properties.html#backgrou) | Specifies the background color of the widget in hex format. |
| [backgroundColorMultiStepGradient](FlexContainer_Properties.html#backgroundColorMultiStepGradient) | Specifies the multi-step gradient color for the background of the widget. |
| [backgroundColorTwoStepGradient](FlexContainer_Properties.html#backgroundColorTwoStepGradient) | Specifies the two-step gradient color for the background of the widget. |
| [backgroundImage](FlexContainer_Properties.html#backgroundImage) | Sets the image for the background of the widget. |
| [borderColor](FlexContainer_Properties.html#borderColor) | Specifies the border color of the widget. |
| [borderColorGradient](FlexContainer_Properties.html#borderColorGradient) | Specifies the multi-step gradient color for the border of the widget. |
| [borderStyle](FlexContainer_Properties.html#borderStyle) | Specifies the border style for the widget. |
| [borderWidth](FlexContainer_Properties.html#borderWidth) | Specifies the width of the border for the widget in pixels. |
| [cornerRadius](FlexContainer_Properties.html#cornerRadius) | Specifies the radius of the border for the widget. |
| [disabledStateSkinProperties](FlexContainer_Properties.html#disabledStateSkinProperties) | Specifies the skin properties that define the look and feel of the widget, when the widget is disabled or blocked. |
| [focusStateSkinProperties](FlexContainer_Properties.html#focusStateSkinProperties) | Specifies the skin properties that define the look and feel of the widget, when the widget is in focus. |
| [fontColor](FlexContainer_Properties.html#fontColor) | Specifies the font color of the widget. |
| [fontFamily](FlexContainer_Properties.html#fontFamily) | Specifies the font family for the font of the widget. |
| [fontSize](FlexContainer_Properties.html#fontSize) | Specifies the font size for the widget in percentage (%) units. |
| [fontStyle](FlexContainer_Properties.html#fontStyle) | Specifies the font style for the widget. |
| [fontWeight](FlexContainer_Properties.html#fontWeight) | Specifies the weight for the font of the widget. |
| [hoverStateSkinProperties](FlexContainer_Properties.html#hoverStateSkinProperties) | Specifies the skin properties that define the look and feel of the widget, when the cursor hovers on the widget. |
| [pressedStateSkinProperties](FlexContainer_Properties.html#pressedStateSkinProperties) | Specifies the skin properties that define the look and feel of the widget, when the widget is pressed or clicked. |
| [shadowColor](FlexContainer_Properties.html#shadowColor) | Specifies the color for the shadow of the widget. |
| [shadowOffset](FlexContainer_Properties.html#shadowOffset) | This property specifies the current coordinates of the shadow region in the widget. |
| [shadowRadius](FlexContainer_Properties.html#shadowRadius) | Specifies the radius for the blur value of the shadow. |
| [textShadowColor](FlexContainer_Properties.html#textShadowColor) | Specifies the color for the text shadow of the widget. |
| [textShadowOffset](FlexContainer_Properties.html#textShadowOffset) | This property specifies the current coordinates of the text shadow region in the widget. |
| [textShadowRadius](FlexContainer_Properties.html#textShadowRadius) | Specifies the radius for the blur value of the text shadow. |
| [clipBounds](FlexContainer_Properties.html#clipBoun) | Specifies whether to clip the child widgets when they go out of boundaries. |
| [clipView](FlexContainer_Properties.html#clipView) | Defines a shape to clip the widget view. |
| [frame](FlexContainer_Properties.html#frame) | Reflects the calculated flex layout properties derived at application runtime. |
| [opacity](FlexContainer_Properties.html#opacity) | Specifies the opacity of the widget. |
| [rippleBackground](FlexContainer_Properties.html#rippleBackground) | Defines the ripple background for a FlexContainer Widget. |
| [shadowDepth](FlexContainer_Properties.html#shadowDepth) | Defines the depth of the shadow effect applied to the FlexContainer Widget. |
| [shadowType](FlexContainer_Properties.html#shadowType) | Sets a type of the shadow effect to apply to the FlexContainer Widget. |

#### Enabling RTL

| Properties | Description |
| --- | --- |
| [retainContentAlignment](FlexContainer_Properties.html#retainContentAlignment) | Helps to retain the content alignment of the widget while applying RTL. |
| [retainFlexPositionProperties](FlexContainer_Properties.html#retainFlexPositionProperties) | Helps to retain the left, right and padding properties while applying RTL. |
| [retainFlowHorizontalAlignment](FlexContainer_Properties.html#retainFlowHorizontalAlignment) | Enables you to change the horizontal flow of the widget from left to right. |

#### Miscellaneous

| Methods | Description |
| --- | --- |
| [getBadge](FlexContainer_Methods.html#getBadge) | Enables you to read the badge value (if any) attached to the specified widget. |
| [setBadge](FlexContainer_Methods.html#setBadge) | Enables you to set the badge value to the given widget at the upper, right corner of the widget. |
| [setDefaultUnit](FlexContainer_Methods.html#setDefau) | Specifies the default unit to be used for interpretation of numbers with no qualifiers when passed to layout properties. |
| [widgets](FlexContainer_Methods.html#widgets) | Returns an array of the widget references which are direct children of the FlexContainer. |

| Properties | Description |
| --- | --- |
| [autogrowMode (Deprecated)](FlexContainer_Properties.html#autogrow) | Enables you to grow the height of the FlexContainer when child widgets or content is added on the FlexContainer. |
| [a11yNavigationMode](FlexContainer_Properties.html#a11yNavigationMode) | Helps to specify the type of navigation order that should be used in the FlexContainer. |
| [cursorType](FlexContainer_Properties.html#cursorType) | Specifies the type of the mouse pointer used. |
| [enableHapticFeedback](FlexContainer_Properties.html#enableHapticFeedback) | Allows you to enable or disable haptic feedback on the FlexContainer widget. |
| [isMaster](FlexContainer_Properties.html#isMaster) | Specifies whether the container is a master container. |
| [isModalContainer](FlexContainer_Properties.html#isModalContainer) | When you use the FlexContainer as a popup, this property helps to prevent user interaction beyond the edges of the FlexContainer. |

#### Configurations common to all widgets

| Methods | Description |
| --- | --- |
| [blur](FlexContainer_Properties.html#blur) | Enables you to make the widget look unfocused. |
| [convertPointFromWidget](FlexContainer_Methods.html#convertPointFromWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [convertPointToWidget](FlexContainer_Methods.html#convertPointToWidget) | Allows you to convert the coordinate system from a point (receiver's coordinate system) to a widget. |
| [removeFromParent](FlexContainer_Methods.html#removeFromParent) | Allows you to remove a child widget from a parent widget. |
| [setEnabled](FlexContainer_Methods.html#setEnabled) | Specifies the widget that must be enabled or disabled. |
| [setFocus](FlexContainer_Methods.html#setFocus) | Specifies the widget on which there must be focus. |
| [setVisibility](FlexContainer_Methods.html#setVisibility) | Use this method to set the visibility of the widget. |

| Properties | Description |
| --- | --- |
| [accessibilityConfig](FlexContainer_Properties.html#accessibilityConfig) | Enables you to control accessibility behavior and alternative text for the widget. |
| [enable](FlexContainer_Properties.html#enable) | Allows you to make a widget visible but not actionable. |
| [enableCache](FlexContainer_Properties.html#enableCa) | Enables you to improve the performance of Positional Dimension Animations. |
| [id](FlexContainer_Properties.html#id) | id is a unique identifier of FlexContainer consisting of alpha numeric characters. |
| [info](FlexContainer_Properties.html#info) | A custom JSObject with the key value pairs that a developer can use to store the context with the widget. |
| [isVisible](FlexContainer_Properties.html#isVisibl) | Controls the visibility of a widget on the FlexContainer. |
| [parent](FlexContainer_Properties.html#parent) | Helps you access the parent of the widget. |

FlexContainer Widget Basics
---------------------------

### Creating a FlexContainer Using a Constructor: voltmx.ui.FlexContainer

{% highlight voltMx %}
var myFlex = new voltmx.ui.FlexContainer(basicConf, layoutConf, pspConf);
{% endhighlight %}

*   **basicConf** is an object with configuration properties.
*   **layoutConf** is an object with layout specific configuration properties.
*   **pspConf** is an object with platform specific configuration properties.

> **_Note:_** An empty constructor leads to all defaults values. Optionally all writable properties can be passed as a dictionary to the constructor.

Example

{% highlight voltMx %}//Defining properties for FlexContainer
function testfrm_flexContainer1_onTouchStart_seq0(eventobject, x, y) {
    //Write your logic here.
};

function testfrm_flexContainer1_onTouchEnd_seq0(eventobject, x, y) {
    //Write your logic here.
};

function testfrm_flexContainer1_onTouchMove_seq0(eventobject, x, y) {
    //Write your logic here.
};

function addWidgetstestfrm() {
    var flexContainer1 = new voltmx.ui.FlexContainer({
        "id": "flexContainer1",
        "top": "19dp",
        "left": "43dp",
        "width": "304dp",
        "height": "251dp",
        "zIndex": 1,
        "isVisible": true,
        "onTouchStart": testfrm_flexcontainer1_onTouchStart_seq0,
        "onTouchEnd": testfrm_flexcontainer1_onTouchEnd_seq0,
        "onTouchMove": testfrm_flexcontainer1_onTouchMove_seq0 "clipBounds": true,
        "layoutType": voltmx.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;

    flexContainer1.setDefaultUnit(voltmx.flex.DP)
    flexContainer1.add();
    testfrm.add(flexContainer1);
};
{% endhighlight %}

### Flex Layout Properties

The below image represents the flex layout properties:

![](Resources/Images/layouttype.png)

