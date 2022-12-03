  

Button - Events
---------------

Button has the following events associated with it:

*   [onClick](#onclick)
*   [preOnclickJS](#preonclickjs)
*   [postOnclickJS](#postonclickjs)

In Server side Mobile Web, for the events preOnclickJS and postOnclickJS you will not be able to access application model or APIs, as these functions are executed in browser whereas the remaining JS modules are executed in server. For these events you can access browser objects ( window, document etc..) to change UI or perform some validation before server event. If the event preOnclickJS returns true, only then the request is sent to server for subsequent action.  
  
You have to specify the modules to be loaded in browser using import JS tab, only then these files get included in.html script tag otherwise you will not be able to access the objects defined in those modules.

### onClick

An event callback is invoked by the platform when the user performs a click action on the button.

Signature

JavaScript: onClick

**Lua:** onclick

Read / Write

Yes - (Read and Write)

JavaScript Example

```
//The below function is the callback function for onClick event call.
function onClickCallBack(button)
{
    //Write your logic here.
}  
  
//Defining the properties for a button with onClick:onClickCallBck.
var btnBasic={id:"button1", isVisible:true, skin:"btnSkin", focusSkin:"btnFSkin", text:"Click Here", **onClick:onClickCallBck**};
var btnLayout={containerWeight:100, padding:\[5,5,5,5\], margin:\[5,5,5,5\], hExpand:true, vExpand:false, displayText:true};
var btnPSP={};

//Creating the button.
var button1 = new voltmx.ui.Button(btnBasic, btnLayout, btnPSP);  
  

```

Accessible from IDE

Yes

Platform Availability

Available on all platforms except Server side Mobile Web (basic)

### preOnclickJS

This event allows the developer to execute custom JavaScript function before the _onClick_ callback of the widget is invoked. This is applicable only for Mobile Web channel. The function must exist in a JavaScript file under project>module>js folder.

Syntax

**JavaScript:** preOnclickJS

**Lua:** preonclickjs

Read / Write

Yes - (Read and Write)

JavaScript Example

```
//The below function is the callback function for preOnclickJS event call.
function preOnclickJSCalBck(button)
{
    //Write your logic here.
}  
  
//Defining the properties for a button with preOnclickJS:preOnclickJSCalBck.
var btnBasic={id:"button1", isVisible:true, skin:"btnSkin", focusSkin:"btnFSkin", text:"Click Here"};
var btnLayout={containerWeight:100, padding:\[5,5,5,5\], margin:\[5,5,5,5\], hExpand:true, vExpand:false, displayText:true};
var btnPSP={**preOnclickJS:preOnclickJSCalBck**};  
  
//Creating the button.  
var button1 = new voltmx.ui.Button(btnBasic, btnLayout, btnPSP);

//Reading preOnclickJS of the button.
alert("Button preOnclickJS ::"+button1.preOnclickJS);  
  

```

Accessible from IDE

Yes

Platform Availability

Available on Server side Mobile Web (advanced) platform only

### postOnclickJS

This event allows the developer to execute custom JavaScript function after the _onClick_ callback of the widget is invoked. This is applicable only for Mobile Web channel. The function must exist in a JavaScript file under project>module>js folder.

Syntax

**JavaScript:** postOnclickJS

**Lua:** postonclickjs

Read / Write

Yes - (Read and Write)

JavaScript Example

```
//The below function is the callback function for postOnclickJS event call.
function postOnclickJSCalBck(button)
{
    //Write your logic here.
}

//Defining the properties for a button with postOnclickJS:postOnclickJSCalBck
var btnBasic={id:"button1", isVisible:true, skin:"btnSkin", focusSkin:"btnFSkin", text:"Click Here"};
var btnLayout={containerWeight:100, padding:\[5,5,5,5\], margin:\[5,5,5,5\], hExpand:true, vExpand:false, displayText:true};
var btnPSP={**postOnclickJS:postOnclickJSCalBck**};  
  
//Creating the button.  
var button1 = new voltmx.ui.Button(btnBasic, btnLayout, btnPSP);

//Reading postOnclickJS of the button 
alert("Button postOnclickJS ::"+button1.postOnclickJS);  
  

```

Accessible from IDE

Yes

Platform Availability

Available on Server side Mobile Web (advanced) platform only
