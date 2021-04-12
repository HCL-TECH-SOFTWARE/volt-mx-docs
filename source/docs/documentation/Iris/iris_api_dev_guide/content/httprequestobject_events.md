---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            

Event
=====

The HttpRequest object contains the following event.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[onReadyStateChange Event](javascript:void(0);) 

* * *

Specifies a callback function that is invoked when there is a change in the state of the [readyState](httprequestobject_properties.html#readyState) property.

Syntax

onReadyStateChange()

Parameters

None.

Return Values

None.

Remarks

Your app can set this event to a function that performs custom processing whenever there is is a change of state in the HttpRequest object.

Example

{% highlight voltMx %}var request = new voltmx.new.HttpRequest();
request.onReadyStateChange = callbackfunction;		
{% endhighlight %}

* * *

![](resources/prettify/onload.png)
