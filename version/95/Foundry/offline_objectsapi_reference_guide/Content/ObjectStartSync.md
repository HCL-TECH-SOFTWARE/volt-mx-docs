                               


<object\>.startSync
==================

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
<VMXObj>.startSync(syncOptions, successCallback, failureCallback, progressCallback)
```

### Parameters

<table style="mc-table-style: url]('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;width: 100%;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 223px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 120px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 752px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">syncOptions</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The user can provide options to customize sync behavior. For example, Filters, download batch size etc, Refer <a href="#Sync" class="selected">Sync Options</a> for supported options. Refer <a href="../../../Foundry/offline_objects_gettingstarted/Content/Offline_Objects_Getting_Started.html" target="_blank">Offline Objects Getting Started guide </a>for more details.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">successCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked on a successful sync.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">failureCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked on an error with the cause of failure as an argument upon Sync failure.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">progressCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked on different sync phases along with phase specific data such as the number of records downloaded etc. Refer <a href="../../../Foundry/offline_objects_gettingstarted/Content/Offline_Objects_Getting_Started.html" target="_blank">Offline Objects Getting Started guide</a> for more details about sync progress events.<br><b>Note:</b> Not applicable for Mobile Web, Desktop Web and Desktop Native channels. If the app developer passes this parameter in the options, it will be ignored.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">No</td></tr></tbody></table>



#### Sync Options  

<a id="Sync"></a>


| Option                | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                 | Required |
| --------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| filter              | String | 	The filter is a valid OData filter string, allows downloading specific records based on the supplied criteria. When the sync is performed at the object-level, filters should be supplied as valid OData filter string as shown in the sample code. All records are downloaded for the object with no or invalid OData filter.| No       |
| downloadBatchSize | Number/String   | downloadBatchSize option defines record based batching in downloads. Care should be taken to provide appropriate batch size (number of records) based on backend’s ability to support the same. downloadBatchsize is 500 (records) by default . | No       |
| uploadBatchSize | Number/String   | uploadBatchSize option defines record based batching in uploads. uploadBatchSize is 50 (records) by default. Default BatchSize is assumed if the supplied value is <=0. | No       |
| getSyncStats | String   | The getSyncStats option is used to get sync stats information through sync success callback. This option takes two values **true** or **false**. Sync stats information is not returned to the user if the getSyncStats option is not supplied or set to **false** or an invalid value. | No |
| syncType | String   | **downloadOnly** will download the changes from the server. Change on the client side will not be pushed to the sever.**uploadOnly** will upload the changes from the client device to the server. Changes on the server will not be downloaded.**fullSync** will perform both upload and download from the client device to the server and vice-versa. **_Note_**: Sync will move to the error state, if any other value is provided other than the above mentioned values.If sync type is not selected, full sync is performed by default. | No  |
| uploadRequestQueryParams | JSON   | The uploadRequestQueryParams option is used to pass the query parameters in upload network requests.<br><b>Note : </b>This parameter is not supported for Desktop Native channel.| No  |
| downloadRequestQueryParams | JSON   | The downloadRequestQueryParams is used to pass the query parameters in download network requests.<br><b>Note :</b> This parameter is not supported for Desktop Native channel.</b>| No  |
| downloadReconciliationRequired | Boolean   | This parameter specifies if download reconciliation is required or not. Download reconciliation is used to compare primary keys present in backend with application database primary keys for an object. In scenarios where there are no pending edits, it is advisable to perform startSync by setting **downloadReconciliationRequired** to **false** (as in the case of initial sync). **downloadReconciliationRequired** is set to **true**, by default.<br><b>Note :</b> This parameter is not supported for Desktop Native channel. | No  |
| preserveBatchContext | Boolean   | 	**preserveBatchContext** specifies whether to preserve the batchContext of last successful download batch. If batchContext is preserved, the successive download call resumes from the last successful batch, else it starts from the first batch again. Set the option to **True**, to resume the download from last successful batch. Set the option to **False**, to start downloading from the first batch. **preserveBatchContext** is set to false, by default. **_Note_:** This parameter is not supported for Mobile Web, Windows, and Desktop Web channels.<br><b>Note :</b>This parameter is not supported for Windows, Mobile Web, Desktop Web and Desktop Native channels.| No  |
| removeAfterUpload | Array (list of objects)   | removeAfterUpload flag removes the entries from local DB once upload is successful to backend DB. This flag is passed as option parameter to startSync function as part of sync options. | No  |



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
    var syncObject = new voltmx.sdk.VMXObj("Employee");
    var syncOptions = {};

    //Set filters to be applied during download on object.
    syncOptions.filter = "EmployeeID eq 2";

    //Set uploadRequestQueryParams to be sent during sync in Sync Options.
    syncOptions.uploadRequestQueryParams = {
        "LocationID": "32001",
        "SiteID": "2"
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
var objectSync = new voltmx.sdk.VMXObj("<Obj_Name>");
var syncOptions = {};
syncOptions.removeAfterUpload = [<Obj_Name>];
syncOptions.isUploadCacheEnabled=true;
syncOptions.syncType = "uploadOnly";
objectSync.startSync(syncOptions, onSuccess, onFailure, onProgress);
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
void <VMXObj>.startSync(final HashMap<String, Object> syncOptions, final VMXCallback syncCallback, final VMXProgressCallback progressCallback) throws Exception

```

