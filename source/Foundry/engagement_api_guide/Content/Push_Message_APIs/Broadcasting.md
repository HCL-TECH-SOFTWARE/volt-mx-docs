
# Broadcasting

Volt MX Foundry Engagement Services provides flexibility to send push notifications to all active subscribers of an application with a single API request. You can send same notification to devices on multiple platforms.

This is a secure API and the user needs to provide security credentials to invoke this API.

## URL

The HTTP URL for Broadcasting API is:

```
http://<hostname or ip>:<portnumber>/api/v1/messages
```

## Header

Based on the content format, the payload's request header includes Content-Type for:

- **XML** is text/xml;charset=UTF-8
- **JSON** is application/json;charset=UTF-8

### Method

POST

## Input Parameters

The following fields are input parameters:

| Input Parameter | Level – Two | Level – Three         | Level- Four | Required | Type   | Description                                                                                                                                                                                  |
| --------------- | ----------- | --------------------- | ----------- | -------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| messageRequest  |             |                       |             |          |        | An array of messageRequest objects                                                                                                                                                           |
|                 | appId       |                       |             | Yes      | long   | Unique ID assigned to an app                                                                                                                                                                 |
|                 | global      |                       |             | Optional |        | .An array of global objects                                                                                                                                                                  |
|                 | messages    |                       |             |          |        | An array of messages objects                                                                                                                                                                 |
|                 |             | message               |             |          |        | An array of message objects                                                                                                                                                                  |
|                 |             |                       | content     |          |        | An array of content objectscontent- priorityService (boolean value - Optional)- data (push message - Required)- mimeType (label for a data so system can know it like,text/plain - Required) |
|                 |             | overrideMessageId     |             | Optional | long   | If you wish to change the push message and yet the message is not sent, then you need to pass the old message ID in sample request to update the existing push message to be sent            |
|                 |             | startTimestamp        |             | Optional | string | Time relative to a starting point                                                                                                                                                            |
|                 |             | expiryTimestamp       |             | Optional | string | Time relative to an ending point                                                                                                                                                             |
|                 |             | subscribers           |             | Yes      |        | An array of subscribers objects- allActive (boolean value)                                                                                                                                   |
|                 |             | platformSpecificProps |             | Optional |        | An array of platform specific properties, for more details [see](Push_Message_APIs.md#platformspecificprops-input-parameters)                                                              |
|                 |             | type                  |             | Yes      | string | Type of channel, such as push                                                                                                                                                                |

### Sample Request

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
<data>PUSH\_ MESSAGE</data>
</content>
</message>
</messages>
</messageRequest>

```

### JSON

```
{
"messageRequest": {
"appId": "22874-10836483458",
"global": {},
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
"platformSpecificProps": {},
"type": "PUSH"
}
}
}
}
```

## Sample Response

### JSON

```
{
"messageResponse": {
"code": 200,
"requestId": "6320054841638575067",
"description": "Request Queued. ",
"messages": [{
"msgId": 6320054841634124941
}]
}
}
```

## Response Status

| Code       | Description                                                                                                       |
| ---------- | ----------------------------------------------------------------------------------------------------------------- |
| Status 200 | Request queued                                                                                                    |
| Status 400 | Push was not delivered with the provided IDInvalid Volt MX appId or application is not published with given appId |
| Status 401 | Unauthorized request                                                                                              |
| Status 500 | Server failure to process request                                                                                 |
