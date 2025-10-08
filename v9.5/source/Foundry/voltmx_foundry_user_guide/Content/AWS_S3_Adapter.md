                                

User Guide: [Object Services](Objectservices.md) > [File Service Adapters](FileServiceAdapters.md) > AWS S3 Adapter

AWS S3 Adapter
==============

S3 (Simple Storage Service) is an object storage service that is provided by Amazon Web Services. The AWS S3 object service on Volt MX Foundry connects to the specified S3 bucket, and also performs supported operations, such as uploading and downloading files.

You can use the service in scenarios where you want to store the data for your app (such as archives, website data, or data lakes) in an S3 bucket.

Configure an object service for AWS S3
--------------------------------------

To configure an AWS S3 adapter, follow these steps:

1.  While [selecting an endpoint for an object service](ObjectsServices/Objectservices_Stage1.md), from the **Endpoint Type** list, select **AWS S3**.
2.  In the **Name** field, provide a unique name for your service.  
    
    > **_Note:_** If you have an existing service with the same name, you can select a different **Version** for the service.
    
3.  Under **Connection Parameters**, provide the following details.
    
    | Fields | Description |
    | --- | --- |
    | Expiry Time | The expiration period of the objects in the S3 bucket.This parameter is optional. |
    | Access Key | The access key ID of your AWS account. For more information, refer to [Managing Access Keys for Your AWS Account Root User](https://docs.aws.amazon.com/general/latest/gr/managing-aws-access-keys.md). |
    | Access Secret | The secret access key of your AWS account. For more information, refer to [Managing Access Keys for Your AWS Account Root User](https://docs.aws.amazon.com/general/latest/gr/managing-aws-access-keys.md). |
    | Backend URL | The URL of the service endpoint on AWS. For more information, refer to [AWS Service Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.md). |
    | Region | The region code of your endpoint. For more information, refer to [Regional Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.md#regional-endpoints). |
    | Bucket Path | The path of the S3 bucket that you want to use. For more information, refer to [Path-Style Access](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.md#path-style-url-ex). |
    | Service Namespace | The namespace of the resource that you want to use. For more information, refer to [Amazon Resource Names](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.md). |
    | Advanced Settings | Additional settings that are configured for the S3 bucket. For more information, refer to [Advanced Settings for S3 Bucket Properties](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/setup-advanced-bucket-properties.md).This parameter is optional. |
    
4.  
<details close markdown="block"><summary>For additional configuration of your service definition, provide the following details in the **Advanced** section.</summary> 
    
      
    | Field | Description |
    | --- | --- |
    | Custom code | Specifies any custom business logic that you want to use for the service and the operations. The custom business logic must be in a JAR file. To specify a JAR associated to the service, select one from the **Select Existing JAR** drop-down menu or click **Upload New** to add a new JAR file. For on-premise instances of Volt MX Foundry, make sure that the JAR file that is built on the same JDK version that is used to install Volt MX Foundry Integration. |
    | API Throttling | **API throttling** on the Volt MX Foundry Console limits the number of request calls within a minute. To use API Throttling, configure the following fields: **Total Rate Limit**: Limits the number of requests that are processed by the service **Rate Limit Per IP**: Limits the number of requests that are processed by an IP address To override throttling from the Volt MX Foundry App Services Console, refer to [Override API Throttling Configuration](API_Throttling_Override.md#override-api-throttling-configuration). |
</details>
    
    > **_Note:_**  
    Options in the **Advanced** section are optional.
    
5.  Enter the **Description** for the service.
6.  Click **SAVE** to save your service definition.

AWS S3 Operations
-----------------

After you create an object service for the AWS S3, Volt MX Foundry creates a default object for the service. Foundry also creates operations for the service.

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
