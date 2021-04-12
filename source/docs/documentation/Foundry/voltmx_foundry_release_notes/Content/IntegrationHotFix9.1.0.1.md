---
layout: "documentation"
category: "voltmx_foundry_release_notes"
---
                           

Volt MX  Foundry Integration Services Hotfix 9.1.0.1
==================================================

Fixed Issues
------------

*   Fixed an issue to avoid failure in logout by providing an API in Middleware to clear the Session Id created along with Identity logout in Volt MX SDK. This new API is invoked by Volt MX SDK for the logout call to clear the shared Session Id between Middleware and SDK.
*   Fixed an issue with the execution of queries in MSSQL RDBMS adapter when the table names are keywords like user, transaction, etc.
*   Fixed an issue where the loading of MVL initialization property by moving it to the startup of the runtime.  
    

Upgrade Instructions:

*   **For Cloud**: Raise a cloud upgrade request.
*   **For On-Premises**:  
       Follow these steps:
    1.  Download Volt MX Foundry 9.1.0.1 Integration Server artifacts from  
        [mf-integrationserver-9.1.0.1.zip](http://download.voltmx.com/onpremise/mobilefoundry/server/9.1.0.1/mf-integrationserver-9.1.0.1.zip)
    2.  Extract the mf-integrationserver-9.1.0.1.zip, you will find the following WAR files in the `middleware` folder:
        *   admin.war
        *   services.war
        *   middleware.war
        *   apps.war
    3.  Take a backup of the existing war files and replace them with the downloaded war files in your Web (or) Application Server.
    4.  Update the middleware plugins in Iris.
    5.  Restart the server.
*   **For Azure**
    *   Download and use the 9.1.0.2 docker image instance. You must raise a request to upgrade to this version.

Upgrade Instructions for SDK fix:

*   Download and use the SDK plug-in version **V9 ServicePack1 Fixpack 5** for this fix.

> **_Note:_** To avoid the failure in logout mentioned in the first issue, it is mandatory to consume the Middleware Hotfix and SDK plug-in.
