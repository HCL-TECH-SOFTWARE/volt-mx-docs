                               

User Guide: [SDKs](../Foundry_SDKs.md) > [VoltMX Iris SDK](Installing_VoltMXJS_SDK.md) > Invoking an Integration Service

Invoking an Integration Service
===============================

This API invokes an integration service that is configured in the Volt MX Foundry portal.

```
// Sample code to fetch the integration service details
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
}; //If there are no headers,pass null
// options is an optional parameter that helps in configuring the network layer. 
// To configure for a thin layer, use xmlHttpRequestOptions instead of httpRequestOptions.  
// Values for timeoutIntervalForRequest and timeoutIntervalForResource are in seconds.
// If the request is failing because the network is unreliable, you can provide the following values:
// timeoutIntervalForRequest: This is the time taken by the client to receive headers. This is in seconds.
// timeoutIntervalForResource: The timeout for each chunk download. This is in seconds.
var options = {
    "httpRequestOptions": {
        "timeoutIntervalForRequest": 60,
        "timeoutIntervalForResource": 600
    }
};
integrationSvc.invokeOperation(operationName, headers, params, function(response) {
    voltmx.print("Integration Service Response is: " + JSON.stringify(response));
}, function(error) {
    voltmx.print("Integration Service Failure:" + JSON.stringify(error));
}, options);  

```

> **_Note:_** The client is the voltmx.sdk(); object.

  
| httpRequestOptions | Datatype | Comments |
| --- | --- | --- |
| timeoutIntervalForRequest | int | This is a time out value for the HTTP connection. This can also be referred as connection time out value in seconds. |
| timeoutIntervalForResource | int | This is used to give a maximum time in seconds for which the network resource should be kept alive on iOS device. This is only applicable for _background network_ calls and default value is 1 week (7 days) unless specified in option. |
| enableBackgroundTransfer | boolean (true/false) | Enables HTTP request calls in background in iOS.<br><br> **_Note:_** This may lead to duplicate transactions in the system, should only be used for GET calls. iOS internally retries the request to keep the connection alive till it reaches timeoutIntervalForResource value, which may create duplicate transactions in back end. |

  
| xmlHttpRequestOptions | Datatype | Comments |
| --- | --- | --- |
| enableWithCredentials | true/false | To allows CORS requests in SPA |

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
