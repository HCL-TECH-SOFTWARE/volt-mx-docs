---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            


voltmx.types Namespace
====================

The voltmx.types namespace offers the following API elements.

*   [RawBytes Object](#rawbytes-object)

RawBytes Object
---------------

The **RawBytes** Object represents the file content.

RawBytes is an opaque object that is returned from the following sources:

*   camera object: <object>.rawBytes
    
*   HttpRequest object(voltmx.net.HttpRequest): <object>.response
    
*   File object(voltmx.io.File): <object>.read()
    
*   Image object: <object>.getImageAsRawBytes() and <object>.findImageInGallery()
    
*   voltmx.convertToRawBytes()
    

 

The RawBytes Object provides the following API elements:

*   [Properties](voltmx.types_objects_rawbytes.html#properties)
*   [Functions](voltmx.types_objects_rawbytes.html#functions)
*   [Secure Text Exchange between Native Android Code and JavaScript](voltmx.types_objects.html#secure-text-exchange-between-native-android-code-and-javascript)

![](resources/prettify/onload.png)
