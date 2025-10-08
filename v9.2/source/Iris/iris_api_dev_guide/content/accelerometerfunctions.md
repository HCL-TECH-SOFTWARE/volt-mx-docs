                             


voltmx.accelerometer Namespace
============================

The voltmx.accelerometer namespace provides the following API elements for managing and retrieving data from the device's accelerometer.

Accelerometer Functions
-----------------------

The voltmx.accelerometer namespace provides the following functions.


<details close markdown="block"><summary>voltmx.accelerometer.registerAccelerationEvents</summary>

* * *

Registers event handlers for acceleration events, such as 'shake'.

### Syntax

```

voltmx.accelerometer.registerAccelerationEvents(  
    events)
```


### Input Parameters

| Parameter | Description |
| --- | --- |
| events | An object that specifies a hash table containing the events. This table has the key-value pairs that specify the event and the event handler. |

 

**Example**

```

//Defining the shake event handler function
function onshake() {
    voltmx.print("Shake called");
}

function registerAccelerationEvents() {
   
    // Register acceleration events.

    //Define the event object.
    var events = {
        shake: onshake
    };

    //Register the shake event handler function.
    voltmx.accelerometer.registerAccelerationEvents(events);
}
```

### Return Values

None.

### Remarks

Event handlers that you set with this function are called asynchronously whenever an accelerometer event occurs. The event handler is triggered only at the end of the event. For example, a `shake` event handler is called after the shaking has stopped, indicating that device motion has occurred. The precision with which a `shake` event can be recognized may vary per platform and depends on the device capability.

The table contained in the _event_ parameter has the following format`: {<event>:<event-handler-function>}` where `<event>` is the name of the event and `<event-handler-function>` is the name of the event handler function for that specific event. For example, to set an event handler for the `shake` event, the table would look similar to the following.

{shake:onshake}

> **_Note:_** Currently, shake is the only event that is supported.

### Platform Availability

Available on all platforms except SPA, Desktop Web and Mobile Web.

* * *

</details>
<details close markdown="block"><summary>voltmx.accelerometer.retrieveCurrentAcceleration</summary>

* * *

Sets callback functions for retrieving the current device acceleration.

### Syntax

```

voltmx.accelerometer.retrieveCurrentAcceleration (  
    onSuccessCallback,  
    onFailureCallback);
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| onSuccessCallback | The callback function that is executed when retrieving the current device acceleration is successful. For details, see the **Remarks** section below. |
| onFailureCallback | The callback that is executed when an error occurs while retrieving the current device acceleration. For details, see the **Remarks** section below. |

 

**Example**

Example 1:

```

// Retrieve the current acceleration data 

// onsuccesscallback
// This method accepts an 'accelerometerdata' object, which contains the current device acceleration values
function onsuccesscallback(accelerometerdata) {
    voltmx.print("X: " + accelerometerdata.x + "Y: " + accelerometerdata.y + "Z: " + accelerometerdata.z + "Timestamp: " + accelerometerdata.timestamp);
}
// onfailurecallback 

function onfailurecallback(error) {
    voltmx.print("code: " + error.code + "message: " + error.message);
}

function retrieveCurrentAcceleration() {
    // Set the callbacks for getting the acceleration information. 
    voltmx.accelerometer.retrieveCurrentAcceleration(onsuccesscallback, onfailurecallback);
}
```

Example 2:

```

//Displays the accelerometer data in form frmAclMeter1. This is callback function is set by the voltmx.accelerometer.retrievecurrentacceleration function and invoked automatically by the Volt MX Iris API framework when the
retrieval of the current device acceleration is successful.
 
function onsuccesscallbackretCurrentAcc(accelerometerdata) {
    frmAclMeter1.lblX.text = accelerometerdata.x;
    frmAclMeter1.lblY.text = accelerometerdata.y;
    frmAclMeter1.lblZ.text = accelerometerdata.z;
    frmAclMeter1.lblT.text = accelerometerdata.timestamp;
}

//To display an error alert if retrievecurrentacceleration fails. This callback function is set by the accelerometer.retrievecurrentacceleration function and invoked automatically by the Volt MX Iris API Framework when the retrieval of the current device acceleration is unsuccessful/failed.
 
function onfailurecallbackretCurrentAcc(error) {
    alert("Accelerometer is not supported in the device.");
}

