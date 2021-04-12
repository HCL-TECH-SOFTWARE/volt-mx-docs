---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            


record Methods
==============

The `record`object supports the following methods.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[startRecording](javascript:void(0);) 

* * *

Starts recording audio.

Syntax

startRecording();

Example

{% highlight voltMx %}function errorcallback(errorMessage) {
    var errorMesg = "Reason for the failure is: " + errorMessage;
    alert(errorMesg);
}

function successcallback(fileobj) {}

var fileObj = new voltmx.io.file("recording");

var config = {
    onSuccess: successCallback,
    onFailure: failureCallback
};

var recordObj = voltmx.media.record(fileobj, config);
recordObj.startRecording();
{% endhighlight %}

Parameters

None.

Return Values

None.

Platform Availability

Windows10, Android, iOS

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[stopRecording](javascript:void(0);) 

* * *

Stops the current recording.

Syntax

stopRecording();

Example

{% highlight voltMx %}function errorcallback(errorMessage) {
    var errorMesg = "Reason for the failure is: " + errorMessage;
    alert(errorMesg);
}

function successcallback(fileobj) {}

var fileObj = new voltmx.io.file("recording");

var config = {
    onSuccess: successCallback,
    onFailure: failureCallback
};

var recordObj = voltmx.media.record(fileobj, config);
recordObj.startRecording();

// More code goes here.

recordObj.stopRecording();
{% endhighlight %}

Parameters

None.

Return Values

None.

Remarks

This method has no effect if recording is not in progress.

Platform Availability

Windows10, Android, iOS

* * *

![](resources/prettify/onload.png)
