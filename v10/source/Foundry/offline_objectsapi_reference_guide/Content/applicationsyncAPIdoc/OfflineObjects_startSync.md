                             

<OfflineObjects\>.startSync

The <OfflineObjects\>.startSync API performs sync on all object services published in the Volt MX Foundry app.

Volt MX  Iris (JavaScript)
----------------------------

### Signature

VMXFoundry.OfflineObjects.startSync(options, successCallback, failureCallback, progressCallback)

### Parameters

<table class="table_1"><colgroup><col style="width: 116pt;"> <col style="width: 113pt;"> <col style="width: 126pt;"> <col style="width: 113pt;"></colgroup><tbody><tr><td class="td_1">Parameter</td><td class="td_2">Type</td><td class="td_2">Description</td><td class="td_2">Required</td></tr><tr><td class="td_3"><span class="span_3">o</span><span class="span_3">ptions</span></td><td class="td_4">JSON</td><td class="td_4">The user can provide options to customize sync behavior. For example, syncMode and objectServicesOptions. &nbsp; Refer sync options for supported options.</td><td class="td_4">Yes</td></tr><tr><td class="td_3">successCallback</td><td class="td_4">Function</td><td class="td_4">The function is invoked on successful sync with response as an argument. Response object includes sync status code, sync stats etc based on the supplied sync options.</td><td class="td_4">Yes</td></tr><tr><td class="td_3">failureCallback</td><td class="td_4">Function</td><td class="td_4">The function is invoked on an error with the cause of failure as an argument upon Sync failure.</td><td class="td_4">Yes</td></tr><tr><td class="td_3">progressCallback</td><td class="td_4">Function</td><td class="td_4"><span class="span_3">The function is invoked on different sync phases along with phase specific </span><span class="span_3">data such as the number of records downloaded etc. </span><span class="mcformatcolor_1">Note:&nbsp;</span><span class="span_3">Not applicable for </span><span class="span_3">Windows, </span><span class="span_3">Mobile Web and Desktop Web channels. If app developer passes this parameter in the options, it will be ignored.</span> &nbsp;</td><td class="td_4">No</td></tr></tbody></table>

#### Sync options

<table class="table_1"><colgroup><col style="width: 124pt;"> <col style="width: 56pt;"> <col style="width: 230pt;"> <col style="width: 65pt;"></colgroup><tbody><tr style="height: 36pt;"><td class="td_1">Options</td><td class="td_2">Type</td><td class="td_2">Description</td><td class="td_2">Required</td></tr><tr style="height: 109pt;"><td class="td_3">syncMode</td><td class="td_4">String</td><td class="td_4">Option to perform object services sync in sequence or parallel. The values could be { &nbsp;&nbsp;&nbsp;&nbsp;“parallel”, ”sequential” } Note:&nbsp;Default sync mode is parallel, if not provided in options.</td><td class="td_4">No</td></tr><tr style="height: 78pt;"><td class="td_3"><span class="span_3">objectService</span><span class="span_3">s</span><span class="span_3">Options&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></td><td class="td_4">JSON</td><td class="td_4"><span class="span_3">The user can provide options to customize sync behavior. For example, Filters, downloadBatchSize etc, Refer&nbsp;</span><a href="../../../Foundry/offline_objectsapi_reference_guide/Content/ObjectService_startSync.html#Sync2"><span class="span_5">Sync Options</span></a><span class="span_3">&nbsp;for supported options. Refer&nbsp;</span><a href="../../../Foundry/offline_objects_gettingstarted/Content/Offline_Objects_Getting_Started.html"><span class="span_5">Offline Objects Getting Started guide</span></a><span class="span_3">&nbsp;for more details.</span></td><td class="td_4">No</td></tr></tbody></table>

#### Success callback response

<table class="table_1"><colgroup><col style="width: 212pt;"> <col style="width: 106pt;"> <col style="width: 157pt;"></colgroup><tbody><tr style="height: 32pt;"><td class="td_1"><span class="span_6">Success object</span><span class="span_6"> keys</span></td><td class="td_2">Type</td><td class="td_2">Description</td></tr><tr style="height: 85pt;"><td class="td_3">applicationSyncSuccessResponse</td><td class="td_4">JSON</td><td class="td_4"><span class="span_3">It cont</span><span class="span_3">ains</span><span class="span_3"> object service name as key</span><span class="span_3">s</span><span class="span_3"> and object service sync success response as values.</span></td></tr></tbody></table>

#### Failure callback error

