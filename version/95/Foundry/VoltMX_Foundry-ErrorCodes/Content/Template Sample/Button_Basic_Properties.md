  

Button - Basic Properties
-------------------------

The basic properties for Button Widget are as follows:

*   [focusSkin](#focusskin)
*   [id](#id)
*   [info](#info)
*   [isVisible](#isvisible)
*   [rawBytes](#rawbytes)
*   [skin](#skin)
*   [text](#text)
*   [toolTip](#toolTip)  
    

### focusSkin

Specifies the look and feel of the Button when in focus.

You must be aware of the following:  
1\. On J2ME non-touch devices, if you do not specify the Focus skin, it is not possible to identify the focus change between the widgets.  
2\. Mobile Web does not support this property, instead browser specific focus will be applied.

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
//Defining the properties for a button with focusSkin:"btnFSkin".  
var btnBasic={id:"button1", isVisible:true, skin:"btnSkin", **focusSkin:"btnFSkin"**, text:"Click Here"};  
var btnLayout={containerWeight:100, padding:\[5,5,5,5\], margin:\[5,5,5,5\], hExpand:true, vExpand:false, displayText:true};  
var btnPSP={};  
  
//Creating the button.  
var button1 = new voltmx.ui.Button(btnBasic, btnLayout, btnPSP);  
  
//Reading focusSkin of the button   
alert("Button focusSkin ::"+button1.focusSkin);  
  

```

Accessible from IDE

Yes

Platform Availability

Available on all platforms except on all Server side Mobile Web platforms.

### id

id is a unique identifier of button consisting of alpha numeric characters. Every Button should have a unique id within an Form.

Syntax

**JavaScript:** id

**Lua:** id

Type

**JavaScript:** String - \[Mandatory\]

**Lua:** String - \[Mandatory\]

Read / Write

Yes - (Read only)

JavaScript Example

```
//Defining the properties for a button with id:"button1".  
var btnBasic={**id:"button1"**, isVisible:true, skin:"btnSkin", focusSkin:"btnFSkin", text:"Click Here"};  
var btnLayout={containerWeight:100, padding:\[5,5,5,5\], margin:\[5,5,5,5\], hExpand:true, vExpand:false, displayText:true};  
var btnPSP={};  
  
//Creating the button.  
var button1 = new voltmx.ui.Button(btnBasic, btnLayout, btnPSP);  
  
//Reading id of the button.  
alert("Button Id ::"+button1.id);  
  

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
//Defining the properties for a button with info property.  
var btnBasic={id:"button1", skin:"btnSkin", focusSkin:"btnFSkin", text:"Click Here"};  
var btnLayout={containerWeight:100, padding:\[5,5,5,5\], margin:\[5,5,5,5\], hExpand:true, vExpand:false, displayText:true};  
var btnPSP={};  
  
//Creating the button.  
var button1 = new voltmx.ui.Button(btnBasic, btnLayout, btnPSP);  
**button1.info = {key:"buttonname"};**  
  
//Reading info of the button.   
alert("Button info ::"+button1.info);  
  

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
//Defining the properties for a button with isVisible:true  
var btnBasic={id:"button1", **isVisible:true**, skin:"btnSkin", focusSkin:"btnFSkin", text:"Click Here"};  
var btnLayout={containerWeight:100, padding:\[5,5,5,5\], margin:\[5,5,5,5\], hExpand:true, vExpand:false, displayText:true};  
var btnPSP={};  
  
//Creating the button.  
var button1 = new voltmx.ui.Button(btnBasic, btnLayout, btnPSP);  
  
//Reading isVisible of the button   
alert("Button isVisible ::"+button1.isVisible);  
  

```

In addition, the visibility of the widget can be controlled by using the _setVisibility_ method.

Accessible from IDE

Yes

Platform Availability

Available on all platforms

### rawBytes

Specifies the rawbytes representing an Image (usually the image captured from the camera) that can be used as a background for the button.

This is a **non-Constructor** property. You cannot set this property through widget constructor. But you can read and write data to it.

Syntax

**JavaScript:** rawBytes

**Lua:** rawbytes

Type

**JavaScript:** JSObject

**Lua:** UserData

Read / Write

Yes - (Read and Write)

JavaScript Example

```
//Defining the properties for a button with rawBytes:"11111"(This data should be returned from camera).  
var btnBasic={id:"button1",isVisible:true, skin:"btnSkin", focusSkin:"btnFSkin", text:"Click Here", **rawBytes:"11111"**};  
var btnLayout={containerWeight:100,padding:\[5,5,5,5\], margin:\[5,5,5,5\], hExpand:true, vExpand:false, displayText:true};  
var btnPSP={};  
  
//Creating the button.  
var button1 = new voltmx.ui.Button(btnBasic, btnLayout, btnPSP);  
  
//Reading rawBytes of the button   
alert("Button rawBytes ::"+button1.rawBytes);  
  

```

  
  
Accessible from IDE

No

Platform Availability

Available on all platforms except on all Server side Mobile Web and SPA

### skin

Specifies the look and feel of the Button when not in focus.

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
//Defining the properties for a button with skin:"btnSkin".  
var btnBasic={id:"button1",isVisible:true, **skin:"btnSkin"**, focusSkin:"btnFSkin", text:"Click Here"};  
var btnLayout={containerWeight:100, padding:\[5,5,5,5\],margin:\[5,5,5,5\], hExpand:true, vExpand:false,displayText:true};  
var btnPSP={};  
  
//Creating the button.  
var button1 = new voltmx.ui.Button(btnBasic, btnLayout, btnPSP);  
  
//Reading skin of the button.  
alert("Button skin ::"+button1.skin);  
  

```

Accessible from IDE

Yes

Platform Availability

Available on all platforms

### text

Specifies a general or descriptive text for the Button widget.

Syntax

**JavaScript:** text

**Lua:** text

Type

**JavaScript:** String

**Lua:** String

Read / Write

Yes - (Read and Write)

JavaScript Example

```
//Defining the properties for a button with text:"Click Here".  
var btnBasic={id:"button1", isVisible:true, skin:"btnSkin", focusSkin:"btnFSkin", **text:"Click Here"**};  
var btnLayout={containerWeight:100,padding:\[5,5,5,5\],margin:\[5,5,5,5\], hExpand:true, vExpand:false, displayText:true};  
var btnPSP={};  
  
//Creating the button.  
var button1 = new voltmx.ui.Button(btnBasic, btnLayout, btnPSP);  
  
//Reading text of the button.  
alert("Button text ::"+button1.text);  
  

```

  
Accessible from IDE

Yes

Platform Availability

Available on all platforms
