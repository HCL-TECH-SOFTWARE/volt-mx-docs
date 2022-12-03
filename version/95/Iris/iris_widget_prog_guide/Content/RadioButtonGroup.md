                               

You are here: Creating a RadioButtonGroup Using a Constructor: voltmx.ui.RadioButtonGroup

RadioButtonGroup Widget
=======================

A RadioButtonGroup widget allows you to make one selection when you have many choices. When you make a selection, a dot appears in the radio button to indicate your selection.

All the properties of the CheckBoxGroup widget apply to RadioButtonGroup widget. However, you can make only one option in case of radio buttons while you can select multiple options in checkboxes.

Following are the real-time use cases of RadioButtonGroup widget:

*   **Examinations:** Radio buttons are used in tests that consist of multiple-choice questions. Students choose one of the available options as their answer.
    
*   **Remember password:** You can use a RadioButton widget for a binary yes or no choice. For instance, consider a login page, you are given a choice to select the remember me? option. You can select the RadioButton widgetif you want the browser to remember your password.
    
*   **Terms of service agreement:** The terms of service agreement while installing an application, employs a RadioButton widget. The user must select the terms of agreement to proceed with installing the application.
    
*   **Modify UI:** Modify the UI based on the selection of an option from the list. For instance, while configuring an identity service, the type of provider details and the UI is changed is based on the type of identity selected.
    
*   **Creating profile:** You can use radio buttons for selecting gender while creating your profile in an application.
    
*   **Coupons:** coupons in food and shopping applications use radio buttons as well.
    

Widgets are normally added to your application using Volt MX Iris, but can also be added from code. For general information on using widgets in Volt MX Iris, see [Designing an Application](../../../Iris/iris_user_guide/Content/Part_II_CreatingAnApplication.md) in the [Iris User Guide](../../../Iris/iris_user_guide/Content/Introduction.md).

For general information on the RadioButtonGroup widget see the [](../../../Iris/iris_user_guide/Content/Button.md)[RadioButtonGroup](../../../Iris/iris_user_guide/Content/RadioButtonGroup.md) topic in the Volt MX Iris User Guide.

The RadioButtonGroup widget capabilities can be broadly categorized into the following:

