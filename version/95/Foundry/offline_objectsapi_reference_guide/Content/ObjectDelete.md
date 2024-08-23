
<object\>.delete
===============

The **<object\>.delete** API deletes the records that are qualified for the criteria from the local database.

> **Note:**  The column names and values provided as key value pairs are case sensitive.  

Volt MX  Iris (JavaScript)
-------------------------------

### Signature

```
<VMXObj>.delete(options, onSuccessCallback, onFailureCallback)

```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');width: 690px;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 100px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1" data-mc-conditions=""><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">A dictionary containing primary Keys. The options parameter accepts a JSON that has the following options keys primaryKeys whereCondition whereConditionAsAString trackChanges markForUpload For detailed information, refer <a href="#Options" class="selected"></a><a href="#Options" class="selected">Options Keys</a>. <b>If the options parameter is null or empty, all the records are deleted.</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">successCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked on successful deletion of a record(s).</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">failureCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked on failure with the cause of failure as an argument.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>


<a id="Options"></a>  

#### Options Keys

<table style="mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;width: 100%;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 366px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 225px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">primaryKeys</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">Specify the primary keys of the record to be deleted. The <b>Key Name</b> is primaryKeys and the <b>Value</b> is a dictionary of primary keys.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">whereCondition</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">Specify the where condition for the delete query. The <b>Key Name</b> is whereCondition and the <b>Values</b> are column names and their respective values.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">whereConditionAsAString</td><td class="TableStyle-Basic-BodyE-Column1-Body1">String</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">Specify the where condition for the delete query. The <b>Key Name</b> is whereConditionAsAString and the <b>Value</b> is a string. <b>Note:</b> For SPA/Desktop Web channels, each condition must have only comparison operator (=,!=,&gt;,&lt;,&gt;=,&lt;=). Multiple conditions can be clubbed using conjunctions(AND,OR).Values containing whitespaces are not supported.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">trackChanges</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Boolean</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">If the <b>trackChanges</b> key is set to <b>False</b>, the record level operations are not tracked. When the option is set to false, the CUD operations performed on a record are not synced(uploaded). The key is set to <b>True</b>, by default.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyB-Column1-Body1">markForUpload</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Boolean</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyB-Column1-Body1">If the <b>markForUpload</b> key is set to <b>False</b>, the record changes are not uploaded to the server. The key is set to <b>True</b>, by default.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">No</td></tr></tbody></table>

### Return Type

void

### Example

```
//------- delete all records -------
var category = new voltmx.sdk.VMXObj("CATEGORY");

function successCallback(response) {
    //response holds value true
}

function errorCallback(error) {
    voltmx.print("Delete failed with error: " + JSON.stringify(error));
}
category.delete(null, successCallback, errorCallback);

//--------delete a record using composite primary key --------
var category = new voltmx.sdk.VMXObj("CATEGORY");
var options = {};
var primaryKeys = {};
primaryKeys["CATEGORY_KEY1"] = "1234";
primaryKeys["CATEGORY_KEY2"] = "23";
options["primaryKeys"] = primaryKeys;

function successCallback(response) {
    //response holds the value true
}

function errorCallback(error) {
    voltmx.print("Delete failed with error: " + JSON.stringify(error));
}
category.delete(options, successCallback, errorCallback);

//------- delete by whereCondition-------
var category = new voltmx.sdk.VMXObj("CATEGORY");
var whereClause = {};
whereClause["Category_PN"] = 7;
var options = {};
options["whereCondition"] = whereClause;

function successCallback(response) {
    //response holds the value true
}

function errorCallback(error) {
    voltmx.print("Delete failed with error: " + JSON.stringify(error));
}
category.delete(options, successCallback, errorCallback);

//------- delete by whereConditionAsAString -------
var category = new voltmx.sdk.VMXObj("CATEGORY");
var options = {};
var whereClause = "Category_PN = '7'";
options["whereConditionAsAString"] = whereClause;

function successCallback(response) {
    //response holds the value true
}

function errorCallback(error) {
    voltmx.print("Delete failed with error: " + JSON.stringify(error));
}
category.delete(options, successCallback, errorCallback);

//------- delete using Disable change tracking flag – trackChanges ---------
var options = {
    "trackChanges": false
};
var VMXObject = new voltmx.sdk.VMXObj("CATEGORY");
VMXObject.delete(options, successCallback, failureCallback);

//------- delete using markForUpload flag --------- 
var options = {
    "markForUpload": false
};
var VMXObject = new voltmx.sdk.VMXObj("CATEGORY");
VMXObject.delete(options, successCallback, failureCallback);  

```

