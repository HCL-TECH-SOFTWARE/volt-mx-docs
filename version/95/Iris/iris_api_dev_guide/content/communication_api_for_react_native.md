                            

You are here: Communication API for React Native App

Communication API for React Native App
======================================

When you embed a react native app into an app you are developing using Volt MX Iris, the Communication API for the React Native app helps in the interaction between the React Native app and app you are developing using Volt MX Iris. This feature is available from V9 SP2 onwards.

<!-- When you embed a react native app into an app you are developing using Volt MX Iris, the Communication API for the React Native app helps in the interaction between the React Native app and app you are developing using Volt MX Iris. This feature is available from V8 SP4 onwards. -->
The following React Native APIs help you in communicating from the React Native app to the Volt MX Iris app:

| Function | Description |
| --- | --- |
| [reactNative.invokeVoltMXCallback](react_native_apis.md#invokeVoltMXCallback) | Invokes the Volt MX Iris callback, which is registered in the Volt MX Iris app by using the voltmx.reactNative.setCallback API. |
| [reactNative.setCallback](react_native_apis.md#setCallback) | Registers a callback/listener to receive the result/response from the Volt MX Iris app context. |

 

The following APIs from the `voltmx.reactNative Namespace` help you in communicating from the Volt MX Iris app to the React Native app:

| Function | Description |
| --- | --- |
| [voltmx.reactNative.setCallback](voltmx.reactnative_functions.md#setCallback) | Registers a callback/listener for the incoming request from the React Native app context. |
| [voltmx.reactNative.sendResult](voltmx.reactnative_functions.md#sendResult) | Sends a response (for the request) to the React Native app, if the React Native app registers a callback. |

 

To set a callback/listener in the React Native app, use the [voltmx.reactNative.setCallback](voltmx.reactnative_functions.md#setCallback) function. On receiving the request, invoke the required function in the React Native app by using the [reactNative.invokeVoltMXCallback](react_native_apis.md#invokeVoltMXCallback) function.

Also, set a callback in the Volt MX Iris app by using the [voltmx.reactNative.setCallback](voltmx.reactnative_functions.md#setCallback) function. The Volt MX Iris app sends a data request to the React Native app by using the [voltmx.reactNative.sendResult](voltmx.reactnative_functions.md#sendResult) function.

For more information related to the React Native App Integration into Volt MX Iris App feature, refer these sections:

*   [Integrate React Native App into a Volt MX Iris App](../../../Iris/iris_user_guide/Content/Integrate_React_Native_App_into_VoltMX_App.md)
*   [React Native Container](../../../Iris/iris_widget_prog_guide/Content/react_Native_Container.md)

![](resources/prettify/onload.png)
