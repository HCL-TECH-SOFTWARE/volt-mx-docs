

<objectService\>.startSync
=========================

The **<objectService\>.startSync** API performs sync for all objects under the object service.

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

Volt MX  Iris (JavaScript)
-------------------------------

### Signature

```
VMXObjSvc.startSync(syncOptions, successCallback, failureCallback, progressCallback)
```

### Parameters

<table style="mc-table-style: url]('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;width: 100%;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 122px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 786px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">syncOptions</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The&nbsp;user can provide options to customize sync behavior. For example, <span>Filters, downloadBatchSize etc, Refer </span><a href="#Sync" class="selected">Sync Options</a><span> for supported options. Refer </span><a href="../../../Foundry/offline_objects_gettingstarted/Content/Offline_Objects_Getting_Started.html" target="_blank">Offline Objects Getting Started guide</a><span> for more details.</span></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">successCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked on successful sync with response as an argument. Response object includes sync status code, sync stats etc based on the supplied sync options.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">failureCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked on an error with the cause of failure as an argument upon Sync failure.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">progressCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked on different sync phases along with phase specific data such as the number of records downloaded etc. Refer <a href="../../../Foundry/offline_objects_gettingstarted/Content/Offline_Objects_Getting_Started.html" target="_blank">Offline Objects Getting Started guide</a> for more details about sync progress events. <span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor"><br>Note: </span></i></b></span></span>Not applicable for Mobile Web, Desktop Web and Desktop Native channels. If the app developer passes this parameter in the options for those channels, it will be ignored.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">No</td></tr></tbody></table>


#### Sync Options

| Option                | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                 | Required |
| --------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| filter              | JSON | 	The filter is a valid OData filter string that allows downloading specific records based on the supplied criteria. When the sync is performed at object service-level, filters are supplied for all objects/entities of that service for which filter criteria needs to be applied as a key-value pair (object name, OData filter string) as shown in the sample code. All records are downloaded for those objects with no or invalid OData filter.| No       |
| downloadBatchSize | Number/String)   | downloadBatchSize option defines record based batching in downloads. Care should be taken to provide appropriate batch size (number of records) based on backend’s ability to support the same. downloadBatchsize is 500 (records) by default . | No       |
| uploadBatchSize | Number/String   | uploadBatchSize option defines record based batching in uploads. uploadBatchSize is 50 (records), by default. Default batch size is assumed if the supplied value is <=0. | No       |
| getSyncStats | String   | The getSyncStats option is used to get sync stats information through sync success callback. This option takes two values **true** or **false**. Sync stats information is not returned to the user if the getSyncStats option is not supplied or set to **false** or an invalid value. | No |
| syncType | String   | **downloadOnly** will download the changes from the server. Change on the client side will not be pushed to the sever.**uploadOnly** will upload the changes from the client device to the server. Changes on the server will not be downloaded.**fullSync** will perform both upload and download from the client device to the server and vice-versa. **_Note_**: Sync will move to the error state, if any other value is provided other than the above mentioned values.If sync type is not selected, full sync is performed by default. | No  |
| uploadRequestQueryParams | JSON   | The uploadRequestQueryParams option is used to pass the query parameters in upload network requests.<br><b>Note : </b>This parameter is not supported for Desktop Native channel.| No  |
| downloadRequestQueryParams | JSON   | The downloadRequestQueryParams is used to pass the query parameters in download network requests.<br><b>Note : </b>This parameter is not supported for Desktop Native channel.| No  |
| downloadReconciliationRequired | Boolean   | This parameter specifies if download reconciliation is required or not. Download reconciliation is used to compare primary keys present in backend with application database primary keys for an object. In scenarios where there are no pending edits, it is advisable to perform startSync by setting **downloadReconciliationRequired** to **false** (as in the case of initial sync). **downloadReconciliationRequired** is set to **true**, by default.<br><b>Note : </b>This parameter is not supported for Desktop Native channel.| No  |
| preserveBatchContext | Boolean   | 	**preserveBatchContext** specifies whether to preserve the batchContext of last successful download batch. If batchContext is preserved, the successive download call resumes from the last successful batch, else it starts from the first batch again. Set the option to **True**, to resume the download from last successful batch. Set the option to **False**, to start downloading from the first batch. **preserveBatchContext** is set to false, by default. **_Note_:** This parameter is not supported for Windows, Mobile Web, and Desktop Web channels.<br><b>Note : </b>This parameter is not supported for Windows, Mobile Web, Desktop Web and Desktop Native channels.| No  |
| removeAfterUpload | Array (list of objects)   | removeAfterUpload flag removes the entries from local DB once upload is successful to backend DB. This flag is passed as option parameter to startSync function as part of sync options. | No       |


