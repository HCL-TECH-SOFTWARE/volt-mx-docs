                               

Form Events
-----------

This widget has been deprecated. Older applications that use it will still function, but new applications should use the [FlexForm](FlexForm.md) widget.

Form widget has the following events associated:

> **_Note:_** In Server side Mobile Web platform, only the last event _form.show_ or an alert will be displayed. For example, If there are 3 alert statements and an event form.show in the end, then form is displayed. Alert will not be displayed. Similarly you call a form.show and in subsequent statements or in form pre/post events you call alert then that alert will be displayed but not the form.

*   [addWidgets](#addwidgets-event)
*   [init](#init-event)
*   [onActionBarBack](#onactionbarback-event)
*   [onHide](#onhide)
*   [onOrientationChange](#onorientationchange)
*   [onDeviceBack](#ondeviceback)
*   [onDeviceMenu](#ondevicemenu)
*   [onDestroy](#ondestroy)
*   [preShow](#preshow)
*   [postShow](#postshow)
*   [onLoadJS](#onloadjs)
*   [unLoadJS](#unloadjs)

### addWidgets Event

An event callback invoked by the platform when the form is accessed for first time after its construction. This function gets executed only once on in lifetime of the form. If a destroyed form is accessed, the form is re-initialized and this callback is once again invoked. Forms can be destroyed using destroy method.

Syntax

addWidgets()

Read/Write

Yes - (Read and Write)

Example

```

//The below function is the callback function for addWidgets event of the form.
function addWidgetsCalBck(form)
{
	//Write your logic here.
}

//Defining a form with addWidgets:addWidgetsCalBck, Where addWidgetsCalBck is the call back.
var frmBasic = {id:"frm", type:constants.FORM_TYPE_NATIVE , title:"Title", addWidgets:addWidgetsCalBck};

var frmLayout ={displayOrientation:constants.FORM_DISPLAY_ORIENTATION_BOTH, paddingInPixel:false, padding:[5,5,5,5]};

var frmPSP ={};

//Creating a form.
var frm =new voltmx.ui.Form2(frmBasic, frmLayout, frmPSP);  
  
 
```

Platform Availability

Available on all platforms

### init Event

This event gets called only once in form life cycle that is when the form is ready with its widget hierarchy. This will get called after [addwidgets](#masterda) method allowing user for any one-time initializations.

When form is destroyed and reused again, _init_ gets called as a part of form lifecycle.

Syntax

JavaScript: init

Read/Write

Yes - (Read and Write)

Example

```

//The below function is the callback function for init event of the form
function initCalBck(form)
{
	 //Write your logic here.
}

//Defining a form with init:initCalBck,Where initCalBck is the call back.
var frmBasic = {id:"frm",type:constants.FORM_TYPE_NATIVE , title:"Title", **init:initCalBck**};

var frmLayout ={displayOrientation:constants.FORM_DISPLAY_ORIENTATION_BOTH, paddingInPixel:false, padding:[5,5,5,5]};

var frmPSP ={};

//Creating a form.
var frm =new voltmx.ui.Form2(frmBasic, frmLayout, frmPSP);
```

Platform Availability

Available on all platforms

### onActionBarBack Event

An event callback that is invoked by the platform when the back button is pressed on an action bar. The back button exists on the left side of the action bar with UP caret symbol. It is enabled only when onActionBarBack callback is registered on form and showActionBarIcon is set to _true_.

> **_Note:_** This event is displayed in the widget properties list only when you select SDK versions 3.0 and above in the Application Properties > Native > Android > SDK Versions section.

Syntax

JavaScript: onActionBarBack

Read/Write

Yes - (Read and Write)

Example

```

//The below function is the callback function for onActionBarBack event of the form
function onActionBarBackCalBck(form)
{
	 //Write your logic here.
}

//Defining a form with init:initCalBck,Where initCalBck is the call back.
var frmBasic = {id:"frm",type:constants.FORM_TYPE_NATIVE , title:"Title", **onActionBarBack :onActionBarBackCalBck**};

var frmLayout ={displayOrientation:constants.FORM_DISPLAY_ORIENTATION_BOTH, paddingInPixel:false, padding:[5,5,5,5]};

var frmPSP ={};

//Creating a form.
var frm =new voltmx.ui.Form2(frmBasic, frmLayout, frmPSP);
```

Platform Availability

Available on Android/Android tablet only

### onHide

Specifies an _Event_ which is triggered when a form goes completely out of view.

This event is triggered in the following scenarios:

*   [form.show](Form_Methods.md#form.sho) (another form) is called
*   User hits the device back button or key

This event is _not_ triggered in the following scenarios:

*   The form is partially or completely covered by the Popup.
*   The form is partially or completely covered by the Application Menu.

Syntax

JavaScript: onHide

Read/Write

Yes - (Read and Write)

Example

```

//The below function is the callback function for onHide event of the form.
function onHideCalBck(form)
{
	 //Write your logic here.
}

//Defining a form with onHide:onHideCalBck,Where onHideCalBck is the call back.
var frmBasic = {id:"frm", type:constants.FORM_TYPE_NATIVE , title:"Title", **onHide:onHideCalBck**};

var frmLayout ={displayOrientation:constants.FORM_DISPLAY_ORIENTATION_BOTH, paddingInPixel:false, padding:[5,5,5,5]};

var frmPSP ={};

//Creating a form.
var frm =new voltmx.ui.Form2(frmBasic, frmLayout, frmPSP);
```

Platform Availability

Available on all platforms

### onOrientationChange

Specifies an _Event_ which is triggered when there is a change in orientation of the form from portrait to landscape or vice versa.

> **_Note:_** Blackberry devices will raise these event only if the [displayOrientation](Form_Basic_Properties.md#displayO) mode of the form is set to FORM\_ DISPLAY\_ORIENTATION\_BOTH.

For more information about defining an action sequence for this event, see _Event Editor_ in the _VoltMX Iris User Guide_.

Syntax

JavaScript: onOrientationChange

Read/Write

Yes - (Read and Write)

Example

```

//The below function is the callback function for onOrientationChange event of the form.
function onOrChngCalBck(form)
{
	 //Write your logic here.
}

//Defining a form with onOrientationChange:onOrChngCalBck, Where onOrChngCalBck is the call back.
var frmBasic = {id:"frm",type:constants.FORM_TYPE_NATIVE , title:"Title", **onOrientationChange:onOrChngCalBck**};

var frmLayout ={displayOrientation:constants.FORM_DISPLAY_ORIENTATION_BOTH, paddingInPixel:false, padding:[5,5,5,5]};

var frmPSP ={};

//Creating a form.
var frm =new voltmx.ui.Form2(frmBasic, frmLayout, frmPSP);
```

Platform Availability

Available on all platforms except Windows Desktop, and Desktop Web

### onDeviceBack

Specifies an event which is triggered when the user uses the back button on the device.

For more information see _Event Editor_ in _the Volt MX Iris User Guide_.

Syntax

JavaScript: onDeviceBack

Read/Write

Yes - (Read and Write)

Example

```

//The below function is the callback function for onDeviceBack event of the form.
function onDevBckCal(form)
{
	 //Write your logic here.
}

//Defining a form with onDeviceBack:onDevBckCal, Where onDevBckCal is the call back.
var frmBasic = {id:"frm", type:constants.FORM_TYPE_NATIVE, title:"Title"};

var frmLayout ={displayOrientation:constants.FORM_DISPLAY_ORIENTATION_BOTH, paddingInPixel:false, padding:[5,5,5,5]};

var frmPSP ={**onDeviceBack:onDevBckCal**};

//Creating a form.
var frm =new voltmx.ui.Form2(frmBasic, frmLayout, frmPSP);

//Reading the the onDeviceBack event of the form.
alert("onDeviceBack is ::"+frm.onDeviceBack);
```

Platform Availability

*   Android
*   BlackBerry
*   BlackBerry 10
*   SPA (iPhone/Android/BlackBerry/Windows NTH)

### onDeviceMenu

Specifies an event which is triggered when the user uses the back button on the device.

For more information see _Event Editor_ in _the Volt MX Iris User Guide_.

Syntax

JavaScript: onDeviceMenu

Read/Write

Yes - (Read and Write)

Example

```

//The below function is the callback function for onDeviceMenu event of the form.
function onDevMenCalBck(form)
{
	 //Write your logic here.
}

//Defining a form with onDeviceMenu:onDevMenCalBck,Where onDevMenCalBck is the call back.
var frmBasic = {id:"frm",type:constants.FORM_TYPE_NATIVE, title:"Title"};

var frmLayout ={displayOrientation:constants.FORM_DISPLAY_ORIENTATION_BOTH, paddingInPixel:false, padding:[5,5,5,5]};

var frmPSP ={**onDeviceMenu:onDevMenCalBck**};

//Creating a form.
var frm =new voltmx.ui.Form2(frmBasic, frmLayout, frmPSP);

//Reading the the onDeviceMenu event of the form
alert("onDeviceMenu is ::"+frm.onDeviceMenu);
```

Platform Availability

*   Android
*   BlackBerry 10

### onDestroy

Specifies an event which is triggered when the form is destroyed.

For more information see _Event Editor_ in _the Volt MX Iris User Guide_.

Syntax

JavaScript: onDestroy

Read/Write

Yes - (Read and Write)

Example

```

//The below function is the callback function for onDestroy event of the form.
function onDestroycalBck(form)
{
	 //Write your logic here.
}

//Defining a form with onDestroy:onDestroycalBck, where onDestroycalBck is the call back.
var frmBasic = {id:"frm",type:constants.FORM_TYPE_NATIVE, title:"Title"};

var frmLayout ={displayOrientation:constants.FORM_DISPLAY_ORIENTATION_BOTH, paddingInPixel:false, padding:[5,5,5,5]};

var frmPSP ={**onDestroy:onDestroycalBck**};

//Creating a form.
var frm =new voltmx.ui.Form2(frmBasic, frmLayout, frmPSP);

//Reading the the onDestroy event of the form
alert("onDestroy is ::"+frm.onDestroy);
```

Platform Availability

Available on all platforms

### preShow

_preShow_ is executed every time a form is to be displayed. This event is called even on device back or while navigating back to the form through title bar navigation items.

In case of preShow and postShow will not get executed when navigate using the browser "back".

Syntax

JavaScript: preShow

Read/Write

Yes - (Read and Write)

Example

```

//The below function is the callback function for preShow event of the form.
function preShowCalBck(form)
{
	 //Write your logic here.
}

//Defining a form with preShow:preShowCalBck,Where preShowCalBck is the call back.
var frmBasic = {id:"frm",type:constants.FORM_TYPE_NATIVE , title:"Title", **preShow:preShowCalBck**};

var frmLayout ={displayOrientation:constants.FORM_DISPLAY_ORIENTATION_BOTH, paddingInPixel:false, padding:[5,5,5,5]};

var frmPSP ={};

//Creating a form.
var frm =new voltmx.ui.Form2(frmBasic, frmLayout, frmPSP);
```

Platform Availability

Available on all platforms

### postShow

_postShow_ is invoked after a form is displayed. Gets called even on device back or while navigating back to the form through title bar navigation items.

In case of preShow and postShow will not get executed when navigate using the browser "back". In preShow and postShow of the startup form, Alerts should be avoided. If any alerts are present in the events of the form, the last alert gets executed and form will never render.

> **_Note:_** If there are any network calls in postshow, you cannot perform any operation on the form and a busy indication is displayed until the postshow execution is complete.

Syntax

JavaScript: postShow

Read/Write

Yes - (Read and Write)

Example

```

//The below function is the callback function for postShow event of the form.
function postShowCalBck(form)
{
	 //Write your logic here.
}

//Defining a form with postShow:postShowCalBck,Where postShowCalBck is the call back.
var frmBasic = {id:"frm",type:constants.FORM_TYPE_NATIVE , title:"Title", **postShow:postShowCalBck**};

var frmLayout ={displayOrientation:constants.FORM_DISPLAY_ORIENTATION_BOTH, paddingInPixel:false, padding:[5,5,5,5]};

var frmPSP ={};

//Creating a form.
var frm =new voltmx.ui.Form2(frmBasic, frmLayout, frmPSP);
```

Platform Availability

Available on all platforms

### onLoadJS

Specifies the name of function to be executed when a form is loaded. The function must exist in the _javascript_ folder. For more information on defining the onLoadJS event, refer to _VoltMX Iris User Guide_.

Syntax

JavaScript: onLoadJS

Read/Write

Yes - (Read and Write)

Example

```

//The below function is the callback function for onLoadJS event of the form.
function onLoadJSCalBck(form)
{
	 //Write your logic here.
}

//Defining a form with onLoadJS:onLoadJSCalBck,Where onLoadJSCalBck is the call back.
var frmBasic = {id:"frm", type:constants.FORM_TYPE_NATIVE , title:"Title"};

var frmLayout ={displayOrientation:constants.FORM_DISPLAY_ORIENTATION_BOTH, paddingInPixel:false, padding:[5,5,5,5]};

var frmPSP ={**onLoadJS:onLoadJSCalBck**};

//Creating a form.
var frm =new voltmx.ui.Form2(frmBasic, frmLayout, frmPSP);

//Reading the the onLoadJS event of the form.
alert("onLoadJS is ::"+frm.onLoadJS);
```

Accessible from IDE

Yes

Platform Availability

Available on Server side Mobile Web (BJS and Advanced) platform

*   Server side Mobile Web (BJS)
*   SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook

### unLoadJS

Specifies the name of function to be executed when a form is unloaded. The function must exist in a _javascript_ file. For more information on defining the unLoadJS event, refer to _VoltMX Iris User Guide_.

Syntax

JavaScript: unLoadJS

Read/Write

Yes - (Read and Write)

Example

```

//The below function is the callback function for unLoadJS event of the form.
function unLoadJSCalBck(form)
{
	 //Write your logic here.
}

//Defining a form with unLoadJS:unLoadJSCalBck,Where unLoadJSCalBck is the call back.
var frmBasic = {id:"frm", type:constants.FORM_TYPE_NATIVE, title:"Title"};

var frmLayout ={displayOrientation:constants.FORM_DISPLAY_ORIENTATION_BOTH, paddingInPixel:false, padding:[5,5,5,5]};

var frmPSP ={**unLoadJS:unLoadJSCalBck**};

//Creating a form.
var frm =new voltmx.ui.Form2(frmBasic, frmLayout, frmPSP);

//Reading the the unLoadJS event of the form.
alert("unLoadJS is ::"+frm.unLoadJS);
```

Accessible from IDE

Yes

Platform Availability

Available on Server side Mobile Web (Advanced) platform

*   Server side Mobile Web (BJS)
*   SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook

