---
layout: "documentation"
category: "voltmx_foundry_user_guide"
---
                                

User Guide: [Integration](Services.html#integration) \> [Configure the Integration Service](ConfigureIntegrationService.html) > Email Adapter

Email Adapter
-------------

An Email Integration Service empowers a user to send emails (like notification, status mails) from the client app. You can also know the status of the email which was sent before through Email service. The email requests are sent to the Volt MX Foundry server which in-turn redirects them to the Volt MX Engagement server.

While configuring an Email service, you can pass the email ID, subject , message and even attachments as input parameters based on which the email will be delivered to the respective recipients. However, the client app user can configure the body of the email from the client app or any design time environment.

Perform the following steps to configure an Email Service:

*   Configure a Service Definition for Email Service.
*   Configure Operations for the Service definition.

> **_Note:_** This is a static adapter and the default configurations that appear while configuring the operations are sufficient to get the required output from the service. You can leave the remaining fields as is.

### Configure a Service Definition

To configure the Email Adapter in the **[Integration service definition](ConfigureIntegrationService.html)**tab, follow these steps:

1.  In the **Name** field, provide a unique name for your service.
2.  From the **Service Type** list, select _Email_.
3.  In the **Authentication** section, the Use Existing Identity Provider list displays the existing Identity services available in the Foundry App. Select an Identity Service from the list. This will add a security layer onto your Email service. If you select an Identity Service, you must provide appropriate login details to send an email from the client app.
4.  
<details close markdown="block"><summary>The Advanced section contains the following additional configurations. You can configure them if required:</summary>
    
      
    | Field | Description |
    | --- | --- |
    | Custom Code | Custom Code enables you to specify dependent JAR. To specify dependent JAR, select the JAR containing preprocessor or postprocessor libraries from the drop-down list, or click **Upload New** to browse the JAR file from your local system. This step allows you to further filter the data sent to the back end.> **_Important:_** Make sure that you upload a custom JAR file that is built on the same JDK version used for installing Volt MX Foundry Integration.For example, if the JDK version on the machine where Volt MX Foundry Integration is installed is 1.6, you must use the same JDK version to build your custom jar files. If the JDK version is different, an unsupported class version error will appear when a service is used from a device. |
    | Throttling | API throttling enables you to limit the number of request calls within a minute. If an API exceeds the throttling limit, it will not return the service response. **To specify throttling in Volt MX Foundry Console, follow these steps:**
    In the **Total Rate Limit** text box, enter a required value. With this value, you can limit the number of requests configured in your Volt MX Foundry console in terms of Total Rate Limit. In the **Rate Limit Per IP** text box, enter a required value. With this value, you can limit the number of IP address requests configured in your Volt MX Foundry console in terms of Per IP Rate Limit.
    
    **To override throttling in App Services Console, refer to** [Override API Throttling Configuration](API_Throttling_Override.html#override-api-throttling-configuration). > **_Note:_** Enable API throttling in a clustered environment by configuring the VOLTMX\_SERVER\_NUMBER\_OF\_NODES property in the **server\_configuration** table available in Admin database. This property indicates the number of nodes configured in the cluster. The default value is 1. |
    
    > **_Note:_** All options in the Advanced section are optional.
  </details>  
5.  In the **Description** field, provide a suitable description for the service.
6.  Click **Save** or **Save and Add Operation** to save your service definition.

### Configure Operations for the Service definition

1.  Click **Save and Add Operation** in your service definition page to save your service definition and display the New Operation tab for adding operations.  
    OR  
    Click Add Operation to add a new operation or from the tree in the left pane, click Add > Add New Operation.
2.  In **Operations List** tab, select the required operation and click **Add Operation**. A new operation is created and listed in the Operations List tab with Email\_Operations as default prefix. The operations available are:
    *   sendEmail - You can use this operation to configure an email template which will be used by the client app to send emails.
    *   getEmailStatus - You can use this operation to know the status of the emails that were sent.
3.  Select the new operation that was added to configure the operation. Refer to the following sections to know more about the configurations you can do for each operation.

#### Configure Operations

In the sendEmail operation you can configure the details like Message, Attachments, and more. The details defined here act as the template for the email.

Perform following steps to configure a sendEmail or getEmailStatus operation:

*   Click the required operation from the operations list. The operation details page appears.
*   Provide the following information in the details page:
    
    | Field | Description |
    | --- | --- |
    | Name | The operation name appears in the Name field. You can modify the name, if required. |
    | Operation Security Level | It specifies how a client must authenticate to invoke this operation.
    
<details close markdown="block"><summary>Select one of the following security operations in the **Operation Security Level** field.</summary>
    
    **Authenticated App User** – It restricts the access to clients who have successfully authenticated using an Identity Service associated with the app.**Anonymous App User** – It allows the access from trusted clients that have the required App Key and App Secret. Authentication through an Identity Service is not required.**Public** – It allows any client to invoke this operation without any authentication. This setting does not provide any security to invoke this operation and you should avoid this authentication type if possible.**Private** - It blocks the access to this operation from any external client. It allows invocation either from an Orchestration/Object Service, or from the custom code in the same run-time environment.
</details>
    > **_Note:_** The field is set to Authenticated App User, by default. |
    | Mapped To | Displays the operation with which the adapter is linked with in the back end. This field is non editable. |
    | Action | Displays the type of connector (service or object) with which this operation is linked with. This field is non editable. |
    

*  
<details close markdown="block"><summary> response operations. You can configure them if required:</summary>
    
    <table style="width: 100%;margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 174px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Custom Code Invocation</td><td class="TableStyle-Basic-BodyD-Column1-Body1">You can add pre and post processing logic to services to modify the request inputs. When you test, the services details of various stages in the service execution are presented to you for better debugging. All options in the Advanced section are optional. For more details, refer to <a href="Java_Preprocessor_Postprocessor_.html" target="_blank">Preprocessor and Postprocessor</a>.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Additional Configuration Properties</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Additional Configuration Properties allows you to configure service call time out cache response. For information on different types of configuration properties, refer <a href="Java_Preprocessor_Postprocessor_.html#timeout_cachable" target="_blank">Properties</a>.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Front-end API</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Front-end API allows you map your endpoint (or) backend URL of an operation to a front-end URL. For detailed information, refer Custom <a href="FrontEndAPI.html" target="_blank">Front-end URL</a>.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">Server Events</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Using Server Events you can configure this service to trigger or process server side events. For detailed information, refer <a href="ServerEvents.html">Server Events</a>.</td></tr></tbody></table>
 </details>   
    > **_Note:_** All options in the **Advanced** section for operations are not mandatory.
    
*   Enter the **Description** for the operation.

**Request Input Parameters**

In the Request Input tab, you can configure the parameters like To, CC, Message, Attachments and more which are required to send an email. The details defined here act as the template for the email. You can define the value of each parameter here directly, or provide the information of the source from where the information can be retrieved.

You can define the Body and Header related input parameters from the Request Input tab. By default, the Body tab is selected. You can do the following to configure the input parameters in the Body tab:

  
| Field | Description |
| --- | --- |
| Name | The name for the request input parameter. |
| Value | The options available in the **Value** list determine the source from where the value of the input parameter must be retrieved.

<details close markdown="block"><summary>Select request or session or Identity.</summary>

**Request**: It denotes that the value for the input parameter is available in the request received from the client app (device request). The default value will be honored if the request does not have the value. The Test value is honored only when you test the service from Foundry Console. **Session**: If you select Session, the value of the input parameter will be picked up from session context. The Default and Test value fields are disabled. **Constant**: Select Constant if you want to define the value for the input parameter in the Volt MX Foundry console directly. **Identity**: Select Identity if you want to retrieve the request input parameters from the identity provider response attributes. For example - If an identity provider responds with a profile that has userid as one of its attributes after a successful login , please use 'profile.userid' as value to pass it as request parameter to the backend. This will help to filter the response based on the value mentioned in 'userid'. For more details to configure identity filters, refer to [Enhanced Identity Filters - Integration Services](Identity_Filters_Integration.html). 

</details>


> **_Note:_** When you start editing this field, dependent identity services are auto populated.

> **_Note:_** The field is set to **Request**, by default. |
| Test Value | A test value is used for testing the service. |
| Default Value | The default value is used in the run-time when the service cannot find the defined header parameter value. |
| Data Type | 


<details close markdown="block"><summary>Select one of the following data types.</summary>

**String** - A combination of alpha-numeric and special characters. Supports all formats including UTF-8 and UTF-16 with no maximum size limit. **Date** - A value that is in date format. **Record** - A value is in an array. You must specify appropriate Record ID if the Record is the data type. **Boolean** - A value that can be true or false. **Number** - An integer or a floating number. **Collection** - A group of data, also referred as data set.

</details>

 |
| Collection ID | Determines the location of the input value if there is a list of collections in the input received. |
| Record ID | Determines the location of the input value if there is an array of records in the input received. |
| Description | Enter the description for the request. |

The following input parameters are displayed by default for **Email\_Operations\_sendEmail** operation:

*   To
*   CC
*   message
*   subject
*   attachments

The following input parameters are displayed by default for **Email\_Operations\_getEmailStatus** operation:

*   requestID

Click the **Header** tab to configure the header parameters. The parameters configured here will be appended to the header of the input request. Configure the following fields to define header parameters:

  
| Field | Description |
| --- | --- |
| Name | The name for the request input parameter. |
| Value | The options available in the **Value** list determine the source from where the value of the input parameter must be retrieved.

<details close markdown="block"><summary>Select request or session or Identity.</summary>

**Request**: It allows the user to configure the default and test value. The default value is honored if the request does not have the input value. The Test value is honored only when you test the service from Foundry Console. **Session**: It represents that the header parameters will be picked up from the session context. The Default and Test value fields are disabled. **Constant**: It denotes that you can define a constant value for the header. The Default and Test value fields are disabled. **Expression**: It represents that you can configure velocity template expressions for the value of the header. The Default and Test value fields are disabled.. For example, $Session.param1 $Request.param2 where 'param1' is coming from session scope and 'param2' is coming from request scope.
</details>
> **_Note:_** The field is set to **Request**, by default. |
| Test Value | A test value is used for testing the service. |
| Default Value | The default value is used in the run-time when the service cannot find the defined header parameter value. |
| Description | Enter the description for the request. |

Response Output Parameters

In the Response Output tab, you can configure the output parameters that you are expecting the service to return after the service is executed.

By default, the following output parameters are returned from the back end for Email\_Operations\_sendEmail operation:

*   Email Result
*   requestId
*   message

By default, the following output parameters are returned from the back end for Email\_Operations\_getEmailStatus operation:

*   Email Status
*   Email Count
*   Message Response

You can configure the following information about each output parameter:

  
| Field | Description |
| --- | --- |
| Name | The name for the response output parameter. |
| Path | Determines the path where you want to store the output value from the response. |
| Scope | It determines the how you want to use the output value. It has the following options: **Response** - Select this option if you want to add the output in the response sent to the client app user. **Session** - Select this option if you want to add the output in the session information. This information will not be sent to the client app user. |
| Data Type | 

<details close markdown="block"><summary>Select one of the following data types.</summary>

**String** - A combination of alpha-numeric and special characters. Supports all formats including UTF-8 and UTF-16 with no maximum size limit. **Date** - A value that is in date format. **Record** - A value is in an array. You must specify appropriate Record ID if the Record is the data type. **Boolean** - A value that can be true or false. **Number** - An integer or a floating number. **Collection** - A group of data, also referred as data set.

</details>

 |
| Collection ID | Determines the location of the output value if there is a list of collections in the output received. |
| Record ID | Determines the location of the output value if there is an array of records in the output received. |
| Description | Enter the description for the request. |

Other common options available in the **Request Input** and **Response Output** tabs are as follows:

*   **Add Parameter**: Click **Add Parameter**  to add an entry (if the entries for input and the output tabs does not exist).
*   **Copy, Paste**: Select the check box of an entry, and click **Copy** and **Paste**, if you want to make duplicate entries.
*   **Delete**: Select the check box of an entry and click **Delete**, if you want to delete an entry.
*   **Enable pass-through**: Select the **Enable pass-through** check box if you want to forward the body of the client's request to backend as it is. For more details on API Proxy service, refer to [](#APIProxyCheckBox)[How to Enable Pass-through Proxy for Operations](API_Proxy_Adapter.html#how-to-enable-pass-through-proxy-for-operations).
