                               

Popup Events
------------

Popup has the following events associated with it:

* * *

* * *

*   [addWidgets](#addWidgets)
*   [init](#init)
*   [onHide](#onHide())
*   [onDeviceBack](#onDevice)
*   [onLoadJS](#onLoadJS)
*   [unLoadJS](#unLoadJS)


<details close markdown="block"><summary>addWidgets</summary>

* * *

An event callback invoked by the platform when show method of popup is called for first time after its construction. This is called only once in a lifetime of the popup between creation and destruction. This method is also called when destroyed popup is shown again. Popups can be destroyed using destroy method.

### Synax 

```

addWidgets()
```

### Read/Write

Write only

### Example

```

//Defining properties for a Popup with addWidgets:addWidgetsCallBck
var popBasic ={id:"popUp", title:"PopUP",skin:"popSkin", headers:[box1,box2], footers:[box3,box4], isModal:true, transparencyBehindThePopup:100, **addWidgets:addWidgetsCallBck**};

var popLayout ={containerWeight:100, padding:[5,5,5,5]};

var popPSP ={};
  
//Creating the Popup.
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);
```

### Platform Availability

Available on all platforms

* * *

</details>
<details close markdown="block"><summary>init</summary>

* * *

This event gets called only once in popup life cycle that is when the popup is ready with its widget hierarchy. This will get called after [addwidgets](#addWidgets) method allowing user for any one-time initializations.

When popup is destroyed and reused again, init gets called as a part of popup lifecycle.

### Synax 

```

init()
```

### Read/Write

Read + Write

### Example

```

//The below function is the callback function for init event.
function initCallBck(popup)
{
	//Write your logic here
}

//Defining properties for a Popup with init:initCallBck.
var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin", headers:[box1,box2], footers:[box3,box4], isModal:true, transparencyBehindThePopup:100, **init:initCallBck**};

var popLayout ={containerWeight:100, padding:[5,5,5,5]};

var popPSP ={};
  
//Creating the Popup.
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);
```

### Platform Availability

Available on all platforms

* * *

</details>
<details close markdown="block"><summary>onHide</summary>

* * *

Specifies an _Event_ which is triggered when a popup goes out of view.

### Synax 

```

onHide()
```

### Read/Write

Read + Write

### Remarks

This event is triggered in the following scenarios:

*   [form.show](Form_Methods.md#form.sho) (another form) is called
*   User hits the device back button or key

This event is _not_ triggered in the following scenarios:

*   The form is partially or completely covered by the Popup.
*   The form is partially or completely covered by the Application Menu.

### Example

```

function onHideCallBck(popup)
{
	//Write your logic here
}

//Defining properties for a Popup with onHide:onHideCallBck.
var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin", headers:[box1,box2], footers:[box3,box4], isModal:true, transparencyBehindThePopup:100, **onHide:onHideCallBck**};

var popLayout ={containerWeight:100,padding:[5,5,5,5]};

var popPSP ={};

//Creating the Popup.
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);
```

### Platform Availability

Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>onDeviceBack</summary>

* * *

Specifies an event which is triggered when the user uses the back button on the device.

For more information see _Event Editor_ in _the Volt MX Iris User Guide_.

### Synax 

```

onDeviceBack(popupref)
```

### Read/Write

Read + Write

### Example

```

//The below function is the callback function for onDeviceBack event.
function onDeviceBackCallBck(popup)
{
	//Write your logic here
}

//Defining properties for a Popup with onDeviceBack:onDeviceBackCallBck
var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin", headers:[box1,box2], footers:[box3,box4], isModal:true, transparencyBehindThePopup:100, onHide:onHideCallBck};

var popLayout ={containerWeight:100,padding:[5,5,5,5]};

var popPSP ={**onDeviceBack:onDeviceBackCallBck**};

//Creating the Popup.
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);
```

### Platform Availability

*   Android
*   BlackBerry

* * *

</details>
<details close markdown="block"><summary>onDestroy</summary>

* * *

Specifies an event which is triggered when the popup is destroyed.

For more information see _Event Editor_ in _the Iris User Guide_.

### Signature

JavaScript: onDestroy

**Lua:** ondestroy

### Read / Write

Yes - (Read and Write)

### Example

```

//The below function is the callback function for onDestroy event.
function onDestroyCallBck(popup)
{
	//Write your logic here
}

//Defining properties for a Popup with onDestroy:onDestroyCallBck
var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin", headers:[box1,box2], footers:[box3,box4], isModal:true, transparencyBehindThePopup:100, onHide:onHideCallBck};

var popLayout ={containerWeight:100,padding:[5,5,5,5]};

var popPSP ={**onDestroy:onDestroyCallBck**};

//Creating the Popup.
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);
```

### Platform Availability

This property is available on iPhone/iPad only.

* * *

</details>
<details close markdown="block"><summary>onLoadJS</summary>

* * *

Specifies the name of function to be executed when a popup is loaded. The function must exist in a JavaScript file under project>module>js folder.

### Synax 

```

onLoadJS
```

### Read/Write

Read + Write

### Example

```

//The below function is the callback function for onLoadJS event
function onLoadJSCallBck(popup)
{
	//Write your logic here
}

//Defining properties for a Popup with onLoadJS:onLoadJSCallBck
var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin", headers:[box1,box2], footers:[box3,box4], isModal:true, transparencyBehindThePopup:100, onHide:onHideCallBck};

var popLayout ={containerWeight:100, padding:[5,5,5,5]};

var popPSP ={**onLoadJS:onLoadJSCallBck**};

//Creating the Popup.
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);

//Reading the onLoadJS of the popUp
alert("popUp onLoadJS::"+popUp.onLoadJS);
```

### Availability

Available in the IDE

Available on Server side Mobile Web (BJS and Advanced) platform

* * *

</details>
<details close markdown="block"><summary>unLoadJS</summary>

* * *

Specifies the name of function to be executed when a popup is unloaded. The function must exist in a JavaScript file under project>module>js folder.

### Synax 

```

unLoadJS
```

### Read/Write

Read + Write

### Example

```

//The below function is the callback function for unLoadJS event
function unLoadJSCallBck(popup)
{
	//Write your logic here
}

//Defining properties for a Popup with unLoadJS:unLoadJSCallBck
var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin", headers:[box1,box2], footers:[box3,box4], isModal:true, transparencyBehindThePopup:100, onHide:onHideCallBck};

var popLayout ={containerWeight:100,padding:[5,5,5,5]};

var popPSP ={**unLoadJS:unLoadJSCallBck**};
  
//Creating the Popup.
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);

//Reading the unLoadJS of the popUp
alert("popUp unLoadJS::"+popUp.unLoadJS);
```

### Availability

Available in the IDE

Available on Server side Mobile Web (Advanced) platform

* * *

</details>


