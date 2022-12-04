                           

Unpublish Campaign
==================

The 'Unpublish Campaign' service unpublishes a campaign that is added into Volt MX Foundry Messaging.This service accepts Campaign ID as input parameters to unpublish a campaign.

Use Case
--------

The user can call the service from an application and fetch the input parameters.Once the input parameters are verified, user can unpublish the campaign.

This service implements ‘Gateway Filter for Authentication’ to authenticate access of the service by a user.

URL
---

The HTTP URL for 'Unpublish Campaign' service is:

```
http://<localhost>:<8080>/api/v1/campaigns/<id>/unpublish
```

Method
------

POST

Header
------

The payload's request header includes "Content-Type" for JSON as “application/json;charset=UTF-8"

Input Parameters
----------------

Following fields are the input parameters:

  
| Input Parameter | Type | Description |
| --- | --- | --- |
| Campaign ID (mandatory) | int | The unique id  assigned to the campaign.. |

  
To pass the input parameters, follow these steps:

1.  Type the service URL in your application.
    
    For ‘POST’ method, the input parameters are sent as a block of data.
    

Sample Responses
----------------

### JSON

```
// The request has succeeded.  
{  
"message" : "Campaign unpublished successfully",  
"id" : "campaignId"  
}  

```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Status changed successfully. |
| Status 400 | Invalid Request Format |
| Status 401 | Unauthorized request. |
| Status 500 | Server Failure to process request. |
