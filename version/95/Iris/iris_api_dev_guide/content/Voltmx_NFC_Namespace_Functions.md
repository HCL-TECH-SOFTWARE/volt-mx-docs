Voltmx NFC Namespace Functions
===============================


| key | Description |
| --- | --- |
| voltmx.nfc.scanTag | Starts the scan session for nearby NFC tags. |
| voltmx.nfc.stopScan | Stops the current NFC tag scanning session. |
| voltmx.nfc.updateUI| Updates the UI (User Interface) while scan session is in progress. |


<details open markdown="block"><summary>scanTag</summary>

Starts the scan session for nearby NFC tags.

**Syntax:**

voltmx.nfc.scanTag(config, successcallback, errorcallback);

**Input Parameters:**

<b>config [Object] - Mandatory</b>

Using the config parameter, the user can customize the behavior of the nfc tag scan. It is an object that has the following key-value pairs:

| Function | Description |
| --- | --- |
|  scanContinuously`[Boolean]`(Optional)| Configure the behavior of scan should continuous or should be stopped after 1st tag identified. Th default value is true. |
|  message `[String]`(Optional) | Configure UI message text. Applicable for iOS only. The default value is empty |
|  scanTimeout`[number]`(Optional)| Configure scan timeout in milli seconds. The default timeout is 60 seconds. Configuring scan timeout applicable for Android only |

<b>successcallback [Function] - Mandatory</b>

The successcallback function specifies the callback function that must be executed when the API call is successful. The signature of the callback function is successcallback(tagsArray) where, tagsArray is an array of NFCTag object.

**errorcallback [Function] - Mandatory**

The errorcallback function specifies the callback function that must be executed when the API call fails. The callback function has the following signature:

errorcallback(readerror)- readerror is an object that has the following key-value pairs:

| key| Description |
| --- | --- |
|  errorCode [Number]| error code. All error code defined [here](Constants.md).|
|  errorMessage [String] | error message.|

<b>Return Values</b>

None.

Remarks

IOS shows UI.

<b>Example:</b>

```
function scanNFCTags() {

var config = {scanContinuously : false, message : "Hold your device near an NFC tag."};

if (voltmx.os.hasNFCSupport()) {

var errorCallback = function(error){

if(error.errorCode === voltmx.nfc.ERROR_TIMEOUT){

alert("Tag scan session timeout.");

}

};

var success = function(tags){

if(tags!=undefined && tags.length>0){

voltmx.nfc.updateUI({"message": tags.length+" tag(s) found."});

alert(tags.length+" tag(s) found.”);

voltmx.nfc.stopScan();

}

};

voltmx.nfc.scanTag(config, success, errorCallback);

} else {

alert("NFC Support is not available in this device");

}

}

```

<b>Platform Availability</b>

Android, iOS

</details>

<details open markdown="block"><summary>stopScan</summary>


Stops the current running NFC scan session.

<b>Syntax:</b>

voltmx.nfc.stopScan();

<b>Input Parameters:</b>

 None.

<b>Return Values</b>

None.

<b>Remarks</b>

None.

<b>Example:</b>

```
function scanNFCTags() {

var config={scanContinuously: false, message: "Hold your device near an NFC tag."};

if (voltmx.os.hasNFCSupport()) {

var errorCallback = function(error){

if(error.errorCode === voltmx.nfc.ERROR_TIMEOUT){

alert("Tag scan session timeout.");

}

};

var success = function(tags){

if(tags!=undefined && tags.length>0){

voltmx.nfc.updateUI({"message": tags.length+" tag(s) found."});

alert(tags.length+" tag(s) found.”);

voltmx.nfc.stopScan();

}

};

voltmx.nfc.scanTag(config, success, errorCallback);

} else {

alert("NFC Support is not available in this device");

}

}

```

**Platform Availability**

Android, iOS

</details>

<details open markdown="block"><summary>updateUI</summary>

Update the UI during the NFC scan, reading/writing data, and finishing the scan session.

<b>Syntax:</b>

voltmx.nfc.updateUI(config);

<b>Input Parameters:</b>

<b>config [Object] - Optional</b>

The config object specifies what information should be updated on the UI. The <b>config</b> object contains certain key-value pairs.

config \[Object\] - Config object that has the following key-value pai

| key| Description |
| --- | --- |
|  message `[String]`(Optional)| Configure UI message text. Applicable for iOS only|

<b>Return Values</b>

None.

<b>Remarks</b>

Android does not have any UI effect by calling this API.

<b>Example:</b>

```
function readData() {

var config = {scanContinuously : false, message : "Hold your device near an NFC tag."};

if (voltmx.os.hasNFCSupport()) {

var scanFailureCallback = function(error){

if(error.errorCode === voltmx.nfc.ERROR_NO_TAG){

alert("Tag no longer nearby to read.");

}

};

var success = function(tags){

if(tags!=undefined && tags.length>0){

if(tags.length==1){

var readSuccessCallback = function(tagData){

var result = JSON.stringify(data);

voltmx.nfc.updateUI({"message": "Tag read success."});

voltmx.nfc.stopScan();

alert(result);

};

tags[0].readData(readSuccessCallback, scanFailureCallback)

}

else {

voltmx.nfc.updateUI({"message": "More than 1 tags found. Please present only 1 tag."});

}

}

};

voltmx.nfc.scanTag(config, success, scanFailureCallback);

} else {

alert("NFC Support is not available in this device");

}

}

```

<b>Platform Availability</b>

iOS

</details>



