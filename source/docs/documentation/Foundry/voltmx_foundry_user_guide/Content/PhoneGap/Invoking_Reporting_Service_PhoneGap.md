---
layout: "documentation"
category: "voltmx_foundry_user_guide"
---
                             

User Guide: [SDKs](../Foundry_SDKs.html) > [Cordova (PhoneGap) SDK](Installing_PhoneGap_SDK.html) > Invoking a Reporting Service

Invoking a Reporting Service
============================

Reporting service class helps a developer to get information on services used by number of users. The user access information helps for billing based on use of services.

Send Custom Metrics
-------------------

{% highlight voltMx %} // Sample code to send custom metrics 
var reportingService = voltmxSDKObject.getReportingService();
reportingService.report("<your fid>", {
    "test metrics": "some test data"
});
{% endhighlight %}
