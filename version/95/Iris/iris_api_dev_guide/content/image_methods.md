
image Object
============

The image Object, not to be confused with the Image Widget, is a JavaScript object that retrieves images as raw bytes. It provides the following API element:

Methods
-------

The image Object contains the following methods.

<details close markdown="block"><summary>compress Method</summary> 

* * *

Compresses an image by the specified compression ratio.

### Syntax

```

<<imageObject>>.compress(compressionRatio)
```

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| compressionRatio | A floating point value that specifies the amount of compression to use. |

### Example

```

var imgObj = voltmx.image.createImage(rawBytes);
imgObj.compress(0.8);

```

### Return Values

None.

### Remarks

This method compresses the Image object's bitmap using the JPEG compression algorithm. The floating point value in the _compressionRatio_ parameter must be in the range of 0.0<=_compressionRatio_<=1.0. If _compressionRatio_ is 0.0, this method uses the minimum amount of compression. A value of 1.0 specifies the maximum amount of compression. Values outside the allowed range will be clamped to the nearest valid value. The compression data size that this method produces will vary depending on the hardware platform.

### Availability

Available on iOS and Android.

</details>
<details close markdown="block"><summary>cropToRect Method</summary>

* * *

This method crops the bitmap contained by the Image object to the size of the input rectangle.

### Syntax

```

cropToRect(  
    array)
```

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| array | An array of integers specifying the cropping rectangle in the order (x,y,width,height). |

### Example

```

var imgObj = voltmx.image.createImage(rawBytes);
imgObj.cropToRect([0, 0, 720, 720]);

```

### Return Values

None.

### Remarks

This method crops the current Image object's bitmap to the size of the rectangle specified in the _array_ parameter, altering the bitmap in the process.

If there is no intersection between the Image object's bitmap and the rectangle in the _array_ parameter, then no cropping is performed.

### Availability

Available on iOS and Android.

* * *

</details>
<details close markdown="block"><summary>findImageInGallery Method</summary> 

* * *

Searches for and retrieves and image in the device's gallery of pictures.  


<blockquote>
    <em><b>Note: </b></em>
    <ul>      
        <li>For Android if the target SDK version is 33 and higher, below media permission is required in tags section under Application tags attributes inside android project settings. <br> 
        <code> &lt;uses-permission android:name="android.permission.READ_MEDIA_IMAGES"/&gt;</code>
        </li>
    </ul>
</blockquote>


### Syntax

```

findImageInGallery(  
    config)
```

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| config | A JavaScript object containing the information needed to search for the image. This object holds the following key-value pairs.albumName: An optional string that specifies the album to search. Not used on iOS. imageName: A string that holds the file name (including the extension) of the image file to search for. |

 

### Example

```

var imgObj = voltmx.image.createImage("src.png");
imgObj.writeToGallery();

var uniqueImgIdentifier;

function onSuccess(uniqueIdentifier) {
    uniqueImgIdentifier = uniqueIdentifier;
}

config = {
    ImageName: uniqueImgIdentifier
};

var rawBytesObj = findImageInGallery(config);
```

### Return Values

Returns an object of type voltmx.types.RawBytes that contains the RawBytes image data if the file exists, or `null` if the file is not found.

### Exceptions

| Value | Description |
| --- | --- |
| 100 | Either `albumName` or `imageName` was not of type String. |

* * *

</details>
<details close markdown="block"><summary>getImageAsRawBytes Method</summary> 

* * *

Retrieves the image height as an integer.

### Syntax

```

getImageAsRawBytes(  
    encodingFormat)
```

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| encodingFormat | A constant from the Image Format Constants in the voltmx.image namespace that specifies the format of the bitmap image. |

 

### Example

```

var imgobj = voltmx.image.createimage(rawbytes);
var imgobj = voltmx.image.createimage(form1.camera1.rawbytes);
imgobj.writetomediagallery();
var uniqueimgidentifier;

function onsuccess(uniqueidentifier) {
    uniqueimgidentifier = uniqueidentifier;
}
config = {
    imagename: uniqueimgidentifier
};

var rawbytesobj = voltmx.image.findimageingallery(config);
form1.img1.rawbytes = rawbytesobj;
```

### Return Values

The Image object's bitmap in RawBytes format if an image format is specified. If not, this method returns the RawBytes data in a platform-specific formats.

### Availability

Available on iOS and Android.

</details>
<details close markdown="block"><summary>getImageHeight Method</summary> 

* * *

Retrieves the image height as an integer.

### Syntax

```

getImageHeight();
```

### Example

```

var imgObj = voltmx.image.createImage(rawBytes);
var imgHeight = imgObj.getImageHeight();
voltmx.print("Image height is:" + imgHeight);
form1.img1.rawbytes = rawbytesobj;
```

### Input Parameters

None.

### Return Values

An integer that specifies the height of the Image.

### Availability

Available on iOS and Android.

</details>
<details close markdown="block"><summary>getImageWidth Method</summary> 

* * *

Retrieves the image width as an integer.

### Syntax

```

getImageWidth();
```

### Example

```

var imgObj = voltmx.image.createImage(rawBytes);  
var imgWidth = imgObj.getImageWidth();  
voltmx.print("Image width is:" + imgWidth);
```

### Input Parameters

None.

### Return Values

An integer that specifies the object of the Image.

### Availability

Available on iOS and Android.

</details>
<details close markdown="block"><summary>releaseImage Method</summary> 

* * *

Removes the internal image from the image object.

### Syntax

```

<<imageObject>>.releaseImage()
```

### Example

```

var imgObj = voltmx.image.createImage(rawB);
imgObj.releaseImage();

```

### Input Parameters

None.

### Return Values

None.

### Availability

Available on iOS.

</details>
<details close markdown="block"><summary>rotate Method</summary> 

* * *

Rotates an imageObject either in a clockwise or counter-clockwise manner, depending on the specified rotation degree. In addition, you can use this API on Windows platform to crop the edges of the rotated image based on the provided cropImage value.

### Syntax

```

<<imageObject>>.rotate(degree, cropImage)
```

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| degree \[Number\] - Mandatory | The degree by which the imageObject is to be rotated. You can specify any number for the degree parameter: positive or negative. For positive number: rotation occurs in a clockwise manner. For negative number: rotation occurs in a counter-clockwise manner. For example, rotate(90) ,rotate(-90) , rotate(355.5), and rotate(367.5). |
| cropImage \[Boolean\] - Optional | If cropImage is true, the rotated imageObject is cropped at the edges; otherwise, the imageObject is not cropped. The default value for cropImage is false.For example, rotate(45, true) and rotate(-145, false). |

 

### Example

```

//Rotate image without crop filter applied  
var imageObject = voltmx.image.createImage("Image.png");  
imageObject.rotate(45);  
  
//Rotate image without crop filter applied  
var imageObject = voltmx.image.createImage("Image.png");
imageObject.rotate(45, true);
```

### Return Values

None.

### Remarks

*   The rotate API does not return a new rotated image, instead it rotates the received image.
    

### Limitations

*   The cropImage parameter is applicable only for the Windows platform.

### Platform Availability

*   iOS
*   Android
*   Windows

</details>
<details close markdown="block"><summary>scale Method</summary> 

* * *

Scales the bitmap in the current Image object to a larger or smaller size.

### Syntax

```

scale(scaleFactor)
```

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| scaleFactor | A floating point number that is used to scale the bitmap to a larger or smaller size. |

 

### Example

```

var imgObj = voltmx.image.createImage(rawB);
imgObj.scale(0.4);

```

### Return Values

None.

### Remarks

The floating point number in the _scaleFactor_ parameter cannot be less than zero. If it is in the range 0.0<=_scaleFactor_<1.0, the bitmap size will be reduced. Depending on the hardware and the size of the bitmap, distortion or blurring of the image can occur when it is reduced. If _scaleFactor_ equals 1, this method does nothing.

When your app sets _scaleFactor_ to a value greater than 1.0, the size of the bitmap increases. Values greater than 2.0 may result into memory warnings on some platforms. The resultant image quality may differ on platforms due to interpolation algorithms used.

### Availability

Available on iOS and Android.

</details>
<details close markdown="block"><summary>writeToMediaGallery Method</summary> 

* * *

Writes an image to device's media gallery.  


<blockquote>
    <em><b>Note: </b></em>
    <ul>      
        <li>For Android if the target SDK version is 33 and higher, below media permission is required in tags section under Application tags attributes inside android project settings. <br> 
        <code> &lt;uses-permission android:name="android.permission.READ_MEDIA_IMAGES"/&gt;</code>
        </li>
    </ul>
</blockquote>


### Syntax

```

writeToMediaGallery(  
    config)
```

### Input Parameters

_config_

Optional. A dictionary with configurable properties. If you do not specify the config parameter as an argument, the images will be written to the default public location based on the device's OS. You can pass the following properties in the config parameter.

  
| Key | Description |
| --- | --- |
| albumName \[Optional\] | A string that specifies a sub-folder name under the media gallery folder to save images into. You can make use of the property in the following cases:You can directly define a name to the album. In this case, when you call the API, a folder with the name that you defined is created under the media gallery, and then the image is saved to the folder.You can directly define a name to the album. In this case, when you call the API, a folder with the name that you defined is created under the media gallery, and then the image is saved to the folder.> **_Note:_** If you do not specify the albumName property in the config parameter, the images will be written to the default public location based on the device's OS.On iOS devices, the images are saved to the `Camera Roll` folder.On Android and Windows devices, the images are saved to the `Pictures` folder.> **_Note:_** If the value of the albumName key is not of String type, an exception is thrown with error code as '100' with the message "Invalid argument." |
| imageName \[Optional\] | A string that specifies a name to an image with which the image should be written to the gallery. The image will be saved to the gallery with the given name without any extension. If any extension is given along with the image name, an exception is thrown with error code '100' with the message "Invalid argument." The cases defined for the albumName property is also applies to the imageName property.If no name is specified to the image, the SDK will give a name to the image, and then write to the gallery.The property is respected only in Windows and Android platforms.> **_Note:_** If the value of the imageName key is not of String type, an exception is thrown with error code as '100' with the message "Invalid argument." |
| extensionType \[Optional\] | A constant that specifies the file format type of the image in which the image should be saved to the gallery. The following are the file format constants that you can specify:voltmx.image.ENCODE\_JPEG: the image will be saved in JPEG format.voltmx.image.ENCODE\_PNG: the image will be saved in PNG format.The default value of the property is voltmx.image.ENCODE\_JPEG.This parameter is available on all platforms. |
| handleRecoverableException \[Optional\] | A Boolean value that handles the **RecoverableSecurityException** that occurs when the [overwrite](#overwrite) parameter is used to overwrite an image that is owned by another app. `true`: Displays the system permission dialog box that requests confirmation to overwrite the image.If the user grants permission to overwrite, the image is overwritten. If the user denies permission to overwrite, the same RecoverableSecurityException will be passed to the error callback. `false`: The RecoverableSecurityException is not handled and the default error message `(Failed to insert/update the image)` is passed to the error callback. The default value of the property is `false`. > **_Note:_** This is an Android-specific parameter and is only applicable on Android 10 (and later) devices. |
| overwrite \[Optional\] | A Boolean value that specifies whether or not to overwrite existing images.`true`: overwrites the image if already exists with the name specified for a new image.`false`: Appends time stamp to the specified image name if already an image exists with same name; then the image is saved to the gallery.The default value of the property is `false`.This parameter is available only for Android and Windows platforms.> **_Note:_** If the value of the overwrite key is not of Boolean type, an exception is thrown with error code as '100' with the message "Invalid argument." |
| onSuccess \[Optional\] | A callback function that is invoked when writing the image to the media gallery is successful. You can define your own logic in the callback function. For example, you can define an alert message stating "your photo saved successfully."This parameter is available on all platforms.On IOS, a local device-specific unique identifier (910E7DBE-1DB0-455F-93B3-4500AA93042F/L0/001) is a string of the written image from the media gallery. In case of Android and Windows platform, the image name is returned. |
| onFailure \[Optional\] | A callback function is invoked when this function has failed to write an image to the media gallery. When it is invoked, the callback is passed a failure status and an error message. The failure status values can be one of the following.voltmx.application.PERMISSION\_DENIED: The app does not have required permissions to access the media gallery.voltmx.image.SAVE\_FAILED: The app failed to save an image to the media gallery.voltmx.image.INSUFFICIENT\_STORAGE: There is no enough space in the media gallery.voltmx.image.SAVE\_FAILED\_RECOVERABLE: The app failed to overwrite an image that is owned by another app. This error occurs only on Android devices when the handleRecoverableException key is set to true.This parameter is available on all platforms.Example (onFailure)if (statusOfFailure == voltmx.application.PERMISSION\_DENIED) { { } else if (statusOfFailure == voltmx.image.SAVE\_FAILED) { } else if (statusOfFailure == voltmx.image.INSUFFICIENT\_STORAGE) { } voltmx.print("reason for the failure" + errorMessage); } |

 

### Example

```

var config =

{
    albumName: "MyAlbum",
    extensionType: voltmx.image.ENCODE_PNG,
    onSuccess: successCallback2,
    onFailure: failureCallback2
};
var imgName = "sample.png";
var img = voltmx.image.createImage(imgName);
img.writeToMediaGallery(config);
```

### Return Values

None.

### Remarks

You can make use of the `writeToImageGallery` function when end user wants to save an image from your app to device's gallery. The image gets saved to media gallery based on the properties you pass in the `config` parameter. If you do not pass the `config` parameter to the function, the image gets saved to the device's public location.

On iOS, there is no loss of image quality when you call the `writeToImageGallery` function.

Your app may require runtime permissions to access the device's media gallery. For more information on checking, requesting, and obtaining runtime permissions, please see [Runtime Permissions API](runtime_permissions.md).

### Limitations

### iOS

To use the `writeToImageGallery` function for the iOS platform, open the the app's Info.plist and define the key NSPhotoLibraryUsageDescription. Add reason for accessing the media gallery as a string value to the key. Otherwise, the app crashes.

### Android

The directory path of the primary external storage is dependent on the device. When your app calls the `writeToImageGallery` function , the function accesses the device's external storage to save the image. Generally, the external storage is an SD card inserted into the device that can store relatively large amount of data. There is also the possibility that the devices uses built-in storage that is distinct from the protected internal storage. The `writeToImageGallery` function uses the directory path of the external storage provided by the device's OS for saving images.

### Platform Availability

Android

iOS 8 and later versions

Windows

</details>

![](resources/prettify/onload.png)
