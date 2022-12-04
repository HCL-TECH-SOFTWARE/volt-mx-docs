                                

You are here: Creating a FlexScrollContainer Using a Constructor: voltmx.ui.FlexScrollContainer

FlexScrollContainer Widget
==========================

A _FlexScrollContainer_ is a scrollable container which allows you to scroll the content in horizontal or vertical direction. It can contain any number of widgets within it.

You can add the FlexScrollContainer widget only to the FlexForm. This widget will be available in the Widgets palette when the FlexForm is selected in the app canvas.

Here are some scenarios where you can use the FlexScrollContainer widget:

*   You can display a lot of information in a single screen. You need not scroll the entire page.
    
*   Scroll bar can be enabled to the container widget area, and you need not scroll the entire page.
    
*   You can enable paging, and swipe to see a new screen in the place of old screen in the container widget.
    

Widgets are normally added to your application using Volt MX Iris, but can also be added from code. For general information on using widgets in Volt MX Iris, see [Designing an Application](../../../Iris/iris_user_guide/Content/Part_II_CreatingAnApplication.md) in the [Iris User Guide](../../../Iris/iris_user_guide/Content/Introduction.md).

For general information on the FlexScrollContainer widget see the [](../../../Iris/iris_user_guide/Content/Button.md)[FlexScrollContainer](../../../Iris/iris_user_guide/Content/FlexScrollContainer.md) topic in the Volt MX Iris User Guide.

The FlexScrollContainer widget capabilities can be broadly categorized into the following:

