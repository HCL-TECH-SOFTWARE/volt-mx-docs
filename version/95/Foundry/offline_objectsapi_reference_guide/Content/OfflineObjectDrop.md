
# VMXFoundry.OfflineObjects.drop

Offline Objects drop function deletes the database schema along with all its data. Success or failure is reported through callbacks provided to the drop API.

## Volt MX Iris (JavaScript)

### Signature

```
VMXFoundry.OfflineObjects.drop(options, successCallback, failureCallback)
```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 64px;"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 32px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: normal;">JSON</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">Drop options such as device database, encryption passphrase and so on.</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: normal;">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">successCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked on success.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">failureCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The&nbsp;function is invoked on an error with the cause of failure as an argument.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

| Option                | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required |
| --------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| deviceDbEncryptionKey | String | Encryption passphrase must be a string of six characters long. For further information, refer [Offline Objects Getting Started Guide](../../../Foundry/offline_objects_gettingstarted/Content/Offline_Objects_Getting_Started.md). <br /><br /> <b>Note:</b> Not applicable for Mobile Web and Desktop Web channels.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | No       |
| deviceDbPath          | String | Device database is created at the given deviceDbPath location. The default Offline Objects database path for Windows Kiosk applications is `C:\Users\User\AppData\Local`. You can use the deviceDbPath option to override the default path. This options helps you to install more than one Offline enabled application by using the Offline Objects database at desired location. <br /><br /> **_Important:_** The default Offline Objects database location for Windows Kiosk is `C:\Users\User\AppData\Local\AppID\Database`. This impacts application upgrades that were built with the earlier versions of the plugin. To retain the existing Offline Objects database, rebuild the Kiosk application with the deviceDbPath option and pass the `C:\Users\User\AppData\Local` location as an input to the setup, reset, and drop APIs.<br> **_Note:_** Not supported for Desktop Native channel. | No       |

### Return Type

void

### Example

```
function successCallback() {
voltmx.print("Application drop success")
}

function failureCallback(error) {
voltmx.print("Application drop failed with error" + error.code);
}

//Decrypt the device database, if encrypted
var options = {
"deviceDbEncryptionKey": "myencryptionpa$$phrase1"
};

VMXFoundry.OfflineObjects.drop(options, successCallback, failureCallback);

```

## Android (Java)

### Signature

```
void <OfflineObjects>.drop(final HashMap<String, object>options, final VMXCallback callback)
```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: normal;">HashMap&lt;String, object&gt;</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">Drop option such as device database, encryption key and so on.</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: normal;">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">callback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VMXCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Application implements onSuccess and onFailure methods of VMXCallback interface.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

#### Drop Options

| Option                | Type   | Description                                                                                                                             | Required |
| --------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| deviceDbEncryptionKey | String | Encryption passphrase must be a string with at least six characters long. Refer Offline Objects Getting Started Guide for more details. | No       |

### Return Type

void

### Example

```
VoltMXClient sdk = new VoltMXClient();
IVoltMXApplicationSync appSync = sdk.getOfflineObjects();

//Decrypt the device database if encrypted
HashMap < String, object > options = new HashMap < String, object > ();
options.put("deviceDbEncryptionKey", "myencryptionpa$$phrase1");
appSync.drop(options, new VMXCallback() {
@Override
public void onSuccess(Object object) {
Log.d("Application DROP", "Application drop Successful");
}

    @Override
    public void onFailure(Object error) {
        OfflineObjectsException e = (OfflineObjectsException) error;
        Log.e("Application DROP", "Application drop failed with error:" + e.getMessage());
    }

});

```

## iOS (Objective C)

### Signature

```
void <OfflineObjects> drop:(NSDictionary *) options onSuccess: VMXSuccessCompletionHandler)OnSuccess  
onFailure:(VMXFailureCompletionHandler)onFailure
```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 256px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: normal;">NSDictionary&lt;NSString*, id&gt;</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">Drop options such as device database, encryption passphrase and so on.</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: normal;">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">onSuccess</td><td class="TableStyle-Basic-BodyE-Column1-Body1">VMXSuccessCompletionHandler</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked on success.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">onFailure</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VMXFailureCompletionHandler</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked on an error with the cause of failure as an argument.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

#### Setup Options

| Option                | Type     | Description                                                                                                                                                                                                                                                           | Required |
| --------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| deviceDbEncryptionKey | NSString | Encryption passphrase must be a string with at least six characters long. For more details, refer [Offline Objects Getting Started Guide.](../../../Foundry/offline_objects_gettingstarted/Content/Offline_Objects_Getting_Started.md) | No       |

### Return Type

void

### Example

```
VMXClient _ sdk = [VMXClient sharedClient];
OfflineObjects _ applicationSync = [sdk getOfflineObjects];

//Decrypt the device database if encrypted
NSMutableDictionary < NSString _ , id > _ Options = [NSMutableDictionary new];
[options setObject: @"myencryptionpa$$phrase1"
forKey: @"deviceDbEncryptionKey"
];

VMXSuccessCompletionHandler onSuccess = ^ void(id object) {
NSLog(@"Application drop successful");
};

VMXFailureCompletionHandler onFailure = ^ void(id object) {
NSLog(@"Application drop failed");
};

[applicationSync drop: options
onSuccess: onSuccess
onFailure: onFailure
];

```
