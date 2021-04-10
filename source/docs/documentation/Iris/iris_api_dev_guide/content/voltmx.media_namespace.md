---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            

voltmx.media Namespace
====================

The `voltmx.media` namespace, together with the media object and the record object, implements the functionality of the [Media API](media_api.html).

Your app uses the functions in the `voltmx.media` namespace to create [media](media_object.html) and [record](record_object.html) objects. It calls the [createFromFile](voltmx.media_functions.html#createFromFile) and [createFromUri](voltmx.media_functions.html#createFromUri) functions to instantiate media objects and associate media objects with files. The files can exist either locally on the device or remotely across the network or Internet.

To record audio to a file, your app uses the [voltmx.media.record](voltmx.media_functions.html#record) function to create a `record` object.

![](resources/prettify/onload.png)
