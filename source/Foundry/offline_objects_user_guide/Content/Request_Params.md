
Request Params
==============

Offline Objects lets you limit the amount of data downloaded through the filter option in the startSync API at the object, object-service, and application levels. The filter usage is restricted to a specific object or table that is, only one of the object properties or columns should be used as a filter.

In addition to filters, offline objects also lets you download specific data by using the **downloadRequestQueryParams** option. You can choose to supply a specific criterion, not part of the objects, through request query params. For example, locationID or locale could be query params that determine the database partition that serves the response.

The upload and download network calls support the request query params through **uploadRequestQueryParams** and **downloadRequestQueryParams** options.

Sample Code
-----------

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
