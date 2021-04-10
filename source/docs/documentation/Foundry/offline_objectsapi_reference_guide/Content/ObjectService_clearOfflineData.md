---
layout: "documentation"
category: "offline_objectsapi_reference_guide"
---


\<objectService\>.clearOfflineData
================================

The **\<objectService\>.clearOfflineData** API clears all the offline data persisted in the object service tables and associated sync context. As the sync context is cleared, the next sync on this object service will fetch complete data from the server.

> **_Note:_** The clearOfflineData API is considered as device only operation. Deleted records are not tracked and not sent to the server as part of next sync session.

Volt MX  Iris (JavaScript)
-------------------------------

> **Note:**  
*   Supported for Windows from V8 SP4 Fix Pack 6 onwards.  
*   Supported for Mobile Web and Desktop Web channels from V8 SP4 Fix Pack 28 onwards.  

### Signature

{% highlight voltMx %}HCLObjSvc.clearOfflineData(options, successCallback, failureCallback)
{% endhighlight %}

### Parameters

  
| Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| options | JSON | Reserved for future use, so the parameter is insignificant. But, the developer must pass some value such as null or { }. | Yes |
| successCallback | Function | The successCallback method is invoked after successfully clearing the offline data of the object service. | Yes |
| failureCallback | Function | The failureCallback method is invoked during failure, with the cause of failure as an argument. | Yes |

### Return Type

void

### Example

{% highlight voltMx %}try {
    var orgObjectService = new voltmx.sdk.HCLObjSvc("Organization");
    var options = {};
    orgObjectService.clearOfflineData(options, onSuccess, onFailure);

    function onSuccess() {
        voltmx.print("Successfully cleared offline data for Object Service: " + objectServiceName);
    }

    function onFailure(error) {
        voltmx.print("Failed to clear offline data in object service: " + objectServiceName + ". Error: " + JSON.stringify(error);
        }
    } catch (Exception e) {
        voltmx.print("An exception occurred while trying to execute clearOfflineData API. Exception:" + e);
    }
{% endhighlight %}

Android (Java)
--------------

### Signature

{% highlight voltMx %}void <HCLObjSvc>.clearOfflineData(final HashMap<String, Object> options, final HCLCallback callback)
{% endhighlight %}

### Parameters

  
| Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| options | HashMap<String, Object> | Reserved for future use, so the parameter is insignificant. But, the developer must pass some value such as null or new HashMap<String, Object>(). | Yes |
| Callback | HCLCallback | Application implements **onSuccess** and **onFailure** methods of **HCLCallback** interface. | Yes |

### Return Type

void

### Example

{% highlight voltMx %}try {
    HCLObjSvc orgObjectService = newHCLObjSvc("Organization");
    orgObjectService.clearOfflineData(null, newHCLCallback() {
        @Override
        public void onSuccess(Object object) {
            Log.d("ObjectServiceSync", "Cleared offline data for Object 
Service.");
        }
        @Override
        public void onFailure(Object error) {
            OfflineObjectsException e = (OfflineObjectsException) error;
            Log.e("ObjectServiceSync", "Failed to clear offline data with 
exception: " + e.getMessage());
        }
    });
} catch (Exception e) {
    Log.e("ObjectServiceSync", "Failed to clear offline data with exception:" + e.getMessage());
}
{% endhighlight %}

iOS (Objective C)
-----------------

### Signature

{% highlight voltMx %}(void)[<HCLObjSvc> clearOfflineData:(NSDictionary *)options
			 onSuccess:(HCLSuccessCompletionHandler)onSuccess
			 onFailure:(HCLFailureCompletionHandler)onFailure]

{% endhighlight %}

### Parameters

  
| Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| options | NSDictionary | Reserved for future use, so the parameter is insignificant. But, the developer must pass some value such as null or @{ }. | Yes |
| onSuccess | HCLSuccessCompletionHandler | The method is invoked after successfully clearing the offline data of the object service, | Yes |
| onFailure | HCLFailureCompletionHandler | The method is invoked on failure while clearing the offline data of the object service. | Yes |

### Return Type

void

### Example

{% highlight voltMx %}OfflineObjectsError * error = nil;
NSDictionary * options = @ {};
HCLObjSvc * orgObjectService = [
    [HCLObjSvc alloc] initWithName: @"Organization"
    error: & error
];
[orgObjectService clearOfflineData: options
    onSuccess: ^ (id object) {
        NSLog(@"Clearing offline data successful for OrganizationObjectService!");
    }
    onFailure: ^ (id object) {
        OfflineObjectsError * error = (OfflineObjectsError * )
        object;
        NSLog(@"Unable to clear offline data for Organization 
due to error: %@", [error description]);
    }
];
{% endhighlight %}
