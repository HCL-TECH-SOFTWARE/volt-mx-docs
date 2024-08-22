                            

voltmx.os Namespace
=================

The voltmx.os namespace provides functions for the Operating System API. It contains the following API elements:

*   [Constants](#constants)
*   [Functions](#functions)
*   [Objects](voltmx.os_objects.md)

Constants
---------

The voltmx.os Namespace contains the following types of constants.


<details close markdown="block"><summary>Battery State Constants</summary> 

* * *

These constants specify the current state of the device battery.

| Constant | Description |
| --- | --- |
| BATTERY\_STATE\_CHARGING | Indicates that the state of the device battery as being charged. |
| BATTERY\_STATE\_DISCHARGING | Indicates that the state of the device battery as being discharged. |
| BATTERY\_STATE\_FULL | Indicates that the state of the device battery charge is completely full. |
| BATTERY\_STATE\_UNKNOWN | Indicates that the state of the device battery charge as not known. |

Example

When you query for the state of the device battery as shown in this example, any of the four available battery states is returned.

```
var batteryState = voltmx.os.getBatteryState();

if (voltmx.os.BATTERY_STATE_CHARGING == batteryState) {

    voltmx.print(“Battery State: Charging”);
}
```

Platform Availability

*   iOS
*   Android
*   Windows

* * *

</details>

=======

Functions
---------

The voltmx.os namespace contains the following functions.


<details close markdown="block"><summary>voltmx.os.addHiddenField</summary>

* * *

This API helps the developers to pass dynamic values when the form needs to be submitted to external sites.

<b>Syntax</b>

```

addHiddenField([key](#key),[value](#value),[private](#private));
```

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| key \[String\] - Mandatory | Specifies the key of the hidden field that you would like to add. |
| value \[String\] - Mandatory | Specifies the value that corresponds to the specified key in the hidden field. |
| private \[String\] - Optional | Specifies if the hidden field can be read using the `voltmx.os.readHiddenField` API. The expected values for this field are either "private" or "public". The default value of this field id "public". > **_Note:_** Only when this value is specified, you can read the hidden value through `voltmx.os.readHiddenField` API. |

<b>Example</b>

```
function addHiddenField() {
    voltmx.os.addHiddenField("myhiddenfield", "myvalue", "private");
    // private value is specified and hence this hiddenfield can be read through the voltmx.os.readHiddenField API
    voltmx.os.addHiddenField("myhiddenfield1", "myvalue");
    // As private value is not specified and hence this hiddenfield cannot be read through the voltmx.os.readHiddenField API
}
```

<b>Return Values</b>

None.

<b>Platform Availability</b>

Available only on Mobile Web.

* * *

</details>
<details close markdown="block"><summary>voltmx.os.addMetaTag</summary>

* * *

This API adds a meta tag in.html header. This API result will effect only on header reload.

<b>Syntax</b>

```

addMetaTag (key, value);
```

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| key \[String\] - Mandatory | Adds a meta tag in the HTML header |
| value \[Object\] - Mandatory | Adds meta tag attributes in the.html header as key value pairs. |

 

<b>Example</b>

```
voltmx.os.addMetaTag("test2", {
    "http-equiv": "refresh",
    "content": "30"
});
```

<b>Return Values</b>

This API has no return values.

<b>Platform Availability</b>

Applicable only on Mobile Web.

* * *

</details>
<details close markdown="block"><summary>voltmx.os.createUUID</summary>

* * *

UUID (Universally Unique Identifier) is a universally unique value that can be used to identify types, interfaces, and other items. This API returns a string that contains a formatted UUID value. For example, E621E1F8-C36C-495A-93FC-0C247A3E6E5F.

<b>Syntax</b>

```

voltmx.os.createUUID();
```

Input Parameters

None

Example

```
function createMyUUIDFunc() {
var uuid = voltmx.os.createUUID();
voltmx.print("The created UUID is : " + uuid);
}
```

Return Type

String

Platform Availability

*   Android
*   iOS

* * *

</details>
<details close markdown="block"><summary>voltmx.os.detectDynamicInstrumentation</summary>

* * *

This API helps your application to detect the presence of any Dynamic Instrumentation instance. Currently, this API only supports the detection of Frida server presence.

<b>Syntax</b>

```

voltmx.os.detectDynamicInstrumentation(object);
```

Input Parameters

  
| Parameter | Description |
| --- | --- |
| object\[Object\] -Mandatory | This is a dictionary that contains the following keys: _detectedCallback_ \[Function\] - **Optional**This callback is executed when the presence of Dynamic Instrumentation is detected. If you do not specify this key, the application safely exits by default whenever it detects Dynamic Instrumentation._undetectedCallback_ \[Function\] - **Optional**This callback is executed when Dynamic Instrumentation is not detected. _type_ \[String\] - _Mandatory_ This parameter specifies the type of detection that is to be performed. You can specify any one of the following values for this parameter:fridaquickscan - Returns results quickly and can be used synchronously in JS code.fridadeepscan - Performs a deep scan to search for the presence of Frida server, and it takes about six or more seconds to return the result. For this reason, you must use the `fridadeepscan` option in [WorkerThread](workerthreadobject_methods.md). |

Example

```
var didobject = {
    detectedCallback: detectedCallbackFunction,
    undetectedCallback: undetectedCallbackFunction,
    "type": "fridaquickscan"
};
voltmx.os.detectDynamicInstrumentation(didobject);  

```

Return Value

None

Platform Availability

*   Android

* * *

</details>
<details close markdown="block"><summary>voltmx.os.deviceInfo</summary>

* * *

This API allows the developers to get information about the device in which the application is launched.

You can view a video on using Device Info API [here](https://www.youtube.com/embed/N4po9_SspDo?rel=0).

<b>Syntax</b>

```

deviceInfo();
```



<b>Input Parameters</b>

None

<b>Example</b>

```
var deviceInfo = voltmx.os.deviceInfo();
alert(deviceInfo);

for (var key in deviceInfo) {
    if (deviceInfo.hasOwnProperty(key)) {
        alert(key + ":" + deviceInfo[key]);
    }
}
```

<b>Return Values</b>

  
| Return Value | Description |
| --- | --- |
| values\[Object\] | Returns a [DeviceInfo](voltmx.os_objects_deviceinfo.md) object. |

 

<b>Platform Availability</b>

Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>voltmx.os.endSecureTransaction</summary>

* * *

This API can be invoked on an event of a widget. This API should be invoked on forms of the application where user validation is not required or cross site request forgery is not a concern.

<b>Syntax</b>

```

voltmx.os.endSecureTransaction();
```

<b>Input Parameters</b>

None

<b>Example</b>

```
voltmx.os.endSecureTransaction();
```

<b>Return Values</b>

None

<b>Platform Availability</b>

Available only on Mobile Web.

* * *

</details>
<details close markdown="block"><summary>voltmx.os.freeMemory</summary>

* * *

This API provides the ability to query and fetch the actual OS allocated memory available for the application on the mobile device.

You can use this API to:

*   Find out the free memory on the mobile device for the application, clear unwanted objects, and improve the application's performance.

<b>Syntax</b>

```

voltmx.os.freeMemory();
```

<B>Input Parameters</b>

None

<b>Example</b>

In the following example, voltmx.os.freeMemory returns the freememory available for allocation.

```
var freememory = voltmx.os.freeMemory();
voltmx.print(freememory);
//After the voltmx.os.freeMemory operation, the memory available for allocation is printed. 
//For example, 1070404 (indicates that 1046 KB of memory is available for allocation)
```

<b>Return Values</b>

  
| Return Value | Description |
| --- | --- |
| Free memory\[Number\] | The available memory for allocation is returned. The returned memory always indicates the number of **bytes** available. |

 

<b>Platform Availability</b>

Available on all platforms\* except Windows. \*Dummy implementation on Server Side Mobile Web, SPA, and DesktopWeb and returns a dummy value.

* * *

</details>
<details close markdown="block"><summary>voltmx.os.getAppContext</summary>

* * *

This API allows the developers to get information about the mode in which the application is launched.

<b>Syntax</b>

```

voltmx.os.getAppContext();
```

<b>Input Parameters</b>

None

<b>Example</b>

```
function getAppContext() {
    var mycontext = voltmx.os.getAppContext();
    voltmx.print(mycontext); 
    /*prints {launchmode=0} if the application was launched in normal mode ,prints {launchmode=1} if the application was launched in full screen mode*/
}

```

<b>Return Values</b>

  
| Return Value | Description |
| --- | --- |
| contextDetails\[Object\] | Returns an object with key-value pairs:`launchmode:0` indicates that the application is launched in normal mode.`launchmode:1` indicates that the application is launched in full screen mode. |

<b>Platform Availability</b>

Applicable only on Mobile Web.

* * *

</details>
<details close markdown="block"><summary>voltmx.os.getBatteryLevel</summary> 

* * *

Retrieves the current percentage charge level of the device battery, as an integer value.

<b>Syntax</b>

```

voltmx.os.getBatteryLevel();
```

<b>Input Parameters</b>

None

<b>Example</b>

```
getBatteryLevel: function() {
    voltmx.os.registerBatteryService(this.batterySuccessCallback);
    var battery = voltmx.os.getBatteryLevel();
    voltmx.os.unregisterBatteryService();
    this.view.lblDisplay.text = battery + "%";
},
```

<b>Return Values</b>

Returns an integer that ranges from 0-100 (inclusive) that specifies the battery's current charge level in percentage. For example, a return value of 30 specifies that the current charge level of the battery is 30%.

<b>Platform Availability</b>

*   iOS
*   Android
*   Windows

* * *

</details>
<details close markdown="block"><summary>voltmx.os.getBatteryState</summary> 

* * *

Retrieves the current state of the battery.

<b>Syntax</b>

```

voltmx.os.getBatteryState();
```

<b>Input Parameters</b>

None

<b>Example</b>

```
//This code is used to obtain your device battery state
getBatteryState: function() {
    voltmx.os.registerBatteryService(this.batterySuccessCallback);
    var batteryState = voltmx.os.getBatteryState();
    if (voltmx.os.BATTERY_STATE_CHARGING == batteryState) {
        alert("The Device is charging");
        voltmx.os.unregisterBatteryService();
    } else if (voltmx.os.BATTERY_STATE_DISCHARGING == batteryState) {
        alert("The Device is discharging");
        voltmx.os.unregisterBatteryService();
    } else if (voltmx.os.BATTERY_STATE_FULL == batteryState) {
        alert("The Device is completely charged");
        voltmx.os.unregisterBatteryService();
    } else if (voltmx.os.BATTERY_STATE_UNKNOWN == batteryState) {
        alert("The Device charging state is unkonwn");
        voltmx.os.unregisterBatteryService();
    }
},
```

<b>Return Values</b>

Returns a constant from the [Battery State Constants](voltmx.os_constants_batteryapi.md#BatteryState).

Remarks

The battery state indicates whether it is charging, discharging, and so forth.

<b>Platform Availability</b>

*   iOS
*   Android
*   Windows

* * *

</details>
<details close markdown="block"><summary>voltmx.os.getDeviceId</summary>

* * *

This API is deprecated. It always returns null.

* * *

</details>
<details close markdown="block"><summary>voltmx.os.getDeviceCurrentOrientation</summary> 

* * *

This API returns the current orientation of the device. The possible values are portrait or landscape.

<b>Syntax</b>

```

voltmx.os.getDeviceCurrentOrientation();
```

<b>Input Parameters</b>

None

<b>Example</b>

```
voltmx.os.getDeviceCurrentOrientation(); //Returns the orientation of the device
```

<b>Return Values</b>

This API returns whether the device orientation is landscape or portrait.

*   constants.DEVICE\_ORIENTATION\_PORTRAIT
*   constants.DEVICE\_ORIENTATION\_LANDSCAPE

<b>Platform Availability</b>

Available on iPhone, iPad, Windows, Android, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>voltmx.os.getOpenGLESVersion</summary>

* * *

This API returns the maximum OpenGLES Version supported by the device.

Depending on the value returned, you can determine if the device supports AR capabilities.

<b>Syntax</b>

```

voltmx.os.getOpenGlESVersion();
```

<b>Input Parameters</b>

None.

<b>Example</b>

```
if (voltmx.os.getOpenGLESVersion() >= 3.0 && voltmx.os.deviceInfo().APILevel >= 24)
{
      voltmx.print("ARRenderer is supported")
}
else
{
     voltmx.print("none of the AR apis will work")
}

```

<b>Return Values</b>

  
| Return Value | Description |
| --- | --- |
| version | Returns the Open GLES Version number. |

 

<b>Platform Availability</b>

Android

* * *

</details>
<details close markdown="block"><summary>voltmx.os.hasAccelerometerSupport</summary>

* * *

This API returns whether accelerometer is supported on a device.

<b>Syntax</b>

```

hasAccelerometerSupport();
```

<b>Input Parameters</b>

None.

<b>Return Values</b>

  
| Return Value | Description |
| --- | --- |
| value\[Boolean\] | Returns whether accelerometer is supported on a device. |

 

<b>Platform Availability</b>

Applicable only on iPhone, Android, and Windows platforms.

<b>Example</b>

```
voltmx.print(voltmx.os.hasAccelerometerSupport());
//prints true if device has accelerometer support

```

* * *

</details>
<details close markdown="block"><summary>voltmx.os.hasCameraSupport</summary>

* * *

This API returns whether Camera is supported on a device.

<b>Syntax</b>

```

hasCameraSupport();
```

<b>Input Parameters</b>

None.

<b>Example</b>

```
voltmx.print(voltmx.os.hasCameraSupport());
//prints true if device has  camera support

```

<b>Return Values</b>

  
| Return Value | Description |
| --- | --- |
| value\[Boolean\] | _true_: the platform supports Camera _false_: the platform does not support Camera |

Platform Availability

Available on all platforms\* except Mobile Web. \*Dummy implementation for SPA and Desktop Web that always returns False.

* * *

</details>
<details close markdown="block"><summary>voltmx.os.hasGPSSupport</summary>

* * *

This API returns whether GPS is supported on a device.

<b>Syntax</b>

```

voltmx.os.hasGPSSupport();
```

<b>Input Parameters</b>

None.

<b>Example</b>

```
voltmx.print(voltmx.os.hasGPSSupport());
//prints true if device has GPS support
```

<b>Return Values</b>

  
| Return Value | Description |
| --- | --- |
| value\[Boolean\] | _true_: the platform supports GPS. _false_: the platform does not support GPS. |

<b>Platform Availability</b>

Available on all platforms except Mobile Web.

* * *

</details>
<details close markdown="block"><summary>voltmx.os.hasOrientationSupport</summary>

* * *

This API returns whether Orientation is supported on a device.

You can view a video on using Display Orientation [here](https://youtu.be/C3yMLbV1TQA).

<b>Syntax</b>

```

voltmx.os.hasOrientationSupport();
```

<b>Input Parameters</b>

None.

<b>Example</b>

```
var orientation = voltmx.os.getDeviceCurrentOrientation();

if (orientation == constants.DEVICE_ORIENTATION_PORTRAIT) {
    alert("PORTRAIT");
} else if (orientation == constants.DEVICE_ORIENTATION_LANDSCAPE) {
    alert("LANDSCAPE");
} else {
    alert("UNKNOWN");
}
```

<b>Return Values</b>

  
| Return Value | Description |
| --- | --- |
| value\[Boolean\] | _true_: the platform supports orientation. _false_: the platform does not support orientation. |

<b>Platform Availability</b>

Available on all platforms except Mobile Web.

* * *

</details>

<details close markdown="block"><summary>voltmx.os.hasNFCSupport</summary>

* * *

This Api is the part of voltmx.os namespace and used to check if the NFC is supported on the device or not. This Api is useful for checking the NFC support before scanning any tag.

<b>Syntax</b>

voltmx.os.hasNFCSupport()

<b>Input Parameters</b>

None

<b>Example</b>

```
function startScan() {

if(voltmx.os.hasNFCSupport()) { // check if the device has NFC support, then only call the other NFC Api.

//call NFC API's

} else {

alert ("This device doesn't support NFC feature");

}

}
```

Platform Availability

Android, iOS


* * *

</details>

</details>
<details close markdown="block"><summary>voltmx.os.hasTouchSupport</summary>

* * *

This API returns whether Touch is supported on a device.

<b>Syntax</b>

```

voltmx.os.hasTouchSupport();
```

<b>Input Parameters</b>

None.

<b>Example</b>

```
voltmx.print(voltmx.os.hasTouchSupport());
//prints true if device is a touch device

```

<b>Return Values</b>

  
| Return Value | Description |
| --- | --- |
| value\[Boolean\] | _true_: the platform supports touch. _false_: the platform does not support touch. |

<b>Platform Availability</b>

Available on all platforms except Mobile Web and Desktop Web.

* * *

</details>

<details close markdown="block"><summary>voltmx.os.print</summary>

* * *

When invoked without any parameter, this API prints the entire form that is currently in view.

<b>Syntax</b>

```

voltmx.os.print(containerID);
```

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| containerID \[Number\] - Optional | The containerID can be a ID of any container widget that can be directly referenced from a form.
> > **_Note:_**   If the user is typing in a text box, the typed content will not be printed. Print API can be used only after the target Form, Popup or Datagrid is rendered on the browser. Print API cannot be used in pre-show, post-show, pre and post app init or any other functionality that is run before the target Form, Popup, or Datagrid is fully rendered. When printing the form with widgets like ScrollBox, Image Strip, the print functionality prints only those widgets that are in the view or potentially occupy the available print space in portrait or landscape views.

 |

<b>Example</b>

```
voltmx.os.print()
```

<b>Return Values</b>

None.

<b>Platform Availability</b>

Applicable only on Desktop Web.

* * *

</details>
<details close markdown="block"><summary>voltmx.os.readHiddenField</summary>

* * *

This API allows the developers to read the hidden fields added by the `os.addHiddenField` API.

<b>Syntax</b>

```

readHiddenField([key](#key));
```

<b>Input Parameters</b>

  
| Parameters | Description |
| --- | --- |
| key \[String\] - Mandatory | Specifies the key of the hidden field that you would like to read. |

 

<b>Example</b>

```
function readHiddenField() {
    voltmx.os.readHiddenField("myhiddenfield");
    // Reads the value that corresponds to the myhiddenfield key, i.e., myvalue
}
```

<b>Return Values</b>

| Return Value | Description |
| --- | --- |
| value\[String\] | Returns the value that corresponds to the specified key. |
| nil | nil is returned if there is no value assigned to the corresponding key. |

 

<b>Platform Availability</b>

Available only on Mobile Web.

* * *

</details>
<details close markdown="block"><summary>voltmx.os.registerBatteryService</summary>

* * *

Registers for the battery monitoring service of the device operating system. The callback is delivered to the most recent registered battery service.

> **_Note:_** Whenever the battery state changes or for every 1% change in the battery level, a callback to the registerBatteryService function is triggered.

<b>Syntax</b>

```

voltmx.os.registerBatteryService(callbackMethod);
```

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| callbackMethod | A JavaScript function that is automatically invoked when you register to the battery monitoring service of the device OS. |

 

<b>Example</b>

```
//This code is used to register a battery service and deregister the service based on your battery level
registerBatteryService: function() {
    voltmx.os.registerBatteryService(this.mybatterychangecallback);
    var batterylevel = voltmx.os.getBatteryLevel();
},

mybatterychangecallback: function(batteryInfo) {
    var batterylevel = batteryInfo.batterylevel;
    if (batterylevel <= 20) {
        alert("The Battery Level is below 20%, make sure that you charge your device");
    } else {
        voltmx.os.unregisterBatteryService();
        alert("We are unregistering the Battery Service as it might cause an overhead");
    }
},
```

<b>Return Values</b>

None

<b>Limitations</b>

*   The callback for the registered battery service is delivered only when the application is running; this is because, you can only receive notifications when the application is in the foreground for the iOS, Windows, and Android platforms.
*   The callback to the registered battery service is delivered after every one minute duration for iOS; whereas in case of in Android and Windows, the callback is delivered for every 1% change in the battery charge.

<b>Platform Availability</b>

*   iOS
*   Android
*   Windows

* * *

</details>
<details close markdown="block"><summary>voltmx.os.registerSpeechRecognizer</summary> 

* * *

Registers callbacks for speech recognition events.

**Syntax**

```

voltmx.os.registerSpeechRecognizer(callbackTable);
```

<b>Input Parameters</b>

| Parameters | Description |
| --- | --- |
| callbackTable\[JSON object\] - Mandatory | The callbackTable is a mandatory key-value pair, that helps you to register JavaScript callbacks, which are triggered when any speech to text recognition events occur.Following are the key-value pairs:
> **resultGenerated \[callback\]**

> Triggered continuously whenever a phrase is generated out of the recognized speech. _Parameters for callback_ **\[JSON object\]****result \[String\]** The recognized phrase of the speech recognition session.**confidence \[Number\]**The confidence level of the speech recognition result. For example, if the speech includes a word such as "weight," the confidence level is the certainty with which the app recognizes the word as "weight" and not as "wait."0 - High1 - Medium2 - Low3 - Rejected**status \[Number\]**The status of the result. 0 - Success 1 - TopicLanguageNotSupported 2 - GrammarLanguageMismatch3 - GrammarCompilationFailure 4 - AudioQualityFailure5 - UserCanceled 6 - Unknown 7 - TimeoutExceeded8 - PauseLimitExceeded 9 - NetworkFailure10 - MicrophoneUnavailable

> **timeouts \[JSON object\]**Set initial, in-session (continuous event), and end silence timeouts based on which the speech recognition session will be stopped.**initialSilenceTimeout \[Number\]** Minimum timeout value (in seconds) given to ignore the silence (no speech input) after the speech recognition session starts (that is, before the speech is recognized and text is generated). Default value is 5 seconds.**autoStopSilenceTimeout \[Number\]**Minimum timeout value (in seconds) given to ignore the silence between the event(s) that are triggered continuously (that is, during speech recognition process).**endSilenceTimeout \[Number\]**Minimum timeout value (in seconds) to ignore the silence (no speech input) after which the speech recognition should end (that is, after speech is recognized and text is generated). Default value is 150 milliseconds. |

**Example**

```
function registerCallbacks() {
    voltmx.os.registerSpeechRecognizer({
        "resultGenerated": resultGenCallback,
        "timeouts": {
            "initialSilenceTimeout": 5,
            "autoStopSilenceTimeout": 60,
            "endSilenceTimeout": 80
        }
    });
}

function resultGenCallback(data) {
    frmHome.txtareaSpeech.text = "Text: " + data.result + "confidence: " + data.confidence + "Status: " + data.status;
}
```

**Return Values**

None.

**Platform Availability**

Available only on Windows.

</details>
<details close markdown="block"><summary>voltmx.os.removeAllMetaTags</summary>

* * *

This API removes all the user defined meta tags from a.html header. This API result will effect only on header reload.

<b>Syntax</b>

```

removeAllMetaTags();
```

<b>Input Parameters</b>

None.

<b>Example</b>

```
voltmx.os.removeAllMetaTags()
```

<b>Return Values</b>

None.

<b>Platform Availability</b>

Applicable only on Mobile Web.

* * *

</details>
<details close markdown="block"><summary>voltmx.os.removeMetaTag</summary>

* * *

This API removes a specific meta tag from a.html header. This API result will effect only on header reload.

<b>Syntax</b>

```

removeMetaTag (key);
```

<b>Input Parameters</b>

  
| Parameters | Description |
| --- | --- |
| key \[String\] - Mandatory | Removes a meta tag with the specific key in.html header. |

 

<b>Example</b>

```
voltmx.os.removeMetaTag("test1")
```

<b>Return Values</b>

This API has no return values.

<b>Platform Availability</b>

Applicable only on Mobile Web.

* * *

</details>
<details close markdown="block"><summary>voltmx.os.startSecureTransaction</summary>

* * *

This API can be invoked on an event of a widget. When this API is invoked it makes all the data and subsequent transactions of the application secure. For example, the login page of an application has the following: user name field, password field, and a button. On the onclick event of the button, the user is verified and navigated to pages with sensitive information. If you want to prevent cross site request forgery or double submissions, you can invoke this API ensuring that all the subsequent transactions are secure.

<b>Syntax</b>

```

startSecureTransaction(callback, scope);
```

<b>Input Parameters</b>

  
| Parameters | Description |
| --- | --- |
| callback \[Function\] - Mandatory | If there are instances where cross site request forgery is attempted, this parameter should comprise a session/request expiry function. |
| scope \[Integer\] - Mandatory | Specifies whether this API will be valid per request or per session of the application. The possible values are as follows:0 - Request Scope: The data in the application is secure only on a per request basis.> **_Note:_** If you press the browser back button on BJS, the token is rendered invalid on the browser back request.1 - Session Scope. The data is secure for an entire user session. This is the default value. |

<b>Example</b>

```
function callback() {}
voltmx.os.startSecureTransaction(callback, 1)
```

<b>Return Values</b>

This API has no return values.

<b>Remarks</b>

Whenever os.startsecuretransaction is invoked, a krfid for that session or request is generated internally as a hidden field. The krfid is validated for each transaction/request. If the krfid is invalid, the callback function of os.startsecuretransaction API is invoked, and the request processing fails or a message appears stating that the session has expired.

<b>Platform Availability</b>

Available only on Mobile Web.

</details>
<details close markdown="block"><summary>voltmx.os.startSpeechRecognition</summary> 

* * *

Starts the speech recognition process.

> **_Note:_** Speech recognition callback(s) must be registered before invoking this API. Refer [voltmx.os.registerSpeechRecognizer](#regSpeech) API for more information.

**Syntax**

```

voltmx.os.startSpeechRecognition(successCallback, errorCallback);
```

<b>Input Parameters</b>

  
| Parameters | Description |
| --- | --- |
| successCallback \[JS Function\] - Optional | Triggered when speech recognition has started successfully. |
| errorCallback \[JS Function\] - Optional | Triggered if there is an error while starting the speech recognition operation or if the speech recognition operation is already in progress. |

**Example**

```
function startSpeech() {
    voltmx.os.startSpeechRecognition(successCallback, errorCallback);
}

function successCallback(result) {
    alert("Success " + result);
}

function errorCallback(error) {
    alert("Failure " + error);
}
```

**Return Values**

None.

**Platform Availability**

Available only on Windows.

</details>
<details close markdown="block"><summary>voltmx.os.stopSpeechRecognition</summary> 

* * *

Stops existing (already started with **voltmx.os.startSpeechRecognition** API) speech recognition operations.

> **_Note:_** Speech recognition callback(s) must be registered before invoking this API. Refer [](#regSpeech)[voltmx.os.registerSpeechRecognizer](#regSpeech) API for more information.

**Syntax**

```

voltmx.os.stopSpeechRecognition(successCallback, errorCallback);
```

<b>Input Parameters</b>

  
| Parameters | Descrption |
| --- | --- |
| successCallback \[JS Function\] - Optional | Triggered when speech recognition has stopped successfully. |
| errorCallback \[JS Function\] - Optional | Triggered if there is an error while stopping the speech recognition operation or if there is no speech recognition operation in progress to stop. |

**Example**

```
function stopSpeech() {
    voltmx.os.stopSpeechRecognition(successCallback, errorCallback);
}

function successCallback(result) {
    alert("Success " + result);
}

function errorCallback(error) {
    alert("Failure " + error);
}
```

**Return Values**

None.

**Platform Availability**

Available only on Windows.

</details>
<details close markdown="block"><summary>voltmx.os.toCurrency</summary>

* * *

This API allows you to convert the given number to represent currency. At present, only USA currency is supported.

<b>Syntax</b>

```

voltmx.os.toCurrency([number](#number));
```

<b>Input Parameters</b>

  
| Parameters | Description |
| --- | --- |
| number\[Number\] - Mandatory | Specifies the number that must be converted to represent currency.If the input number is a negative number, the negative number is treated as a positive number (this is because a currency does not have any negative symbol) and the converted value is returned. |

 

<b>Example</b>

Perform a _voltmx.os.toCurrency_ operation on the number "_10000_".

```
var tocurrency = voltmx.os.toCurrency(10000);
voltmx.print(tocurrency);
//prints $ 10,000

```

<b>Return Values</b>

| Return Value | Description |
| --- | --- |
| Currency \[String\] | A string with the number formatted as currency. If the input string has decimal points, the return value is truncated till two decimal points. |

 

<b>Exceptions</b>

An error is thrown if input is invalid or does not follow the expected structure.

102 - Invalid input error

<b>Platform Availability</b>

Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>voltmx.os.toNumber</summary>

* * *

This API converts the argument to a number. If the argument is already a number or a string convertible to a number, then the API returns this number; otherwise, it returns **null** for JavaScript.

<b>Syntax</b>

`voltmx.os.toNumber**([argument](#argument))`

<b>Input Parameters</b>

  
| Parameters | Description |
| --- | --- |
| argument \[String or Number\] - Mandatory | The argument that must be converted to a number. |

 

<b>Example</b>

In this example, only the string which can be converted to a number returns a number otherwise it returns n.

```
voltmx.os.toNumber (ms34rd);
//returns null as the string passed cannot be converted to a number
voltmx.os.toNumber ("58");
//returns 58 as the string could be converted to a number

```

<b>Return Values</b>

| Return Value | Description |
| --- | --- |
| Converted Number \[Number\] | The input string or number that has been converted to a number and returned. |
| null/nil | The argument cannot be converted to a number. |

 

<b>Remarks</b>

The input parameter must be a number or a string.

<b>Exceptions</b>

An error is thrown if input is invalid or does not follow the expected structure.

102 - Invalid input error

<b>Platform Availability</b>

Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>voltmx.os.unregisterBatteryService</summary>

* * *

This API stops the monitoring process of the device battery. You must call this API when the use of the battery monitoring service has been completed, to reduce the overhead.

> **_Note:_** After your app calls the voltmx.os.unregisterBatteryService API, the callback function registered by the [voltmx.os.registerBatteryService](voltmx.os_functions_batteryapi.md#registerBatteryService) API is no longer invoked.

<b>Syntax</b>

```

voltmx.os.unregisterBatteryService();
```

<b>Input Parameters</b>

None

<b>Example</b>

```
//This code is used to register a battery service and deregister the service based on your battery level
registerBatteryService: function() {
    voltmx.os.registerBatteryService(this.mybatterychangecallback);
    var batterylevel = voltmx.os.getBatteryLevel();
},

mybatterychangecallback: function(batteryInfo) {
    var batterylevel = batteryInfo.batterylevel;
    if (batterylevel <= 20) {
        alert("The Battery Level is below 20%, make sure that you charge your device");
    } else {
        voltmx.os.unregisterBatteryService();
        alert("We are unregistering the Battery Service as it might cause an overhead");
    }
},
```

<b>Return Values</b>

None

<b>Platform Availability</b>

*   iOS
*   Android
*   Windows

* * *

</details>
<details close markdown="block"><summary>voltmx.os.unregisterSpeechRecognizer</summary> 

* * *

Deregisters existing (already registered with **voltmx.os.registerSpeechRecognizer** API) callbacks for speech recognition events.

**Syntax**

```

voltmx.os.unregisterSpeechRecognizer();
```

<b>Input Parameters</b>

None.

**Example**

```
function unRegisterCallbacks() {  
voltmx.os.unregisterSpeechRecognizer();  
}
```

**Return Value**

None.

**Platform Availability**

Available only on Windows.

</details>
<details close markdown="block"><summary>voltmx.os.userAgent</summary>

* * *

This API returns a unique identifier of the mobile device that is extracted from the useragent. This unique ID represents the device model and the manufacturer. Volt MX Iris Application Server uses this information to adjust the content to match the screen resolution of the device. For example, the content is adjusted to fit the screen width, height, or memory required etc.

The useragent contains the following information:

*   device model
*   manufacturer
*   OS version
*   browser version
*   Java capabilities, and so on.

The following are a few sample useragents:

  
| Useragent | Description |
| --- | --- |
| `Nokia6230i/2.0 (03.25) Profile/MIDP-2.0 Configuration/CLDC-1.1` | Nokia 6230i model mobile device |
| `SonyEricssonT610/R501 Profile/MIDP-1.0 Configuration/CLDC-1.0` | SonyEricsson T610 model mobile device |
| `Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0)` | Windows Phone mobile device |
| `OPWV-SDK/62 UP.Browser/6.2.2.1.208 (GUI) MMP/2.0` | Openwave Mobile Browser 6.2.2 |
| `Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0)` | Microsoft Internet Explorer 6 |
| `Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.7.12) Gecko/20050915 Firefox/1.0.7` | Mozilla Firefox 1.0.7 running on Windows 2000 |
| `Mozilla/5.0](iPad; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (.md, like Gecko) Version/4.0.4 Mobile/7B314 Safari/531.21.10` | iPad |
| `Device Model. For example, Galaxy Nexus.` | Android and Android Tablet. |

You can use this API in the following scenarios when you need to identify:

*   The model of a specific mobile device.
*   The mobile devices based on the manufacturer.
*   If the device is a web browser, mobile device, micro browser, or a computer.

<b>Syntax</b>

**voltmx.os.userAgent()**

<b>Input Parameters</b>

None

<b>Example</b>

In the following example, the uid returned by the voltmx.os.userAgent is displayed in the alert.

```
var devID = voltmx.os.userAgent();
alert("User Agent return value is::" + devID);
```

<b>Return Values</b>

Device ID \[String\]

Any of the available Device ID is returned in the order Device Model, OS Version, Browser Version, Java Capabilities, and Manufacturer.

> **_Note:_**  
> *   For Android and Android Tablet, device model is returned as an user agent.
> *   For iOS Devices, user agent is returned as a string.

<b>Platform Availability</b>

Available on all platforms.

* * *
</details>


![](resources/prettify/onload.png)
