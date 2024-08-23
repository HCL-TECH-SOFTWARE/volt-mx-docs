
# VMXFoundry.OfflineObjects.startSync

The **VMXFoundry.OfflineObjects.startSync** API performs sync on all the object services published in the Volt MX Foundry application.

<blockquote>
<em><b>Note: </b></em>
<ul>
<li>If sync is performed in an upload cache enabled scenario, cached requests that are timed out in the previous upload session are uploaded before the latest changes.</li>
<li>The client does not handle partial records and expects the server to send the entire record. Full record with all the columns are expected in both upload and download responses. If the backend does not return the full record, use post processor to copy the missing columns from the request as demonstrated here.</li>
<li>removeAfterUpload flag is only applicable for uploadOnly sync type.</li>
<li>removeAfterUpload flag has no effect if it is set to downloadOnly or fullSync types.</li>
<li>removeAfterUpload flag doesn’t clear entire local DB. It deletes the record that are only successfully uploaded during uploadOnly syncType.</li>
<li>Client can do downloadOnly sync to get local deleted records back to local DB.</li>
<li>removeAfterUpload flag is applicable for all three-level sync (app level, obj svc, and obj).</li>
</ul>
</blockquote>

## Volt MX Iris (JavaScript)

<blockquote>
<em><b>Note: </b></em>
<ul>
<li>Supported for Windows from V8 SP4 Fix Pack 6 onwards.</li>
<li>Supported for Mobile Web and Desktop Web channels from V8 SP4 Fix Pack 12 onwards.</li>
</ul>
</blockquote>


### Signature

```
VMXFoundry.OfflineObjects.startSync(options, successCallback, failureCallback, progressCallback)
```

### Input Parameters

<table style="mc-table-style: url]('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;width: 100%;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 64px;"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: normal;">JSON</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">The user can provide options to customize sync behavior. For example, syncMode and objectServicesOptions. For information on supported options, refer to <a href="ObjectService_startSync.html#sync-options" class="selected">Sync Options</a>.</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: normal;">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">successCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked on successful sync with response as an argument. Based on the supplied sync options, the response object includes sync status code, sync stats and so on.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">failureCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked on an error with the cause of failure as an argument upon sync failure.</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: normal;">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">progressCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked on different sync phases along with specific data such as the number of downloaded records and so on. <b>Note:</b> This parameter is only supported for Android, iOS, and Windows channels.</td><td class="TableStyle-Basic-BodyA-Column1-Body1" style="font-weight: normal;">No</td></tr></tbody></table>

#### Sync Options

