---
layout: "documentation"
category: "iris_widget_prog_guide"
---
                                

You are here: DataGrid Widget

DataGrid Widget
===============

DataGrid is a graphical user interface element (widget) that presents a tabular view of data (data is presented in row and column format).

Following are the real-time use cases of Data Grid widget:

*   **Group Data:** Group data into rows and columns using Data grid widgets.
    
*   **Data Handling:** Displays data from various services in your application by using Datagrid widgets. For example, if you have a service that contains the data of various luxury cars, its images, and prices, you can display it in your application by using a Data grid widget.
    

Widgets are normally added to your application using Volt MX Iris, but can also be added from code. For general information on using widgets in Volt MX Iris, see [Designing an Application]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Part_II_CreatingAnApplication.html) in the [Iris User Guide]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Introduction.html).

For general information on the DataGrid widget see the []({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Button.html)[DataGrid]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/DataGrid.html) topic in the Volt MX Iris User Guide.

The DataGrid widget capabilities can be broadly categorized into the following:

*   [Layout](#layout)
*   [3D Touch](#3d-touch)
*   [Gestures](#user-input-handling)
*   [Data Management](#data-management)
*   [State Configurations](#state-configurations)
*   [Animations](#animations)
*   [UI Appearance](#ui-appearance)
*   [Enabling RTL](#enabling-rtl)
*   [Miscellaneous](#miscellaneous)
*   [Configurations common to all widgets](#configurations-common-to-all-widgets)

#### Layout

  
| Events | Description |
| --- | --- |
| [doLayout](DataGrid_Events.html#doLayout) | Invoked for every widget when the widget position and dimensions are computed or calculated. |

 

| Properties | Description |
| --- | --- |
| [anchorPoint](DataGrid_Properties.html#anchorPo) | Specifies the anchor point of the widget bounds rectangle using the widget's coordinate space. |
| [bottom](DataGrid_Properties.html#bottom) | Determines the bottom edge of the widget and is measured from the bottom bounds of the parent container. |
| [centerX](DataGrid_Properties.html#centerX) | Determines the center of a widget measured from the left bounds of the parent container. |
| [centerY](DataGrid_Properties.html#centerY) | Determines the center of a widget measured from the top bounds of the parent container. |
| [containerHeight](DataGrid_Properties.html#containe) | Specifies the container height of the datagrid in percentage (%). |
| [containerHeightInPixel](DataGrid_Properties.html#containe2) | Specifies the container height of the datagrid in pixels. |
| [gridHeight](DataGrid_Properties.html#gridHeig) | Specifies the height of the DataGrid based in percentage or in pixel. |
| [height](DataGrid_Properties.html#height) | Determines the height of the widget and measured along the y-axis. |
| [left](DataGrid_Properties.html#left) | Determines the lower left corner edge of the widget and is measured from the left bounds of the parent container. |
| [right](DataGrid_Properties.html#right) | Determines the lower right corner of the widget and is measured from the right bounds of the parent container. |
| [top](DataGrid_Properties.html#top) | Determines the top edge of the widget and measured from the top bounds of the parent container. |
| [width](DataGrid_Properties.html#width) | Determines the width of the widget and is measured along the x-axis. |
| [zIndex](DataGrid_Properties.html#zIndex) | Specifies the stack order of a widget. |

  

#### Animations

| Method | Description |
| --- | --- |
| [animate](DataGrid_Methods.html#animate) | Applies an animation to the widget. |

 

| Property | Description |
| --- | --- |
| [transform](DataGrid_Properties.html#transfor) | Contains an animation transformation that can be used to animate the widget. |
| [widgetSwipeMove](DataGrid_Properties.html#widgetSwipeMove) | Used to enable and configure the left or right swipe actions for a widget. |

 

#### Data Management

| Methods | Description |
| --- | --- |
| [addAll](DataGrid_Methods.html#addAll) | Allows you to add new data to the DataGrid. |
| [addDataAt](DataGrid_Methods.html#addDataA) | Allows you to set a row of data at a given index. |
| [clone](DataGrid_Methods.html#clone) | When this method is used on a container widget, then all the widgets inside the container are cloned. |
| [removeAll](DataGrid_Methods.html#removeAll) | Used to remove all the existing rows in the DataGrid. |
| [removeAt](DataGrid_Methods.html#removeAt) | Used to remove all the existing rows in the DataGrid. |
| [setCellDataAt](DataGrid_Methods.html#setCellDataAt) | Allows you to set data in a specific row and column. |
| [setData](DataGrid_Methods.html#setData) | Allows you to set new data to the DataGrid. |
| [setDataAt](DataGrid_Methods.html#setDataAt) | Allows you to set a row of data at a given index. |

 

| Properties | Description |
| --- | --- |
| [data](DataGrid_Properties.html#data) | Array of JSObjects which represents the actual data to be rendered in each row. |

#### State Configurations

| Properties | Description |
| --- | --- |
| [isMultiSelect](DataGrid_Properties.html#isMultiSelect) | An option to make the datagrid as multi selectable row. |
| [selectedCellItem](DataGrid_Properties.html#selected) | Returns the data object associated with the user selected row and columnID combination. |
| [selectedCellIndex](DataGrid_Properties.html#selected2) | Returns the user selected row index and the associated columnid as specified by the developer while defining the columns. |
| [selectedIndex](DataGrid_Properties.html#selectedIndex) | Returns the user selected row index. |
| [selectedIndices](DataGrid_Properties.html#selectedIndices) | Returns the list of user selected row object indexes. |
| [selectedItem](DataGrid_Properties.html#selectedItem) | Returns the data in the selected rows of the DataGrid. |
| [selectedItems](DataGrid_Properties.html#selectedItems) | Returns the list of user selected row objects. |

 

| Methods | Description |
| --- | --- |
| [selectAllRows](DataGrid_Methods.html#selectAllRows) | Selects or clears the row selection in a multi-selectable DataGrid. |

 

#### 3D Touch

| Methods | Description |
| --- | --- |
| [registerForPeekandPop](DataGrid_Methods.html#register) | Registers a widget to enable 3D Touch peek and pop gestures. |
| [setOnPeek](DataGrid_Methods.html#setOnPek) | Sets and overrides the existing onPeekCallback for the widget. |
| [setOnPop](DataGrid_Methods.html#setOnPop) | Overrides the existing onPopCallback for the widget. |
| [unregisterForPeekandPop](DataGrid_Methods.html#unregist) | Unregisters a widget from 3D Touch peek and pop gestures. |

#### User Input Handling

| Events | Description |
| --- | --- |
| [onRowSelected](DataGrid_Events.html#onRowSelected) | An event callback that is invoked by the platform when a row is selected. |
| [onScrollWidgetPosition](DataGrid_Events.html#onScrollWidgetPosition) | This event callback is invoked by the platform when the widget location position gets changed on scrolling. |
| [onTouchEnd](DataGrid_Events.html#onTouchEnd) | An event callback is invoked by the platform when the user touch is released from the touch surface. |
| [onTouchMove](DataGrid_Events.html#onTouchMove) | An event callback is invoked by the platform when the touch moves on the touch surface continuously until movement ends. |
| [onTouchStart](DataGrid_Events.html#onTouchStart) | An event callback is invoked by the platform when the user touches the touch surface. |

 

| Methods | Description |
| --- | --- |
| [addGestureRecognizer](DataGrid_Methods.html#addGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |
| [removeGestureRecognizer](DataGrid_Methods.html#removeGestureRecognizer) | Allows you to remove the specified gesture recognizer for the specified widget. |
| [setGestureRecognizer](DataGrid_Methods.html#setGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |

#### UI Appearance

| Properties | Description |
| --- | --- |
| [gridlineColor](DataGrid_Properties.html#gridline) | Specifies the color of the grid line of the DataGrid. |
| [headerSkin](DataGrid_Properties.html#headerSkin) | Specifies the skin that must be applied to the Header row. |
| [hoverSkin](DataGrid_Properties.html#hoverSkin) | Specifies the look and feel of a widget when the cursor hovers on the widget. |
| [rowAlternateSkin](DataGrid_Properties.html#rowAlternateSkin) | The row normal skin which is applied to the alternate rows. |
| [rowFocusSkin](DataGrid_Properties.html#rowFocusSkin) | Specifies the skin that must be applied when the row is in focus. |
| [rowNormalSkin](DataGrid_Properties.html#rowNormalSkin) | Specifies the skin that must be applied when the row is not in focus. |
| [showColumnHeaders](DataGrid_Properties.html#showColumnHeaders) | Controls the visibility of the column headers of the DataGrid. |

| Methods | Description |
| --- | --- |
| [applyCellSkin](DataGrid_Methods.html#applycellskin) | Specifies the skin (background color) to be applied to a cell. |

#### Enabling RTL

| Properties | Description |
| --- | --- |
| [retainContentAlignment](DataGrid_Properties.html#retainContentAlignment) | Helps to retain the content alignment of the widget while applying RTL. |
| [retainFlexPositionProperties](DataGrid_Properties.html#retainFlexPositionProperties) | Helps to retain the left, right and padding properties while applying RTL. |
| [retainFlowHorizontalAlignment](DataGrid_Properties.html#retainFlowHorizontalAlignment) | Enables you to change the horizontal flow of the widget from left to right. |

#### Miscellaneous

| Methods | Description |
| --- | --- |
| [getBadge](DataGrid_Methods.html#getBadge) | Enables you to read the badge value (if any) attached to the specified widget. |
| [setBadge](DataGrid_Methods.html#setBadge) | Enables you to set the badge value to the given widget at the upper, right corner of the widget. |

| Properties | Description |
| --- | --- |
| [columnHeadersConfig](DataGrid_Properties.html#columnHeadersConfig) | Defines the number of columns and the type of each column and their meta properties. |
| [cursorType](DataGrid_Properties.html#cursorType) | Specifies the type of the mouse pointer used. |
| [dockingHeader](DataGrid_Properties.html#dockingH) | Specifies if headers are to be docked in the datagrid. |
| [enableScrollBar](DataGrid_Properties.html#enableSc) | Specifies if the scrollbars on the datagrid is to be displayed vertically or the default option is to be retained. |
| [rowCount](DataGrid_Properties.html#rowCount) | Returns the number of rows in the DataGrid. |
| [toolTip](DataGrid_Properties.html#toolTip) | Specifies the hint text when the cursor hovers over a widget, without clicking it. |

#### Configurations common to all widgets

| Methods | Description |
| --- | --- |
| [convertPointFromWidget](DataGrid_Methods.html#convertPointFromWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [convertPointToWidget](DataGrid_Methods.html#convertPointToWidget) | Allows you to convert the coordinate system from a point (receiver's coordinate system) to a widget. |
| [setEnabled](DataGrid_Methods.html#setEnabled) | Specifies the widget that must be enabled or disabled. |
| [setFocus](DataGrid_Methods.html#setFocus) | Specifies the widget on which there must be focus. |
| [setVisibility](DataGrid_Methods.html#setVisibility) | Use this method to set the visibility of the widget. |
| [removeFromParent](DataGrid_Methods.html#removeFromParent) | Allows you to remove a child widget from a parent widget. |

| Properties | Description |
| --- | --- |
| [accessibilityConfig](DataGrid_Properties.html#accessibilityConfig) | Enables you to control accessibility behavior and alternative text for the widget. |
| [enable](DataGrid_Properties.html#enable) | Allows you to make a widget visible but not actionable. |
| [enableCache](DataGrid_Properties.html#enableCa) | Enables you to improve the performance of Positional Dimension Animations. |
| [id](DataGrid_Properties.html#id) | id is a unique identifier of Browser widget consisting of alpha numeric characters. |
| [info](DataGrid_Properties.html#info) | A custom JSObject with the key value pairs that a developer can use to store the context with the widget. |
| [isVisible](DataGrid_Properties.html#isVisible) | Controls the visibility of a widget on the form. |
| [parent](DataGrid_Properties.html#parent) | Helps you access the parent of the widget. |

DataGrid Widget Basics
----------------------

### Creating a DataGrid Using a Constructor: voltmx.ui.DataGrid

{% highlight voltMx %}
var dgrid = new voltmx.ui.DataGrid(basicConf, layoutConf, pspConf);
{% endhighlight %}

*   **basicConf** is an object with basic properties.
*   **layoutConf** is an object with layout properties.
*   **pspConf** is an object with platform specific properties.

> **_Note:_** The configuration properties should be passed only in the respective configuration objects otherwise they are ignored.

Example

{% highlight voltMx %}//Defining the properties for dataGrid.
var dgridBasic = {
    id: "dgrid",
    info: {
        key: "This is datagrid"
    },
    isVisible: true,
    headerSkin: "hSkin",
    rowNormalSkin: "rNSkin",
    rowFocusSkin: "rFSkin",
    rowAlternateSkin: "rASkin",
    showColumnHeaders: true,
    columnHeadersConfig: [{
        columnID: "col1",
        columnType: constants.DATAGRID_COLUMN_TYPE_TEXT,
        columnHeaderText: "Account Type",
        columnWidthInPercentage: 40
    }, {
        columnID: "col2",
        columnType: constants.DATAGRID_COLUMN_TYPE_TEXT,
        columnHeaderText: "Account Number",
        columnWidthInPercentage: 30
    }, {
        columnID: "col3",
        columnType: constants.DATAGRID_COLUMN_TYPE_TEXT,
        columnHeaderText: "Balance",
        columnWidthInPercentage: 30
    }],
    isMultiSelect: true,
    data: [{
        col1: "Checking",
        col2: "490",
        col3: "$400",
        metainfo: {
            skin: "rowskin1",
            col1_skin: "colskin1"
        }
    }, {
        col1: "Checking",
        col2: "494",
        col3: "$2000.34"
    }, {
        col1: "Savings",
        col2: "567",
        col3: "$4000"
    }]
};

var dgridLayout = {
    widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT,
    contentAlignment: constants.CONTENT_ALIGN_CENTER,
    containerWeight: 99,
    padding: [5, 5, 5, 5],
    margin: [5, 5, 5, 5]
};

var dgridPSP = {
    containerHeight: 80
};

//Creating the dataGrid.	
var dgrid = new voltmx.ui.DataGrid(dgridBasic, dgridLayout, dgridPSP);
{% endhighlight %}

### Customizing Appearance

You can customize the appearance of a DataGrid using the following properties:

*   widgetAlignment: Specifies the alignment of the widget.
*   margin: Defines the space around a widget.
*   padding: Defines the space between the content of the widget and the widget boundaries.
*   [gridlineColor](DataGrid_Properties.html#Gridline2): Specifies the color of the gridline.
*   [headerSkin](DataGrid_Properties.html#headerSkin): Specifies the skin to be applied to the DataGrid Header.
*   [rowNormalSkin](DataGrid_Properties.html#rowNormalSkin): Specifies the skin to be applied when the row is not in focus.
*   [rowAlternateSkin](DataGrid_Properties.html#rowAlternateSkin): Specifies the skin to be applied to every even row when not in focus.
*   [rowFocusSkin](DataGrid_Properties.html#rowFocusSkin): Specifies the skin to be applied when the row is in focus.

### Important Considerations

The following are the important considerations for the DataGrid widget:

*   To set the data, you must first specify the columns using the [data](DataGrid_Properties.html#data) property from the IDE. If you do not do this, you will not be able to set data for the DataGrid from the code.
*   If the DataGrid supports the [isMultiSelect](DataGrid_Properties.html#isMultiSelect) property, you must ensure that you have specified the [rowFocusSkin](DataGrid_Properties.html#rowFocusSkin) property. Else, you will not be able to distinguish multiple selections.
*   contentAlignment for cell is supported only on iOS platform.

