# Advanced Configurations - Workflow

You can perform the following advanced configurations while creating a Workflow Service.

## <a name="AccessingindexElement_Workflowcontextnamespace"></a>Accessing an element in an array via index

Use the following sample expression to access an element in an array via index in FOUNDRY_WORKFLOW_CONTEXT namespace.

FOUNDRY_WORKFLOW_CONTEXT.resp.Employee.get(2).name

This means, if a response has an array of Employee in `FOUNDRY_WORKFLOW_CONTEXT.resp.Employee`, then you can get the name of the second employee by this expression.