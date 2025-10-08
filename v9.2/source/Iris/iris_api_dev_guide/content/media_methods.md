                            


media Methods
=============

The media Object consists of the following methods.

<h1 id="pause"></h1>

<details open markdown="block"><summary>pause</summary> 

* * *

Pauses the playback of a media file.

<b>Syntax</b>

```
pause();
```

<b>Example</b>

```
var theFile = new voltmx.io.File("MyAudioFile.mp3");
var mediaObj = voltmx.media.createFromFile(theFile);
mediaObj.pause();
```

<b>Input Parameters</b>

None.

<b>Return Values</b>

None.

<b>Remarks</b>

This method only has an effect if a media file is currently being played.

<b>Platform Availability</b>

Windows10, Android, iOS

* * *

</details>
<details open markdown="block"><summary>play</summary> 

* * *

Plays a media file.

<b>Syntax</b>

```
play(repeatCount);
```

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| _repeatCount_ | An integer specifying the number of time the media is played. The default is 1. |

 

<b>Example</b>

```
var theFile = new voltmx.io.File("MyAudioFile.mp3");
var mediaObj =  voltmx.media.createFromFile(theFile);
mediaObj.play(5);
```

<b>Return Values</b>

None.

<b>Remarks</b>

If your app calls this method and does not provide a value for the _repeatCount_ parameter, this method plays the audio file once. if the value for the _repeatCount_ parameter is negative, the file plays indefinitely. Setting the _repeatCount_ parameter to zero stops the playback. However, the recommended way to stop playback is for your app to call the [stop](#stop) or [pause](#pause) methods.

When you call the [stop](#stop) method on Android and then call `play`, there may be a noticeable lag before the file starts playing again. The delay is caused by Android preparing the media again and is therefore specific to that platform only.

<b>Platform Availability</b>

Windows10, Android, iOS

* * *

</details>
<details open markdown="block"><summary>releaseMedia</summary> 

* * *

Releases the memory and resources held by the `media` object.

<b>Syntax</b>

```
releaseMedia();
```

<b>Example</b>

```
var theFile = new voltmx.io.File("MyAudioFile.mp3");
var mediaObj = voltmx.media.createFromFile(theFile);
mediaObj.releaseMedia();
// If your app tries to use the mediaObj object again, it will get an error!
```

<b>Input Parameters</b>

None.

<b>Return Values</b>

None.

<b>Remarks</b>

Your app can call this function to save memory, especially on devices where memory is in short supply. After your app invokes this function, the `media` object is no longer in memory and attempts to continue to use it by calling its member functions result in errors. Your app must

* * *

</details>
<details open markdown="block"><summary>seek</summary> 

* * *

Sets the current playback position to a specific spot in the media file.

<b>Syntax</b>

```
seek(position);
```


<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| _position_ | An integer number of seconds within the timeline of the media object where playback begins. |

 

<b>Example</b>

```
var theFile = new voltmx.io.File("MyAudioFile.mp3");
var mediaObj = voltmx.media.createFromFile(theFile);
mediaObj.seek(5); // Moves playback to 5 seconds from the start of the file.
```

<b>Return Values</b>

None.

<b>Remarks</b>

This method moves the current playback position to a point that is a specified number of seconds from the beginning of the media. The number of seconds is specified as an integer in the _position_ parameter.

<b>Platform Availability</b>

Windows10, Android, iOS

* * *

</details>
<details open markdown="block"><summary>setCallbacks</summary>

* * *

Associates callback functions with the `media` object.

<b>Syntax</b>

```
setCallbacks(config);
```

<b>Input Parameters</b>

_config_

A JavaScript object that contains key-value pairs specifying functions to call when `media` object events occur. The keys are as follows.

| Key | Description |
| --- | --- |
| onMediaCompleted | A function that is called when the media is finished playing. For more information, see the **Remarks** section below. |
| onMediaFailed | A function that is called if the media cannot be played. For more information, see the **Remarks** section below. |
| onProgressCallBack | A function that is called when the media is playing. For more information, see the **Remarks** section below. |

<b>Example</b>

```
function OnMediaProgress(Position) {
    // Your code goes here.
}

function OnMediaCompleted() {
    alert("Completed playing given song");
}

function OnMediaFailed(errorMessage) {
    alert("Unable to play the given media");
}

function SetCallbacks() {
    var mediaObj = voltmx.media.createFromFile(fileobj);
    mediaObj.setCallbacks({
        onProgressCallBack: OnMediaProgress,
        onMediaCompleted: OnMediaCompleted,
        onMediaFailed: OnMediaFailed
    });
}
```

<b>Return Values</b>

None.

<b>Remarks</b>

The _config_ parameter of the `setCallbacks` function contains keys that specify callback functions. The callback functions are as follows.

onMediaCompleted

The `onMediaCompleted` key in the _config_ parameter of the `setCallbacks` function enables your app to set a callback function that is invoked when the media is finished being played. The callback function must have the following signature.

onMediaCompleted();

onMediaFailed

The `onMediaFailed` key in the _config_ parameter of the `setCallbacks` function enables your app to set a callback function that is invoked when the media cannot be played. The callback function must have the following signature.

onMediaFailed();

onProgressCallBack

The `onProgressCallBack` key in the _config_ parameter of the `setCallbacks` function enables your app to set a callback function that is invoked when the media plays. The callback function must have the following signature.

onProgressCallBack(Position);

where Position contains the position of the current playback at the time the callback function is triggered.

<b>Platform Availability</b>

Windows10, Android, iOS

* * *

<h1 id="stop"></h1>

</details>
<details open markdown="block"><summary>stop</summary>

* * *

Stops the playback of a media file.

<b>Syntax</b>

```
stop();
```


<b>Example</b>

```
var theFile = new voltmx.io.File("MyAudioFile.mp3");
var mediaObj = voltmx.media.createFromFile(theFile);
mediaObj.stop();
```

<b>Input Parameters</b>

None.

<b>Return Values</b>

None.

<b>Remarks</b>

This method only has an effect if a media file is currently being played.

When you call this method on Android and then call [play](#play), there may be a noticeable lag before the file starts playing again. The delay is caused by Android preparing the media again and is therefore specific to that platform only.

<b>Platform Availability</b>

Windows10, Android, iOS

* * *

</details>

![](resources/prettify/onload.png)
