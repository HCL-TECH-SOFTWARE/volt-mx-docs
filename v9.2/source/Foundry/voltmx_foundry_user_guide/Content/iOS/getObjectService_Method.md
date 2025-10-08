                              

User Guide: [SDKs](../Foundry_SDKs.md) > [iOS SDK](Installing.md) > [Invoking an Object Service](Invoking_an_Object_Service.md) > getObjectService Method

getObjectService Method

The **getObjectService Method** gets the current instance of the object service. The getObjectService method is invoked on the SDK instance; **init** must run successfully before invoking this method.

Syntax
------

```
 (HCLObjectService*)getObjectService:(NSString*)serviceName
                               error:(NSError **)error

```

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

```
 NSError *error = nil;
HCLObjectService *objSvc = [client getObjectService:@"<objectservicename>" error:&error];
if (error != nil) {
    NSLog(@"Error in getting objectservice : %@", error);

} else {
    NSLog(@"Successfully retrieved objectservice instance");
}
```
