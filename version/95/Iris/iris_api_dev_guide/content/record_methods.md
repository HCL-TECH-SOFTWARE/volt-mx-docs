                            


record Methods
==============

The `record`object supports the following methods.


<details close markdown="block"><summary>startRecording</summary> 

* * *

Starts recording audio.

### Syntax

```

startRecording();
```

### Example

```

function errorcallback(errorMessage) {
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
```

### Parameters

None.

### Return Values

None.

### Platform Availability

Windows10, Android, iOS

* * *

</details>
<details close markdown="block"><summary>stopRecording</summary> 

* * *

Stops the current recording.

### Syntax

```

stopRecording();
```

### Example

```

function errorcallback(errorMessage) {
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
```

### Parameters

None.

### Return Values

None.

### Remarks

This method has no effect if recording is not in progress.

### Platform Availability

Windows10, Android, iOS

* * *

</details>

![](resources/prettify/onload.png)
