---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            


voltmx.media Namespace
====================

The `voltmx.media` namespace, together with the media object and the record object, implements the functionality of the [Media API](media_api.html).

Your app uses the functions in the `voltmx.media` namespace to create [media](media_object.html) and [record](record_object.html) objects. It calls the [createFromFile](#createFromFile) and [createFromUri](#createFromUri) functions to instantiate media objects and associate media objects with files. The files can exist either locally on the device or remotely across the network or Internet.

To record audio to a file, your app uses the [voltmx.media.record](#record) function to create a `record` object.

Functions
---------

The voltmx.media namespace contains the following functions.

<details close markdown="block"><summary>voltmx.media.createFromFile</summary> 

* * *

Creates a [media object](media_object.html) from a media file on the device.

### Syntax

{% highlight VoltMx %}
voltmx.media.createFromFile(  
    fileobj)
{% endhighlight %}

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| fileobj | An object of type [voltmx.io.File](voltmx.io.file_namespace.html) that specifies the file that the created `media` object will play. |

### Example

{% highlight VoltMx %}
var fileObj = new voltmx.io.File("MyAudioFile.mp3");
var mediaObj = voltmx.media.createFromFile(fileObj);
{% endhighlight %}

### Return Values

Returns a [media object](media_object.html) that is associated with a specific file on the device, or null if the object was not created.

### Remarks

This function has platform-specific behaviors when there are errors. In particular, when the _fileObj_ parameter refers to a file that doesn't exist on iOS, iOS generates an error with the message string "Unable to play the media file". However, if this error occurs on Android, no error message is generated. Instead, this function does not create the `media` object.

### Platform Availability

Windows10, Android, iOS

* * *

</details>
<details close markdown="block"><summary>voltmx.media.createFromUri</summary> 

* * *

Creates a [media object](media_object.html) that plays a remote audio file across the network.

### Syntax

{% highlight VoltMx %}
voltmx.media.createFromUri(  
    uriString)
{% endhighlight %}

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| _uriString_ | A string containing the URI of the remote audio file. |

### Example

{% highlight VoltMx %}
var mediaObj = voltmx.media.createFromUri(url);
{% endhighlight %}

### Return Values

Returns a [media object](media_object.html) that is associated with a remote audio file, or null if the object was not created.

### Platform Availability

Windows10, Android, iOS

* * *

</details>
<details close markdown="block"><summary>voltmx.media.record</summary> 

* * *

Creates a [record object](record_object.html) that your app can use to record audio.

### Syntax

The syntax for native platforms is as follows.

{% highlight VoltMx %}
voltmx.media.record(fileobj,config)
{% endhighlight %}

The syntax for Desktop Web is as follows.

{% highlight VoltMx %}
voltmx.media.record(config)
{% endhighlight %}

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| _fileobj_ | A `voltmx.io.file` object into which the recording will be saved. |
| _config_ | An optional object that contains configuration information for the `record` object. For more information, see [Remarks](#Remarks) below. |

 
### Example

{% highlight VoltMx %}
function errorcallback(errorMessage) {
    var errorMesg = "Reason for failure is : " + errorMessage;
    alert(errorMesg);
}

function successcallback(fileobj) {
    // Your code goes here.
}

var fileObj = new voltmx.io.file("recording");

var config = {
    onSuccess: successCallback,
    onFailure: failureCallback
};

var _recordObj = voltmx.media.record(fileObj, config);
{% endhighlight %}

### Return Values

Returns an instantiated `record` object, or null if the object was not created.

### Remarks

Use the `voltmx.media.record` function to instantiate a record object that your app can use to record audio on the device.

### Parameter Details

The _config_ parameter contains an object with configuration information. Specifically, it contains key-value pairs that set callbacks which are invoked by the `voltmx.media.record` function. The _config_ parameter supports the following keys.

| Key | Description |
| --- | --- |
| onFailure | The callback function that is invoked when the `voltmx.media.record` function is not able to create a `record` object. |
| onSuccess | The callback function that is invoked when the `voltmx.media.record` function successfully creates a `record` object. |

The callback for the `onFailure` key must have the following signature.

{% highlight VoltMx %}
onFailureCallback(errorMessage);
{% endhighlight %}

where the `errorMessage` parameter is a string containing the reason for the failure.

The callback for the `onSuccess` key must have the following signature.

{% highlight VoltMx %}
onSuccessCallback(fileobj);
{% endhighlight %}

where the `fileobj` parameter is an object of type `voltmx.io.file` that represents the file the audio is recorded into.

The callback for the onSuccess key must have the following signature in Desktop Web platform.

{% highlight VoltMx %}
onSuccessCallback(audiobytes);
{% endhighlight %}

here, the `audiobytes` parameter contains the recorded audio as Blob URL.

Platform-Specific Notes

The following platform-specific features should be considered when using this function.

*   **iOS**: Your app must enable recording before it calls this function. To enable recording, it invokes the [voltmx.application.checkPermission(voltmx.os.RESOURCE\_AUDIO\_RECORD,null)](voltmx.application_functions.html#checkPermission) function. In addition, the file extension of the audio file for the recording is set to `.aiff`, irrespective of the extension specified in the user's input.
*   **Android**: You must add the `RECORD_AUDIO` permission into your app's manifest. On Android 6.0 or later, this will result in the operating system displaying a dialog box asking the user to confirm this permission at runtime. In addition, the file extension of the audio file for the recording is set to `.m4a` no matter what the user input specifies.
*   **Windows**: To enable your app to record audio, you must add the "Micriphone" capability in the app's properties.
*   **Desktop Web**: If you are creating more than one `record` object at the same time, the `audiobytes` parameter returns only the last recording of all `onSuccess` callbacks.

### Platform Availability

Windows10, Android, iOS, and Desktop Web

* * *

![](resources/prettify/onload.png)

</details>