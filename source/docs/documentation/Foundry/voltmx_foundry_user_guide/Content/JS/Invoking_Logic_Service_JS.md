---
layout: "documentation"
category: "voltmx_foundry_user_guide"
---

User Guide: [SDKs](../Foundry_SDKs.html) > [JavaScript SDK](Installing_JS_SDK.html) > Invoking a Logic Service

# Invoking a Logic Service

The **getLogicService** API creates an instance of logic service that is configured in the Volt MX Foundry portal. `logicClient = VMXFoundry.getLogicService(serviceName)`

The **invokeOperation** API invokes the backend operation using the object of logic service. The invoke operation function is as follows:

{% highlight voltMx %} // To access the operations defined in the Volt MX Foundry portal for the logic service:
logicClient.invokeOperation(serviceName, path, HttpMethodType, headers, data, SuccessCB, FailureCB)
// Where,
serviceName = < your - service - name > ;
path = < path as defined in Volt MX Foundry > ;
HttpMethodType = The type of call like "POST", "PUT", "GET", "DELETE"
header = the header like {
"testget": "test"
}
data = the data field like {
"LastName": "LNamePOST"
}
SuccessCB = Success CallBack
FailureCB = Failure CallBack
{% endhighlight %}

{% highlight voltMx %} // Sample code to fetch the logic service details
var response = voltmxmbaas.getLogicService("mailapp");
alert("Response is :" + response.getLogicServiceUrl());
response.invokeOperation("mailapp", "/api/v1/contact", "POST", {
"test": "test"
}, {
"LastName": "LNamePOST"
}, function(res) {
alert("successfully fetched logic service" + JSON.stringify(res));
}, function(res) {
alert("error occurred in fetching logic service" + JSON.stringify(res));
});
{% endhighlight %}