Android (Java)
--------------

### Signature

```
void <VMXObj>.delete(HashMap<String, Object> options, final VMXCallback syncCallback) throws Exception

```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 289px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap &lt;String, Object&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The options parameter accepts a HashMap that has the following options keys primaryKeys whereCondition whereConditionAsAString trackChanges markForUpload For detailed information, refer <a href="#Options" class="selected"></a><a href="#Options2" class="selected">Options Keys</a>. <b>If the options parameter is null or empty, all the records are deleted.</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">syncCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VMXCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Takes onSuccess and onFailure methods.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>


<a id="Options2"></a>  

#### Options Keys

<table style="mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 376px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;"><b>Keys</b></td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">primaryKeys</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap &lt;String, Object&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Specify the primary keys of the record to be deleted. The <b>Key Name</b> is primaryKeys and the <b>Value</b> is a hashmap of primary keys.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">whereCondition</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap &lt;String, Object&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Specify the where condition for the delete query. The <b>Key Name</b> is whereCondition and the <b>Value</b> is a map containing column names and their respective values.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">whereConditionAsAString</td><td class="TableStyle-Basic-BodyE-Column1-Body1">String</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Specify the where condition for the select query. The <b>Key Name</b> whereConditionAsAString and the <b>Value</b> is a string. <b>Note:</b> For SPA/Desktop Web channels, each condition must have only comparison operator (=,!=,&gt;,&lt;,&gt;=,&lt;=). Multiple conditions can be clubbed using conjunctions(AND,OR).Values containing whitespaces are not supported.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">trackChanges</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Boolean</td><td class="TableStyle-Basic-BodyE-Column1-Body1">If you set the trackChanges key to <b>False</b>, the record level operations are not tracked. When the option is set to false, the CUD operations performed on a record are not synced (uploaded). The key is set to <b>True</b>, by default.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">markForUpload</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Boolean</td><td class="TableStyle-Basic-BodyB-Column1-Body1">If you set the markForUpload to <b>False</b>, the record changes are not uploaded to the server. The key is set to <b>True</b>, by default.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">No</td></tr></tbody></table>

### Return Type

void

### Example

