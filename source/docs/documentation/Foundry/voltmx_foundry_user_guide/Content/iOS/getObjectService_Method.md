---
layout: "documentation"
category: "voltmx_foundry_user_guide"
---
                              

User Guide: [SDKs](../Foundry_SDKs.html) > [iOS SDK](Installing.html) > [Invoking an Object Service](Invoking_an_Object_Service.html) > getObjectService Method

getObjectService Method

The **getObjectService Method** gets the current instance of the object service. The getObjectService method is invoked on the SDK instance; **init** must run successfully before invoking this method.

Syntax
------

{% highlight voltMx %} (HCLObjectService*)getObjectService:(NSString*)serviceName
                               error:(NSError **)error

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

{% highlight voltMx %} NSError *error = nil;
HCLObjectService *objSvc = [client getObjectService:@"<objectservicename>" error:&error];
if (error != nil) {
    NSLog(@"Error in getting objectservice : %@", error);

} else {
    NSLog(@"Successfully retrieved objectservice instance");
}
{% endhighlight %}
