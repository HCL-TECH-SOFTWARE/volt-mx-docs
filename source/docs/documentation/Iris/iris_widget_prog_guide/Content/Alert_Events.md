---
layout: "documentation"
category: "iris_widget_prog_guide"
---
                               


Alert Events
============

Alert has the following events associated with it:

* * *


<details close markdown="block"><summary>alertHandler Event</summary>

* * *

Specifies the JavaScript function that should get called when alert is dismissed either through "**Yes**" button or through "**No**" button.

### Syntax

{% highlight VoltMx %}
alertHandler
{% endhighlight %}

### Type

Event

### Read/Write

Yes - (Read and Write)

{% highlight VoltMx %}
//Sample code to set alertHandler event callback to an Alert widget.

frmAlert.myAlert.alertHandler=alertHandlerCallBck;

function alertHandlerCallBck(alert)
{
	//Write your logic here
}  

{% endhighlight %}

### Accessible from IDE

Yes

### Platform Availability

Available on all platforms

* * *
</details>