*   [Layout](#layout)
*   [Animations](#animations)
*   [Scrolling Functionalities](#scrolling-functionalities)
*   [Data Management](#data-management)
*   [3D Touch](#3d-touch)
*   [User Input Handling](#user-input-handling)
*   [Enabling RTL](#enabling-rtl)
*   [Miscellaneous](#miscellaneous)
*   [Configurations Common To All Widgets](#configurations-common-to-all-widgets)

#### Layout

  
| Properties | Description |
| --- | --- |
| [anchorPoint](FlexScrollContainer_Properties.md#anchorPo) | Specifies the anchor point of the widget bounds rectangle using the widget's coordinate space. |
| [centerX](FlexScrollContainer_Properties.md#centerX) | Determines the center of a widget measured from the left bounds of the parent container. |
| [centerY](FlexScrollContainer_Properties.md#centerY) | Determines the center of a widget measured from the top bounds of the parent container. |
| [clipBounds](FlexScrollContainer_Properties.md#clipBounds) | Child widgets will be clipped to the bounds of the FlexScrollContainer if this property is set to true. |
| [contentSize](FlexScrollContainer_Properties.md#contentS) | Specifies the width and height of the container to accommodate all the widgets placed in it. |
| [contentSizeMeasured](FlexScrollContainer_Properties.md#contentS2) | Specifies the width and height of the container measured in dp. |
| [height](FlexScrollContainer_Properties.md#height) | Determines the height of the widget and measured along the y-axis. |
| [layoutType](FlexScrollContainer_Properties.md#layoutTy) | Specifies if the arrangement of the widgets either in free form or horizontal or vertical direction. |
| [left](FlexScrollContainer_Properties.md#left) | Determines the lower left corner edge of the widget and is measured from the left bounds of the parent container. |
| [maxHeight](FlexScrollContainer_Properties.md#maxHeigh) | Specifies the maximum height of the widget and is applicable only when the height property is not specified. |
| [maxWidth](FlexScrollContainer_Properties.md#maxWidth) | Specifies the maximum width of the widget and is applicable only when the width property is not specified. |
| [minHeight](FlexScrollContainer_Properties.md#minHeigh) | Specifies the minimum height of the widget and is applicable only when the height property is not specified. |
| [minWidth](FlexScrollContainer_Properties.md#minWidth) | Specifies the minimum width of the widget and is applicable only when the width property is not specified. |
| [top](FlexScrollContainer_Properties.md#top) | Determines the top edge of the widget and measured from the top bounds of the parent container. |
| [width](FlexScrollContainer_Properties.md#width) | Determines the width of the widget and is measured along the x-axis. |
| [zIndex](FlexScrollContainer_Properties.md#zIndex) | Specifies the stack order of a widget. |

 

| Methods | Description |
| --- | --- |
| [forceLayout](FlexScrollContainer_Methods.md#forceLay) | When this method is called, underlying OS layout cycle is forced to layout the widgets of the FlexContainer. |

 

#### Animations

| Methods | Description |
| --- | --- |
| [animate](FlexScrollContainer_Methods.md#animate) | Applies an animation to the widget. |

 

| Properties | Description |
| --- | --- |
| [transform](FlexScrollContainer_Properties.md#transfor) | Contains an animation transformation that can be used to animate the widget. |
| [widgetSwipeMove](FlexScrollContainer_Properties.md#widgetSwipeMove) | Used to enable and configure the left or right swipe actions for a widget. |

 

#### Scrolling Functionalities

| Properties | Description |
| --- | --- |
| [allowHorizontalBounce](FlexScrollContainer_Properties.md#allowHor) | Specifies whether the scroll bounce is enabled or disabled in the horizontal direction. |
| [allowVerticalBounce](FlexScrollContainer_Properties.md#allowVer) | Specifies whether the scroll bounce is enabled or disabled in the vertical direction. |
| [animateIcons](FlexScrollContainer_Properties.md#animateIcons) | Enables the pull to refresh and push to refresh icons to rotate by 180 degrees. |
| [bounces](FlexScrollContainer_Properties.md#bounces) | Specifies whether the scroll bounce is enabled or disabled. |
| [bouncesZoom](FlexScrollContainer_Properties.md#bouncesZ) | Specifies whether the scroll view animates the content scaling when the scaling exceeds the maximum or minimum limits. |
| [decelerating](FlexScrollContainer_Properties.md#decelera) | Returns whether the content is moving in the scroll view after the user lifted their finger. |
| [enableGpuScrolling](FlexScrollContainer_Properties.md#enableGp) | Enables you to specify how most of the property updates and events for the FlexScrollContainer are handled. |
| [enableOnScrollWidgetPositionForSubwidgets](FlexScrollContainer_Properties.md#enableOnScrollWidgetPositionForSubwidgets) | This property enables the FlexScrollContainer widget to iterate into all the widgets that make use of the onScrollWidgetPosition event. |
| [enableScrolling](FlexScrollContainer_Properties.md#enableSc) | Specifies whether the scrolling is enabled on the container or not. |
| [horizontalScrollIndicator](FlexScrollContainer_Properties.md#horizont) | Specifies whether the scroll indicator to be shown or not in the horizontal direction. |
| [overScrollX](FlexScrollContainer_Properties.md#overScrollX) | Used to implement over scrolling behavior while scrolling horizontally. |
| [overScrollY](FlexScrollContainer_Properties.md#overScrollY) | Used to implement over scrolling behavior while scrolling vertically. |
| [pullToRefreshI18NKey](FlexScrollContainer_Properties.md#pullToRefreshI18NKey) | Specifies the i18N key for the "Pull to refresh" text when the FlexScrollContainer is pulled from the top. |
| [pullToRefreshIcon](FlexScrollContainer_Properties.md#pullToRefreshIcon) | Specifies the icon to be displayed when the FlexScrollContainer is pulled from the top. |
| [pullToRefreshSkin](FlexScrollContainer_Properties.md#pullToRefreshSkin) | Specifies the skin to be applied to the text that is displayed when the FlexScrollContainer is pulled from the top. |
| [pushToRefreshI18NKey](FlexScrollContainer_Properties.md#pushToRefreshI18NKey) | Specifies the i18N key for the "Push to refresh" text when the FlexScrollContainer is pushed from the bottom. |
| [pushToRefreshIcon](FlexScrollContainer_Properties.md#pushToRefreshIcon) | Specifies the icon to be displayed when the FlexScrollContainer is pushed from the bottom. |
| [pushToRefreshSkin](FlexScrollContainer_Properties.md#pushToRefreshSkin) | Specifies the skin to be applied to the text that is displayed when the FlexScrollContainer is pushed from the bottom. |
| [releaseToPullRefreshI18NKey](FlexScrollContainer_Properties.md#releaseToPullRefreshI18NKey) | Specifies the i18N key for the "Release to refresh" text, when the FlexScrollContainer is pulled from the top. |
| [releaseToPushRefreshI18NKey](FlexScrollContainer_Properties.md#releaseToPushRefreshI18NKey) | Specifies the i18N key for the "Release to refresh" text, when the FlexScrollContainer is pushed from the bottom. |
| [scrollDirection](FlexScrollContainer_Properties.md#scrollDi) | Specifies the direction in which the widget should scroll. |
| [scrollsToTop](FlexScrollContainer_Properties.md#scrollsT) | Enables you to scroll the FlexScrollCotainer to top on tapping a device’s status bar. |
| [tracking](FlexScrollContainer_Properties.md#tracking) | Specifies whether the user has touched the content to initiate scrolling. |
| [verticalScrollIndicator](FlexScrollContainer_Properties.md#vertical) | Specifies whether the scroll indicator must be shown in the vertical direction. |

 

| Methods | Description |
| --- | --- |
| [onScrollEnd](FlexScrollContainer_Methods.md#onScroll) | An event callback is invoked by the platform when the scrolling is ended. |
| [scrollToEnd](FlexScrollContainer_Methods.md#scrollTo) | This method gives you the control to scroll to the end of the form. |
| [scrollToWidget](FlexScrollContainer_Methods.md#scrollTo2) | This method gives you the control to scroll the FlexForm up to the position of selected widget. |

 

| Events | Description |
| --- | --- |
| [onDecelerationStarted](FlexScrollContainer_Events.md#onDecele) | An event callback is invoked by the platform when the user stops scrolling but the content still moves before the content actually stops. |
| [onScrollEnd](FlexScrollContainer_Events.md#onScroll) | An event callback is invoked by the platform when the scrolling is ended. |
| [onScrolling](FlexScrollContainer_Events.md#onScroll2) | An event callback is invoked by the platform when the scrolling is in progress. |
| [onScrollStart](FlexScrollContainer_Events.md#onScroll3) | An event callback is invoked by the platform when the user starts scrolling the content. |
| [onScrollTouchReleased](FlexScrollContainer_Events.md#onScroll4) | An event callback is invoked by the platform when the user touch is released from the touch surface. |
| [onScrollWidgetPosition](FlexScrollContainer_Events.md#onScrollWidgetPosition) | This event callback is invoked by the platform when the widget location position gets changed on scrolling. |
| [scrollingEvents](FlexScrollContainer_Events.md#scrollingEvents) | This event callback is invoked while scrolling the FlexScrollContainer horizontally or vertically. |

 

#### Data Management

| Methods | Description |
| --- | --- |
| [add](FlexScrollContainer_Methods.md#add) | Used to add widgets to the Form. |
| [addAt](FlexScrollContainer_Methods.md#addAt) | Used to add widgets to the Form at the specified index. |
| [clone](FlexScrollContainer_Methods.md#clone) | When this method is used on a container widget, then all the widgets inside the container are cloned. |
| [remove](FlexScrollContainer_Methods.md#remove) | Removes a widget from the form container. |
| [removeAt](FlexScrollContainer_Methods.md#removeAt) | Removes a widget at the given index from the Form container. |
| [removeAll](FlexScrollContainer_Methods.md#removeAl) | Removes all the widget on the container. |

 

#### 3D Touch

| Methods | Description |
| --- | --- |
| [registerForPeekandPop](FlexScrollContainer_Methods.md#register) | Registers a widget to enable 3D Touch peek and pop gestures. |
| [setOnPeek](FlexScrollContainer_Methods.md#setOnPek) | Sets and overrides the existing onPeekCallback for the widget. |
| [setOnPop](FlexScrollContainer_Methods.md#setOnPop) | Overrides the existing onPopCallback for the widget. |
| [unregisterForPeekandPop](FlexScrollContainer_Methods.md#unregist) | Unregisters a widget from 3D Touch peek and pop gestures. |

#### User Input Handling

| Events | Description |
| --- | --- |
| [onZoomEnd](FlexScrollContainer_Events.md#onZoomEn) | An event callback is invoked by the platform when the zooming has ended. |
| [onZooming](FlexScrollContainer_Events.md#onZoomin) | An event callback is invoked by the platform when the container is zooming. |
| [onZoomStart](FlexScrollContainer_Events.md#onZoomSt) | An event callback is invoked by the platform when the container is about to zoom. |
| [widgetToZoom](FlexScrollContainer_Events.md#widgetTo) | An event callback is invoked by the platform to return one of the child widgets of source to zoom. |

 

| Methods | Description |
| --- | --- |
| [addGestureRecognizer](FlexScrollContainer_Methods.md#addGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |
| [removeGestureRecognizer](FlexScrollContainer_Methods.md#removeGestureRecognizer) | Allows you to remove the specified gesture recognizer for the specified widget. |
| [setGestureRecognizer](FlexScrollContainer_Methods.md#setGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |
| [setZoomScale](FlexScrollContainer_Methods.md#setZoomS) | Allows you the zoom the widgets with an option to animate. |

 

| Properties | Description |
| --- | --- |
| [bouncesZoom](FlexScrollContainer_Properties.md#bouncesZ) | Specifies whether the scroll view animates the content scaling when the scaling exceeds the maximum or minimum limits. |
| [disableZoom](FlexScrollContainer_Properties.md#disableZoom) | Allows you to enable or disable zooming the FlexScrollContainer. |
| [maxZoomScale](FlexScrollContainer_Properties.md#maxZoomS) | Specifies the maximum scale factor that can be applied to the scroll view's content. |
| [minZoomScale](FlexScrollContainer_Properties.md#minZoomS) | Specifies the minimum scale factor that can be applied to the scroll view's content. |
| [dragging](FlexScrollContainer_Properties.md#dragging) | Specify whether the user has begun scrolling the content. |
| [zooming](FlexScrollContainer_Properties.md#zooming) | A boolean value indicates whether the content view is currently zooming in or out. |
| [zoomScale](FlexScrollContainer_Properties.md#zoomScal) | Specifies the current scale factor applied to the FlexScrollContainer content. |

#### Enabling RTL

| Properties | Description |
| --- | --- |
| [retainContentAlignment](FlexScrollContainer_Properties.md#retainContentAlignment) | Helps to retain the content alignment of the widget while applying RTL. |
| [retainFlexPositionProperties](FlexScrollContainer_Properties.md#retainFlexPositionProperties) | Helps to retain the left, right and padding properties while applying RTL. |
| [retainFlowHorizontalAlignment](FlexScrollContainer_Properties.md#retainFlowHorizontalAlignment) | Enables you to change the horizontal flow of the widget from left to right. |

#### UI Appearance

| Properties | Description |
| --- | --- |
| [backgroundColor](FlexScrollContainer_Properties.md#backgrou) | Specifies the background color of the widget in hex format. |
| [opacity](FlexScrollContainer_Properties.md#opacity) | Specifies the opacity of the widget. |
| [showFadingEdges](FlexScrollContainer_Properties.md#showFadingEdges) | Enables you to define the display of fading edges for the FlexScrollForm widget. |

| Methods | Description |
| --- | --- |
| [setContentOffset](FlexScrollContainer_Methods.md#setConte) | Gives you the control to offset a portion of the content in a FlexScrollContainer to bring the widgets in invisible area to visible area. |

#### Miscellaneous

| Properties | Description |
| --- | --- |
| [contentOffset](FlexScrollContainer_Properties.md#contentO) | Returns the current coordinates of the top left corner of the scrollable region in the item. |
| [contentOffsetMeasured](FlexScrollContainer_Properties.md#contentO2) | Specifies the x and y coordinates of the top-left of the scrollable region measured in dp. |
| [cursorType](FlexScrollContainer_Properties.md#cursorType) | Specifies the type of the mouse pointer used. |
| [isMaster](FlexScrollContainer_Properties.md#isMaster) | Specifies whether the container is a master container. |

| Methods | Description |
| --- | --- |
| [getBadge](FlexScrollContainer_Methods.md#getBadge) | Enables you to read the badge value (if any) attached to the specified widget. |
| [setBadge](FlexScrollContainer_Methods.md#setBadge) | Enables you to set the badge value to the given widget at the upper, right corner of the widget. |
| [setDefaultUnit](FlexScrollContainer_Methods.md#setDefau) | Specifies the default unit to be used for interpretation of numbers with no qualifiers when passed to layout properties. |
| [widgets](FlexScrollContainer_Methods.md#widgets) | Returns an array of the widget references which are direct children of the FlexScrollContainer widget. |

#### Configurations Common To All Widgets

| Properties | Description |
| --- | --- |
| [accessibilityConfig](FlexScrollContainer_Properties.md#accessibilityConfig) | Enables you to control accessibility behavior and alternative text for the widget. |
| [blur](FlexScrollContainer_Properties.md#blur) | Enables you to make the widget look unfocused. |
| [enable](FlexScrollContainer_Properties.md#enable) | Allows you to make a widget visible but not actionable. |
| [isVisible](FlexScrollContainer_Properties.md#isVisibl) | Controls the visibility of a widget on the FlexScrollContainer. |
| [parent](FlexForm_Properties.md#parent) | Helps you access the parent of the widget. |
| [enableCache](FlexScrollContainer_Properties.md#enableCa) | Enables you to improve the performance of Positional Dimension Animations. |
| [info](FlexScrollContainer_Properties.md#info) | A custom JSObject with the key value pairs that a developer can use to store the context with the widget. |

| Methods | Description |
| --- | --- |
| [convertPointFromWidget](FlexScrollContainer_Methods.md#convertPointFromWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [convertPointToWidget](FlexScrollContainer_Methods.md#convertPointToWidget) | Allows you to convert the coordinate system from a point (receiver's coordinate system) to a widget. |
| [removeFromParent](FlexScrollContainer_Methods.md#removeFromParent) | Allows you to remove a child widget from a parent widget. |
| [setEnabled](FlexScrollContainer_Methods.md#setEnabled) | Specifies the widget that must be enabled or disabled. |
| [setFocus](FlexScrollContainer_Methods.md#setFocus) | Specifies the widget on which there must be focus. |
| [setVisibility](FlexScrollContainer_Methods.md#setVisibility) | Use this method to set the visibility of the widget. |

FlexScrollContainer Widget Basics
---------------------------------

### Creating a FlexScrollContainer Using a Constructor: voltmx.ui.FlexScrollContainer

```

var FlexScrollContainer1 = new voltmx.ui.FlexScrollContainer(basicConf, layoutConf, pspConf);
```

*   **basicConf** is an object with basic properties.
*   **layoutConf** is an object with layout properties.
*   **pspConf** is an object with platform specific properties.

> **_Note:_** An empty constructor leads to all defaults values and optionally all writable properties can be passed as a dictionary to the constructor.

Example

```
//Defining the properties of FlexScrollContainer

function testfrm_flexScrollContainer1_onScrollStart_seq0(eventobject) {
    normalform.show();
}

function testfrm_flexScrollContainer1_onScrollEnd_seq0(eventobject) {
    normalform.show();
}

function testfrm_flexScrollContainer1_onScrollTouchReleased_seq0(eventobject) {
    normalform.show();
}

function testfrm_flexScrollContainer1_onScrolling_seq0(eventobject) {
    normalform.show();
}

function testfrm_flexScrollContainer1_onDecelerationStarted_seq0(eventobject) {
    normalform.show();
}


function addWidgetstestfrm() {
    var flexScrollContainer1 = new voltmx.ui.FlexScrollContainer({
        "id": "flexScrollContainer1",
        "top": "5dp",
        "left": "6dp",
        "width": "97.15%",
        "height": "271dp",
        "zIndex": 1,
        "isVisible": true,
        "enableScrolling": true,
        "scrollDirection": voltmx.flex.SCROLL_BOTH,
        "horizontalScrollIndicator": true,
        "verticalScrollIndicator": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": true,
        "Location": "[6,5]",
        "onScrollStart": testfrm_flexScrollContainer1_onScrollStart_seq0,
        "onScrollEnd": testfrm_flexScrollContainer1_onScrollEnd_seq0,
        "onScrollTouchReleased": testfrm_flexScrollContainer1_onScrollTouchReleased_seq0,
        "onScrolling": testfrm_flexScrollContainer1_onScrolling_seq0,
        "onDecelerationStarted": testfrm_flexScrollContainer1_onDecelerationStarted_seq0,
        "bouncesZoom": true,
        "zoomScale": 1.0,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "layoutType": voltmx.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    flexScrollContainer1.setDefaultUnit(voltmx.flex.DP);
    flexScrollContainer1.add();
    testfrm.add(
        flexScrollContainer1);
}

function testfrmGlobals() {
    var MenuId = [];
    testfrm = new voltmx.ui.Form2({
        "id": "testfrm",
        "contentOffset": {
            "x": "3dp",
            "y": "4dp"
        },
        "contentSize": {
            "width": "5dp",
            "height": "6dp"
        },
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": false,
        "pagingEnabled": true,
        "title": "myfrmt",
        "needAppMenu": true,
        "enabledForIdleTimeout": true,
        "skin": "frm",
        "zoomScale": 22,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "layoutType": voltmx.flex.FREE_FORM,
        "addWidgets": addWidgetstestfrm
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": true,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "bouncesZoom": false,
        "configureExtendTop": true,
        "configureExtendBottom": false,
        "configureStatusBarStyle": false,
        "extendTop": false,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "fromLeft",
            "transitionEffect": "none"
        },
        "outTransitionConfig": {
            "transitionDirection": "fromRight",
            "transitionEffect": "none"
        }
    });
    testfrm.setDefaultUnit(voltmx.flex.PX);
}
```

### Customizing Appearance

You can customize the appearance of the FlexScrollContainer using the following properties:

*   [Events](FlexScrollContainer_Events.md): Defines the scrolling events for FlexScrollContainer widget.
*   [padding](ScrollBox_Basic_Properties.md#padding): Defines the space between the content of the widget and the widget boundaries.
*   [skin](ScrollBox_Basic_Properties.md#skin): Specify the skin to be applied to the FlexScrollContainer widget.

### Flex Layout Properties

The below image represents the flex layout properties:

![](Resources/Images/layouttype.png)

### Important Considerations

The following are the important considerations of a FlexScrollContainer:

*   If you set the [scrollDirection](FlexScrollContainer_Properties.md#scrollDi) as voltmx.flex.SCROLL\_VERTICAL or voltmx.flex.SCROLL\_BOTH, you have to set a value in the [height](FlexScrollContainer_Properties.md#height) property.
*   When a widget is placed inside a horizontal parent widget. For example: Segment, it will take 40% of the parent widget or the available free space of the widget.