//Calls the accelerometer.retrievecurrentacceleration. Function to retrieve the current device acceleration.
function retrieveCurrentAcceleration()
{
    try
    {
        voltmx.accelerometer.retrieveCurrentAcceleration(
            onsuccesscallbackretCurrentAcc, 
            onfailurecallbackstartmonitoringAcc);
            frmAclMeter1.btnStopAcc.setVisibility(false);
    }
    catch(e) 
    {
        alert("Accelerometer not supported.");
    }
}			
```

### Return Values

None.

### Remarks

This function sets twp callback that your app uses for retrieving the current acceleration information from the device. One is called if the acceleration was successfully retrieved, while the other is called if it was not.

The _onSuccessCallback_ parameter contains a callback function that is invoked upon success has the following syntax:

**onSuccessCallback(accelerometerdata);**

The _accelerometerdata_ parameter to the `onSuccessCallback` function is a table containing key-value pairs, as explained in the following.

| Key | Type | Description |
| --- | --- | --- |
| x | Floating Point Number | The acceleration in the X direction. |
| y | Floating Point Number | The acceleration in the Y direction. |
| z | Floating Point Number | The acceleration in the Z direction. |
| timestamp | Floating Point Number | The number of milli seconds elapsed since the start of the Unix Epoch. The standard Unix Epoch is 00:00:00 UTC on 1 January 1970. The timestamp does not reflect the frequency at which the device can retrieve the accelerometer data, because the device capability (in terms of frequency) can vary from one platform to the other. |

 

The _onFailureCallback_ parameter contains callback function that is invoked if an error occurs has the following syntax:

**onFailureCallback();**

The `onFailureCallback` function has no parameters. It enables your app to handle the error however you want it to.  

The two callback functions are invoked asynchronously and this function returns the value immediately without waiting for actual retrieval of the device acceleration data.

### Platform Availability

Available on all platforms except SPA, Desktop Web and Mobile Web.

* * *

</details>
<details close markdown="block"><summary>voltmx.accelerometer.startMonitoringAcceleration</summary>

* * *

Starts monitoring the device's acceleration on a continuous basis.

### Syntax

```

voltmx.accelerometer.startMonitoringAcceleration(  
    onSuccessCallback,  
    onFailureCallback,  
    configData);
```


### Input Parameters

| Parameter | Description |
| --- | --- |
| onSuccessCallback | The callback function that is executed when retrieving the current device acceleration is successful. For details, see the **Remarks** section below. |
| onFailureCallback | The callback that is executed when an error occurs while retrieving the current device acceleration. For details, see the **Remarks** section below. |
| configData | A JavaScript object that specifies the configuration parameters for the monitoring operation. For details, see the **Remarks** section below. |

 

**Example**

Example 1:

```

//Start monitoring acceleration

// onSuccessCallback
// This function accepts an 'accelerometerdata' object, which contains the current device acceleration values 
function onSuccessCallback(accelerometerdata) {
    voltmx.print("X: " + accelerometerdata.x + "Y: " + accelerometerdata.y + "Z:" + accelerometerdata.z + "Timestamp: " + accelerometerdata.timestamp);
}

//onFailureCallback callback 
function onFailureCallback(error) {
    voltmx.print("code: " + error.code + "message: " + error.message);
}

function startMonitoringAcceleration() {
    // Start monitor acceleration.
    voltmx.accelerometer.startMonitoringAcceleration(onSuccessCallback, onFailureCallback, {
        frequency: 10,
        onchange: false
    });
}
```

Example 2:

```
//To display the accelerometerdata in form frmAclMeter1. This callback function is set by the voltmx.accelerometer.startmonitoringacceleration function and invoked automatically by the Volt MX Iris API Framework when the retrieval of the current device acceleration is successful and there is a change in the device acceleration values because the device has moved.
 
function onsuccesscallbackstartmonitoringAcc(startmonitoringdata) {
    frmAclMeter1.lblX.text = startmonitoringdata.x;
    frmAclMeter1.lblY.text = startmonitoringdata.y;
    frmAclMeter1.lblZ.text = startmonitoringdata.z;
    frmAclMeter1.lblT.text = startmonitoringdata.timestamp;
}

//To display an error alert if startMonitoringAccelerationfails. This callback function is set by the voltmx.accelerometer.startMonitoringAcceleration function and invoked automatically by the Volt MX Iris API Framework when the retrieval of the current device acceleration is unsuccessful/failed.
 
function onfailurecallbackstartmonitoringAcc(error) {
    alert("Accelerometer is not supported in the device.");
}

// To call accelerometer.startmonitoringacceleration API to start monitoring the device acceleration or motion.

