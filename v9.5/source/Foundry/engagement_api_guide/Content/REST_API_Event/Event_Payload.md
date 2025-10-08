
# Event Payload

The **Event Payload** API fetches the event payload details. The event payload information is useful when you wish to distribute an event.

## URL

The HTTP URL for **Event Payload** API is:

```
http://<host>:<port>/api/v1/events/<id>/payload
```

> **_Note:_** ID: This is an event identification number. The event ID is a system generated number added in Volt MX Foundry Engagement Services, when you add a new event. You can view an event ID under Engagement Services Console > Engagement > Events > Events list view > under Event Name column.

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

GET

## Inputput Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                         |
| --------------- | -------- | ---- | ----------------------------------- |
| id              | Yes      | long | The unique ID assigned to an event. |

## Sample Response

```
{
"event": {
"eventid": "4934057895904149238",
"sms": {
"recipients": {
"recipient": [
{
"mobile": "xxxx",
"id": "xxxx"
}
]
},
"content": {
"mimeType": "text/plain",
"priorityService": "false"
}
},
"message": {
"subscribers": {
"subscriber": [
{
"ksid": "xxxx",
"ufid": "xxxx",
"deviceId": "xxxx"
}
]
},
"content": {
"mimeType": "text/plain",
"priorityService": "false"
}
},
"email": {
"recipients": {
"recipient": [
{
"emailId": "xxxx",
"id": "xxxx"
}
]
},
"from": {
"emailId": "xxxx"
},
"content": {
"priorityService": "false",
"eventNamePairs": {
"key": [
{
"name": "Email",
"content": "xxxx"
}
]
}
}
}
}
}
```

## Sample Response with Channel Priority

```
{
"event": {
"eventid": "7852693993223347071",
"channelPriorities": [{
"messageChannel": "PUSH"
},
{
"messageChannel": "Email"
},
{
"messageChannel": "SMS"
}
],
"sms": {
"content": {
"mimeType": "text/plain",
"priorityService": "false"
}
},
"audienceMembers": [{
"property": "xxxx",
"value": "xxxx"
}],
"message": {
"content": {
"mimeType": "text/plain",
"priorityService": "false"
}
},
"email": {
"from": {
"emailId": "xxxx"
},
"content": {
"priorityService": "false"
}
}
}
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Event payload done successfully   |
| Status 401 | Unauthorized request              |
| Status 500 | Server Failure to process request |
