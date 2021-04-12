---
layout: "documentation"
category: "iris_widget_prog_guide"
---
                               

MenuContainer Widget
====================

A MenuContainer is a horizontal strip that can contain any number of Menus and MenuItems. The menus provide the access to functions such as navigate to a specified form, access to an external link, or a specific user action.

This widget is available for the Desktop Web platform only.

Following are the real-time use cases of MenuContainer widget:

*   Menu container in banking applications contain menu items such as: Accounts, Payments, Transfers and Services.
    
*   Some social media applications have a menu bar at the bottom, that contains menu container for each of the menu items like search, post, and profile.
    

The MenuContainer widget capabilities can be broadly categorized into the following:

*   [Data Management](#data-management)
*   [3D Touch](#3d-touch)
*   [User Input Handling](#user-input-handling)
*   [UI Appearance](#ui-appearance)
*   [Miscellaneous](#miscellaneous)
*   [Configurations Common To All Widgets](#configurations-common-to-all-widgets)

 

#### Data Management

| Methods | Description |
| --- | --- |
| [addAll](MenuContainer_Methods.html#addAll) | Allows you to add new data to the menu container widget. |
| [addDataAt](MenuContainer_Methods.html#addDataA) | Allows you to add an array of menu items at a given index. |
| [removeAll](MenuContainer_Methods.html#removeAll) | Used to remove all the menu items and sub menus from the menu container. |
| [removeAt](MenuContainer_Methods.html#removeAt) | Used to remove the menu item from hierarchy based on the index provided. |
| [setData](MenuContainer_Methods.html#setData) | Allows you to set new data to the menuContainer widget. |
| [setDataAt](MenuContainer_Methods.html#setDataAt) | Allows you to set/modify the menu item at a particular index in the hierarchy with in the menuContainer. |

 

| Properties | Description |
| --- | --- |
| [data](MenuContainer_Basic_Properties.html#data) | Specifies the menu items that must be displayed in the Menu. |
| [selectedMenuIndex](MenuContainer_Basic_Properties.html#selected) | Indicates the selected Menu Item. The index starts from 0. |
| [selectedMenuItem](MenuContainer_Basic_Properties.html#selected2) | Returns the selected menu item present at the [selectedMenuIndex.](MenuContainer_Basic_Properties.html#selected) |
| [widgetDataMap](MenuContainer_Basic_Properties.html#widgetDa) | Specifies the mapping information between the widget id's and the keys in the data. |

#### 3D Touch

| Methods | Description |
| --- | --- |
| [registerForPeekandPop](MenuContainer_Methods.html#registerForPeekandPop) | Registers a widget to enable 3D Touch peek and pop gestures. |
| [setOnPeek](MenuContainer_Methods.html#setOnPeek) | Sets and overrides the existing onPeekCallback for the widget. |
| [setOnPop](Map_Methods.html#setOnPop) | Overrides the existing onPopCallback for the widget. |
| [unregisterForPeekandPop](MenuContainer_Methods.html#unregisterForPeekandPop) | Unregisters a widget from 3D Touch peek and pop gestures. |

#### User Input Handling

| Events | Description |
| --- | --- |
| [onClick](MenuContainer_Events.html#onClick) | An event callback is invoked by the platform when the user performs a click action on the MenuContainer. |
| [onRightClick](MenuContainer_Events.html#onRightClick) | An event callback is invoked by the platform when the user performs a right-click action on the MenuContainer. |

 

| Methods | Description |
| --- | --- |
| [addGestureRecognizer](MenuContainer_Methods.html#addGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |
| [removeGestureRecognizer](MenuContainer_Methods.html#removeGestureRecognizer) | Allows you to remove the specified gesture recognizer for the specified widget. |
| [setGestureRecognizer](MenuContainer_Methods.html#setGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |

 

#### UI Appearance

| Properties | Description |
| --- | --- |
| [activeSkin](MenuContainer_Basic_Properties.html#activeSk) | Specifies the skin for a menu item that is currently selected. |
| [collapsedImage](MenuContainer_Basic_Properties.html#collapse) | Specifies the image to collapse an extended menu. |
| [contextMenu](MenuContainer_Basic_Properties.html#contextM) | The context specific menu will be displayed with the array of menu items (appropriate to the widget in focus) on right-click mouse. |
| [expandedImage](MenuContainer_Basic_Properties.html#expanded) | Specifies the image to expand a collapsed menu. |
| [hoverSkin](MenuContainer_Basic_Properties.html#hoverSki) | Specifies the look and feel of a widget when the cursor hovers on the widget. |
| [margin](MenuContainer_Basic_Properties.html#margin) | Defines the space around a widget. |
| [marginInPixel](MenuContainer_Basic_Properties.html#marginIn) | Indicates if the margin is to be applied in pixels or in percentage. |
| [menuItemTemplate](MenuContainer_Basic_Properties.html#menuItem) | Indicates a common template to be used for each menuItem while creating the menu items and filling the data. |
| [orientation](MenuContainer_Basic_Properties.html#orientat) | Specifies how you can stack the widgets within the MenuContainer. |
| [padding](MenuContainer_Basic_Properties.html#padding) | Defines the space between the content of the widget and the widget boundaries. |
| [paddingInPixel](MenuContainer_Basic_Properties.html#paddingI) | Indicates if the padding is to be applied in pixels or in percentage. |
| [viewType](MenuContainer_Basic_Properties.html#viewType) | Specifies the view of the MenuContainer when expanded. |
| [widgetAlignment](MenuContainer_Basic_Properties.html#widgetAl) | Indicates how a widget is to be anchored with respect to its parent. |

#### Miscellaneous

| Methods | Description |
| --- | --- |
| [getBadge](MenuContainer_Methods.html#getBadge) | Enables you to read the badge value (if any) attached to the specified widget. |
| [setBadge](MenuContainer_Methods.html#setBadge) | Enables you to set the badge value to the given widget at the upper, right corner of the widget. |

#### Configurations Common To All Widgets

| Methods | Description |
| --- | --- |
| [convertPointFromWidget](MenuContainer_Methods.html#convertPointFromWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [convertPointToWidget](MenuContainer_Methods.html#convertPointToWidget) | Allows you to convert the coordinate system from a point (receiver's coordinate system) to a widget. |
| [removeFromParent](MenuContainer_Methods.html#removeFromParent) | Allows you to remove a child widget from a parent widget. |
| [setEnabled](MenuContainer_Methods.html#setEnabled) | Specifies the widget that must be enabled or disabled. |
| [setFocus](MenuContainer_Methods.html#setFocus) | Specifies the widget on which there must be focus. |
| [setVisibility](MenuContainer_Methods.html#setVisibility) | Use this method to set the visibility of the widget. Default : true |

 

| Properties | Description |
| --- | --- |
| [isVisible](MenuContainer_Basic_Properties.html#isVisibl) | Controls the visibility of a widget on the form. |
| [id](MenuContainer_Basic_Properties.html#id) | id is a unique identifier of MenuContainer consisting of alpha numeric characters. |
| [info](MenuContainer_Basic_Properties.html#info) | A custom JSObject with the key value pairs that a developer can use to store the context with the widget. |

MenuContainer Widget Basics
---------------------------

> **_Note:_** MenuContainer is supported in Desktop Web platform only.

When do I use a MenuContainer?

You can use a MenuContainer in the following scenario:

*   to navigate to other forms in the application.
*   to perform an action on an onClick event of a menu.
*   to provide customized options in the Menu for a Form.  
      
    For example, in a Retail Application, you can have menus showing various segments of products. You can add number of menu items on a MenuContainer.

### Creating a MenuContainer Using a Constructor: voltmx.ui.MenuContainer

{% highlight voltMx %}
var menuContainer = new voltmx.ui.MenuContainer(basicConf, layoutConf, pspConf);
{% endhighlight %}

*   **basicConf** is an object with basic properties.
*   **layoutConf** is an object with layout properties.
*   **pspConf** is an object with platform specific properties.

> **_Note:_** The configuration properties should be passed only in the respective configuration objects otherwise they are ignored.

Example

{% highlight voltMx %}//Defining the properties for a MenuContainer.
var mnuBasic = {
    id: "menu1",
    hoverSkin: "mnuhovSkin",
    activeSkin: "mnuactSkin",
    data: [{
            template: hbox2,
            label2: {
                text: "News",
                isVisble: false
            },
            image2: "btn.png",
            children: []
        }, {
            template: hbox2,
            label2: {
                text: "Science"
            },
            image2: "btn.png",
            children: []
        }, {
            template: hbox2,
            label2: {
                text: "Sports"
            },
            image2: "btn.png",
            children: [{
                    template: hbox2,
                    label2: {
                        text: "Football"
                    },
                    image2: "btn.png"
                }, {
                    template: hbox2,
                    label2: {
                        text: "Cricket"
                    },
                    image2: "btn.png",
                    children: [{
                            template: hbox2,
                            label2: {
                                text: "India"
                            },
                            image2: "btn.png",
                            children: [{
                                template: hbox2,
                                label2: {
                                    text: "Test Match"
                                },
                                image2: "btn.png"
                            }, {
                                template: hbox2,
                                label2: {
                                    text: "One Day Match"
                                },
                                image2: "btn.png"
                            }]
                        }, {
                            template: hbox2,
                            label2: {
                                text: "England"
                            },
                            image2: "btn.png"
                        }, {
                            template: hbox2,
                            label2: {
                                text: "Australia"
                            },
                            image2: "btn.png"
                        }
                    }]
            }],
        isVisible: true,
        menuItemTemplate: hbox2,
        skin: "mnuSkin",
        isVisible: true,
        widgetDataMap: {
            label2: "label2",
            image2: "image2"
        }
    };

    var mnuLayout = {
        padding: [5, 5, 5, 5],
        margin: [5, 5, 5, 5],
        containerWeight: 100,
        paddingInPixel: true,
        marginInPixel: true,
        widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT
    };

    var mnuPSP = {
        viewType: constants.MENU_CONTAINER_VIEW_DROPDOWNVIEW
    };

    //Creating the MenuContainer.
    var menu1 = new voltmx.ui.MenuContainer(mnuBasic, mnuLayout, mnuPSP);

    //addAll method call
    menu1.addAll([{
        template: hbox2,
        label2: {
            text: "Politics"
        },
        image2: "btn.png",
        children: []
    }]);
{% endhighlight %}

