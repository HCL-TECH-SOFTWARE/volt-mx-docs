                           


voltmx.wearable Namespace Functions
=================================

The `voltmx.wearable` namespace provides the following functions.


<details close markdown="block"><summary>voltmx.wearable.addCapabilityChangeListener Function</summary> 

* * *

Adds a callback event handler function that monitors for changes to the status of paired devices, such the device becoming available or unavailable.

### Syntax
```

voltmx.wearable.addCapabilityChangeListener(  
    capability,  
    onCapabilityChanged,  
    errorCallback);
```

### Parameters

_capability_

A string that specifies the capability to look for on all of the paired devices.

_onCapabilityChanged_

A JavaScript function that receives the capable devices list and responds accordingly. The callback must have the following signature.

onCapabilityChanged(capability, nodes);

Where capability is a string that specifies the given capability for which callback function is called, and `nodes` is an array of JavaScript objects, each of which represents a device, or node, that is paired with the current device. The JavaScript objects each hold the following key-value pairs.

| Key | Value |
| --- | --- |
| displayName | A string containing the name of the device. |
| nodeId | A string that specifies a unique ID for the device. |
| isNearBy | A Boolean value that is `true` if the device is nearby (within range), or `false` if not. |

errorCallback

A callback event handler function that is invoked when there is an error. This callback function must have the following signature.

errorCallback(errorConst);

