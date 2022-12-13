

Overview
========

This section provides an overview of the VoltMX Foundry, PhoneGap, and VoltMX Foundry CRM Sample application.

 After you set up VoltMX Foundry using Amazon Web Services (AWS), you can build your sample application.  
For more details on How to set up VoltMX Foundry in AWS, refer to [AWS VoltMX Foundry QuickStart Guide](http://opensource.voltmxtechsw.com/volt-mx-docs/mobilefoundryaws/assets/docs/AWS_Foundry_QuickStart_Guide.pdf)

VoltMX Foundry
-----------

VoltMX Foundry provides enterprise security and complex system integration services and allows developers to focus on building app experiences. VoltMX Foundry delivers a powerful set of services to handle identity, integration, orchestration, data sync, and messaging. When these services are configured within VoltMX Foundry, they can easily be incorporated into a mobile application using any third-party app development tool with our SDKs or direct REST API interface.

VoltMX Foundry offers five major services:

*   Identity: Authenticate and authorize your application users including Salesforce, Active Directory, SAP, or other third-party identity providers that support Security Assertion Markup Language (SAML).
*   Integration: Securely connect your application to any back-end data using a variety of connectors for standard services such as REST, SOAP, and JSON end points and for enterprise connectors such as Salesforce and SAP. You can also build custom connectors using Java code to handle any atypical integration requirement.
*   Orchestration: Optimize application performance or create new services by building server-side composite services and workflows including the ability to execute custom business logic.
*   Sync **Services**: Enable applications to work offline by keeping a copy of relational data structures on the device. Securely synchronize changes between end-user devices and enterprise databases or web service-enabled systems.
*   Engagement Services: Engage with your users over cross-platform push notifications, SMS, and email. This service includes the ability to track the effectiveness of messaging campaigns. You can also collect user information and behavior analytics to enable you to better target messaging based on user segmentation rules and location defined by geo-boundaries or iBeacons.

PhoneGap
--------

PhoneGap is a free and open source framework that allows you to create mobile apps using standardized web APIs for the platforms you care about.  To ensure proper stewardship of the source of PhoneGap, and to maintain a transparent and open governance that was well documented and understood, Adobe/Nitobi donated the PhoneGap codebase to the Apache Software Foundation (ASF) and was renamed as Cordova. Currently PhoneGap is a distribution of Apache Cordova. Think of Apache Cordova as an engine that powers PhoneGap.

VoltMX Foundry CRM Sample
----------------------

The VoltMX Foundry CRM sample application was developed using the PhoneGap/Cordova APIs and has the following functionality:

*   Ability to connect to VoltMX Foundry instance and authenticate against the Salesforce APIs using the identity that has been configured in the VoltMX Foundry.
*   Ability to invoke VoltMX Foundry services that have been configured. These services in VoltMX Foundry are configured based on the Salesforce objects and the operations that are exposed by these objects.

This document captures the details of:

*   Software installation and configuration that are needed to execute VoltMX Foundry CRM sample application. The software programs whose install and configuration are discussed include Eclipse, Android Development Toolkit (ADT) plug\-in, Node.js and Cordova.
*   Process of creating a Salesforce account and loading the data that is needed to execute the demo application.
*   Creation of VoltMX Foundry trial account.
*   Configuration of the VoltMX Foundry CRM sample application on the VoltMX Foundry Server by creating the identity and integration services.
*   Installation and configuration of VoltMX Foundry CRM sample client application in Eclipse. 
*   Setup of the emulator and execution of the VoltMX Foundry CRM sample client application in the emulator.

Below are the steps and the order we’ll cover in this QuickStart guide:

1.  [Installing and configuring Node.js](Installing and configuring Node.js.md).
2.  [Installing and configuring Cordova](Installing and configuring Cordova.md).
3.  [Installing JDK 1.8](Installing JDK 1.8.md).
4.  [Installing the Android SDK](Installing the Android SDK.md).
5.  [Installing Eclipse](Installing Eclipse.md).
6.  [Installing the Eclipse Android Plug-in](Installing the Eclipse Android plugin.md).
7.  [Configuring the Back-end integration using VoltMX Foundry](Configuring the backend integration using Foundry.md).
8.  [Creating a SalesForce.com account](Creating a SalesForce.com Account.md).
9.  [Configuring the VoltMX Foundry Server](Configuring the MobleFoundry Server.md).
10.  [Installing the Demo Application](Installing the Demo Application..md).
