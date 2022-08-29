                               


FlexContainer Events
====================

The FlexContainer widget has the following events associated with it:

* * *


<details close markdown="block"><summary>addWidgets Event</summary>

* * *

An event callback invoked by the platform when the FlexContianer or FlexScrollContianer widget is accessed for the first time after its construction. This event gets executed only once on in the lifetime of the FlexContianer or FlexScrollContainer. If a destroyed FlexContianer or FlexScrollContainer is accessed, the FlexContianer or FlexScrollContainer is re-initialized and this event is invoked.

### Syntax

addWidgets()

### Read/Write

No. It is a constructor only property.

### Remarks

> **_Note:_** This event is applicable when the FlexContainer is created using the masters feature of VoltMX Iris.

If the FlexForm is not initialized then,

*   addWidgets event for a FlexContainer or FlexScrollContainer placed inside the Form is invoked after the addWidgets event of the FlexContainer or FlexScrollContainer.
*   If the multiple FlexContainer or FlexScrollContainers are placed in the Form, then addWidgets event of all the containers is invoked in the order they are added to the Form.
*   If the container is accessed before the Form is initialized, then the Form’s addWidgets event is invoked followed by FlexContainer or FlexScrollContainer’s.

If the FlexForm is initialized and the FlexContainer or FlexScrollContainer is added dynamically to the Form then,

*   The addWidgets callback for a FlexContainer or FlexScrollContainer is invoked immediately.
*   In SPA platform, addWidgets event is invoked even if any API on FlexContainer or FlexScrollContainer is invoked.
*   In Android, iOS, and Windows platforms, the event addWidgets is invoked only if any property on FlexContainer or FlexScrollContainer is invoked.

### Example

```

//Sample code to set a callback to the addWidgets event for a FlexContainer widget.

myForm.myFlex.addWidgets=addWidgetsCallback;

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

The frame values will be available correctly only in the doLayout callback. Usage of the frame property in postShow is not suggested as layout cycles are still being calculated even after firing the postShow of the form.

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

This event is invoked only once in widgets life cycle that is when the FlexContainer or FlexScrollContainer is ready with its widget hierarchy. This event is invoked after [addwidgets](#masterda) method is invoked.

### Syntax
```

init
```

### Read/Write

No. It is a constructor only property.

### Remarks

> **_Note:_** This event is applicable when the FlexContainer is created using the masters feature of VoltMX Iris.

If the FlexForm is not initialized then,

*   init event for a FlexContainer or FlexScrollContainer placed in the Form is invoked after the execution of init event of the FlexContainer or FlexScrollContainer.
*   If the multiple FlexContainer or FlexScrollContainers are placed in the Form, then init event of all the containers is invoked in the order they are added to the Form.
*   If the container is accessed before the Form is initialized, then the Form’s init event is invoked followed by FlexContainer or FlexScrollContainer’s.

If the FlexForm is initialized and the FlexContainer or FlexScrollContainer is added dynamically to the Form then,

*   The init callback for a FlexContainer or FlexScrollContainer is invoked immediately.
*   In SPA platform, init event is invoked even if any API on FlexContainer or FlexScrollContainer is invoked.
*   In Android, iOS, and Windows platforms, the event init is invoked only if any property on FlexContainer or FlexScrollContainer is invoked.

### Example

```

//Sample code
var flexContainer = new voltmx.ui.FlexContainer({
	"id": "flexContainer2142450206171182",
	"top": "0dp",
	"left": "0dp",
	"width": "50%",
	"height": "100dp",
	"zIndex": 1,
	"isVisible": true,
	"clipBounds": true,
	"Location": "[0,0]",
	"skin": "skn1",
	"layoutType": voltmx.flex.FREE_FORM,
	"init": initCallback
});

function initCallback() {
	//write your logic to initialize. 
} 
```

### Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>onClick Event</summary>

* * *

A callback event is invoked by the platform when the user performs a click action on the FlexContainer widget.

### Syntax

```

