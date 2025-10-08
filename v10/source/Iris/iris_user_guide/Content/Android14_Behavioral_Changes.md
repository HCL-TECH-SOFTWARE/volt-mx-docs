# Android 14 Behavioral Changes

## Grant partial access to photos and videos

Android 14 introduces Selected Photos Access, which allows users to grant apps access to specific images and videos in their library, rather than granting access to all media of a given type.

Android 14 introduced new permission 
<b>Manifest.permission#READ_MEDIA_VISUAL_USER_SELECTED</b> to grant partial access to photos and videos in their library, rather than granting access to all media of a given type. User can partially allow access to media by selecting images or videos from default pickerView . If the permission is not declared, though user allow partial access to media system does not allow to access files.

To experience this feature, App developer have to add below permission in IRIS project setting -> Android Mobile/Tablet -> Tags(Child tag entries under < manifest > tag)

`<uses-permission android:name="android.permission.READ_MEDIA_VISUAL_USER_SELECTED"/>`

### Permission need to be added for below API’s, please refer the API documentation for more details.

*  voltmx.phone.openMediaGallery
*  voltmx.io.File.remove
*  voltmx.io.File.rename
*  voltmx.io.File.createDirectory
*  voltmx.io.File.getFileList
*  ImageObject.writeToMediaGallery
*  ImageObject.findImageInGallery

> **_Note:_**  It is recommended to add this permission for all apps which are running on Android 14 devices irrespective of target version.


For existing target 13 or 12 applications , on upgraded Android 14 devices by default permission is granted until the user removes permission on the device. 

Please click [here](https://developer.android.com/about/versions/14/changes/partial-photo-video-access#compatibility-mode) for compatibility document.


For more detailed information on all the Android 14 behavioral changes click [here](https://developer.android.com/about/versions/14/behavior-changes-all)
