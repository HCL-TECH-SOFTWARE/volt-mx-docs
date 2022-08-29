
# Send Rich Push (legacy)

The **Send Rich Push (legacy)** API sends a rich push message.

> **_Important:_** The Send Rich Push (legacy) API is maintained here to preserve backward compatibility. We encourage you to use [Send Rich Push](../Push_Message_APIs/Send_Rich_Push.md)

## URL

The HTTP URL for Send Rich Push (legacy) API is:

```
http://<host>:<port>/message

```

## Content Type

Based on the content format, the payload's request header Content-Type for:

- **XML** is text/xml;charset=UTF-8
- **JSON** is application/json;charset=UTF-8

## Method

POST

## Input Parameters

The following fields are input parameters:

| Input Parameter | Level- Two | Type   | Description                                                                                                                                              |
| --------------- | ---------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appId           |            | string | Application ID                                                                                                                                           |
| global          |            | array  | Global descriptors                                                                                                                                       |
| messages        |            | array  | Contains the message elements for each message                                                                                                           |
|                 | message    | array  | Contains the elements for a specific message, including: expiryTimestamp overrideMessageId startTimestamp type subscribers platformSpecificProps content |

## Sample Request

### XML

```
<?xml version="1.0" encoding="utf-8"?>
<messageRequest appId="PushTestApp">
<global>
<subscribers/>
<platformSpecificProps/>
</global>
<messages>
<message expiryTimestamp="0" overrideMessageId="0" refId="" startTimestamp="0" type="PUSH">
<subscribers>
<subscriber deviceId="b1f147b2 df184ca8 63b6511e bfd5ce14 5f2bdf1b 8bdade42 afd013d7 2e06509e"/>
</subscribers>
<content>
<mimeType>text/plain</mimeType>
<priorityAPI>false</priorityAPI>
<data>sample rich push data from testRichPushIphoneXML_Legacy</data>
<richContent> sample rich push data</richContent>
</content>
</message>
</messages>
</messageRequest>
```

### JSON

```
{
"messageRequest": {
"appId": "PushTestApp",
"global": {},
"messages": {
"message": {
"expiryTimestamp": "0",
"overrideMessageId": "0",
"startTimestamp": "0",
"type": "PUSH",
"subscribers": {
"subscriber": {
"deviceId": "testAndroidGCMDevice"
}
},
"platformSpecificProps": {},
"content": {
"mimeType": "text/plain",
"priorityAPI": "false",
"data": "sample rich push data from testRichPushAndroidJSON",
"richContent": {
"value": "<h1> Sample Mail </h1>Hello,<br><div class=\"float_left\"></div>This is a sample Mail.<br>Regards,<br>VoltMX<br>"
}
}
}
}
}
}

```

## Sample Responses

### XML

```
<messageResponse>
<code>200</code>
<description>Request Queued.</description>
<requestId>8059143026666797256</requestId>
<messages>
<message  msgId="8059143026666797257" description="Queued" />
</messages>
</messageResponse>
```

### JSON

```
{
"messageResponse": {
"requestId": "8059143026661134277",
"description": "Request Queued. ",
"code": 200,
"messages": [
{
"description": "Queued",
"msgId": 8059143026661134000
} ]
}
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Request queued                    |
| Status 400 | Invalid request format            |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
