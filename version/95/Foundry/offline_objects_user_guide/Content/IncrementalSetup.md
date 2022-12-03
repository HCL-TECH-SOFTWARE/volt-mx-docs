
Incremental Setup
=================

If you make any changes to the object service schema to accommodate new entities such as adding a column or property to an existing object, these changes will not reflect in the client’s sync environment. To make these changes available in the client’s sync environment, you need to use the drop API, but it clears the entire device database. To avoid this, you can use the Incremental Setup feature that detects the new enhancements and applies them to the device database without altering the previous data.

You should invoke the incremental setup feature before running CRUD or sync operations. Incremental setup connects to the Volt MX Foundry server to fetch the latest changes in the object service schema. Thus, this feature requires network connectivity.
