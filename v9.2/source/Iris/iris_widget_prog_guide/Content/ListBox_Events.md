                               


ListBox Events
==============

ListBox has the following event associated with it:

* * *


<details close markdown="block"><summary>doLayout Event</summary>

* * *

This event is invoked for every widget when the widget position and dimensions are computed. This event is invoked for all the widgets placed inside flex containers. This event is invoked in the order in which the widgets are added to the widget hierarchy and expect the frame property of the widget is calculated and available for use within this event.

This event is used to set the layout properties of child widgets in the relation to self and peer widgets whose layout is not yet performed.

<b>Syntax</b>

```

doLayout()
```

<b>Read/Write</b>

Yes - (Read and Write)

<b>Remarks</b>

The number of times this event invoked may vary per platform. It is not recommended to write business logic assuming that this function is invoked only once when there is a change in positional or dimensional properties. This event will not trigger when transformations are applied though widget is moved or scaled or rotated from its original location.

<b>Example</b>

```
//Sample code to set doLayout event callback to a button widget.
/*This code changes the top property of button2 and makes it appear below button1.*/
myForm.button1.doLayout=doLayoutButton1;


function doLayoutButton1(){
      
    myForm.button2.top = myForm.button1.frame.height;
}
```

<b>Platform Availability</b>

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>onScrollWidgetPosition Event</summary>

* * *

This event callback is invoked by the platform when the widget location position gets changed on scrolling. The onScrollWidgetPosition event returns the positional coordinates of the widget's location with respect to the screen (screenX and screenY) and the parent container (frameX and frameY). This event is invoked asynchronously, and is not available for FlexForm widget.

<b>Syntax</b>

```

onScrollWidgetPosition()
```

<b>Read/Write</b>

Read + Write

<b>Example</b>

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

<b>Platform Availability</b>

*   Not Accessible from IDE
*   Android, iOS, SPA, and Windows

* * *

</details>
<details close markdown="block"><summary>onSelection Event</summary>

* * *

An event callback that is invoked by the platform when an item is selected or deselected.

<b>Syntax</b>

```

onSelection
```

<b>Read/Write</b>

Yes - (Read and Write)

<b>Remarks</b>

This callback is not invoked if the selectedKey and selectedKeyValue are changed programmatically.

<b>Example</b>

```
//Sample code to set a callback to the onSelection event of a ListBox widget.

frmList.myList.onSelection=onSelectionCallback;

function onSelectionCallback(list){
    //write your logic here.
}

```

<b>Platform Availability</b>

Available on all platforms..

* * *

</details>
<details close markdown="block"><summary>onTouchEnd Event</summary>

* * *

An event callback is invoked by the platform when the user touch is released from the touch surface.

<b>Syntax</b>

```

onTouchEnd ()
```

<b>Optional Parameters</b>

source

Handle to the widget reference on which the user touch has ended.

x

Specifies the x-coordinate with in the widget with respect to widget's co-ordinate system. It is a number indicating device independent pixel.

y

Specifies the y- coordinate with in the widget with respect to widget's co-ordinate system. It is a number indicating device independent pixel.

contextInfo

On devices that support 3D Touch, specifies a key-value pair where the value specifies the force of the touch. The value 1.0 represents the force of an average touch, as determined by the system.

> **_Note:_** 3D Touch is available only on iOS 9.0 and later.

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

This event is invoked asynchronously.

<b>Example</b>

```
function onTouchEndCallback(source, x, y, contextInfo) {
    if (contextInfo) {
        var force = contextInfo[“force”];
        voltmx.print(“value of force is” + force)
    }
}
Form1.widget1.onTouchEnd = onTouchEndCallback;
```

<b>Platform Availability</b>

*   iOS, Android, Windows, and SPA

* * *

</details>
<details close markdown="block"><summary>onTouchMove Event</summary>

* * *

An event callback is invoked by the platform when the touch moves on the touch surface continuously until movement ends.

<b>Syntax</b>

```

onTouchMove ()
```

<b>Optional Parameters</b>

source

Handle to the widget reference on which touch moves.

x

