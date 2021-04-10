---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            


Functions
=========

Threading APIs consist of the following functions, which are a part of the [voltmx Namespace](voltmx_functions.html).

voltmx.runOnMainThread
--------------------

This API helps you run the JavaScript code on the main thread. It is an asynchronous API. It posts a message to the main thread to invoke a function f with parameters arguments.

> **_Note:_** If runonMainThread is invoked in a JavaScript function that is already running on the main thread, then the function is executed in synchronous mode.

Syntax

voltmx.runOnMainThread (f, args)

Input Parameters

  
| Parameters | Description |
| --- | --- |
| f \[Function\] - Mandatory | Specifies the callback function that must be executed. |
| args \[Array\] - Mandatory | Specifies the JavaScript array that holds the parameters to be passed to function f. |

 

Example

{% highlight voltMx %}voltmx.runOnMainThread(mainthread, []);
function mainthread () {
   voltmx.print ("Running on On Main Thread");
}
{% endhighlight %}

Return Values

None

Platform Availability

*   Android
*   iOS

voltmx.runOnWorkerThread
----------------------

Provides apps with multithreading capabilities.

Syntax

voltmx.runOnWorkerThread(f,args)

Input Parameters

| Parameters | Description |
| --- | --- |
| f | Specifies the callback function that must be executed. |
| args | Specifies an array that holds the parameters to be passed to the function indicated by the _f_  parameter. |

 

Example

{% highlight voltMx %}voltmx.runOnWorkerThread(workermethod, []);
function workermethod () {
   voltmx.print ("Running on On Worker Thread");
}
{% endhighlight %}

Return Values

None.

Remarks

This function helps you run JavaScript code asynchronously on a worker thread. It posts a message to the worker thread that owns the current JavaScript context to invoke the function specified in the _f_ parameter.

> **_Important:_** The assumption here is that main thread does not own any JavaScript context. The VM/closure thread and worker threads own the JavaScript context. When the voltmx.runOnWorkerThread is invoked from the main thread, a message is posted to the thread that originally invoked the voltmx.runOnMainThread. If the runonWorkerThread is invoked in a JavaScript function that is already running on the worker thread, then the function would be executed in synchronous mode.

Platform Availability

*   Android
*   iOS

![](resources/prettify/onload.png)
