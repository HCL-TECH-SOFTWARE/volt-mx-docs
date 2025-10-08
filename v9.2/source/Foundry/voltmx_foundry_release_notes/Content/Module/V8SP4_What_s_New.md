                          

What's New in V8 SP4
====================

Volt MX  Enterprise App Store
-------------------------

*   With Volt MX Enterprise AppStore (EAS), you can securely and easily distribute your apps to the customers. All SP4 environments are available with support for Enterprise App Store.  
    
    *   You can now deploy apps to EAS directly from your Volt MX Iris Starter installation.
    *   The Enterprise AppStore Client app is accessible via your Mobile and Tablet web browser.
    *   You can choose to authenticate your App Store using VoltMX’s built-in user repository or use any Foundry Identity service to act as an authentication service.
    
    For more information on this feature, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/EnterpriseAppStore.md).

Service Monitor
---------------

*   You can now send alerts via email by using the Service Monitor feature when the performance of service degrades in terms of either percentage of errors, count of errors, or response time to a custom set of users. Different thresholds can be set for sending warnings and critical alert emails. Admins can choose the list of users and frequency for sending alerts.

Enhancing User Store for Adding Access Levels and Making it an Independent Authorization Source
-----------------------------------------------------------------------------------------------

*   With the New User Repository Identity service, you can create an authentication service in Volt MX Foundry. You can create multiple instances of the service, as required.  
    For more information on this feature, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/UserRepositoryIdentityService.md).

SAP JCo Connector
-----------------

*   SAP Java Connector has been added in Volt MX Foundry. You can now connect your applications to your SAP back ends without installing Volt MX SAP plugin in your SAP environment.  
    For more information on this feature, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/SAP_JCO.md).

Added Ability to send PWA notifications through Engagement Console
------------------------------------------------------------------

*   Provided support for Progressive Web App notifications on Desktop Web and Android platforms by using notification mechanism such as Campaigns, Events, and Adhoc pushes via the Engagement Console and APIs. A new platform **Web** has been added that takes an **FCM Server Key** to send notifications to progressive web applications.  
    For more Information on this feature, click [here](../../../../Foundry/vms_console_user_guide/Content/Apps/Web.md).

Testing an Orchestration Services
---------------------------------

*   You can now test an Orchestration service operation from Volt MX Foundry Console. This helps you to view the details of various stages of the service execution for better debugging. The test results are displayed in the **Test Results** window. The **Test Results** window displays the following two tabs:
    
    *   **Log tab**: Navigate to an individual Integration or Objects service, and view their input payloads and response output.
    *   **Test tab**: Pass input values to the request payload for the Orchestration service.
    
    For more information on this feature, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/Test_an_Orechestration_Service_Operation.md).

Audit Logs
----------

*   You can now audit all the changes made to applications, services, and users in Volt MX Foundry Console.  
    For more information on this feature, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/Settings_Cloud.md#audit-logs-cloud).

SSL Certificates for Multi-tenant Environments
----------------------------------------------

*   The feature to upload the custom SSL certificates has been extended for all types of Server environments.

Ability to Store Sample Data as part of a Service using Storage
---------------------------------------------------------------

*   You can now import sample data to Storage Object Services to populate your Object Service with a sample data set. This allows you to push the seed data into your service from Volt MX Foundry console, instead of navigating to the App Server.  
    For more information on this feature, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/ObjectsServices/Storage_ObjectServices.md).

Mock JSON adapter (built using Stub services) support for stubbing a service
----------------------------------------------------------------------------

*   Added support for Mock JSON as a new adapter type for Integration Services. This enables you to build front-end applications before the back end is available.  
    For more information on this feature, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/MockData_Adapter.md).

Automatic Field Level Encryption for Object Services
----------------------------------------------------

*   Ability to add field-level metadata in objects in Object Service has been added. The metadata can be accessed from the client app of Object Model via custom functions that are registered with generated models to run various custom logic such as encryption and conversion.

Schedulers support for Volt MX App Factory Foundry App Configurations
-----------------------------------------------------------------

*   Schedulers support has been added in App Factory to migrate Volt MX Foundry app configurations from one environment to another.  
    For more information on this feature, click [here](../../../../Foundry/voltmx_appfactory_user_guide/Content/VoltMXFoundryTriggers.md).

Offline Objects support for Windows 10 apps
-------------------------------------------

*   Offline Objects supports Windows 10 applications developed using Volt MX Iris across all channels - Mobile, Tablet, and Kiosk.

Customize the App Factory Run Tests using Custom Test Environment Settings.
---------------------------------------------------------------------------

*   In the Custom Test Environment, tests are run based on your TestNG configuration. You can use your TestNG annotations and take care of ordering of tests by using your Testng.xml file. For more information on how to configure your Custom Environment Build, click [here](../../../../Foundry/voltmx_appfactory_user_guide/Content/CustomTestEnvRun_RawMode.md).

Control the Appium version used to test apps
--------------------------------------------

*   App Factory allows you to choose the latest versions of Appium for running your tests. Use Appium versions from 1.7.2 onwards to meet your testing needs.  
    For more information on this feature, click [here](../../../../Foundry/voltmx_appfactory_user_guide/Content/Configuration.md#Appium).

Streamline building apps on iOS and Android by using Cloud Build.
-----------------------------------------------------------------

*   Build your apps in the cloud environment directly from Iris without installing local SDKs for iOS and Android. The cloud build process allows you to quickly build binaries without installing additional build tools within Iris.

Push Processing Core Enhancements
---------------------------------

*   Enhancements have been made to support much higher Push throughput for both Android and iOS.

Analytics
---------

*   You can now import and export custom reports and custom dashboards through MFCLI. This feature enables you to reuse custom reports and custom dashboards across various accounts.  
    For more information, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/Export_Import_Custom_Reports_Dashboards_MFCLI.md).
*   Added support to capture the performance data of individual services for components such as Integration, Orchestration, and Object Services.
*   You can now gauge the performance of your Offline Objects by using the **Object Service Performance Detail Report** and **Object Service Performance Report**.  
    You can aggregate these reports at different levels. For more information on this feature, click [here](../../../../Foundry/standard_metrics_reports_guide/Content/Offline_Objects_Reports.md).
