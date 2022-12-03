                               

You are here: Creating a ListBox Using a Constructor: voltmx.ui.ListBox

ListBox Widget
==============

The ListBox widget displays a list of items as a drop-down box and allows you to select a one or more items from the list.

The data model for the ListBox widget is a key value pair. The **key** is hidden part of the model while **value** is displayed to the user.

Following are the real-time use cases of ListBox widget:

*   To select your nationality while creating a user account in a travel application.
    
*   To choose a department of an employee in the employee profile.
    
*   To select your city name while providing the delivery address in shopping applications.
    
*   To apply filters. For instance, in social networking applications, users can choose the subjects of their choice such as nature, technology, health. User’s feed can then be customized as per the interests.
    
*   You can add or modify the UI of an application based on the option that you select from the list of identity services.
    

Widgets are normally added to your application using Volt MX Iris, but can also be added from code. For general information on using widgets in Volt MX Iris, see [Designing an Application](../../../Iris/iris_user_guide/Content/Part_II_CreatingAnApplication.md) in the [Iris User Guide](../../../Iris/iris_user_guide/Content/Introduction.md).

For general information on the ListBox widget see the [](../../../Iris/iris_user_guide/Content/Button.md)[ListBox](../../../Iris/iris_user_guide/Content/ListBox.md) topic in the Volt MX Iris User Guide.

The ListBox widget capabilities can be broadly categorized into the following:

