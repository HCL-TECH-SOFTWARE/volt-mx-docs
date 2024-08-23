
# <objectService\>.rollback

The **<objectService\>.rollback** API rolls back all changes of all objects of an object service to its previous sync state.

## Volt MX Iris (JavaScript)

### Signature

```
<VMXObjSvc>.rollback(successCallback, failureCallback)
```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 303px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">successCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked on successful rollback.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">failureCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked on an error with the cause of failure as an argument upon Rollback failure.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

### Return Type

void

### Example

```
var orgObjectService = new voltmx.sdk.VMXObjSvc("Organization");

function successCallback(result) {
//result contains boolean true
voltmx.print("ObjectService level rollback successful")
}

function failureCallback(error) {
voltmx.print("ObjectService rollback failed with error: " + JSON.stringify(error));
}

orgObjectService.rollback(successCallback, failureCallback);

```

## Android (Java)

### Signature

```
void <VMXObjSvc>.rollback(final VMXCallback callback)
```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 91px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">callback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VMXCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Application implements <b>onSuccess</b> and <b>onFailure</b> methods of <b>VMXCallback</b> interface.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

### Return Type

void

### Example

```
VMXObjSvc orgObjectService = new VMXObjSvc("Organization");

try {
orgObjectService.rollback(new VMXCallback() {

        @Override
        public void onSuccess(Object object) {
            Log.d("ObjectServiceSync", "ObjectService rollback successful");
        }

        @Override
        public void onFailure(Object error) {
            OfflineObjectsException e = (OfflineObjectsException) error;
            Log.e("ObjectServiceSync", "ObjectService rollback failed with error: " + e.getMessage());
        }
    });

} catch (Exception e) {
Log.e("ObjectServiceSync", "ObjectService rollback failed with error:" + e.getMessage());
}
```

## iOS (Objective C)

### Signature

```
void <VMXObjSvc>  
rollback:(VMXSuccessCompletionHandler)onSuccess  
onFailure:(VMXFailureCompletionHandler)onFailure
```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 210px;"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">onSuccess</td><td class="TableStyle-Basic-BodyE-Column1-Body1">VMXSuccessCompletionHandler</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The method called after a successful rollback.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">onFailure</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VMXFailureCompletionHandler</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The method called on rollback failure.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

### Return Type

void

### Example

```
VMXObjSvc * orgObjectService = [
[VMXObjSvc alloc] initWithName: @"Organization"
error: & ;error
];

[orgObjectService rollback: ^ (id object) {
NSLog(@"Object service rollback successful");
}
onFailure: ^ (id object) {
OfflineObjectsError * error = (OfflineObjectsError) object;
NSLog(@"Rollback failed with error: %@", [error.userInfo localizedDescription]);
}
];
```
