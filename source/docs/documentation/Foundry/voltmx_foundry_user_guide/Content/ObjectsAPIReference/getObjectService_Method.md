---
layout: "documentation"
category: "voltmx_foundry_user_guide"
---
                              

User Guide: [SDKs](../Foundry_SDKs.html) > [VoltMX Iris SDK](../VoltMXStudio/Installing_VoltMXJS_SDK.html) > [Invoking an Object Service](Objects_API_Reference.html) > getObjectService Method

getObjectService Method
=======================

The **getObjectService Method** gets the current instance of the object service. The getObjectService method is invoked on the sdk instance; init must already have been successfully run before invoking this method.

Syntax
------

{% highlight voltMx %}getObjectService(serviceName,{serviceType});
{% endhighlight %}

Parameters
----------

  
| Parameter | Type | Description |
| --- | --- | --- |
| serviceName | string | Name of the object service |
| serviceType | JSON object | One of the following: "access" : "online" _\[default\]_ "access" : "offline" "access" : "registeredObjectServiceName" _\[This is the name of the object service defined in the application\]_ |

Response
--------

Returns the object service instance based on the value specified in serviceType. The default value is "online", which returns an [OnlineObjectService Class](OnlineObjectService_Class.html) instance. A value of "offline" returns an [OfflineObjectService Class](OfflineObjectService_Class.html) instance.
