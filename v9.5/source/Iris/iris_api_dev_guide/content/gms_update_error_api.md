                             


Update and Error Handling APIs
==============================

The Google Play services APK contains the individual Google services and runs as a background service in the Android OS. The Google Play Services Update and Error Handling APIs help you verify if the Google Play Services APK is available on the device, and whether it is up-to-date.

By using the Google Play Services Update and Error Handling APIs, you can check the status of availability of the Google Play Services APK on the device. You can also display notifications about the error or display error resolution dialog boxes, that upon confirmation from the user, will direct them to the Google Play Store (if Google Play services is out of date or missing on the device) or to the system settings (if Google Play services is disabled on the device).

The Google Play Services Update and Error Handling APIs use the `voltmx.gms Namespace` and contain the following API elements.

  
| Function | Description |
| --- | --- |
| [voltmx.gms.getStatusString](voltmx.gms_functions.md#getStatusString) | Returns the statusCode in a human-readable string format. |
| [voltmx.gms.isBaseLibraryAvailable](voltmx.gms_functions.md#isBaseLibraryAvailable) | Checks whether the base client library is integrated with the application. |
| [voltmx.gms.isGooglePlayServicesAvailable](voltmx.gms_functions.md#isGooglePlayServicesAvailable) | Checks whether Google Play Services is installed and enabled on the device. |
| [voltmx.gms.isUserResolvableError](voltmx.gms_functions.md#isUserResolvableError) | Determines whether an error can be resolved through a user action such as, on a dialog box or a notification. |
| [voltmx.gms.makeGooglePlayServicesAvailable](voltmx.gms_functions.md#makeGooglePlayServicesAvailable) | Displays a dialog box to address any errors based on the value of the statusCode parameter. |
| [voltmx.gms.raiseGooglePlayErrorResolutionIntent](voltmx.gms_functions.md#raiseGooglePlayErrorResolutionIntent) | Used to address the statusCode that is returned by the voltmx.gms.isGooglePlayServicesAvailable, if it can be resolved by the user. |
| [voltmx.gms.showCustomErrorNotification](voltmx.gms_functions.md#showCustomErrorNotification) | Displays a customized notification to address the statusCode that is returned, if it can be resolved by the user. |
| [voltmx.gms.showErrorNotification](voltmx.gms_functions.md#showErrorNotification) | Displays a system notification to address the statusCode that is returned, if it can be resolved by the user. |
| [voltmx.gms.showResolutionDialog](voltmx.gms_functions.md#showResolutionDialog) | Displays a dialog box to address any errors based on the value of the statusCode parameter. |

 

Use the [voltmx.gms.isBaseLibraryAvailable](voltmx.gms_functions.md#isBaseLibraryAvailable) and the [voltmx.gms.isGooglePlayServicesAvailable](voltmx.gms_functions.md#isGooglePlayServicesAvailable) to check whether the base client library is integrated with the application and if the Google Play Services is installed and enabled on the device respectively. If the Google Play Services is not available, use the [voltmx.gms.isUserResolvableError](voltmx.gms_functions.md#isUserResolvableError) to check if the error can be resolved through a user action, and then invoke the [voltmx.gms.raiseGooglePlayErrorResolutionIntent](voltmx.gms_functions.md#raiseGooglePlayErrorResolutionIntent) or the [voltmx.gms.makeGooglePlayServicesAvailable](voltmx.gms_functions.md#makeGooglePlayServicesAvailable) APIs to address the status code or display a dialog box that provides users with the UI to enable Google Play Services. The [voltmx.gms.getStatusString](voltmx.gms_functions.md#getStatusString) API displays the statusCode in a human-readable string format. Use the [voltmx.gms.showErrorNotification](voltmx.gms_functions.md#showErrorNotification), [voltmx.gms.showCustomErrorNotification](voltmx.gms_functions.md#showCustomErrorNotification), and [voltmx.gms.showResolutionDialog](voltmx.gms_functions.md#showResolutionDialog) APIs to display system notifications, custom notifications, and dialog boxes to address any errors.

