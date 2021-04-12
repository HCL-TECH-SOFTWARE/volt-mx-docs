---
layout: "documentation"
category: "voltmx_foundry_release_notes"
---
                           

Volt MX  Foundry Integration Services Hotfix 9.0.0.4
==================================================

Fixed Issues
------------

*   Fixed an out of memory issue on the Integration Server. The ehcache elements do not evict the memory which leads to an out of memory error.
*   Fixed an out of memory issue caused by the admin.war deployment. The admin.war deployment failed on startup due to the publishing of large services because of a query execution on startup. A count check query has been added to avoid execution of the concerned query when not necessary.
*   Fixed an issue with encode.PII. Initially, an empty kuid returned a "0" (zero) to metrics when encode.PII was enabled. Now, the value of kuid is passed as an empty String to metrics when encode.PII is enabled.
*   The jsonToResult conversion did not parse arrays and maps. Fixed the issue in this build.
*   Fixed an issue with trace logs. Initially, when the Log Level is set to Debug for an IP address, the trace logs were being recorded, by default. Now, the trace logs will be recorded only when they are enabled in the Admin Console.

Upgrade Instructions:

*   **For Cloud**: Raise a cloud upgrade request.
*   **For On-Premises**:  
       Follow these steps:
    1.  Download Volt MX Foundry 9.0.0.4 Integration Server artifacts from  
        [mf-integrationserver-9.0.0.4.zip](http://download.voltmx.com/onpremise/mobilefoundry/server/9.0.0.4/mf-integrationserver-9.0.0.4.zip)
    2.  Extract the mf-integrationserver-9.0.0.4.zip, you will find the following WAR files in the `middleware` folder:
        *   admin.war
        *   services.war
        *   middleware.war
        *   apps.war
    3.  Take a backup of the existing war files and replace them with the downloaded war files in your Web (or) Application Server.
    4.  Update the middleware plugins in Iris.
    5.  Restart the server.

> **_Note:_** Volt MX Foundry 9.0.0.1 to Volt MX Foundry 9.0.0.3 versions are incremental feature releases to Cloud.
