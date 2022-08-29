                             

User Guide: [SDKs](../Foundry_SDKs.md) > [Cordova (PhoneGap) SDK](Installing_PhoneGap_SDK.md) > Invoking an Integration Service

Invoking an Integration Service
===============================

This API invokes an integration service that is configured in the Volt MX Foundry portal.

```
 // Sample code to fetch the integration service details
var header = {
    "Content-Type": "application/json"
}; // In case no header is required, put null.
voltmxSDKObject.getIntegrationService(serviceName).invokeOperation(operationname, header, params,
    successHandler, errorHandler);
```
