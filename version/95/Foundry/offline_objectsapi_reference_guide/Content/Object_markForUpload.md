

<object\>.markForUpload
======================

The **<object\>.markForUpload API** selects the changes made to the records and sent to the server. If the **markForUpload** flag is not enabled, the changes made are deferred from uploading to the server until marked for upload using specific markForUpload APIs.

The markForUpload flag is set to true, by default.

Volt MX  Iris (JavaScript)
-------------------------------

### Signature

```
<object>.markForUpload(options, successCallback, failureCallback)
```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 105px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 361px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON</td><td class="TableStyle-Basic-BodyE-Column1-Body1">A dictionary containing mandatory key <b>primaryKeys</b> which contains the PK (column name and value). In case of a composite PK, the dictionary will contain multiple key-value pairs.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">successCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked when the changes are successfully uploaded to the server.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">failureCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked when the changes are deferred from uploading to the server.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

#### Options Keys

<table style="mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 433px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 91px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;"><b>Keys</b></td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">primaryKeys</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Specify the primary keys of the record to select a query. Key Name: <b>primaryKeys</b> and value is a dictionary of primary keys.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr></tbody></table>

### Return Type

void

### Example

```
var category = new voltmx.sdk.VMXObj("CATEGORY");
var options = {};
var primaryKeys["CategoryID"] = "1";
options["primaryKeys"] = primaryKeys;
//mark the deferred record for upload with primary key 1
category.markForUpload(options, successCallback, failureCallback);

function successCallback() {
    voltmx.print("markForUpload successful");
}

function errorCallback(error) {
    voltmx.print("markForUpload failed " + error.code);
}  

```

Android (Java)
--------------

### Signature

```
<VMXObj>.markForUpload(final HashMap<String, Object> options, final VMXCallback callback)
```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 289px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap&lt;String, Object&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">key: <b>primaryKeys</b>. Value: HashMap&lt;String, Object&gt;: Pass a hashmap of primary keys and its value. HashMap containing PK (column name and value). In case of a composite PK, the dictionary will contain multiple key-value pairs.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">callback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VMXCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Takes onSuccess and onFailure methods.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

#### Options Keys

<table style="mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 376px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;"><b>Keys</b></td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">primaryKeys</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap&lt;String, Object&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Specify the primary keys of the record for the select query. Key Name: <b>primaryKeys</b> and respective values to populate primaryKeys map.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr></tbody></table>

### Return Type

void

### Examples

```
VMXObj category = new VMXObj("CATEGORY");
HashMap < String, Object > options = new HashMap < String, Object > ();
HashMap < String, Object > primaryKeys = new HashMap < String, Object > ();
primaryKeys.put("CATEGORY_ID", "1");
options.put("primaryKeys", primaryKeys);
//mark the deferred record for upload with primary key 1
category.markForUpload(options, new VMXCallback() {
        @Override
        public void onSuccess(Object object) {
            Log.d("Object markforupload", "Object markforupload Successful ");
        }

        @Override
        public void onFailure(object error) {
            OfflineObjectsException e = (OfflineObjectsException) error;
            Log.e("Object markforupload", "Object markforupload unsuccessful for category with Error :" + e.getMessage());
        }
    }
```

iOS (Objective C)
-----------------

### Signature

```
void <VMXObj> markForUpload:(NSDictionary <NSString *, id> *)options 
               onSuccess:(VMXSuccessCompletionHandler)onSuccess 
               onFailure:(VMXFailureCompletionHandler)onFailure
```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 207px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 250px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary</td><td class="TableStyle-Basic-BodyE-Column1-Body1">key: <b>primaryKeys</b>. Value: Dictionary containing PK (column name and value). In case of composite PK, the dictionary will contain multiple key-value pairs.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">onSuccessCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">VMXSuccessCompletionHandler</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked when the changes are successfully uploaded to the server.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">onFailCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VMXFailureCompletionHandler</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked when the changes are deferred from uploading the server.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

#### Options Keys

<table style="mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 339px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 90px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;"><b>Keys</b></td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">primaryKeys</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary&lt;NSString*, id&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Specify the primary keys of the record to select the query. Key name: <b>primaryKeys</b> and value is a dictionary of primary keys.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr></tbody></table>

### Return Type

void

### Example

```
NSError error = nil;
VMXObj * _categories = [
    [VMXObj alloc] initWithName: @"CATEGORY"
    error: & error
];
NSDictionary * primaryKeys = @ {@
    "CATEGORY_ID": "1"
};
NSDictionary * options = @ {
    "primaryKeys": primaryKeys
};
//mark the deferred record for upload with primary key 1
[_categories markForUpload: options
    onSuccess: ^ () {
        NSLog(@"Object markforupload successful ");
    }
    onFailure: ^ (id object) {
        OfflineObjectsError * error = (OfflineObjectsError) object;
        NSLog(@"Object markforupload unsuccessful because of error:%@", [error.userInfo
            localizedDescription
        ]);
    }
];
```

Utility API
-----------

The API returns all the deferred records primary keys for a particular object.

### Volt MX Iris (JavaScript)

> **_Note:_** Not supported for Mobile Web, and Desktop Web channels.

#### Signature

```
<object>.getUploadDeferredRecordKeys(successCallback, failureCallback)
```

#### Example

```
var category = new voltmx.sdk.VMXObj("CATEGORY");
category.getUploadDeferredRecordKeys(successCallback, failureCallback);

function successCallback(result) {
    for (var pks in result) {
        voltmx.print("deferred records with primary keys " + JSON.stringify(pks));
    }
}

function failureCallback(error) {
    voltmx.print("failed with error " + error.code);
}
```

### Android (Java)

#### Signature

```
void <VMXObj>. getUploadDeferredRecordKeys (final VMXCallback callback)
```

#### Example

```
VMXObj category = new VMXObj("CATEGORY");
category.getUploadDeferredRecordKeys(new VMXCallback() {
        @Override
        public void onSuccess(Object result) {
            List < HashMap < String, Object >> pksList = (List < HashMap < String, Object > ) result;
            for (HashMap < String, Object > pks: pksList) {
                for (Map.Entry < String, Object > e: pks.entrySet()) {
                    Log.d("deferred record with key : " + e.getKey() + "value: "+e.getValue());
                }
            }
        }
    }

    @Override 
	public void onFailure(Object error) {
        OfflineObjectsException e = (OfflineObjectsException) error;
        Log.e("getDeferredUpload", "getDeferredUpload failed with error " + e.getMessage());
    }
});

```

### iOS (Objective C)

#### Signature

```
<void> [<VMXObj> getUploadDeferredRecordKeys: (VMXSuccessCompletionHandler) onSuccess
		 onFailure: (VMXFailureCompletionHandler) onFailure]

```

#### Example

```
NSError error = nil;
VMXObj * _categories = [
    [VMXObj alloc] initWithName: @"CATEGORY"
    error: & error
];

[_categories getUploadDeferredRecordKeys: onSuccess: onFailure: onFailure];

VMXSuccessCompletionHandler onSuccess = ^ void(id result) {
    NSArray * pks = (NSArray * ) result;
    for (id obj in pks) {
        for (id key in obj) {
            NSLog(“key % @, value % @“, key, [obj objectForKey: key]);
        }
    }
}

VMXFailureCompletionHandler onFailure = ^ void(id error) {
    NSLog("failed with error " + error.code);
}
```

