                            


voltmx.gms Namespace - In App Updates
===================================

The In-App Updates API contains the following API elements:

*   [Constants](#constants)
*   [Functions](#functions)

Constants
---------

### Install Constants

  
| Status Code | Description |
| --- | --- |
| voltmx.gms.INSTALL\_STATUS\_DOWNLOADED | Indicates that the App Installation is in the downloaded state. |
| voltmx.gms.INSTALL\_STATUS\_CANCELED | Indicates that the App Installation is in the canceled state. |
| voltmx.gms.INSTALL\_STATUS\_FAILED | Indicates that the App Installation is in the failed state. |
| voltmx.gms.INSTALL\_STATUS\_INSTALLED | Indicates that the App Installation is in the installed state. |
| voltmx.gms.INSTALL\_STATUS\_INSTALLING | Indicates that the App Installation is in the installing state. |
| voltmx.gms.INSTALL\_STATUS\_DOWNLOADING | Indicates that the App Installation is in the downloading state. |
| voltmx.gms.INSTALL\_STATUS\_PENDING | Indicates that the App Installation is in the pending state. |
| voltmx.gms.INSTALL\_STATUS\_UNKNOWN | Indicates that the App Installation is in an unknown state. |

### Update Constants

  
| Status Code | Description |
| --- | --- |
| voltmx.gms.UPDATE\_AVAILABLE | Indicates that an update is available for download. |
| voltmx.gms.UPDATE\_NOT\_AVAILABLE | Indicates that an update is not available for download. |
| voltmx.gms.UPDATE\_IN\_PROGRESS | Indicates that an app update is in progress. |
| voltmx.gms.UPDATE\_UNKNOWN | Indicates that the app update status is unknown. |

### Common constants

  
| Status Code | Description |
| --- | --- |
| voltmx.gms.UPDATE\_INFO\_RETRIEVED | The update information is retrieved. |
| voltmx.gms.NO\_ACTIVE\_NETWORK | Network unavailable on the device. |
| voltmx.gms.UPDATE\_FLOW\_CONFIRMED\_BY\_USER | Update flow is confirmed by the user. |
| voltmx.gms.UPDATE\_FLOW\_CANCELLED\_BY\_USER | Update flow is canceled by the user. |
| voltmx.gms.RESULT\_IN\_APP\_UPDATE\_FAILED | Request for Update flow failed. |
| voltmx.gms.UPDATE\_NOT\_ALLOWED\_IN\_BACKGROUND | Update not allowed in the background. |
| voltmx.gms.UPDATE\_NOT\_ALLOWED | Returned when the requestForAppUpdate() cannot be invoked. |
| voltmx.gms.UPDATE\_ERROR | Returned when there are install errors. If this status code is returned, the info object will have additional fields `updateErrorCode` and `updateErrorMessage` that provides detailed information. For more information, refer [Install error codes](https://developer.android.com/reference/com/google/android/play/core/install/model/InstallErrorCode.md). |
| voltmx.gms.PLAY\_CORE\_LIBRARY\_MISSING | Returned when the com.google.android.play:core library is not bundled with the app. Add the `supportGooglePlayCoreLib = true` entry in the androidbuild.properties file to bundle the Google Play Core library. |
| voltmx.gms.GMS\_LIBRARY\_MISSING | Returned when there is Google Play Internal error. For example, the Google Play/Mobile Services library is not linked with the app. |
| voltmx.gms.GOOGLE\_PLAY\_SERVICE\_UNAVAILABLE | Returned when there are Google Play Connection errors. If this status code is returned, the info object will have an additional `GMSErrorCode` field that provides detailed information. For more information, refer [Connection Result](https://developers.google.com/android/reference/com/google/android/gms/common/ConnectionResult). |

Functions
---------

The In-App Updates API contains the following functions, which are part of the [voltmx.gms Namespace](voltmx.application_functions.md).

> **_Note:_**
> *   To use the in-app update APIs, you must add the `supportGooglePlayCoreLib = true` and `supportGooglePlayBaseLib = true` entries in the **androidbuild.properties** file.
> *   The following APIs will only work in an app that is downloaded from the Google Play store. If you install an app through Volt MX Iris, and invoke the APIs, the UPDATE\_ERROR status code is returned. Follow the steps mentioned [here](https://developer.android.com/guide/playcore/in-app-updates#internal-app-sharing) to test an app. 


<details close markdown="block"><summary>voltmx.gms.checkForAppUpdate</summary>
The checkForAppUpdate API checks if an update is available for the app, while the app is in use.

<b>Syntax</b>

`voltmx.gms.checkForAppUpdate({"statusCallback" : statusCallback})`

<b>Input Parameters</b>

**statusCallback** - A mandatory callback function that is executed after the execution of the API call is complete. When the API call is successful, the API returns the voltmx.gms.UPDATE\_INFO\_RETRIEVED statusCode.

The **statusCallback** function contains the result info JS Object that has the following details:

  
| Parameter | Description |
| --- | --- |
| updateAvailabilityStatus \[Integer\] | The status of availability of an update for the app. The parameter can return any of the [Update Constants](#update-constants). |
| updateTypesAllowed \[List\] | The type of updates allowed. Following are the supported types of updates: APP\_UPDATE\_TYPE\_FLEXIBLE APP\_UPDATE\_TYPE\_IMMEDIATE If there are no updates allowed, this parameter returns an empty list. |
| updateVersionCode \[Integer\] | The version code of the app available for update, if an update is available. |
| stalenessDays \[Integer\] | Number of days that have passed since the Google Play Store learns of an update. This information helps the app decide whether it must initiate a flexible or immediate update. If there is no update available or if there is no information on staleness, this parameter returns a null value. |
| updatePriority \[Integer\] | The in-app update priority that is defined by the developer (for the update) in the Google Play Developer API . |
| totalBytes \[Long\] | Total number of bytes to be downloaded for the update. |
| bytesDownloaded \[Long\] | Number of bytes downloaded so far. |
| installStatus \[Constant\] | The install status of the app update. The parameter can return any of the [Install Constants](#install-constants). |
| packageName \[String\] | Package name of the app that is to be updated. |
| statusCode \[Constant\] | The parameter can return any of the following [Common constants](#common-constants): voltmx.gms.UPDATE\_INFO\_RETRIEVED voltmx.gms.NO\_ACTIVE\_NETWORK voltmx.gms.UPDATE\_ERROR voltmx.gms.PLAY\_CORE\_LIBRARY\_MISSING voltmx.gms.GMS\_LIBRARY\_MISSING voltmx.gms.GOOGLE\_PLAY\_SERVICE\_UNAVAILABLE When the statusCode is voltmx.gms.GOOGLE\_PLAY\_SERVICE\_UNAVAILABLE, the API returns the GMSErrorCode key, an integer value. When the statusCode is voltmx.gms.UPDATE\_ERROR, the API returns the updateErrorCode and updateErrorMessage keys. |

  

<b>Example</b>

```
function statusCallback(info) {  
	voltmx.print("updateAvailabilityStatus: " + info.updateAvailabilityStatus)  
	voltmx.print("updateTypesAllowed: " + info.updateTypesAllowed)  
	voltmx.print("updateVersionCode: " + info.updateVersionCode)  
	voltmx.print("stalenessDays: " + info.stalenessDays)  
	voltmx.print("updatePriority: " + info.updatePriority)  
	voltmx.print("totalBytes: " + info.totalBytes)  
	voltmx.print("bytesDownloaded: " + info.bytesDownloaded)  
	voltmx.print("installStatus: " + info.installStatus)  
	voltmx.print("packageName: " + info.packageName)  
        voltmx.print("statusCode: " + info.statusCode)  
}
  
voltmx.gms.checkForAppUpdate({"statusCallback" : statusCallback})
```

<b>Return Value</b>

None

<b>Platform Availability</b>

Android
</details>



<details close markdown="block"><summary id="completeAppUpdate">voltmx.gms.completeAppUpdate</summary>
  The completeAppUpdate API must be invoked in case of a flexible app update flow, to complete the app update. Invoke this API to complete an app update that was started by using the [voltmx.gms.requestForAppUpdate API](#requestForAppUpdate) and is in the DOWNLOADED state.

<b>Syntax</b>

`voltmx.gms.completeAppUpdate({"statusCallback" : statusCallback});`

<b>Input Parameters</b>

**statusCallback** - A mandatory callback function that is executed after the execution of the API call is complete. The callback function contains the result info JS Object that has the following details:

  
| Parameter | Description |
| --- | --- |
| statusCode \[Constant\] | A [staus code](#constants) constant. The parameter can return any of the following [Common constants](#common-constants): voltmx.gms.UPDATE\_ERROR voltmx.gms.PLAY\_CORE\_LIBRARY\_MISSING voltmx.gms.GMS\_LIBRARY\_MISSING voltmx.gms.GOOGLE\_PLAY\_SERVICE\_UNAVAILABLE |

 

<b>Example</b>

```
function statusCallback(info) {  
                    voltmx.print(info)  
        }  
        voltmx.gms.completeAppUpdate({"statusCallback" : statusCallback})
```

<b>Return Value</b>

None

<b>Remarks</b>

In case of flexible update, when you invoke the completeAppUpdate API in the foreground, a full-screen UI appears and the app restarts in the background. After the update is installed, the app restarts in the foreground. If you invoke the completeAppUpdate API in the background, the app update is silently installed in the background, without obscuring the app experience.

When the user moves the app into the foreground, HCL recommends that you check if an app update is waiting to be installed. If the app has an update in the INSTALL\_STATUS\_DOWNLOADED state, you must display a notification to the user requesting that they install the update, as the update data occupies space on the device storage.

<b>Platform Availability</b>

Android
</details>





<details close markdown="block"><summary id="registerAppUpdateListener">voltmx.gms.registerAppUpdateListener</summary>
  The registerAppUpdateListener API is used to register to callbacks that monitor the install status of the app update.

> **_Note:_** Monitoring the update state is only required for flexible updates. Once the flexible download begins, the app must monitor the update state to recognize when the update can be installed, and to display the update progress on the app UI. For immediate updates, Google Play handles the download and installation of the update.

Syntax

`voltmx.gms.registerAppUpdateListener({"statusCallback" : statusCallback})`

Input Parameters

**statusCallback** - A mandatory callback function that is executed after the execution of the API call is complete. The callback function contains the result info JS Object that has the following details:

  
| Parameter | Description |
| --- | --- |
| statusCode \[Constant\] | An [Install Constant](#install-constants). |
| downloadingInfo | This parameter is only populated when the **statusCode** is INSTALL\_STATUS\_DOWNLOADING and contains the following information: **totalBytes** \[Long\]: Total number of bytes to be downloaded for the update. **bytesDownloaded** \[Long\]: Number of bytes downloaded so far. |

  

Example

```
function statusCallback(info) {  
          voltmx.print(info.statusCode)  
          voltmx.print(info.statusMessage)  
          if(info.statusCode == voltmx.gms.INSTALL_STATUS_DOWNLOADING){  
              voltmx.print(info.downloadingInfo.bytesDownloaded)  
              voltmx.print(info.downloadingInfo.totalBytes)                  
          }  
  }  
  voltmx.gms.registerAppUpdateListener({"statusCallback" : statusCallback})
```

Return Value

None

Remarks

*   After the task is complete, HCL recommends that you unregister from the callbacks by using the voltmx.gms.unRegisterAppUpdateListener API.
*   When you invoke the registerAppUpdateListener API, any registered callbacks are overridden.

Platform Availability

Android
</details>




<details close markdown="block"><summary id="requestForAppUpdate">voltmx.gms.requestForAppUpdate</summary>
  The requestForAppUpdate API starts the specified app update flow, if an update is available, while the app is in use.

In case of flexible update, when you invoke the requestForAppUpdate API, the app update is downloaded. You must then invoke the [voltmx.gms.completeAppUpdate API](#completeAppUpdate) to install and restart the app.

In case of immediate update, when you invoke the requestForAppUpdate API, the app update is downloaded and installed, and then the app restarts.

Syntax

`voltmx.gms.requestForAppUpdate({"statusCallback" : statusCallback, "updateType" : voltmx.gms.APP\_UPDATE\_TYPE\_IMMEDIATE})`

Input Parameters

  
| Parameter | Description |
| --- | --- |
| statusCallback \[Dictionary\] | A mandatory callback function that is executed after the execution of the API call is complete. The callback function contains the result info JS Object that has the following details: **statusCode** \[Constant\]: An [Common constant](#common-constants) or an [Update Constant](#update-constants) (except the voltmx.gms.UPDATE\_AVAILABLE Constant ). |
| updateType \[Object\] - Optional | An Object that specifies the type of update flow. Following are the supported types of updates: APP\_UPDATE\_TYPE\_FLEXIBLE: A constant that specifies the update type as flexible. APP\_UPDATE\_TYPE\_IMMEDIATE: A constant that specifies the update type as immediate. The default type is APP\_UPDATE\_TYPE\_FLEXIBLE. |

  
Example

```
function statusCallback(info) {  
            voltmx.print("statusCallback" + info)  
        }  
        voltmx.gms.requestForAppUpdate({"statusCallback" : statusCallback, "updateType" : voltmx.gms.APP_UPDATE_TYPE_IMMEDIATE})
```

Return Value

None

Remarks

*   In case of flexible flow ,the API returns one of the following status codes in the statusCallback:

*   **UPDATE\_FLOW\_CONFIRMED\_BY\_USER**: The user has accepted the update request.
*   **UPDATE\_FLOW\_CANCELLED\_BY\_USER**: The user has denied the update request.
*   **RESULT\_IN\_APP\_UPDATE\_FAILED**: Something failed during the confirmation of the request. For example, the user terminates the app before responding to the update request.

*   In case of immediate flow, the API returns one of the following status codes in the statusCallback:

*   **UPDATE\_FLOW\_CONFIRMED\_BY\_USER**: The user has accepted the update request, and the update is successful. (In practice, the app must not receive this status code, as it is already updated)
*   **UPDATE\_FLOW\_CANCELLED\_BY\_USER**: The user has denied or canceled the update.
*   **RESULT\_IN\_APP\_UPDATE\_FAILED**: The flow failed either during the confirmation of the request, the download, or the installation of the update.

*   If you invoke this API when the [voltmx.gms.checkForAppUpdate](#checkForAppUpdate) API returns the **UPDATE\_NOT\_AVAILABLE** or **UPDATE\_UNKNOWN** status codes, the API call is ignored and the same statusCode is returned.
*   In case of flexible update flow, if you invoke this API when the [voltmx.gms.checkForAppUpdate](#checkForAppUpdate) API returns the **UPDATE\_IN\_PROGRESS** status code, the **UPDATE\_IN\_PROGRESS** status code is returned.
*   If you invoke this API when the app is running in the background, the API call is ignored and the **UPDATE\_NOT\_ALLOWED\_IN\_BACKGROUND** status code is returned.
*   In case of immediate update flow, when the user provides consent to install the update, Google Play displays the app update progress in full-screen mode for the entire duration of the update.
    
    During the update, if the user closes or terminates the app, the update must continue to be downloaded and installed in the background, without any additional confirmation from the user.
    
    However, when the app returns to the foreground, you must verify that the update is not stalled in the **UPDATE\_IN\_PROGRESS** state. If the update is stalled, you must invoke the **requestForAppUpdate** API as follows:
    
    voltmx.gms.requestForAppUpdate({"statusCallback" : statusCallback, "updateType" : voltmx.gms.APP\_UPDATE\_TYPE\_IMMEDIATE})
    
    You can track the foregroud state by registering for the onforeground callback, by using the [voltmx.application.setApplicationCallbacks](voltmx.application_functions.md#setappli) API.
    

Platform Availability

Android
</details>

<details close markdown="block"><summary>voltmx.gms.unRegisterAppUpdateListener</summary>
 The unRegisterAppUpdateListener API is used to unregister from callbacks that were registered to by using the [voltmx.gms.registerAppUpdateListener](#registerAppUpdateListener) API.

Syntax

`voltmx.gms.unRegisterAppUpdateListener()`

Input Parameters

None

  

Example

```
voltmx.gms.unRegisterAppUpdateListener()  
}
```

Return Value

None

Platform Availability

Android
</details>





<!-- [![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.gms.checkForAppUpdate](javascript:void(0);) 

* * *

The checkForAppUpdate API checks if an update is available for the app, while the app is in use.

Syntax

voltmx.gms.checkForAppUpdate({"statusCallback" : statusCallback})

Input Parameters

**statusCallback** - A mandatory callback function that is executed after the execution of the API call is complete. When the API call is successful, the API returns the voltmx.gms.UPDATE\_INFO\_RETRIEVED statusCode.

The **statusCallback** function contains the result info JS Object that has the following details:

  
| Parameter | Description |
| --- | --- |
| updateAvailabilityStatus \[Integer\] | The status of availability of an update for the app. The parameter can return any of the [Update Constants](#update-constants). |
| updateTypesAllowed \[List\] | The type of updates allowed. Following are the supported types of updates: APP\_UPDATE\_TYPE\_FLEXIBLE APP\_UPDATE\_TYPE\_IMMEDIATE If there are no updates allowed, this parameter returns an empty list. |
| updateVersionCode \[Integer\] | The version code of the app available for update, if an update is available. |
| stalenessDays \[Integer\] | Number of days that have passed since the Google Play Store learns of an update. This information helps the app decide whether it must initiate a flexible or immediate update. If there is no update available or if there is no information on staleness, this parameter returns a null value. |
| updatePriority \[Integer\] | The in-app update priority that is defined by the developer (for the update) in the Google Play Developer API . |
| totalBytes \[Long\] | Total number of bytes to be downloaded for the update. |
| bytesDownloaded \[Long\] | Number of bytes downloaded so far. |
| installStatus \[Constant\] | The install status of the app update. The parameter can return any of the [Install Constants](#install-constants). |
| packageName \[String\] | Package name of the app that is to be updated. |
| statusCode \[Constant\] | The parameter can return any of the following [Common constants](#common-constants): voltmx.gms.UPDATE\_INFO\_RETRIEVED voltmx.gms.NO\_ACTIVE\_NETWORK voltmx.gms.UPDATE\_ERROR voltmx.gms.PLAY\_CORE\_LIBRARY\_MISSING voltmx.gms.GMS\_LIBRARY\_MISSING voltmx.gms.GOOGLE\_PLAY\_SERVICE\_UNAVAILABLE When the statusCode is voltmx.gms.GOOGLE\_PLAY\_SERVICE\_UNAVAILABLE, the API returns the GMSErrorCode key, an integer value. When the statusCode is voltmx.gms.UPDATE\_ERROR, the API returns the updateErrorCode and updateErrorMessage keys. |

  

Example

```
function statusCallback(info) {  
	voltmx.print("updateAvailabilityStatus: " + info.updateAvailabilityStatus)  
	voltmx.print("updateTypesAllowed: " + info.updateTypesAllowed)  
	voltmx.print("updateVersionCode: " + info.updateVersionCode)  
	voltmx.print("stalenessDays: " + info.stalenessDays)  
	voltmx.print("updatePriority: " + info.updatePriority)  
	voltmx.print("totalBytes: " + info.totalBytes)  
	voltmx.print("bytesDownloaded: " + info.bytesDownloaded)  
	voltmx.print("installStatus: " + info.installStatus)  
	voltmx.print("packageName: " + info.packageName)  
        voltmx.print("statusCode: " + info.statusCode)  
}
  
voltmx.gms.checkForAppUpdate({"statusCallback" : statusCallback})
```

Return Value

None

Platform Availability

Android

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.gms.completeAppUpdate](javascript:void(0);) 

* * *

The completeAppUpdate API must be invoked in case of a flexible app update flow, to complete the app update. Invoke this API to complete an app update that was started by using the [voltmx.gms.requestForAppUpdate API](#requestForAppUpdate) and is in the DOWNLOADED state.

Syntax

voltmx.gms.completeAppUpdate({"statusCallback" : statusCallback});

Input Parameters

**statusCallback** - A mandatory callback function that is executed after the execution of the API call is complete. The callback function contains the result info JS Object that has the following details:

  
| Parameter | Description |
| --- | --- |
| statusCode \[Constant\] | A [staus code](#constants) constant. The parameter can return any of the following [Common constants](#common-constants): voltmx.gms.UPDATE\_ERROR voltmx.gms.PLAY\_CORE\_LIBRARY\_MISSING voltmx.gms.GMS\_LIBRARY\_MISSING voltmx.gms.GOOGLE\_PLAY\_SERVICE\_UNAVAILABLE |

 

Example

```
function statusCallback(info) {  
                    voltmx.print(info)  
        }  
        voltmx.gms.completeAppUpdate({"statusCallback" : statusCallback})
```

Return Value

None

Remarks

In case of flexible update, when you invoke the completeAppUpdate API in the foreground, a full-screen UI appears and the app restarts in the background. After the update is installed, the app restarts in the foreground. If you invoke the completeAppUpdate API in the background, the app update is silently installed in the background, without obscuring the app experience.

When the user moves the app into the foreground, HCL recommends that you check if an app update is waiting to be installed. If the app has an update in the INSTALL\_STATUS\_DOWNLOADED state, you must display a notification to the user requesting that they install the update, as the update data occupies space on the device storage.

Platform Availability

Android

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.gms.registerAppUpdateListener](javascript:void(0);) 

* * *

The registerAppUpdateListener API is used to register to callbacks that monitor the install status of the app update.

> **_Note:_** Monitoring the update state is only required for flexible updates. Once the flexible download begins, the app must monitor the update state to recognize when the update can be installed, and to display the update progress on the app UI. For immediate updates, Google Play handles the download and installation of the update.

Syntax

voltmx.gms.registerAppUpdateListener({"statusCallback" : statusCallback})

Input Parameters

**statusCallback** - A mandatory callback function that is executed after the execution of the API call is complete. The callback function contains the result info JS Object that has the following details:

  
| Parameter | Description |
| --- | --- |
| statusCode \[Constant\] | An [Install Constant](#install-constants). |
| downloadingInfo | This parameter is only populated when the **statusCode** is INSTALL\_STATUS\_DOWNLOADING and contains the following information: **totalBytes** \[Long\]: Total number of bytes to be downloaded for the update. **bytesDownloaded** \[Long\]: Number of bytes downloaded so far. |

  

Example

```
function statusCallback(info) {  
          voltmx.print(info.statusCode)  
          voltmx.print(info.statusMessage)  
          if(info.statusCode == voltmx.gms.INSTALL_STATUS_DOWNLOADING){  
              voltmx.print(info.downloadingInfo.bytesDownloaded)  
              voltmx.print(info.downloadingInfo.totalBytes)                  
          }  
  }  
  voltmx.gms.registerAppUpdateListener({"statusCallback" : statusCallback})
```

Return Value

None

Remarks

*   After the task is complete, HCL recommends that you unregister from the callbacks by using the voltmx.gms.unRegisterAppUpdateListener API.
*   When you invoke the registerAppUpdateListener API, any registered callbacks are overridden.

Platform Availability

Android

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.gms.requestForAppUpdate](javascript:void(0);) 

* * *

The requestForAppUpdate API starts the specified app update flow, if an update is available, while the app is in use.

In case of flexible update, when you invoke the requestForAppUpdate API, the app update is downloaded. You must then invoke the [voltmx.gms.completeAppUpdate API](#completeAppUpdate) to install and restart the app.

In case of immediate update, when you invoke the requestForAppUpdate API, the app update is downloaded and installed, and then the app restarts.

Syntax

voltmx.gms.requestForAppUpdate({"statusCallback" : statusCallback, "updateType" : voltmx.gms.APP\_UPDATE\_TYPE\_IMMEDIATE})

Input Parameters

  
| Parameter | Description |
| --- | --- |
| statusCallback \[Dictionary\] | A mandatory callback function that is executed after the execution of the API call is complete. The callback function contains the result info JS Object that has the following details: **statusCode** \[Constant\]: An [Common constant](#common-constants) or an [Update Constant](#update-constants) (except the voltmx.gms.UPDATE\_AVAILABLE Constant ). |
| updateType \[Object\] - Optional | An Object that specifies the type of update flow. Following are the supported types of updates: APP\_UPDATE\_TYPE\_FLEXIBLE: A constant that specifies the update type as flexible. APP\_UPDATE\_TYPE\_IMMEDIATE: A constant that specifies the update type as immediate. The default type is APP\_UPDATE\_TYPE\_FLEXIBLE. |

  

Example

```
function statusCallback(info) {  
            voltmx.print("statusCallback" + info)  
        }  
        voltmx.gms.requestForAppUpdate({"statusCallback" : statusCallback, "updateType" : voltmx.gms.APP_UPDATE_TYPE_IMMEDIATE})
```

Return Value

None

Remarks

*   In case of flexible flow ,the API returns one of the following status codes in the statusCallback:

*   **UPDATE\_FLOW\_CONFIRMED\_BY\_USER**: The user has accepted the update request.
*   **UPDATE\_FLOW\_CANCELLED\_BY\_USER**: The user has denied the update request.
*   **RESULT\_IN\_APP\_UPDATE\_FAILED**: Something failed during the confirmation of the request. For example, the user terminates the app before responding to the update request.

*   In case of immediate flow, the API returns one of the following status codes in the statusCallback:

*   **UPDATE\_FLOW\_CONFIRMED\_BY\_USER**: The user has accepted the update request, and the update is successful. (In practice, the app must not receive this status code, as it is already updated)
*   **UPDATE\_FLOW\_CANCELLED\_BY\_USER**: The user has denied or canceled the update.
*   **RESULT\_IN\_APP\_UPDATE\_FAILED**: The flow failed either during the confirmation of the request, the download, or the installation of the update.

*   If you invoke this API when the [voltmx.gms.checkForAppUpdate](#checkForAppUpdate) API returns the **UPDATE\_NOT\_AVAILABLE** or **UPDATE\_UNKNOWN** status codes, the API call is ignored and the same statusCode is returned.
*   In case of flexible update flow, if you invoke this API when the [voltmx.gms.checkForAppUpdate](#checkForAppUpdate) API returns the **UPDATE\_IN\_PROGRESS** status code, the **UPDATE\_IN\_PROGRESS** status code is returned.
*   If you invoke this API when the app is running in the background, the API call is ignored and the **UPDATE\_NOT\_ALLOWED\_IN\_BACKGROUND** status code is returned.
*   In case of immediate update flow, when the user provides consent to install the update, Google Play displays the app update progress in full-screen mode for the entire duration of the update.
    
    During the update, if the user closes or terminates the app, the update must continue to be downloaded and installed in the background, without any additional confirmation from the user.
    
    However, when the app returns to the foreground, you must verify that the update is not stalled in the **UPDATE\_IN\_PROGRESS** state. If the update is stalled, you must invoke the **requestForAppUpdate** API as follows:
    
    voltmx.gms.requestForAppUpdate({"statusCallback" : statusCallback, "updateType" : voltmx.gms.APP\_UPDATE\_TYPE\_IMMEDIATE})
    
    You can track the foregroud state by registering for the onforeground callback, by using the [voltmx.application.setApplicationCallbacks](voltmx.application_functions.md#setappli) API.
    

Platform Availability

Android

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.gms.unRegisterAppUpdateListener](javascript:void(0);) 

* * *

The unRegisterAppUpdateListener API is used to unregister from callbacks that were registered to by using the [voltmx.gms.registerAppUpdateListener](#registerAppUpdateListener) API.

Syntax

voltmx.gms.unRegisterAppUpdateListener()

Input Parameters

None

  

Example

```
voltmx.gms.unRegisterAppUpdateListener()  
}
```

Return Value

None

Platform Availability

Android -->

![](resources/prettify/onload.png)
