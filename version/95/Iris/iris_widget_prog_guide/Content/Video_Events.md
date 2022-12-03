                              


Video Events
============

The Video widget has the following event associated with it:

* * *


<details close markdown="block"><summary>doLayout Event</summary>

* * *

This event is used to set the layout properties of child widgets in the relation to self and peer widgets whose layout is not yet performed.

This event is invoked for every widget when the widget position and dimensions are computed.

This event is invoked for all the widgets placed inside flex containers.

This event is invoked in the order in which the widgets are added to the widget hierarchy and expect the frame property of the widget is calculated and available for use within this event.

> **_Note:_** The number of times this event invoked may vary per platform. It is not recommended to write business logic assuming that this function is invoked only once when there is a change in positional or dimensional properties. This event will not trigger when transformations are applied though widget is moved or scaled or rotated from its original location.

Syntax

```
doLayout ();
```

Read/Write

Yes - (Read and Write)

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
<details close markdown="block"><summary>onCompletion Event</summary>

* * *

The onCompletion callback is invoked when playback is completed.

Syntax

```


onCompletion ();

```

Return Value

_videoWidgetRef_

Optional. Returns the current Video Widget reference in the onCompletion callback handler.

Example

```
//Sample code to set onCompletion event callback of a Video widget.

frmVideo.myVideo.onCompletion=onCompletionCallback;
function onCompletionCallback(){      
// write logic for video playback Completion
}
```

Platform Availability

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>onError Event</summary>

* * *

The onError callback is invoked when an error occurred in setup or playback.

Syntax

```
onError();
```

Return Value

_videoWidget_

Optional. Returns the current Video Widget reference in the onError callback handler.

Example

```
//Sample code to set onError event callback of a Video widget.

frmVideo.myVideo.onError=onErrorCallback;
function onErrorCallback(){        
// write logic of video playback Error
}
```

Platform Availability

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>onPrepared Event</summary>

* * *

The onPrepared callback is invoked when the media file is loaded and ready to play.

Syntax

```
 onPrepared ();

```

Parameters

_videoWidget_

Optional. Returns the current Video Widget reference in the onPrepared callback handler.

Example

```
//Sample code to set onPrepared event callback of a Video widget.

frmVideo.myVideo.onPrepared=onPreparedCallback;
function onPreparedCallback(){        
// write logic here.
}
```

Platform Availability

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>onScrollWidgetPosition Event</summary>

* * *

This event callback is invoked by the platform when the widget location position gets changed on scrolling. The onScrollWidgetPosition event returns the positional coordinates of the widget's location with respect to the screen (screenX and screenY) and the parent container (frameX and frameY). This event is invoked asynchronously, and is not available for FlexForm widget.

Syntax

```



onScrollWidgetPosition ();


```

Read/Write

Read + Write

Example

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

