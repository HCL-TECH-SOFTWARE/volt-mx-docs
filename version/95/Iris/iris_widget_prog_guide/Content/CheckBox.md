                                

You are here: Creating a CheckBox Using a Constructor: voltmx.ui.CheckBoxGroup

CheckBoxGroup Widget
====================

The CheckBoxGroup widget allows you to make one or more selections from a group of check boxes. If you select a check box, a check mark appears inside the check box to indicate the selection.

Few real-time scenarios using the CheckBoxGroup widget are as follows:

*   **Examinations:** Checkboxes are widely used in tests that consist of multiple-choice questions. Students can select a single option or multiple options.
    
*   **Remember password:** You can use a checkbox for a binary yes or no choice. For instance, consider a login page, you are given a choice to select the remember me? option. You can select the checkbox if you want the browser to remember your password.
    
*   **Terms of service agreement:** The terms of service agreement while installing an application, employs a checkbox. The user must select the terms of agreement to proceed with installing the application.
    
*   **Configure settings:** Configuring various settings in a device like selecting or deselecting airplane mode or auto-rotate.
    
*   **Provide feedback:** CheckboxGroup widget is useful when you provide feedback on the services received. You can select an appropriate checkbox from the range of options provided. Options could be good, average, and bad.
    
*   **Filters:** Checkboxes are used in applying filters. For instance, in a social network app, users can choose the subjects of their choice such as nature, technology, health, etc. Then the feed of the user can be customized as per their interests.
    
*   **Coupons:** Applying coupons in shopping websites employ checkboxes.
    

Widgets are normally added to your application using Volt MX Iris, but can also be added from code. For general information on using widgets in Volt MX Iris, see [Designing an Application](../../../Iris/iris_user_guide/Content/Part_II_CreatingAnApplication.md) in the [Iris User Guide](../../../Iris/iris_user_guide/Content/Introduction.md).

For general information on the CheckBoxGroup widget see the [](../../../Iris/iris_user_guide/Content/Button.md)[CheckBoxGroup](../../../Iris/iris_user_guide/Content/CheckBoxGroup.md) topic in the Volt MX Iris User Guide.

The CheckBoxGroup widget capabilities can be broadly categorized into the following:

