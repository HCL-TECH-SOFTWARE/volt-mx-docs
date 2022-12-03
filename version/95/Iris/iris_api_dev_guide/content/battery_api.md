                             

You are here: Battery API

Battery API
===========

The Battery API provides a standard interface that can be used across multiple hardware platforms for checking the current state of a device's battery. It enables your app to register/ unregister for the battery monitoring service of the device operating system and check the battery level on the customer's device.

The Battery API uses `voltmx.os Namespace` and the following API elements.

  
| Function | Description |
| --- | --- |
| [voltmx.os.getBatteryLevel](voltmx.os_functions_batteryapi.md#getBatteryLevel) | Retrieves the current percentage charge level of the device battery, as an integer value. |
| [voltmx.os.getBatteryState](voltmx.os_functions_batteryapi.md#getBatteryState) | Retrieves the current state of the battery. |
| [voltmx.os.registerBatteryService](voltmx.os_functions_batteryapi.md#registerBatteryService) | Registers for the battery monitoring service of the device operating system. |
| [voltmx.os.unregisterBatteryService](voltmx.os_functions_batteryapi.md#unregisterBatteryService) | Stops the monitoring process of the device battery. |

 

To register for the battery monitoring service of the device operating system, invoke the [voltmx.os.registerBatteryService](voltmx.os_functions_batteryapi.md#registerBatteryService) function. The callback is delivered to the most recent registered battery service. If you want to stop the monitoring process of the device battery, use the [voltmx.os.unregisterBatteryService](voltmx.os_functions_batteryapi.md#unregisterBatteryService) function. You must call this API when the use of the battery monitoring service has been completed, to reduce the overhead.

To check the current battery level, use the [voltmx.os.getBatteryLevel](voltmx.os_functions_batteryapi.md#getBatteryLevel) function. To see whether the battery is charging, discharging, and so forth, invoke the [voltmx.os.getBatteryState](voltmx.os_functions_batteryapi.md#getBatteryState) function.

To view the functionality of the Battery API in action, download the sample application from the link below. Once the application is downloaded, build and preview the application using the Volt MX App.  

[![](resources/images/download_button_08__002__236x35.png)](https://github.com/HCL-TECH-SOFTWARE/volt-mx-samples/tree/main/BatteryAPI)

![](resources/prettify/onload.png)
