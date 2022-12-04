
Volt MX  Offline Objects User Guide: Overview

Overview
========

Offline Objects is a capability of Object Services that provides a simplified approach to synchronize data for offline access. The Offline Objects feature enables you to download an object’s data from an Object Service into a mobile device. This downloaded data can be used when the device does not have a network connection. Unlike [Legacy Sync](../../../Foundry/voltmx_foundry_user_guide/Content/Legacy_Sync.md), Offline Objects does not require a separate runtime server and it runs on top of Object services. It contains all the functionalities of the Volt MX Sync Server. It has better data synchronization performance and much more advanced capabilities such as batching, background sync, and data encryption. It is implemented in native platforms targeting different client platforms such as iOS, Android, and Web.

Offline Objects helps to build a robust offline enabled application. It uses the OData protocol, an open-source protocol to connect with Object services. You can use the Offline Objects feature with apps created by using Volt MX Iris or that are developed in native Android and iOS by using native Volt MX Foundry SDKs.

Offline Objects feature is available across all channels - Android, iOS, Web (PWA and Desktop), and Windows.

Offline Objects supports the following modules:

*   **Service Driven Objects (SDO)**: Object services can interact with the backend through service-driven objects derived from Integration services, which wrap the backend end-points such as REST API.

*   **Line-of-Business (LOB)**: You can use Object Services to create data models from line-of-business (LOB) objects. You can access LOB objects by using Volt MX Foundry business adapters such as SAP, Salesforce, and RDBMS. These business adapters enable you to visually discover and select the entities exposed by the LOB system.
