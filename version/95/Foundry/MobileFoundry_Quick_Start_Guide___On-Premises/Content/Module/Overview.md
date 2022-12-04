

Overview
========

VoltMX Foundry provides enterprise security and complex system integration services and allows developers to focus on building app experiences. This is accomplished by providing a powerful set of services to handle identity, integration, objects, orchestration, data sync, and engagement services. When these services are configured within VoltMX Foundry, they can easily be incorporated into a mobile application using any third-party app development tool using our SDKs or direct REST API interface.

VoltMX Foundry has multiple features that can be used - Identity, Integration, Objects, Orchestration, Sync , and Engagement. These features can be accessed via a common, centralized console.

For successful authentication with users, and to access centralized features of VoltMX Foundry, VoltMX recommends that you install the following VoltMX Foundry features for on-premises:

*   VoltMX Foundry Identity and Console
*   VoltMX Foundry Server
*   VoltMX Foundry Engagement Services
*   VoltMX Foundry Sync

The following are the five major services offered by VoltMX Foundry:

*   **Identity**: Authenticate and authorize your app users including Salesforce, Active Directory, SAP, or other third-party identity providers that support Security Assertion Markup Language (SAML.)
*   **Integration**: Securely connect your app to any back-end data using a variety of connectors for standard services such as REST, SOAP, and JSON end points and for enterprise connectors such as Salesforce and SAP. You can also build custom connectors using Java code to handle any atypical integration requirement.
*   **Orchestration**: Optimize app performance or create new services by building server-side composite services and workflows including the ability to execute custom business logic.
*   **Sync**: Enable apps to work offline by keeping a copy of relational data structures on the device. Securely synchronize changes between end-user devices and enterprise databases or web service-enabled systems.
*   **Engagement Services**: Engage with your users over cross-platform push notifications, SMS, and email. This service includes the ability to track the effectiveness of messaging campaigns. You can also collect user information and behavior analytics to enable you to better target messaging based on user segmentation rules and location defined by geo-boundaries or iBeacons.

This Quick Start guide helps you through creating a basic set of back-end services for authenticating a user and then accessing a simple integration and orchestration service.

cURL - a command line tool for getting or sending files using URL syntax. This guide uses the cURL command to represent a mobile device making HTTPS API calls to a VoltMX Foundry environment. cURL is typically pre-installed on Linux and Mac systems.  
For Windows, go to [http://curl.haxx.se/download.html](http://curl.haxx.se/download.html), download cURL, and the SSL libraries required to connect to HTTPS URLs.  
  
For cURL commands and documentation, refer to [http://curl.haxx.se/docs/](http://curl.haxx.se/docs/)
