                             

User Guide: [SDKs](../Foundry_SDKs.md) > [Cordova (PhoneGap) SDK](Installing_PhoneGap_SDK.md) > Invoking a Reporting Service

Invoking a Reporting Service
============================

Reporting service class helps a developer to get information on services used by number of users. The user access information helps for billing based on use of services.

Send Custom Metrics
-------------------

```
 // Sample code to send custom metrics 
var reportingService = voltmxSDKObject.getReportingService();
reportingService.report("<your fid>", {
    "test metrics": "some test data"
});
```
