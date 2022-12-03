  

HBox - Basic Properties
-----------------------

The basic properties for HBox Widget are as follows:

*   [focusSkin](#focusskin)
*   [id](#id)
*   [info](#info)
*   [isVisible](#isvisible)
*   [orientation](#orientation)
*   [position](#position)
*   [skin](#skin)

### focusSkin

This is a skin property and it determines the look and feel when there is focus on a widget.

For more information on how to create and work with skins, see the _Working with Applications_ section of the _VoltMXOne Studio User Guide_.

You must be aware of the following:  
1\. On J2ME, if you do not specify the Focus skin, it is not possible to identify the focus change between the widgets.  
2\. Mobile Web does not support this property; instead browser specific focus will be applied.

Syntax

**JavaScript:** focusSkin

**Lua:** focusskin

Type

**JavaScript:** String

**Lua:** String

Read / Write

Yes - (Read and Write)

JavaScript Example

```
//Defining the properties for a box with focusSkin:"boxGrayFocus"
var basicConfBox = {id : "boxFocusSkinTest", isVisible:true, orientation:constants.BOX\_LAYOUT\_HORIZONTAL, kin:"boxGray", **focusSkin:"boxGrayFocus"**};
var layoutConfBox = {contentAlignment : constants.CONTENT\_ALIGN\_TOP\_CENTER, containerWeight:100, vExpand:true};

//Creating the box.
boxFocusSkinTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, {});

//Reading the focusSkin property of the box.
alert("box focusSkin is ::"+boxFocusSkinTest.focusSkin);   
  

```

Accessible from IDE

Yes

Platform Availability

Available on all platforms except on all Server side Mobile Web

### id

id is a unique identifier of a Box consisting of alpha numeric characters. Every Box widget should have a unique id within a Form.

Syntax

**JavaScript:** id

**Lua:** id

Type

**JavaScript:** String

**Lua:** String

Read / Write

Yes - (Read only)

JavaScript Example

```
//Creating the box with the ID :"boxIdTest".
var basicConfBox = {**id : "boxIdTest"**, isVisible:true, orientation:constants.BOX\_LAYOUT\_HORIZONTAL};
var layoutConfBox = {contentAlignment : constants.CONTENT\_ALIGN\_TOP\_CENTER, containerWeight:100, vExpand:true};

//Creating the box.
boxIdTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, {});

//Reading the id of the box.
alert("box id is ::"+boxIdTest.id);   
  

```

  
Accessible from IDE

Yes

Platform Availability

Available on all platforms

### info

A custom JSObject with the key value pairs that a developer can use to store the context with the widget. This will help in avoiding the globals to most part of the programming.

This is a **non-Constructor** property. You cannot set this property through widget constructor. But you can read and write data to it.

Syntax

**JavaScript:** info

**Lua:** info

Type

**JavaScript:** JSObject

**Lua:** UserData

Read / Write

Yes - (Read and Write)

JavaScript Example

```
//Creating the box with the info property.
var basicConfBox = {id : "boxIdTest", isVisible:true, orientation:constants.BOX\_LAYOUT\_HORIZONTAL};
var layoutConfBox = {contentAlignment : constants.CONTENT\_ALIGN\_TOP\_CENTER, containerWeight:100, vExpand:true};

//Creating the box.
boxIdTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, {});  
**boxIdTest.info = {key:"Boxnumber"};**  
//Reading the info of the box.
alert("box info is ::"+boxIdTest.info);             
  

```

Accessible from IDE

No

Platform Availability

Available on all platforms

### isVisible

This property controls the visibility of a widget on the form.

**Default:** _true_

If set to _false,_ the widget is not displayed.

If set to _true,_ the widget is displayed.

Syntax

**JavaScript:** isVisible

**Lua:** isvisible

Type

**JavaScript:** Boolean

**Lua:** Boolean

Read / Write

Yes - (Read and Write)

JavaScript Example

```
//Defining the properties for a box with isVisible:true.
var basicConfBox = {id : "boxisVisibleTest", **isVisible:true**, orientation:constants.BOX\_LAYOUT\_HORIZONTAL};
var layoutConfBox = {contentAlignment : constants.CONTENT\_ALIGN\_TOP\_CENTER, containerWeight:100,  vExpand:true};

//Creating the box.
boxisVisibleTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, {});

//Defining the properties for a box with isVisible:false.
basicConfBox = {id : "boxisVisibleTestFalse", isVisible:false, orientation:constants.BOX\_LAYOUT\_HORIZONTAL}; layoutConfBox = {contentAlignment : constants.CONTENT\_ALIGN\_TOP\_CENTER, containerWeight:100, vExpand:true};

//Creating the box.
boxisVisibleTestFalse = new voltmx.ui.Box(basicConfBox, layoutConfBox, {});

//Reading the isVisible property of the box
alert("Box visibility is ::"+boxisVisibleTestFalse.isVisible); 

alert("Second box visibility is ::"+boxisVisibleTest.isVisible); 

  

```

You can set the visibility of a widget dynamically from code by using the _setVisibility_ method.

Accessible from IDE

Yes (Except for form/popup)

Platform Availability

Available on all platforms except Server side Mobile Web (basic) and Win Mobile6x.

### orientation

Specifies the orientation of the Box. You can select the orientation as _horizontal_ or _vertical_.

**Default:** BOX\_LAYOUT\_HORIZONTAL

Following are the available options:

*   BOX\_LAYOUT\_HORIZONTAL: Enables you to stack the widgets within the box horizontally.
*   BOX\_LAYOUT\_VERTICAL: Enables you to stack the widgets within the box vertically.

To set the value through code, prefix the option with _constants._ such as _**constants.<option>**_ .

Syntax

**JavaScript:** orientation

**Lua:** orientation

Type

**JavaScript:** Number

**Lua:** Number

Read / Write

Yes - (Read only)

JavaScript Example

```
//Creating the box with the orientation:constants.BOX\_LAYOUT\_HORIZONTAL.
var basicConfBox = {id : "boxIdTest", isVisible:true, **orientation:constants.BOX\_LAYOUT\_HORIZONTAL**};
var layoutConfBox = {contentAlignment : constants.CONTENT\_ALIGN\_TOP\_CENTER, containerWeight:100, vExpand:true};

//Creating the box.
boxIdTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, {});

//Reading the orientation of the box.
alert("box orientation is ::"+boxIdTest.orientation);   
  

```

Accessible from IDE

Yes

Platform Availability

Available on all platforms

### position

Specifies the position of the box as header or footer of the form. When you set this property the box is docked along with header or footer.

This property is applicable for immediate child widgets placed on a Form.

**Default:** BOX\_POSITION\_AS\_NORMAL

Following are the options available:

*   BOX\_POSITION\_AS\_NORMAL: The original position of the box is retained.
*   BOX\_POSITION\_AS\_HEADER: The box is fixed at the top of the form.
*   BOX\_POSITION\_AS\_FOOTER: The box is fixed at the bottom of the form.
*   BOX\_POSITION\_AS\_SCREENLEVEL\_SEG\_HEADER: This option is useful to fix the position of the box to the top of the form when the box is placed inside a Segmented2 with screenLevelWidget set to _true_. This property is treated as normal BOX\_POSITION\_AS\_NORMAL where the original position of the box is retained. when a box is not placed in a segment. This option is not supported on Windows Mango platform.
*   BOX\_POSITION\_AS\_SCREENLEVEL\_SEG\_FOOTER: This option is useful to fix the position of the box to the bottom of the form when a box is placed inside a Segmented2 with screenLevelWidget set to _true_. This property is treated as normalBOX\_POSITION\_AS\_NORMAL where the original position of the box is retained. when a box is not placed in a segment. This option is not supported on Windows Mango platform.

To set the value through code, prefix the option with _constants._ such as _**constants.<option>**_ .

Syntax

**JavaScript:** position

**Lua:** position

Type

**JavaScript:** Number

**Lua:** Number

Read / Write

No

JavaScript Example

```
//Defining the properties for a box with position:BOX\_POSITION\_AS\_HEADER
var basicConfBox = {id : "boxPositionTest", isVisible:true, orientation:constants.BOX\_LAYOUT\_HORIZONTAL, **position:constants.BOX\_POSITION\_AS\_HEADER**};
var layoutConfBox = {contentAlignment : constants.CONTENT\_ALIGN\_TOP\_CENTER, containerWeight:100,  vExpand:true};

//Creating the box.
boxPositionTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, {});

//Defining the properties for a box with position:BOX\_POSITION\_AS\_FOOTER
basicConfBox = {id : "boxPositionTestFooter", isVisible:true, orientation:constants.BOX\_LAYOUT\_HORIZONTAL, position:constants.BOX\_POSITION\_AS\_FOOTER};
layoutConfBox = {contentAlignment : constants.CONTENT\_ALIGN\_TOP\_CENTER, containerWeight:100,  vExpand:true};

//Creating the box.
boxPositionTestFooter = new voltmx.ui.Box(basicConfBox, layoutConfBox, {});
  
  

```

Accessible from IDE

Yes

Platform Availability

Available on all platforms

### skin

Specifies the look and feel of the widget when not in focus.

Syntax

**JavaScript:** skin

**Lua:** skin

Type

**JavaScript:** String

**Lua:** String

Read / Write

Yes - (Read and Write)

JavaScript Example

```
//Defining the properties for a box with skin:"boxGray"
var basicConfBox = {id : "boxSkinTest", isVisible:true, orientation:constants.BOX\_LAYOUT\_HORIZONTAL, **skin:"boxGray"**};
var layoutConfBox = {contentAlignment : constants.CONTENT\_ALIGN\_TOP\_CENTER, containerWeight:100, vExpand:true};

//Creating the box.
boxSkinTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, {});

//Reading the skin property of the box.
alert("box skin is ::"+boxSkinTest.skin);   
  
 
```

Accessible from IDE

Yes

Platform Availability

Available on all platforms
