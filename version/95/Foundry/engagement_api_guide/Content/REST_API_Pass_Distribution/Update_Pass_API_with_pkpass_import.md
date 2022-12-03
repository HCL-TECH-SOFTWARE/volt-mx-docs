
# Update Pass API with pkPass Import

The **Update Pass API with pkPass Import** API updates the pkpass files.

## URL

The HTTP URL for Update Pass API with pkPass Import API is:

```
http://<<host>>:<<port>>/api/v1/message/pass/import/update
```

The Create App service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

POST

## Sample Request

```
"pkPass": pkPassFile,
passContent: "imageFieldName1": image,
"imageFieldName2": image,
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
"enabled": true/false,
"messageContent": "Content of your email. Using place holder ##SMS Pass Link## will generate pass download link."
},
{
"channel": "EMAIL",
"enabled": true/false,
"messageContent": "Content of your email. Using place holder ##Email Pass Link## will generate pass download link.",
"subject": "subject for the mail",
"senderName": "The email will be sent on this name",
"senderEmail": "The email will be sent from this Email ID"
}
],
"passUpdateNotificationDetails": [
{
"channel": "SMS",
"enabled": true/false,
"messageContent": "SMS to be sent when the user downloads the pass."
},
{
"channel": "EMAIL",
"enabled": true/false,
"messageContent": "Email to be sent when the user downloads the pass.",
"subject": "subject for the mail",
"senderName": "The email will be sent on this name",
"senderEmail": "The email will be sent from this Email ID"
}
]
},
"priority": true,
"startTimeStamp": 0,

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
