
# <object\>.cancelSync

The **<object\>.cancelSync** function attempts to cancel an in progress object sync operation. The operation fails if the task syncing is already finished, throws an error, or does not support the **Cancel** operation.

## Volt MX Iris (JavaScript)

> **Note :** Not supported for Mobile Web, Desktop Web and Desktop Native channels.

### Signature

```
<VMXObj>.cancelSync(options, onSuccess, onFailure);
```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 100px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">Reserved for future use, so the parameter is insignificant. But, the developer must pass some value such as null or { }.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">onSuccess</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked when the cancellation is successful.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">onFailure</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked when the cancellation fails.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

### Return Type

void

### Example

```
var syncObject = new voltmx.sdk.VMXObj("Managers");

// Define Sync options
var syncOptions = {};
syncOptions.downloadBatchSize = 100;
syncOptions.uploadBatchSize = 200;
syncOptions.getSyncStats = true;

// Start Sync asynchronously
syncObject.startSync(syncOptions,
function(res) {
alert("Object sync successful”);
},
function(err)
{
alert("
Object sync failed with error: " + JSON.stringify(err));
},
function(progressCallback)
{
alert("
Object sync progress event received ");
});

// Now attempt to Cancel Sync
// passing an empty map for options parameter
syncObject.cancelSync({},
function(res)
{
alert("
Object sync cancellation successful ");
},
function(err)
{
alert("
Object sync failed with error: " + JSON.stringify(err));
});

```

## Android (Java)

### Signature

```
public void cancelSync(HashMap<String, Object> options, final VMXCallback syncCancellationCallback)

```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 151px;"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 307px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap&lt;String, Object&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Reserved for future use, so the parameter is insignificant. But, the developer must pass some value such as null or new HashMap&lt;String, Object&gt;().</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">syncCancellationCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VMXCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Application implements <b>onSuccess</b> and <b>onFailure</b> methods of <b>VMXCallback</b> interface.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

### Return Type

void

### Example

```
VMXObj syncObject = new VMXObj("Managers");

//Define Sync options
HashMap < String, Object > syncOptions = new HashMap < String, Object > ();
syncOptions.put("downloadBatchSize", "100");
syncOptions.put("uploadBatchSize", "200");
syncOptions.put("getSyncStats", "true");

// Start Sync asynchronously
syncObject.startSync(syncOptions,
new VMXCallback() {
@Override
public void onSuccess(Object object) {
Log.d("ObjectSync", "Object sync successful");
}

        @Override
        public void onFailure(Object error) {
            Log.e("ObjectSync", "Object sync failed with error: " + error);
        }
    },
    new VMXProgressCallback() {
        @Override
        public void onProgress(Object object) {
            Log.d("ObjectSync", "Object sync progress event received");
        }
    });

// Now attempt to Cancel Sync
syncObject.cancelSync(new HashMap < String, Object > (),
new VMXCallback() {
@Override
public void onSuccess(Object object) {
Log.d("ObjectSync Cancellation", "Object sync cancellation successful");
}

        @Override
        public void onFailure(Object error) {
            Log.e("ObjectSync Cancellation", "Object sync cancellation failed with error: " + error);
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

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 208px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 223px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">onSuccess</td><td class="TableStyle-Basic-BodyE-Column1-Body1">VMXSuccessCompletionHandler</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">The method called after a successful cancellation.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">onFailure</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VMXFailureCompletionHandler</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The method called after the cancellation fails.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

### Return Type

void

### Example

```
NSError * error;

VMXObj * syncObject = [
[VMXObj alloc] initWithName: @"Managers"
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
[syncObject startSync: syncOptions
onSuccess: ^ (id object) {
NSLog(@"Object sync successful");
}   
onFailure: ^ (NSError * error) {
NSLog(@"Object sync failed with error: %@", [error description]);
}
onProgress: ^ (id object) {
NSLog(@"Object sync progress event received");
}
];

// Now attempt to Cancel Sync
// passing an empty dictionary for options parameter
NSMutableDictionary _ cancelSyncOptions = [NSMutableDictionary new];
[syncObject cancelSync: cancelSyncOptions
onSuccess: ^ (id object) {
NSLog(@"Object sync cancellation successful");
}
onFailure: ^ (NSError _ error) {
NSLog(@"Object sync cancellation failed with error: %@", [error description]);
}
];
```