```
//Delete record with a primary key 
VMXObj category = new VMXObj("CATEGORY");
HashMap < String, Object > primaryKeys = new HashMap < > ();
primaryKeys.put("CATEGORY_ID", "123");
HashMap < String, Object > options = new HashMap < > ();
options.put("primaryKeys", primaryKeys);
try {
    category.delete(options, new VMXCallback() {
        @Override
        public void onSuccess(Object object) {
            Log.d("Object Delete", "Object Delete Successful for category");
        }
        @Override
        public void onFailure(object error) {
            OfflineObjectsException e = (OfflineObjectsException) error;
            Log.e("Object Delete", "Object Delete Unsuccessful for category with Error :" + e.getMessage());
        }
    });
} catch (Exception e) {
    Log.e("Object Delete", "Failed to delete with exception: " + e.getMessage());
}
//Delete record with composite primary key 

HashMap < String, Object > primaryKeys = new HashMap < > ();
primaryKeys.put("CATEGORY_KEY1", "123");
primaryKeys.put("CATEGORY_KEY2", "124");
HashMap < String, Object > options = new HashMap < > ();
options.put("primaryKeys", primaryKeys);
try {
    category.delete(options, new VoltMXSyncCallback() {
        @Override
        public void onSuccess(Object object) {
            Log.d("Object Delete", "Object Delete Successful for category");
        }
        @Override
        public void onFailure(object error) {
            OfflineObjectsException e = (OfflineObjectsException) error;
            Log.e("Object Delete", "Object Delete Unsuccessful for category with Error :" + e.getMessage());
        }
    });
} catch (Exception e) {
    Log.e("Object Delete", "Object Delete Unsuccessful for category with Error :" + e.getMessage());
}

//Delete record using whereCondition 
VMXObj category = new VMXObj("CATEGORY");
HashMap < String, Object > whereClause = new HashMap < > ();
whereClause.put("CATEGORY_ID", "123");
HashMap < String, Object > options = new HashMap < > ();
options.put("whereCondition", whereClause);
try {
    category.delete(options, new VMXCallback() {
        @Override
        public void onSuccess(Object object) {
            Log.d("Object Delete", "Object Delete Successful for category");
        }
        @Override
        public void onFailure(object error) {
            OfflineObjectsException e = (OfflineObjectsException) error;
            Log.e("Object Delete", "Object Delete Unsuccessful for category with Error :" + e.getMessage());
        }
    });
} catch (Exception e) {
    Log.e("Object Delete", "Failed to delete with exception: " + e.getMessage());
}

//Delete record using whereConditionAsAString 
VMXObj category = new VMXObj("CATEGORY");
String whereClause = "CATEGORY_ID = '123'";
HashMap < String, Object > options = new HashMap < > ();
options.put("whereConditionAsAString", whereClause);
try {
    category.delete(options, new VMXCallback() {
        @Override
        public void onSuccess(Object object) {
            Log.d("Object Delete", "Object Delete Successful for category");
        }
        @Override
        public void onFailure(object error) {
            OfflineObjectsException e = (OfflineObjectsException) error;
            Log.e("Object Delete", "Object Delete Unsuccessful for category with Error :" + e.getMessage());
        }
    });
} catch (Exception e) {
    Log.e("Object Delete", "Failed to delete with exception: " + e.getMessage());
}

//Disable change tracking - trackChanges 
HashMap < String, Object > options = new HashMap < > ();
options.put(KSPublicConstants.TRACK_CHANGES, false);
sdkObjectSync.delete(options, new VMXCallback() {
    @Override
    public void onSuccess(Object object) {}
    @Override
    public void onFailure(object error) {}
});

//Mark for Upload 
HashMap < String, Object > options = new HashMap < > ();
options.put(KSPublicConstants.MARK_FOR_UPLOAD, false);
sdkObjectSync.delete(options, new VMXCallback() {
    {
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
void <object>.delete:(NSDictionary <NSString *, id> *)options	
onSuccess:(VMXSuccessCompletionHandler)onSuccess
onFailure:(VMXFailureCompletionHandler)onFailure

```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 207px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 250px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The options parameter accepts a NSDictionary that has the following options keys primaryKeys whereCondition whereConditionAsAString trackChanges markForUpload For detailed information, refer <a href="#Options" class="selected"></a><a href="#Options3" class="selected">Options Keys</a>. <b>If the options parameter is null or empty, all the records are deleted.</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">onSuccess</td><td class="TableStyle-Basic-BodyE-Column1-Body1">VMXSuccessCompletionHandler</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked on successful deletion of record(s).</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">onFailure</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VMXFailureCompletionHandler</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked on an error with the cause of failure as an argument</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>


<a id="Options3"></a>  

### Options Keys

<table style="mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 319px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 90px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;"><b>Keys</b></td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">primaryKeys</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary&lt;NSString*, id&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Specify the primary keys of the record to be deleted. The <b>Key Name</b>: <b>primaryKeys</b> and value is a dictionary of primary keys.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">whereCondition</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary&lt;NSString*, id&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Dictionary of column names and their respective values according to which the records are to be deleted.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">whereConditionAsAString</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSString</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Specify the where condition for the delete query. <b>Key Name</b>: whereConditionAsAString and the <b>value</b> is a string. <b>Note:</b> For SPA/Desktop Web channels, each condition must have only comparison operator (=,!=,&gt;,&lt;,&gt;=,&lt;=). Multiple conditions can be clubbed using conjunctions(AND,OR). Values containing whitespaces are not supported.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">trackChanges</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Boolean</td><td class="TableStyle-Basic-BodyE-Column1-Body1">If you set the trackChanges key to <b>False</b>, the record level operations are not tracked. When the option is set to false, the CUD operations performed on a record are not synced (uploaded). The key is set to <b>True</b>, by default.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">markForUpload</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Boolean</td><td class="TableStyle-Basic-BodyB-Column1-Body1">If you set the markForUpload to <b>False</b>, the record changes are not uploaded to the server. The key is set to <b>True</b>, by default.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">No</td></tr></tbody></table>

### Return Type

void

### Examples

