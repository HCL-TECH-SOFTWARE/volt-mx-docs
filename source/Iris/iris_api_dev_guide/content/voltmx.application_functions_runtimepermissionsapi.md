                             


Functions
=========

The Runtime Permission API contains the following functions, which are part of the [voltmx.application Namespace](voltmx.application_functions.md).


<details close markdown="block"><summary>voltmx.application.checkPermission</summary>

* * *

Checks and returns the permission status of one or more resources.

### Syntax

```

voltmx.application.checkPermission(resourceId\[constant/String\], options\[JSObject\])
```

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| resourceId \[constant/String\] - Mandatory | Specify the ID of the resource or name of the permission (only for Android) for which you want to check the status. You can specify either a String (permission name) or an integer (resourceId) value. The feature to specify the name of the permission as a String is applicable only for Android. For instance, you can query a Native Android permission from the AndroidManifest.xml file by specifying the String directly: "android.permission.READ\_PHONE\_STATE". |
| options \[JSObject\] - Optional | Specify the additional option to identify the exact resource of which you want to know the status. This is a platform-specific key. For more information, refer to Resource ID. |

### Example 1

```

var options = {
    isAccessModeAlways: true
};
var result = voltmx.application.checkPermission(voltmx.os.RESOURCE_LOCATION, options);
if (result.status = = voltmx.application.PERMISSION_DENIED) {
    voltmx.application.requestPermission();
} else if (result.status = voltmx.application.PERMISSION_GRANTED) {
    voltmx.location.getCurrentPosition();
}
```

### Example 2

```

< uses - permission  android: name = "android.permission.READ_PHONE_STATE" / >
var result = voltmx.application.checkPermission("android.permission.READ_PHONE_STATE");
if (result.status = = voltmx.application.PERMISSION_DENIED) {
    voltmx.application.requestPermission();
} else if (result.status = voltmx.application.PERMISSION_GRANTED) {
    voltmx.location.getCurrentPosition();
}
```

### Return Values

JSObject

A JS Object contains the authorization status of the requested resource. The returned JSObject contains the following keys:

