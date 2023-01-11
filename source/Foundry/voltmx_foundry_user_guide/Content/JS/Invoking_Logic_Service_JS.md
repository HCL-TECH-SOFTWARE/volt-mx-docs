
User Guide: [SDKs](../Foundry_SDKs.md) > [JavaScript SDK](Installing_JS_SDK.md) > Downloading Volt MX Plain JS SDK

# Invoking a Logic Service

The getLogicService API creates an instance of logic service that is configured in the Volt MX Foundry portal. `logicClient = KNYMobileFoundry.getLogicService(serviceName)`

```
// Sample code to fetch the logic service details

var serviceName = "logic_service_name";

//Get an instance of the SDK
var client = voltmx.sdk.getCurrentInstance();
var logicSvc = client.getLogicService(serviceName);
voltmx.print("Response is :" + logicSvc.getLogicServiceUrl());

//Configure the arguments
var path = "path_defined_on_voltmx Foundry";  
var HttpMethodType = "POST"; //Supported methods: "POST", "PUT", "GET", "DELETE"
var params =
{
	"custom-input-key1": "custom-input-value1"
};

var headers =
{
	"custom-header-key1": "custom-header-value1"
};

//Invoke the operation
logicSvc.invokeOperation(serviceName, path, HttpMethodType, headers, params, function(response)
{
	voltmx.print("Successfully fetched logic service: " + JSON.stringify(response));
}, function(error)
{
	voltmx.print("error occurred in fetching logic service: " + JSON.stringify(error));
});

```