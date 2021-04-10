---
layout: "documentation"
category: "voltmx_foundry_user_guide"
---
                             

User Guide: [SDKs](../Foundry_SDKs.html) > [Cordova (PhoneGap) SDK](Installing_PhoneGap_SDK.html) > Invoking a Configuration Service

Invoking a Configuration Service
================================

Admin Console provides an interface to define a set of key value pairs at the server and the client level. You can find the interface at **VoltMX** **Admin Console** > **Settings** > **Configurable Parameters** > **Client App Properties**.

You can configure the Client specific properties any time in the server, so that client application can pull and consume the updated properties at runtime.

{% highlight voltMx %} 
// Sample code to fetch the client app properties from server.
function configTest() {
    var config = voltmxSDKObject.getConfigurationService();
    config.getAllClientAppProperties(
        function(res)

        {
            voltmx.print("client key value pairs retrieved : " + JSON.stringify(res));
        },
        function(err)

        {
            voltmx.print(" Failed to retrieve client key value pairs : " + JSON.stringify(err));
        }
    );
}
{% endhighlight %}
