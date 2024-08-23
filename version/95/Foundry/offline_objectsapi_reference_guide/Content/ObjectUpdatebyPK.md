                               


<object\>.updateByPK
===================

The **<object\>.updateByPK** API updates an existing record in the local database for a given primary key.

> **_Note:_** The column names and values provided as key value pairs are case sensitive.

Volt MX  Iris (JavaScript)
-------------------------------

### Signature

```
<VMXObj>.updateByPK(record, options, successCallback, failureCallback)

```

### Parameters

<table style="mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;width: 100%;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">record</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">A dictionary containing column name and value pairs which are to be updated.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">A dictionary containing <b>primaryKeys</b>.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">successCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked when records are updated successfully</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">failureCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked when updating records fail with the cause of failure.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

#### Options Keys

  
| **Keys** | Type | Description | Required |
| --- | --- | --- | --- |
| primaryKeys | JSON | Specify the primary keys of the record to be updated. Use records primary key column names as key and respective values to populate **primaryKeys** JSON. | Yes |
| trackChanges | JSON | Set the trackChanges key to **False**, the record level operations are not tracked. When the option is set to false, the CUD operations performed on a record are not synced (uploaded). | No |
| syncLatestObjectSnapshot | JSON | This option, when turned on (set to True), ensures that only the most recent update is sent for a specific primary key, rather than sending two entries when both create and update operations occur for that key.| No|
| trackIntermediateUpdates | JSON | The option is supported only in update API. The option enables us to track the latest update performed on the record. | No|
| markForUpload | JSON | Set the markForUpload to **false**, the record changes are not uploaded to the server.| No |

### Return Type

void

### Example

```
var category = new voltmx.sdk.VMXObj("CATEGORY");
var options = {};
var record = {};
var primaryKeys = {};
record["CATEGORY_DES"] = "Update existing record";
primaryKeys["CATEGORY_ID"] = "1234"
options["primaryKeys"] = primaryKeys;

function successCallback(response) {
    voltmx.print("Record Updated successfully");
}

function errorCallback(error) {
    voltmx.print("Update failed with error: " + JSON.stringify(error));
}
category.updateByPK(record, options, successCallback, errorCallback)

//Disable change tracking - trackIntermediateUpdates
var options = {
    "trackIntermediateUpdates": false
};
var VMXObject = new voltmx.sdk.VMXObj("CATEGORY");
VMXObject.updateByPK(record, options, onSuccessCallback, onFailureCallback);

//Disable change tracking - trackChanges
var options = {
    "trackChanges": false
};
var VMXObject = new voltmx.sdk.VMXObj("CATEGORY");
VMXObject.updateByPK(record, options, onSuccessCallback, onFailureCallback);

//Mark for Upload
var options = {
    "markForUpload": false
};
VMXObject.updateByPK(record, options, onSuccessCallback, onFailureCallback);

///------- update using syncLatestObjectSnapshot flag ---------
var options = { 
    "syncLatestObjectSnapshot": false 
};
var VMXObject = new voltmx.sdk.VMXObj("CATEGORY");
VMXObject.updateByPK(record, options, onSuccessCallback, onFailureCallback);

```

Android (Java)
--------------

### Signature

```
void <VMXObj>.updateByPK(HashMap<String, Object> record,
                      HashMap<String, Object> options,
                final VMXCallback callback) throws Exception 

```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 336px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">record</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap&lt;String, Object&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">A HashMap containing column name and value pairs which are to be updated.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap&lt;String, Object&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">A HashMap containing <b>primaryKeys</b>.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">callback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VMXCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Application implements <b>onSuccess</b> and <b>onFailure</b> methods of <b>VMXCallback</b> interface.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

#### Options Keys

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 106px;"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;"><b>Keys</b></td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">primaryKeys</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Specify the primary keys of the record to be updated. Use records primary key column names as key and respective values to populate <b>primaryKeys</b> map.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">trackChanges</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Set the trackChanges key to <b>False</b>, the record level operations are not tracked. When the option is set to false, the CUD operations performed on a record are not synced (uploaded).</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">trackIntermediateUpdates</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The option is supported only in update API. The option enables us to track the latest update performed on the record.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">markForUpload</td><td class="TableStyle-Basic-BodyB-Column1-Body1">HashMap</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Set the markForUpload to <b>false</b>, the record changes are not uploaded to the server.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">No</td></tr></tbody></table>

