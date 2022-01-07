---
layout: "documentation"
category: "voltmx_foundry_user_guide"
---
                               

User Guide: Benefits of using Volt MX Identity

Identity
========

Volt MX  Foundry identity services help you secure your application by adding an authentication layer.

You can set up an identity service based on the type of the users who are allowed to access your application. To restrict access to your company's internal audience, use Microsoft Active Directory authentication. To allow access of your application to a larger audience, you can use enterprise identity providers (Microsoft Active Directory, Volt MX SAP Gateway, Open LDAP, OAuth 2.0, Salesforce, Custom Identity Service, SAML 2.0, Siteminder ) and social identity providers (Google, Linkedin, Instagram, Amazon, Microsoft, Yahoo, BOX, Facebook.)

Benefits of using Volt MX Identity
----------------------------------

*   Volt MX Foundry’s Identity Service User Interface eliminates coding backend authentication mechanisms into your app.
*   All the auth token handling is done at Volt MX Foundry layer to make applications more secure.

Workflow of Volt MX Identity Services
-------------------------------------

The following workflow describes the various stages of Identity services:

![](Resources/Images/VoltMXIdentityWorkflow_677x313.png)

Supported Identity Providers
----------------------------

Volt MX  Foundry Identity Services support connectivity to the following different identity providers.

  
| Enterprise Identity Providers | Social Identity Providers (OAuth 2.0) |
| --- | --- |
| [Microsoft Active Directory](Identity2_MS_AD.html#microsoft-active-directory-identity-service)<br><br> [Salesforce](Identity3_Salesforce.html#salesforce-identity-service)<br><br> [Open LDAP](Identity4_LDAP.html#open-ldap-identity-service)<br><br> [SAML 2.0](Identity5_SAML.html#saml-2-0-identity-service)<br><br> [Siteminder](Identity6_SiteMinder.html#siteminder-identity-service)<br><br> [VoltMX SAP Gateway](Identity7_VoltMX_SAP.html#sap-gateway-identity-service)<br><br> [VoltMX User Repository (User Store)](Identity12_VoltMXUR.html#user-repository-identity-service)<br> (Support is deprecated from V8 SP4 AprilFP onwards)<br>(The Volt MX User Repository identity service is available in every Volt MX Foundry account by default. You are allocated only a single instance of the Volt MX User Repository for a single Volt MX Foundry account. Volt MX User Repository stores meta-data of all users in the account, such as Email, First Name, Last Name, and Password, and Groups.)<br><br> [User Repository Identity Service](UserRepositoryIdentityService.html)<br> (You are allocated to create multiple instances in a one Volt MX Foundry Account. User Repository stores meta-data of users in the account, such as Email, First Name, Last Name, and Password, and Groups.)<br><br> [VoltMX Custom Identity Service](Identity8_VoltMX_Custom.html#custom-identity-service)<br><br> [Facebook](Identity9_Facebook.html#facebook-identity-service)<br><br> [VoltMX Foundry OAuth 2.0](Identity10_VoltMX_OAuth2.html#foundry-oauth-2-0-identity-service)<br><br> [OAuth Provider](Identity11_OAuth.html#oauth-provider-identity-service)<br><br> [Application SSO](Overview_AppSSO.html#AppSSOoverview) | [Social identity providers](Identity13_Social.html#social-identity-providers), including:<br><br> Google<br><br> Linkedin<br><br> Instagram<br><br> Amazon<br><br> Microsoft<br><br> Yahoo<br><br> BOX<br><br> Facebook |
