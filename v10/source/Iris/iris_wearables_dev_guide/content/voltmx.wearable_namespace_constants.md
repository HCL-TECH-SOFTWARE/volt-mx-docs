                           
voltmx.wearable Namespace Constants
=================================

<details close markdown="block"><summary>Callback Result Constants</summary> 

* * *

Your app receives the following values in the parameters of callback functions to inform it of the status of operations.

| Constant | Description |
| --- | --- |
| voltmx.wearable.RESULT\_ERROR\_API\_NOT\_AVAILABLE | The Android Wear app is not installed on the paired device. |
| voltmx.wearable.RESULT\_ERROR\_CAUSE\_NETWORK\_LOST | The connection to the network has been lost. |
| voltmx.wearable.RESULT\_ERROR\_CAUSE\_SERVICE\_DISCONNECTED | The Google Play service is disconnected. |
| voltmx.wearable.RESULT\_ERROR\_INTERNAL\_ERROR | Some kind of internal error occurred. Retry the operation. |
| voltmx.wearable.RESULT\_ERROR\_INVALID\_TARGET\_NODE | The target node is not a valid node on the network. |
| voltmx.wearable.RESULT\_ERROR\_NETWORK\_ERROR | A network error occurred. The operation could not be completed. |
| voltmx.wearable.RESULT\_ERROR\_PAYLOAD\_TOO\_LARGE | Too much data is being transmitted at once. It must be moved in smaller pieces. |
| voltmx.wearable.RESULT\_ERROR\_SERVICE\_DISABLED | Google Play services have been disabled on this device. |
| voltmx.wearable.RESULT\_ERROR\_SERVICE\_INVALID | Google Play services are installed on this devices but they are not authentic. |
| voltmx.wearable.RESULT\_ERROR\_SERVICE\_MISSING | Google Play services have not been installed on this device. |
| voltmx.wearable.RESULT\_ERROR\_SERVICE\_UPDATING | Google Play services are inaccessible because they are currently being updated on this device. |
| voltmx.wearable.RESULT\_ERROR\_SERVICE\_VERSION\_UPDATE\_REQUIRED | Google Play services must be updated before they can be used by this app. |
| voltmx.wearable.RESULT\_ERROR\_TARGET\_NODE\_NOT\_CONNECTED | The target node is not connected to the network. |
| voltmx.wearable.RESULT\_ERROR\_UNKNOWN | An unknown error has occurred. |
| voltmx.wearable.RESULT\_SUCCESS | The operation completed successfully. |

### Remarks

These constants are status codes that your app receives in the parameters of callback functions. The callback functions are passed to API functions in the `voltmx.wearable` namespaace. When the API function completes or encounters an error, the callback function is automatically invoked and passed a value From the Callback Result Constants.

### Platform Availability

Android Wear 2.0 or later

* * *
</details>
