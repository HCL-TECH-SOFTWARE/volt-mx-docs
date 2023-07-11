
# SegmentedUI Widget (Table) 

## Table  

The Segment widget is a UI component commonly used to display lists or pages of data. Segment widget is a container that provides the capability to define a row template that repeats for every row or page of the specific segment.

You can use the Segment widget to display data from services, group services together, use templates to create the layout of each row, perform actions such as animations and form navigation when users click on a record, and more. These features have been explained in detail here:

**Data Handling**: Display data from various services in the Segment. For example, if you have a service that contains the data of all the employees in an organization, you can display it in your application by using a Segment widget.

![](Resources/Images/data_handling_162x286.png)

**Group Data**: Group data into different sections by using Segment widgets. For example, after you have retrieved all employees’ data from the service mentioned earlier, you can categorize employees based on their respective departments by using another Segment widget.

**Define Templates**: Create templates to define reusable structure for Segment widgets. Templates help you to attain a consistent look-and-feel for the rows and sections of a Segment widget.

**Animations**: Add animation effect to the rows of a Segment widget in order to perform a specific task. One of the main uses of this capability is to enable the option that allows users to delete a Segment row, by swiping the row from right to left.

**Row Click events**: Assign a variety of actions to Segment widgets, which are performed when users click on a Segment row. Actions such as animations, form navigation, and more, can be applied to any row in a Segment. For example, if you have a Segment that contains the list of all employees in an organization, you can click on any row to move to another form where the details of the specific employee are displayed.

Widgets are normally added to your application using Volt MX Iris, but can also be added from code. For general information on using widgets in Volt MX Iris, see [Designing an Application](../../../Iris/iris_user_guide/Content/Part_II_CreatingAnApplication.md) in the [Iris User Guide](../../../Iris/iris_user_guide/Content/Introduction.md).

For general information on the SegmentedUI widget, refer the [Segment2](../../../Iris/iris_user_guide/Content/Segment2.md) topic in the Volt MX Iris User Guide.

