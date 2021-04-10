---
layout: "documentation"
category: "voltmx_foundry_release_notes"
---
                           

Volt MX  Foundry Integration Services Hotfix 9.1.0.4
==================================================

Fixed Issues
------------

*   Fixed an issue due to which empty spaces were trimmed in a backend response. Backend responses will now include empty space if they have any.
*   Fixed an issue due to which if a charset is present in the application/json content type and a special character is present in the payload then the data gets encoded before being send to the backend.
*   Fixed an issue with the distributed session where backend cookies were not being sent in subsequent calls.
*   Enhanced Foundry performance while using Redis cache as cache provider by compressing/decompressing data while storing/retrieving a large payload.

Upgrade Instructions:

*   **For Cloud**: Raise a cloud upgrade request.
*   **For On-Premises**:  
       Follow these steps:
    1.  Download Volt MX Foundry 9.1.0.4 Integration Server artifacts from  
        [mf-integrationserver-9.1.0.4.zip](http://download.voltmx.com/onpremise/mobilefoundry/server/9.1.0.4/mf-integrationserver-9.1.0.4.zip)
    2.  Extract the mf-integrationserver-9.1.0.4.zip, you will find the following WAR files in the `middleware` folder:
        *   admin.war
        *   services.war
        *   middleware.war
        *   apps.war
    3.  Take a backup of the existing war files and replace them with the downloaded war files in your Web (or) Application Server.
    4.  Update the middleware plugins in Iris.
    5.  Restart the server.
