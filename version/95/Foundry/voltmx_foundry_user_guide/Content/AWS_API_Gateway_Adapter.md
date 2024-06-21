                               

User Guide: [Integration](Services.md#integration) \> [Configure the Integration Service](ConfigureIntegrationService.md) > AWS API Gateway Adapter

AWS API Gateway Adapter
-----------------------

AWS API Gateway is a new data adapter of Volt MX Foundry integration services. With Volt MX Foundry AWS API Gateway integration service, you can connect to the services configured and deployed under API Gateway Service in Amazon Web Services.

Volt MX Foundry AWS API Gateway supports the following integration types of Amazon API Gateway:

*   Lambda Function
*   HTTP Proxy
*   Mock Integration
*   AWS Service Proxy

> **_Note:_**  Volt MX Foundry supports AWS API Gateway services, which returns JSON response.

### Configure AWS API Gateway Endpoint Adapter

To configure AWS API Gateway service in the **[Integration Service Definition](ConfigureIntegrationService.md)** tab, follow these steps:

1.  In the **Name** field, provide a unique name for your service.
2.  From the **Service Type** list, select **AWS API Gateway**.
3.  Provide the following details in the AWS API Gateway service definiton:  
    
      | Field | Description |
| --- | --- |
| Regions | Select your region that you have configured AWS API Gateway for your AWS account. |
| AWS URL | It displays the AWS API gateway URL for the selected region. You cannot modify this field. |
| Access Key ID | Enter the access key ID that you received from your AWS account. |
| Secret Access ID | Enter the secret access key ID that you received from your AWS account. |
| Test Connection | Click **Test Connection** to test you AWS connection details. The system displays `Valid Gateway address and port` if the details are correct. |

  
6.  <details close markdown="block"><summary>For additional configuration of your service definition, provide the following details in the **Advanced** section:</summary>

      | Field | Description |
      | --- | --- |
      | Custom Code | Custom Code enables you to specify dependent JAR. To specify dependent JAR, select the JAR containing preprocessor or postprocessor libraries from the drop-down list, or click **Upload New** to browse the JAR file from your local system. This step allows you to further filter the data sent to the back end.> **_Important:_** Make sure that you upload a custom JAR file that is built on the same JDK version used for installing Volt MX Foundry Integration.For example, if the JDK version on the machine where Volt MX Foundry Integration is installed is 1.6, you must use the same JDK version to build your custom jar files. If the JDK version is different, an unsupported class version error will appear when a service is used from a device. |
      | Throttling | API throttling enables you to limit the number of request calls within a minute. If an API exceeds the throttling limit, it will not return the service response. **To specify throttling in Volt MX Foundry Console, follow these steps:** In the **Total Rate Limit** text box, enter a required value. With this value, you can limit the number of requests configured in your Volt MX Foundry console in terms of Total Rate Limit. In the **Rate Limit Per IP** text box, enter a required value. With this value, you can limit the number of IP address requests configured in your Volt MX Foundry console in terms of Per IP Rate Limit. **To override throttling in App Services Console, refer to** [Override API Throttling Configuration](API_Throttling_Override.md#override-api-throttling-configuration). > **_Note:_** In case of On-premises, the number of nodes in a clustered environment is set by configuring the `VOLTMX_SERVER_NUMBER_OF_NODES` property in the Admin Console. This property indicates the number of nodes configured in the cluster. The default value is 1.Refer to [The Runtime Configuration tab on the Settings screen of App Services](../../../Foundry/vmf_integrationservice_admin_console_userguide/Content/Runtime_Configuration.md). The total limit set in the Volt MX Foundry Console will be divided by the number of configured nodes. For example, a throttling limit of 600 requests/minute with three nodes will be calculated to be 200 requests/minute per node.This is applicable for Cloud and On-premises. |

      </details>
    
      > **_Note:_** All options in the Advanced section are optional.
    
7.  In the **Description** field, provide a suitable description for the service.
    
8.  To enable the proxy, select the **Use proxy from settings** check box. By default, the check box is cleared.  
    The **Use proxy from settings** check box dims when no proxy is configured under the **[Settings > Proxy](Settings.md#proxy)**.
    
9.  Click **Save** to save your service definition.
    

### Create Operations for AWS API Gateway

The **Operations List** tab appears only after the service definition is saved.

> **_Note:_** Click **Operations List** tab > **Configure Operation**. The **Configured Operations** list appears.

**To create an operation, follow these steps:**

1.  Click **SAVE & ADD OPERATION** in your service definition page to save your service definition and display the **NewOperation** tab for adding operations.  
                        OR  
    Click **Add Operation** to add a new operation or from the tree in the left pane, click **Add > Add New Operation**.  
    

    <details close markdown="block"><summary>Click to View image</summary>
    
       ![](Resources/Images/MuleSoftAddOps_549x351.png)
    
       > **_Note:_** To use an existing integration service, refer to [How to Use an Existing Integration Service](Manage_Existing_Integration_Services_1.md#how-to-use-an-existing-integration-service).

    </details>

1.  To create an operation, provide the following details:
    
      
    | Field | Description |
    | --- | --- |
    | API | From the drop down list, select an API that is deployed at Amazon Services. |
    | Resource | Select the required resource from the drop down list. |
    | Stages | Select the required stage from the drop down list. |
    | Methods | Select the required method from the drop down list. |
    | Add Operation | Click Add Operation to add the created operation in the **Configured Operations** Section. Operation names are auto-generated in the format. The default name format of a AWS API operation is `<method_name><api_name><resource_name>`. You can change the operation name if required. |
    

### Configure Operation for AWS API Gateway

Once you create operations for an AWS API Gateway service, you can configure operations as follows:

1.  To edit an operation, either click on the required operation name or click **Edit** from the **Contextual Menu** in the **Configured Operations** screen. The operation details page is displayed.
2.  Provide the following details in the operation details page:  
     
      | Field | Description |
| --- | --- |
| Name | It is prepopulated with the operation name. You can change the name if required. |
| Operation Security Level | It specifies how a client must authenticate to invoke this operation. <br><br>**Select one of the following security operations in the Operation Security Level field.**<br><br>**Authenticated App User** – It restricts the access to clients who have successfully authenticated using an Identity Service associated with the app. <br><br>**Anonymous App User** – It allows the access from trusted clients that have the required App Key and App Secret. Authentication through an Identity Service is not required.<br><br>**Public** – It allows any client to invoke this operation without any authentication. This setting does not provide any security to invoke this operation and you should avoid this authentication type if possible.<br><br>**Private** - It blocks the access to this operation from any external client. It allows invocation either from an Orchestration/Object Service, or from the custom code in the same run-time environment. |

5.  <details close markdown="block"><summary> For additional configurations of request (or) response operations, provide the following details in the Advanced section:</summary>

      | Field | Description |
| --- | --- |
| Custom Code Invocation - Preprocessor and Postprocessor (for Java and JavaScript) | You can add pre and post processing logic to services to modify the request inputs. When you test, the services details of various stages in the service execution are presented to you for better debugging. All options in the Advanced section are optional. For more details, refer to [Preprocessor and Postprocessor](Java_Preprocessor_Postprocessor_.md). |
| Properties | [Additional configuration properties (timeout, cachable, unescape embedded xml in response, response encoding, number of connection retries](Java_Preprocessor_Postprocessor_.md#timeout_cachable) allows you to configure service call time out cache response |
| Front End API | It allows you map your endpoint/back-end URL of an operation to a [front-end URL](FrontEndAPI.md). |
| Server Events | Using Server Events you can configure this service to trigger or process server side events. For detailed information, refer [Server Events](ServerEvents.md). |
</details>

> **_Note:_** All options in the Advanced section are optional.    

### Configure Request Operation for AWS API Gateway

Integration services accept only `form-url-encoded` inputs for all input parameters provided in service input parameters (request input).

You can perform the following actions in **Request Input** tab:

1.  Click **Add Parameter** to add an entry (if the entries for input and the output tabs does not exist).
2.  To make duplicate entries, select the check box for the entry, click **Copy** and **Paste**.
3.  To delete an entry, select the check box for an entry and click **Delete** .
4.  Under the **Body** tab, provide the following details:  
    
      | Field | Description |
| --- | --- |
| Name | It Contains a Unique Identifier. Change the name if required. |
| Test Value | Enter a value. A test value is used for testing the service. |
| Default Value | Enter the value, if required. The default value will be used if the test value is empty. |
| Scope | **Select Request or Session** It is set to **Request** by default. <br><br>**Request** indicates that the value must be retrieved from the HTTP request received from the mobile device. <br><br>**Session** indicates that the value must be retrieved from the HTTP session stored on Volt MX Foundry. |
| Datatype | **Select one of the following data types.** <br><br> **String** - A combination of alpha-numeric and special characters. Supports all formats including UTF-8 and UTF-16 with no maximum size limit.<bvr><br> **Date** - Date formatIf data type is string, then the options in the Format Type are Currency, Number and Date.If the data type is number, then the options in the Format Type are Currency and Date. If the data type is boolean, then the options in the Format Type and Format Value text box are disabled.<br><br>**Boolean** - A value that can be true or false.<br><br>**Number** - An integer or a floating number.<br><br>**Collection** - A group of data, also referred as data set. |
| Encode | Select the check box to enable encoding of an input parameter. For example, the name New York Times would be encoded as _New_York_Times_ when the encoding is set to True. The encoding must also adhere to the HTML URL encoding standards. |

7.  Under the **Header** tab, provide the following details:  
    
    > **_Important:_** If AWS APIs with API Key Required is set to "true", the api key needs to be sent as request header as x-api-key.
    
      | Field | Description |
| --- | --- |
| Name | Provide custom HTTP headers required by the external source. |
| Scope | **Select one of the following options. It is set to Request by default.**<br><br> **Request**: If this option is selected, the Integration Server picks the value pairs from the client's request during run time and forwards the value pairs to the back-end.The option helps a user to configure the default value. The default value is taken if the request does not have the header. <br><br> **Session**: If this option is selected, the value of header is picked from the session context based on the user configuration.<br><br> **Constant**: Constant is used to configure the value that is picked and sent to back end by the Integration Server during run time.<br><br> **Expression**: Select this option to configure the velocity template expressions for the header values.<br><br>**_Note:_** You cannot edit the default value for the expression. |
| Test Value | Enter a value. A test value is used for testing the service. |
| Default Value | Enter the value, if required. The default value will be used if the test value is empty. |
| Description | Provide a suitable description of the service. |

9.  To validate the operation details, click **Save and Test**. For more details, refer to [Test a Service Operation](Test_a_Service_Operation.md).
    

### Configure Response Operation for AWS API Gateway

1.  In the **Response Output** tab, provide the following details:.
    
    The **Name** field in the Response Output tab is prepopulated with properties of the output API.
    
    Enter the values for required fields such as name, scope, data type, collection ID, record ID, format and format value.
    
    > **_Note:_** If you define parameters inside a record as a session, the session scope will not get reflected for the parameters.
    
2.  To validate the operation details, click **Save and Test**. For more details, refer to [Test a Service Operation](Test_a_Service_Operation.md).
3.  Click **Save Operation** to save the operation. The system displays the **Operation** section for your service.
    
    > **_Note:_** You can view the service in the Data Panel feature of Volt MX Iris. By using the Data Panel, you can link back-end data services to your application UI elements seamlessly with low-code to no code. For more information on Data Panel, click [here](../../../Iris/iris_user_guide/Content/DataPanel.md#top).