*   [Layout](#layout)
*   [Data Management](#data-management)
*   [Animations](#animations)
*   [User Input Handling](#user-input-handling)
*   [State Configurations](#state-configurations)
*   [UI Appearance](#ui-appearance)
*   [Enabling RTL](#enabling-rtl)
*   [Miscellaneous](#miscellaneous)
*   [Configurations Common To All Widgets](#configurations-common-to-all-widgets)

#### Layout

  
| Properties | Description |
| --- | --- |
| [anchorPoint](ListBox_Basic_Properties.md#anchorPo) | Specifies the anchor point of the widget bounds rectangle using the widget's coordinate space. |

 

| Events | Description |
| --- | --- |
| [doLayout](ListBox_Events.md#doLayout) | This event is invoked for every widget when the widget position and dimensions are computed. |

  

#### Data Management

| Methods | Description |
| --- | --- |
| [clone](ListBox_Method.md#clone) | When this method is used on a container widget, then all the widgets inside the container are cloned. |

  

| Properties | Description |
| --- | --- |
| [masterData](ListBox_Basic_Properties.md#masterDa) | Specifies the set of values that must be displayed for the user to make a selection from the available choices. |
| [masterDataMap](ListBox_Basic_Properties.md#masterDa2) | Specifies the set of values from which you can make selections.You must specify a key and a value in a master data map. |
| [placeholder](ListBox_Basic_Properties.md#placehol) | Specifies the temporary or substitute text (a hint provided as a word or phrase) that must be displayed on the ListBox until the actual selection is made. |
| [popupTitle](ListBox_Basic_Properties.md#popupTit) | Specifies the Title text to be displayed for the Listbox. |
| [singleLineText](ListBox_Basic_Properties.md#singleLi) | If the length of the text is more than the available space, the selected options text and the popup options text are displayed in a truncated manner, in a single line with ellipses (...). The position of the ellipses is controlled by the textTruncatePosition property. |
| [singleLineTextInPopup](ListBox_Basic_Properties.md#singleLi2) | controls the position of the ellipses (...), in the popup options text. |
| [textTruncatePosition](ListBox_Basic_Properties.md#textTrun) | If the length of the text is more than the space available, the popup options text will be displayed truncated, in a single line with (...) ellipses. The position of the ellipses is controlled by textTruncatePositionInPopup property. |
| [textTruncatePositionInPopup](ListBox_Basic_Properties.md#textTrun2) | If the length of the text is more than the space available, the popup options text will be displayed truncated, in a single line with (...) ellipses. The position of the ellipses is controlled by textTruncatePositionInPopup property. The default ellipses position is at the end of the line if textTruncatePositionInPopup property is not set. |
| [toolTip](ListBox_Basic_Properties.md#toolTip) | Specifies the hint text when the cursor hovers over a widget, without clicking it. |

 

#### User Input Handling

| Events | Description |
| --- | --- |
| [onScrollWidgetPosition](ListBox_Events.md#onScrollWidgetPosition) | This event callback is invoked by the platform when the widget location position gets changed on scrolling. |
| [onTouchEnd](ListBox_Events.md#onTouchEnd) | An event callback is invoked by the platform when the user touch is released from the touch surface. |

 

#### Animations

| Methods | Description |
| --- | --- |
| [animate](ListBox_Method.md#animate) | Applies an animation to the widget. |

 

| Properties | Description |
| --- | --- |
| [transform](ListBox_Basic_Properties.md#transfor) | Contains an animation transformation that can be used to animate the widget. |
| [widgetSwipeMove](ListBox_Basic_Properties.md#widgetSwipeMove) | Used to enable and configure the left or right swipe actions for a widget. |

#### State Configurations

| Properties | Description |
| --- | --- |
| [disabledKeys](ListBox_Basic_Properties.md#disabledKeys) | Used to disable the list items in the ListBox widget. |
| [multiSelect](ListBox_Basic_Properties.md#multiSel) | Specifies if the widget allows multiple values to be selected from the drop down list. |
| [multiSelectRows](ListBox_Basic_Properties.md#multiSel2) | Specifies the number of visible rows in the ListBox. |
| [selectedKey](ListBox_Basic_Properties.md#selected) | Represents the key that is shown as selected. |
| [selectedKeys](ListBox_Basic_Properties.md#selected2) | Returns the keys from the data representing the selected keys. |
| [tickedImage](ListBox_Basic_Properties.md#tickedIm) | Specifies the image to be displayed when you make a selection. |
| [selectedKeyValue](ListBox_Basic_Properties.md#selected2) | Returns the keys from the data representing the selected keys. |
| [selectedKeyValues](ListBox_Basic_Properties.md#selected3) | Returns the array of selected key-value pair from the data representing the selected key and value. |
| [untickedImage](ListBox_Basic_Properties.md#unticked) | Specifies the image to be displayed when a selection is cleared. |

 

| Events | Description |
| --- | --- |
| [onSelection](ListBox_Events.md#onSelect) | An event callback that is invoked by the platform when an item is selected or deselected. |

 

#### UI Appearance

| Properties | Description |
| --- | --- |
| [backgroundColor](ListBox_Basic_Properties.md#backgrou) | Specifies the background color of the widget in hex format. |
| [backgroundColorMultiStepGradient](ListBox_Basic_Properties.md#backgroundColorMultiStepGradient) | Specifies the multi-step gradient color for the background of the widget. |
| [backgroundColorTwoStepGradient](ListBox_Basic_Properties.md#backgroundColorTwoStepGradient) | Specifies the two-step gradient color for the background of the widget. |
| [backgroundImage](ListBox_Basic_Properties.md#backgroundImage) | Sets the image for the background of the widget. |
| [borderColor](ListBox_Basic_Properties.md#borderColor) | Specifies the border color of the widget. |
| [borderColorGradient](ListBox_Basic_Properties.md#borderColorGradient) | Specifies the multi-step gradient color for the border of the widget. |
| [borderStyle](ListBox_Basic_Properties.md#borderStyle) | Specifies the border style for the widget. |
| [borderWidth](ListBox_Basic_Properties.md#borderWidth) | Specifies the width of the border for the widget in pixels. |
| [cornerRadius](ListBox_Basic_Properties.md#cornerRadius) | Specifies the radius of the border for the widget. |
| [disabledStateSkinProperties](ListBox_Basic_Properties.md#disabledStateSkinProperties) | Specifies the skin properties that define the look and feel of the widget, when the widget is disabled or blocked. |
| [focusStateSkinProperties](ListBox_Basic_Properties.md#focusStateSkinProperties) | Specifies the skin properties that define the look and feel of the widget, when the widget is in focus. |
| [fontColor](ListBox_Basic_Properties.md#fontColor) | Specifies the font color of the widget. |
| [fontFamily](ListBox_Basic_Properties.md#fontFamily) | Specifies the font family for the font of the widget. |
| [fontSize](ListBox_Basic_Properties.md#fontSize) | Specifies the font size for the widget in percentage (%) units. |
| [fontStyle](ListBox_Basic_Properties.md#fontStyle) | Specifies the font style for the widget. |
| [fontWeight](ListBox_Basic_Properties.md#fontWeight) | Specifies the weight for the font of the widget. |
| [hoverStateSkinProperties](ListBox_Basic_Properties.md#hoverStateSkinProperties) | Specifies the skin properties that define the look and feel of the widget, when the cursor hovers on the widget. |
| [pressedStateSkinProperties](ListBox_Basic_Properties.md#pressedStateSkinProperties) | Specifies the skin properties that define the look and feel of the widget, when the widget is pressed or clicked. |
| [shadowColor](ListBox_Basic_Properties.md#shadowColor) | Specifies the color for the shadow of the widget. |
| [shadowOffset](ListBox_Basic_Properties.md#shadowOffset) | This property specifies the current coordinates of the shadow region in the widget. |
| [shadowRadius](ListBox_Basic_Properties.md#shadowRadius) | Specifies the radius for the blur value of the shadow. |
| [textShadowColor](ListBox_Basic_Properties.md#textShadowColor) | Specifies the color for the text shadow of the widget. |
| [textShadowOffset](ListBox_Basic_Properties.md#textShadowOffset) | This property specifies the current coordinates of the text shadow region in the widget. |
| [textShadowRadius](ListBox_Basic_Properties.md#textShadowRadius) | Specifies the radius for the blur value of the text shadow. |
| [contentAlignment](ListBox_Basic_Properties.md#contentA) | Specifies the alignment of the text for a ListBox with respect to its boundaries. |
| [dropDownImage](ListBox_Basic_Properties.md#dropDown) | Specifies the image to be used for the drop-down box indicator (inverted triangle by default). |
| [expandListItemToParentWidth](ListBox_Basic_Properties.md#expandListItemToParentWidth) | Sets the width of the row item to the width of the ListBox widget. |
| [focusSkin](ListBox_Basic_Properties.md#focusSki) | Specifies the look and feel of the ListBox when in focus. |
| [hoverSkin](ListBox_Basic_Properties.md#hoverSkin) | Specifies the look and feel of a widget when the cursor hovers on the widget. |
| [hExpand](ListBox_Basic_Properties.md#hExpand) | Specifies if the widget should occupy all the width available to it. |
| [itemDisabledSkin](ListBox_Basic_Properties.md#itemDisabledSkin) | Specifies the skin applied to the list items in disabled state. |
| [itemHoverSkin](ListBox_Basic_Properties.md#itemHoverSkin) | Specifies the skin applied to the list item when the cursor moves on the item. |
| [itemNormalSkin](ListBox_Basic_Properties.md#itemNormalSkin) | Specifies the skin applied to the list items in enabled state. |
| [margin](ListBox_Basic_Properties.md#margin) | Defines the space around a widget. |
| [marginInPixel](ListBox_Basic_Properties.md#marginIn) | Indicates if the margin is to be applied in pixels or in percentage. |
| [nativeListFieldSkin](ListBox_Basic_Properties.md#nativeLi) | Specifies the skin that is applied to each item in the native popup that appears when you click on the ListBox. |
| [padding](ListBox_Basic_Properties.md#padding) | Defines the space between the content of the widget and the widget boundaries. |
| [paddingInPixel](ListBox_Basic_Properties.md#paddingI) | Indicates if the padding is to be applied in pixels or in percentage. |
| [parent](ListBox_Basic_Properties.md#parent) | Helps you access the parent of the widget. |
| [placeholderSkin](ListBox_Basic_Properties.md#placehol3) | Reads the font color set in the skin and ignores the other attributes. |
| [popupTitleBackgroundColor](ListBox_Basic_Properties.md#popupTitleBackgroundColor) | Changes the background color of the ListBox title. |
| [shadowDepth](ListBox_Basic_Properties.md#shadowDepth) | Defines the depth of the shadow effect applied to the ListBox Widget. |
| [shadowType](ListBox_Basic_Properties.md#shadowType) | Sets a type of the shadow effect to apply to the ListBox Widget. |
| [showAppMenu](ListBox_Basic_Properties.md#showAppM) | Provides you an option to show or hide the app menu when the dialog is open. |
| [titleAlignment](ListBox_Basic_Properties.md#titleAlignment) | Helps you align the title of the ListBox Widget. |
| [titleIconAlignment](ListBox_Basic_Properties.md#titleIconAlignment) | Helps you align the title icon of the ListBox Widget. |
| [viewConfig](ListBox_Basic_Properties.md#viewConf) | Specifies the view configuration for different viewtypes. |
| [viewType](ListBox_Basic_Properties.md#viewType) | Specifies the view type of the ListBox. |
| [wheelBackgroundColor](ListBox_Basic_Properties.md#wheelBac) | Specifies the background color for the wheel that is displayed when you click the ListBox. |
| [vExpand](ListBox_Basic_Properties.md#vExpand) | Specifies if the widget has to occupy all the vertical space available to it. |
| [widgetAlignment](ListBox_Basic_Properties.md#widgetAl) | Indicates how a widget is to be anchored with respect to its parent. |

 

#### Enabling RTL

| Properties | Description |
| --- | --- |
| [retainContentAlignment](ListBox_Basic_Properties.md#retainContentAlignment) | Helps to retain the content alignment of the widget while applying RTL. |
| [retainFlexPositionProperties](ListBox_Basic_Properties.md#retainFlexPositionProperties) | Helps to retain the left, right and padding properties while applying RTL. |
| [retainFlowHorizontalAlignment](ListBox_Basic_Properties.md#retainFlowHorizontalAlignment) | Enables you to change the horizontal flow of the widget from left to right. |

#### Miscellaneous

| Methods | Description |
| --- | --- |
| [getBadge](ListBox_Method.md#getBadge) | Enables you to read the badge value (if any) attached to the specified widget. |
| [setBadge](ListBox_Method.md#setBadge) | Enables you to set the badge value to the given widget at the upper, right corner of the widget. |

 

| Properties | Description |
| --- | --- |
| [cursorType](ListBox_Basic_Properties.md#cursorType) | Specifies the type of the mouse pointer used. |
| [enableHapticFeedback](ListBox_Basic_Properties.md#enableHapticFeedback) | Allows you to enable or disable haptic feedback on the ListBox widget. |
| [inputAccessoryViewType](ListBox_Basic_Properties.md#inputAccessoryViewType) | The extra buttons (or controls) allow specific operations needed by your application, such as moving to the next or previous text field, making the keyboard disappear and so on. The area above the keyboard is known as Input Accessory View. |
| [groupCells](ListBox_Basic_Properties.md#groupCel) | Specifies if all the rows in the ListBox should be grouped using a rounded corner background and border. |
| [popupIcon](ListBox_Basic_Properties.md#popupIco) | Specifies the icon that appears in the title area of the popup (on the top left side of the popup). |

 

#### Configurations Common To All Widgets

| Methods | Description |
| --- | --- |
| [blur](ListBox_Basic_Properties.md#blur) | Enables you to make the widget look unfocused. |
| [convertPointFromWidget](ListBox_Method.md#convertPointFromWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [convertPointToWidget](ListBox_Method.md#convertPointToWidget) | Allows you to convert the coordinate system from a point (receiver's coordinate system) to a widget. |
| [removeFromParent](ListBox_Method.md#removeFromParent) | Allows you to remove a child widget from a parent widget. |
| [setEnabled](ListBox_Method.md#setEnabled) | Specifies the widget that must be enabled or disabled. |
| [setFocus](ListBox_Method.md#setFocus) | Specifies the widget on which there must be focus. |
| [setVisibility](ListBox_Method.md#setVisibility) | Use this method to set the visibility of the widget. Default : true |

 

| Properties | Description |
| --- | --- |
| [accessibilityConfig](ListBox_Basic_Properties.md#accessibilityConfig) | Enables you to control accessibility behavior and alternative text for the widget. |
| [enable](ListBox_Basic_Properties.md#enable) | Allows you to make a widget visible but not actionable. |
| [enableCache](ListBox_Basic_Properties.md#enableCa) | Enables you to improve the performance of Positional Dimension Animations. |
| [isVisible](ListBox_Basic_Properties.md#isVisibl) | Controls the visibility of a widget on the form. |

 

| Events | Description |
| --- | --- |
| [postOnclickJS](ListBox_Events.md#postonclickjs) | Allows the developer to execute custom javascript function after the onClick callback of the ListBox is invoked. |
| [preOnclickJS](ListBox_Events.md#preonclickjs) | Allows the developer to execute custom javascript function before the onClick callback of the ListBox is invoked. |

ListBox Widget Basics
---------------------

> **_Note:_** ListBox does not support **multiple selection** from Release 3.0 onwards. However, if you have upgraded from a version prior to Release 3.0 and used multiple selection, the backward compatibility will be maintained. If you require multiple selection capability, use either a [CheckBox](CheckBox.md) or a [Segment](Segment.md) with multiple selection enabled.

### Creating a ListBox Using a Constructor: voltmx.ui.ListBox

```

var listbox1 = new voltmx.ui.ListBox (basicConf, layoutConf, pspConf);
```

*   **basicConf** is an object with basic properties.
*   **layoutConf** is an object with layout properties.
*   **pspConf** is an object with platform specific properties.

> **_Note:_** The configuration properties should be passed only in the respective configuration objects otherwise they are ignored.

Example

```
//Defining properties for a listbox.
var listBasic = {
    id: "listbox",
    isVisible: true,
    masterData: [
        ["key1", "value1"],
        ["key2", "value2"],
        ["key3", "value3"]
    ],
    skin: "listSkin",
    focusSkin: "listFSkin"
};

var listLayout = {
    widgetAlignment: constants.WIDGET_ALIGN_CENTER,
    padding: [0, 0, 0, 0],
    margin: [0, 0, 0, 0],
    containerWeight: 100,
    hExpand: false
};

var listPSP = {
    applySkinsToPopup: true,
    nativeListFieldSkin: "nativeListSkin",
    viewType: constants.LISTBOX_VIEW_TYPE_SPINNER
};
//Creating the ListBox.
var listbx = new voltmx.ui.ListBox(listBasic, listLayout, listPSP);

//Reading the containerWeight of the listbox		
alert("listbox containerWeight ::" + listbx.containerWeight);
```

### Important Considerations

*   Shows dynamic set of data in a fixed space.
*   The master data of choices should be limited and fetched in a separate service call.
*   On iOS platform, when the viewType is set as LISTBOX\_VIEW\_TYPE\_ONSCREENWHEEL, the skin supports only backgroundcolor and style as one color.
*   On iOS platform, Multistep Gradient is not supported when groupCells property is set to true.
*   On iOS , when the viewType is set as LISTBOX\_VIEW\_TYPE\_LISTVIEW and the ListBox widget is in focus, if the orientation of the device is changed, the list is dismissed.

