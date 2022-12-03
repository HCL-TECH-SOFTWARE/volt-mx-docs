                               

User Guide: [SDKs](../Foundry_SDKs.md) > [VoltMX Iris SDK](Installing_VoltMXJS_SDK.md) > Binary APIs

Binary APIs
===========

Volt MX  Foundry SDK offer a different set of API to work with binary data on integration and object service. The APIs allow uploading and downloading binary data from different data providers such as Amazon S3, Box etc.

Online binary API allows downloading the files as a whole (typically small image files), in chunks (large pdfs or videos) or in streaming mode (raw bytes).

> **_Note:_** For SPA/Desktop Web, SDK supports Binary APIs from release version V8 SP3 for Box adapter.  
  
For Android and iOS, the Binary APIs are supported from V8 SP2 for Box adapter.

Integration Service APIs
------------------------

### Download API

The getBinaryData API allows users to download binary objects such as PDF, Document or any other files.

#### **Syntax**

```
getBinaryData(operationName, downloadParams, streaming, headers, fileDownloadStartedCallback, chunkDownloadCompletedCallback, fileDownloadCompletedCallback, fileDownloadFailureCallback, options);
```

#### **Parameters**

  
| Parameter | Type | Description |
| --- | --- | --- |
| operationName | String | Integration service operation that provides the binary details. The parameter is used as part of Integration Service. |
| downloadParams | JSON | Download related parameters required for downloading the binary. |
| Streaming | Boolean | Boolean flag to determine if the required data must be sent in chunks or a file after download. |
| headers |   | Provision to send custom headers. |
| fileDownloadCompletedCallback | True/False | The callback is invoked after successful file download with the file path. The parameter is mandatory if the streaming is false. |
| chunkDownloadCompletedCallback | True/False | The callback is invoked after each successful chunk download. The parameter is invoked when the streaming is true. The callback is mandatory if the streaming is true. |
| fileDownloadCompletedCallback | True/False | The callback is invoked after successful file download with the file path. The parameter is mandatory if the streaming is false. |
| fileDownloadFailureCallback |   | Callback invoked in case of download failure. |
| options |   | Optional parameters are sent from this parameter. ChunkSize can be sent from this parameter. The parameter is used as part of Integration Service. |

#### **Options**

  
| Options | Type | Description | Mandatory |
| --- | --- | --- | --- |
| ChunkSize | String | ChunkSize option allows to download the binary in chunks of given size. If a value is not specified, the default value is used. Default size is 1048576. | No |

> **_Note:_** It is mandatory to pass all its parameters defined on the service.

#### **Sample Code**

```
function fileDownloadStartedCallback(res) {
    //Callback
}

function chunkDownloadCompletedCallback(res) {
    //Callback
}

function fileDownloadCompletedCallback(res) {
    //Callback
}

function fileDownloadFailureCallback(err) {
    //Callback
}

var downloadParams = {};
var serviceName = "integration_service_name";
// Get an instance of SDK
var client = voltmx.sdk.getCurrentInstance();
var operationName = "operation_name";

// Adapter specific parameters (Mentioned below)
var integrationSvc = client.getIntegrationService(serviceName);
var streaming = false;
integrationSvc.getBinaryData(operationName,
    downloadParams,
    streaming, {},
    //Provision for user defined headers
    fileDownloadStartedCallback,
    chunkDownloadCompletedCallback,
    fileDownloadCompletedCallback,
    fileDownloadFailureCallback);
```

> **_Note:_** For Android and iOS platforms, filePath or base64 chunk data is provided based on the streaming flag. For DesktopWeb [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) object is specified in successCallback.

### Upload API

The uploadBinaryData API allows users to upload binary objects such as PDF, Document or any other files.

#### **Syntax**

```
uploadBinaryData(operationName, uploadParams, fileUploadStartedCallback, chunkUploadCompletedCallback, fileUploadCompletedCallback, fileUploadFailureCallback)
```

