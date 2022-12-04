
Volt MX  Offline Objects User Guide: Binary Download

Binary Download
===============

Volt MX  Foundry supports Binary CRUD operations on top of relational database adapter. While fetching records from the backend, columns marked as blob (binary) in the object model are not downloaded. You should download the binary content for these columns separately. This decoupling helps in avoiding re-downloading of huge binary content when records in the backend have minor changes.

Offline Objects provides a set of APIs to work with binary content for the synchronized data records from a relational database adapter such as RDBMS or SAP. The getBinaryStatus API returns a list of records for which, binary content download is pending or not initiated for a given object. The getBinary API downloads the binary content for a given primary key (a specific record). The downloaded binary content is saved in a file instead of the device database.

> **Note:**  
*   Binary API through Offline Objects is supported for Android and iOS platforms. For Web and Windows platforms, you can use the getBinaryContent API for downloading content from the relational database adapter. If required, this API must maintain relations with offline records in the application logic.  
*   For information about how to work with different data providers such as S3 and box, refer to the [Binary APIs](../../../Foundry/voltmx_foundry_user_guide/Content/VoltMXStudio/Binary_APIs.md) doc.  

Sample Codes
------------

```
//Sample code for getBinaryStatus  
  
var mediaObject = new voltmx.sdk.VMXObj("Media");
var options = {
    "download": {
        "columnName": "image",
        "queryType": voltmx.sdk.OfflineObjects.BinaryStatus.pending | voltmx.sdk.OfflineObjects.BinaryStatus.completed
    }
};

mediaObject.getBinaryStatus(options, onSuccess, onFailure);

function onSuccess(data) {
    //data={
    //	download:{
    //		completed:[{UserId=1}],
    //		pending:[{UserId=2}]
    //}
    //}
    alert("get binary status success " + JSON.stringify(data));
}

function onFailure(error) {
    alert("get binary status failed " + JSON.stringify(error));
}
```
```
//Sample code for getBinary  
  
var media = new voltmx.sdk.VMXObj("media");
var options = {};
options.primaryKeys = {
    "id": "2"
};
options.columnName = "picture";
options.fileId = "pic1";

function onFileDownloadStartedApp(response) {
    voltmx.print("Object onFileDownloadStarted" + JSON.stringify(response));
}

function onStreamDownloadCompletedApp(response) {
    //Not supported in the current version
}

function onChunkDownloadCompletedApp(response) {
    //Not supported in the current version
}

function onFileDownloadCompletedApp(response) {
    voltmx.print("Object onFileDownloadCompleted" + JSON.stringify(response) + ", file path = " + response.filePath);
}

function onDownloadFailureApp(error) {
    voltmx.print("Object onDownloadFailure:" + JSON.stringify(error));
}
media.getBinary(options, onFileDownloadStartedApp, onStreamDownloadCompletedApp,
    onChunkDownloadCompletedApp, onFileDownloadCompletedApp, onDownloadFailureApp);
}

```
