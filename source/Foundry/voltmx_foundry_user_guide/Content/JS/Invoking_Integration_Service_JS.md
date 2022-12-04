                             

User Guide: [SDKs](../Foundry_SDKs.md) > [JavaScript SDK](Installing_JS_SDK.md) > Invoking an Integration Service

Invoking an Integration Service
===============================

Invoke a Service
----------------

This API invokes an integration service that is configured in the Volt MX Foundry portal.

```
 // Sample code to fetch the integration service details  
var integrationClient = null;
var serviceName = < your - service - name > ;
var operationName = < your - operation - name > ;
var params = {
    "your-input-keys": "your-input-values"
};
var headers = {
    "your-header-keys": "your-header-values"; //If there are no headers,pass null

    try {
        integrationClient = client.getIntegrationService(serviceName);
    } catch (exception) {
        console.log("Exception" + exception.message);
    }
    integrationClient.invokeOperation(operationName, headers, params,
        function(result) {
            console.log("Integration Service Response is :" + JSON.stringify(response));
        },
        function(error) {      
            console.log("Integration Service Failure :" + JSON.stringify(error));
        }
    );

```

> **_Note:_** The client is the voltmx.sdk(); object.
