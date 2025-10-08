                                

User Guide: [Object Services](Objectservices.md) > [File Service Adapters](FileServiceAdapters.md) > Cloudian Adapter

Cloudian Adapter
================

Cloudian HyperStore is an Amazon S3 compatible object storage service that is provided by Cloudian Inc. The Cloudian service on Volt MX Foundry connects to the specified S3 bucket on a HyperStore, and also performs supported operations, such as uploading and downloading files.

You can use the service in scenarios where you want to store the data for your app (such as archives, website data, or data lakes) on a Cloudian HyperStore.

Configure an object service for Cloudian
----------------------------------------

To configure an S3 File Storage adapter, follow these steps:

1.  While [selecting an endpoint for an object service](ObjectsServices/Objectservices_Stage1.md), from the **Endpoint Type** list, select **Cloudian**.
2.  In the **Name** field, provide a unique name for your service.  
    
    > **_Note:_** If you have an existing service with the same name, you can select a different **Version** for the service.
    
3.  Under **Connection Parameters**, provide the following details.
    
    | Fields | Description |
    | --- | --- |
    | Upload Type | The type of data that you want to upload to the HyperStore.This parameter is optional. |
    | Access Key | The access key ID of the Cloudian HyperStore. |
    | Access Secret | The secret access key of the Cloudian HyperStore. |
    | Backend URL | The URL of the service endpoint the Cloudian HyperStore. |
    | Region | The region code of the service endpoint. |
    | Bucket Path | The path of the bucket that you want to use on the Cloudian HyperStore. |
    | Service Namespace | The namespace of the resource that you want to use on the Cloudian HyperStore. |
    | Advanced Settings | Additional settings that are configured for the Cloudian HyperStore.This parameter is optional. |
    
4. <details close markdown="block"><summary>For additional configuration of your service definition, provide the following details in the Advanced section.</summary> 
    
      
      | Field | Description |
    | --- | --- |
    | Custom code | Specifies any custom business logic that you want to use for the service and the operations. The custom business logic must be in a JAR file. To specify a JAR associated to the service, select one from the **Select Existing JAR** drop-down menu or click **Upload New** to add a new JAR file. For on-premise instances of Volt MX Foundry, make sure that the JAR file that is built on the same JDK version that is used to install Volt MX Foundry Integration. |
    | API Throttling | **API throttling** on the Volt MX Foundry Console limits the number of request calls within a minute. To use API Throttling, configure the following fields: **Total Rate Limit**: Limits the number of requests that are processed by the service **Rate Limit Per IP**: Limits the number of requests that are processed by an IP address To override throttling from the Volt MX Foundry App Services Console, refer to [Override API Throttling Configuration](API_Throttling_Override.md#override-api-throttling-configuration). |
	
	</details>
    
    > **_Note:_**  
    Options in the **Advanced** section are optional.
    
5.  Enter the **Description** for the service.
6.  Click **SAVE** to save your service definition.

Cloudian Operations
-------------------

After you create an object service for the Cloudian, Volt MX Foundry creates a default object for the service. Foundry also creates operations for the service.

The operations are REST APIs that are mapped to back-end methods, such as GET and CREATE. For more information about these operations, refer to [File Storage Adapter APIs](File_Service_Adapter_APIs.md).

You can invoke the operations from a Volt MX Iris project by using the Volt MX Foundry SDKs. For example, to upload an image file from the client app to the S3 bucket on the Cloudian HyperStore, you can use the following code:

```

//Function to upload a file to the bucket
function uploadFile()
{
	currentObj = voltmx.sdk.getCurrentInstance();
	objSvc = currentObj.getObjectService("<Object-Service>", {"access" : "online"});
	
	headers = {};
	headers["Content-Type"] = "application/json";
	
	fileMap = {};
	fileMap["rawBytes"] = voltmx.convertToBase64(<Form>.<Image-Widget>.rawBytes); 
	
	metadata = {};
	metadata["file_name"] = <Form>.<TextBox-Widget>.text + ".jpg";
	metadata["security_key"] =  <Form>.<TextBox-Widget_Secure>.text;
	metadata["file_namespace"] = "review";
	
	uploadEntityType = "UploadInputTypeRawBytes";
	
	uploadParams = {};
	uploadParams["headers"] = headers;
	uploadParams["metadata"] = metadata;
	uploadParams["file"] = fileMap;
	
	function successCallback(response)
	{
		alert("Upload successful for " + metadata["file_name"] + " : " + JSON.stringify(response));
	}
	
	function failureCallback(error)
	{
		alert("Upload Error " + JSON.stringify(error));
	}

	options =
	{
		disableIntegrityCheck: true
	};
	
	objSvc.getFileStorage().upload(uploadEntityType, uploadParams, successCallback, failureCallback, options);
}

```

In the code snippet, the **rawBytes** of the image are fetched from an [Image Widget](../../../Iris/iris_widget_prog_guide/Content/Image.md) on a form. The rawBytes are then uploaded to the S3 bucket by using the **upload** API.
