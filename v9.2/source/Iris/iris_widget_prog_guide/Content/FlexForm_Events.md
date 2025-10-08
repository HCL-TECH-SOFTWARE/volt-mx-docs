
FlexForm Events
===============

The FlexForm widget has the following events associated with it:

* * *

<details close markdown="block"><summary>addWidgets Event</summary>

* * *

An event callback invoked by the platform when the form is accessed for first time after its construction. This function gets executed only once on in lifetime of the form. If a destroyed form is accessed, the form is re-initialized and this callback is once again invoked. Forms can be destroyed using destroy method.

### Syntax

```

addWidgets()
```

### Read/Write

Read + Write

### Example

```

//Sample code to set a callback to the addWidgets event for a FlexForm.

myForm.addWidgets=addWidgetsCallback;

function addWidgetsCallback() {
    //write your logic to create and add child widgets
}
```

### Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>doLayout Event</summary>

* * *

This event is invoked for every widget when the widget position and dimensions are computed. This event is invoked for all the widgets placed inside flex containers. This event is invoked in the order in which the widgets are added to the widget hierarchy and expect the frame property of the widget is calculated and available for use within this event.

### Syntax

```

doLayout()
```

### Read/Write

Read + Write

### Remarks

This event is used to set the layout properties of child widgets in the relation to self and peer widgets whose layout is not yet performed.

> **_Note:_** The number of times this event invoked may vary per platform. It is not recommended to write business logic assuming that this function is invoked only once when there is a change in positional or dimensional properties. This event will not trigger when transformations are applied though widget is moved or scaled or rotated from its original location.

### Example

```

//Sample code to set doLayout event callback to a button widget.
/*This code changes the top property of button2 and makes it appear below button1.*/
myForm.button1.doLayout=doLayoutButton1;


function doLayoutButton1(){
      
    myForm.button2.top = myForm.button1.frame.height;
}
```

### Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>init Event</summary>

* * *

