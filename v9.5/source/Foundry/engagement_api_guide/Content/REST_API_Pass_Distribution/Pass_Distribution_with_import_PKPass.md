
# Pass Distribution with Import pkPass

The **Pass Distribution with Import PKPass** API imports pkPasses.

## URL

The HTTP URL for **Pass Distribution with Import pkPass** API is:

```
http://<<host>>:<<port>>/api/v1/message/pass/import
```

The Create App service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

POST

## Sample Request

```
"pkPass": pkPassFile,
passContent: {
"recipients": {
"recipient": [
{
"id": "48494"
}
]
},
 "passIntegrationConfig": {
"passIssueNotificationDetails": [
{
"channel": "SMS",
"messageContent": "Pass Issue SMS",
"enabled": true
},
{
"channel": "EMAIL",
"subject": "Pass Issued",
"senderEmail": "abcd@gmail.com",
"senderName": "Test User",
"messageContent": "Pass Issue content Email &lt;a href='##Email Pass Link##'&gt;click here&lt;/a&gt;",
"enabled": true
}
],
"passUpdateNotificationDetails": [
{
"channel": "SMS",
"messageContent": "Pass Update SMS",
"enabled": true
},
{
"channel": "EMAIL",
"subject": "Pass Update",
"senderEmail": "abcd@gmail.com",
"senderName": "Test User",
"messageContent": "Pass update content Email",
"enabled": true
}
]
},
"priority": true,
"startTimeStamp": 0,
"endTimeStamp": 0
}
```

## Sample Response

```
{"requestId":"2318508739642895844","description":"Request Queued. "}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Request queued                    |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
