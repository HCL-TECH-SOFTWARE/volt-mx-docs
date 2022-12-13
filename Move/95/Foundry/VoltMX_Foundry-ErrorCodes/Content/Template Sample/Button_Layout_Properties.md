  

Button - Layout Properties
--------------------------

The layout properties for Button Widget are as follows:

*   [containerWeight](#containerweight)
*   [contentAlignment](#contentalignment)
*   [displayText](#displaytext)
*   [hExpand](#hexpand)
*   [margin](#margin)
*   [marginInPixel](#margininpixel)
*   [padding](#padding)
*   [paddingInPixel](#paddinginpixel)
*   [vExpand](#vexpand)
*   [widgetAlignment](#widgetalignment)  
    

### containerWeight

Specifies the percentage of the parent width that should allocated to the widget. The parent widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100% of width except when placed in _voltmx.ui.ScrollBox_.

Syntax

**JavaScript:** containerWeight

**Lua:** containerweight

Type

**JavaScript:** Number

**Lua:** Number

Read / Write

Yes - (Read and Write)

JavaScript Example

```
//Defining the properties for a button with containerWeight:100
var btnBasic={id:"button1",isVisible:true, skin:"btnSkin", focusSkin:"btnFSkin", text:"Click Here"};
var btnLayout={**containerWeight:100**,padding:\[5,5,5,5\], margin:\[5,5,5,5\], hExpand:true, vExpand:false, displayText:true};
var btnPSP={};  
  
/Creating the button.  
var button1 = new voltmx.ui.Button(btnBasic, btnLayout, btnPSP);

//Reading containerWeight of the button.
alert("Button containerWeight ::"+button1.containerWeight); //ContainerName is the name of the container widget under which the button is placed.  
  

```

Accessible from IDE

Yes

Platform Availability

Available on all platforms

### contentAlignment

Specifies the alignment of the text on the Button with respect to its boundaries. A default value CONTENT\_ALIGN\_CENTER is assigned for all platforms. To choose another alignment, click the drop-down arrow and select the desired alignment. However, to change the default value on a particular platform, select the button next to the drop-down and select respective platform and choose the value.

![](../Resources/Images/button-alignment.png)

**Default:** _CONTENT\_ALIGN\_CENTER_ (the default value for all platforms is center; content is aligned at the center of the button)

The following are the available options:

*   CONTENT\_ALIGN\_TOP\_LEFT - Specifies the text should align at top left corner of the button.
*   CONTENT\_ALIGN\_TOP\_CENTER - Specifies the text should align at top center of the button.
*   CONTENT\_ALIGN\_TOP\_RIGHT- Specifies the text should align at top right of the button.
*   CONTENT\_ALIGN\_MIDDLE\_LEFT- Specifies the text should align at middle left of the button.
*   CONTENT\_ALIGN\_CENTER- Specifies the text should align at center of the button.
*   CONTENT\_ALIGN\_MIDDLE\_RIGHT- Specifies the text should align at middle right of the button.
*   CONTENT\_ALIGN\_BOTTOM\_LEFT- Specifies the text should align at bottom left of the button.
*   CONTENT\_ALIGN\_BOTTOM\_CENTER- Specifies the text should align at bottom center of the button.
*   CONTENT\_ALIGN\_BOTTOM\_RIGHT - Specifies the text should align at bottom right of the button.

Syntax

**JavaScript:** contentAlignment

**Lua:** contentalignment

Type

**JavaScript:** Number

**Lua:** Number

Read / Write

Yes - (Read and Write)

JavaScript Example

```
//Defining the properties for a button with Content Alignment as TOP\_LEFT.
var btnBasic={id:"button1",isVisible:true,skin:"btnSkin", focusSkin:"btnFSkin", text:"Click Here"};
var btnLayout={containerWeight:100, padding:\[5,5,5,5\], margin:\[5,5,5,5\], hExpand:true, vExpand:false, displayText:true, **contentAlignment:constants.CONTENT\_ALIGN\_TOP\_LEFT**};
var btnPSP={};  
  
//Creating the button.
var button1 = new voltmx.ui.Button(btnBasic, btnLayout, btnPSP);  
  

```

Accessible from IDE

Yes

Platform Availability

Available on all platforms

### displayText

Specifies if the text (present in text property) to be rendered or not.

**Default:** _true_

If set to _false,_ the text is not displayed.

If set to _true,_ the text is displayed.

Syntax

**JavaScript:** displayText

**Lua:** displaytext

Type

**JavaScript:** Boolean

**Lua:** Boolean

Read / Write

No

JavaScript Example

```
//Defining the properties for a button with displayText:true
var btnBasic={id:"button1",isVisible:true,skin:"btnSkin",focusSkin:"btnFSkin", text:"Click Here"};
var btnLayout={containerWeight:100,padding:\[5,5,5,5\],margin:\[5,5,5,5\], hExpand:true, vExpand:false, **displayText:true**};
var btnPSP={};  
  
//Creating the button.
var button1 = new voltmx.ui.Button(btnBasic, btnLayout, btnPSP);  
  

```

Accessible from IDE

Yes

Platform Availability

Available on all platforms

### hExpand

Specifies if the widget should occupy all the width available to it.

Mobile Web does not support the Expand property. This is because a widget in a Mobile Web cannot expand or contract based on the neighboring widget (default behavior of a widget in a Mobile Web).

**Default:** _true_

If set to _false,_ the widget occupies the preferred width. The preferred width of a widget is the sum of its contents width, padding and margin.

If set to _true,_ the widget ensures that the entire width available to it, is occupied.

![Widget when the Expand horizontal is set to true ](../Resources/Images/Expand Horizontal.png)

Syntax

**JavaScript:** hExpand

**Lua:** hexpand

Type

**JavaScript:** Boolean

**Lua:** Boolean

Read / Write

No

JavaScript Example

```
//Defining the properties for a buttonn with Horizontal Expand as true
var btnBasic={id:"button1", isVisible:true, skin:"btnSkin", focusSkin:"btnFSkin", text:"Click Here"};
var btnLayout={containerWeight:100,padding:\[5,5,5,5\], margin:\[5,5,5,5\], **hExpand:true**, vExpand:false, displayText:true};
var btnPSP={};  
  
//Creating the button.
var button1 = new voltmx.ui.Button(btnBasic, btnLayout, btnPSP);  
  

```

Accessible from IDE

Yes

Platform Availability

Available on all platforms except Mobile Web, Desktop Web and SPA.

### margin

Defines the space around a widget. You can use this option to define the left, top, right, and bottom distance between the widget and the next widget.

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

**JavaScript:** Array of numbers

**Lua:** Table

Read / Write

Yes - (Read and Write)

JavaScript Example

```
//Defining the properties for a button with margin:\[5,5,5,5\]
var btnBasic={id:"button1",isVisible:true, skin:"btnSkin", focusSkin:"btnFSkin", text:"Click Here"};
var btnLayout={containerWeight:100, padding:\[5,5,5,5\], **margin:\[5,5,5,5\]**, hExpand:true, vExpand:false, displayText:true};
var btnPSP={};

//Creating the button.
var button1 = new voltmx.ui.Button(btnBasic, btnLayout, btnPSP);


```

Accessible from IDE

Yes

Platform Availability

Available on all platforms except Server side Mobile Web (basic)

### marginInPixel

Indicates if the margin is to be applied in pixels or in percentage.

**Default:** _false_

If set to _true,_ the margin is applied in pixels.

If set to _false,_ the margin is applied as set in [margin](#margin) property.

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
//Defining the properties for a button with margin in pixels.
var btnBasic={id:"button1", isVisible:true,skin:"btnSkin", focusSkin:"btnFSkin", text:"Click Here"};
var btnLayout={containerWeight:100, padding:\[5,5,5,5\], margin:\[5,5,5,5\], hExpand:true, vExpand:false, **marginInPixel:true**};
var btnPSP={};

//Creating the button.
var button1 = new voltmx.ui.Button(btnBasic, btnLayout, btnPSP);
  

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

If you want to use the padding values set for a platform across other platforms, you can click the _Apply To_ button and select the platforms on which you want the padding values to be applied.

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
//Defining the properties for a button with padding:\[5,5,5,5\]
var btnBasic={id:"button1", isVisible:true, skin:"btnSkin", focusSkin:"btnFSkin", text:"Click Here"};
var btnLayout={containerWeight:100, **padding:\[5,5,5,5\]**, margin:\[5,5,5,5\], hExpand:true, vExpand:false, displayText:true};
var btnPSP={};

//Creating the button.
var button1 = new voltmx.ui.Button(btnBasic, btnLayout, btnPSP);  
  

```

Accessible from IDE

Yes

Platform Availability

Available on all platforms except Server side Mobile Web (basic).

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
//Defining the properties for a button with padding in pixels.
var btnBasic={id:"button1",isVisible:true, skin:"btnSkin", focusSkin:"btnFSkin", text:"Click Here"};
var btnLayout={containerWeight:100, padding:\[5,5,5,5\], margin:\[5,5,5,5\], hExpand:true, vExpand:false, **paddingInPixel:true**};
var btnPSP={};

//Creating the button.
var button1 = new voltmx.ui.Button(btnBasic, btnLayout, btnPSP);

  

```

Accessible from IDE

Yes

Platform Availability

*   iPhone
*   iPad
*   Android/Android Tablet
*   Windows Phone 7

### vExpand

Specifies if the widget has to occupy all the vertical space available to it.

Mobile Web does not support the Expand property. This is because a widget in a Mobile Web cannot expand or contract based on the neighboring widget (default behavior of a widget in a Mobile Web).

**Default:** _false_

If set to _false_, the widget occupies the preferred height. The preferred height of a widget is the sum of its contents height, padding and margin.

If set to _true_, the widget ensures that the entire width available to it, is occupied.

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
//Defining the properties for a button with vExpand:false
var btnBasic={id:"button1",isVisible:true, skin:"btnSkin", focusSkin:"btnFSkin", text:"Click Here"};
var btnLayout={containerWeight:100,padding:\[5,5,5,5\], margin:\[5,5,5,5\], hExpand:true, **vExpand:false**, displayText:true};
var btnPSP={};

//Creating the button.
var button1 = new voltmx.ui.Button(btnBasic, btnLayout, btnPSP);
  

```

Accessible from IDE

Yes

Platform Availability

Available on all platforms except Server side Mobile Web and Desktop Web platforms.

### widgetAlignment

Indicates how a widget is to be anchored with respect to its parent. Each of these below options have a horizontal alignment attribute and a vertical alignment attribute. For example, WIDGET\_ALIGN\_TOP\_LEFT specifies the vertical alignment as TOP and horizontal alignment as LEFT.

Horizontal alignment attributes are only applicable if [hExpand](#hexpand) is _false_. Similarly vertical alignment attributes are only applicable if [vExpand](#vexpand) is _false_.

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

**Lua:** widgetalignment

Type

**JavaScript:** Number

**Lua:** Number

Read / Write

No

JavaScript Example

```
//Defining the properties for a button with widgetAlignment:constants.WIDGET\_ALIGN\_TOP\_RIGHT
var btnBasic={id:"button1", isVisible:true, skin:"btnSkin", focusSkin:"btnFSkin", text:"Click Here"};
var btnLayout={containerWeight:100,padding:\[5,5,5,5\], margin:\[5,5,5,5\], hExpand:true, vExpand:false, displayText:true, widgetAlignment:constants.WIDGET\_ALIGN\_TOP\_RIGHT};
var btnPSP={};

//Creating the button.
var button1 = new voltmx.ui.Button(btnBasic, btnLayout, btnPSP);
  

```

Accessible from IDE

Yes

Platform Availability

Available on all platforms
