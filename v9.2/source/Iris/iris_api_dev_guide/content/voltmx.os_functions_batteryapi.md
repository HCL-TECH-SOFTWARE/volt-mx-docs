                             


Functions
=========

The Battery API contains the following functions, which belong to the [voltmx.os Namespace](voltmx.os_constants.md).


<details close markdown="block"><summary>voltmx.os.getBatteryLevel</summary> 

* * *

Retrieves the current percentage charge level of the device battery, as an integer value.

### Syntax

```

voltmx.os.getBatteryLevel()
```

### Input Parameters

None

### Example

```

getBatteryLevel: function() {
    voltmx.os.registerBatteryService(this.batterySuccessCallback);
    var battery = voltmx.os.getBatteryLevel();
    voltmx.os.unregisterBatteryService();
    this.view.lblDisplay.text = battery + "%";
},
```

### Return Values

Returns an integer that ranges from 0-100 (inclusive) that specifies the battery's current charge level in percentage. For example, a return value of 30 specifies that the current charge level of the battery is 30%.

### Platform Availability

*   iOS
*   Android
*   Windows

* * *

</details>
<details close markdown="block"><summary>voltmx.os.getBatteryState</summary> 

* * *

Retrieves the current state of the battery.

### Syntax

```

voltmx.os.getBatteryState()
```

### Input Parameters

None

### Example

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

### Return Values

Returns a constant from the [Battery State Constants](voltmx.os_constants_batteryapi.md#BatteryState).

### Remarks

The battery state indicates whether it is charging, discharging, and so forth.

### Platform Availability

*   iOS
*   Android
*   Windows

* * *

</details>
<details close markdown="block"><summary>voltmx.os.registerBatteryService</summary>

* * *

Registers for the battery monitoring service of the device operating system. The callback is delivered to the most recent registered battery service.

> **_Note:_** Whenever the battery state changes or for every 1% change in the battery level, a callback to the registerBatteryService function is triggered.

### Syntax

```

voltmx.os.registerBatteryService(callbackMethod)
```

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| callbackMethod | A JavaScript function that is automatically invoked when you register to the battery monitoring service of the device OS. |

 

### Example

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

### Return Values

None

### Limitations

*   The callback for the registered battery service is delivered only when the application is running; this is because, you can only receive notifications when the application is in the foreground for the iOS, Windows, and Android platforms.
*   The callback to the registered battery service is delivered after every one minute duration for iOS; whereas in case of in Android and Windows, the callback is delivered for every 1% change in the battery charge.

### Platform Availability

*   iOS
*   Android
*   Windows

* * *

</details>
<details close markdown="block"><summary>voltmx.os.unregisterBatteryService</summary> 

* * *

This API stops the monitoring process of the device battery. You must call this API when the use of the battery monitoring service has been completed, to reduce the overhead.

> **_Note:_** After your app calls the voltmx.os.unregisterBatteryService API, the callback function registered by the [voltmx.os.registerBatteryService](#registerBatteryService) API is no longer invoked.

### Syntax

```

voltmx.os.unregisterBatteryService()
```

### Input Parameters

None

### Example

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

### Return Values

None

### Platform Availability

*   iOS
*   Android
*   Windows

* * *
</details>
![](resources/prettify/onload.png)
