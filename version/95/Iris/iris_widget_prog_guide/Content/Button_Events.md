                               


## <a id="Button Events"></a> Button Events


Button has the following events associated with it:

* * *


<details close markdown="block"><summary>doLayout Event</summary>

* * *

This event is used to set the layout properties of child widgets in the relation to self and peer widgets whose layout is not yet performed.

### Syntax

```

doLayout()
```

### Read/Write

Read + Write

### Remarks

This event is invoked for every widget when the widget position and dimensions are computed. This event is invoked for all the widgets placed inside flex containers. This event is invoked in the order in which the widgets are added to the widget hierarchy and expect the frame property of the widget is calculated and available for use within this event.

The number of times this event invoked may vary per platform. It is not recommended to write business logic assuming that this function is invoked only once when there is a change in positional or dimensional properties. This event will not trigger when transformations are applied though widget is moved or scaled or rotated from its original location.

### Example

```

//Sample code to set doLayout event callback to a button widget.
/*This code changes the top property of button2 and makes it appear below button1.*/
myForm.button1.doLayout=doLayoutButton1;

function doLayoutButton1(){
      
    myForm.button2.top = myForm.button1.frame.height;
}			
```

Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>onBlur Event</summary>

* * *

An event that accepts a callback function as an input and executes the functionality defined in the callback function when the widget is blurred.

### Syntax

```
onBlur ()
```

### Input Parameters

Callback function

A function that contains the logic to be implemented when the widget is blurred

### Read/Write

Read + Write

### Remarks

Assign a null value to the onBlur event of a widget to remove the blur effect on the widget.

### Example

```
//This is a generic event that is applicable for various widgets.
/*Here, we have shown how to use the onBlur event for a Button widget. 
  You need to make a corresponding use of the onBlur event for other 
  applicable widgets.*/

frmButton.myButton.onBlur = onBlurCallBack;

function onBlurCallBack(widget) {
    console.log('onBlur event triggered');
}
```

Platform Availability

*   Available in the IDE
*   Available on the Responsive Web platform

* * *

</details>
<details close markdown="block"><summary>onClick Event</summary>

* * *

An event callback is invoked by the platform when the user performs a click action on the button.

### Syntax

```

onClick ()
```

### Optional Parameters

rowIndex

Optional. Index of the row that contains the button. It is not available if the button is placed in a section header.

sectionIndex

Index of the section row that contains the button.

widgetInfo

Handle to the widget instance that contains the button.

### Read/Write

Read + Write

### Remarks

The onClick event callback accepts additional parameters when a button is placed in a segment row or section template.

### Example

```

//Sample code to set onClick event callback to Button widget.

frmButton.myButton.onClick=onClickCallBck;

function onClickCallBck(button){
      
   //Write your code here.
}
```

Platform Availability

*   Available in the IDE
*   Available on all platforms

* * *

</details>
<details close markdown="block"><summary>onFocus Event</summary>

* * *

An event that accepts a callback function as an input and executes the functionality defined in the callback function when the widget is in focus.

### Syntax

```
onFocus()
```

### Input Parameters

Callback function

A function that contains the logic to be implemented when the widget is in focus.

The callback function of the onFocus Event contains a new parameter, **activeElement**. The activeElement parameter specifies the widget that is currently in focus.

### Read/Write

Read + Write

### Remarks

Assign a null value to the onFocus event of a widget to remove focus from the widget.

### Example

```
 //This is a generic event that is applicable for various widgets.
/* Here, we have shown how to use the onFocus event for a Button widget. 
   You need to make a corresponding use of the onFocus event for other 
   applicable widgets.*/
   
frmButton.myButton.onFocus = onFocusCallBack;

function onFocusCallBack(widget, activeElement) {
    console.log('onFocus event triggered');
}
```

Platform Availability

*   Available in the IDE
*   Available on the Responsive Web platform

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

Platform Availability

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

Platform Availability

*   iOS, Android, Windows, and SPA

* * *

</details>
<details close markdown="block"><summary>onTouchStart Event</summary>

* * *

An event callback is invoked by the platform when the user touches the touch surface.

### Syntax

```

onTouchStart ()
```

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

</details>
<details close markdown="block"><summary>postOnclickJS Event</summary>

* * *

This event allows the developer to execute custom JavaScript function after the _onClick_ callback of the widget is invoked.

### Syntax
```

postOnclickJS()
```

### Read/Write

Read + Write

### Remarks

This is applicable only for Mobile Web channel. The function must exist in a JavaScript file under project>module>js folder.

### Example

```

//Sample code to set postOnclickJS event callback to Button widget.

frmButton.myButton.postOnclickJS=postOnclickJSCallBck;

function postOnclickJSCallBck(button){
      
   //Write your code here.
}
```

### Platform Availability

*   Available in the IDE
*   Available on Server side Mobile Web (Advanced) platform only

* * *

</details>
<details close markdown="block"><summary>preOnclickJS Event</summary>

* * *

This event allows the developer to execute custom JavaScript function before the _onClick_ callback of the widget is invoked.

### Syntax

```

preOnclickJS()
```

### Read/Write

Read + Write

### Remarks

This is applicable only for Mobile Web channel. The function must exist in a JavaScript file under the project>module>js folder.

In for the preOnclickJS and postOnclickJS events , you will not be able to access application model or APIs, as these functions are executed in browser, whereas the remaining JS modules are executed in server. For these events you can access browser objects to change UI or perform some validation before server event. Only if the event preOnclickJS returns true, the request is sent to server for subsequent action.

You have to specify the modules to be loaded in browser using import JS tab; only then these files get included in HTML script tag, otherwise you will not be able to access the objects defined in those modules.

### Example

```

//Sample code to set preOnclickJS event callback to Button widget.

frmButton.myButton.preOnclickJS=preOnclickJSCallBck;

function preOnclickJSCallBck(button){
      
   //Write your code here.
}
```

### Platform Availability

*   Available in the IDE
*   Available on Server side Mobile Web (BJS and Advanced) platform only

* * *

