

Sync Configuration Policies
===========================

The Sync Configuration Policies feature allows you to control the data synchronizing between the device and the server. For example, objects with read-only data are not required to upload during a sync session.

Sync is a bi-directional operation. It uploads the local changes to the server and downloads the server changes, by default. You should provide the **syncType** option (**downloadOnly** , **uploadOnly**, or **fullSync**) to control the sync behavior on an object or object-service sync session.

There are three **syncType** options. They are as follows.

*   **downloadOnly**: changes from the server are downloaded to the device.
*   **uploadOnly**: local changes from the device are uploaded to the server.
*   **fullSync** performs bi-directional sync between the local device and the server.

Sample Code

```
function onSyncSuccess(successObject) {
	//Operation to be performed on successful sync.
 }
 
 function onSyncFailure(error) {
    //Operation to be performed on unsuccessful sync.
 }
 function onSyncProgress(progressObject) {
   //Update Progressbar.
}try {
	//Create an offline object which needs to be synced.
    var syncObject = = new voltmx.sdk.VMXObj("Employee");

    //Set syncType to perform a sync session.
    var syncOptions = {"syncType" : "uploadOnly"};

    //Supplying callback to receive sync progress event too.
    syncObject.startSync(syncOptions, onSyncSuccess, onSyncFailure, onSyncProgress);
} catch (error) {
	alert("Object creation failed!);
}
```
