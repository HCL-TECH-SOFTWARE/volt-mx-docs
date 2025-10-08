
# Engagement Services Inbound Format

The **Engagement Services Inbound Format** API defines the standard format for inbound messages with mandatory input parameters. The Inbound Format is a Volt MX FoundryMessaging standard for inbound SMS request.

## Use Case

You can use inbound format, if you want to send inbound requests to middle ware and middle ware validating the same and sending back the request to Volt MX Foundry Engagement Services with the expected format. This procedure requires authentication and does not do any security checks as the request is from a trusted source (the authentication itself means a trusted source of request).

## URL

The HTTP URL for Engagement Services Inbound Format API is:

```
http://<<host>>:<<port>>/api/v1/messages/sms/inbound/default
```

## Method

POST

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type   | Description                       |
| --------------- | -------- | ------ | --------------------------------- |
| phoneNumber     | Yes      | long   | Inbound phone number              |
| smsText         | Yes      | string | Description of the text message   |
| senderMessageId | Yes      | string | Unique ID assigned to the message |
| smsSentTo       | Yes      | long   | User to whom SMS is sent          |

## Sample Request

```


{

"phoneNumber": "+919830087249",

"smsText": "Bill January",

"senderMessageId": "ABC",

"smsSentTo": "5OCX12769CVB005432X"

}

```

## Sample Response

```
{
"id" : "7131636866524315584",
"message" : "Request queued."
}
```

## Response Status

| Code       | Description                                                                                                                                                                                                                 |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Status 200 | Request queued                                                                                                                                                                                                              |
| Status 400 | Empty phone numberNo audience member found with the mobile number.Empty sms textNo audience member found with the mobile number.Empty sender message idNo audience member found with the mobile number.Empty inbound number |
| Status 401 | Unauthorized request                                                                                                                                                                                                        |
| Status 500 | Server failure to process request                                                                                                                                                                                           |