### Return Type

void

### Example

```
function successCallback(object) {
    //Handle sync success response.
}

function failureCallback(error) {
    //Handle sync failure response.
}

function progressCallback(object) {
    //Handle sync progress response.
}
try {

    var syncObject = new voltmx.sdk.VMXObjSvc("Organization");
    var syncOptions = {};

    //Set uploadRequestQueryParams to be sent during sync in syncOptions.    
    syncOptions.uploadRequestQueryParams = {
        "LocationID": "32001",
        "SiteID": "2"
    };

    //Set filters to be applied during download on multiple objects
    syncOptions.filter = {
        "Employee": "EmployeeID eq 2",
        "Department": "Name eq 'Human Resource'"
    };

    //Set upload BatchSize.
    syncOptions.uploadBatchSize = "200";

    //Set getSyncStats to receive sync stats on sync success.
    syncOptions.getSyncStats = "true";

    //Set syncType to perform a sync session
    syncOptions.syncType = "uploadOnly";

    //Supplying call back to receive sync progress events too
    syncObject.startSync(syncOptions, successCallback,
        failureCallback, progressCallback);

} catch (err) {
    //Handles Exception.
}
```

### removeAfterUpload Example

```
var objectServiceSync = new voltmx.sdk.VMXObjSvc("<ObjSvc_Name>");
var syncOptions = {};
syncOptions.removeAfterUpload = [<list of objects>];
syncOptions.isUploadCacheEnabled=true;
syncOptions.syncType = "uploadOnly";
objectServiceSync.startSync(syncOptions, onSuccess, onFailure, onProgress);
function onSuccess(response)
{     //Handle sync success response. }
function onFailure(error)
{     //Handle sync failure response. }
function onProgress(object)
{     //Handle sync progress response. }
```


Android (Java)
--------------

### Signature

```
void <VMXObjSvc>.startSync(final HashMap<String, Object> syncOptions, final VMXCallback syncCallback, final VMXProgressCallback progressCallback) throws Exception

```

### Parameters

<table style="mc-table-style: url]('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;width: 100%;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 224px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 171px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 584px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 94px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">syncOptions</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap&lt;String, Object&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The user can provide options to customize sync behavior. For example, Filters, downloadBatchSize etc, Refer <a href="#Sync2" class="selected">Sync Options</a> for supported options. Refer <a href="../../../Foundry/offline_objects_gettingstarted/Content/Offline_Objects_Getting_Started.html" target="_blank">Offline Objects Getting Started guide</a> for more details.&nbsp;</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">syncCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">VMXCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Application implements <b>onSuccess</b> and <b>onFailure</b> methods of <b>VMXCallback</b> interface.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">progressCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VMXProgressCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Application implements <b>onProgress</b> method of <b>VMXProgressCallback</b> interface if progress callback is supplied.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">No</td></tr></tbody></table>

#### Sync Options

