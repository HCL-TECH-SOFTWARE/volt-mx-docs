                               

You are here: Creating a PickerView Using a Constructor: voltmx.ui.PickerView

PickerView Widget
=================

A PickerView widget uses a spinning wheel metaphor to display multiple sets of values, and allows you to select a single combination of values. You can select a single combination of values by rotating the wheels, and aligning the desired row of values with the selection indicator.

Following are the real-time use cases of PickerView widget:

*   Widely used in alarm settings. You can choose the specific time and days of week while setting an alarm.
    
*   Used in flight bookings where the you select a date and time or a range of dates including the From date and the To date.
    
*   Used in selecting your birthday and year in a sign up form.
    

Widgets are normally added to your application using Volt MX Iris, but can also be added from code. For general information on using widgets in Volt MX Iris, see [Designing an Application](../../../Iris/iris_user_guide/Content/Part_II_CreatingAnApplication.md) in the [Iris User Guide](../../../Iris/iris_user_guide/Content/Introduction.md).

For general information on the PickerView widget see the [PickerView](../../../Iris/iris_user_guide/Content/PickerView.md) topic in the Volt MX Iris User Guide.

The Phone widget capabilities can be broadly categorized into the following:

*   [Layout](#layout)
*   [Animations](#animations)
*   [User Input Handling](#gestures)
*   [Data Management](#data-management)
*   [3D Touch](#3d-touch)
*   [State Configurations](#state-configurations)
*   [UI Appearance](#ui-appearance)
*   [Enabling RTL](#enabling-rtl)
*   [Miscellaneous](#miscellaneous)
*   [Configurations Common To All Widgets](#configurations-common-to-all-widgets)

#### Layout

  
| Events | Description |
| --- | --- |
| [doLayout](PickerView_Events.md#doLayout) | Invoked for every widget when the widget position and dimensions are computed. |

 

| Properties | Description |
| --- | --- |
| [anchorPoint](PickerView_Basic_Properties.md#anchorPo) | Specifies the anchor point of the widget bounds rectangle using the widget's coordinate space. |
| [hExpand](PickerView_Basic_Properties.md#hExpand) | Specifies if the widget should occupy all the width available to it. |
| [bottom](PickerView_Basic_Properties.md#bottom) | Determines the bottom edge of the widget and is measured from the bottom bounds of the parent container. |
| [centerX](PickerView_Basic_Properties.md#centerX) | Determines the center of a widget measured from the left bounds of the parent container. |
| [centerY](PickerView_Basic_Properties.md#centerY) | Determines the center of a widget measured from the top bounds of the parent container. |
| [height](PickerView_Basic_Properties.md#height) | Determines the height of the widget and measured along the y-axis. |
| [left](PickerView_Basic_Properties.md#left) | Determines the lower left corner edge of the widget and is measured from the left bounds of the parent container. |
| [maxHeight](PickerView_Basic_Properties.md#maxHeigh) | Specifies the maximum height of the widget and is applicable only when the height property is not specified. |
| [maxWidth](PickerView_Basic_Properties.md#maxWidth) | Specifies the maximum width of the widget and is applicable only when the width property is not specified. |
| [minHeight](PickerView_Basic_Properties.md#minHeigh) | Specifies the minimum height of the widget and is applicable only when the height property is not specified. |
| [minWidth](PickerView_Basic_Properties.md#minWidth) | Specifies the minimum width of the widget and is applicable only when the width property is not specified. |
| [right](PickerView_Basic_Properties.md#right) | Determines the lower right corner of the widget and is measured from the right bounds of the parent container. |
| [top](PickerView_Basic_Properties.md#top) | Determines the top edge of the widget and measured from the top bounds of the parent container. |
| [width](PickerView_Basic_Properties.md#width) | Determines the width of the widget and is measured along the x-axis. |
| [zIndex](PickerView_Basic_Properties.md#zIndex) | Specifies the stack order of a widget. |

  

#### Animations

| Methods | Description |
| --- | --- |
| [animate](PickerView_Methods.md#animate) | Applies an animation to the widget. |

 

| Properties | Description |
| --- | --- |
| [transform](PickerView_Basic_Properties.md#transfor) | Contains an animation transformation that can be used to animate the widget. |

 

#### Data Management

| Methods | Description |
| --- | --- |
| [clone](PickerView_Methods.md#clone) | When this method is used on a container widget, all the widgets inside the container are cloned. |
| [setComponentData](PickerView_Methods.md#setComponentData) | Provides the ability to set the data for a given component with in the pickerview. |

 

| Properties | Description |
| --- | --- |
| [masterData](PickerView_Basic_Properties.md#masterDa) | Specifies the set of values that must be displayed for the user to make a selection from the available choices. |
| [masterDataMap](PickerView_Basic_Properties.md#masterDa2) | Specifies the set of values from which you can make one or more selections. |

#### 3D Touch

| Methods | Description |
| --- | --- |
| [registerForPeekandPop](PickerView_Methods.md#registerForPeekandPop) | Registers a widget to enable 3D Touch peek and pop gestures. |
| [setOnPeek](PickerView_Methods.md#setOnPeek) | Sets and overrides the existing onPeekCallback for the widget. |
| [setOnPop](PickerView_Methods.md#setOnPop) | Overrides the existing onPopCallback for the widget. |
| [unregisterForPeekandPop](PickerView_Methods.md#unregisterForPeekandPop) | Unregisters a widget from 3D Touch peek and pop gestures. |

#### Gestures

| Events | Description |
| --- | --- |
| [onSelection](PickerView_Events.md#onSelect) | An event callback that is invoked by the platform when the component selection changes. |
| [onScrollWidgetPosition](PickerView_Events.md#onScrollWidgetPosition) | This event callback is invoked by the platform when the widget location position gets changed on scrolling. |
| [onTouchEnd](PickerView_Events.md#onTouchEnd) | An event callback is invoked by the platform when the user touch is released from the touch surface. |
| [onTouchMove](PickerView_Events.md#onTouchMove) | An event callback is invoked by the platform when the touch moves on the touch surface continuously until movement ends. |
| [onTouchStart](PickerView_Events.md#onTouchStart) | An event callback is invoked by the platform when the user touches the touch surface. |

 

| Methods | Description |
| --- | --- |
| [addGestureRecognizer](PickerView_Methods.md#addGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |
| [removeGestureRecognizer](PickerView_Methods.md#removeGestureRecognizer) | Allows you to remove the specified gesture recognizer for the specified widget. |
| [setGestureRecognizer](PickerView_Methods.md#setGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |

 

#### UI Appearance

| Properties | Description |
| --- | --- |
| [margin](PickerView_Basic_Properties.md#margin) | Defines the space around a widget. |
| [marginInPixel](PickerView_Basic_Properties.md#marginIn) | Indicates if the margin is to be applied in pixels or in percentage. |
| [opacity](PickerView_Basic_Properties.md#opacity) | Specifies the opacity of the widget. |
| [showAppMenu](PickerView_Basic_Properties.md#showAppM) | Provides you to show or hide the app menu when the dialog is open. |
| [supportSkins](PickerView_Basic_Properties.md#supportSkins) | Enables or disables the font color support in normal skin. |
| [viewType](PickerView_Basic_Properties.md#viewType) | Facilitates to select the view of the PickerView widget. |
| [widgetAlignment](PickerView_Basic_Properties.md#widgetAl) | Indicates how a widget is to be anchored with respect to its parent. |

 

#### Enabling RTL

| Properties | Description |
| --- | --- |
| [retainContentAlignment](PickerView_Basic_Properties.md#retainContentAlignment) | Helps to retain the content alignment of the widget while applying RTL. |
| [retainFlexPositionProperties](PickerView_Basic_Properties.md#retainFlexPositionProperties) | Helps to retain the left, right and padding properties while applying RTL. |
| [retainFlowHorizontalAlignment](PickerView_Basic_Properties.md#retainFlowHorizontalAlignment) | Enables you to change the horizontal flow of the widget from left to right. |

#### Miscellaneous

| Methods | Description |
| --- | --- |
| [getBadge](PickerView_Methods.md#getBadge) | Enables you to read the badge value (if any) attached to the specified widget. |
| [setBadge](PickerView_Methods.md#setBadge) | Enables you to set the badge value to the given widget at the upper, right corner of the widget. |

 

| Properties | Description |
| --- | --- |
| [cursorType](PickerView_Basic_Properties.md#cursorType) | Specifies the type of the mouse pointer used. |
| [enableHapticFeedback](PickerView_Basic_Properties.md#enableHapticFeedback) | Allows you to enable or disable haptic feedback on the PickerView widget. |

 

#### State Configurations

| Methods | Description |
| --- | --- |
| [setSelectedKeyInComponent](PickerView_Methods.md#setSelectedKeyInComponent) | Allows you to set a particular value in the component data of a PickerView widget as selected. |

 

| Properties | Description |
| --- | --- |
| [selectedKeys](PickerView_Basic_Properties.md#selected) | Returns the array of selected keys from the masterdata representing the selected key. |
| [selectedKeyValues](PickerView_Basic_Properties.md#selected) | Returns the array of selected key-value pairs selected from the masterdata representing the selected key value. |

 

| Events | Description |
| --- | --- |
| [onSelection](PickerView_Events.md#onSelect) | An event callback that is invoked by the platform when the component selection changes. |

#### Configurations Common To All Widgets

| Methods | Description |
| --- | --- |
| [convertPointFromWidget](PickerView_Methods.md#convertPointFromWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [convertPointToWidget](PickerView_Methods.md#convertPointToWidget) | Allows you to convert the coordinate system from a point (receiver's coordinate system) to a widget. |
| [removeFromParent](PickerView_Methods.md#removeFromParent) | Allows you to remove a child widget from a parent widget. |
| [setEnabled](PickerView_Methods.md#setEnabled) | Specifies the widget that must be enabled or disabled. |
| [setFocus](PickerView_Methods.md#setFocus) | Specifies the widget on which there must be focus. |
| [setVisibility](PickerView_Methods.md#setVisibility) | Use this method to set the visibility of the widget. |

 

| Properties | Description |
| --- | --- |
| [accessibilityConfig](PickerView_Basic_Properties.md#accessibilityConfig) | Enables you to control accessibility behavior and alternative text for the widget. |
| [enable](PickerView_Basic_Properties.md#enable) | Allows you to make a widget visible but not actionable. |
| [enableCache](PickerView_Basic_Properties.md#enableCa) | Enables you to improve the performance of Positional Dimension Animations. |
| [info](PickerView_Basic_Properties.md#info) | A custom JSObject with the key value pairs that a developer can use to store the context with the widget. |
| [isVisible](PickerView_Basic_Properties.md#isVisibl) | Controls the visibility of a widget on the form. |

PickerView Widget Basics
------------------------

PickerView can have multiple components and each component comprises of keys. Users can choose the keys from different components and make the choices useful in grouping the multiple choices that user can make in different categories related to concept. For example: color, model, year of manufacturing all these three can be modeled as components with different possible values so that user can make his choice using this single widget.

> **_Note:_** PickerView widget is not supported in SPA. To implement PickerView in Desktop Web platform, the developer is expected to make use of multiple list boxes to achieve similar functionality.

### Creating a PickerView Using a Constructor: voltmx.ui.PickerView

```

var picker = new voltmx.ui.PickerView(basicConf, layoutConf, pspConf);
```

*   **basicConf** is an object with basic properties.
*   **layoutConf** is an object with layout specific properties.
*   **pspConf** is an object with platform specific properties.

> **_Note:_** The configuration properties should be passed only in the respective configuration objects otherwise they are ignored.

Example

```
//The following function is the callback function for onSelect event.
function onSelectCalBck(picker) {
    /*write your logic here*/
}

//Defining the properties for PickerView with onSelect:onSelectCalBck.
var pickerBasic = {
    id: "picker",
    info: {
        key: "PickerView"
    },
    skin: "pickerSkin",
    focusSkin: "pickerFSkin",
    masterData: [
        [
            ["y1", "2009"],
            ["y2", "2010"],
            ["y3", "2011"], 40
        ],
        [
            ["m1", "Jan"],
            ["m2", "Feb"],
            ["m3", "Mar"],
            ["m4", "Apr"],
            ["m5", "May"],
            ["m6", "Jun"],
            ["m7", "Jul"], 60
        ]
    ],
    isVisible: true,
    selectedKeys: ["y2", "m1"],
    onSelect: onSelectCalBck
};

var pickerLayout = {
    margin: [5, 5, 5, 5],
    marginInPixel: true,
    widgetAlignment: constants.WIDGET_ALIGN_CENTER,
    hExpand: true,
    containerWeight: 99
};

//Creating the PickerView.
var picker = new voltmx.ui.PickerView(pickerBasic, pickerLayout, {});

//Reading onSelect of the pickerView.
voltmx.print("pickerView onSelect event::" + picker.onSelect);
```

### Limitations

The following are the limitations of a PickerView widget:

*   You must avoid resizing a PickerView widget or placing multiple PickerView widgets side- by- side in the horizontal direction.  
    You must avoid doing so because, by resizing or placing multiple PickerView widgets side- by- side in the horizontal direction, when the PickerView widget is rendered, the PickerView widget alignment might not be confined to the screen width and results in a bad user experience.

