                              

User Guide: [Manage Client App Assets](Manage_Client_App_Assets.md) > [Publishing Client Binaries](Publishing_Client_Binaries.md) > Publishing Web Client Binaries

Publishing **Services and Web Client Binaries to the Server**
=============================================================

After you have configured all the required services for an app, you need to publish the app. Publishing allows your app to start using the Volt MX service in real-time. After an app is published, Volt MX Foundry generates the code that you can integrate with platform SDKs.

> **_Note:_** You can upload maximum up to 10 Web Client Binaries for an app.

> **_Important:_** When you publish an app to an environment, all the identity services associated with the app are published only to the selected run-time environment. The latest published Identity Services will affect any other apps in the same environment if they use these identity services.  
  
The latest published identity services on the current environment will not affect any apps in different environments.

Based on environments created, Volt MX Foundry Console allows you to publish apps to the environments.

Publishing services and Web client binaries of apps can be done in two ways:

*   [Asynchronous Publish](Async_Publish.md). By default, the asynchronous publish is enabled.
*   [Synchronous Publish](Sync_Publish.md)

> **_Note:_** **For On-premises only:**  
  
To skip a .war file if you have uploaded it for **Web** platform under the **Manage Client App Assets** tab, select the **Allow Manual Publish Only** check box in the [**Add a New Environment**](Environments.md) window.

> **_Important:_**  Make sure that your Volt MX Foundry Console version used for creating apps is same as Volt MX Foundry runtime components’ (Integration, Sync, and Messaging) versions. All the components of Volt MX Foundry must be upgraded to same versions.  
  
For example, if the Volt MX Foundry Console installed version is V8 for creating your apps, you must use the same Volt MX Foundry version for runtime components to publish your apps. If there is a version mismatch, Volt MX Foundry’s Publish functionality and other runtime server components may not work as expected.
