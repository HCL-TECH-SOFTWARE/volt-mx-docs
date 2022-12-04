                           


Status of Email Delivery
========================

The **Status of Email Delivery** API accepts the Request ID as an input parameter and returns the status of the mail delivery.

URL
---

The HTTP URL for **Status of Email Delivery** API is:

```
http://<host or ip>:<port>/api/v1/status/email/request/{requestId}
```

> **_Note:_** You can view email request ID under Status >Email Queue> Request ID.

Method
------

GET

Header
------

The payload's request header includes Content-Type as application/json;charset=UTF-8.

Input Parameters
----------------

The following fields are input parameters:

  
| Input Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| requestId | Yes | long | The unique request ID assigned to an email message |

Sample Response
---------------

If the request is in initial state:

```
{
   "total":2,
    "messages":[
      {
       "email":"vpnsauto2@gmail.com",
       "hasAttachments": true,
       "statusMessage":"Initial",
       "entryId":"5959220702409669553",
       "status":"Initial",
       "retrying":"false"
      },
      {
        "email":"vpnsauto1@gmail.com",
	 "hasAttachments": true,
        "statusMessage":"Initial",
        "entryId":"5959220702416518838",
        "status":"Initial",
        "retrying":"false"
      }
    ]
 }
```

If the request is in submitted state:

```
{
     "total":2,
     "messages":[
        {
          "email":"vpnsauto2@gmail.com",
	   "hasAttachments": true,
          "statusMessage":"Mail sent",
          "entryId":"5959220702409669553",
          "status":"Submitted",
          "retrying":"false"
         },
         {
          "email":"vpnsauto1@gmail.com",
	   "hasAttachments": true,
          "statusMessage":"Mail sent",
          "entryId":"5959220702416518838",
          "status":"Submitted",
          "retrying":"false"
         }
       ]
 }
```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Checked the status of xxx email entries of the given request ID |
| Status 400 | No messages found |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |
