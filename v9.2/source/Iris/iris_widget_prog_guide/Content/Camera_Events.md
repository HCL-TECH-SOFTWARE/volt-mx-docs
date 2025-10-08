                                 


Camera Events
=============

The Camera Widget has the following event associated with it:

* * *


<details close markdown="block"><summary>doLayout Event</summary>

* * *

This event is invoked for every widget when the widget position and dimensions are computed. This event is invoked for all the widgets placed inside flex containers. This event is invoked in the order in which the widgets are added to the widget hierarchy and expect the frame property of the widget is calculated and available for use within this event.

<b>Syntax</b>

```

doLayout()
```

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

> **_Note:_** The number of times this event invoked may vary per platform. It is not recommended to write business logic assuming that this function is invoked only once when there is a change in positional or dimensional properties. This event will not trigger when transformations are applied though widget is moved or scaled or rotated from its original location.

This event is used to set the layout properties of child widgets in the relation to self and peer widgets whose layout is not yet performed.

<b>Example</b>

```
//Sample code to set doLayout event callback to a button widget.
/*This code changes the top property of button2 and makes it appear below button1.*/
myForm.button1.doLayout=doLayoutButton1;


function doLayoutButton1(){
      
    myForm.button2.top = myForm.button1.frame.height;
}
```

<b>Platform Availability</b>

*   iOS, Android, Windows, and SPA

* * *

</details>
<details close markdown="block"><summary>onCapture Event</summary>

* * *

The onCapture event invokes a callback when a user takes a photo using the Camera widget.

<b>Syntax</b>

```

onCapture()
```

<b>Parameters</b>

_camera_\- \[String\]- Applicable for iOS and Android platforms.

This parameter specifies the handle (ID) of the Camera widget that triggered the onCapture event.

_metadata_\- Applicable for the iOS and the Android platforms.

This parameter contains the following information about the captured image as key-value pairs:

> *   height\[Number\]- Returns the height of the captured image.
> *   width\[Number\]- Returns the width of the captured image.
> *   dateTime\[String\]- Returns the data and time when the image was captured. The dateTime parameter has the date and time in the following format: YYYY:MM:DD HH:MM:SS.
> *   exifVersion\[String\]- Returns the EXIF (Exchangeable image file format) version of the captured image, if present.
> *   location\[Object\]- Returns the latitude and longitude of the location where the image was captured. The latitude and longitude are given as key-value pairs. The _location_ parameter is applicable only for the Android platform.  
>     If you want to access the location information of an image, ensure that you declare and request foreground location access on the device (by using the ACCESS\_FINE\_LOCATION or the ACCESS\_COARSE\_LOCATION permissions).  
>     
>     > **_Note:_** In Android apps that targetSDK API level 29 (Android 10) or later, you must additionally declare the ACCESS\_MEDIA\_LOCATION permission in the Android Manifest File. This additional permission is required when the app is running on Android 10 or later devices. To add the ACCESS\_MEDIA\_LOCATION permission, navigate to Iris **Project Settings** > **Native** > **Android Mobile/Tablet**, and add the following tag in the Child tag entries under <manifest> tag field:  
>     `<uses-permission android:name="android.permission.ACCESS_MEDIA_LOCATION" />`
>     
> *   orientation\[constant\]- Returns a constant that indicates the direction in which the image stored on the device is rotated.
> *   dateTimeInMilliSeconds\[Number\]- Returns the number of milliseconds from Jan 1st 1970 to image captured time in UTC.

The following table contains the constants returned using the _orientation_ parameter and their definitions:

  
| Constant | Definition |
| --- | --- |
| constants. CAMERA\_IMAGE\_ORIENTATION\_UP | The orientation in the original pixel data and the current orientation of the image is the same. |
| constants. CAMERA\_IMAGE\_ORIENTATION\_DOWN | The image has been rotated by 180 degrees. |
| constants. CAMERA\_IMAGE\_ORIENTATION\_LEFT | The image has been rotated by 90 degrees in the counterclockwise direction. |
| constants. CAMERA\_IMAGE\_ORIENTATION\_RIGHT | The image has been rotated by 90 degrees in the clockwise direction. |
| constants. CAMERA\_IMAGE\_ORIENTATION\_UP\_MIRRORED | The image has been flipped horizontally. |
| constants. CAMERA\_IMAGE\_ORIENTATION\_DOWN\_MIRRORED | The image has been flipped vertically. |
| constants. CAMERA\_IMAGE\_ORIENTATION\_LEFT\_MIRRORED | The image has been rotated by 90 degrees in the clockwise direction and then flipped horizontally. |
| constants. CAMERA\_IMAGE\_ORIENTATION\_RIGHT\_MIRRORED | The image has been rotated by 90 degrees in the counterclockwise direction and then flipped horizontally. |
| constants. CAMERA\_IMAGE\_ORIENTATION\_UNKNOWN | It was not possible to retrieve the image orientation from the exif data. This constant is applicable only for the Android platform. |

<b>Read/Write</b>

Read + Write

<b>Example</b>

```
/*Sample code to set onCapture event callback for Camera widget in iOS and Android platforms.*/

frmCamera.myCamera.onCapture = onCaptureCallBck;

function onCaptureCallBck(camera, metadata) {

 if (metadata["orientation"]) == constants.CAMERA_IMAGE_ORIENTATION_UP) {
 var dateTime = metadata["dateTime"];
 var height = metadata["height"];
 var width = metadata["width"];
 var version = metadata["exifVersion"];
 var location = metadata["location"];
 if (location !== null || location !== undefined) {
  var latitude = location["latitude"];
  var longitude = location["longitude"];
 }
}
voltmx.print("The date and time of the image capture is:" + dateTime);
voltmx.print("The height of the image is:" + height + "and the width of the image is:" + width);
voltmx.print("The exif version of the image is:" + version);
voltmx.print("The latitude of the location of the captured image is:" + latitude);
voltmx.print("The longitude of the location of the captured image is:" + longitude);
}
```
```
/\*Sample code to set onCapture event callback for Camera widget for platforms other than iOS and Android.\*/

frmCamera.myCamera.onCapture=onCaptureCallBck;

function onCaptureCallBck(camera){
      
   //Write your code here.
}
```

<b>Platform Availability</b>

*   Available in the IDE.
*   Android, iOS, Windows, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>onCaptureFailed Event</summary>

* * *

An event callback is invoked when the user has tapped on Don't Allow over permission alert and also when camera privacy is turned off under iPhone settings. If the user taps on Allow for the very first time it will immediately open the camera screen. Camera screen will not be shown until the user has set the permission. Callback will be invoked asynchronously when user selects Don't Allow over permission alert.

The camera permission alert shows up once in app lifecycle. Upgrading or deleting or reinstalling the app will not trigger the alert, if it has already been shown.

For subsequent camera access, onCaptureFailed is called with status as RESOURCE\_ACCESS\_STATUS\_DENIED if the user has selected as Don't Allow for the first time or when camera privacy is turned off under iPhone settings.

<b>Syntax</b>

```

onCaptureFailed()
```

<b>Read/Write</b>

Read + Write

<b>Example</b>

```
//Sample code to set onCaptureFailed event callback for Camera widget.

frmCamera.myCamera.onCaptureFailed=onCaptureFailedCallBck;

function onCaptureFailedCallBck(camera){
      
   //Write your code here.
}
```

<b>Platform Availability</b>

*   Not available in the IDE.
*   iOS and Desktop Web

* * *

</details>
<details close markdown="block"><summary>onFailure Event</summary>

* * *

An event callback is invoked when an error occurs using a camera widget. For example, you set a camera source, but it is not available on the device.

<b>Syntax</b>

```

onFailure()
```

<b>Optional Parameters</b>

source \[widgetref\]

Handle to the widget reference.

errorcode \[Number\]

Specifies the error code. The options are:

  
| Error code | Platform | Description |
| --- | --- | --- |
| constants.CAMERA\_SOURCE\_FRONT\_UNAVAILABLE | iOS, Android,Desktop Web | When the front camera is not available. |
| constants.CAMERA\_SOURCE\_REAR\_UNAVAILABLE | iOS, Android, Desktop Web | When the rear camera is not available. |
| constants.CAMERA\_SOURCE\_UNAVAILABLE | iOS, Android | When camera source is not available. It is useful when the cameraSource is configured as constants.CAMERA\_SOURCE\_DEFAULT |
| constants.CAMERA\_PREVIEW\_UNAVAILABLE | iOS, Android | When the camera preview is not available. |
| constants.CAMERA\_CAPTURE\_FAILED | iOS, Android, Desktop Web | When the camera failed to capture a video. |
| constants.CAMERA\_VIDEO\_LOW\_DISC\_SPACE | Android | When the disk space is low. |
| constants.CAMERA\_VIDEO\_RECORDING\_FAILED | Android, Desktop Web | When a recording is failed. |
| constants.CAMERA\_VIDEO\_SAVE\_FAILED | iOS | When the captured video cannot not be saved. For example, insufficient permission to the app to access camera. |
| constants.CAMERA\_ACCESS\_MODE\_INMEMORY\_DATA\_RETRIEVE\_FAILED | iOS | When the captured media cannot be held in memory because of size constraints. |
| constants.CAMERA\_PERMISSION\_DENIED | Desktop Web | When the user denies permission to access the device camera. |
| constants.CAMERA\_NOT\_SUPPORTED | Desktop Web | When the web browser does not have camera support. |

