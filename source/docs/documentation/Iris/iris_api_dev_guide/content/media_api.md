---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            

You are here: Media API

Media API
=========

The Media API enables your app to play and record audio files. It contains the following Namespace and objects:

*   [](voltmx.media_namespace.html)[voltmx.media Namespace](voltmx.media_functions.html)

  
| Function | Description |
| --- | --- |
| [voltmx.media.createFromFile](voltmx.media_functions.html#createFromFile) | Creates a [media object](media_object.html) from a media file on the device. |
| [voltmx.media.createFromUri](voltmx.media_functions.html#createFromUri) | Creates a [media object](media_object.html) that plays a remote audio file across the network. |
| [voltmx.media.record](voltmx.media_functions.html#record) | Creates a [record object](record_object.html) that your app can use to record audio. |

 

*   [media Object](media_object.html)

| Method | Description |
| --- | --- |
| [pause](media_methods.html#pause) | Pauses the playback of a media file. |
| [play](media_methods.html#play) | Plays a media file. |
| [releaseMedia](media_methods.html#releaseMedia) | Releases the memory and resources held by the media object. |
| [seek](media_methods.html#seek) | Sets the current playback position to a specific spot in the media file. |
| [setCallbacks](media_methods.html#setCallbacks) | Associates callback functions with the media object. |
| [stop](media_methods.html#stop) | Stops the playback of a media file. |

 

| Property | Description |
| --- | --- |
| [data](media_properties.html#data) | Holds the data object that contains the sound associated with the media object. |
| [duration](media_properties.html#duration) | Contains the duration of the audio in seconds. |
| [isPlaying](media_properties.html#isPlaying) | Contains a Boolean value that indicates whether or not the audio is currently playing. |
| [volume](media_properties.html#volume) | Contains the current volume level. |

 

*   [record Object](record_object.html)

| Method | Description |
| --- | --- |
| [startRecording](record_methods.html#startRecording) | Stops the current recording. |
| [stopRecording](record_methods.html#stopRecording) | Starts recording audio. |

Create a media object from an existing audio file using the [voltmx.media.createFromFile](voltmx.media_functions.html#createFromFile) function. To control the audio output, use the methods of media object such as [play](media_methods.html#play), [pause](media_methods.html#pause), and [stop](media_methods.html#stop). If you want to play a remote audio file across the network, create a media object by using the [voltmx.media.createFromUri](voltmx.media_functions.html#createFromUri) function. You can move the playback position to a desired point using the [seek](media_methods.html#seek) method. Using the [releaseMedia](media_methods.html#releaseMedia) method, you can delete the resources held by the media object and save memory. Further, to see a response based on a specific event, associate callback functions with the media object using the [setCallbacks](media_methods.html#setCallbacks) method.

You can configure the [duration](media_properties.html#duration), [volume](media_properties.html#volume), [data](media_properties.html#data) properties of the audio file and find whether a specific audio is playing using the [isPlaying](media_properties.html#isPlaying) property.

Further, you can record audio files using the record object. To start recording an audio file, use the [startRecording](record_methods.html#startRecording) method and to stop recording the audio file, use the [stopRecording](record_methods.html#stopRecording) object.

To view the functionality of the Media API in action, download the sample application from the link below. Once the application is downloaded, build and preview the application using the Volt MX App.  

[![](resources/images/download_button_08__002__236x35.png)](https://github.com/HCL-TECH-SOFTWARE/volt-mx-samples/tree/main/Media%20API)

 ![](resources/prettify/onload.png)
