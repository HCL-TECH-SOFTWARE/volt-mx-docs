   

Foundry Workflow Adapter
-----------------------

From V9 SP3, the new Foundry Workflow adapter (integration service) has been introduced in VoltMX Foundry.

From V9 SP3, a new type of Foundry workflow has been introduced called “Integration Service” trigger type. This workflow type helps to visually create service orchestrations and then map them to an Integration service endpoint. This results in exposing Foundry workflows as API endpoints that can be invoked by clients or other backends without linking them to object models. In order to facilitate this, the new Foundry Workflow adapter has also been introduced as one of the Integration connectors.

Using the Foundry Workflow adapter, you can map Integration Trigger Workflows to an operation and invoke them directly as endpoints from external clients. The integration service when invoked then passes the request handling to workflow engine along with the Request Input. The Request Input is propagated as “Device\_Request” scope to the workflow. Foundry then executes the workflow and responds back to the invoking integration service with an output response as mapped in the workflow designer. The integration service finally responds back to the clients with httpstatus, opstatus, workflow instance id and response output similar to all integration service invocations.

The following flow diagram details how the Sync Workflow works:

![](../../voltmx_foundry_workflow/Content/Resources/Images/SyncWorkflowFlow.png)

The following flow diagram details how the Async Workflow works:

![](../../voltmx_foundry_workflow/Content/Resources/Images/AsyncWorkflowFlow.png)

For more information on how to create Integration ](Sync/Async) Workflows, refer to the [Integration Service Trigger Workflow](../../voltmx_foundry_workflow/Content/Workflow.md).

### Prerequisites

*   One or more Integration triggered Workflow Services should be created.  
    

Configuring a Foundry Workflow Adapter involves the following steps:

