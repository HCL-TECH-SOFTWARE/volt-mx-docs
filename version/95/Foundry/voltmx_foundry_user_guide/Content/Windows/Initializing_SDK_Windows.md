                              

User Guide: [SDKs](../Foundry_SDKs.md) > [.NET (Visual Studio) SDK](Installing_Windows_SDK.md) > Init method

Initializing the .NET SDK
=========================

Perform the following steps to initialize the .NET SDK.

1.  Include the downloaded .dll files in your Visual Studio project.
2.  Create an instance of the SDK.

`VoltMX.SDK sdkObject = new VoltMX.SDK();`

Use the methods and properties of the SDK class to initialize and access the .NET SDK.

When SDK is initialized, the Volt MX SDK registers a session and sends its information to the Volt MX Foundry Server. If the device is offline, or the server is not reachable, the session information persists on the device until it can successfully send the information to the Volt MX Foundry server.

For more information on application session, refer [Standard Report Docs](../../../../Foundry/standard_metrics_reports_guide/Content/VoltMX_Analytics_-_Standard_Reports/Application_activity_Reports.md).

> **_Note:_** The .NET SDK does not support the Messaging Service or the Sync Service.

> **_Note:_** The sessions created by .NET Foundry SDK are interactive.

Init
----

To start using the services provided in use the **Init()** method of the SDK class. This method may take several seconds to execute, so it is available as either a synchronous or asynchronous call.

This method fetches the app configuration from the Volt MX server and saves it in the cache. Later, the application uses the cached configuration. This method must be invoked before invoking any other SDK method.

### Signature

Synchronous

```
 JObject Init(string appKey, string appSecret, string serviceUrl)
```

Asynchronous

```
 async Task<JObject> InitAsync(string appKey, string appSecret, string serviceUrl)
```

### Input Parameters

appKey

App key of the Volt MX Foundry application.

appSecret

App secret of the Volt MX Foundry application.

serviceUrl

URL of the Volt MX server.

### Return Values

Returns Service doc in the form of a **JObject**.

### Exceptions

System.Exception

The **Init** method throws this exception when an error occurs while fetching the data or instantiating a service.

### Example

Synchronous

```
  //Sample code to initialize VoltMX Foundry Client synchronously.			
string appkey = < your - app - key >
    string appsecret = < your - app - secret >
    string serviceURL = < your - service - url >

VoltMX.SDK sdkObject = new VoltMX.sdk();
try {
    JObject serviceDoc = sdkObject.Init(appkey, appsecret, serviceURL);
    Console.WriteLine("Init Success");
} catch (Exception e) {
    Console.WriteLine("Init Failure");
}
```

Asynchronous

```
  //Sample code to initialize VoltMX Foundry Client asynchronously.
string appkey = < your - app - key >
    string appsecret = < your - app - secret >
    string serviceURL = < your - service - url >

VoltMX.SDK sdkObject = new VoltMX.sdk();
try {
    JObject serviceObj = await sdkObject.InitAsync(appkey, appsecret, serviceURL);
    Console.WriteLine("Init Success");
} catch (Exception e) {
    Console.WriteLine("Init Failure");
}
				
```
