                           

Volt MX  Foundry V8 Service Pack 4 Fix Pack 3 (June FP)
==================================================

In this release, features were modified to provide an enhanced experience on Volt MX Foundry. The following are the new features introduced, and enhancements added.

*   [New Features](#new-features)
*   [Enhancements](#enhancements)

New Features
------------

### Volt MX Enterprise App Store

*   A new iOS and Android app for accessing applications published to your Enterprise App Store (EAS) has been introduced. For more information on this feature, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/EAS_NativeApp_Walk-through.md).
*   Users can now unpublish an app from EAS using Volt MX Iris console. For more information on this feature, click [here](../../../../Iris/iris_user_guide/Content/EAS.md#Unpublish).

### Volt MX VoltMX App – Reports & Analytics

*   Manage your Volt MX Foundry accounts and access reports using the Volt MX VoltMX App. For more information on this feature, click [here](../../../../Iris/iris_app_viewer/Content/ReportsAndMetrics.md).

Enhancements
------------

### Console

*   Support to reconfigure and publish the connection parameters related to Object Services have been added. For more information on this feature, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/ServiceReconfig.md).
*   You can use hyphens and underscores in the Service name to improve the readability of your API endpoints.
*   You can import and export service endpoint configurations from the Volt MX Foundry console or the command line using the MFCLI tool. This feature allows users to automate the deploying of endpoint configurations across different environments. For more information on this feature, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/ServiceConfigProfile.md).
*   The ability to configure Response Output parameters in the Integration Services has been enhanced to have the same name for record(s)/collection(s). The collectionID/recordID columns have been changed from text boxes to lists for the easy modification of Service parameters.

### Integration Server

*   The Service Manager API has been enhanced to support the Identity filter. For more information on this feature, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/Custom_Code_for_Invoking_Integration_from_pre-post-java.md).
*   The usability of Service list screens in App Services Admin console has been enhanced.
*   For child services, you can send Custom metrics from Server-side custom code (for example: Send Custom metrics from an Integration Service invoked as part of an Orchestration Service). For more information on this feature, click [here](../../../../Foundry/custom_metrics_and_reports/Content/CustomReports.md#Creating2).

### Volt MX Enterprise App Store

*   Support for publishing Web apps to EAS has been added. For more information on this feature, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/EnterpriseAppStore.md#publishing-client-binaries-to-app-server-from-foundry).

### Offline Objects and SDK

*   Enhancements have been made to support data synchronization while an app is running in the background. This feature is a workaround for the new background restrictions imposed by iOS and Android. For more information on this feature, click [here](../../../../Foundry/offline_objects_gettingstarted/Content/Background_Sync.md).
*   Support for upload cache for the Web platform has been added for Offline Objects. For more information on this feature, click [here](../../../../Foundry/offline_objects_gettingstarted/Content/offline_objects_server.md).
*   Support for SSO (Single Sign-On) has been added across Web apps from the same domain. For more information on this feature, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/Overview_AppSSO.HTM).

### Engagement

*   The Fetch All Messages API has been enhanced to include two additional filters, that are: status and lastUpdatedDate. For more information on this feature, click [here](../../../../Foundry/engagement_api_guide/Content/Push_Message_APIs/Fetch_All_Messages_from_VoltMX_MobileFoundry_Messaging.md).
*   Performance improvements have been made in Push message processing, Push request cancellation, and the Subscription API.
*   Miscellaneous bug fixes have been made and overall stability has been ensured.
