---
layout: "documentation"
category: "offline_objects_user_guide"
---

Troubleshooting
===============

*   Enable [trace logs]({{ site.baseurl }}/docs/documentation/Foundry/vmf_integrationservice_admin_console_userguide/Content/Trace_Logs.html) from the Foundry Admin console to capture requests and responses to troubleshoot the issues faster.
    *   These logs help in analyzing the request header and payload.
    *   Responses from backend
*   Use client logs for debugging client-side issues.
    
    *   Client logs can be managed remotely.
    
    *   Use [Log Level by Client Filter]({{ site.baseurl }}/docs/documentation/Foundry/vmf_integrationservice_admin_console_userguide/Content/Standard_Logs.html)
*   Failure to perform setup on the device.
    
    *   Ensure all the [prerequisites](Prerequisites.html#Prerequisites) are implemented.
    
    *   Network connectivity is mandatory while performing the first-time setup or resets operation.
*   Missing rowid in upload response due to one of the following reasons.
    *   The backend does not return a response for every record in the uploaded payload.
    *   The backend sends extra records in the response that were not part of the uploaded payload.
    *   Backend uploads expected responses for only those records that are uploaded.
*   Partial Records
    *   The client always expects a full record in upload response and download flows. If backend sends a partial record to middleware and you want to convert it to a full record, define a mapper or write a post-processor code to copy missing fields from the request into the response.
*   Mandatory fields (not Null) missing in CRUD operations
    *   Ensure you supply all the mandatory fields to CRUD operations including the primary keys.
