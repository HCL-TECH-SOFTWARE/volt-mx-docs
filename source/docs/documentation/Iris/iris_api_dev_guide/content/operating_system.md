---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            

You are here: Operating System API

Operating System API
====================

The Operating System API enables you to access various features provided by the operating system of the device. The Operating System API uses the `voltmx.os Namespace` and related functions and constants.

  
| Function | Description |
| --- | --- |
| [voltmx.os.addHiddenField](voltmx.os_functions.html#os.addhi) | This API helps the developers to pass dynamic values when the form needs to be submitted to external sites. |
| [voltmx.os.addMetaTag](voltmx.os_functions.html#voltmx.os.9) | This API adds a meta tag in.html header. This API result will effect only on header reload. |
| [voltmx.os.createUUID](voltmx.os_functions.html#createUUID) | This API returns a string that contains a formatted UUID value. |
| [voltmx.os.detectDynamicInstrumentation](voltmx.os_functions.html#detectDynamicInstrumentation) | This API helps your application to detect the presence of any Dynamic Instrumentation instance. |
| [voltmx.os.deviceInfo](voltmx.os_functions.html#deviceInfo) | This API allows the developers to get information about the device in which the application is launched. |
| [voltmx.os.endSecureTransaction](voltmx.os_functions.html#voltmx.os.8) | This API can be invoked on an event of a widget. |
| [voltmx.os.freeMemory](voltmx.os_functions.html#os.freem) | This API provides the ability to query and fetch the system-wide memory available on the mobile device for allocation. |
| [voltmx.os.getAppContext](voltmx.os_functions.html#voltmx) | This API allows the developers to get information about the mode in which the application is launched. |
| [voltmx.os.getBatteryLevel](voltmx.os_functions.html#getBatteryLevel) | Retrieves the current percentage charge level of the device battery, as an integer value. |
| [voltmx.os.getBatteryState](voltmx.os_functions.html#getBatteryState) | Retrieves the current state of the battery. |
| [voltmx.os.getDeviceId](voltmx.os_functions.html#getDeviceId) | This API returns the unique ID of a device. |
| [voltmx.os.getDeviceCurrentOrientation](voltmx.os_functions.html#voltmx.app) | This API returns the current orientation of the device. |
| [voltmx.os.hasAccelerometerSupport](voltmx.os_functions.html#os.platf10) | This API returns whether accelerometer is supported on a device. |
| [voltmx.os.hasCameraSupport](voltmx.os_functions.html#CameraSupport) | This API returns whether Camera is supported on a device. |
| [voltmx.os.hasGPSSupport](voltmx.os_functions.html#voltmx.os.6) | This API returns whether GPS is supported on a device. |
| [voltmx.os.hasOrientationSupport](voltmx.os_functions.html#voltmx.os.2) | This API returns whether Orientation is supported on a device. |
| [voltmx.os.hasTouchSupport](voltmx.os_functions.html#voltmx.os.4) | This API returns whether Touch is supported on a device. |
| [voltmx.os.print](voltmx.os_functions.html#voltmx.os.print) | When invoked without any parameter, this API prints the entire form that is currently in view. |
| [voltmx.os.readHiddenField](voltmx.os_functions.html#os.readh) | This API allows the developers to read the hidden fields added by the os.addHiddenField API. |
| [voltmx.os.registerBatteryService](voltmx.os_functions.html#registerBatteryService) | Registers for the battery monitoring service of the device operating system. |
| [voltmx.os.registerSpeechRecognizer](voltmx.os_functions.html#regSpeech) | Registers callbacks for speech recognition events. |
| [voltmx.os.removeAllMetaTags](voltmx.os_functions.html#voltmx.os.11) | This API removes all the user defined meta tags from a.html header. |
| [voltmx.os.removeMetaTag](voltmx.os_functions.html#voltmx.os.10) | This API removes a specific meta tag from a.html header. |
| [voltmx.os.startSecureTransaction](voltmx.os_functions.html#voltmx.os.7) | This API can be invoked on an event of a widget. When this API is invoked it makes all the data and subsequent transactions of the application secure. |
| [voltmx.os.startSpeechRecognition](voltmx.os_functions.html#startSpeechRecog) | Starts the speech recognition process. |
| [voltmx.os.stopSpeechRecognition](voltmx.os_functions.html#stopSpeechRecog) | Stops existing (already started with voltmx.os.startSpeechRecognition API) speech recognition operations. |
| [voltmx.os.toCurrency](voltmx.os_functions.html#voltmx.os.5) | This API allows you to convert the given number to represent currency. At present, only USA currency is supported. |
| [voltmx.os.toNumber](voltmx.os_functions.html#os.tonum) | This API converts the argument to a number. |
| [voltmx.os.unregisterBatteryService](voltmx.os_functions.html#unregisterBatteryService) | This API stops the monitoring process of the device battery. |
| [voltmx.os.unregisterSpeechRecognizer](voltmx.os_functions.html#unregSpeech) | Deregisters existing (already registered with voltmx.os.registerSpeechRecognizer API) callbacks for speech recognition events. |
| [voltmx.os.userAgent](voltmx.os_functions.html#os.usera) | This API returns a unique identifier of the mobile device that is extracted from the user agent. |

 

To view the functionality of the Operating System API in action, download the sample application from the link below. Once the application is downloaded, build and preview the application using the Volt MX App.  

[![](resources/images/download_button_08__002__236x35.png)](https://github.com/HCL-TECH-SOFTWARE/volt-mx-samples/tree/main/OperatingSystemAPI)

