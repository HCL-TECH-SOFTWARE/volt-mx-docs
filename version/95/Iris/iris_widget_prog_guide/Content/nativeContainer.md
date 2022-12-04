                                

You are here: NativeContainer Widget Basics

NativeContainer Widget
======================

The NativeContainer Widget helps you develop, use, and add native UI widgets using the NativeFunction API. The widgets that are defined by the Android and iOS platforms are known as native UI widgets. Using the NativeFunction APIs, you can make use of the native widgets directly in your applications.

For example, you can add the Button Widget defined by the Android platform into your application. The NativeContainer widget allows you to add only native controls and widgets to it.

**Adding Native widgets:** You can add cross platform widgets and platform specific widgets that are specific to iOS or Android, into the NativeContainer and customize it. FlexContainer widget does not support native widgets. To learn more about adding the widget to a form, refer [NativeContainer widget Basics](#nativecontainer-widget-basics).

The NativeContainer widget capabilities can be broadly categorized into the following:

*   [Layout](#layout)
*   [UI Appearance](#ui-appearance)
*   [Data Management](#data-management)
*   [3D Touch](#3d-touch)
*   [User Input Handling](#user-input-handling)
*   [Enabling RTL](#enabling-rtl)
*   [Miscellaneous](#miscellaneous)
*   [Configurations Common To All Widgets](#configurations-common-to-all-widgets)

#### Layout

  
| Properties | Description |
| --- | --- |
| [anchorpoint](nativeContainer_Properties.md#anchorPo) | Specifies the anchor point of the widget bounds rectangle using the widget's coordinate space. |

#### UI Appearance

  
| Events | Description |
| --- | --- |
| [onDidMoveToParentViewController](nativeContainer_Events.md#onDidMoveToParentViewController) | Invoked after the view controller is added or removed from the view controller container. |
| [onLayoutSubviews](nativeContainer_Events.md#onLayoutSubviews) | Using the callback, you can lay out all subviews. |
| [onOrientationChange](nativeContainer_Events.md#onOrientationChange) | Allows you to change the orientation of the form from portrait to landscape and vice versa. |
| [onViewDidAppear](nativeContainer_Events.md#onViewDidAppear) | Invoked when the native layout view appears. |
| [onViewDidDisappear](nativeContainer_Events.md#onViewDidDisappear) | Invoked when the native layout view disappears. |
| [onViewDidLoad](nativeContainer_Events.md#onViewDidLoad) | Invoked after the view is loaded. |
| [onViewWillAppear](nativeContainer_Events.md#onViewWillAppear) | Invoked when the native layout view is about to appear on the screen. |
| [onViewWillDisppear](nativeContainer_Events.md#onViewWillAppear) | Invoked when the native layout view is about to appear on the screen. |
| [onWillMoveToParentViewController](nativeContainer_Events.md#onWillMoveToParentViewController) | Invoked just before the view controller is added or removed from the view controller container. |

  

#### Data Management

| Events | Description |
| --- | --- |
| [onCreated](nativeContainer_Events.md#onCreated) | Helps you create and add native widgets/views to the NativeContainer Widget, which is passed as a parameter to the callback. |
| [onCleanup](nativeContainer_Events.md#onCleanup) | Using the onCleanup event, you can clear the views/widgets created using the onCreated event, when the form is being hidden. |

 

#### 3D Touch

| Methods | Description |
| --- | --- |
| [registerForPeekandPop](nativeContainer_Methods.md#register) | Registers a widget to enable 3D Touch peek and pop gestures. |
| [setOnPeek](nativeContainer_Methods.md#setOnPek) | Sets and overrides the existing onPeekCallback for the widget. |
| [setOnPop](nativeContainer_Methods.md#setOnPop) | Overrides the existing onPopCallback for the widget. |
| [unregisterForPeekandPop](nativeContainer_Methods.md#unregist) | Unregisters a widget from 3D Touch peek and pop gestures. |

 

#### User Input Handling

| Methods | Description |
| --- | --- |
| [addGestureRecognizer](nativeContainer_Methods.md#addGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |
| [removeGestureRecognizer](nativeContainer_Methods.md#removeGestureRecognizer) | Allows you to remove the specified gesture recognizer for the specified widget. |
| [setGestureRecognizer](nativeContainer_Methods.md#setGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |

 

#### Enabling RTL

| Properties | Description |
| --- | --- |
| [retainContentAlignment](nativeContainer_Properties.md#retainContentAlignment) | Helps to retain the content alignment of the widget while applying RTL. |
| [retainFlexPositionProperties](nativeContainer_Properties.md#retainFlexPositionProperties) | Helps to retain the left, right and padding properties while applying RTL. |
| [retainFlowHorizontalAlignment](nativeContainer_Properties.md#retainFlowHorizontalAlignment) | Enables you to change the horizontal flow of the widget from left to right. |

#### Miscellaneous

| Methods | Description |
| --- | --- |
| [getBadge](nativeContainer_Methods.md#getBadge) | Enables you to read the badge value (if any) attached to the specified widget. |
| [setBadge](nativeContainer_Methods.md#setBadge) | Enables you to set the badge value to the given widget at the upper, right corner of the widget. |

 

| Properties | Description |
| --- | --- |
| [transform](nativeContainer_Properties.md#transfor) | Contains an animation transformation that can be used to animate the widget. |
| [type](nativeContainer_Properties.md#type) | Denotes the type of the NativeContainer Widget in the JS layer. |

#### Configurations Common To All Widgets

| Properties | Description |
| --- | --- |
| [isVisible](nativeContainer_Properties.md#isVisible) | Controls the visibility of the NativeContainer Widget on the form. |
| [id](nativeContainer_Properties.md#id) | id is a unique identifier of the NativeContainer Widget consisting of alphanumeric characters. |

 

| Methods | Description |
| --- | --- |
| [convertPointFromWidget](nativeContainer_Methods.md#convertPointFromWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [convertPointToWidget](nativeContainer_Methods.md#convertPointToWidget) | Allows you to convert the coordinate system from a point (receiver's coordinate system) to a widget. |
| [getContainerView](nativeContainer_Methods.md#getContainerView) | Returns the NativeContainer layout view. |
| [removeFromParent](nativeContainer_Methods.md#removeFromParent) | Allows you to remove a child widget from a parent widget. |
| [setEnabled](nativeContainer_Methods.md#setEnabled) | Specifies the widget that must be enabled or disabled. |
| [setFocus](nativeContainer_Methods.md#setFocus) | Specifies the widget on which there must be focus. |
| [setVisibility](nativeContainer_Methods.md#setVisibility) | Use this method to set the visibility of the widget. |

NativeContainer Widget Basics
-----------------------------

> **_Note:_** You cannot add the widgets from the Default Library of Volt MX Iristo the NativeContainer Widget.

In the Widgets palette, the NativeContainer Widget appears only after a NativeFunction is imported to the Volt MX Iris and when the respective native canvas is selected. For example, if you have imported the NativeFunction corresponding to the Android native, the NativeContainer Widget appears only when Android canvas is selected. For more information on importing the NativeFunction, see [Importing NativeFunction](../../../Iris/iris_api_dev_guide/content/importing_ssm.md).

You can place the NativeContainer Widget in the FlexForm, FlexContainer, FlexScrollContainer, and Master Flex/FlexScroll containers. You cannot add the NativeContainer widget to other container widgets like Tab and TabPane, and also in a template. Even a Master Widget containing a NativeContainer Widget cannot be placed in a template.

The NativeContainer Widget adheres to the flex container semantics as the NativeContainer can be placed in all the flex container widgets. The NativeContainer Widget supports all positional and dimensional properties. For more information on flex container semantics, see [Flex Container Rules](FlexContainerRules.md).

The actual layout view displayed on the screen is platform-specific. The platform-specific layouts differ from platform to platform and are displayed only for the respective platforms. For Android, RelativeLayout is used whereas for iOS, Auto Layout is used. The following links provide more information on the platform-specific layouts.

*   RelativeLayout: [http://developer.Android.com/reference/Android/widget/RelativeLayout.html](http://developer.android.com/reference/android/widget/RelativeLayout.html)
*   Auto Layout: [https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/AutolayoutPG/index.html#//apple\_ref/doc/uid/TP40010853-CH7-SW1](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AutolayoutPG/index.md#//apple_ref/doc/uid/TP40010853-CH7-SW1)

All the APIs, constants, and properties of these layouts can be used on the Layout returned using the NativeContainer’s Events and Methods.

