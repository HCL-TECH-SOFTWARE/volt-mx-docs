  

What is ?
---------

is a back-end platform that powers client apps by providing services for authentication, data integration, data transformation, and management of business rules and work flows. Foundry also provides custom and prebuilt analytics with customizable dashboards and reports. provides a central Console, which can be used to create, configure, and manage services, APIs, and environments.

provides the following features:

*   [Identity](https://docs.voltmx.com/voltmxlibrary/voltmxfoundry/voltmx_foundry_user_guide/Default.md#Identity.html), which consists of client authentication services and back-end security token management, which are used to secure and protect the back-end systems. Identity Services support enterprise providers (SAML; Salesforce; Microsoft Active Directory), and also support social providers (Google; LinkedIn; Facebook).
    
*   [Integration](https://docs.voltmx.com/voltmxlibrary/voltmxfoundry/voltmx_foundry_user_guide/Default.md#Services.html), which provides out-of-the-box adapters and connectors for back-end applications (SAP; Salesforce), service endpoints (SOAP; OpenAPI or Swagger), databases (MongoDB; MySQL), and cloud-based services (AWS S3; Red Hat PAM). Integration Services can be used to build custom adapters or create custom business logic APIs.
    
*   [Object Services](https://docs.voltmx.com/voltmxlibrary/voltmxfoundry/voltmx_foundry_user_guide/Default.md#Objectservices.html), which uses a microservices approach to enable model-based app designs. Object Services can be used to define data models and map them to the back-end data. The data model encapsulates the back-end data, which abstracts the complexity of the API from the client app.
    
*   [Orchestration](https://docs.voltmx.com/voltmxlibrary/voltmxfoundry/voltmx_foundry_user_guide/Default.md#Orchestration.html), combines multiple Integration services, Object services, or Orchestration services into a single service, which reduces the number of service calls and simplifies the business logic in client apps.
    
*   [Workflows](https://docs.voltmx.com/voltmxlibrary/voltmxfoundry/voltmx_foundry_user_guide/Default.md#Workflow.html), which are visual representations of business processes, and can be used to fulfill business use cases. A Workflow consists of execution blocks, which can be used to design complex business logic, invoke services, and trigger events.
    
*   [Rules](https://docs.voltmx.com/voltmxlibrary/voltmxfoundry/voltmx_foundry_user_guide/Default.md#Rules_as_a_Service.html), which consist of various definitions of business logic that are written in a simplified text form. These rules can be used to perform actions based on a set of input parameters and conditions.
    
*   [Engagement](https://docs.voltmx.com/voltmxlibrary/messaging/voltmx_foundry_intro_eng/Default.md), which provides a notification service for devices running on different platforms, for example, iPhone, Android, and Windows. Engagement services can be used to send push notifications, emails, SMS, and passes to subscribed apps.
    

also provides other features, such as [API Management](https://docs.voltmx.com/voltmxlibrary/voltmxfoundry/voltmx_foundry_user_guide/Default.md#API_Management.html), [Custom Data Adapters](https://docs.voltmx.com/voltmxlibrary/voltmxfoundry/voltmx_foundry_user_guide/Default.md#CustomDataConfig.html), and [Client SDKs](https://docs.voltmx.com/voltmxlibrary/voltmxfoundry/voltmx_foundry_user_guide/Default.md#Foundry_SDKs.html). For detailed information about and its features, refer to the [User Guide](https://docs.voltmx.com/voltmxlibrary/voltmxfoundry/voltmx_foundry_user_guide/Default.md).

What are deployments?
---------------------

Deployments
===========

The following table displays the supported platforms for the Deployments along with links to the installation guides.

  
| Deployment Name | Platform | Recommended Environment |
| --- | --- | --- |
| 
[Single Container Solution](https://docs.voltmx.com/voltmxlibrary/voltmxfoundry/voltmxfoundry_single_container/Default.md)

(On-Premises)

 | 

![](Resources/Images/1920px-Docker_(container_engine)_logo.svg.png)

[Docker](https://www.docker.com/)

 | 

Development Environment

 |
| 

[Containers Solution](https://docs.voltmx.com/voltmxlibrary/voltmxfoundry/voltmxfoundry_containers_solution_on-prem/Default.md)

(On-Premises)

 | 

![](Resources/Images/1920px-Docker_(container_engine)_logo.svg.png)

[Docker](https://www.docker.com/)

 | 

Production Environment

 |
| 

[on Azure Cloud](https://docs.voltmx.com/voltmxlibrary/voltmxfoundry/voltmxfoundry_on_azure/Default.md)

 | 

![](Resources/Images/1920px-Microsoft_Azure_Logo.svg.png)

[Microsoft Azure](https://azure.microsoft.com/)

 | 

Development Environment

or

Production Environment

 |
| 

[on Red Hat OpenShift](https://docs.voltmx.com/voltmxlibrary/voltmxfoundry/voltmx_foundry_on_openshift/Default.md)

 | 

![](Resources/Images/800px-OpenShift-LogoType.svg.png)

[Red Hat OpenShift](https://www.redhat.com/en/technologies/cloud-computing/openshift)

 | 

Development Environment

or

Production Environment

 |
| 

[on Amazon EKS](https://docs.voltmx.com/voltmxlibrary/voltmxfoundry/voltmx_foundry_on_amazon_eks/Default.md)

 | 

![](Resources/Images/AWS-EKS-logo-no-background.png)

[Amazon Elastic Kubernetes Service](https://aws.amazon.com/eks/)

 | 

Development Environment

or

Production Environment

 |
