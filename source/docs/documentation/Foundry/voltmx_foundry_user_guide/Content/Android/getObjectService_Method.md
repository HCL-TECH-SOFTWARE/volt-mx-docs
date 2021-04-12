---
layout: "documentation"
category: "voltmx_foundry_user_guide"
---
                              

User Guide: [SDKs](../Foundry_SDKs.html) > [Android SDK](Installing_Android_SDK.html) > [Invoking an Object Service](Invoking_an_Object_Service.html) > getObjectService Method

getObjectService Method
=======================

The **getObjectService Method** gets the current instance of the object service. The getObjectService method is invoked on the SDK instance; **init** must run successfully before invoking this method.

Syntax
------

{% highlight voltMx %} getObjectService(String serviceName)
{% endhighlight %}

Return Type
-----------

ObjectService Instance

Parameters
----------

  
| Input Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| servicename | String | Name of the object service | Yes |

Code
----

{% highlight voltMx %} VoltMXClient client = new VoltMXClient();
client.initAsync(getApplicationContext(), < appkey > , < appSecret > , < serviceUrl > , new InitCallback() {
    @Override
    public void onSuccess(JSONObject serviceDoc) {
        voltmx.print("Init Success");
        ObjectService objSVC = client.getObjectService( < servicename > );
    }

    @Override
    public void onFailure(VoltMXException voltmxException) {
        voltmx.print("Init failed");
    }
});
{% endhighlight %}