<b>Read/Write</b>

Read + Write

<b>Example</b>

```
//Sample code to set onFailure event callback for Camera widget.

frmCamera.myCamera.onFailure=onFailureCallBck;

function onFailureCallBck(camera, errorcode){
      
   //Write your code here.
}
```

<b>Platform Availability</b>

*   Not available in the IDE
*   iOS, Android, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>onImageSaveFailed Event</summary>

* * *

An event callback is invoked when the user has performed some action over permission alert and also when image cannot be saved to photo album or due to data save error.

<b>Syntax</b>

```

onImageSaveFailed()
```

<b>Read/Write</b>

Read + Write

<b>Example</b>

```
//Sample code to set onImageSaveFailed event callback for Camera widget.

frmCamera.myCamera.onImageSaveFailed=onImageSaveFailedCallBck;

function onImageSaveFailedCallBck(camera, status){
      
   //Write your code here.
}
```

<b>Platform Availability</b>

Not available in the IDE.

Available on iOS platform.

* * *

</details>
<details close markdown="block"><summary>onTouchEnd Event</summary>

* * *

An event callback is invoked by the platform when the user touch is released from the touch surface.

<b>Syntax</b>

```

onTouchEnd ()
```

<b>Optional Parameters</b>

source

Handle to the widget reference on which the user touch has ended.

x

Specifies the x-coordinate with in the widget with respect to widget's co-ordinate system. It is a number indicating device independent pixel.

y

Specifies the y- coordinate with in the widget with respect to widget's co-ordinate system. It is a number indicating device independent pixel.

contextInfo

On devices that support 3D Touch, specifies a key-value pair where the value specifies the force of the touch. The value 1.0 represents the force of an average touch, as determined by the system.

> **_Note:_** 3D Touch is available only on iOS 9.0 and later.

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

This event is invoked asynchronously.

<b>Example</b>

```
function onTouchEndCallback(source, x, y, contextInfo) {
    if (contextInfo) {
        var force = contextInfo[“force”];
        voltmx.print(“value of force is” + force)
    }
}
Form1.widget1.onTouchEnd = onTouchEndCallback;
```

<b>Platform Availability</b>

*   iOS, Android, Windows, and SPA

* * *

</details>
<details close markdown="block"><summary>onTouchMove Event</summary>

* * *

An event callback is invoked by the platform when the touch moves on the touch surface continuously until movement ends.

<b>Syntax</b>

```

onTouchMove ()
```

<b>Optional Parameters</b>

source

Handle to the widget reference on which touch moves.

x

Specifies the x-coordinate with in the widget with respect to widget's co-ordinate system. It is a number indicating device independent pixel.

y

Specifies the y- coordinate with in the widget with respect to widget's co-ordinate system. It is a number indicating device independent pixel.

contextInfo

On devices that support 3D Touch, specifies a key-value pair where the value specifies the force of the touch. The value 1.0 represents the force of an average touch, as determined by the system.

> **_Note:_** 3D Touch is available only on iOS 9.0 and later.

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

This event is invoked asynchronously.

<b>Example</b>

```
function onTouchMoveCallback(source, x, y, contextInfo) {
    if (contextInfo) {
        var force = contextInfo[“force”];
        voltmx.print(“value of force is” + force)
    }
    Form1.widget1.onTouchMove = onTouchMoveCallback;  

```

<b>Platform Availability</b>

*   iOS, Android, Windows, and SPA

* * *

</details>
<details close markdown="block"><summary>onTouchStart Event</summary>

* * *

An event callback is invoked by the platform when the user touches the touch surface.

<b>Syntax</b>

```

onTouchStart ()
```

<b>Optional Parameters</b>

source

Handle to the widget reference on which the user touches.

x

Specifies the X co-ordinate with in the widget with respect to widget's co-ordinate system. It is a number indicating device independent pixel.

y

Specifies the Y co-ordinate with in the widget with respect to widget's co-ordinate system. It is a number indicating device independent pixel.

contextInfo

On devices that support 3D Touch, specifies a key-value pair where the value specifies the force of the touch. The value 1.0 represents the force of an average touch, as determined by the system.

> **_Note:_** 3D Touch is available only on iOS 9.0 and later.

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

This event is invoked asynchronously.

<b>Example</b>

```
function onTouchStartCallback(source, x, y, contextInfo) {
    if (contextInfo) {
        var force = contextInfo[“force”];
        voltmx.print(“value of force is” + force)
    }
}
Form1.widget1.onTouchStart = onTouchStartCallback;  

```

<b>Platform Availability</b>

*   iOS, Android, Windows, and SPA

* * *
</details>