#### Parameters

  
| Parameters | Type | Description |
| --- | --- | --- |
| operationName | String | Integration Service Operation which provides the binary details. The parameter is used as part of Integration Service. |
| uploadParams | JSON | upload related parameters required for uploading binary. The parameter is used as part of Integration Service. |
| fileUploadStartedCallback |   | The callback is invoked when the upload starts. |
| chunkUploadCompletedCallback |   | The callback is invoked when the upload of a chunk is completed. The parameter is applicable for backends that support chunked upload. |
| fileUploadCompletedCallback |   | The callback is invoked when the upload completes. |
| fileUploadFailureCallback |   | The callback is invoked when the upload fails (for any reason). |

> **_Note:_** It is mandatory to specify either FilePath or rawBytes for upload in the uploadParams parameter. Both parameters are NOT allowed together.

**FilePath** must contain a fully qualified path of a valid file present on the device.

**rawBytes** contains the raw bytes to be uploaded. An obvious usage is capturing an image using camera and uploading the same.

**fileObject** is accepted for DesktopWeb. fileObject is the output of Browse API and is the instance of [File](https://developer.mozilla.org/en-US/docs/Web/API/File).

#### **Common Parameters**

  
| uploadParams | Type | Description | Mandatory |
| --- | --- | --- | --- |
| fileName | String | The valid file name of the file to be uploaded with the proper extension. | Yes |
| FilePath | String | Fully qualified path of a valid file present on the mobile device. | Yes (if rawBytes are not provided) |
| rawBytes | String | Raw bytes of file to be uploaded | Yes (if FilePath is not provided) |
| fileObject | File | Output of the Browser API provided by HCL or the browser is a reference to the file in the device. | Yes (for DesktopWeb) |

> **_Note:_** It is mandatory to pass all its parameters defined on the service.

#### **Sample Code**

```
function fileUploadStartedCallback(res) {
    //Callback
}

function chunkUploadCompletedCallback(res) {
    //Callback
}

function fileUploadCompletedCallback(res) {
    //Callback
}

function fileUploadFailureCallback(err) {
    //Callback
}

var uploadParams = {};

var serviceName = "integration_service_name";
// Get an instance of SDK
var client = voltmx.sdk.getCurrentInstance();
var operationName = "operation_name";

// Adapter specific parameters (Mentioned below)
var integrationSvc = client.getIntegrationService(serviceName);

integrationSvc.uploadBinaryData(operationName,
    uploadParams,
    fileUploadStartedCallback,
    chunkUploadCompletedCallback,
    fileUploadCompletedCallback,
    fileUploadFailureCallback);
```

Object Service APIs
-------------------

### Download API

The **getBinaryData** API allows users to download binary objects such as PDF, Doc or any other files.

#### **Syntax**

```
getBinaryData(options,fileDownloadStartedCallback, chunkDownloadCompletedCallback, fileDownloadCompletedCallback, fileDownloadFailureCallback)
```

#### **Parameters**

  
| Parameter | Type | Description |
| --- | --- | --- |
| options | JSON | Accepts a JSON object on which the binary is downloaded. |
| fileDownloadStartedCallback | JSON | The callback is invoked after the file download starts. |
| chunkDownloadCompletedCallback | True/False | The callback is invoked after each successful chunk download. The parameter is invoked when the streaming is true. The callback is mandatory if the streaming is true. |
| fileDownloadCompletedCallback | True/False | The callback is invoked after successful file download with the file path. The parameter is mandatory if the streaming is false. |
| fileDownloadFailureCallback | True/False | The callback is invoked in case of download failure. |

#### **Options**

  
| Options | Type | Description | Mandatory | Default |
| --- | --- | --- | --- | --- |
| dataObject | String | Instance of voltmx.sdk.dto.DataObject | Yes |   |
| streaming | Boolean | Boolean flag to determine whether the data needed to be given to chunks or a file after download | No | False |
| queryParams |   | provision for the user to specify the additional query params to be sent in the download call. | No | Null |
| headers |   | Provision for sending custom headers. | No | Null |
| chunkSize |   | chunk size to download | No | 1048576 |

#### **Sample Code**

```
var downloadParams = {};

// Adapter specific parameters (Mentioned below)
var objSvc = voltmx.sdk.getCurrentInstance().getObjectService("serviceName");

var dataObject = new voltmx.sdk.dto.DataObject("binaryObjectName");
dataObject.setRecord(downloadParams);

objSvc.getBinaryData({
        "dataObject": dataObject
    },
    function(response) {
        voltmx.print("fileDownloadStartedCallback: " + JSON.stringify(response));
    },
    function(response) {
        voltmx.print("chunkDownloadCompleteCallback: " + JSON.stringify(response));
    },
    function(response) {
        voltmx.print("fileDownloadCompleteCallback: " + JSON.stringify(response));
    },
    function(response) {
        voltmx.print("fileDownloadFailureCallback: " + JSON.stringify(response));
    });
```

> **_Note:_** It is mandatory to pass all its parameters defined on the service.

> **_Note:_** For Android and iOS platforms, filePath or base64 chunk data is provided based on the streaming flag. For DesktopWeb [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) object is specified in successCallback.

### Upload API

The **uploadBinaryData** API allows users to download binary objects such as PDF, Doc, or any other files.

#### **Syntax**

```
uploadBinaryData(options, fileUploadStartedCallback, chunkUploadCompletedCallback, fileUploadCompletedCallback, fileUploadFailureCallback)

```

#### **Parameters**

  
| Parameter | Type | Description |
| --- | --- | --- |
| options | JSON | The JSON object, based on the binary uploaded. |
| fileUploadStartedCallback |   | The callback is invoked when the upload starts. |
| chunkUploadCompletedCallback |   | The callback is invoked when the upload of a chunk is completed. The parameter is applicable for backends that support chunked upload. |
| fileUploadCompletedCallback |   | The callback is invoked when the upload completes. |
| fileUploadFailureCallback |   | The callback is invoked when the upload fails (for any reason). The JSON object specified under options is a voltmx.sdk.dto.DataObject containing relevant parameters for upload. |

#### **Options**

  
| Options | Type | Description | Mandatory |
| --- | --- | --- | --- |
| dataObject |   | Instance of voltmx.sdk.dto.DataObject | Yes |

#### **Common Parameters**

  
| uploadParams | Type | Description | Mandatory |
| --- | --- | --- | --- |
| fileName | String | The valid file name of the file to be uploaded with the proper extension. | Yes |
| FilePath | String | Fully qualified path of a valid file present on the mobile device. | Yes (if rawBytes are not provided) |
| rawBytes | String | Raw bytes of file to be uploaded | Yes (if FilePath is not provided) |
| fileObject | File | Output of the Browser API provided by HCL or the browser is a reference to the file in the device. | Yes (for DesktopWeb) |

> **_Note:_** It is mandatory to pass all its parameters defined on the service.

#### **Sample Code**

```
var uploadParams = {};
var client = voltmx.sdk.getCurrentInstance();
var objectSvc = voltmxClient.getObjectService("serviceName");
var dataObject = new voltmx.sdk.dto.DataObject("binaryObjectName");
dataObject.setRecord(uploadParams);

objectSvc.uploadBinaryData({
        "dataObject": dataObject
    },
    function(response) {
        voltmx.print("fileUploadStartedCallback: " + JSON.stringify(response));
    },
    function(response) {
        voltmx.print("chunkUploadCompleteCallback: " + JSON.stringify(response));
    },
    function(response) {
        voltmx.print("fileUploadCompleteCallback: " + JSON.stringify(response));
    },
    function(response) {
        voltmx.print("fileUploadFailureCallback: " + JSON.stringify(response));
    });
```
