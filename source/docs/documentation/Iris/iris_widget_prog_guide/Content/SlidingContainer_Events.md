---
layout: "documentation"
category: "iris_widget_prog_guide"
---
                              


SlidingContainer Events
=======================

The SlidingContainer Widget has the following events associated with it.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[commandPanelClosed Event](javascript:void(0);)

* * *

The event is invoked by the platform when the command panel is closed.

Syntax

commandPanelClosed()

Read/Write

Read + Write

Example

{% highlight voltMx %}//Sample code to set the commandPanelClosed event callback to a SlidingContainer widget.

frmSlidingC.mySlidingC.commandPanelClosed=commandPanelClosedCallBack;
function commandPanelClosedCallBack(){
  //Write your logic here.
 }

{% endhighlight %}

Platform Availability

Windows

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[commandPanelClosing Event](javascript:void(0);)

* * *

The event is invoked by the platform when the command panel is about to close.

Syntax

commandPanelClosing()

Read/Write

Read + Write

Example

{% highlight voltMx %}//Sample code to set the commandPanelClosing event callback to a SlidingContainer widget.

frmSlidingC.mySlidingC.commandPanelClosing=commandPanelClosingCallBack;
function commandPanelClosingCallBack(){
  //Write your logic here.
 }

{% endhighlight %}

Platform Availability

Windows

* * *

