                                 

You are here: Creating a CollectionView Using a Constructor: voltmx.ui.CollectionView

CollectionView Widget
=====================

A CollectionView consists of multiple items, and each item can have multiple child widgets. The CollectionView widget is similar to the [SegmentedUI](Segment.md#segmentedui-widget) widget, and shares many of that widgets properties and methods. The items that fill the CollectionView widget are based on templates.

CollectionView widget can be created only through code.

Following are the real-time use cases of CollectionView widget:

*   **Group Data:** Group data into rows and columns using CollectionView widgets.
*   **Data Handling:** Displays data from various services in your application by using CollectionView widgets. For example, if you have a service that contains the data of various luxury cars, its images, and prices, you can display it in your application using CollectionView widget.
*   **Define Templates**: Create templates to define reusable structure for CollectionView widgets. Templates help you to attain a consistent look-and-feel for the rows and sections of a CollectionView widget.

Widgets are normally added to your application using Volt MX Iris, but can also be added from code. For general information on using widgets in Volt MX Iris, see [Designing an Application](../../../Iris/iris_user_guide/Content/Part_II_CreatingAnApplication.md) in the [Iris User Guide](../../../Iris/iris_user_guide/Content/Introduction.md).

For a more hands-on approach on how you can implement CollectionView widget, import and preview the **File Gallery** sample app by using Volt MX Iris.

[![](Resources/Images/Download_Button_10_230x35.png)](https://marketplace.hclvoltmx.com/items/file-gallery-sample-app)

The CollectionView widget capabilities can be broadly categorized into the following:

*   [3D Touch](#3d-touch)
*   [Data Management](#data-management)
*   [User Input Handling](#user-input-handling)
*   [Layout](#layout)
*   [Scrolling Functionalities](#scrolling-functionalities)
*   [UI Appearance](#ui-appearance)
*   [Enabling RTL](#enabling-rtl)
*   [Miscellaneous](#miscellaneous)
*   [Configurations Common To All Widgets](#configurations-common-to-all-widgets)

#### Layout

 

| Properties | Description |
| --- | --- |
| [centerX](CollectionView_Properties.md#centerX) | Determines the center of a widget measured from the left bounds of the parent container. |
| [centerY](CollectionView_Properties.md#centerY) | Determines the center of a widget measured from the top bounds of the parent container. |
| [contentOffset](CollectionView_Properties.md#contentOffset) | Returns the current coordinates of the top left corner of the scrollable region in the item. |
| [contentOffsetMeasured](CollectionView_Properties.md#contentOffsetMeasured) | Returns the current coordinates of the top left corner of the scrollable region in the item. |
| [contentSize](CollectionView_Properties.md#contentSize) | Specifies the size of the scrollable area in the widget. Collection view items will appear in this area. |
| [itemTemplate](CollectionView_Properties.md#itemTemplate) | Indicates the common template to be used for each item while creating the item and filling the data. |
| [layout](CollectionView_Properties.md#layoutType) | Determines how the items get arranged within the CollectionView widget. |
| [maxHeight](CollectionView_Properties.md#maxHeigh) | Specifies the maximum height of the widget and is applicable only when the height property is not specified. |
| [maxWidth](CollectionView_Properties.md#maxWidth) | Specifies the maximum width of the widget and is applicable only when the width property is not specified. |
| [minHeight](CollectionView_Properties.md#minHeigh) | Specifies the minimum height of the widget and is applicable only when the height property is not specified. |
| [minWidth](CollectionView_Properties.md#minWidth) | Specifies the minimum width of the widget and is applicable only when the width property is not specified. |
| [right](CollectionView_Properties.md#right) | Determines the lower right corner of the widget and is measured from the right bounds of the parent container. |
| [top](CollectionView_Properties.md#top) | Determines the top edge of the widget and measured from the top bounds of the parent container. |
| [width](CollectionView_Properties.md#width) | Determines the width of the widget and is measured along the x-axis. |
| [zIndex](CollectionView_Properties.md#zIndex) | Specifies the stack order of a widget. |

 

#### UI Appearance

| Properties | Description |
| --- | --- |
| [itemSelectedSkin](CollectionView_Properties.md#rowFocus) | Specifies the skin that must be applied when user selects the item. |
| [itemSkin](CollectionView_Properties.md#itemSkin) | The default skin for each item. |
| [pressedSkin](CollectionView_Properties.md#Pressed) | Specifies the skin to indicate that an item of the collection is pressed or clicked. |
| [minItemSpace](CollectionView_Properties.md#minItemSpace) | Specifies the minimum spacing between items. |
| [minLineSpace](CollectionView_Properties.md#minLineSpace) | Specifies the minimum spacing between lines of items. |
| [opacity](CollectionView_Properties.md#opacity) | Specifies the opacity of the widget. |
| [pullToRefreshView](CollectionView_Properties.md#pullToRefreshView) | Displays a Flex Container above the content area of the CollectionView widget when the widget is pulled down from the top. |
| [pushToRefreshView](CollectionView_Properties.md#pushToRefreshView) | Displays a Flex Container below the content area of the CollectionView widget when the widget is pushed up from the bottom. |
| [releaseToPullRefreshView](CollectionView_Properties.md#releaseToPullRefreshView) | Displays a Flex Container above the content area of the CollectionView widget when the widget is pulled down from the top and then released. |
| [releaseToPushRefreshView](CollectionView_Properties.md#releaseToPushRefreshView) | Displays a Flex Container below the content area of the CollectionView widget when the widget is pushed up from the bottom and released. |
| [retainSelection](CollectionView_Properties.md#retainSe) | Specifies if the segment should retain the selection made even when the user navigates out and back to the form. |
| [sectionFooterSkin](CollectionView_Properties.md#sectionFooterSkin) | Specifies the skin to be applied to the Section footer. |
| [sectionHeaderSkin](CollectionView_Properties.md#sectionH) | Specifies the skin to be applied to the Section Header. |
| [sectionFooterTemplate](CollectionView_Properties.md#sectionFooterTemplate) | Specifies the template to use for each section when creating the section footer and filling the data. |
| [sectionHeaderTemplate](CollectionView_Properties.md#sectionH2) | Specifies the common template to be used for each section when creating the section header and filling the data. |
| [skin](CollectionView_Properties.md#widgetSk) | Specifies the skin to be applied to the entire CollectionView. |

 

| Events | Description |
| --- | --- |
| [onItemDisplay](CollectionView_Events.md#onItemDisplay) | Triggered when you display any item in the CollectionView widget. |
| [onItemSelect](CollectionView_Events.md#onItemSelect_) | Triggered when the user selects any item in the CollectionView. |

 

#### Scrolling Functionalities

| Methods | Description |
| --- | --- |
| [scrollToItemAtIndex](CollectionView_Methods.md#scrollToItemAtIndex) | Scrolls the collection view so that the item at given index comes into the view port. |

 

| Properties | Description |
| --- | --- |
| [reachingBeginningOffset](CollectionView_Properties.md#reachingBeginningOffset) | Specifies an offset from the top of the content area of the CollectionView widget. |
| [reachingEndOffset](CollectionView_Properties.md#reachingEndOffset) | Specifies an offset from the bottom of the content area of the CollectionView widget. |
| [scrollDirection](CollectionView_Properties.md#scrollDirection) | Specifies the direction in which the widget should scroll. |
| [scrollsToTop](CollectionView_Properties.md#scrollsT) | Enables you to scroll the view to the top by tapping a device’s status bar. |
| [showScrollbars](CollectionView_Properties.md#showScro) | Specifies if the scrollbars are visible all the time. |

 

| Events | Description |
| --- | --- |
| [onDecelerationStarted](CollectionView_Events.md#onDecelerationStarted) | Triggered only on iOS. It is called when deceleration starts at the end of scrolling. |
| [onPull](CollectionView_Events.md#onPull) | Invoked by the platform when scrolling the CollectionView widget from it's edges. |
| [onPush](CollectionView_Events.md#onPush) | Invoked by the platform when scrolling the CollectionView widget widget from it's edges. |
| [onReachingBegining](CollectionView_Events.md#onReachingBegining) | Called when scrolling reaches the beginning of the CollectionView widget. |
| [onReachingEnd](CollectionView_Events.md#onReachingEnd) | Called when scrolling reaches the end of the CollectionView widget. |
| [onScrollStart](CollectionView_Events.md#onScrollStart) | Indicates that the scroll container inside the CollectionView widget started scrolling. |
| [onScrollTouchReleased](CollectionView_Events.md#onScrollTouchReleased) | Indicates that user scrolling touch on the display is released. This callback is called asynchronously. |
| [onScrolling](CollectionView_Events.md#onScrolling) | Indicates that segment scrolling is in progress. This callback is called asynchronously. |
| [onScrollEnd](CollectionView_Events.md#onScrollEnd) | Indicates that segment scrolling has come to an end. |
| [onScrollWidgetPosition](CollectionView_Events.md#onScrollWidgetPosition) | Invoked by the platform when the widget location position gets changed on scrolling. |

 

#### Data Management

| Properties | Description |
| --- | --- |
| [data](CollectionView_Properties.md#data) | Specifies the set of values for each item. |

 

| Methods | Description |
| --- | --- |
| [addAll](CollectionView_Methods.md#addAll) | Allows you to add new items to the collection. |
| [addSectionAt](CollectionView_Methods.md#addSecti) | Allows you to add one section with items to the collection. |
| [removeAll](CollectionView_Methods.md#removeAl) | Removes all the widget on the container. |
| [removeAt](CollectionView_Methods.md#removeAt) | Removes a widget at the given index from the Form container. |
| [removeSectionAt](CollectionView_Methods.md#removeSe) | Allows you to remove a section at the given index within a collection. |

#### 3D Touch

| Methods | Description |
| --- | --- |
| [registerForPeekandPop](CollectionView_Methods.md#register) | Registers a widget to enable 3D Touch peek and pop gestures. |
| [setOnPeek](CollectionView_Methods.md#setOnPek) | Sets and overrides the existing onPeekCallback for the widget. |
| [setOnPop](CollectionView_Methods.md#setOnPop) | Overrides the existing onPopCallback for the widget. |
| [unregisterForPeekandPop](CollectionView_Methods.md#unregist) | Unregisters a widget from 3D Touch peek and pop gestures. |

 

#### User Input Handling

| Methods | Description |
| --- | --- |
| [addGestureRecognizer](CollectionView_Methods.md#addGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |
| [removeGestureRecognizer](CollectionView_Methods.md#removeGestureRecognizer) | Allows you to remove the specified gesture recognizer for the specified widget. |

 

#### Enabling RTL

| Properties | Description |
| --- | --- |
| [retainContentAlignment](CollectionView_Properties.md#retainContentAlignment) | Helps to retain the content alignment of the widget while applying RTL. |
| [retainFlexPositionProperties](CollectionView_Properties.md#retainFlexPositionProperties) | Helps to retain the left, right and padding properties while applying RTL. |
| [retainFlowHorizontalAlignment](CollectionView_Properties.md#retainFlowHorizontalAlignment) | Enables you to change the horizontal flow of the widget from left to right. |

#### Miscellaneous

| Methods | Description |
| --- | --- |
| [getBadge](CollectionView_Methods.md#getBadge) | Enables you to read the badge value (if any) attached to the specified widget. |
| [setBadge](CollectionView_Methods.md#setBadge) | Enables you to set the badge value to the given widget at the upper, right corner of the widget. |

 

| Properties | Description |
| --- | --- |
| [cursorType](CollectionView_Properties.md#cursorType) | Specifies the type of the mouse pointer used. |
| [isMaster](CollectionView_Properties.md#isMaster) | Specifies whether the container is a master container. |
| [widgetSwipeMove](CollectionView_Properties.md#widgetSwipeMove) | Used to enable and configure the left or right swipe actions for a widget. |

 

#### Configurations common to all widgets

| Methods | Description |
| --- | --- |
| [convertPointFromWidget](CollectionView_Methods.md#convertPointFromWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [convertPointToWidget](CollectionView_Methods.md#convertPointToWidget) | Allows you to convert the receiver's co-ordinate system from a point to a Widget. |
| [removeFromParent](CollectionView_Methods.md#removeFromParent) | Allows you to remove a child widget from a parent widget. |
| [setEnabled](CollectionView_Methods.md#setEnabled) | Specifies the widget that must be enabled or disabled. |
| [setFocus](CollectionView_Methods.md#setFocus) | Specifies the widget on which there must be focus. |
| [setVisibility](CollectionView_Methods.md#setVisibility) | Use this method to set the visibility of the widget. |

 

| Properties | Description |
| --- | --- |
| [accessibilityConfig](CollectionView_Properties.md#accessibilityConfig) | Enables you to control accessibility behavior and alternative text for the widget. |
| [enable](CollectionView_Properties.md#enable) | Allows you to make a widget visible but not actionable. |
| [enableCache](CollectionView_Properties.md#enableCa) | Enables you to improve the performance of Positional Dimension Animations. |
| [id](CollectionView_Properties.md#id) | A unique identifier of Segment consisting of alpha numeric characters. |
| [info](CollectionView_Properties.md#info) | A custom JSObject with the key value pairs that a developer can use to store the context with the widget. |
| [isVisible](CollectionView_Properties.md#isVisibl) | Controls the visibility of a widget on the form. |
| [parent](CollectionView_Properties.md#parent) | Gives you the ability to access the parent of the widget. |

 

CollectionView Widget Basics
----------------------------

A CollectionView item can contain any of the following widgets:

*   [Button](Button.md)
*   [Calendar](Calendar.md)
*   [Canvas](canvas.md#canvas-widget)
*   [Image](Image.md)
*   [Label](label.md)
*   [RichText](RichText.md)
*   [Phone](Phone.md)
*   [Slider](Slider.md)
*   [Switch](Switch.md)
*   [TextArea](TextArea.md)
*   [TextBox](TextBox.md)

The data returned when _selectedItem_ is called on the CollectionView widget when the item has the following widgets:

| Widget Name | Properties |||| Description |
| --- | --- | --- | --- | --- | --- |
| CheckBoxGroup | selectedKeys, selectedKeyValues |||| An array of key value pairs with the keys as mentioned. |
| RadioButtonGroup | selectedKey, selectedKeyValue ||||   |
| ComboBox | selectedKey, selectedKeyValue ||||   |
| TextBox | text ||||   |
| TextArea | text ||||   |
| Calendar | dataComponents |||| An array of the date components |

Each of the above widgets is allowed to have its own skin and control. This gives the flexibility to design a collection view with separate interconnected widgets and expose their properties for mapping.

When a CollectionView [template](#collectionview-templates) is created based on the input data, the template is repeated in the Collection.

### Creating a CollectionView Using a Constructor: voltmx.ui.CollectionView

```

var collection = new voltmx.ui.CollectionView (basicConf, layoutConf, pspConf);
```

*   **basicConf** is an object with basic properties.
*   **layoutConf** is an object with layout properties.
*   **pspConf** is an object with platform specific properties.

> **_Note:_** The configuration properties should be passed only in the respective configuration objects otherwise they are ignored

Example

```
//Defining properties for an item
var basicConf = {
    id: "ItemId",
    isVisible: true,
    widgetSkin: "widSkin",
    itemSkin: "itemSkn",
    itemFocusSkin: "itemFSkn",
    sectionHeaderSkin: "secHSkin",
    widgetDataMap: {
        widgetId1: "dataid1",
        widgetId2: "dataId2",
        widgetId3: "dataId3",
        widgetId4: "secDataId1",
        widgetId5: "secDataId2"
    },
    itemTemplate: box1
};

var layoutConf = {
    padding: [0, 0, 0, 0],
    paddingInPixel: false,
    margin: [5, 5, 5, 5],
    containerWeight: 100
};

var pspConf = {
    bounces: true,
    enableDictionary: false,
    defaultSelection: true
};

//Creating the CollectionView
var collection = new voltmx.ui.CollectionView(basicConf,
    layoutConf, pspConf);

//Reading the alternateRowSkin of the CollectionView	
alert("CollectionView alternateRowSkin ::" + collection.alternateRowSkin);
```

### Important Considerations

The following are the important considerations for the CollectionView widget:

animate() api invocation on widgets inside the items of Collection view will not work.

*   items occupy memory from two perspectives:  
      
    *   The amount of data required is based on the number of items visible. For example, if you set data for 100 sitems, memory will only be allocated for the rows which fit the height of the collection view. If each record is 20dp in height and collection view height is 200dp, then memory for only 10 records will be consumed even when data property has records for 100 items.
    *   View hierarchy (Flex Container and other supported widgets) in each item. If the View hierarchy is complex, the memory usage is high.
*   Images in the Collection View are not scaled and are rendered when autosize property set to false. If the image requires lesser space than the allocated space, the image is center aligned.
*   If you want to hide any elements, do not provide any data for that element
*   When a CollectionView is not set as **screenLevelWidget**, load time of CollectionView increases because all the items are loaded at the beginning, but scrolling speed improves.

> **_Note:_** In general Android SDK does not support the bounce-back feature (rubber band effect). But there are some OEM's which extended the Android SDK to support bounce-back like samsung devices. So to summarize this is a device specific feature rather than an Android SDK feature.

### Item Animation

This section provides a brief introduction to the new item animation features in the following topics.

*   Available Animations
*   item Animations and Flex Layout Properties
*   item Animation Events

#### Available Animations

In items, you can move (translate), rotate, or scale child widgets. For example, you can display a rotating logo or a hand icon that simulates waving by moving back and forth.

Also, your app can slide interface controls into a item from off screen. Or it can simulate the hands of an analog clock moving onscreen.

##### item Animations and Flex Layout Properties

With the item animation capabilities, users can programmatically update the Flex layout properties of widgets in the CollectionViews item. Specifically, event handlers and widget methods can change the following properties.

*   top
*   left
*   right
*   bottom
*   width
*   height
*   centerX
*   centerY
*   zIndex

The values above are set relative to the location of the item that contains them, not the CollectionView widget. For example, setting the top property to zero means that the top of the child widget is aligned with the top of the item that contains it. This means that whenever your code updates the child widget’s x position or scale, it is relative to the item’s width. Likewise, whenever your app changes the y position or scale of a widget within a item, it does so relative to the item’s height.

Even though you set the Flex layout properties of child widgets relative to their containing item, you can still specify a position for the child widget that is outside the bounds of the clipping rectangle of the item or page. So you can have some widgets outside the visible area of the item and slide them into the viewable rectangle when a particular event occurs, such as a button click.

In addition, you can also set the width and height values of child widgets in such a way as to place them outside the viewable area. As with the Flex layout position properties, you can alter the width and height values in the event handlers for events such as button clicks.

#### Item Animation Events

The CollectionView widget now provides events that are specific to item animations. For example, suppose that your app enables a swipe gesture in the items of a CollectionView widget. Imagine that the user of your app has just swiped across a item and your app has made visible changes to the item. If the user then swipes or touches in a different item, whatever was happening in the first item should probably be canceled. The item the user swiped should return to its original position and condition.

In this example, the item that the user first swiped receives an event telling it that the user has touched or swiped something else. Therefore, it knows that the action in progress should not be completed and it restores the item to its original state.

Essentially, with the CollectionView item events, a item being updated can react when properly when the user scrolls the widget or touches something in another item.

The CollectionView widget also supports animation in its doLayout event. Specifically, the doLayout event now received the context information it needs to perform animation updates.

#### Item Animation API Elements

To support CollectionView item animations, the Volt MX Iris API includes the following elements.

*   voltmx.ui.createAnimation Function
*   voltmx.ui.makeAffineTransform Function

### CollectionView Templates

The CollectionView widget enables you to create templates to increase the re-usability of your efforts.

#### What is a Template for CollectionView

CollectionView template enables you to define a template for section headers. Only one template can be used for each item. This is primarily useful for developers to achieve common look and feel of section headers along with few widgets added as part of the section header of an item.

On the iOS platform, in the horizontal or vertical view, when a FlexContainer is used as a template for CollectionView, these properties are not available:

| Positional Properties | Dimensional Properties |
| --- | --- |
| left | minWidth |
| right | maxWidth |
| top | minHeight |
| bottom | maxHeight |
| centerX |   |
| centerY |   |

#### Where to use a CollectionView (section) Template

CollectionView sections are used to differentiate or group a set of items.

The section templates are used:

*   To have uniform look and feel of the section headers.
*   To achieve the behavior of having widgets such as an Image and a label for all the section headers of the item.
*   To perform an action on the event of an onclick of an item or a widget in the section header.

#### Creating a Template for CollectionView

When you want the same information to be displayed across all the Section Headers of a Segment in the application, you have a provision to add a Segment Template using Volt MX Iris. For more information about section headers refer to the _VoltMX Iris User Guide_.

