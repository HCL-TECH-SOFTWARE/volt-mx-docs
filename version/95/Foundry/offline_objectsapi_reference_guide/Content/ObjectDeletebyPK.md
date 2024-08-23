

<object\>.deleteByPK
===================

The **<object\>.deleteByPK** API deletes an existing record from the local database for a given primary key.

> **_Note:_** The column names and values provided as key value pairs are case sensitive.

Volt MX  Iris (JavaScript)
-------------------------------

### Signature

```
<object>.deleteByPK(options, onSuccessCallback, onFailureCallback)
```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 105px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 361px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON</td><td class="TableStyle-Basic-BodyE-Column1-Body1">A dictionary containing mandatory key <b>primaryKey</b> which contains the PK (column name and value). In case of a composite PK, the dictionary will contain multiple key-value pairs.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">onSuccessCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked on successful deletion of a record.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">onFailureCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked on an error with the cause of failure as an argument.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

#### Options Keys

<table style="mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 433px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 91px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;"><b>Keys</b></td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">primaryKeys</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Specify the primary keys of the record to be deleted. Key Name: <b>primaryKeys</b> and value is a dictionary of primary keys.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">trackChanges</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Set the trackChanges key to <b>False</b>, the record level operations are not tracked. When the option is set to false, the CUD operations performed on a record are not synced (uploaded).</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">markForUpload</td><td class="TableStyle-Basic-BodyB-Column1-Body1">JSON</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Set the markForUpload to <b>false</b>, the record changes are not uploaded to the server.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">No</td></tr></tbody></table>

### Return Type

void

### Example

```
//Success callback
function onSuccess() {
    voltmx.print("record updated successfully");
}
//Failure callback
function onFailure(error) {
    voltmx.print(error.code);
}

//Sample to delete a record using PK
var categories = new voltmx.sdk.VMXObj("CATEGORY");
var primaryKeys = {};
primaryKeys["CATEGORY_ID"] = "1234";
var options = {};
options["primaryKeys"] = primaryKeys;
//Invoke the delete API
categories.deleteByPK(options, onSuccess, onFailure);


//Sample to delete a record using composite primary key
var categories = new voltmx.sdk.VMXObj("CATEGORY");
var primaryKeys = {};
primaryKeys["CATEGORY_KEY1"] = "1234";
primaryKeys["CATEGORY_KEY2"] = "23";
var options["primaryKeys"] = primaryKeys;
//Invoke the delete API to delete record having composite primary key(CATEGORY_KEY1 and CATEGORY_KEY2)
categories.deleteByPK(options, onSuccess, onFailure);

//Disable Change Tracking
var options = {
    "trackChanges": false
};
var VMXObject = new voltmx.sdk.VMXObj("CATEGORY");
VMXObject.deleteByPK(options, onSuccess, onFailure);

//Mark for Upload
var options = {
    "markForUpload": false
};
VMXObject.deleteByPK(options, onSuccess, onFailure);  

```

Android (Java)
--------------

### Signature

```
void <object>.deleteByPK(HashMap<String, Object> options, final VMXCallback syncCallback) throws Exception 
```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 289px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap&lt;String, Object&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">key: <b>primaryKeys</b>. Value: HashMap&lt;String, Object&gt;: Pass a hashmap of primary keys and its value. HashMap containing PK (column name and value). In case of a composite PK, the dictionary will contain multiple key-value pairs.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">syncCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VMXCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Takes onSuccess and onFailure methods.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

#### Options Keys

<table style="mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 376px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;"><b>Keys</b></td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">primaryKeys</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Specify the primary keys of the record to be deleted. Key Name: <b>primaryKeys</b> and value is a hashmap of primary keys.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">trackChanges</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Set the trackChanges key to <b>False</b>, the record level operations are not tracked. When the option is set to false, the CUD operations performed on a record are not synced (uploaded).</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">markForUpload</td><td class="TableStyle-Basic-BodyB-Column1-Body1">HashMap</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Set the markForUpload to <b>false</b>, the record changes are not uploaded to the server.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">No</td></tr></tbody></table>

### Return Type

void

### Examples

