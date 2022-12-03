
Sync Progress Events
====================

Sync API allows you to subscribe to the sync progress events by providing a callback method. The current sync status is conveyed to the application through the sync phase and state. The Sync Progress Events feature is supported at Object and Object-Service level sync operations. In addition to sync progress events, sync stats can be obtained through sync success callback by opting for it through SyncOptions. Use **getSyncStats** key to opt for sync status, which would give out details of current sync operation such as the number of records downloaded and the number of objects synchronized in response to successful sync.

For information about Sync API and its options for different platforms, refer to [Offline Objects API Guide](../../../Foundry/offline_objectsapi_reference_guide/Content/Offline_Objects_API_Reference.md).

Sync Progress Phases and States
-------------------------------

The following table contains currently supported sync phase, sync state, and additional information sent in the event notification.

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;text-align: center;">Phases</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;text-align: center;">State</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;text-align: center;">Description</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="text-align: center;">Sync</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="text-align: center;">Started</td><td class="TableStyle-Basic-BodyD-Column1-Body1">The following details are sent in this phase and state Sync start time Object/Object Service name Number of objects to sync</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="text-align: center;">Sync</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="text-align: center;">Ended</td><td class="TableStyle-Basic-BodyD-Column1-Body1">The following details are sent in this phase and state Object/Object Service name Sync elapsed time No of records uploaded No of records downloaded</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="text-align: center;">Upload</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="text-align: center;">Started</td><td class="TableStyle-Basic-BodyD-Column1-Body1">The following details are sent in this phase and state Object/Object Service name</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="text-align: center;">Upload</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="text-align: center;">InProgress</td><td class="TableStyle-Basic-BodyD-Column1-Body1">The following details are sent in this phase and state Object/Object Service name Number of records to upload</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="text-align: center;">Upload</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="text-align: center;">Ended</td><td class="TableStyle-Basic-BodyD-Column1-Body1">The following details are sent in this phase and state Object/Object Service name No of records uploaded</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="text-align: center;">Download</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="text-align: center;">Started</td><td class="TableStyle-Basic-BodyD-Column1-Body1">The following details are sent in this phase and state Object/Object Service name Current download batch number</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="text-align: center;">Download</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="text-align: center;">InProgress</td><td class="TableStyle-Basic-BodyD-Column1-Body1">The following details are sent in this phase and state Object/Object Service name Current download batch number</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1" style="text-align: center;">Download</td><td class="TableStyle-Basic-BodyB-Column1-Body1" style="text-align: center;">Ended</td><td class="TableStyle-Basic-BodyA-Column1-Body1">The following details are sent in this phase and state Object/Object Service name The number of records downloaded. Current download batch number.</td></tr></tbody></table>

Object Level
------------

The following examples demonstrate subscribing to the sync progress events and the sync stats.

### JavaScript

```
function onSyncSuccess(successObject) {
     //Operation to be performed on successful sync.
 }
 
 function onSyncFailure(err) {
     //Operation to be performed on unsuccessful sync.
 }
 
 function onSyncProgress(progressObject) {
    //Update Progressbar.
 }
 
 try {
    //Create an offline object which needs to be synced.
     var syncObject = = new voltmx.sdk.VMXObj("Employee");
 
     //Set GetSyncStats to receive sync stats on sync success.
     var syncOptions = {"GetSyncStats" : "true"};
 
     //Supplying callback to receive sync progress event too.
     syncObject.startSync(syncOptions, onSyncSuccess, onSyncFailure, onSyncProgress);
 } catch (err) {
     alert("Object creation failed!);
 }


```

### Android

```
try {
  //Create an offline object which needs to be synced.
  private VMXObj syncObject = new VMXObj("Employee");
 
  //Set GetSyncStats to receive sync stats on sync success.
  HashMap<String, Object> syncOptions = new HashMap<String, Object>();
  syncOptions.put("GetSyncStats", "true");
 
  //Supplying callback to receive sync progress event too.
  syncObject.startSync(syncOptions, new VMXCallback() {
     @Override
     public void onSuccess(Object successObject) {
         //Operation to be performed on successful sync.
     }
 
     @Override
     public void onFailure(Object error) {
         //Operation to be performed on unsuccessful sync.
     }
  }, new VMXProgressCallback() {
 
     @Override
     public void onProgress(Object object) {
         //Update Progressbar.
     }
 });
 } catch (Exception e) {
     // Log "Object creation failed!" error
 }


```

### iOS

```
NSError *error;
 VMXObj *syncObject = [[VMXObj alloc] initWithName:@"Employee" 
                                                           error:&error];
 
 if(error) {
     NSLog(@"Object creation failed!");
 } else {
     VMXSuccessCompletionHandler onSuccessHandler = ^(id successObject) {
         //Operation to be performed on successful sync.
     }
 
     VMXFailureCompletionHandler onFailureHandler = ^(id error) {
         //Operation to be performed on unsuccessful sync.
     }
    
     VMXProgressCompletionHandler onProgressHandler = ^(id progressObject) {
        //Update Progressbar
     }
 
     //Set GetSyncStats to receive sync stats on sync success.
     NSDictionary *syncOptions = @{@"GetSyncStats" : @"true"};
 
     //Supplying callback to receive sync progress event too.
     [syncObject startSync:syncOptions
                 onSuccess:onSuccessHandler
                 onFailure:onFailureHandler
                onProgress:onProgressHandler];
 }

```

For more information about object-service level APIs, refer to [Offline Objects API Reference Guide](../../../Foundry/offline_objectsapi_reference_guide/Content/Offline_Objects_API_Reference.md?TocPath=_____1).
