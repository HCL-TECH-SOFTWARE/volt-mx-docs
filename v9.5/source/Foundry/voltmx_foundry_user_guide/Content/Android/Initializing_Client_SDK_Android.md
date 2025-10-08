                              

User Guide: [SDKs](../Foundry_SDKs.md) > [Android SDK](Installing_Android_SDK.md) > Initializing the Android Client SDK

Initializing the Android Client SDK
===================================

Initialize client with the following code, and start using the services provided in Volt MX Foundry. The initialization method fetches the configuration from Volt MX Foundry and saves it in the cache. Later, the application uses the cached configuration. It is a synchronous call.

When SDK is initialized, the Volt MX SDK registers a session and sends its information to the Volt MX Foundry Server. If the device is offline, or the server is not reachable, the session information persists on the device until it can successfully send the information to the Volt MX Foundry server.

For more information on application session, refer [Standard Report Docs](../../../../Foundry/standard_metrics_reports_guide/Content/VoltMX_Analytics_-_Standard_Reports/Application_activity_Reports.md).

> **_Note:_** The sessions created by Native Foundry SDKs are interactive.

Import the following Libraries:

*   com.voltmx.sdk.callback.InitCallback
*   com.voltmx.sdk.client.VoltMXClient
*   com.voltmx.sdk.common.VoltMXException

init
----

```
 //Sample code to initialize  ClientKonyClient myClient = new KonyClient();
String appkey = "<your-app-key>";
String appsecret = "<your-app-secret>";
String serviceURL = "<your-service-url>";
Context context = getApplicationContext();
try {
    myclient.initAsync(getApplicationContext(), appkey, appsecret, serviceURL new InitCallback() {
        @Override
        public void onSuccess(JSONObject response) {
            Log.d("Init", "Success");
        }
        @Override
        public void onFailure(KonyException error) {
            Log.d("Init", "Failure");
        }
    });
} catch (KonyException exception) {
    Log.d("Init", "Exception");
}
```

If you are using an untrusted self-signed (SSL) certificate with installation, by default native apps do not allow untrusted SSL certificates for HTTPS connection.  
  
To make your native apps work with untrusted SSL certificates, call the following API:  
  
`VoltMXClient.acceptSelfSignedCertificates();`

> **_Note:_** Once a user calls the VoltMXClient.acceptSelfSignedCertificates(); API, a native application will accept SSL certificates throughout the app life cycle. A user cannot disable the API from a native app running on a device.
