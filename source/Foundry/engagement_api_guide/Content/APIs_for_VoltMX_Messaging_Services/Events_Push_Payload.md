                           

Events Push Payload
===================

This API is used to send event messages.

Content Format
--------------

*   **XML**: API Payload in XML file format.
*   **JSON**: API Payload in JSON file format.

URL
---

```
http://<host or ip>:<port>/vpns/service/eventpushmessage
```

Request Method
--------------

HTTP POST

Content\_Type
-------------

Based on the content format, the payload's request header includes "Content-Type" for:

*   **XML** is "text/xml;charset=UTF-8"
*   **JSON** is "application/json;charset=UTF-8"

Sample Payload
--------------

### XML

```
<?xml version='1.0' encoding='UTF-8'?>
<event>
  <eventid>1</eventid>
  <eventNamePairs>
  </eventNamePairs>
  <message>
    <subscribers>
      <subscriber ksid="xxxx"/>
    </subscribers>
    <content>
      <mimeType>text/plain</mimeType>
      <priorityService>false</priorityService>
    </content>
  </message>
</event>

```

### JSON

```
{
 "event": {
  "message": {
   "content": {
    "priorityService": "false",
    "mimeType": "text/plain"
   },
   "subscribers": {
    "subscriber": [
     {
      "ksid": "xxxx"
     }
    ]
   }
  },
  "eventNamePairs": {
   "key": []
  },
  "eventid": "1"
 }
}
```

Sample Responses
----------------

### XML

```
1\. Success Response:
<messageResponse><code>200</code><description>Request Queued. </description><messages><message  msgId="xxxx" ></message></messages></messageResponse>

2. Invalid Subscribers:
<messageResponse><code>200</code><description>Request Queued. </description><invalidSubscribers><subscriber ksid=xxxx></subscriber><subscriber ksid=xxxx></subscriber></invalidSubscribers><messages><message  msgId="-1" ></message></messages></messageResponse>

3. Invalid request format:
<messageResponse><code>400</code><description>Invalid request format.</description><messages></messages></messageResponse>

4. If Associated Application is Invalid: 
<messageResponse><code>404</code><description>Invalid Volt MX Application ID associated with Event.</description><messages></messages></messageResponse>

5. If Associated Applications is Not Published: 
<messageResponse><code>405</code><description>Associated Application is not Published.</description><messages></messages></messageResponse>

6. Invalid Event: 
<messageResponse><code>406</code><description>Invalid Volt MX Event ID. </description><messages></messages></messageResponse>

7. If Event Not Published: 
<messageResponse><code>407</code><description>Event is not Published.</description><messages></messages></messageResponse>

8. Server Error: 
<messageResponse><code>500</code><description>Server failed to process the request.</description><messages></messages></messageResponse> 
```

### JSON

```
1.SuccessResponse: {
  "messageResponse": {
    "invalidSubscribers": [
      
    ],
    "description": "Request Queued. ",
    "code": 200,
    "messages": [
      {
        "msgId": xxxx
      }
    ]
  }
}2.InvalidSubscribers: {
  "messageResponse": {
    "invalidSubscribers": [
      {
        "ufid": ,
        "ksid": xxxx,
        "deviceId": 
      },
      {
        "ufid": ,
        "ksid": xxxx,
        "deviceId": 
      }
    ],
    "description": "Request Queued. ",
    "code": 200,
    "messages": [
      {
        "msgId": xxxx
      }
    ]
  }
}3.Invalidrequestformat: {
  "messageResponse": {
    "invalidSubscribers": [
      
    ],
    "description": "Invalid request format. ",
    "code": 400,
    "messages": [
      
    ]
  }
}4.IfAssociatedApplicationisInvalid: {
  "messageResponse": {
    "invalidSubscribers": [
      
    ],
    "description": "Invalid Volt MX Application ID associated with Event.",
    "code": 404,
    "messages": [
      
    ]
  }
}5.IfAssociatedApplicationsisNotPublished: {
  "messageResponse": {
    "invalidSubscribers": [
      
    ],
    "description": "Associated Application is not Published.",
    "code": 405,
    "messages": [
      
    ]
  }
}6.InvalidEvent: {
  "messageResponse": {
    "invalidSubscribers": [
      
    ],
    "description": "Invalid Volt MX Event ID. ",
    "code": 406,
    "messages": [
      
    ]
  }
}7.IfEventNotPublished: {
  "messageResponse": {
    "invalidSubscribers": [
      
    ],
    "description": "Event is not Published.",
    "code": 407,
    "messages": [
      
    ]
  }
}8.ServerError: {
  "500": "Server failed to process the request."
}
```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| 200 | Request Queued. |
| 400 | Invalid request format. |
| 405 | Associated Application is not Published. |
| 406 | Invalid Volt MX Event ID. |
| 407 | Event is not Published. |
| 500 | Server failed to process the request. |
