                               

MenuItem Widget
===============

MenuItem is a choice on the Menu. It is typically a command or function such as Application Logout, Form Exit, Sending SMS, or other options that you can select inside a Menu.

You can add MenuItems for a specific Form. These MenuItems appear when you navigate to the Form (that contains the MenuItems) and select the Menu button on the device. The added MenuItems appear along with the regular device MenuItems for that Form.

Following are the real-time use cases of MenuItem widget:

*   Menu items in a banking application could be Accounts, Transactions, Payments, Transfers and Services.
    
*   Many applications that offer services such as food delivery have a menu bar at the bottom of the application, that contain menu items like cart, explore, and more.
    

The MenuItem widget capabilities can be broadly categorized into the following:

*   [Miscellaneous](#miscellaneous)
*   [Configurations Common To All Widgets](#configurations-common-to-all-widgets)

 

#### Miscellaneous

| Properties | Description |
| --- | --- |
| [focusImage](Menuitem_Basic_Properties.md#focusIma) | Specifies the image to be displayed when the focus is on the MenuItem. |
| [image](Menuitem_Basic_Properties.md#image) | Specifies the image to be displayed for the MenuItem. |
| [title](Menuitem_Basic_Properties.md#title) | Specifies the title of the menuitem. |
| [type](Menuitem_Basic_Properties.md#type) | Specifies the type of the MenuItem as ok, back, or exit. |

 

| Events | Description |
| --- | --- |
| [onClick](Menuitem_Events.md#onClick) | An event callback is invoked by the platform when the user performs a click action on the Menuitem. |

#### Configurations Common To All Widgets

| Properties | Description |
| --- | --- |
| [id](Menuitem_Basic_Properties.md#id) | id is a unique identifier of Menuitem consisting of alpha numeric characters. |
| [info](Menuitem_Basic_Properties.md#info) | A custom JSObject with the key value pairs that a developer can use to store the context with the widget. |

 

MenuItem Widget Basics
----------------------

> **_Note:_** Menuitem is supported only on Android/Android tablet, and J2ME.

### Important Considerations

*   You cannot specify a skin for a MenuItem.
*   BlackBerry 10 platform does not support _onClick_ event as writable property.

