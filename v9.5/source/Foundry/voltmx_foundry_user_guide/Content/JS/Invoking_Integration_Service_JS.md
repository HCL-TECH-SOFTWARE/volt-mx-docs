                             

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


## Error Codes for Failure Callbacks for Integration Services 

<table>
<tr>
<th>Error Code</th>
<th>Error Message</th>
</tr>
<tr>
<td>100</td>
<td>UnhandledMFcode</td>
</tr>
<td>101</td>
<td>Invalid User Credentials.</td>
</tr>
<tr>
<td>102</td>
<td>Invalid App Credentials.</td>
</tr>
<tr>
<td>103</td>
<td>Invalid User/App Credentials.</td>
</tr>
<tr>
<td>104</td>
<td>Session/Token got invalidated in the backend. Please login.</td>
</tr>
<tr>
<td>105</td>
<td>Invalid provider in appServices</td>
</tr>
<tr>
<td>106</td>
<td>Claims Token is Unavailable</td>
</tr>
<tr>
<td>1000</td>
<td>An unknown error has occurred</td>
</tr>
<tr>
<td>1011</td>
<td>An error occurred while making the request. Please check device connectivity, server url and request parameters</td>
</tr>
<tr>
<td>1013</td>
<td>Invalid JSON response was returned</td>
</tr>
<tr>
<td>1014</td>
<td>Request to server has timed out</td>
</tr>
</table>