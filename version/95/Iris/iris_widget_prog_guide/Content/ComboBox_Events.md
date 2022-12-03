                               

ComboBox Events
===============

ComboBox has the following event associated with it:

* * *


<details close markdown="block"><summary>doLayout Event</summary>

* * *

This event is invoked for every widget when the widget position and dimensions are computed or calculated. This event is invoked for all the widgets placed inside flex containers. This event is invoked in the order in which the widgets are added to the widget hierarchy and expect the frame property of the widget is calculated and available for use within this event.

This event is used to set the layout properties of child widgets in the relation to self and peer widgets whose layout is not yet performed.

### Syntax

```

doLayout()
```

### Read/Write

Read + Write

### Remarks

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

* iOS
* Android
* Windows
* SPA

* * *

</details>
<details close markdown="block"><summary>onScrollWidgetPosition Event</summary>

* * *

This event callback is invoked by the platform when the widget location position gets changed on scrolling. The onScrollWidgetPosition event returns the positional coordinates of the widget's location with respect to the screen (screenX and screenY) and the parent container (frameX and frameY). This event is invoked asynchronously, and is not available for FlexForm widget.

### Syntax

```

onScrollWidgetPostion()
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

* Not Accessible from IDE
* Android, iOS, SPA, and Windows

* * *

</details>
<details close markdown="block"><summary>onSelection Event</summary>

* * *

This event is triggered when you select or unselect any item in ComboBox.

### Syntax

```

onSelection()
```

### Read/Write

Read + Write

### Example

```
//Sample code to set onSelection event callback for ComboBox widget.

frmComboBox.myComboBox.onSelection=onSelCallBck;

function onSelCallBck(combobox){

   //Write your code here.
}
```

### Availability

* Available on all platforms

* * *

</details>
<details close markdown="block"><summary>preOnclickJS Event</summary>

* * *

This event allows the developer to execute custom javascript function before the _onSelection_ callback of the ComboBox is invoked. This is applicable only for Mobile Web channel. The function must exist in a javascript file under project>module>js folder.

### Syntax

```

preOnclickJS()
```

### Read/Write

Read + Write

### Remarks

In for the events preOnclickJS and postOnclickJS you cannot access application model or APIs, as these functions are executed in browser whereas the remaining JavaScript modules are executed in server. For these events you can access browser objects ]( window, document etc..) to change UI or perform some validation before server event. If the event preOnclickJS returns true, only then the request is sent to server for subsequent action. You have to specify the modules to be loaded in browser using import JavaScript tab, only then these files get included in.md script tag otherwise you will not be able to access the objects defined in those modules.

> **_Note:_** This event should return true, to continue with execution of onSelection and postOnclickJS events.

### Example

```
//Sample code to set preOnclickJS event callback for ComboBox widget.

frmComboBox.myComboBox.preOnclickJS=preOnclickJSCallBck;

function preOnclickJSCallBck(chkBox){
      
   //Write your code here.
}
```

### Platform Availability

* Available in the IDE
* Available on Server side Mobile Web (BJS and Advanced) platform only

* * *

</details>
<details close markdown="block"><summary>postOnclickJS Event</summary>

* * *

This event allows the developer to execute custom javascript function after the _onSelection_ callback of the ComboBox is invoked. This is applicable only for Mobile Web channel.The function must exist in a javascript file under project>module>js folder.

### Syntax

```

postOnclickJS()
```

### Read/Write

Read + Write

### Remarks

In for the events preOnclickJS and postOnclickJS you cannot access application model or APIs, as these functions are executed in browser whereas the remaining JavaScript modules are executed in server. For these events you can access browser objects ( window, document etc..) to change UI or perform some validation before server event. If the event preOnclickJS returns true, only then the request is sent to server for subsequent action.  
  
You have to specify the modules to be loaded in browser using import JavaScript tab, only then these files get included in.html script tag otherwise you will not be able to access the objects defined in those modules.

### Example

```

//Sample code to set postOnclickJS event callback for ComboBox widget.

frmComboBox.myComboBox.postOnclickJS=postOnclickJSCallBck;

function postOnclickJSCallBck(chkBox){

   //Write your code here.
}
```

### Platform Availability

* Available in the IDE
* Available on Server side Mobile Web (Advanced) platform only

* * *

</details>