

<object\>.clearOfflineData
=========================

The **<object\>.clearOfflineData** API clears the offline data persisted in the object tables and associated sync context. As the sync context is cleared, the next sync on this object fetches complete data from the server.

The **primaryKeys** parameter clears a particular record from the local database and the changes do not reflect in backend after synchronization.

> **Note:**  
*   The clearOfflineData API is considered as device only operation. Deleted records are neither tracked nor sent to the server as part of next sync session.  
*   This API clears the data of the object without clearing any references to the foreign key relationships of the object.  

Volt MX  Iris (JavaScript)
-------------------------------

> **_Note:_** This API is supported for Android, iOS, Mobile Web, and Desktop Web channels.

### Signature

```
VMXObj.clearOfflineData(options, successCallback, failureCallback)
```

### Parameters

  
| Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| options | JSON | It is a dictionary. It contains a key called **primaryKeys** that contains the column name and the value. In case of a composite primary key, the dictionary contains multiple key-value pairs to clear a record. Otherwise, **{}** or **null** is passed as a value to clear all the records. | Yes |
| successCallback | Function | The successCallback function is invoked after successfully clearing the offline data of the object. | Yes |
| failureCallback | Function | The failureCallback function is invoked on an error with the cause of failure as an argument. | Yes |

**Options**:

  
| Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| primaryKeys | JSON | Specify the primary keys of the record to be cleared. **Key Name**: primaryKeys and **values** are column names and their respective values. | Yes |

### Return Type

void

### Example

Sample code to clear an object

```
try {
    var orgObject = new voltmx.sdk.VMXObj("CATEGORY");
    var options = {};
    orgObject.clearOfflineData(options, onSuccess, onFailure);

    function onSuccess() {
        voltmx.print("Successfully cleared offline data for the object: " + objectName);
    }

    function onFailure(error) {
        voltmx.print("Failed to clear offline data in the object: " + objectName + ". Error: " + JSON.stringify(error);
        }
    } catch (Exception e) {
        voltmx.print("An exception occurred while trying to execute clearOfflineData API. Exception:" + e);
    }
```

Sample code to clear a record with a primary key

```
var category = new voltmx.sdk.VMXObj("CATEGORY");
var options = {};
var primaryKeys = {};
primaryKeys["category _key"] = "1234";
options["primaryKeys"] = primaryKeys;

function successCallback(response) {
    //response holds the value true
}

function errorCallback(error) {
    voltmx.print("ClearData failed with an error: " + JSON.stringify(error));
}
category.clearOfflineData(options, successCallback, errorCallback);
```

Android (Java)
--------------

### Signature

```
void <VMXObj>.clearOfflineData(final HashMap<String, Object> options, final VMXCallback callback)
```

### Parameters

  
| Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| options | JSON | It is a dictionary. It contains a key called **primaryKeys** that contains the column name and the value. In case of a composite primary key, the dictionary contains multiple key-value pairs to clear a record. Otherwise, **{}** or **null** is passed as a value to clear all the records. | Yes |
| successCallback | Function | The successCallback function is invoked after successfully clearing the offline data of the object. | Yes |
| failureCallback | Function | The failureCallback function is invoked on an error with the cause of failure as an argument. | Yes |

**Options**:

  
| Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| primaryKeys | JSON | Specify the primary keys of the record to be cleared. **Key Name**: primaryKeys and **values** are column names and their respective values. | Yes |

### Return Type

void

### Example

Sample code to clear an object

```
try {
    VMXObj orgObject = new VMXObj("CATEGORY");
    orgObject.clearOfflineData(null, newVMXCallback() {
        @Override
        public void onSuccess(Object object) {
            Log.d("ObjectSync", "Cleared offline data for Object .");
        }
  	 @Override 
        public void onFailure(Object error) {
            OfflineObjectsException e = (OfflineObjectsException) error;
            Log.e("ObjectSync", "Failed to clear offline data with exception: " + e.getMessage());
        }
    });
} catch (Exception e) {
    Log.e("ObjectSync", "Failed to clear offline data with exception:" + e.getMessage());
}
```

Sample code to clear a record with a primary key

```
// Clear record with a primary key 
VMXObj category = new VMXObj("CATEGORY");
HashMap < String, Object > options = new HashMap < > ();
HashMap < String, Object > primaryKeys = new HashMap < > ();
primaryKeys.put("CATEGORY_ID", "123");
options.put("primaryKeys", primaryKeys);

try
category.clearOfflineData(options, new VMXCallback() {
    @Override
    public void onSuccess(Object object) {
        Log.d("Clear Object", "Record cleared for the category");
    }
    @Override
    public void onFailure(object error) {
        OfflineObjectsException e = (OfflineObjectsException) error;
        Log.e("Clear Object", "Failed to clear the record for the category with an error :" + e.getMessage());
    }
});
} catch (Exception e) {
    Log.e("Clear Object", "Failed to clear the record for the category with an error :" + e.getMessage());
    e.printStackTrace();
}
public void onSuccess(Object object) {}
@Override 
public void onFailure(object error) {}
});
```

iOS (Objective C)
-----------------

### Signature

```
void <object>.clearOfflineData:(NSDictionary <NSString *, id> *)options	
onSuccess:(VMXSuccessCompletionHandler)onSuccess
onFailure:(VMXFailureCompletionHandler)onFailure
```

### Parameters

  
| Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| options | NSDictionary | It is a dictionary. It contains a key called **primaryKeys** that contains the column name and the value. In case of a composite primary key, the dictionary contains multiple key-value pairs to clear a record. Otherwise, **{}** or **null** is passed as a value to clear all the records. | Yes |
| onSuccess | VMXSuccessCompletionHandler | The onSuccess function is invoked on successful deletion of records. | Yes |
| onFailure | VMXFailureCompletionHandler | The onFailure function is invoked on an error with the cause of failure as an argument. | Yes |

**Options**:

  
| Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| primaryKeys | JSON | Specify the primary keys of the record to be cleared. **Key Name**: primaryKeys and **values** are column names and their respective values. | Yes |

### Return Type

void

### Example

Sample code to clear an object

```
OfflineObjectsError * error = nil;
NSDictionary * options = @ {};
VMXObj * orgObject = [
    [VMXObj alloc] initWithName: @"category "
    error: & error
];
[orgObject clearOfflineData: options
    onSuccess: ^ (id object) {
        NSLog(@"Clearing offline data successful for the categoryObject!");
    }
    onFailure: ^ (id object) {
        OfflineObjectsError * error = (OfflineObjectsError * )
        object;
        NSLog(@"Unable to clear offline data for the category due to an error: %@", [error description]);
    }
];

```

Sample code to clear a record with a primary key

```
VMXObj * _categories = [
    [VMXObj alloc] initWithName: @"CATEGORY"
    error: & error
];
NSMutableDictionary * options = [NSMutableDictionary new];
NSMutableDictionary * primaryKeys = [NSMutableDictionary new];
primaryKeys[@"CATEGORY_ID"] = @"112";
options[@"primaryKeys"] = primaryKeys;
[_categories clearOfflineData: options
    onSuccess: ^ (id object) {
        NSLog(@"Cleared successfully");
    }
    onFailure: ^ (id object) {
        OfflineObjectsError * error = (OfflineObjectsError) object;
        NSLog(@"Failed to clear the record with an error %@", [error.userInfo localizedDescription]);
    }
];
```
