---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            


voltmx.lang Namespace
===================

Functions
---------

The voltmx.lang namespace provides the following functions.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.lang.getUncaughtExceptionHandler](javascript:void(0);)

The voltmx.lang.getUncaughtExceptionHandler API retrieves the reference to a JavaScript function that is currently set as an exception handler for all uncaught exceptions.

Syntax

voltmx.lang.getUncaughtExceptionHandler()

**Example**

{% highlight voltMx %}var funtionObject = voltmx.lang.getUncaughtExceptionHandler();
{% endhighlight %}

**Return Values**

JavaScript value containing the function reference.

**Platform Availability**

Available in iOS and Android platforms.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.lang.setUncaughtExceptionHandler](javascript:void(0);)

The voltmx.lang.setUncaughtExceptionHandler API sets a JavaScript function as an exception handler for all uncaught exceptions. The JavaScript function takes one argument that is the JavaScript exception object. A developer can query the properties of this object like any other JavaScript object.

> **_Note:_** In Android platform ,the exceptionObject contains only **stack** and **message** properties.

**Syntax**

voltmx.lang.setUncaughtExceptionHandler([JavaScript Function Object](#JSFunctionObject))

**Input Parameters**

  
| Parameter | Description |
| --- | --- |
| JavaScript Function object \[Function\] - Mandatory | Call back function that is called when an uncaught exception is raised by JavaScript engine. |

Following is the signature of the function object: 

Function <FuncName> ( exceptionObject)  
<handler code>  
End  

**Example**

{% highlight voltMx %}function uncaughtExceptionHandler(exceptionObject) {
    // Converting exception object into a readable string
    var exceptionString = "";

    if ("sourceURL" in exceptionObject) {
        exceptionString += exceptionObject.sourceURL;
    }
    if ("line" in exceptionObject) {
        exceptionString += " line # " + exceptionObject.line;
    }
    if ("message" in exceptionObject) {
        exceptionString += " : " + exceptionObject.message;
    }

    //Logging the exception string to console
    voltmx.print("Unhandled Exception:" + exceptionString);
}

voltmx.lang.setUncaughtExceptionHandler(uncaughtExceptionHandler);
{% endhighlight %}

**Return Values**

None

**Platform Availability**

Available in iOS and Android platforms.

![](resources/prettify/onload.png)
