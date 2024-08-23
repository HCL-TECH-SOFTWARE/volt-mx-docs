
# <objectService\>.clearOfflineData

The **<objectService\>.clearOfflineData** API clears all the offline data persisted in the object service tables and associated sync context. As the sync context is cleared, the next sync on this object service will fetch complete data from the server.

> **_Note:_** The clearOfflineData API is considered as device only operation. Deleted records are not tracked and not sent to the server as part of next sync session.

## Volt MX Iris (JavaScript)

> **Note:**

- Supported for Windows from V8 SP4 Fix Pack 6 onwards.

### Signature

```
VMXObjSvc.clearOfflineData(options, successCallback, failureCallback)
```

### Parameters

| Parameter       | Type     | Description                                                                                                              | Required |
| --------------- | -------- | ------------------------------------------------------------------------------------------------------------------------ | -------- |
| options         | JSON     | Reserved for future use, so the parameter is insignificant. But, the developer must pass some value such as null or { }. | Yes      |
| successCallback | Function | The successCallback method is invoked after successfully clearing the offline data of the object service.                | Yes      |
| failureCallback | Function | The failureCallback method is invoked during failure, with the cause of failure as an argument.                          | Yes      |

### Return Type

void

### Example

```
try {
var orgObjectService = new voltmx.sdk.VMXObjSvc("Organization");
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

```

## Android (Java)

### Signature

```
void <VMXObjSvc>.clearOfflineData(final HashMap<String, Object> options, final VMXCallback callback)
```

### Parameters

| Parameter | Type                    | Description                                                                                                                                        | Required |
| --------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| options   | HashMap<String, Object> | Reserved for future use, so the parameter is insignificant. But, the developer must pass some value such as null or new HashMap<String, Object>(). | Yes      |
| Callback  | VMXCallback             | Application implements **onSuccess** and **onFailure** methods of **VMXCallback** interface.                                                       | Yes      |

### Return Type

void

### Example

```
try {
VMXObjSvc orgObjectService = newVMXObjSvc("Organization");
orgObjectService.clearOfflineData(null, newVMXCallback() {
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
```

## iOS (Objective C)

### Signature

```
(void)[<VMXObjSvc> clearOfflineData:(NSDictionary *)options
onSuccess:(VMXSuccessCompletionHandler)onSuccess
onFailure:(VMXFailureCompletionHandler)onFailure]

```

### Parameters

| Parameter | Type                        | Description                                                                                                               | Required |
| --------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------- | -------- |
| options   | NSDictionary                | Reserved for future use, so the parameter is insignificant. But, the developer must pass some value such as null or @{ }. | Yes      |
| onSuccess | VMXSuccessCompletionHandler | The method is invoked after successfully clearing the offline data of the object service,                                 | Yes      |
| onFailure | VMXFailureCompletionHandler | The method is invoked on failure while clearing the offline data of the object service.                                   | Yes      |

### Return Type

void

### Example

```
OfflineObjectsError _ error = nil;
NSDictionary _ options = @ {};
VMXObjSvc _ orgObjectService = [
[VMXObjSvc alloc] initWithName: @"Organization"
error: & error
];
[orgObjectService clearOfflineData: options
onSuccess: ^ (id object) {
NSLog(@"Clearing offline data successful for OrganizationObjectService!");
}
onFailure: ^ (id object) {
OfflineObjectsError _ error = (OfflineObjectsError * )
object;
NSLog(@"Unable to clear offline data for Organization
due to error: %@", [error description]);
}
];
```
