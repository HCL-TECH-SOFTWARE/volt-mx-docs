
# Cancel Scheduled Messages from Volt MX Foundry Engagement Services - Second Method

The **Cancel Scheduled Messages from Volt MX Foundry Engagement Services** API cancels the scheduled messages from Volt MX Foundry Engagement server. You can cancel only those push messages that are scheduled later.

## URL

The HTTP URL for **Cancel Scheduled Messages from Volt MX Foundry Engagement Services** API is:

```
http://<host or ip>:<port>/api/v1/messages/cancelmessage/$requestID
```

> **_Note:_** request ID: The request ID is an unique ID assigned to a push message. The request ID is used to track the current status of the push message. You can view the request ID assigned to a push message under Engagement Services Console > Settings > Status > Message Queue > Request ID column.

## Method

GET / POST

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type   | Description                                        |
| --------------- | -------- | ------ | -------------------------------------------------- |
| requestId       | Yes      | string | Request ID is generated as a push message response |

## Sample Response

```
Cancelled 5 message entries of the Message with ID : 4930492249112405421
```

## Response Status

| Code | Description                                                                        |
| ---- | ---------------------------------------------------------------------------------- |
| 200  | Cancelled ${no. of messages} message entries of the message with ID : ${requestID} |
| 400  | No cancellable messages found                                                      |
