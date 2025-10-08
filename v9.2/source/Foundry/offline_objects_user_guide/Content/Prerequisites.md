
Prerequisites
=============

For the Offline Objects feature to work, meet the following prerequisites:

*   Install **VoltMX Iris** <!---  [VoltMX Iris](http://cc2.hcl.net/ciartifacts/IrisStarter/). -->
*   For Windows 10 (Store & Kiosk apps) platform, install the following software:
    
    *   Windows 10 Fall Creators Update (10.0 Build 16299) or above
    
    *   .Net Framework version should be 4.6.1 or above
*   For a Web platform, use a browser that supports ES5.
*   Enable the Offline Objects property in Volt MX Foundry and Volt MX Iris (for Web channels).
*   Name of the objects across all object services linked to the Foundry app must be unique.
*   Define at least one primary key for every object.
*   The back end must return full record in response to upload and download requests from the client, partial records are not supported. If the back end cannot return full record, add logic to return full record in post processor.
*   In the case of Service Driven Objects, map all object operations to the corresponding Integration service operations.
*   Cross-check for the inconsistency of referenced field names and data types across objects.
