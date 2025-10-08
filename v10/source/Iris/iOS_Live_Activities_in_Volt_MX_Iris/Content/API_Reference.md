
>**Note :** All the APIs listed below are only applicable from iOS 16.2

<details close markdown="block"><summary id="live_start_01">voltmx.liveActivity.start</summary>

**Syntax**

voltmx.liveActivity.start(activityParams, pushType, onSuccessCallback, onFailureCallback)

**Description**

Starts a Live Activity locally by initializing it with the required attributes and content state. This enables real-time updates and persistent display on the Lock Screen and Dynamic Island.

**Input Parameters**

<html>
<head>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
tr:nth-child(even) {
  background-color: white;
}
</style>
</head>
<body>
<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>activityParams</td>
<td>Object</td>
<td>Contains the required attributes and state data for the Live Activity</td>
</tr>
<tr>
<td>pushType</td>
<td>Constant</td>
<td>Specifies the push capability of the Live Activity. It can be:<br><li>voltmx.liveActivity.PUSHTYPE_NIL: No push updates
<li>voltmx.liveActivity.PUSHTYPE_TOKEN: Updates via ActivityKit push notifications.<li>
voltmx.liveActivity.PUSHTYPE_CHANNEL: Updates via broadcast channels (Valid from iOS 18+).</td>
</tr>
<tr>
<td>onSuccessCallback</td>
<td>Function</td>
<td>Callback function invoked on successful start of Live Activity.<br>For voltmx.liveActivity.PUSHTYPE_NIL and <br>voltmx.liveActivity.PUSHTYPE_CHANNEL<li>Returns activityID.<br>For voltmx.liveActivity.PUSHTYPE_TOKEN:<li>Returns activityID and pushToken.<li>If a new pushToken is generated (different from the previous one), this callback is triggered again.<li>The retrieval of pushToken is an asynchronous process.</td>
</tr>
<tr>
<td>onFailureCallback</td>
<td>Function</td>
<td>Callback function invoked in case of failure, returning an error object containing errorCode, errorMessage, and errorDescription. Refer Exceptions for different types of error constants.</td>
</tr>
</table>
</body>
</html>


**The following is the breakup of activityParams:**


| Parameter  | Type |Description|
| ------------- |-------------|-------------|
| attributesName     | String    |The name of the struct conforming to the ActivityAttributes protocol. This must match the attributes struct name used in the Live Activity configuration. The same attributes name was also mentioned earlier<br>under ‘Enable iOS Live Activity’ as one of the values in ‘Attributes’ textfield.</br>|
| state     | Object    |A key-value pair containing dynamic properties (ContentState variables) defined in the ActivityAttributes struct. These values update throughout the Live Activity's lifecycle.|
| attributes      | Object    |A key-value pair containing fixed properties (Attributes variables) defined in the ActivityAttributes struct. If there are no fixed-state variables defined in Attributes struct, specify here as attributes = { }.|
| staleDatePeriod    | Double   |The duration (in seconds) after which the system considers the Live Activity outdated and may stop updating it.|
| relevanceScore   | Double   |A score determining the priority order of multiple Live Activities on the Lock Screen. Higher scores appear above lower ones. 0 indicates the lowest relevance and 100 the highest.|
| channelID   | String   |This is an optional parameter. A base64-encoded string required to configure a Live Activity for broadcast channels. This parameter is mandatory when using PUSHTYPE_CHANNEL and is available only on iOS 18 and above.|


**Return Values**


None

**Exceptions**

The following errors may be returned in the onFailureCallback if the API call fails.

