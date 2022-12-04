                            


React Native APIs
=================

The following React Native APIs are utilized for the communication between the React Native app framework and the VoltMX Iris Framework. These React Native APIs are available from V9 SP2 onwards.
<!-- The following React Native APIs are utilized for the communication between the React Native app framework and the VoltMX Iris Framework. These React Native APIs are available from V8 SP4 onwards. -->


<details close markdown="block"><summary>reactNative.invokeVoltMXCallback</summary>

* * *

This API invokes the VoltMX Iris callback, which is registered in the VoltMX Iris app by using the [voltmx.reactNative.setCallback API](voltmx.reactnative_functions.md#setCallback).

### Syntax

```

reactNative.invokeVoltMXCallback(id, args)
```

> **_Note:_** You must prefix _NativeModules_ while calling this API, if NativeModules.reactNative is not exported from the React Native module and if the same is not imported in the module file where this API is used.

### Input Parameters

| Parameter | Description |
| --- | --- |
| id | Request identifier of the ReactNative app. This parameter is used to bind the request with the response. > **_Note:_** If a request has to listen for a response, you must register the listener/callback for the request by using the reactNative.setCallback API and leveraging the same _id_ parameter as of the reactNative.invokeVoltMXCallback API. > **_Note:_** The value of the _id_ parameter must follow this format: ReactNativeAppName + unique string. |
| args | Object with key–value pair elements with key as String and value as Object, such as Number, Boolean, String, Array, and Object. This parameter is used to pass data from the React Native app to the VoltMX Iris app context. |

 

reactNativeCallback registers a React Native callback function. This callback will be invoked by using the [voltmx.reactNative.sendResult API](voltmx.reactnative_functions.md#sendResult) from the VoltMX Iris app context.

### Example

```

args = {
    operation:"fetchAccounts"
};
NativeModules.reactNative.invokeVoltMXCallback(<id>, args);  
  
//You can omit the NativeModules prefix if NativeModules.reactNative is exported from the React Native module   
//and the same is imported in the module file where this API is used.
```

### Return Value

None

**Platform Availability**

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>reactNative.setCallback</summary>

* * *

This API is used to register a callback/listener to receive the result/response from the VoltMX Iris app context. The registered callback will be invoked while using the [voltmx.reactNative.sendResult API](voltmx.reactnative_functions.md#sendResult) from the VoltMX Iris app context.

### Syntax

```

reactNative.setCallback(id, Callback)
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| id | Request identifier for the React Native app. Since there can be multiple React Native apps integrated in to a VoltMX Iris app, the _id_ parameter is used to distinguish between the different React Native apps as well as to differentiate different invocations from the same app. > **_Note:_** The value of the _id_ parameter must follow this format: ReactNativeAppName + unique string. |
| Callback | JavaScript function. Callbacks are internally maintained as a dictionary of this API's _id_ and _Callback_ parameters. The callback will be removed from the dictionary once the result is sent (by using the [voltmx.reactNative.sendResult API](voltmx.reactnative_functions.md#sendResult)) to avoid an exception of the React Native framework. This exception occurs when the [voltmx.reactNative.sendResult API](voltmx.reactnative_functions.md#sendResult) is called more than once per request. |

 

### Example

```

function reactNativeCallback(resultData){
  ..........
};

NativeModules.reactNative.setCallback(<id>, reactNativeCallback);  
  
//You can omit the NativeModules prefix if NativeModules.reactNative is exported from the React Native module   
//and the same is imported in the module file where this API is used.
```

### Return Value

None

### Platform Availability

*   iOS
*   Android

* * *
</details>

![](resources/prettify/onload.png)
