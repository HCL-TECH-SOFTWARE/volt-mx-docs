                               


Image Events
============

Image has the following events associated with it:f

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[doLayout Event](javascript:void(0);)

* * *

This event is invoked for every widget when the widget position and dimensions are computed. This event is invoked for all the widgets placed inside flex containers. This event is invoked in the order in which the widgets are added to the widget hierarchy and expect the frame property of the widget is calculated and available for use within this event.

Syntax

doLayout()

Read/Write

Read + Write

Remarks

This event is used to set the layout properties of child widgets in the relation to self and peer widgets whose layout is not yet performed.

> **_Note:_** The number of times this event invoked may vary per platform. It is not recommended to write business logic assuming that this function is invoked only once when there is a change in positional or dimensional properties. This event will not trigger when transformations are applied though widget is moved or scaled or rotated from its original location.

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

Available on iOS and Android.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[onDownloadComplete Event](javascript:void(0);)

* * *

This event is triggered when the image download from the URL is complete.

Syntax

onDownloadComplete (widgetref,url,issuccess, context)

Parameters

widgetref \[widgetid\]

Reference to the image widget that raised the event.

url \[String\]

Specifies the requested URL.

issuccess \[Boolean\]

Indicates download completion as successful.

The onDownloadComplete event callback accepts additional parameters when an Image is placed in a segment row or section template.

context

The argument context has the following parameters.

Parameters

rowIndex \[Number\]

Optional. Index of the row that contains the Image. It is not available if the Image is placed in a section header.

sectionIndex \[Number\]

Index of the section row that contains the Image.

widgetInfo \[widgetref\]

Handle to the parent widget instance(segment) that contains the Image.

Read/Write

Read + Write

Remarks

The image can be either a bitmap or a vector graphics file.

Image files can be of GIF, animated GIF, JPG, PNG, and WebP formats.

Vector graphics are supported for the following formats on the following platforms:

*   Android supports .xml files
*   iOS supports .pdf files
*   SPA supports .svg files
*   Windows (Creators Edition) supports .svg files.

This event is not a background job which starts after setting the URL property and is called after the download is complete.

This event is only triggered when the form containing the image is visible.

Example

```
//Sample code to set a callback to the onDownloadComplete event for an Image widget.

myForm.myImage.onDownloadComplete=onDownloadCompleteCallback;

function onDownloadCompleteCallback(eventobject, imagesrc, issuccess) {
 alert("call back event triggered");
}
```

Platform Availability

Available on iOS and Android.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[onScrollWidgetPosition Event](javascript:void(0);)

* * *

This event callback is invoked by the platform when the widget location position gets changed on scrolling. The onScrollWidgetPosition event returns the positional coordinates of the widget's location with respect to the screen (screenX and screenY) and the parent container (frameX and frameY). This event is invoked asynchronously, and is not available for FlexForm widget.

Syntax

onScrollWidgetPosition()

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

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[onTouchEnd Event](javascript:void(0);)

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

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[onTouchMove Event](javascript:void(0);)

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

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[onTouchStart Event](javascript:void(0);)

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

