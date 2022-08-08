---
layout: "documentation"
category: "voltmx_foundry_release_notes"
---
                          

What's New in Volt MX Foundry V9 Service Pack 1
==============================================

File Storage Adapter
--------------------

From Volt MX Foundry V9 SP1, a new adapter called File Storage has been introduced. The File Storage Adapter is an out-of-the-box adapter that can be used to store and retrieve files from a default storage system. The adapter uses S3 (Simple Storage Service) as the back-end storage. This adapter is also added to Integration Services.

For more information about File Storage adapter, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/File_Storage_Adapter.html).

Timer Task in Foundry Workflow
-----------------------------

A new **Timer** task has been added to Foundry Workflow. By using the Timer task users can configure a delay between tasks for a fixed period of time or a delay based on an expression.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Workflow.html).

Upgrade mechanism for apps on EAS
---------------------------------

From Volt MX Foundry V9 SP1, you can define upgrade policies for child apps published to the Enterprise App Store.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/ AppVersionUpgradePolicyEAS.html).

Retry Failed Task in Workflow
-----------------------------

The Workflow Audit history has been enhanced with the capability to manually retry a failed task in Workflow. Users with admin access can view the error details of the failed task and do a read-only **Retry** of that task. After the task is successfully executed, the workflow will resume and proceed to execute the next task.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/vmf_integrationservice_admin_console_userguide/Content/Workflow.html).

Foundry Admin Adapter
--------------------

The Foundry Admin Adapter allows the use of administrative APIs on the Volt MX Foundry runtime server. This allows external systems to invoke these APIs to read or modify settings on the Foundry server.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Foundry_Admin_Adapter.html).

GDPR Policy settings
--------------------

Personally Identifiable Information(PII) data like User ID and IP address will be encoded in Metrics when client requests originate from GDPR countries. From Volt MX Foundry V9 SP1, a new option has been added to the GDPR Policy Settings in the Integration Server that enables encoding PII data for all the requests and stop logging PII Data into Integration Server.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/vmf_integrationservice_admin_console_userguide/Content/Runtime_Configuration.html#gdpr-policy).

Invoking Object Services from Service Manager
---------------------------------------------

A new interface has been provided to invoke Object Services from the Service manager. If an Object service is invoked by using this interface, the pre-processors and post-processors of the Object services are executed.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Advanced_Configurations_-Object_Services.html).

Enhanced Service Monitoring
---------------------------

From Volt MX Foundry V9 SP1, Parent Service details in Service monitor are enhanced to identify the parent service correctly. Added support to display the **P90** and **P95** calculations to each of the categories for the Service Monitoring section in the Admin Console. This detail will be available in the exported CSV file.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/vmf_integrationservice_admin_console_userguide/Content/Monitoring.html#service).

Custom Code Profiling
---------------------

From Volt MX Foundry V9 SP1, users can measure and profile the performance of the custom code that is used in their applications using New Relic.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/vmf_integrationservice_admin_console_userguide/Content/Monitoring.html).

UI Enhancements in OAuth Provider
---------------------------------

From Volt MX Foundry V9 SP1, the consent screen for the OAuth Provider Identity service can be customized to take permissions from users and has the ability to remove the permissions from users.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Identity11_OAuth.html#oauth-provider-identity-service).

Ability to send Voice SMS
-------------------------

From Volt MX Foundry V9 SP1, you can send Voice SMS to any subscriber by using Twilio and Nexmo providers.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/vms_console_user_guide/Content/Administration/SMS_Configuration.html#voice).

Create Segments for the Web channel
-----------------------------------

From Volt MX Foundry V9 SP1, support has been added to select Web channel in the **OSType** field while creating segments.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/vms_console_user_guide/Content/Segments/Adding_a_Segment.html).

Engagement artifacts to support Volt MX App Versioning
------------------------------------------------------

From Volt MX Foundry V9 SP1, the ability to create Engagement artifacts to support Volt MX App Versioning has been added.

For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/vms_console_user_guide/Content/API_Versioning.html).

Deprecated Blackberry related code, UI features, and subscriptions.
-------------------------------------------------------------------

Command Line Installer
----------------------

From Volt MX Foundry V9 SP1, you can install Foundry via the command line installer on Liberty v20.0.0.4.

For more information about this, click [here]({{ site.baseurl}}/docs/documentation/Foundry/voltmx_foundry_manual_install_guide/Content/Installing_Foundry_WebSphereLiberty.html).

HCL App Factory
-------------------

*   **Device Filtering**
    
    From Volt MX Foundry V9 SP1, support has been added to create device pools by using filters. By using the new search capabilities, you can filter the devices to run your test scripts on by manufacturer, model, OS version, and availability.
    
    For more information, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_appfactory_user_guide/Content/Configuring_Device_Pools.html).
    
*   **SonarQube Integration with Iris**
    
    From Volt MX Foundry V9 SP1, you can integrate your projects with the SonarQube server to run quality analysis on the codebase of your Iris projects.
    
    For more information, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_appfactory_user_guide/Content/Project_Settings.html).
    
*   **Added support to add Sonar token as credentials for projects.**
    
    For more information, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_appfactory_user_guide/Content/Working_with_AppFactory.html).
    
*   **Added support to import, build, and export the Java assets**
    
    From Volt MX Foundry V9 SP1, you can import any version of your Foundry applications and their custom Java code from source control, compile them, bundle them, and deploy them to your target environment.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_appfactory_user_guide/Content/BuildingFoundryApp.html).
    
*   **Added support for app versioning in Foundry App Configuration.**
    
    For more information, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_appfactory_user_guide/Content/Working_with_AppFactory.html).
    
*   **Added support to run CustomHooks for Foundry jobs.**
    
    For more information, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_appfactory_user_guide/Content/CustomHooksFoundry.html).
