                            

You are here: GeoLocation API

GeoLocation API
===============

The GeoLocation API defines a high-level interface to location information, such as latitude and longitude associated with the mobile device. The API uses the common sources of location information such as the Global Positioning System (GPS) to infer details such as IP address, RFID, WiFi and Bluetooth MAC addresses, and GSM/CDMA cell IDs. This API does not always return the device's actual location.

The Geolocation API uses the `voltmx.location Namespace` and the following API elements.

  
| Function | Description |
| --- | --- |
| [voltmx.location.checkLocationSettings](voltmx.location_functions.md#checkLocationSettings) | Checks whether current location settings meet the desired location accuracy setting specified by “accuracyMode” property. |
| [voltmx.location.clearWatch](voltmx.location_functions.md#voltmx.loc) | Verifies the value of the given watchID argument. If the value corresponds to a previously started watch process, the process is stopped immediately. |
| [voltmx.location.getCurrentPosition](voltmx.location_functions.md#getCurrentPosition) | Retrieves the current location of the device. |
| [voltmx.location.watchPosition](voltmx.location_functions.md#watchPosition) | Sets callbacks that report the device's position. |

 

The API is designed to enable both _one-shot_ position ([getCurrentPosition](#getCurrentPosition)) requests and repeated position ([watchPosition](#watchPosition)) updates, as well as the ability to explicitly query the cached positions. Location information is represented by latitude and longitude coordinates.

Background Location Access
--------------------------

Apps that run on Android 11 (API level 30, or later) devices must already have access to foreground location before requesting for background location access. If an app requests both foreground and background location access simultaneously, the system denies background location access by default. For more information, refer [Background Location updates](https://developer.android.com/training/location/permissions#background-dialog-target-android-11)

If the user denies permission for background location access, but the app requires access to background location, you must educate the user to provide the required permission by providing the following data:

*   Display a message with a clear explanation of why the app or feature requires background location access.
*   Display a label of the settings option that grants background location to the user. You can retrieve the text for the option to grant background access permission by using the [voltmx.application.getBackgroundPermissionOptionLabel](../../../Iris/iris_api_dev_guide/content/voltmx.application_functions_runtimepermissionsapi.md#getBackgroundPermissionOptionLabel) API. The API displays the text and the associated user-action that grants permission for background location access. The return value of this method is localized to the language preference of the device.
    
    For example, you can retrieve the text for the **Allow all the time** option as displayed in the following image.
    
    ![](../../Iris/Content/Resources/Images/Bg_Location.png)
    
*   The message that you display must have an option for the user to decline permission. If the user declines permission for background location access, they must still be able to continue using the app.

> **_Important:_** If the User denies background location access, the application will either crash or restart. This is a known issue on the Android Platform.

The GeoLocation APIs are modeled after W3C GeoLocation specification. For a more hands-on approach on the functionality of the various Geolocation APIs provided by Volt MX, import and preview the [Geolocation Feature app](https://marketplace.hclvoltmx.com/items/geolocation-feature-app) by using Volt MX Iris.

<div class="youtube-wrapper"><iframe src="https://www.youtube.com/embed/XEdOHCBBMVw" allowfullscreen=""></iframe></div>

To get the current position of the device, use the **[voltmx.location.getCurrentPosition](voltmx.location_functions.md#getCurrentPosition)** function. Continue to watch the position of the device by using the **[voltmx.location.watchPosition](voltmx.location_functions.md#watchPosition)** function. To stop tracking the device movement, use the **[voltmx.location.clearWatch](voltmx.location_functions.md#voltmx.loc)** function.

> **_Note:_** The `phone.mylocation` function is deprecated and should not be used in new software. However, there is still [documentation for it](voltmx.location_deprecated.md#phone.my).

To view the functionality of the GeoLocation API in action, download the sample application from the link below. Once the application is downloaded, build and preview the application using the Volt MX App.

[![](resources/images/download_button_08__002__234x35.png)](https://github.com/HCL-TECH-SOFTWARE/volt-mx-samples/tree/main/GeoLocationAPI)

![](resources/prettify/onload.png)
