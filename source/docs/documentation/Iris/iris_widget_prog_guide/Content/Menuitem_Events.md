---
layout: "documentation"
category: "iris_widget_prog_guide"
---
                              

Menuitem Events
===============

Menuitem widget has the following event associated with it:

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[onClick Event](javascript:void(0);)

* * *

An event callback is invoked by the platform when the user performs a click action on the Menuitem.

Syntax

onClick()

Read/Write

Read + Write

Example

{% highlight voltMx %}//Sample code to set the onClick event callback to a MenuItem widget.

frmMenuI.myMenuI.onClick=onClickCallback;
function onClickCallBack(widgetModel, itemIndex, itemData) {
 //Write your logic here.
 }
{% endhighlight %}

Platform Availability

*   Available in the IDE
*   Android
*   BlackBerry
*   BlackBerry 10
*   J2ME

* * *

