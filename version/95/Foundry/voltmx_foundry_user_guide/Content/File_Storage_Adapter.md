                                

User Guide: [Object Services](Objectservices.md) > [File Service Adapters](FileServiceAdapters.md) > File Storage Adapter

File Storage Adapter
====================

File Storage is an out-of-the-box adapter that can be used to store and retrieve files from a default storage system in Volt MX. The adapter uses S3 (Simple Storage Service) as the back-end storage, which is an object storage service that is provided by Amazon Web Services.

You can use the service in scenarios where you want a back end to store the data for your app, such as archives, website data, or data lakes.

> **_Note:_**  
This document is about the default File Storage adapter for Volt MX Foundry. For information on connecting to a custom S3 bucket, refer to [AWS S3 Adapter](AWS_S3_Adapter.md).

Please find the link of a sample app that demonstrates file upload using object service on foundry end [here](https://github.com/HCL-TECH-SOFTWARE/volt-mx-samples/tree/main/HCLFileStoreTest)

Post downloading sample app:

1. Pls. Load the app in iris (App type = Responsive web app).
2. Mark frmFileStorage as startup form.
3. Point iris to a valid foundry running on a cloud.
   (Preferences section).
4. Do “build & publish web” from build menu.
5. Post successful “Build & publish” open/click the link from
   console in browser.
6. Launch app.
7. The startup form will show which will allow to select &
   upload files of various types.
8. Once click on “Upload” button, the file will get uploaded
   successfully & will be displayed in the upload list box with id associated.
9. In case of deletion of file, specify the id in the text box
   & click on “Delete” button, which will delete file.
10. The “Download” button will allow to download file of which
    id is specified in text box above download button.
11. The Upload/Delete status string will be displayed at the
    end of the form.

Configure a File Storage adapter
--------------------------------

To configure a File Storage adapter, follow these steps:

1.  While [selecting an endpoint for an object service](ObjectsServices/Objectservices_Stage1.md), from the **Endpoint Type** list, select **File Storage**.
2.  In the **Name** field, provide a unique name for your service.  
    
    > **_Note:_** If you have an existing service with the same name, you can select a different **Version** for the service.
    
3.  Under **Connection Parameters**, provide the following details.
    
    | Fields | Description |
    | --- | --- |
    | Expiry Time in milliseconds | The expiration period of the objects in the S3 bucket.This parameter is optional. |
    | Service Namespace | The namespace of the resource that you want to use. For more information, refer to [Amazon Resource Names](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.md). |
    | Advanced Settings | Additional settings that are configured for the S3 bucket. For more information, refer to [Advanced Settings for S3 Bucket Properties](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/setup-advanced-bucket-properties.md).This parameter is optional. |
    
4. For additional configuration of your service definition, provide the following details in the **Advanced** section.
    
      
    | Field | Description |
	| --- | --- |
	| Custom code | Specifies any custom business logic that you want to use for the service and the operations. The custom business logic must be in a JAR file. To specify a JAR associated to the service, select one from the **Select Existing JAR** drop-down menu or click **Upload New** to add a new JAR file. For on-premise instances of Volt MX Foundry, make sure that the JAR file that is built on the same JDK version that is used to install Volt MX Foundry Integration. |
    | API Throttling | **API throttling** on the Volt MX Foundry Console limits the number of request calls within a minute. To use API Throttling, configure the following fields: **Total Rate Limit**: Limits the number of requests that are processed by the service **Rate Limit Per IP**: Limits the number of requests that are processed by an IP address To override throttling from the Volt MX Foundry App Services Console, refer to [Override API Throttling Configuration](API_Throttling_Override.md#override-api-throttling-configuration). |
    
    > **_Note:_**  
    The settings in the **Advanced** section are optional.
    
5.  Enter the **Description** for the service.
6.  Click **SAVE** to save your service definition.

File Storage Operations
-----------------------

After you create an object service for the File Storage, Volt MX Foundry creates a default object, called FILE, for the service. Foundry also creates operations for the service.

The operations are REST APIs that are mapped to back-end methods, such as GET and CREATE. For more information about these operations, refer to [File Storage Adapter APIs](File_Service_Adapter_APIs.md).

You can invoke the operations from a Volt MX Iris project by using the Volt MX Foundry SDKs. For example, to upload an image file from the client app to the S3 bucket, you can use the following code:

```

//Function to upload a file to the bucket
function uploadFile()
{
	//Creating an instance for the Object Service
	currentObj = voltmx.sdk.getCurrentInstance();
	objSvc = currentObj.getObjectService("<Object-Service>", {"access" : "online"});
	
	//Setting the headers for the request
	headers = {};
	headers["Content-Type"] = "application/json";
	
	//Creating an image object for upload
	fileMap = {};
	fileMap["rawBytes"] = voltmx.convertToBase64(<Form>.<Image-Widget>.rawBytes); 
	
	//Setting the metadata for the image file
	metadata = {};
	metadata["file_name"] = <Form>.<TextBox-Widget>.text + ".jpg";
	metadata["security_key"] =  <Form>.<TextBox-Widget_Secure>.text;
	metadata["file_namespace"] = "review";
	
	//Configuring the upload parameters for the request
	uploadEntityType = "UploadInputTypeRawBytes";
	uploadParams = {};
	uploadParams["headers"] = headers;
	uploadParams["metadata"] = metadata;
	uploadParams["file"] = fileMap;
	
	//Creating a success callback for the upload API
	function successCallback(response)
	{
		alert("Upload successful for " + metadata["file_name"] + " : " + JSON.stringify(response));
	}
	
	//Creating a failure callback for the upload API
	function failureCallback(error)
	{
		alert("Upload Error " + JSON.stringify(error));
	}
	
	//Setting additional options for the request
	options =
	{
		disableIntegrityCheck: true
	};
	
	//Calling the upload API
	objSvc.getFileStorage().upload(uploadEntityType, uploadParams, successCallback, failureCallback, options);
}
```

In the code snippet, the **rawBytes** of the image are fetched from an [Image Widget](../../../Iris/iris_widget_prog_guide/Content/Image.md) on a form. The rawBytes are then uploaded to the S3 bucket by using the **upload** API.
