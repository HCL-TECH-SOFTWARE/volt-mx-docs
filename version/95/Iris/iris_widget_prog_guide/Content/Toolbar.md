                               

You are here: Toolbar Widget

Toolbar Widget
==============

The Toolbar Widget allows you to add native iOS toolbars to your application. This widget is applicable for the iOS platform only.

A toolbar appears at the bottom of a application and contains context sensitive buttons for performing actions relevant to the current form. Toolbars are translucent, may have a background tint, and can be hidden when the user is unlikely to need them. Use a toolbar when navigation isn’t needed, or you want multiple controls for managing content. If navigation is needed, consider using an app menu.

Don't use a toolbar and an app menu on the same form. If you do this, the app menu items appear at the bottom of the form and the toolbar shows above app menu items.

Following are real-time use cases of Tool Bar widget:

*   In music apps, tool bar is used to display controls such as play, pause, skip, etc.,
    
*   In social networking apps, tool bar can be used to display icons for the actions such as deleting a specific message and composing a new message.
    

<!-- For more information see the [Toolbars](https://developer.apple.com/documentation/uikit/uitoolbar?language=objc) and [UI guidelines](https://developer.apple.com/design/human-interface-guidelines/toolbars) topics in Apple's developer documentation. -->

For more information see the [Toolbars](https://developer.apple.com/design/human-interface-guidelines/toolbars) topic in Apple's developer documentation.

The Toolbar widget capabilities can be broadly categorized into the following:

*   [UI Appearance](#ui-appearance)
*   [Enabling RTL](#enabling-rtl)
*   [Miscellaneous](#miscellaneous)

#### UI Appearance

  
| Properties | Description |
| --- | --- |
| [barStyle](Toolbar_Properties.md#barStyle) | Determines the toolbar bar appearance. |
| [barTintColor](Toolbar_Properties.md#barTintColor) | Determines the tint color of the toolbar bar background. |
| [tintColor](Toolbar_Properties.md#tintColor) | Determines the tint color to apply to the toolbar items and bar button items. - hex string |
| [translucent](Toolbar_Properties.md#translucent) | Indicates if the toolbar is translucent. |

 

| Methods | Description |
| --- | --- |
| [setBarButtonItems](Toolbar_Methods.md#setBarButtonItems) | Allows you to set the buttons on the toolbar. |
| [setBackgroundImage](Toolbar_Methods.md#setBackgroundImage) | Allows you to set the background image for the toolbar. |
| [setShadowImage](Toolbar_Methods.md#setShadowImage) | Allows you to specify the shadow image for the toolbar. |

 

#### Enabling RTL

| Properties | Description |
| --- | --- |
| [retainContentAlignment](Toolbar_Properties.md#retainContentAlignment) | Helps to retain the content alignment of the widget while applying RTL. |
| [retainFlexPositionProperties](Toolbar_Properties.md#retainFlexPositionProperties) | Helps to retain the left, right and padding properties while applying RTL. |
| [retainFlowHorizontalAlignment](Toolbar_Properties.md#retainFlowHorizontalAlignment) | Enables you to change the horizontal flow of the widget from left to right. |

#### Miscellaneous

| Properties | Description |
| --- | --- |
| [barButtonItems](Toolbar_Properties.md#barButtonItems) | Contains an array of BarButtonItem objects. |
| [isToolBarBottomAttached](Toolbar_Properties.md#isToolBarBottomAttached) | Determines if the toolbar is docked to the bottom of the form. |

 

Toolbar Widget Basics
---------------------

For an overview of using this widget see [Tool and Navigation bars for iOS.](Tool_and_Navigation_bars_for_iOS.md)

