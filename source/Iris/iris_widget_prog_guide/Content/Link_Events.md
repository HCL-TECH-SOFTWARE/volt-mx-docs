                              

Link Events
-----------

Event has the following events associated with it:

* * *

<details close markdown="block"><summary>onClick Event</summary>

* * *

An event callback that is invoked by the platform when the user performs a click action on the link.

### Syntax

```

onClick ()
```

### Parameters

rowIndex

Optional. Index of the row that contains the Link widget. It is not available if the Link widget is placed in a section header.

sectionIndex

Optional. Index of the section row that contains the Link widget.

widgetInfo

Optional. Handle to the parent widget instance(segment) that contains the Link widget.

### Read/Write

Read + Write

### Example

```

//Sample code to set the onClick event callback to a Link widget.

frmLink.myLink.onClick=onClickCallback;


function onClickCallback(link){
   //Write your logic here.
}
```

### Platform Availability

Available on all platforms

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
<details close markdown="block"><summary>preOnclickJS Event</summary>

* * *

This event allows the developer to execute custom javascript function before the _onClick_ callback of the Link is invoked. This is applicable only for Mobile Web channel. The function must exist in a javascript file under project>module>js folder.

### Syntax

```

preOnclickJS()
```

### Read/Write

Read + Write

### Remarks

In for the events preOnclickJS and postOnclickJS you will not be able to access application model or APIs, as these functions are executed in browser whereas the remaining JS modules are executed in server. For these events you can access browser objects ( window, document etc..) to change UI or perform some validation before server event. If the event preOnclickJS returns true, only then the request is sent to server for subsequent action.

You have to specify the modules to be loaded in browser using import JS tab, only then these files get included in.html script tag otherwise you will not be able to access the objects defined in those modules.

### Example

```

//Sample code to set the preOnclickJS event callback to a Link widget.

frmLink.myLink.preOnclickJS=preclickJSCallBack;

function preclickJSCallBack(link) {
    //Write your logic here.
}
```

### Platform Availability

*   Available in the IDE
*   Available on Server side Mobile Web (BJS and Advanced) platform only

* * *

</details>
<details close markdown="block"><summary>postOnclickJS Event</summary>

* * *

This event allows the developer to execute custom javascript function after the _onClick_ callback of the Link is invoked. This is applicable only for Mobile Web channel.The function must exist in a javascript file under project>module>js folder.

### Syntax

```

postOnclickJS()
```

### Read/Write

Read + Write

### Example

```

//Sample code to set the postOnclickJS event callback to a Link widget.

frmLink.myLink.postOnclickJS=postclickJSCallBack;

function postclickJSCallBack(link) {
    //Write your logic here.
}
```

### Platform Availability

*   Available in the IDE
*   Available on Server side Mobile Web (Advanced) platform only

* * *
</details>