> **_Note:_** For a more hands-on approach on the functionality of Segment widget, import and preview the **Segment Widget Feature** sample app by using Volt MX Iris.  
[![](Resources/Images/Download_Button_10_230x35.png)](https://marketplace.hclvoltmx.com/items/segment-widget-feature-app)

<div class="youtube-wrapper"><iframe src="https://www.youtube.com/embed/v2kut_GA82c" allowfullscreen=""></iframe></div>

<div class="youtube-wrapper"><iframe src="https://www.youtube.com/embed/b1Pe5lK5Vmc" allowfullscreen=""></iframe></div>

The SegmentedUI widget capabilities can be broadly categorized into the following:

*   [3D Touch](#3d-touch)
*   [Animations](#animations)
*   [Data Management](#data-management)
*   [Internationalization](#internationalization)
*   [Layout](#layout)
*   [Paging](#paging)
*   [UI Appearance](#ui-appearance)
*   [User Input Handling](#user-input-handling)
*   [State Configurations](#state-configurations)
*   [Enabling RTL](#enabling-rtl)
*   [Miscellaneous](#miscellaneous)
*   [Configurations Common to all Widgets](#configurations-common-to-all-widgets)

#### 3D Touch

  
| Methods | Description |
| --- | --- |
| [registerForPeekandPop](Segment_Methods.md) | Registers a widget to enable 3D Touch peek and pop gestures. |
| [setOnPeek](Segment_Methods.md#setOnPek) | Sets and overrides the existing onPeekCallback for the widget. |
| [setOnPop](Segment_Methods.md#setOnPop) | Overrides the existing onPopCallback for the widget. |
| [unregisterForPeekandPop](Segment_Methods.md#unregist) | Unregisters a widget from 3D Touch peek and pop gestures. |

#### Animations

  
| Methods | Description |
| --- | --- |
| [animate](Segment_Methods.md#animate) | Applies an animation to the widget. |
| [animateRows](Segment_Methods.md#animateRows) | Associates animations with a specific row and its elements. |
| [setAnimations](Segment_Methods.md#setAnimations) | Associates animations to the rows at each operation. |
| [resetSwipeMove](Segment_Methods.md#resetSwipeMove) | This method is used to reset the widget swipe to its initial state. |

 

| Events | Description |
| --- | --- |
| [onRowDisplay](Segment_Events.md#onRowDis) | Overwrites the rows that are affected because of an operation on rows. |

| Properties | Description |
| --- | --- |
| [animateFocusChanges](Segment_Properties.md#animateFocusChanges) | This property is used to bring the row specified in the selectedRowIndex property to the visible region. |
| [transform](Segment_Properties.md#transfor) | Contains an animation transformation that can be used to animate the widget. |
| [widgetSwipeMove](Segment_Properties.md#widgetSwipeMove) | Used to enable and configure the left or right swipe actions for a widget. |

#### Data Management

| Methods | Description |
| --- | --- |
| [addAll](Segment_Methods.md#addAll) | Enables you to add new data to the segment. |
| [addDataAt](Segment_Methods.md#addDataA) | Enables you to add one row of data at a given ind ex or with in a section. |
| [addSectionAt](Segment_Methods.md#addSecti) | Enables you to add one section with rows to the segment. |
| [getFirstVisibleRow](Segment_Methods.md#getFirstVisibleRow) | Returns a JavaScript object containing the first visible row section index and row index. |
| [getLastVisibleRow](Segment_Methods.md#getLastVisibleRow) | Returns a JavaScript object containing the last visible row's section index and row index. |
| [removeAll](Segment_Methods.md#removeAl) | Enables you to remove all the existing rows and sections in a segment. |
| [removeAt](Segment_Methods.md#removeAt) | Enables you to remove the row at the given index or a row with in a section. |
| [removeSectionAt](Segment_Methods.md#removeSe) | Allows you to remove a section at the given index within a segment. |
| [setData](Segment_Methods.md#setData) | Allows you to set new data to the segment. |
| [setDataAt](Segment_Methods.md#setDataA) | Allows you to set data or modify an existing data of a row or within a section. |
| [setSectionAt](Segment_Methods.md#setSecti) | Allows you to set or modify a section with rows to the segment. |

 

| Properties | Description |
| --- | --- |
| [metaInfo](Segment_Properties.md#metaInfo) | Allows to capture row level attributes. |
| [stopRerenderOnSetDataAt](Segment_Properties.md#stopRerenderOnSetDataAt) | Allows only the modified content of a row to be updated when setDataAt method is used. |

 

#### Internationalization

| Properties | Description |
| --- | --- |
| [pullToRefreshI18NKey](Segment_Properties.md#pullToRe) | Specifies the i18N key for "pull to refresh" title. |
| [pushToRefreshI18NKey](Segment_Properties.md#pullToRe2) | Specifies the i18N key for "push to refresh" title. |
| [releaseToPullRefreshI18NKey](Segment_Properties.md#pushToRe) | Specifies the i18N key for "release to refresh" title that appears for pull to refresh. |
| [releaseToPushRefreshI18NKey](Segment_Properties.md#pushToRe2) | Specifies the i18N key for "release to refresh" title that appears for push for refresh. |

#### Layout

| Properties | Description |
| --- | --- |
| [anchorPoint](Segment_Properties.md#anchorPo) | Specifies the anchor point of the widget bounds rectangle using the widget's coordinate space. |
| [bottom](Segment_Properties.md#bottom) | Determines the bottom edge of the widget and is measured from the bottom bounds of the parent container. |
| [centerX](Segment_Properties.md#centerX) | Determines the center of a widget measured from the left bounds of the parent container. |
| [centerY](Segment_Properties.md#centerY) | Determines the center of a widget measured from the top bounds of the parent container. |
| [height](Segment_Properties.md#height) | Determines the height of the widget and measured along the y-axis. |
| [left](Segment_Properties.md#left) | Determines the lower left corner edge of the widget and is measured from the left bounds of the parent container. |
| [maxHeight](Segment_Properties.md#maxHeigh) | Specifies the maximum height of the widget and is applicable only when the height property is not specified. |
| [maxWidth](Segment_Properties.md#maxWidth) | Specifies the maximum width of the widget and is applicable only when the width property is not specified. |
| [minHeight](Segment_Properties.md#minHeigh) | Specifies the minimum height of the widget and is applicable only when the height property is not specified. |
| [minWidth](Segment_Properties.md#minWidth) | Specifies the minimum width of the widget and is applicable only when the width property is not specified. |
| [orientation](Segment_Properties.md#orientat) | Specifies how you can stack the widgets within the SegmentedUI. |
| [right](Segment_Properties.md#right) | Determines the lower right corner of the widget and is measured from the right bounds of the parent container. |
| [rowHeight](Segment_Properties.md#rowHeigh) | Specifies the height of the row of a SegmentedUI. |
| r[owWidth](Segment_Properties.md#rowWidth) | Specifies the width of the row of a SegmentedUI. |
| [top](Segment_Properties.md#top) | Determines the top edge of the widget and measured from the top bounds of the parent container. |
| [width](Segment_Properties.md#width) | Determines the width of the widget and is measured along the x-axis. |
| [zIndex](Segment_Properties.md#zIndex) | Specifies the stack order of a widget. |

| Events | Description |
| --- | --- |
| [doLayout](Segment_Events.md#doLayout) | Invoked for every widget when the widget position and dimensions are computed. |

#### Paging

| Properties | Description |
| --- | --- |
| [retainScrolledPage](Segment_Properties.md#retainScrolledPage) | Enables you to retain the page of the Segment widget after the widget has been reloaded in iOS platform. |
| [needPageIndicator](Segment_Properties.md#needPage) | A Page Indicator is a succession of docs centered below the SegmentedUI widget. |
| [pageOnDotImage](Segment_Properties.md#pageOnDo) | Specifies the image to indicate that the page is currently being viewed. |
| [pageOffDotImage](Segment_Properties.md#pageOffD) | Specifies the image to indicate that the pages that are not been currently viewed. |

 

#### State Configurations

| Properties | Description |
| --- | --- |
| [defaultSelection](Segment_Properties.md#defaultS) | Specifies if the first clickable element (Image or Label) of the segment is selected by default. |
| [retainSelection](Segment_Properties.md#retainSe) | Specifies if the segment should retain the selection made even when the user navigates out of the form and revisits the form. |
| [selectedRowIndex](Segment_Properties.md#selected) | Indicates the currently selected row in single select or multi select modes in the SegmentedUI. |
| [selectedRowIndices](Segment_Properties.md#selected2) | Specifies an array of indexes which indicates the selected rows. |
| [selectedRowItems](Segment_Properties.md#selected3) | Returns the data of the selected rows in the segmentedUI. |
| [selectionBehavior](Segment_Properties.md#selectio) | Specifies if the segment can support single or multiple selection. |
| [selectionBehaviorConfig](Segment_Properties.md#selectio2) | Enabled if you select either singleselect or multiselect. |

 

#### UI Appearance

| Properties | Description |
| --- | --- |
| [alternateRowSkin](Segment_Properties.md#alternat) | Specifies the skin that is applied to every alternate even numbered row in the segment. |
| [border](Segment_Properties.md#border) | Specifies the border to the SegmentedUI. |
| [displayType](Segment_Properties.md#displayT) | Specifies the display type of segmentPageView, either in PivotView or FlipView. |
| [indicator](Segment_Properties.md#indicato) | Specifies the indicator type as rowSelect, rowClick, or none. |
| [opacity](Segment_Properties.md#opacity) | Specifies the opacity of the widget. |
| [pageSkin](Segment_Properties.md#pageSkin) | Specifies the skin for page indicator. |
| [pressedSkin](Segment_Properties.md#Pressed) | Specifies the skin to indicate that the row of the segment is pressed or clicked. |
| [progressIndicatorColor](Segment_Properties.md#progress) | Specifies the color of the progress indicator as white or grey. |
| [pullToRefreshSkin](Segment_Properties.md#pullToRe) | Specifies the skin to be applied to the pull to refresh title. |
| [pushToRefreshSkin](Segment_Properties.md#pushToRe2) | Specifies the skin to be applied to the push to refresh title. |
| [rowFocusSkin](Segment_Properties.md#rowFocus) | Specifies the skin that must be applied when user selects the row. |
| [rowSkin](Segment_Properties.md#rowSkin) | Specifies the skin that must be applied for each row. |
| [sectionHeaderSkin](Segment_Properties.md#sectionH) | Specifies the skin to be applied to the Section Header. |
| [separatorColor](Segment_Properties.md#separato) | Specifies the color of the separator between row of segmentedUI. |
| [separatorRequired](Segment_Properties.md#separato3) | Specifies if the segment should display the separator between the rows of the SegmentedUI. |
| [separatorThickness](Segment_Properties.md#separato2) | Specifies the thickness of the separator in pixels. |
| [showProgressIndicator](Segment_Properties.md#showProg) | Specifies if the progress indicator must be displayed. |
| [viewType](Segment_Properties.md#viewType) | You can use this property to select the view type of a segment. |
| [viewConfig](Segment_Properties.md#viewConfig) | You can use this property to select the view type of a segment. |
| [widgetSkin](Segment_Properties.md#widgetSk) | Specifies the skin to be applied to the entire SegmentedUI. |

 

#### User Input Handling

| Methods | Description |
| --- | --- |
| [addGestureRecognizer](Segment_Methods.md#addGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |
| [removeGestureRecognizer](Segment_Methods.md#removeGestureRecognizer) | Allows you to remove the specified gesture recognizer for the specified widget. |

 

| Events | Description |
| --- | --- |
| [onDragCompleted](Segment_Events.md#onDragCompleted) | Invoked when the drag and drop of a row in the Segment is complete. |
| [onReachingBeginning](Segment_Events.md#onReachingBegining) | Called when scrolling reaches the beginning of the SegmentedUI widget. |
| [onReachingEnd](Segment_Events.md#onReachingEnd) | Called when scrolling reaches the end of the SegmentedUI widget. |
| [onRowClick](Segment_Events.md#onRowCli) | Triggered when the user click any row of the SegmentedUI. |
| [onSwipe](Segment_Events.md#onSwipe) | Triggered when you swipe a row in a segment. |
| [onScrollStart](Segment_Events.md#onScrollStart) | Indicates that scroll container started scrolling. |
| [onScrollTouchReleased](Segment_Events.md#onScrollTouchReleased) | Indicates that user scrolling touch on the display is released. |
| [onScrolling](Segment_Events.md#onScrolling) | Indicates that segment scrolling is in progress. |
| [onScrollEnd](Segment_Events.md#onScrollEnd) | Indicates that segment scrolling has come to an end. |
| [onScrollWidgetPosition](Segment_Events.md#onScrollWidgetPosition) | Callback is invoked by the platform when the widget location position gets changed on scrolling. |

 

#### Enabling RTL

| Properties | Description |
| --- | --- |
| [retainContentAlignment](Segment_Properties.md#retainContentAlignment) | Helps to retain the content alignment of the widget while applying RTL. |
| [retainFlexPositionProperties](Segment_Properties.md#retainFlexPositionProperties) | Helps to retain the left, right and padding properties while applying RTL. |
| [retainFlowHorizontalAlignment](Segment_Properties.md#retainFlowHorizontalAlignment) | Enables you to change the horizontal flow of the widget from left to right. |

#### Miscellaneous

| Methods | Description |
| --- | --- |
| [clearSearch](Segment_Methods.md#clearSearch) | This method clears the filtered results of the Segment widget. |
| [getBadge](Segment_Methods.md#getBadge) | Enables you to read the badge value (if any) attached to the specified widget. |
| [getUpdatedSearchResults](Segment_Methods.md#getUpdatedSearchResults) | This method is used to return the filtered list after applying search on Segment. |
| [searchText](Segment_Methods.md#searchText) | This method provides a method to search the data given inside the Segment widget. |
| [setBadge](Segment_Methods.md#setBadge) | Enables you to set the badge value to the given widget at the upper, right corner of the widget. |

 

| Properties | Description |
| --- | --- |
| [autogrowMode Property (Deprecated)](Segment_Properties.md#autogrow) | Used to set the height of a widget dynamically based on the derived height of the widget’s content, or from the child widget’s contents. |
| [bounces](Segment_Properties.md#bounces) | Specifies whether the scroll view bounces past the edge of the content and back again. |
| [contentInsetAdjustmentType](Segment_Properties.md#contentInsetAdjustmentType) | On scroll view, this property automatically adds the required SegmentedUI insets to the scroll view. |
| [contentOffsetMeasured](Segment_Properties.md#contentOffsetMeasured) | Returns the current coordinates of the top left corner of the scrollable region in the segment. |
| [cursorType](Segment_Properties.md#cursorType) | Specifies the type of the mouse pointer used. |
| [dockSectionHeaders](Segment_Properties.md#dockSect) | Enables you to dock or place the section header at the top of the segment while scrolling the section content. |
| [editStyle](Segment_Properties.md#editStyl) | Specifies the editing style to be applied to the rows in the SegmentedUI. |
| [enableCloneControllerForRowTemplates](Segment_Properties.md#enableCloneControllerForRowTemplates) | Enables the creation of row-specific controllers in Segment row template. |
| [enableDictionary](Segment_Properties.md#enableDi) | Specifies if dictionary must be enabled for easy navigation. |
| [enableHapticFeedback](Segment_Properties.md#enableHapticFeedback) | Allows you to enable or disable haptic feedback on the Segment widget. |
| [enableReordering](Segment_Properties.md#enableReordering) | Allows you enable or disable reordering the rows in a Segment. |
| [groupCells](Segment_Properties.md#groupCel) | Specifies if all the rows in the segment should grouped using a rounded corner background and border. |
| [isMaster](Segment_Properties.md#isMaster) | Specifies whether the container is a master container. |
| [rowTemplate](Segment_Properties.md#rowTempl) | Indicates the common template to be used for each row while creating the row and filling the data. |
| [sectionHeaderTemplate](Segment_Properties.md#sectionH2) | Specifies the common template to be used for each section while creating the section header and filling the data. |
| [screenLevelWidget (deprecated)](Segment_Properties.md#screenLe) | This property specifies whether the widget should occupy the whole container or not. |
| [scrollsToTop](Segment_Properties.md#scrollsT) | This property enables you to scroll the Segment to top on tapping a device’s status bar. |
| [searchBy](Segment_Properties.md#searchBy) | Indicates the identifier of the widget placed inside the row of the SegmentedUI. |
| [searchCriteria](Segment_Properties.md#searchCr) | Specifies the search criteria to be applied when searching has been enabled on the SegmentedUI. |
| [showScrollbars](Segment_Properties.md#showScro) | Specifies if the scrollbars must be visible all the time. |

 

| Events | Description |
| --- | --- |
| [onDidFinishDataLoading](Segment_Events.md#onDidFin) | Triggered when data is finished loading in the segmentedUI using the setData method. |
| [onEditing](Segment_Events.md#onEditin) | Triggered when a user indicates his desire to edit the row (delete or insert). |

#### Configurations Common to All widgets

| Properties | Description |
| --- | --- |
| [accessibilityConfig](Segment_Properties.md#accessibilityConfig) | Enables you to control accessibility behavior and alternative text for the widget. |
| [enable](Segment_Properties.md#enable) | Allows you to make a widget visible but not actionable. |
| [enableCache](Segment_Properties.md#enableCa) | Enables you to improve the performance of Positional Dimension Animations. |
| [id](Segment_Properties.md#id) | A unique identifier of Segment consisting of alpha numeric characters. |
| [info](Segment_Properties.md#info) | A custom JSObject with the key value pairs that a developer can use to store the context with the widget. |
| [isVisible](Segment_Properties.md#isVisible) | Controls the visibility of a widget on the form. |

 

| Methods | Description |
| --- | --- |
| [convertPointFromWidget](Segment_Methods.md#convertPointFromWidget) | Enables you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [convertPointToWidget](Segment_Methods.md#convertPointToWidget) | Enables you to convert the coordinate system from a point (receiver's coordinate system) to a widget. |
| [removeFromParent](Segment_Methods.md#removeFromParent) | Allows you to remove a child widget from a parent widget. |
| [setEnabled](Segment_Methods.md#setEnabled) | Specifies the widget that must be enabled or disabled. |
| [setFocus](Segment_Methods.md#setFocus) | Specifies the widget on which there must be focus. |
| [setVisibility](Segment_Methods.md#setVisibility) | Use this method to set the visibility of the widget. |

 

| Events | Description |
| --- | --- |
| [preOnclickJS](Segment_Events.md#preOncli) | Allows the developer to execute custom javascript function before the onClick callback of the widget is invoked. |
| [postOnclickJS](Segment_Events.md#postOncl) | Allows the developer to execute custom javascript function after the onClick callback of the widget is invoked. |

SegmentedUI Widget Basics
-------------------------

A SegmentedUI can contain [Button,](Button.md) [Calendar,](Calendar.md#calendar-widget) [Image,](Image.md) [Label,](label.md) [RichText,](RichText.md) [Phone,](Phone.md) [Slider,](Slider.md) [Switch,](Switch.md) [TextArea,](TextArea.md) and [TextBox](TextBox.md) widgets. In addition, the following widgets are supported only on the Desktop Web Platform:

*   [CheckBoxGroup](CheckBox.md#checkboxgroup-widget)
*   [RadioButtonGroup](RadioButtonGroup.md#top)

> **_Note:_** For RadioButton and CheckBox widgets masterData should be provided only if the masterDataMap set to the widget initially is different for a particular row.

> **_Note:_** Textbox widget in Segment is only supported in Windows10.

The data returned when _selectedItem_ is called on the SegmentedUI widget when the row has the following widgets:

| Widget Name | Properties |||| Description |
| --- | --- | --- | --- | --- | --- |
| CheckBoxGroup | selectedKeys, selectedKeyValues |||| An array of key value pairs with the keys as mentioned. |
| RadioButtonGroup | selectedKey, selectedKeyValue ||||   |
| TextBox | text ||||   |
| TextArea | text ||||   |
| Calendar | dataComponents |||| An array of the date components |

Each of the above widgets is allowed to have its own skin and control. This gives the flexibility to design a segment with separate interconnected widgets and expose their properties for mapping.

When a SegmentedUI [template](#) is created based on the input data, the segment is repeated in the Segmented UI.

### Creating a SegmentedUI by using a constructor: voltmx.ui.SegmentedUI2

```

var seg = new voltmx.ui.SegmentedUI2 (basicConf, layoutConf, pspConf)
```

*   **basicConf** is an object with basic properties.
*   **layoutConf** is an object with layout properties.
*   **pspConf** is an object with platform specific properties.

> **_Note:_** The configuration properties should be passed only in the respective configuration objects otherwise they are ignored

Example

```
//Defining properties for a Segment
var basicConf = {
    id: "segId",
    isVisible: true,
    widgetSkin: "widSkin",
    rowSkin: "rowSkn",
    rowFocusSkin: "rowFSkn",
    alternateRowSkin: "altSkin",
    sectionHeaderSkin: "secHSkin",
    widgetDataMap: {
        widgetId1: "dataid1",
        widgetId2: "dataId2",
        widgetId3: "dataId3",
        widgetId4: "secDataId1",
        widgetId5: "secDataId2"
    },
    rowTemplate: box1
};

var layoutConf = {
    padding: [5, 5, 5, 5],
    margin: [5, 5, 5, 5],
    containerWeight: 100
};

var pspConf = {
    border: constants.SEGUI_BORDER_TOP_ONLY,
    defaultSelection: true
};

//Creating the Segment
var segment = new voltmx.ui.SegmentedUI2(basicConf, layoutConf, pspConf);

//Reading the alternateRowSkin of the SegmentedUI	
alert("SegmentedUI alternateRowSkin:" + segment.alternateRowSkin);
```

For backward compatibility with support for all deprecated properties and behaviors, use the constructor **voltmx.ui.SegmentedUI**.

```

var seg1= new voltmx.ui.SegmentedUI (basicConf, layoutConf, pspConf)
```

### Important Considerations

The following are the important considerations for the segment widget:

*   Segment occupies memory from two perspectives:  
      
    
    *   Amount of data required from number of rows. For example, if you set data for 100 rows, memory for all the 100 records will be in memory.
    *   View hierarchy (Box and other supported widgets) in each segment row. If the View hierarchy is complex, the memory usage is high.
    
    > **_Note:_** On iPhone, Android, and Windows platforms, if your segment has large data sets (more than 20 records with each record having more than 15 widgets), set the segment as a Screen Level Widget.
    
*   Images in segment are not scaled and are rendered with autosize property set to false. If the image requires lesser space than the allocated space, the image is center aligned.
*   You cannot add any elements to the widgets dynamically. However, if you want to hide any elements, do not provide any data for that element.
*   In the Windows platform, the sections inside the Segment pageview are not supported.
*   In the Desktopweb and SPA platforms, when you create a segment with table view that has a significant amount of data and multiple rows with a fixed height, the platform internally applies optimization logic at segment level. The optimization helps in loading a few rows initially, and then the remaining rows are sequentially loaded while scrolling.
    
    If the segment height suffices to contain all the rows of the segment, then the platform loads all the rows at once.
    
    > **_Note:_** If you try scrolling too fast, you may experience jerky scrolling. If the rows contain images, they may take time to load based on the image file size.
    
*   You can dynamically change the skin of the widgets in the segment using the [Segment Alternate Methods](Segment_Methods.md#top).
*   A SegmentedUI cannot be placed directly in a ScrollBox. It can be placed in a ScrollBox with orientation as Vertical and only then you can place a SegmentedUI on a ScrollBox.
*   The height of the segmentedUI is determined by the content of the widget. If you set the **screenLevelWidget** as _true_, then the height of the segmentedUI widget is the form height excluding headers and footers.
    
    > **_Important:_** The **screenLevelWidget** property is deprecated for FlexForm. You can achieve the behavior of the screenLevelWidget property using the height property. This property only applicable for box layout.
    
*   Whenever a segmentedUI is set as **screenLevelWidget** there is a reduction in load time of the segmentedUI but scrolling speed reduces. This is because the SegmentedUI loads few rows at the load time and the rest of the rows are loaded as user scrolls through the widget. This is recommended option when you have huge number of records.
*   When a segmentedUI is not set as **screenLevelWidget**, load time of segmentedUI increases because all the rows are loaded at the beginning, but scrolling speed improves.

> **_Note:_** In general Android SDK does not support the bounce-back feature (rubber band effect). But there are some OEM's which extended the Android SDK to support bounce-back like samsung devices. So to summarize this is a device specific feature rather than an Android SDK feature.

### Adding a ListBox Widget inside a Segment

You can add a ListBox widget inside a Segment by using the onSelection event.

**Note**: By default, a ListBox contains some masterData. If you want to change the data for a particular ListBox row, you must update the required details in the Segment data.

**onSelection Event**

This is an event callback that is invoked by the platform when you select or deselect an item.

Syntax

onSelection(widget)

The onSelection event callback accepts an additional parameter (context) when a ListBox is placed in a Segment row or section template. The syntax for the context parameter is as follows:

onSelection(widget,context)

Parameters

widget \[widgetref\]

Handle to the widget instance that raised the event.

Context \[Object\]

This is an optional parameter. It is applicable only when you place a ListBox in a Segment rowTemplate or sectionTemplate. The Context Object argument has the following parameters:

*   _rowIndex \[Number\]_: Optional. This is the index of the row that contains the ListBox. It is not available if you place the ListBox in a section header.
    
*   _sectionIndex \[Number\]_: This is the index of the section row that contains the ListBox.
    
*   _widgetInfo \[widgetref\]_: This is the handle to the parent widget instance (Segment) that contains the ListBox.

Platform Availability

*   iOS
*   Android
*   Windows10
*   SPA
*   Desktop Web

Limitations

*   Android
    
    *   While updating the masterData of a particular ListBox row with a different value, you must set the respective values for both selectedKey and selectedKeyValue.

### Row Animation

This section provides a brief introduction to the new row animation features in the following topics.

*   Available Animations
*   Row Animations and Flex Layout Properties
*   Row Height Animation
*   Row Animation Events

#### Available Animations

In Segment rows, you can move (translate), rotate, or scale child widgets. For example, you can display a rotating logo or a hand icon that simulates waving by moving back and forth.

Also, your app can slide interface controls into a row from off screen. Or it can simulate the hands of an analog clock moving onscreen.

#### Row Animations and Flex Layout Properties

With the row animation capabilities, users can programmaticaly update the Flex layout properties of widgets in the Segment’s row. Specifically, event handlers and widget methods can change the following properties.

*   top
*   left
*   right
*   bottom
*   width
*   height
*   centerX
*   centerY
*   zIndex

The values above are set relative to the location of the row that contains them, not the Segment widget. For example, setting the top property to zero means that the top of the child widget is aligned with the top of the row that contains it. This means that whenever your code updates the child widget’s x position or scale, it is relative to the row’s width. Likewise, whenever your app changes the y position or scale of a widget within a row, it does so relative to the row’s height.

Even though you set the Flex layout properties of child widgets relative to their containing row, you can still specify a position for the child widget that is outside the bounds of the clipping rectangle of the row or page. So you can have some widgets outside the visible area of the row and slide them into the viewable rectangle when a particular event occurs, such as a button click.

In addition, you can also set the width and height values of child widgets in such a way as to place them outside the viewable area. As with the Flex layout position properties, you can alter the width and height values in the event handlers for events such as button clicks.

Please note that animating the position or size of widgets only applies to the child widgets within a row, not to the row itself.

#### Row Animation Events

The Segment widget now provides events that are specific to row animations. For example, suppose that your app enables a swipe gesture in the rows of a Segment widget. Imagine that the user of your app has just swiped across a row and your app has made visible changes to the row. If the user then swipes or touches in a different row, whatever was happening in the first row should probably be canceled. The row the user swiped should return to its original position and condition.

In this example, the row that the user first swiped receives an event telling it that the user has touched or swiped something else. Therefore, it knows that the action in progress should not be completed and it restores the row to its original state.

Essentially, with the SegmentedUI row events, a row being updated can react when properly when the user scrolls the SegmentUI widget or touches something in another row.

As of version 7.0, the Segment widget also supports animation in its doLayout event. Specifically, the doLayout event now received the context information it needs to perform animation updates.

#### Row Animation API Elements

To support SegmentedUI row animations, the Volt MX Iris API includes the following elements.

*   voltmx.ui.createAnimation Function
*   voltmx.ui.makeAffineTransform Function

### SegmentedUI Templates

The SegmentedUI widget enables you to create templates to increase the re-usability of your efforts.

#### What is a Template for SegmentedUI

SegmentedUI template enables you to define a template for section headers. Only one template can be used for each segment. This is primarily useful for developers to achieve common look and feel of section headers along with few widgets added as part of section header of a segment.

On iOS platform, when a FlexContainer is used as a template for SegmentedUI, the below properties are not applicable:

| Positional Properties | Dimensional Properties |
| --- | --- |
| left | minWidth |
| right | maxWidth |
| top | minHeight |
| bottom | maxHeight |
| centerX |   |
| centerY |   |

#### Where to use a SegmentedUI (section) Template

SegmentedUI sections are used to differentiate or group a set of rows.

The section templates are used:

*   To have uniform look and feel of the section headers.
*   To achieve the behavior of having widgets such as an Image and a label for all the section headers of the segment.
*   To perform an action on the event of an onclick of an item or a widget in the section header.

#### Creating a Template for SegmentedUI

When you want the same information to be displayed across all the Section Headers of a Segment in the application, you have a provision to add a Segment Template using Volt MX Iris. For more information about section headers refer _VoltMX Iris User Guide_.

To create a segment template at the application-level, follow these steps:

1.  Go to **Applications View**.
2.  Expand the application for which you want to create the _SegmentTemplate._
3.  Navigate to **templates > segments**, right-click **mobile/desktop/tablet** and select **New Segment Template**. The **Create a New Segment** window appears.

> 1.  Enter a **Name** for the template.
> 2.  Click **Finish**. A new form is created.
> 3.  Drag and drop an FlexContainer/FlexScrollContainer onto the form.

> > > **_Note:_** Only HBox and Scrollable box are supported on the form. You can put other widgets within these widgets.

> 1.  Drag and drop the required widgets onto the FlexContainer/FlexScrollContainer. Set the properties of these widgets.
> 2.  A segment template is created.

For more information on setting a Section Header template for a segment, click here.

#### Using SegmentedUI Section Template

You can define only one template for each segment using the above process.

To use section template in an application, follow these steps:

1.  Go to **Applications view**.
2.  Expand the application for which you want to use section template.
3.  Navigate to **forms > mobile/tablet/desktop** , right-click and select **New Form**. The **Create a New Form** window appears.
4.  Enter a name for the Form and click **Finish**. A new Form is created.
5.  If you are building for desktop, select the Form in desktop and right-click on the Form. Select **Fork**. The **Platform Selection** window appears.
6.  Select **Desktop\_web** and click **OK**. The form is now forked for Desktop\_web and new window appears as web\_<formname>.

> **_Note:_** The development activities for desktop web should happen in web\_<formname> only. Although the newly created form, remains accessible in the desktop forms.

1.  Drag-drop a SegmentedUI on the Form and add widgets to the segment as required. Click **Save**.
2.  To set the template to a segment, select the segment and go to **Properties** window.
3.  Select **sectionHeaderTemplate** and **Select/Search Segment Template** window appears. Select the template, which you want to set to the segment.
4.  Click **OK**.

