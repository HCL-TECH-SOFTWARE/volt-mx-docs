
User Guide: [Integration](Services.md#integration) \> [Configure the Integration Service](ConfigureIntegrationService.md) > Email Adapter

## Email Adapter

An Email Integration Service empowers a user to send emails (like notification, status mails) from the client app. You can also know the status of the email which was sent before through Email service. The email requests are sent to the Volt MX Foundry server which in-turn redirects them to the Volt MX Engagement server.

While configuring an Email service, you can pass the email ID, subject , message and even attachments as input parameters based on which the email will be delivered to the respective recipients. However, the client app user can configure the body of the email from the client app or any design time environment.

Perform the following steps to configure an Email Service:

- Configure a Service Definition for Email Service.
- Configure Operations for the Service definition.

> **_Note:_** This is a static adapter and the default configurations that appear while configuring the operations are sufficient to get the required output from the service. You can leave the remaining fields as is.

### Configure a Service Definition

To configure the Email Adapter in the **[Integration service definition](ConfigureIntegrationService.md)**tab, follow these steps:

1.  In the **Name** field, provide a unique name for your service.
2.  From the **Service Type** list, select _Email_.
3.  In the **Authentication** section, the Use Existing Identity Provider list displays the existing Identity services available in the Foundry App. Select an Identity Service from the list. This will add a security layer onto your Email service. If you select an Identity Service, you must provide appropriate login details to send an email from the client app.
4.  <details close="" markdown="block"><summary>
    The Advanced section contains the following additional configurations. You can configure them if required:
    </summary>
    <table>
    <tr>
    <th>Field</th>
    <th>Description</th>
    </tr>
    <tr>
    <td>Custom Code</td>
    <td>
    <p>The name for the request input parameter.</p>
    <p>To specify dependent JAR, select the JAR containing preprocessor or postprocessor libraries from the drop-down list, or click <b>Upload New</b> to browse the JAR file from your local system. This step allows you to further filter the data sent to the back end.</p>
    <blockquote><em><b>Important:</b></em> Make sure that you upload a custom JAR file that is built on the same JDK version used for installing Volt MX Foundry Integration.<br/><br/>For example, if the JDK version on the machine where Volt MX Foundry Integration is installed is 1.6, you must use the same JDK version to build your custom jar files. If the JDK version is different, an unsupported class version error will appear when a service is used from a device.</blockquote>
    </td>
    </tr>  
     <tr>
    <td>Throttling</td>
    <td>
    <p>API throttling enables you to limit the number of request calls within a minute. If an API exceeds the throttling limit, it will not return the service response.</p>  
     <ul>
    <li><b>To specify throttling in Volt MX Foundry Console, follow these steps:</b></li>
    <ol>
    <li>In the<b>Total Rate Limit</b> text box, enter a required value. With this value, you can limit the number of requests configured in your Volt MX Foundry console in terms of Total Rate Limit.</li>  
     <li>In the<b>Rate Limit Per IP</b> text box, enter a required value. With this value, you can limit the number of IP address requests configured in your Volt MX Foundry console in terms of Per IP Rate Limit.</li>
    </ol>
    </ul>
    <ul>
    <li><b>To override throttling in App Services Console, refer to</b> <a href="API_Throttling_Override.html#override-api-throttling-configuration">Override API Throttling Configuration.</a></li>
    </ul>
    <blockquote><em><b>Note:</b></em> Enable API throttling in a clustered environment by configuring the VOLTMX_SERVER_NUMBER_OF_NODES property in the <b>server_configuration</b> table available in Admin database. This property indicates the number of nodes configured in the cluster. The default value is 1.</blockquote>
    </td>
    </tr>
    </table>
    </details>

> **_Note:_** All options in the Advanced section are optional.

5. In the **Description** field, provide a suitable description for the service.

6. Click **Save** or **Save and Add Operation** to save your service definition.

### Configure Operations for the Service definition

1.  Click **Save and Add Operation** in your service definition page to save your service definition and display the New Operation tab for adding operations.  
    OR  
    Click Add Operation to add a new operation or from the tree in the left pane, click Add > Add New Operation.
2.  In **Operations List** tab, select the required operation and click **Add Operation**. A new operation is created and listed in the Operations List tab with Email_Operations as default prefix. The operations available are:
    - sendEmail - You can use this operation to configure an email template which will be used by the client app to send emails.
    - getEmailStatus - You can use this operation to know the status of the emails that were sent.
3.  Select the new operation that was added to configure the operation. Refer to the following sections to know more about the configurations you can do for each operation.

#### Configure Operations

In the sendEmail operation you can configure the details like Message, Attachments, and more. The details defined here act as the template for the email.

Perform following steps to configure a sendEmail or getEmailStatus operation:

* Click the required operation from the operations list. The operation details page appears.
* Provide the following information in the details page:

    <table>
    <tr>
    <th>Field</th>
    <th>Description</th>
    </tr>
    <tr>
    <td>Name</td>
    <td>The operation name appears in the Name field. You can modify the name, if required.</td>
    </tr>
    <tr>
    <td>Operation Security Level</td>
    <td>
    <p>It specifies how a client must authenticate to invoke this operation.</p>
    <details close="" markdown="block"><summary>
    Select one of the following security operations in the Operation Security Level field.</summary>
    <ul>
    <li><b>Authenticated App User</b> – It restricts the access to clients who have successfully authenticated using an Identity Service associated with the app.</li>
    <li><b>Anonymous App User</b> – It allows the access from trusted clients that have the required App Key and App Secret. Authentication through an Identity Service is not required.</li>
    <li><b>Public</b> – It allows any client to invoke this operation without any authentication. This setting does not provide any security to invoke this operation and you should avoid this authentication type if possible.</li>
    <li><b>Private</b> – It blocks the access to this operation from any external client. It allows invocation either from an Orchestration/Object Service, or from the custom code in the same run-time environment.</li>
    </ul>
    </details>
    <blockquote>
    <em><b>Note:</b></em> The field is set to Authenticated App User, by default.
    </blockquote>
    </td>
    </tr>
    <tr>
    <td>Mapped To</td>
    <td>Displays the operation with which the adapter is linked with in the back end. This field is non editable.</td>
    </tr>
    <tr>
    <td>Action</td>
    <td>Displays the type of connector (service or object) with which this operation is linked with. This field is non editable.</td>
    </tr>
    </table>  

* The Advanced section contains the following additional configurations related to request (or) response operations. You can configure them if required:
  <table>
    <tr>
    <td>Custom Code Invocation</td>
    <td>You can add pre and post processing logic to services to modify the request inputs. When you test, the services details of various stages in the service execution are presented to you for better debugging. All options in the Advanced section are optional. For more details, refer to <a href="Java_Preprocessor_Postprocessor_.html">Preprocessor and Postprocessor</a>.</td>
    </tr>    
    <tr>
    <td>Additional Configuration Properties</td>
    <td>Additional Configuration Properties allows you to configure service call time out cache response. For information on different types of configuration properties, refer <a href="Java_Preprocessor_Postprocessor_.html#timeout_cachable">Properties</a>.</td>
    </tr>    
    <tr>
    <td>Front-end API</td>
    <td>Front-end API allows you map your endpoint (or) backend URL of an operation to a front-end URL. For detailed information, refer <a href="FrontEndAPI.html">Custom Front-end URL</a>.</td>
    </tr>    
    <tr>
    <td>Custom Code Invocation</td>
    <td>Using Server Events you can configure this service to trigger or process server side events. For detailed information, refer <a href="ServerEvents.html">Server Events</a>.</td>
    </tr>
  </table>

> **_Note:_** All options in the Advanced section for operations are not mandatory. 

### Request Input Parameters

In the Request Input tab, you can configure the parameters like To, CC, Message, Attachments and more which are required to send an email. The details defined here act as the template for the email. You can define the value of each parameter here directly, or provide the information of the source from where the information can be retrieved.

You can define the Body and Header related input parameters from the Request Input tab. By default, the Body tab is selected. You can do the following to configure the input parameters in the Body tab:

<table>
<tr>
<th>Field</th>
<th>Description</th>
</tr>
<tr>
<td>Name</td>
<td>The name for the request input parameter.</td>
</tr>
<tr>
<td>Value</td>
<td>
<p>The options available in the Value list determine the source from where the value of the input parameter must be retrieved.</p>
<details close="" markdown="block"><summary>Select request or session or Identity.</summary>
<ul>
<li><b>Request</b> – It denotes that the value for the input parameter is available in the request received from the client app (device request). The default value will be honored if the request does not have the value. The Test value is honored only when you test the service from Foundry Console.</li>
<li><b>Session</b> – If you select Session, the value of the input parameter will be picked up from session context. The Default and Test value fields are disabled.</li>
<li><b>Constant</b> –Select Constant if you want to define the value for the input parameter in the Volt MX Foundry console directly.</li>
<li><b>Identity</b> – Select Identity if you want to retrieve the request input parameters from the identity provider response attributes. For example - If an identity provider responds with a profile that has userid as one of its attributes after a successful login , please use ‘profile.userid’ as value to pass it as request parameter to the backend. This will help to filter the response based on the value mentioned in ‘userid’. For more details to configure identity filters, refer to <a href="Identity_Filters_Integration.html">Enhanced Identity Filters - Integration Services.</a></li>
</ul>
<blockquote>
<em><b>Note:</b></em> When you start editing this field, dependent identity services are auto populated.
</blockquote> 
</details>
<blockquote>
<em><b>Note:</b></em> The field is set to Request, by default.
</blockquote>
<blockquote>
<em><b>Note:</b></em> For more information on Externalizing Identity Services, refer to <a href="Replacing_Identity_Services.html">Replace the Identity Service references in a Foundry app</a>.
</blockquote>    
</td>
</tr>
<tr>
<td>Test Value</td>
<td>A test value is used for testing the service.</td>
</tr>
<tr>
<td>Default Value</td>
<td>The default value is used in the run-time when the service cannot find the defined header parameter value.</td>
</tr>  
<tr>
<td>Data Type</td>
<td>
<details close="" markdown="block"><summary>Select one of the following data types.</summary>
<ul>
<li><b>String</b> – A combination of alpha-numeric and special characters. Supports all formats including UTF-8 and UTF-16 with no maximum size limit.</li>
<li><b>Date</b> – A value that is in date format.</li>
<li><b>Record</b> –A value is in an array. You must specify appropriate Record ID if the Record is the data type.</li>
<li><b>Boolean</b> – A value that can be true or false.</li>          
<li><b>Number</b> –An integer or a floating number.</li>                     
<li><b>Collection</b> –A group of data, also referred as data set.</li> 
</ul>
</details>
</td>
</tr>  
<tr>
<td>Collection ID</td>
<td>Determines the location of the input value if there is a list of collections in the input received.</td>
</tr>  
<tr>
<td>Record ID</td>
<td>Determines the location of the input value if there is an array of records in the input received.</td>
</tr>  
<tr>
<td>Description</td>
<td>Enter the description for the request.</td>
</tr>
</table>

The following input parameters are displayed by default for **Email_Operations_sendEmail** operation:

- To
- CC
- message
- subject
- attachments

The following input parameters are displayed by default for **Email_Operations_getEmailStatus** operation:

- requestID

Click the **Header** tab to configure the header parameters. The parameters configured here will be appended to the header of the input request. Configure the following fields to define header parameters:

<table>
<tr>
<th>Field</th>
<th>Description</th>
</tr>
<tr>
<td>Name</td>
<td>The name for the request input parameter.</td>
</tr>
<tr>
<td>Value</td>
<td>
<p>The options available in the Value list determine the source from where the value of the input parameter must be retrieved.</p>
<details close="" markdown="block"><summary>Select request or session or Identity.</summary>
<ul>
<li><b>Request</b> – It allows the user to configure the default and test value. The default value is honored if the request does not have the input value. The Test value is honored only when you test the service from Foundry Console.</li>
<li><b>Session</b> – It represents that the header parameters will be picked up from the session context. The Default and Test value fields are disabled.</li>
<li><b>Constant</b> – It denotes that you can define a constant value for the header. The Default and Test value fields are disabled.</li>
<li><b>Expression</b> – t represents that you can configure velocity template expressions for the value of the header. The Default and Test value fields are disabled.. For example, $Session.param1 $Request.param2 where 'param1' is coming from session scope and 'param2' is coming from request scope.</li>
</ul>
</details>    
<blockquote>
<em><b>Note:</b></em> The field is set to Request, by default.
</blockquote>      
</td>
</tr>
<tr>
<td>Test Value</td>
<td>A test value is used for testing the service.</td>
</tr>
<tr>
<td>Default Value</td>
<td>The default value is used in the run-time when the service cannot find the defined header parameter value.</td>
</tr>    
<tr>
<td>Description</td>
<td>Enter the description for the request.</td>
</tr>
</table>

### Response Output Parameters

In the Response Output tab, you can configure the output parameters that you are expecting the service to return after the service is executed.

By default, the following output parameters are returned from the back end for Email_Operations_sendEmail operation:

- Email Result
- requestId
- message

By default, the following output parameters are returned from the back end for Email_Operations_getEmailStatus operation:

- Email Status
- Email Count
- Message Response

You can configure the following information about each output parameter:

<table>
<tr>
<th>Field</th>
<th>Description</th>
</tr>
<tr>
<td>Name</td>
<td>The name for the request input parameter.</td>
</tr>  
<tr>
<td>Path</td>
<td>Determines the path where you want to store the output value from the response.</td>
</tr>
<tr>
<td>Data Type</td>
<td>
<details close="" markdown="block"><summary>Select one of the following data types.</summary> 
<ul>
<li><b>String</b> – A combination of alpha-numeric and special characters. Supports all formats including UTF-8 and UTF-16 with no maximum size limit.</li>
<li><b>Date</b> – A value that is in date format.</li>
<li><b>Record</b> –A value is in an array. You must specify appropriate Record ID if the Record is the data type.</li>
<li><b>Boolean</b> – A value that can be true or false.</li>          
<li><b>Number</b> –An integer or a floating number.</li>                     
<li><b>Collection</b> –A group of data, also referred as data set.</li>
</ul>
</details>       
</td>
</tr>
<tr>
<td>Collection ID</td>
<td>Determines the location of the output value if there is a list of collections in the output received.</td>
</tr>
<tr>
<td>Record ID</td>
<td>Determines the location of the output value if there is an array of records in the output received.</td>
</tr>    
<tr>
<td>Description</td>
<td>Enter the description for the request.</td>
</tr>
</table>

Other common options available in the **Request Input** and **Response Output** tabs are as follows:

- **Add Parameter**: Click **Add Parameter**  to add an entry (if the entries for input and the output tabs does not exist).
- **Copy, Paste**: Select the check box of an entry, and click **Copy** and **Paste**, if you want to make duplicate entries.
- **Delete**: Select the check box of an entry and click **Delete**, if you want to delete an entry.
- **Enable pass-through**: Select the **Enable pass-through** check box if you want to forward the body of the client's request to backend as it is. For more details on API Proxy service, refer to [](#APIProxyCheckBox)[How to Enable Pass-through Proxy for Operations](API_Proxy_Adapter.md#how-to-enable-pass-through-proxy-for-operations).