Where `errorConst` is a value from the [Callback Result Constants](voltmx.wearable_namespace_constants.md#CallBackResult).

### Return Values

None.

### Remarks

This function enables your app to see when devices that are paired with the current device become available or unavailable, or when the paired app gets installed or uninstalled.

> **_Important:_** To call this function from the app that is paired with your watch app, you must set the compilation settings in  Volt MX Iris appropriately. For details, see [Transmitting Data Between Paired Apps](androidwearoverviews.md#transmitting-data-between-paired-apps).

### Example

```

function addCapabilityChangeListener()
{
    voltmx.wearable.addCapabilityChangeListener("capability_1", onCapabilityChanged, capabilityErrorCallback);
}

function onCapabilityChanged(capability, nodesArray)
{
    if (nodesArray.length > 0)
    {
        alert("nodes with capability " + capability + "  exists “ );
    }
    else
    {
        alert("no node is  connected with capability " + capability);
    }
}

function capabilityErrorCallback(errorConst)
{
    alert("error occured, errorConst = " + errorConst);
}
```

### Platform Availability

Android Wear 2.0 or later.

* * *

</details>
<details close markdown="block"><summary>voltmx.wearable.addForegroundDataItemListener Function</summary> 

* * *

Receives data items when the app is in the foreground.

### Syntax
```

voltmx.wearable.addForegroundDataItemListener(  
    onDataItemReceiver,  
    errorCallback);
```
### Parameters

_onDataItemReceiver_

A callback event handler function that is invoked when data items are received from the paired device. The callback function passed through the _onDataItemReceiver_ parameter must have the following signature.

onDataItemReceiver(path,payloadTable,nodeId);

Where `path` is the path string that the sending app on the pair device sent when it called the [voltmx.wearable.putDataItem](#putDataItem) function, payloadTable is the JavaScript object containing the data payload that the sending app on the pair device sent when it called the [voltmx.wearable.putDataItem](#putDataItem) function, and `nodeId` is the sending app's device identification ID.

_errorCallback_

A callback event handler function that is invoked when there is an error. This callback function must have the following signature.

errorCallback(errorConst);

Where `errorConst` is a value from the [Callback Result Constants](voltmx.wearable_namespace_constants.md#CallBackResult).

### Return Values

None.

### Remarks

This function only receives data when the app is in the foreground. It does not affect the device or the device's battery life when the app is not running or is running in the background.

> **_Important:_** To call this function from the app that is paired with your watch app, you must set the compilation settings in  Volt MX Iris appropriately. For details, see [Transmitting Data Between Paired Apps](androidwearoverviews.md#transmitting-data-between-paired-apps).

### Example

```

function onDataItemReceiver(path,payloadTable,nodeId)
{
    if (path == “/photo’’)
    {
        // reading payLoadTable
        if (payloadTable ! = null)
        {
            var rawBytes =   payloadTable.photo ;
            frmMyForm.imgImagewidget.rawBytes = rawBytes ;
        }
    } 
    else if (path == “/count”)
    {
        // reading payloadTable
        if (payloadTable != null)
        {
            var count = payloadTable.count;
            frmMyForm.lblThisLabel.text = count ;

            // sending reply to the sender using nodeId obtained as function argument.
            voltmx.wearable.sendMessage(path,”message received” ,{“nodeId”:nodeid});
        }
    }
}

function errorCallback(errorConst)
{
    alert (“error occurred”);
    if(errorConst == voltmx.wearable.RESULT_ERROR_API_NOT_AVAILABLE)
    {
        alert (“Error: Android Wear app. is not installed in the device”);
    } 
    else if (errorConst == voltmx.wearable.RESULT_ERROR_UNKNOWN) 
    { 
        alert (“Error unknown”);
    }
}

voltmx.wearable.addForegroundDataItemListener(onDataItemReceiver,errorCallback);				
```

### Platform Availability

Android Wear 2.0 or later.

* * *

</details>
<details close markdown="block"><summary>voltmx.wearable.addForegroundMessageListener Function</summary> 

* * *

Receives messages when the app is running in the foreground.

### Syntax
```

voltmx.wearable.addForegroundMessageListener(  
    onMessageReceiver,  
    errorCallback);
```

### Parameters

_onMessageReceiver_

A JavaScript callback function that is invoked when the message is received if the app is in the foreground. The callback function is not invoked if the app is not running or is running in the background. The callback function must have the following signature.

onMessageReceiver(path,payload,nodeId);

Where `path` is a string that uniquely identifies the message being transmitted, `payload` is a JavaScript object of type `RawBytes` or `String`, and `nodeId` is a string containing the ID of the node to send the message to. The `path` argument must start with a forward slash character ('/') or else an exception is thrown. The maximum size of the `payload` argument is 100KB. Your app can use the `nodeId` value to reply to the sender.

_errorCallback_

A JavaScript callback function that is invoked when there is an error in receiving the message. The callback function must have the following signature.

errorCallback(errorConst);

Where `errorConst` is a value from the [Callback Result Constants](voltmx.wearable_namespace_constants.md#CallBackResult).

### Return Values

None.

### Remarks

The callback set by this function receives messages only when the app is in the foreground. This can extend the charge of the device's battery.

> **_Important:_** To call this function from the app that is paired with your watch app, you must set the compilation settings in  Volt MX Iris appropriately. For details, see [Transmitting Data Between Paired Apps](androidwearoverviews.md#transmitting-data-between-paired-apps).

### Example

```

function onMessageReceiver (path,payload,nodeId)
{
    if(path == “/location”)
    {
        // reading payload
        if (payload != null)
        {
            var  LatLong = payload ;
            // your logic to use payload and send reply if required.
            voltmx.wearable.sendMessage(path,”received location”,null, {“nodeId”: nodeId}) ;
        }
    } 
    else if (path == “/start-Form”)
    {
        // reading   payload
        if(payload != null)
        {
            var form = payload;
            if(form == “Form1”)
            {
                Form1.show( );
            }
        }
    }
}
```

### Platform Availability

Android Wear 2.0 or later.

* * *

</details>
<details close markdown="block"><summary>voltmx.wearable.getCapabilityAsync Function</summary> 

* * *

Retrieves the capabilities of a paired device.

### Syntax
```

voltmx.wearable.getCapabilityAsync(  
    capability,  
    capabilityCallback);
```

### Parameters

_capability_

A string that specifies the capability to look for on all of the paired devices.

_capabilityCallback_

A JavaScript function that receives the capabilities list and responds accordingly. The callback must have the following signature.

capabilityCallback(nodesArray);

Where `nodesArray` is an array of JavaScript objects, each of which represents a device, or node, that is paired with the current device. The JavaScript objects each hold the following key-value pairs.

| Key | Value |
| --- | --- |
| displayName | A string containing the name of the device. |
| nodeId | A string that specifies a unique ID for the device. |
| isNearBy | A Boolean value that is `true` if the device is nearby (within range), or `false` if not. |

### Return Values

None.

### Remarks

When you write apps for Android Wear 2.0 or later, the watch apps can be stand-alone apps or they can paired with a companion app on an Android mobile device. If your watch app is paired with a companion app on an Android mobile device, your watch app and your companion app each needs a way to discover whether or not the paired device is available and the matching app is running on it. The primary use of this function is to find that out. Both the Android Wear app and the Android phone or tablet app must advertise their presence on the network of paired devices. The apps on the paired devices call the `getCapabilityAsync` function find out whether the paired device has the companion app. For more information, see [Using Capabilities](androidwearoverviews.md#using-capabilities).

This function is executed asynchronously and the results are passed to the callback function specified in the _capabilityCallback_ parameter.

> **_Important:_** To call this function from the app that is paired with your watch app, you must set the compilation settings in  Volt MX Iris appropriately. For details, see [Transmitting Data Between Paired Apps](androidwearoverviews.md#transmitting-data-between-paired-apps).

### Example

```

var nodesArray= voltmx.wearable.getCapabilityAsync("phoneApp", capabilityCallback);
function capabilityCallback (nodesArray)
{
    if(nodesArray.length > 0)
    {
        alert(“The companion app is available.”) ;
        for (var i = 0 ; i < nodesArray.length ; i++)
        {
            var nodeId = nodesArray[i].nodeId ;
            voltmx.wearable.sendMessage(path,payload,statusCallback,nodeId);
        }
    }
    else
    {
        alert(“requested capability nodes/devices does not exists”);
    }
}
```

### Platform Availability

Android Wear 2.0 or later.

* * *

</details>
<details close markdown="block"><summary>voltmx.wearable.getConnectedNodes Function</summary> 

* * *

Retrieves an array of connected devices.

### Syntax
```

voltmx.wearable.getConnectedNodes();
}
```

### Parameters

None.

### Return Values

Returns an array of nodes. Nodes are devices that are paired with the current device. Each node in the array is a JavaScript object containing the following key-value pairs.

| Key | Value |
| --- | --- |
| displayName | A string containing the name of the device. |
| nodeId | A string that specifies a unique ID for the device. |
| isNearBy | A Boolean value that is `true` if the device is nearby (within range), or `false` if not. |

### Remarks

This function retrieves an array of devices that are paired with the current device via Bluetooth. The paired devices may or may not currently be in range.

> **_Important:_** To call this function from the app that is paired with your watch app, you must set the compilation settings in  Volt MX Iris appropriately. For details, see [Transmitting Data Between Paired Apps](androidwearoverviews.md#transmitting-data-between-paired-apps).

### Example

```

function sendMessageToPairedDevices()
{
    var nodesArray = voltmx.wearable.getConnectedNodes();

    if(nodesArray.length > 0)
    {
        alert(“Paired devices exist.”) ;
        for(index = 0 ; index < nodesArray.length ; index++)
        {
            var nodeId =  nodesArray [index].nodeId ;
            voltmx.wearable.sendMessage(path,payload,statusCallback, nodeId);
        }
    }
    else
    {
        alert(“ There are no paired devices”) ;
    }
}
```

### Platform Availability

Android Wear 2.0 or later.

* * *

</details>
<details close markdown="block"><summary>voltmx.wearable.openListingOfAppInPlayStoreOnRemoteDevice</summary> 

* * *

Opens the listing for the specified package name in the Google Play store on the remote device so that the user can install the corresponding app.

### Syntax
```

voltmx.wearable.openListingOfAppInPlayStoreOnRemoteDevice(  
    appPackageName,  
    nodeId,  
    statusCallback);
```

### Parameters

_appPackageName_

A string that has the name of the application package whose listing is opened on the paired remote device.

_nodeId_

A string that holds the unique ID of the paired remote device.

_statusCallback_

A JavaScript callback function that processes the results of the current operation. The callback function must have the following signature.

statusCallback(result);

Where result is a value from the [Callback Result Constants](voltmx.wearable_namespace_constants.md#CallBackResult). Specifically, the `result` argument can be one of the following values.

| Constant | Description |
| --- | --- |
| voltmx.wearable.RESULT\_FAILED | The remote device failed to open the listing for the companion app in the Google Play store. |
| voltmx.wearable.RESULT\_SUCCESS | The listing for the companion app was successfully opened in the Google Play store on the paired device. |
| voltmx.wearable.RESULT\_UNKNOWN | The results of the operation are unknown. |

### Return Values

None.

### Remarks

If your watch app depends on a phone app, both the watch app and the phone can detect whether the companion app is installed on the paired device. For example, the watch app can detect whether the paired phone has the phone app installed by calling the [voltmx.wearable.getCapabilityAsync](#openListingOfAppInPlayStoreOnRemoteDevice) function. Suppose that in this example, the watch finds that the paired device is present but it does not have the companion phone app installed. The watch app can then call this function to open the companion phone app's listing in the Google Play store for the user. The user can then install the companion phone app so that the phone app and the watch app can work together.

### Example

```

function checkAppInstalledInConnectedDeviceIfNotOpenPlayStoreInRemoteDevice()
{
     var nodeIds = voltmx.wearable.getConnectedNodeIds();

     if (nodeIds.length > 0)
     {
          voltmx.wearable.getCapabilityAsync(“wear_app_capability”,capabilityCallback);
     }
}

function capabilityCallback(capabilityNodes)
{
     if (capabilityNodes.length < 0)
     {
          alert(“app is not installed on the remote device,opening through playstore API ”);
					
          var nodeIds = voltmx.wearable.getConnectedNodeIds();
					
          for (var nodeId in nodeIds)
          {
               voltmx.wearable.openAppInPlayStoreOnRemoteDevice(“com.x.y”, nodeId);
          }
     }
} 
```

### Platform Availability

Android Wear 2.0 or later.

* * *

</details>
<details close markdown="block"><summary>voltmx.wearable.putDataItem Function</summary> 

* * *

Sends data items to paired devices that are connected over Bluetooth.

### Syntax
```

voltmx.wearable.putDataItem(  
    path,  
    payloadTable,  
    statusCallback ,  
    options);
```

### Parameters

_path_

A string that uniquely identifies the data item being transmitted. The path must start with a forward slash character ('/') or an exception is thrown.

_payloadTable_

A JavaScript object containing key-value pairs that are application-specific. You can use whatever key-value pairs you need to in order to send information between your watch app and its paired phone app. However, transmitting large blocks of data may affect the user's experience with your app.

_statusCallback_

A callback event handler function that is invoked with the data item is transmitted or when there is an error. The callback function for the _statusCallback_ parameter must have the following signature.

statusCallback(status);

Where `status` is a value from the [Callback Result Constants](voltmx.wearable_namespace_constants.md#CallBackResult) that tells whether the transmission of the data succeeded, or, if not, what error occurred.

It is important to understand that even if the value of the `statusCallback` function's `status` parameter is voltmx.wearable.RESULT\_SUCCESS, it does not mean that the payload was delivered to the target device successfully. It only indicates that the payload was successfully dispatched to the underlying Android Wear system.

_options_

An JavaScript object that contains key-value pairs. This parameter is optional. The following key-value pairs are supported.

| Key | Value |
| --- | --- |
| isUrgent | A Boolean value that indicates whether the data must be synched right away or not. The default for this key is `false`. This means that the data is may not be transmitted for as much as 30 minutes, though the delay is usually not more than 2-3 minutes. Android Wear does this to preserve battery life. Setting this key to `true` forces Android Wear to transmit the data immediately. Because the _options_ parameter is optional, this key is set to `false` if you do not provide a value for the _options_ parameter when you call the `putDataItem` function. |

### Return Values

None.

### Remarks

Your Volt MX Wearables for Android Wear apps use this function to transmit data between watches and the Android mobile devices they are paired with. The paired devices can send both simple data, such as numbers, strings, and Boolean values and large data items, such as RawBytes obtained from an Image object or Camera widget. However, other data or objects cannot be sent.

Apps can send data items to their companion apps or they can send messages. But messages are not guaranteed to be delivered because the device may not be connected or it may be out of range at the time the message is sent. Transmitting data items guarantees the deliver of the data. So if the data you are sending must have a guaranteed delivery, your app should call this function to send the information as data items rather than calling the `voltmx.wearable.sendMessage` function to send the information as a message.

If your app calls this function without changing the payload, it is the same as calling it once. The same payload is not transmitted multiple times. Transmission is only initiated if the payload is different.

> **_Important:_** To call this function from the app that is paired with your watch app, you must set the compilation settings in  Volt MX Iris appropriately. For details, see [Transmitting Data Between Paired Apps](androidwearoverviews.md#transmitting-data-between-paired-apps).

### Example 1

```

var path = “/count”;
var payloadTable = {“count”: 2};

function statusCallback(status)
{
    if (status == voltmx.wearable.RESULT_SUCCESS)
    {
        alert (“payload dispatched to android framework successfully”);
    } 
    else
    {
        alert (“error occurred  “);
        // find the exact error by comparing with Status Constants.
    }
}

voltmx.wearable.putDataItem(path,payloadTable,statusCallback) ;
```

### Example 2

```

// Take a picture with camera widget and send it to the android wear.
rawBytes = null;

function onCaptureCallbackOfCamera()
{
    rawBytes = frmMyCameraForm.cameraMyCameraWidget.rawBytes;
}

function sendDataItem()
{
    var payloadTable = {};

    if (rawBytes != null)
    {
        payloadTable.photo = rawBytes;
    }
    else
    {
        alert("please capture photo the with camera.");
        return ;
    } 
    voltmx.wearable.putDataItem(
        "/photo", 
        payloadTable, 
        statusCallback, 
        {
            "isUrgent": true
        });
}
```

### Platform Availability

Android Wear 2.0 or later

* * *

</details>
<details close markdown="block"><summary>voltmx.wearable.removeCapabilityChangeListener</summary> 

* * *

Removes the listener callback function for the specified capability.

### Syntax
```

voltmx.wearable.removeCapabilityChangeListener(  
    capability);
```

### Parameters

_capability_

A string that specifies the capability whose listener callback function is removed.

### Return Values

None.

### Remarks

This function enables your app to removed listener callback functions set by the [voltmx.wearable.addCapabilityChangeListener](#addCapabilityChangeListener) function.

### Example

```

voltmx.wearable.removeCapabilityChangeListener(“voiceTranscription”);
```

### Platform Availability

Android Wear 2.0 or later

* * *

</details>
<details close markdown="block"><summary>voltmx.wearable.removeForegroundDataItemListener Function</summary> 

* * *

Removes the callback function set by the [voltmx.wearable.addForegroundDataItemListener](#addForegroundDataItemListener) function.

### Syntax
```

voltmx.wearable.removeForegroundDataItemListener();
```

### Parameters

None.

### Return Values

None.

### Example

```

voltmx.wearable.removeForegroundDataItemListener();
```

### Platform Availability

Android Wear 2.0 or later.

* * *

</details>
<details close markdown="block"><summary>voltmx.wearable.removeForegroundMessageListener</summary> 

* * *

Removes the callback function set by the [voltmx.wearable.addForegroundMessageListener](#addForegroundMessageListener) function.

### Syntax
```

voltmx.wearable.removeForegroundMessageListener();
```

### Parameters

None.

### Return Values

None.

### Example

```

voltmx.wearable.removeForegroundMessageListener();
```

### Platform Availability

Android Wear 2.0 or later.

* * *

</details>
<details close markdown="block"><summary>voltmx.wearable.sendMessage Function</summary> 

* * *

Sends a message to a paired device.

### Syntax
```

voltmx.wearable.sendMessage(  
    path,  
    payload,  
    statusCallback,  
    options);
```

### Parameters

path

A string that uniquely identifies the data item being transmitted. The path must start with a forward slash character ('/') or an exception is thrown.

payload

A JavaScript object of type RawBytes or String. The maximum size of the payload is 100KB.

statusCallback

A callback event handler function that reports the result of the operation. The callback function must have the following signature.

statusCallback(status);

Where `status` is a value from the [Callback Result Constants](voltmx.wearable_namespace_constants.md#CallBackResult) that tells whether the transmission of the data succeeded, or, if not, what error occurred. Note that a status of voltmx.wearable.RESULT\_SUCCESS does not mean that the payload was successfully delivered to the target device. It only indicates that the payload was successfully delivered to the underlying Android Wear operating system, which then handles the transmission.

options

An JavaScript object that contains key-value pairs. This parameter is optional. The following key-value pairs are supported.

| Key | Value |
| --- | --- |
| nodeId | A string containing the ID of the node to send the message to.Your app can use this to reply to the sender. For more information, see the Remarks section below. |

### Return Values

None.

### Remarks

Sending a message to a paired device results in a faster delivery of the data than transmitting a data item. But messages are not guaranteed to be delivered because the device may not be connected or it may be out of range at the time the message is sent. Transmitting data items guarantees the deliver of the data.

Your app can get the node ID for the _options_ parameter by calling the following functions.

*   getConnectedNodes
*   addCapabilityChangeListener
*   addForegroundDataItemListener
*   setDataItemListener
*   addForegroundMessageListener
*   setMessageListener

> **_Important:_** To call this function from the app that is paired with your watch app, you must set the compilation settings in  Volt MX Iris appropriately. For details, see [Transmitting Data Between Paired Apps](androidwearoverviews.md#transmitting-data-between-paired-apps).

### Example 1

```

var path = “/location”;
var payload = “17.4478262,78.3363178,13”

function statusCallback(status)
{
    if (status == voltmx.wearable.RESULT_SUCCESS)
    { 
        alert (“message is dispatched successfully”);
    } 
    else
    {
        alert (“error occurred while sending message “);
    }
}

voltmx.wearable.sendMessage(path,payload, statusCallback,null) ;
```

### Example 2

```

var path = “/Start-Form”;
var payload = “Form1”

function statusCallback(status)
{
    if (status == voltmx.wearable.RESULT_SUCCESS)
    {
        alert (“message is dispatched successfully”);
    } 
    else 
    {
        alert (“error occurred while sending message “);
    }
}

var options = {“nodeId”: "12345"};

voltmx.wearable.sendMessage(path,payload, statusCallback,options) ;
```

Platform Availability

Android Wear 2.0 or later.

* * *

</details>
<details close markdown="block"><summary>voltmx.wearable.setDataItemListener Function</summary> 

* * *

Sets a callback event handler function that is invoked when the app receives data.

### Syntax
```

voltmx.wearable.setDataItemListener(  
    onDataItemReceiver);
```

### Parameters

_onDataItemReceiver_

A callback event handler function that is invoked when data items are received from the paired device. The callback function passed through the _onDataItemReceiver_ parameter must have the following signature.

onDataItemReceiver(path,payloadTable,nodeId);

Where `path` is the path string that the sending app on the pair device sent when it called the [voltmx.wearable.putDataItem](#putDataItem) function, payloadTable is the JavaScript object containing the data payload that the sending app on the pair device sent when it called the [voltmx.wearable.putDataItem](#putDataItem) function, and `nodeId` is the sending app's device identification ID.

_errorCallback_

Return Values

None.

### Remarks

This function sets a callback event handler that receives data even when the app is in the background or not running. However, setting this callback function consumes more power from the battery. So your app should only invoke `setDataItemListener` for high-priority items. In most cases, your app should use the [voltmx.wearable.addForegroundDataItemListener](#addForegroundDataItemListener) function instead.

Your app should generally call this function in either the pre-appinit or postapp-init callback functions.

> **_Important:_** To call this function you must set the compilation settings in  Volt MX Iris appropriately. For details, see [Transmitting Data Between Paired Apps](androidwearoverviews.md#transmitting-data-between-paired-apps).

### Example

```

function onDataItemReceiver(path,payloadTable, nodeId)
{
    if(path == “/photo’’)
    {
        // reading payLoadTable
        if (payloadTable != null)
        {
            var photo =   payloadTable.photoRawBytes ;
            frmMyForm.imgImagewidget.rawBytes = photo
        }
    } 
    else if (path == “/count”)
    {
        // reading   payloadTable
        if(payloadTable != null)
        {
            var count =  payloadTable.count ;
            frmMyForm.lblThisLabel.text = count ;

            // sending reply to the sender using nodeId obtained as function argument.
            voltmx.wearable.sendMessage(path,”message received” ,{“nodeId”:nodeid});
        }
    }
}

voltmx.wearable.setDataItemListener(onDataItemReceiver);
```

### Platform Availability

Android Wear 2.0 or later

* * *

</details>
<details close markdown="block"><summary>voltmx.wearable.setMessageListener Function</summary> 

* * *

Receives a message from a paired app regardless of whether the app is running, running in the foreground, or running in the background.

### Syntax
```

voltmx.wearable.setMessageListener(  
    onMessageReceiver);
```

### Parameters

_onMessageReceiver_

A JavaScript callback event handler function that is invoked when the app receives a message. The callback function must have the following signature.

onMessageReceiver(path,payload,nodeId);

Where `path` is a string that uniquely identifies the data item being transmitted, `payload` is a JavaScript object of type `RawBytes` or `String`, and `nodeId` is a string containing the ID of the node to send the message to. The `path` argument must start with a forward slash character ('/') or an exception is thrown. The maximum size of the `payload` argument is 100KB. Your app can use the `nodeId` value to reply to the sender..

### Return Values

None.

### Remarks

Setting a callback function to receive messages by calling `setMessageListener` consumes more power than setting a callback that only operates in the foreground. In general, your app should use this function sparingly.

> **_Important:_** To call this function you must set the compilation settings in  Volt MX Iris appropriately. For details, see [Transmitting Data Between Paired Apps](androidwearoverviews.md#transmitting-data-between-paired-apps).

### Example

```

function onMessageReceiver(path,payload,nodeId)
{
    // Add your code to read the payload.
}

voltmx.wearable.setMessageListener(onMessageReceiver) ;
```

### Platform Availability

Android Wear 2.0 or later

* * *
