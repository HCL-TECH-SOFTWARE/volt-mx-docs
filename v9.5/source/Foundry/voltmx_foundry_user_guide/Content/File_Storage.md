                                

User Guide: [Integration](Services.md#integration) \> [Configure the Integration Service](ConfigureIntegrationService.md) > File Storage Adapter

File Storage Adapter
====================

File Storage is an out-of-the-box adapter that can be used to store and retrieve files from a default storage system in Volt MX. The adapter uses S3 (Simple Storage Service) as the back-end storage, which is an object storage service that is provided by Amazon Web Services.

You can use the service in scenarios where you want a back end to store the data for your app, such as archives, website data, or data lakes.

> **_Note:_**  
This document is about the default File Storage adapter for Volt MX Foundry. For information on connecting to a custom S3 bucket, refer to [AWS S3 Adapter](S3_File_Storage.md).

Configure a service for File Storage
------------------------------------

To configure a File Storage adapter in [Integration Service Definition](ConfigureIntegrationService.md#IntSD) tab, follow these steps:

1.  In the **Name** field, provide a unique name for your service.  
    When you enter the name, the name is updated for the active service under the **Services** section on the left pane.  
    
    > **_Note:_** If you have an existing service with the same name, you can select a different **Version** for the service.
    
2.  From the **Service Type** list, select _File Storage_.
3.  Under **Connection Parameters**, provide the following details.
    
    | Fields | Description |
    | --- | --- |
    | Expiry Time in milliseconds | The expiration period of the objects in the S3 bucket.This parameter is optional. |
    | Service Namespace | The namespace of the resource that you want to use. For more information, refer to [Amazon Resource Names](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.md). |
    | Advanced Settings | Additional settings that are configured for the S3 bucket. For more information, refer to [Advanced Settings for S3 Bucket Properties](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/setup-advanced-bucket-properties.md).This parameter is optional. |
    
4.  [![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)For additional configuration of your service definition, provide the following details in the **Advanced** section.](javascript:void(0);) 
    
      
    | Field | Description |
    | --- | --- |
    | Custom code | Specifies any custom business logic that you want to use for the service and the operations. The custom business logic must be in a JAR file. To specify a JAR associated to the service, select one from the **Select Existing JAR** drop-down menu or click **Upload New** to add a new JAR file. For on-premise instances of Volt MX Foundry, make sure that the JAR file that is built on the same JDK version that is used to install Volt MX Foundry Integration. |
    | API Throttling | **API throttling** on the Volt MX Foundry Console limits the number of request calls within a minute. To use API Throttling, configure the following fields: **Total Rate Limit**: Limits the number of requests that are processed by the service **Rate Limit Per IP**: Limits the number of requests that are processed by an IP address To override throttling from the Volt MX Foundry App Services Console, refer to [Override API Throttling Configuration](API_Throttling_Override.md#override-api-throttling-configuration). |
    
    > **_Note:_**  
    Options in the **Advanced** section are optional.
    
5.  Enter the **Description** for the service.
6.  Click **SAVE** to save your service definition.

Create operations for File Storage
----------------------------------

1.  After you [configure a service](#configure-a-service-for-file-storage), click **SAVE & ADD OPERATION**.  
    Alternatively, from the left pane, click the add (**+**) icon, and then click **Add New Operation**.
2.  Under the **Operation List** tab. from the drop-down list, select the operations that you want to add.
3.  Click **ADD OPERATION**. Foundry adds the selected operations to the **Operations List** page.
4.  Under **Configured Operations** list, click an operation to view the details of the operation.
5.  The console displays the selected operation in the edit mode. Provide the following details to configure the operation:
    
      
    | Field | Description |
    | --- | --- |
    | Name | The operation name appears in the **Name** field. You can edit the name based on your preference. |
    | Operation Security Level | It specifies how a client must authenticate to invoke this operation. |


    [![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)Select one of the following security operations in the Operation Security Level field.](javascript:void(0);) 

    <table style="width: 100%;margin-left: 0;margin-right: auto;mc-table-style: url]('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 174px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Authenticated App User</td><td class="TableStyle-Basic-BodyD-Column1-Body1">It restricts the access to clients who have successfully authenticated using an Identity Service associated with the app.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Anonymous App User</td><td class="TableStyle-Basic-BodyD-Column1-Body1">It allows the access from trusted clients that have the required App Key and App Secret. Authentication through an Identity Service is not required.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Public</td><td class="TableStyle-Basic-BodyD-Column1-Body1">It allows any client to invoke this operation without any authentication. This setting does not provide any security to invoke this operation and you should avoid this authentication type if possible.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">Private</td><td class="TableStyle-Basic-BodyA-Column1-Body1">It blocks the access to this operation from any external client. It allows invocation either from an Orchestration/Object Service, or from the custom code in the same run-time environment.</td></tr></tbody></table>    
    
6.  [![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)For additional configuration of request (or) response operations, provide the following details in the Advanced section.](javascript:void(0);)
    
    <table style="width: 100%;margin-left: 0;margin-right: auto;mc-table-style: url]('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 174px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Custom Code Invocation</td><td class="TableStyle-Basic-BodyD-Column1-Body1">You can add pre and post processing logic to services to modify the request inputs. When you test, the services details of various stages in the service execution are presented to you for better debugging. All options in the Advanced section are optional. For more details, refer to <a href="Java_Preprocessor_Postprocessor_.html" target="_blank">Preprocessor and Postprocessor</a>.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Additional Configuration Properties</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Additional Configuration Properties allows you to configure service call time out cache response. For information on different types of configuration properties, refer <a href="Java_Preprocessor_Postprocessor_.html#timeout_cachable" target="_blank">Properties</a>.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Front-end API</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Front-end API allows you map your endpoint ](or) backend URL of an operation to a front-end URL. For detailed information, refer Custom <a href="FrontEndAPI.html" target="_blank">Front-end URL</a>.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">Server Events</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Using Server Events you can configure this service to trigger or process server side events. For detailed information, refer <a href="ServerEvents.html">Server Events</a>.</td></tr></tbody></table>
    
    > **_Note:_** All options in the **Advanced** section for operations are optional.
    
7.  Enter the **Description** for the operation.

> **_Note:_**  
The **Operations List** tab appears only after the service definition is saved.

### Configure request input parameters

1.  Under **Request Input**, on the **Body** tab, configure the following fields:
    
    | Field | Description |
    | --- | --- |
    | Name | Specifies the name of the input parameter. the name must be unique. |
    | Test Value | Specifies the value of the input parameter that is used to test the operation. |
    | Default Value | Specifies the default value of the input parameter. The default value is used to test the operation if the test value not set. |
    | Data Type | Specifies the data type of the input parameter. Foundry supports the following data types:**String** is a combination of alpha-numeric and special charactersSupports all formats including UTF-8 and UTF-16 with no maximum size limit**Boolean** a value that can be true or false**Number** an integer or a floating point number |
    | Record ID | Specifies the ID of the parent record of the parameter. Applicable for nested payloads. |
    | Collection ID | Specifies the ID of the parent collection or parent array of the parameter. Applicable for parameters that are inside an array. |
    | Description | Specifies the text that is displayed on the console as the description of the parameter. |
    
2.  To validate the provided details, you must test the service operation. You can refer to [Test a Service Operation](Test_a_Service_Operation.md) for the steps to test a service.
    

### Configure response output parameters

1.  Under Response Output, on the **Body** tab, configure the following fields:
    
    | Field | Description |
    | --- | --- |
    | Name | Specifies the name of the output parameter. the name must be unique. |
    | Path | Specifies the path of the parameter in the back-end response. |
    | Scope | Specifies the scope in which the output parameter should be available.  |
    | Data Type | Specifies the data type of the output parameter. Foundry supports the following data types:**Collection** is an array or an object that contains more parameters**Record** is a parameter that contains nested parameters**String** is a combination of alpha-numeric and special charactersSupports all formats including UTF-8 and UTF-16 with no maximum size limit**Boolean** a value that can be true or false**Number** an integer or a floating point number |
    | Record ID | Specifies the ID of the parent record of the parameter. Applicable for nested payloads. |
    | Collection ID | Specifies the ID of the parent collection or parent array of the parameter. Applicable for parameters that are inside an array. |
    | Description | Specifies the text that is displayed as the description of the parameter. |
    
2.  To validate the provided details, you must test the service operation. You can refer to [Test a Service Operation](Test_a_Service_Operation.md) for the steps to test a service.
