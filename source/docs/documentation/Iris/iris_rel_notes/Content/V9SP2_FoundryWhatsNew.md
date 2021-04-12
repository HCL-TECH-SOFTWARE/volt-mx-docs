---
layout: "documentation"
category: "undefined"
---
                         

Volt MX  Foundry V9 Service Pack 2
================================

New Features & Enhancements
---------------------------

In this release, the following features have been introduced or enhanced to provide a better Volt MX Foundry experience.

*   **Added a new Red Hat PAM Adapter in Integration services**
    
    From Volt MX Foundry V9 SP2 onwards, a new Red Hat PAM adapter is added in the Volt MX Foundry Console. You can use this adapter to explore Rules, Process, and Cases defined in your Red Hat Process Automation Manager instance and create Services and Operations in the Foundry Console.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Red_Hat_PAM_Adapter.html).
    
*   **Support for OpenAPI 3.0 files in the OpenAPI (Swagger) adapter.**
    
    From Volt MX Foundry V9 SP2 onwards, you can import OpenAPI 3.0 files to create Integration services and operations.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Open_API__Swagger_.html).
    
*   **Added a new type of Workflow service – Event triggered**
    
    From Volt MX Foundry V9 SP2 onwards, Foundry Workflow can now be initiated by listening to Foundry Events. The following three new Signal Events are introduced to support Event based invocations.
    
    *   Signal Start (to start a workflow instance)
    *   Catch Signal (to resume a paused workflow)
    *   Throw Signal (to raise an Event from workflow)
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Workflow.html).
    
*   **Enhancements to Object linked workflows**
    
    From Volt MX Foundry V9 SP2 onwards, the ability to access parameters based on array index in the workflow designer while configuring conditional logic has been added.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Workflow.html#AdvancedConfig).
    
    Also, added the ability to store the Identity and Session scope parameters from incoming requests into `FOUNDRY_WORKFLOW_CONTEXT` at the User Task level.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Workflow.html#UserTaskWorkFlow).
    
*   **Enhancements to Workflow Audit history**
    
    The Workflow Audit history has been enhanced for the following:
    
    *   Added support to **manually retry a failed task** in a workflow along with **Editing** the payload via namespaces. This is a runtime edit to the erroneous payload and helps retry the failed task in a workflow and resume execution from point of failure.
    *   Added support to display the primary key of linked object in case of object linked workflows.
    *   Added support to display the Correlation ID values in case of Event triggered workflows.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/vmf_integrationservice_admin_console_userguide/Content/Workflow.html).
    
*   **Enhancements to Foundry application Publish**
    
    *   The Publish section has been enhanced to display environments status such as Available, Busy, and Unknown. This is a quick feedback mechanism to inform a user in case the server is busy publishing another application.
    *   Added incremental application publish support to significantly reduce the publish time of an app after the first publish.
    *   Added a new reconfiguration option to skip swagger generation steps during publish.
    *   Improved error messaging in case of publish failures.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Publish.html).
    
*   **Enhanced reconfiguration file**
    
    From Volt MX Foundry V9 SP2 onwards, a new simplified format of reconfiguration file is supported to improve the readability and simplify the editing of the file.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/ServiceConfigProfile.html#JSONFileStructure).
    
*   **Added a new application Promotion Mechanism**
    
    From Volt MX Foundry V9 SP2 onwards, a new application promotion mechanism is introduced. From the snapshot page of an environment, a user can download a deployment package containing the application archive at the publish time and reconfiguration file. The Deployment package can be directly promoted to an environment without being impacted by the changes in console
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/AppPromotion.html).
    
*   **Support for PKCE in OAuth 2.0 Identity Providers**
    
    From Volt MX Foundry V9 SP2 onwards, all OAuth Identity providers support PKCE (proof key for code exchange) in authorization code flow. For backend Identity providers that support PKCE, Iris SDK and Identity will honor additional PKCE mechanism implicitly without any code changes. For the providers that do not support PKCE or in case of clients that use Volt MX V9.1 or lesser, the authorization code grant flow will continue to be honored without the PKCE enhancement.
    
    For more information, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Identity10_VoltMX_OAuth2.html).
    
