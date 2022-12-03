                            

HttpRequest Object
==================

The HttpRequest object is used in conjunction with functions in the [voltmx.net namespace](voltmx.net_namespace.md) to send requests to any resource on the network and fetch the response. The HttpRequest object provides the following API elements.

*   [Event](httprequestobject_events.md)
*   [Methods](httprequestobjectmethods.md)
*   [Properties](httprequestobject_properties.md)

Uploading a File
----------------

The HttpRequest API enables you to upload any file to a remote server through the POST method by passing raw bytes of the file. The [voltmx.io.FileSystem.getFile](voltmx.io.file_functions.md#getFilesList) API helps you get the raw bytes of the file you want to upload.

> **_Note:_** Before uploading a file, you must select the **Enable File Upload** check box from the **Application Properties > Native > Android** tab. For more information, refer [Native App Properties for Android](../../../Iris/iris_user_guide/Content/Native_App_Properties.md).

To upload a file, set the Content-Type parameter as "multipart/formdata" header request. For example:

setRequestHeader("Content-type”, "multipart/formdata");

You can upload the file content in two ways:

1.  Uploading a file by passing the voltmx.types.RawBytes to the [send](httprequestobjectmethods.md#voltmx.net2) method.

send( voltmx.types.RawBytes)

1.  Uploading a file by passing the key-value pair to the [append](formdataobject_methods.md#voltmx.net7) method of the [FormData](voltmx.net_functions.md#FormData) Object. In the key-value pair, set file name as a key and the voltmx.types.RawBytes object as a value.

> **_Note:_** When you send raw bytes of the file for upload, the platforms set the Content-Type parameter as "multipart/formdata" by default.

Example for uploading a file

```
var path = voltmx.io.FileSystem.getDataDirectoryPath() + "/SampleImage.png"
var f1 = voltmx.io.FileSystem.getFile(path);  
var httpclient = new voltmx.net.HttpRequest();  
httpclient.open(constants.HTTP_METHOD_POST, “http://www.xyz.com” );  
httpclient.setRequestHeader("Content-type”,"multipart/formdata");  
var frmData= new voltmx.net.FormData();  
frmData.append(f1.name, f1.read());  
// sending rawbytes along with file name.  
httpclient.send(frmData);  
OR  
// Directly sending rawbytes.  
httpclient.send(f1.read());
```

Downloading a File
------------------

The HttpRequest API enables you to download any file from a remote server through the GET method. Using the [open](httprequestobjectmethods.md#voltmx.net3) method, you can initiate the HTTP request by specifying the URL from where you want to download the file. The response will be received in the form of raw bytes (voltmx.types.RawBytes). You can write the received raw bytes to a file using the voltmx.io.FileSystem and the voltmx.io.File APIs.

Example for downloading a file

```
var httpclient = new voltmx.net.HttpRequest();  
httpclient.open(constants.HTTP_METHOD_GET, “http://www.xyz.com/myFile.png”, false);  
httpclient.send();  
var rb = httpclient.response;  
var myfile = new voltmx.io.File(voltmx.io.FileSystem.getDataDirectoryPath()+"/SampleImage.jpg");  
myfile.write(rb, true);  
  
// Use the following code snippet to download a file with an asynchronous network call.
function downloadImageAsynchronously()
{   
 httpclient = new voltmx.net.HttpRequest();   
 httpclient.open(constants.HTTP_METHOD_GET, "http://www.xyz.com/myFile.png");   
 httpclient.onReadyStateChange = downloadCallback;   
 httpclient.send();   
}
function downloadCallback()  
{
try   
 {
 if(httpclient.readyState == 4)  
 {
 var responseContent = httpclient.response;
 var myfile = new voltmx.io.File(voltmx.io.FileSystem.getDataDirectoryPath+"/SampleImage.jpg");
 myfile.write(responseContent, true);
 }  
 }
catch(err)
 {   
 alert("exception is :: " + err.getMessage());   
 }  
}
```

Sending a JSON Object and String data as a Request
--------------------------------------------------

The HttpRequest API enables you to send a JSON string or JSON object using the POST method. Using the [open](httprequestobjectmethods.md#voltmx.net3) method, you can initiate the HTTP request with the URL. With the [send](httprequestobjectmethods.md#voltmx.net2) method of the HttpRequest API, you can directly send the JSON string.

Example for sending a JSON data as a request

```
var httpclient = new voltmx.net.HttpRequest();  
httpclient.open(constants.HTTP_METHOD_POST, “http://www.xyz.com/login” );  
httpclient.setRequestHeader("Content-Type", "application/json");  
var postdata = {  
"userId": "test"  
"password": "test123"  
};
```

Use one of the following:

```
//Directly sending JSON object  
httpclient.send(postdata);
```
```
//Converting JSON object to JSON string and sending  
var jsonStr1 = JSON.stringify(postdata);   
httpclient.send(jsonStr1);
```
```
//Sending JSON string  
var jsonStr2= "{\\"userId\\":\\"test\\",\\"password\\":\\"test123\\"}";  
httpclient.send(jsonStr2);  

```

Platform Availability
---------------------

The HttpRequest API is supported in all platforms except Mobile Web.

Error Codes

100 - Invalid parameter type. The error occurs when you pass other types of data.

101 - Invalid number of arguments. The error occurs when you pass fewer arguments than expected.

Limitations
-----------

*   Setting the Content-Type as non-relevant data results in unexpected behavior. For example, you should not set the "application/x-www-form-urlencoded" as Content-Type when sending the file rawbytes.
*   When uploading a file by passing a key-value pair, set the key-value, <String1, String2> as <”filename”, “rawbytes”>. String1 should be file name and String2 should be file raw bytes. Only then the raw bytes will be taken into consideration and sent as “multipart/formdata.” Otherwise, the raw bytes will be ignored.

SPA and Desktop Web Limitations
-------------------------------

*   FileSystem or File APIs may not work for SPA and Desktop Web platforms. Only [voltmx.io.FileSystem.browse](voltmx.io.filesystem_functions.md#hybrid.e) and [voltmx.io.FileSystem.uploadFiles](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-uploadfiles) APIs are available for Desktop Web.
*   Raw bytes cannot be read using the File APIs. You can obtain the raw bytes of any file using the [openMediaGallery](voltmx.phone_functions.md#phone.op) API (The user must select the file from the device's media gallery).
*   The Send method of the HttpRequest API will not encode the data based on the Content-Type header or data type. You need to encode the data that needs to be sent. By default, the data is encoded in text. Following are a few references help you encode the data:

*   multipart/form-data: [Reference Link](http://stackoverflow.com/questions/5933949/how-to-send-multipart-form-data-form-content-by-ajax-no-jquery)
*   x-www-form-urlencoded: [Reference Link 1](https://www.w3.org/TR.md5/forms.md#url-encoded-form-data), [Reference Link 2](http://stackoverflow.com/questions/1714786/querystring-encoding-of-a-javascript-object/1714899#1714899)

*   File raw bytes can be read through the voltmx.net.HttpRequest response. The raw bytes cannot be saved to a file using the File APIs. The raw bytes can be downloaded using the method in the [Reference Link](http://stackoverflow.com/questions/27946228/file-download-a-byte-array-as-a-file-in-javascript-extjs).
    

Constants
---------

The constants used by HttpRequest APIs are: 

*   constants.HTTP\_RESPONSE\_TYPE\_TEXT
*   constants.HTTP\_RESPONSE\_TYPE\_JSON
*   constants.HTTP\_RESPONSE\_TYPE\_DOCUMENT
*   constants.HTTP\_RESPONSE\_TYPE\_RAWDATA
*   constants.HTTP\_READY\_STATE\_UNSENT = 0
*   constants.HTTP\_READY\_STATE\_OPENED = 1
*   constants.HTTP\_READY\_STATE\_HEADERS\_RECEIVED = 2
*   constants.HTTP\_READY\_STATE\_LOADING = 3
*   constants.HTTP\_READY\_STATE\_DONE = 4
*   constants.HTTP\_METHOD\_GET
*   constants.HTTP\_METHOD\_POST

The delete quotes values are mapped to the corresponding http contentType as below:

<table class="TableStyle-Basic" cellspacing="0" style="mc-table-style: url]('resources/tablestyles/basic.css');"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">ResponseType</th><th class="TableStyle-Basic-BodyD-Column1-Body1">HTTP ContentType</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">constants.HTTP_RESPONSE_TYPE_TEXT</td><td class="TableStyle-Basic-BodyD-Column1-Body1">application/text, text/plain</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">constants.HTTP_RESPONSE_TYPE_JSON</td><td class="TableStyle-Basic-BodyD-Column1-Body1">application/json</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">constants.HTTP_RESPONSE_TYPE_DOCUMENT</td><td class="TableStyle-Basic-BodyD-Column1-Body1">application/xml, text/xml, text.md, mime type that ends with <i>+xml</i></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">constants.HTTP_RESPONSE_TYPE_RAWDATA</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Type except the above values</td></tr></tbody></table>

![](resources/prettify/onload.png)