onClick()
```

### Parameters

widget \[widgetref\]

Optional. Handle to the widget instance that raised the event.

Context \[Object\]

Optional. This parameter is applicable only when the FlexContainer is placed in a Segment rowTemplate or sectionTemplate. The argument context object has the following parameters:

> rowIndex \[Number\]

> Optional. Index of the row that contains the FlexContainer. It is not available if the FlexContainer is placed in a section header.

> sectionIndex \[Number\]

> Index of the section row that contains the FlexContainer.

> widgetInfo \[widgetref\]

> Handle to the parent widget instance (Segment) that contains the FlexContainer.

> **_Note:_** The behavior of this event is undefined when **onClick** and a **single tab gesture** are defined for a FlexContainer.

### Read/Write

Read + Write

Remarks

If the onClick event is not defined for the FlexContainer Widget, the FocusSkin is not shown when user performs click action on the FlexContainer.

### Example

```

//Sample code to set callback to onClick event for a FlexContainer widget.

myForm.myFlex.onClick=flexClickExample;

function flexClickExample(eventobject) {
    voltmx.print("The eventobject is " + eventobject);
}  
//Sample code to set callback to onClick event of a FlexContiner widget inside a Segment.  
  
myForm.myFlex.onClick=flexClickExample;  
function flexClickExample(eventobject, context) {
    voltmx.print("The event object is " + eventobject + "and the context is " + );
}  

```

### Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>onHover Event</summary>

* * *

An event callback is invoked by the platform based on the below actions:

*   When the mouse enters into the widget region.
*   When the mouse moves with in the widget region.
*   When the mouse leaves from the widget region.

> **_Note:_** When the event callback is invoked, corresponding widget state is not updated as selected/unselected.

### Important Considerations

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

### Syntax

```

onHover()
```

### Parameters

widget

Optional. Handle to the widget instance that raised the event.

context

Optional. Specifies the JSObject with the following key values.

 eventType
 
 Following are the options available:
 
    constants.ONHOVER\_MOUSE\_ENTER - When the mouse enters into the widget region.
    
    constants.ONHOVER\_MOUSE\_MOVE - When the mouse move within the widget region.
    
    constants.ONHOVER\_MOUSE\_LEAVE - When the mouse leaves from the widget region.
     sectionIndex
    
    Optional. Specifies the index of the section where the current focused row belongs. It is applicable only if parent is segmentedUI.
    
    rowIndex
    
    Optional. Specifies the index of the current focused row relative to its section. It is applicable only if parent is SegmentedUI or DataGrid.
    
    columnIndex
    
    Optional. Specifies the index of the cell in DataGrid where the mouse exists. It is applicable only if parent is DataGrid.
    
    selectionState
    
    Optional. Specifies the selection state when the widget is placed inside a segmentedUI and its selectionBehavior property is set as SEGUI\_MULTI\_BEHAVIOR or SEGUI\_SINGLE\_SELECT\_BEHAVIOR to indicate the current focused rows checked or unchecked state.
    
    index
    
    Optional. Specifies the index of the current focused image in ImageGallery or HorizontalImageStrip widgets. It is applicable only for ImageGallery or HorizontalImageStrip widgets.
    
    key
    
    Optional. Specifies the key of the element in a CheckBoxGroup or RadioButton widgets.
    
    pageX
    
    Specifies the horizontal coordinate of the onHover event relative to the whole document.
    
    pageY
    
    Specifies the vertical coordinate of the onHover event relative to the whole document.
    
    screenX
    
    Specifies the horizontal coordinate of the onHover event relative to the screen width.
    
    screenY
    
    Specifies the vertical coordinate of the onHover event relative to the screen height.

### Example

```

//Sample code to use onHover eventfunction 
function onHoverEventCallback(widget, context) {
 voltmx.print("button hover event executed" + context.eventType);
 if (context.eventType == constants.ONHOVER_MOUSE_ENTER) {
  widget.skin = "yellow";
 } else if (context.eventType == constants.ONHOVER_MOUSE_MOVE) {
  widget.skin = "yellow";
 } else if (context.eventType == constants.ONHOVER_MOUSE_LEAVE) {
  widget.skin = "blue";
 }
}

