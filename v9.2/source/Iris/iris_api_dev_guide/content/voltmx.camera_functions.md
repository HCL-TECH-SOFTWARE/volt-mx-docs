                              


voltmx.camera Namespace
=====================

The voltmx.camera namespace contains the following API elements.

Functions
---------

The voltmx.camera namespace contains the following functions.


<details close markdown="block"><summary>voltmx.camera.releaseRawBytes</summary>

* * *

This function enables your app to delete rawbytes for the image.

### Syntax

```

voltmx.camera.releaseRawBytes(  
    rawBytes)
```

### Input Parameters
 
| Parameter | Description |
| --- | --- |
| rawBytes | A JavaScript objects that specifies the rawbytes of the image (captured from the camera) you want to release. This can be a [voltmx.types.RawBytes](voltmx.types_objects_rawbytes.md) object or an [Image](image_object.md) object. |

### Example

```

var cameraBytes = this.view.camera3.rawBytes;
voltmx.camera.releaseRawBytes(cameraBytes);
if (this.view.camera3.rawBytes == null) {
    alert("The rawbytes are released");
} else {
    alert("The raw bytes could not be released");
}
```

### Return Values

None.

### Remarks

Apps typically call this function to ensure that the data from captured images does not overwhelm the device's memory capacity, causing the app to slow down or crash.

This function deletes the captured image from the disk or on-device memory. The image data cannot be used or released again by your app. If multiple handles to the same block of rawbytes exist and you release the rawbytes using any one of those handles, it is released for all of the handles. Therefore, none of the handles are usable by your app. If your app attempts to release rawbytes that have already been released, it will throw an exception.

Before your app releases an image's rawbytes, it should check to ensure that the handle associated with the block of rawbytes is not null. After your app releases an image's rawbytes, it should assign the value of null to the handle.

If you assign a handle to new rawbytes without releasing the rawbytes that the handle is currently pointing to, the access to the previous rawbytes is lost and will be released only at the time of application termination. To avoid such a scenario, your app should :

> *   Initialize the rawbytes handle to null before use.
> *   Before assigning the rawbytes, ensure that the rawbytes handle is null.

### Platform Availability

*   Android
*   iOS
*   Windows
*   DesktopWeb/ResponsiveWeb

* * *
</details>

![](resources/prettify/onload.png)

