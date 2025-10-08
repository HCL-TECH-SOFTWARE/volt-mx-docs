                            


record Object
=============

The record object is part of [Media API](media_api.md), and it enables your app to record audio. It consists of the following API elements:

*   [Methods](record_methods.md)

Overview
--------

Use the [voltmx.media.record](voltmx.media_functions.md#record) function to create a record object. Once your app creates a `record` object, it can call the `record` object methods to start or stop recording audio.

### Android-Specific Behaviors

When a `record` object is recording audio, playing an audio file causes the `record` object to stop and save the recording. This occurs whenever a phone call is initiated or received, or when a notification or alarm sound is played. If the recording is successfully saved, the `onSuccess` callback that your app set in the _config_ parameter of the [voltmx.media.record](voltmx.media_functions.md#record) function is automatically invoked. If the recording cannot be saved, the `onFailure` callback, which your app also set in the _config_ parameter of the `voltmx.media.record` function, is invoked instead.

It is possible, for whatever reason, for the device to begin recording audio while your app is recording. In such a case, the `record` object in your app stops recording and saves the audio it has captured to a file.

![](resources/prettify/onload.png)