This event gets called only once in form life cycle that is when the form is ready with its widget hierarchy. This will get called after [addwidgets](#masterda) method allowing user for any one-time initializations.

When form is destroyed and reused again, _init_ gets called as a part of form lifecycle.

### Syntax

```

init()
```

### Read/Write

Read + Write

### Example

```

testfrm.init = initCallback;

function initCallback(eventObj) {
    voltmx.print("in the init" + eventObj);
}
```

### Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>onActionBarBack Event</summary>

* * *

An event callback that is invoked by the platform when the back button is pressed on an action bar. The back button exists on the left side of the action bar with UP caret symbol. It is enabled only when onActionBarBack callback is registered on form and showActionBarIcon is set to _true_.

### Syntax

```

onActionBarBack()
```

### Read/Write

Read + Write

### Remarks

> **_Note:_** This event is displayed in the widget properties list only when you select SDK versions 3.0 and above in the Application Properties > Native > Android > SDK Versions section.

### Example

```

function appBarBackcallback() {
    alert("In the App bar back callback");
}

function test1() {
    Form1.showActionBarIcon = true;
    Form1.onActionBarBack = appBarBackcallback;
}
```

### Platform Availability

    Available on Android/Android tablet only.

* * *

</details>
<details close markdown="block"><summary>onBreakpointChange Event</summary>

* * *

This event is triggered, when the width of the browser running the Responsive Web App is increased or decreased.

### Syntax

```

onBreakpointChange()
```

### Read/Write

Read + Write

### Return Value

_Boolean_

The default return value is false. If the return value is not defined, the return value is surmised to be false.

Parameters

_formHandle_

This parameter specifies handle of the FlexForm on which this event is defined.

_breakpoint_\[Number\]

This parameter specifies the current breakpoint value. When the window size exceeds the highest breakpoint, this parameter returns the constant: **constants.BREAKPOINT\_MAX\_VALUE**.

### Remarks

From Iris V9 release, onBreakpointChange event is triggered while using responsive web components also.

### Example

```

function breakpoint_callback (myFormHandle, breakpoint) {
    voltmx.print("breakpoint changed");
}  
function myForm_preshow() {
   myWebForm.onBreakpointChange = breakpoint_callback;
}  

```

### Platform Availability

*   Available in IDE
*   Desktop Web

* * *

</details>
<details close markdown="block"><summary>onDecelerationStarted Event</summary>

* * *

An event callback is invoked by the platform when the user stops scrolling but the content still moves before the content actually stops.

### Syntax

```

onDecelerationStarted()
```

### Read/Write

Read + Write

### Example

```

//Sample code to set a callback to the onDecelerationStarted event for a FlexForm.

myForm.onDecelerationStarted=onDecelerationStartedCallback;

function onDecelerationStartedCallback(eventobject) {
    //write your logic to create and add child widgets
}
```

### Platform Availability

    This property is available on iOS platform.

* * *

</details>
<details close markdown="block"><summary>onDestroy Event</summary>

* * *

Specifies an event which is triggered before the FlexForm is destroyed.

For more information see _Event Editor_ in the _Volt MX Iris User Guide_.

### Syntax

```

onDestroy()
```

### Read/Write

Read + Write

> **_Note:_** While using the **this** keyword (for example, this.view) in onDestroy event (as a FormController event) to point to the current controller, you must ensure that the function is not a **fat arrow** function. Because in fat arrow function declarations, the **this** pointer is taken from the parent scope and might not point to the current FormController. For more information on this limitation, click [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Example

```

//Sample code to set a callback to the onDestroy event for a FlexForm.

myForm.onDestroy=onDestroyCallback;

function onDestroyCallback(eventobject) {
    //write your logic to create and add child widgets
}
```

### Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>onDeviceBack Event</summary>

* * *

Specifies an event which is triggered when the user uses the back button on the device.

For more information see _Event Editor_ in the _Volt MX Iris User Guide_.

### Syntax

```

onDeviceBack()
```

### Read/Write

Read + Write

### Example

```

//Sample code to set a callback to the onDeviceBack event for a FlexForm.

myForm.onDeviceBack=onDeviceBackCallback;

function onDeviceBackCallback(eventobject) {
    //write your logic to create and add child widgets
}
```

### Platform Availability

*   Android
*   SPA

* * *

</details>
<details close markdown="block"><summary>onDeviceMenu Event</summary>

* * *

Specifies an event which is triggered when the user access the device menu.

For more information see _Event Editor_ in the _Volt MX Iris User Guide_.

### Syntax

```

onDeviceMenu()
```

### Read/Write

Read + Write

### Example

```

//Sample code to set a callback to the onDeviceMenu event for a FlexForm.

myForm.onDeviceMenu=onDeviceMenuCallback;

function onDeviceMenuCallback(eventobject) {
    //write your logic to create and add child widgets
}
```

### Platform Availability

    Available on Android/Android Tablet.

* * *

</details>
<details close markdown="block"><summary>onDrawerSlide Event</summary>

* * *

This event is sent when the position of a NavigationDrawer changes.

### Signature:

onDrawerSlideCallback(slideOffset)

### Parameters

_slideOffset_

A Double value indicating the new offset of this drawer within its range, from 0-1.

### Remarks

This event supports the [NavigationDrawer](FlexForm.md#using-the-navigation-drawer). It is not sent unless the FlexForm has been created from a template that supports the NavigationDrawer. The NavigationDrawer is based on the [Android native Navigation drawer](https://material.io/guidelines/patterns/navigation-drawer.md#). It is only supported on Android.

The FlexForm's [navigationDrawerListeners](FlexForm_Properties.md#navigationDrawerListeners) property is used to map the handler to this event.

### Example

```

// create callback function for onDrawerSlide
function onDrawerSlideCallback(slideOffset) {
    //handler code here
}

// Mapping callback function to Navigation Drawer event (or events)
formObject.navigationDrawerListeners = {
    onDrawerSlide: onDrawerSlideCallback
};
```

### Platform Availability

### Available in the IDE.

*   Android

* * *

</details>
<details close markdown="block"><summary>onDrawerOpened Event</summary>

* * *

Called when a Navigation Drawer has finished opening. The drawer is interactive at this point.

### Signature:

onDrawerOpenedCallback()

### Parameters

None

### Remarks

This event supports the [NavigationDrawer](FlexForm.md#using-the-navigation-drawer). It is not sent unless the FlexForm has been created from a template that supports the NavigationDrawer. The NavigationDrawer is based on the [Android native Navigation drawer](https://material.io/guidelines/patterns/navigation-drawer.md#). It is only supported on Android.

The FlexForm's [navigationDrawerListeners](FlexForm_Properties.md#navigationDrawerListeners) property is used to map the handler to this event.

### Example

```

// create callback function for onDrawerOpened 
function onDrawerOpenedCallback() {
    //handler code here
}

// Mapping callback function to Navigation Drawer event (or events)
formObject.navigationDrawerListeners = {
    onDrawerOpened: onDrawerOpenedCallback
};
```

### Platform Availability

### Available in the IDE.

*   Android

* * *

</details>
<details close markdown="block"><summary>onDrawerClosed Event</summary>

* * *

Called when a Navigation Drawer has finished closing.

### Signature:

onDrawerClosedCallback()

### Parameters

None

### Remarks

This event supports the [NavigationDrawer](FlexForm.md#using-the-navigation-drawer). It is not sent unless the FlexForm has been created from a template that supports the NavigationDrawer. The NavigationDrawer is based on the [Android native Navigation drawer](https://material.io/guidelines/patterns/navigation-drawer.md#). It is only supported on Android.

The FlexForm's [navigationDrawerListeners](FlexForm_Properties.md#navigationDrawerListeners) property is used to map the handler to this event.

### Example

```

// create callback function for onDrawerClosed
function onDrawerClosedCallback() {
    //handler code here
}

// Mapping callback function to Navigation Drawer event (or events)
formObject.navigationDrawerListeners = {
    onDrawerClosed: onDrawerClosedCallback
};
```

### Platform Availability

### Available in the IDE.

*   Android

* * *

</details>
<details close markdown="block"><summary>onDrawerStateChanged Event</summary>

* * *

Called when the NavigationDrawer motion state changes.

### Signature:

onDrawerStateChangedCallback(state)

### Parameters

_state_

A constant that identifies the current drawer state. See remarks for details.

### Remarks

Constant values for drawer state:

*   Constants.DRAWER\_STATE\_IDLE : Indicates that the drawer is in idle, settled state. No animation is in progress.
*   Constants.DRAWER\_STATE\_DRAGGING : Indicates that the drawer is currently being dragged by the user.
*   Constants.DRAWER\_STATE\_SETTLING : Indicates that the drawer is in the process of settling to a final position.

This event supports the [NavigationDrawer](FlexForm.md#using-the-navigation-drawer). It is not sent unless the FlexForm has been created from a template that supports the NavigationDrawer. The NavigationDrawer is based on the [Android native Navigation drawer](https://material.io/guidelines/patterns/navigation-drawer.md#). It is only supported on Android.

The FlexForm's [navigationDrawerListeners](FlexForm_Properties.md#navigationDrawerListeners) property is used to map the handler to this event.

### Example

```

// create callback function for onDrawerStateChanged
function onDrawerStateChangedCallback(state) {
    //handler code here
}

// Mapping callback function to Navigation Drawer event (or events)
formObject.navigationDrawerListeners = {
    onDrawerStateChanged: onDrawerStateChangedCallback
};
```

### Platform Availability

### Available in the IDE.

*   Android

* * *

</details>
<details close markdown="block"><summary>onHide Event</summary>

* * *

Specifies an _Event_ which is triggered when a form goes completely out of view.

### Syntax

```

onHide()
```

### Read/Write

Read + Write

### Remarks

This event is triggered in the following scenarios:

*   [form.show](FlexForm_Methods.md#show) (another form) is called
*   User hits the device back button or key

This event is _not_ triggered in the following scenarios:

*   The form is partially or completely covered by the Popup.
*   The form is partially or completely covered by the Application Menu.

### Example

```

//Sample code to set a callback to the onHide event for a FlexForm.

myForm.onHide=onHideCallback;

function onHideCallback(eventobject) {
    //write your logic to create and add child widgets
}
```

### Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>onKeyboardDidHide Event</summary>

* * *

This is an event callback that is invoked by iOS when the keyboard has been hidden.

### Syntax

```

onKeyboardDidHide()
```

### Read/Write

Read + Write

### Remarks

Don't change the contentOffset on the form by calculating the size of the keyboard when keyboard appears or is hidden.

### Example

```

var form = new voltmx.ui.Form2();

form.onKeyboardDidHide = keyboardCallbacksDidHide;

function keyboardCallbacksDidHide(wdgRef, keyboardData) {
    // handle the event here
    // wdgRef returns the current form.
    // keyboardData returns keyboard related data provided by iOS platform
}
```

### Platform Availability

    Available in the IDE

*   iOS  
    

* * *

</details>
<details close markdown="block"><summary>onKeyboardDidShow Event</summary>

* * *

This is an event callback that is invoked by iOS when the keyboard has just been shown.

### Syntax

```

onKeyboardDidShow()
```

### Read/Write

Read + Write

### Remarks

Don't change the contentOffset on the form by calculating the size of the keyboard when keyboard appears or is hidden.

### Example

```

var form = new voltmx.ui.Form2();
form.onKeyboardDidShow = keyboardCallbacksDidShow;

function keyboardCallbacksDidShow(wdgRef, keyboardData) {
    // handle the event here
    // wdgRef returns the current form.
    // keyboardData returns keyboard related data provided by iOS platform
}
```

### Platform Availability

### Available in the IDE

*   iOS  
    

* * *

</details>
<details close markdown="block"><summary>onKeyboardWillHide Event</summary>

* * *

This is an event callback that is invoked by iOS when the keyboard is about to be hidden.

### Syntax

```

onKeyboardWillHide()
```

### Read/Write

Read + Write

### Remarks

Don't change the contentOffset on the form by calculating the size of the keyboard when keyboard appears or is hidden.

### Example

```

var form = new voltmx.ui.Form2();

form.onKeyboardWillHide = keyboardCallbacksWillHide;

function keyboardCallbacksWillHide(wdgRef, keyboardData) {
    // handle the event here
    // wdgRef returns the current form.
    // keyboardData returns keyboard related data provided by iOS platform
}
```

### Platform Availability

### Available in the IDE

*   iOS  
    

* * *

</details>
<details close markdown="block"><summary>onKeyboardWillShow Event</summary>

* * *

This is an event callback that is invoked by iOS when the keyboard is about to be shown.

### Syntax

```

onKeyboardWillShow()
```

### Read/Write

Read + Write

### Remarks

Don't change the contentOffset on the form by calculating the size of the keyboard when keyboard appears or is hidden.

### Example

```

var form = new voltmx.ui.Form2();
form.onKeyboardWillShow = keyboardCallbacksWillShow;

function keyboardCallbacksWillShow(wdgRef, keyboardData) {
    // handle the event here
    // wdgRef returns the current form.
    // keyboardData returns keyboard related data provided by iOS platform
}
```

### Platform Availability

### Available in the IDE

*   iOS  
    

* * *

</details>
<details close markdown="block"><summary>onLoadJS Event</summary>

* * *

Specifies the name of function to be executed when a form is loaded. The function must exist in the _javascript_ folder. For more information on defining the onLoadJS event, refer to _Volt MX Iris User Guide_.

### Syntax

```

onLoadJS()
```

### Read/Write

Read + Write

### Accessible from IDE

Yes

### Example

```

//Sample code to set a callback to the onLoadJS event for a FlexForm.

myForm.onLoadJS=onLoadJSCallback;

function onLoadJSCallback(form) {
    //write your logic to create and add child widgets
}
```

### Platform Availability

    Available on Server side Mobile Web (BJS and Advanced) platform.

* * *

</details>
<details close markdown="block"><summary>onLocaleChanged Event</summary>

* * *

### An event callback invoked by the platform when the locale changes. This callback is executed for the current form:

*   After setCurrentLocaleAsync() callback is successfully executed.
*   When navigating to a form, just before preshow of the target form if locale is changed.
*   Synchronously after addWidgets() -> init() when trying to access widgets of an uninitialized form.

### This callback is executed for popups:

*   For all visible popups after setCurrentLocaleAsync() callback is successfully executed.
*   When opening a popup just before init() of the target popup only if locale is changed.
*   Synchronously, just after init(), when trying to access widgets of an uninitialized popup.

> **_Note:_** Templates are updated in setCurrentLocaleAsync() success callback based on current visible form.

> **_Note:_** Get the current locale by calling getCurrentLocale().

### Syntax

```

onLocaleChanged()
```

### Parameters

widget \[widgetref\] - Mandatory

Handle to the form/popup widget instance.

### Read/Write

Read + Write

### Example

```

//Sample code to set a callback to the onLocaleChanged event for a FlexForm.
myForm.onLocaleChanged = onLocaleChangedCallBack;

function onLocaleChangedCallBack(formRef) {
 //Sample code to change the content alignment of a label when the device locale is Arabic.
 myForm.lblCountryLocale.text = voltmx.i18n.getLocalizedString("currentLocale")
 var currentLocale = voltmx.i18n.getCurrentLocale();
 if (currentLocale == “ar”)
  myForm.lblCountryLocale.contentAligment = constants.CONTENT_ALIGN_MIDDLE_RIGHT;
 else
  myForm.lblCountryLocale.contentAligment = constants.CONTENT_ALIGN_MIDDLE_LEFT;
}
```

### Platform Availability

### Available on all platforms

* * *

</details>
<details close markdown="block"><summary>onMapping Event</summary>

* * *

Volt MX Iris creates this event when you drag and drop a service operation on either a FlexForm, FlexContainer, or FlexScrollContainer. You can define actions for this event by using [Action Editor](../../../Iris/iris_user_guide/Content/working_with_Action_Editor.md).

### Read/Write

You can neither read nor write the onMapping Event through code.

### Remarks

The actions defined in this event are triggered after the actions specified in the [preShow](#preShow) Event are executed. The actions for the preShow Event are executed first, and then the actions for the onMapping Event are executed.

> **_Note:_** When you define the preShow Event dynamically, the onMapping Event will be overridden.

### Platform Availability

    Available on all platforms

* * *

</details>
<details close markdown="block"><summary>onNavigate Event</summary>

* * *

This event is invoked when you navigate from one form to another. This is a [Form Controller event](../../../Iris/voltmx_ref_arch_api/Content/FormController_Events.md#onNavigate) and is used only in [Reference Architecture](../../../Iris/voltmx_ref_arch_api/Content/VoltMX_Reference_Architecture_Guide.md)\- based projects.

### Syntax

```

onNavigate(context, isBackNavigation)
```

### Parameters

_context \[Object\]_

A JavaScript object that contains the data that the destination form requires after navigation.

_isBackNavigation \[Boolean\]_

This parameter determines whether you have clicked the back button or not. It has the value as _true_ when you click the back button and _false_ when you do not click the back button.

### Read/Write

Read + Write

### Remarks

To navigate from one form to another, you must create a [Navigation](../../../Iris/voltmx_ref_arch_api/Content/Navigation_Object.md) Object. This object navigates to the destination form's controller. The form's controller in turn displays the view of the form.

> **_Note:_** 1\. If you provide the onNavigate event through the Action Editor and the Form Controller, then the code in the Form Controller overrides the actions for onNavigate event given in the Action Editor.  
2\. While using the **this** keyword (for example, this.view) in onNavigate event (FormController event) to point to the current controller, you must ensure that the function is not a **fat arrow** function. Because in fat arrow function declarations, the **this** pointer is taken from the parent scope and might not point to the current FormController. For more information on this limitation, click [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).  

### This event is useful in the following scenarios:

*   To provide data that the destination form requires after the navigation.
*   To prepare data that the destination form requires after the navigation.
*   To pause the navigation if any asynchronous calls are in progress.

### Example

```

define({

    onNavigate: function(context, isBackNavigation) {
        this.context = context;
        this.pauseNavigation();
        voltmx.net.invokeServiceAsync(url, this.callback1);
    },

    callback1: function(result) {
        this.resumeNavigation();
    }

});
```

### Platform Availability

    Available on all platforms

* * *

</details>
<details close markdown="block"><summary>onOrientationChange Event</summary>

* * *

Specifies an _Event_ which is triggered when there is a change in orientation of the form from portrait to landscape or vice versa.

For more information about defining an action sequence for this event, see _Event Editor_ in the _Volt MX Iris User Guide_.

### Syntax

```

onOrientationChange()
```

### Read/Write

Read + Write

### Example

```

//Sample code to set a callback to the onOrientationChange event for a FlexForm.
myForm.onOrientationChange=onOrientationChangeCallBack;

function onOrientationChangeCallBack(eventobject) {
 //Write your logic here.
}
```

### Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>onResize Event</summary>

* * *

onResize event defines a callback that is executed when there is a change in the width of the browser. This event is valid from Volt MX Iris V8 to V8 SP2. Use the [onBreakpointChange](#onBr) event for the same functionality in later versions of Iris.

### Syntax

```

onResize()
```

### Read/Write

Read + Write

### Return Value

Boolean

The default value is true. If the return value is not defined, the return value is surmised to be true.

### Parameters

_formModel_

This parameter specifies handle of the FlexForm on which this event is defined.

_width_\[Number\]

This parameter specifies the current width of the browser body tag.

### Example

```

function resize_callback (myFormHandle, width) {
    voltmx.print("breakpoint changed");
}  
function myForm_preshow() {
   myWebForm.onResize= resize_callback;
}  

```

### Platform Availability

*   Desktop Web

* * *

</details>
<details close markdown="block"><summary>onScrollEnd Event</summary>

* * *

An event callback is invoked by the platform when the scrolling is ended. This event is invoked asynchronously.

### Syntax

```

onScrollEnd ()
```

### Parameters

source \[widgetref\]

Handle to the widget reference on which the scrolling is ended.

### Read/Write

Read + Write

### Example

```

//Sample code to set a callback to the onScrollEnd event for a FlexForm.
myForm.onScrollEnd=onScrollEndCallBack;

function onScrollEndCallBack(eventobject) {
 //Write your logic here.
}
```

### Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>onScrolling Event</summary>

* * *

An event callback is invoked by the platform when the scrolling is in progress. This event is invoked asynchronously.

### Syntax

```

onScrolling ()
```

### Parameters

source \[widgetref\]

Optional. Handle to the widget reference on which the scrolling is in progress.

### Read/Write

Read + Write

### Example

```

//Sample code to set a callback to the onScrolling event for a FlexForm.
myForm.onScrolling=onScrollingCallBack;

function onScrollingCallBack(eventobject) {
 //Write your logic here.
}
```

### Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>onScrollStart Event</summary>

* * *

An event callback is invoked by the platform when the user starts scrolling the content. This event is invoked asynchronously.

### Syntax

```

onScrollStart()
```

### Parameters

source \[widgetref\]

Optional. Handle to the widget reference on which the scrolling has started.

### Read/Write

Read + Write

### Example

```

//Sample code to set a callback to the onScrollStart event for a FlexForm.
myForm.onScrollStart=onScrollStartCallBack;

function onScrollStartCallBack(eventobject) {
 //Write your logic here.
}
```

### Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>onScrollTouchReleased Event</summary>

* * *

An event callback is invoked by the platform when the user touch is released from the touch surface. This event is invoked asynchronously.

### Syntax

```

onScrollTouchReleased ()
```

### Parameters

source \[widgetref\]

Optional. Handle to the widget reference on which the user touch is released from the display.

### Read/Write

Read + Write

### Example

```

//Sample code to set a callback to the onScrollTouchReleased event for a FlexForm.
myForm.onScrollTouchReleased=onScrollTouchReleasedCallBack;

function onScrollTouchReleasedCallBack(eventobject) {
 //Write your logic here.
}
```

### Platform Availability

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>onScrollWidgetPosition Event</summary>

* * *

This event callback is invoked by the platform when the widget location position gets changed on scrolling. The onScrollWidgetPosition event returns the positional coordinates of the widget's location with respect to the screen (screenX and screenY) and the parent container (frameX and frameY). This event is invoked asynchronously, and is not available for FlexForm widget.

### Syntax

```

onScrollWidgetPosition()
```

### Read/Write

Read + Write

### Example

```

var LabelWdg = new voltmx.ui.Label(basicConf, layoutConf, pspConf);
form.add(LabelWdg);
LabelWdg.onScrollWidgetPosition = onScrollWidgetPositionCallBack;

function onScrollWidgetPositionCallBack(wdg, screenX, screenY, frameX, frameY) { //wdg : Widget that is registered for onScrollWidgetPosition.
    /*screenX : Position of widget with respect to 
the screen's X - coordinates (after downsizing the navigation bar and status bar).*/
    /*screenY : Position of widget with respect to the screen's Y - 
coordinates (after downsizing the navigation bar and status bar).*/
    //frameX : Position of widget with respect to parent container's X- coordinates.
    //frameY : Position of widget with respect to parent container's Y- coordinates.
}
```

### Platform Availability

*   Not Accessible from IDE
*   Android, iOS, SPA, and Windows

* * *

</details>
<details close markdown="block"><summary>onSizeChanged Event</summary>

* * *

Specifies the event that is triggered when the app window is resized. This allows app developers to redesign the UI depending on the size of the current form.

### Syntax

```

onSizeChanged()
```

### Read/Write

Read + Write

### Parameters

The callback function for this event is called with a dictionary as an argument with the following keys.

width \[double\] - Current window width.

height \[double\] - Current window height.

currentform \[formwidget\] - Current visible form.

orientation \[constant\] - Gets the current orientation (landscape or portrait) of the app view window with respect to the display. The possible values are:

constants.FORM\_DISPLAY\_ORIENTATION\_LandSCAPE

constants.FORM\_DISPLAY\_ORIENTATION\_PORTRAIT

isFullScreen \[boolean\] - Specifies whether the current window is full screen.

is FullScreenMode \[boolean\] - Specifies whether the current window is in full screen mode. This value is true if the app is running in full screen mode; false otherwise.

> **_Note:_** This property will have some value only after enterFullScreenMode APIs are called.

visibleWidth \[double\] - Gets the visible width of the window (app view). The visible region is the region not obstructed by chrome, such as the status bar and the app bar.

visibleHeight \[double\] - Gets the visible height of the window (app view). The visible region is the region not obstructed by chrome, such as the status bar and the app bar.

dpi \[double\] - Gets the pixels per logical inch of the current environment.

nativeOrientation\[constant\] - Gets the native orientation of the display monitor. This is typically the orientation where the buttons on the device match the orientation of the monitor. The possible values are:

constants.FORM\_DISPLAY\_ORIENTATION\_LandSCAPE

constants.FORM\_DISPLAY\_ORIENTATION\_PORTRAIT

resolutionScale \[double\] - Gets the scale factor of the immersive environment

rawPixelsPerViewPixel \[double\] - Gets a value representing the number of raw (physical) pixels for each view (layout) pixel.

interactionMode \[double\] - Gets a value that indicates whether a user is interacting with the view using a mouse or touch. The possible values are:

0:Mouse

1 : Touch

viewState \[constant\] - Specifies the state of the current window (app view). This state indicates the orientation (landscape or portrait) and whether the app is snapped. The possible values are:

constants.VIEW\_STATE\_FULLSCREEN\_LandSCAPE

constants.VIEW\_STATE\_FILLED

constants.VIEW\_STATE\_SNAPPED

constants.VIEW\_STATE\_FULLSCREEN\_PORTRAIT

### Example

```

//Sample code to set a callback to the onSizeChanged event for a FlexForm.
myForm.onSizeChanged = onFormSizeChange1;

function onFormSizeChange1(formInstance1, windowConfig) {
 voltmx.print("Size change happened on " + formInstance1.id);
 voltmx.print(JSON.stringify(windowConfig));
}
```

Accessible from IDE

Yes

### Platform Availability

    Available on Windows only.

* * *

</details>
<details close markdown="block"><summary>onTouchEnd Event</summary>

* * *

An event callback is invoked by the platform when the user touch is released from the touch surface. This event is invoked asynchronously.

### Syntax

```

onTouchEnd ()
```

### Parameters

source \[widgetref\]

Optional. Handle to the widget reference on which the user touch has ended.

x \[Number\]

Optional. Specifies the x-coordinate with in the widget with respect to widget's co-ordinate system. It is a number indicating device independent pixel.

y \[Number\]

Optional. Specifies the y- coordinate with in the widget with respect to widget's co-ordinate system. It is a number indicating device independent pixel.

contextInfo \[key-value pair\]

Optional. On devices that support 3D Touch, specifies a key-value pair where the value specifies the force of the touch. The value 1.0 represents the force of an average touch, as determined by the system.

> **_Note:_** 3D Touch is available only on iOS 9.0 and later.

### Read/Write

Read + Write

### Example

```

//Sample code to set a callback to the onTouchEnd event for a FlexForm.
myForm.onTouchEnd=onTouchEndCallback;  
  
function onTouchEndCallback(eventobject, x, y) {
    //Write your logic here
}
```

### Example using contextInfo

```

function onTouchEndCallback(source, x, y, contextInfo) {
    if (contextInfo) {
        var force = contextInfo[“force”];
        voltmx.print(“value of force is” + force)
    }
}  
Form1.onTouchEnd=onTouchEndCallback;  

```

### Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>onTouchMove Event</summary>

* * *

An event callback is invoked by the platform when the touch moves on the touch surface continuously until the movement ends. This event is invoked asynchronously.

### Syntax

```

onTouchMove ()
```

### Parameters

source \[widgetref\]

Optional. Handle to the widget reference on which touch moves.

x \[Number\]

Optional. Specifies the x-coordinate with in the widget with respect to widget's co-ordinate system. It is a number indicating device independent pixel.

y \[Number\]

Optional. Specifies the y- coordinate with in the widget with respect to widget's co-ordinate system. It is a number indicating device independent pixel.

contextInfo \[key-value pair\]

Optional. On devices that support 3D Touch, specifies a key-value pair where the value specifies the force of the touch. The value 1.0 represents the force of an average touch, as determined by the system.

> **_Note:_** 3D Touch is available only on iOS 9.0 and later.

### Read/Write

Read + Write

### Example

```

//Sample code to set a callback to the onTouchMove event for a FlexForm.
myForm.onTouchMove=onTouchMoveCallback;  
  
function onTouchMoveCallback(eventobject, x, y) {
    //Write your logic here
}
```

### Example using contextInfo

```

function onTouchMoveCallback(source, x, y, contextInfo) {
    if (contextInfo) {
        var force = contextInfo[“force”];
        voltmx.print(“value of force is” + force)
    }
}  
Form1.onTouchMove=onTouchMoveCallback;  

```

### Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>onTouchStart Event</summary>

* * *

An event callback is invoked by the platform when the user touches the touch surface. This event is invoked asynchronously.

### Syntax

```

onTouchStart ()
```

### Parameters

source \[widgetref\]

Optional. Handle to the widget reference on which the user touches.

x \[Number\]

Optional. Specifies the X co-ordinate with in the widget with respect to widget's co-ordinate system. It is a number indicating device independent pixel.

y \[Number\]

Optional. Specifies the Y co-ordinate with in the widget with respect to widget's co-ordinate system. It is a number indicating device independent pixel.

contextInfo \[key-value pair\]

Optional. On devices that support 3D Touch, specifies a key-value pair where the value specifies the force of the touch. The value 1.0 represents the force of an average touch, as determined by the system.

> **_Note:_** 3D Touch is available only on iOS 9.0 and later.

### Read/Write

Read + Write

### Example

```

//Sample code to set a callback to the onTouchStart event for a FlexForm.
myForm.onTouchStart=onTouchStartCallback;  
  
function onTouchStartCallback(eventobject, x, y) {
    //Write your logic here
}
```

### Example using contextInfo

```
function onTouchStartCallback(source, x, y, contextInfo) {
    if (contextInfo) {
        var force = contextInfo[“force”];
        voltmx.print(“value of force is” + force)
    }
}  
Form1.onTouchStart=onTouchStartCallback;  

```

### Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>onZoomEnd Event</summary>

* * *

An event callback is invoked by the platform when the zooming has ended. This event is invoked asynchronously.

### Syntax

```

onZoomEnd ()
```

### Parameters

source \[widgetref\]

Optional. Handle to the widget reference on which the zooming has ended.

### Read/Write

Read + Write

### Remarks

For example, If you have a form with a flexScrollContainer and an image widget inside flexScrollContainer, when you pinch the screen on flexScrollContainer it will call the function configured using widgetToZoom event. If the function returns image, the image will be zoomed.

```

function onZoomingCalBck(flexScrollContainer) {
    //Write your logic here.
}

function onWidgetToZoomCalBck(flexScrollContainer) {
    //Write your logic here
    return flexScrollContainer.image;
}

function onZoomStartCalBck(flexScrollContainer) {
    //Write your logic here
          
    voltmx.print("zooming started");
}

function onZoomEndCalBck(flexScrollContainer) {
    //Write your logic here
         
    voltmx.print("zooming ended");
}

flexScrollContainer.widgetToZoom = onWidgetToZoomCalBck;
flexScrollContainer.onZooming = onWidgetToZoomCalBck;
flexScrollContainer.onZoomStart = onZoomStartCalBck;
flexScrollContainer.onZoomEnd = onZoomEndCalBck;
```

> **_Note:_** This event callback is invoked only when zooming is initiated by user interaction.

### Example

```

//Sample code to set a callback to the onZoomEnd event for a FlexForm.
myForm.onZoomEnd=onZoomEndCallback;  
  
function onZoomEndCallback(eventobject, widget) {
    //Write your logic here
}
```

### Platform Availability

    Available on iOS platform.

* * *

</details>
<details close markdown="block"><summary>onZooming Event</summary>

* * *

An event callback is invoked by the platform when the container is zooming. This event is invoked asynchronously.

### Syntax

```

onZooming ()
```

### Parameters

source \[widgetref\]

Optional. Handle to the widget reference on which the zooming has started.

### Read/Write

Read + Write

### Remarks

For example, If you have a form with a flexScrollContainer and an image widget inside flexScrollContainer, when you pinch the screen on flexScrollContainer it will call the function configured using widgetToZoom event. If the function returns image, the image will be zoomed.

```

function onZoomingCalBck(flexScrollContainer) {
    //Write your logic here.
}

function onWidgetToZoomCalBck(flexScrollContainer) {
    //Write your logic here
    return flexScrollContainer.image;
}

function onZoomStartCalBck(flexScrollContainer) {
    //Write your logic here
          
    voltmx.print("zooming started");
}

function onZoomEndCalBck(flexScrollContainer) {
    //Write your logic here
         
    voltmx.print("zooming ended");
}

flexScrollContainer.widgetToZoom = onWidgetToZoomCalBck;
flexScrollContainer.onZooming = onWidgetToZoomCalBck;
flexScrollContainer.onZoomStart = onZoomStartCalBck;
flexScrollContainer.onZoomEnd = onZoomEndCalBck;
```

> **_Note:_** This event callback is invoked only when zooming is initiated by user interaction.

### Example

```

//Sample code to set a callback to the onZooming event for a FlexForm.
myForm.onZooming=onZoomingCallback;  
  
function onZoomingCallback(eventobject, widget) {
    //Write your logic here
}
```

### Platform Availability

    Available on iOS platform.

* * *

</details>
<details close markdown="block"><summary>onZoomStart Event</summary>

* * *

An event callback is invoked by the platform when the container is about to zoom. This event is invoked asynchronously.

### Syntax

```

onZoomStart ()
```

### Parameters

source \[widgetref\]

Optional. Handle to the widget reference on which the zooming has started.

widget \[widgetref\]

Optional. Specifies the widget that actually zooms.

### Read/Write

Read + Write

### Remarks

For example, If you have a form with a flexScrollContainer and an image widget inside flexScrollContainer, when you pinch the screen on flexScrollContainer it will call the function configured using widgetToZoom event. If the function returns image, the image will be zoomed.

```

function onZoomingCalBck(flexScrollContainer) {
    //Write your logic here.
}

function onWidgetToZoomCalBck(flexScrollContainer) {
    //Write your logic here
    return flexScrollContainer.image;
}

function onZoomStartCalBck(flexScrollContainer) {
    //Write your logic here
          
    voltmx.print("zooming started");
}

function onZoomEndCalBck(flexScrollContainer) {
    //Write your logic here
         
    voltmx.print("zooming ended");
}

flexScrollContainer.widgetToZoom = onWidgetToZoomCalBck;
flexScrollContainer.onZooming = onWidgetToZoomCalBck;
flexScrollContainer.onZoomStart = onZoomStartCalBck;
flexScrollContainer.onZoomEnd = onZoomEndCalBck;
```

> **_Note:_** This event callback is invoked only when zooming is initiated by user interaction.

### Example

```

//Sample code to set a callback to the onZoomStart event for a FlexForm.
myForm.onZoomStart=onZoomStartCallback;  
  
function onZoomStartCallback(eventobject, widget) {
    //Write your logic here
}
```

### Platform Availability

    Available on iOS platform.

* * *

</details>
<details close markdown="block"><summary>postShow Event</summary>

* * *

_postShow_ is invoked after a form is displayed. Gets called even on device back or while navigating back to the form through title bar navigation items.

### Syntax

```

postShow
```

### Read/Write

Read + Write

### Remarks

In case of preShow and postShow will not get executed when navigate using the browser "back". In preShow and postShow of the startup form, Alerts should be avoided. If any alerts are present in the events of the form, the last alert gets executed and form will never render.

> **_Note:_** If there are any network calls in postshow, you cannot perform any operation on the form and a busy indication is displayed until the postshow execution is complete.

### Example

```

//Sample code to set a callback to the postShow event for a FlexForm.
myForm.postShow=postShowCallback;  
  
function postShowCallback(eventobject) {
    //Write your logic here
}
```

### Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>preShow Event</summary>

* * *

_preShow_ is executed every time a form is to be displayed. This event is called even on device back or while navigating back to the form through title bar navigation items.

### Syntax

```

preShow
```

### Read/Write

Read + Write

### Remarks

In case of preShow and postShow will not get executed when navigate using the browser "back".

### Example

```

//Sample code to set a callback to the preShow event for a FlexForm.
myForm.preShow=preShowCallback;  
  
function preShowCallback(eventobject) {
    //Write your logic here
}
```

### Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>unLoadJS Event</summary>

* * *

Specifies the name of function to be executed when a form is unloaded. The function must exist in a _javascript_ file. For more information on defining the unLoadJS event, refer to _Volt MX Iris User Guide_.

### Syntax

```

unLoadJS()
```

### Read/Write

Read + Write

### Accessible from IDE

Yes

### Example

```

//Sample code to set a callback to the unLoadJS event for a FlexForm.
myForm.unLoadJS=unLoadJSCallback;  
  
function unLoadJSCallback(form) {
    //Write your logic here
}
```

### Platform Availability

    Available on Server side Mobile Web (Advanced) platform.

* * *

</details>
<details close markdown="block"><summary>widgetToZoom Event</summary>

* * *

An event callback is invoked by the platform to return one of the child widgets of source to zoom. The returning source itself may not result in zooming the entire source. The container will not zoom, if a null value is returned. This event is invoked asynchronously.

### Syntax

```

widgetToZoom ()
```

### Parameters

source \[widgetref\]

Handle to the widget reference on which the zooming has started.

### Read/Write

Read + Write

### Remarks

For example, If you have a form with a flexScrollContainer and an image widget inside flexScrollContainer, when you pinch the screen on flexScrollContainer it will call the function configured using widgetToZoom event. If the function returns image, the image will be zoomed.

### Example

```

function onWidgetToZoomCalBck(flexScrollContainer) {
    //Write your logic here
    return flexScrollContainer.image;
}

flexScrollContainer.widgetToZoom = onWidgetToZoomCalBck;
```

> **_Note:_** This event callback is invoked only when zooming is initiated by user interaction.

### Platform Availability

    Available on iOS platform.

* * *
</details>

