                               

ScrollBox Widget
----------------

A _ScrollBox_ is a scrollable container which allows you to scroll the content within horizontally and vertically.

A ScrollBox can contain any widget except a Tab pane. It can contain any number of widgets within it.

> **_Note:_** In Desktop Web platform, ScrollBox is displayed in browser native mode.

You can add the ScrollBox Widget only to the VBox form. This widget will be available in the Widgets palette when the VBox form is selected in the app canvas.

ScrollBox provides you with an option to set Basic Properties, Layout Properties, Platform Specific Properties, an Event, and Methods.

### ScrollBox Overviews

#### Creating a ScrollBox using a constructor: voltmx.ui.ScrollBox

```

var scrollbox1 = new voltmx.ui.ScrollBox(basicConf, layoutConf, pspConf)
```

*   **basicConf** is an object with basic properties.
*   **layoutConf** is an object with layout properties.
*   **pspConf** is an object with platform specific properties.

> **_Note:_** The configuration properties should be passed only in the respective configuration objects otherwise they are ignored.

#### Example

```

//Defining properties for a ScrollBox.
var scrollBasic = {id :"scrollBox",skin:"scrlSkin", isVisible:true, orientation:constants.BOX_LAYOUT_HORIZONTAL, position:constants.BOX_POSITION_AS_FOOTER, scrollDirection:constants.SCROLLBOX_SCROLL_VERTICAL};

var scrollLayout = {padding:[2,2,2,2], containerWeight:100, margin:[5,5,5,5], containerHeight:100, percent:true};

var scrollPSP = {scrollArrowConfig:["leftArrow.png", "topArrow.png", "rightArrow.png", "bottomArrow.png"]};

//Creating the ScrollBox.
var scrollBox = new voltmx.ui.ScrollBox(scrollBasic, scrollLayout, scrollPSP);
```

#### Adding a ScrollBox Widget using Widgets Palette

The steps involved in adding a ScrollBox widget are:

1.  From the Widgets palette, drag and drop the ScrollBox widget onto a form or any other container widget.
2.  ScrollBox widget enables horizontal scrolling by default. You can stack all the widgets horizontally when the [orientation](ScrollBox_Basic_Properties.md#orientation) is set as _horizontal_. To stack widget vertically within the ScrollBox, set the [orientation](ScrollBox_Basic_Properties.md#orientat) as _vertical_.
3.  Drag and drop the required number of other widgets into the Scroll Box widget.
4.  Set the [scrollDirection](ScrollBox_Basic_Properties.md#scrolldirection) as _horizontal_, _vertical_, _both,_ or, _none._ Using the Scroll option, you can define the scrolling direction of the **ScrollBox**.

#### Customizing Appearance

You can customize the appearance of the ScrollBox using the following properties:

*   [margin](ScrollBox_Basic_Properties.md#margin): Defines the space around a widget.
*   [padding](ScrollBox_Basic_Properties.md#padding): Defines the space between the content of the widget and the widget boundaries.
*   [skin](ScrollBox_Basic_Properties.md#skin): Specify the skin to be applied to the ScrollBox widget.

#### Important Considerations:

The following are the important considerations of a ScrollBox:

*   For a good user experience, you must place the ScrollBox using a percentage layout. In a non-percentage layout the width of the ScrollBox varies across platforms.
*   If you set the scrollDirection as SCROLLBOX\_SCROLL\_VERTICAL or SCROLLBOX\_SCROLL\_BOTH, specifying a [containerHeight](ScrollBox_Basic_Properties.md#containerheight) is mandatory.
*   When a widget is placed inside a horizontal parent widget. For example: Box, Segment, it will take 40% of the parent widget or the available free space of the widget.

