                           


Fetch All SMS API with Audience ID
==================================

The **Fetch All SMS API with Audience ID** API accepts the audience ID as an input parameter and fetches all the SMS message details.

URL
---

The HTTP URL for Fetch All SMS API with Audience ID API is:

```
http://<host or ip>:<port>/api/v1/messages/sms/fetch
```

> **_Note:_** Fetch All SMS API with Audience ID API does not require authentication. It is not a secure API

Method
------

POST

Header
------

The payload's request header includes Content-Type as application/json;charset=UTF-8.

Input Parameters
----------------

The following fields are input parameters:

  
| Input Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| Audience ID | Yes | long | The unique ID assigned to an audience member |
| startElement | Optional | long | Start index of the element |
| elementsPerPage | Optional | long | Number of elements for a page |

Sample Request
--------------

```
{"startElement": "0", "elementsPerPage": "10","audienceId": "2"}
```

Output Parameters
-----------------

The following fields are output parameters:

  
| Output Parameter | Level-Two | Type | Description |
| --- | --- | --- | --- |
| totalMessages |   | long | Total number of SMS messages |
| openedMessages |   | long | Total number of opened SMS messages |
| messages |   |   | An array of messages objects as submitted or cancelled |
|   | fetchId | long | Unique ID assigned to a SMS message |
|   | content | string | SMS message text or SMS Voice Message |
|   | status | string | Current SMS message status as |
| submittedMessages |   | long | Total number of submitted SMS messages |

Sample Response
---------------

```
{
  "totalMessages": 4,
  "openedMessages": 0,
  "messages": [
    {
      "fetchId": "6787084818838978497",
      "content": "LathaGanesh",
      "status": "Submitted"
    },
    {
      "fetchId": "6790833484766511073",
      "content": "Latha",
      "status": "Submitted"
    },
    {
      "fetchId": "6790832870844132846",
      "content": " Latha Ganesh eBay summer sale 2016",
      "status": "Submitted"
    },
    {
      "fetchId": "6790758891557814220",
      "content": "Latha Ganesh eBay summer sale 2016",
      "status": "Submitted"
    }
  ],
  "submittedMessages": 4
}
```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | SMS details |
| Status 400 | Audience ID is missing |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |
