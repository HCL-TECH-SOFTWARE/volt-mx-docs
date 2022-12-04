                            


Foundry App Versioning with Engagement Artifacts
===============================================

From Volt MX V9SP1 onwards, Volt MX Foundry supports versioning of Foundry apps with Engagement artifacts. Versioning is the process of assigning unique version numbers to unique states of software. App Versioning is useful for handling changes to an API or service. For example, additions and changes to an API that cannot cause an error in the existing API can be handled within one version. If there are additions and changes to an API that can result in errors or compatibility issues, the changes should be introduced in a new version of the API. For more information on App Versioning in Volt MX Foundry refer to [App Versioning](../../../Foundry/voltmx_foundry_user_guide/Content/App_Versioning.md).  

Use Case
--------

The following use case describes the conditions and scenario for using App Versioning in Volt MX Foundry along with Engagement Service.

**Scenario: Weather app version change with Engagement Service**

A Volt MX Foundry app named WeatherApp-A uses an Engagement service named Weather. Currently, there is only one version of the Weather service, version 1.0. The Weather service sends a weather update (push notification) to all the subscribers on an hourly basis. The WeatherApp-A is deployed to production.

The WeatherApp-A developer requires the capability to send weather updates (push notifications) in every fifteen minutes. The back-end developer configures WeatherApp-A and edits the Weather service. The back-end developer saves a new version of Weather service, with the same app name but a different version namely WeatherApp-A 2.0. Once the new version is ready, a new Engagement service app is linked to WeatherApp-A 2.0. Once the new version is published the change to send pushes every fifteen minutes gets reflected, the updated Engagement service works.

At this point, all existing instances of WeatherApp-A invocations to Weather service start getting responses from version 2.0. If there are existing subscriptions for any older version of the same app for which the new version has been published, then such subscriptions are made invalid.

Foundry App Versioning along with Engagement Services
----------------------------------------------------

When you save a service as a new version, Volt MX Foundry unlinks the service from the Volt MX Foundry application, and links it with the new version. When you create a new service, Volt MX Foundry creates the new service as version 2.0.

For the first version of an app the FoundryAppBaseId and FoundryAppId remain same. When a new version of the app is created the FoundryAppBaseId remains same but the FoundryAppId changes. Whenever a subscription call is made to any version of the app, the Engagement server unsubscribes that subscriber from the previously subscribed app versions. Therefore, at any given point in time, an app subscriber can be subscribed to only one version of the app. If there are existing subscriptions for any older version of the same app for which the new version has been published, then such subscriptions are made invalid.

> **_Note:_** The **FoundryAppBaseId** and **FoundryAppId** are created by the Volt MX Foundry Console.

API Versioning Compatibility
----------------------------

API Versioning is backward compatible with previous versions of Volt MX Foundry.

*   If you want to use app versioning along with Engagement Services with apps created prior to V9SP1, the Foundry app needs to be republished at least once.
