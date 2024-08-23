
<object\>.rollback
=================

The **<object\>.rollback** function rolls back all changes of an object in a device's database to its previous sync state or a specific record supplied through the primaryKeyValueMap parameter.

Volt MX  Iris (JavaScript)
-------------------------------

### Signature

```
<VMXObj>.rollback(primaryKeyValueMap, successCallback, failureCallback)

```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 100px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">primaryKeyValueMap</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">If you want to rollback the changes of a particular record in the object, provide primaryKeyValueMap. Otherwise, you can provide null or empty JSON.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">successCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked on successful rollback.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">failureCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked on an error with the cause of failure as an argument upon Rollback failure.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

### Return Type

void

### Example

```
function successCallback() {
    voltmx.print("Object rollback successful: ");
}

function failureCallback(error) {
    voltmx.print("Object rollback failed: " + error.code);
}

var categories = new voltmx.sdk.VMXObj("CATEGORY");
var primaryKeyValueMap = {};
primaryKeyValueMap["CATEGORY_ID"] = 123;

// Rollback a specific record
categories.rollback(primaryKeyValueMap, successCallback, failureCallback);

// Rollback entire object
categories.rollback(null, successCallback, failureCallback);

```

Android (Java)
--------------

### Signature

```
<VMXObj>.rollback(final HashMap<String, Object> primaryKeyValueMap, final VMXCallback callback)

```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 307px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">primaryKeyValueMap</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap&lt;String, Object&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">If you want to rollback the changes of a particular record in the object, provide primaryKeyValueMap. Otherwise, you can provide null or empty JSON.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">callback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VMXCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Application implements <b>onSuccess</b> and <b>onFailure</b> methods of <b>VMXCallback</b> interface.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

### Return Type

void

### Example

```
VMXObj category = new VMXObj("CATEGORY");

//Rollback entire object
category.rollback(null, new VMXCallback() {
    @Override
    public void onSuccess(Object object) {
        Log.d("Object Rollback", "Object Rollback Successful for category");
    }
    @Override
    public void onFailure(object error) {
        OfflineObjectsException e = (OfflineObjectsException) error;
        Log.d("Object Rollback", "Object Rollback unsuccessful for category with Error :" + e.getMessage());
    }
});

//Rollback a record using primary key(s)
HashMap < String, Object > primaryKeyValueMap = new HashMap < String, Object > ();

primaryKeyValueMap.put("CATEGORY_ID", 123);

// Rollback a specific record
category.rollback(primaryKeyValueMap, new VMXCallback() {
    @Override
    public void onSuccess(Object object) {
        Log.d("Object Rollback", "Object Rollback Successful for category");
    }
    @Override
    public void onFailure(object error) {
        OfflineObjectsException e = (OfflineObjectsException) error;
        Log.e("Object Rollback", "Object Rollback unsuccessful for category with Error :" + e.getMessage());
    }
});
```

iOS (Objective C)
-----------------

### Signature

```
void <VMXObj> rollback:(NSDictionary <NSString *, id> *)primaryKeyValueMap 
                    onSuccess:(VMXSuccessCompletionHandler)onSuccess 
                    onFailure:(VMXFailureCompletionHandler)onFailure

```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 208px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 483px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">primaryKeyValueMap</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary&lt;NSString*, id&gt;</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">If you want to rollback the changes of a particular record in the object, provide primaryKeyValueMap. Otherwise, you can provide null or empty JSON.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">onSuccess</td><td class="TableStyle-Basic-BodyE-Column1-Body1">VMXSuccessCompletionHandler</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">The method called after a successful rollback.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">onFailure</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VMXFailureCompletionHandler</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The method called on Rollback failure.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

### Return Type

void

### Examples

```
NSError * error = nil;
VMXObj * _categories = [
    [VMXObj alloc] initWithName: @"CATEGORY"
    error: & error
];

// Rollback entire object
[_categories rollback: @{}
    onSuccess: ^ (id response) {
        NSLog(@"Rollback successful for Categories Object!");
    }
    onFailure: ^ (id object) {
        OfflineObjectsError * error = (OfflineObjectsError) object;
        NSLog(@"Error: Rollback unsuccessful because of error:%@", [error.userInfo localizedDescription]);
    }
];

// Rollback a record using primary key
NSDictionary < NSString * , id > * primaryKeyValueMap = @ {@
    "CATEGORY_ID": @123
};
[_categories rollback: primaryKeyValueMap
    onSuccess: ^ (id response) {
        NSLog(@"Rollback successful for Categories Object!");
    }
    onFailure: ^ (id object) {
        OfflineObjectsError * error = (OfflineObjectsError) object;
        NSLog(@"Error: Rollback unsuccessful because of error:%@", [error.userInfo localizedDescription]);
    }
];

```

> **_Note:_** Rollback of records with relationships should be done with care. Otherwise, client database may get into the inconsistent case. For example, perform rollback on the child object before performing rollback on the parent.
