                            


Properties
----------

The RawBytes object has the following property:


<details close markdown="block"><summary>text</summary>

* * *

This API returns the UTF-8 representation of data in the RawBytes. Returns null if the RawBytes object represents a binary data.

### Syntax

```

<RawBytes object>.text
```

### Input Parameters

None

### Example

```

var mainLoc = voltmx.io.FileSystem.getDataDirectoryPath();
var myFileLoc = mainLoc + constants.FILE_PATH_SEPARATOR + "myFile.txt";
var rawBytesObj = new voltmx.io.File(myFileLoc).read();
if (rawBytesObj === null) {
    voltmx.print("rawBytes object is null");
} else {
    voltmx.print(rawBytesObj.text);
}
```

### Return Value

String

### Read/ Write

Read only.

### Platform Availability

Android

* * *
</details>


Functions
---------

The RawBytes Object provides the following methods:


<details close markdown="block"><summary>clear</summary>

* * *

This API clears the content that is held by the RawBytes object.

> **_Note:_** If the RawBytes object contains sensitive text that is generated when data is retrieved from the **TextBox** or **TextArea** widgets with the `isSensitiveText` property enabled, HCL recommends that you clear the content of the object from the app memory using the clear API after the usage of object is done, or the object is no longer needed.

### Syntax

```

RawBytesObject.clear()
```

### Input Parameters

None

### Example

```

//Example to clear the sensitive text content on Android devices
var basicConfig = {  
    id: "textBox1",  
    …,  
    isSensitiveText: true  
};  
var layoutConfig = {…},  
var pspConfig = {…};  
//Creating the Textbox.  
var textBox1 = new voltmx.ui.TextBox2(basicConfig, layoutConfig, pspConfig);  
< FormId >.add(textBox1);  
// Getting user entered text from TextBox  
var textRawBytes = < FormId > .textBox1.text;   
if (voltmx.type(textRawBytes) == "voltmx.types.RawBytes") {   
/* As this api is android specific , this check is needed else calling this api without this check will throw method not found error */  
    textRawBytes.clear();  
}  
textRawBytes = null;
```

### Return Value

None

### Exceptions

None

### Platform Availability

*   Android

* * *

</details>
<details close markdown="block"><summary>clone</summary>

* * *

This API creates and returns a new JavaScript RawBytes Object that is cloned from the specified RawBytes Object.

You can only create a clone for RawBytes of types voltmx.types.RawBytes.CONTENT\_TYPE\_BYTE\_ARRAY and voltmx.types.RawBytes.CONTENT\_TYPE\_CHAR\_ARRAY.

To avoid security issues, the sensitive text held by the Rawbytes Objects (retrieved from a TextBox or TextArea widget present within a Segment widget)is cleared during Form navigation or when the widget is destroyed. If a user wants to hold and use the sensitive text from the RawBytes Object, they can create a copy of the RawBytes Object by using this API.

