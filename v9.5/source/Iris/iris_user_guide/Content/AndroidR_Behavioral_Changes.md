                         


Android 11 Behavioral Changes
=============================

In this document, we will explain the various Android 11 (version R and API Level 30) behavioral changes that are observed when apps use Android Target SDK version 30 and run on Android 11 (or later) devices.

Background Location Access
--------------------------

Apps that run on Android 11 (API level 30, or later) devices must already have access to foreground location before requesting for background location access. If an app requests both foreground and background location access simultaneously, the system denies background location access by default. For more information, refer [Background Location updates](https://developer.android.com/training/location/permissions#background-dialog-target-android-11)

If the user denies permission for background location access, but the app requires access to background location, you must educate the user to provide the required permission by providing the following data:

*   Display a message with a clear explanation of why the app or feature requires background location access.
*   Display a label of the settings option that grants background location to the user. You can retrieve the text for the option to grant background access permission by using the [voltmx.application.getBackgroundPermissionOptionLabel](../../../Iris/iris_api_dev_guide/content/voltmx.application_functions_runtimepermissionsapi.md#getBackgroundPermissionOptionLabel) API. The API displays the text and the associated user-action that grants permission for background location access. The return value of this method is localized to the language preference of the device.
    
    For example, you can retrieve the text for the **Allow all the time** option as displayed in the following image.
    
    ![](Resources/Images/Bg_Location.png)
    
*   The message that you display must have an option for the user to decline permission. If the user declines permission for background location access, they must still be able to continue using the app.

> **_Important:_** If the User denies background location access, the application will either crash or restart. This is a known issue on the Android Platform.

Package Visibility Updates
--------------------------

Android 11 introduces restrictions on how apps query and interact with other apps installed on a device. Apps must use the `<queries>` element to define other packages that the app wants to interact with.

### Filter Email Apps

While using the [filterEmailAppsOnly](../../../Iris/iris_api_dev_guide/content/voltmx.phone_functions.md#filterEmailAppsOnly) parameter of the [voltmx.phone.openEmail](../../../Iris/iris_api_dev_guide/content/voltmx.phone_functions.md#phone.op2) API, if you want to view a filtered list of email applications, add the following entry in the **Project Settings** > **Native** > **Android Mobile/Tablet** > **Child tag entries under &lt;manifest&gt; tag** field:

```
<queries>
<intent>
<action android:name="android.intent.action.SENDTO" />
<data android:scheme="mailto"/>
</intent>
</queries>
```

### Protected Mode Behavior

Based on the Package Visibility behavior updates, when you build an Android 11 (Target SDK level 30, or later) app in **Protected Mode**, by default, the `<uses-permission android:name=“android.permission.QUERY_ALL_PACKAGES”/>` permission is added in the Android Manifest file for Protected Mode apps to work as expected. If you do not want to add this permission automatically, add the `donotAddQueryAllPackages = true` entry in the **androidbuild.properties** file of the project source directory.

Support for Android R APIs
--------------------------

### 5G Network Support

As the Android Framework has provided support for 5G network connection, you can use the [`voltmx.net.set5GNetworkListener`](../../../Iris/iris_api_dev_guide/content/voltmx.net_functions.md#set5GNetworkListener) and [`voltmx.net.unregister5GNetworkListener`](../../../Iris/iris_api_dev_guide/content/voltmx.net_functions.md#unregister5GNetworkListener) APIs to determine the status of the 5G Network connection. Use the [voltmx.net.hasCapablity](../../../Iris/iris_api_dev_guide/content/voltmx.net_functions.md#hasCapability) API to test the presence of 5G capability at that instance.

### Auto-Reset Permissions

When apps that run on Android 11 (API level 30, or later) devices are not in use for a few months, to protect sensitive data, the system automatically resets the runtime permissions granted by the user to the app. This action is effectively similar to a user denying permissions to the app from the System Settings.

> **_Note:_** If your app follows the [best practices to request permissions at runtime](https://developer.android.com/training/permissions/requesting), you need not make any changes to the app. For more information on Auto-reset permissions, refer [Android Documentation](https://developer.android.com/about/versions/11/privacy/permissions#auto-reset).

You can use the [`voltmx.application.isAutoRevokeWhitelisted`](../../../Iris/iris_api_dev_guide/content/voltmx.application_functions_runtimepermissionsapi.md#isAutoRevokeWhitelisted) API to check whether an application is exempt from having its permissions be automatically revoked when the app is unused for an extended period of time.
