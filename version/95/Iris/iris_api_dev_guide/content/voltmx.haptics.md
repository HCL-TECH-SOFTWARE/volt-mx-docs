                            


voltmx.haptics Namespace
======================

The voltmx.haptics namespace, which is a part of the Core Haptics API, contains the following API elements.

**voltmx.haptics.HapticsObj** Object
----------------------------------

The **voltmx.haptics.HapticsObj** namespace contains the following functions that allow you to perform custom haptics. You can create a haptics object to represent haptics for specific widgets, callbacks, and also perform operations on them.

You can create a haptics object for the following widgets:

*   Button widget
*   Group widgets (RadioButtonGroup, CheckBoxGroup)
*   Segment widget
*   TextArea widget
*   TextBox widget

An **advancedHaptics** UI interface has been provided for the following widget-specific events:

*   Button widget - Onclick event
*   RadioButtonGroup widget - onSelection event
*   PickerView widget - onSelection, onDone events
*   Segment widget - onRowClick event
*   TextArea widget
*   TextBox widget

<details close markdown="block"><summary>voltmx.haptics.HapticsObj.play</summary>

The voltmx.haptics.HapticsObj.play API generates and performs the customized haptic feedback based on the parameters passed.

### Syntax
```

VoltMX.haptics.HapticsObj.play([Array events](#Array)) ;
```

### Input Parameters

Array events

An array of events containing the following elements:

```

Array events: [{  
    startTime:   
    type:   
    duration:   
    eventParams: [{  
        parameterID:   
        parameterValue;  
    }, ]  
}, ]                
```

  
| Parameter | Description |
| --- | --- |
| startTime \[float\] | The time at which the specified pattern must be started. |
| type \[Constant\] | The type of haptic event to be performed. Haptic events are of the following two types: **voltmx.haptics.HAPTIC\_TYPE\_TRANSIENT**: Transient haptic patterns are brief impulses that occur at a specific point in time. **voltmx.haptics.HAPTIC\_TYPE\_CONTINOUS**: Continuous haptic patterns in the form of longer feedback that occur over a period of time, such as a ringtone vibration,. The maximum time is 30 seconds. |
| duration \[real\] | The time period for which the event lasts. > **_Note:_** The **duration** parameter is only applicable for continuous events. |
| eventParams (optional) | The combination of event parameters determines the character of the haptic event. Event parameters are specified as part of the creation of a hapticEvent, or as part of an event definition in a haptic pattern. |
| parameterID | The parameter ID can be any of the following: **voltmx.haptics.HAPTIC\_INTENSITY**: Specifies the presumed intensity of a haptic event.The range of values for this parameter varies from 0.0 (maximum attenuation) to 1.0 (no attenuation). **voltmx.haptics.HAPTIC\_SHARPNESS**: Depending on the event's signal content, this parameter may map to the frequency, the frequency content (i.e., filtering), or any other signal processing.The range of values for this parameter varies from 0.0 (least sharp) to 1.0 (most sharp). **voltmx.haptics.HAPTIC\_ATTACKTIME**: The point in time when the intensity of a haptic pattern begins increasing. The attack time adjuster for a Continuous event's envelope.The range of values for this parameter varies from 0.0 to 1.0. The default value is 0.0 (shortest attack time). > **_Note:_** Higher values exponentially increase the time.Only few types of events respond to this parameter. **voltmx.haptics.HAPTIC\_DECAYTIME**: The point in time when the intensity of a haptic pattern begins decreasing. The decay time adjuster for a Continuous event's envelope.The range of values for this parameter varies from 0.0 to 1.0. The default value is 0.0 (shortest decay time). > **_Note:_** Higher values exponentially increase the time.Only few types of events respond to this parameter.For envelope decay to take effect, the voltmx.haptics.HAPTIC\_SUSTAINED parameter must be set to 0.0. **voltmx.haptics.HAPTIC\_RELEASETIME**:The point in time when the haptic pattern begins to fade. The release time adjuster for a Continuous event's envelope.The range of values for this parameter varies from 0.0 to 1.0. The default value is 0.0 (shortest release time). > **_Note:_** Higher values exponentially increase the time.Only few types of Continuous events respond to this parameter. **voltmx.haptics.HAPTIC\_SUSTAINED**: A boolean (1.0 or 0.0) that indicates whether a Continuous event sustains for the specified duration (using an Attack/Release envelope) or whether the event ends when its envelope decay segment reaches its minimum (i.e., using an Attack/Decay envelope with no sustain). The default value is 1.0 (sustained, Attack/Release). > **_Note:_** For envelope decay to take effect, the voltmx.haptics.HAPTIC\_SUSTAINED parameter must be set to 0.0. |

### Example

```

var temp = [{  
    "startTime": 0,  
    "type": voltmx.haptics.HAPTIC_TYPE_TRANSIENT,  
    "duration": 3,  
    "eventParams": [{  
        "parameterID": voltmx.haptics.HAPTIC_INTENSITY,  
        "parameterValue": 0.6  
    }, {  
        "parameterID": voltmx.haptics.HAPTIC_SHARPNESS,  
        "parameterValue": 0.2  
    }]  
}];  
var obj = new voltmx.haptics.HapticsObj();  
obj.play(temp);
```

### Return Values

Returns a handle to the haptics object that contains the haptic pattern, for successful.

Returns `null`, for failure.

### Platform Availability

*   iOS

</details>

Functions
---------


<details close markdown="block"><summary>voltmx.haptics.isDeviceCompatible</summary>

The voltmx.haptics.isDeviceCompatible API checks if the device is compatible to use core haptics.

### Syntax

```

voltmx.haptics.isDeviceCompatible()
```


### Input Parameters

None

### Example

```

voltmx.haptics.isDeviceCompatible();
```

### Return Values

Boolean

### Exceptions

None

### Platform Availability

*   iOS

![](resources/prettify/onload.png)
</details>