

<object\>.getBinary
==================

The **<object\>.getBinary** allows downloading and associating binary files with the records in the offline mode. The API downloads the binary files for the specified record primary keys of the object. The downloaded files are read from the device without downloading again from the server (i.e. the binary files can be used in the offline mode).

> **_Note:_** For the <object\>.getBinary API to work, ensure the object definition in Volt MX Foundry has a defined binary column .

Volt MX  Iris (JavaScript)
-------------------------------

> **_Note:_** Not supported for Mobile Web, Windows, Desktop Web and Desktop Native channels.


### Signature

```
<VMXObj>.getBinary (options, fileDownloadStartedCallback, chunkDownloadCompletedCallback, streamDownloadCompletedCallback, fileDownloadCompletedCallback, downloadFailureCallback)

```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 100px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">A dictionary containing binaryColumnName, forceDownload, chunkSize, and primaryKeys.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">fileDownloadStartedCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked when the download starts. Response object includes fileId.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">chunkDownloadCompletedCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Not support in the current version.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">streamDownloadCompletedCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Not supported in the current version</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">fileDownloadCompletedCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked when the file is downloaded successfully. Response Object includes fileId and filePath.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">downloadFailureCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked when the file download fails with a cause of failure. Response object will have the exception for failure.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

### Sync Options

  
| Key | Type | Description | Required |
| --- | --- | --- | --- |
| columnName | String | Name of the binary column for which the data must be downloaded. | Yes |
| forceDownload | Boolean | Enable the flag to forcefully download a file from the server. If the flag is not enabled and the file is available on the device, it returns the local file. | No |
| fileId | String | Downloaded files are saved with the current time stamp as the file name, if fileId is given, the ID is appended to the timestamp. **Example**: 1521455068827\_<fileID\> | No |
| primaryKeys | JSON | Specify the primary keys of the record to be updated. Use a record's primary key, column name as the key and respective values to populate the primary keys JSON. | Yes |
| chunkSize | Number | Not supported in the current version. | No |

### Return Type

void

### Example

```
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
    //Not Supported in the current version
}

function onChunkDownloadCompletedApp(response) {
    //Not Supported in the current version
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

Android (Java)
--------------

### Signature

```
void getBinary(final Map<String, Object> options, final VMXBinaryDownloadCallback vmxBinaryDownloadCallback)
```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 307px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap&lt;String, Object&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">A dictionary containing binaryColumnName, forceDownload, chunkSize, and primaryKeys.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">vmxBinaryDownloadCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VMXBinaryDownloadCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Application implements <b>onFileDownloadStarted</b>, <b>onStreamDownloadCompleted</b>, <b>onChunkDownloadCompleted</b>, <b>onFileDownloadCompleted</b>, <b>onDownloadFailure</b> methods of VMXBinaryDownloadCallback interface.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

### Sync Options

  
| Key | Type | Description | Required |
| --- | --- | --- | --- |
| columnName | String | Name of the binary column for which data is to be download. | Yes |
| forceDownload | Boolean | Enable this flag to forcefully download the file from the server. If the flag is not enabled and the file is available on the device, it returns the local file. | No |
| fileID | String | The ID of the file downloaded. The ID is appended with a timestamp. | No |
| primaryKeys | Hashmap<String, Object\> | Specify the primary keys of the record to be updated. Use a record's primary key, column name as the key and respective values to populate the primary keys map. | Yes |
| chunkSize | Integer | Not supported in the current version. | No |

### Return Type

void

### Example

```
VMXObj media = new VMXObj("media");
HashMap < String, Object > options = new HashMap < String, Object > ();
HashMap < String, Object > primaryKeys = new HashMap < > ();
primaryKeys.put("id", 2);
options.put(KSPublicConstants.PRIMARY_KEYS, primaryKeys);
options.put(KSPublicConstants.BINARY_COLUMN_NAME, "picture");
options.put(KSPublicConstants.BINARY_FORCE_DOWNLOAD, false);
options.put(BinaryDataManagerConstants.FILE_ID, "pic1");
syncObject.getBinary(options, new VMXBinaryDownloadCallback() {
    @Override
    public void onFileDownloadStarted(Object object) {
        Log.d("getBinary", "File download started");
    }

    @Override
    public void onStreamDownloadCompleted(Object object) {
        //Not supported in the current version
    }

    @Override
    public void onChunkDownloadCompleted(Object object) {
        //Not supported in the current version
    }

    @Override
    public void onFileDownloadCompleted(Object object) {
        Log.d("getBinary", "File download completed successfully");
    }

    @Override
    public void onDownloadFailure(Object error) {
        Log.e("getBinary", "File download failed with error :" + error.toString());
    }
});
```

iOS (Objective C)
-----------------

### Signature

```
void <VMXObj>.getBinary:(NSDictionary <NSString *,id>*)options
	 downloadStartedHandler:(VMXFileDownloadStartedCompletionBlock)fileDownloadStartedCompletionBlock
	 chunkDownloadCompletedHandler:(VMXChunkDownloadCompletedCompletionBlock)chunkDownloadCompletedCompletionBlock
	 streamDownloadCompletedHandler:(VMXStreamDownloadCompletedCompletionBlock)streamDownloadCompletionBlock
	 fileDownloadCompletedHandler:(VMXFileDownloadCompletedCompletionBlock)fileDownloadCompletedCompletionBlock
	 downloadFailureHandler:(VMXDownloadFailureCompletionBlock)downloadFailureCompletionBlock)

