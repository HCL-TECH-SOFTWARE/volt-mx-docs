---
layout: "documentation"
category: "voltmx_foundry_release_notes"
---
                           

Volt MX  Foundry Integration Services Hotfix 9.1.0.3
==================================================

Fixed Issues
------------

*   Fixed an issue with the returning of a response by an SDO Object service when the primary key of the object is present in the response.
*   Fixed an issue with the execution of a Workflow service task when any preceding task fails and is manually retried.
*   Fixed an issue with the task of updating the Time Zone for Custom Reports.
*   Enhanced the Offline Objects SQL server timestamp column to accept larger values to fix a runtime issue.
*   Volt MX Foundry did not give a proper back end response when the Swagger Adapter failed with a 404 error. Fixed the issue in this build.

Upgrade Instructions:

*   **For Cloud**: Raise a cloud upgrade request.
*   **For On-Premises**:  
       Follow these steps:
    1.  Download Volt MX Foundry 9.1.0.3 Integration Server artifacts from  
        [mf-integrationserver-9.1.0.3.zip](http://download.voltmx.com/onpremise/mobilefoundry/server/9.1.0.3/mf-integrationserver-9.1.0.3.zip)
    2.  Extract the mf-integrationserver-9.1.0.3.zip, you will find the following WAR files in the `middleware` folder:
        *   admin.war
        *   services.war
        *   middleware.war
        *   apps.war
    3.  Take a backup of the existing war files and replace them with the downloaded war files in your Web (or) Application Server.
    4.  Update the middleware plugins in Iris.
    5.  Restart the server.