<table style="width: 100%;margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 132px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 119px;"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Options</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Descriptions</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">filter</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap&lt;String, Object&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The filter is a valid OData filter string that allows downloading specific records based on the supplied criteria. When the sync is performed at the object service-level, filters are supplied for all objects/entities of that service for which filter criteria needs to be applied as a key-value pair (object name, OData filter string) as shown in the sample code. All records are downloaded for those objects with no or invalid OData filter.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">downloadBatchSize</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Number/String</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The downloadBatchSize option defines record based batching in downloads. Care should be taken to provide appropriate batch size (number of records) based on backend’s ability to support the same. downloadBatchSize is 500 (records) by default. 
<!-- <span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>For SAP as backend, the BatchSize specifies the packet size in bytesBatchSize option from 8.0 is deprecated. -->
</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">uploadBatchSize</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Number/String</td><td class="TableStyle-Basic-BodyE-Column1-Body1">uploadBatchSize option defines record based batching in uploads. uploadBatchSize is 50(records) by default. Default batch size is assumed if the supplied value is &lt;=0.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">&nbsp;</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">getSyncStats</td><td class="TableStyle-Basic-BodyE-Column1-Body1">String</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The getSyncStats option is used to get sync stats information through sync success callback. This option takes two values <b>true</b> or <b>false</b>. Sync stats information is not returned to the user if getSyncStats option is not supplied or set to <b>false</b> or an invalid value.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">syncType</td><td class="TableStyle-Basic-BodyE-Column1-Body1">String</td><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>downloadOnly</b> will download the changes from the server. Change on the client side will not be pushed to the sever.<b>uploadOnly</b> will upload the changes from the client device to the server. Changes on the server will not be downloaded.<b>fullSync</b> will perform both upload and download from the client device to the server and vice-versa.<span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>Sync will move to the error state, if any other value is provided other than the above mentioned values.If sync type is not selected, full sync is performed by default.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">uploadRequestQueryParams</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap&lt;String, String&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The uploadRequestQueryParams option is used to pass the query parameters in upload network requests. <span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>The keys and values in the Hashmap must be of the string data type.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">downloadRequestQueryParams</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap&lt;String, String&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The downloadRequestQueryParams is used to pass the query parameters in download network requests. <span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>The keys and values in the Hashmap must be of the string data type.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1" data-mc-conditions="Default.SP4"><td class="TableStyle-Basic-BodyE-Column1-Body1">downloadReconciliationRequired</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Boolean</td><td class="TableStyle-Basic-BodyE-Column1-Body1">This parameter specifies if download reconciliation is required or not. Download reconciliation is used to compare primary keys present in backend with application database primary keys for an object. In scenarios where there are no pending edits, it is advisable to perform startSync by setting <b>downloadReconciliationRequired</b> to <b>false</b> (as in the case of initial sync). <b>downloadReconciliationRequired</b> is set to <b>true</b>, by default.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1" data-mc-conditions="Default.SP4"><td class="TableStyle-Basic-BodyB-Column1-Body1">preserveBatchContext</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Boolean</td><td class="TableStyle-Basic-BodyB-Column1-Body1"><b>preserveBatchContext</b> specifies whether to preserve the batchContext of last successful download batch. If batchContext is preserved, the successive download call resumes from the last successful batch, else it starts from the first batch again. Set the option to <b>True</b>, to resume the download from last successful batch. Set the option to <b>False</b>, to start downloading from the first batch. <b>preserveBatchContext</b> is set to false, by default.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">No</td></tr></tbody></table>

### Return Type

void

### Example

```
try {
    //Create an instance of VMXObjSvc 
    KVMXObjSvc syncObject = new
    VMXObjSvc("Organization");

    HashMap < String, Object > syncOptions = new HashMap < String, Object > ();

    //Set downloadRequestQueryParams to be applied during download on multiple objects
    HashMap < String, String > downloadRequestQueryParams = new HashMap < String, String > ();
    downloadRequestQueryParams("LocationID", "32001");
    downloadRequestQueryParams("SiteID", "2");
    syncOptions.put("downloadRequestQueryParams", downloadRequestQueryParams);


    //Set filters to be applied during download on multiple objects
    HashMap < String, Object > filters = new HashMap < String, Object > ();
    filters.put("Employee", "EmployeeID eq 2");
    filters.put("Department", "Name eq ‘Human Resource’");
    syncOptions.put("filter", filters);


    //Set download BatchSize.
    syncOptions.put("downloadBatchSize", "100");

    //Set getSyncStats to receive sync stats on sync success.	 
    syncOptions.put("getSyncStats", "true");

    //Set syncType to perform a sync session
    syncOptions.put("syncType", "downloadOnly");

    //Supplying call back to receive sync progress events too               
    syncObject.startSync(syncOptions,
        new VMXCallback() {
            @Override
            public void onSuccess(Object object) {
                Log.d("ObjectServiceSync", "ObjectService sync   successful");
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

iOS (Objective C)
-----------------

### Signature

```
void <VMXObjSvc> startSync:(NSDictionary <NSString *, id> *)syncOptions
      onSuccess:(VMXSuccessCompletionHandler)onSuccess
      onFailure:(VMXFailureCompletionHandler)onFailure
      onProgress:(VMXProgressCompletionHandler)onProgress;

