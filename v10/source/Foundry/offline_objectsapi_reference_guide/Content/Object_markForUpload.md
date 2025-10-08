

<object\>.markForUpload
======================

The **<object\>.markForUpload API** selects the changes made to the records and sent to the server. If the **markForUpload** flag is not enabled, the changes made are deferred from uploading to the server until marked for upload using specific markForUpload APIs.

The markForUpload flag is set to true, by default.


<blockquote>
<em><b>Note: </b></em>
<ul>
<li>Supported for Mobile Web and Desktop Web channels from V8 SP4 Fixpack 12 onwards.</li>
<li>Supported for Desktop Native channel from version 10 onwards.</li>
<li>At least one of the following option key is mandatory: primaryKeys, whereCondition, or whereConditionAsAString.</li>
</ul>
</blockquote>


Volt MX  Iris (JavaScript)
-------------------------------

### Signature

```
<object>.markForUpload(options, successCallback, failureCallback)
```

### Parameters

 **Parameter**    | **Type**                | **Description**                                            | **Required** |
|------------------|-------------------------|---------------------------------------------------------|--------------|
|   options      | JSON | A dictionary containing mandatory key **primaryKeys** which contains the PK (column name and value). In case of a composite PK, the dictionary will contain multiple key-value pairs. |     Yes      |
|   successCallback     | 	  Function        | The function is invoked when the changes are successfully uploaded to the server.                     |     Yes      |
|  failureCallback | Function | The function is invoked when the changes are deferred from uploading to the server. | Yes |

#### Options Keys

 **Keys**    | **Type**                | **Description**                                            | **Required** |
|------------------|-------------------------|---------------------------------------------------------|--------------|
|   primaryKeys      | JSON | Specify the primary keys of the record to select a query. <br>Key Name: **primaryKeys** and value is a dictionary of primary keys. |     Yes      |
| whereCondition | JSON | Specify the where condition for the select query if the primary keys are not provided. <br>Key Name: **whereCondition** and values are column names and their respective values. | Yes |
|   whereConditionAsAString     | 	  String       | Specify the where condition for the select query if the primary key is not provided. <br>Key Name: **whereConditionAsAString** and the value is a string.                     |     Yes      |

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

var category = new voltmx.sdk.VMXObj("CATEGORY");
var whereCondition = {};
whereCondition["CategoryID"] = "10";
var options = {};
options["whereCondition"] = whereCondition;
//mark the deferred records for upload satisfying whereCondition
category.markForUpload(options, successCallback, failureCallback);

var category = new voltmx.sdk.VMXObj("CATEGORY");
var whereClause = "Category_PN = '7'";
var options = {};
options["whereConditionAsAString"] = whereClause;
//mark the deferred records for upload satisfying whereClause
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

| **Parameter**    | **Type**                | **Description**                                            | **Required** |
|------------------|-------------------------|---------------------------------------------------------|--------------|
|   options      | HashMap&lt;String, Object&gt; | key: **primaryKeys**. Value: **HashMap&lt;String, Object&gt;**: Pass a hashmap of primary keys and its value. HashMap containing PK (column name and value). <br>In case of a composite PK, the dictionary will contain multiple key-value pairs. |     Yes      |
|   callback     | 	  VMXCallback        | Takes onSuccess and onFailure methods.                     |     Yes      |

#### Options Keys

 **Keys**    | **Type**                | **Description**                                            | **Required** |
|------------------|-------------------------|---------------------------------------------------------|--------------|
|   primaryKeys      | HashMap&lt;String, Object&gt; | Specify the primary keys of the record for the select query. <br>Key Name: **primaryKeys** and respective values to populate primaryKeys map. |     Yes      |

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
category.markForUpload options, new VMXCallback() {
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

 **Parameter**    | **Type**                | **Description**                                            | **Required** |
|------------------|-------------------------|---------------------------------------------------------|--------------|
|   options      | NSDictionary | key: **primaryKeys**. Value: Dictionary containing PK (column name and value). In case of composite PK, the dictionary will contain multiple key-value pairs. |     Yes      |
|   onSuccessCallback     | 	  VMXSuccessCompletionHandler       | The function is invoked when the changes are successfully uploaded to the server.                     |     Yes      |
|   onFailCallback | 	VMXFailureCompletionHandler | The function is invoked when the changes are deferred from uploading the server. | Yes |

#### Options Keys

 **Keys**    | **Type**                | **Description**                                            | **Required** |
|------------------|-------------------------|---------------------------------------------------------|--------------|
|   primaryKeys      | NSDictionary&lt;NSString*, id&gt; | Specify the primary keys of the record to select the query. <br>Key name: **primaryKeys** and value is a dictionary of primary keys. |     Yes      |

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

<blockquote>
<em><b>Note: </b></em>
<ul>
<li>Not supported for Mobile Web, and Desktop Web channels.</li>
</ul>
</blockquote>

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

