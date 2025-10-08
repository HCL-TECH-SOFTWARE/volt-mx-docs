                            


voltmx.media Namespace
====================

The `voltmx.media` namespace, together with the media object and the record object, implements the functionality of the [Media API](media_api.md).

Your app uses the functions in the `voltmx.media` namespace to create [media](media_object.md) and [record](record_object.md) objects. It calls the [createFromFile](#createfromfile1) and [createFromUri](#createfromuri) functions to instantiate media objects and associate media objects with files. The files can exist either locally on the device or remotely across the network or Internet.

To record audio to a file, your app uses the 
[voltmx media record](#record1) 
function to create a `record` object.

Functions
---------

The voltmx.media namespace contains the following functions.

<h1 id="createfromfile1"></h1>

<details open markdown="block"><summary>voltmx.media.createFromFile</summary> 

* * *

Creates a [media object](media_object.md) from a media file on the device.

### Syntax

```

voltmx.media.createFromFile(  
    fileobj,psp)
```

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| fileobj | An object of type [voltmx.io.File](voltmx.io.file_namespace.md) that specifies the file that the created `media` object will play. |
| psp [Optional] | A JSON Object that contains the key-value pairs for the [AVAudioSession Category](#avaudiosession-category) and [AVAudioSession Category Options](#avaudiosession-category-options) parameters.<br><br> **_Note:_** The psp parameter is only applicable for the iOS platform.<br><br> The default value of the **AVAudioSession Category** is voltmx.media.AUDIO_SESSION_CATEGORY_PLAY_AND_RECORD. The **AVAudioSession Category Options** is an array of category options with the default value <br>voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_MIX_WITH_OTHERS and voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_DEFAULT_TO_SPEAKER. |

### Example 1

```
var fileObj = new voltmx.io.File("MyAudioFile.mp3");
var mediaObj = voltmx.media.createFromFile(fileObj);

```

### Example 2

```
var fileObj = new voltmx.io.File("MyAudioFile.mp3");
var psp = {
"category": voltmx.media.AUDIO_SESSION_CATEGORY_PLAY_AND_RECORD,
"options": [voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_DEFAULT_TO_SPEAKER,voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_ALLOW_BLUETOOTH_A2DP,voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_MIX_WITH_OTHERS]
     }
var mediaObj = voltmx.media.createFromFile(fileObj,psp);

```

### Return Values

Returns a [media object](media_object.md) that is associated with a specific file on the device, or null if the object was not created.

### Remarks

This function has platform-specific behaviors when there are errors. In particular, when the _fileObj_ parameter refers to a file that doesn't exist on iOS, iOS generates an error with the message string "Unable to play the media file". However, if this error occurs on Android, no error message is generated. Instead, this function does not create the `media` object.

### Parameter Details

The psp parameter is an object that contains key-value pairs for the [AVAudioSession Category](#avaudiosession-category) and [AVAudioSession Category Options](#avaudiosession-category-options) parameters.

The structure of the psp parameter is as follows:

```
psp Structure:{

"category" : <category_name>

"options"  : [categoryOptions]

}

```

> **_Note:_** If the value of the options parameter is not an array, the default value<br> (voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_MIX_WITH_OTHERS and voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_DEFAULT_TO_SPEAKER) is assigned to the options parameter.

<h1 id="avaudiosession-category"></h1>

The **AVAudioSession Category** parameter supports the following values.

| Constant | Description |
| --- | --- |
| voltmx.media.AUDIO_SESSION_CATEGORY_AMBIENT | This category indicates that the sound playback for the app is non-primary. This means that the app will work even with the sound turned-off.<br>When you use this category, audio from other apps gets mixed with the current audio.The audio is silenced when you lock the screen or use the Silent switch (the Ring/Silent switch on iPhones). |
| voltmx.media.AUDIO_SESSION_CATEGORY_SOLO_AMBIENT | This category indicates that the audio from the app is non-mix-able. This means that when you activate an audio session, it interrupts all the other audio sessions that are non-mix-able.If you want to allow audio mixing, you must use the voltmx.media.AUDIO_SESSION_CATEGORY_AMBIENT category.The audio is silenced when you lock the screen or use the Silent switch (the Ring/Silent switch on iPhones). |
| voltmx.media.AUDIO_SESSION_CATEGORY_PLAYBACK | Use this category for playing recorded music or other sounds that are central to the successful use of your app.This category indicates that the audio from the app is non-mix-able. This means that when you activate an audio session, it interrupts all the other audio sessions that are non-mix-able.If you want to allow audio mixing, you must use the voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_MIX_WITH_OTHERS category.<br>When you use this category, the audio of the app continues to play even when you lock the screen or use the Silent switch (the Ring/Silent switch on iPhones). |
| voltmx.media.AUDIO_SESSION_CATEGORY_PLAY_AND_RECORD | Use this category in scenarios where recording (input) and playback (output) of audio must be performed simultaneously. However, you can also use this category in apps that record and then play back the audio.This category indicates that the audio from the app is non-mix-able. This means that when you activate an audio session, it interrupts all the other audio sessions that are non-mix-able.If you want to allow audio mixing, you must use the voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_MIX_WITH_OTHERS category.<br>When you use this category, the audio of the app continues to play or get recorded even when you lock the screen or use the Silent switch (the Ring/Silent switch on iPhones). |
| voltmx.media.AUDIO_SESSION_CATEGORY_MULTIROUTE | Use this category to route distinct streams of audio data to different output devices at the same time. |

<h1 id="avaudiosession-category-options"></h1>

The **AVAudioSession Category Options** parameter supports the following values.

| Constant | Description |
| --- | --- |
| voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_MIX_WITH_OTHERS | An option that indicates whether the audio from the current session mixes with the audio from active sessions in other audio apps. |
| voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_DUCK_OTHERS | An option that reduces the volume of other audio sessions while audio from the current session plays. |
| voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_ALLOW_BLUETOOTH | An option that determines whether Bluetooth hands-free devices can appear as available input routes. |
| voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_DEFAULT_TO_SPEAKER | An option that determines whether audio from the current session must use the default built-in speaker instead of the receiver. |
| voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_INTERRUPT_SPOKEN_AUDIO_AND_MIX_WITH_OTHERS | An option that determines whether spoken audio content from other sessions must be paused when the app plays its audio. |
| voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_ALLOW_BLUETOOTH_A2DP | An option that determines whether you can stream audio from the current session to Bluetooth devices that support the Advanced Audio Distribution Profile (A2DP). |
| voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_ALLOW_AIR_PLAY | An option that determines whether you can stream audio from the current session to AirPlay devices. |
| voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_OVERRIDE_MUTED_MICROPHONE_INTERRUPTION | An option that indicates whether the system interrupts the audio session when the built-in microphone is muted. |

### Platform Availability

Windows10, Android, iOS

* * *

<h1 id="createfromuri"></h1>


</details>
<details open markdown="block"><summary>voltmx.media.createFromUri</summary> 

* * *

Creates a [media object](media_object.md) that plays a remote audio file across the network.

### Syntax

```

voltmx.media.createFromUri(  
    uriString,psp)
```

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| _uriString_ | A string containing the URI of the remote audio file. |
| psp [Optional] | A JSON Object that contains the key-value pairs for the [AVAudioSessions Category](#avaudiosessions-category) and [AVAudioSession Category Option](#avaudiosession-category-option) parameters.<br><br>**_Note:_** The psp parameter is only applicable for the iOS platform.<br><br>The default value of the **AVAudioSession Category** is voltmx.media.AUDIO_SESSION_CATEGORY_PLAY_AND_RECORD. The **AVAudioSession Category Options** is an array of category options with the default value<br> voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_MIX_WITH_OTHERS and<br> voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_DEFAULT_TO_SPEAKER.|

### Example 1
```
var mediaObj = voltmx.media.createFromUri(url);

```
### Example 2
```
var psp = {
"category": voltmx.media.AUDIO_SESSION_CATEGORY_PLAY_AND_RECORD,
"options": [voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_DEFAULT_TO_SPEAKER,voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_ALLOW_BLUETOOTH_A2DP,voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_MIX_WITH_OTHERS]
}
var mediaObj = voltmx.media.createFromUri(url,psp);

```
### Return Values

Returns a [media object]() that is associated with a remote audio file, or null if the object was not created.

### Remarks

### Parameter Details ###

The psp parameter is an object that contains key-value pairs for the [AVAudioSessions Category](#avaudiosessions-category) and [AVAudioSession Category Option](#avaudiosession-category-option) parameters.

The structure of the psp parameter is as follows:

```
psp Structure:{

"category" : <category_name>

"options"  : [categoryOptions]

}

```
> **_Note:_** If the value of the options parameter is not an array, the default value<br>(voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_MIX_WITH_OTHERS and<br>voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_DEFAULT_TO_SPEAKER) is assigned to the options parameter.

<h1 id="avaudiosessions-category"></h1>

The **AVAudioSessions Category** parameter supports the following values.

| Parameter | Description |
| --- | --- |
| voltmx.media.AUDIO_SESSION_CATEGORY_AMBIENT | This category indicates that the sound playback for the app is non-primary. This means that the app will work even with the sound turned-off.<br>When you use this category, audio from other apps gets mixed with the current audio.<br>The audio is silenced when you lock the screen or use the Silent switch (the Ring/Silent switch on iPhones). |
| voltmx.media.AUDIO_SESSION_CATEGORY_SOLO_AMBIENT | This category indicates that the audio from the app is non-mix-able. This means that when you activate an audio session, it interrupts all the other audio sessions that are non-mix-able.If you want to allow audio mixing, you must use the voltmx.media.AUDIO_SESSION_CATEGORY_AMBIENT category.The audio is silenced when you lock the screen or use the Silent switch (the Ring/Silent switch on iPhones). |
| voltmx.media.AUDIO_SESSION_CATEGORY_PLAYBACK | Use this category for playing recorded music or other sounds that are central to the successful use of your app.This category indicates that the audio from the app is non-mix-able. This means that when you activate an audio session, it interrupts all the other audio sessions that are non-mix-able.If you want to allow audio mixing, you must use the voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_MIX_WITH_OTHERS category.<br>When you use this category, the audio of the app continues to play even when you lock the screen or use the Silent switch (the Ring/Silent switch on iPhones). |
| voltmx.media.AUDIO_SESSION_CATEGORY_PLAY_AND_RECORD | Use this category in scenarios where recording (input) and playback (output) of audio must be performed simultaneously. However, you can also use this category in apps that record and then play back the audio.This category indicates that the audio from the app is non-mix-able. This means that when you activate an audio session, it interrupts all the other audio sessions that are non-mix-able.If you want to allow audio mixing, you must use the voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_MIX_WITH_OTHERS category.<br>When you use this category, the audio of the app continues to play or get recorded even when you lock the screen or use the Silent switch (the Ring/Silent switch on iPhones). |
| voltmx.media.AUDIO_SESSION_CATEGORY_MULTIROUTE | Use this category to route distinct streams of audio data to different output devices at the same time.
 |
 
 <h1 id="avaudiosession-category-option"></h1>

The **AVAudioSession Category Option** parameter supports the following values.

| Parameter | Description |
| --- | --- |
| voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_MIX_WITH_OTHERS | An option that indicates whether the audio from the current session mixes with the audio from active sessions in other audio apps. |
| voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_DUCK_OTHERS | An option that reduces the volume of other audio sessions while audio from the current session plays. |
| voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_ALLOW_BLUETOOTH | An option that determines whether Bluetooth hands-free devices can appear as available input routes. |
| voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_DEFAULT_TO_SPEAKER | An option that determines whether audio from the current session must use the default built-in speaker instead of the receiver. |
| voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_INTERRUPT_SPOKEN_AUDIO_AND_MIX_WITH_OTHERS | An option that determines whether spoken audio content from other sessions must be paused when the app plays its audio. |
| voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_ALLOW_BLUETOOTH_A2DP | An option that determines whether you can stream audio from the current session to Bluetooth devices that support the Advanced Audio Distribution Profile (A2DP). |
| voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_ALLOW_AIR_PLAY | An option that determines whether you can stream audio from the current session to AirPlay devices. |
| voltmx.media.AUDIO_SESSION_CATEGORY_OPTIONS_OVERRIDE_MUTED_MICROPHONE_INTERRUPTION | An option that indicates whether the system interrupts the audio session when the built-in microphone is muted. |

### Platform Availability

Windows10, Android, iOS

* * *


<h1 id="record1"></h1>


</details>
<details open markdown="block"><summary>voltmx.media.record</summary> 

* * *

Creates a [record object](record_object.md) that your app can use to record audio.

### Syntax

The syntax for native platforms is as follows.

```

voltmx.media.record(fileobj,config)
```

The syntax for Desktop Web is as follows.

```

voltmx.media.record(config)
```


### Input Parameters

  
| Parameter | Description |
| --- | --- |
| _fileobj_ | A `voltmx.io.file` object into which the recording will be saved. |
| _config_ | An optional object that contains configuration information for the `record` object. For more information, see [Remarks](#remark) below. |

 
### Example

```

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
```

### Return Values

Returns an instantiated `record` object, or null if the object was not created.


### Remark

Use the `voltmx.media.record` function to instantiate a record object that your app can use to record audio on the device.

### Parameter Details

The _config_ parameter contains an object with configuration information. Specifically, it contains key-value pairs that set callbacks which are invoked by the `voltmx.media.record` function. The _config_ parameter supports the following keys.

| Key | Description |
| --- | --- |
| onFailure | The callback function that is invoked when the `voltmx.media.record` function is not able to create a `record` object. |
| onSuccess | The callback function that is invoked when the `voltmx.media.record` function successfully creates a `record` object. |

The callback for the `onFailure` key must have the following signature.

```

onFailureCallback(errorMessage);
```

where the `errorMessage` parameter is a string containing the reason for the failure.

The callback for the `onSuccess` key must have the following signature.

```

onSuccessCallback(fileobj);
```

where the `fileobj` parameter is an object of type `voltmx.io.file` that represents the file the audio is recorded into.

The callback for the onSuccess key must have the following signature in Desktop Web platform.

```

onSuccessCallback(audiobytes);
```

here, the `audiobytes` parameter contains the recorded audio as Blob URL.

### Platform-Specific Notes

The following platform-specific features should be considered when using this function.

*   **iOS**: Your app must enable recording before it calls this function. To enable recording, it invokes the [voltmx.application.checkPermission(voltmx.os.RESOURCE\_AUDIO\_RECORD,null)](voltmx.application_functions.md#checkPermission) function. In addition, the file extension of the audio file for the recording is set to `.aiff`, irrespective of the extension specified in the user's input.
*   **Android**: You must add the `RECORD_AUDIO` permission into your app's manifest. On Android 6.0 or later, this will result in the operating system displaying a dialog box asking the user to confirm this permission at runtime. In addition, the file extension of the audio file for the recording is set to `.m4a` no matter what the user input specifies.
*   **Windows**: To enable your app to record audio, you must add the "Micriphone" capability in the app's properties.
*   **Desktop Web**: If you are creating more than one `record` object at the same time, the `audiobytes` parameter returns only the last recording of all `onSuccess` callbacks.

### Platform Availability

Windows10, Android, iOS, and Desktop Web

* * *

![](resources/prettify/onload.png)

</details>