                              


RichText Events
===============

RichText widget has the following event associated with it:

* * *


<details close markdown="block"><summary>doLayout Event</summary>

* * *

This event is invoked for every widget when the widget position and dimensions are computed.

### Syntax

```

doLayout()
```

### Read/Write

Read + Write

### Remarks

This event is invoked for all the widgets placed inside flex containers. This event is invoked in the order in which the widgets are added to the widget hierarchy and expect the frame property of the widget is calculated and available for use within this event.

This event is used to set the layout properties of child widgets in the relation to self and peer widgets whose layout is not yet performed.

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

### Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>onClick Event</summary>

* * *

An event callback is invoked by the platform when the user performs a click action on the portion of the text only where a link is defined.

### Syntax

```

onClick()
```
### Parameters

richtextid

Optional. Reference to the RichText widget that raised the event.

linktext

Optional. Specifies the text of the link which you have touched or clicked.

attributes

Optional. Specifies the JSObject containing the attributes of the link. For example, the attribute can contain _href_ as a key and the _url_ as the value.

### Read/Write

Read + Write

### Remarks

If the link is not defined, then onClick event is not invoked.

When the anchor tag is available and onClick event is not defined, the widget opens all anchor tags in a device browser.

In the onClick event , the attribute does not respect anchor tags in rich client. It is respected only on browser based platforms (Mobile Web, SPA etc).  
For example, in the below code when you click "Click here" , the javascript confirm function is not invoked. Only in Mobile Web and SPA it is invoked.  
<a href="#" onclick=confirm("Do you want to proceed")>Click here </a>  

### Example

```

//Sample code to set onClick event callback to a RichText widget.
frmRText.myRText.onClick=onClickCallback;
function onClickCallback(rText, linktext, attributes){
      //Write your logic here.
}
```

### Platform Availability

*   Available in the IDE
*   Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>onScrollWidgetPosition Event</summary>

* * *

This event callback is invoked by the platform when the widget location position gets changed on scrolling. The onScrollWidgetPosition event returns the positional coordinates of the widget's location with respect to the screen (screenX and screenY) and the parent container (frameX and frameY). This event is invoked asynchronously, and is not available for FlexForm widget.

Syntax
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

This event allows the developer to execute custom javascript function after the _onClick_ callback of the widget is invoked.

### Syntax

```

postOnclickJS()
```

### Read/Write

Read + Write

### Remarks

This is applicable only for Mobile Web channel.The function must exist in a javascript file under project>module>js folder.

### Example

```

//Sample code to set postOnclickJS event callback to a RichText widget.
frmRText.myRText.postOnclickJS=postOnclickJSCallback;
function postOnclickJSCallback(rText){
      //Write your logic here.
}
```

### Platform Availability

*   Available in the IDE
*   Available on Server side Mobile Web (Advanced) platform only

* * *

</details>
<details close markdown="block"><summary>preOnclickJS Event</summary>

* * *

This event allows the developer to execute custom javascript function before the _onClick_ callback of the widget is invoked.

### Syntax
```

preOnclickJS()
```

### Read/Write

Read + Write

### Remarks

This is applicable only for Mobile Web channel. The function must exist in a javascript file under project>module>js folder.

In for the events preOnclickJS and postOnclickJS you will not be able to access application model or APIs, as these functions are executed in browser whereas the remaining JS modules are executed in server. For these events you can access browser objects ( window, document etc..) to change UI or perform some validation before server event. If the event preOnclickJS returns true, only then the request is sent to server for subsequent action.  
  
You have to specify the modules to be loaded in browser using import JS tab, only then these files get included in.html script tag otherwise you will not be able to access the objects defined in those modules.

### Example

```

//Sample code to set preOnclickJS event callback to a RichText widget.
frmRText.myRText.preOnclickJS=preOnclickJSCallback;
function preOnclickJSCallback(rText){
      //Write your logic here.
}
```

### Platform Availability

*   Available in the IDE
*   Available on Server side Mobile Web (BJS and Advanced) platform only

* * *