```

### Parameters

<table> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary&lt;NSString*, id&gt;</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">A dictionary containing binaryColumnName, forceDownload, chunkSize, and primaryKeys.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">fileDownloadStartedHandler</td><td class="TableStyle-Basic-BodyE-Column1-Body1">VMXFileDownloadStartedCompletionBlock</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked when the download has started. Response object includes fileId.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">chunkDownloadCompletedHandler</td><td class="TableStyle-Basic-BodyE-Column1-Body1">VMXChunkDownloadCompletedCompletionBlock</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Not supported in the current version.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">streamDownloadCompletedHandler</td><td class="TableStyle-Basic-BodyE-Column1-Body1">VMXStreamDownloadCompletedCompletionBlock</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Not supported in the current version</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">fileDownloadCompletedHandler</td><td class="TableStyle-Basic-BodyE-Column1-Body1">VMXFileDownloadCompletedCompletionBlock</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked when the file is downloaded successfully. Response Object includes fileId and filePath.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">downloadFailureHandler</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VMXDownloadFailureCompletionBlock</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked when the file download fails with the cause of failure. Response object will have the exception for failure.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

### Sync Options

  
| Key | Type | Description | Required |
| --- | --- | --- | --- |
| columnName | String | Name of the binary column for which the data is to be downloaded. | Yes |
| forceDownload | Boolean | Enable this flag to forcefully download the file from the server. If the flag is not enabled and the file is available on the device, it returns the local file. | No |
| fileID | String | The ID of the file downloaded. The ID is appended with a timestamp. | No |
| primaryKeys | NSDictionary<NSString \*, id\> | Specify the primary keys of the record to be updated. Use a record's primary key, column name as the key and respective values to populate the primary keys dictionary. | Yes |
| chunkSize | Integer | Not supported in the current version. | No |

### Return Type

void

### Examples

```
VMXObj * _media = [
    [VMXObj alloc] initWithName: @"media"
    error: & ;error
];
NSMutableDictionary < NSString * , id > * options = [
    [NSMutableDictionary alloc] init
];
NSMutableDictionary < NSString * , id > * primaryKeys = [
    [NSMutableDictionary alloc] init
];

primaryKeys[@"id"] = @"2";
options[VMXCONSTANTS_CRUD_OPTION_PRIMARY_KEYS] = primaryKeys;
options[VMXCONSTANTS_BINARY_COLUMN_NAME] = @"picture";
options[VMXCONSTANTS_BINARY_FORCE_DOWNLOAD] = @NO;
options[VMXCONSTANTS_BINARY_FILEID] = @"pic1";
NSMutableArray < NSString * > * filePaths = [NSMutableArray new];

[media getBinary: options downloadStartedHandler: ^ (id object) {
        NSLog(@"Download started successfully");
    }
    chunkDownloadCompletedHandler: ^ (id object) {
        //Not implemented
    }
    streamDownloadCompletedHandler: ^ (id object) {
        //Not implemented
    }
    fileDownloadCompletedHandler: ^ (id object) {
        NSLog(@"Download completed successfully");
    }
    downloadFailureHandler: ^ (id object) {
        id error = [object valueForKey: VMXCONSTANTS_SYNC_ERRORS];
        NSLog(@"Update failed with error: %@", [error value]);
    }
];

```

> **_Note:_** Binary download support through Offline Objects is limited in RDBMS, Storage and SAP backend services.