| Return value | Description |
| --- | --- |
| status \[constant\] | Resource status constant which indicates the overall status of the resource authorization. For more information, refer to Permission Status. |
| canRequestPermission \[Boolean\] | Indicates whether you can request for the permissions or not in case the value of the status is PERMISSION\_DENIED. In the iOS platform, authorization for a resource can be requested only once. For more information, refer to [Permission model in iOS](runtime_permissions.md#iOS).In the Android platform, the app can request for the permissions even though the status return value is PERMISSION\_DENIED or direct the user to app settings to turn on or off the authorization. |

### Platform Availability

*   Android
*   iOS
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>voltmx.application.getBackgroundPermissionOptionLabel</summary>

* * *

Fetches the localized label that corresponds to the option in the Project Settings that grants access for the app to run in the background.

The intended use of this permission is for apps to reference this label in the instruction that is displayed to the users requesting background access.

### Syntax

```

voltmx.application.getBackgroundPermissionOptionLabel()
```

### Input Parameters

None

### Example

```

showEducationalUI: function() {  
    var text = voltmx.application.getBackgroundPermissionOptionLabel();  
    voltmx.ui.Alert({  
        "alertType": constants.ALERT_TYPE_CONFIRMATION,  
        "alertTitle": "Backgroun Location Permission",  
        "yesLabel": "Ok",  
        "noLabel": "Cancel",  
        "message": "Allow Background Location Permission by click on the " + text,  
        "alertHandler": this.callback  
    }, {  
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT  
    });  
},  
callback: function() {  
    voltmx.application.requestPermission("android.permission.ACCESS_BACKGROUND_LOCATION", this.permissionStatusCallback);  
},  
permissionStatusCallback: function(response) {  
    if (response.status == voltmx.application.PERMISSION_GRANTED) {  
        alert("granted");  
    } else {  
        alert("denied")  
    }  
}
```

### Return Values

String

### Platform Availability

*   Android

* * *

</details>
<details close markdown="block"><summary>voltmx.application.isAutoRevokeWhitelisted</summary>

* * *

Checks whether an application is exempt from having its permissions be automatically revoked when the app is unused for an extended period of time.

> **_Note:_** This API is only available on Android 11 (OS API level 30), or later devices. If the app uses target SDK versions less than version 30, the behavior of this API may not be as expected.

### Syntax

```

voltmx.application.isAutoRevokeWhitelisted()
```

### Input Parameters

None

### Example

```

function isAutoRevokeWhitelisted() {  
	var retVal = voltmx.application.isAutoRevokeWhitelisted();  
    voltmx.print(" Is my application whitelisted "+ retVal);  
}
```

### Return Values

**Boolean**

*   true: The package is whitelisted from having its runtime permission be auto-revoked if unused for an extended period of time.
*   false: The package is not whitelisted from having its runtime permission be auto-revoked if unused for an extended period of time.

### Platform Availability

*   Android

* * *

</details>
<details close markdown="block"><summary>voltmx.application.launchAutoRevokeSettings</summary>

* * *

This API navigates the user to the application's page in the system settings, from where users can prevent the system from automatically revoking the application permissions.

In the app settings screen that appears, users must follow these steps to prevent the system from revoking the app permissions:

1.  Tap **Permissions**.  
    The **App Permission Settings** appear.
2.  Disable the **Remove permissions if app isn't used** option.

> **_Note:_** This API is only available on Android 11 (OS API level 30), or later devices.

### Syntax

```

voltmx.application.launchAutoRevokeSettings();
```

### Input Parameters

None

### Example

```

function launchAutoRevokeSettings(){  
voltmx.application.launchAutoRevokeSettings();  
}
```

### Return Values

None

### Remarks

This API is useful in situations where the app works in the background and there is no user interaction. For example, the API can be used in the following scenarios:

*   Provide family safety
*   Sync data
*   Communicate with smart devices
*   Pair compatible devices

### Platform Availability

*   Android

* * *

</details>
<details close markdown="block"><summary>voltmx.application.requestPermission</summary>

* * *

Sends a request to the end-user to provide the access to specific resource.

### Syntax

```

voltmx.application.requestPermission(resourceId\[constant/String\], statusCallback\[Function\], options\[JSObject\])
```

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| resourceId \[constant/String\] - Mandatory | Specifies the ID of the resource or name of the permission (only for Android) that you want to access. You can specify either a String (permission name) or an integer (resourceId) value. The feature to specify the name of the permission as a String is applicable only for Android. For instance, you can query a Native Android permission from the AndroidManifest.xml file by specifying the String directly: "android.permission.READ\_PHONE\_STATE". The available **resourceId** constants are as follows: voltmx.os.RESOURCE\_CAMERA voltmx.os.RESOURCE\_LOCATION voltmx.os.RESOURCE\_PHOTO\_GALERY voltmx.os.RESOURCE\_CONTACTS voltmx.os.RESOURCE\_CALENDAR voltmx.os.RESOURCE\_SIRI (iOS-specific) voltmx.os.RESOURCE\_AUDIO\_RECORD voltmx.os.RESOURCE\_NOTIFICATION (iOS-specific) |
| statusCallback \[Function\] - Mandatory | A callback function receives the end-user's decision. The statusCallback function receives a JS Object, which contains overall status and permission-specific status that end-user responded on the permission dialog box. function statusCallback(response); Here, **response** is a hash map that contains the authorization status of the requested resource. This argument contains the following key: status \[constant\] Resource status constant that indicates the overall status of the resource authorization. The possible values for **status** are as follows: voltmx.application.PERMISSION\_GRANTED voltmx.application.PERMISSION\_DENIED voltmx.application.PERMISSION\_NEVER\_ASK\_AGAIN |
| options \[JSObject\] - Optional | Specifies the additional option to identify the resource for which you want permission. This key is applicable on android only. To obtain the voltmx.application.PERMISSION\_NEVER\_ASK\_AGAIN status, you have to set the `getNeverAskAgainStatus` key to true and pass the key in the options object. If the key is not set, and the user selects either the Deny or Never Ask Again options, then the permission status is considered as VoltMX.application.PERMISSION\_DENIED.var options = { "isVideoCapture": true, "getNeverAskAgainStatus": true } |
| options \[Object\] - For Notifications | This is a mandatory parameter for notifications. {notificationtypes : constants} The available constants are as follows: voltmx.notificationsettings.BADGE voltmx.notificationsettings.SOUND voltmx.notificationsettings.ALERT |

### Example 1

```

//< uses - permission  android: name = "android.permission.READ_PHONE_STATE" >
    voltmx.application.requestPermission("android.permission.READ_PHONE_STATE", permissionStatusCallback);

function permissionStatusCallback(response) {
    if (response.status == voltmx.application.PERMISSION_GRANTED) {
        voltmx.location.getCurrentPosition();
    } else if (response.status == voltmx.application.PERMISSION_DENIED) {
        //Display Application Settings alert by using voltmx.application.openApplicationSettings() 
    }
}
```

### Example 2

```

function requestpermission() {

    var options = {
        "isVideoCapture": true,
        "getNeverAskAgainStatus": true
    }

    voltmx.application.requestPermission(voltmx.os.RESOURCE_LOCATION, permissionStatusCallback, options);

}

function permissionStatusCallback(response) {

    alert("response ::" + JSON.stringify());

    if (response.status == voltmx.application.PERMISSION_GRANTED) {

        voltmx.location.getCurrentPosition();

    } else if (response.status == voltmx.application.PERMISSION_DENIED) {


        Requestpermission(); /* To show the reason to users for granting the permission to use the feature and then raise a request. */

    } else if (response.status == voltmx.application.PERMISSION_NEVER_ASK_AGAIN) {


        voltmx.application.openApplicationSettings(); /* To show the reason to users for granting the permission to use the feature and then open application settings to grant the request. */

    }

)

}
```

### Return Values

  
| Function | Description |
| --- | --- |
| JSObject | A JSObject contains the authorization status of the requested resource. The returned JSObject contains the following key: status \[constant\] Resource status constant which indicates the overall status of the resource authorization. For more information, refer to [Permission Status](runtime_permissions.md#permission-status). > **_Note:_** In the Android platform, the status remains PERMISSION\_DENIED if at least one of the permissions associated with the resource is denied by the end-user. |

### Platform Availability

*   Android
*   iOS
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>VoltMX.application.requestPermissionSet</summary> 

* * *

When invoked, this API sends a request for a set of permissions. The status of the request is sent back to the user through a callback.

### Syntax

```

VoltMX.application.requestPermissionSet(permissions, callback)  
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| Permissions | Array of qualified android permission strings. |
| Callback | Function object result will invoke this function. The result is a JSobject where the key is permission string and the value is the permission status. |

 
### Example

```

function requestpermission() {

    voltmx.application.requestPermissionSet(["android.permission.CAMERA", "android.permission.WRITE_CONTACTS"], permissionStatusCallback);

}

function permissionStatusCallback(response) {

    var camera = "android.permission.CAMERA";

    var contacts = "android.permission.WRITE_CONTACTS";

    for (var i in response) {

        /* iterating through permissionSet key value pair from response jsObject where 'i' is permission key and result is permission status */
        var result = response[i];

        if (result == voltmx.application.PERMISSION_DENIED) {

            // show message  and raise request again

        } else if (result == voltmx.application.PERMISSION_NEVER_ASK_AGAIN) {

            // show message and open settings page

            voltmx.application.openApplicationSettings();

        }

    }

}
```

### Return Values

None.

### Platform Availability

Android

* * *

</details>
<details close markdown="block"><summary>voltmx.application.openApplicationSettings</summary>

* * *

Opens the application-specific settings or device-level application settings.

You may need to direct the end-user to application settings to manually enable or disable a permission for the app to access a particular resource. This function is required when the end-user had denied the permission when the app prompted with a dialog box, and later wants the app to access the resource. For example, if your app wants to access the user's contacts - so the app displayed a dialog box with "Allow" and "Deny" options, asking end-user to grant permission for the first time. The end-user tapped the "Deny" option and the app cannot access the user's contacts. Later, after some point of time, if end-user wants the app access the user's contacts; at that time, you can call the openApplicationSettings API that allows the user to navigate to the application settings screen, and then grant the required permission to the app.

The behavior of the openApplicationSettings API in different platforms:

*   **Windows**: There is no provision to open the application-level settings. The openApplicationSettings API accepts the resourceid as an optional parameter that helps open the resource-specific settings screen. If the resourceid is not provided, results in unexpected behavior.
*   **iOS**: Opens the application-level settings screen showing the access status of the resource. The end-user can turn on or off the access to the resource from the app. The resourceid parameter is ignored in the iOS platform.
*   **Android**: Opens the application-level settings screen showing the access status of the resource. The end-user can turn on or off the access to the resource from the app. The resourceid parameter is ignored in the iOS platform.

### Syntax

```

voltmx.application.openApplicationSettings(resourceId\[const\])
```

### Input Parameters

  
| Function | Description |
| --- | --- |
| resourceId \[constant\] - Optional | Specify the resource ID of the resource that you want open its settings. The parameter works only for Windows. For more information, refer to Resource ID. |

### Example

```

voltmx.application.openApplicationSettings(voltmx.os.RESOURCE_CONTACTS);
```

### Return Values

None

### Platform Availability

*   Android
*   iOS
*   Windows

![](resources/prettify/onload.png)