### Parameters

<table style="mc-table-style: url]('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;width: 100%;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 223px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 176px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 695px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">syncOptions</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap&lt;String, Object&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The user can provide event callbacks, batchsize to the sync engine. Refer <a href="#Sync1" class="selected">Sync Options</a> for supported options. Refer <a href="../../../Foundry/offline_objects_gettingstarted/Content/Offline_Objects_Getting_Started.html" target="_blank">Offline Objects Getting Started Guide</a> for more details.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">callback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">VMXCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Application implements <b>onSuccess</b> and <b>onFailure</b> methods of VMXCallback interface.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">progressCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VMXProgressCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Application implements <b>onProgress</b> method of VMXProgressCallback interface if progress callback is supplied.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">No</td></tr></tbody></table>

#### Sync Options

<a id="Sync1"></a>

<table style="width: 100%;margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 127px;"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Options</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Descriptions</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">filter</td><td class="TableStyle-Basic-BodyE-Column1-Body1">String</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The filter is a valid OData filter string, allows downloading specific records based on the supplied criteria. When the sync is performed at the object-level, filters should be supplied as valid OData filter string as shown in the sample code. All records are downloaded for object with no or invalid OData filter.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">downloadBatchSize</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Number/String</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The downloadBatchSize option defines record based batching in downloads. Care should be taken to provide appropriate batch size (number of records) based on backend’s ability to support the same. downloadBatchSize is 500 (records) by default.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">uploadBatchSize</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Number/String</td><td class="TableStyle-Basic-BodyE-Column1-Body1">uploadBatchSize option defines record based batching in uploads. uploadBatchSize is 50(records) by default. BatchSize is assumed if the supplied value is &lt;=0.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">getSyncStats</td><td class="TableStyle-Basic-BodyE-Column1-Body1">String</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The getSyncStats option is used to get sync stats information through sync success callback. This option takes two values <b>true</b> or <b>false</b>. Sync stats information is not returned to the user if the getSyncStats option is not supplied or set to <b>false</b> or an invalid value.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">syncType</td><td class="TableStyle-Basic-BodyE-Column1-Body1">String</td><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>downloadOnly</b> will download the changes from the server. Change on the client side will not be pushed to the sever.<b>uploadOnly</b> will upload the changes from the client device to the server. Changes on the server will not be downloaded.<b>fullSync</b> will perform both upload and download from the client device to the server and vice-versa.<br><b>Note:</b> Sync will move to the error state, if any other value is provided other than the above mentioned values.If sync type is not selected, full sync is performed by default.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">uploadRequestQueryParams</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap&lt;String, String&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The uploadRequestQueryParams option is used to pass the query parameters in upload network requests. <br><b>Note:</b> The keys and values in the Hashmap must be of the string data type.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">downloadRequestQueryParams</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap&lt;String, String&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The downloadRequestQueryParams is used to pass the query parameters in download network requests. <span class="autonumber"><br><b>Note:</b> The keys and values in the Hashmap must be of the string data type.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1" data-mc-conditions="Default.SP4"><td class="TableStyle-Basic-BodyE-Column1-Body1">downloadReconciliationRequired</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Boolean</td><td class="TableStyle-Basic-BodyE-Column1-Body1">This parameter specifies if download reconciliation is required or not. Download reconciliation is used to compare primary keys present in backend with application database primary keys for an object. In scenarios where there are no pending edits, it is advisable to perform startSync by setting <b>downloadReconciliationRequired</b> to <b>false</b> (as in the case of initial sync). <b>downloadReconciliationRequired</b> is set to <b>true</b>, by default.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1" data-mc-conditions="Default.SP4"><td class="TableStyle-Basic-BodyB-Column1-Body1">preserveBatchContext</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Boolean</td><td class="TableStyle-Basic-BodyB-Column1-Body1"><b>preserveBatchContext</b> specifies whether to preserve the batchContext of last successful download batch. If batchContext is preserved, the successive download call resumes from the last successful batch, else it starts from the first batch again. Set the option to <b>True</b>, to resume the download from last successful batch. Set the option to <b>False</b>, to start downloading from the first batch. <b>preserveBatchContext</b> is set to false, by default.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">No</td></tr></tbody></table>

