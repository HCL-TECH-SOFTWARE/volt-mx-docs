---
layout: "documentation"
category: "iris_widget_prog_guide"
---
                                

You are here: [TabPane Widget](#tabpane-widget) > [TabPane Widget Basics](#tabpane-widget-basics) > Creating a TabPane Using a Constructor: voltmx.ui.TabPane

TabPane Widget
==============

A TabPane widget is a container widget that allows you to organize multiple tabs within it. Each Tab will in turn hold a collection of widgets within the same area of the Form. You can only view one Tab a time. Every Tab in the TabPane widget consists of a certain type of information, and is displayed when the user selects the corresponding Tab.

Tab Pane widget can have the following views:

*   Default view
    
*   Collapsible view
    
*   Page view
    

Following are a few real-time use cases of Tab Pane widget:

*   Tabs are extensively used in news websites to display national, international, and state news in various tabs.
    
*   Tabs are used in shopping websites categorizing men’s fashion, women’s fashion, and kids’ fashion into various tabs.
    

Widgets are normally added to your application using Volt MX Iris, but can also be added from code. For general information on using widgets in Volt MX Iris, see [Designing an Application]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Part_II_CreatingAnApplication.html) in the Volt MX Iris [User Guide]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Iris_User_Guide.html).

For general information on the TabPane widget see the []({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Button.html)[TabPane]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/TabPane.html?Highlight=tab_pane) topic in the Volt MX Iris User Guide.

The TabPane widget capabilities can be broadly categorized into the following:

*   [Layout](#layout)
*   [Data Management](#data-management)
*   [User Input Handling](#user-input-handling)
*   [3D Touch](#3d-touch)
*   [UI Appearance](#ui-appearance)
*   [Miscellaneous](#miscellaneous)
*   [Configurations Common To All Widgets](#configurations-common-to-all-widgets)

Layout
------

 

| Properties | Description |
| --- | --- |
| [anchorPoint](CheckBox_Properties.html#anchorPo) | Specifies the anchor point of the widget bounds rectangle using the widget's coordinate space. |
| [bottom](TabPane_Properties.html#bottom) | Determines the bottom edge of the widget and is measured from the bottom bounds of the parent container. |
| [centerX](TabPane_Properties.html#centerX) | Determines the center of a widget measured from the left bounds of the parent container. |
| [centerY](TabPane_Properties.html#centerY) | Determines the center of a widget measured from the top bounds of the parent container. |
| [height](TabPane_Properties.html#height) | Determines the height of the widget and measured along the y-axis. |
| [layoutType](TabPane_Properties.html#layoutType) | Defines the type of the layout of widget. Layout type can be grid or normal. |
| [left](TabPane_Properties.html#left) | Determines the lower left corner edge of the widget and is measured from the left bounds of the parent container. |
| [maxHeight](TabPane_Properties.html#maxHeigh) | Specifies the maximum height of the widget and is applicable only when the height property is not specified. |
| [maxWidth](TabPane_Properties.html#maxWidth) | Specifies the maximum width of the widget and is applicable only when the width property is not specified. |
| [minHeight](TabPane_Properties.html#minHeigh) | Specifies the minimum height of the widget and is applicable only when the height property is not specified. |
| [minWidth](TabPane_Properties.html#minWidth) | Specifies the minimum width of the widget and is applicable only when the width property is not specified. |
| [right](TabPane_Properties.html#right) | Determines the lower right corner of the widget and is measured from the right bounds of the parent container. |
| [tabHeaderHeight](TabPane_Properties.html#tabHeade2) | Specifies the height of the Tab header in pixels. |
| [top](TabPane_Properties.html#top) | Determines the top edge of the widget and measured from the top bounds of the parent container. |
| [width](TabPane_Properties.html#width) | Determines the width of the widget and is measured along the x-axis. |
| [zIndex](TabPane_Properties.html#zIndex) | Specifies the stack order of a widget. |

 

Data Management
---------------

 

| Methods | Description |
| --- | --- |
| [addTab](TabPane_Methods.html#addTab) | Used to add a tab to the TabPane widget. |
| [addTabAt](TabPane_Methods.html#addTabAt) | Used to add a tab at the specified index to the TabPane. |
| [clone](TabPane_Methods.html#clone) | When this method is used on a container widget, then all the widgets inside the container are cloned. |
| [removeTabById](TabPane_Methods.html#removeTabByld) | Used to remove a tab based on the tabid on the TabPane. |

 

| Properties | Description |
| --- | --- |
| [layoutMeta](TabPane_Properties.html#layoutMeta) | A custom Object with the key, value pairs that developer can use to provide the meta info about the grid layout. |

3D Touch
--------

| Methods | Description |
| --- | --- |
| [registerForPeekandPop](Slider_Method.html#register) | Registers a widget to enable 3D Touch peek and pop gestures. |
| [setOnPeek](Slider_Method.html#setOnPek) | Sets and overrides the existing onPeekCallback for the widget. |
| [setOnPop](Slider_Method.html#setOnPop) | Overrides the existing onPopCallback for the widget. |
| [unregisterForPeekandPop](Slider_Method.html#unregist) | Unregisters a widget from 3D Touch peek and pop gestures. |

User Input Handling
-------------------

| Methods | Description |
| --- | --- |
| [addGestureRecognizer](TabPane_Methods.html#addGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |
| [removeGestureRecognizer](Slider_Method.html#removeGestureRecognizer) | Allows you to remove the specified gesture recognizer for the specified widget. |
| [setGestureRecognizer](Slider_Method.html#setGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |

 

| Properties | Description |
| --- | --- |
| [scrollsToTop](TabPane_Properties.html#scrollsT) | This property enables you to scroll the TabPane to top on tapping a device’s status bar. |
| [retainPositionInTab](TabPane_Properties.html#retainPositionInTab) | Indicates whether each individual tab should retain its scroll position when the TabPanes are switched over. |

UI Appearance
-------------

| Properties | Description |
| --- | --- |
| [activeSkin](TabPane_Properties.html#activeSkin) | This is a skin property. Skin to be applied when a TabPane is active. |
| [autogrowMode](TabPane_Properties.html#autogrow) | Used to set the height of a widget dynamically based on the height of the selected tabs and tab header. |
| [inactiveSkin](TabPane_Properties.html#inactiveSkin) | Skin to be applied for all inactive tabs. |
| [layoutType](TabPane_Properties.html#layoutType) | Defines the type of the layout of widget. Layout type can be grid or normal. |
| [pageSkin](TabPane_Properties.html#pageSkin) | Specifies the skin for page indicator. |
| [tabHeaderTemplate](TabPane_Properties.html#tabHeade) | Accepts reference to a box widget which represents a UI template for a custom tab header. |
| [viewType](TabPane_Properties.html#viewType) | Specifies the view type the Tab Pane should display. |
| [viewConfig](TabPane_Properties.html#viewConf) | The view configuration for different view types. |

Miscellaneous
-------------

| Methods | Description |
| --- | --- |
| [getBadge](TabPane_Methods.html#getBadge) | Enables you to read the badge value (if any) attached to the specified widget. |
| [setBadge](TabPane_Methods.html#setBadge) | Enables you to set the badge value to the given widget at the upper, right corner of the widget. |

| Properties | Description |
| --- | --- |
| [activeTabs](TabPane_Properties.html#activeTabs) | Indicates the selected Tabs indices. Index starts from 0. |
| [cursorType](TabPane_Properties.html#cursorType) | Specifies the type of the mouse pointer used. |
| [isMaster](TabPane_Properties.html#isMaster) | Specifies whether the container is a master container. |
| [widgetSwipeMove](TabPane_Properties.html#widgetSwipeMove) | Used to enable and configure the left or right swipe actions for a widget. |

Configurations Common To All Widgets
------------------------------------

| Methods | Description |
| --- | --- |
| [convertPointFromWidget](TabPane_Methods.html#convertPointFromWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [convertPointToWidget](TabPane_Methods.html#convertPointToWidget) | Allows you to convert the coordinate system from a point (receiver's coordinate system) to a widget. |
| [removeFromParent](TabPane_Methods.html#removeFromParent) | Allows you to remove a child widget from a parent widget. |
| [setEnabled](TabPane_Methods.html#setEnabled) | Specifies the widget that must be enabled or disabled. |
| [setFocus](TabPane_Methods.html#setFocus) | Specifies the widget on which there must be focus. |
| [setVisibility](TabPane_Methods.html#setVisibility) | Use this method to set the visibility of the widget. |

| Events | Description |
| --- | --- |
| [onTabClick](TabPane_Events.html#onTabClick) | Event callback invoked when the tab is clicked. |
| [postOnclickJS](TabPane_Events.html#postOncl) | This event allows the developer to execute custom JavaScript function after the onTabClick callback of the TabPane is invoked. |
| [preOnclickJS](TabPane_Events.html#preOncli) | This event allows the developer to execute custom JavaScript function before the onTabClick callback of the TabPane is invoked. |

| Properties | Description |
| --- | --- |
| [enable](TabPane_Properties.html#enable) | Allows you to make a widget visible but not actionable. |
| [enableCache](TabPane_Properties.html#enableCa) | Enables you to improve the performance of Positional Dimension Animations. |
| [info](TabPane_Properties.html#info) | A custom JS Object with the key value pairs that a developer can use to store the context with the widget. |
| [id](TabPane_Properties.html#id) | id is a unique identifier of a TabPane consisting of alpha numeric characters. |
| [isVisible](TabPane_Properties.html#isVisible) | This property controls the visibility of the TabPane on the form. |

TabPane Widget Basics
---------------------

[Click here to view TabPane features specific to Desktop Web platform](#TabPane)

### Creating a TabPane Using a Constructor: voltmx.ui.TabPane

{% highlight voltMx %}
var tab = new voltmx.ui.TabPane (basicConf, layoutConf, pspConf);
{% endhighlight %}

*   **basicConf** is an object with basic properties.
*   **layoutConf** is an object with layout specific properties.
*   **pspConf** is an object with platform specific properties.

> **_Note:_** The configuration properties should be passed only in the respective configuration objects otherwise they are ignored.

Example

{% highlight voltMx %}//The below is the callback for onTabClick event.
function onTabClick(tabpane, tabIndex) {
 /* Write your logic here*/
}

//Defining the properties for TabPane.
var tabBasic = {
 id: "tPane",
 "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
 info: {
  key: "TabPane"
 },
 activeSkin: "aSkin",
 activeFocusSkin: "aFSkin",
 inactiveSkin: "inActiveSkin",
 viewType: constants.TABPANE_VIEW_TYPE_TABVIEW,
 screenLevelWidget: true,
 isVisible: true,
 retainPositionInTab: true,
 needPageIndicator: true,
 selectedTabIndex: 0,
 onTabClick: onTabClick
};

var tabLayout = {
 padding: [5, 5, 5, 5],
 margin: [5, 5, 5, 5],
 paddingInPixel: true,
 marginInPixel: true,
 widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT,
 containerWeight: 99
};

var tabPSP = {};

//Creating the TabPane.
var tabPane = new voltmx.ui.TabPane(tabBasic, tabLayout, tabPSP);
{% endhighlight %}

### Customizing Appearance

You can customize the appearance of the TabPane widget using the following properties:

*   [widgetAlignment](Widget_Common_Properties.html#Alignmen): Specifies the alignment of the widget.
*   margin: Defines the space around the widget.
*   padding: Defines the space between the content of the widget and the widget boundaries.
*   activeSkin: Specifies the skin that must be applied to an active tab.
*   activeFocusSkin: Specifies the skin that must be applied to the Tab in focus.
*   inactiveSkin: Specifies the skin that must be applied to a Tab that is inactive.

### Important Considerations

TabPane widget has the following considerations:

*   The TabPane widget occupies 100% of the screen width.

*   You can navigate within the TabPane using only the down key.
*   If you press the down key, the focus shifts to the next widget in the TabPane.
*   If you press the down key while you are on the last widget in the TabPane, you are taken to the top most widget in the TabPane.
*   If you press the right or the left arrow keys, you move to next or previous tabs.
*   Tab cycling is supported (i.e, if you are on the last tab and you press the right arrow, you move to the first tab)

*   On devices which have a navigation key, the following are applicable:
*   Each Tab has a context menu. This menu is displayed in the menu options whenever the Tab is in focus.
*   Tab remembers the control on which there was focus. For example, if control 2 of Tab2 is in focus, and you navigate to Tab1, when you navigate back to Tab2, control 2 will be in focus and not the first item in the Tab.
*   On iOS platform, following are the limitations:
    
    *   TabPane skin supports only two border styles plain and rounded corner.
    *   TabPane skin border style does not support complete rounded. It you set border style as complete rounded it will show border style as plain.
    
    *   If you set border style as rounded corner, only the top portion of button gets rounded, but not the complete tab.