```
// Delete record with a primary key 
VMXObj * _categories = [
    [VMXObj alloc] initWithName: @"CATEGORY"
    error: & error
];
NSMutableDictionary * options = [NSMutableDictionary new];
NSMutableDictionary * primaryKeys = [NSMutableDictionary new];
primaryKeys[@"CATEGORY_ID"] = @"112";
options[@"primaryKeys"] = primaryKeys;
[_categories delete: options
    onSuccess: ^ (id object) {
        NSLog(@"Deleted successfully");
    }
    onFailure: ^ (id object) {
        OfflineObjectsError * error = (OfflineObjectsError) object;
        NSLog(@"Delete record failed with error %@", [error.userInfo localizedDescription]);
    }
];

// Delete record with composite primary key 
VMXObj * _categories = [
    [VMXObj alloc] initWithName: @"CATEGORY"
    error: & error
];
NSMutableDictionary * recordToUpdate =
    NSMutableDictionary * options = [NSMutableDictionary new];
NSMutableDictionary * primaryKeys = [NSMutableDictionary new];
primaryKeys[@"PRIMARY_KEY1"] = @"123";
primaryKeys[@"PRIMARY_KEY2"] = @"222";
options[@"primaryKeys"] = primaryKeys;
[_categories delete: options
    onSuccess: ^ (id object) {
        NSLog(@"Deleted successfully");
    }
    onFailure: ^ (id object) {
        OfflineObjectsError * error = (OfflineObjectsError) object;
        NSLog(@"Delete record failed with error %@", [error.userInfo localizedDescription]);
    }
];

// Delete record using whereCondition
VMXObj * _categories = [
    [VMXObj alloc] initWithName: @"CATEGORY"
    error: & error
];
NSMutableDictionary * options = [NSMutableDictionary new];
NSMutableDictionary * whereClause = [NSMutableDictionary new];
whereClause[@"CATEGORY_ID"] = @"112";
options[@"whereCondition"] = whereClause;
[_categories delete: options
    onSuccess: ^ (id object) {
        NSLog(@"Deleted successfully");
    }
    onFailure: ^ (id object) {
        OfflineObjectsError * error = (OfflineObjectsError) object;
        NSLog(@"Delete record failed with error %@", [error.userInfo localizedDescription]);
    }
];

// Delete record using whereConditionAsAString
VMXObj * _categories = [
    [VMXObj alloc] initWithName: @"CATEGORY"
    error: & error
];
NSMutableDictionary * options = [NSMutableDictionary new];
NSString * whereClause = @"CATEGORY_ID = '112'";
options[@"whereConditionAsAString"] = whereClause;
[_categories delete: options
    onSuccess: ^ (id object) {
        NSLog(@"Deleted successfully");
    }
    onFailure: ^ (id object) {
        OfflineObjectsError * error = (OfflineObjectsError) object;
        NSLog(@"Delete record failed with error %@", [error.userInfo localizedDescription]);
    }
];
//Disable change tracking - trackChanges 
NSDictionary < NSString * , id > * options = @ {
    VMXCONSTANTS_TRACK_CHANGES_ UPDATES: @NO
};
[sdkObjectSync delete: options
    onSuccess: ^ (id object) {}
    onFailure: ^ (id object) {}
];
//Mark for Upload 
NSDictionary < NSString * , id > * options = @ {
    VMXCONSTANTS_MARK_FOR_ UPLOAD: @NO
};
[sdkObjectSync delete: options
    onSuccess: ^ (id object) {}
    onFailure: ^ (id object) {}
];
```

> **_Note:_**  **Cascade Delete** is enabled if the option is checked in **VoltMX Foundry Console** >> **Object Services** >> under configuring relationships in a data model. When this option is enabled, the child records are deleted recursively along with the parent record. This option is applicable for all platforms except for SPA/Desktop Web channels of Volt MX Iris.  


<blockquote><em><b>Note:</b></em>
<ul>
<li>The <b>trackChanges</b> flag must be used consistently (either always true or always false) for all CUD operations on a record. You must not update the value of "change tracking" flag in between CUD operations on a record.</li>
<li>When you set both <b>markForUpload</b> and <b>trackChanges</b> flags, an error is reported as these are mutually exclusive options.</li>
<li>The change tracking option for <b>Cascade Delete</b> is also applicable for the child records.</li>
<li>For <b>Hierarchical Objects</b>, you must provide a proper value for both parent and child record operations.</li>
<li>The <b>primaryKeys</b>, <b>whereCondition</b>, and <b>whereConditionAsAString</b> are considered as the criteria to update a record. Only one criterion is considered at a time and the order is <b>primaryKeys</b> &gt; <b>whereCondition</b> &gt; <b>whereConditionAsAString</b>.</li>
</ul>
</blockquote>

> **_Note_:**  To soft delete a column, mention the softdelete column name. Ensure all the tables have the same softdelete column name. For the offline object service with multiple objects, if the soft delete column is not common for all the objects, instead of using delete API, use the `<object>.update` API and set the softdelete field to true in the device database.
For more information, refer to [Offline Objects API Developer's Guide > <object\>.update API](./ObjectUpdate.md). 
