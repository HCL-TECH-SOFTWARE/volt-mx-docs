---
layout: "documentation"
category: "iris_api_dev_guide"
---
                             


Constants
=========

The Battery API, which belongs to the [voltmx.os Namespace](voltmx.os_constants.html), contains the following types of constants.


<details close markdown="block"><summary>Battery State Constants</summary> 

* * *

These constants specify the current state of the device battery.

| Constant | Description |
| --- | --- |
| BATTERY\_STATE\_CHARGING | Indicates that the state of the device battery as being charged. |
| BATTERY\_STATE\_DISCHARGING | Indicates that the state of the device battery as being discharged. |
| BATTERY\_STATE\_FULL | Indicates that the state of the device battery charge is completely full. |
| BATTERY\_STATE\_UNKNOWN | Indicates that the state of the device battery charge as not known. |

  

### Example

When you query for the state of the device battery as shown in this example, any of the four available battery states is returned.

{% highlight VoltMx %}
var batteryState = voltmx.os.getBatteryState();

if (voltmx.os.BATTERY_STATE_CHARGING == batteryState) {

    voltmx.print(“Battery State: Charging”);
}
{% endhighlight %}

### Platform Availability

*   iOS
*   Android
*   Windows

* * *

![](resources/prettify/onload.png)