### Return Type

void

### Example

```
VMXObj category = new VMXObj("CATEGORY");

//Update record with a primary key
HashMap < String, Object > record = new HashMap < String, Object > ();
record.put("CATEGORY_PN", "7");
record.put("CATEGORY_DES", "new updated description");

HashMap < String, Object > primaryKeys = new HashMap < > ();
primaryKeys.put("CATEGORY_ID", "123");

HashMap < String, Object > options = new HashMap < > ();
options.put("primaryKeys", primaryKeys);

try {
    category.updateByPK(record, options, new VMXCallback() {
        @Override
        public void onSuccess(Object object) {
            Log.d("Object Update", "Object Update Successful for category");
        }
        @Override
        public void onFailure(object error) {
            OfflineObjectsException e = (OfflineObjectsException) error;
            Log.e("Object Update", "Object Update Unsuccessful for category with Error :" + e.getMessage());
        }
    });

    //Update record with composite primary key
    HashMap < String, Object > record = new HashMap < String, Object > ();
    record.put("CATEGORY_PN", "7");
    record.put("CATEGORY_DES", "new updated description");

    HashMap < String, Object > primaryKeys = new HashMap < > ();
    primaryKeys.put("CATEGORY_KEY1", "123");
    primaryKeys.put("CATEGORY_KEY2", "124");

    HashMap < String, Object > options = new HashMap < > ();
    options.put("primaryKeys", primaryKeys);

    try {
        //Invoke the update API. This will update the record where the composite primary key (composed of CATEGORY_KEY1 and CATEGORY_KEY2) will be updated.
        category.updateByPK(record, options, new VoltMXSyncCallback() {
            @Override
            public void onSuccess(Object object) {
                Log.d("Object Update", "Object Update Successful for category");
            }
            @Override
            public void onFailure(object error) {
                OfflineObjectsException e = (OfflineObjectsException) error;
                Log.e("Object Update", "Object Update Unsuccessful for category with Error :" + e.getMessage());
            }
        });
    } catch (Exception e) {
        Log.e("Object Update", "Object Update Unsuccessful for category with Error :" + e.getMessage());
    }

    //Disable change tracking - trackIntermediateUpdates
    HashMap < String, Object > options = new HashMap < > ();
    options.put(KSPublicConstants.TRACK_INTERMEDIATE_UPDATES, false);
    sdkObjectSync.updateByPK(record, options, new VMXCallback() {
        @Override
        public void onSuccess(Object object) {}
        @Override
        public void onFailure(object error) {}
    });

    //Disable change tracking - trackChanges
    HashMap < String, Object > options = new HashMap < > ();
    options.put(KSPublicConstants.TRACK_CHANGES, false);
    sdkObjectSync.updateByPK(record, options, new VMXCallback() {
        @Override
        public void onSuccess(Object object) {}
        @Override
        public void onFailure(object error) {}
    });

    //Mark for Upload
    HashMap < String, Object > options = new HashMap < > ();
    options.put(KSPublicConstants.MARK_FOR_UPLOAD, false);
    sdkObjectSync.updateByPK(record, options, new VMXCallback() {
        @Override
        public void onSuccess(Object object) {}
        @Override
        public void onFailure(object error) {}
    });  

```

iOS (Objective C)
-----------------

### Signature

```
void <VMXObj>.updateByPK:(NSDictionary<NSString *, id> *)record
             options:(NSDictionary <NSString *, id> *)options
           onSuccess:(VMXSuccessCompletionHandler)onSuccess
           onFailure:(VMXFailureCompletionHandler)onFailure 

```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 210px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 213px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">record</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary&lt;NSString*, id&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">A dictionary containing column name and value pairs which are to be updated.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary&lt;NSString*, id&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">A dictionary containing <b>primaryKeys</b>.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">onSuccess</td><td class="TableStyle-Basic-BodyE-Column1-Body1">VMXSuccessCompletionHandler</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked when records are updated successfully.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">onFailure</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VMXFailureCompletionHandler</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked when updating records fail with the cause of failure.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

