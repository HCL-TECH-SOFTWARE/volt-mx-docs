                               


FlexScrollContainer Events
==========================

FlexScrollContainer widget has the following events associated:

* * *


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
<details close markdown="block"><summary>onDecelerationStarted Event</summary>

* * *

An event callback is invoked by the platform when the user stops scrolling but the content still moves before the content actually stops. This event is invoked asynchronously.

### Syntax
```

onDecelerationStarted()
```

### Read/Write

Read + Write

### Example

```

//Sample code to set a callback to the onDecelerationStarted event for a FlexScrollContainer widget.

myForm.myFlexScroll.onDecelerationStarted=onDecelerationStartedCallback;

function onDecelerationStartedCallback() {
    //write your logic here.
}
```

### Platform Availability

This property is available on iOS platform.

* * *

</details>
<details close markdown="block"><summary>onScrollEnd Event</summary>

* * *

An event callback is invoked by the platform when the scrolling is ended. This event is invoked asynchronously.

### Syntax
```

onScrollEnd ()  
```

source \[widgetref\]

Optional. Handle to the widget reference on which the scrolling is ended.

### Read/Write

Read + Write

### Example

```

//Sample code to set a callback to the onScrollEnd event for a FlexScrollContainer widget.

myForm.myFlexScroll.onScrollEnd=onScrollEndCallback;

function onScrollEndCallback(eventobject) {
    //write your logic here.
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

onScrolling (source)
```

### Input Parameters

source \[widgetref\]

Handle to the widget reference on which the scrolling is in progress.

### Read/Write

Read + Write

### Example

```

//Sample code to set a callback to the onScrolling event for a FlexScrollContainer widget.

myForm.myFlexScroll.onScrolling=onScrollingCallback;

function onScrollingCallback(eventobject) {
    //write your logic here.
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

source \[widgetref\]

Optional. Handle to the widget reference on which the scrolling has started.

### Read/Write

Read + Write

### Example

```

//Sample code to set a callback to the onScrollStart event for a FlexScrollContainer widget.

myForm.myFlexScroll.onScrollStart=onScrollStartCallback;