<table class="table_1"><colgroup><col style="width: 201pt;"> <col style="width: 120pt;"> <col style="width: 145pt;"></colgroup><tbody><tr style="height: 33pt;"><td class="td_1"><span class="span_7">Failure</span><span class="span_7"> object keys</span></td><td class="td_2">Type</td><td class="td_2">Description</td></tr><tr style="height: 99pt;"><td class="td_3">applicationSyncSuccessResponse</td><td class="td_4">JSON</td><td class="td_4">It contains object service name as keys and object service sync success response as values.</td></tr><tr style="height: 158pt;"><td class="td_3">applicationSyncFailureResponse</td><td class="td_4">JSON</td><td class="td_4">It contains object service name as keys and object service sync failure response as values.</td></tr></tbody></table>

### Return Type

void

### Example

var options \= {};

var organizationUploadRequestQueryParams = {"LocationID": "32001", "SiteID": "2"};

var organizationOptions = {

"getSyncStats" : true,

                    "uploadBatchSize" : "200",

                   "uploadRequestQueryParams": organizationUploadRequestQueryParams,

                     "syncType" : "uploadOnly"

            };

options.syncMode = “parallel”;

options.objectServicesOptions = {" Organization" : organizationOptions};

VMXFoundry.OfflineObjects.startSync(options, onSuccess, onFailure, onProgress);

function onSuccess(response){

            voltmx.print("Application Sync success: " + JSON.stringify(response. applicationSyncSuccessResponse));

}

function onFailure(error){

            voltmx.print("Application Sync failed with error: " + JSON.stringify(error. applicationSyncFailureResponse));

}

function onProgress(object){

            voltmx.print("Application Sync progress event received" + JSON.stringify(object));

}

Android (Java)
--------------

### Signature

void <OfflineObjects\>.startSync(final HashMap<String, Object> options, final VMXCallback syncCallback, final VMXProgressCallback voltmxSyncProgressCallback)

### Parameters

<table class="table_1"><colgroup><col style="width: 122pt;"> <col style="width: 115pt;"> <col style="width: 177pt;"> <col style="width: 53pt;"></colgroup><tbody><tr><td class="td_1">Parameter</td><td class="td_2">Type</td><td class="td_2">Description</td><td class="td_2">Required</td></tr><tr><td class="td_3"><span class="span_3">o</span><span class="span_3">ptions</span></td><td class="td_4">HashMap&lt;String, Object&gt;</td><td class="td_4"><span class="span_3">The user can provide two keys.</span> <span class="span_3">One is “syncMode” and other is “objectServiceOptions”.</span> Refer sync options for supported options.</td><td class="td_4">Yes</td></tr><tr><td class="td_3">syncCallback</td><td class="td_4">VMXCallback</td><td class="td_4"><span class="span_3">Application implements&nbsp;</span><span class="span_7">onSuccess</span><span class="span_3">&nbsp;and&nbsp;</span><span class="span_7">onFailure</span> <span class="span_3">methods</span> <span class="span_3">of&nbsp;</span><span class="span_7">VMXCallback</span> <span class="span_3">interface.</span></td><td class="td_4">Yes</td></tr><tr><td class="td_3"><span class="span_3">voltmxSyncP</span><span class="span_3">rogressCallback</span></td><td class="td_4">VMXProgressCallback</td><td class="td_4"><span class="span_3">Application implements&nbsp;</span><span class="span_7">onProgress</span><span class="span_3">&nbsp;method of&nbsp;</span><span class="span_7">VMXProgressCallback</span> <span class="span_3">interface if progress callback is supplied.</span></td><td class="td_4">No</td></tr></tbody></table>

#### options

<table class="table_1"><colgroup><col style="width: 126pt;"> <col style="width: 114pt;"> <col style="width: 164pt;"> <col style="width: 64pt;"></colgroup><tbody><tr><td class="td_1">Options</td><td class="td_2">Type</td><td class="td_2">Descriptions</td><td class="td_2">Required</td></tr><tr><td class="td_3">syncMode</td><td class="td_4">String</td><td class="td_4"><span class="span_3">The option “syncMode” is used to indicate the Application Sync&nbsp; flow](“Parallel” or “Sequential”) .Default </span><span class="span_3">sync mode</span><span class="span_3"> is parallel if “syncMode” option is not provided.</span></td><td class="td_4">No</td></tr><tr><td class="td_3">objectServiceOptions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td class="td_4">Map&lt;String, Object&gt;</td><td class="td_4"><span class="span_3">The user can provide options to customize sync behavior. For example, Filters, downloadBatchSize etc, Refer&nbsp;</span><a href="../../../Foundry/offline_objectsapi_reference_guide/Content/ObjectService_startSync.md#Sync2"><span class="span_5">Sync Options</span></a><span class="span_3">&nbsp;for supported options. Refer&nbsp;</span><a href="../../../Foundry/offline_objects_gettingstarted/Content/Offline_Objects_Getting_Started.html"><span class="span_5">Offline Objects Getting Started guide</span></a><span class="span_3">&nbsp;for more details.</span> &nbsp;</td><td class="td_4">No</td></tr></tbody></table>

