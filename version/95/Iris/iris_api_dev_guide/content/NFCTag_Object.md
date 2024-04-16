                            
NFCTag Object
==============

The nfcTag object is part of the NFC API, and it represents an NFC Tag. Using a nfcTag object, your app can read and write the from/to the NFC tag. It consists of the following API elements.

* Methods 

**Overview**

Use the voltmx.nfc.scanTag API to get a nfcTag object. Once you get a nfcTag object, it can call the NFC tag object methods to read data, write data, or write application record of the NFC tag.

**NFCTag Methods**

The NFCTag Object consists of the following methods.

<details open markdown="block"><summary>readData</summary>


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
|  errorCode[Number] | error code. All error code defined [here](Constants.md). |
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

</details>

<details open markdown="block"><summary>writeData</summary>

<b>Syntax:</b>

writeData(data, shouldAppend, successcallback, errorcallback);

<b>Input Parameters:</b>

<b>data [Array] - Mandatory</b>

The data array specifies the array of records that must be written on the NFC tag. The signature of the data array is [recordData] where <b>recordData</b> contains certain key-value pairs.

recordData \[Object\] - Record data that has the following key-value pairs:

| key| Description |
| --- | --- |
|  type [Constant] | Type of data, like text, URI, or Media. All supported constants defined [here](Constants.md)|
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
|  errorCode [Number] | error code. All error code defined [here](Constants.md)|
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
|  errorCode [Number] | error code. All error code defined [here](Constants.md)|
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

