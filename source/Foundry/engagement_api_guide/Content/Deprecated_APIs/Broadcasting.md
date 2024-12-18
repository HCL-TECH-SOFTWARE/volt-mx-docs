                          

Broadcasting
============

Volt MX  Foundry Messaging provides flexibility to send push notifications to all active subscribers of an application with a single API request. You can send same notification to devices on multiple platforms.

URL
---

```
http://<hostname or ip>:<portnumber>/<contextroot>/message
```

Content\_Type
-------------

Based on the content format, the payload's request header includes "Content-Type" for:

*   **XML** is "text/xml;charset=UTF-8"
*   **JSON** is "application/json;charset=UTF-8"

### Method

HTTP POST

### Sample Payload

### XML

```
<?xml version='1.0' encoding='UTF-8'?>
<messageRequest appId="APPLICATION_ID">
  <global>
    <subscribers/>
    <platformSpecificProps/>
  </global>
  <messages>
    <message expiryTimestamp="0" overrideMessageId="0" refId="" startTimestamp="0" type="PUSH">
      <subscribers>
        **<subscriber allActive="true"/>**
      </subscribers>
      <platformSpecificProps>
      </platformSpecificProps>
      <content>
        <mimeType>text/plain</mimeType>
        <priorityService>false</priorityService>
        <data>PUSH_ MESSAGE</data>
      </content>
    </message>
  </messages>
</messageRequest>

```

### JSON

```
{
  "messageRequest": {
    "appId": "APPLICATIONID",
    "global": {
      
    },
    "messages": {
      "message": {
        "content": {
          "priorityService": "false",
          "data": "PUSH_MESSAGE",
          "mimeType": "text/plain"
        },
        "overrideMessageId": 0,
        "startTimestamp": 0,
        "expiryTimestamp": 0,
        "subscribers": {
          "subscriber": [
            {
              "allActive": "true"
            }
          ]
        },
        "platformSpecificProps": {
          
        },
        "type": "PUSH"
      }
    }
  }
}
```

> **_Note:_** All push notifications are sent using this API will be treated as “**priorityService: false**”.
