                             

User Guide: [SDKs](../Foundry_SDKs.md) > [JavaScript SDK](Installing_JS_SDK.md) > Invoking a Configuration Service

Invoking a Configuration Service
================================

Admin Console provides an interface to define a set of key value pairs at the server level and the client level. You can find the interface at **VoltMX Foundry Console** > **Admin Console** > **Settings** > **Configurable Parameters** > **Client App Properties**.

You can configure the client specific properties in the server, so that client application can pull and consume the updated properties at runtime.

```
 // Sample code to fetch the client app properties from server.
function configTest() {
    var config = client.getConfigurationService();
    config.getAllClientAppProperties(
        function(res)

        {
            voltmx.print("client key value pairs retrieved : " + JSON.stringify(res));
        },
        function(err)

        {
            voltmx.print(" Failed to retrieve client key value pairs : " + JSON.stringify(err));
        }
    );
}
```