function startmonitoringAcc() {
    try {
        voltmx.accelerometer.startMonitoringAcceleration(
            onsuccesscallbackstartmonitoringAcc,
            onfailurecallbackstartmonitoringAcc, {
                frequency: 200,
                onChange: true
            });
        frmAclMeter1.btnStopAcc.setVisibility(true);
    } catch (e) {
        alert("Accelerometer is not supported.");
    }
}				
```

### Return Values

None.

### Remarks

By calling this function, your app can start monitoring the device acceleration or motion continuously. When there is a change in the device acceleration values because the device moves, the callback functions passed in through this function's parameters are invoked asynchronously. This function returns immediately without waiting for the device initialization for accelerometer.

The _onSuccessCallback_ parameter contains a callback function that is invoked upon success has the following syntax:

**onSuccessCallback(accelerometerdata);**

The _accelerometerdata_ parameter to the `onSuccessCallback` function is a table containing key-value pairs, as explained in the following.

| Key | Type | Description |
| --- | --- | --- |
| x | Floating Point Number | The acceleration in the X direction. |
| y | Floating Point Number | The acceleration in the Y direction. |
| z | Floating Point Number | The acceleration in the Z direction. |
| timestamp | Floating Point Number | The number of milli seconds elapsed since the start of the Unix Epoch. The standard Unix Epoch is 00:00:00 UTC on 1 January 1970. The timestamp does not reflect the frequency at which the device can retrieve the accelerometer data, because the device capability (in terms of frequency) can vary from one platform to the other. |

The callback function that is invoked if an error occurs has the following syntax:

**onFailureCallback();**

The `onFailureCallback` function has no parameters. It enables your app to handle the error however you want it to.  

The two callback functions are invoked asynchronously and this function returns the value immediately without waiting for actual retrieval of the device acceleration data.

When your app invokes the `voltmx.accelerometer.startMonitoringAcceleration` function, the third parameter that your app must pass is _configData_. The _configData_ parameter contains a JavaScript object that holds a set of key-value pairs that must be in the following format.

| Key | Type | Description |
| --- | --- | --- |
| frequency | Floating Point Number | The time interval, in milliseconds, in which accelerometer data needs to be retrieved. The default value of `frequency` must be "200" milliseconds minimum. Any negative value specified in the frequency reverts to the default value i.e., 200ms. |
| onchange | Boolean | A value that determines whether or not to trigger an event whenever the device is moving regardless of the value specified in `frequency`. If `onchange` is set to `true`, the number set in _frequency_ is not respected and the _onSuccessCallback_ event is invoked whenever the device is in motion. If this value is set to _false_, the _onSuccessCallback_ event is invoked in the time interval specified in the frequency parameter is used. The default value for `onchange` is _false_. |

> **_Note:_** If you set `onchange` to `false`, it is necessary to specify a `frequency` value or the _onSuccessCallback_ function is never invoked.

### Platform Availability

Available on all platforms except SPA, Desktop Web, and Mobile Web.

* * *

</details>
<details close markdown="block"><summary>voltmx.accelerometer.stopMonitoringAcceleration</summary>

* * *

Stops the device monitoring activity if it is active.

### Syntax

```

voltmx.accelerometer.stopMonitoringAcceleration();
```

**Example**

```

function stopMonitoringAcceleration() {
    // Stop the device monitoring activity if it is active.
    voltmx.accelerometer.stopMonitoringAcceleration();
}
```

### Input Parameters

None.

### Return Values

None.

### Remarks

If your app has been continuously monitoring the device's motion, it calls the `voltmx.accelerometer.stopMonitoringAcceleration` to stop. Apps can start monitoring the device motion using the [accelerometer.startmonitoringacceleration](#accelero2) function.

### Platform Availability

Available on all platforms except SPA, Desktop Web, and Mobile Web.

* * *

</details>
<details close markdown="block"><summary>voltmx.accelerometer.unregisterAccelerationEvents</summary>

* * *

Unregisters event handlers for the specified acceleration event types.

### Syntax

```

voltmx.accelerometer.unregisterAccelerationEvents(  
    eventTypes);
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| _eventTypes_ | An array of events. |

 

**Example**

```

function unregisteraccelerationevents() {
    // Unregister for acceleration events. 
    voltmx.accelerometer.unregisteraccelerationevents({
        "shake"
    });
}
```

### Return Values

None.

### Remarks

After this function returns, the event specified in the _eventTypes_ parameter no longer have event handlers registered for them. As a result, your app no longer receives notifications of those events.

### Platform Availability

Available on all platforms except SPA, Desktop Web, and Mobile Web.

* * *

![](resources/prettify/onload.png)
</details>