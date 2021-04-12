---
layout: "documentation"
category: "voltmx_sync_cloud_and_on_premises_orm_apiguide"
---
                           

Pushing Changes to Sky MEAP Server
==================================

You can push changes to Sky MEAP Sever.

To push changes to Sky MEAP Server from device, you can call the following two APIs:

*   skySync.startSession
*   <dataObject>.dataObjectUpload

skySync.startSession
--------------------

This API starts synchronization cycle and changes from server come to client and vice versa. You can call this API. Once this API is invoked, Sky Engine runs in the background and it continues to download and upload changes to Sky MEAP server. It continues to run till _skySync.stop_ is called.

<dataObject>.dataObjectUpload
-----------------------------

This API marks local changes to be uploaded to Sky MEAP server. The changes are uploaded immediately if the device is connected to Sky MEAP Server or uploaded later when the connectivity with the Sky MEAP server is established. You can invoke this API even when the device is offline. In general, if data in the local database is changed, the developer should call the _dataObjectUpload_ method to push the changes to MEAP Server as indicated below.

{% highlight voltMx %}function CreateProduct(){
     product = new Product();
     product.ProductName = "xyz";
     product.UnitPrice = 12.34;
     Product.create(successCallback, errorFailCallback);
}
function successCallback(){
	alert("Product Created Successfully");
     com.voltmx.SA.TRANSACTION.SA\_TRANSACTION.dataObjectUpload    
     (dataObjectUploadSuccess, dataObjectUploadError);
}
function errorFailCallback (res){
    alert("Product Creation Failed" + " with Error Code:" + res.errorCode +      
    ",error message:"+ res.errorMessage + ", error information:" + 
    JSON.stringify(res.errorInfo));
}
function dataObjectUploadSuccess(){
          alert("Uploaded successfully");
}
 function dataObjectUploadError(res){
    alert("data Object upload failed" + " with Error Code:" + res.errorCode +  
    ",error message:"+ res.errorMessage + ", error information:" +   
    JSON.stringify(res.errorInfo));
} 
{% endhighlight %}
