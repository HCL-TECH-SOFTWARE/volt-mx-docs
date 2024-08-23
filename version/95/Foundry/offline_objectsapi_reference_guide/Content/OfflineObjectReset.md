
# VMXFoundry.OfflineObjects.reset

Offline objects reset function resets device database to the initial stage of the sync environment. Once the reset is successful, all data is removed from the database but the database table structure is preserved.

> **_Note:_** Reset requires network connection, and it fetches the latest Volt MX Foundry app schema.

## Volt MX Iris (JavaScript)

### Signature

```
VMXFoundry.OfflineObjects.reset(options, successCallback, failureCallback)
```

### Input Parameters

<table style="mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;width: 100%;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 64px;"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: normal;">JSON</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">Reset options such as device database, encryption passphrase and so on.</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: normal;">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">successCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked on successful reset.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">failureCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked on an error with the cause of failure as an argument.</td><td>Yes</td></tr></tbody></table>

#### Setup Options

| Option                           | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Required |
| -------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| deviceDbEncryptionKey            | String  | Encryption passphrase must be a string with at least six characters long. For more information, refer [Offline Objects Getting Started Guide](../../../Foundry/offline_objects_gettingstarted/Content/Offline_Objects_Getting_Started.md). <br><b>Note:</b> Not applicable for Mobile Web and Desktop Web channels.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | No       |
| deviceDbPath                     | String  | Device database is created at the given deviceDbPath location. The default Offline Objects database path for Windows Kiosk applications is `C:\Users\User\AppData\Local`. You can use the deviceDbPath option to override the default path. This options helps you to install more than one Offline enabled application by using the Offline Objects database at desired location. <br> **_Important:_** The default Offline Objects database location for Windows Kiosk is `C:\Users\User\AppData\Local\AppID\Database`. This impacts application upgrades that were built with the earlier versions of plugin. To retain the existing Offline Objects database, rebuild the Kiosk application with the deviceDbPath option and pass the **C:\\Users\\User\\AppData\\Local** location as an input to the setup, reset, and drop APIs.<br> **_Note:_**  Not supported for Desktop Native channel. | No       |
| treatBooleanFieldValuesAsNumeric | Boolean | If the **treatBooleanFieldValuesAsNumeric** key is set to false, all the boolean field values are converted to boolean type (true or false) during upload session or on reading records from local device database. When the option is set to true, fallbacks to default implementation (uploading and reading boolean field values as numeric). By default, the key is set to True.                                                                                                                                                                                                                                                                                                                                                                                                                                                 | No       |

### Return Type

void

### Error Codes

<table style="mc-table-style: url('Resources/TableStyles/Basic.css');border-top-left-radius: 0px;border-top-right-radius: 0px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;border-left-style: solid;border-left-width: 2px;border-left-color: #a9a9a9;border-right-style: solid;border-right-width: 2px;border-right-color: #a9a9a9;border-top-style: solid;border-top-width: 2px;border-top-color: #a9a9a9;border-bottom-style: solid;border-bottom-width: 2px;border-bottom-color: #a9a9a9;margin-left: 0;margin-right: auto;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Error Code</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyD-Column1-Body1">Error Text</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">106</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Claims token is unavailable.</td></tr></tbody></table>

### Example

```
function successCallback(status) {
voltmx.print("Application reset successful");
}

function failureCallback(error) {
voltmx.print("Application reset failed with error:" + error.code);
}

//Decrypt and re encrypt the device database
Var options = {
"deviceDbENcryptionKey": "myencryptionpa$$phrase1"};
VMXFoundry.OfflineObjects.reset(options,successCallback, failureCallback);

```

## Android (Java)

### Signature

```
void <OfflineObjects>.reset(final HashMap<String, object>options, final VMXCallback callback)

```

### Parameters

<table style="mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;width: 100%;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 150px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 223px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 270px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Type</b></td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: normal;">HashMap&lt;String, object&gt;</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">Reset options such as device database, encryption passphrase and so on.</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: normal;">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">callback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VMXCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Application implements onSuccess and onFailure methods of VMXCallback interface.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

#### Reset Options

| Option                           | Type    | Description                                                                                                                                                                                                                                                                                                                                                                          | Required |
| -------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| deviceDbEncrytionKey             | String  | Encryption passphrase must be a string with at least six characters long. For more information, refer [Offline Objects Getting Started Guide](../../../Foundry/offline_objects_gettingstarted/Content/Offline_Objects_Getting_Started.md).                                                                                                            | No       |
| treatBooleanFieldValuesAsNumeric | Boolean | If the **treatBooleanFieldValuesAsNumeric** key is set to false, all the boolean field values are converted to boolean type (true or false) during upload session or on reading records from local device database. When the option is set to true, fallbacks to default implementation (uploading and reading boolean field values as numeric). By default, the key is set to True. | No       |

