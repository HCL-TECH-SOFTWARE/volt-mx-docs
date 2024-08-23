

<object\>.getBinaryStatus
========================

The **<object\>.getBinaryStatus** returns an array of primary keys based on the query for status.

> **Note:**  For the <object\>.getBinaryStatus API to work, ensure that the object definition in Volt MX Foundry has a defined binary column.  


Volt MX  Iris (JavaScript)
-------------------------------

> **_Note:_** Not supported for Mobile Web, Windows, Desktop Web and Desktop Native channels.


### Signature

```
<VMXObj>.getBinaryStatus(options,successCallback,failureCallback)

```

### Parameters

  
| Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| options | JSON | Provide options to get customized binary status. For more information, refer [Sync Options](#sync-options). | Yes |
| successCallback | Function | The function is invoked on successful execution. | Yes |
| failureCallback | Function | The function is invoked on an error with the cause of failure as an argument upon execution failure. | Yes |

### Sync Options

  
| Key | Type | Description | Required |
| --- | --- | --- | --- |
| download | JSON | To get the binary download status of a particular binary column, provide the following variables as inputs:<br>- **columnName (String)**: The binary column name of the required object.<br>- **queryType (Number)**: A combination of the following values:{`voltmx.sdk.OfflineObjects.BinaryStatus.pending`, `voltmx.sdk.OfflineObjects.BinaryStatus.completed`, `voltmx.sdk.OfflineObjects.BinaryStatus.errored` }<br>**_Note:_** Use bitwise OR \("\|"\) between the queryTypes to use the combination of the values. | Yes |

### Return Type

void

### Example

```
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

Android (Java)
--------------

> **_Note:_** Not supported in the current version.


iOS (Objective C)
-----------------

> **_Note:_** Not supported in the current version.
