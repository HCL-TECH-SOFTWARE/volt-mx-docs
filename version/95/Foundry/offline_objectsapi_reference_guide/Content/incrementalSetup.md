

# VMXFoundry.OfflineObjects.incrementalSetup

The Offline Objects **incrementalSetup** API allows the client application to consume the latest changes made to Volt MX Foundry app’s object services schema after a particular timestamp, without breaking the existing functionality. Similar to setup API, **incrementalSetup** API is also an application-level API with same method arguments.

> **_Note:_** Either **setup** or **incrementalSetup** API must be invoked on first time launch of the app.

**Scenarios that are supported in incrementalSetup:**

-   Addition and deletion of the objects in an Object Service.
-   Update operations on objects in an Object Service as:
    - Addition and deletion of new non-primary key columns.
    - Update properties like nullable, unique, and auto generated on non-primary key attributes.
    - Update change tracking parameters like attributes for identifying a soft delete and change tracking timeStamp field.
    > **_Note:_** If the **timeStamp** attribute is not linked to an object field, the incremental sync and delete operations will fail for records associated with that object.

Unsupported scenarios include:

- Addition, deletion, or any update on primary key attributes.
- Update attribute properties such as data type and length.

## Volt MX Iris (JavaScript)

> **_Note:_** Not supported for the Windows channel.

### Signature

```
VMXFoundry.OfflineObjects.incrementalSetup(options, onSuccess, onFailure)
```

### Parameters

| Parameter       | Type     | Description                                           | Required |
| --------------- | -------- | ----------------------------------------------------- | -------- |
| options         | JSON     | Options based on which incrementalSetup is performed. | Yes      |
| SuccessCallback | Function | Callback invoked upon successful incremental setup.   | Yes      |
| FailureCallback | Function | Callback invoked upon unsuccessful incremental setup. | Yes      |

#### incrementalSetup Options

| Parameter                        | Type    | Description                                                                                                                                                                                                                                                                                                                                                                          | Required                                                         |
| -------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| deviceDbEncryptionKey            | String  | password                                                                                                                                                                                                                                                                                                                                                                             | No (it is mandatory if encrypted in previous application setup). |
| treatBooleanFieldValuesAsNumeric | Boolean | If the **treatBooleanFieldValuesAsNumeric** key is set to false, all the boolean field values are converted to boolean type (true or false) during upload session or on reading records from local device database. When the option is set to true, fallbacks to default implementation (uploading and reading boolean field values as numeric). By default, the key is set to True. | No                                                               |

### Example

```
function onSuccess(result) {
//Operation to be performed on successful incremental Setup.
}

function onFailure(err) {
//Operation to be performed on unsuccessful incremental Setup.
}

try {
var options;
var mfInstance = voltmx.sdk.getCurrentInstance();
mfInstance.OfflineObjects.incrementalSetup(options, onSuccess, onFailure);
} catch (err) {
alert("Exception in incremental setup " + err);
}
```

## Android (Java)

### Signature

```
void <OfflineObjects>.incrementalSetup(final HashMap<String, Object> options, final VMXCallback syncCallback)
```

### Parameters

| Parameter    | Type                    | Description                                           | Required |
| ------------ | ----------------------- | ----------------------------------------------------- | -------- |
| options      | Hashmap<String, Object\> | Options based on which incrementalSetup is performed. | Yes      |
| syncCallback | VMXCallback             | Takes onSuccess and onFailure methods.                | Yes      |

#### incrementalSetup Options

| Parameter                        | Type    | Description                                                                                                                                                                                                                                                                                                                                                                          | Required                                                         |
| -------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| deviceDbEncryptionKey            | String  | password                                                                                                                                                                                                                                                                                                                                                                             | No (it is mandatory if encrypted in previous application setup). |
| treatBooleanFieldValuesAsNumeric | Boolean | If the **treatBooleanFieldValuesAsNumeric** key is set to false, all the boolean field values are converted to boolean type (true or false) during upload session or on reading records from local device database. When the option is set to true, fallbacks to default implementation (uploading and reading boolean field values as numeric). By default, the key is set to True. | No                                                               |

### Example

```
try {

    VoltMXClient client = new VoltMXClient();
    HashMap < String, Object > options = null;
    IVoltMXApplicationSync appSync = client.getOfflineObjects();
    appSync.incrementalSetup(options, new VoltMXSyncCallback() {
        @Override
        public void onSuccess(Object object) {
            Log.d("Incremental Setup", "Incremental Setup Succeeded");
            //operation to be performed on successful incremental setup.
        }

        @Override
        public void onFailure(VoltMXException voltmxException) {
            Log.e("Incremental Setup", "Incremental Setup failed with Exception :" + voltmxException.getMessage());
            voltmxException.getStackTrace();
            //operation to be performed on failed incremental setup.
        }

    });

} catch (Exception e) {
Log.e("Exception in incremental setup" + e.getMessage());
}
```

## iOS (Objective C)

### Signature

```
(void) < OfflineObjects > .incrementalSetup: (NSDictionary < NSString _ , id > _ ) options
onSuccess: (VMXSuccessCompletionHandler) onSuccess
onFailure: (VMXFailureCompletionHandler) onFailure
```

### Parameters

| Parameter | Type                        | Description                                                | Required |
| --------- | --------------------------- | ---------------------------------------------------------- | -------- |
| options   | NSDictionary                | Options based on which incrementalSetup is performed.      | Yes      |
| onSuccess | VMXSuccessCompletionHandler | The function is invoked on successful incremental setup.   | Yes      |
| onFailure | VMXFailureCompletionHandler | The function is invoked on unsuccessful incremental setup. | Yes      |

#### incrementalSetup Options

| Parameter                        | Type     | Description                                                                                                                                                                                                                                                                                                                                                                          | Required                                                         |
| -------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| deviceDbEncryptionKey            | NSString | password                                                                                                                                                                                                                                                                                                                                                                             | No (it is mandatory if encrypted in previous application setup). |
| treatBooleanFieldValuesAsNumeric | Boolean  | If the **treatBooleanFieldValuesAsNumeric** key is set to false, all the boolean field values are converted to boolean type (true or false) during upload session or on reading records from local device database. When the option is set to true, fallbacks to default implementation (uploading and reading boolean field values as numeric). By default, the key is set to True. | No                                                               |

### Example

```
NSError _ error;
VMXClient _ client = [VMXClient sharedClient];
VMXApplicationSync * applicationSync = [client getOfflineObjects];

VMXSuccessCompletionHandler onSuccess = ^ void(id object) {
NSLog(@"incremental Setup successful");
};

VMXFailureCompletionHandler onFailure = ^ void(id object) {
NSLog(@"incremental Setup failed");
};

NSDictionary < NSString _ , id > _ options = nil;

[applicationSync incrementalSetup: options
onSuccess: onSuccess
onFailure: onFailure
];
```
