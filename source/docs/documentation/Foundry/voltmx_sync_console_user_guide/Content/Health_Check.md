---
layout: "documentation"
category: "voltmx_sync_console_user_guide"
---
                           


Checking Health of Volt MX Foundry Sync Server
==========================================

The Health check view denotes the connection properties for Volt MX Foundry Sync Server in a cloud environment. It enables you to look at the health of the Volt MX Foundry Sync Server.

The following are the various connection properties that denote the health of a Volt MX Foundry Sync Server:

*   [Cloud Environment Identification](#cloud-environment-identification)
*   [Environment Information](#environment-identification)
*   [Access to Sync DB](#access-to-sync-db)
*   [Access to Accounts API](#access-to-accounts-api)
*   [Access to Reporting Queue](#access-to-reporting-queue)
*   [Security Credentials](#security-credentials)

Cloud Environment Identification
--------------------------------

Cloud Environment Identification parameter indicates whether the Volt MX Foundry Sync server runs in cloud environment or not. If the status is `Success`, it indicates that the Volt MX Foundry Sync Server runs in cloud environment.

Environment Identification
--------------------------

If the Environment Identification parameter status is `Success`, it indicates that the environment related parameters are present.

Access to Sync DB
-----------------

If the Access to Sync DB parameter status is `Success`, it indicates that the Volt MX Foundry Sync Server has access to SyncConsole database.

Access to Accounts API
----------------------

If the Access to Accounts API parameter status is `Success`, it has proper Volt MX accounts base URL  and it is able to connect.

Access to Reporting Queue
-------------------------

If the Access to Reporting Queue parameter status is `Success`, it indicates that the environment has proper reporting Queue URL and it is able to connect.

Security Credentials
--------------------

If the Security Credentials parameter status is `Success`, it indicates that the Volt MX Foundry Sync Server has the cloud security credentials.

**JSON Format Support**

The health check has JSON Format Support. To get the health check status on the JSON Format Support, you have to call the health check with output URL parameters as shown:

/healthcheck?output=json
