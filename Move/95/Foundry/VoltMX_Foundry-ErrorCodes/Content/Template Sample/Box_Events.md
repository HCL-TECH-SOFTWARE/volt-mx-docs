  

HBox - Events
-------------

HBox Widget has the following event associated with it:

*   [onClick](#onclick()
*   [onRightClick](#onrightclick)
*   [preOnclickJS](#preonclickjs)
*   [postOnclickJS](#postonclickjs)  
    

In Server side Mobile Web, for the events preOnclickJS and postOnclickJS you will not be able to access application model or APIs, as these functions are executed in browser whereas the remaining JS modules are executed in server. For these events you can access browser objects ( window, document etc..) to change UI or perform some validation before server event. If the event preOnclickJS returns true, only then the request is sent to server for subsequent action.  
  
You have to specify the modules to be loaded in browser using import JS tab, only then these files get included in.html script tag otherwise you will not be able to access the objects defined in those modules.

### onClick

An event callback is invoked by the platform when the user performs a click action on the widget.

If both **onClick** and a **single tab gesture** has been defined for a box then the behavior is undefined.

Syntax

**JavaScript:** onClick

**Lua:** onclick

Read / Write

Yes - (Read and Write)

JavaScript Example

```
//The below function is callBack for onClick event  
function boxOnClickEventTest(box)  
{  
     alert("OnClick event is invoked successfully");  
}  
  
//Defining the properties for a Box  
var basicConfBox = {id : "boxOnClickTest", isVisible:true, orientation:constants.BOX\_LAYOUT\_HORIZONTAL, **onClick:boxOnClickEventTest**};  
var layoutConfBox = {contentAlignment : constants.CONTENT\_ALIGN\_TOP\_CENTER, containerWeight:100, vExpand:true};  
  
//Creating the Box.  
var boxOnClickTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, {});  
  

```

Platform Availability

Available on all platforms

### onRightClick

An event callback is invoked by the platform when the user performs a right click action on the widget.

This event is enabled only when you select a template for contextMenu property.

Syntax

**JavaScript:** onRightClick

Read / Write

Yes - (Read and Write)

JavaScript Example

```
//The below function is callBack for onRightClick event  
  
function boxOnRightClickEventTest(box)  
  
{  
  
     alert("OnRightClick event is invoked successfully");  
  
}  
  
  
  
//Defining the properties for a Box  
  
var basicConfBox = {id : "boxOnRightClickTest", isVisible:true, orientation:constants.BOX\_LAYOUT\_HORIZONTAL, **onRightClick:boxOnRightClickEventTest**};  
  
var layoutConfBox = {contentAlignment : constants.CONTENT\_ALIGN\_TOP\_CENTER, containerWeight:100, vExpand:true};  
  
  
  
//Creating the Box.  
  
var boxOnClickTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, {});  
  
  
  

```

Platform Availability

Available on Desktop Web platform only

### preOnclickJS

This event allows the developer to execute custom javascript function before the _onClick_ callback of the box is invoked. This is applicable only for Mobile Web channel. The function must exist in a javascript file under project>module>js folder.

Syntax

**JavaScript:** preOnclickJS

**Lua:** preonclickjs

Read / Write

Yes - (Read and Write)

JavaScript Example

```
//The below function is callBack for preOnClickJS event  
function preOnClickJSCallBack(box)  
{  
     alert("PreOnclickJs called successfully");  
}  
  
//The below two functions will test the preOnclickJS event.  
var basicConf = {id : "lblPreEventSkinTC", text:"Click here to test PreOnClick JS so that JS function will get called", isVisible:true};  
var layoutConf = {contentAlignment :constants.CONTENT\_ALIGN\_CENTER, containerWeight:100, widgetAlignment:constants.WIDGET\_ALIGN\_CENTER, vExpand:true};  
  
//Creating the Label  
var lblPreEventSkinTC = new voltmx.ui.Label(basicConf, layoutConf, {});  
  
//Defining the properties for a Box.  
var basicConfBox = {id : "boxPreEventSkinTC", isVisible:true, orientation:constants.BOX\_LAYOUT\_HORIZONTAL};  
var layoutConfBox = {contentAlignment : constants.CONTENT\_ALIGN\_TOP\_CENTER, containerWeight:100,  vExpand:true};  
  
//Creating the box.  
var boxPreEventSkinTC = new voltmx.ui.Box(basicConfBox, layoutConfBox, **{preOnclickJS:preOnClickJSCallBack}**);  
  
//Adding label to box.  
boxPreEventSkinTC.add(lblPreEventSkinTC);  
  

```

Platform Availability

Available on Server side Mobile Web (advanced) platform only

### postOnclickJS

This event allows the developer to execute custom javascript function after the _onClick_ callback of the widget is invoked. This is applicable only for Mobile Web channel. The function must exist in a javascript file under project>module>js folder.

Syntax

**JavaScript:** postOnclickJS

**Lua:** postonclickjs

Read / Write

Yes - (Read and Write)

JavaScript Example

```
//The below function is callBack for postOnclickJS event  
function PostOnclickJSCallBack(box)  
{  
     alert("PreOnclickJs called successfully");  
}  
  
//The below two functions will test the postOnclickJS event.  
var basicConf = {id : "lblPostEventSkinTC", text:"Click here to test postOnclick JS so that JS function will get called", isVisible:true};  
var layoutConf = {contentAlignment :constants.CONTENT\_ALIGN\_CENTER, containerWeight:100, widgetAlignment:constants.WIDGET\_ALIGN\_CENTER, vExpand:true};  
  
//Creating the Label.  
var lblPostEventSkinTC = new voltmx.ui.Label(basicConf, layoutConf, {});  
  
//Defining the properties for a Box.  
var basicConfBox = {id : "boxPostEventSkinTC", isVisible:true, orientation:constants.BOX\_LAYOUT\_HORIZONTAL};  
var layoutConfBox = {contentAlignment : constants.CONTENT\_ALIGN\_TOP\_CENTER, containerWeight:100,  vExpand:true};  
  
//Creating the Box.  
var boxPostEventSkinTC = new voltmx.ui.Box(basicConfBox, layoutConfBox, **{postOnclickJS:PostOnclickJSCallBack}**);  
  
//Adding label to box.  
boxPostEventSkinTC.add(lblPostEventSkinTC);  
  

```

Platform Availability

Available on Server side Mobile Web (advanced) platform only
