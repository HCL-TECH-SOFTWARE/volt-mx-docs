   

Workflow
========

##Overview

A workflow is a visual representation of a business process. It provides you the ability to build processes visually with low code drag and drop functionality. A workflow consists of execution blocks which can be configured as required to accomplish your business use-case. Execution blocks offer a wide range of functionality such as the ability to design complex business logic, service invocation, triggering emails etc.

In V9 VoltMX release, when a new Workflow service was introduced in VoltMX Foundry, these workflow services were designed to be triggered/ instantiated from an object service invocation. From V9 SP2, a new type of trigger for Workflow service called Event triggered workflow has been introduced. This is independent of an object invocation and this type of workflow can be started via events on the Foundry bus. In other words, similar to other Foundry services, now workflow service can also be made as an Event listener and therefore be invoked by firing events.

From V9 SP3 onwards, Foundry workflows now have the capability to be invoked directly from external clients as an Orchestration API. This is achieved through the introduction of a new type called “Integration Service Triggered Workflow”. What this essentially means is that Foundry Workflows can now replace the existing Foundry Orchestration services – since workflows provide a visual orchestration designer along with data mapping, persisting in workflow\_context as well as execute conditional logic.

## Supported Workflow Types

The following types of Workflow are supported:

*   [Object triggered workflow](#object-model-triggered-workflow)
*   [Event triggered workflow](#event-triggered-workflow)
*   [Integration Service triggered workflow](#integration-service-triggered-workflow)

From V9 SP3 onwards, a new type of trigger for Workflow service called Integration Service (Sync/Async) workflow has been introduced. Also the new Foundry Workflow adapter (integration service) has been introduced. This type of workflow is dependent on the integration service type Foundry Workflow. This type of workflow is invoked by a client request via an endpoint associated with the Foundry Workflow Integration Service. Also the status of the configured response in the workflow is sent back to the client synchronously or asynchronously. This response to the client is an synchronous or asynchronous.

Let’s take a detailed look at each workflow type.

### Object model triggered workflow

This type of workflow has a tight coupling to an object model and is triggered through state transitions on the linked object’s `workflowstate` field.

You can link a Workflow service with an object either while creating a workflow or through object service. It is linked to a “state” field in the object, and whenever the state field is changed with a create or update on the object ](either by using PUT or POST call, or any [custom verb](../../voltmx_foundry_user_guide/Content/ObjectsServices/Objectservices_Stage3.html#mapping-verbs-and-methods-to-the-fields-on-the-back-end) based on PUT/POST), the workflow is triggered. The workflow will execute all the subsequent tasks that were defined within it and completes the entire backend process that is related to the linked object. To get a quick overview of workflow, refer to [Volt MX Workflow - An Overview](https://support.hcltechsw.com/csm?id=kb_article&sys_id=6fe4f071db0c7010cc426275ca96196e).

###  Event triggered workflow

This type of workflow as the name suggests can be made to trigger by listening to Events on Foundry. You can configure Workflow service to listen to an existing Server-event Topic of integration/object service verb invocations or via custom code. An event triggered workflow is initialized through the Signal Start node, which is listening to a [Server Event](../../voltmx_foundry_user_guide/Content/ServerEvents.md) that is raised on the Foundry event bus.
    
**When to use event triggered workflows:**
    
*   If workflows need to start or resume based on listening to Events on Foundry.
*   If workflows need not be triggered through object model state transitions. If workflows are not state-managed workflows, that is, if your workflow does not depend on object model state transitions. State-managed workflows can be configured by using object-linked workflows.
        
*   If workflows need to execute in the background when some other Foundry service is invoked. You can configure Foundry services to raise events for particular topics, which can then be subscribed by event workflows
*   In addition to how Workflow services can be made as listeners, Event-triggered workflows can also raise Events back to Foundry anywhere during the workflow execution by the introduction of Throw Signal node. This way other Foundry services can get notified of any intermittent events raised from a Workflow.

**How event triggered workflows are different from object triggered workflows:**

*   Event workflows are not associated to any object.
*   Event workflows are not state-managed workflows. Therefore, they do not need to link to any object to maintain their state.
*   Event workflows do not contain Start task. They have Signal start that listens to an event topic and starts the workflow.
*   Event workflows do not contain user tasks like in object-linked workflows that are coupled to state field transition. However Event triggered workflows can be paused by using a Catch signal event and can be resumed based on subscribing to an event topic.
*   Event workflows can be invoked from other Foundry services by using server events from directly on server-side. Whereas Object linked workflows can be invoked through object verb invocations from an external client.
        

### Integration Service triggered workflow

This type of Workflow service called Integration Service (Sync/Async) workflow type that runs based on the new **Foundry Workflow** adapter (integration service). The Integration Service triggered workflows should be created by linking them to a new Integration Service of the type **Foundry Workflow** in Foundry Console.
    
This type of workflow as the name suggests is triggered or invoked from an Integration service. Unlike the previous two types of workflows, this type of workflow allows you to directly call or invoke the Foundry workflow as an Orchestration service. By leveraging the workflow canvas, developers can now visually design/define their service orchestrations, do data mapping from one service to another in sequential flow, execute decisions through Business Rules or inbuilt exclusive gateway.
    
In order to use Foundry Workflow as an Orchestration service, a new trigger type called “Integration Service” has been introduced in the workflow designer. Workflows thus could be given an API façade by mapping them to a Foundry Integration service, by choosing the connector type as “Foundry Workflow” under the Integration tab. These can be directly called from clients via Foundry SDK function to invoke Integration service or from other backends/ Microservices/ 3rd party systems as an API endpoint.
    
This type of workflow as the name suggests can be made to trigger by listening to an Integration Service type Foundry Workflow. This new adapter exposes the workflow services configured under **Trigger types > Integration Service** (Sync/Async) as APIs. When the Foundry Workflow service is created, the existing Integration type workflows are accessible in the integration service. The available Integration workflow services can be configured as operations to the Foundry Workflow integration service. The new adapter type follows the same pipeline as other Foundry services like Integration and then it will be handed over to workflow engine. So whenever the client sends the request, the workflow is triggered by the Integration Service type Foundry Workflow adapter and the response is sent back to the client synchronously or asynchronously.
    
**When to use integration service triggered workflows:**
    
*   If you want to invoke workflows directly from clients/backends as API endpoint
*   If you want to visually design an Orchestration service
*   If you want to execute conditional logic/business rules in your orchestration
*   If you want flexibility to do data mapping between one service to another (without the limitation of keeping same attribute/parameter names)
*   If you want to send only relevant response parameters from your orchestration result (without the limitation of sending an aggregate of all response parameters to client)
*   If you want to map a workflow/orchestration to an Object service (by selecting endpoint type as Integration & Orchestration service while creating an object service)
    
These new category of workflows can send responses to clients either Synchronously or Asynchronously. Synchronous workflows are essentially complex service orchestrations or straight-through processing workflows in which the calling integration service waits till the workflow responds with the final result. Asynchronous workflows are more suited for long-running processes that have to wait for an update from back-end systems. These workflows immediately respond to the calling integration service with an “Acknowledgement” and the final result(s) from workflow is sent to client as Websocket messages.
    
The following supported Response Types are supported in workflow service trigger type Integration:
    
* Sync (Synchronous): The calling Integration Service will send a response to the client after the workflow execution is complete. This type of response is primarily used for straight-through-processing when the workflow is expected to be completed quickly.
    *   The Integration service response will be blocked until workflow execution is complete for Sync and the final response is sent with a workflow instance\_id.
    *   Sync workflows will not have Timer, User Task, Start Signal, Catch signal, Throw signal.
    *   Sync workflows should have Start and End nodes.
    *   Each output path should have one End node with an output mapper. The End node will have output response mapper that will get sent back to client via the Integration service response.
        
    The following flow diagram details how the Sync Workflow works:

    ![](Resources/Images/SyncWorkflowFlow.png)

*   Async (Asynchronous): The calling Integration Service will send an acknowledgment that the Workflow is triggered. This type of response is primarily used for long-running Workflows. Responses to clients/devices are sent as Events that are received using a websocket.
        
    *   Integration service response get an immediate Acknowledgement response from the workflow engine with a workflow instance\_id.
    *   Server-broadcast response: Server - broadcast event type allows you to raise a server event that can be listened by other Foundry services.
    *   Private client response: Client-only event type allows you to raise a private event on configured Topic Name over a web socket channel associated with a specific client.
            
        Only clients subscribed to the Topic Name over a web socket channel will receive private responses to the workflow execution.  

        For more details, refer to [Server Event APIs SDKs - VoltMX Iris](../../voltmx_foundry_user_guide/Content/VoltMXStudio/ServerEventAPIs.md).
            
    *   Each output path may have a Throw signal with output response mapper. The websocket message event will contain the output response mapped via the Throw signal mapper. However configuring a Throw signal and sending Async response to clients via websocket is optional and dependent upon the business use-case.
        
        The following flow diagram details how the Async Workflow works:
        
        ![](Resources/Images/AsyncWorkflowFlow.png)
        

## Working with Workflows and Nodes

There are different kind of nodes in Workflow and each node represents a specific task or an event. These nodes are connected with each other using **Sequence Flows**. When you add these nodes to a workflow and connect them as per the required logic, the complete workflow is implemented automatically whenever it is invoked.

Different types of Workflow Nodes/Tasks are as follows:

<div class="table-scroll">
    <table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');width: 660px;" class="TableStyle-VoltMXTables" cellspacing="0">
        <colgroup><col class="TableStyle-VoltMXTables-Column-Column1" style="width: 473px;">
        <col class="TableStyle-VoltMXTables-Column-Column1" style="width: 99px;">
        <col class="TableStyle-VoltMXTables-Column-Column1" style="width: 90px;">
        <col class="TableStyle-VoltMXTables-Column-Column1" style="width: 82px;" data-mc-conditions="Default.V9SP3">
        <col class="TableStyle-VoltMXTables-Column-Column1" style="width: 96px;" data-mc-conditions="Default.V9SP3">
        </colgroup><thead>
            <tr class="TableStyle-VoltMXTables-Head-Header1">
                <th class="TableStyle-VoltMXTables-HeadE-Column1-Header1" style="font-size: 14pt;" rowspan="3" scope="col"><span style="font-size: 12pt;">Nodes/Tasks</span>
                </th>
                <th class="TableStyle-VoltMXTables-HeadD-Column1-Header1" colspan="4" style="text-align: center;" scope="col"><span style="font-size: 12pt;">Supported Workflow Types</span>
                </th>
            </tr>
            <tr class="TableStyle-VoltMXTables-Head-Header1" style="height: 16px;">
                <th class="TableStyle-VoltMXTables-HeadE-Column1-Header1" style="font-size: 12pt;text-align: center;" rowspan="2" scope="col">Object</th>
                <th class="TableStyle-VoltMXTables-HeadE-Column1-Header1" style="font-size: 12pt;text-align: center;" rowspan="2" scope="col">Event</th>
                <th class="TableStyle-VoltMXTables-HeadD-Column1-Header1" colspan="2" style="font-size: 12pt;text-align: center;" scope="col">Integration</th>
            </tr>
            <tr class="TableStyle-VoltMXTables-Head-Header1">
                <th class="TableStyle-VoltMXTables-HeadE-Column1-Header1" style="font-size: 12pt;text-align: center;" scope="col">Sync</th>
                <th class="TableStyle-VoltMXTables-HeadD-Column1-Header1" style="font-size: 12pt;text-align: center;" scope="col">Async</th>
            </tr>
        </thead>
        <tbody>
            <tr class="TableStyle-VoltMXTables-Body-Body1">
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1">
<b><a href="Workflow.html#Start">Start</a></b> – It is an event that represents where the workflow starts. The Start event has one outgoing flow.
                    <p><b>IMPORTANT:</b> For Integration Service triggered workflow &gt; Sync, the Process Incoming Payload configuration is a mandatory, in the Start node. Refer to <a href="#start-event-_sync-workflow_">Start node for Integration Service workflow > Sync</a>.</p>
                    <p><b>IMPORTANT:</b> For Integration Service triggered workflow &gt; Async, the Process Incoming Payload along with the Correlation ID configuration is a mandatory, in the Start node. Refer to <a href="#start-event-_async-workflow_">Start node for Integration Service workflow > Async</a>.</p>
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickN_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyD-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
            </tr>
            <tr class="TableStyle-VoltMXTables-Body-Body1">
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1">
<b><a href="Workflow.html#UserTaskWorkFlow">User Task</a></b> – It is used to represent that a user action is required in a Workflow. For example: Submitting a loan application, manager approving expense.
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickN_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickN_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyD-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickN_28x28.jpg" style="width: 28;height: 28;">
                </td>
            </tr>
            <tr class="TableStyle-VoltMXTables-Body-Body1" data-mc-conditions="Default.V9SP2GA">
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1">
<b><a href="Workflow.html#SignalStart">Signal Start</a></b> - Start Signal node is used to start a workflow based on listening to an Event on Foundry bus.
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickN_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickN_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyD-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickN_28x28.jpg" style="width: 28;height: 28;">
                </td>
            </tr>
            <tr class="TableStyle-VoltMXTables-Body-Body1" data-mc-conditions="Default.V9SP2GA">
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1">
<b><a href="Workflow.html#CatchSignal">Catch Signal</a></b> - Catch Signal node is used to pause a workflow's execution and resume it based on an event it is listening to on Foundry bus.
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickN_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickN_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyD-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
            </tr>
            <tr class="TableStyle-VoltMXTables-Body-Body1" data-mc-conditions="Default.V9SP2GA">
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1">
<b><a href="Workflow.html#ThrowSignal">Throw Signal</a></b> - Throw Signal node is used to raise (publish) Events from workflow during or at the end of workflow execution
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickN_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickN_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyD-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
            </tr>
            <tr class="TableStyle-VoltMXTables-Body-Body1">
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1">
<b><a href="Workflow.html#Service">Service Task</a></b> – A Service task is used to invoke a pre-configured service (Integration, Orchestration, Object and Rules Services) available in the Foundry App.
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyD-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
            </tr>
            <tr class="TableStyle-VoltMXTables-Body-Body1" data-mc-conditions="Default.V9SP1GA">
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1">
<b><a href="Workflow.html#Timer">Timer</a></b> - A Timer is used to create a delay in the workflow to prevent the immediate triggering of a subsequent event/activity. In a workflow whenever a timer node is encountered, then the workflow execution will be paused for the configured amount of minutes/hours and resume from it when the delay time elapses.
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickN_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyD-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
            </tr>
            <tr class="TableStyle-VoltMXTables-Body-Body1">
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1">
<b><a href="Workflow.html#Message">Message Task</a></b> – It represents an intermediate event through which you can send notifications to the required recipients. The recipient can be an end user or the manager of the concerned department. For example, if the loan approval is pending from the branch manager, then you can use the Message task to send the notification to the manager.
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyD-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
            </tr>
            <tr class="TableStyle-VoltMXTables-Body-Body1">
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1">
<b><a href="Workflow.html#Script">Script Task</a></b> - You can use this task to execute a business logic in the workflow. You can select a pre-configured JavaScript service to execute the business logic from this type of task.
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyD-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
            </tr>
            <tr class="TableStyle-VoltMXTables-Body-Body1">
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1">
<b><a href="Workflow.html#Business">Business Rule Task</a></b> - You can use this task to execute a set of rules in the workflow. You can select a pre-configured Rules services available in the Foundry App.
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyD-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
            </tr>
            <tr class="TableStyle-VoltMXTables-Body-Body1">
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1">
<b><a href="Workflow.html#Exclusive">Exclusive Gateway</a></b> – Exclusive Gateways are used to model decision in a process by making exclusive (XOR) disjunction. An exclusive gateway can have multiple outgoing sequence flows and each outgoing sequence flow has its own decision condition. It evaluates the decision condition of each outgoing sequence flow and the <b>first</b> matched condition <b><a href="#sequence-flows">sequence flow</a></b> is executed.
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyD-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
            </tr>
            <tr class="TableStyle-VoltMXTables-Body-Body1" data-mc-conditions="Default.V9SP4GA">
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1">
<b><a href="Workflow.html#Parallel">Parallel Gateway</a></b> -&nbsp;You can use this node to model concurrency in a process. The  Parallel Gateway node can act as either Fork or Join, which allows forking into multiple paths of execution or joining multiple incoming paths of execution.<br>From V9SP4 GA, you can now create a sequence of parallel tasks (in multiple paths) using the Parallel Gateway.
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickN_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickN_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyE-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyD-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickN_28x28.jpg" style="width: 28;height: 28;">
                </td>
            </tr>
            <tr class="TableStyle-VoltMXTables-Body-Body1">
                <td class="TableStyle-VoltMXTables-BodyB-Column1-Body1">
<b><a href="Workflow.html#Endtask">End</a></b> – It is an event that represents the end of a workflow.
                    <p><b>IMPORTANT:</b> For Integration Service triggered workflow &gt; Sync, the Response Output configuration is a mandatory, in the End node. Refer to <a href="#end-event-_sync-workflow_">End node for Integration Service workflow &gt; Sync</a>.</p>
                    <p><b>IMPORTANT:</b> End event that represents the end of an Async workflow. <br>Refer to <a href="#end-event-_async-workflow_">End node for Integration Service workflow &gt; Async</a>.</p>
                </td>
                <td class="TableStyle-VoltMXTables-BodyB-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyB-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyB-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
                <td class="TableStyle-VoltMXTables-BodyA-Column1-Body1" style="text-align: center;">
                    <img src="Resources/Images/tickY_28x28.jpg" style="width: 28;height: 28;">
                </td>
            </tr>
        </tbody>
    </table>
</div>

<!--
| Nodes/Tasks | Supported Workflow Types |
| --- | --- |
| Object | Event | Integration |
| --- | --- | --- |
| Sync | Async |
| --- | --- |
| 
*   **[Start](#Start)** – It is an event that represents where the workflow starts. The Start event has one outgoing flow.

For Integration Service triggered workflow > Sync, the Process Incoming Payload configuration is a mandatory, in the Start node.  
Refer to [Start node for Integration Service workflow > Sync](#IntStart),

For Integration Service triggered workflow > Async, the Process Incoming Payload along with the Correlation ID configuration is a mandatory, in the Start node.  
Refer to [Start node for Integration Service workflow > Async,](#IntAsyncStart)

 | ![](Resources/Images/tickY.jpg) | ![](Resources/Images/tickN.jpg) | ![](Resources/Images/tickY.jpg) | ![](Resources/Images/tickY.jpg) |
| 

*   [**User Task**](#UserTaskWorkFlow) – It is used to represent that a user action is required in a Workflow. For example: Submitting a loan application, manager approving expense.

 | ![](Resources/Images/tickY.jpg) | ![](Resources/Images/tickN.jpg) | ![](Resources/Images/tickN.jpg) | ![](Resources/Images/tickN.jpg) |
| 

*   **[Signal Start](#SignalStart) -** Start Signal node is used to start a workflow based on listening to an Event on Foundry bus.

 | ![](Resources/Images/tickN.jpg) | ![](Resources/Images/tickY.jpg) | ![](Resources/Images/tickN.jpg) | ![](Resources/Images/tickN.jpg) |
| 

*   **[Catch Signal](#CatchSignal) -** Catch Signal node is used to pause a workflow's execution and resume it based on an event it is listening to on Foundry bus.

 | ![](Resources/Images/tickN.jpg) | ![](Resources/Images/tickY.jpg) | ![](Resources/Images/tickN.jpg) | ![](Resources/Images/tickY.jpg) |
| 

*   **[Throw Signal](#ThrowSignal) -** Throw Signal node is used to raise (publish) Events from workflow during or at the end of workflow execution

 | ![](Resources/Images/tickN.jpg) | ![](Resources/Images/tickY.jpg) | ![](Resources/Images/tickN.jpg) | ![](Resources/Images/tickY.jpg) |
| 

*   **[Service Task](#Service)** – A Service task is used to invoke a pre-configured service (Integration, Orchestration, Object and Rules Services) available in the Foundry App.

 | ![](Resources/Images/tickY.jpg) | ![](Resources/Images/tickY.jpg) | ![](Resources/Images/tickY.jpg) | ![](Resources/Images/tickY.jpg) |
| 

*   **[Timer](#Timer)** - A Timer is used to create a delay in the workflow to prevent the immediate triggering of a subsequent event/activity. In a workflow whenever a timer node is encountered, then the workflow execution will be paused for the configured amount of minutes/hours and resume from it when the delay time elapses.

 | ![](Resources/Images/tickY.jpg) | ![](Resources/Images/tickY.jpg) | ![](Resources/Images/tickN.jpg) | ![](Resources/Images/tickY.jpg) |
| 

*   **[Message Task](#Message)** – It represents an intermediate event through which you can send notifications to the required recipients. The recipient can be an end user or the manager of the concerned department. For example, if the loan approval is pending from the branch manager, then you can use the Message task to send the notification to the manager.

 | ![](Resources/Images/tickY.jpg) | ![](Resources/Images/tickY.jpg) | ![](Resources/Images/tickY.jpg) | ![](Resources/Images/tickY.jpg) |
| 

*   **[Script Task](#Script)** - You can use this task to execute a business logic in the workflow. You can select a pre-configured JavaScript service to execute the business logic from this type of task.

 | ![](Resources/Images/tickY.jpg) | ![](Resources/Images/tickY.jpg) | ![](Resources/Images/tickY.jpg) | ![](Resources/Images/tickY.jpg) |
| 

*   **[Business Rule Task](#Business)** - You can use this task to execute a set of rules in the workflow. You can select a pre-configured Rules services available in the Foundry App.

 | ![](Resources/Images/tickY.jpg) | ![](Resources/Images/tickY.jpg) | ![](Resources/Images/tickY.jpg) | ![](Resources/Images/tickY.jpg) |
| 

*   **[Exclusive Gateway](#Exclusiv)** – Exclusive Gateways are used to model decision in a process by making exclusive (XOR) disjunction. An exclusive gateway can have multiple outgoing sequence flows and each outgoing sequence flow has its own decision condition. It evaluates the decision condition of each outgoing sequence flow and the **first** matched condition **[sequence flow](#Sequence)** is executed.

 | ![](Resources/Images/tickY.jpg) | ![](Resources/Images/tickY.jpg) | ![](Resources/Images/tickY.jpg) | ![](Resources/Images/tickY.jpg) |
| 

*   [**Parallel Gateway**](#Parallel) - You can use this node to model concurrency in a process. The Parallel Gateway node can act as either Fork or Join, which allows forking into multiple paths of execution or joining multiple incoming paths of execution.  
    From V9SP4 GA, you can now create a sequence of parallel tasks (in multiple paths) using the Parallel Gateway.

 | ![](Resources/Images/tickN.jpg) | ![](Resources/Images/tickN.jpg) | ![](Resources/Images/tickY.jpg) | ![](Resources/Images/tickN.jpg) |
| 

*   **[End](#Endtask)** – It is an event that represents the end of a workflow.

For Integration Service triggered workflow > Sync, the Response Output configuration is a mandatory, in the End node.  
Refer to [End node for Integration Service workflow > Sync](#SyncEndtask),

End event that represents the end of an Async workflow.  
Refer to [End node for Integration Service workflow > Async,](#AysncEndtask)

 | ![](Resources/Images/tickY.jpg) | ![](Resources/Images/tickY.jpg) | ![](Resources/Images/tickY.jpg) | ![](Resources/Images/tickY.jpg) |
-->


To go to the **Workflow** tab from the Foundry Console dashboard, click **Add New** or select any existing Foundry app, and click the **Workflow** tab. The Workflow tab landing page appears.

You can do the following from the Workflow landing page:

*   [Create a new workflow](#create-a-new-workflow).
*   [Link an existing workflow](#use-existing-workflow-service) in the account to the current Foundry app.
*   [Manage existing workflows](#manage-workflows).

Create a New Workflow
---------------------

**Event Triggered workflow:**

1.  Click **Configure New** from the Workflow landing page, the Configure new screen appears.
2.  In the **Name** field, type a unique name for the new Workflow service.
3.  Select the **Event** from the **Trigger** list if you want to design an Event triggered workflow type.
    
    ![](Resources/Images/eventselection.png)
    
    > **_Note:_** A workflow should begin with a Signal Start event and finish with an End event for Event triggered workflow.
    

**Object Triggered workflow:**

Click **Configure New** from the Workflow landing page, the Configure new screen appears.

![](Resources/Images/Workflow.PNG)

![](Resources/Images/objwflselection.png)

You can do the following in the **Configure New** screen:

*   In the **Name** field, type a unique name for the new Workflow service.
    
*   Select the **Object** from the **Trigger** list if you want to design an Object linked workflow.
    
*   From the **Linked Object** list, select the required object to which you want to link the new Workflow service. The list contains two options:
    
    *   **Use Default** - It creates a new object service with a default name as per the new Workflow service name and this workflow is linked to that Object. The new object service created will be a storage object service.
        
    *   **Use Existing** – You can select this option if you want to link the new workflow with any existing object available in the current Foundry app. The linked object service can be a storage object service, RBMS service or an SDO (Integration or Orchestration service) service. If you want to use SDO as linked object, the **GetByPK** verb is mandatory.
        
        > **_Note:_** If you want to use SDO as linked object, the **GetByPK** verb is mandatory.
        
          
          
        Click **Use Existing**, and from the **Existing Services** screen select the required Object service, Object, Field, and then click **Add**. The new Workflow is linked to an existing Object service.
        
        > **_Note:_** Make sure that you designate a Field or create a new Field in the required object to store the workflow state if you want to use an existing workflow. For more information, refer to [Object Services](../../voltmx_foundry_user_guide/Content/ObjectsServices/Stage_2.md).
        
*   From the **Nodes** pane, double click on required nodes and drag and drop them on the canvas area. To know more about the activities that you need to perform for each node type, refer to <a href="#nodes_tasks">Nodes</a>.
    
    > **_Note:_** A workflow should begin with a **Start** event and finish with an **End** event for Object linked workflow.
    
*   Link the nodes as per the required flow using **Sequence Flows**. To know more about the activities, you can perform on a Sequence Flow, refer to <a href="#sequence-flows">Sequence Flows</a>.
    
*   The other features available in the canvas area are as follows:
    
    *   **Edit**: Click **Edit** to perform Undo, Redo, Cut, Copy, Paste, Delete, and Select All actions on the nodes that are in the canvas area.
        
    *   **Align**: Click **Align** to arrange the nodes as required. The options in **Align** are Align Left, Align Right, Align Top, Align Bottom, Align Center X, and Align Center Y.
        
    *   **Snap and Grid**: Use the feature to change the canvas layout. Choose **Grid** to get a grid view on the canvas area. If you select **Snapping** and try to place a node on the canvas area, the node would align itself with the closest grid line. This will help you align your nodes properly against each other while creating a workflow.
        
        > **_Note:_** Grid Lines exist on the canvas area and are visible only when you choose **Grid** from the **Snap and Grid** list.
        
*   Click **Save**. A new Workflow service is created and is added to the Workflow’s landing page.
    

**Integration Service Triggered workflow:**

1.  **Create the workflow service trigger type Integration Service:**
    1.  Click **Configure New** from the Workflow landing page, the Configure new screen appears.
    2.  In the **Name** field, type a unique name for the new Workflow service.
    3.  Select the **Integration** from the **Trigger** list if you want to design an Integration Service triggered workflow type.
        
        <!--![](Resources/Images/IntegrationWorkflow.png)-->
        
    4.  From the **Response Type** list, select the response type to which you want to create the new Workflow service.
        
        > **_Note:_** A workflow should begin with a Start event and finish with an End event for Integration Service triggered workflow.
        
    5.  Configure the required nodes for the workflow.
        
        > **_Note:_** The workflow is created and you need to associate the workflow as API for operations in the integration service type **Foundry Workflow**.
        
2.  **Create the Foundry Workflow Integration Service and operations.**
    
    For more information on how to create operations for the Foundry Workflow Adapter, on Refer to [Foundry Workflow Adapter](../../voltmx_foundry_user_guide/Content/FoundryWorkflowAdapter.md).
    

<!-- ### Creating an Object triggered Workflow

Click **Configure New** from the Workflow landing page. The Configure new screen appears.

You can do the following in the **Configure New** screen:

*   In the **Name** field, type a unique name for the new Workflow service.
    
*   Select the **Object** from the **Trigger** list.
    
*   From the **Linked Object** list, select the required object to which you want to link the new Workflow service. The list contains two options:
    
    *   **Use Default** - It creates a new object service with a default name as per the new Workflow service name and this workflow is linked to that Object. The new object service created will be a storage object service.
        
    *   **Use Existing** – You can select this option if you want to link the new workflow with any existing object available in the current Foundry app. The linked object service can be a storage object service, RBMS service or an SDO (Integration or Orchestration service) service. If you want to use SDO as linked object, the **GetByPK** verb is mandatory.
        
        If you want to use SDO as linked object, the **GetByPK** verb is mandatory.
        
          
        Click **Use Existing**, and from the **Existing Services** screen select the required Object service, Object, Field, and then click **Add**. The new Workflow is linked to an existing Object service.
        
        Make sure that you designate a Field or create a new Field in the required object to store the workflow state if you want to use an existing workflow. For more information, refer to [Object Services](../../voltmx_foundry_user_guide/Content/ObjectsServices/Stage_2.md).
        
*   From the **Nodes** pane, double click on required nodes and drag and drop them on the canvas area. To know more about the activities that you need to perform for each node type, refer to <a href="#nodes_tasks">Nodes</a>.
    
    A workflow should begin with a **Start** event and finish with an **End** event.
    
*   Link the nodes as per the required flow using **Sequence Flows**. To know more about the activities, you can perform on a Sequence Flow, refer to <a href="#sequence-flows">Sequence Flows</a>.
    
*   The other features available in the canvas area are as follows:
    
    *   **Edit**: Click **Edit** to perform Undo, Redo, Cut, Copy, Paste, Delete, and Select All actions on the nodes that are in the canvas area.
        
    *   **Align**: Click **Align** to arrange the nodes as required. The options in **Align** are Align Left, Align Right, Align Top, Align Bottom, Align Center X, and Align Center Y.
        
    *   **Snap and Grid**: Use the feature to change the canvas layout. Choose **Grid** to get a grid view on the canvas area. If you select **Snapping** and try to place a node on the canvas area, the node would align itself with the closest grid line. This will help you align your nodes properly against each other while creating a workflow.
        
        Grid Lines exist on the canvas area and are visible only when you choose **Grid** from the **Snap and Grid** list.
        
*   Click **Save**. A new Workflow service is created and is added to the Workflow’s landing page. -->
    

### <a id="nodes_tasks"></a>Nodes/Tasks


After the nodes/tasks are placed in the canvas area, you can manage the properties of a node from the Properties pane. These properties vary for each type of node. Defining these properties is crucial in a workflow as the behavior of each node depends on these properties when a workflow is triggered

**Tasks for Object triggered workflow**

#### <a id="Start"></a> Start Event

The Start Event’s property pane contains the following fields:

![](Resources/Images/Workflow1.PNG)

*   **Task ID**: A task ID is automatically allotted to the Start and End Event when you drag and drop them in the canvas area. You cannot edit this field.
    
*   **Name**: Displays the name of the node. Modify it as per the activity the node performs.
    
*   **Description**: You can write description for this node.
    

#### <a id="UserTaskWorkFlow"></a> User Task

The User Task’s property pane contains the following fields:

![](Resources/Images/Workflow2.PNG)

*   **Task ID**: A task ID is automatically allotted to the User Task when you drag and drop it in the canvas area. You cannot edit this field.
*   **Name**: Displays the name of the node. You can modify it as per the activity the node performs.
    
*   **Allowed States**: It represents the state(s) of the Workflow before the user begins any user task. This represents the state of the process and this information is retrieved from back end. For example: Loan application has to be in Submitted state for the bank manager to review the application.
    *    To elaborate further, Allowed States are the states in which a model must be in as a precondition to being accepted into this workflow User task. To keep the workflow consistent, all user tasks take this value from the valid state transitions of the last preceding user task — for example, If task A precedes task B, and you set the valid state transitions for A to Submitted, then the allowed states for B will automatically be set to Submitted.
        
        > **_Note:_** The **Allowed State** in the first user task can be blank as the Allowed State is not applicable for the first user task.
        
*   **Valid State Transitions**: Mention the required status that represents the state(s) of the Workflow after the user has executed the user task. In other words, Valid State Transitions represent the states in which a model must be in as a result of this workflow task.
    
    *   This must match with the status in the respective PUT or POST call of the object verb. If the state mentioned in **Valid State Transitions** does not match with state available in the respective POST or PUT call, the workflow will not proceed ahead. For Example: After the bank manager has reviewed the loan application it must be either Approved or Rejected. It cannot move to the Draft state.
    
    > **_Note:_** The state mentioned in **Valid State Transitions** must exactly same as the workflow state received from the client app.
    
	<a id="validationCriteria"></a>
	
*   **Entry Validation Criteria**: If you want to provide any additional conditions which you want to evaluate before the task is executed, you can provide it here. For example, if you want an additional validation where you want to execute the task if minimum balance in the account is 10,000, then you can configure a logical expression like BACKEND\_RESPONSE.balance >=10,000.  
    You can do the following to create an expression:
    *   Click **Add**. The **Entry Validation Criteria** screen appears.  
        ![](Resources/Images/workflow-entryvalidation.PNG)
    *   Click **Add Condition** to configure a logical expressions. You can also click **Add Group** and configure a group that can have multiple logical expressions within it.
    *   Each condition or group is associated with a logical operator (**AND**, **OR**). Select the required operator to determine the logic to execute the condition or group. If you select the Not checkbox, the selected condition would be inverted.
    *   Select the [namespace](#namespaces) from the list, and add the related parameter in the **Value** field. For example, if you select BACKEND\_RESPONSE from the namespace list, and add balance in the **Value** field, it would be read as BACKEND\_RESPONSE.balance.
    *   Select a comparison. The available options are ==, == null, >, <, !=, != null, >=, < =. For example, >=
    *   Select the [namespace](#namespaces) from the list, and add the related parameter in the **Value** field. For example, you can select **none** from the namespace list, and add 10,000 in the **Value** field.
    
        > **_Note:_** Now as per the example, the complete condition will be read as BACKEND\_RESPONSE.balance >=10,000.
    
    *   Click **Save**.  

*   Click **Configure** under **Process Incoming Payload**. You can use the **Process Incoming Payload** mapping editor to copy data from incoming request payload as well as identity/session scope variables into FOUNDRY\_WORKFLOW\_CONTEXT for further processing in the workflow.
    
    > **_Note:_** When a workflow needs any kind of attributes from an `IDENTITY` or `SESSION` scope, always try to populate the necessary data from all these scopes to **FOUNDRY\_WORKFLOW\_CONTEXT** and use these values from **FOUNDRY\_WORKFLOW\_CONTEXT**.
    
     ![](Resources/Images/UserTaskOP.png)
    
    > **_Note:_** For more information on using the best practices for workflow, refer to [Workflow Best Practices](Workflow_BestPractices.md).
    
    > **_Note:_** Refer to [Namespaces](#namespaces).  
    
*   **Description**: You can write the description for this node.

**Tasks for Event triggered workflow**

####  <a id="SignalStart"></a> Signal Start

Signal Start node is used to start a workflow based on listening to an Event on Foundry bus. An Event triggered workflow always begins with a Signal Start node. The Signal Event's property pane contains the following fields:

![](Resources/Images/eventstartprops.png)

![](Resources/Images/eventendpros.png)

*   **Task ID**: A task ID is automatically allotted to the Signal Start Event in the canvas area. You cannot edit this field.
    
*   **Name**: Displays the name of the node. Modify it as per the activity the node performs.
    
*   **Event Topic Name**: Type the topic name of the event of Foundry. An event topic name is mapped to the Signal Start event.
    
    > **_Important:_** An event Topic name is mandatory for the Signal Start event.
    
*   **Process Incoming Payload**: You can use this mapping editor to copy data from incoming Event payload into Foundry\_workflow\_context.
    
    ![](Resources/Images/SignalStartPayload.png)
    
    *   You can copy identity/session scope variables to workflow\_context in this mapping editor.
    *   Payload of the incoming event is copied and available in DEVICE\_REQUEST scope. You can also set params from the Event Payload as Correlation ID.
        
        A Correlation ID can only be set on DEVICE\_REQUEST parameters. Correlation ID is required to uniquely identify a workflow instance to start or resume. You can map Correlation ID to any parameter from the Event payload that is available in the DEVICE\_REQUEST namespace.

*   **Description**: You can write description for this node.
    

#### <a id="CatchSignal"></a> Catch Signal Event

Catch Signal node is used to pause a workflow's execution and resume it based on an event it is listening to on Foundry bus.

*   **Task ID**: A task ID is automatically allotted to the Catch Signal Event when you drag and drop them in the canvas area. You cannot edit this field.
    
*   **Name**: Displays the name of the node. Modify it as per the activity the node performs.
    
*   **Event Topic Name**: Type the topic name of Foundry event. The Catch Signal event listens to the event topic and resumes the workflow.
    
    > **Important:_** An event Topic name is mandatory for the Catch Signal event.
    
*   **Process Incoming Payload**: You can use this mapping editor to copy data from incoming Event payload into Foundry\_workflow\_context.
    
    The Correlation ID parameters already configured in Signal Start event will be used in Catch Signal event to identify and resume the workflow instance, please ensure that Event payload contains Correlation ID parameters with same fieldnames as mapped from DEVICE\_REQUEST scope in Signal Start. For example: `applicationId` and `SSN`.
    
*   **Description**: You can write description for this node.
    

#### <a id="ThrowSignal"></a> Throw Signal Event

Throw Signal node is used to raise (publish) Events from workflow during or at the end of workflow execution.

*   **Task ID**: A task ID is automatically allotted to the Throw Signal Event when you drag and drop them in the canvas area. You cannot edit this field.
    
*   **Name**: Displays the name of the node. Modify it as per the activity the node performs.
    
*   **Event Topic Name**: Type the topic name of Foundry event. An event is raised with the configured topic name and with an Event payload as configured in the mapping editor.
*   **Configure Event Payload**: You can use this mapping editor to populate data from workflow namespaces to send in outgoing Event payload.
*   **Description**: You can write description for this node.
    



**Tasks for Integration Service triggered workflow**

#### For Sync

#### <a id="start-event-_sync-workflow_"></a>Start Event (Sync Workflow)

The Start Event’s property pane contains the following fields:

![](Resources/Images/SyncStart.png)

*   **Task ID**: A task ID is automatically allotted to the Start and End Event when you drag and drop them in the canvas area. You cannot edit this field.
    
*   **Name**: Displays the name of the node. Modify it as per the activity the node performs.
    
*   **Process Incoming Payload**: You can use this mapping editor to copy data from incoming request payload into Foundry\_workflow\_context.
    *   You can copy identity/session scope variables to workflow\_context in this mapping editor.
    *   Payload of the incoming event is copied and available in DEVICE\_REQUEST scope.

           ![](Resources/Images/SyncStartIncomingPayload.png)
        
    For more information on using the best practices for workflow, refer to [Workflow Best Practices](Workflow_BestPractices.md).
        
    Refer to [Namespaces](#namespaces).
        
*   **Description**: You can write description for this node.
    
#### <a id="end-event-_sync-workflow_"></a>End Event (Sync Workflow)

The End Event’s property pane contains the following fields:

![](Resources/Images/Sync-Endnode_Configre.png)

*   **Task ID**: A task ID is automatically allotted to the End Event when you drag and drop them in the canvas area. You cannot edit this field.
*   **Name**: Displays the name of the node. Modify it as per the activity the node performs.
*   **Configure Output**: The End node of Sync workflow will have output response mapper that will get sent back to client via the Integration service response.
    
    Click **Configure Output** to configure response output parameters for the End node of the Sync workflow such as , name, data type, namespace, and value.
    
   ![](Resources/Images/Sync-Endnode_ConfigOutput.png)
    
*   **Description**: You can write description for this node.

####  <a id="Parallel"></a>  Parallel Gateways (Sync Workflow)

The Parallel Gateway’s property pane contains the following fields:

![](Resources/Images/Workflow4.PNG)

*   **Task ID**: A task ID is automatically allotted to the Parallel Gateway when you drag and drop it in the canvas area. You cannot edit this field.
    
*   **Name**: Displays the name of the node. Modify it as per the activity the node performs.
    
*   **Description**: You can write the description for this node.
    
    Refer to <a href="#advanced-configurations-_-workflow">Advanced Configurations</a>.  

You can use the Parallel Gateway when you are required to split the business process into two or more paths and perform them in parallel. The parallel process includes forking into many outgoing paths of execution and joining the many incoming paths of execution.

*   Fork - All outgoing sequence flows are followed in parallel. Each of the outgoing sequence flows creates concurrent execution for each sequence flow.
*   Join – Joins all concurrent executions arriving at the parallel gateway and waits until all incoming sequence flows have completed the execution. Then the process continues past the joining gateway.

**Important**:

*   Parallel Gateway is available for workflows of Trigger type - Integration Service and Response type - Sync.
*   Workflow configured with Parallel Gateway should be closed with only one End node.
*   Each Fork must be accompanied by the respective Join.
*   Parallel Gateway can act either as Fork or Join. Forking and joining through a single Parallel Gateway node is not supported. For example, if you want to create more than one set of Parallel Gateways in the same workflow, you must create fork and join Parallel Gateways for an objective.
*   Nested Parallel Gateways are supported by the same Workflow service.

*   When the associated workflow execution occurs for the parallel paths asynchronously, the default timeout is set to 300 seconds for the waiting period on the Integration Service.
    
    *   One can change this default timeout by configuring the system property.  
        For example: `-DVOLTMX_SERVER_WORKFLOW_FUTURE_GET_TIMEOUT_IN_SECS=500`.  

*   The parameter name used for preserving the underlying service response on any configured task must be unique. This helps in avoiding data conflicts within a workflow with a parallel gateway.
    

#### For Async

#### <a id="start-event-_async-workflow_"></a>Start Event (for Async Workflow)

The Start Event’s property pane contains the following fields:

![](Resources/Images/AsyncStart.png)

*   **Task ID**: A task ID is automatically allotted to the Start and End Event when you drag and drop them in the canvas area. You cannot edit this field.
    
*   **Name**: Displays the name of the node. Modify it as per the activity the node performs.
    
*   **Process Incoming Payload**: You can use the Process Incoming Payload mapping editor to copy data from incoming request payload as well as identity/session scope variables into FOUNDRY\_WORKFLOW\_CONTEXT for further processing in the workflow.
    
    > **_Note:_** When a workflow needs any kind of attributes from an IDENTITY or SESSION scope, always try to populate the necessary data from all these scopes to FOUNDRY\_WORKFLOW\_CONTEXT and use these values from FOUNDRY\_WORKFLOW\_CONTEXT.
    
       ![](Resources/Images/AsyncStartIncomingPayload.png)
    
    *   You can copy identity/session scope variables to workflow\_context in this mapping editor.
    *   Payload of the incoming event is copied and available in DEVICE\_REQUEST scope. You can also set params from the Event Payload as Correlation ID.
    *   Correlation ID is required to uniquely identify a workflow instance to start or resume. You can map Correlation ID to any parameter from the Event payload that is available in the DEVICE\_REQUEST namespace.
    
        A Correlation ID can only be set on DEVICE\_REQUEST parameters.
    
    For more information on using the best practices for workflow, refer to [Workflow Best Practices](Workflow_BestPractices.md).
    
*   **Description**: You can write description for this node.
    

#### <a id="end-event-_async-workflow_"></a>End Event (for Async Workflow)

The End Event’s property pane contains the following fields:

![](Resources/Images/Async-Endnode.png)

*   **Task ID**: A task ID is automatically allotted to the End Event when you drag and drop them in the canvas area. You cannot edit this field.
*   **Name**: Displays the name of the node. Modify it as per the activity the node performs.
*   **Description**: You can write description for this node.

#### Catch Signal Event (for Async Workflow)

Catch Signal node is used to pause a workflow's execution and resume it based on an event it is listening to on Foundry bus.

*   **Task ID**: A task ID is automatically allotted to the Catch Signal Event when you drag and drop them in the canvas area. You cannot edit this field.
    
*   **Name**: Displays the name of the node. Modify it as per the activity the node performs.
    
*   **Event Topic Name**: Type the topic name of Foundry event. The Catch Signal event listens to the event topic and resumes the workflow.
    
    An event Topic name is mandatory for the Catch Signal event.
    
*   **Process Incoming Payload**: You can use this mapping editor to copy data from incoming Event payload into Foundry\_workflow\_context.
    
       ![](Resources/Images/CatchsignalAysc.png)
    
    The Correlation ID parameters already configured in Signal Start event will be used in Catch Signal event to identify and resume the workflow instance, please ensure that Event payload contains Correlation ID parameters with same fieldnames as mapped from DEVICE\_REQUEST scope in Signal Start. For example: `applicationId` and `SSN`.
    
*   **Description**: You can write description for this node.
    

#### Throw Signal Event (for Async Workflow)

Throw Signal node is used to raise (publish) Events from workflow during or at the end of workflow execution.

*   **Task ID**: A task ID is automatically allotted to the Throw Signal Event when you drag and drop them in the canvas area. You cannot edit this field.
    
*   **Name**: Displays the name of the node. Modify it as per the activity the node performs.
    
*   **Event Topic Name\***: Type the topic name of Foundry event. An event is raised with the configured topic name and with an Event payload as configured in the mapping editor.
*   **Event Type**: The event type allows you to raise a private event on configured Topic Name over a web socket channel associated with a specific client. Select the Client-only or Server Broadcast:
    
    *   **Client-only** event type allows you to raise a private event on configured Topic Name over a web socket channel associated with a specific client.
        
        For example, if you want to invoke a loan eligibility calculator workflow from a client app for a User A and if the workflow has to invoke some 3rd party ID verification services that takes longer time to execute, you can model that workflow as Async. Inside that workflow, after calling 3rd party ID & credit check services, use Throw Signal and choose Client-only event type with a Topic Name “EligibilityResult” and also map the event message using the mapping editor at Throw signal. From your client App, using the SDK method for subscribing to server events, subscribe to “EligibilityResult” Topic Name before you invoke this workflow via a mapped Integration service. Once the workflow finishes invoking 3rd party services and comes to the Throw signal node, it will then raise an Event back to the client app for logged-in User A and this will be received by the client app securely over a web socket message.
        
    *   **Server Broadcast** event type allows you to raise a server event (on Foundry bus) that can be listened by other Foundry services.
    *   Only clients subscribed to the Topic Name over a web socket channel will receive private responses to the workflow execution.  
        For more details, refer to [Server Event APIs SDKs - VoltMX Iris](../../voltmx_foundry_user_guide/Content/VoltMXStudio/ServerEventAPIs.md).
*   **Configure Event Payload**: You can use this mapping editor to populate data from workflow namespaces to send in outgoing Event payload.
    
    ![](Resources/Images/AsyncThrowsignal.png)
    
*   **Description**: You can write description for this node.
    

**Common Tasks for Workflow Services**

#### <a id="Service"></a> Service Task

The Service Task’s property pane contains the following fields:

![](Resources/Images/Workflow3.PNG)

*   **Task ID**: A task ID is automatically allotted to the Service Task when you drag and drop it in the canvas area. You cannot edit this field.
    
*   **Name**: Displays the name of the node. Modify it as per the activity the node performs.
    
*   **Service Type**: It lists all the service types. Select the required service type from the list
    
*   **Services Linked**: As per the selected service type, all the linked services in the current Foundry App are displayed. Select the required service from the list.
    
*   **Operations**: As per the selected service, all the linked operations are displayed. Select the required operation from the list.
    
*   If you have selected Object Services, select the required object and verb from the **Objects** and **Verbs** lists respectively.
	
*   <a id="configInputParams"></a> Click **Configure** under **Input Parameters** to manage the Request Input parameters. The Configure Input Parameters screen appears. This screen contains two tabs, namely, **Body** and **Header**. You can configure the following fields in these tabs:  
      
       ![](Resources/Images/Workflow8.PNG)
    
    This screen contains two tabs, namely, **Body** and **Header**. You can configure the following fields in these tabs:
    
    *   **Name**: Depending on the type of service and operations selected, the parameters are available in the **Name** list. Select the required input parameter you want to configure. For the parameters that are not configured here, the default values will be taken for them as configured in the service.
        *   **Namespace**: Select the required Namespace from the list. The list contains different sources from which the data can be retrieved. When you select a namespace for any parameter, the selected namespace will be accessed to retrieve the data related to that parameter. For more details, refer to [Namespaces](#namespaces).
            
    *   **Value**: Type the key note name or variable where the data of the input parameter is stored in the data source. For example: If you need to access Customer\_ID from incoming request, select Device\_Request namespace and type Customer\_ID in the value column.  

        > **_Note:_** If you have selected **None** in Namespace list, the data provided in the **Value** column will be considered as the data for the respective parameter.
    
	
*   <a id="configOutputParams"/></a>Click **Configure** under **Output Parameters** to manage the output response parameters.

    The Configure Output Parameters screen appears.
    ![](Resources/Images/Workflow9.PNG)

    The output parameters are copied into a single variable under namespace (**FOUNDRY\_WORKFLOW\_CONTEXT**) as JSON. Individual elements of the output can be accessed by using a dot(.) notation with a key.
    
    For example, assume your output `{"name":"John", "age":30, "car":null }` is stored in Variable Profile under FOUNDRY\_WORKFLOW\_CONTEXT.Profile, you can access age by using `FOUNDRY_WORKFLOW_CONTEXT.Profile.age`.
        
    For more details, refer to [Advanced Configuration > Enable Looping](#enable-looping).  
        
*   **Description**: You can write the description for this node.

#### <a id="Timer"></a>Timer (not supported for Integration Sync Type Workflow)

The Timer’s property pane contains the following fields:

![](Resources/Images/workflow-timertask.PNG)

*   **Task ID**: A task ID is automatically allotted to the Timer when you drag and drop it in the canvas area. You cannot edit this field.
*   **Name**: Displays the name of the node. Modify it as per the activity the node performs.
*   **Timer Value Type**: Define the duration of the timer using a fixed duration value or using an expression that performs calculations using workflow runtime data. Select the one of the following from the radio button.
    *   **Fixed Duration**: It can be a static value (ex: 30, 40, etc.) in minutes or (ex: 2, 3, etc.) in hours. You can choose minutes or hours from the given drop-down. The timer then imposes a delay for the set number of minutes/hours.
    *   **Expression**: It can be an expression formed out of any parameters/attributes from the workflow namespaces (for example: `FOUNDRY_WORKFLOW_CONTEXT.ATTRIBUTE_NAME + 10`). If an expression is configured you must ensure that a numeric value is set to the attributes used and the expression should evaluate to a time delay in minutes. No date related operation is supported as part of the expression. After evaluating the expression, the timer imposes a delay for the derived number of minutes.
        
        An auto-complete feature helps you to complete your input expression in the Timer Value Type field. This feature suggests workflow namespaces from which you can choose your attribute name entries.
        
        **Examples**:
        
        1.  Expression:
            
            ```
            FOUNDRY_WORKFLOW_CONTEXT.timer.timerVal
            ```
            
            Result: The **timerVal** is received from the response of an Integration service. If its value is 6 minutes, the workflow is paused for 6 minutes and then resumed.
            
        2.  Expression:
            
            ```
            FOUNDRY_WORKFLOW_CONTEXT.timer.timerVal - 1
            ```
            
            Result: The **timerVal** is received from the response of an Integration service. If its value is 6 minutes, the workflow is paused for 5 minutes and then resumed.
            
        3.  Expression:
            
            ```
            FOUNDRY_WORKFLOW_CONTEXT.timer.timerVal * 2
            ```
            
            Result: The **timerVal** is received from the response of an Integration service. If its value is 6 minutes, the workflow is paused for 12 minutes and then resumed.
            
        4.  Expression:
            
            ```
            (FOUNDRY_WORKFLOW_CONTEXT.timer.timerVal / 2) * 3
            ```
            
            Result: **timerVal** is received from the response of an Integration service. If its value is 6 minutes, the workflow is paused for 9 minutes and then resumed.
            
        5.  Expression:
            ```
            90 - (System.currentTimeMillis() - FOUNDRY_WORKFLOW_CONTEXT.CURRENT_INSTANCE.startTimeInMillis)/(1000*60)
            ```
            
            Result: Any task that is configured after the Timer node is set with the aforementioned expression is delayed by 90 minutes from the start of the workflow instance. The task that is immediately succeeding the timer node will be triggered post completion of the 90 minutes delay.
            
            The starting time of the workflow instance can be retrieved by using the expression `FOUNDRY_WORKFLOW_CONTEXT.CURRENT_INSTANCE.startTimeInMillis`. This expression stores the instance start time in Date/Timestamp format.
            
            > **_Note:_** You can use majority of the `java.lang.System` class's useful class fields and methods in defining your expression for setting the Timer value. For more information refer to [java.lang.System Documentation](https://docs.oracle.com/javase/7/docs/api/java/lang/System.html#currentTimeMillis()).
            
*   **Description**: You can write the description for this node.

#### <a id="Message"></a> Message Task

A pre-requisite to send email notifications from workflow, is to configure the Email provider/ SMTP server details in Engagement console. Refer to [Email Configuration](../../vms_console_user_guide/Content/Administration/Email_Configuration.md) to know more about setting Email configuration in Engagement console.

If you are using on-premise Foundry setup, it is mandatory that you setup the Email configuration in Engagement before using workflow message task.  
If you are using Foundry on cloud, setting Email configuration in Engagement is optional. By default, customers can send upto 100 mails per day through workflow message task or [Email adapter](../../voltmx_foundry_user_guide/Content/Email_Adapter.md) in Foundry. If customers are not using their Email server configured through Engagement tenant level settings, the default sender id for notifications would be `noreply@<tenanthostname>.messaging.voltmxcloud.com`.  
It is recommended to set up in Email configuration in the Engagement console to have following benefits:

*   To have a sender Id that is based on your organization’s email domain.
*   No restrictions on # of emails notifications.

The Message Task’s property pane contains the following fields:

![](Resources/Images/Workflow5.PNG)

*   **Task ID**: A task ID is automatically allotted to the Message Task when you drag and drop it in the canvas area. You cannot edit this field.
    
*   **Name**: Displays the name of the node. Modify it as per the activity the node performs.
*   **Compose Email**: Click **Compose Email** to create an email notification. The Email Parameters screen appears. It contains **Email-Template** and **Parameters** tab.  
      
    ![](Resources/Images/Workflow6.PNG)

    * In the **Email Template** tab, type the details in To, Subject, CC, BCC, and Body fields to configure the required email. You can also set dollar ($) parameters in your email and pass values dynamically at run-time.
        
        You can add a maximum five email IDs each in To, CC and BCC. If you add more, only the first five email IDs will get the email notification and the remaining email IDs will be ignored.
        
    *   If you have set dollar ($) parameters in the email, in the **Parameters** tab, you can define the namespace and values for those dollar ($) parameters. For example: If you have used a dollar parameter $amount in the email template, from the Parameters tab you can define the **Name**, **Namespace**, and **Value** as amount, BACKEND\_RESPONSE, and NetAmount respectively.
*   **Description**: You can write the description for this node.

#### <a id="Script"></a> Script Task

The Script Task’s property pane contains the following fields:

![](Resources/Images/workflow-scripttask.PNG)

*   **Task ID**: A task ID is automatically allotted to the Script Task when you drag and drop it in the canvas area. You cannot edit this field.
*   **Name**: Displays the name of the node. Modify it as per the activity the node performs.
*   **JavaScript Services Linked**: It lists all the JavaScript service available in the Foundry App. Select the required service type from the list.

*   **JavaScript Operations**: As per the selected service, all the linked operations are displayed. Select the required operation from the list.
*   Click **Configure** under **Input Parameters** to manage the Request Input parameters. The Configure Input Parameters screen appears. This screen contains two tabs, namely, **Body** and **Header**. These tabs display the respective parameters as per the selected service and operations. Follow the steps mentioned [here](#configInputParams) to configure Input Parameters.
*   Click **Configure** under **Output Parameters** to manage the output response parameters. Follow the steps mentioned [here](#configOutputParams) to configure Output Parameters.
    
    For more details, refer to [Advanced Configuration > Enable Looping](#enable-looping).  
    
*   **Description**: You can write the description for this node.

#### <a id="Business"></a> Business Rule Task

The Business Rule Task's property pane contains the following fields:

![](Resources/Images/workflow-business.PNG)

*   **Task ID**: A task ID is automatically allotted to the Business Rule Task when you drag and drop it in the canvas area. You cannot edit this field.
*   **Name**: Displays the name of the node. Modify it as per the activity the node performs.
*   **Rule Sets Linked**: It lists all the Rules sets available in the Foundry App. Select the required set from the list.

*   **Rules**: As per the selected set, all the linked rules are displayed. Select the required rule from the list.
*   Click **Configure** under **Input Parameters** to manage the Request Input parameters. The Configure Input Parameters screen appears. This screen contains two tabs, namely, **Body** and **Header**. These tabs display the respective parameters as per the selected service and operations. Follow the steps mentioned [here](#configInputParams) to configure Input Parameters.
*   Click **Configure** under **Output Parameters** to manage the output response parameters. Follow the steps mentioned [here](#configOutputParams) to configure Output Parameters.
    
    For more details, refer to [Advanced Configuration > Enable Looping](#enable-looping).  
    
*   **Description**: You can write the description for this node.

#### <a id="Exclusive"></a> Exclusive Gateways

The Exclusive Gateway’s property pane contains the following fields:

![](Resources/Images/Workflow4.PNG)

*   **Task ID**: A task ID is automatically allotted to the Exclusive Gateway when you drag and drop it in the canvas area. You cannot edit this field.
*   **Name**: Displays the name of the node. Modify it as per the activity the node performs.
*   **Description**: You can write the description for this node.
    
    Refer to <a href="#advanced-configurations-_-workflow">Advanced Configurations</a>.  

The conditions for decision making are configured at the outgoing sequence flows.

#### <a id="sequence-flows"></a>Sequence Flows

Sequence Flows act as connectors between the nodes. Whenever you place a **Sequence Flow**, a sequence ID is allotted to it. You can view this sequence ID from the **Properties** pane and add description for the flow if required.

![](Resources/Images/Workflow11.PNG)

The Sequence Flows coming from Exclusive Gateways also contains an additional **[Entry Validation Criteria](#validationCriteria)** field in the Properties pane. You can define the output criteria of the selected **Sequence Flow** here. From the **Exclusive Gateway**, the workflow will be redirected towards the first **Sequence Flow** that meets the output criteria defined in the **Condition** field.

####  <a id="Endtask"></a> End Event

The End Event’s property pane contains the following fields:

![](Resources/Images/Workflow10.PNG)

*   **Task ID**: A task ID is automatically allotted to the End Event when you drag and drop them in the canvas area. You cannot edit this field.
*   **Name**: Displays the name of the node. Modify it as per the activity the node performs.
*   **Description**: You can write description for this node.

## Namespaces

The following are namespaces available in workflow for managing workflow data:

*   **IDENTITY**: It denotes that the data is from the user or security attributes from the identity service response.
*   **DEVICE\_REQUEST**: It represents the data that is available in the client request through User Task in case of Object linked workflow. This data is persisted for use in the workflow until the next Device Request payload comes from the client.
    
    Whereas in case of Event triggered workflow, this scope represents the data that is available in the incoming Event payload that started or resumed a workflow. This data is persisted for use in the workflow until the next Event payload is copied into Device\_Request on the next Catch signal node.
    
*   **FOUNDRY\_WORKFLOW\_CONTEXT**: It represents that the data is available in the persistent store of the current workflow instance. This can be used to store required output response from any service tasks that will be needed in the workflow as well as copy data from incoming requests for further processing in workflow.
*   **BACKEND\_RESPONSE**: It represents that the data is available from the backend response of an object service. It could be from a PUT/POST/Custom Verb call on the linked object while invoking a user task. This namespace is only available in case of object linked workflows.
    
    The **BACKEND\_RESPONSE** is applicable only for workflow trigger type Object.
    
*   **SESSION**: It represents that the data is available in the session data.
*   **None**: You can use it to pass static values. When you select **None** as the namespace, the value entered in the text-box is passed as a string.
    
    > **_Note:_** If you have selected **None** in Namespace list, the data provided in the **Value** column will be considered as the data for the respective parameter.
    

The following are namespaces available when Looping is enabled:

For more details, refer to [Advanced Configuration > Enable Looping](#enable-looping).  

*   LOOP OUTPUT VARIABLE ( `LOOP_OUTPUT_VAR`)
    
    While executing associated service sequentially, when the associated service executed within a loop, the response of that iteration will be populated in the loop output variable. So that the response can be used for configuring exit criteria. This is applicable only for sequential loop execution type. The loop output variable holds service response for current iteration.
    

*   LOOP INPUT VARIABLE ( `LOOP_INPUT_VAR`)
    
    During iteration, the current object under iteration is assigned to the Loop Input variable. The loop input variable helps to supply the input values to the associated service.
    
    For example, let us look into the following scenario:
    
    *   A workflow is configured with a service task, which is enabled for looping. Following data available for looping expression configured as `FOUNDRY_WORKFLOW_CONTEXT.Users`.

        <b>User Details in FOUNDRY_WORKFLOW_CONTEXT:</b>  

        <pre><code style="display:block;background-color:#eee;">{"Users":[
            {
                "Userid":"123"
            },
            {
                "Userid":"234"
            },
            {
                "Userid":"345"
            }
        ]
        }</code></pre>  



        <b>Input Configuration for Service Task:</b>  


         ![](Resources/Images/SampleInputParm.png)  


        > **_Note:_** The Userid is extracted while looping and assigned the same to the input parameter of the associated integration service.  


    *   The response of the integration service for each user ID will be associated to Loop output variable.
	
        Sample Response of Integration service, which will be populated into the Loop Output Variable on each iteration.   


       <pre><code style="display:block;background-color:#eee;">{
            "id":"123",
            "firstName":"John",
            "lastName":"Matthew",
            "isActive":true
        }</code></pre>
		
		
    *   The Loop exit criteria can be optionally configured to break the loop when the condition is met.  

    
       <b>Service Responses for each iteration: </b>

       <pre><code style="display:block;background-color:#eee;"> --- Service response from iteration 1 ---
        {
        "id":"123",
        "firstName":"John",
        "lastName":"Matthew",
        "isActive":true
        }
        --- Service response from iteration 2 ---
        {
        "id":"234",
        "firstName":"James",
        "lastName":"Smith",
        "isActive":false
        }
        --- Here, the loop exists as the loop condition met (LOOP_OUTPUT_VARIABLE.isActive==false)--- 
        </code></pre>         


       <b>Loop Exit Condition: </b>  

       ![](Resources/Images/SampleLoopExitCriteria.png)  



       The Loop exit criteria is optional and is applicable for Sequential looping.
        
       Finally after the loop completes, the individual user data from each integration service execution is combined into the configured output param.  

        
       <b>Output Parameters:</b>  

       ![](Resources/Images/Output_LoopDetails.png)
        

       <b>Final Response in FOUNDRY\_WORKFLOW\_CONTEXT:</b>

       <pre><code style="display:block;background-color:#eee;">
        {
        "usersDetails":\[  
        {
        "id":"123",
        "firstName":"John",
        "lastName":"Matthew",
        "isActive":true
        },
        {
        "id":"234",
        "firstName":"James",
        "lastName":"Smith",
        "isActive":false   }
        \]
        }
        </code></pre>  

        

For more information on using the best practices for workflow, refer to [Workflow Best Practices](Workflow_BestPractices.md).  

## <a id="advanced-configurations-_-workflow"></a>Advanced Configurations - Workflow


You can perform the following advanced configurations while creating a Workflow Service.

### Enable Looping

From V9SP4, support for the Looping feature is available for Service tasks, Script tasks, and Business Rule tasks.

Looping allows invoking a service for a collection of items and combining all the invoked responses.

You can choose the Looping feature to specify if the task is looped Sequentially or Parallelly. For a use case where for each input value, the associated service must be processed in order, you can choose Sequential looping.

For other scenarios, you can choose Parallel to execute each input value simultaneously. For example, for a use case where Account details are fetched for a set of user IDs, a Parallel execution type can be used. This would run the associated services in parallel, independently for each user ID.

![](Resources/Images/LoopICONS.png)

#### How to enable looping for Workflow services:

1.  Create a Workflow service.
2.  Select a Service task, Script task, or Business Rule Task node.
3.  Click the **Properties** pane to expand it.
4.  Configure Service Type, Linked services and Operations.
5.  While configuring the **Input Parameters**, configure the LOOP\_INPUT\_VAR namespace.
    
    For Looping, two namespaces are introduced: `LOOP_INPUT_VAR` and `LOOP_OUTPUT_VAR`. These namespaces are visible only when Looping is enabled. Refer to [Namespaces](#namespaces) for more details.
    
6.  Go to the **Advanced** section in the Properties pane.
    
    You can enable Looping from the node's context menu. Right-click the node and then select Parallel or Sequential.  


    <!--![](Resources/Images/NodeContextMenu.png) --> 
    <!-- The following steps details how to manually enable Looping. -->
    
7.  Select the **Enable Looping** check box.
    
    The **Loop Execution Type** list appears. This specifies if the task must be looped Sequentially or Parallelly. For each input value, if the associated service must be processed in order, you can choose Sequential. Otherwise, choose Parallel to execute simultaneously.
    
    ![](Resources/Images/EnableLooping.png)
    
8.  Select the **Sequential** or the **Parallel** option from the **Loop Execution Type** list.
    
    After you select the **Loop Execution** Type option, the **Loop Condition Type** list appears: This helps the Workflow Engine to decide on how to loop a particular task. The list provides two options: Loop Counter and Loop Collection.

    These options define how many times the loop executes.

     ![](Resources/Images/LoopConditionType.png)  


9.  Select one of the options from the **Loop Condition Type** list:
    
    *   The **Loop Counter** option indicates that the task is iterated based on the specified count. The Loop counter expects a static number or an expression, which is evaluated at runtime.
        
        If you select **Loop Counter** from the Loop Condition Type list, the **Count** and **Expression** options are displayed:
            
        ![](Resources/Images/LoopCounter.png)
            
        Configure one of the following:
                
        *   **Count**: Select the option and specify the number of iterations as a numeric value.
                    
        *   **Expression**: Select the option and specify the number of iterations as evaluated from the provided expression.
                    
            The Expression can be configured by using any Workflow namespace.
                        
            > **_Note:_** Text input to enter a loop count can be static text or an expression from workflow\_context.count. This is similar to the Timer node expression. For more details, refer to <a href="#timer-_not-supported-for-integration-sync-typeworkflow_">Timer Node</a>.
                
    *   **Loop Collection** indicates that the task is being iterated based on a specified input collection or an array object.
        
        If you select Loop Collection from the Loop Condition Type list, the **Loop Collection Expression** field is displayed.
        
        ![](Resources/Images/Loop_Expression.png)
        
        Specify the collection expression from workflow namespace(s) for iteration of the associated service. For example:
            
        ```
        Foundry_workflow_context.userIDs
        ```
            
8.  This step is required If you have selected Sequential Loop. Configure **Loop Exit Criteria** to specify a condition that (if met) will break the execution out of the loop and proceed to the next workflow step.   

    ![](Resources/Images/LoopExitCriteria.png)  

    **Loop Exit Criteria:** If you want to break the loop based on certain conditions, you can use the Loop Exit Criteria.For example, if you want an additional validation where you want to execute the task if minimum balance in the account is 10,000, then you can configure a logical expression such as BACKEND\_RESPONSE.balance >=10,000.
  
    To create an expression, follow these steps:
    
    * Click **ADD**. The **Loop Exit Criteria** dialog appears.  

    ![](Resources/Images/LoopExitCriteriaDialog.png)

    * Click **Add Condition** to configure a logical expression. You can also click **Add Group** and configure a group that can have multiple logical expressions within it.

    *   Each condition or group is associated with a logical operator (**AND**, **OR**). Select the required operator to determine the logic to execute the condition or group. If you select the Not check box, the selected condition is inverted.
    *   Select the [namespace](#namespaces) from the list, and then add the related parameter in the **Value** field. For example, if you select BACKEND\_RESPONSE from the namespace list, and add balance in the **Value** field, it would be read as BACKEND\_RESPONSE.balance.
    *   Select a comparison. The available options are ==, == null, >, <, !=, != null, >=, < =. For example, >=
    *   Select the [namespace](#namespaces) from the list, and then add the related parameter in the **Value** field. For example, you can select **none** from the namespace list, and add 10,000 in the **Value** field.

        Now based on the example, the complete condition will be read as BACKEND\_RESPONSE.balance >=10,000
    
    *   For Looping, two Name spaces are introduced: `LOOP_INPUT_VAR` and `LOOP_OUTPUT_VAR`.  
        Refer to [Namespaces](#namespaces) for more details.
        
    *   Click **SAVE**.  

9.  Enter a description for the Loop execution type.  

9.  Click **SAVE** to save these changes for the task.  


Use Existing Workflow Service
-----------------------------

This feature helps you to use an existing Workflow in your foundry app. You can either clone or add existing workflow and make changes to them accordingly.

To use an existing workflow service, perform the following steps:

1.   In the **Workflow** service tab, click **Use Existing** or in the left pane click the “+” icon and select **Use Existing**. The **Existing services** screen is displayed.
    
2.  Select the required services from the **Existing services** screen and click **Clone** or **Add**. The Clone Service or Add Service status screen appears.
    
    *   **Clone**: It creates a duplicate of the selected service. The changes made to the duplicate service will not affect the original service.
        
    *   **Add**: It adds the selected service to the new Foundry app. The changes made to the service will affect all the apps using the service.

    If the service is part of any published app, you must unpublish the service to rename it.
        
    **_Note:_** If the list is long, you can search for the required service with **Search** option.
    
3.  After the **Clone** or **Add** process is complete, the service is added to the Workflow services list.
    
3.   Click the newly added service or open the Contextual menu and click **Edit** to configure the details of the service. For more information on configuring the details, refer to [Create a Workflow](#create-a-new-workflow).
    

Manage Workflows
----------------

You can manage the details of a service from the Contextual menu available adjacent to each service. The following options are available in the Contextual Menu:

![](Resources/Images/EventUnlinkDisable.png)

*   **Edit** – Click to edit the details of a selected service. After you edit a service, save and republish all the apps that use this service to apply the changes.
    
*   **Clone** - Duplicates an existing service. Clone a service to create a different version of the same service. Changes made to a cloned service will not affect the original service. The name of a cloned service indicates that it is a copy of an existing service. You can edit the name of a cloned service.
*   **Unlink From App** - Use this option to unlink the required workflow from the linked Foundry app.
*   **Unlink from Associated Object** - Use this option to unlink the required workflow from the linked object of the Object service.
    
    > **_Note:_** This option is disabled for event triggered workflow services.
    
*   **Delete** - Deletes a selected Workflow from Foundry Console. You cannot delete a service if the service is in use. You must do the following to delete the service:
    
    *   Unpublish the foundry app.
    *   Unlink the linked Object.
    *   Unlink the service with the Foundry app.
    *   Navigate to API Management > Workflow and delete the service from there.
        
    When you delete a service that has multiple versions, only the active version is deleted.

*   **Console Access Control** – You can manage the users who can access this service from here. To know more, refer to [Console Access Control](../../voltmx_foundry_user_guide/Content/ConsoleAccessControl.md).
*   **Export as XML** - Exports the current version of a service in the form of an XML file.
*   **Export** – Exports the service details in the form of a zip file. You can import this zip file to another Foundry app and use it. For more information, refer to [Export and Import an Application](../../voltmx_foundry_user_guide/Content/Export-Import_Apps.md).

> **_Note:_** To view the Usecase related to Object Triggered Workflow and the implementation of the Usecase, refer to [Object Triggered Workflow Implementation](Workflow_Implementation.md).

> **_Note:_** To view the Usecase related to Event Triggeed Workflow and the implementation of the Usecase, refer to [Event Triggered Workflow Implementation](EventsWorkflowImplementation.md).

> **_Note:_** To view the execution status of a workflow service by using App Services Console, refer to [App Services Console > Workflow Services](../../vmf_integrationservice_admin_console_userguide/Content/Workflow.md) section.