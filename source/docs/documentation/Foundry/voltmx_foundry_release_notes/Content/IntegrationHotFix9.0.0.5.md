---
layout: "documentation"
category: "voltmx_foundry_release_notes"
---
                           

Volt MX  Foundry Integration Services Hotfix 9.0.0.5
==================================================

Fixed Issues
------------

*   Enhanced the Workflow log history to display the primary key of the linked object.  
    Enhanced the Loggers to capture the instanceId and Name of a Workflow.
*   Enhanced service monitoring to capture 90 and 95 percentile data in the distribution of service calls per minute. The data can be exported in a CSV file.
*   Enhanced service monitoring to store fully qualified names of the parent services.  
    If the parent service is an Integration service or an Orchestration service, the name is stored as the service name with the operation name.  
    If the parent service is an Object service, the name is stored as the service name with the object name and the verb.
*   Fixed an issue where custom verbs would not get logged if the name of the custom verb was longer than 38 characters.

Upgrade Instructions:

*   **For Cloud**:  
    Raise a cloud upgrade request.
*   **For On-Premises**:  
    Upgrade to the V9 HF3 (9.0.0.3) installer.
