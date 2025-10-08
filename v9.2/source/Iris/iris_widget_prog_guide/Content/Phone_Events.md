                              


Phone Events
============

Phone has the following events associated with it:

* * *


<details close markdown="block"><summary>doLayout Event</summary>

* * *

This event is invoked for every widget when the widget position and dimensions are computed.

Syntax

doLayout()

Read/Write

Read + Write

Remarks

This event is invoked for all the widgets placed inside flex containers. This event is invoked in the order in which the widgets are added to the widget hierarchy and expect the frame property of the widget is calculated and available for use within this event.

This event is used to set the layout properties of child widgets in the relation to self and peer widgets whose layout is not yet performed.

The number of times this event invoked may vary per platform. It is not recommended to write business logic assuming that this function is invoked only once when there is a change in positional or dimensional properties. This event will not trigger when transformations are applied though widget is moved or scaled or rotated from its original location.

Example

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
<details close markdown="block"><summary>onTouchStart Event</summary>

* * *

An event callback is invoked by the platform when the user touches the touch surface.

Syntax

onTouchStart ()

Optional Parameters

source

Handle to the widget reference on which the user touches.

x

Specifies the X co-ordinate with in the widget with respect to widget's co-ordinate system. It is a number indicating device independent pixel.

y

Specifies the Y co-ordinate with in the widget with respect to widget's co-ordinate system. It is a number indicating device independent pixel.

contextInfo

On devices that support 3D Touch, specifies a key-value pair where the value specifies the force of the touch. The value 1.0 represents the force of an average touch, as determined by the system.

> **_Note:_** 3D Touch is available only on iOS 9.0 and later.

Read/Write

Read + Write

Remarks

This event is invoked asynchronously.

Example

```
function onTouchStartCallback(source, x, y, contextInfo) {
    if (contextInfo) {
        var force = contextInfo[“force”];
        voltmx.print(“value of force is” + force)
    }
}
Form1.widget1.onTouchStart = onTouchStartCallback;  

```

Platform Availability

*   iOS, Android, Windows, and SPA

* * *

</details>
<details close markdown="block"><summary>onTouchMove Event</summary>

* * *

An event callback is invoked by the platform when the touch moves on the touch surface continuously until movement ends.

Syntax

onTouchMove ()

Optional Parameters

source

Handle to the widget reference on which touch moves.

x

Specifies the x-coordinate with in the widget with respect to widget's co-ordinate system. It is a number indicating device independent pixel.

y

Specifies the y- coordinate with in the widget with respect to widget's co-ordinate system. It is a number indicating device independent pixel.

contextInfo

On devices that support 3D Touch, specifies a key-value pair where the value specifies the force of the touch. The value 1.0 represents the force of an average touch, as determined by the system.

> **_Note:_** 3D Touch is available only on iOS 9.0 and later.

Read/Write

Read + Write

Remarks

This event is invoked asynchronously.

Example

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
<details close markdown="block"><summary>onTouchEnd Event</summary>

* * *

An event callback is invoked by the platform when the user touch is released from the touch surface.

Syntax

onTouchEnd ()

Optional Parameters

source

Handle to the widget reference on which the user touch has ended.

x

Specifies the x-coordinate with in the widget with respect to widget's co-ordinate system. It is a number indicating device independent pixel.

y

Specifies the y- coordinate with in the widget with respect to widget's co-ordinate system. It is a number indicating device independent pixel.

contextInfo

On devices that support 3D Touch, specifies a key-value pair where the value specifies the force of the touch. The value 1.0 represents the force of an average touch, as determined by the system.

> **_Note:_** 3D Touch is available only on iOS 9.0 and later.

Read/Write

Read + Write

Remarks

This event is invoked asynchronously.

Example

```
function onTouchEndCallback(source, x, y, contextInfo) {
    if (contextInfo) {
        var force = contextInfo[“force”];
        voltmx.print(“value of force is” + force)
    }
}
Form1.widget1.onTouchEnd = onTouchEndCallback;
```

Platform Availability

*   iOS, Android, Windows, and SPA

* * *