*   **Support for Refresh Token Grant type in OAuth 2.0 Identity Providers**
    
    From Volt MX Foundry V9 SP2 onwards, Refresh Token Grant Type support is added for OAuth 2.0 Identity services. The Refresh Token grant type is used by clients to exchange a refresh token for an access token when the access token has expired. This allows clients to continue to have a valid access token without further interaction with the user. A new Refresh login API is added in SDK to support the refresh login flow.
    
    For more information, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/VoltMXStudio/Invoking_Identity_Service_Iris.html#RefreshLogin).
    
*   **Added Console Access Control for Identity services**
    
    From Volt MX Foundry V9 SP2 onwards, console access control is added for Identity services. You can now control who can access and edit a particular Identity service.
    
    For more information, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/ConsoleAccessControl.html).
    
*   **Support for Remember consent in OAuth Provider**
    
    In OAuth Provider client consent dialogue, from Volt MX Foundry V9 SP2 onwards, a new option is added to remember the Consent provided by the user.
    
    For more information, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Identity11_OAuth.html).
    
*   **Enhancements to support application merger from Foundry CLI**
    
    From Volt MX Foundry V9 SP2 onwards, a new command is added in Foundry CLI to support application merge.
    
    For more information, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Merge_Templates_using_MFCLI.html).
    
*   **Enhancements to External User Authentication**
    
    From Volt MX Foundry V9 SP2 onwards, External User Authentication has been enhanced to support configuring multiple identity providers. You can now configure more than one Identity providers in a single Foundry account, which allows the users to log in to Foundry console by using multiple types of authentication providers.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Settings_Cloud.html#Accounts-Cloud).
    
*   **Support for Oracle 19c**
    
    From Volt MX Foundry V9 SP2 onwards, support for installing Volt MX Foundry on Oracle 19.c is added.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmxfoundry_supported_devices_os_browsers/Content/FoundryV9SP2.html).
    
*   **Enhancements to the MySQL support**
    
    From Volt MX Foundry V9 SP2 onwards, support for the following is added:
    
    *   Support for installing Volt MX Foundry on MySQL 5.7.31.
    *   Support for MySQL Cluster with Group Replication.
    *   Support for case sensitive collations on MSSQL Server.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmxfoundry_supported_devices_os_browsers/Content/FoundryV9SP2.html).
    

HCL App Factory
-------------------

*   **Added support for Flyway Migration.**
    
    You can now use App Factory to fetch Flyway scripts from your source-control module, add specific commands and command-line options, and then run the scripts on your database.
    
    For more information, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_appfactory_user_guide/Content/Database.html).
    
*   **Added support for Build on Push in Foundry projects.**
    
    You can now configure watchers for your Volt MX Foundry projects, which will trigger the build job when changes are pushed to the source-control module.
    
    For more information, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_appfactory_user_guide/Content/BuildOnPush_Foundry.html).
    
*   **Added new parameters in Project Settings.**
    
    After you create an App Factory project, you can use the revamped Project Settings to configure parameters that are related to source control, internationalization, quality, and notifications.
    
    For more information, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_appfactory_user_guide/Content/Project_Settings.html).
    
*   **Added support for Service Configuration Profiles**
    
    You can now use Service Configuration Profiles in the Foundry build pipeline to configure endpoints for different environments, such as development, testing, or production.
    
    For more information, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_appfactory_user_guide/Content/BuildingFoundryApp.html).
    
*   **Added support for Arxan Web Obfuscation**
    
    You can now configure Web Protection parameters in the Iris build to enable Arxan Web Obfuscation for your app.
    
    For more information, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_appfactory_user_guide/Content/BuildingAnApp.html).