*   [How to Configure Service Definition for Foundry Workflow Adapter](#how-to-configure-service-definition-for-foundry-workflow-adapter)
*   [How to Create and Configure Operations for the Foundry Workflow Adapter](#how-to-create-and-configure-operations-in-foundry-workflow-adapter)

### How to Configure Service Definition for Foundry Workflow Adapter

To configure a Foundry Workflow adapter in the [Integration Service Definition](ConfigureIntegrationService.md) tab, follow these steps:

1.  In the **Name** field, provide a unique name for your service. When you enter the name, the name is updated for the active service under the **Services** section in the left pane.
2.  From the **Service Type** list, select _`Foundry Workflow`_.
3.  In the **Authentication** section, you can select an identity provider from **Use Existing Identity Provider**. This drop-down lists the identity providers created on the Identity page. If you select any identity provider, you have to enter valid login credentials.
    
    >The Authentication section is optional.
    
    > For more information on Externalizing Identity Services, refer to [Replace the Identity Service references in a Foundry app](Replacing_Identity_Services.md).
    
4.  For additional configuration of your service definition, provide the following details in the **Advanced** section.

    <table style="mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;" class="TableStyle-TemenosTables" cellspacing="0">
    <colgroup><col class="TableStyle-TemenosTables-Column-Column1">  
    <col class="TableStyle-TemenosTables-Column-Column1">
    </colgroup><thead>
        <tr class="TableStyle-TemenosTables-Head-Header1">
            <th class="TableStyle-TemenosTables-HeadE-Column1-Header1" scope="col">Field</th>
            <th class="TableStyle-TemenosTables-HeadD-Column1-Header1" scope="col">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr class="TableStyle-TemenosTables-Body-Body1">
            <td class="TableStyle-TemenosTables-BodyE-Column1-Body1">Custom code</td>
            <td class="TableStyle-TemenosTables-BodyD-Column1-Body1">
                <p>To specify a JAR&nbsp;associated to the service, select one from the <b>Select Existing JAR</b> drop-down menu or click <b>Upload New</b> to add a new JAR file. Make sure that you upload a custom JAR file that is built on the same JDK version  used for installing 
                Foundry Integration.</p>
                <p>For example, if the JDK version on the machine where Foundry Integration is installed is 1.6, you must use the same JDK version to build your custom jar files. If the JDK version is different, an unsupported class version error will appear when a service is used from a device.</p>
            </td>
        </tr>
        <tr class="TableStyle-TemenosTables-Body-Body1">
            <td class="TableStyle-TemenosTables-BodyB-Column1-Body1">API Throttling</td>
            <td class="TableStyle-TemenosTables-BodyA-Column1-Body1">
            If you want to use <a name="APIThrottling"></a><b>API throttling</b> in Foundry Console, to limit the number of request calls within a minute, do the following:<br>
            <ol style="list-style-type: lower-roman;"><li value="1"><p>In the <b>Total Rate Limit</b> text box, enter a required value.  This will limit the total number of requests processed by this API.</p></li><li value="2"><p>In the <b>Rate Limit Per IP</b> field, enter a required value. With this value, you can limit the number of IP address requests configured in your  Foundry console in terms of Per IP Rate Limit.</p></li></ol>
            To override throttling from Foundry App Services Console, refer to <a href="API_Throttling_Override.html" target="_blank">Override API Throttling Configuration</a>.<p class="Note" data-mc-autonum="<b><span style=&quot;color: #293276;&quot; class=&quot;mcFormatColor&quot;>NOTE: </span></b>"><span class="autonumber"><span><b><span style="color: #293276;" class="mcFormatColor">NOTE: </span></b></span></span>In case of On-premises, <span>the number of nodes in a clustered environment is set by configuring the </span><code style="font-family: monospace;" class="codefirst">VOLTMX_SERVER_NUMBER_OF_NODES</code><span> property in the Admin Console</span>. This property indicates the number of nodes configured in the cluster. The default value is 1. <br>Refer to <a href="https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Foundry/vmf_integrationservice_admin_console_userguide/Content/Runtime_Configuration.html" target="_blank">The Runtime Configuration tab on the Settings screen of App Services</a>. <br><br>The total limit set in the Foundry Console will be divided by the number of configured nodes. For example, a throttling limit of 600 requests/minute with three nodes will be calculated to be 200 requests/minute per node. <br>This is applicable for Cloud and On-premises.</p>
            </td>
        </tr>
    </tbody>
    </table>    
    All options in the Advanced section are optional.
    
5.  Enter the **Description** for the service.
6.  Click **SAVE** to save your service definition. The **Operations List** tab appears only after the service definition is saved. The following section details how to create operations.

### How to Create and Configure Operations in Foundry Workflow Adapter

To create an operation, follow these steps:

1.  Click **SAVE & ADD OPERATION** in your service definition page to save your service definition and display the **Operations List** tab for adding operations.             
2.  From the **ADD OPERATION**, expand the **Select Operations** list and select check boxes for the available operations.
    
    This list displays all the Integration Workflows linked to the App. Otherwise, displays the message _There are no Integration Workflows linked to the App_.
    
    The default name format of operations are as per the Integration Workflows, for example `<IntegrationWorkflowServicenName>`.
    
3.  Click **ADD OPERATION**. The new operations are created under **Configured Operations** section.
    
    ![](Resources/Images/FoundryWorkflowAPIs.png)
    
4.  Operation names are auto-generated in the default name format. You can change the operation name if required.  
    
5.  **To configure an operation**: Once you create operations for Foundry Workflow adapter, you can configure the operations such as configuring advanced configurations, adding test values, and fetching the response.
    
    To edit an operation, you can also click the operation from the service tree pane.
    
    The system displays the selected operation in the edit mode. Provide the following details to configure the operation.
    
    <table style="width: 100%;margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-TemenosTables" cellspacing="0">
	<colgroup>
		<col class="TableStyle-TemenosTables-Column-Column1" style="width: 265px;">
			<col class="TableStyle-TemenosTables-Column-Column1">
			</colgroup>
			<thead>
				<tr class="TableStyle-TemenosTables-Head-Header1">
					<th class="TableStyle-TemenosTables-HeadE-Column1-Header1" scope="col">Fields</th>
					<th class="TableStyle-TemenosTables-HeadD-Column1-Header1" scope="col">Description</th>
				</tr>
			</thead>
			<tbody>
				<tr class="TableStyle-TemenosTables-Body-Body1">
					<td class="TableStyle-TemenosTables-BodyE-Column1-Body1">Name</td>
					<td class="TableStyle-TemenosTables-BodyD-Column1-Body1">The <b>Name</b> field is pre-populated with field names of the selected operation. You can edit this field.</td>
				</tr>
				<tr class="TableStyle-TemenosTables-Body-Body1">
					<td class="TableStyle-TemenosTables-BodyE-Column1-Body1">Operation Security Level</td>
					<td class="TableStyle-TemenosTables-BodyD-Column1-Body1">
						<p>It specifies how a client must authenticate to invoke this operation.</p>
											<p>Select one of the following security operations in the <b>Operation Security Level</b> field.  </p>	<ol>
											<ul>
												<li>
													<b>Authenticated App User</b> – It restricts the access to clients who have successfully authenticated using an Identity Service associated with the app.</li>
												<li>
													<b>Anonymous App User</b> – It allows the access from trusted clients that have the required App Key and App Secret. Authentication through an Identity Service is not required.</li>
												<li>
													<b>Public</b> – It allows any client to invoke this operation without any authentication. This setting does not provide any security to invoke this operation and you should avoid this authentication type if possible.</li>
												<li>
													<b>Private</b> - It blocks the access to this operation from any external client. It allows invocation either from an Orchestration/Object Service, or from the custom code in the same run-time environment.</li>
											</ul>
										</ol>
								<p class="Note" data-mc-autonum="<b>
											<span style=&quot;color: #293276;&quot; class=&quot;mcFormatColor&quot;>NOTE: </span>
										</b>">
									<span class="autonumber">
										<span>
											<b>
												<span style="color: #293276;" class="mcFormatColor">NOTE: </span>
											</b>
										</span>
									</span> The field is set to Authenticated App User, by default.</p>
							</td>
						</tr>
						<tr class="TableStyle-TemenosTables-Body-Body1">
							<td class="TableStyle-TemenosTables-BodyE-Column1-Body1">Front End HTTP Method</td>
							<td class="TableStyle-TemenosTables-BodyD-Column1-Body1">The Front End HTTP Method specifies the HTTP method that is used to invoke the Service operation from an HTTP Client. Iris and Other SDKs use POST method for communicating with Foundry.</td>
						</tr>
						<tr class="TableStyle-TemenosTables-Body-Body1">
							<td class="TableStyle-TemenosTables-BodyB-Column1-Body1">Associated Workflow</td>
							<td class="TableStyle-TemenosTables-BodyA-Column1-Body1">The <b>Name</b> field is pre-populated with workflow names. You cannot edit this field.</td>
						</tr>
					</tbody>
				</table> 
				
6.  For additional configuration of request or response operations, provide the following details in the Advanced section. 

    <table style="width: 100%;margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 174px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Custom Code Invocation</td><td class="TableStyle-Basic-BodyD-Column1-Body1">You can add pre and post processing logic to services to modify the request inputs. When you test, the services details of various stages in the service execution are presented to you for better debugging. All options in the Advanced section are optional. For more details, refer to <a href="https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Java_Preprocessor_Postprocessor_.html">Preprocessor and Postprocessor</a>.</td></tr><tr class="TableStyle-Basic-Body-Body1" madcap:conditions="Default.Not Ready for Publish"><td class="TableStyle-Basic-BodyE-Column1-Body1">Additional Configuration Properties</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Additional Configuration Properties allows you to configure service call time out cache response. For information on different types of configuration properties, refer <a href="https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Java_Preprocessor_Postprocessor_.html#timeout_cachable" target="_blank">Properties</a>.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">Front-end API</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Front-end API allows you map your endpoint ](or) backend URL of an operation to a front-end URL. For detailed information, refer Custom <a href="https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/FrontEndAPI.html">Front-end URL</a>.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">Server Events</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Using Server Events you can configure this service to trigger or process server side events. For detailed information, refer <a href="https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/ServerEvents.html">Server Events</a>.</td></tr></tbody></table>
    
    All options in the **Advanced** section for operations are optional.
    
7.  Enter the **Description** for the operation.
8.  After you create operations, you can configure the request and response parameters.
    
9.  Click **SAVE OPERATION**.