| Option                | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                 | Required |
| --------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| syncMode              | String | Option to perform object services sync in sequence or parallel. The values could be <br> <code>{<br> "parallel", "sequential"<br>}</code> <br> **_Note:_** Default sync mode is parallel, if not provided in options.                                                                                                                                                                                                   | No       |
| objectServicesOptions | JSON   | The user can provide options to customize sync behavior. For example, Filters, downloadBatchSize and so on. For more details, refer [Sync Options](ObjectService_startSync.md#sync-options) for supported options and [Offline Objects Getting Started](../../../Foundry/offline_objects_gettingstarted/Content/Offline_Objects_Getting_Started.md) guide. | No       |
| removeAfterUpload | Array (list of objects)   | removeAfterUpload flag removes the entries from local DB once upload is successful to backend DB. This flag is passed as option parameter to startSync function as part of sync options. | No       |


#### Success Callback Response

| Success Object Keys | Type | Description                                                                                 |
| ------------------- | ---- | ------------------------------------------------------------------------------------------- |
| successResponse     | JSON | It contains object service name as keys and object service sync success response as values. |

#### Failure Callback Error

| Failure Object Keys | Type | Description                                                                                 |
| ------------------- | ---- | ------------------------------------------------------------------------------------------- |
| successResponse     | JSON | It contains object service name as keys and object service sync success response as values. |
| failureResponse     | JSON | It contains object service name as keys and object service sync failure response as values. |

### Return Type

void

### Example

```
var options = {};
var organizationUploadRequestQueryParams = {
"LocationID": "32001",
"SiteID": "2"
};
var organizationOptions = {
"getSyncStats": "true",
"uploadBatchSize": "200",
"uploadRequestQueryParams": organizationUploadRequestQueryParams,
"syncType": "uploadOnly"
};
options.syncMode = "parallel";
options.objectServicesOptions = {
" Organization": organizationOptions
};

VMXFoundry.OfflineObjects.startSync(options, onSuccess, onFailure, onProgress);

function onSuccess(response) {
voltmx.print("Application Sync success: " + JSON.stringify(response.successResponse));
}

function onFailure(error) {
voltmx.print("Application Sync failed with error: " + JSON.stringify(error.failureResponse));
}

function onProgress(object) {
voltmx.print("Application Sync progress event received" + JSON.stringify(object));
}
```

### removeAfterUpload Example

```
var appLevelOptions = {
  "syncType": "uploadOnly"
};
var syncOptions = {};
syncOptions.objectServicesOptions = {
  "<ObjSvc>": appLevelOptions,
};
syncOptions.removeAfterUpload = [<list of objects>];
syncOptions.isUploadCacheEnabled=true;
voltmx.sdk.OfflineObjects.startSync(syncOptions, onSuccess, onFailure, onProgress);
function onSuccess(response)
{     //Handle sync success response. }
function onFailure(error)
{     //Handle sync failure response. }
function onProgress(object)
{     //Handle sync progress response. }
```




## Android (Java)

### Signature

```
void <OfflineObjects>.startSync(final HashMap<String, Object\> options, final VMXCallback syncCallback, final VMXProgressCallback voltmxSyncProgressCallback)
```

### Parameters

<table style="mc-table-style: url]('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;width: 100%;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 62px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 270px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Type</b></td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: normal;">HashMap&lt;String, Object&gt;</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">The user can provide options to customize sync behavior. For <b>example</b>, syncMode and objectServicesOptions. For supported options, refer <a href="ObjectService_startSync.html#sync-options">Sync Options</a>.</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: normal;">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">syncCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">VMXCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The application implements onSuccess and onFailure methods of VMXCallback interface.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">voltmxSyncProgressCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VMXProgressCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Application implements onProgress method of VMXProgressCallback interface if progress callback is supplied.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

#### Sync Options

| Option                | Type                    | Description                                                                                                                                                                                                                                                                                                                                                                                 | Required |
| --------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| syncMode              | String                  | Option to perform object services sync in sequence or parallel.  The values could be <br> <code>{<br> "parallel", "sequential"<br>}</code> <br> **_Note:_** Default sync mode is parallel, if not provided in options.                                                                                                                                                                                                   | No       |
| objectServicesOptions | HashMap<String, Object\> | The user can provide options to customize sync behavior. For example, Filters, downloadBatchSize and so on. For more details, refer [Sync Options](ObjectService_startSync.md#sync-options) for supported options and [Offline Objects Getting Started](../../../Foundry/offline_objects_gettingstarted/Content/Offline_Objects_Getting_Started.md) guide. | No       |

#### Success Callback Response

| Success Object Keys | Type                    | Description                                                                                 |
| ------------------- | ----------------------- | ------------------------------------------------------------------------------------------- |
| successResponse     | HashMap<String, Object\> | It contains object service name as keys and object service sync success response as values. |

#### Failure Callback Error

| Failure Object Keys | Type                    | Description                                                                                                                                                                                                                                                                                                                 |
| ------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| userInfo            | HashMap<String, Object\> | It contains HashMaps with keys **successResponse** and **failureResponse**. **successResponse** contains HashMap of object service name as keys and object service sync success response as values. **failureResponse** contains HashMap of object service name as keys and object service sync failure response as values. |

### Return Type

void

### Example

```
try {
VoltMXClient sdk = new VoltMXClient();
IVoltMXApplicationSync appSync = sdk.getOfflineObjects();
HashMap < String, Object > objectServicesOptions = new HashMap < String, Object > ();
HashMap < String, Object > organizationOptions = new HashMap < String, Object > ();
HashMap < String, String > organizationUploadRequestQueryParams = new HashMap < String, String > ();
organizationOptions.put("uploadBatchSize", "100");
organizationOptions.put("getSyncStats", "true");
organizationOptions.put("syncType", "uploadOnly");
organizationUploadRequestQueryParams("LocationID", "32001");
organizationUploadRequestQueryParams("SiteID", "2");
organizationOptions.put("uploadRequestQueryParams", organizationUploadRequestQueryParams);
HashMap < String, Object > options = new HashMap < > ();
options.put("syncMode", "parallel");
objectServicesOptions.put("Organization", organizationOptions);
options.put("objectServicesOptions", objectServicesOptions);

    appSync.startSync(options, new VMXCallback() {
            @Override
            public void onSuccess(Object object) {
                HashMap < String, Object > result = (HashMap < String, Object > ) object;
                Log.d("ObjectServiceSync", "ObjectService sync successful." + result.get("successResponse"));
            }
            @Override
            public void onFailure(Object error) {
                OfflineObjectsException e = (OfflineObjectsException) error;
                Log.e("ObjectServiceSync", "ObjectService sync
        failed with error: " + e.getMessage());
            }
        },
        new VMXProgressCallback() {
            @Override
            public void onProgress(Object object) {
                Log.d("ObjectServiceSync", "ObjectService sync progress event received");
            }
        });

} catch (Exception e) {
Log.e("ObjectServiceSync", "ObjectService sync failed with error:" + e.getMessage());
}
```

## iOS (Objective C)

### Signature

```
(void) <OfflineObjects>startSync:(NSDictionary<NSString _, id> _)options
onSuccess:(VMXSuccessCompletionHandler)onSuccess
onFailure:(VMXFailureCompletionHandler)onFailure
onProgress:(VMXProgressCompletionHandler)onProgress;

```

### Parameters

| Parameter  | Type                           | Description                                                                                                                                                                                          | Required |
| ---------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| options    | NSDictionary<NSString\*, id\>\* | The user can provide options to customize sync behavior. For **example**, syncMode and objectServicesOptions. Refer [Sync Options](ObjectService_startSync.md#sync-options) for supported options. | Yes      |
| onSuccess  | VMXSuccessCompletionHandler    | The function is invoked on successful sync.                                                                                                                                                          | Yes      |
| onFailure  | VMXFailureCompletionHandler    | The function is invoked on sync failure.                                                                                                                                                             | Yes      |
| onProgress | VMXProgressCompletionHandler   | The function is invoked on sync progress events.                                                                                                                                                     | Yes      |

#### Sync Options

| Option                | Type                         | Description                                                                                                                                                                                                                                                                                                                                                                                  | Required |
| --------------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| syncMode              | String                       | Option to perform object services sync in sequence or parallel.  The values could be <br> <code>{<br> "parallel", "sequential"<br>}</code> <br>**_Note:_** Default sync mode is parallel, if not provided in options.                                                                                                                                                                                                     | No       |
| objectServicesOptions | NSDictionary<NSString\*, id> | The user can provide options to customize sync behavior. For example, Filters, downloadBatchSize, and so on. For more details, refer [Sync Options](ObjectService_startSync.md#sync-options) for supported options and [Offline Objects Getting Started](../../../Foundry/offline_objects_gettingstarted/Content/Offline_Objects_Getting_Started.md) guide. | Yes      |

#### Sync Callback Response

| Success Object Keys | Type                           | Description                                                                                  |
| ------------------- | ------------------------------ | -------------------------------------------------------------------------------------------- |
| successResponse     | NSDictionary<NSString\*, id\>\* | It contains object service names as keys and object service sync success response as values. |

#### Failure Callback Error

| Failure Object Keys | Type                            | Description                                                                                                                                                                                                                                                                                                                                      |
| ------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userInfo            | NSDictionary <NSString\*, id\>\* | It contains NSDictionaries with keys **successResponse** and **failureResponse** keys. **successResponse** contains NSDictionary of object service name as keys and object service sync success response as values. **failureResponse** contains NSDictionary of object service name as keys and object service sync failure response as values. |

### Return Type

void

### Example

```
NSError _ error;
VMXClient _ sdk = [VMXClient sharedClient];
OfflineObjects \* applicationSync = [sdk getOfflineObjects];

VMXSuccessCompletionHandler onSuccess = ^ void(id object) {
//Operation to be performed on successful sync.
};
VMXFailureCompletionHandler onFailure = ^ void(id object) {
//Operation to be performed on sync failure.
};
VMXProgressCompletionHandler onProgress = ^ void(id object) {
//Operation to be performed on sync progress.
};
NSDictionary _ uploadRequestQueryParams = @ {@
"LocationID": @“32001”,
@"SiteID": @"2"
};
NSDictionary _ filters = @ {@
"Employee": @"EmployeeID eq 2",
@"Department": @"Name eq ‘Human Resource’"
};
NSDictionary _ syncOptions = @ {@
"uploadRequestQueryParams": uploadRequestQueryParams,
@"filter": filters,
@"downloadBatchSize": @"100",
@"uploadBatchSize": @"200",
@"getSyncStats": @"true",
@"syncType": @"fullSync"
};
NSDictionary _ objectServicesOptions = @ {@
"Organization": syncOptions
}
[applicationSync startsync: @{@
"syncMode": "parallel",
@"objectServicesOptions": objectServicesOptions
}
onSuccess: onSuccess
onFailure: onFailure
onProgress: onProgress
];

```