```
VMXObj category = new VMXObj("CATEGORY");
HashMap < String, Object > options = new HashMap < > ();
HashMap < String, Object > primaryKeys = new HashMap < > ();
primaryKeys.put("CATEGORY_ID", "123");
options.put("primaryKeys", key);

try 
    category.deleteByPK(options, new VMXCallback() {
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
    e.printStackTrace();
}
//Disable change tracking
Hashmap < string, object > options = new HashMap < > ();
options.put(KSPublicConstants.TRACK_CHANGES, false);
sdkObjectSync.deleteByPK(options, new VMXCallback() {
    @Override
    public void onSuccess(Object object) {}
    @Override
    public void onFailure(object error) {}
});

//Mark for UploadHashmap 
< string, object > options = new HashMap < > ();
options.put(KSPublicConstants.MARK_FOR_UPLOAD, false);
sdkObjectSync.deleteByPK(options, new VMXCallback() {
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
void [<object> deleteByPK:(NSDictionary <NSString *, id> *)options 				  
onSuccess:(VMXSuccessCompletionHandler)onSuccess 
		 onFailure:(VMXFailureCompletionHandler)onFailure];

```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 207px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 250px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The options parameter accepts a HashMap that has the following options keys primaryKeys trackChanges markForUpload For detailed information, refer <a href="#Options" class="selected"></a><a href="#Options" class="selected">Options Keys</a>. <b>If the options parameter is omitted, all the records will be deleted.</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">onSuccessCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">VMXSuccessCompletionHandler</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked on successful deletion of a record.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">onFailureCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VMXFailureCompletionHandler</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked on an error with the cause of failure as an argument</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

### Options Keys

<table style="mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 339px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 90px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;"><b>Keys</b></td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">primaryKeys</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary&lt;NSString*, id&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Specify the primary keys of the record to be deleted. Key Name: <b>primaryKeys</b> and value is a dictionary of primary keys.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">trackChanges</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary&lt;NSString*, id&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Set the trackChanges key to <b>false</b>, the record level operations are not tracked. When the option is set to false, the CUD operations performed on a record are not synced (uploaded).</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">markForUpload</td><td class="TableStyle-Basic-BodyB-Column1-Body1">NSDictionary&lt;NSString*, id&gt;</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Set the markForUpload to <b>false</b>, the record changes are not uploaded to the server.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">No</td></tr></tbody></table>

### Return Type

void

### Example

```
NSError * error;
VMXObj * _categoryObject = [
    [VMXObj alloc] initWithName: @"CATEGORY"
    error: & ;error
];

NSDictionary * primaryKeys = @ {@
    "CATEGORY_ID": "1234"
};
NSDictionary * options = @ {@
    "primaryKeys": primaryKeys
};

[_categories deleteByPK: options onSuccess: ^ (id object) {
        //On Success block
        NSLog(@"Delete record succeded");

    }
    onFailure: ^ (id object) {
        OfflineObjectsError * error = (OfflineObjectsError) object;
        NSLog(@"Delete record Failed with error %@", [error.userInfo localizedDescription]);

    }
];

//Disable change tracking
NSDictionary < NSString * , id > * options = @ {
    VMXCONSTANTS_TRACK_CHANGES: @NO
};
[sdkObjectSync deleteByPK: options
    onSuccess: ^ (id object) {}
    onFailure: ^ (id object) {}
];

//Mark for Upload
NSDictionary < NSString * , id > * options = @ {
    VMXCONSTANTS_MARK_FOR_UPLOAD: @NO
};
[sdkObjectSync deleteByPK: options
    onSuccess: ^ (id object) {}
    onFailure: ^ (id object) {}
];  

```


<blockquote><em><b>Note: </b></em>
    <ul>
        <li>Cascade Delete is enabled if the option is selected in <b>VoltMX Foundry Console</b> > <b>Object Services</b> > under configuring relationships in a data model. When this option is enabled, the child records will be deleted recursively along with the parent record.</li>        
        <li>The <b>trackChanges</b> flag must be used consistently (either always true or always false) for all CUD operations on a record. You must not update the value of "change tracking" flag in between CUD operations on a record.</li>        
        <li>When you set both <b>markForUpload</b> and <b>trackChanges</b> flags, an error is reported as these are mutually exclusive options. </li>        
        <li>The change tracking option for <b>Cascade Delete</b> is also applicable for the child records.</li>        
        <li>For <b>Hierarchical Objects</b>, you must provide a proper value for both parent and child record operations.</li>
    </ul>
</blockquote>


  



<!-- <blockquote><em><b>Note: </b></em>
    <ul>
        <li></li>        
        <li></li>        
        <li></li>        
        <li></li>        
        <li></li>
    </ul>
</blockquote> -->