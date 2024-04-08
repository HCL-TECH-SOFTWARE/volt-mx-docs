                            
NFC API
========

**Voltmx NFC Documentation**

<details close markdown="block"><summary>What is NFC</summary>
Near Field Communication (NFC) is a set of short-range wireless technologies, typically requiring a distance of 4 cm or less to initiate a connection. NFC lets you share small payloads of data between the device and NFC tag.

For more information about the NFC specification please visit the official NFC forum link below.

click [here](https://gototags.com/companies/nfc-forum)

</details>

<details close markdown="block"><summary>voltmx.nfc namespace</summary>

Voltmx.nfc namespace provides a high-level interface to make the communication between NDEF capable NFC tags and the device.

NDEF is a standardized data format specification by the [NFC Forum](https://gototags.com/companies/nfc-forum) which is used to describe how a set of records to be encoded onto an NFC tag.

The voltmx NFC API's enables your application to write and read the data from NFC tag by scanning the tag with Android or iOS powered devices.

Currently, the below well-known types are supported for reading and writing the data from/to NFC tags on both Android and iOS.

* TEXT
* URI
* MIME_MEDIA
</details>

<details close markdown="block"><summary>Capabilities and Permissions</summary>
  
The following configuration needs to be set up for IRIS application to use NFC Tag API’s.<br>
<b>IOS</b>

IOS Requires Near Field Communication Tag Reader Session Formats Entitlement, find [here](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Iris/iris_user_guide/Content/Adding_iOS_app_Capabilities.html) how we can add iOS capabilities. For more info check apple documents [here](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_developer_nfc_readersession_formats?language=objc). Add below configuration to enable NFC for your iris project:

`"com.apple.developer.nfc.readersession.formats": ["TAG"]`

IOS also needs usage description in info.plist. Add the description with key NFCReaderUsageDescription.

<b>Android</b>

<b>To enable the NFC function for Android below permission must be added through Iris</b><br>
<b>< uses-permission android:name="android.permission.NFC"/ ></b>

>**Note:** If this permission is not added, NFC functionality for Android will not be enabled.

Depending on the application functionality, you may need to configure the intent filters if your application must listen to any data scanned from the NFC tag.

Detailed description related to Android manifest configuration is available [here]()

You can also check the official Android link for NFC [here](https://developer.android.com/develop/connectivity/nfc/nfc#manifest).

</details>

<details open markdown="block"><summary id="constants">Constants</summary>

The voltmx.nfc namespace provides the below data type constants and error constants.

**Data Types constants**

Below are the constants to identify the type of data in the NFC tag.

| Data Type | Description |
| --- | --- |
| voltmx.nfc.DATATYPE_TEXT | Constant for the data MIME text/plain type.|
| voltmx.nfc.DATATYPE_URI | Constant for the data of type URI.|
| voltmx.nfc.DATATYPE_MEDIA| Constant for the data of type Mime Media.|
| voltmx.nfc.DATATYPE_UNKNOWN| Constant for the unrecognized data. The data type which is not supported will be mapped to this constant.|

## Error Constants


| Error | Description |
| --- | --- |
| voltmx.nfc.ERROR_TIMEOUT | This error will be thrown in error callback of scanTag Api when the no tag has been detected within the timeout.|
| voltmx.nfc.ERROR_USER_CANCELLED| Error constant to indicate that user has cancelled the current scan. This will be thrown in error callback during the call to scanTag API.|
| voltmx.nfc.ERROR_TERMINATED | Error constant to indicate that the read or write operation has been terminated due to the disconnection of the current NFC tag.|
| voltmx.nfc.ERROR_UNSUPPORTED_TAG | Error constant to indicate that the tag type is not supported.|
| voltmx.nfc.ERROR_NO_TAG | Error constant to indicate that the tag is not present for read or write operation.|
| voltmx.nfc.ERROR_READ_ONLY_TAG| Error constant to indicate that the current tag is read-only tag while performing the write operation on tag and data cannot be written to the tag.|
| voltmx.nfc.ERROR_TAG_CAPACITY_EXCEEDED| Error constant to indicate that the data cannot be written to the tag because the data size is more than the tag size limit.|
| voltmx.nfc.ERROR_DATA_TYPE_NOT_SUPPORTED| Error constant to indicate that the data attempted to write in the tag is not supported.|
| voltmx.nfc.ERROR_UNKNOWN| Unknown error during the scan, read or write operation.|

</details>

<details close markdown="block"><summary>Voltmx.nfc namespace functions</summary>


| key | Description |
| --- | --- |
| voltmx.nfc.scanTag | Starts the scan session for nearby NFC tags. |
| voltmx.nfc.stopScan | Stops the current NFC tag scanning session. |
| voltmx.nfc.updateUI| Updates the UI (User Interface) while scan session is in progress. |

**1. voltmx.nfc.scanTag**

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
|  errorCode [Number]| error code. All error code defined [here](#constants).|
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

## stopScan

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

**3. updateUI**

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

<details close markdown="block"><summary>NFCTag Object</summary>

The nfcTag object is part of the NFC API, and it represents an NFC Tag. Using a nfcTag object, your app can read and write the from/to the NFC tag. It consists of the following API elements.

* Methods 

**Overview**

Use the voltmx.nfc.scanTag API to get a nfcTag object. Once you get a nfcTag object, it can call the NFC tag object methods to read data, write data, or write application record of the NFC tag.

**NFCTag Methods**

The NFCTag Object consists of the following methods.

**1. readData**

Reads the data records of an NFC Tag.

<b>Syntax:</b>

readData(successcallback,errorcallback);

<b>Input Parameters:</b>

<b>successcallback [Function] - Mandatory</b>

The successcallback function specifies the callback function that must be executed when the API call is successful. The signature of the callback function is successcallback(tagDataArray) where, <b>tagDataArray</b> contains nfc data records of the NFCTag. It is an object array, and each object contains certain key-value pairs.

tagData \[Object\] - TagData that has the following key-value pairs

| key| Description |
| --- | --- |
|  type [Constant]| Type of data, like text, URI, or Media. All supported constants defined [here](#constants)|
|  data [Object] | Content of the specific tag record. For text and URI type data it is a string object. For Media type it is a voltmx.types.RawBytes object.|
|  mimeType [String] | Mime type of media data. Applicable only for Media type.|

**errorcallback [Function] - Mandatory**

The errorcallback function specifies the callback function that must be executed when the API call fails. The callback function has the following signature:

errorcallback(readerror)- readerror is an object that has the following key-value pairs:

| key| Description |
| --- | --- |
|  errorCode[Number] | error code. All error code defined [here](#constants). |
|  errorMessage [String] | error message. |

<b>Return Values</b>

None.

<b>Remarks</b>

This method only affects NFC tag nearby and scan session active.

<b>Example:</b>

```
function readData() {

var config = {scanContinuously:false, message:"Hold your device near an NFC tag."};

if (voltmx.os.hasNFCSupport()) {

var errorCallback = function(error){

if(error.errorCode === voltmx.nfc.ERROR_NO_TAG){

alert("Tag no longer nearby to read.");

}

};

var success = function(tags){

if(tags!=undefined && tags.length>0){

if(tags.length==1){

var readSuccessCallback = function(tagData){

var result = JSON.stringify(tagData);

voltmx.nfc.updateUI({"message": "Tag read success."});

voltmx.nfc.stopScan();

alert(result);

};

tags[0].readData(readSuccessCallback, errorCallback)

}

else {

voltmx.nfc.updateUI({"message": "More than 1 tags found. Please present only 1 tag."});

}

}

};

voltmx.nfc.scanTag(config, success, errorCallback);

} else {

alert("NFC Support is not available in this device");

}

```
Platform Availability

Android, iOS

**writeData**

<b>Syntax:</b>

writeData(data, shouldAppend, successcallback, errorcallback);

<b>Input Parameters:</b>

<b>data [Array] - Mandatory</b>

The data array specifies the array of records that must be written on the NFC tag. The signature of the data array is [recordData] where <b>recordData</b> contains certain key-value pairs.

recordData \[Object\] - Record data that has the following key-value pairs:

| key| Description |
| --- | --- |
|  type [Constant] | Type of data, like text, URI, or Media. All supported constants defined [here](#constants)|
|  data [Object] | Content of the specific tag record. For text and URI type data it is a string object. For Media type it is a voltmx.types.RawBytes object|
|  mimeType [String]| Mime type of media data. Applicable only for Media type.|

<b>shouldAppend[Boolean] - Mandatory</b>

The shouldAppend flag specifies that the data gets appended to existing data or write without append.

<b>successcallback [Function] - Mandatory</b>

The successcallback function specifies the callback function that must be executed when the API call is successful. The signature of the callback function is successcallback()

<b>errorcallback [Function] - Mandatory</b>

The errorcallback function specifies the callback function that must be executed when the API call fails. The callback function has the following signature:

errorcallback(readerror)- readerror is an object that has the following key-value pairs:

| key| Description |
| --- | --- |
|  errorCode [Number] | error code. All error code defined [here](#constants)|
|  errorMessage [String] | error message.|

**Return Values**

None.

**Remarks**

This method only affects NFC tag nearby and scan session active. The NFC tag should support writing data. Below iOS 13 OS devices will not support writing.

**Example:**

```
function writeData() {

var config = {scanContinuously : false, message: "Hold your device near an NFC tag to write data."};

if (voltmx.os.hasNFCSupport()) {

var errorCallback = function(error){

if(error.errorCode === voltmx.nfc.ERROR_NO_TAG){

alert("Tag no longer nearby to write.");

}

};

var success = function(tags){

if(tags!=undefined && tags.length>0){

if(tags.length==1){

var writeSuccessCallback = function(){

voltmx.nfc.updateUI({"message": "Tag write success."});

alert("Tag write success.");

voltmx.nfc.stopScan();

};

var vCardData = "BEGIN:VCARD\nVERSION:3.0\nN:Pallam;Madhukar\nORG:HCL\nADR:Hyderabad\nEND:VCARD";

var textData = "Hello World"; var uriData = "https://www.hcltech.com";

var data = [

{

type: voltmx.nfc.DATATYPE_TEXT,

data: textData

},

{

type: voltmx.nfc.DATATYPE_URI,

data: uriData

},

{

type: voltmx.nfc.DATATYPE_MEIDA,

data: new voltmx.types.RawBytes(vCardData),

mimeType: "text/vcard"

},

];

tags[0].writeData(data, false, writeSuccessCallback, errorCallback)

}

else {

voltmx.nfc.updateUI({"message": "More than 1 tags found. Please present only 1 tag."});

}

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

### writeApplicationRecord

This API writes the android application record to NFC tag and calls the success/failure callback if defined.

Application record is the valid application package in the form of String.

When the embedded application record present in the tag is scanned, it is guaranteed that Android system launch that application.

If the application is not installed on device, system launches Google Play to download the application.

<b>Syntax:</b>

writeApplicationRecord(packageName, successcallback, errorcallback);

<b>Input Parameters:</b>

<b>packageName[String] - Mandatory</b>

Package name is the valid application package name in terms of String.

<b>successcallback [Function] - Mandatory</b>

The successcallback function specifies the callback function that must be executed when the API call is successful. The signature of the callback function is successcallback()

<b>errorcallback [Function] - Mandatory</b>

The errorcallback function specifies the callback function that must be executed when the API call fails. The callback function has the following signature:

errorcallback(readerror)- readerror is an object that has the following key-value pairs:

| key| Description |
| --- | --- |
|  errorCode [Number] | error code. All error code defined [here](#constants)|
|  errorMessage [String | error message.|

<b>Return Values</b> 

None.

<b>Remarks</b>

This Api is only supported on Android.

<b>Example:</b>

```
writePackage: function(package) {
var config = {
message: "Hold your device near an NFC tag." 
};
var tagFoundCallback = function(tags) {
if (tags.length > 0) {
if (tags.length == 1) {
var tag = tags[0]; //choosing first tag.  
var writeSuccessCallback = function(data){
voltmx.print("NFC Write success::" + data);
alert("Package write success!!");
voltmx.nfc.updateUI({
message: "Package write success!!" 
});
voltmx.nfc.stopScan();
};
var writeFailureCallback = function(errorCode) {
voltmx.print("Package write Failure");
alert("Package write Failure");
};
tag.writeApplicationRecord(package, writeSuccessCallback, writeFailureCallback);
} else {
voltmx.nfc.updateUI({
message: "More than 1 tags found. Please present only 1 tag." 
});
}
}
};
var errorCallback = function(errorCode) {
voltmx.print("NFC ERROR :: " + errorCode);
};
voltmx.nfc.scanTag(config, tagFoundCallback, errorCallback);
}
    
```

 <b>Platform Availability</b>           

 Android

</details>

