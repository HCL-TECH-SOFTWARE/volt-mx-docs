
User Guide: [SDKs](../Foundry_SDKs.md) > [JavaScript SDK](Installing_JS_SDK.md) > Initializing the JS Client SDK

# Initializing the JS Client SDK

Initialize Volt MX Foundry client with the following code, and start using the services provided in Volt MX Foundry. The initialization method fetches the configuration from Volt MX Foundry and saves in the cache. Later, the application uses the cached configuration. It is a synchronous call.

When SDK is initialized, the Volt MX SDK registers a session and sends its information to the Volt MX Foundry Server. If the device is offline, or the server is not reachable, the session information persists on the device until it can successfully send the information to the Volt MX Foundry server.

For more information on application session, refer [Standard Report Docs](../../../../Foundry/standard*metrics_reports_guide/Content/VoltMX_Analytics*-\_Standard_Reports/Application_activity_Reports.md).

<blockquote><b><em>Note:</em></b>
<ul>
<li>The sessions created by Volt MX Foundry’s JavaScript SDKs are interactive.</li>
<li>Based on the browser settings, some browsers store the response of a call in the cache. When another request is made to the same URL, the browser sends the response from the cache instead of directing the call to the server.</li>
To disable response caching, set the <b>Pragma header</b> (as a global request header) to <b>no-cache</b> by using the <b>setGlobalRequestParam()</b> API.
</ul>
</blockquote>

## init

```
//Sample code to initialize Volt MX Foundry Client
var appkey = < your - app - key > ;
var appsecret = < your - app - secret >
var serviceURL = < your - service - url > ;

var client = new voltmx.sdk();
//set Pragma Header to disable the use of response cache in browsers.
client.setGlobalRequestParam("Pragma", "no-cache", client.globalRequestParamType.headers);
client.init(appkey, appsecret, serviceURL, function(response) {
console.log("Init success");
}, function(error) {
console.log("Init Failure");
});
```