#### Success callback response

<table class="table_1"><colgroup><col style="width: 212pt;"> <col style="width: 106pt;"> <col style="width: 157pt;"></colgroup><tbody><tr style="height: 32pt;"><td class="td_1">Success object keys</td><td class="td_2">Type</td><td class="td_2">Description</td></tr><tr style="height: 85pt;"><td class="td_3">applicationSyncSuccessResponse</td><td class="td_4">HashMap&lt;String, Object&gt;</td><td class="td_4">It contains object service name as keys and object service sync success response as values.</td></tr></tbody></table>

#### Failure callback error

<table class="table_1"><colgroup><col style="width: 114pt;"> <col style="width: 99pt;"> <col style="width: 255pt;"></colgroup><tbody><tr style="height: 33pt;"><td class="td_1">Failure object keys</td><td class="td_2">Type</td><td class="td_2">Description</td></tr><tr style="height: 99pt;"><td class="td_3">userInfo</td><td class="td_4">HashMap&lt;String, Object&gt;</td><td class="td_4"><span class="span_2">It contains</span><span class="span_2"> HashMaps with keys </span><span class="span_9">applicationSyncSuccessResponse and applicationSyncFailureResponse keys </span><span class="span_9">applicationSyncSuccessResponse contains HashMap of </span><span class="span_2">object service name as keys and object service sync success response as values.</span><span class="span_2"></span> <span class="span_9">applicationSyncFailureResponse</span> <span class="span_2">contains </span><span class="span_9">HashMap of </span><span class="span_2">object service name as keys and object service sync failure response as values.</span></td></tr></tbody></table>

### Return Type

void

### Example