function addHoverEvent() {
 voltmx.print("registering hover events");
 form1.button1.onHover = onHoverEventCallback;
}

function removeHoverEvent() {
 voltmx.print("removing hover events");
 form1.button1.onHover = null;
}  

```

### Platform Availability

Available on Desktop Web platform only

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
<details close markdown="block"><summary>onTouchEnd Event</summary>

* * *

An event callback is invoked by the platform when the user touch is released from the touch surface.

### Syntax
```

onTouchEnd ()
```

### Optional Parameters

source

Handle to the widget reference on which the user touch has ended.

x

Specifies the x-coordinate with in the widget with respect to widget's co-ordinate system. It is a number indicating device independent pixel.

y

Specifies the y- coordinate with in the widget with respect to widget's co-ordinate system. It is a number indicating device independent pixel.

contextInfo

On devices that support 3D Touch, specifies a key-value pair where the value specifies the force of the touch. The value 1.0 represents the force of an average touch, as determined by the system.

> **_Note:_** 3D Touch is available only on iOS 9.0 and later.

### Read/Write

Read + Write

### Remarks

This event is invoked asynchronously.

### Example

```

function onTouchEndCallback(source, x, y, contextInfo) {
    if (contextInfo) {
        var force = contextInfo[“force”];
        voltmx.print(“value of force is” + force)
    }
}
Form1.widget1.onTouchEnd = onTouchEndCallback;
```

### Platform Availability

*   iOS, Android, Windows, and SPA

* * *

</details>
<details close markdown="block"><summary>onTouchMove Event</summary>

* * *

An event callback is invoked by the platform when the touch moves on the touch surface continuously until movement ends.

### Syntax

```

onTouchMove ()
```

### Optional Parameters

source

Handle to the widget reference on which touch moves.

x

Specifies the x-coordinate with in the widget with respect to widget's co-ordinate system. It is a number indicating device independent pixel.

y

Specifies the y- coordinate with in the widget with respect to widget's co-ordinate system. It is a number indicating device independent pixel.

contextInfo

On devices that support 3D Touch, specifies a key-value pair where the value specifies the force of the touch. The value 1.0 represents the force of an average touch, as determined by the system.

> **_Note:_** 3D Touch is available only on iOS 9.0 and later.

### Read/Write

Read + Write

### Remarks

This event is invoked asynchronously.

### Example

```

function onTouchMoveCallback(source, x, y, contextInfo) {
    if (contextInfo) {
        var force = contextInfo[“force”];
        voltmx.print(“value of force is” + force)
    }
    Form1.widget1.onTouchMove = onTouchMoveCallback;  

```

### Platform Availability

*   iOS, Android, Windows, and SPA

* * *

</details>
<details close markdown="block"><summary>onTouchStart Event</summary>

* * *

An event callback is invoked by the platform when the user touches the touch surface.

### Syntax

onTouchStart ()

### Optional Parameters

source

Handle to the widget reference on which the user touches.

x

Specifies the X co-ordinate with in the widget with respect to widget's co-ordinate system. It is a number indicating device independent pixel.

y

Specifies the Y co-ordinate with in the widget with respect to widget's co-ordinate system. It is a number indicating device independent pixel.

contextInfo

On devices that support 3D Touch, specifies a key-value pair where the value specifies the force of the touch. The value 1.0 represents the force of an average touch, as determined by the system.

> **_Note:_** 3D Touch is available only on iOS 9.0 and later.

### Read/Write

Read + Write

### Remarks

This event is invoked asynchronously.

### Example

```

function onTouchStartCallback(source, x, y, contextInfo) {
    if (contextInfo) {
        var force = contextInfo[“force”];
        voltmx.print(“value of force is” + force)
    }
}
Form1.widget1.onTouchStart = onTouchStartCallback;  

```

### Platform Availability

*   iOS, Android, Windows, and SPA

* * *

