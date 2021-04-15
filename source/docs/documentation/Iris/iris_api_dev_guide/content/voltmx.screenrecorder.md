---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            


voltmx.screenrecorder Namespace
=============================

The voltmx.screenrecorder namespace, helps you to implement the screen record feature of WebRTC in your web apps.

You can use the functions available in the voltmx.screenrecorder namespace to [start](#start), [pause](#pause), [resume](#resume), and [stop](#stop) the screen recording. To know the current state of the recording, use the [getrecordedstate](#getrecordedstate) API. After the screen recording has been completed, use the [getrecordeddata](#getrecordeddata) API to fetch the video as a Blob URL.

The APIs in voltmx.screenrecorder namespace are applicable only for the Desktop Web platform.

> **_Note:_** This feature is currently supported only in Google Chrome ( v72 and later) , Mozilla Firefox( v66 ) and Opera(v60).

Functions
---------

The voltmx.screenrecorder namespace contains the following functions.


<details close markdown="block"><summary>voltmx.screenrecorder.start</summary> 

* * *

You can use the _start_ API to initiate the recording of the screen. When this method is invoked, the web browser asks for permission to select the window, tab, or screen.

<b>Syntax</b>

{% highlight VoltMx %}
voltmx.screenrecorder.start(config);
{% endhighlight %}

<b>Parameters</b>

_config_

The _config_ parameter consists of a JavaScript object. It contains the following attributes.

  
| Attributes | Description |
| --- | --- |
| framerate | Framerate is the number of consecutive images/ frames that appears on a screen per second. The default value is 30fps. This is an optional parameter. |
| onFailure | onFailure contains the callback that is invoked when an error occurs while recording, For example, this callback is invoked when the web browser does not support the screen recording feature. This is an optional parameter. |

The callback for the `onFailure` key must have the following signature.

onFailureCallback(err);

here, the `err` parameter is a string that contains the reason for the failure.

<b>Example</b>

{% highlight VoltMx %}config = {
 framerate: 24,
 onFailure: function(err) {  
//Sample code for onFailure callback, where err contains the error message.
  voltmx.print("Error :" + err);
 } 
};
voltmx.screenrecorder.start(config);
{% endhighlight %}

<b>Return Values</b>

None

* * *

</details>
<details close markdown="block"><summary>voltmx.screenrecorder.pause</summary> 

* * *

You can use the _pause_ API to temporarily stop the recording of the screen. You can restart the recording process by using the [resume](#resume) API.

<b>Syntax</b>

{% highlight VoltMx %}
voltmx.screenrecorder.pause();
{% endhighlight %}


<b>Parameters</b>

None

<b>Example</b>

{% highlight VoltMx %} voltmx.screenrecorder.pause();	
{% endhighlight %}

<b>Return Values</b>

None

* * *

</details>
<details close markdown="block"><summary>voltmx.screenrecorder.resume</summary> 

* * *

You can use the _resume_ API to restart the screen recording after the [pause](#pause) API has been invoked.

<b>Syntax</b>

{% highlight VoltMx %}
voltmx.screenrecorder.resume();
{% endhighlight %}

<b>Parameters</b>

None

<b>Example</b>

{% highlight VoltMx %} voltmx.screenrecorder.resume();	
{% endhighlight %}

<b>Return Values</b>

None

* * *

</details>
<details close markdown="block"><summary>voltmx.screenrecorder.stop</summary> 

* * *

You can use the _stop_ API to end the screen recording. After the recording process is stopped, you can use the [getrecordeddata](#getrecordeddata) API to retrieve the Blob URL of the video.

<b>Syntax</b>

{% highlight VoltMx %}
voltmx.screenrecorder.stop();
{% endhighlight %}


<b>Parameters</b>

None

<b>Example</b>

{% highlight VoltMx %} voltmx.screenrecorder.stop();	
{% endhighlight %}

<b>Return Values</b>

None

<b>Remarks</b>

*   After you have invoked the stop API, invoke the [getrecordeddata](#getrecordeddata) API to retrieve the screen recording. If you invoke the [start](#start) API before invoking the getrecordeddata API, the new recording overrides the previous recording. The previous recording is not retained and you will lose the data.

* * *

</details>
<details close markdown="block"><summary>voltmx.screenrecorder.getrecordeddata</summary> 

* * *

You can use the _getrecordeddata_ API to retrieve the screen recording in the form of a Blob URL.

<b>Syntax</b>

{% highlight VoltMx %}
voltmx.screenrecorder.getrecordeddata();
{% endhighlight %}

<b>Parameters</b>

None

<b>Example</b>

{% highlight VoltMx %}var blob = voltmx.screenrecorder.getrecordeddata();
{% endhighlight %}

<b>Return Values</b>

Returns a Blob URL of the screen recording as a String.

> **_Note:_** In the Opera(v60) web browser, if you assign the Blob URL of the screen recording to the [source]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Video_Basic_Properties.html#source) property of the Video widget, the recording may not start. This is because the Opera(v60) web browser has a technical limitation while playing an HTML5 video.

* * *

</details>
<details close markdown="block"><summary>voltmx.screenrecorder.getrecordedstate</summary> 

* * *

You can use the _getrecordedstate_ API to retrieve the current state of the screen recording.

<b>Syntax</b>

{% highlight VoltMx %}
voltmx.screenrecorder.getrecordedstate();
{% endhighlight %}

<b>Parameters</b>

None

<b>Example</b>

{% highlight VoltMx %}var state = voltmx.screenrecorder.getrecordingstate();
{% endhighlight %}

<b>Return Values</b>

This API can return any one of the following values.

  
| State | Description |
| --- | --- |
| inactive | The screen recording has not started or it has been stopped. |
| paused | The screen recording has been paused. |
| recording | The screen is being recorded. |

* * *

</details>

![](resources/prettify/onload.png)
