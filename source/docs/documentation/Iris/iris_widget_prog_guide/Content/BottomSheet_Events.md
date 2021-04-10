---
layout: "documentation"
category: "iris_widget_prog_guide"
---
                               


BottomSheet Events
==================

The BottomSheet widget contains the following events:

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[onCollapsed Event](javascript:void(0);)

* * *

This event is called when you need to collapse a BottomSheet from its peek height.

Syntax

onCollapsed

Example

{% highlight voltMx %}//Sample code to set onCollapsed event callback for a BottomSheet widget.

frmBottomSheet.myBottomSheet.onCollapsed=onCollapseCallBack;

function onCollapseCallBack()
{
	//Write your logic here
}
{% endhighlight %}

**Platform Availability**

*   Android

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[onDismiss Event](javascript:void(0);)

* * *

This event is called when you need to dismiss a BottomSheet from the screen.

Syntax

onDismiss

Example

{% highlight voltMx %}//Sample code to set onDismiss event callback for a BottomSheet widget.

frmBottomSheet.myBottomSheet.onDismiss=onDismissCallBack;

function onDismissCallBack()
{
	//Write your logic here
}
{% endhighlight %}

**Platform Availability**

*   Android

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[onDraggingStarted Event](javascript:void(0);)

* * *

This event is called when you need to start dragging a BottomSheet to an Expanded or Collapsed state.

Syntax

onDraggingStarted

Example

{% highlight voltMx %}//Sample code to set onDraggingStarted event callback for a BottomSheet widget.

frmBottomSheet.myBottomSheet.onDraggingStarted=onDraggingStartedCallBack;

function onDraggingStartedCallBack()
{
	//Write your logic here
}
{% endhighlight %}

**Platform Availability**

*   Android

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[onExpanded Event](javascript:void(0);)

* * *

This event is called when a BottomSheet reaches its fully expanded state.

Syntax

onExpanded

Example

{% highlight voltMx %}//Sample code to set onExpanded event callback for a BottomSheet widget.

frmBottomSheet.myBottomSheet.onExpanded=onExpandCallBack;

function onExpandCallBack()
{
	//Write your logic here
}
{% endhighlight %}

**Platform Availability**

*   Android

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[onSettled Event](javascript:void(0);)

* * *

This event is called when a BottomSheet is at peek height, is expanded, or is dismissed.

Syntax

onSettled

Example

{% highlight voltMx %}//Sample code to set onSettled event callback for a BottomSheet widget.

frmBottomSheet.myBottomSheet.onSettled=onSettledCallBack;

function onSettledCallBack()
{
	//Write your logic here
}
{% endhighlight %}

**Platform Availability**

*   Android

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[onShow Event](javascript:void(0);)

* * *

This event is called when you need a BottomSheet to be displayed on the screen.

Syntax

onShow

Example

{% highlight voltMx %}//Sample code to set onShow event callback for a BottomSheet widget.

frmBottomSheet.myBottomSheet.onShow=onShowCallBack;

function onShowCallBack()
{
	//Write your logic here
}
{% endhighlight %}

**Platform Availability**

*   Android

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[onSliding Event](javascript:void(0);)

* * *

This event is called when a BottomSheet slides in/out of view.

Syntax

onSliding

Example

{% highlight voltMx %}//Sample code to set onSliding event callback for a BottomSheet widget.

frmBottomSheet.myBottomSheet.onSliding=onSlidingCallBack;

function onSlidingCallBack(offset)
{
	//Write your logic here
}
{% endhighlight %}

**Platform Availability**

*   Android

* * *

