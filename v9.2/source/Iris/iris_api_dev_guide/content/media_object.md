                            


media Object
============

The `media` object is part of the [Media API](media_api.md), and it represents an audio file. Using a `media` object , your app can play the associated audio file, pause it, and so forth. It consists of the following API elements:

*   [Methods](media_methods.md)
*   [Properties](media_properties.md)

Overview
--------

Use the [voltmx.media.createFromFile](voltmx.media_functions.md#createFromFile) or [voltmx.media.createFromUri](voltmx.media_functions.md#createFromUri) functions to instantiate a `media` object. Once your app creates a `media` object, it can call the media object methods to play, pause, or stop the audio playback, and so forth.

### Android-Specific Behaviors

Only one audio file can be played at a time. If your app is playing an audio file and it starts a new one, the current playback is paused until the new file is played. Your app can resume the playback of the paused audio file from the current position by calling the [media](#) object's [play](media_methods.md#play) method.

If a `media` object is playing and a call (incoming or outgoing) or alarm occurs, the `media` object automatically pauses the playback until the call or alarm ends. At that time, playback resumes automatically from the current location in the audio file.

If a `media` object is playing and an SMS (text) message or a notification occurs, the `media` object automatically lowers the volume of the current audio file until the text message sound or notification sound has finished. At that point, the `media` object automatically raises the playback volume to its former level.

![](resources/prettify/onload.png)
