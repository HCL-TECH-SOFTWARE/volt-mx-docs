---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            


voltmx.reactNative Namespace
==========================

The voltmx.reactNative APIs namespace contains the following JavaScript APIs. The voltmx.reactNative APIs are available from V8 SP4 onwards.

Functions
---------

The voltmx.reactNative namespace contains the following functions.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)voltmx.reactNative.setCallback](javascript:void(0);)

* * *

This API registers a callback/listener for the incoming request from the React Native app context. The callback that is set by using the voltmx.reactNative.setCallback API will be invoked while using the [reactNative.invokeVoltMXCallback API](react_native_apis.html#invokeVoltMXCallback) from the React Native app.

> **_Note:_** Calling the voltmx.reactNative.setCallback API two or more times with different callbacks will override the previously set callback with the recent one.

Syntax

voltmx.reactNative.setCallback(callback)

Input Parameters

| Parameter | Description |
| --- | --- |
| callback | This parameter registers a function with the following signature. function callback(id,args){ ................ } |

 

The callback function does not have any return value and consists of the following parameters:

*   **id:** Unique identifier of the React Native app's request. This identifier is used to bind a request with the response.

> **_Note:_** While using the voltmx.reactNative.sendResult API, you must pass the _id_ parameter to send the result to a particular request instance.

*   **args:** Object with key-value pairs that is passed from the React Native app to the Volt MX Iris app based on the contract of the Volt MX Iris app.
    

Example

{% highlight voltMx %}function callback(id, args) {
        ........

    if (args != null & amp; & amp; args["operation"] == "fetchAccounts") {
        // fetchAccounts and store result 
        account1 = {
            name: "voltmx1",
            accountNo: "0123456789",
            accountBalance: "xx".....
        };
        account2 = {
            name: "voltmx2",
            accountNo: "2345678901",
            accountBalance: "xx".....
        };
        resultData = {
            status: "success",
            data: [account1, account2]..
        };
        voltmx.reactNative.sendResult(id, resultData);

    };
}
voltmx.reactNative.setCallback(callback);
{% endhighlight %}

Return Value

None

Platform Availability

*   iOS
*   Android

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)voltmx.reactNative.sendResult](javascript:void(0);)

* * *

This API is used to send a response (for the request) to the React Native app, if the React Native app registers a callback.

> **_Note:_** This API must be called only once per request to send the result or response. Calling this API more than once per request leads to no operation from the second instance onwards.

Syntax

voltmx.reactNative.sendResult(id, resultData)

Input Parameters

| Parameter | Description |
| --- | --- |
| id | Unique identifier of the React Native app (this parameter is received in the callback function of [voltmx.reactNative.setCallback API](#setCallback).) |
| resultData | Object with key–value pair elements with key as String and value as JavaScript native data types, such as Number, Boolean, String, Array, and Object. > **_Note:_** The Volt MX Iris app must publish the keys of the resultData parameter, in order to predict the resultData value by the React Native app. |

 

Example

{% highlight voltMx %}var resultData = {
    status: "success",
    ...
};
voltmx.reactNative.sendResult(id, resultData);
{% endhighlight %}

Return Value

None

Platform Availability

*   iOS
*   Android

* * *

![](resources/prettify/onload.png)
