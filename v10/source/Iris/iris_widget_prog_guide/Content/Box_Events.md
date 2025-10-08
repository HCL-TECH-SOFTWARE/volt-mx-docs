                               

HBox Events
-----------

HBox Widget has the following events associated with it:

* * *

*   [onClick](#onclick)
*   [onHover](#onhover)
*   [onRightClick](#onrightclick)
*   [preOnclickJS](#preonclickjs)
*   [postOnclickJS](#postonclickjs)

> **_Note:_** In for the events preOnclickJS and postOnclickJS you will not be able to access application model or APIs, as these functions are executed in browser whereas the remaining JS modules are executed in server. For these events you can access browser objects ]( window, document etc..) to change UI or perform some validation before server event. If the event preOnclickJS returns true, only then the request is sent to server for subsequent action. You have to specify the modules to be loaded in browser using import JS tab, only then these files get included in.md script tag otherwise you will not be able to access the objects defined in those modules.

### onClick

An event callback is invoked by the platform when the user performs a click action on the widget.

> **_Note:_** If both **onClick** and a **single tab gesture** has been defined for a box then the behavior is undefined.

Syntax

onClick

The onClick event callback accepts additional parameters when a HBox is placed in a segment row or section template.

Syntax

onClick (context)

The argument context has the following parameters.

Parameters

rowIndex \[Number\] - Optional

Index of the row that contains the HBox. It is not available if the HBox is placed in a section header.

sectionIndex \[Number\] - Mandatory

Index of the section row that contains the HBox.

widgetInfo \[widgetref\] - Mandatory

Handle to the parent widget instance(segment) that contains the HBox.

Read/Write

Yes - (Read and Write)

Example

```
                
//The below function is callBack for onClick event
function boxOnClickEventTest(box){
	alert("OnClick event is invoked successfully");
}
				
//Defining the properties for a Box
var basicConfBox = {id:"boxOnClickTest", 
	isVisible:true, 
	orientation:constants.BOX_LAYOUT_HORIZONTAL, 
	**onClick:boxOnClickEventTest**};

var layoutConfBox = {contentAlignment:constants.CONTENT_ALIGN_TOP_CENTER, 
	containerWeight:100, vExpand:true};

//Creating the Box.
var boxOnClickTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, {});
```

Platform Availability

Available on all platforms

### onHover

An event callback is invoked by the platform based on the below actions:

*   When the mouse enters into the widget region.
*   When the mouse moves with in the widget region.
*   When the mouse leaves from the widget region.

> **_Note:_** When the event callback is invoked, corresponding widget state is not updated as selected/unselected.

Important Considerations

Below are the points to be considered while using onHover event.

*   To remove onHover event on a widget, set it to null.
```
widget.onHover = null;
```
*   Data / computing intense operations should not be performed in onHover callback.
*   Avoid network calls in onHover event as it affects the performance.
*   Use this event to update the skin.
*   When an onHover event is defined to both parent and child widgets, the onHover event executes as follows:
    *   When mouse moves into parent widget, then MOUSE\_ENTER event gets fired on the parent widget.
    *   When mouse moves inside the parent widget, then MOUSE\_MOVE event is fired continuously till mouse moves inside the parent widget.
    *   When mouse moves into the child widget area, then MOUSE\_ENTER event gets fired on the child widget.
    *   When mouse moves inside the child widget area, then MOUSE\_MOVE event is fired on child widget and also on the parent widget.
    *   When mouse moves out of the child widget area, then MOUSE\_LEAVE event gets fired on child widget and MOUSE\_MOVE event gets fired on the parent widget.
    *   When mouse moves out of the parent widget, then MOUSE\_LEAVE event gets fired on the parent widget.

Syntax

onHover (widget, context)

Parameters

widget \[widgetref\] - Mandatory

Handle to the widget instance that raised the event.

context \[Object\] - Mandatory

Specifies the JSObject with the following key values.

> eventType \[Constant\] - Mandatory
> 
> Following are the options available:
> 
> > constants.ONHOVER\_MOUSE\_ENTER - When the mouse enters into the widget region.
> > 
> > constants.ONHOVER\_MOUSE\_MOVE - When the mouse move within the widget region.
> > 
> > constants.ONHOVER\_MOUSE\_LEAVE - When the mouse leaves from the widget region.
> 
> > sectionIndex \[Number\] - Optional
> > 
> > Specifies the index of the section where the current focused row belongs. It is applicable only if parent is SegmentedUI.
> > 
> > rowIndex \[Number\] - Optional
> > 
> > Specifies the index of the current focused row relative to its section. It is applicable only if parent is SegmentedUI or DataGrid.
> > 
> > columnIndex \[Number\] - Optional
> > 
> > Specifies the index of the cell in DataGrid where the mouse exists. It is applicable only if parent is DataGrid.
> > 
> > selectionState \[Boolean\] - Optional
> > 
> > Specifies the selection state when the widget is placed inside a segmentedUI and its selectionBehavior property is set as SEGUI\_MULTI\_BEHAVIOR or SEGUI\_SINGLE\_SELECT\_BEHAVIOR to indicate the current focused rows checked or unchecked state.
> > 
> > index \[Number\] - Optional
> > 
> > Specifies the index of the current focused image in ImageGallery or HorizontalImageStrip widgets. It is applicable only for ImageGallery or HorizontalImageStrip widgets.
> > 
> > key \[String\] - Optional
> > 
> > Specifies the key of the element in a CheckBoxGroup or RadioButton widgets.
> > 
> > pageX \[Number\] - Mandatory
> > 
> > Specifies the horizontal coordinate of the onHover event relative to the whole document.
> > 
> > pageY \[Number\] - Mandatory
> > 
> > Specifies the vertical coordinate of the onHover event relative to the whole document.
> > 
> > screenX \[Number\] - Mandatory
> > 
> > Specifies the horizontal coordinate of the onHover event relative to the screen width.
> > 
> > screenY \[Number\] - Mandatory
> > 
> > Specifies the vertical coordinate of the onHover event relative to the screen height.

Example

```
                
//Sample code to use onHover event
function onHoverEventCallback(widget,context){
	voltmx.print("button hover event executed" + context.eventType);
	if (context.eventType == constants.ONHOVER_MOUSE_ENTER)
	{
		widget.skin = "yellow";
	}
	else if (context.eventType == constants.ONHOVER_MOUSE_MOVE) 
	{
		widget.skin = "yellow";
	}
	else if (context.eventType == constants.ONHOVER_MOUSE_LEAVE)
	{
		widget.skin = "blue";
	}
}

function addHoverEvent(){
	voltmx.print("registering hover events");
	form1.button1.onHover = onHoverEventCallback;
}

function removeHoverEvent(){
	voltmx.print("removing hover events");
	form1.button1.onHover = null;
}
```

Platform Availability

Available on Desktop Web platform only

### onRightClick

An event callback is invoked by the platform when the user performs a right click action on the widget.

> **_Note:_** This event is enabled only when you select a template for contextMenu property.

Syntax

onRightClick

Read/Write

Yes - (Read and Write)

Example

```
                
//The below function is callBack for onRightClick event  
function boxOnRightClickEventTest(box)  
{  
	 alert("OnRightClick event is invoked successfully");  
}  
  
//Defining the properties for a Box  
var basicConfBox = {id:"boxOnRightClickTest", isVisible:true, orientation:constants.BOX_LAYOUT_HORIZONTAL, **onRightClick:boxOnRightClickEventTest**};  
var layoutConfBox = {contentAlignment:constants.CONTENT_ALIGN_TOP_CENTER, containerWeight:100, vExpand:true};  
  
//Creating the Box.  
var boxOnClickTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, {});
```

Platform Availability

Available on Desktop Web platform only

### preOnclickJS

This event allows the developer to execute custom javascript function before the _onClick_ callback of the box is invoked. This is applicable only for Mobile Web channel. The function must exist in a javascript file under project>module>js folder.

Syntax

preOnclickJS

Read/Write

Yes - (Read and Write)

Example

```
                
//The below function is callBack for preOnClickJS event
function preOnClickJSCallBack(box){
	alert("PreOnclickJs called successfully");
}

//The below two functions will test the preOnclickJS event.
var basicConf = {id:"lblPreEventSkinTC", 
	text:"Click here to test PreOnClick JS so that JS function will get called", 
	isVisible:true};

var layoutConf = {contentAlignment:constants.CONTENT_ALIGN_CENTER, 
	containerWeight:100, widgetAlignment:constants.WIDGET_ALIGN_CENTER, 
	vExpand:true};

//Creating the Label
var lblPreEventSkinTC = new voltmx.ui.Label(basicConf, layoutConf, {});

//Defining the properties for a Box.
var basicConfBox = {id:"boxPreEventSkinTC", 
	isVisible:true, 
	orientation:constants.BOX_LAYOUT_HORIZONTAL};

var layoutConfBox = {contentAlignment:constants.CONTENT_ALIGN_TOP_CENTER, 
	containerWeight:100, 
	vExpand:true};

//Creating the box.
var boxPreEventSkinTC = new voltmx.ui.Box(basicConfBox, 
	layoutConfBox, 
	**{preOnclickJS:preOnClickJSCallBack}**);

//Adding label to box
boxPreEventSkinTC.add(lblPreEventSkinTC);
```

Platform Availability

Available on Server side Mobile Web (BJS and Advanced) platform only

### postOnclickJS

This event allows the developer to execute custom javascript function after the _onClick_ callback of the widget is invoked. This is applicable only for Mobile Web channel. The function must exist in a javascript file under project>module>js folder.

Syntax

postOnclickJS

Read/Write

Yes - (Read and Write)

Example

```
                
//The below function is callBack for postOnclickJS event
function PostOnclickJSCallBack(box){
	alert("PreOnclickJs called successfully");
}

//The below two functions will test the postOnclickJS event.
var basicConf = {id:"lblPostEventSkinTC", text:"Click here to test postOnclick JS so that JS function will get called", isVisible:true};

var layoutConf = {contentAlignment :constants.CONTENT_ALIGN_CENTER, containerWeight:100, widgetAlignment:constants.WIDGET_ALIGN_CENTER, vExpand:true};

//Creating the Label.
var lblPostEventSkinTC = new voltmx.ui.Label(basicConf, layoutConf, {});

//Defining the properties for a Box.
var basicConfBox = {id:"boxPostEventSkinTC", 
	isVisible:true, 
	orientation:constants.BOX_LAYOUT_HORIZONTAL};

var layoutConfBox = {contentAlignment:constants.CONTENT_ALIGN_TOP_CENTER, 
	containerWeight:100, 
	vExpand:true};

//Creating the Box.
var boxPostEventSkinTC = new voltmx.ui.Box(basicConfBox, 
	layoutConfBox, 
	**{postOnclickJS:PostOnclickJSCallBack}**);

//Adding label to box.
boxPostEventSkinTC.add(lblPostEventSkinTC);
```

Platform Availability

Available on Server side Mobile Web (Advanced) platform only

