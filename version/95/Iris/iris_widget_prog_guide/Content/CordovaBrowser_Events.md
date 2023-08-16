                               


CordovaBrowser Events
=====================

The CordovaBrowser widget has the following events associated with it:

* * *


<details close markdown="block"><summary>doLayout Event</summary>

* * *

This event is invoked for every widget when the widget position and dimensions are computed.

<b>Syntax</b>

```

doLayout()
```

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

This event is invoked for all the widgets placed inside flex containers. This event is invoked in the order in which the widgets are added to the widget hierarchy and expect the frame property of the widget is calculated and available for use within this event.

This event is used to set the layout properties of child widgets in the relation to self and peer widgets whose layout is not yet performed.

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

* * *

</details>
<details close markdown="block"><summary>handleRequest Event</summary>

* * *

An event callback which gets invoked by the platform before CordovaBrowserwidget navigates to a new URL.

<b>Syntax</b>

```

handleRequest ()  
handleRequest (eventobject,params)
```

<b>Parameters</b>

eventobject

Optional. A unique Id that identifies the CordovaBrowserwidget.

params

Optional. An object that identifies the url parameters as key-values pair.

Following are the parameters of the object.

> **_originalURL \[String\]_ - Optional**
> 
> Specifies the original url.
> 
> **q_ueryParams\[Object\]_ - Optional**
> 
> Specifies the dictionary containing the query parameters passed to the URL as key, values in the dictionary.
> 
> **_requestMethod\[String\]_ - Optional** - Supported only on iOS
> 
> Specifies the request method type. Following are the available options:
> 
> > *   Constants.BROWSER\_REQUEST\_METHOD\_GET
> > *   Constants.BROWSER\_REQUEST\_METHOD\_POST
> 
> **_header\[JSObject\]_ - Optional** - Supported only on iOS
> 
> Specifies a dictionary containing all the HTTP header fields.

<b>Read/Write</b>

Write only

<b>Remarks</b>

This is useful in scenarios where the developer wants to keep track of the URLs that the CordovaBrowserfield navigates to. For example, in a payment flow (that is, being executed inside a CordovaBrowserwidget) on successful redirection to a payment confirmation page the developer would like to take the user to a new native form.

On iOS platform, whenever handleRequest is set to browser and request comes to CordovaBrowserwidget to load the url or.html, then before loading the content, handle request is called. Also, whenever a user selects any hyperlink then also handleRequest is called.

The return value from this function determines how the CordovaBrowserwidget handles the original request. If a false value is returned, then the CordovaBrowserwidget continues navigation to the original URL and if the true value is returned then the developer has to handle the request.

<b>Example</b>

```
//Sample call back for handleRequest event
function handleRequestCallback(browserWidget, params) {
    voltmx.print("handleRequest event triggered");
    voltmx.print("Original URL" + params["originalURL"]);
    voltmx.print("Request Method" + params["requestMethod"]);
    voltmx.print("Header" + JSON.stringify(params["header"]));

    //Ignore this request and continue loading other URLs.
    return false;
    //If false is returned, platform will load the originalurl in the CordovaBrowserwidget.
}

frmobj.brw1.handleRequest = handleRequestCallback
```

<b>Platform Availability</b>

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>onFailure Event</summary>

* * *

An event callback which gets invoked by the platform when the given request URL is failed to load the data.

<b>Syntax</b>

```

onFailure()
```

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

This event is called only for the given request URL, but not for the subsequent web navigation request failures.

This event is also not called when [.htmlString](Browser_Properties.md#htmlString) is set to the web widget.

<b>Example</b>

```
//Sample code to set onFailure event callback to a CordovaBrowser widget.

frmCBrowser.myCBrowser.onFailure=onFailureCallBck;  
function onFailureCallBck(browser) {
    alert("onFailure event triggered");
}  

```

For more information about defining an action sequence for this event, see _Event Editor_ in the _VoltMX Iris User Guide_.

<b>Platform Availability</b>

*   Available on all platforms except Desktop Web and SPA.

* * *

</details>
<details close markdown="block"><summary>onProgressChanged Event</summary>

* * *

The onProgressChanged callback event shows you the progress of the page loading in the CordovaBrowserWidget. The platform invokes the event when the page is loading.

<b>Syntax</b>

```

onProgressChanged()
```

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

When you set the onProgressChanged event in the CordovaBrowserWidget, the progress value of the loading page is passed as a parameter to the callback.

<b>Example</b>

```
//Sample code to set onProgressChanged event callback to a CordovaBrowser widget.
function onProgessChangedCallback(progress) {
    alert("Progress value -" + progress);
}

//Creating the Browser. 

frmCBrowser.myCBrowser = onProgessChangedCallback;
```

<b>Platform Availability</b>

*   Available in the IDE
*   Available only on the Android platform.

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
<details close markdown="block"><summary>onSuccess Event</summary>

* * *

An event callback which gets invoked by the platform when the given request URL is successful in loading the data.

<b>Syntax</b>

```

onSuccess()
```

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

This event is called every time the page is loaded. This event is not called when [.htmlString](Browser_Properties.md#htmlString) is set to the web widget.

This event gets called whenever the URL is loaded, or you navigate from one URL to another, or the browser URL internally redirects to another URL. This event is also called whenever the content is loaded, and when a URL contains any third party content using an iframe.

<b>Example</b>

```
//Sample code to set onSuccess event callback to a CordovaBrowser widget.

frmCBrowser.myCBrowser.onSuccess=onSuccessCallBck;  
function onSuccessCallBck(browser) {
    alert("onFailure event triggered");
}  

```

For more information about defining an action sequence for this event, see _Event Editor_ in the _VoltMX Iris User Guide_.

<b>Platform Availability</b>

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>scrollingEvents Event</summary>

* * *

Specifies the scrolling events which gets called when scrolling reaches beginning of the widget or end of the widget.

Following are the events and their callback signature:

> onReachingBegining: Gets called when scrolling reaches the beginning of the Browse widget.
> 
> <b>Syntax</b>
> 
> ```
onReachingBegining()  
> onReachingBegining(browser,scrollDirection)
``` 
> 
> onReachingEnd: Gets called when scrolling reaches the end of the Browse widget.
> 
> <b>Syntax</b>
> 
> ```
onReachingEnd()  
> onReachingEnd(browser,scrollDirection)
```

<b>Parameters</b>

browser - Optional

Handle to the widget reference.

scrollDirection - Optional

Specifies the direction in which the scroll box must scroll. Following are the available options:

> *   SCROLL\_VERTICAL: Specifies the CordovaBrowser widget must scroll vertical direction.
> *   SCROLL\_BOTH: Specifies the CordovaBrowser widget must scroll in both horizontal and vertical direction.

> > **_Note:_** To set the value through code, prefix the option with _constants._ such as _**constants.<option>**_ .

<b>Read/Write</b>

Read + Write

<b>Example</b>

```
//Sample callback function for onReachingBegining event under scrollingEvents.  
function onReachingBeginingCallBack(webwidget, scrollDirection) {
 alert("onReachingBegining event triggered");
}

//Sample callback function for onReachingEnd event under scrollingEvents.
function onReachingEndCallBack(webwidget, scrollDirection) {
 alert("onReachingEnd event triggered");
}  
//Sample code to set scrollingEvents Event for a CordovaBrowser widget.  
frmCBrowser.myCBrowser.scrollingEvents = {
 onReachingBegining: onReachingBeginingCallBCk,
 onReachingEnd: onReachingEndCallBck
}  

```

<b>Platform Availability</b>

*   Available on iPad platform.

* * *

</details>