### Return Type

void

### Error Codes

<table style="mc-table-style: url('Resources/TableStyles/Basic.css');border-top-left-radius: 0px;border-top-right-radius: 0px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;border-left-style: solid;border-left-width: 2px;border-left-color: #a9a9a9;border-right-style: solid;border-right-width: 2px;border-right-color: #a9a9a9;border-top-style: solid;border-top-width: 2px;border-top-color: #a9a9a9;border-bottom-style: solid;border-bottom-width: 2px;border-bottom-color: #a9a9a9;margin-left: 0;margin-right: auto;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Error Code</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyD-Column1-Body1">Error Text</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">106</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Claims token is unavailable.</td></tr></tbody></table>

### Example

```
VoltMXClient sdk = new VoltMXClient();
IVoltMXApplicationSync appSync = sdk.getOfflineObjects();

//Decrypt and re-encrypt the device database
HashMap < String, object > options = new HashMap < String, object > ();
options.put("deviceDbEncryptionKey", "myencryptionpa$$phrase1");
appSync.reset(options, new VMXCallback() {
@Override
public void onSuccess(Object object) {
Log.d("Application Reset", "Application reset successful");

    }

    @Override
    public void onFailure(Object error) {
        OfflineObjectsException e = (OfflineObjectsException) error;
        Log.e("Application Reset", "Application reset failed with error :" + e.getMessage());

    }

});

```

## iOS (Objective C)

### Signature

```
void <OfflineObjects> reset: (NSDictionary *)options  
onSuccess:(VMXSuccessCompletionHandler)onSuccess  
onFailure:(VMXFailureCompletionHandler)onFailure

```

### Parameters

<table style="mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;width: 100%;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 134px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 222px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 279px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 103px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: normal;">NSDictionary&lt;NSString*,id&gt;</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">Reset options such as device database, encryption passphrase and so on.</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: normal;">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">onSuccess</td><td class="TableStyle-Basic-BodyE-Column1-Body1">VMXSuccessCompletionHandler</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function invoked on successful reset.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">onFailure</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VMXFailureCompletionHandler</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked on reset failure with the cause of failure as an argument.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

#### Reset Options

| Option                           | Type     | Description                                                                                                                                                                                                                                                                                                                                                                          | Required |
| -------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| devcieDbEncryptionKey            | NSString | Encryption passphrase must be at least six characters long. For more information, refer [Offline Objects Getting Started Guide](../../../Foundry/offline_objects_gettingstarted/Content/Offline_Objects_Getting_Started.md).                                                                                                                          | No       |
| treatBooleanFieldValuesAsNumeric | Boolean  | If the **treatBooleanFieldValuesAsNumeric** key is set to false, all the boolean field values are converted to boolean type (true or false) during upload session or on reading records from local device database. When the option is set to true, fallbacks to default implementation (uploading and reading boolean field values as numeric). By default, the key is set to True. | No       |

### Return Type

void

### Error Codes

<table style="mc-table-style: url('Resources/TableStyles/Basic.css');border-top-left-radius: 0px;border-top-right-radius: 0px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;border-left-style: solid;border-left-width: 2px;border-left-color: #a9a9a9;border-right-style: solid;border-right-width: 2px;border-right-color: #a9a9a9;border-top-style: solid;border-top-width: 2px;border-top-color: #a9a9a9;border-bottom-style: solid;border-bottom-width: 2px;border-bottom-color: #a9a9a9;margin-left: 0;margin-right: auto;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Error Code</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyD-Column1-Body1">Error Text</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">106</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Claims token is unavailable.</td></tr></tbody></table>

### Example

```
VMXClient * sdk = [VMXClient sharedClient];

OfflineObjects * applicationSync = [sdk getOfflineObjects];

//Decrypt and re-encrypt the device database
NSMutableDictionary < NSString _ , id > _ options = [NSMutableDictionary new];
[options setObject: @"myencryptionpa$$phrase1"
forKey: @"deviceDbEncryptionKey"
];

VMXSuccessCompletionHandler onSuccess = ^ void(id object) {
NSLog(@"Application reset successful");
};

VMXFailureCompletionHandler onFailure = ^ void(id object) {
NSLog(@"Application reset failed");
};

[applicationSync reset: options
onSuccess: OnSuccess
onFailure: onFailure
];

```
