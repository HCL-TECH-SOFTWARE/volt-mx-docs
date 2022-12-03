                               

User Guide: [SDKs](../Foundry_SDKs.md) > [VoltMX Iris SDK](Installing_VoltMXJS_SDK.md) > Invoking an Integration Service with Response Passthrough

Invoking an Integration Service with Response Passthrough
=========================================================

The Foundry SDK expects a JSON response from Foundry services, by default. To indicate that responses from the target integration service are a passthrough, provide the **passthrough** option to the Integration Service Invocation API. By doing so, the SDK does not convert the response to JSON format.

You can configure an integration service response as a passthrough to cater to specific needs such as downloading binary content. To do so, enable the **Response Passthrough** flag in the [Foundry application](../Services.md#Passthrough).

> **_Note:_** For the combination of Volt MX Iris V9 and Foundry V9, the passthrough flag has been deprecated. In this case, the SDKs will determine whether an integration service response is a passthrough or not.

> **_Note:_** With the configuration of Volt MX Iris V9 and Foundry V9, the Box Binary Integration services is NOT supported.

> **_Note:_** With the configuration of Iris V9 with a V8 Foundry, the scenario where the request passthrough is enabled and the response passthrough is disabled will NOT work. In case this scenario is needed, you must upgrade to Foundry V9.

Syntax

```
integrationClient.invokeOperation(operationName, headers, params, successCallback, failureCallback, options)

```

Parameters

  
| Name | Type |
| --- | --- |
| operationName | string |
| headers | Dictionary |
| params | Dictionary |
| successCallback | function |
| failureCallback | function |
| options | Dictionary |

Sample Code

```
// Sample code to fetch the integration service details with passthrough 
var serviceName = "integration_service_name";   
// Get an instance of SDK
var client = voltmx.sdk.getCurrentInstance();
var integrationSvc = client.getIntegrationService(serviceName);
var operationName = "operation_name";
var params = {
    "custom-input-key1": "custom-input-value1"
};
var headers = {
    "custom-header-key1": "custom-header-value1"
}; //If there are no headers, pass null
// options is an optional parameter that helps in configuring the network layer.
integrationSvc.invokeOperation(operationName, headers, params, function(response) {
    voltmx.print("Integration Service Response is: " + JSON.stringify(response));
}, function(error) {
    voltmx.print("Integration Service Failure: " + JSON.stringify(error));
}, {
    "passthrough": true
});
```

Get Endpoint URL
----------------

```
// Sample code to get the endpoint URL 
var serviceName = "integration_service_name";
// Get an instance of SDK
var client = voltmx.sdk.getCurrentInstance();
var integrationSvc = client.getIntegrationService(serviceName);
var url = integrationSvc.getUrl();
```

> **_Note:_** The integrationClient is the IntegrationService object.

Error Codes for Failure Callbacks for Integration Services
----------------------------------------------------------

  
| Error Code | Error Message |
| --- | --- |
| 100 | UnhandledMFcode |
| 101 | Invalid User Credentials. |
| 102 | Invalid App Credentials. |
| 103 | Invalid User/App Credentials. |
| 104 | Session/Token got invalidated in the backend. Please login. |
| 105 | Invalid provider in appServices. |
| 106 | Claims Token is Unavailable |
| 1000 | An unknown error has occurred |
| 1011 | An error occurred while making the request. Please check device connectivity, server url and request parameters |
| 1013 | Invalid JSON response was returned |
| 1014 | Request to server has timed out |