*   [Layout](#layout)
*   [UI Appearance](#ui-appearance)
*   [Animations](#animations)
*   [Data Management](#data-management)
*   [State Configurations](#state-configurations)
*   [3D Touch](#3d-touch)
*   [User Input Handling](#user-input-handling)
*   [Enabling RTL](#enabling-rtl)
*   [Miscellaneous](#miscellaneous)
*   [Configurations common to all widgets](#configurations-common-to-all-widgets)

 

#### Layout

| Events | Description |
| --- | --- |
| [doLayout](CheckBox_Events.md#doLayout) | Invoked for every widget when the widget position and dimensions are computed. |

 

| Properties | Description |
| --- | --- |
| [anchorPoint](CheckBox_Properties.md#anchorPo) | Specifies the anchor point of the widget bounds rectangle using the widget's coordinate space. |
| [bottom](CheckBox_Properties.md#bottom) | Determines the bottom edge of the widget and is measured from the bottom bounds of the parent container. |
| [centerX](CheckBox_Properties.md#centerX) | Determines the center of a widget measured from the left bounds of the parent container. |
| [centerY](CheckBox_Properties.md#centerY) | Determines the center of a widget measured from the top bounds of the parent container. |
| [height](CheckBox_Properties.md#height) | Determines the height of the widget and measured along the y-axis. |
| [left](CheckBox_Properties.md#left) | Determines the lower left corner edge of the widget and is measured from the left bounds of the parent container. |
| [maxHeight](CheckBox_Properties.md#maxHeigh) | Specifies the maximum height of the widget and is applicable only when the height property is not specified. |
| [maxWidth](CheckBox_Properties.md#maxWidth) | Specifies the maximum width of the widget and is applicable only when the width property is not specified. |
| [minHeight](CheckBox_Properties.md#minHeigh) | Specifies the minimum height of the widget and is applicable only when the height property is not specified. |
| [minWidth](CheckBox_Properties.md#minWidth) | Specifies the minimum width of the widget and is applicable only when the width property is not specified. |
| [padding](CheckBox_Properties.md#padding) | Defines the space between the content of the widget and the widget boundaries. |
| [paddingInPixel](CheckBox_Properties.md#paddingInPixel) | Indicates if the padding is to be applied in pixels or in percentage. |
| [right](CheckBox_Properties.md#right) | Determines the lower right corner of the widget and is measured from the right bounds of the parent container. |
| [top](CheckBox_Properties.md#top) | Determines the top edge of the widget and measured from the top bounds of the parent container. |
| [width](CheckBox_Properties.md#width) | Determines the width of the widget and is measured along the x-axis. |
| [zIndex](CheckBox_Properties.md#zIndex) | Specifies the stack order of a widget. |

 

#### UI Appearance

| Properties | Description |
| --- | --- |
| [backgroundColor](CheckBox_Properties.md#backgrou) | Specifies the background color of the widget in hex format. |
| [backgroundColorMultiStepGradient](CheckBox_Properties.md#backgroundColorMultiStepGradient) | Specifies the multi-step gradient color for the background of the widget. |
| [backgroundColorTwoStepGradient](CheckBox_Properties.md#backgroundColorTwoStepGradient) | Specifies the two-step gradient color for the background of the widget. |
| [backgroundImage](CheckBox_Properties.md#backgroundImage) | Sets the image for the background of the widget. |
| [borderColor](CheckBox_Properties.md#borderColor) | Specifies the border color of the widget. |
| [borderColorGradient](CheckBox_Properties.md#borderColorGradient) | Specifies the multi-step gradient color for the border of the widget. |
| [borderStyle](CheckBox_Properties.md#borderStyle) | Specifies the border style for the widget. |
| [borderWidth](CheckBox_Properties.md#borderWidth) | Specifies the width of the border for the widget in pixels. |
| [cornerRadius](CheckBox_Properties.md#cornerRadius) | Specifies the radius of the border for the widget. |
| [disabledStateSkinProperties](CheckBox_Properties.md#disabledStateSkinProperties) | Specifies the skin properties that define the look and feel of the widget, when the widget is disabled or blocked. |
| [focusStateSkinProperties](CheckBox_Properties.md#focusStateSkinProperties) | Specifies the skin properties that define the look and feel of the widget, when the widget is in focus. |
| [fontColor](CheckBox_Properties.md#fontColor) | Specifies the font color of the widget. |
| [fontFamily](CheckBox_Properties.md#fontFamily) | Specifies the font family for the font of the widget. |
| [fontSize](CheckBox_Properties.md#fontSize) | Specifies the font size for the widget in percentage (%) units. |
| [fontStyle](CheckBox_Properties.md#fontStyle) | Specifies the font style for the widget. |
| [fontWeight](CheckBox_Properties.md#fontWeight) | Specifies the weight for the font of the widget. |
| [hoverStateSkinProperties](CheckBox_Properties.md#hoverStateSkinProperties) | Specifies the skin properties that define the look and feel of the widget, when the cursor hovers on the widget. |
| [pressedStateSkinProperties](CheckBox_Properties.md#pressedStateSkinProperties) | Specifies the skin properties that define the look and feel of the widget, when the widget is pressed or clicked. |
| [shadowColor](CheckBox_Properties.md#shadowColor) | Specifies the color for the shadow of the widget. |
| [shadowOffset](CheckBox_Properties.md#shadowOffset) | This property specifies the current coordinates of the shadow region in the widget. |
| [shadowRadius](CheckBox_Properties.md#shadowRadius) | Specifies the radius for the blur value of the shadow. |
| [textShadowColor](CheckBox_Properties.md#textShadowColor) | Specifies the color for the text shadow of the widget. |
| [textShadowOffset](CheckBox_Properties.md#textShadowOffset) | This property specifies the current coordinates of the text shadow region in the widget. |
| [textShadowRadius](CheckBox_Properties.md#textShadowRadius) | Specifies the radius for the blur value of the text shadow. |
| [blur](CheckBox_Properties.md#blur) | You can enable or disable a blur-effect for a widget |
| [focusSkin](CheckBox_Properties.md#focusSki) | Specifies the look and feel of the CheckBox when in focus. |
| [hoverSkin](CheckBox_Properties.md#hoverSki) | Specifies the look and feel of a widget when the cursor hovers on the widget. |
| [itemOrientation](CheckBox_Properties.md#itemOrientation) | Specifies the arrangement of items inside the CheckBoxGroup widget. |
| [opacity](CheckBox_Properties.md#opacity) | Specifies the opacity of the widget. |
| [skin](CheckBox_Properties.md#skin) | Specifies the look and feel of the CheckBox when not in focus. |
| [shadowDepth](CheckBox_Properties.md#shadowDepth) | Defines the depth of the shadow effect applied to the CheckBoxGroup Widget. |
| [shadowType](CheckBox_Properties.md#shadowType) | Sets a type of the shadow effect to apply to the CheckBoxGroup Widget. |
| [wheelBackgroundColor](CheckBox_Properties.md#wheelBac) | Specifies the background color for the wheel that is displayed when you click the CheckBox. |

 

#### Animations

| Methods | Description |
| --- | --- |
| [animate](CheckBox_Method.md#animate) | Applies an animation to the widget. |

 

| Properties | Description |
| --- | --- |
| [transform](CheckBox_Properties.md#transfor) | Contains an animation transformation that can be used to animate the widget. |
| [widgetSwipeMove](CheckBox_Properties.md#widgetSwipeMove) | Used to enable and configure the left or right swipe actions for a widget. |

#### Data Management

| Methods | Description |
| --- | --- |
| [clone](CheckBox_Method.md#clone) | When this method is used on a container widget, then all the widgets inside the container are cloned. |

 

| Properties | Description |
| --- | --- |
| [masterData](CheckBox_Properties.md#masterDa) | Specifies the set of values that must be displayed for the user to make a selection from the available choices. |
| [masterDataMap](CheckBox_Properties.md#masterDa2) | Specifies the set of values from which you can make one or more selections. |

 

#### State Configurations

| Properties | Description |
| --- | --- |
| [focusTickedImage](CheckBox_Properties.md#focusTic) | Specifies the image to be displayed when you make a selection on non-touch devices. |
| [focusUnTickedImage](CheckBox_Properties.md#focusUnT) | Specifies the image to be displayed when you clear a selection on non-touch devices. |
| [selectedKeys](CheckBox_Properties.md#selected) | If you create a CheckBox with multiple values, you can choose to show specific values as selected when the CheckBox is rendered. |
| [selectedKeyValues](CheckBox_Properties.md#selected2) | Returns the array of selected key-value pairs. |
| [tickedImage](CheckBox_Properties.md#tickedIm) | Specifies the image to be displayed when you make a selection. |
| [unTickedImage](CheckBox_Properties.md#unTicked) | Specifies the image to be displayed when a selection is cleared. |

 

| Events | Description |
| --- | --- |
| [onSelection](CheckBox_Events.md#onSelect) | Invoked by the platform when an item is selected or deselected. |

 

#### 3D Touch

| Methods | Description |
| --- | --- |
| [registerForPeekandPop](CheckBox_Method.md#register) | Registers a widget to enable 3D Touch peek and pop gestures. |
| [setOnPeek](CheckBox_Method.md#setOnPek) | Sets and overrides the existing onPeekCallback for the widget. |
| [setOnPop](CheckBox_Method.md#setOnPop) | Overrides the existing onPopCallback for the widget. |
| [unregisterForPeekandPop](CheckBox_Method.md#unregist) | Unregisters a widget from 3D Touch peek and pop gestures. |

 

#### User Input Handling

| Events | Description |
| --- | --- |
| [onScrollWidgetPosition](CheckBox_Events.md#onScrollWidgetPosition) | Invoked by the platform when the widget location position gets changed on scrolling. |
| [onTouchEnd](CheckBox_Events.md#onTouchEnd) | Invoked by the platform when the user touch is released from the touch surface. |
| [onTouchMove](CheckBox_Events.md#onTouchMove) | Invoked by the platform when the touch moves on the touch surface continuously until movement ends. |
| [onTouchStart](CheckBox_Events.md#onTouchStart) | Invoked by the platform when the user touches the touch surface. |

 

| Methods | Description |
| --- | --- |
| [removeGestureRecognizer](CheckBox_Method.md#removeGestureRecognizer) | Allows you to remove the specified gesture recognizer for the specified widget. |
| [setGestureRecognizer](CheckBox_Method.md#setGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |

 

#### Enabling RTL

| Properties | Description |
| --- | --- |
| [retainContentAlignment](CheckBox_Properties.md#retainContentAlignment) | Helps to retain the content alignment of the widget while applying RTL. |
| [retainFlexPositionProperties](CheckBox_Properties.md#retainFlexPositionProperties) | Helps to retain the left, right and padding properties while applying RTL. |
| [retainFlowHorizontalAlignment](CheckBox_Properties.md#retainFlowHorizontalAlignment) | Enables you to change the horizontal flow of the widget from left to right. |

#### Miscellaneous

| Properties | Description |
| --- | --- |
| [cursorType](CheckBox_Properties.md#cursorType) | Specifies the type of the mouse pointer used. |
| [groupCells](CheckBox_Properties.md#groupCel) | Specifies if the group cells style must be applied. |
| [toolTip](CheckBox_Properties.md#toolTip) | Specifies the hint text when the cursor hovers over a widget, without clicking it. |
| [viewType](CheckBox_Properties.md#viewType) | Specifies the view type of the CheckBox. |

 

| Methods | Description |
| --- | --- |
| [getBadge](CheckBox_Method.md#getBadge) | Enables you to read the badge value (if any) attached to the specified widget. |
| [setBadge](CheckBox_Method.md#setBadge) | Enables you to set the badge value to the given widget at the upper, right corner of the widget. |

 

#### Configurations common to all widgets

| Properties | Description |
| --- | --- |
| [accessibilityConfig](CheckBox_Properties.md#accessibilityConfig) | Enables you to control accessibility behavior and alternative text for the widget. |
| [blur](CheckBox_Properties.md#blur) | Enables you to make the widget look unfocused. |
| [enable](CheckBox_Properties.md#enable) | Allows you to make a widget visible but not actionable. |
| [enableCache](CheckBox_Properties.md#enableCa) | Enables you to improve the performance of Positional Dimension Animations. |
| [id](CheckBox_Properties.md#id) | id is a unique identifier of CheckBox consisting of alpha numeric characters. |
| [info](CheckBox_Properties.md#info) | A custom JSObject with the key value pairs that a developer can use to store the context with the widget. |
| [isVisible](CheckBox_Properties.md#isVisibl) | Controls the visibility of a widget on the form. |
| [parent](CheckBox_Properties.md#parent) | Helps you access the parent of the widget. |

 

| Methods | Description |
| --- | --- |
| [convertPointFromWidget](CheckBox_Method.md#convertPointFromWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [convertPointToWidget](CheckBox_Method.md#convertPointToWidget) | Using the convertPointToWidget method, you can modify the co-ordinate system. |
| [removeFromParent](CheckBox_Method.md#removeFromParent) | Allows you to remove a child widget from a parent widget. |
| [setEnabled](CheckBox_Method.md#setEnabled) | Specifies the widget that must be enabled or disabled. |
| [setFocus](CheckBox_Method.md#setFocus) | Specifies the widget on which there must be focus. |
| [setVisibility](CheckBox_Method.md#setVisibility) | Use this method to set the visibility of the widget. |

 

| Events | Description |
| --- | --- |
| [postOnclickJS](CheckBox_Events.md#postonclickjs) | Allows the developer to execute custom javascript function after the onSelection callback of the CheckBox is invoked. |
| [preOnclickJS](CheckBox_Events.md#preonclickjs) | Allows the developer to execute custom javascript function before the onSelection callback of the CheckBox is invoked. |

CheckBox Widget Basics
----------------------

> **_Note:_** To provide only a single selection option to the user, use a [ComboBox](ComboBox.md) widget or a [RadioButtonGroup](RadioButtonGroup.md) widget.

### Creating a CheckBox Using a Constructor: voltmx.ui.CheckBoxGroup

```

var checkBox = new voltmx.ui.CheckBoxGroup(basicConf, layoutConf, pspConf);
```

*   **basicConf** is an object with basic properties.
*   **layoutConf** is an object with layout properties.
*   **pspConf** is an object with platform specific properties.

> **_Note:_** The configuration properties should be passed only in the respective configuration objects otherwise they are ignored.

Example

```
/*Defining the properties for CheckBox with focusSkin:"chkFocusSkin", 
skin should be created with the same name through IDE or code.*/
var chkBasic = {
    id: "checkBox",
    isVisible: true,
    skin: "chkSkin",
    focusSkin: "chkFocusSkin"
};

var chkLayout = {
    containerWeight: 100
};

//Creating the CheckBox.
var checkBox = new voltmx.ui.CheckBoxGroup(chkBasic, chkLayout, {});

//Reading the focusSkin of CheckBox
alert("CheckBox focusSkin is ::" + checkBox.focusSkin);
```

### Customizing Appearance

You can customize the appearance of the CheckBoxGroup widget using the following properties:

*   widgetAlignment: Specifies the alignment of the widget.
*   margin: Defines the space around a widget.
*   padding: Defines the space between the content of the widget and the widget boundaries.
*   [skin](CheckBox_Properties.md#skin): Used to specify the skin.
*   [focusSkin](CheckBox_Properties.md#focusSki): Used to specify the focus skin.

### Important Considerations

The following are the important considerations for the CheckBoxGroup widget.

All Platforms

> *   CheckBoxGroup widget is always a group widget.
> *   Limit the number of choices in the widget. If you need to display several choices (above 15 choices), consider using a [ListBox](ListBox.md) widget.

iPhone

> *   You cannot apply skins in the _on-off_ switch view.
> *   When the viewType is set as CHECKBOX\_VIEW\_TYPE\_ONSCREENWHEEL, the skin supports only backgroundcolor and style as one color.
> *   Multistep Gradient is not supported when groupCells property is set to true.

