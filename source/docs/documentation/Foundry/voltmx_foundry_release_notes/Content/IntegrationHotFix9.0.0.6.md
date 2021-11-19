---
layout: "documentation"
category: "voltmx_foundry_release_notes"
---
                           

Volt MX  Foundry Integration Services Hotfix 9.0.0.6
==================================================

Fixed Issues
------------

*   Fixed an issue with the sending of Engagement emails from the Volt MX Foundry Integration and Workflow modules.
*   Enhanced the Offline Objects SQL server timestamp column to accept larger values to fix a runtime issue.
*   Volt MX Foundry did not give a proper back end response when the Swagger Adapter failed with a 404 error. Fixed the issue in this build.

Upgrade Instructions:

*   **For Cloud**: Not applicable.  
    
*   **For On-Premises**:  
    1.  Download Volt MX Foundry 9.0.0.6 Integration Server artifacts from  
        [mf-integrationserver-9.0.0.6.zip](../Content/V9.0.x_V9.1.x_NotSupported.html)
    <!-- 1.  Download Volt MX Foundry 9.0.0.6 Integration Server artifacts from  
        [mf-integrationserver-9.0.0.6.zip](http://download.voltmx.com/onpremise/mobilefoundry/server/9.0.0.6/mf-integrationserver-9.0.0.6.zip) -->
    2.  Extract the mf-integrationserver-9.0.0.6.zip, you will find the following WAR files in the `middleware` folder:
        *   admin.war
        *   services.war
        *   middleware.war
        *   apps.war
    3.  Take a backup of the existing war files and replace them with the downloaded war files in your Web (or) Application Server.
    4.  Update the middleware plugins in Iris.
    5.  Restart the server.