```

### Parameters

<table style="mc-table-style: url]('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;width: 100%;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 195px;"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">syncOptions</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary&lt;NSString*, id&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">A user can provide options to customize sync behavior. For example, Filters, download batch size etc, see <a href="#Sync2" class="selected">Sync Options</a> section for supported options. Refer <a href="../../../Foundry/offline_objects_gettingstarted/Content/Offline_Objects_Getting_Started.html" target="_blank">Offline Objects Getting Started guide</a> for more details.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">onSuccess</td><td class="TableStyle-Basic-BodyE-Column1-Body1">VMXSuccessCompletionHandler</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The method called after a successful sync.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">onFailure</td><td class="TableStyle-Basic-BodyE-Column1-Body1">VMXFailureCompletionHandler</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The method called on sync failure.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">onProgress</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VMXProgress CompletionHandler</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The method called on sync progress events.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">No</td></tr></tbody></table>

#### Sync Options

<table style="width: 100%;margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 140px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 157px;"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Options</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Descriptions</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">filter</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary&lt;NSString*, id&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The filter is a valid OData filter string, allows downloading specific records based on the supplied criteria. When a sync is performed at object service level, filters should be supplied for all objects/entities of that service for which filter criteria needs to be applied as a key-value pair (object name, OData filter string) as shown in the sample code. All records are downloaded for those objects with no or invalid OData filter.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">downloadBatchSize</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSNumber/NSString</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The downloadBatchSize option defines record based batching in downloads. Care should be taken to provide appropriate BatchSize (number of records) based on backend’s ability to support the same. downloadBatchSize is 500 (records) by default. 
<!-- <span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>For SAP as backend, the BatchSize specifies the packet size in bytes. BatchSize option from 8.0 is deprecated. -->
</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">uploadBatchSize</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSNumber/NSString</td><td class="TableStyle-Basic-BodyE-Column1-Body1">uploadBatchSize option defines record based batching in uploads. uploadBatchSize is 50 (records) by default. Default BatchSize is assumed if the supplied values&lt;=0.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">getSyncStats</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSString</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The getSyncStats option is used to get sync stats information through sync success callback. This option takes two values <b>true</b> or <b>false</b>. Sync stats information is not returned to the user if getSyncStats option is not supplied or set to "false" or an invalid value.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">syncType</td><td class="TableStyle-Basic-BodyE-Column1-Body1">String</td><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>downloadOnly</b> will download the changes from the server. Change on the client side will not be pushed to the sever.<b>uploadOnly</b> will upload the changes from the client device to the server. Changes on the server will not be downloaded.<b>fullSync</b> will perform both upload and download from the client device to the server and vice-versa.<span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>Sync will move to the error state, if any other value is provided other than the above mentioned values.If sync type is not selected, full sync is performed by default.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">uploadRequestQueryParams</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary&lt;NSString*, id&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The uploadRequestQueryParams option is used to pass query parameters in the upload network requests. <span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>The keys and values in the NSDictionary must be of the string data type.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">downloadRequestQueryParams</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary&lt;NSString*, id&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The downloadRequestQueryParams option is used to pass query parameters in download network requests. <span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>The keys and values in the NSDictionary must be of the string data type.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1" data-mc-conditions="Default.SP4"><td class="TableStyle-Basic-BodyE-Column1-Body1">downloadReconciliationRequired</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Boolean</td><td class="TableStyle-Basic-BodyE-Column1-Body1">This parameter specifies if download reconciliation is required or not. Download reconciliation is used to compare primary keys present in backend with application database primary keys for an object. In scenarios where there are no pending edits, it is advisable to perform startSync by setting <b>downloadReconciliationRequired</b> to <b>false</b> (as in the case of initial sync). <b>downloadReconciliationRequired</b> is set to <b>true</b>, by default.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1" data-mc-conditions="Default.SP4"><td class="TableStyle-Basic-BodyB-Column1-Body1">preserveBatchContext</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Boolean</td><td class="TableStyle-Basic-BodyB-Column1-Body1"><b>preserveBatchContext</b> specifies whether to preserve the batchContext of last successful download batch. If batchContext is preserved, the successive download call resumes from the last successful batch, else it starts from the first batch again. Set the option to <b>True</b>, to resume the download from last successful batch. Set the option to <b>False</b>, to start downloading from the first batch. <b>preserveBatchContext</b> is set to false, by default.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">No</td></tr></tbody></table>

### Return Type

void

### Example

```
NSError * error;
 
 VMXObjSvc * syncObject = [
     [VMXObjSvc alloc] initWithName: @"Organization"
     error: & error
 ];
 
 if (error) {
     NSLog(@"Object Service Object Creation Failed");
 } else {
     VMXSuccessCompletionHandler onSuccess = ^ void(id object) {
         //Operation to be performed on successful sync.
     };
 
     VMXFailureCompletionHandler onFailure = ^ void(id object) {
         //Operation to be performed on sync failure.
     };
 
     VMXProgressCompletionHandler onProgress = ^ void(id object) {
         //Operation to be performed on sync progress.
     };
 
     NSMutableDictionary * syncOptions = [NSMutableDictionary new];
 
     //Set uploadRequestQueryParams to be applied during upload on multiple objects
     NSMutableDictionary * uploadRequestQueryParams = [NSMutableDictionary new];
     uploadRequestQueryParams[@"LocationID"] = @"32001";
     uploadRequestQueryParams[@"SiteID"] = @"2";
     [syncOptions setObject: uploadRequestQueryParams
         forKey: @"uploadRequestQueryParams"
     ];
 
     //Set downloadRequestQueryParams to be applied during download on multiple objects
     NSMutableDictionary * downloadRequestQueryParams = [NSMutableDictionary new];
     downloadRequestQueryParams[@"LocationID"] = @"32001";
     downloadRequestQueryParams[@"SiteID"] = @"2";
     [syncOptions setObject: downloadRequestQueryParams
         forKey: @"downloadRequestQueryParams"
     ];
 
     //Set filters to be applied during download on object
     NSMutableDictionary * filters = [NSMutableDictionary new];
     [filters setObject: @"EmployeeID eq 2"
         forKey: @"Employee"
     ];
 
     [filters setObject: @"Name eq ‘Human Resource’"
         forKey: @"Department"
     ];
 
     [syncOptions setObject: filters
         forKey: @"filter"
     ];
 
     //Set upload and download BatchSize.
     [syncOptions setObject: @"100"
         forKey: @"downloadBatchSize"
     ];
     [syncOptions setObject: @"200"
         forKey: @"uploadBatchSize"
     ];
 
 
     //Set getSyncStats to receive sync stats on sync success.
     [syncOptions setObject: @"true"
         forKey: @"getSyncStats"
     ];
 
     //Set syncType to perform a sync session.
     [syncOptions setObject: @"fullSync"
         forKey: @"syncType"
     ];
 
     //Supplying call back to receive sync progress events too.
     [syncObject startsync: syncOptions
         onSuccess: onSuccess
         onFailure: onFailure
         onProgress: onProgress
     ];
 }
```

> **_Note:_** For more details on Offline Objects features and options, refer [Offline Objects Getting Started Guide](../../../Foundry/offline_objects_gettingstarted/Content/Offline_Objects_Getting_Started.md).
