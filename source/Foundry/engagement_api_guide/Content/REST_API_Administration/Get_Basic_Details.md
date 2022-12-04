                           


Get Basic Details
=================

The **Get Basic Details** API returns all basic configuration details.

URL
---

The HTTP URL for **Get Basic Details** API is:

```
http://<host>:<port>/api/v1/admin
```

This service implements Gateway Filter for Authentication/Basic Authentication to authenticate access of the service by a user.

Method
------

GET

Output Parameters
-----------------

The following fields are output parameters:

  
| Output Parameter | Type | Description |
| --- | --- | --- |
| id | long | ID of the push notification |
| retriesPerNotification | long | Number of retries for each notification |
| reconciliationKey | string | Reconciliation key |
| campaignExecutionIntervel | long | Campaign execution interval |
| preferredTimeZone | string | Time zone |
| lastModifiedBy | string | User name showing who last modified the general settings |
| lastModifiedDateStr | string | Date and time at which the general settings were last modified |
| createdDateStr | string | Date and time at which the general settings were created |
| createdBy | string | A user name showing who created the general settings |
| corsRequired | boolean | Whether the VMS system user wants to enable the CORS settings |
| allowedCorsDomains | string | Allowed domains to allow CORS settings, e.g. \*.google.com |
| apiAuthToken | string | Auth token to be used for all device-side calls to the VMS server |
| basicAuthRequired | boolean | Whether basic authorization is required |

Sample Response
---------------

```
{
  "id" : 1,
  "retriesPerNotification" : 8,
  "reconciliationKey" : "Email",
  "campaignExecutionIntervel" : 4,
  "preferredTimeZone" : "(GMT+05:30) Chennai, Mumbai, New Delhi",
  "lastModifiedBy" : "admin",
  "lastModifiedDateStr" : "05/26/2016 06:00:38 PM IST",
  "createdDateStr" : "05/26/2016 03:09:10 PM IST",
  "createdBy" : "admin",
  "corsRequired" : true,
  "allowedCorsDomains" : "*",
  "apiAuthToken" : "",
  "basicAuthRequired" : false,
  "identityTokenRefId" : 0,
  "identityAuth" : false
}
```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Array of basic details |
| Status 400 | Invalid request format |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |
