                           

Get All Permissions by Pagination
=================================

The 'Get All Permission by Pagination' service accepts ‘Start’ and ‘pageSize’ as input parameters and returns a list of all the permissions.

URL
---

The HTTP URL for 'Get All Permission By pagination' service is:

```
http://<host or ip>:<port>/api/v1/accessmgmt/permissions?start=0&pageSize=10
```

Method
------

GET

Header
------

The payload's request header includes "Content-Type" for JSON as “application/json;charset=UTF-8".

Output Parameters
-----------------

This method accepts a request with the following fields:

  
| Output Parameter | Type | Description |
| --- | --- | --- |
| start | int | Start index of the Element.. |
| pageSize | int | Number of elements for a page. |

Sample Response
---------------

```
// The request has succeeded.{
  "total": 15,
  "permissions": {
    "1": "DASHBOARD_ALL",
    "2": "APPLICATIONS_ALL",
    "3": "SUBSCRIBERS_ALL",
    "4": "CAMPAIGNS_ALL",
    "5": "CAMPAIGNS_EXECUTE",
    "6": "CAMPAIGNS_TERMINATE",
    "7": "CAMPAIGNS_PUBLISH",
    "8": "EVENTS_ALL",
    "9": "EVENTS_PUBLISH",
    "10": "AUDIENCE_MEMBERS_ALL"
  }
}
```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | JSON Array of permissions |
| Status 401 | Unauthorized request |
| Status 500 | Server Failure to process request |