function onScrollStartCallback(eventobject) {
    //write your logic here.
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

onScrollTouchReleased()  
```
source \[widgetref\]

Optional. Handle to the widget reference on which the user touch is released from the display.

### Read/Write

Read + Write

### Example

```

//Sample code to set a callback to the onScrollTouchReleased event for a FlexScrollContainer widget.

myForm.myFlexScroll.onScrollTouchReleased=onScrollTouchReleasedCallback;

function onScrollTouchReleasedCallback(eventobject) {
    //write your logic here.
}
```

### Platform Availability

*   iOS
*   Android
*   SPA

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
<details close markdown="block"><summary>onZoomEnd Event</summary>

* * *

An event callback is invoked by the platform when the zooming has ended. This event is invoked asynchronously.

### Syntax
```

onZoomEnd()
```

source \[widgetref\]

Handle to the widget reference on which the zooming has ended.

### Read/Write

Read + Write

### Remarks

For example, If you have a form with a flexScrollContainer and an image widget inside flexScrollContainer, when you pinch the screen on flexScrollContainer it will call the function configured using widgetToZoom event. If the function returns image, the image will be zoomed.

```


function onZoomEndCalBck(flexScrollContainer) {
    //Write your logic here
         
    voltmx.print("zooming ended");
}
myForm.myflexScrollContainer.onZoomEnd = onZoomEndCalBck;
```

> **_Note:_** This event callback is invoked only when zooming is initiated by user interaction.

### Platform Availability

Available in the IDE.

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
myForm.myflexScrollContainer.onZooming = onZoomingCalBck;

```

> **_Note:_** This event callback is invoked only when zooming is initiated by user interaction.

### Platform Availability

Available on iOS platform.

* * *

</details>
<details close markdown="block"><summary>onZoomStart Event</summary>

* * *

An event callback is invoked by the platform when the container is about to zoom. This event is invoked asynchronously.

### Syntax
```

onZoomStart()
```

source \[widgetref\]

Optional. Handle to the widget reference on which the zooming has started.

widget \[widgetref\]

Optional. Specifies the widget that actually zooms.

### Read/Write

Read + Write

### Remarks

For example, If you have a form with a flexScrollContainer and an image widget inside flexScrollContainer, when you pinch the screen on flexScrollContainer it will call the function configured using widgetToZoom event. If the function returns image, the image will be zoomed.

```


function onZoomStartCalBck(flexScrollContainer) {
    //Write your logic here
          
    voltmx.print("zooming started");
}
myForm.myflexScrollContainer.onZoomStart = onZoomStartCalBck;
```

> **_Note:_** This event callback is invoked only when zooming is initiated by user interaction.

### Platform Availability

Available on iOS platform.

* * *

</details>
<details close markdown="block"><summary>scrollingEvents Event</summary>

* * *

This event callback is invoked while scrolling the FlexScrollContainer horizontally or vertically. The **scrollingEvents** event is triggered when the FlexScrollContainer is pushed or pulled beyond its horizontal or vertical boundaries.

### Syntax
```

scrollingEvents()
```

Events defined in scrollingEvents

**onPull**: This event is triggered when the FlexScrollContainer is pulled while scrolling horizontally or vertically.

onPull(widgetRef)

**onPush**: This event is triggered when the FlexScrollContainer is pushed while scrolling horizontally or vertically.

onPush(widgetRef)

**onReachingBegining**: This event is triggered when the scrolling bar reaches the beginning of the FlexScrollContainer widget.

onReachingBegining(widgetRef)

**onReachingEnd**: This event is triggered when the scrolling bar reaches the end of the FlexScrollContainer widget.

onReachingEnd(widgetRef)

Input Parameters

_widgetRef_

This parameter references the FlexScrollContainer that triggered the event.

### Read/Write

Read + Write

### Remarks

*   In SPA and iOS, pull and push events are triggered only when the [bounces](FlexScrollContainer_Properties.md#bounces) property is set as true.
*   When the [scrollDirection](FlexScrollContainer_Properties.md#scrollDi) Property of the **FlexScrollContainer** is set as vertical, the text provided in the **[pullToRefreshI18NKey](#pullToRefreshI18NKey)** and **[pushToRefreshI18NKey](#pushToRefreshI18NKey)** attributes takes precedence over the icons provided in **[pullToRefreshIcon](#pullToRefreshIcon)** and **[pushToRefreshIcon](#pushToRefreshIcon)**.
*   When the [scrollDirection](FlexScrollContainer_Properties.md#scrollDi) Property of the **FlexScrollContainer** is set as horizontal, only the icons provided in **[pullToRefreshIcon](#pullToRefreshIcon)** and **[pushToRefreshIcon](#pushToRefreshIcon)** are displayed.

### Limitations

*   Desktop Web does not support onPull and onPush events.
*   onPull and onPush events do not work when the [scrollDirection](FlexScrollContainer_Properties.md#scrollDi) Property is set as Both.
*   When onPull and onPush events are configured, the parent container does not scroll.
*   In Android, when onPull and onPush events are enabled, the [scrollDirection](FlexScrollContainer_Properties.md#scrollDi) Property cannot be modified in the same FlexForm.
*   In Android, you cannot enable **scrollingEvents** after navigating to the FlexForm. It must be enabled before navigating to the form.

```

//The following function should be called in the Preshow event of the myForm FlexForm.
function myFormPreShow() {
 myForm.myFlexScroll.scrollingEvents = {
  "onPull": flxPushMethod,
  "onPush": flxPullMethod,
  "onReachingBegining": flxReachBeginMethod,
  "onReachingEnd": flxReachEndMethod,
 };
}
//The following functions should be defined in the modules.
//The callback assigned to the onPush event.  
function flxPushMethod(widgetRef) {
 voltmx.print("onPush");
}
//The callback assigned to the onPull event.
function flxPullMethod(widgetRef) {
 voltmx.print("onPull");
}
//The callback assigned to the onReachingBegining event.
function flxReachBeginMethod(widgetRef) {
 voltmx.print("onReachingBegining");
}
//The callback assigned to the onReachingEnd event.
function flxReachEndMethod(widgetRef) {
 voltmx.print("onReachingEnd");
}
```

### Platform Availability

*   Android
*   iOS
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>widgetToZoom Event</summary>

* * *

An event callback is invoked by the platform to return one of the child widgets of source to zoom. The returning source itself may not result in zooming the entire source. The container will not zoom, if a null value is returned. This event is invoked asynchronously.

### Syntax
```

widgetToZoom()
```

source \[widgetref\]

Optional. Handle to the widget reference on which the zooming has started.

### Read/Write

Read + Write

### Remarks

For example, If you have a form with a flexScrollContainer and an image widget inside flexScrollContainer, when you pinch the screen on flexScrollContainer it will call the function configured using widgetToZoom event. If the function returns image, the image will be zoomed.

```


function onWidgetToZoomCalBck(flexScrollContainer) {
    //Write your logic here
    return flexScrollContainer.image;
}
myForm.myflexScrollContainer.widgetToZoom = onWidgetToZoomCalBck;
```

> **_Note:_** This event callback is invoked only when zooming is initiated by user interaction.

### Platform Availability

Available in the IDE.

Available on iOS platform.

* * *

