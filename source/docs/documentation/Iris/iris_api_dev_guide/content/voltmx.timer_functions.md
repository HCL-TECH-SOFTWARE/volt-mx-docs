---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            


voltmx.timer Namespace
====================

The voltmx.timer namespace implements the [Timer API](timer.html). It contains the following API elements.

Functions
---------

The voltmx.timer namepace provides the following functions.

voltmx.timer.cancel
-----------------

This API cancels the timer that has already been scheduled for execution.

Syntax

voltmx.timer.cancel([timerid](#timerid1))

Input Parameters

  
| Parameter | Description |
| --- | --- |
| timerid \[String\] - Mandatory | Specifies the unique ID that identifies the timer that needs to be canceled. |

 

Example

{% highlight voltMx %} /*To cancel the scheduled timer use the below code snipppet. Use the Timer ID of the
  scheduled timer to cancel the timer.
  */
  cancelTimer: function(){
    voltmx.timer.cancel("timer4");
    alert("You have successfully cancelled the timer");
  }

{% endhighlight %}

Return Values

None

Exceptions

Error

Error Codes

*   100 - invalid arguments
*   101 - internal error

Implementation Details

If the timer is waiting to be run, it will not be run the next time. If the timer is in the middle of execution, it will be allowed to complete and then canceled.

Platform Availability

Available on all platforms\*. \*Dummy Implementation on Mobile Web.

voltmx.timer.setCallBack
----------------------

This API specifies the callback function that needs to be executed for a scheduled timer. The callback function handles the logic that needs to be executed after a scheduled timer was run successfully or the scheduled timer failed to execute. The setCallBack timer API is provided to override the existing time call back function which is defined in the "schedule" timer API.

Syntax

voltmx.timer.setCallBack([timerid](#timerid), [callbackfunction](#callbackfunction))

Input Parameters

| Parameter | Description |
| --- | --- |
| timerid \[String\] - Mandatory | Specifies the unique ID that identifies the timer. |
| callbackfunction \[Function\] - Mandatory | Specifies the callback function that needs to be executed. |

 

Example

{% highlight voltMx %}//This function is called when you use the setCallBack Timer API  
  callbackfunction: function(){
    alert("Hello World");
  },
  
  //To set a callback function for a scheduled timer, use the below code snippet.
  setCallBackTimer: function(){
    voltmx.timer.setCallBack("timer4", this.callbackfunction);
  },
{% endhighlight %}

Return Values

None

Exceptions

Error

Platform Availability

Available on all platforms\*. \*Dummy Implementation on Mobile Web.

* * *

voltmx.timer.schedule
-------------------

This API executes the given function after a specified interval of time.

Use Cases

You can use this API when you want to execute a function after a specified interval of time. i.e, for example to run a specific function for every 15 seconds.

Syntax

voltmx.timer.schedule([timerid](#timerid2), [functionObj](#functionObj), [interval](#interval), [repeat](#repeat))

Input Parameters

| Parameter | Description |
| --- | --- |
| timerid \[String\] - Mandatory | Specifies the unique ID that identifies the timer. |
| functionObj \[Function\] - Mandatory | Specifies the function that needs to be executed. |
| interval \[Number\] - Mandatory | Specifies the time in seconds after which the function needs to be executed. |
| repeat \[Boolean\] - Mandatory | Specifies a flag that indicates if the function needs to executed once or repeated._true_ - indicates that the execution of the function needs to repeated at regular intervals_false_ - indicates that the function needs to be executed just once |

Example

{% highlight voltMx %}  //This function is called when you schedule the timer
  generateAlert: function(){
    alert("You have generated an alert after 3 seconds ");
  },
  //To schedule a timer to display an alert after 3 seconds use the below snippet.
  scheduleTimer: function(){  
    voltmx.timer.schedule("timer4",this.generateAlert, 3, true);
  },

{% endhighlight %}

Return Values

None

Exceptions

Error

Platform Availability

Available on all platforms\*. \*Dummy Implementation on Mobile Web.

![](resources/prettify/onload.png)
