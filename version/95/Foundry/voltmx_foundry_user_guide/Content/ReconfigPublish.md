                              

User Guide: [Publish](Publish.md) > App Reconfiguration

Reconfiguration at Publish
==========================

During app publishing, Volt MX Foundry allows you to reconfigure the default values of app services (identity and integration) specific to an environment and publish the app to an environment. When you configure required services for an app, the system stores the default app configurations in your current workspace. A Volt MX Foundry application stored in the workspace comprises [shared and non-shared services](Export-Import_Apps.md#Shared-NonSharedServices). All these services have a certain configuration stored in the workspace. You can reconfigure these services while publishing the app to an environment. The default values of app services will not be changed while reconfiguring services.

> **_Important:_**  For more details about How to Publish an App, refer to [Publish](Publish.md).

> **_Important:_** **Full** publish method is selected by default, you can switch to **Incremental** publish to reduce publish duration. Refer to [Publish > Delta Publish](Publish.md).

The following services types can be reconfigured:

*   [App Reconfiguration](AppReconfig.md)
*   [Service Reconfiguration](ServiceReconfig.md)
    *   Integration Service Reconfiguration
    *   Object Service Configuration
    *   Identity Service Reconfiguration