try{

VoltMXClient sdk= new VoltMXClient();

OfflineObjects appSync = sdk.getOfflineObjects();

HashMap<String, Object> objectServicesOptions = new HashMap<String, Object>();

HashMap<String, Object> organizationOptions = new HashMap<String, Object>();

HashMap<String, String> organizationUploadRequestQueryParams = new HashMap<String, String>();  

organizationOptions.put("uploadBatchSize", "100");

organizationOptions.put(“GetSyncStats”, “true”);

organizationOptions.put("syncType", "uploadOnly");

organizationUploadRequestQueryParams (“LocationID”, “32001”);

organizationUploadRequestQueryParams (“SiteID”, “2”);

  organizationOptions.put(“uploadRequestQueryParams”, organizationUploadRequestQueryParams);

  objectServicesOptions.put(“syncMode”, “parallel”);

objectServicesOptions.put(“Organization”, organizationOptions);

appSync.startSync(organizationOptions,

    new VMXCallback() {

        @Override

public void onSuccess(Object object) {

HashMap<String, Object> result = (HashMap<String, Object>) object;

Log.d(“ObjectServiceSync”, “ObjectService sync successful.”

\+ result.get(“applicationSyncSuccessResponse”));

        }

        @Override

        public void onFailure(Object error)

{

OfflineObjectsException e=(OfflineObjectsException)error;

           Log.d("ObjectServiceSync", "ObjectService sync

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

     Log.d("ObjectServiceSync", "ObjectService sync failed with error:"

     + e.getMessage());

}

iOS (Objective C)
-----------------

### Signature

(void) <OfflineObjects\>startSync:(NSDictionary<NSString \*, id> \*)options

        onSuccess:(VMXSuccessCompletionHandler)onSuccess

        onFailure:(VMXFailureCompletionHandler)onFailure

 onProgress:(VMXProgressCompletionHandler)onProgress;

### Parameters

<table class="table_1"><colgroup><col style="width: 88pt;"> <col style="width: 167pt;"> <col style="width: 130pt;"> <col style="width: 83pt;"></colgroup><tbody><tr><td class="td_1">Parameter</td><td class="td_2">Type</td><td class="td_2">Description</td><td class="td_2">Required</td></tr><tr><td class="td_3">options</td><td class="td_4">NSDictionary&lt;NSString *, id&gt; *</td><td class="td_4">The user can provide two keys. One is “syncMode” and other is “objectServiceOptions”. &nbsp;</td><td class="td_4">Yes</td></tr><tr><td class="td_3">onSuccess</td><td class="td_4">VMXSuccessCompletionHandler</td><td class="td_4">The method called after a successful sync.</td><td class="td_4">Yes</td></tr><tr><td class="td_3">onFailure</td><td class="td_4">VMXFailureCompletionHandler</td><td class="td_4">The method called on sync failure.</td><td class="td_4">Yes</td></tr><tr><td class="td_3">onProgress</td><td class="td_4">VMXProgress CompletionHandler</td><td class="td_4">The method called on sync progress events.</td><td class="td_4">No</td></tr></tbody></table>

#### syncOptions

<table class="table_1"><colgroup><col style="width: 117pt;"> <col style="width: 139pt;"> <col style="width: 114pt;"> <col style="width: 98pt;"></colgroup><tbody><tr><td class="td_1">Options</td><td class="td_2">Type</td><td class="td_2">Descriptions</td><td class="td_2">Required</td></tr><tr><td class="td_3">syncMode</td><td class="td_4">String</td><td class="td_4">The option “syncMode” is used to indicate the Application Sync&nbsp; flow](“Parallel” or “Sequential”) .Default sync mode is parallel if “syncMode” option is not provided.</td><td class="td_4">No</td></tr><tr><td class="td_3">objectServiceOptions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td class="td_4">NSDictionary&lt;NSString*, id&gt;</td><td class="td_4"><span class="span_3">The user can provide options to customize sync behavior. For example, Filters, downloadBatchSize etc, Refer&nbsp;</span><a href="../../../Foundry/offline_objectsapi_reference_guide/Content/ObjectService_startSync.md#Sync2"><span class="span_5">Sync Options</span></a><span class="span_3">&nbsp;for supported options. Refer&nbsp;</span><a href="../../../Foundry/offline_objects_gettingstarted/Content/Offline_Objects_Getting_Started.html"><span class="span_5">Offline Objects Getting Started guide</span></a><span class="span_3">&nbsp;for more details.</span> &nbsp;</td><td class="td_4">Yes</td></tr></tbody></table>

#### Success callback response

<table class="table_1"><colgroup><col style="width: 212pt;"> <col style="width: 106pt;"> <col style="width: 157pt;"></colgroup><tbody><tr style="height: 32pt;"><td class="td_1">Success object keys</td><td class="td_2">Type</td><td class="td_2">Description</td></tr><tr style="height: 85pt;"><td class="td_3">applicationSyncSuccessResponse</td><td class="td_4">HashMap&lt;String, Object&gt;</td><td class="td_4">It contains object service name as keys and object service sync success response as values.</td></tr></tbody></table>

#### Failure callback error

<table class="table_1"><colgroup><col style="width: 114pt;"> <col style="width: 99pt;"> <col style="width: 255pt;"></colgroup><tbody><tr style="height: 33pt;"><td class="td_1">Failure object keys</td><td class="td_2">Type</td><td class="td_2">Description</td></tr><tr style="height: 99pt;"><td class="td_3">userInfo</td><td class="td_4">HashMap&lt;String, Object&gt;</td><td class="td_4"><span class="span_2">It contains HashMaps with keys </span><span class="span_9">applicationSyncSuccessResponse and applicationSyncFailureResponse keys </span><span class="span_9">applicationSyncSuccessResponse contains HashMap of </span><span class="span_2">object service name as keys and object service sync success response as values.</span><span class="span_2"></span> <span class="span_9">applicationSyncFailureResponse </span><span class="span_2">contains </span><span class="span_9">HashMap of </span><span class="span_2">object service name as keys and object service sync failure response as values.</span></td></tr></tbody></table>

### Return Type

void

### Example

NSError \*error;

VMXClient \*sdk= \[VMXClient sharedClient\];  
OfflineObjects \*applicationSync = \[sdk getOfflineObjects\];

VMXSuccessCompletionHandler onSuccess = ^void(id object){

     //Operation to be performed on successful sync.

};

VMXFailureCompletionHandler onFailure = ^void(id object){

//Operation to be performed on sync failure.

};

VMXProgressCompletionHandler onProgress = ^void(id object){

        //Operation to be performed on sync progress.

};

NSDictionary \* uploadRequestQueryParams = @{

@“LocationID”: @“32001”,

@“SiteID”: @“2”

};

NSDictionary \*filters = @{

@”Employee”: @”EmployeeID eq 2”,

@”Department”: @”Name eq ‘Human Resource’”

};

NSDictionary \*syncOptions = @{

@”uploadRequestQueryParams”: uploadRequestQueryParams,

@”filter”: filters,

@”downloadBatchSize”: @”100”,

@"uploadBatchSize":@"200”,

@”GetSyncStats”:@”true”,

@"syncType":@"fullSync"

};

NSDictionary \*objectServicesOptions = @{@”Organization”:syncOptions}

\[applicationSync startsync:@{

@”syncMode”:”parallel”,

@”objectServicesOptions”: objectServicesOptions}

 onSuccess:onSuccess

 onFailure:onFailure

 onProgress:onProgress\];
