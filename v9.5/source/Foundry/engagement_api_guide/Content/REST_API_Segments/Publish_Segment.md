                           

Publish Segment
===============

The 'Publish Segment' service publishes a segment that is added into Volt MX FoundryMessaging.The service accepts Segment ID as an input parameters to publish a segment.

Use Case
--------

Only Segments with status as published are used for campaigns.The user can call the service from an application and fetch the input parameters. Once the input parameters are verified, user can publish the segment.

This service implements ‘Gateway Filter for Authentication’ to authenticate access of the service by a user.

URL
---

The HTTP URL for 'Publish Segment' service is:

```
http://<host>:<port>/api/v1/segments/<id>/publish
```

Method
------

POST

Content Type
------------

The payload's request header includes "Content-Type" for JSON as “application/json;charset=UTF-8".

Input Parameters
----------------

Following fields are the input parameters:

  
| Input Parameter | Type | Description |
| --- | --- | --- |
| Segment ID (mandatory) | int | The unique id assigned to a segment. |

Sample Responses
----------------

```
// The request has succeeded.  
{  
   "message" : "Segment published successfully",  
   "id" : "segmentId"  
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