| Error Code  | Error Message| Error constants|
| ------------- |-------------|-------------|
| 5021     | Live Activities are not enabled    |voltmx.liveActivity.ERROR_NOT_ENABLED|
| 5001     | The provided Live Activity attributes exceeded the maximum size of 4KB   |voltmx.liveActivity.ERROR_ATTRIBUTES_TOO_LARGE|
| 5002     | The device does not support Live Activities  |voltmx.liveActivity.ERROR_UNSUPPORTED|
| 5003     | The person has deactivated Live Activities in the Settings  |voltmx.liveActivity.ERROR_DENIED|
| 5004     | The device has reached the maximum number of ongoing Live Activities  |voltmx.liveActivity.ERROR_GLOBAL_MAX_EXCEEDED|
| 5005    | The app has already started the maximum number of concurrent Live Activities  |voltmx.liveActivity.ERROR_TARGET_MAX_EXCEEDED|
| 5006    | The app does not have the required entitlement to start a Live Activity  |voltmx.liveActivity.ERROR_UNSUPPORTED_TARGET |
| 5007   | App tried to start Live Activity while it was in the background  |voltmx.liveActivity.ERROR_VISIBILITY |
| 5008   | System could not persist the Live Activity |voltmx.liveActivity.ERROR_PERSISTENCE_FAILURE |
| 5009   | Process that tried to start Live Activity is missing a process identifier |voltmx.liveActivity.ERROR_MISSING_PROCESS_IDENTIFIER |
| 5010   | App does not have the required entitlement to start a Live Activity |voltmx.liveActivity.ERROR_UNENTITLED|
| 5011   | Provided activity identifier is malformed |voltmx.liveActivity.ERROR_MALFORMED_ACTIVITY_IDENTIFIER|
| 5012   | Process that tried to recreate Live Activity is not the process that originally created the Live Activity |voltmx.liveActivity.ERROR_RECONNECT_NOT_PERMITTED|
| 5013   | Type mismatch encountered while decoding the Live Activity data |voltmx.liveActivity.ERROR_DATA_TYPE_MISMATCH|
| 5014   | Key not found while decoding the Live Activity data |voltmx.liveActivity.ERROR_DATA_KEY_NOT_FOUND|
| 5015   | Value not found for expected type while decoding the Live Activity data|voltmx.liveActivity.ERROR_DATA_VALUE_NOT_FOUND|
| 5016   | Invalid data provided|voltmx.liveActivity.ERROR_DATA_INVALID|
| 5017   | Permissions error - Missing required entitlements or capabilities|voltmx.liveActivity.ERROR_PERMISSION|


>**Note :**<br> i) In case of Unknown error -  errorCode, errorMessage and errorDescription is returned as 99999, ‘Unknown error’ and ‘Unknown error encountered’ respectively. For errorCode of 5021 when live activities are not enabled, only errorCode and errorMessage is returned. For all other errors, onFailureCallback will return all three - errorCode, errorMessage and errorDescription in onFailureCallback<br>ii)The errors with errorCodes 5001 - 5012 are of ‘ActivityAuthorizationError’ type. The errorDescription is generated from the system’s localized error message, offering insights into the cause of the Live Activity failure.<br>iii)
The errors with errorCodes 5013 - 5017 are of ‘DecodingError’ type. The errorDescription is extracted from the system's decoding context, providing details about the specific issue encountered while processing Live Activity data.<br>iv)
The error message strings in the table are representations and may not match the exact messages returned by the system.


**Example**

```
var activityParams = {
	attributes: {
		airlineName: "Nimbus Airways"
	},
	state: {
		flightCode: "G89-AU",
		progress: 40.83,
		time: "Arriving in 30m",
		status: "5min delay",
		departure: "BLR",
		arrival: "HYD"
	},
	staleDatePeriod: 300.0,
	relevanceScore: 50.0,
	attributesName: "FlightAttributes",
	channelID: "channelIDhere"
};
var pushType = voltmx.liveActivity.PUSHTYPE_CHANNEL;

function onSuccessCallback(id) {
	voltmx.ds.save([id], "activityID_flight_01");
	alert("Success ActID: " + id);
}

function onFailureCallback(errorInfo) {
	var errorCode = errorInfo.errorCode;
	var errorMessage = errorInfo.errorMessage;
	var errorDescription = errorInfo.errorDescription;
	alert("Failure Details - start :\n" + "------------------\n" + "Error Code : " + errorCode + "\n" + "Error Message: " + errorMessage + "\n" + "Error Description: " + errorDescription);
}
voltmx.liveActivity.start(activityParams, pushType, onSuccessCallback, onFailureCallback);


```
**_Important Considerations_**

* Once the Live Activity starts successfully, it returns an activityID (for PUSHTYPE_NIL and PUSHTYPE_CHANNEL) or both activityID and pushToken (for PUSHTYPE_TOKEN). activityID is a unique identifier and should be stored securely (e.g., using voltmx.ds.save) for future reference. It is required to update (voltmx.liveActivity.update), end (voltmx.liveActivity.end), or fetch data (voltmx.liveActivity.fetchActivityData) for the Live Activity. pushToken is essential when using PUSHTYPE_TOKEN for server-driven updates. This token can be used to update or end the Live Activity remotely.

* A Live Activity can stay active for up to eight hours unless it is manually ended by the app or the user. After reaching this limit, the system automatically terminates the Live Activity and removes it from the Dynamic Island. However, a live activity remains visible on the Lock Screen until the user dismisses it or for up to an additional four hours, whichever comes first. In total, a Live Activity can remain on the Lock Screen for a maximum of 12 hours.

