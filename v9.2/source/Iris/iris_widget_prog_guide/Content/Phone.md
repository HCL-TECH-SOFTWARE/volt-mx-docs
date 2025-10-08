                               

You are here: Customizing Appearance

Phone Widget
============

The Phone widget is used to call a phone number in an application using the phone app of your device.

A Phone widget, when placed in an application, allows you to launch the native phone dialer, and initiate a phone call to the number that is displayed on it. It appears as a button on the Form, and the phone number is displayed on it either in the number format or the phone spell text. When the user selects the phone widget, the native phone app is launched to make a phone call.

Following are the real-time use cases of the Phone widget:

*   Used in business websites where the contact numbers are displayed.
    
*   In apps that offer services such as delivery of food, medicines or electronic gadgets; rider’s contact details are displayed using Phone widget. Customers can call the rider to know the status of the delivery.
    
*   Contact support in websites.
    

Widgets are normally added to your application using Volt MX Iris, but can also be added from code. For general information on using widgets in Volt MX Iris, see [Designing an Application](../../../Iris/iris_user_guide/Content/Part_II_CreatingAnApplication.md) in the [Iris User Guide](../../../Iris/iris_user_guide/Content/Introduction.md).

For general information on the Phone widget see the [Phone](../../../Iris/iris_user_guide/Content/Phone.md) topic in the Volt MX Iris User Guide.

The Phone widget capabilities can be broadly categorized into the following:

