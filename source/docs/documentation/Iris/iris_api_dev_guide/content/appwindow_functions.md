---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            

Methods
=======

The AppWindow object contains the following methods.


<details close markdown="block"><summary>enterFullScreenMode Method</summary>

* * *

This method provides a programmatic way to change the application to full screen mode. This method may not work in some cases.

<b>Syntax</b>

{% highlight VoltMx %} appWindow.enterFullScreenMode();

{% endhighlight %}

<b>Input Parameters</b>

None

<b>Return Values</b>

None.

<b>Remarks</b>

This method does not have an effect in tablet mode.

<b>Platform Availability</b>

Windows 10.

Example

{% highlight VoltMx %}
var appwindow = voltmx.application.getAppWindow(); 
appwindow.enterFullScreenMode(); 	
{% endhighlight %}

* * *

</details>
<details close markdown="block"><summary>exitFullScreenMode Method</summary>

* * *

This method provides a programmatic way to change the application to the normal resizeable view in desktop mode. This method does not have any effect in Tablet mode.

<b>Syntax</b>

{% highlight VoltMx %}

appwindow.exitFullScreenMode ();

{% endhighlight %}

<b>Input Parameters</b>

None

<b>Return Values</b>

None.

<b>Platform Availability</b>

Windows 10.

Example

{% highlight VoltMx %}
var appwindow = voltmx.application.getAppWindow(); 
appwindow.exitFullScreenMode(); 

{% endhighlight %}

* * *

</details>
<details close markdown="block"><summary>navigateBack Method</summary>

* * *

This method provides a programmatic way to navigate back to a previously visited form. This method should not be called in form and application life cycle events.

<b> Syntax </b>

{% highlight VoltMx %} appWindow.navigateBack (); {% endhighlight %}

<b>Input Parameters</b>

None

<b>Return Values</b>

None.

<b>Platform Availability</b>

Windows 10.

Example

{% highlight VoltMx %}
var appwindow = voltmx.application.getAppWindow(); 
appwindow.navigateBack(); 	
{% endhighlight %}

* * *

</details>
<details close markdown="block"><summary>resizeView Method</summary>

* * *

This method attempts to set the app window to the specified size.

<b>Syntax</b>

{% highlight VoltMx %} appWindow.resizeView(  
    windowprops);

{% endhighlight %}

<b>Input Parameters</b>

windowprops

Specifies the size of the app window.This parameter is a JSObject with the following keys. These keys are mandatory.

*   height - \[double\] The minimum height of the window.
*   width - \[double\] The minimum width of the window.

<b>Return Values</b>

None.

<b>Remarks</b>

The method may not work in all cases.This method does not have an effect in tablet mode.

<b>Platform Availability</b>

Windows 10.

Example

{% highlight VoltMx %}
var appwindow = voltmx.application.getAppWindow(); 
appwindow.resizeView({'height' : 500, 'width' : 500}); 	
{% endhighlight %}

* * *

</details>
<details close markdown="block"><summary>setPreferredMinSize Method</summary>

* * *

This method sets the smallest size allowed for the app window.

<b>Syntax</b>

{% highlight VoltMx %} appWindow.setPreferredMinSize (  
    windowprops); {% endhighlight %}

<b>Input Parameters</b>

windowprops

Specifies the smallest size allowed for the app window, or null if no minimum size is set.This parameter is a JSObject with the following keys. These keys are mandatory or null if not set.

*   height - \[double\] The minimum height of the window.
*   width - \[double\] The minimum width of the window.

<b>Return Values</b>

None.

<b>Remarks</b>

This method does not have an effect in tablet mode.

<b>Platform Availability</b>

Windows 10.

Example

{% highlight VoltMx %}
var appwindow = voltmx.application.getAppWindow(); 
appwindow.setPreferredMinSize({'height' : 100, 'width' : 200}); 	
{% endhighlight %}

* * *

</details>

![](resources/prettify/onload.png)
