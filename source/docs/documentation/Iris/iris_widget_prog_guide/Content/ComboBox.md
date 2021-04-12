---
layout: "documentation"
category: "iris_widget_prog_guide"
---
                                

ComboBox Widget
===============

A ComboBox is a widget that allows you to select a single item from a drop-down list.

If you select the drop-down arrow on a ComboBox, a drop-down list containing a list of items (values) are displayed. When you select an item from the drop-down list, the selected item is displayed on the ComboBox.

A ComboBox is similar to a ListBox. However, unlike the ListBox, you can only select a single item at a time.

You can use a ComboBox widget when you require a user to select a single item from a list of items (greater than 1 item) while occupying relatively lesser space as compared to a [RadioButton widget](RadioButtonGroup.html) (a radio button displays all the available options to make a single selection and hence takes more space).

You can add the ComboBox Widget only to the VBox form. This widget will be available in the Widgets palette when the VBox form is selected in the app canvas.

The ComboBox widget capabilities can be broadly categorized into the following:

*   [Layout](#layout)
*   [Animations](#animations)
*   [Data Management](#data-management)
*   [3D Touch](#3d-touch)
*   [User Input Handling](#user-input-handling)
*   [UI Appearance](#ui-appearance)
*   [Miscellaneous](CheckBox.html#miscellaneous)
*   [Configurations Common To All Widgets](CheckBox.html#configurations-common-to-all-widgets)

#### Layout

  
| Events | Description |
| --- | --- |
| [doLayout](ComboBox_Events.html#doLayout) | Invoked for every widget when the widget position and dimensions are computed or calculated. |

 

| Properties | Description |
| --- | --- |
| [anchorPoint](ComboBox_Properties.html#anchorPo) | Specifies the anchor point of the widget bounds rectangle using the widget's coordinate space. |

 

#### UI Appearance

| Properties | Description |
| --- | --- |
| [blockedUISkin](ComboBox_Properties.html#blockedU) | Specifies the skin that must be used to block the interface until the action in progress (for example, a service call) is completed. |
| [focusSkin](ComboBox_Properties.html#focusSki) | Specifies the look and feel of the ComboBox when in focus. |
| [hoverSkin](ComboBox_Properties.html#hoverSkin) | Specifies the look and feel of a widget when the cursor hovers on the widget. |
| [opacity](ComboBox_Properties.html#opacity) | Specifies the opacity of the widget. |
| [popupFocusSkin](ComboBox_Properties.html#popupFoc) | Specifies the skin that is applied to each item in the native popup (list of options available) that appears when you select the ComboBox. |
| [popupSkin](ComboBox_Properties.html#popupSki) | Specifies the skin that is applied to each item in the native popup (list of options available) that appears when you select the ComboBox. |
| [viewConfig](ComboBox_Properties.html#viewConf) | Specifies the view configuration for different viewtypes. |
| [viewType](ComboBox_Properties.html#viewType) | Specifies the view mode of the ComboBox. |
| [wheelBackgroundColor](ComboBox_Properties.html#wheelBac) | Specifies the background color for the wheel that is displayed when you click the ComboBox. |

#### Animations

| Methods | Description |
| --- | --- |
| [animate](ComboBox_Methods.html#animate) | Applies an animation to the widget. |

 

| Properties | Description |
| --- | --- |
| [transform](ComboBox_Properties.html#transfor) | Contains an animation transformation that can be used to animate the widget. |
| [widgetSwipeMove](ComboBox_Properties.html#widgetSwipeMove) | Used to enable and configure the left or right swipe actions for a widget. |

 

#### Data Management

| Properties | Description |
| --- | --- |
| [lockTextScroll](ComboBox_Properties.html#lockTextScroll) | Allows you to enable/disable the horizontal scrolling for the selected item in the ComboBox Widget. |
| [inputAccessoryViewType](ComboBox_Properties.html#inputAccessoryViewType) | The extra buttons (or controls) allow specific operations needed by your application, such as moving to the next or previous text field, making the keyboard disappear and so on. The area above the keyboard is known as Input Accessory View. |
| [masterData](ComboBox_Properties.html#masterDa) | Specifies the set of values that must be displayed for the user to make a selection from the available choices. |
| [masterDataMap](ComboBox_Properties.html#masterDa2) | Specifies the set of values from which you can make a selection. |
| [popupTitle](ComboBox_Properties.html#popupTit) | Specifies the title text to be displayed for the ComboBox. |
| [placeholder](ComboBox_Properties.html#placehol) | Specifies the temporary or substitute text (a hint provided as a word or phrase) that must be displayed on the ComboBox until the actual selection is made. |
| [singleLineText](ComboBox_Properties.html#singleLi) | If the length of the text is more than the space available, the selected options text will be displayed truncated, in a single line with (...) ellipses. |
| [singleLineTextInPopup](ComboBox_Properties.html#singleLi2) | If the length of the text is more than the space available, the popup options text will be displayed truncated, in a single line with (...) ellipses. |
| [selectedKey](ComboBox_Properties.html#selected) | Specifies the value to be shown as selected. If you do not select a value, the return value is null/nil. |
| [selectedKeyValue](ComboBox_Properties.html#selected2) | Returns the array of selected key-value pair. If you do not select a value, the return value is null/nil. |
| [textTruncatePosition](ComboBox_Properties.html#textTrun) | When the property singleLineText is set to true, this property controls the position of the ellipses (...), in the selected option text. |
| [textTruncatePositionInPopup](ComboBox_Properties.html#textTrun2) | When the property singleLineTextInPopup is set to true, this property controls the position of the ellipses (...), in the popup options text. |
| [toolTip](ComboBox_Properties.html#toolTip) | Specifies the hint text when the cursor hovers over a widget, without clicking it. |

 

#### 3D Touch

| Methods | Description |
| --- | --- |
| [registerForPeekandPop](ComboBox_Methods.html#register) | Registers a widget to enable 3D Touch peek and pop gestures. |
| [setOnPeek](ComboBox_Methods.html#setOnPek) | Sets and overrides the existing onPeekCallback for the widget. |
| [setOnPop](ComboBox_Methods.html#setOnPop) | Overrides the existing onPopCallback for the widget. |
| [unregisterForPeekandPop](ComboBox_Methods.html#unregist) | Unregisters a widget from 3D Touch peek and pop gestures. |

#### User Input Handling

| Events | Description |
| --- | --- |
| [onSelection](ComboBox_Events.html#onSelect) | Triggered when you select or unselect any item in ComboBox. |
| [onScrollWidgetPosition](ComboBox_Events.html#onScrollWidgetPosition) | Invoked by the platform when the widget location position gets changed on scrolling. |

 

| Methods | Description |
| --- | --- |
| [addGestureRecognizer](ComboBox_Methods.html#addGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |
| [removeGestureRecognizer](ComboBox_Methods.html#removeGestureRecognizer) | Allows you to remove the specified gesture recognizer for the specified widget. |
| [setGestureRecognizer](ComboBox_Methods.html#setGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |

 

#### Miscellaneous

| Properties | Description |
| --- | --- |
| [dropDownImage](ComboBox_Properties.html#dropDown) | Specifies the image to be used for the drop-down box indicator. |
| [groupCells](ComboBox_Properties.html#groupCel) | Specifies if the group cells style must be applied. |
| [showAppMenu](ComboBox_Properties.html#showAppM) | Provides you to show or hide the app menu when the dialog is open. |
| [tickedImage](ComboBox_Properties.html#tickedIm) | Specifies the image to be displayed when you make a selection. |
| [unTickedImage](ComboBox_Properties.html#unTicked) | Specifies the image to be displayed when a selection is cleared. |

 

| Methods | Description |
| --- | --- |
| [convertPointFromWidget](ComboBox_Methods.html#convertPointFromWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [convertPointToWidget](ComboBox_Methods.html#convertPointToWidget) | Allows you to convert the coordinate system from a point (receiver's coordinate system) to a widget. |
| [getBadge](ComboBox_Methods.html#getBadge) | Enables you to read the badge value (if any) attached to the specified widget. |
| [setBadge](ComboBox_Methods.html#setBadge) | Enables you to set the badge value to the given widget at the upper, right corner of the widget. |

 

#### Configurations Common To All Widgets

| Properties | Description |
| --- | --- |
| [accessibilityConfig](ComboBox_Properties.html#accessibilityConfig) | Enables you to control accessibility behavior and alternative text for the widget. |
| [enableCache](ComboBox_Properties.html#enableCa) | Enables you to improve the performance of Positional Dimension Animations. |
| [isVisible](ComboBox_Properties.html#isVisibl) | Controls the visibility of a widget on the form. |
| [id](ComboBox_Properties.html#id) | id is a unique identifier of button consisting of alpha numeric characters. |
| [info](ComboBox_Properties.html#info) | A custom JSObject with the key value pairs that a developer can use to store the context with the widget. |
| [parent](ComboBox_Properties.html#parent) | Helps you access the parent of the widget. If the widget is not part of the widget hierarchy, the parent property returns null. |

 

| Methods | Description |
| --- | --- |
| [removeFromParent](ComboBox_Methods.html#removeFromParent) | Allows you to remove a child widget from a parent widget. |
| [setEnabled](ComboBox_Methods.html#setEnabled) | Specifies the widget that must be enabled or disabled. |
| [setFocus](ComboBox_Methods.html#setFocus) | Specifies the widget on which there must be focus. |
| [setVisibility](ComboBox_Methods.html#setVisibility) | Use this method to set the visibility of the widget. |

ComboBox Widget Basics
----------------------

### Creating a ComboBox Using a Constructor: voltmx.ui.ComboBox

{% highlight voltMx %}
var mycombobox = new voltmx.ui.ComboBox (basicConf, layoutConf, pspConf);
{% endhighlight %}

*   **basicConf** is an object with basic properties.
*   **layoutConf** is an object with layout properties.
*   **pspConf** is an object with platform specific properties.

> **_Note:_** The configuration properties should be passed only in the respective configuration objects otherwise they are ignored

Example

{% highlight voltMx %}//The below function is preOnclickJS event callback function
function preOnclickJSCallBck(combobox) {
    alert("Inside preOnclickJS event callback");
}

//The below function is postOnclickJS event callback function
function postOnclickJSCallBck(combobox) {
    alert("Inside postOnclickJS event callback");
}

//The below function is onSelection event callback function
function onSelCallBck(combobox) {
    alert("Inside onSelection event callback");
}

//Creating the ComboBox
var comboBasic = {
    id: "combobox1",
    isVisible: true,
    masterDataMap: [
        [{
            "mykey": "key1",
            "myvalue": "value1"
        }, {
            "mykey": "key2",
            "myvalue": "value2"
        }],
        "mykey", "myvalue"
    ],
    skin: "comboSkin",
    selectedKey: "key1",
    onSelection: onSelCallBck
};

var comboLayout = {
    containerWeight: 80,
    widgetAlignment: constants.WIDGET_ALIGN_MIDDLE_LEFT,
    padding: [10, 10, 10, 10],
    margin: [10, 10, 10, 10],
    hExpand: true,
    vExpand: false
};

var comboPSP = {
    viewType: constants.COMBOBOX_VIEW_TYPE_TABLEVIEW,
    contentAlignment: constants.CONTENT_ALIGN_MIDDLE_LEFT,
    placeholder: "Please select a value",
    placeholderI18NKey: "plcHolder",
    popupTitle: "ComboPopUp",
    groupCells: true,
    preOnclickJS: preOnclickJSCallBck,
    postOnclickJS: postOnclickJSCallBck
};

combo = new voltmx.ui.ComboBox(comboBasic, comboLayout, comboPSP);

//Reading the selectedKeyValue of the ComboBox
alert("ComboBox selectedKeyValue is ::" + .combo.selectedKeyValue);
{% endhighlight %}

### Customizing Appearance

You can customize the appearance of the ComboBox using the following properties:

*   [widgetAlignment](Widget_Common_Properties.html#Alignmen): To specify the alignment of the widget.
*   [margin](Widget_Common_Properties.html#Margin): Defines the space around a widget.
*   [padding](Widget_Common_Properties.html#Padding): Defines the space between the content of the widget and the widget boundaries.
*   [skin](ComboBox_Properties.html#skin): Used to specify the skin.
*   [focusSkin](ComboBox_Properties.html#focusSki): Used to specify the focus skin.

### Important Considerations

The following are the issues to avoid for a ComboBox:

*   You must not use a ComboBox if you require the user to make multiple selections. If you require a user to make multiple selections, use a [CheckBox](CheckBox.html) or a [ListBox](ListBox.html) widget.
*   (Optional) You must first fetch the data for the ComboBox before showing the form. You must do so because if a form is shown and the ComboBox has no values, an empty ComboBox is displayed resulting in a bad user experience.

Limitations

The following are the limitations of the ComboBox widget across all platforms and individual platforms:

*   **All platforms:**
    *   You cannot add a ComboBox Widget to a Flex Form.
        
    *   You cannot place a ComboBox inside a Segment and images inside a ComboBox.
*   **iOS:**
    *   When the viewType is set as COMBOBOX\_VIEW\_TYPE\_ONSCREENWHEEL, the skin supports only backgroundcolor and style as one color.
    *   Multistep Gradient is not supported when groupCells property is set to true.
*   **Android:** The [skin](ComboBox_Properties.html#skin) and [focusSkin](ComboBox_Properties.html#focusSki) are not applied to the default ComboBox that appears on a Form when rendered. These skins are applied to the ComboBox items in the popup (appears when you click the ComboBox widget). Work Around: To apply the [skin](ComboBox_Properties.html#skin) and [focusSkin](ComboBox_Properties.html#focusSki) to the default appearance of the ComboBox widget, do the following:
    
    1.  Create two _NinePatchDrawable_ images and name them as "_combo\_box\_normal\_skin.9.png_" for Normal skin and "_combo\_box\_focus\_skin.9.png_" for Focus skin. Place these images in "_<drive>:\\workspace\\<project name>\\resources\\mobilerichclient\\Android\\_" directory.
    
    1.  Build the Application for Android. The Normal and Focus skins will be applied to the default ComboBox appearance.
    
    For information on NinePatchDrawable images, see the following links:
    
    *   [http://developer.Android.com/guide/topics/graphics/2d-graphics.html#nine-patch](http://developer.android.com/guide/topics/graphics/2d-graphics.html#nine-patch)
    *   [http://developer.Android.com/guide/developing/tools/draw9patch.html](http://developer.android.com/guide/developing/tools/draw9patch.html)
*   **J2ME platform:** If you do not specify the focusSkin, it is not possible to identify the traversal.
*   **Mobile Web:**
    *   The [](ComboBox_Events.html#ondone())[onSelection](ComboBox_Events.html#onSelect) event is not supported on the Basic version of Mobile Web as the Java script is not supported on browsers of basic devices. To achieve the functionality similar to an [](ComboBox_Events.html#ondone())[](ComboBox_Events.html#ondone())[onSelection](ComboBox_Events.html#onSelect) event, you must create an additional button for the Basic version of the Mobile Web with an onclick event and attach an onSelection closure.
    *   Due to Browser restriction, you cannot apply padding for a ComboBox.
    *   The hExpand property is not applicable.
    *   focusSkin is not supported.

