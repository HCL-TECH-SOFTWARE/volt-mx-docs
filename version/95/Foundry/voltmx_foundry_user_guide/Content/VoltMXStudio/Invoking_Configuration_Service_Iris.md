                             

User Guide: [SDKs](../Foundry_SDKs.md) > [VoltMX Iris SDK](Installing_VoltMXJS_SDK.md) > Invoking a Configuration Service

Invoking a Configuration Service
================================

Admin Console provides an interface to define a set of key value pairs at the server and the client level. You can find it in Volt MX Foundry Console > Admin Console > Settings > Configurable Parameters -> Client App Properties.

You can configure the Client specific properties any time in the server, so that client application can pull and consume the updated properties at runtime.

```
// Sample code to fetch the client app properties from server.
// Get an instance of SDK
var client = voltmx.sdk.getCurrentInstance();
var configurationSvc = client.getConfigurationService();
configurationSvc.getAllClientAppProperties(function(response) {
    voltmx.print("client key value pairs retrieved: " + JSON.stringify(response));
}, function(error) {
    voltmx.print(" Failed to retrieve client key value pairs: " + JSON.stringify(error));
});
```