### Return Type

void

### Example

```
try {
    //Create VMXObj object for object which needs to be synced.
    VMXObj syncObject = new VMXObj("Employee");

    HashMap < String, Object > syncOptions = new HashMap < String,
    Object > ();

    //Set downloadRequestQueryParams to be applied while downloading object
    HashMap < String, String > downloadRequestQueryParams = new HashMap < String, String > ();
    downloadRequestQueryParams("Location ID", "32001");
    downloadRequestQueryParams("SiteID", "2");
    syncOptions.put("downloadRequestQueryParams", downloadRequestQueryParams);

    //Set filters to be applied during download on object.
    syncOptions.put("filter", "EmployeeID eq 2");

    //Set download BatchSize.
    syncOptions.put("downloadBatchSize", "100");


    //Set getSyncStats to receive sync stats on sync success.	
    syncOptions.put("getSyncStats", "true");

    //Set syncType to perform a sync session
    syncOptions.put("syncType", "downloadOnly");

    //Supplying call back to receive sync progress events too
    syncObject.startSync(syncOptions, new VMXCallback() {
            @Override
            public void onSuccess(Object object) {

                Log.d("ObjectSync", "Object sync successful");
            }

            @Override
            public void onFailure(Object error) {
                OfflineObjectsException e = (OfflineObjectsException) error;
                Log.e("ObjectSync", "Object sync failed with error: " + e.getMessage());
            }
        },
        new VMXProgressCallback() {
            @Override
            Public void onProgress(Object object) {
                Log.d("ObjectSync", "Object sync Progress");
            }
        });
} catch (Exception e) {
    Log.e("ObjectSync", "Object sync failed with error:" + e.getMessage());
}
```

iOS (Objective C)
-----------------

### Signature

```
void <VMXObj> startSync:(NSDictionary <NSString *, id> *)syncOptions
       onSuccess:(VMXSuccessCompletionHandler)onSuccess
       onFailure:(VMXFailureCompletionHandler)onFailure
      onProgress:(VMXProgressCompletionHandler)onProgress;

```

### Parameters

<table style="mc-table-style: url]('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;width: 100%;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 64px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 742px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">syncOptions</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary&lt;NSString*, id&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">A User can provide options to customize sync behavior. For example, Filters, download batch size etc, Refer <a href="#Sync2" class="selected">Sync Options</a> for supported options. Refer <a href="../../../Foundry/offline_objects_gettingstarted/Content/Offline_Objects_Getting_Started.html" target="_blank">Offline Objects Getting Started guide</a> for more details.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">onSuccess</td><td class="TableStyle-Basic-BodyE-Column1-Body1">VMXSuccessCompletionHandler</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The method to be called after successful sync.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">onFailure</td><td class="TableStyle-Basic-BodyE-Column1-Body1">VMXFailureCompletion Handler</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The method called on sync failure.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">onProgress</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VMXProgress CompletionHandler</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The method called on sync Progress.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">No</td></tr></tbody></table>



#### Sync Options

<a id="Sync2"></a>

