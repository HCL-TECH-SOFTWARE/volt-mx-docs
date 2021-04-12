---
layout: "documentation"
category: "voltmx_sync_cloud_and_on_premises_orm_apiguide"
---
                           


Data Object / Scope Level
=========================

This set of APIs help the developer to perform various ORM operations at data object / scope level. Currently only one API is available in this category.

\<dataObject\>.dataObjectUpload
-----------------------------

This uploads changes to MEAP server. It puts the changes in sky engine upload queue and background processes push the changes to server once device is online. You can invoke in offline / online mode.

### Signature

**\<dataObject\>.dataObjectUpload(successCallback, errorCallback)**

### Parameters

*   successCallback**\[function\] - Optional**

Specifies the function that gets invoked on success

*   errorCallback\[function\] - Optional

Specifies the function that gets invoked on error

### Platform Availability

Available on all platforms mentioned.

### Example

{% highlight voltMx %}function dataObjectUpload(){ 
com.voltmx.SA.TRANSACTION.SA\_TRANSACTION.dataObjectUpload(dataObjectUploadSuccess,dataObjectUploadError);
 function dataObjectUploadSuccess(){
 alert("Uploaded successfully");
 }
 function dataObjectUploadError(res){
 alert("data Object upload failed" + " with Error Code:" + res.errorCode + 
",error message:"+ res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
 }

{% endhighlight %}
