---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            

voltmx.todayExtension Functions
=============================

The voltmx.todayExtension namespace contains the following functions.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.todayExtension.setExtensionsCallbacks Function](javascript:void(0);) 

* * *

Sets a Today Extension with callbacks for app extension state changes.

Syntax

voltmx.todayExtension.setExtensionsCallbacks(  
    callbacks);

Input Parameters

callbacks

Contains an object with key-value pairs where the key specifies the extension state and value as a callback function. The following are the possible extension states.

> | Constant | Description |
> | --- | --- |
> | beginRequestWithExtensionContext | The user has selected the action. |
> | loadView | Loads a view that the controller manages. |
> | viewDidAppear | A view was just displayed. |
> | viewWillAppear | A view is about to be displayed. |
> | viewDidDisappear | A view just removed from the view heirarchy. |
> | viewWillDisappear | A view is about to be removed from the view hierarchy. |
> | widgetActiveDisplayModeDidChangeWithMaximumSize | The active display mode has changed. |
> | widgetPerformUpdate | It is time for the widget to update its state |
> 
>   

Example: loadView

{% highlight voltMx %}
function loadView()
{
    // Native Function API code
}

voltmx.todayExtension.setExtensionsCallbacks ({"loadView": loadView});

{% endhighlight %}

Example: viewDidAppear

{% highlight voltMx %}
function viewDidAppear()
{
    // Native Function API code
}

voltmx.todayExtension.setExtensionsCallbacks ({"viewDidAppear": viewDidAppear});

{% endhighlight %}

Example: viewWillAppear

{% highlight voltMx %}
function viewWillAppear()
{
    // Native Function API code
}

voltmx.todayExtension.setExtensionsCallbacks ({"viewWillAppear": viewWillAppear});

{% endhighlight %}

Example: viewDidDisappear

{% highlight voltMx %}
function viewDidDisappear()
{
    // Native Function API code
}

voltmx.todayExtension.setExtensionsCallbacks ({"viewDidDisappear": viewDidDisappear});
{% endhighlight %}

Example: viewWillDisappear

{% highlight voltMx %}
function viewWillDisappear()
{
    // Native Function API code
}

voltmx.todayExtension.setExtensionsCallbacks ({"viewWillDisappear": viewWillDisappear});
{% endhighlight %}

Example: widgetActiveDisplayModeDidChangeWithMaximumSize

{% highlight voltMx %}
function widgetActiveDisplayModeDidChangeWithMaximumSize(var var displayMode,var maxsize)	
{
    var preferredContentSize;

    if(activeDisplayMode == NCWidgetDisplayModeCompact)
    {
        preferredContentSize = {width: maxsize.CGSizeValue.width,height:300};
    }
    else
    {
        preferredContentSize = {width: maxsize.CGSizeValue.width,height:800};
    }
    return preferredContentSize;
}

voltmx.todayExtension.setExtensionsCallbacks ({"widgetActiveDisplayModeDidChangeWithMaximumSize": widgetActiveDisplayModeDidChangeWithMaximumSize});
{% endhighlight %}

Example: widgetPerformUpdate

{% highlight voltMx %}
function widgetPerformUpdate()
{
    // Native Function API code
}

voltmx.todayExtension.setExtensionsCallbacks ({"widgetPerformUpdate": widgetPerformUpdate });
{% endhighlight %}

Return Values

None.

* * *

![](resources/prettify/onload.png)
