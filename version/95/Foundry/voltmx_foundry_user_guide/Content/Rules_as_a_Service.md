
User Guide: How Rules as Service Works

## Rules as a Service

Volt MX Foundry provides the ability to write business rules in a simplified text form by using the Rules-as-a-Service feature. The Rules service makes defining business logic closer to human language and is built using [MVEL](http://mvel.documentnode.com/ "MVEL is an expression language based on Java-syntax, with some marked differences specific to MVEL.  Unlike Java however, MVEL is dynamically typed (with optional typing), meaning type qualification is not required in the source. "). Instead of embedding rules within Foundry integration services, with Rules as a first-class service, the business logic and conditions are externalized and can be managed separately. For example, let’s say in a Banking app there could be certain business rules defined to control whether a customer is eligible for a loan. However, these business rules for loan eligibility (like credit score and income level) might vary from time to time based on market conditions, bank’s promotional offers, and regulatory changes. In such cases, Foundry Rules-as-a-Service provides the ideal design to abstract these business rules from other application logic and manage them separately. This also provides Rules-as-a-Service all the capability of any Foundry service including versioning, export, import across Foundry apps, API management.

You can use the **Rules** service tab to define and store your business logic as a set of rules. A collection of rules defined in a Rules service are stored in a Ruleset. For example, a Loan Ruleset can have multiple rules such as Home Loan Rule, Education Loan Rule, Vehicle Loan Rule and so on. Similar to how any Foundry service operation can be protected by Operation security levels, rules in a Ruleset can also be protected by Rule Security Level. These are: [Authenticated App Users, Anonymous App Users, Public, and Private.](## "Authenticated App Users restricts access to clients who have successfully authenticated using an Identity Service associated with the app. - Anonymous App Users allows access from trusted clients that have the required App Key and App Secret. - Authentication via an Identity Service is not required.Public (All Users) allows any client to invoke this rule without any authentication. This setting provides no security for invoking this rule and should be avoided if possible. - Private (Internal Server only) blocks access to this rule from any external client. It allows invocations only from within the same runtime environment either from an Orchestration/Object Service, or from custom code. ")

**How Rules as Service Works**

Rules in a Rules service are not dependent on any back-end system and are executed within the Volt MX App Server. So, rules defined as a service are dependent between a client app and a Foundry app. The rules can be changed for a particular app and republish the app as required. Based on request input parameters in a request sent to a Foundry app, a set of conditions in a particular rule will be evaluated and the corresponding action will be performed whenever the condition matches. And, then Volt MX App Server sends the response to the client.

**Why and When to Use Rules-as-a-service**

When you are creating an application that has a significant portion of business logic/rules that need to be managed/modified from time to time, define those business logic as separate rules service in your Foundry application. The following are some of the sample use cases where you can use Rules-as-a-service:

- For Banks and financial institutions when they want to develop lending apps – to abstract Rules determining Loan eligibility
- For Retail and e-commerce institutions when they want to separate out promotional campaigns – which can then be modified seasonally
- For Insurance providers when they evaluate if a potential new customer meets eligibility requirements

**Use Case:**

A bank app with a set of rules defined as a Rules service in a Foundry app is published. A user of this client app sends request to the app to check loan eligibility. The request may contain input params, which can be used to evaluate the condition in Rules, for example, the condition is: `Credit Rating between 300 and 669, credit length less than 5`. Volt MX App Server executes the logic defined in the rules service in the app based on the input params (`creditRating`and `creditLengthInYears`), and then sends the desired response.

The following table details client requests and Foundry Server responses executed based on a sample rule.

<table>
<tr style="background-color:#f2f2f2">
<th rowspan=2>Step 1 <br><br>Client App <br><br>A user sends requests with Input Params to the published Foundry app as follows: </th>
<th colspan="2" style="border-bottom-width: 0px;">Step 2 <br><br> Foundry App with Rules Service published to Volt MX App Server</th>
</tr>
<tr>
<td style="background-color:#f2f2f2; border-right-width: 0px; border-top-width: 0px;" >a. Volt MX App Server executes the logic defined<br> in the Rules service</td> 
<td style="background-color:#f2f2f2; border-left-width: 0px; border-top-width: 0px;">b. Volt MX App Server<br> sends the Response to the client app</td>
</tr>
<tr>
<td><ol><li>creditRating = 300 or 669</li><li>creditLengthInYears = 5</li></ol></td>
<td>Sample rule <br><br>
    <code>name: "Credit Rating between 300 and 669, 
    credit length less than 5 "
    description: "Credit Rating between 300 and 
    669, credit length less than 5 "
    condition: "creditRating >= 300 && 
    creditRating <= 669 && creditLengthInYears 
    <= 5"
    actions:
    - "results.addParam(\"status\", \"Reject\")"</code>
</td>
<td>
    <code>
    {
    "opstatus":0,"status" : "Reject"
    }
    </code>
</td>
</tr>
<tr>
<td><ol><li>creditRating = 300 or 669</li><li>creditLengthInYears = 6</li></ol></td>
<td>Sample rule <br><br>
    <code>name: "Credit Rating between 300 and 669,
    credit greater than 5 "
    description: "Credit Rating between 300 and 
    669, credit greater than 5"
    condition: "creditRating >= 300 && 
    creditRating <= 669 && creditLengthInYears > 
    5 "
    actions:
    - "results.addParam(\"status\", \"Review\")"</code>
</td>
<td>
    <code>
    {
    "opstatus":0,"status" : "Review"
    }
    </code>
</td>
</tr>
<tr>
<td><ol><li>creditRating = 670 or 740</li><li>creditLengthInYears = 5 or 6</li></ol></td>
<td>Sample rule <br><br>
    <code>name: "Credit Rating between 670 and 750, 
    credit length less than 5 "
    description: "Credit Rating between 670 and 
    750, credit length less than 5 "
    condition: "creditRating >= 670 && 
    creditRating < 750 && creditLengthInYears <= 
    5 "
    actions:
    - "results.addParam(\"status\", \"Approve\")"
    - "results.addParam(\"interestRate\", \"10\")"</code>
</td>
<td>
<code>
    {
    "interestRate": "10"
    "opstatus":0,"status" : "Approve"
    }
</code>
</td>
</tr>
<tr>
<td><ol><li>creditRating = 750 or 880</li><li>creditLengthInYears = 5 or 6</li></ol></td>
<td>Sample rule <br><br>
    <code>name: "Credit Rating greater than 750, 
    credit greater than 5 "
    description: "Credit Rating greater than 
    750, credit greater than 5 "
    condition: creditRating >= 750 && 
    creditLengthInYears > 5
    actions:
    - "results.addParam(\"status\", \"Approve\")"
    - "results.addParam(\"interestRate\", \"5\")"</code>
</td>
<td>
    <code>
    {
    "interestRate": "5"
    "opstatus":0,"status" : "Approve"
    }
    </code>
</td>
</tr>
</table>

**What is the Structure of Rules**: Rules have a structure in the form of statements, as shown in the following table:

<table>
<tr>
    <th>Sample Rules Structure</th>
</tr>
<tr>
<td><input type="button" id="button" class="btn" style="float: right;" value="Copy" onclick="var codeSnippet = this.parentNode.textContent; copyFunction(codeSnippet, this);"><code class="codefirst">name: "< Name of the rule >" <br>description: "< Description of the rule >" <br> priority: < " Priority of the rule " > <br>condition: "< Condition to evaluate >" <br> actions:<br> - "< Set of actions to execute >" </code></td>
</tr>
<tr align="center"><td>Description of Rules Structure</td></tr>
<tr>
<td>
<ul>
<li><strong>Name</strong>: A unique name of the rule. This is a mandatory field.</li>
<li><strong>Description</strong>: A description for the rule.</li>
<li><strong>Priority</strong>: An integer value that represents the order to execute the rule. The bigger the value, the higher the priority.</li>
<li><strong>Condition</strong>: An expression that is evaluated by the Rules engine. When the condition evaluates to True, the engine executes a set of actions.This is a mandatory field.<br>
For example, <code>response != null</code> can be used to check whether the back-end response is empty.</li>
<li><strong>Action</strong>: A set of statements that are executed when the condition evaluates to True. This is a mandatory field.<br>
For example, <code>statusCode = 200</code> sets status code to 200.</li>
</ul>
</td>
</tr>
</table>

### How to Create a Rules Service

<p>To go to the Rules service tab from the Volt MX Foundry Console dashboard, click Add New or select any existing Volt MX Foundry app, and click the Rules tab. The Rules tab landing page appears. Creating a rules service involves two stages, a ruleset and rules. Rules defined in a Rules service are stored in a rules-set. A Ruleset is a collection of rules.</p>
<ol type="1">
  <li>Create the <b>Service definition</b> for a <b>Rules</b> service.</li>
<ol type="a">
<li>
<p>Click <b>CONFIGURE NEW</b> to create a ruleset. The following details are displayed in the Rules service designer.</p><img src="Resources/Images/RulesasAService_561x212.png" alt="RulesasAService_561x212"> 
</li>
<li>In the <b>Name</b> field, provide a unique name for your ruleset.</li>
<li>
<details close="" markdown="block">
<summary>
For additional configuration of your ruleset definition, provide the following details in the <b>Advanced</b> section:
</summary>
<table>
<tr>
<th>Field</th>
<th>Description</th>
</tr>
<tr>
<td>Throttling</td>
<td>
<p>API throttling enables you to limit the number of request calls within a minute. If an API exceeds the throttling limit, it will not return the service response.</p>
<ul type="square">
<li>
<b>To specify throttling in Volt MX Foundry Console, follow these steps:</b>
<ol type='i'>
<li>In the <b>Total Rate Limit</b> text box, enter a required value. With this value, you can limit the number of requests configured in your Volt MX Foundry console in terms of Total Rate Limit.</li>
<li>In the <b>Rate Limit Per IP</b> text box, enter a required value. With this value, you can limit the number of IP address requests configured in your Volt MX Foundry console in terms of Per IP Rate Limit.</li>
</ol>
</li>
<li><b>To override throttling in App Services Console, refer to <a href="API_Throttling_Override.html#override-api-throttling-configuration">Override API Throttling Configuration.</a></b></li>
</ul>
</td>
</tr>
</table>
</details>
<blockquote>
<em><b>Note:</b></em> All options in the <b>Advanced</b> section are optional.
</blockquote>
</li>
<li>Click <b>SAVE & ADD RULE</b> to save the rules definition (rules-set). A <b>Rule List</b> tab appears.</li>
</ol>
<li>Create Rules in a Ruleset.</li>
<ol type="a">
<li>In the <b>Rules List</b>, click <b>ADD RULE</b> to add a new, if required.</li>
<li>Provide the following details to create a Rule:
<table>
<tr>
<th>Field</th>
<th>Description</th>
</tr>
<tr>
<td>Name</td>
<td>The rule name appears in the Name field. You can modify the name, if required.</td>
</tr>
<tr>
<td>Rule Security Level</td>
<td>
<p>The Rule Security Level specifies how the client must authenticate for invoking this rule</p>
<details close="" markdown="block">
<summary>
Select one of the following security operations in the <b>Rule Security Level</b> field.
</summary>
<ul type="disc">
<li><b>Authenticated App Users</b> restricts access to clients who have successfully authenticated using an Identity Service associated with the app.</li>
<li><b>Anonymous App Users</b> allows access from trusted clients that have the required App Key and App Secret. Authentication via an Identity Service is not required.</li>
<li><b>Public (All Users)</b> allows any client to invoke this rule without any authentication. This setting provides no security for invoking this rule and should be avoided if possible.</li>
<li><b>Private (Internal Server only)</b> blocks access to this rule from any external client. It allows invocations only from within the same runtime environment either from an Orchestration/Object Service, or from custom code.</li>
</ul>
</details>
<blockquote>
<em><b>Note:</b></em> The field is set to Authenticated App User, by default.
</blockquote>
</td>
</tr>
</table>
</li>
<li>Configure your business rules logic in the <b>Rule Logic</b> text field. This field contains sample MVEL rule logic. You can modify as per your business requirement.</li>
<li>
<details close="" markdown="block">
<summary>
For additional configuration of request (or) response rules, provide the following details in the <b>Advanced</b> section.
</summary>
<table>
<tr>
<td>Additional Configuration Properties</td>
<td>
Additional Configuration Properties allows you to configure service call time out cache response. For information on different types of configuration properties, refer <a href="Java_Preprocessor_Postprocessor_.html#timeout_cachable">Properties</a>.
</td>
</tr>
<tr>
<td>Front-end API</td>
<td>
Front-end API allows you map your endpoint ](or) backend URL of an operation to a front-end URL. For detailed information, refer Custom <a href="FrontEndAPI.html">Front-end URL</a>.
</td>
</tr>
<tr>
<td>Server Events</td>
<td>
Using Server Events you can configure this service to trigger or process server side events. For detailed information, refer <a href="ServerEvents.html">Server Events</a>.
</td>
</tr>
</table>
</details>
<blockquote>
<em><b>Note:</b></em> All options in the <b>Advanced</b> section for operations are optional.
</blockquote>
</li>
<li>Enter the <b>Description</b> for the operation.</li>
<li>Click <b>SAVE RULE.</b> Now, you can configure input request and response output for your rule. The following sections detail how to create input and output operations for rules.</li>
</ol>
</ol>

### Configure Request for a Rule

<ol type="1">
<li>
<p>In the <b>Request Input &gt; Body</b> tab, do the following:</p>
<ol type="a">
<li>
<p>Click <b>Add Parameter</b> button to create new entries for the input.</p>
<blockquote>
<em><b>Note:</b></em> - To make duplicate entries, select the check box for the entry, click Copy, and then click Paste.<br>
- To delete an entry, select the check box for an entry, and then click the Delete button.
</blockquote>
</li>
<li>Configure parameters in the client's body, do the following:
<table>
<tr>
<th>Field</th>
<th>Description</th>
</tr>
<tr>
<td>Name</td>
<td>It Contains a Unique Identifier. Change the name if required.</td>
</tr>
<tr>
<td>Value</td>
<td>
<p>Select Request or Session. It is set to <b>Request</b> by default.</p>
<ol type="i">
<li><b>Request</b> indicates that the value must be retrieved from the HTTP request received from the mobile device.</li>
<li><b>Session</b> indicates that the value must be retrieved from the HTTP session stored on Volt MX Foundry.</li>
<li>
<b>Identity</b> If this is selected, you can filter the request parameters based on the response from the identity provider. For more details to configure identity filters, refer to <a href="Identity_Filters_Integration.html">Enhanced Identity Filters - Integration Services.</a>
</li>
</ol>
</td>
</tr>
<tr>
<td>TEST VALUE</td>
<td>Enter a value. A test value is used for testing the service.</td>
</tr>
<tr>
<td>DEFAULT VALUE</td>
<td>Enter the value, if required. The default value will be used if the test value is empty.</td>
</tr>
<tr>
<td>Datatype</td>
<td>
<p></p>
<details close="" markdown="block">
<summary>
Select one of the following data types.
</summary>
<ol type="disc">
<li><b>String</b> - A combination of alpha-numeric and special characters. Supports all formats including UTF-8 and UTF-16 with no maximum size limit</li>
<li><b>Date</b></li>
<li><b>Boolean</b> - A value that can be true or false.</li>
<li><b>Number</b> - An integer or a floating number.</li>
<li><b>Collection</b> - A group of data, also referred as data set.</li>
</ol>
</details>
</td>
</tr>
<tr>
<td>Encode</td>
<td>Select the check box to enable encoding of an input parameter. For example, the name New York Times would be encoded as <em>New%20York%20Times</em> when the encoding is set to True. The encoding must also adhere to the HTML URL encoding standards.</td>
</tr>
<tr>
<td>Description</td>
<td>Provide a suitable description.</td>
</tr>
</table>
</li>
</ol>
</li>
<li>
<p>In the <b>Request Input &gt; Header</b> tab, do the following:</p>
<ol type="a">
<li>
<p>Click <b>Add Parameter</b> button to create new entries for the input.</p>
<blockquote>
<em><b>Note:</b></em> To make duplicate entries, select the check box for the entry, click Copy, and then click Paste.<br>
- To delete an entry, select the check box for an entry, and then click the Delete button.
</blockquote>
</li>
<li>
<p>Configure parameters in the client's header, do the following:</p>
<table>
<tr>
<th>Field</th>
<th>Description</th>
</tr>
<tr>
<td>Name</td>
<td>It Contains a Unique Identifier. Change the name if required.</td>
</tr>
<tr>
<td>Value</td>
<td>
<p>Select Request or Session. It is set to <b>Request</b> by default.</p>
<p>By default, this field is set to <b>Request</b>. Five different options are available in Volt MX Foundry under <b>Request Input &gt; Headers &gt; VALUE</b> during configuration of any operation. When you start editing this field, dependent identity services are auto populated. These options primarily determine the source of the value of the header.</p>
<ol type="disc">
<li><b>Request: </b>If this option is selected, the Integration Server picks the value pairs from the client's request during run time and forwards the same to the back-end.<br/>
User has the option to configure the default value. This default value is taken if the request does not have the header.</li>
<li><b>Session: </b>If this option is selected, the value of header is picked from session context based on the user configuration.</li>
<li><b>Constant: </b>Constant is used to configure the value that is picked and sent to back-end by the Integration Server during the run-time.</li>
<li><b>Expression: </b>Select this option to configure the velocity template expressions for the header values.<br>
You cannot edit the default value for expression.</li>
<li>
<b>Identity: </b>If this is selected, you can filter the request parameters based on the response from the identity provider. For more details to configure identity filters, refer to <a href="Identity_Filters_Integration.html">Enhanced Identity Filters - Integration Services.</a>
<blockquote>
<em><b>Note:</b></em> If the header value is scoped as a <b>Request</b> (or) <b>Session</b> and the same header is accessed under the <b>Expression</b> header value, then the expression must be represented as $request.header (or) $session.header.<br>
<b>Example</b>: If a header 1 value is a request and header 2 value is an expression, then the value of the expression must be $Request.header1.<br>
<img src="Resources/Images/Integration_requestandsessionheader.png" alt="Integration_requestandsessionheader">
</blockquote>
</li>
</ol>
</td>
</tr>
<tr>
<td>TEST VALUE</td>
<td>Enter a value. A test value is used for testing the service.</td>
</tr>
<tr>
<td>DEFAULT VALUE</td>
<td>Enter the value, if required. The default value will be used if the test value is empty.</td>
</tr>
<tr>
<td>Datatype</td>
<td>
<details close="" markdown="block">
<summary>
Select one of the following data types.
</summary>
<ol type="square">
<li><b>String -</b> A combination of alpha-numeric and special characters. Supports all formats including UTF-8 and UTF-16 with no maximum size limit.</li>
<li><b>Boolean -</b> A value that can be true or false.</li>
<li><b>Number -</b> An integer or a floating number.</li>
<li><b>Collection -</b> A group of data, also referred as data set.</li>
</ol>
</details>
</td>
</tr>
<tr>
<td>Description</td>
<td>Provide a suitable description.</td>
</tr>
</table>
</li>
</ol>
</li>
<li>Click <b>SAVE RULE</b> to save the rule. The system updates the rule's definition.</li>
</ol>

### Create Response for a Rule

1.  Click the **Response Output** tab, and enter the values for required fields such as name, path, scope, data type, collection ID, record ID, format, format value, and description.

    > **_Note:_** If you define parameters inside a record as the session, the session scope will not get reflected for the parameters.

2.  Click **SAVE RULE** to save the rule. The system updates the rule definition.

    If you click **Cancel**, the **Edit Service Parameters** window will close without saving any information.

    > **_Note:_** You can view the service in the Data Panel feature of Volt MX Iris. By using the Data Panel, you can link back-end data services to your application UI elements seamlessly with low-code to no code. For more information on Data Panel, click [here](../../../Iris/iris_user_guide/Content/DataPanel.md#top).

    > **_Note:_** By using Iris SDKs, you can invoke the Rules in a Ruleset, similar to integration services. For more details on Foundry Integration Service SDKs, refer to [Iris SDK > Invoking an Integration Service](../../../Foundry/voltmx_foundry_user_guide/Content/VoltMXStudio/Invoking_Integration_Service_Iris.md)

### Built-in Objects

The following objects help you to write rules in Volt MX Foundry.

| Objects                   | Description                                                                                                                                                                                                                                                                            |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "configurationParameters" | Used to access the Server and Client App parameters that are set by the developer in the App Services console. This is equivalent to using [ConfigurableParameters](../../../../../java_docs_apis/MiddlewareAPI/com/hcl/middleware/api/ConfigurableParametersHelper.md) in Java. |
| "customMetrics"           | This is used to access custom metrics. For more details to create custom reports and Metrics, refer [Custom Reporting – Metrics, Reports, and Dashboard Guide](../../../Foundry/custom_metrics_and_reports/Content/Custom_Metrics_and_Reports_Guide.md) |
| “deviceHeadersMap”        | Used to set headers that are passed to the client and is equivalent to using [setDeviceHeaders](../../../../../java_docs_apis/MiddlewareAPI/com/hcl/middleware/controller/DataControllerResponse.md) in Java.                                                                    |
| "headerMap"               | Used to access the header map of a request. A client can directly access the header map or the individual key-value pairs of the header map.                                                                                                                                           |
| “identityHandler"         | Used to access the identity attributes when a service is protected by an identity service.                                                                                                                                                                                             |
| "inputMap"                | Used to access the input map of a request. A client can directly access the input map or the individual key-value pairs of the input map.                                                                                                                                              |
| "logger"                  | Used to add a log statement with the appropriate level.                                                                                                                                                                                                                                |
| "response"                | Used to modify the response body and is equivalent to using [setResponse](../../../../../java_docs_apis/MiddlewareAPI/com/hcl/middleware/controller/DataControllerResponse.md) in Java.                                                                                          |
| "results"                 | Used to modify the results. The Result is a collection of Params, Data-sets, and Records. For more details, refer [Result](../../../../../java_docs_apis/MiddlewareAPI/com/hcl/middleware/dataobject/Result.md).                                                                 |
| "resultCache"             | Used to perfom read/write in the cache. This is equivalent to using [ResultCache](../../../../../java_docs_apis/MiddlewareAPI/com/hcl/middleware/ehcache/ResultCache.md) in Java.                                                                                                |
| "servicesManager"         | Used to invoke any service with the specified service id, operation id and version.                                                                                                                                                                                                    |
| "session"                 | Used to modify the session that is associated with the request. For more details, refer [Session](../../../../../java_docs_apis/MiddlewareAPI/com/hcl/middleware/session/Session.md) A client can access values from the session and the individual attributes of the session.   |
| “statusCode”              | Used to set the status code of the response and is equivalent to using setStatusCode in Java.                                                                                                                                                                                          |
| "ua"                      | Used to access the User Agent Header of the request.                                                                                                                                                                                                                                   |

### Built-in Functions

<p>The following functions help you to write rules in Volt MX Foundry.</p>
<table>
<tr>
<th>Functions</th>
<th>Description</th>
</tr>
<tr>
<td>"Check.isWithin"</td>
<td>
<p>Checks if an element is in a specified range. It will return true if the element present in the specified range, otherwise false.</p>
<ul type="disc">
<li>Signature: <code>isWithin(double fromInclusive, double toInclusive, double elementToFind)</code></li>
<li>
<p>Example</p>
<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">Check.isWithin(100, 300, 250) = true
Check.isWithin(100, 300, 350) = false</code></pre>
</li>
</ul>
</td>
</tr>
<tr>
<td>"Check.isEmpty"</td>
<td>
<p>Checks if a CharSequence is empty ("") or null.</p>
<ul type="disc">
<li>Signature: <code>isEmpty(final CharSequence cs)</code></li>
<li>
<p>Example</p>
<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">Check.isEmpty(null)      = true
Check.isEmpty("")        = true
Check.isEmpty(" ")       = false
Check.isEmpty("xyz")     = false
Check.isEmpty("  abc  ") = false</code></pre>
</li>
</ul>
</td>
</tr>
<tr>
<td>"Check.isNotEmpty"</td>
<td>
<p>Checks if a CharSequence is not empty ("") and not null.</p>
<ul type="disc">
<li>Signature: <code>isNotEmpty(final CharSequence cs)</code></li>
<li>
<p>Example</p>
<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">Check.isNotEmpty(null)      = false
Check.isNotEmpty("")        = false
Check.isNotEmpty(" ")       = true
Check.isNotEmpty("xyz")     = true
Check.isNotEmpty("  abc  ") = true</code></pre>
</li>
</ul>
</td>
</tr>
<tr>
<td>"Check.isBlank"</td>
<td>
<p>Checks if a CharSequence is empty (""), null or white-space only.</p>
<ul type="disc">
<li>Signature: <code>isBlank(final CharSequence cs)</code></li>
<li>
<p>Example</p>
<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">Check.isBlank(null)      = true
Check.isBlank("")        = true
Check.isBlank(" ")       = true
Check.isBlank("xyz")     = false
Check.isBlank("  abc  ") = false</code></pre>
</li>
</ul>
</td>
</tr>
<tr>
<td>"Check.isNotBlank"</td>
<td>
<p>Checks if a CharSequence is not empty (""), not null and not white-space only.</p>
<ul type="disc">
<li>Signature: <code>isNotBlank(final CharSequence cs)</code></li>
<li>
<p>Example</p>
<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">Check.isNotBlank(null)      = false
Check.isNotBlank("")        = false
Check.isNotBlank(" ")       = false
Check.isNotBlank("xyz")     = true
Check.isNotBlank("  abc  ") = true</code></pre>
</li>
</ul>
</td>
</tr>
<tr>
<td>"Check.isEqualTo"</td>
<td>
<p>Compares two CharSequences, returning true if they represent equal sequences of characters.</p>
<ul type="disc">
<li>Signature: <code>isEqualTo(final CharSequence cs1, final CharSequence cs2)</code></li>
<li>
<p>Example</p>
<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">Check.isEqualTo(null, null)   = true
Check.isEqualTo(null, "abc")  = false
Check.isEqualTo("abc", null)  = false
Check.isEqualTo("abc", "abc") = true
Check.isEqualTo("abc", "ABC") = false</code></pre>
</li>
</ul>
</td>
</tr>
<tr>
<td>"Check.isEqualToIgnoringCase"</td>
<td>
<p>Compares two CharSequences, returning true if they represent equal sequences of characters, ignoring case.</p>
<ul type="disc">
<li>Signature: <code>isEqualToIgnoringCase(final CharSequence str1, final CharSequence str2)</code></li>
<li>
<p>Example</p>
<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">Check.isEqualToIgnoringCase(null, null)   = true
Check.isEqualToIgnoringCase(null, "abc")  = false
Check.isEqualToIgnoringCase("abc", null)  = false
Check.isEqualToIgnoringCase("abc", "abc") = true
Check.isEqualToIgnoringCase("abc", "ABC") = true</code></pre>
</li>
</ul>
</td>
</tr>
</table>

### Sample Rules

<details close="" markdown="block">
  <summary>
    Modify request input
  </summary>
  <table>
    <tr>
      <th><b>Use case</b></th>
      <td>
        <p>Changing request input before evaluating the rules.</p>
        <p>For example, you can map the account type received from the request to an account code.</p>
      </td>
    </tr>
    <tr>
      <td><b>Rule</b></td>
      <td>
        <pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">name: <font color="#008000">"Convert account type to account code in pre-processor"</font>
description: <font color="#008000">"Rule to convert account type to account code"</font>
condition: <font color="#008000">"AccountType == \"Loan Account\""</font>
actions:
     <font color="#008000">- "inputMap.AccountCode = 1" 
     - inputMap.Message = \"This is a loan account\"</font></code></pre>
        <p>The given sample rules above checks the account type, if the account type is Loan Account, then the associated account code is set to 1.</p>
        <p>The <code>inputMap</code> object is used to access the parameters in the request that comes from the device.</p>
      </td>
    </tr>
  </table>
</details>
<details close="" markdown="block">
  <summary>
    Modify result
  </summary>
  <table>
    <tr>
      <th><b>Use case</b></th>
      <td>
        <p>Modifying the result of an operation.</p>
        <p>For example, you can add the account type in the result depending upon the account code.</p>
      </td>
    </tr>
    <tr>
      <td><b>Rule</b></td>
      <td>
        <pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">name: <font color="#008000">"Add parameter in result"</font>
description: <font color="#008000">"Add a parameter in result for a specific account type"</font>
condition: <font color="#008000">"AccountCode == 1"</font>
actions:
     <font color="#008000">- "results.addParam(\"AccountType\", \"Loan Account\")" </font></code></pre>
        <p>The given sample rule checks the account code, if the account code is equal to 1, then the account type parameter is set as Loan Account.</p>
        <p>The <code>results</code> object is used to modify the result of an operation.</p>
      </td>
    </tr>
  </table>
</details>
<details close="" markdown="block">
  <summary>
    Modify response, status code and headers sent to a device
  </summary>
  <table>
    <tr>
      <th><b>Use case</b></th>
      <td>
        <p>Changing the response body, status code, and headers that are sent to the device.</p>
        <p>For example, you can categorize the customer based on the quarterly average balance and send specific headers to the device to render appropriate UX of client application.</p>
      </td>
    </tr>
    <tr>
      <td><b>Rule</b></td>
      <td>
        <pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">name: <font color="#008000">"Modify response in rules."</font>
description: <font color="#008000">"Set response message, status code and headers sent to device."</font>
condition: <font color="#008000">"quarterlyAvgBalance &gt;= 100000"</font>
actions:
<font color="#008000">- "response = \"{\\\"category\\\": \\\"Preferred customer\\\"}\""
- "statusCode = 200"
- "deviceHeadersMap.put(\"X-VoltMX-Preferred-Customer\", \"true\")"  </font></code></pre>
        <p>The given sample rule checks the quarterlyAvgBalance parameter. If the parameter is greater than or equal to 100000, then the response body, status code and headers sent to the device are changed.</p>
        <p>The <code>response</code> object is used to modify the response body.</p>
        <p>The <code>statusCode</code> object is used to set the status code.</p>
        <p>The <code>deviceHeadersMap</code> object is used to modify headers that are sent to the device.</p>
      </td>
    </tr>
  </table>
</details>
<details close="" markdown="block">
  <summary>
    Access cache
  </summary>
  <table>
    <tr>
      <th><b>Use case</b></th>
      <td>
        <p>Accessing data from the cache.</p>
        <p>For example, you can populate a country code in the cache if it is not present.</p>
      </td>
    </tr>
    <tr>
      <td><b>Rule</b></td>
      <td>
        <pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">name: <font color="#008000">"Access cache in rules"</font>
description: <font color="#008000">"Checks if country code for India is present in cache, if not it will store in the cache"</font>
priority: <font color="#008000">1</font>
condition: <font color="#008000">"resultCache.retrieveFromCache(\"india\") == null"</font>
actions:
     <font color="#008000">- resultCache.insertIntoCache(\"india \", \"+91\")</font></code></pre>
        <p>The given sample rule checks the stored value in the cache. If the cache is empty, then the country code is added to the cache.</p>
        <p>The <code>resultCache</code> object is used to access the cache.</p>
      </td>
    </tr>
  </table>
</details>
<details close="" markdown="block">
  <summary>
    Invoke service
  </summary>
  <table>
    <tr>
      <th><b>Use case</b></th>
      <td>
        <p>Invoking any service inside a Rule.</p>
        <p>For example, you can invoke an SMS or email service based on a request parameter.</p>
      </td>
    </tr>
    <tr>
      <td><b>Rule</b></td>
      <td>
        <pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">---
name: <font color="#008000">"Invoke send email integration service"</font>
description: <font color="#008000">"Execute a service to send email if sendEmail is true in input map."</font>
priority: <font color="#008000">1</font>
condition: <font color="#008000">"inputMap.get(\"sendEmail\") == \"true\""</font>
actions:
     <font color="#008000">- servicesManager.invokeIntegration("RulesIntegrationService", "SendEmail")</font>
---
name: <font color="#008000">"Invoke send SMS integration service"</font>
description: <font color="#008000">"Execute integration service to send SMS if sendSms is true in input map"</font>
priority: <font color="#008000">1</font>
condition: <font color="#008000">"inputMap.get(\"sendSms\") == \"true\""</font>
actions:
     <font color="#008000">- servicesManager.invokeIntegration("RulesIntegrationService", "SendSms")</font></code></pre>
        <p>In the sample, based on the parameters sent from the device, we are invoking services either to send an SMS or email or both.</p>
        <p>The <code>servicesManager</code> object is used to invoke any service from a rule.</p>
      </td>
    </tr>
  </table>
</details>
<details close="" markdown="block">
  <summary>
    Access Identity data
  </summary>
  <table>
    <tr>
      <th><b>Use case</b></th>
      <td>
        <p>Accessing the Identity data.</p>
        <p>For example, you can access the Identity data such as the app id and the user profile for the request.</p>
      </td>
    </tr>
    <tr>
      <td><b>Rule</b></td>
      <td>
        <pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">name: <font color="#008000">"Access Identity Info"</font>
description: <font color="#008000">"Accesses  identity info like first name, last name, email id, and app id in rules"</font>
priority: <font color="#008000">1</font>
condition: <font color="#008000">"setIdentityDetails == true"</font>
actions:
     <font color="#008000">- "results.addParam(\"FirstName\", identityHandler.getUserProfile().getFirstName())"
    - "results.addParam(\"LastName\", identityHandler.getUserProfile().getLastName())"
    - "results.addParam(\"Email\", identityHandler.getUserProfile().getEmailId())"
    - "results.addParam(\"AppId\", identityHandler.getAppId())"</font></code></pre>
        <p>The given sample rule accesses the identity information such as first name, last name, email id, and app id and sends it to the device.</p>
        <p>The <code>identityHandler</code> object is used to access identity information.</p>
      </td>
    </tr>
  </table>
</details>
<details close="" markdown="block">
  <summary>
    Access session
  </summary>
  <table>
    <tr>
      <th><b>Use case</b></th>
      <td>
        <p>Accessing data from the session.</p>
        <p>For example, user can check user type from the value inserted in session if user is preferred one and set interest rate accordingly.</p>
      </td>
    </tr>
    <tr>
      <td><b>Rule</b></td>
      <td>
        <pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">name: <font color="#008000">"Access session data"</font>
description: <font color="#008000">"Check if authorization token is present in session then set the same in header"</font>
priority: <font color="#008000">1</font>
condition: <font color="#008000">"session.containsKey("\isPreferredBankingSession\")"</font>
actions:
     <font color="#008000">"results.addParam(\"interestRate"\, \"2\");</font></code></pre>
        <p>The given sample rule checks for if isPreferredBankingSession attribute is available in session and sets interest rate accordingly.</p>
        <p>The <code>session</code> object is used to access the session data.</p>
      </td>
    </tr>
  </table>
</details>
<details close="" markdown="block">
  <summary>
    Access Configurable Parameters defined in App Services
  </summary>
  <table>
    <tr>
      <th><b>Use case</b></th>
      <td>Access configuration properties.</td>
    </tr>
    <tr>
      <td><b>Rule</b></td>
      <td>
        <pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">name: <font color="#008000">"Access configuration properties"</font>
description: <font color="#008000">"Check if encryption enabled in client properties then set encryption key in input map."</font>
priority: <font color="#008000">1</font>
condition: <font color="#008000">"configurationParameters.getClientAppProperty(\"encrypt\") == \"true\""</font>
actions:
     <font color="#008000">- "inputMap.encryptionKey = configurationParameters.getServerProperty(\"encryptionKey\")"</font></code></pre>
        <p>The given sample rule checks the encrypt property. If the encrypt property is enabled in the client properties, then the code fetches the encryption key from server properties and adds the key to the request.</p>
        <p>The <code>configurationParameters</code> object is used to access the properties that are defined in App Services.</p>
      </td>
    </tr>
  </table>
</details>
<details close="" markdown="block">
  <summary>
    Access custom metrics
  </summary>
  <table>
    <tr>
      <th><b>Use case</b></th>
      <td>Access custom metrics.</td>
    </tr>
    <tr>
      <td><b>Rule</b></td>
      <td>
        <pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">name: <font color="#008000">"Access custom metrics in rules"</font>
description: <font color="#008000">"Set custom metrics of product if enabled in request."</font>
priority: <font color="#008000">1</font>
condition: <font color="#008000">"enableCustomMetrics == true"</font>
actions:
     <font color="#008000">- "VoltMXCustomMetricsDataSet metricsDataset = new VoltMXCustomMetricsDataSet();
     - "metricsDataset.setMetricsString(\"Product Name\", \"VoltMX VoltMX\");"
     - "metricsDataset.setMetricsBoolean(\"Is Released\", true);"
     - "metricsDataset.setMetricsTimestamp(\"Release date\", \"2019-03-12\", \"yyyy-MM-dd\");"
     - "customMetrics.addCustomMetrics(metricsDataset);"</font></code></pre>
        <p>The given sample rule assigns values to the custom metrics.</p>
        <p>The <code>customMetrics</code> object is used to access custom metrics.</p>
      </td>
    </tr>
  </table>
</details>
<details close="" markdown="block">
  <summary>
    Multiple rules in same Rule
  </summary>
  <table>
    <tr>
      <th><b>Use case</b></th>
      <td>
        <p>You can write multiple rules in the same rule by using <code>--- (three hyphens)</code> as the separator.</p>
        <blockquote>
          <em><b>Note: </b></em>Please do not give separator after last rule.
        </blockquote>
      </td>
    </tr>
    <tr>
      <td><b>Rule</b></td>
      <td>
        <pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">--- 
name: <font color="#008000">"Convert account code to type for loan account"</font>
description: <font color="#008000">"Rule for loan account to convert account type to code and add message in result"</font>
condition: <font color="#008000">"AccountCode == 1"</font>
actions:
   <font color="#008000">- "results.addParam(\"AccountType\", \"Loan Account\")"
   - "results.addParam(\"Message\", \"This is a Loan Account\")"
   </font>
--- 
name: <font color="#008000">"Convert account code to type for saving account"</font>
description: <font color="#008000">"Rule for saving account to convert account type to code and add message in result"</font>
condition: <font color="#008000">"AccountCode == 2"</font>
actions:
   <font color="#008000">- "results.addParam(\"AccountType\", \"Saving Account\")"
   - "results.addParam(\"Message\", \"This is a Saving Account\")"
--- 
name: <font color="#008000">"Convert account code to type for current account"</font>
description: <font color="#008000">"Rule for current account to convert account type to code and add message in result"</font>
condition: <font color="#008000">"AccountCode == 3"</font>
actions:
   <font color="#008000">- "results.addParam(\"AccountType\", \"current Account\")"
   - "results.addParam(\"Message\", \"This is a current Account\")"</font></font></code></pre>
        <p>The given sample rule invokes multiple rules.</p>
      </td>
    </tr>
  </table>
</details>
<details close="" markdown="block">
  <summary>
    Iterate over a set of values
  </summary>
  <table>
    <tr>
      <th><b>Use case</b></th>
      <td>Iterating over a set of values.</td>
    </tr>
    <tr>
      <td><b>Rules</b></td>
      <td>
        <pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">name: <font color="#008000">"Iterate over records using for loop in rules."</font>
description: <font color="#008000">"Add 80% of price as discounted price of book."</font>
condition: <font color="#008000">"\"giveDiscount\" == true"</font>
actions:
     <font color="#008000">- "for (Record record : results.getDatasetById(\"books\").getAllRecords()) {
                Record bookRecord = record.getRecordById(\"book\"); 
                double price = Double.parseDouble(bookRecord.getParamValueByName(\"price\")); 
                bookRecord.addParam(\"discountedPrice\", price * 0.8);
        }"</font></code></pre>
        <p>The given sample rule iterates a books dataset and adds discounted prices for each book in the dataset.</p>
      </td>
    </tr>
  </table>
</details>