#### Options Keys

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 106px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 159px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;"><b>Keys</b></td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">primaryKeys</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary&lt;NSString*, id&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Specify the primary keys of the record to be updated. Use records primary key column names as key and respective values to populate <b>primaryKeys</b> dictionary.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">trackChanges</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary&lt;NSString*, id&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Set the trackChanges key to <b>False</b>, the record level operations are not tracked. When the option is set to false, the CUD operations performed on a record are not synced (uploaded).</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">trackIntermediateUpdates</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary&lt;NSString*, id&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The option is supported only in update API. The option enables us to track the latest update performed on the record.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">markForUpload</td><td class="TableStyle-Basic-BodyB-Column1-Body1">NSDictionary&lt;NSString*, id&gt;</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Set the markForUpload to <b>false</b>, the record changes are not uploaded to the server.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">No</td></tr></tbody></table>

### Return Type

void

### Examples

```
//Example 1: Update record with a primary key 
VMXObj * _categories = [
    [VMXObj alloc] initWithName: @"CATEGORY"
    error: & ;error
];
NSMutableDictionary * recordToUpdate = [NSMutableDictionary new];
recordToUpdate[@"CATEGORY_DES"] = @"updated description";
recordToUpdate[@"CATEGORY_PN"] = @"3";
NSMutableDictionary * options = [NSMutableDictionary new];
NSMutableDictionary * primaryKeys = [NSMutableDictionary new];
primaryKeys[@"CATEGORY_ID"] = @"112";
options[@"primaryKeys"] = primaryKeys;

[_categories updateByPK: recordToUpdate options: options onSuccess: ^ (id object) {
        NSLog(@"Update record succeded");
    }
    onFailure: ^ (id object) {
        OfflineObjectsError * error = (OfflineObjectsError) object;
        NSLog(@"Update record failed with error %@", [error.userInfo localizedDescription]);
    }
];

NS

//Update record with composite primary key
VMXObj * _categories = [
    [VMXObj alloc] initWithName: @"CATEGORY"
    error: & ;error
];
NSMutableDictionary * recordToUpdate = [NSMutableDictionary new];
recordToUpdate[@"CATEGORY_DES"] = @"updated description";
recordToUpdate[@"CATEGORY_PN"] = @"3";
NSMutableDictionary * options = [NSMutableDictionary new];
NSMutableDictionary * primaryKeys = [NSMutableDictionary new];
primaryKeys[@"PRIMARY_KEY1"] = @"123";
primaryKeys[@"PRIMARY_KEY2"] = @"222";
options[@"primaryKeys"] = primaryKeys;

[_categories updateByPK: recordToUpdate options: @{}
    onSuccess: ^ (id object) {
        NSLog(@"Update record succeded");
    }
    onFailure: ^ (id object) {
        OfflineObjectsError * error = (OfflineObjectsError) object;
        NSLog(@"Update record failed with error %@", [error.userInfo localizedDescription]);
    }
];

//Disable change tracking - trackIntermediateUpdates
NSDictionary < NSString * , id > * options = @ {
    VMXCONSTANTS_TRACK_INTERMEDIATE_UPDATES: @NO
};
[sdkObjectSync updateByPK: record options: options onSuccess: ^ (id object) {}
    onFailure: ^ (id Object) {}
];

//Disable change tracking - trackChanges
NSDictionary < NSString * , id > * options = @ {
    VMXCONSTANTS_TRACK_CHANGES_UPDATES: @NO
};
[sdkObjectSync updateByPK: record options: options onSuccess: ^ (id object) {}
    onFailure: ^ (id object) {}
];

//Mark for Upload
NSDictionary < NSString * , id > * options = @ {
    VMXCONSTANTS_MARK_FOR_UPLOAD: @NO
};
[sdkObjectSync updateByPK: record options: options onSuccess: ^ (id object) {}
    onFailure: ^ (id object) {}
];  

```

> **Note:**  
*   - The **trackChanges** flag must be used consistently (either always true or always false) for all CUD operations on a record. You must not update the value of "change tracking" flag in between CUD operations on a record.  
*   - The **trackIntermediateChanges** flag is not applicable in **Create** and **Delete** APIs.  
*   - When you set both **markForUpload** and **trackChanges** flags, an error is reported as these are mutually exclusive options.  
*   - When you set both **trackIntermediateUpdates** and **trackChanges** flags, an error is reported as these are mutually exclusive options.  
*   - The change tracking option for **Cascade Delete** is also applicable for the child records.  
*   - For **Hierarchical Objects**, you must provide a proper value for both parent and child record operations.  
