
# <object\>.create

The **<object\>.create** API creates a new record in the local database.

> **_Note:_**

- If any column is defined as auto-generated, values are not allowed in them unless the **trackChanges** key is set to **false**.
- The record must contain all the mandatory columns and their respective values.
- The column names and values provided as key value pairs are case sensitive.

## Volt MX Iris (JavaScript)

### Signature

```
<VMXObj>.create(record, options, successCallback, failureCallback)

```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 100px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">record</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">Specify the record to be created in the database under a given object.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1" data-mc-conditions=""><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">Option parameter accepts a HashMap that contains the following options keys: trackChanges markForUpload For more information, refer <a href="#Options" class="selected">Options Keys</a>.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">successCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked when records are created successfully. Newly created record is retuned through the success callback.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">failureCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked on an error with the cause of failure as an argument.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>


<a id="Options"></a>

### Options


<table style="mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;width: 100%;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 366px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 225px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">trackChanges</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Boolean</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">If the trackChanges key is set to <b>False</b>, the record level operations are not tracked. When the option is set to <b>False</b>, the CUD&nbsp;operations performed on a record are not synced (uploaded). By default, the key is set to <b>True</b>.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyB-Column1-Body1">markForUpload</td><td class="TableStyle-Basic-BodyB-Column1-Body1">JSON</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyB-Column1-Body1">If markForUpload is set to <b>False</b>, the record changes are not uploaded to the server. By default, the option is set to <b>True</b>.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">No</td></tr></tbody></table>

### Return Type

void

### Example

```
var category = new voltmx.sdk.VMXObj("CATEGORY");
var record = {};

// CATEGORY_ID is the autogenerated primary key
record["CATEGORY_PN"] = Number("7");
record["CATEGORY_DES"] = "Creating a new record";

function successCallback(response) {
voltmx.print("Record created successfully with primary keys: " + response["CATEGORY_ID"]);
}

function errorCallback(error) {
voltmx.print("Create is failed" + JSON.stringify(error));
}
category.create(record, {}, successCallback, errorCallback);

//Disable Change Tracking
var options = {
"trackChanges": false
};
var VMXObject = new voltmx.sdk.VMXObj("CATEGORY");
VMXObject.create(record, options, successCallback, failureCallback);

//Mark for Upload
var options = {
"markForUpload": false
};
category.create(record, options, successCallback, errorCallback);

```

## Android (Java)

### Signature

```
void <VMXObj>.create(final HashMap<String, Object>record, final HashMap<String, Object> options, VMXCallback callback) throws Exception

```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 314px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">record</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap&lt;String, Object&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Specify the record to be created in the database under a given object.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1" data-mc-conditions=""><td class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap&lt;String, Object&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">For future use, supply null or empty HashMap as options.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">callback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VMXCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Application must implement <b>onSuccess</b> and <b>onFailure</b> methods of <b>VMXCallback</b> interface. Newly created record is retuned through <b>onSuccess</b> callback and <b>onFailure</b> handler is invoked with cause of failure as an argument in case of error.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

### Sync Options

<table style="mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;width: 100%;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 366px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 225px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">trackChanges</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Boolean</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">Set the trackChanges key to <b>false</b>, the record level operations are not tracked. Hence, the records are not synced (uploaded). <b>Note:</b> You must provide values for primary key columns when trackChanges is set to <b>false</b>.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyB-Column1-Body1">markForUpload</td><td class="TableStyle-Basic-BodyB-Column1-Body1">HashMap</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyB-Column1-Body1">Set the markForUpload to <b>false</b>, the record changes are not uploaded to the server.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">No</td></tr></tbody></table>

### Return Type

void

### Example

```
try {
//Create object in which the record should be created
private VMXObj syncObject = new VMXObj("CATEGORY");

    //CATEGORY_ID is autogenerated primary key
    HashMap < String, Object > newRecord = new HashMap < > ();
    newRecord.put("CATEGORY_PN", "2");
    newRecord.put("CATEGORY_DES", "Vegetables");

    //HashMap for options.
    HashMap < String, Object > ;
    options = new HashMap < > ();
    syncObject.create(newRecord, options, new VMXCallback() {
        @Override
        public void onSuccess(Object response) {
            Log.d("Primary key of the newly created record:" + response.get("CATEGORY_ID"));
        }

@Override
public void onFailure(Object error) {
OfflineObjectsException e = (OfflineObjectsException) error;
Log.e("Object creation failed with error:" + e.getMessage());
}
});
} catch (Exception e) {
Log.e("Object creation failed with error:" + e.getMessage());
}

//Disable change tracking
Hashmap < String, Object > options = new HashMap < > ();
options.put(KSPublicConstants.TRACK_CHANGES, false);
sdkObjectSync.create(record, options, new VMXCallback() {
@Override
public void onSuccess(Object response) {}
@Override
public void onFailure(Object error) {}
});

//Mark for Upload
HashMap < String, Object > ;
options = new HashMap < String, Object > ();
options.put("markForUpload", false);
syncObject.create(newRecord, options, new VMXCallback() {
@Override
public void onSuccess(Object response) {}
@Override
public void onFailure(Object error) {}
});

```

