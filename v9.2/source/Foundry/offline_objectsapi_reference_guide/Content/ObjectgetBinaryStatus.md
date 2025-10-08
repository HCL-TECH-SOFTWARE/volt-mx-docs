

<object\>.getBinaryStatus
========================

The **<object\>.getBinaryStatus** returns an array of primary keys based on the query for status.


<blockquote>
<em><b>Note:</b></em> 
<ul>
<li>This API is supported from V8 SP4 onwards.</li>
<li>For the &lt;object&gt;.getBinaryStatus API to work, ensure that the object definition in Volt MX Foundry has a defined binary column.</li>
</ul>
</blockquote>


Volt MX  Iris (JavaScript)
-------------------------------

> **_Note:_** Not supported for Mobile Web, Windows, and Desktop Web channels.

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


<table>
    <tr>
        <th>Key</th>
        <th>Type</th>
        <th>Description</th>
        <th>Required</th>
    </tr>
    <tr>
        <td>download</td>
        <td>JSON</td>
        <td>To get the binary download status of a particular binary column, provide the following variables as inputs:<br>
            <ul>
                <li><b>columnName (String)</b>: The binary column name of the required object.</li>                
                <li><b>queryType (Number)</b>: A combination of the following values: <br>
                    <code>{voltmx.sdk.OfflineObjects.BinaryStatus.pending, voltmx.sdk.OfflineObjects.BinaryStatus.completed, voltmx.sdk.OfflineObjects.BinaryStatus.errored}</code>
                <em><b>Note: </b></em> Use bitwise OR ("|") between the queryTypes to use the combination of the values.
                </li>
            </ul>
        </td>
        <td>Yes</td>
    </tr>
</table>



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