* All dynamic variables must be initialized inside the state object, while fixed variables should be placed inside the attributes object in activityParams.

* If using Channel Push Type, refer to [Apple’s Broadcast Push Notification Documentation](https://developer.apple.com/documentation/usernotifications/setting-up-broadcast-push-notifications?language=objc). Ensure that the Broadcast Capability is enabled for your app. Use the push notification console to manage channels under the Channels tab, where you can create or delete channels. When creating a new channel, the console provides guidance on configuring parameters like environment and message storage policy [(More details here)](https://developer.apple.com/documentation/usernotifications/sending-channel-management-requests-to-apns?language=objc).

* DecodingErrors may occur if some key-value pairs are missing in attributes or state within activityParams. Additionally, if a user disables "Allow Live Activities" in app settings, an error "Live Activities are not enabled" may be thrown. A previously started Live Activity can also automatically dismiss due to system constraints.


* If the Live Activity is started via Push or Channel type, ensure that Push Capability is added in Iris.

* Calling this API multiple times can start multiple Live Activities with the same initial attributes and state values. However, each Live Activity will have a unique activityID and pushToken, as their lifecycles are independent.

**Platform Availability**

* iOS

</details>

<details close markdown="block"><summary id="live_start_02">voltmx.liveActivity.update</summary>

**Syntax**

voltmx.liveActivity.update(activityParams,  onFailureCallback, alertParams)

**Description**

The voltmx.liveActivity.update API is used to modify the content state of an ongoing Live Activity. This allows real-time updates to be reflected on the Lock Screen and Dynamic Island.
This API enables updating dynamic data such as progress, status, or time while also allowing adjustments to the staleDatePeriod and relevanceScore, ensuring the Live Activity remains relevant. The activityID parameter ensures that the correct Live Activity instance is updated.
Additionally, an optional alertParams parameter can be provided. When used, it triggers an alert notification on paired Apple Watch devices and displays a banner notification on devices that do not support the Dynamic Island.

**Input Parameters**

| Parameter  | Type| Description|
| ------------- |:-------------:|:-------------:|
| activityParams     | Object    |An object containing the updated content-state data, stale date period, relevance score, and the activityID of the Live Activity to be updated.|
| onFailureCallback    | Function    |Callback function invoked in case of failure in update, returning an error object containing errorCode and errorMessage. Refer Exceptions for different types of error constants.|
| alertParams    | Object   |This is an optional parameter. On a paired Apple Watch, the alert will be shown once the update is finished. If alertParams is provided as an input, the expanded presentation in the Dynamic Island or the Lock Screen presentation as a banner on devices that don’t support the Dynamic Island, will be shown.|

**Below is the breakup of activityParams -**

| Parameter  | Type| Description|
| ------------- |-------------|-------------|
| attributesName     | String    |The name of the struct conforming to the ActivityAttributes protocol.|
| state    | Object    |The updated content-state data (dynamic key-value pairs) to reflect in the Live Activity.|
| activityID    | String    |A string representing the unique identifier of the Live Activity that needs to be updated.|
| staleDatePeriod    | Double    |The duration (in seconds) after which the system considers the Live Activity outdated.|
| relevanceScore   | Double    |A score that determines the priority order of Live Activities on the Lock Screen when multiple Live Activities are active.|

**Below is the breakup of alertParams -**

| Parameter  | Type| Description|
| ------------- |-------------|-------------|
|title     | String    |A string representing the alert title|
|body     | Object   |A string representing the alert body message.|

**Return Values**

None

**Exceptions**

The following errors may be returned in the onFailureCallback if the API call fails.


| Error Code  | Error Message| Error Constant|
| ------------- |-------------|-------------|
|5021     | Live Activities are not enabled    |voltmx.liveActivity.ERROR_NOT_ENABLED
|5020    | Live Activity with specified activityID not found   |voltmx.liveActivity.ERROR_NOT_FOUND.|

Other errorCodes(errorMessage/errorConstants) of ActivityAuthorizationError and DecodingError similar to voltmx.liveActivity.start API apply here as well.

**Example**

```
var activityParams = {
    state: {
        flightCode: "G89-D",
        progress: 100,
        time: "Arrived",
        status: "Boarding!",
        departure: "HYD",
        arrival: "DEL"
    },
    activityID: voltmx.ds.read("activityID_flight_01")[0],
    staleDatePeriod: 300.0,
    relevanceScore: 50.0,
    attributesName: "FlightAttributes"
};

function onFailureCallback(errorInfo) {
   var errorCode = errorInfo.errorCode;
   var errorMessage = errorInfo.errorMessage;
    alert("Failure Details - update :\n" + "------------------\n" + "Error Code : " + errorCode + "\n" + "Error Message: " + errorMessage);
}

//alertParams is optional
var alertParams = {
    "title": "Arrived!",
    "body": "Boarding at Gate 3 ..!"
}
voltmx.liveActivity.update(activityParams, onFailureCallback, alertParams);

```

**_Important Considerations_**

* If a Live Activity has already started but is dismissed before calling this update API (either due to exceeding its 8-hour lifecycle or being manually dismissed by the user), the failure callback will trigger with the error constant voltmx.liveActivity.ERROR_NOT_FOUND. The same error occurs if the provided activityID is incorrect.

* alertParams is optional. Live Activity alerts light up the screen and, by default, play a notification sound for critical updates. They also present an expanded view in the Dynamic Island or appear as a banner notification on devices that do not support the Dynamic Island. Avoid excessive alerts or non-essential updates, as users may disable Live Activities for your app in Settings. The alert message is delivered to a paired Apple Watch.

* watchOS 11 Integration: Starting with watchOS 11, when a Live Activity starts on an iPhone paired to an Apple Watch, the Smart Stack will automatically show the Live Activity at the top. By default, the Smart Stack displays a combination of the leading and trailing elements from the Live Activity’s compact presentation on the iPhone.

* Live Activity Updates: The activityID is unique for each Live Activity. A Live Activity can be updated multiple times with different state, staleDate, and relevanceScore, as long as it has not been ended or dismissed. Updates can be sent either from the application using this API or remotely.

* Fixed Attributes Cannot Be Updated: The attributes defined in the attributes struct (fixed key-value pairs) cannot be modified once the Live Activity has started. Only the state (dynamic key-value pairs), staleDatePeriod, and relevanceScore can be updated. 

* Use alertParams if you want to display an alert on a paired Apple Watch. Banner notifications are typically not shown when the update is triggered while the app is in the foreground. However, these notifications can appear if the app is in the background or not running, and the alertParams update is sent remotely.


**Platform Availability**

* iOS

</details>


<details close markdown="block"><summary id="live_start_03">voltmx.liveActivity.end</summary>

**Syntax**

voltmx.liveActivity.end(activityParams, policyParams, onFailureCallback)

**Description**

The voltmx.liveActivity.end API is used to end a running Live Activity based on a specified dismissal policy. This API allows the application to control how and when the Live Activity should be dismissed from the system.

**There are three dismissal policies available**


* Immediate (DISMISSAL_IMMEDIATE): The Live Activity is removed instantly.
* Default (DISMISSAL_DEFAULT): The Live Activity remains on the Lock Screen for up to four hours before being removed by the system or the user.
* Custom (DISMISSAL_CUSTOM): The Live Activity is removed at a specified time, within a four-hour window.

If a Live Activity has already been dismissed or the provided activityID is incorrect, the failure callback will trigger with an error.

The following table shows the different dismissal policies available for ending a Live Activity, along with their descriptions, required parameters, and state transitions -


| Dismissal Policy  | Description| Required Parameters in policyParams|Activity State Transition |
| ------------- |-------------|-------------|-------------|
| DISMISSAL_IMMEDIATE    | The system immediately removes the Live Activity.|None|The activityState changes to STATE_DISMISSED immediately.|
| DISMISSAL_DEFAULT    | The Live Activity remains on the Lock Screen for up to four hours unless removed by the user.|state – Defines the final state of the Live Activity before dismissal.|The activityState does not change to STATE_DISMISSED until the system or user removes it.|
| DISMISSAL_CUSTOM   | The system removes the Live Activity at a specified time within a four-hour window.|state – Defines the final state of the Live Activity before dismissal.<br>dismissalDate – A string in ISO format indicating the removal time.|The system removes the Live Activity at the specified date or after four hours, whichever comes first. When removed, the activityState changes to STATE_DISMISSED.|

**Input Parameters**


| Parameter  | Type| Description|
| ------------- |-------------|-------------|
| activityParams    | Object|Contains details of the Live Activity to be ended.|
| policyParams   | Object|Defines the dismissal policy for the Live Activity.|
| onFailureCallback   | Function|Callback function invoked in case of failure in invoking end call, returning an error object containing errorCode and errorMessage. Refer Exceptions for different types of error constants.|

**The following is the breakup of activityParams**


| Parameter  | Type| Description|
| ------------- |-------------|-------------|
| attributesName    | String|The name of the struct conforming to the ActivityAttributes protocol.|
| activityID    | String|A unique identifier for the Live Activity that needs to be ended|
| staleDatePeriod    | Double|The duration (in seconds) after which the system considers the Live Activity out of date.|
| relevanceScore   | Double|Determines the priority of the Live Activity when multiple are present.|

**The following is the breakup of policyParams**


| Parameter  | Type| Description|
| ------------- |-------------|-------------|
| dismissalPolicy    | Constant|Defines how the Live Activity should be dismissed. Acceptable values:<br>- voltmx.liveActivity.DISMISSAL_IMMEDIATE<br>- voltmx.liveActivity.DISMISSAL_DEFAULT<br>- voltmx.liveActivity.DISMISSAL_CUSTOM|
| state    | Object (optional)|The final state of the Live Activity before dismissal (only applicable for DISMISSAL_DEFAULT and DISMISSAL_CUSTOM).|
| dismissalDate    | String (ISO format)|Specifies when the Live Activity should be removed (only applicable for DISMISSAL_CUSTOM).|

**Return Values**
None

**Exceptions**

The following errors may be returned in the onFailureCallback if the API call fails.


| Error Code  | Error Message| Error Constant|
| ------------- |-------------|-------------|
|5021     | Live Activities are not enabled    |voltmx.liveActivity.ERROR_NOT_ENABLED
|5020    | Live Activity with specified activityID not found   |voltmx.liveActivity.ERROR_NOT_FOUND.|

Other errorCodes(errorMessage/errorConstants) of ActivityAuthorizationError and DecodingError similar to voltmx.liveActivity.start API apply here as well.


**Example**

```

//Immediate dismissal - No state or dismissalDate required
var activityParams = {
    attributesName: "FlightAttributes",
    activityID: voltmx.ds.read("activityID_flight_02")[0],
    staleDatePeriod: 300.0,
    relevanceScore: 100.0
};
var policyParams = {
    dismissalPolicy: voltmx.liveActivity.DISMISSAL_IMMEDIATE
};

function onFailureCallback(errorInfo) {
    var errorCode = errorInfo.errorCode;
    var errorMessage = errorInfo.errorMessage;
    alert("Failure Details - end :\n" + "------------------\n" + "Error Code : " + errorCode + "\n" + "Error Message: " + errorMessage);
}
voltmx.liveActivity.end(activityParams, policyParams, onFailureCallback);


//Custom dismissal - Requires state and dismissalDate
var activityParams = {
    attributesName: "FlightAttributes",
    activityID: voltmx.ds.read("activityID_flight_02")[0],
    staleDatePeriod: 300.0,
    relevanceScore: 100.0
};
//Ensure date is passed in correct format
var date_ = new Date(new Date().getTime() + 10000).toISOString(); //ends after 10s
var policyParams = {
    dismissalPolicy: voltmx.liveActivity.DISMISSAL_CUSTOM,
    state: {
        flightCode: "G89-AU",
        progress: 100,
        time: "Arrived",
        status: "Boarding in 10min",
        departure: "HYD",
        arrival: "DEL"
    },
    dismissalDate: date_
};

function onFailureCallback(errorInfo) {
    var errorCode = errorInfo.errorCode;
    var errorMessage = errorInfo.errorMessage;
    alert("Failure Details - end :\n" + "------------------\n" + "Error Code : " + errorCode + "\n" + "Error Message: " + errorMessage);
}
voltmx.liveActivity.end(activityParams, policyParams, onFailureCallback);



```

**_Important Considerations_**

* A Live Activity can also be ended remotely using the appropriate API calls.
* If a Live Activity has been started and dismissed before calling this API (e.g., exceeded its 8-hour lifecycle or was dismissed by the user), the failure callback will trigger with the error constant voltmx.liveActivity.ERROR_NOT_FOUND.
* The same error (voltmx.liveActivity.ERROR_NOT_FOUND) is thrown if the activityID provided is incorrect.
* Attributes (fixed variables in the ActivityAttributes struct) cannot be updated using this API. Only state data, dismissal policies, and timing parameters can be modified.
* When using DISMISSAL_CUSTOM, ensure dismissalDate is in ISO format.
* The dismissalDate should be set correctly, as the system will remove the Live Activity at the specified time or within four hours after the provided date—whichever comes first.
* If a Live Activity is ended using DISMISSAL_CUSTOM or DISMISSAL_DEFAULT, it may remain visible on the Lock Screen for the specified duration before being removed. However, once it is marked as ended, it cannot be updated or ended again.
* If the dismissal policy is immediate, the Live Activity will be removed instantly, and its state will change to STATE_DISMISSED.
* The system handles the final removal of Live Activities based on the chosen dismissal policy, ensuring a seamless user experience.

**Platform Availability**

* iOS

</details>

<details close markdown="block"><summary id="live_start_04">voltmx.liveActivity.observeActivityStateUpdates</summary>

**Syntax**

voltmx.liveActivity.observeActivityStateUpdates(activityID, attributesName, onSuccessCallback, onFailureCallback)

**Description**


The voltmx.liveActivity.observeActivityStateUpdates API is used to observe activity state changes of a Live Activity in real-time. It asynchronously notifies the application when the activity state changes, allowing the app to respond accordingly. The callback function will be triggered continuously as long as the activity state keeps changing. When first called, it immediately returns the current activity state of the Live Activity.

**Input Parameters**


| Parameter | Type| Description|
| ------------- |-------------|-------------|
| activityID   | String|A unique identifier representing the Live Activity whose activity state changes need to be observed.|
| attributesName   | String|The name of the struct conforming to the ActivityAttributes protocol.|
|  onSuccessCallback  | Function|A callback function that receives updates whenever the Live Activity's state changes.|
|  onFailureCallback  | Function|A callback function that is triggered if an error occurs while observing state changes.|

Activity State constants

| Constants | Description| 
| ------------- |-------------|
| voltmx.liveActivity.STATE_ACTIVE   | The Live Activity is currently running, visible to the user, and capable of receiving updates.|
| voltmx.liveActivity.STATE_ENDED  | The Live Activity remains visible, but it has been marked as ended, meaning it will no longer receive updates.|
| voltmx.liveActivity.STATE_DISMISSED | The Live Activity has been fully removed from view, either by the system or the user, and can no longer be interacted with.|
| voltmx.liveActivity.STATE_STALE | The content of the Live Activity is outdated and needs a refresh. This can occur if there is a connectivity issue preventing updates.|
| voltmx.liveActivity.STATE_UNKNOWN | The Live Activity's state is undefined or does not match any of the known states.|

**Return Values**

None

**Exceptions**

The following errors may be returned in the onFailureCallback if the API call fails.


| Error Code | Error Message| Error Constant |
| ------------- |-------------|-------------|
| 5020   | Live Activity with specified activityID not found|voltmx.liveActivity.ERROR_NOT_FOUND

**Example**

```
function onSuccessCallback(activityState) {
    if (activityState == voltmx.liveActivity.STATE_ACTIVE) {
        alert("Activity State : ACTIVE");
    } else if (activityState == voltmx.liveActivity.STATE_ENDED) {
        alert("Activity State : ENDED");
    } else if (activityState == voltmx.liveActivity.STATE_DISMISSED) {
        alert("Activity State : DISMISSED");
    } else if (activityState == voltmx.liveActivity.STATE_STALE) {
        alert("Activity State : STALE");
    } else if (activityState == voltmx.liveActivity.STATE_UNKNOWN) {
        alert("Activity State : UNKNOWN");
    }
}

function onFailureCallback(errorInfo) {
    var errorCode = errorInfo.errorCode;
    var errorMessage = errorInfo.errorMessage;
    alert("Failure Details - observeActivityStateUpdates :\n" + "------------------\n" + "Error Code : " + errorCode + "\n" + "Error Message: " + errorMessage);
}

var attributesName = "FlightAttributes";
voltmx.liveActivity.observeActivityStateUpdates(voltmx.ds.read("activityID_flight_03")[0], attributesName, onSuccessCallback, onFailureCallback);

```
**_Important Considerations_**

* If the activityID is incorrect or does not exist, the onFailureCallback will be triggered with the error constant voltmx.liveActivity.ERROR_NOT_FOUND.

* This API is asynchronous and will continue to trigger the onSuccessCallback whenever the state of the Live Activity changes.

* The first onSuccessCallback will immediately return the current activity state of the Live Activity. Further updates will be triggered only when the activity state changes.

* Once a Live Activity reaches the STATE_DISMISSED state, it is no longer visible and cannot receive further updates.

**Platform Availability**

* iOS

</details>

<details close markdown="block"><summary id="live_start_05">voltmx.liveActivity.stopActivityStateUpdates</summary>

**Syntax**
voltmx.liveActivity.stopActivityStateUpdates(activityID)


**Description**

The voltmx.liveActivity.stopActivityStateUpdates API is used to stop observing the activity state changes of a specific Live Activity. Once this API is called, the application will no longer receive activity state updates for the specified activityID. However, the application can call observeActivityStateUpdates again later if it wants to resume tracking the activity state of the same Live Activity.


**Input Parameters**

| Parameter | Type| Description|
| ------------- |-------------|-------------|
| activityID   | String|A unique identifier representing the Live Activity for which state updates should be stopped. |

**Return Values**
None

**Exceptions**
None

**Example**


```
voltmx.liveActivity.stopActivityStateUpdates(voltmx.ds.read("activityID_flight_03")[0]);

```

**_Important Considerations_**

* Calling this API stops further activity state updates for the specified activityID.
* There is no failure callback, so if the provided activityID is incorrect or does not exist, the API will silently do nothing.
* The application can re-register for activity state updates using observeActivityStateUpdates at any time.

**Platform Availability**

* iOS

</details>

<details close markdown="block"><summary id="live_start_06">voltmx.liveActivity.observeContentStateUpdates</summary>

**Syntax**

voltmx.liveActivity.observeContentStateUpdates(activityID, attributesName, onSuccessCallback, onFailureCallback)

**Description**

This API allows an application to asynchronously observe changes in the content state of a Live Activity. It continuously listens for updates and triggers the success callback whenever the content state changes. When first called, it immediately returns the current content state of the Live Activity.


**Input Parameters**


| Parameter | Type| Description|
| ------------- |-------------|-------------|
| activityID   | String|The unique identifier of the Live Activity whose content state changes need to be observed. |
| attributesName  | String|The name of the struct conforming to the ActivityAttributes protocol. |
| onSuccessCallback |Function|A callback function that receives the updated content state whenever it changes. This callback only returns dynamic variables of the Live Activity. |
| onFailureCallback |Function|A callback function that gets triggered if the API fails.|

**Return Values**

None

**Exceptions**

If the API call fails, the onFailureCallback will be triggered with the following errors:

| Error Code | Error Message| Error Constant |
| ------------- |-------------|-------------|
| 5020   | voltmx.liveActivity.ERROR_NOT_FOUND |

**Example**


```
function onSuccessCallback(activityContentState) {
    console.log(activityContentState);
    alert("callback parameters ActivityContentState : " + JSON.stringify(activityContentState));
}

function onFailureCallback(errorInfo) {
    var errorCode = errorInfo.errorCode;
    var errorMessage = errorInfo.errorMessage;
    alert("Failure Details - observeContentStateUpdates :\n" + "------------------\n" + "Error Code : " + errorCode + "\n" + "Error Message: " + errorMessage);
}
var attributesName = "FlightAttributes";
voltmx.liveActivity.observeContentStateUpdates(voltmx.ds.read("activityID_flight_03_B")[0], attributesName, onSuccessCallback, onFailureCallback);

```

**_Important Considerations_**

* If the provided activityID is incorrect or does not exist, the onFailureCallback will trigger with ERROR_NOT_FOUND.

* Content state updates only return dynamic state variables and do not include fixed attributes defined in ActivityAttributes.

**Platform Availability**

* iOS

</details>

<details close markdown="block"><summary id="live_start_07">voltmx.liveActivity.stopContentStateUpdates</summary>


**Syntax**

voltmx.liveActivity.stopContentStateUpdates(activityID)

**Description**


Stops observing content state changes for a specific Live Activity. After calling this API, the app will no longer receive content state updates for the given activityID.

**Input Parameters**


| Parameter | Type| Description|
| ------------- |-------------|-------------|
| activityID   | String|The unique identifier of the Live Activity for which content state updates should be stopped. |

**Return Values**

None

**Exceptions**

None

**Example**


```
voltmx.liveActivity.stopContentStateUpdates(voltmx.ds.read("activityID_flight_03_B")[0]);

```

**_Important Considerations_**

* This API does not provide a failure callback. If the provided activityID is incorrect or the Live Activity does not exist, the API will silently do nothing without returning an error.

* If needed, the app can call voltmx.liveActivity.observeContentStateUpdates again for the same activityID to resume observing content state updates.

**Platform Availability**

* iOS

</details>

<details close markdown="block"><summary id="live_start_08">voltmx.liveActivity.fetchActivityData</summary>

**Syntax**

voltmx.liveActivity.fetchActivityData(activityParams, onSuccessCallback, onFailureCallback)

**Description**

Retrieves the latest available data for a specified Live Activity. This API returns both fixed attributes (from ActivityAttributes) and dynamic content state variables. Unlike observation APIs, it does not provide continuous updates; it only returns the data once when called.

**Input Parameters**


| Parameter | Type| Description|
| ------------- |-------------|-------------|
| activityParams   | Object |Contains the parameters required to fetch activity data. |
| onSuccessCallback   | Function |A callback function that receives the fetched data. Returns both fixed attributes (as liveActivityfixedState) and dynamic content state (as liveActivityContentState). |
| onFailureCallback  | Function |A callback function triggered if the API call fails. |

The following is the breakdown of activityParams
==================================================


| Property| Type| Description|
| ------------- |-------------|-------------|
| activityID   | String |The unique identifier of the Live Activity whose data is to be fetched. |
| attributesName  | String |The name of the struct conforming to the ActivityAttributes protocol.|

**Return Values**

None

**Exceptions**

If the API call fails, the onFailureCallback will be triggered with the following errors:


| Error Code | Error Message| Error Constant|
| ------------- |-------------|-------------|
| 5020   | Live Activity with specified activityID not found |voltmx.liveActivity.ERROR_NOT_FOUND |


**Example**


```
var activityParams = {
    activityID: voltmx.ds.read("activityID_flight_03")[0],
    attributesName: "FlightAttributes"
};

function onSuccessCallback(liveActivityfixedState, liveActivityContentState) {
    alert("ATTRIBUTES " + "\n" + JSON.stringify(liveActivityfixedState) + "\n------------------\n" + "STATE " + "\n" + JSON.stringify(liveActivityContentState));
}

function onFailureCallback(errorInfo) {
    var errorCode = errorInfo.errorCode;
    var errorMessage = errorInfo.errorMessage;
    alert("Failure Details - fetchActivityData :\n" + "------------------\n" + "Error Code : " + errorCode + "\n" + "Error Message: " + errorMessage);
}
voltmx.liveActivity.fetchActivityData(activityParams, onSuccessCallback, onFailureCallback);


```

**_Important Considerations_**

* The onSuccessCallback will return both fixed attributes (liveActivityfixedState) and dynamic content state (liveActivityContentState).
* This API only returns data once when called; it does not continuously update the app with changes in content state or activity state.
* If the provided activityID is incorrect or does not exist, the failure callback will be triggered with error constant voltmx.liveActivity.ERROR_NOT_FOUND.

**Platform Availability**

* iOS

</details>

<details close markdown="block"><summary id="live_start_09">voltmx.liveActivity.isEnabled</summary>

**Syntax**

voltmx.liveActivity.isEnabled( )

**Description**

Returns a Boolean value indicating whether Live Activities are enabled for the app. This setting is controlled by the user and can be toggled in the app's settings.

**Input Parameters**

None

**Return Values**


| Data Type | Description| 
| ------------- |-------------|
| Boolean   | Returns true if Live Activities are enabled at the system level. Returns false if the user has explicitly disabled Live Activities in Settings > Your App > Live Activities |


**Exceptions**

None

**Example**


```
var isEnabled = voltmx.liveActivity.isEnabled();
alert(isEnabled);

```

**_Important Considerations_**

* This API simply checks the system setting for Live Activities and does not interact with any specific Live Activity instance.

* If Live Activities are disabled in the app settings, this API will return false, preventing the app from starting or updating any Live Activities.

* **NSSupportsLiveActivities (Boolean)** - Set this key to true to enable Live Activities in your app, in infoplist_configuration.json file. Refer to ‘Information Property List’ section.

* **Note:** This API checks the system-wide Live Activities authorization state and does not verify if NSSupportsLiveActivities is set to YES in the app’s Info.plist. Even if this API returns true, attempting to start a Live Activity will fail if NSSupportsLiveActivities = NO in Info.plist. 

* If NSSupportsLiveActivities = NO in Info.plist, this API may still return true, but attempting to start a Live Activity will fail with unsupportedtarget 

    (voltmx.liveActivity.ERROR_UNSUPPORTED_TARGET).

**Platform Availability**

* iOS

</details>

<details close markdown="block"><summary id="live_start_10">voltmx.liveActivity.isHighFrequencyUpdateEnabled</summary>

**Syntax**

voltmx.liveActivity.isHighFrequencyUpdateEnabled( )

**Description**

Returns a Boolean value indicating whether the user has allowed the app to send high-frequency updates for Live Activities using frequent ActivityKit push notifications. This setting can be toggled by the user in the app's settings.

**Input Parameters**

None

**Return Values**


| Data Type | Description| 
| ------------- |-------------|
| Boolean   | Returns true if high-frequency updates are enabled; otherwise, returns false. |

**Exceptions**

None

**Example**


```
var isHighFreqEnabled = voltmx.liveActivity.isHighFrequencyUpdateEnabled();
alert(isHighFreqEnabled);

```

**_Important Considerations_**

* NSSupportsLiveActivitiesFrequentUpdates (Boolean) - Set this key to true to allow your app’s Live Activities to receive frequent updates through remote push notifications in infoplist_configuration.json file. Refer to ‘Information Property List’ section.

* The user can toggle the More Frequent Updates option off in the app settings.

**Platform Availability**

* iOS

</details>