> **_Note:_** If the RawBytes object contains sensitive text that is generated when data is retrieved from the **TextBox** or **TextArea** widgets with the `isSensitiveText` property enabled, HCL recommends that you clear the content of the object from the app memory using the [clear](#clear) API after the usage of object is done, or the object is no longer needed.

### Syntax

```

RawBytesObject.clone()
```

### Input Parameters

None

### Example

```

//Example to clone an existing RawBytes Object on Android devices
var rowItems = Form1.segmentOne.selectedRowItems;  
var mytext = rowItems[0]["txtSegOne"]["text"];  
if (voltmx.type(mytext) == "voltmx.types.RawBytes") {  
/* As this api is android specific , this check is needed else calling this api without this check will throw a method not found error */  
var clonedRawBytes = mytext.clone();  
}
```

### Return Value

Returns a new JS RawBytes object cloned from the existing RawBytes object.

### Exceptions

None

### Platform Availability

*   Android

* * *

</details>
<details close markdown="block"><summary>getContentType</summary>

* * *

This API retrieves the Content Type of the RawBytes object.

### Syntax

```

RawBytesObject.getContentType()
```

### Input Parameters

None

### Example

```

//The RawBytesObject can be obtained from sources such as TextArea or TextBox widgets with the isSensitiveText property enabled or through FFIs.  
var voltmxrawbytes = rawbytesObject.getContentType();
```

### Return Value

The content type of the RawBytes Object.

Depending on the content type of the RawBytes Object, this API returns one of the following JavaScript constants:

| Constant | Description |
| --- | --- |
| voltmx.types.RawBytes.CONTENT\_TYPE\_BYTE\_ARRAY | Specifies that the content type of the RawBytes Object is a Byte array. RawBytes of this type can be retrieved from a [Cryptography API](voltmx.crypto_functions.md#encrypt) after the text is decrypted. |
| voltmx.types.RawBytes.CONTENT\_TYPE\_CHAR\_ARRAY | Specifies that the content type of the RawBytes Object is a Character array. RawBytes of this type can be retrieved from a TextBox or TextArea widget that has the [isSensitiveText](../../../Iris/iris_widget_prog_guide/Content/TextBox_Properties.md#isSensitiveText) property enabled. |
| voltmx.types.RawBytes.CONTENT\_TYPE\_FILE | Specifies that the content type of the RawBytes Object is a File. RawBytes of this type can be retrieved from a [File API](voltmx.io.file_functions.md#voltmx-io-file-namespace). |
| voltmx.types.RawBytes. CONTENT\_TYPE\_URI | Specifies that the content type of the RawBytes Object is a URI. RawBytes of this type can be retrieved from a [Camera API](voltmx.camera_functions.md#voltmx-camera-namespace). |
| voltmx.types.RawBytes.CONTENT\_TYPE\_BITMAP | Specifies that the content type of the RawBytes Object is a Bitmap. RawBytes of this type can be retrieved from a [Camera API](voltmx.camera_functions.md#voltmx-camera-namespace). |
| voltmx.types.RawBytes.CONTENT\_TYPE\_HTTP\_STREAM | Specifies that the content type of the RawBytes Object is a Network Stream. RawBytes of this type can be retrieved from a [network](voltmx.net_functions.md#HttpRequ). |
| voltmx.types.RawBytes.CONTENT\_TYPE\_NONE | Specifies that the RawBytes Object is empty. RawBytes of this type are set after the [clear](#clear) API is invoked on the RawBytes Object. |

### Exceptions

None

### Platform Availability

*   Android

* * *

</details>
<details close markdown="block"><summary>getResourcePath</summary>

* * *

This API returns the location of rawbytes which can be Android content URI or a file path.

### Syntax

```

RawBytesObject.getResourcePath()
```

### Input Parameters

None

### Example

```

var mainLoc = voltmx.io.FileSystem.getDataDirectoryPath();  
var myFileLoc = mainLoc + constants.FILE_PATH_SEPARATOR + "myFile.txt";  
var rawBytesObj = new voltmx.io.File(myFileLoc).read();  
if (rawBytesObj === null) {  
    voltmx.print("The resource path is not available");  
} else {  
    voltmx.print("The resource path for file is" + rawBytesObj.getResourcePath())  
}

```

### Return Value

| Return Value | Description |
| --- | --- |
| String | Returned when file path is found. |
| Null | Returned when file path is not available. |


### Exceptions

None

### Platform Availability

*   Android
*   iOS

* * *

</details>
<details close markdown="block"><summary>getTempPath</summary>

* * *

This API returns the path where the source files of all RawBytes are stored.

### Syntax

```

RawBytesObject.getTempPath()
```

### Input Parameters

None

### Example

```

var tempPath = voltmx.types.RawBytes.getTempPath();
```

### Return Value

The path of source files of all RawBytes.

### Exceptions

None

### Platform Availability

*   iOS

* * *

</details>
<details close markdown="block"><summary>readAsText</summary>

* * *

This API returns the data as text represented by the RawBytes object. It returns null if the RawBytes object represents binary data.

### Syntax

```

RawBytesObject.readAsText()
```

### Input Parameters

None

### Example

```

var mainLoc = voltmx.io.FileSystem.getDataDirectoryPath();  
var myFileLoc = mainLoc + constants.FILE_PATH_SEPARATOR + "myFile.txt";  
var rawBytesObj = new voltmx.io.File(myFileLoc).read();  
if (rawBytesObj === null) {  
    voltmx.print("rawBytes object is null");  
} else {  
    voltmx.print(rawBytesObj.readAsText());  
}
```

### Return Value

String - text available in this rawbytes.

### Exceptions

None

### Platform Availability

*   Android
*   iOS
*   Windows

* * *

![](resources/prettify/onload.png)
