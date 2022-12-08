  

HBox - Layout Properties
------------------------

The layout properties for HBox Widget are as follows:

*   [containerWeight](#containerweight)
*   [gridCell](#gridcell)
*   [layoutMeta](#layoutmeta)
*   [layoutType](#layouttype)
*   [layoutAlignment](#layoutalignment)
*   [margin](#margin)
*   [marginInPixel](#margininpixel)
*   [padding](#padding)
*   [paddingInPixel](#paddinginpixel)
*   [percent](#percent)
*   [vExpand](#vexpand)
*   [widgetAlignment](#widgetalignment)

### containerWeight

Specifies percentage of width to be allocated by its parent widget. The parent widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100% of weight except when placed in **voltmx.ui.ScrollBox**.

For example, a Form has Label1, Button1, and Button2 and the container weight could be 30 each for Label1 and Button1 and 40 for Button2, so that the sum of the container weight is 100.

Syntax

**JavaScript:** containerWeight

**Lua:** containerweight

Type

**JavaScript:** Number (less than or equal to 100)

**Lua:** Number (less than or equal to 100)

Read / Write

Yes - (Read and Write)

JavaScript Example

```
//Defining the properties for a box with containerWeight:50 (box will occupy half of its parent widget).
var basicConfBox = {id : "boxContainerWeightTest", isVisible:true, orientation:constants.BOX\_LAYOUT\_HORIZONTAL, skin:"gradroundbox"};
var layoutConfBox = {**containerWeight:50,margin:\[0,5,0,5\]**};

//Creating the box.
boxContainerWeightTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, {});  
  

```

Accessible from IDE

Yes

Platform Availability

Available on all platforms

### gridCell

This property is applicable only when a widget is placed inside a container widget with Grid Layout applied.

Represents the grid cell details in the sequence colSpan, rowSpan, rowNo, colNo. Description of the details are as follows:

*   colSpan: Specifies the number of columns that a grid should span. Default value is 1.
*   rowSpan: Specifies the number of rows that a grid should span. Default value is 1.
*   rowNo: Specifies the row number in where the widget is placed in a grid layout.
*   colNo: Specifies the column number in where the widget is placed in a grid layout.

Layout type is not visible as a property. It is set when the user applies XYLayout or GridLayout on a form. The default option is XYLayout. To set GridLayout, right-click on the form and select Apply GridLayout.  
  

Syntax

**JavaScript:** gridCell

**Lua:** gridCell

Type

**JavaScript:** JSObject

**Lua:**table

Read / Write

Yes - (Read and Write)

JavaScript Example

```
//Defining properties for a box with gridCell.
var basicConfBox = {id : "boxLayoutAlignmentLeftTest", isVisible:true, orientation:constants.BOX\_LAYOUT\_HORIZONTAL,skin:"gradroundbox"};
var layoutConfBox = {containerWeight:100, percent:false, layoutType: constants.CONTAINER\_LAYOUT\_GRID,
       layoutMeta: {
            "cols": 8,
            "colmeta": \["15", "15", "15", "15", "15", "15", "5", "5"\],
            "rows": 4
        },**gridCell: {"colSpan":1, "rowSpan":1, "rowNo":1, "colNo":1}** };  
//Creating the box.
boxLayoutAlignmentLeftTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, {});   
  
  

```

Accessible from IDE

Yes

Platform Availability

*   Windows 8
*   Desktop Web

### layoutMeta

A custom JSObject with the key, value pairs that developer can use to provide the meta info about the grid layout. The following are the mandatory keys required to be part of the Meta.

The data for layoutmeta data is set when you set grid layout view properties for rows and columns. This property can be set using VoltMXOne Studio Grid Layout view. To set the view, go to Window > Show View > Others and select GridLayout View from VoltMX Studio folder.

**rows :** no of grid rows

**cols** : no of grid cols

**colmeta**: \[{width : "width in %"}\]

The sum total of percentage (%) widths of each of the columns in the grid layout should add up to 100%.

Syntax

**JavaScript:** layoutMeta

**Lua:** layoutmeta

Type

**JavaScript:** JSObject

**Lua:** Table

Read / Write

Yes - (Read and Write)

JavaScript Example

```
//Defining properties for a box with layoutMeta.
var basicConfBox = {id : "boxLayoutAlignmentLeftTest", isVisible:true, orientation:constants.BOX\_LAYOUT\_HORIZONTAL,skin:"gradroundbox"};
var layoutConfBox = {containerWeight:100, percent:false, layoutType: constants.CONTAINER\_LAYOUT\_GRID,
       **layoutMeta: {
            "cols": 8,
            "colmeta": \["15", "15", "15", "15", "15", "15", "5", "5"\],
            "rows": 4
        }}**;  
//Creating the box.
boxLayoutAlignmentLeftTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, {});   
 
```

Accessible from IDE

Yes

Platform Availability

*   Windows 8
*   Desktop Web

### layoutType

Defines the type of the layout of container widget. Following are the available options:

*   CONTAINER\_LAYOUT\_BOX: This is the default options on both Windows 8 and Desktop Web platforms.
*   CONTAINER\_LAYOUT\_GRID: In grid layout the form is split it to rows and columns.

Layout type is not visible as a property. It is set when the user applies XYLayout or GridLayout on a form. From the IDE, the default option is XYLayout. To set GridLayout, right-click on the form and select Apply GridLayout.  

Syntax

**JavaScript:** layoutType

**Lua:** layouttype

Type

**JavaScript:** String - \[Mandatory\]

**Lua:**String - \[Mandatory\]

Read / Write

Yes - (Read only)

JavaScript Example

```
//Defining properties for a box with layoutType:CONTAINER\_LAYOUT\_GRID.
var basicConfBox = {id : "boxLayoutAlignmentLeftTest", isVisible:true, orientation:constants.BOX\_LAYOUT\_HORIZONTAL,skin:"gradroundbox"};
var layoutConfBox = {containerWeight:100, percent:false, **layoutType: constants.CONTAINER\_LAYOUT\_GRID**,
       layoutMeta: {
            "cols": 8,
            "colmeta": \["15", "15", "15", "15", "15", "15", "5", "5"\],
            "rows": 4
        }};

//Creating the box.
boxLayoutAlignmentLeftTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, {}); 
  

```

Accessible from IDE

Yes

Platform Availability

*   Windows 8
*   Desktop Web

### layoutAlignment

This property is applicable if the [percent](#percent) property is set to _false_. Specifies the direction in which the widgets are laid out.

**Default:** BOX\_LAYOUT\_ALIGN\_FROM\_LEFT

Following are the available options:

*   BOX\_LAYOUT\_ALIGN\_FROM\_LEFT: The widgets placed inside a box are aligned left.
*   BOX\_LAYOUT\_ALIGN\_FROM\_CENTER: The widgets placed inside a box are aligned center.
*   BOX\_LAYOUT\_ALIGN\_FROM\_RIGHT: The widgets placed inside a box are aligned right.

To set the value through code, prefix the option with _constants._ such as _**constants.<option>**_ .

Syntax

**JavaScript:** layoutAlignment

**Lua:** layoutalignment

Type

**JavaScript:** Number

**Lua:** Number

Read / Write

No

JavaScript Example

```
//Defining properties for a box with layoutAlignment:BOX\_LAYOUT\_ALIGN\_FROM\_LEFT(If percent property is false then this property is considered).
var basicConfBox = {id : "boxLayoutAlignmentLeftTest", isVisible:true, orientation:constants.BOX\_LAYOUT\_HORIZONTAL,skin:"gradroundbox"};
var layoutConfBox = {containerWeight:100, percent:false, **layoutAlignment:constants.BOX\_LAYOUT\_ALIGN\_FROM\_LEFT**};

//Creating the box.
boxLayoutAlignmentLeftTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, {}); 
  

```

Accessible from IDE

Yes

Platform Availability

Available on all platforms

### margin

Defines the space around a widget. You can use this option to define the left, top, right, and bottom distance between the widget and the next element.

To define the margin values for a platform, click the (![](../Resources/Images/clicktoedit.png)) button against the property to open the _Margin_ screen. Select the checkbox against the platform for which you want to define the margins and enter the top, left, right, and bottom margin values.

If you want to use the margin values set for a platform across other platforms, you can click the _Apply To_ button and select the platforms on which you want the margin values to be applied.

The following image illustrates the window to define the margins for platforms:

![](../Resources/Images/MarginSS.png)

The following image illustrates a widget with a defined margin:

![](../Resources/Images/Margin.png)

Syntax

**JavaScript:** margin

**Lua:** margin

Type

**JavaScript:** Array of Numbers

**Lua:** Table

Read / Write

Yes - (Read and Write)

JavaScript Example

```
//Defining the properties of a box with margin:\[0,5,0,5\], Directions :left,top,right,bottom respectively.
var basicConfBox = {id : "boxMarginTest", isVisible:true, orientation:constants.BOX\_LAYOUT\_HORIZONTAL};
var layoutConfBox = { containerWeight:100, **margin:\[0,5,0,5\]**};

//Creating the box
boxMarginTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, {});

  

```

Accessible from IDE

Yes

Platform Availability

Available on all platforms except on all Server side Mobile Web platforms.

### marginInPixel

Indicates if the margin is to be applied in pixels or in percentage.

**Default:** _false_

If set to _true,_ the margins are applied in pixels.

If set to _false,_ the margins are applied as set in [margin](#margin) property.

Syntax

**JavaScript:** marginInPixel

**Lua:** margininpixel

Type

**JavaScript:** Boolean

**Lua:** Boolean

Read / Write

No

JavaScript Example

```
//Defining the properties for a box with margin in pixels.
var basicConfBox = {id : "boxMarginTest", isVisible:true, orientation:constants.BOX\_LAYOUT\_HORIZONTAL};
var layoutConfBox = { containerWeight:100, margin:\[0,5,0,5\], **marginInPixel:true**};

//Creating the box
boxMarginTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, {});

  

```

Accessible from IDE

Yes

Platform Availability

*   iPhone
*   iPad
*   Android/Android Tablet
*   Windows Phone 7

### padding

Defines the space between the content of the widget and the widget boundaries. You can use this option to define the top, left, right, and bottom distance between the widget content and the widget boundary.

To define the padding values for a platform, click the (![](../Resources/Images/clicktoedit.png)) button against the property to open the _Padding_ screen. Select the checkbox against the platform for which you want to define the padding's and enter the top, left, right, and bottom padding values.

If you want to use the padding values set for a platform across other platforms, you can click the _Apply To_ button and select the platforms on which you want the padding values to be applied. The Array accepts the values in the sequence \[left, top, right, bottom\].

If no skin is applied to a Button, then Padding is not supported on iPhone. This is due to iOS Safari browser limitation. If you want the padding to be applied, apply a skin to the button and then apply padding.

The following image illustrates the window to define the padding's for platforms:

![](../Resources/Images/PaddingSS.png)  
  
The following image illustrates a widget with a defined padding:

![](../Resources/Images/Padding.png)

Syntax

**JavaScript:** padding

**Lua:** padding

Type

**JavaScript:** Array of Numbers

**Lua:** Table

Read / Write

Yes - (Read and Write)

JavaScript Example

```
//Defining the properties of a box with padding:\[10,10,10,10\], Directions :left,top,right,bottom respectively.
var basicConfBox = {id : "boxPaddingTest", isVisible:true, orientation:constants.BOX\_LAYOUT\_HORIZONTAL};
var layoutConfBox = { containerWeight:100, **padding:\[10,10,10,10\]**};

//Creating the box.
boxPaddingTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, {});

  

```

Accessible from IDE

Yes

Platform Availability

Available on all platforms

Limitations

*   iPhone - Not supported for Button unless a skin is specified.
*   Windows Phone/Windows Kiosk - Not supported for Box, Image Gallery due to Browser limitation.
*   Mobile Web (BJS) - Not supported for ComboBox, Form, and ListBox due to Browser limitations.
*   Mobile Web (advanced) - Not supported for ComboBox, Form, and ListBox due to Browser limitations.

### paddingInPixel

Indicates if the padding is to be applied in pixels or in percentage.

**Default:** _false_

If set to _true,_ the padding is applied in pixels.

If set to _false,_ the padding is applied as set in [padding](#padding) property.

This property can be set to _true_ or _false_ only for iPhone, iPad, Android and Windows Mobile 7. On other platforms this property does not give any results even when set to _true_.

For backward compatibility on older projects, this property is will be made _true_ for iPhone, iPad, Android and Windows Mobile 7 and for other platforms it will be _false_.

Syntax

**JavaScript:** paddingInPixel

**Lua:** paddinginpixel

Type

**JavaScript:** Boolean

**Lua:** Boolean

Read / Write

No

JavaScript Example

```
//Defining the properties of a box with padding in pixels.
var basicConfBox = {id : "boxPaddingTest", isVisible:true, orientation:constants.BOX\_LAYOUT\_HORIZONTAL};
var layoutConfBox = { containerWeight:100, padding:\[10,10,10,10\], **paddingInPixel:true**};

//Creating the box.
boxPaddingTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, {});
  

```

Accessible from IDE

Yes

Platform Availability

*   iPhone
*   iPad
*   Android/Android Tablet
*   Windows Phone 7

### percent

Specifies if the child widgets weight factor must be considered during layout.

**Default:** _true_

If set to _false,_ the [layoutAlignment](#layoutalignment) is considered.

If set to _true,_ the [containerWeight](#containerweight) is considered

Syntax

**JavaScript:** percent

**Lua:** percent

Type

**JavaScript:** Boolean

**Lua:** Boolean

Read / Write

No

JavaScript Example

```
//Defining the properties of a box with Percent:false(child widgets weight factor (containerWeight property) is not considered).
var basicConfBox = {id:"boxPercentTest", isVisible:true, orientation:constants.BOX\_LAYOUT\_HORIZONTAL};
var layoutConfBox = {containerWeight:100, **percent:false**, margin:\[0,5,0,5\]};

//Creating the box
boxPercentTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, {});

//Defining the properties of a box with Percent:true(child widgets weight factor (containerweight property) is to be considered).
basicConfBox = {id : "boxPercentTestTrue", isVisible:true, orientation:constants.BOX\_LAYOUT\_HORIZONTAL};
layoutConfBox = { ontainerWeight:100, **percent:true**, margin:\[0,5,0,5\]};

//Creating the box.
boxPercentTestTrue = new voltmx.ui.Box(basicConfBox, layoutConfBox, {});

  

```

Accessible from IDE

Yes

Platform Availability

Available on all platforms

### vExpand

Specifies the widget expansion in the vertical direction.

**Default:** _false_

If set to _true,_ the widget occupies the entire available height.

If set to _false,_ the widget occupies the preferred height.

![Widget when the Expand vertical is set to true ](../Resources/Images/Expand Vertical.png)

Syntax

**JavaScript:** vExpand

**Lua:** vexpand

Type

**JavaScript:** Boolean

**Lua:** Boolean

Read / Write

No

JavaScript Example

```
//Defining the properties of a box with vExpand:true.
var basicConfBox = {id : "boxvExpandTrueTest", isVisible:true, orientation:constants.BOX\_LAYOUT\_VERTICAL, skin:"gradroundbox"};
var layoutConfBox = {containerWeight:99, **vExpand:true**};

//Creating the box.
boxvExpandTrueTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, {});

//Defining the properties of a box with vExpand:false.
var basicConfBox = {id : "boxvExpandTrueTest", isVisible:true, orientation:constants.BOX\_LAYOUT\_VERTICAL, skin:"gradroundbox"};
var layoutConfBox = {containerWeight:99, **vExpand:false**};

//Creating the box.
boxvExpandFalseTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, {});

  

```

Accessible from IDE

Yes

Platform Availability

Available on all platforms except Desktop Web and Server side Mobile Web platforms.

### widgetAlignment

Indicates how a widget is to be anchored with respect to its parent. Each of these below options have a horizontal alignment attribute and a vertical alignment attribute. For example, WIDGET\_ALIGN\_TOP\_LEFT specifies the vertical alignment as TOP and horizontal alignment as LEFT.

Default: WIDGET\_ALIGN\_CENTER

Following are the available options:

*   WIDGET\_ALIGN\_TOP\_LEFT
*   WIDGET\_ALIGN\_TOP\_CENTER
*   WIDGET\_ALIGN\_TOP\_RIGHT
*   WIDGET\_ALIGN\_MIDDLE\_LEFT
*   WIDGET\_ALIGN\_CENTER
*   WIDGET\_ALIGN\_MIDDLE\_RIGHT
*   WIDGET\_ALIGN\_BOTTOM\_LEFT
*   WIDGET\_ALIGN\_BOTTOM\_CENTER
*   WIDGET\_ALIGN\_BOTTOM\_RIGHT

Syntax

**JavaScript:** widgetAlignment

Type

**JavaScript:** Number

Read / Write

Yes - (Read only)

JavaScript Example

```
//Defining the properties of a box with widgetAlignment:constants.WIDGET\_ALIGN\_TOP\_LEFT.
var basicConfBox = {id : "boxwidgetAlignment", isVisible:true, orientation:constants.BOX\_LAYOUT\_VERTICAL, skin:"gradroundbox"};
var layoutConfBox = {containerWeight:99, hExpand:true, **widgetAlignment:constants.WIDGET\_ALIGN\_TOP\_LEFT**};

//Creating the box.
boxwidgetAlignment = new voltmx.ui.Box(basicConfBox, layoutConfBox, {});
  

```

Accessible from IDE

Yes

Platform Availability

*   Server side Mobile Web
*   SPA
*   Desktop Web