*   [Layout](#layout)
*   [Animations](#animations)
*   [User Input Handling](#user-input-handling)
*   [Data Management](#data-management)
*   [3D Touch](#3d-touch)
*   [UI Appearance](#ui-appearance)
*   [Enabling RTL](#enabling-rtl)
*   [Miscellaneous](#miscellaneous)
*   [Configurations Common To All Widgets](#configurations-common-to-all-widgets)

#### Layout

  
| Events | Description |
| --- | --- |
| [doLayout](Phone_Events.md#doLayout) | Invoked for every widget when the widget position and dimensions are computed. |

 

| Properties | Description |
| --- | --- |
| [anchorPoint](Phone_Properties.md#anchorPo) | Specifies the anchor point of the widget bounds rectangle using the widget's coordinate space. |
| [bottom](Phone_Properties.md#bottom) | Determines the bottom edge of the widget and is measured from the bottom bounds of the parent container. |
| [centerX](Phone_Properties.md#centerX) | Determines the center of a widget measured from the left bounds of the parent container. |
| [centerY](Phone_Properties.md#centerY) | Determines the center of a widget measured from the top bounds of the parent container. |
| [contentAlignment](Phone_Properties.md#contentA) | Specifies the alignment of the text for a widget with respect to its boundaries. |
| [height](Phone_Properties.md#height) | Determines the height of the widget and measured along the y-axis. |
| [hExpand](Phone_Properties.md#hExpand) | Specifies if the widget should occupy all the width available to it. |
| [left](Phone_Properties.md#left) | Determines the lower left corner edge of the widget and is measured from the left bounds of the parent container. |
| [maxHeight](Phone_Properties.md#maxHeigh) | Specifies the maximum height of the widget and is applicable only when the height property is not specified. |
| [maxWidth](Phone_Properties.md#maxWidth) | Specifies the maximum width of the widget and is applicable only when the width property is not specified. |
| [minHeight](Phone_Properties.md#minHeigh) | Specifies the minimum height of the widget and is applicable only when the height property is not specified. |
| [minWidth](Phone_Properties.md#minWidth) | Specifies the minimum width of the widget and is applicable only when the width property is not specified. |
| [padding](Phone_Properties.md#padding) | Defines the space between the content of the widget and the widget boundaries. |
| [paddingInPixel](Phone_Properties.md#paddingI) | Indicates if the padding is to be applied in pixels or in percentage. |
| [right](Phone_Properties.md#right) | Determines the lower right corner of the widget and is measured from the right bounds of the parent container. |
| [top](Phone_Properties.md#top) | Determines the top edge of the widget and measured from the top bounds of the parent container. |
| [vExpand](Phone_Properties.md#vExpand) | Specifies if the widget has to occupy all the vertical space available to it. |
| [width](Phone_Properties.md#width) | Determines the width of the widget and is measured along the x-axis. |
| [zIndex](Phone_Properties.md#zIndex) | Specifies the stack order of a widget. |

  

#### Animations

 

| Properties | Description |
| --- | --- |
| [transform](Phone_Properties.md#transfor) | Contains an animation transformation that can be used to animate the widget. |

 

#### Data Management

| Methods | Description |
| --- | --- |
| [clone](Phone_Method.md#clone) | When this method is used on a container widget, then all the widgets inside the container are cloned. |

#### 3D Touch

| Methods | Descripton |
| --- | --- |
| [registerForPeekandPop](Phone_Method.md#register) | Registers a widget to enable 3D Touch peek and pop gestures. |
| [setOnPeek](Phone_Method.md#setOnPek) | Sets and overrides the existing onPeekCallback for the widget. |
| [setOnPop](Phone_Method.md#setOnPop) | Overrides the existing onPopCallback for the widget. |
| [unregisterForPeekandPop](Phone_Method.md#unregist) | Unregisters a widget from 3D Touch peek and pop gestures. |

#### User Input Handling

| Events | Description |
| --- | --- |
| [onTouchEnd](Phone_Events.md#onTouchEnd) | An event callback is invoked by the platform when the user touch is released from the touch surface. |
| [onTouchMove](Phone_Events.md#onTouchMove) | An event callback is invoked by the platform when the touch moves on the touch surface continuously until movement ends. |
| [onTouchStart](Phone_Events.md#onTouchStart) | An event callback is invoked by the platform when the user touches the touch surface. |

 

| Methods | Description |
| --- | --- |
| [addGestureRecognizer](Phone_Method.md#addGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |
| [removeGestureRecognizer](Phone_Method.md#removeGestureRecognizer) | Allows you to remove the specified gesture recognizer for the specified widget. |
| [setGestureRecognizer](Phone_Method.md#setGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |

#### UI Appearance

| Properties | Description |
| --- | --- |
| [contentAlignment](Phone_Properties.md#contentA) | Specifies the alignment of the text on the Phone with respect to its boundaries. |
| [margin](Phone_Properties.md#margin) | Defines the space around a widget. |
| [marginInPixel](Phone_Properties.md#marginIn) | Indicates if the margin is to be applied in pixels or in percentage. |
| [padding](Phone_Properties.md#padding) | Defines the space between the content of the widget and the widget boundaries. |
| [paddingInPixel](Phone_Properties.md#paddingI) | Indicates if the padding is to be applied in pixels or in percentage. |
| [widgetAlignment](Phone_Properties.md#widgetAl) | Indicates how a widget is to be anchored with respect to its parent. |

#### Enabling RTL

| Properties | Description |
| --- | --- |
| [retainContentAlignment](Phone_Properties.md#retainContentAlignment) | Helps to retain the content alignment of the widget while applying RTL. |
| [retainFlexPositionProperties](Phone_Properties.md#retainFlexPositionProperties) | Helps to retain the left, right and padding properties while applying RTL. |
| [retainFlowHorizontalAlignment](Phone_Properties.md#retainFlowHorizontalAlignment) | Enables you to change the horizontal flow of the widget from left to right. |

#### Miscellaneous

| Methods | Description |
| --- | --- |
| [getBadge](Phone_Method.md#getBadge) | Enables you to read the badge value (if any) attached to the specified widget. |
| [setBadge](Phone_Method.md#setBadge) | Enables you to set the badge value to the given widget at the upper, right corner of the widget. |

| Properties | Description |
| --- | --- |
| [cursorType](Phone_Properties.md#cursorType) | Specifies the type of the mouse pointer used. |

#### Configurations Common To All Widgets

| Methods | Description |
| --- | --- |
| [convertPointFromWidget](Phone_Method.md#convertPointFromWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [convertPointToWidget](Phone_Method.md#convertPointToWidget) | Allows you to convert the coordinate system from a point (receiver's coordinate system) to a widget. |
| [removeFromParent](Phone_Method.md#removeFromParent) | Allows you to remove a child widget from a parent widget. |
| [setEnabled](Phone_Method.md#setEnabled) | Specifies the widget that must be enabled or disabled. |
| [setFocus](Phone_Method.md#setFocus) | Specifies the widget on which there must be focus. |
| [setVisibility](Phone_Method.md#setVisibility) | Use this method to set the visibility of the widget. Default : true |

 

| Properties | Description |
| --- | --- |
| [accessibilityConfig](Phone_Properties.md#accessibilityConfig) | Enables you to control accessibility behavior and alternative text for the widget. |
| [enable](Phone_Properties.md#enable) | Allows you to make a widget visible but not actionable. |
| [id](Phone_Properties.md#id) | id is a unique identifier of Phone consisting of alpha numeric characters. |
| [isVisible](Phone_Properties.md#isVisibl) | Controls the visibility of a widget on the form. |
| [parent](Phone_Properties.md#parent) | Helps you access the parent of the widget. |

Phone Widget Basics
-------------------

> **_Note:_** Phone widget is not applicable for Desktop Web and Windows platforms

You can use a Phone widget in the following scenarios:

*   To build applications for both Native and Mobile Web (SPA), you can use _phone.dial_ API in your application to initiate a call.  
    
*   The convenience of providing a call initiation feature. Which otherwise, for the call initiation feature you must use a button and define an onclick event or use a [RichText](RichText.md) widget.

### Customizing Appearance

You can customize the appearance of the Phone using the following properties:

*   [widgetAlignment](Phone_Properties.md#widgetAl): Specifies the alignment of the widget.
*   [margin](Phone_Properties.md#margin): Defines the space around a widget.
*   [padding](Phone_Properties.md#padding): Defines the space between the content of the widget and the widget boundaries.
*   [skin](Phone_Properties.md#skin): Specifies the skin.
*   [focusSkin](Phone_Properties.md#focusSki): Specifies the focus skin.
*   [hExpand](Phone_Properties.md#hExpand): Expand the widget horizontally.
*   [vExpand](Phone_Properties.md#vExpand): Expand the widget vertically.

