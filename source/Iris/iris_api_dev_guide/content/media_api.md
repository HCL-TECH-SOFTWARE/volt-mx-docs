                            

You are here: Media API

Media API
=========

The Media API enables your app to play and record audio files. It contains the following Namespace and objects:

*   [](voltmx.media_namespace.md)[voltmx.media Namespace](voltmx.media_functions.md)

  
| Function | Description |
| --- | --- |
| [voltmx.media.createFromFile](voltmx.media_functions.md#createFromFile) | Creates a [media object](media_object.md) from a media file on the device. |
| [voltmx.media.createFromUri](voltmx.media_functions.md#createFromUri) | Creates a [media object](media_object.md) that plays a remote audio file across the network. |
| [voltmx.media.record](voltmx.media_functions.md#record) | Creates a [record object](record_object.md) that your app can use to record audio. |

 

*   [media Object](media_object.md)

| Method | Description |
| --- | --- |
| [pause](media_methods.md#pause) | Pauses the playback of a media file. |
| [play](media_methods.md#play) | Plays a media file. |
| [releaseMedia](media_methods.md#releaseMedia) | Releases the memory and resources held by the media object. |
| [seek](media_methods.md#seek) | Sets the current playback position to a specific spot in the media file. |
| [setCallbacks](media_methods.md#setCallbacks) | Associates callback functions with the media object. |
| [stop](media_methods.md#stop) | Stops the playback of a media file. |

 

| Property | Description |
| --- | --- |
| [data](media_properties.md#data) | Holds the data object that contains the sound associated with the media object. |
| [duration](media_properties.md#duration) | Contains the duration of the audio in seconds. |
| [isPlaying](media_properties.md#isPlaying) | Contains a Boolean value that indicates whether or not the audio is currently playing. |
| [volume](media_properties.md#volume) | Contains the current volume level. |

 

*   [record Object](record_object.md)

| Method | Description |
| --- | --- |
| [startRecording](record_methods.md#startRecording) | Stops the current recording. |
| [stopRecording](record_methods.md#stopRecording) | Starts recording audio. |

Create a media object from an existing audio file using the [voltmx.media.createFromFile](voltmx.media_functions.md#createFromFile) function. To control the audio output, use the methods of media object such as [play](media_methods.md#play), [pause](media_methods.md#pause), and [stop](media_methods.md#stop). If you want to play a remote audio file across the network, create a media object by using the [voltmx.media.createFromUri](voltmx.media_functions.md#createFromUri) function. You can move the playback position to a desired point using the [seek](media_methods.md#seek) method. Using the [releaseMedia](media_methods.md#releaseMedia) method, you can delete the resources held by the media object and save memory. Further, to see a response based on a specific event, associate callback functions with the media object using the [setCallbacks](media_methods.md#setCallbacks) method.

You can configure the [duration](media_properties.md#duration), [volume](media_properties.md#volume), [data](media_properties.md#data) properties of the audio file and find whether a specific audio is playing using the [isPlaying](media_properties.md#isPlaying) property.

Further, you can record audio files using the record object. To start recording an audio file, use the [startRecording](record_methods.md#startRecording) method and to stop recording the audio file, use the [stopRecording](record_methods.md#stopRecording) object.

To view the functionality of the Media API in action, download the sample application from the link below. Once the application is downloaded, build and preview the application using the Volt MX App.  

[![](resources/images/download_button_08__002__236x35.png)](https://github.com/HCL-TECH-SOFTWARE/volt-mx-samples/tree/main/Media%20API)

 ![](resources/prettify/onload.png)