Specifies the x-coordinate with in the widget with respect to widget's co-ordinate system. It is a number indicating device independent pixel.

y

Specifies the y- coordinate with in the widget with respect to widget's co-ordinate system. It is a number indicating device independent pixel.

contextInfo

On devices that support 3D Touch, specifies a key-value pair where the value specifies the force of the touch. The value 1.0 represents the force of an average touch, as determined by the system.

> **_Note:_** 3D Touch is available only on iOS 9.0 and later.

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

This event is invoked asynchronously.

<b>Example</b>

```
function onTouchMoveCallback(source, x, y, contextInfo) {
    if (contextInfo) {
        var force = contextInfo[“force”];
        voltmx.print(“value of force is” + force)
    }
    Form1.widget1.onTouchMove = onTouchMoveCallback;  

```

<b>Platform Availability</b>

*   iOS, Android, Windows, and SPA

* * *

</details>
<details close markdown="block"><summary>onTouchStart Event</summary>

* * *

An event callback is invoked by the platform when the user touches the touch surface.

<b>Syntax</b>

```

onTouchStart ()
```

<b>Optional Parameters</b>

source

Handle to the widget reference on which the user touches.

x

Specifies the X co-ordinate with in the widget with respect to widget's co-ordinate system. It is a number indicating device independent pixel.

y

Specifies the Y co-ordinate with in the widget with respect to widget's co-ordinate system. It is a number indicating device independent pixel.

contextInfo

On devices that support 3D Touch, specifies a key-value pair where the value specifies the force of the touch. The value 1.0 represents the force of an average touch, as determined by the system.

> **_Note:_** 3D Touch is available only on iOS 9.0 and later.

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

This event is invoked asynchronously.

<b>Example</b>

```
function onTouchStartCallback(source, x, y, contextInfo) {
    if (contextInfo) {
        var force = contextInfo[“force”];
        voltmx.print(“value of force is” + force)
    }
}
Form1.widget1.onTouchStart = onTouchStartCallback;  

```

<b>Platform Availability</b>

*   iOS, Android, Windows, and SPA

* * *

</details>
<details close markdown="block"><summary>postOnclickJS Event</summary>

* * *

This event allows the developer to execute custom javascript function after the _onClick_ callback of the ListBox is invoked. This is applicable only for Mobile Web channel.The function must exist in a javascript file under project>module>js folder.

<b>Syntax</b>

```

postOnclickJS()
```

<b>Read/Write</b>

Yes - (Read and Write)

<b>Remarks</b>

In for the events preOnclickJS and postOnclickJS you will not be able to access application model or APIs, as these functions are executed in browser whereas the remaining JS modules are executed in server. For these events you can access browser objects ( window, document etc..) to change UI or perform some validation before server event. If the event preOnclickJS returns true, only then the request is sent to server for subsequent action.  
  
You have to specify the modules to be loaded in browser using import JS tab, only then these files get included in.html script tag otherwise you will not be able to access the objects defined in those modules.

<b>Example</b>

```
//Sample code to set a callback to the postOnclickJS event of a ListBox widget.

frmList.myList.postOnclickJS=postclickJSCallback;

function postclickJSCallback(list){
    //write your logic here.
}

```

Accessible from IDE

Yes

<b>Platform Availability</b>

Available on Server side Mobile Web (Advanced) platform only

* * *

</details>
<details close markdown="block"><summary>preOnclickJS Event</summary>

* * *

This event allows the developer to execute custom javascript function before the _onClick_ callback of the ListBox is invoked. This is applicable only for Mobile Web channel. The function must exist in a javascript file under project>module>js folder.

<b>Syntax</b>

```

preOnclickJS()
```

<b>Read/Write</b>

Yes - (Read and Write)

<b>Example</b>

```
//Sample code to set a callback to the preOnclickJS event of a ListBox widget.

frmList.myList.preOnclickJS=preOnclickJSCallback;

function preOnclickJSCallback(list){
    //write your logic here.
}

```

Accessible from IDE

Yes

<b>Platform Availability</b>

Available on Server side Mobile Web (BJS and Advanced) platform only

* * *

</details>