## iOS (Objective C)

### Signature

```
void <VMXObj> create:(NSDictionary <NSString _, id> _) record
options:(NSDictionary <NSString _, id> _)options
onSuccess:(VMXSuccessCompletionHandler)onSuccess
onFailure:(VMXFailureCompletionHandler)onFailure

```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 204px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 257px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">record</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary&lt;NSString*, id&gt;</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">Specify the record to be created in the database under a given object.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary&lt;NSString*, id&gt;</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">For future use, supply null or empty <b>NSDictionary</b> as options.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">onSuccess</td><td class="TableStyle-Basic-BodyE-Column1-Body1">VMXSuccessCompletionHandler</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked when records are created successfully. Newly created record is retuned through the success callback.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">onFailure</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VMXFailureCompletionHandler</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked on an error with the cause of failure as an argument.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

### Sync Options

<table style="mc-table-style: url('Resources/TableStyles/Basic.css');border-top-left-radius: 0px;border-top-right-radius: 0px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;border-left-style: solid;border-left-width: 2px;border-left-color: #a9a9a9;border-right-style: solid;border-right-width: 2px;border-right-color: #a9a9a9;border-top-style: solid;border-top-width: 2px;border-top-color: #a9a9a9;border-bottom-style: solid;border-bottom-width: 2px;border-bottom-color: #a9a9a9;margin-left: 0;margin-right: auto;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 432px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">trackChanges</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Boolean</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">Set the trackChanges key to <b>false</b>, the record level operations are not tracked. Hence, the records are not synced (uploaded). <b>Note:</b> You must provide values for primary key columns when trackChanges is set to <b>false</b>.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyB-Column1-Body1">markForUpload</td><td class="TableStyle-Basic-BodyB-Column1-Body1">NSDictionary&lt;NSString*, id&gt;</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyB-Column1-Body1">Set the markForUpload to <b>false</b>, the record changes are not uploaded to the server.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">No</td></tr></tbody></table>

### Return Type

void

### Examples

```
VMXObj _ _categoryObject = [
[VMXObj alloc] initWithName: @"CATEGORY"
error: & error
];
NSMutableDictionary _ newRecord = [NSMutableDictionary new]
newRecord[@"CATEGORY_DES"] = @"New record";
newRecord[@"CATEGORY_PN"] = @"7";

[_categoryObject create: newRecord options: @{}
onSuccess: ^ (id response) {
NSLog(@"Create record is successful, primary key: %@", [response objectForKey: @"CATEGORY_ID"]);
}
onFailure: ^ (id object) {
OfflineObjectsError \* error = (OfflineObjectsError) object;
NSLog(@"Create record Failed with error %@", [error.userInfo localizedDescription]);
}
];

//Disable change tracking
NSDictionary < NSString _ , id > _ options = @ {
VMXCONSTANTS_TRACK_CHANGES: @NO
};
[sdkObjectSync create: record options: options onSuccess: ^ (id object) {}
onFailure: ^ (id object) {}
];

//Mark for Upload
NSDictionary < NSString _ , id > _ options = @ {
VMXCONSTANTS_MARK_FOR_UPLOAD: @NO
};
[sdkObjectSync create: record options: options onSuccess: ^ (id object) {}
onFailure: ^ (id object) {}
];

```

> **Note:**

- The **trackChanges** flag must be used consistently (either always true or always false) for all the CUD operations on a record. You must not update the value of **change tracking** flag in between the CUD operations on a record.
- When you set both **markForUpload** and **trackChanges** flags, an error is reported as these are mutually exclusive options.
- The change tracking option for **Cascade Delete** is also applicable for the child records.
- For **Hierarchical Objects**, you must provide a proper value for both parent and child record operations.
