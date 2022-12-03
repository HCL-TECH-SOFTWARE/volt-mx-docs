                             

User Guide: [Workflow](Workflow.md) > Workflow Best Practices

Workflow Best Practices
=======================

**Use Case:** Workflows are executed in the background. In case of long-running workflows, if you are using attributes from an identity scope or session scope, there is no guarantee that those attributes are available throughout the workflow execution.

**Recommended best practices**: When a workflow needs any kind of attributes from an `IDENTITY` or `SESSION` scope, always try to populate the necessary data from all other scopes to **FOUNDRY\_WORKFLOW\_CONTEXT**, and use these values from **FOUNDRY\_WORKFLOW\_CONTEXT**.

You can configure the attributes from an `IDENTITY` or `SESSION` scope by using **Process Incoming Payload** mapping editor or a service task.


<details close markdown="block"><summary>How to Store namespace data in FABRIC_WORKFLOW_CONTEXT using Process Incoming Payload (User Task in Fabric Console)</summary>

*   Click **Configure** under ****Process Incoming Payload**** of a in User task properties, in a workflow service. The **Process Incoming Payload** dialog box appears.
    
    ![](Resources/Images/UserTaskOP1_thumb_0_48.png)(Resources/Images/UserTaskOP1.png)
    
    1.  Specify a top-level key name in **FOUNDRY\_WORKFLOW\_CONTEXT** field. The top-level key stores data copied from output elements of the other namespaces.
    2.  Map parameters in the table to copy data from other namespaces. Individual elements of the output can be accessed by using a dot(.) notation with a key.
        
        For example, `Foundry_Workflow_Context.UserTaskKey1.applicationId = Device_request.applicationId`
        
        *   Top-level key: `UserTaskKey1` , which stores data copied from the mapped output of the element, `applicationId`.
        *   The `applicationId` element is mapped to the `applicationId` parameter that is available in the DEVICE\_REQUEST namespace.

</details>
<details close markdown="block"><summary> How to Store namespace (identity or session) attributes as key value by using a service task</summary>

*   Avoid using the `IDENTITY` scope as it can expire at any time while the workflow is under execution. Instead, populate the necessary values from an `IDENTITY` scope to **FOUNDRY\_WORKFLOW\_CONTEXT** by using a service task.
*   Avoid using the `SESSION` scope as it can contain **custom** data elements that might get lost while persisting when a workflow execution fails. Instead, populate the necessary values from a `SESSION` scope to **FOUNDRY\_WORKFLOW\_CONTEXT** by using a service task.  
    Though an attempt will be made for persisting the session scope data on workflow failure, but it is not fully guaranteed.
</details>
