
# <objectService\>.cancelSync

The **<objectService\>.cancelSync** function cancels an in progress object service sync operation. The operation fails if the task syncing is already finished, throws an error, or does not support the **Cancel** operation.

## Volt MX Iris (JavaScript)

> **Note :**  Not supported for Mobile Web, Desktop Web and Desktop Native channels.


### Signature

```
VMXObjSvc.cancelSync(Options, onSuccess, onFailure)
```

### Parameters

| Parameter | Type     | Description                                                                                                              | Required |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------ | -------- |
| Options   | JSON     | Reserved for future use, so the parameter is insignificant. But, the developer must pass some value such as null or { }. | Yes      |
| onSuccess | Function | The JavaScript function to be executed when cancellation is successful.                                                  | Yes      |
| onFailure | Function | The JavaScript function to be executed when cancellation fails.                                                          | Yes      |

### Return Type

void

### Example

```
var syncObjectSvc = new voltmx.sdk.VMXObjSvc("Organization");

// define Sync options
var syncOptions = {};
syncOptions.downloadBatchSize = 100;
syncOptions.uploadBatchSize = 200;
syncOptions.getSyncStats = true;

// Start Sync asynchronously
syncObjectSvc.startSync(syncOptions,
function(res) {
alert("ObjectService sync successful");
},
function(err) {
alert("ObjectService sync failed with error: " + JSON.stringify(err));
},
function(progressCallback) {
alert("ObjectService sync progress event received");
});

// Now attempt to Cancel Sync// passing an empty map for options parameter
syncObjectSvc.cancelSync({},
function(res) {
alert("ObjectService sync cancellation successful");
},
function(err) {
alert("ObjectService sync failed with error : " + JSON.stringify(err));
});
```

## Android (Java)

### Signature

```
public void cancelSync(HashMap<String, Object> options, final VMXCallback syncCancellationCallback)
```

### Parameters

| Parameter                | Type                    | Description                                                                                                                                        | Required |
| ------------------------ | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| options                  | HashMap<String, Object\> | Reserved for future use, so the parameter is insignificant. But, the developer must pass some value such as null or new HashMap<String, Object>(). | Yes      |
| syncCancellationCallback | VMXCallback             | Application implements **onSuccess** and **onFailure** methods of **VMXCallback** interface.                                                       | Yes      |

### Return Type

void

### Example

```
VMXObjSvc syncObjectSvc = new VMXObjSvc("Organization");

// Define Sync options
HashMap < String, Object > syncOptions = new HashMap < String, Object > ();
syncOptions.put("downloadBatchSize", "100");
syncOptions.put("uploadBatchSize", "200");
syncOptions.put("getSyncStats"
"true");

// Start Sync asynchronously
syncObjectSvc.startSync(syncOptions,
new VMXCallback() {
@Override
public void onSuccess(Object object) {
Log.d("ObjectServiceSync", "ObjectService sync successful");
}

        @Override
        public void onFailure(Object error) {
            Log.e("ObjectServiceSync", "ObjectService sync failed with error: " + error);
        }
    },
    new VMXProgressCallback() {
        @Override
        public void onProgress(Object object) {
            Log.d("ObjectServiceSync", "ObjectService sync progress event received");
        }
    });

// Now attempt to Cancel Sync
// passing an empty HashMap for options parameter
syncObjectSvc.cancelSync(new HashMap < String, Object > (),
new VMXCallback() {
@Override
public void onSuccess(Object object) {
Log.d("ObjectServiceSync Cancellation", "ObjectService sync cancellation successful");
}

        @Override
        public void onFailure(Object error) {
            Log.e("ObjectServiceSync Cancellation", "ObjectService sync cancellation failed with error: " + error);
        }
    });

```

## iOS (Objective C)

### Signature

```
(void)cancelSync:(NSDictionary *)options
onSuccess:(VMXSuccessCompletionHandler)onSuccess
onFailure:(VMXFailureCompletionHandler)onFailure

```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 210px;"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">onSuccess</td><td class="TableStyle-Basic-BodyE-Column1-Body1">VMXSuccessCompletionHandler</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The method called after a successful cancellation.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">onFailure</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VMXFailureCompletionHandler</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The method called after the cancellation fails.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

### Return Type

void

### Example

```
NSError _ error;
VMXObjSvc _ syncObjectSvc = [
[VMXObjSvc alloc] initWithName: @"Organization"
error: & error
];

// Define Sync options
NSMutableDictionary * syncOptions = [NSMutableDictionary new];
[syncOptions setObject: @"100"
forKey: @"downloadBatchSize"
];
[syncOptions setObject: @"200"
forKey: @"uploadBatchSize"
];
[syncOptions setObject: @"true"
forKey: @"getSyncStats"
];

// Start Sync asynchronously
[syncObjectSvc startSync: syncOptions
onSuccess: ^ (id object) {
NSLog(@"ObjectService sync successful");
}
onFailure: ^ (NSError * error) {
NSLog(@"ObjectService sync failed with error :%@", [error description]);
}
onProgress: ^ (id object) {
NSLog(@"ObjectService sync progress event received");
}
];

// Now attempt to Cancel Sync// passing an empty dictionary for options parameter
NSMutableDictionary _ cancelSyncOptions = [NSMutableDictionary new];
syncObjectSvc cancelSync: cancelSyncOptions
onSuccess: ^ (id object) {
NSLog(@"ObjectService sync cancellation successful");
}
onFailure: ^ (NSError _ error) {
NSLog(@"ObjectService sync cancellation failed with error: %@", [error description]);
}];
```