<table style="width: 100%;margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 135px;"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 629px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Options</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Descriptions</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">filter</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSString</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The filter is a valid OData filter string, allows downloading specific records based on the supplied criteria. When the sync is performed at the object level, filters should be supplied as valid OData filter string as shown in the sample code. All records are downloaded for object with no or invalid OData filter.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">downloadBatchSize</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSNumber/NSString</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The downloadBatchSize option defines record based batching in downloads. Care should be taken to provide appropriate batch size (number of records) based on backend’s ability to support the same. downloadBatchSize is 500 (records) by default.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">uploadBatchSize</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSNumber/NSString</td><td class="TableStyle-Basic-BodyE-Column1-Body1">uplaodBatchSize option defines record based batching in uploads. uploadBatchSize is 50 (records) by default. Default BatchSize is assumed if the supplied value is &lt;=0.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">getSyncStats</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSString</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The getSyncStats option is used to get sync stats information through sync success callback. This option takes two values <b>true</b> or <b>false</b>. Sync stats information is not returned back to the user if the getSyncStats option is not supplied or set to <b>false</b> or an invalid value.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">syncType</td><td class="TableStyle-Basic-BodyE-Column1-Body1">String</td><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>downloadOnly</b> will download the changes from the server. Change on the client side will not be pushed to the sever.<b>uploadOnly</b> will upload the changes from the client device to the server. Changes on the server will not be downloaded.<b>fullSync</b> will perform both upload and download from the client device to the server and vice-versa.<br><b>Note:</b> Sync will move to the error state, if any other value is provided other than the above mentioned values.If sync type is not selected, full sync is performed by default.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">uploadRequestQueryParams</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary&lt;NSString*, id&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The uploadRequestQueryParams option is used to pass query parameters in the upload network requests.<br><b>Note:</b> The keys and values in the NSDictionary must be of the string data type.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">downloadRequestQueryParams</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary&lt;NSString*, id&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The downloadRequestQueryParams option is used to pass query parameters in download network requests.<br><b>Note:</b> The keys and values in the NSDictionary must be of the string data type.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1" data-mc-conditions="Default.SP4"><td class="TableStyle-Basic-BodyE-Column1-Body1">downloadReconciliationRequired</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Boolean</td><td class="TableStyle-Basic-BodyE-Column1-Body1">This parameter specifies if download reconciliation is required or not. Download reconciliation is used to compare primary keys present in backend with application database primary keys for an object. In scenarios where there are no pending edits, it is advisable to perform startSync by setting <b>downloadReconciliationRequired</b> to <b>false</b> (as in the case of initial sync).<br><b>Note:</b> <b>downloadReconciliationRequired</b> is set to <b>true</b>, by default.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1" data-mc-conditions="Default.SP4"><td class="TableStyle-Basic-BodyB-Column1-Body1">preserveBatchContext</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Boolean</td><td class="TableStyle-Basic-BodyB-Column1-Body1"><b>preserveBatchContext</b> specifies whether to preserve the batchContext of last successful download batch. If batchContext is preserved, the successive download call resumes from the last successful batch, else it starts from the first batch again. Set the option to <b>True</b>, to resume the download from last successful batch. Set the option to <b>False</b>, to start downloading from the first batch.<br><b>Note:</b> <b>preserveBatchContext</b> is set to false, by default.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">No</td></tr></tbody></table>

### Return Type

void

### Example

```
NSError * error;

VMXObj * syncObject = [
    [VMXObj alloc] initWithName: @"Employee"
    error: & error
];

if (error) {
    NSLog(@"Object Sync Object Creation Failed");
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

    //Set uploadRequestQueryParams to be applied during upload on object 
    NSMutableDictionary * uploadRequestQueryParams = [NSMutableDictionary new];
    uploadRequestQueryParams[@"LocationID"] = @"32001";
    uploadRequestQueryParams[@"SiteID"] = @"2";
    [syncOptions setObject: uploadRequestQueryParams
        forKey: @"uploadRequestQueryParams"
    ];

    //Set downloadRequestQueryParams to be applied during download on object
    NSMutableDictionary * downloadRequestQueryParams = [NSMutableDictionary new];
    downloadRequestQueryParams[@"LocationID"] = @"32001";
    downloadRequestQueryParams[@"SiteID"] = @"2";
    [syncOptions setObject: downloadRequestQueryParams
        forKey: @"downloadRequestQueryParams"
    ];

    //Set filters to be applied during download on object.
    [syncOptions setObject: @"EmployeeID eq 2"
        forKey: @"filter"
    ];

    //Set upload and download BatchSize.
    [syncOptions setObject: @"100"
        forKey: @"downloadBatchSize"
    ];
    [syncOptions setObject: @"200"
        forKey: "uploadBatchSize"
    ];

    //Set getSyncStats to receive sync stats on sync success.	
    [syncOptions setObject: @"true"
        forKey: @"getSyncStats"
    ];

    //Set syncType to perform a sync session.
    [syncOptions setObject: @"fullSync"
        forKey: @"syncType"
    ];

    //Supplying call back to receive sync progress events too
    [syncObject startsync: syncOptions
        onSuccess: onSuccess
        onFailure: onFailure
        onProgress: onProgress
    ];
}
```

> **_Note:_** Refer the [Offline Objects Getting Started Guide](../../../Foundry/offline_objects_gettingstarted/Content/Offline_Objects_Getting_Started.md) for more details on Offline Objects features and options.
