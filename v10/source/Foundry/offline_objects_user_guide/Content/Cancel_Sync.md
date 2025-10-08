---
layout: "documentation"
category: "offline_objects_user_guide"
---         

Cancel Sync
===========

The need to cancel an in-progress sync session could arise when the ongoing sync session does not progress or if you have clicked the sync button by mistake.

To cancel the ongoing sync session, invoke the cancelSync API on the current sync scope instance (object or object-service level). This operation cancels the actions that are yet to be started and lets the current in-progress activity to complete. In this way, no data will end up in an inconsistent state in the device database.

For example, consider that you have initiated a download of 100 records with a batch size of 10. Ideally, the sync session downloads 100 records over 10 iterations. Now, if you invoke the cancelSync API during the first batch, the first batch with 10 records gets downloaded and saved to the device database. The subsequent download batches will be canceled and a sync failure callback is invoked to notify the user on successful cancellation.

> **Note:**  
*   The ability to cancel an in-progress sync session is supported in Android and iOS platforms.  
*   You cannot resume a canceled sync session. It is considered as either terminated or failed.  

```
var syncObject = new voltmx.sdk.VMXObj("Managers");

// Define Sync options
var syncOptions = {};
syncOptions.downloadBatchSize = 100;
syncOptions.uploadBatchSize = 200;
syncOptions.getSyncStats = true;

// Start Sync asynchronously
syncObject.startSync(syncOptions,
    function(res) {
        alert("Object sync successful”);
                     }, 
                     function(err)
                     {
                        alert("
            Object sync failed with error: " + JSON.stringify(err));
                     },
                     function(progressCallback)
                     {
                        alert("
            Object sync progress event received ");
                     });

// Now attempt to Cancel Sync
// passing an empty map for options parameter
syncObject.cancelSync({}, 
             function(res)
             {
		alert("
            Object sync cancellation successful ");
             }, 
             function(err)
             {
		alert("
            Object sync failed with error: " + JSON.stringify(err));
	 });
```
