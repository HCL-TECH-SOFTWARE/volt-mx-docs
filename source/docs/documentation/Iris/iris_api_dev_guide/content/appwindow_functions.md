---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            

Methods
=======

The AppWindow object contains the following methods.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[enterFullScreenMode Method](javascript:void(0);)

* * *

This method provides a programmatic way to change the application to full screen mode. This method may not work in some cases.

Syntax

appWindow.enterFullScreenMode()

Input Parameters

None

Return Values

None.

Remarks

This method does not have an effect in tablet mode.

Platform Availability

Windows 10.

Example

{% highlight voltMx %}
var appwindow = voltmx.application.getAppWindow(); 
appwindow.enterFullScreenMode(); 	
{% endhighlight %}

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[exitFullScreenMode Method](javascript:void(0);)

* * *

This method provides a programmatic way to change the application to the normal resizeable view in desktop mode. This method does not have any effect in Tablet mode.

Syntax

appwindow.exitFullScreenMode()

Input Parameters

None

Return Values

None.

Platform Availability

Windows 10.

Example

{% highlight voltMx %}
var appwindow = voltmx.application.getAppWindow(); 
appwindow.exitFullScreenMode(); 

{% endhighlight %}

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[navigateBack Method](javascript:void(0);)

* * *

This method provides a programmatic way to navigate back to a previously visited form. This method should not be called in form and application life cycle events.

Syntax

appWindow.navigateBack()

Input Parameters

None

Return Values

None.

Platform Availability

Windows 10.

Example

{% highlight voltMx %}
var appwindow = voltmx.application.getAppWindow(); 
appwindow.navigateBack(); 	
{% endhighlight %}

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[resizeView Method](javascript:void(0);)

* * *

This method attempts to set the app window to the specified size.

Syntax

appWindow.resizeView(  
    windowprops)

Input Parameters

windowprops

Specifies the size of the app window.This parameter is a JSObject with the following keys. These keys are mandatory.

*   height - \[double\] The minimum height of the window.
*   width - \[double\] The minimum width of the window.

Return Values

None.

Remarks

The method may not work in all cases.This method does not have an effect in tablet mode.

Platform Availability

Windows 10.

Example

{% highlight voltMx %}
var appwindow = voltmx.application.getAppWindow(); 
appwindow.resizeView({'height' : 500, 'width' : 500}); 	
{% endhighlight %}

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[setPreferredMinSize Method](javascript:void(0);)

* * *

This method sets the smallest size allowed for the app window.

Syntax

appWindow.setPreferredMinSize(  
    windowprops)

Input Parameters

windowprops

Specifies the smallest size allowed for the app window, or null if no minimum size is set.This parameter is a JSObject with the following keys. These keys are mandatory or null if not set.

*   height - \[double\] The minimum height of the window.
*   width - \[double\] The minimum width of the window.

Return Values

None.

Remarks

This method does not have an effect in tablet mode.

Platform Availability

Windows 10.

Example

{% highlight voltMx %}
var appwindow = voltmx.application.getAppWindow(); 
appwindow.setPreferredMinSize({'height' : 100, 'width' : 200}); 	
{% endhighlight %}

* * *

![](resources/prettify/onload.png)
