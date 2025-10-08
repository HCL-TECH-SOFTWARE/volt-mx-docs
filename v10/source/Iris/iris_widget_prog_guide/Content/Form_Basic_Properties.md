                               

Form Properties
---------------

This widget is deprecated. Older applications that use it will still function, but new applications should use the [FlexForm](FlexForm.md) widget.

The basic properties for Form widget are:

*   [enabledForIdleTimeout](#enabledforidletimeout-property)
*   [enableCache](#enablecache-property)
*   [footers](#footers-property)
*   [headers](#headers-property)
*   [id](#id-property)
*   [info](#info-property)
*   [menuFocusSkin](#menufocusskin-property)
*   [menuItems](#menuitems-property)
*   [menuNormalSkin](#menunormalskin-property)
*   [needAppMenu](#needappmenu-property)
*   [skin](#skin-property)
*   [title](#title-property)
*   [type](#type-property)

### enabledForIdleTimeout Property

Idle time indicates the amount of time that a user has not interacted with the application. Some of the applications require a notification to be raised when a user has not interacted with the form for a specified amount of time. For example, a banking app might require a notification after 5 minutes of inactivity by the user. At the same time, applications also need an ability to not raise this notification for certain forms in the application. For example, ATM Locator forms in a banking app, _enabledForIdleTimeout_ property indicates, if the form is going to raise the notification after a specific period of inactivity (set using the API _voltmx.application.registerForIdleTimeout_.)

**Default:** _false_ (the session will not expire after a period of inactivity).

If you want the session to expire after a period of inactivity (for example, you might require a Bank Accounts page of a site to expire after a period of inactivity), you can enable the time out period set in code by selecting the checkbox.

For more information about enabled for idle timeout, see API _voltmx.application.registerForIdleTimeout_ in the _VoltMX API User Guide._

Syntax

enabledForIdleTimeout

Type

Boolean

Read/Write

No

Example

```

//Defining a form with enabledForIdleTimeout:true
var frmBasic = {id:"frm", type:constants.FORM_TYPE_NATIVE, title:"Welcome", skin:"frmSkin", **enabledForIdleTimeout:true**, headers:[hbox1,hbox2]};

var frmLayout ={displayOrientation:constants.FORM_DISPLAY_ORIENTATION_BOTH, paddingInPixel:false, padding:[5,5,5,5]};

var frmPSP ={};

//Creating a form.
var frm =new voltmx.ui.Form2(frmBasic, frmLayout, frmPSP);



```

Accessible from IDE

Yes

Platform Availability

Available on all platforms

### enableCache Property

This property enables you to improve the performance of Positional Dimension Animations.

> **_Note:_** When this property is used, it increases the memory consumption by the application. It enables tradeoff between performance and visual quality of the content.

**Default:**_true_

Syntax

enableCache

Type

Boolean

Read/Write

Yes - (Read and Write)

Accessible from IDE

Yes

Platform Availability

This property is supported only on Windows platform

### footers Property

A footer is a section of the form that is docked at the bottom of the form (does not scroll along with the content of the form). It accepts an array of voltmx.ui.Box object references with horizontal orientation that are added as footer docked at the bottom of the Form. These footers can be reused across the forms.

WidgetError (1102) is displayed, if any of the array elements are not type of voltmx.ui.Box with horizontal orientation.

Syntax

footers

Type

Array(voltmx.ui.Box)

Read/Write

Yes - (Read only)

Example

```

//Defining a form with footers:[hbox3,hbox4], Where hbox3 and hbox4 are the horizontal boxes which were created and made accessible and btn2 is present in hbox3.
var frmBasic = {id:"frm", type:constants.FORM_TYPE_NATIVE, title:"Welcome", skin:"frmSkin", needAppMenu:true, enabledForIdleTimeout:true, headers:[hbox1,hbox2], **footers:[hbox3,hbox4]**, menuNormalSkin:"mSkin", menuFocusSkin:"mFSkin", menuItems:[menu1,menu2]};

var frmLayout ={displayOrientation:constants.FORM_DISPLAY_ORIENTATION_BOTH, paddingInPixel:false, padding:[5,5,5,5]};

var frmPSP ={};

//Creating a form.
var frm =new voltmx.ui.Form2(frmBasic, frmLayout, frmPSP);

//Accessing widgets present in footers of a form.
frm.footers[0].btn2 //btn2 is a button widget present in hbox3.
```

Accessible from IDE

Yes

Platform Availability

Available on all platforms.

### headers Property

A header is a section of the form that is docked at the top of the form (does not scroll along with the content of the form). It accepts an array of voltmx.ui.Box object references with horizontal orientation that are added as header docked at the top of the Form. These headers can be reused across forms.

For SPA platform, If you have a form background with an image, when you increase the height of the headers the image assigned to the form gets shrinks.

Syntax

headers

Type

Array(voltmx.ui.Box)

Read/Write

Yes - (Read only)

Example

```

//Defining a form with headers:[hbox1,hbox2], Where hbox1 and hbox2 are the horizontal boxes which were created and made accessible and btn1 is present in hbox1.
var frmBasic = {id:"frm", type:constants.FORM_TYPE_NATIVE, title:"Welcome", skin:"frmSkin", needAppMenu:true, enabledForIdleTimeout:true, **headers:[hbox1,hbox2]**, footers:[hbox3,hbox4], menuNormalSkin:"mSkin", menuFocusSkin:"mFSkin", menuItems:[menu1,menu2]};

var frmLayout ={displayOrientation:constants.FORM_DISPLAY_ORIENTATION_BOTH, paddingInPixel:false, padding:[5,5,5,5]};

var frmPSP ={};

//Creating a form.
var frm =new voltmx.ui.Form2(frmBasic, frmLayout, frmPSP);

//Accessing widgets present in headers of a form.
frm.headers[0].btn1 //btn1 is a button widget present in hbox1.
```

Accessible from IDE

Yes

Platform Availability

Available on all platforms except Desktop Web

### id Property

id is a unique identifier of form consisting of alpha numeric characters. Every Form should have a unique id within an application.

Syntax

id

Type

String - \[Mandatory\]

Read/Write

Yes - (Read only)

Example

```

//Defining the properties for a form with id:"frm"
var frmBasic = {**id:"frm"**,type:constants.FORM_TYPE_NATIVE , title:"Welcome", skin:"frmSkin", needAppMenu:true, enabledForIdleTimeout:true, headers:[hbox1,hbox2], footers:[hbox3,hbox4], menuNormalSkin:"mSkin", menuFocusSkin:"mFSkin", menuItems:[menu1,menu2]};

var frmLayout ={displayOrientation:constants.FORM_DISPLAY_ORIENTATION_BOTH, paddingInPixel:false, padding:[5,5,5,5]};

var frmPSP ={};

//Creating a form.
var frm =new voltmx.ui.Form2(frmBasic, frmLayout, frmPSP);

//Reading id of the form.
alert("form id::"+frm.id);
```

Accessible from IDE

Yes

Platform Availability

Available on all platforms

### info Property

A custom JSObject with the key value pairs that a developer can use to store the context with the widget. This will help in avoiding the globals to most part of the programming.

> **_Note:_** This is a **non-Constructor** property. You cannot set this property through widget constructor. But you can read and write data to it.

Info property can hold any JSObject. After assigning the JSObject to info property, the JSObject should not be modified. For example,

```

var inf = {a: 'hello'};
widget.info = inf; //works
widget.info.a = 'hello world'; //This will not update the widget info a property to Hello world. widget.info.a will have old value as hello.
```

Syntax

info

Type

JSObject

Read/Write

Yes - (Read and Write)

Example

```

//Defining the properties for a form with info property.
var frmBasic = {id:"frm", type:constants.FORM_TYPE_NATIVE , title:"Welcome", skin:"frmSkin", needAppMenu:true, enabledForIdleTimeout:true, headers:[hbox1,hbox2], footers:[hbox3,hbox4], menuNormalSkin:"mSkin", menuFocusSkin:"mFSkin", menuItems:[menu1,menu2]};

var frmLayout ={displayOrientation:constants.FORM_DISPLAY_ORIENTATION_BOTH, paddingInPixel:false, padding:[5,5,5,5]};

var frmPSP ={};

//Creating a form.
var frm =new voltmx.ui.Form2(frmBasic, frmLayout, frmPSP);  
**frm.info = {key:"FORM"};**  
//Reading info of the form.
alert("form info is ::"+frm.info);
```

Platform Availability

Not accessible from IDE

Available on all platforms

### menuFocusSkin Property

This is a skin property of a form level menu and it determines the look and feel of the Menu Item when focused.

> **_Note:_** For BlackBerry (7 and below) and J2ME, this property is applicable only if the property [Show Tab Style Form Menu](#Show2) is set to _true_.

> **_Note:_** For Desktop Web platform, use [MenuContainer](MenuContainer.md) widgets to get menu related features.

Syntax

menuFocusSkin

Type

String

Read/Write

Yes - (Write only) \[Applicable on BlackBerry, J2ME, and Window Phone platforms\]

Example

```

//Defining a form with menuFocusSkin:"mFSkin",Skin with the same name should be created.
var frmBasic = {id:"frm", type:constants.FORM_TYPE_NATIVE, title:"Welcome", skin:"frmSkin", needAppMenu:true, enabledForIdleTimeout:true, headers:[hbox1,hbox2], footers:[hbox3,hbox4], menuNormalSkin:"mSkin", **menuFocusSkin:"mFSkin"**, menuItems:[menu1,menu2]};

var frmLayout ={displayOrientation:constants.FORM_DISPLAY_ORIENTATION_BOTH, paddingInPixel:false, padding:[5,5,5,5]};

var frmPSP ={};

//Creating a form.
var frm =new voltmx.ui.Form2(frmBasic, frmLayout, frmPSP);
```

Platform Availability

*   Accessible from IDE
*   iPad
*   iPhone
*   Android
*   BlackBerry
*   Window Phone

### menuItems Property

menuItems represents the list of items to be displayed in the device menu control. Unlike application menu items, which are available across all the forms, these items are only available for a specific form.

> **_Note:_** For Desktop Web platform, use [MenuContainer](MenuContainer.md) widgets to get menu related features.

Syntax

menuItems

Type

JSObject

Read/Write

Yes - (Write only) \[Applicable on BlackBerry and Windows platforms\]

Example

```

//Defining a form with menuItems:[menu1,menu2]
var frmBasic = {id:"frm", type:constants.FORM_TYPE_NATIVE, title:"Welcome", skin:"frmSkin", needAppMenu:true, enabledForIdleTimeout:true, headers:[hbox1,hbox2], footers:[hbox3,hbox4], menuNormalSkin:"mSkin", menuFocusSkin:"mFSkin", **menuItems:[menu1,menu2]**};

var frmLayout ={displayOrientation:constants.FORM_DISPLAY_ORIENTATION_BOTH, paddingInPixel:false, padding:[5,5,5,5]};

var frmPSP ={};

//Creating a form.
var frm =new voltmx.ui.Form2(frmBasic, frmLayout, frmPSP);
```

Platform Availability

Accessible from IDE

Available on all platforms except iOS, SPA, Windows Desktop, and Windows Tablet

### menuNormalSkin Property

This is a skin property and it determines the look and feel of a menu items when not in focus.

> **_Note:_** For Desktop Web platform, use [MenuContainer](MenuContainer.md) widgets to get menu related features.  

Syntax

menuNormalSkin

Type

String

Read/Write

Yes (Write only)

Example

```

//Defining a form with menuNormalSkin:"mSkin",Skin with the same name should be created.
var frmBasic = {id:"frm", type:constants.FORM_TYPE_NATIVE, title:"Welcome", skin:"frmSkin", needAppMenu:true, headers:[hbox1,hbox2], footers:[hbox3,hbox4], **menuNormalSkin:"mSkin"**, menuFocusSkin:"mFSkin", menuItems:[menu1,menu2]};

var frmLayout ={displayOrientation:constants.FORM_DISPLAY_ORIENTATION_BOTH, paddingInPixel:false, padding:[5,5,5,5]};

var frmPSP ={};

//Creating a form.
var frm =new voltmx.ui.Form2(frmBasic, frmLayout, frmPSP);
```

Platform Availability

Accessible from IDE

Available on all platforms except Windows Tablet, Windows Desktop, and Desktop Web

### needAppMenu Property

Specifies if the application menu items should be displayed as a part of the menu controls on the form.

**Default:** _true_ (Indicates that the application menu must be displayed.)

_false_ - indicates that the application menu must not be displayed.

Syntax

needAppMenu

Type

Boolean

Read/Write

No

Example

```

//Defining a form with needAppMenu:true
var frmBasic = {id:"frm",type:constants.FORM_TYPE_NATIVE, title:"Welcome", skin:"frmSkin", **needAppMenu:true**, enabledForIdleTimeout:true, headers:[hbox1,hbox2], footers:[hbox3,hbox4], menuNormalSkin:"mSkin", menuFocusSkin:"mFSkin", menuItems:[menu1,menu2]};

var frmLayout ={displayOrientation:constants.FORM_DISPLAY_ORIENTATION_BOTH, paddingInPixel:false, padding:[5,5,5,5]};

var frmPSP ={};

//Creating a form.
var frm =new voltmx.ui.Form2(frmBasic, frmLayout, frmPSP);
```

Platform Availability

Accessible from IDE

Available on all platforms

### skin Property

Specifies a background skin for Form widget.

> **_Note:_** Server side Mobile Web (basic ) and SPA (BB NTH) devices does not support Vertical gradient and Vertical split skins. Transparent skin is not supported on SPA (Windows) platform.

> **_Note:_** Server side Mobile Web ](BB .md) does not support Image skin.

Syntax

skin

Type

String

Read/Write

Yes - (Read and Write)

Example

```

//Defining a form with skin:"frmSkin",Skin with the same name should be created.
var frmBasic = {id:"frm",type:constants.FORM_TYPE_NATIVE , title:"Welcome", **skin:"frmSkin"**, needAppMenu:true, enabledForIdleTimeout:true, headers:[hbox1,hbox2], footers:[hbox3,hbox4], menuNormalSkin:"mSkin", menuFocusSkin:"mFSkin", menuItems:[menu1,menu2]};

var frmLayout ={displayOrientation:constants.FORM_DISPLAY_ORIENTATION_BOTH, paddingInPixel:false, padding:[5,5,5,5]};

var frmPSP ={};

//Creating a form.
var frm =new voltmx.ui.Form2(frmBasic, frmLayout, frmPSP);
```

Platform Availability

Accessible from IDE

Available on all platforms

### title Property

Specifies the title of the form.

Syntax

title

Type

String

Read/Write

Yes - (Read and Write)

Example

```

//Defining the properties for a form with title:"Welcome"
var frmBasic = {id:"frm",type:constants.FORM_TYPE_NATIVE ,**title:"Welcome"**, skin:"frmSkin", needAppMenu:true, enabledForIdleTimeout:true, headers:[hbox1,hbox2],
footers:[hbox3,hbox4], menuNormalSkin:"mSkin", menuFocusSkin:"mFSkin", menuItems:[menu1,menu2]};

var frmLayout ={displayOrientation:constants.FORM_DISPLAY_ORIENTATION_BOTH, paddingInPixel:false, padding:[5,5,5,5]};

var frmPSP ={};

//Creating a form.
var frm =new voltmx.ui.Form2(frmBasic, frmLayout, frmPSP);

//Reading title of the form
alert("form title::"+frm.title);
```

Platform Availability

Accessible from IDE

Available on all platforms

### type Property

Specifies the type of Form. The following are the available types of Form:

*   FORM\_TYPE\_NATIVE (default)
*   FORM\_TYPE\_STATIC
*   FORM\_TYPE\_DYNAMIC

> **_Note:_** Windows Phone and Desktop Web platforms support only FORM\_TYPE\_NATIVE option.

Syntax

type

Type

Number

Read/Write

Yes - (Read only)

Example

```

//Defining a form with type:constants.FORM_TYPE_NATIVE
var frmBasic = {id:"frm", **type:constants.FORM_TYPE_NATIVE** , title:"Welcome", skin:"frmSkin", needAppMenu:true, enabledForIdleTimeout:true, headers:[hbox1,hbox2], footers:[hbox3,hbox4], menuNormalSkin:"mSkin", menuFocusSkin:"mFSkin", menuItems:[menu1,menu2]};

var frmLayout ={displayOrientation:constants.FORM_DISPLAY_ORIENTATION_BOTH, paddingInPixel:false, padding:[5,5,5,5]};

var frmPSP ={};

//Creating a form.
var frm =new voltmx.ui.Form2(frmBasic, frmLayout, frmPSP);
```

Platform Availability

Accessible from IDE

Available on all platforms

