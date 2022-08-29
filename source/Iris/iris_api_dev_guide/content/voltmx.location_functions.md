
voltmx.location Namespace
=======================

The voltmx.location namespace defines a high-level interface to location information. It contains the following API elements.

Functions
---------

The `voltmx.location` namespace provides the following functions.


<details close markdown="block"><summary>voltmx.location.checkLocationSettings</summary>

* * *

This API is used to check whether the current location settings on the device meet the desired location accuracy setting specified by the [accuracyMode](#accuracyMode) property.

If the value of the requestModifyLocationSettings parameter is set as false, and if the location settings in the device do not meet the required [accuracyMode](#accuracyMode), the errorCallback is invoked with SETTINGS\_RESOLUTION\_REQUIRED errorCode.

When the errorCallback is invoked with the SETTINGS\_RESOLUTION\_REQUIRED errorCode, you can display a custom dialog box that explains the reason your app needs location access along with the Accept and Decline options. When the user selects Accept on the custom dialog box to enable location, you can invoke the API again with the same accuracyMode and the requestModifyLocationSettings parameter set to true.

**Syntax**

  `voltmx.location.checkLocationSettings(params);`

**Parameters**

**params \[Object\] - Mandatory**

  Using the params parameter, the user can customize the behavior of the API. It is an object that has the following key-value pairs:

  | key | Description |
  | --- | --- |
  | accuracyMode \[Number\] - Optional | Specifies the accuracy and power requirements to be met while fetching location updates. The default value for accuracyMode is constants.ACCURACY\_HIGH. The possible values for accuracyMode are: **constants.ACCURACY\_HIGH**: Used to request the most accurate locations available. **constants.ACCURACY\_NO\_POWER**: Used to request the best accuracy possible with no additional power consumption. **constants.ACCURACY\_BALANCED\_POWER**: Used to request "block" level accuracy. Block level accuracy is considered to be about 100 meter accuracy. Using a coarse accuracy such as this often consumes less power. **constants.ACCURACY\_LOW\_POWER**: Used to request "city" level accuracy. City level accuracy is considered to be about 10km accuracy. Using a coarse accuracy such as this often consumes less power. |
  | requestModifyLocationSettings \[Boolean\] - Optional | When you set this option to true, if the location settings in the device do not meet the required [accuracyMode](#accuracyMode), a system dialog box is automatically invoked that helps the user enable the necessary location settings with a single tap. However, if you invoke the API (with the requestModifyLocationSettings parameter set to true) when the app runs in the background, based on the Android OS version, the dialog box may not appear on a device. Based on the value of [accuracyMode](#accuracyMode), the Android system ensures that the required location settings(such as GPS, WIFI Scanning, Mobile Network/Data) are enabled on the device (based on the Android OS version and the device manufacturer). Based on Android Native behavior on Android 9 (API level 28) or later devices, GPS is automatically turned on (by the Android system) for all the accuracy modes except **constants.ACCURACY\_LOW\_POWER**. |
  | onSuccess \[Function\] - Mandatory | The callback function to be executed when the device has the necessary settings enabled for the desired [accuracyMode](#accuracyMode). This callback is invoked even when the user accepts the setting change that is requested with the [requestModifyLocationSettings](#requestModifyLocationSettings) parameter set to true. |
  | onFailure \[Function\] - Mandatory | The callback function to be executed when the location settings are not adequate due to various errors as indicated by the **errorCode** argument of this callback. For information on the error codes, refer [Location Settings Error Codes](#LocationErrorCodes). |

**Example**

  ```
function successcallback1() {
    alert("All location settings are satisfied. The client can initialize location requests now.");
  }

  function errorcallback1(errorCode) {
    if (errorCode == voltmx.location.SETTINGS_RESOLUTION_REQUIRED) {
        alert("Location settings are not satisfied. Call this API again by setting requestModifyLocationSettings value to true then it will show the user a dialog to resolve location settings.");
    } else if (errorCode == voltmx.location.SETTINGS_MODIFICATION_REQUEST_DENIED) {
        alert("The user denied the settings change.");
    }
  }
  var params = {
    requestModifyLocationSettings: true,
    accuracyMode: constants.ACCURACY_BALANCED_POWER,
    onSuccess: successcallback1,
    onFailure: errorcallback1
  };
  voltmx.location.checkLocationSettings(params);
```  


**Return Values**

  None.

**Exceptions**

  Location Settings Error Codes

  
  | Error Code | Error Message |
  | --- | --- |
  | com.location.SETTINGS\_RESOLUTION\_REQUIRED | Indicates that location settings in the device currently do not meet the desired accuracyMode . However, they can be modified by the end-user if requested using requestModifyLocationSettings set to true. |
  | com.location.SETTINGS\_CHANGE\_UNAVAILABLE | This indicates Location settings in the device currently do not meet the desired accuracyMode , and we have no way to fix the settings. |
  | com.location.SETTINGS\_MODIFICATION\_REQUEST\_DENIED | This indicates that the user was requested to change the settings, but the user denied the settings change request. |
  | com.location.GOOGLE\_PLAY\_SERVICES\_UNAVAILABLE | This indicates that Google Play Location services are not available on this device to call this API. |

 

**Remarks**

*   Ensure that you enable the **Use Google Play Location Services** check box in the **Project Settings** > **Native** > **Android Mobile/Tablet** section.
*   You do not need access to location permissions to use this API.

**Platform Availability**

  Available on Android platform.

* * *

</details>
<details close markdown="block"><summary>voltmx.location.clearWatch</summary> 

* * *

When invoked, the clearWatch first checks the value of the given watchID argument. If this value does not correspond to any previously started watch process, then the method returns immediately without performing any further action. Otherwise, the watch process identified by the watchID argument is stopped immediately and no further callbacks are invoked.

**Syntax**

  `voltmx.location.clearWatch(watchID);`

**Parameters**

  
  | Function | Description |
  | --- | --- |
  | _watchID_ \[Number\] - Mandatory | Specifies the number that uniquely identifies the watch. |

**Example**

  ```
voltmx.location.clearWatch(watchID);
  ```

**MVC**

  ```
stopWatchingPosition: function() {
    try {
        voltmx.location.clearWatch(this.watchID); // clears/stops watching position of the user which was being monitored using watchPosition API
        alert("Cleared !");
    } catch (exception) {
        alert(exception);
    }

    /* Please see example of clearWatch() in "frmTrackingUserLocation" Form of [sample app](http://docs.voltmx.com/voltmxlibrary/iris/zip/sampleapps/LocationApp.zip) */
  }
  ```

**Free Form**

  ```
function stopWatchingPosition () {
  try{
    voltmx.location.clearWatch(watchID); // clears/stops watching position of the user which was being monitored using watchPosition API
    alert("Cleared !");
  }catch(exception){
    alert(exception);
  }
  }
```  


**Return Values**

  None.

**Exceptions**

  LocationError

**Platform Availability**

  Available on all platforms except Desktop Web.

* * *

</details>
<details close markdown="block"><summary>voltmx.location.getCurrentPosition</summary> 

* * *

Using the getCurrentPostion function, you can get the current location of the device.

**Syntax**
  `voltmx.location.getCurrentPosition( successcallback, errorcallback, positionoptions)`

**Parameters**

**successcallback \[Function\] - Mandatory**

  The successcallback function specifies the callback function that must be executed when the API call is successful. The signature of the callback function is successcallback(position) where, **position** contains the coordinates of the geo-location that are created and returned by the API. It is an object that contains certain key-value pairs.

  coords \[Object\] - Coordinates that has the following key-value pairs:
  
    
  | key | Description |
  | --- | --- |
  | latitude \[Number\] | Latitude in decimal degrees. |
  | longitude \[Number\] | Longitude in decimal degrees. |
  | altitude \[Number\] | Height of the location in meters above the ellipsoid. |
  | accuracy \[Number\] | Accuracy level of the latitude and longitude coordinates in meters. |
  | altitudeaccuracy \[Number\] | Accuracy level of the altitude coordinate in meters. |
  | heading \[Number\] | Direction of travel, specified in degrees counting clockwise relative to the true north. |
  | speeding \[Number\] | Current ground speed of the device, specified in meters per second. |
  | timestamp \[Number\] | Represents the time when the Position object was acquired. |

**errorcallback \[Function\] - Optional**

  The errorcallback function specifies the callback function that must be executed when the API call fails. The callback function has the following signature:

  errorcallback(positionerror)- positionerror is an object that has the following key-value pairs:

    
  | key | Description |
  | --- | --- |
  | code \[Number\] | error code. |
  | message \[String\] | error message. |

  For more information on the Error codes and messages, refer [error code](#ErrorCode).

**positionoptions \[Object\] - Optional**

Using the positionoptions parameter, the user can customize the retrieval of the geolocation. It is an object that has the following key-value pairs:

| key | Description |
| --- | --- |
| accuracyMode \[Number\] | Specifies the accuracy and power requirements to be met while fetching the device location. The default value for accuracyMode is constants.ACCURACY\_BALANCED\_POWER.<br/><br/>**_Note:_** This property is only available on the Android platform. Ensure that you set the value of the [enableHighAccuracy](#enableHighAccuracy) property to **false**.<br/><br/>The possible values for accuracyMode are:<br/><br/>**constants.ACCURACY\_HIGH**: Used to request the most accurate locations available.<br/>**constants.ACCURACY\_NO\_POWER**: Used to request the best accuracy possible with no additional power consumption.<br/>**constants.ACCURACY\_BALANCED\_POWER**: Used to request "block" level accuracy. Block level accuracy is considered to be about 100 meter accuracy. Using a coarse accuracy such as this often consumes less power.<br/>**constants.ACCURACY\_LOW\_POWER**: Used to request "city" level accuracy. City level accuracy is considered to be about 10km accuracy. Using a coarse accuracy such as this often consumes less power. <br/><br/>  **_Important:_** Ensure that you enable the **Use Google Play Location Services** check box in the **Project Settings** > **Native** > **Android Mobile/Tablet** section. |
| getActiveLocation | Set to `true` to get the current location fix on the device. When you use this property, active location computation is caused in the device. This property returns a single fresh location if the device location can be determined within a reasonable time period (tens of seconds). If the device location is not determined within a reasonable time period, the property returns a Null value.<br/><br/>This property may return locations that are a few seconds old, but does not return much older locations. Therefore, this property is suitable for foreground apps that require a single fresh current location.<br/><br/>If you invoke the API (with the getActiveLocation parameter set to true) when the app runs in the background, the API call is throttled under the background location limits. Therefore, the API call may often return Null locations (values) for apps that run in the background.<br/><br/>**_Important:_** Ensure that you enable the Use Google Play Location Services check box in the Project Settings > Native > Android Mobile/Tablet section.<br/><br/>**_Note:_** This property is only available on the Android platform. |
| enableHighAccuracy \[Boolean\] | Provides a hint to the implementation in order to receive the best possible result. |
| maximumAge \[Number\] | Indicates the application to accept a cached position whose age is no greater than the specified time in milliseconds. |
| minimumTime \[Number\] | Indicates the desired interval for active location updates in milliseconds. > **_Note:_** This property is only available on the Android platform. |
| requestModifyLocationSettings \[Boolean\] | When you set this parameter to true, if the app cannot fetch the device location due to inadequate location settings on the device, the system automatically invokes a dialog box that helps the user enable the necessary location settings with a single tap. However, if you invoke the API (with the requestModifyLocationSettings parameter set to true) when the app runs in the background, based on the Android OS version, the dialog box may not appear on a device. Based on the values of [enableHighAccuracy](#enableHighAccuracy) or [accuracyMode](#accuracyMode), the Android system ensures that the required location settings(such as GPS, WIFI Scanning, Mobile Network/Data) are enabled on the device (based on the Android OS version and the device manufacturer). Based on Android Native behavior on Android 9 (API level 28) or later devices, GPS is automatically turned on (by the Android system) for all the accuracy modes except **constants.ACCURACY\_LOW\_POWER**<br/><br/>**_Important:_** Ensure that you enable the **Use Google Play Location Services** check box in the **Project Settings** > **Native** > **Android Mobile/Tablet** section.<br/><br/>**_Note:_** This property is only available on the Android platform. |
| requireBackgroundAccess \[Boolean\] | Set to `true` to fetch the device location updates even when the app is running in the background. If the value is set to `false` (or not specified), to conserve battery power, the app automatically de-registers itself from fetching the device location when the app moves to the background. The app will automatically re-register itself to get location updates when the app moves to the foreground. In apps that use Target SDK version 29 (and later), you must add the ACCESS\_BACKGROUND\_LOCATION permission in the Android Manifest file to get location updates in the background.<br/><br/>**_Note:_** This property is only available on the Android platform. |
| timeout \[Number\] | Denotes the maximum length of time in milliseconds that is allowed to pass from the call. |
| useBestProvider | Set to `true` to improve the reliability of calls to this function on Android devices. Omitting this option on Android could cause calls to this function to have intermittent timeouts. |


**Example**

```
/******************************************************************
  *	Name   : getCurrentPosition function
  *	Author  : VoltMX
  *	Purpose : This function helps to get the current location
  *******************************************************************/
  function getPosition() {
    var positionoptions = {
        timeout: 15000
    }; // 15 secs 
    positionoptions.enableHighAccuracy = true;
    voltmx.location.getCurrentPosition(successcallback, errorcallback, positionoptions);
  }

  // Callback that is executed on success of getCurrentPosition function.
  function successcallback(position) {
    var geoPosition = "Latitude: " + position.coords.latitude;
    geoPosition = geoPosition + " Longitude: " + position.coords.longitude;
    geoPosition = geoPosition + " Altitude: " + position.coords.altitude;
    geoPosition = geoPosition + " Accuracy: " + position.coords.accuracy;
    geoPosition = geoPosition + " Altitude Accuracy: " + position.coords.altitudeAccuracy;
    geoPosition = geoPosition + " Heading: " + position.coords.heading;
    geoPosition = geoPosition + " Speeding: " + position.coords.speeding;
    geoPosition = geoPosition + " Timestamp: " + position.timestamp;
    alert(geoPosition);
  }

  // Callback that is executed on error of getCurrentPosition function.
  function errorcallback(positionerror) {
    var errorMesg = "Error code: " + positionerror.code;
    errorMesg = errorMesg + " message: " + positionerror.message;
    alert(errorMesg);
  }
  ```

**MVC Example**

  ```
currentPositionSuccessCallback: function(position) {
    /* 
  //  position object will have the below properties .
         latitude = position.coords.latitude 
         longitude = position.coords.longitude
         altitude = position.coords.altitude
         atitudeAccuracy = position.coords.altitudeAccuracy
         heading = position.coords.heading
         speeding = position.coords.speeding
         timestamp = position.timestamp
    */
    alert(JSON.stringify(position));
    /* use the position depending on the use case ,some of the use cases are listed below .    
	1. Get the nearby events(like ATMs, Restaurants …etc.)  based on the user current location
	2. In a tracking-based scenario ,use as an initial position of the user .
	*/

  },
  currentPositionFailureCallback: function(error) {
    alert(JSON.stringify(error));
  },
  getCurrentPositionOfDevice: function() {
    var options = {};
    options.enableHighAccuracy = true; //  uses provider that gets accurate location
    options.timeout = 10000; // timeout in milliseconds  
    options.requireBackgroundAccess  = true; // gets the location updates in the background as well
    voltmx.location.getCurrentPosition(this.currentPositionSuccessCallback, this.currentPositionFailureCallback, options);
  }

  /* Please see example of getCurrentPosition() in "frmTrackingUserLocation" Form of [sample app](http://docs.voltmx.com/voltmxlibrary/iris/zip/sampleapps/LocationApp.zip)*/
  ```

**Free form Example**

  ```
function currentPositionSuccessCallback(position) {
  /* 
	// position object will have the below properties .
   	latitute = position.coords.latitude
    longitude = position.coords.longitude
    altitude = position.coords.altitude
    atitudeAccuracy = position.coords.altitudeAccuracy
    heading = position.coords.heading
    speeding = position.coords.speeding
    timestamp = position.timestamp
	*/
  alert(JSON.stringify(position));
  /* use the position depending on the use case ,some of the use cases are listed below .    
	1. Get the nearby events(like ATMs, Restaurants …etc.)  based on the user current location
	2. In a tracking-based scenario ,use as an initial position of the user .
	*/

  }

  function currentPositionFailureCallback(error) {
    alert(JSON.stringify(error));
  }

  function getCurrentPositionOfDevice () {
    var options = {};
    options.enableHighAccuracy = true; 
    options.timeout = 10000; // timeout in milli seconds      
   options.requireBackgroundAccess  = true; // gets the location updates in the background as well
    voltmx.location.getCurrentPosition(currentPositionSuccessCallback, currentPositionFailureCallback, options);
  }
```  


**Return Values**

  None

**Exceptions**

  LocationError

  | Error Code | Error Message |
  | --- | --- |
  | 1 | PERMISSION\_DENIED |
  | 2 | POSITION\_UNAVAILABLE |
  | 3 | TIMEOUT |

   

  Android-specific Error Codes

  | Error Code | Error Message | Description |
  | --- | --- | --- |
  | 4 | Missing android.permission.ACCESS\_BACKGROUND\_LOCATION permission in AndroidManifest.xml | The developer has missed adding the android.permission.ACCESS\_BACKGROUND\_LOCATION permission in the AndroidManifest.xml |
  | 5 | BACKGROUND\_PERMISSION\_DENIED | The end-user has selected ”Allow only while the app is in use" instead of “Allow all the time” option on devices that run on Android 9 (and later). |
  | 6 | Permission Denied for <PermissionName> with Don't Ask Again | The user has denied permission with the Don't ask again or Never ask again option. |

  

**Remarks**

  This API takes up to three arguments. When invoked, the API returns and asynchronously attempts to obtain the current location of the device. The app on which this API is used must contain [runtime permission](runtime_permissions.md) from the end-user to obtain the current location of the device. If the API is invoked without obtaining the permission, device native platforms automatically display a system permission dialog box with **Allow** and **Deny** options. The end-user can grant permission to get the current location.

  >**_Note:_** When you test your application with Live Preview, the system permission dialog appears as expected. However, for published SPA and Desktop Web applications, the dialog box appears only when the application URL uses the https protocol. If the URL uses http, the dialog box does not appear, and location APIs will not work.

  In Android apps that use Target SDK version 29 (and later), and the **requireBackgroundAccess** property is enabled, you must manually add the `ACCESS_BACKGROUND_LOCATION` permission in the Android Manifest file to get location updates in the background.

  For Android Channel apps, the following permissions are required.

  - ACCESS_FINE_LOCATION
  - ACCESS_COARSE_LOCATION

  In Project settings -> Native -> Android Mobile/Tablet, make these two changes:

  - Check "Use Google Play Location Services".
  - Add the permission tag under manifest tag \<uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION"/\>

  For more details on these permissions, see [https://developer.android.com/training/location/permissions](https://developer.android.com/training/location/permissions).


  If the end-user taps the **Allow** option, the attempt is successful, the successCallback is invoked (i.e. the handleEvent operation must be called on the callback object) with a new Position object, reflecting the current location of the device. If the attempt fails, the errorCallback is invoked with a new PositionError object, reflecting the reason for the failure. This is applicable only for Android and iOS platforms.

  If the end-user taps the **Deny** option, the **errorcallback** is invoked with the **PERMISSON\_DENIED** error code and error message.

  > **_Note:_** Runtime permissions are applicable only on iOS and Android platforms

**Platform Availability**

  Available on all platforms except prior to IE8 releases.

* * *

</details>
<details close markdown="block"><summary>voltmx.location.watchPosition</summary> 

* * *

Using the watchPosition function, you can set callbacks that report the device's position.

**Syntax**

  `voltmx.location.watchPosition( successcallback,  errorcallback,  positionoptions)`

**Parameters**

  **successcallback \[Function\] - Mandatory**

  The successcallback function specifies the callback function that must be executed when the API call is successful. The signature of the callback function is successcallback(position) where, **position** contains the coordinates of the geo-location that are created and returned by the API. It is an object that contains certain key-value pairs.  

  <p>coords \[Object\] - Coordinates that has the following key-value pairs:</p>  

   
   | key | Description |
   | --- | --- |
   | latitude \[Number\] | Latitude in decimal degrees. |
   | longitude \[Number\] | Longitude in decimal degrees. |
   | altitude \[Number\] | Height of the location in meters above the ellipsoid. |
   | accuracy \[Number\] | Accuracy level of the latitude and longitude coordinates in meters. |
   | altitudeaccuracy \[Number\] | Accuracy level of the altitude coordinate in meters. |
   | heading \[Number\] | Direction of travel, specified in degrees counting clockwise relative to the true north. |
   | speeding \[Number\] | Current ground speed of the device, specified in meters per second. |
   | timestamp \[Number\] | Represents the time when the Position object was acquired. |

**errorcallback \[Function\] - Optional**

  The errorcallback function specifies the callback function that must be executed when the API call fails. The callback function has the following signature:

  errorcallback(positionerror)- positionerror is an object that has the following key-value pairs:

    
  | key | Description |
  | --- | --- |
  | code \[Number\] | error code. |
  | message \[String\] | error message. |

  For more information on the Error codes and messages, refer [error code](#Error_Code).

**positionoptions \[Object\] - Optional**

  Using the positionoptions parameter, the user can customize the retrieval of the geolocation. It is an object that has the following key-value pairs:

    
  | key | Description |
  | --- | --- |
  | accuracyMode \[Number\] | Specifies the accuracy and power requirements to be met while fetching location updates. The default value for accuracyMode is constants.ACCURACY\_BALANCED\_POWER.<br/><br/> **_Note:_** This property is only available on the Android platform. Ensure that you set the value of the [enableHighAccuracy](#enableHighAccuracy1) property to **false**. <br/>The possible values for accuracyMode are: **constants.ACCURACY\_HIGH**: Used to request the most accurate locations available. **constants.ACCURACY\_NO\_POWER**: Used to request the best accuracy possible with no additional power consumption. **constants.ACCURACY\_BALANCED\_POWER**: Used to request "block" level accuracy. Block level accuracy is considered to be about 100 meter accuracy. Using a coarse accuracy such as this often consumes less power. **constants.ACCURACY\_LOW\_POWER**: Used to request "city" level accuracy. City level accuracy is considered to be about 10km accuracy. Using a coarse accuracy such as this often consumes less power. <br/><br/>**_Important:_** Ensure that you enable the **Use Google Play Location Services** check box in the **Project Settings** > **Native** > **Android Mobile/Tablet** section. |
  | enableHighAccuracy \[Boolean\] | Provides a hint to the implementation in order to receive the best possible result. |
  | fastestInterval \[Number\] | Sets the fastest interval for location updates in milliseconds. The fastestInterval key controls the rate at which your application will receive location updates, which might be faster than minimumTime in some cases.This happens when other apps fetch location updates and the current app receives them passively to save power. <br/><br/>**_Note:_** This property is only available on the Android platform. The rate at which the app receives the fastest update will not be less than the value specified for the fastestInterval property. The value for the fastestInterval must be more than zero and less than the value of minimumTime (i.e, 0 < fastestInterval <= minimumTime). If you do not set the value for fastestInterval, the value of minimumTime is set, by default. <br/><br/>**_Note:_** Ensure that you have enabled the **Use Google Play Location Services** checkbox in the **Project Settings** > **Native** > **Android** section of VoltMX Iris. |
  | improveBGLocationUpdateFrequency \[Boolean\] | Set the property to `true` to receive location updates with a better frequency in the background. This approach specifically helps when the app goes into Doze mode when it is running in the background. However, there might be a decrease in fetching location updates when the app runs in the foreground with the value of the improveBGLocationUpdateFrequency parameter set to **true**. This is a behavioral issue that occurs as the underlying Android APIs for receiving better foreground and background updates are different. You must de-register from the existing location listener and register again with a value configured for the improveBGLocationUpdateFrequency parameter. Set the value of the parameter to **true** if your app runs in the background, and **false** if your app runs in the foreground. While determining if the app runs in the foreground or background, you must take the following factors into consideration: Determine whether the app is running in the foreground or background by using the **onforeground** and **onbackground** callbacks of the [voltmx.application.setApplicationCallbacks](voltmx.application_functions.md#setappli) API. When you start a foreground service by using the [voltmx.application.startForegroundService](voltmx.application_functions.md#StartForeground) API (or from a third-party library), the OS treats the application as if it runs in the foreground, even when the user moves the app to the background. <br/><br/>**_Note:_** This property is only available on the Android platform. Ensure that you enable the **Use Google Play Location Services** check box in the **Project Settings**  **Native**  >  **Android Mobile/Tablet** section. <br/><br/>If your app follows the best practices recommended by Android, the app must not request for background location updates without notifying the user. Therefore, you must set the value of the requireBackgroundAccess parameter to `true` and display a notification to the user by using a foreground service (instead of using the improveBGLocationUpdateFrequency parameter). The notification must imply that the app fetches location updates even when it runs in the background. In Android apps that use Target SDK version 29 (and later), to get location updates in the background, you must set the value of the `locationListenerType` property to `always` or `background` in the **androidbuild.properties** file to automatically add necessary AndroidManifest entries. |
  | maximumAge \[Number\] | Indicates the application to accept a cached position whose age is no greater than the specified time in milliseconds. |
  | minimumDistance \[Number\] | Minimum distance in meters between location updates. |
  | minimumTime \[Number\] | Minimum time in milliseconds between location updates. |
  | requestModifyLocationSettings \[Boolean\] | When you set this parameter to true, if the app cannot fetch location updates due to inadequate location settings on the device, the system automatically invokes a dialog box that helps the user enable the necessary location settings with a single tap. However, if you invoke the API (with the requestModifyLocationSettings parameter set to true) when the app runs in the background, based on the Android OS version, the dialog box may not appear on a device. Based on the values of [enableHighAccuracy](#enableHighAccuracy) or [accuracyMode](#accuracyMode), the Android system ensures that the required location settings(such as GPS, WIFI Scanning, Mobile Network/Data) are enabled on the device (based on the Android OS version and the device manufacturer). Based on Android Native behavior on Android 9 (API level 28) or later devices, GPS is automatically turned on (by the Android system) for all the accuracy modes except **constants.ACCURACY\_LOW\_POWER**. <br/><br/> **_Important:_** Ensure that you enable the **Use Google Play Location Services** check box in the **Project Settings** > **Native** > **Android Mobile/Tablet** section. <br/><br/> **_Note:_** This property is only available on the Android platform. |
  | requireBackgroundAccess \[Boolean\] | Set to `true` to fetch the device location updates even when the app is running in the background. If the value is set to `false` (or not specified), to conserve battery power, the app automatically de-registers itself from fetching location updates when the app moves to the background. The app will automatically re-register itself to get location updates when the app moves to the foreground. In order to continue receiving location updates (when a user moves the app to the background), invoke the [voltmx.application.startForegroundService](voltmx.application_functions.md#StartForeground) API to start a Foreground Service that displays a notification to the user. The notification must contain information that states that the app has access to the device location while it runs in the background. When you start a foreground service by using the [voltmx.application.startForegroundService](voltmx.application_functions.md#StartForeground) API (or from a third-party library), the application is treated as if it runs in the foreground, even when the user moves the app to the background. The app will continue to receive periodic location updates with the same frequency as that of an app running in the foreground. When a user interacts with the app, you can use the [voltmx.application.stopForegroundService](voltmx.application_functions.md#stopForeground) API to stop the foreground service and clear the notification. Determine whether the app is running in the foreground or background by using the **onforeground** and **onbackground** callbacks of the [voltmx.application.setApplicationCallbacks](voltmx.application_functions.md#setappli) API. In apps that use Target SDK version 29 (and later), you must add the ACCESS\_BACKGROUND\_LOCATION permission in the Android Manifest file to get location updates in the background. <br/><br/> **_Note:_** This property is only available on the Android platform. |
  | timeout \[Number\] | Denotes the maximum length of time in milliseconds that is allowed to pass from the call. |

<br/>  

**Return Values**

  | Return Value | Description |
  | --- | --- |
  | watchID \[Number\] | Returns a number that denotes the unique ID of the watch operation. |

**Example**

  ```
function successcallback1(position) {
      lblTest.text = "working with watchPosition success full call back";
      var geoPosition = "Latitude: " + position.coords.latitude;
      geoPosition = geoPosition + " Longitude: " + position.coords.longitude;
      geoPosition = geoPosition + " Altitude: " + position.coords.altitude;
      geoPosition = geoPosition + " Accuracy: " + position.coords.accuracy;
      geoPosition = geoPosition + " Altitude Accuracy: " + position.coords.altitudeAccuracy;
      geoPosition = geoPosition + " Heading: " + position.coords.heading;
      geoPosition = geoPosition + " Speeding: " + position.coords.speeding;
      geoPosition = geoPosition + " Timestamp: " + position.timestamp;
      alert(geoPosition);
  }

  function errorcallback1(positionerror) {
      lblTest.text = "working with watchPosition err call back";
      var errorMesg = "Error code: " + positionerror.code;
      errorMesg = errorMesg + " message: " + positionerror.message;
      alert(errorMesg);
  }
  var positionoptions = {
      maximumAge: 3000,
      minimumDistance: 5,
      minimumTime: 5000
  };
  watchID = voltmx.location.watchPosition(successcallback1, errorcallback1, positionoptions);
  ```  


**MVC Example**

  ```
watchID: null,
    watchPositionSuccessCallback: function(position) {
      /* 
      // position object will have the below properties .
          latitute = position.coords.latitude
        longitude = position.coords.longitude
        altitude = position.coords.altitude
        atitudeAccuracy = position.coords.altitudeAccuracy
        heading = position.coords.heading
        speeding = position.coords.speeding
        timestamp = position.timestamp
      */
      alert(JSON.stringify(position));
    },
    watchPositionFailureCallback: function(error) {
      alert(JSON.stringify(error));
    },
    watchPositionOfDevice: function() {
      var self = this;
      var options = {};
      options.maximumAge = 1000;
      options.minimumTime = 2000; // time in milli seconds
      options.minimumDistance = 2; // distance in meters   
     options.requireBackgroundAccess  = true; // gets the location updates in the background as well
      this.watchID = voltmx.location.watchPosition(this.watchPositionSuccessCallback,this.watchPositionFailureCallback, options);
      /* Use-Cases:
    In tracking-based scenarios, the watchPosition() API can be used to 
      monitor a position
    */
    
    /*Please see example of watchPosition() in "frmTrackingUserLocation" Form of [sample app](http://docs.voltmx.com/voltmxlibrary/iris/zip/sampleapps/LocationApp.zip)*/
    }
```  


**Free Form Example**

  ```
watchID = null;

  function watchPositionSuccessCallback(position) {
      /* 
          // position object will have the below properties .
        latitute = position.coords.latitude
        longitude = position.coords.longitude
        altitude = position.coords.altitude
        atitudeAccuracy = position.coords.altitudeAccuracy
        heading = position.coords.heading
        speeding = position.coords.speeding
        timestamp = position.timestamp
        */

      alert(JSON.stringify(position));
  }

  function watchPositionFailureCallback(error) {
      alert(JSON.stringify(error));
  }

  function watchPositionOfDevice() {
      var self = this;
      var options = {};
      options.maximumAge = 1000; // use cached position if exists in mentioned time(in milliseconds)
      options.minimumTime = 2000; // time criteria for location updates
      options.minimumDistance = 2; // distance criteria for location updates   
     options.requireBackgroundAccess  = true; // gets the location updates in the background as well
      watchID = voltmx.location.watchPosition(watchPositionSuccessCallback, watchPositionFailureCallback, options);
  }
```  


**Exceptions**

  * LocationError

  * Error Code

  | Error Code | Error Message |
  | --- | --- |
  | 1 | PERMISSION\_DENIED |
  | 2 | POSITION\_UNAVAILABLE |
  | 3 | TIMEOUT |

   

**Android-specific Error Codes**

  | Error Code | Error Message | Description |
  | --- | --- | --- |
  | 4 | Missing android.permission.ACCESS\_BACKGROUND\_LOCATION permission in AndroidManifest.xml | The developer has missed adding the android.permission.ACCESS\_BACKGROUND\_LOCATION permission in the AndroidManifest.xml |
  | 5 | BACKGROUND\_PERMISSION\_DENIED | The end-user has selected ”Allow only while the app is in use" instead of “Allow all the time” option on devices that run on Android 9 (and later). |
  | 6 | Permission Denied for <PermissionName> with Don't Ask Again | The user has denied permission with the Don't ask again or Never ask again option. |

  

**Remarks**

  The behavior of this function depends on the underlying hardware platform. For example, if your app is running on Android and you set minimumTime and minimumDistance to their minimum possible values, the callback function in the _successcallback_ parameter will not be called, as per the [Android documentation](https://developers.google.com/android/reference/com/google/android/gms/location/LocationRequest#setInterval(long)).

  This API takes one, two, or three arguments. When invoked, it must immediately return a number that uniquely identifies a watch operation and then asynchronously start the watch operation. This operation first attempts to obtain the current location of the device. Your app needs [runtime permission](runtime_permissions.md) from the end-user to obtain the current location of the device. If you call the API without obtaining the permission, platforms automatically pops up a system permission dialog box with **Allow** and **Deny** options, asking the end-user to grant permission to get the current location.

  In Android apps that use Target SDK version 29 (and later), and the **requireBackgroundAccess** property is enabled, you must manually add the `ACCESS_BACKGROUND_LOCATION` permission in the Android Manifest file to get location updates in the background.

  If the end-user taps the **Allow** option, the attempt is successful, the succesCallback is invoked (i.e. the handleEvent operation must be called on the callback object) with a new Position object, reflecting the current location of the device. If the attempt fails, the errorCallback is invoked with a new PositionError object, reflecting the reason for the failure.

  If the end-user taps the **Deny** option, the errorcallback in invoked with the **PERMISSON\_DENIED** error code and error message.

  > **_Note:_** The runtime permissions are applicable only in the iOS and Android platforms.

  The watch operation continues to monitor the position of the device and invokes the appropriate callback every time this position changes. The watch operation continues until the clearwatch method is called with the corresponding identifier.  


**Platform Availability**

  <!-- Available on all platforms except Desktop Web, IE8 and prior to IE8 releases. -->
  Available on all platforms except Desktop Web, IE9 and prior to IE9 releases.

* * *

</details>

![](resources/prettify/onload.png)
