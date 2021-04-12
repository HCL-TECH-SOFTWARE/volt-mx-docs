---
layout: "documentation"
category: "iris_widget_prog_guide"
---
                               


Alert Events
============

Alert has the following events associated with it:

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[alertHandler Event](javascript:void(0);)

* * *

Specifies the JavaScript function that should get called when alert is dismissed either through "**Yes**" button or through "**No**" button.

Syntax

alertHandler

Type

Event

Read/Write

Yes - (Read and Write)

{% highlight voltMx %}//Sample code to set alertHandler event callback to an Alert widget.

frmAlert.myAlert.alertHandler=alertHandlerCallBck;

function alertHandlerCallBck(alert)
{
	//Write your logic here
}  

{% endhighlight %}

Accessible from IDE

Yes

Platform Availability

Available on all platforms

* * *

