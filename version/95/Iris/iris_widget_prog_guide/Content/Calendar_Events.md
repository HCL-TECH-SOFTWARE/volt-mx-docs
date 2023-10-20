
Calendar Events
===============

Calendar widget has the following events associated with it:

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
<details close markdown="block"><summary>onAppointmentTap Event</summary>

* * *

This event is triggered when you tap any of the existing appointments in the following view types:

*   CALENDAR\_VIEW\_TYPE\_DAY\_VIEW
*   CALENDAR\_VIEW\_TYPE\_WEEK\_VIEW
*   CALENDAR\_VIEW\_TYPE\_MONTH\_VIEW

### Syntax

```

onAppointmentTap()
```

### Remarks

The details of the appointment tapped is returned with a unique id in the callback.

```
{  
  "uniqueid":"fc309",  
  "startDate":"2014-10-12 00:00:00",  
  "endDate":"2014-10-13 04:00:00",  
  "Subject":"Travel to Europe",  
  "isAllDay":false,  
  "Location":"Paris, France",  
  "Description":"To attend a meeting",  
  "skin":{"cellcolor":"#FFF09609"},  
  "info":{}  
}
```

The unique id, identifies the appointment displayed in these calendar views.

### Example

```

//Sample code to set onAppointmentTap event callback to Calendar widget.

frmCalendar.myCalendar.onAppointmentTap=onAppointmentTapCallBck;

function onAppointmentTapCallBck(calendar){
      
   //Write your code here.
}
```

### Availability

*   Available on Windows

* * *

</details>
<details close markdown="block"><summary>onDone Event</summary>

* * *

This event is triggered when the _Done_ or _Enter_ button is clicked or tapped after the calendar opens.

### Syntax

```

onDone()
```

### Read/Write

Read + Write

### Remarks

*   In Desktop Web platform, this event is fired when the enter key is pressed when the Calendar widget is in focus.
*   In iOS platform, the Done button is available only when the value of the [inputAccessoryViewType](Calendar_Properties.md#inputAccessoryViewType) property is `CALENDAR_INPUTACCESSORYVIEW_NEXTPREV`. So in iOS platform, the `onDone` event is fired only when the value of inputAccessoryViewType property is `CALENDAR_INPUTACCESSORYVIEW_NEXTPREV`.

### Example

```

//Sample code to set the onDone event callback to a Calendar widget.

frmCalendar.myCalendar.onDone=onDoneCallback;

function onDoneCallback(calendarWdg){
      //Write your logic here.
}

```

### Availability

*   Available in the IDE
*   iOS, Desktop Web, and SPA

* * *

</details>
<details close markdown="block"><summary>onEmptyCellTap Event</summary>

* * *

This event is triggered when you tap on any of the empty cells of the calendar day view.

### Syntax

```

onEmptyCellTap()
```

### Remarks

This event is applicable only when the viewType is set to CALENDAR\_VIEW\_TYPE\_DAY\_VIEW. The arguments holds the value for the date time details of the empty cell being tapped in the following format "dd-MM-yyyy HH:mm". For example, 13-10-2014 10:20.

### Example

```

//Sample code to set onEmptyCellTap event callback to Calendar widget.

frmCalendar.myCalendar.onEmptyCellTap=onEmptyCellTapCallBck;

function onEmptyCellTapCallBck(calendar){
      
   //Write your code here.
}
```

### Availability

*   Available on Windows

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

### Platform Availability

*   Not Accessible from IDE
*   Android, iOS, SPA, and Windows

* * *

</details>
<details close markdown="block"><summary>onSelection Event</summary>

* * *

This event is triggered when an item is selected or deselected.

### Syntax

```

onSelection()
```

### Read/Write

Read + Write

### Remarks

On Android platform, this event works only from Android OS version 4.0 and later.

### Example

```

//Sample code to set onSelection event callback to Calendar widget.

frmCalendar.myCalendar.onSelection=onSelectionCallBck;  
  
function onSelectionCallBck(calendar, isValidDateSelected)
/*The "isValidDateSelected" argument returns true if the selected date is within the defined range. Otherwise, returns false.*/
{
    alert("onSelection event triggered");
}
```

### Availability

*   Available on all platforms

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

