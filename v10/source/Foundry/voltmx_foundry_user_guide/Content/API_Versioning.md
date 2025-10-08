                               

User Guide: API Versioning

Volt MX  Foundry API Versioning
=============================

Volt MX  Foundry supports versioning for integration services, orchestration services, and object services. Versioning is the process of assigning unique version numbers to unique states of software. Within a given version number category (major, minor), these numbers are generally assigned in increasing order and correspond to new developments in the software. API Versioning is useful for handling changes to an API. For example, additions and changes to an API that cannot cause an error in the existing API can be handled within one version. If there are additions and changes to an API that can result in errors or compatibility issues, the changes should be introduced in a new version of the API.  
  

In runtime, you can run different versions of the same service. A Volt MX Foundry app published with two different versions of the same service is treated as two separate Volt MX Foundry apps. A new App key and App secret are generated when you publish the Volt MX Foundry app associated with a different version of the same service. The mobile app developer uses the key/secret to invoke the related services.

The version of a service is not invoked when the service is called through the Volt MX Foundry SDK . From the SDK, the name of the service is called, not the version of the service. Volt MX Foundry invokes the latest version of the service.

API Versioning Use Cases
------------------------

The following use case describes the conditions and scenario for using API Versioning in Volt MX Foundry.

**Scenario: Versioning of Integration Service**

A Volt MX Foundry app named WeatherAppA uses an integration service named Weather. There is one version of the Weather integration service, version 1.0. The Volt MX Foundry app that uses the Weather integration service is deployed to production.

A bug is discovered in the Weather.getForecast operation of the Weather integration service. The operation uses Fahrenheit values for Temperature instead of Celsius, a requirement of WeatherAppA. There are currently no users of WeatherAppA. The Volt MX Foundry developer fixes the defect in version 1.0 of the Weather service, saves it, and redeploys WeatherAppA. Versioning may not be needed in this case.

In a different scenario, the Volt MX Foundry apps WeatherAppA and WeatherAppB use the Weather integration service. There is one version of the Weather service, version 1.0. The Weather service uses Fahrenheit values for Temperature.

The WeatherAppA developer requires Celsius and has requested a change to the Weather service. WeatherAppB is working as expected and shows the Fahrenheit value. The back-end developer configures WeatherAppA and edits the Weather service. The back-end developer saves a new version of Weather service, version 1.1, makes the change to select Celsius, saves the service, and then republishes WeatherAppA.

At this point, all existing instances of WeatherAppA invocations to Weather.getForecast start getting responses from version 1.1. WeatherAppB continues to get responses from version 1.0 of the Weather service.

API Versioning in Volt MX Foundry Services
-----------------------------------------

You can save an integration service, orchestration service, object service as a new version of the service. When you save a service as a new version, Volt MX Foundry unlinks the latest version of the service from the Volt MX Foundry application, and links the new version. When you create a new service, Volt MX Foundry creates the new service as version 1.0.

You can use _major.minor_ numbering for versions. Volt MX Foundry supports major versions from 1 through 999, and minor versions from 0 through 99. Volt MX Foundry supports version numbers from 1.0 to 999.99. Note that the dot '.' is a separator for version numbers and does not function as a decimal.

A Volt MX Foundry app can be associated with only one version of a service. When you associate an existing version of a service with a Volt MX Foundry application, Volt MX Foundry unlinks the latest version of the service from the Volt MX Foundry application, and links the version that you selected.

For more details, refer to [How to Save or Use a Version of an Integration Service](Manage_Existing_Integration_Services_1.md#how-to-save-or-use-a-version-of-a-service).

An orchestration service can reference other integration services or orchestration services. Therefore an Orchestration service can reference only one version of a specific integration service or orchestration service.

For more details, refer to [How to Save or Use a Version of an Orchestration Service](Orchestration.md#OrchVersioning).

An Object service that is service-driven can reference only one version of a specific integration or orchestration service. A service-driven object is defined from existing APIs that use XML, Salesforce, REST, SOAP, JSON, and Java web services.

For more details, refer to [How to Save or Use a Version of an Object Service](Manage_Existing_Integration_Services_1.md#how-to-save-or-use-a-version-of-a-service).

API Versioning in API Management
--------------------------------

In Volt MX Foundry API Management, Volt MX Foundry supports versioning for Integration services, orchestration services, and object services. You can select an existing version of a service, or you can save a new version of the service.

If multiple versions of a service are available in API Management, you can select the version of the service that you want to use. You can then link the version of the service to the Volt MX Foundry application through the Existing Services dialog in integration services, orchestration services, or object services.

In API Management, you can delete all versions of an integration service, orchestration service, or object service, or you can delete an individual version of a service. For more details, refer to [Context based Settings](API_Management.md#context-based-options).

Exporting a Versioned Service
-----------------------------

The folder structure of an exported app (a .zip file) has folders, files, and certificates configured for that app. The logical flow of an exported app folder structure has four levels of folders. The primary, or root, level is the Apps folder, which contains all sublevel folders including files and metadata. The second level contains sections for integration services, orchestration services, and object services.

The integration section of an exported app has the referenced (shared) integration services configured for the app. Each version of an integration service configured for the app has a folder under the integration service folder. Each version of the integration service is self-contained in its own folder.

The orchestration section of an exported app has the referenced (shared) integration services configured for the app. Each version of an orchestration service configured for the app has a folder under the orchestration service folder. Each version of an orchestration service is self-contained in its own folder.

The object section of an exported app has the referenced (shared) object services configured for the app. Each version of an object service configured for the app has a folder under the object service folder. Each version of an object service is self-contained in its own folder.

API Versioning Compatibility
----------------------------

API Versioning is backward compatible with previous versions of Volt MX Foundry.

*   If you import a Volt MX Foundry app that was built using Foundry 6.5 or an earlier version, Volt MX Foundry creates the default version 1.0 for the integration services, orchestration services, and object services in the imported app.
*   If you upgrade to Foundry 7.0 from Foundry 6.5 or an earlier version, Volt MX Foundry creates the default version 1.0 for the integration services and orchestration services in the upgraded Volt MX Foundry apps.
