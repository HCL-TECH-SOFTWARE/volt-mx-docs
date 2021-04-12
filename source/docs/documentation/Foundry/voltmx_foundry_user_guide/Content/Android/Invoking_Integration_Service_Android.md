---
layout: "documentation"
category: "voltmx_foundry_user_guide"
---
                              

User Guide: [SDKs](../Foundry_SDKs.html) > [Android SDK](Installing_Android_SDK.html) > Invoking an Integration Service

Invoking an Integration Service
===============================

Import the following Libraries:

*   com.voltmx.sdk.callback.IntegrationServiceCallback
*   com.voltmx.sdk.client.VoltMXFactory
*   com.voltmx.sdk.common.IntegrationServiceException
*   com.voltmx.sdk.common.VoltMXException
*   com.voltmx.sdk.services.integration.IntegrationService

Code
----

This APIs invokes integration service that is configured in the Volt MX Foundry portal.

{% highlight voltMx %} // Sample code to fetch the integration service details
String serviceName = < integration - service - name > ;
String operationName = < operation - name > ;
Map < String, String > params = new HashMap < String, String > ();
params.put("your-input-key", "your input value");
Map < String, String > headers = new HashMap < String, String > ();
headers.put("your-header-key", "your-header-value");
VoltMXClient myClient = new VoltMXClient();
IntegrationService integClient = null;


try {
    integClient = myClient.getIntegrationService(serviceName);
} catch (VoltMXException exception) {
    Log.d("Exception", exception.getMessage());
}
integClient.invokeOperationInBackground(operationName, headers, parameters,
    new IntegrationServiceCallback() {
        @Override
        public void onSuccess(JSONObject response) {
            Log.d("Response" + response.toString());
        }

        @Override
        public void onFailure(IntegrationServiceException exception) {
            Log.d("Service Failure" + exception.getErrorMessage());

        }
    }); 
{% endhighlight %}
