                           

Publish Campaign
================

The 'Publish Campaign' service publishes a campaign that is added into Volt MX Foundry Messaging. The service accepts Campaign ID as an input parameter to publish a campaign.

Use Case
--------

Only Campaigns as published are used for push notifications. The user can call the service from an application and fetch the input parameters. Once the input parameters are verified, user can publish the already added campaigns.

This service implements ‘Gateway Filter for Authentication’ to authenticate access of the service by a user.

URL
---

The HTTP URL for 'Publish Campaign' service is:

```
http://<localhost>:<8080>/api/v1/campaigns/<id>/publish
```

Method
------

POST

Header
------

The payload's request header includes "Content-Type" for JSON as “application/json;charset=UTF-8".

Input Parameters
----------------

Following fields are the input parameters:

  
| Input Parameter | Type | Description |
| --- | --- | --- |
| Campaign ID (Mandatory) | int | The unique id assigned to the campaign. |

  
To pass the input parameters, follow these steps:

1.  Type the service URL in your application.
    
    For ‘PATCH’ method, the input parameters are sent as a block of data.
    

Sample Responses
----------------

### JSON

```
 // The request has succeeded.  
{  
"message" : "Campaign published successfully",  
"id" : "campaignId"  
}  

```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Status changed successfully |
| Status 400 | Invalid Request Format |
| Status 401 | Unauthorized request |
| Status 500 | Server Failure to process request. |
