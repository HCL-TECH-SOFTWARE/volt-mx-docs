                           

Modify Subscriber
=================

The **Modify Subscriber** API modifies a subscriber's details.

URL
---

The HTTP URL for Modify Subscriber API is:

```
http://<host>:<port>/api/v1/subscribers/<id>/modify
```

> **_Note:_** Here ID refers to the KSID of the subscriber.

Method
------

POST

Header
------

The payload's request header includes Content-Type for JSON as application/json;charset=UTF-8.

Input Parameters
----------------

Following fields are the input parameters:

  
| Input Parameter | Type | Description |
| --- | --- | --- |
| subscriptionService | string | Includes sidappid, ufid, os type and device id |
| sid | int | The security ID for the subscriber |
| appId | string | The unique ID assigned to an app |
| ufid | string | Email ID of the subscriber. |
| osType | string | Supported operating system. |
| deviceId | int | Unique ID assigned to a device. |
| deviceName | string | Name of the device |

Sample Request
--------------
