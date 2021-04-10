---
layout: "documentation"
category: "voltmx_foundry_user_guide"
---
                             

User Guide: [SDKs](../Foundry_SDKs.html) > [VoltMX Iris SDK](Installing_VoltMXJS_SDK.html) > Invoking a Logic Service

Invoking a Logic Service  

===========================

The getLogicService API creates an instance of logic service that is configured in the Volt MX Foundry portal. `logicClient = HCLFoundry.getLogicService(serviceName)`

The invokeOperation API invokes the backend operation using the object of logic service. The invoke operation function is as shown below:

{% highlight voltMx %}// Sample code to fetch the logic service details
var serviceName = "logic_service_name";
// Get an instance of SDK
var client = voltmx.sdk.getCurrentInstance();
var logicSvc = client.getLogicService(serviceName);
voltmx.print("Response is :" + logicSvc.getLogicServiceUrl());
var path = "path_defined_on_VoltMXFoundry"; // TODO – what path??
var HttpMethodType = "POST"; // Other supported types: "PUT", "GET", "DELETE"
var params = {
    "custom-input-key1": "custom-input-value1"
};
var headers = {
    "custom-header-key1": "custom-header-value1"
};
logicSvc.invokeOperation(serviceName, path, HttpMethodType, headers, params, function(response) {
    voltmx.print("Successfully fetched logic service: " + JSON.stringify(response));
}, function(error) {
    voltmx.print("error occurred in fetching logic service: " + JSON.stringify(error));
});
{% endhighlight %}