*   [Layout](#layout)
*   [Animations](#animations)
*   [Data Management](#data-management)
*   [3D Touch](#3d-touch)
*   [User Input Handling](#user-input-handling)
*   [UI Appearance](#ui-appearance)
*   [Enabling RTL](#enabling-rtl)
*   [Miscellaneous](#miscellaneous)
*   [Confiurations Common To All Widgets](#configurations-common-to-all-widgets)

#### Layout

  
| Events | Description |
| --- | --- |
| [doLayout](RadioButton_Events.md#doLayout) | Invoked for every widget when the widget position and dimensions are computed. |

 

| Properties | Description |
| --- | --- |
| [anchorPoint](RadioButton_Properties.md#anchorPo) | Specifies the anchor point of the widget bounds rectangle using the widget's coordinate space. |
| [bottom](RadioButton_Properties.md#bottom) | Determines the bottom edge of the widget and is measured from the bottom bounds of the parent container. |
| [centerX](RadioButton_Properties.md#centerX) | Determines the center of a widget measured from the left bounds of the parent container. |
| [centerY](RadioButton_Properties.md#centerY) | Determines the center of a widget measured from the top bounds of the parent container. |
| [height](RadioButton_Properties.md#height) | Determines the height of the widget and measured along the y-axis. |
| [left](RadioButton_Properties.md#left) | Determines the lower left corner edge of the widget and is measured from the left bounds of the parent container. |
| [maxHeight](RadioButton_Properties.md#maxHeigh) | Specifies the maximum height of the widget and is applicable only when the height property is not specified. |
| [maxWidth](RadioButton_Properties.md#maxWidth) | Specifies the maximum width of the widget and is applicable only when the width property is not specified. |
| [minHeight](RadioButton_Properties.md#minHeigh) | Specifies the minimum height of the widget and is applicable only when the height property is not specified. |
| [minWidth](RadioButton_Properties.md#minWidth) | Specifies the minimum width of the widget and is applicable only when the width property is not specified. |
| [padding](RadioButton_Properties.md#padding) | Defines the space between the content of the widget and the widget boundaries. |
| [paddingInPixel](RadioButton_Properties.md#paddingInPixel) | Indicates if the padding is to be applied in pixels or in percentage. |
| [right](RadioButton_Properties.md#right) | Determines the lower right corner of the widget and is measured from the right bounds of the parent container. |
| [top](RadioButton_Properties.md#top) | Determines the top edge of the widget and measured from the top bounds of the parent container. |
| [zIndex](RadioButton_Properties.md#zIndex) | Specifies the stack order of a widget. |

  

#### Animations

| Methods | Description |
| --- | --- |
| [animate](RadioButton_Method.md#animate) | Applies an animation to the widget. |

 

| Properties | Description |
| --- | --- |
| [transform](RadioButton_Properties.md#transfor) | Contains an animation transformation that can be used to animate the widget. |
| [widgetSwipeMove](RadioButton_Properties.md#widgetSwipeMove) | Used to enable and configure the left or right swipe actions for a widget. |

 

#### Data Management

| Methods | Description |
| --- | --- |
| [clone](RadioButton_Method.md#clone) | When this method is used on a container widget, then all the widgets inside the container are cloned. |

 

| Properties | Description |
| --- | --- |
| [masterData](RadioButton_Properties.md#masterDa) | Specifies the set of values that must be displayed for the user to make a selection from the available choices. |
| [masterDataMap](RadioButton_Properties.md#masterDataMap) | Specifies the set of values from which you can make a selection. |

 

#### 3D Touch

| Methods | Description |
| --- | --- |
| [registerForPeekandPop](RadioButton_Method.md#register) | Registers a widget to enable 3D Touch peek and pop gestures. |
| [setOnPeek](RadioButton_Method.md#setOnPek) | Sets and overrides the existing onPeekCallback for the widget. |
| [setOnPop](RadioButton_Method.md#setOnPop) | Overrides the existing onPopCallback for the widget. |
| [unregisterForPeekandPop](RadioButton_Method.md#unregist) | Unregisters a widget from 3D Touch peek and pop gestures. |

 

#### User Input Handling

| Events | Description |
| --- | --- |
| [onSelection](RadioButton_Events.md#onSelect) | Invoked by the platform when an item is selected or deselected. |
| [onScrollWidgetPosition](RadioButton_Events.md#onScrollWidgetPosition) | Invoked by the platform when the widget location position gets changed on scrolling. |
| [onTouchEnd](RadioButton_Events.md#onTouchEnd) | Invoked by the platform when the user touch is released from the touch surface. |
| [onTouchMove](RadioButton_Events.md#onTouchMove) | Invoked by the platform when the touch moves on the touch surface continuously until movement ends. |
| [onTouchStart](RadioButton_Events.md#onTouchStart) | Invoked by the platform when the user touches the touch surface. |

 

| Methods | Description |
| --- | --- |
| [removeGestureRecognizer](RadioButton_Method.md#removeGestureRecognizer) | Allows you to remove the specified gesture recognizer for the specified widget. |
| [setGestureRecognizer](RadioButton_Method.md#setGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |

#### UI Appearance

| Properties | Description |
| --- | --- |
| [backgroundColor](RadioButton_Properties.md#backgrou) | Specifies the background color of the widget in hex format. |
| [backgroundColorMultiStepGradient](RadioButton_Properties.md#backgroundColorMultiStepGradient) | Specifies the multi-step gradient color for the background of the widget. |
| [backgroundColorTwoStepGradient](RadioButton_Properties.md#backgroundColorTwoStepGradient) | Specifies the two-step gradient color for the background of the widget. |
| [backgroundImage](RadioButton_Properties.md#backgroundImage) | Sets the image for the background of the widget. |
| [borderColor](RadioButton_Properties.md#borderColor) | Specifies the border color of the widget. |
| [borderColorGradient](RadioButton_Properties.md#borderColorGradient) | Specifies the multi-step gradient color for the border of the widget. |
| [borderStyle](RadioButton_Properties.md#borderStyle) | Specifies the border style for the widget. |
| [borderWidth](RadioButton_Properties.md#borderWidth) | Specifies the width of the border for the widget in pixels. |
| [cornerRadius](RadioButton_Properties.md#cornerRadius) | Specifies the radius of the border for the widget. |
| [disabledStateSkinProperties](RadioButton_Properties.md#disabledStateSkinProperties) | Specifies the skin properties that define the look and feel of the widget, when the widget is disabled or blocked. |
| [focusStateSkinProperties](RadioButton_Properties.md#focusStateSkinProperties) | Specifies the skin properties that define the look and feel of the widget, when the widget is in focus. |
| [fontColor](RadioButton_Properties.md#fontColor) | Specifies the font color of the widget. |
| [fontFamily](RadioButton_Properties.md#fontFamily) | Specifies the font family for the font of the widget. |
| [fontSize](RadioButton_Properties.md#fontSize) | Specifies the font size for the widget in percentage (%) units. |
| [fontStyle](RadioButton_Properties.md#fontStyle) | Specifies the font style for the widget. |
| [fontWeight](RadioButton_Properties.md#fontWeight) | Specifies the weight for the font of the widget. |
| [hoverStateSkinProperties](RadioButton_Properties.md#hoverStateSkinProperties) | Specifies the skin properties that define the look and feel of the widget, when the cursor hovers on the widget. |
| [pressedStateSkinProperties](RadioButton_Properties.md#pressedStateSkinProperties) | Specifies the skin properties that define the look and feel of the widget, when the widget is pressed or clicked. |
| [shadowColor](RadioButton_Properties.md#shadowColor) | Specifies the color for the shadow of the widget. |
| [shadowOffset](RadioButton_Properties.md#shadowOffset) | This property specifies the current coordinates of the shadow region in the widget. |
| [shadowRadius](RadioButton_Properties.md#shadowRadius) | Specifies the radius for the blur value of the shadow. |
| [textShadowColor](RadioButton_Properties.md#textShadowColor) | Specifies the color for the text shadow of the widget. |
| [textShadowOffset](RadioButton_Properties.md#textShadowOffset) | This property specifies the current coordinates of the text shadow region in the widget. |
| [textShadowRadius](RadioButton_Properties.md#textShadowRadius) | Specifies the radius for the blur value of the text shadow. |
| [focusTickedImage](RadioButton_Properties.md#focusTic) | Specifies the image to be displayed when you make a selection on non-touch devices. |
| [focusUnTickedImage](RadioButton_Properties.md#Focus2) | Specifies the image to be displayed when you clear a selection on non-touch devices. |
| [hoverSkin](RadioButton_Properties.md#hoverSki) | Specifies the look and feel of a widget when the cursor hovers on the widget. |
| [itemOrientation](RadioButton_Properties.md#itemOrientation) | Specifies the arrangement of the items inside the RadioButtonGroup widget. |
| [shadowDepth](RadioButton_Properties.md#shadowDepth) | Defines the depth of the shadow effect applied to the RadioButtonGroup Widget. |
| [shadowType](RadioButton_Properties.md#shadowType) | Sets a type of the shadow effect to apply to the RadioButtonGroup Widget. |
| [selectedKey](RadioButton_Properties.md#selected) | Represents the key that is shown as selected. |
| [tickedImage](RadioButton_Properties.md#tickedIm) | Specifies the image to be displayed when you make a selection. |
| [unTickedImage](RadioButton_Properties.md#unticked) | Specifies the image to be displayed when a selection is cleared. |
| [viewConfig](RadioButton_Properties.md#viewConf) | Specifies the view configuration for different viewtypes. |
| [viewType](RadioButton_Properties.md#viewType) | Specifies the view type of the RadioButtonGroup widget. |
| [wheelBackgroundColor](RadioButton_Properties.md#wheelBac) | Specifies the background color for the wheel that is displayed when you click the RadioButton group. |

#### Enabling RTL

| Properties | Description |
| --- | --- |
| [retainContentAlignment](RadioButton_Properties.md#retainContentAlignment) | Helps to retain the content alignment of the widget while applying RTL. |
| [retainFlexPositionProperties](RadioButton_Properties.md#retainFlexPositionProperties) | Helps to retain the left, right and padding properties while applying RTL. |
| [retainFlowHorizontalAlignment](RadioButton_Properties.md#retainFlowHorizontalAlignment) | Enables you to change the horizontal flow of the widget from left to right. |

#### Miscellaneous

| Properties | Description |
| --- | --- |
| [cursorType](RadioButton_Properties.md#cursorType) | Specifies the type of the mouse pointer used. |
| [enableHapticFeedback](RadioButton_Properties.md#enableHapticFeedback) | Allows you to enable or disable haptic feedback on the RadioButton widget. |
| [inputAccessoryViewType](RadioButton_Properties.md#inputAccessoryViewType) | Helps in defining the the Previous, Next, and Done buttons to the applicable input controls. |
| [dropDownImage](RadioButton_Properties.md#dropDown) | Specifies the image to be used for the drop-down box indicator (inverted triangle by default). |
| [groupCells](RadioButton_Properties.md#groupCel) | Specifies if all the rows in the RadioButton widget should be grouped using a rounded corner background and border. |
| [placeholder](RadioButton_Properties.md#placehol) | Specifies the temporary or substitute text (a hint provided as a word or phrase) that must be displayed on the RadioButton until the actual selection is made. |
| [toolTip](RadioButton_Properties.md#toolTip) | Specifies the hint text when the cursor hovers over a widget, without clicking it. |
| [selectedKeyValue](RadioButton_Properties.md#Selected2) | Returns the array of selected key-value pair. |

| Methods | Description |
| --- | --- |
| [getBadge](RadioButton_Method.md#getBadge) | Enables you to read the badge value (if any) attached to the specified widget. |
| [setBadge](RadioButton_Method.md#setBadge) | Enables you to set the badge value to the given widget at the upper, right corner of the widget. |

#### Configurations Common To All Widgets

| Methods | Description |
| --- | --- |
| [convertPointFromWidget](RadioButton_Method.md#convertPointFromWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [convertPointToWidget](RadioButton_Method.md#convertPointToWidget) | Allows you to convert the coordinate system from a point (receiver's coordinate system) to a widget. |
| [removeFromParent](RadioButton_Method.md#removeFromParent) | Allows you to remove a child widget from a parent widget. |
| [setEnabled](RadioButton_Method.md#setEnabled) | Specifies the widget that must be enabled or disabled. |
| [setFocus](RadioButton_Method.md#setFocus) | Specifies the widget on which there must be focus. |
| [setVisibility](RadioButton_Method.md#setVisibility) | Use this method to set the visibility of the widget. |

| Properties | Description |
| --- | --- |
| [accessibilityConfig](RadioButton_Properties.md#accessibilityConfig) | Enables you to control accessibility behavior and alternative text for the widget. |
| [enable](RadioButton_Properties.md#enable) | Allows you to make a widget visible but not actionable. |
| [enableCache](RadioButton_Properties.md#enableCa) | Enables you to improve the performance of Positional Dimension Animations. |
| [info](RadioButton_Properties.md#info) | A custom JSObject with the key value pairs that a developer can use to store the context with the widget. |
| [isVisible](RadioButton_Properties.md#isVisibl) | Controls the visibility of a widget on the form. |

| Events | Description |
| --- | --- |
| [postOnclickJS](RadioButton_Events.md#postOncl) | Allows the developer to execute custom javascript function after the onSelection callback of the RadioButton is invoked. |
| [preOnclickJS](RadioButton_Events.md#preOncli) | Allows the developer to execute custom javascript function before the onSelection callback of the RadioButton is invoked. |

RadioButtonGroup Widget Basics
------------------------------

*   RadioButtonGroup is a group widget that returns the current selected value.
*   On iPhone platform, use a single select list.

RadioButtonGroup is a widget that allows you to define a set of radio buttons and the user can choose one of it as an option.  

A radio button usually contains a small circle with text next to it. When you make a selection, a dot appears in the circle to indicate your selection.

If you select one button in the set, the previously selected button is deselected. Only one of the options is selected at a time.

You can use a RadioButtonGroup widget to choose one option from a set of mutually exclusive choices.

The data model for RadioButtonGroup widget is a key value pair. The _key_ is hidden part of the model while _value_ is displayed to the user.  

> **_Note:_** To provide a multiple selection option, use the [CheckBoxGroup](CheckBox.md) Widget.

### Creating a RadioButtonGroup Using a Constructor: voltmx.ui.RadioButtonGroup

Creating RadioButtonGroup object instance:

```
var radiobutton1 = new voltmx.ui.RadioButtonGroup (basicConf, layoutConf, pspConf);
```

*   **basicConf** is an object with basic properties.
*   **layoutConf** is an object with layout properties.
*   **pspConf** is an object with platform specific properties.

> **_Note:_** The configuration properties should be passed only in the respective configuration objects otherwise they are ignored.

Example

```
//Defining properties for RadioButtonGroup
var radioBasic = {
    id: "RadioButton",
    isVisible: true,
    masterData: [
        ["key1", "value1"],
        ["key2", "value2"],
        ["key3", "value3"]
    ],
    skin: "radSkin",
    focusSkin: "radFSkin"
};

var radioLayout = {
    widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT,
    padding: [0, 0, 0, 0],
    margin: [0, 0, 0, 0],
    containerWeight: 40,
    hExpand: false
};

var radioPSP = {
    tickedImage: "tickdImg.png",
    untickedImage: "unTickdImg.png",
    focusTickedImage: "tickdFImg.png",
    viewType: constants.RADIOGROUP_VIEW_TYPE_TABLEVIEW
};
//Creating the RadioButtonGroup
radioBtn = new voltmx.ui.RadioButtonGroup(radioBasic, radioLayout, radioPSP);

//Reading the id of the RadioButtonGroup		
alert("RadioButtonGroup Id ::" + radioBtn.id);
```

### Customizing Appearance

You can customize the appearance of the RadioButtonGroup widget using the following properties:

*   widgetAlignment: Specifies the alignment of the widget.
*   margin: Defines the space around a widget.
*   padding: Defines the space between the content of the widget and the widget boundaries.
*   [skin](RadioButton_Properties.md#skin): Specifies the skin.
*   [focusSkin](RadioButton_Properties.md#focusSki): Specifies the focus skin.

### Important Considerations

The following are the important considerations for the RadioButtonGroup widget.

All Platforms

> *   RadioButtonGroup widget is always a group widget.
> *   Limit the number of choices in the widget. If you need to display several choices, consider using a [CheckBoxGroup](CheckBox.md#checkboxgroup-widget) widget.

iOS

> *   When the viewType is set as RADIOGROUP\_VIEW\_TYPE\_ONSCREENWHEEL, the skin supports only backgroundcolor and style as one color.
> *   Multistep Gradient is not supported when groupCells property is set to true.

Windows

> *   The focusSkin property, background color is not be applied to the selected item, only font color is be applied. For example, if you define a skin for focusSkin property as background as red and font color as yellow, then only the font color is applied ignoring the background color.

SPA

> *   Focus skin is not supported.

