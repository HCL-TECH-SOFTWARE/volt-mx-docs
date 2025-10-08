                            

You are here: Runtime Permission API

Runtime Permission API
======================

Permissions that are granted/denied at the app’s run time are known as runtime permissions. These permissions are not requested by the app during its install process. Apps require runtime permissions to access the resources of the device or the end-user's data. The runtime permissions give users more control over the functionality of the application. Volt MX Iris provides a set of APIs that helps you check the status of the permission, request and obtain permission to access a resource.

The Runtime Permissions API uses the `voltmx.application Namespace` and contains the following functions.

  
| Function | Description |
| --- | --- |
| [voltmx.application.checkPermission](voltmx.application_functions_runtimepermissionsapi.md#checkPermissions) | Checks for and returns the permission status of one or more resources. |
| [voltmx.application.requestPermission](voltmx.application_functions_runtimepermissionsapi.md#requestPermission) | Requests for the end-user's consent to access a particular resource. |
| [voltmx.application.requestPermissionSet](voltmx.application_functions_runtimepermissionsapi.md#reqPermissionSet) | Sends a request for a set of permissions. The status of the request is sent back to the user through a callback. |
| [voltmx.application.openApplicationSettings](voltmx.application_functions_runtimepermissionsapi.md#openApplicationSettings) | Opens the application-specific settings or the device-level application settings. |

 

To check the status of a permission for a resource, use the [voltmx.application.checkPermission](voltmx.application_functions_runtimepermissionsapi.md#checkPermissions) function. You can then request the user’s consent to access a resource or set of resources by using the [voltmx.application.requestPermission](voltmx.application_functions_runtimepermissionsapi.md#requestPermission) or [voltmx.application.requestPermissionSet](voltmx.application_functions_runtimepermissionsapi.md#reqPermissionSet) function. Use the [voltmx.application.openApplicationSettings](voltmx.application_functions_runtimepermissionsapi.md#openApplicationSettings) function to open the Application settings to grant permissions.

In the [voltmx.application.requestPermission](voltmx.application_functions_runtimepermissionsapi.md#requestPermission) function, specify the following Resource constants to proceed with the API.

*   RESOURCE\_EXTERNAL\_STORAGE = 1009
*   RESOURCE\_PHOTO\_GALLERY = 1011;

For Android, make sure that the WRITE\_EXTERNAL\_STORAGE permission is defined under the Manifest Properties. Here are the steps to define:

1.  Open the application, and click **Project Settings** icon. The **Project Settings** window opens.
2.  Click the **Native** tab, and then click **Android** sub-tab.
3.  Under the **Manifest Properties**, click the **Permissions** tab.
4.  Select the WRITE\_EXTERNAL\_STORAGE options from the left pane and click **Add**. Make sure that the selected options is moved to the right pane.
5.  Under the **Manifest Properties**, click the **Tags** tab.
6.  Click **Finish**.

To view the functionality of the Runtime Permission API in action, download the sample application from the link below. Once the application is downloaded, build and preview the application using the Volt MX App.  

[![](resources/images/download_button_08__002__236x35.png)](https://github.com/HCL-TECH-SOFTWARE/volt-mx-samples/tree/main/RuntimePermissionAPI)

Permission Model in different platforms
---------------------------------------

**Android**

The Android versions prior to 6.0, the system permissions were granted by the Android system to the apps during its installation process without user intervention. But from the Android 6.0 onwards, users grant permissions to the apps. These permissions are granted at the app run time, but not during the app installation. In Android, the system permissions are categorized in to:

**Normal:** The permissions that do not directly cause any risk to user’s privacy are considered as normal permissions. If you add a normal permission to your app’s manifest, the system grants permission automatically without user intervention.

**Dangerous:** The permissions that provide access to the user’s confidential data are known as dangerous permissions. If any dangerous permission added to your app’s manifest, explicitly the user has to grant permission to your app to access. All dangerous permissions are associated to a group. If user grants permission to any one in the group, the other permissions in the group are also granted automatically. For more information and list of dangerous permissions, refer to [Android System Permissions](https://developer.android.com/guide/topics/security/permissions.md).

The apps developed for Android 6.0 and later versions need to check the permission status manually, and then request to obtain the permission to use a particular resource.

**iOS**

Similarly, from iOS 8.0 onwards, there are a set of sensitive resources protected by user consent. To access these resources, apps need to check the permission status and obtain the necessary permissions manually. Application-specific permissions can also be altered from the device global settings.

In iOS devices, if your app does not have permission to access a particular resource, the app can request for permission only for once at launching the app for the first time. If the user grants permission, your app can access the resource; if the user denies, the app cannot access the resource and cannot request for permission once again from the app as well. When the app request for the permission second time or later, the system prompts the cannot access pop-up.

The only way to make the app access the resource is user has to enable the access using the device's global settings.

**Windows**

All sensitive resources are handled by the OS automatically.

**SPA**

In SPA, only Geo location related APIs require the end-user permission and this is automatically handled by the underlying Brower applications.

Handling Permissions Automatically by Platforms
-----------------------------------------------

Apart from providing the APIs to check, request, and obtain permissions - Volt MX Iris enables the platforms handle the permissions for the apps. Platforms handling the permissions helps avoiding occurrence of any issues while migrating to the latest versions of the platforms. For example, changing Android target SDK from previous versions to 6.0 or later versions.

Certain synchronous APIs throw the “PermissionError” exception when user denies permission. To handle these exception, place try-catch block around these APIs.

Example for usage of the Runtime Permission API Functions
---------------------------------------------------------

The following example gives you brief idea about how runtime permission APIs work and can be utilized.

```
var options = {
isAccessModeAlways:true
};  
var result = voltmx.application.checkPermission(voltmx.os.RESOURCE_LOCATION,options);  
if(result.status == voltmx.application.PERMISSION_DENIED){ 
//Indicates permission denied  
   if(result.canRequestPermission){  
     voltmx.application.requestPermission(resourceConfig, permissionStatusCallback);  
     }  
   else{  
     Var basicConfig = {  
     alertType : constants.ALERT_TYPE_CONFIRMATION,  
     message : “Please enable the permission in Device Settings to proceed. Do you want to open settings?”,  
     alertHandler : permissionAlertHandler  
     }  
     voltmx.ui.Alert(basicConfig);  
   }  
}  
else if(result.status == voltmx.application.PERMISSION_GRANTED){  
     voltmx.location.getCurrentPosition();  
     }  
else if(result.status == voltmx.application.PERMISSION_RESTRICTED){  
     alert(“Resource Aceess Restricted for User”);  
     }  
function permissionAlertHandler(resp){  
   if(resp)  
     voltmx.application.openApplicationSettings();  
    }  
function permissionStatusCallback(response){  
   if(response.status == voltmx.os.PERMISSION_GRANTED)  
     voltmx.location.getCurrentPosition(…);  
   else if(response.status == voltmx.os.PERMISSION_DENIED){  
     Var basicConfig = {  
     alertType : constants.ALERT_TYPE_CONFIRMATION,  
     message : “Please enable the permission in Device Settings to proceed. Do you want to open settings?”,  
     alertHandler : permissionAlertHandler  
     }  
     voltmx.ui.Alert(basicConfig);  
  }  
}
```

Permission Status
=================

When apps request for the permissions to access the required resources, the underlying platform responds the permission status. For example, if any resource is not protected by a permission, the platform responds with granted status immediately. If the resource is not available, the platform responds with denied status.

Here is a list of permission statuses returned by platforms when apps requested for permissions. The platforms return these statuses based on the user's decision when the app requested for a permission. For example, if an app wants to access the user's location and for this, the app prompts a dialog box with the "Allow" and "Deny" options. If user taps the "Allow" option, the permission is granted and if user taps the "Deny" option, the permission is denied. And the platform returns the respective statuses to the app in the back end. From Android 6 onwards, two options “Allow” or “Deny and Never Ask Again” are displayed. When "Never Ask Again" option is chosen by the user, request permission dialog box will not be shown for that application and for the respective permissions unless it is changed manually from the phone settings.

voltmx.application.PERMISSION\_DENIED

Indicates not enough permissions to access the resource. So, app should request for a permission. The status is responded when:

*   end-user denies to access the resource
*   the resource is not available.

voltmx.application.PERMISSION\_GRANTED

Indicates app is authorized to access the resource. The status is responded when:

*   end-user grants permission to access the resource
*   resource is not protected by any permission.

voltmx.application.PERMISSION\_RESTRICTED

Indicates device policy prohibits the app to use the resource. In this case, app cannot not access the resource.

voltmx.application.RESOURCE\_NOT\_SUPPORTED

Indicates given resource ID is not applicable in the platform. The status is responded when

*   the resource ID is not supported in the underlying platform
*   the resource ID is invalid.

**voltmx.application.PERMISSION\_NEVER\_ASK\_AGAIN**

Applicable for Android only. Indicates not enough permissions to access the resource and the user will not see the request again. The status is responded when:

*   user denies to access the resource and does not want to see the request again.

Resource IDs
============

As runtime permissions are required to access the resources - the resources are identified with the help of resource IDs exhibited by the platforms. You can also pass additional options to identify the exact resource to access. The additional options contain platform-specific keys based on the resource ID that needs permission. For example, if your app wants to access the user location, the resource ID is "LOCATION" and you can use the "isAccessModeAlways" property as an additional option, which is a platform-specific key for iOS devices.

For the resources protected by the permissions, the Android platform identifies the permission required based on the permission declared in the AndroidManifest.xml using the additional options provided along with the resource ID.

The following table lists the resource IDs along with the supported platform-specific additional options and associated Android permissions. The Android permissions listed for the resource IDs in the table below, need to be set true under Manifest Properties in the Project Settings>Native>Android tab.

| Resource ID | Description | Platform-specific Option | Android Permission |
| --- | --- | --- | --- |
| voltmx.os.RESOURCE\_ LOCATION | Access to the user's location. | **isAcessModeAlways**: Indicates the mode of geo location usage._Type_: Boolean_Platform_: iOS | ACCESS\_FINE\_LOCATIONACCESS\_COARSE\_LOCATION |
| voltmx.os.RESOURCE\_CAMERA | Access to the device's camera. | **isVideoCapture**: Indicates permission required to access camera to capture a photo or a video. The default value is false. To access camera to record a video needs RECORD\_AUDIO permission in the Android platform._Type_: Boolean_Platform_: Android**isAccessModePublic**: Indicates whether a captured photo can be saved to external storage or not. The isAccessModePublic option needs WRITE\_EXTERNAL\_STORAGE permission in the Android platform to access external storage location._Type_: Boolean_Platform_: Android | CAMERA WRITE\_EXTERNAL\_STORAGE RECORD\_AUDIO |
| voltmx.os.RESOURCE\_PHOTO\_GALLERY | Access to the photo album or gallery. | \- | Not protected by any permission. |
| voltmx.os.RESOURCE\_CONTACTS | Access to the user's contacts. | \- | READ\_CONTACTSWRITE\_CONTACTSGET\_ACCOUNTS |
| voltmx.os.RESOURCE\_CALENDAR | Access to the device's calendar. | \- | READ\_CALENDARWRITE\_CALENDAR |
| voltmx.os.RESOURCE\_EXTERNAL\_STORAGE | Access to the external storage such as SD card. | \- | READ\_EXTERNAL\_STORAGEWRITE\_EXTERNAL\_STORAGE |
| voltmx.os.RESOURCE\_LOCATION\_ACCESS\_IN\_BACKGROUND | Access to the device location when application is running in background. This is applicable only to Android platform. | \- | ACCESS\_BACKGROUND\_LOCATIONACCESS\_FINE\_LOCATIONACCESS\_COARSE\_LOCATION |

![](resources/prettify/onload.png)
