---
layout: "documentation"
category: "iris_widget_prog_guide"
---
                              

Menuitem Events
===============

Menuitem widget has the following event associated with it:

* * *


<details close markdown="block"><summary>onClick Event</summary>

* * *

An event callback is invoked by the platform when the user performs a click action on the Menuitem.

### Syntax

{% highlight VoltMx %}
onClick()
{% endhighlight %}

### Read/Write

Read + Write

### Example

{% highlight VoltMx %}
//Sample code to set the onClick event callback to a MenuItem widget.
frmMenuI.myMenuI.onClick=onClickCallback;
function onClickCallBack(widgetModel, itemIndex, itemData) {
 //Write your logic here.
 }
{% endhighlight %}

### Platform Availability

* Available in the IDE
* Android
* BlackBerry
* BlackBerry 10
* J2ME

* * *
</details>