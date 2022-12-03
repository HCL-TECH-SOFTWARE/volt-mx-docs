                                

User Guide: [Integration](Services.md#integration) \> [Configure the Integration Service](ConfigureIntegrationService.md) > Red Hat PAM Adapter

Red Hat Process Automation Manager Adapter
------------------------------------------

Red Hat® Process Automation Manager (PAM) is an open-source business automation platform. Business enterprise users can access the centralized data repository to manage and deploy **business processes**, **cases**, and **business rules**. Refer to [Red Hat Process Automation Manager](https://developers.redhat.com/products/rhpam/overview).

The Red Hat PAM adapter in Foundry Console exposes the services and operations created using Red Hat PAM Business Central Interface.

To integrate a Red Hat PAM service in Volt MX Foundry, developers need to create a project in the Red Hat PAM and deploy it to KIE Server and then configure the Red Hat PAM adapter in Foundry Integration Services. After you publish the service, you can invoke the configured operations from the runtime server.

Red Hat PAM has primarily two components: Business Central and KIE Server:

*   **Business Central** is used for decision creation and build projects.
*   **KIE Server** is used for deploying the projects. Once the project is deployed, the configured APIs for accessing decisions/rules are hosted on the server.

### Prerequisites

*   Red Hat PAM Server is installed on the host machine.
    
*   A project with DMN created using the Red Hat Process Automation Manager is deployed to KIE Server.
    
*   For invocation of processes APIs and case APIs, a project with process definition and case definition is deployed to KIE Server.
    
*   For invocation of task APIs, process definition and case definition with human tasks in a project are deployed to KIE Server.
    
*   A user is configured with the following user roles:
    
    *   `kie-server`
    *   `rest-all`
    *   `admin`

Configuring a Red Hat PAM Adapter involves the following steps:

*   [How to Configure Service Definition for Red Hat PAM Adapter](#how-to-configure-service-definition-for-red-hat-pam-adapter)
*   [How to Create and Configure Operations for the Red Hat PAM Adapter](#how-to-create-and-configure-operations-for-the-red-hat-pam-adapter)

### How to Configure Service Definition for Red Hat PAM Adapter

To configure a Red Hat PAM adapter in the [Integration Service Definition](ConfigureIntegrationService.md) tab, follow these steps:

1.  In the **Name** field, provide a unique name for your service. When you enter the name, the name is updated for the active service under the **Services** section in the left pane.
2.  From the **Service Type** list, select _`Red Hat PAM`_.
    
    > **_Note:_** XML is selected, by default.
    
3.  Provide the following details in the Connection Parameters section to create a Red Hat PAM Adapter.
    
    | Fields | Description |
    | --- | --- |
    | Version | Select the version for the service. |
    | Connection URL | Provide the base endpoint URL of the KIE Server REST API endpoint.For example :`http://{host}:{port}/kie-server/services/rest/server` |
    | **User ID** | Type the user ID for the connection URL. |
    | Password | Type the password for the user ID which you have entered. |
    
4.  In the **Authentication** section, you can select an identity provider from **Use Existing Identity Provider**. This drop-down lists the identity providers created on the Identity page. If you select any identity provider, you have to enter valid login credentials.
    
    > **_Note:_** The Authentication section is optional.
    
5. <details close markdown="block"><summary>For additional configuration of your service definition, provide the following details in the **Advanced** section.</summary> 

| Field | Description |
| --- | --- |
| Custom code | To specify a JAR associated to the service, select one from the **Select Existing JAR** drop-down menu or click **Upload New** to add a new JAR file. Make sure that you upload a custom JAR file that is built on the same JDK version used for installing Volt MX Foundry Integration. > **_Important:_** Make sure that you upload a custom JAR file that is built on the same JDK version used for installing Volt MX Foundry Integration.For example, if the JDK version on the machine where Volt MX Foundry Integration is installed is 1.6, you must use the same JDK version to build your custom jar files. If the JDK version is different, an unsupported class version error will appear when a service is used from a device. |
| API Throttling | If you want to use **API throttling** in Volt MX Foundry Console, to limit the number of request calls within a minute. do the following:
In the **Total Rate Limit** text box, enter a required value. This will limit the total number of requests processed by this API.In the **Rate Limit Per IP** field, enter a required value. With this value, you can limit the number of IP address requests configured in your Volt MX Foundry console in terms of Per IP Rate Limit. |

To override throttling from Volt MX Foundry App Services Console, refer to [Override API Throttling Configuration](API_Throttling_Override.md#override-api-throttling-configuration).> **_Note:_** In case of On-premises, the number of nodes in a clustered environment is set by configuring the `VOLTMX_SERVER_NUMBER_OF_NODES` property in the Admin Console. This property indicates the number of nodes configured in the cluster. The default value is 1. Refer to [The Runtime Configuration tab on the Settings screen of App Services](../../../Foundry/vmf_integrationservice_admin_console_userguide/Content/Runtime_Configuration.md). The total limit set in the Volt MX Foundry Console will be divided by the number of configured nodes. For example, a throttling limit of 600 requests/minute with three nodes will be calculated to be 200 requests/minute per node. This is applicable for Cloud and On-premises.

</details>
> **_Note:_** All options in the Advanced section are optional.
    
6.  Enter the **Description** for the service.
7.  Click **SAVE** to save your service definition.

### How to Create and Configure Operations for the Red Hat PAM Adapter

The **Operations List** tab appears only after the service definition is saved and authentication is successful using provided connection parameters.

> **_Note:_** Click **Operations List** tab > **Configure Operation**. The **Configured Operations** list appears.

*   **To create an operation, follow these steps:**

1.  Click **SAVE & ADD OPERATION** in your service definition page to save your service definition and display the **New Operation** tab for adding operations.  
                        OR  
    Click **Add Operation** to add a new operation or from the tree in the left pane, click **Add > Add New Operation**.  
    
2.  From the **ADD OPERATION** list, expand the `RedHatPAM` and select the check boxes for the available operations.
3.  Click **ADD OPERATION**. The new operations are created under **Configured Operations** section.
    
    [![](Resources/Images/RedHATPAMops_thumb_0_48.png)](Resources/Images/RedHATPAMops.png)
    
4.  Operation names are auto-generated in the format. The default name format of a Red Hat PAM operation is `<Group_name>_<selectedoperation's_name>`. You can change the operation name if required.  
    For example, `DMNs_invokeDMNRule`.
5.  **To configure an operation**: Once you create operations for Red Hat PAM adapter, you can configure the operations such as configuring advanced configurations, adding test values, and fetching the response. Under **Configured Operations**, hover your cursor over the creates operation, click the **Settings > Edit**.
    
    > **_Note:_** To edit an operation, you can also click the operation from the service tree pane.
    
    The system displays the selected operation in the edit mode. Provide the following details to configure the operation.
    
    | Fields | Description |
    | --- | --- |
    | Name | The **Name** field is pre-populated with field names of the selected operation. You can edit this field. |
    | Operation Security Level | It specifies how a client must authenticate to invoke this operation.
<details close markdown="block"><summary>Select one of the following security operations in the **Operation Security Level** field.</summary>
    
    **Authenticated App User** – It restricts the access to clients who have successfully authenticated using an Identity Service associated with the app.**Anonymous App User** – It allows the access from trusted clients that have the required App Key and App Secret. Authentication through an Identity Service is not required.**Public** – It allows any client to invoke this operation without any authentication. This setting does not provide any security to invoke this operation and you should avoid this authentication type if possible.**Private** - It blocks the access to this operation from any external client. It allows invocation either from an Orchestration/Object Service, or from the custom code in the same run-time environment.
    
</details>
    > **_Note:_** The field is set to Authenticated App User, by default. |
    

1.<details close markdown="block"><summary> response operations, provide the following details in the Advanced section.</summary>
    
    <table style="width: 100%;margin-left: 0;margin-right: auto;mc-table-style: url]('../Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 174px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Custom Code Invocation</td><td class="TableStyle-Basic-BodyD-Column1-Body1">You can add pre and post processing logic to services to modify the request inputs. When you test, the services details of various stages in the service execution are presented to you for better debugging. All options in the Advanced section are optional. For more details, refer to <a href="Java_Preprocessor_Postprocessor_.md" target="_blank">Preprocessor and Postprocessor</a>.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Additional Configuration Properties</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Additional Configuration Properties allows you to configure service call time out cache response. For information on different types of configuration properties, refer <a href="Java_Preprocessor_Postprocessor_.html#timeout_cachable" target="_blank">Properties</a>.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">Front-end API</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Front-end API allows you map your endpoint ](or) backend URL of an operation to a front-end URL. For detailed information, refer Custom <a href="FrontEndAPI.md" target="_blank">Front-end URL</a>.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">Server Events</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Using Server Events you can configure this service to trigger or process server side events. For detailed information, refer <a href="ServerEvents.html">Server Events</a>.</td></tr></tbody></table>
    
</details>   
    > **_Note:_** All options in the **Advanced** section for operations are optional.
    
7.  Enter the **Description** for the operation.
8.  After you create operations, they are configured with request and response parameters by default.
    
    > **_Important:_** Do not edit these parameter names under the **NAME** column for request and response.
    

<summary>**Click here: The following table details pre-configured parameters for request and response operations:**</summary>
    
      
    | Case Operations | Request Input Parameters \* Do not edit these param names | Response Output Parameters |
    | --- | --- | --- |
    | **Cases\_addDynamicTaskToCase** | containerId caseId (IT-0000000008) dynamicTaskData {"name" : "RequestManagerApproval","data" : { "reason" : "Fixed hardware spec","caseFile\_hwSpec" : "#{caseFile\_hwSpec}" },"subject" : "Ask for manager approval again","actors" : "manager","groups" : "" } | Response The Response of the **Cases\_addDynamicTaskToCase** operation is "Dynamic task added successfully", |
    | Cases\_cancelCaseInstance | containerId caseId (IT-0000000008) destroy (true) The destroy param is optional. | The Response of the **Cases\_cancelCaseInstance** operation is "Response": "Case aborted successfully", |
    | Cases\_closeCaseInstance | containerId caseId (IT-0000000008) comments ("closing the case") | The Response of the **Cases\_closeCaseInstance** operation is "Response": "Case closed successfully", |
    | Cases\_getCaseInstance | containerId caseId (IT-0000000008) | The Response of the **Cases\_getCaseInstance** operation contains a details of a particular case ID. |
    | Cases\_startCase | containerId caseDefId (itorders.orderhardware) caseVariables { "case-user-assignments" : { "manager" : "pamAdmin", "supplier" : "supplier" }, "case-group-assignments" :{ "manager" : "", "supplier" : "caseSupplier" } } | caseId The Response of the **Cases\_startCase** operation includes the newly created case ID. |
    
      
    | Common Operations | Request Input Parameters \* Do not edit these param names | Response Output Parameters |
    | --- | --- | --- |
    | Common\_getKIEContainers | NA | Response The Response of the **getKIEContainers** operation contains the contrainerID, which is needed to invoke the **getDMNs** operation. |
    
      
    | DMNs Operations | Request Input Parameters \* Do not edit these param names | Response Output Parameters |
    | --- | --- | --- |
    | DMNs\_getDMNs | containerId [![](Resources/Images/RedHat_getDMNs_thumb_0_48.png)](Resources/Images/RedHat_getDMNs.png) | Response The Response of the **getDMNs** operation contains the configuration parameters such as modelNameSpace and modelName, which are needed to invoke the **invokeDMNRule** operation. |
    | **DMNs\_invokeDMNRule** | containerId modelNameSpace modelName dmnContext [![](Resources/Images/RedHat_invokeDMNs_thumb_0_48.png)](Resources/Images/RedHat_invokeDMNs.png)   To invoke **invokeDMNRule** operation, you need to provide the **dmnContext** as a JSON payload. For example: {"Param 1" : "True";"Param 2" : "2"} | Response The Response of the **invokeDMNRule** operation contains the Decision Model and Notation (DMN) evaluation result. |
    
      
    | Process Operations | Request Input Parameters \* Do not edit these param names | Response Output Parameters |
    | --- | --- | --- |
    | Processes\_signalProcessInstance | containerId processIdLeaveRequest.LeaveRequest signalName signalData The signalData param is optional.{"id" : "1001", "name" : "Jey" } | The Response of the **Processes\_signalProcessInstance** operation response is "Signal triggered successfully" |
    | Processes\_startProcess | containerId processIdLeaveRequest.LeaveRequest processVariables {"empId":"emp10","noOfDays":10} | The Response of the **Processes\_startProcess** operation includes the newly created processInstanceId. |
    
      
    | Task Operations | Request Input Parameters \* Do not edit these param names | Response Output Parameters |
    | --- | --- | --- |
    | Task\_resumeTask | containerId taskInstanceId user The user param is optional. | The Response of the **Task\_resumeTask** operation response is "Task resumed successfully", |
    | Task\_startTask | containerId taskInstanceId user The user param is optional. | The Response of the **Task\_startTask** operation response is "Task started successfully", |
    | Task\_stopTask | containerId taskInstanceId user The user param is optional. | The Response of the **Task\_stopTask** operation response is "Task stopped successfully", |
    | Task\_suspendTask | containerId taskInstanceId user The user param is optional. | The Response of the **Task\_suspendTask** operation response is "Task suspended successfully",   |
    
9.  To validate the details, from the Environment drop-down list select an environment from the listed run-time environments configured for the Volt MX Foundry account, and then click **SAVE AND FETCH RESPONSE**. Refer to [Test a Service Operation](Test_a_Service_Operation.md) for the steps to test a service.
10.  Click **SAVE OPERATION**.
    
    > **_Note:_** You can view the service in the Data Panel feature of Volt MX Iris. By using the Data Panel, you can link back-end data services to your application UI elements seamlessly with low-code to no code. For more information on Data Panel, click [here](../../../Iris/iris_user_guide/Content/DataPanel.md#top).
    

You can test the published services using the Admin Console. After you publish an integration service, you can test the service using different operations available in the service. To know more on integration service in the Admin Console, refer to the [App Services Console User Guide](../../../Foundry/vmf_integrationservice_admin_console_userguide/Content/App_Services_User_Guide.md).

**References**

*   [Integration with Red Hat Process Automation Manager using KIE APIs](https://access.redhat.com/documentation/en-us/red_hat_process_automation_manager/7.8.md/interacting_with_red_hat_process_automation_manager_using_kie_apis/index)
*   [Integration of RH-SSO with Red Hat Process Automation Manager](https://access.redhat.com/documentation/en-us/red_hat_process_automation_manager/7.5.md/integrating_red_hat_process_automation_manager_with_red_hat_single_sign-on/sso-int-con)
*   [Server Administration Guide for Red Hat Single Sign-On](https://access.redhat.com/documentation/en-us/red_hat_single_sign-on/7.3.md-single/server_administration_guide/index#overview)
*   [Authentication of Third-party Clients Through Red Hat -SSO](https://access.redhat.com/documentation/en-us/red_hat_process_automation_manager/7.5.md/integrating_red_hat_process_automation_manager_with_red_hat_single_sign-on/sso-third-party-proc_integrate-sso#sso-token-auth-proc)
