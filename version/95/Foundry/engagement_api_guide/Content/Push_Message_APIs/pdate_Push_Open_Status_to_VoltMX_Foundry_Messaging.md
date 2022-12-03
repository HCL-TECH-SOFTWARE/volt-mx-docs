
# Update Push Open Status to Volt MX Foundry Engagement Services

The **Update Push Open Status to Volt MX Foundry Engagement Services** API sends acknowledgment to Volt MX Foundry Engagement Services when a message is viewed on the device. This API is expected to be invoked by the application on the device to communicate the status like **Opened** to the engagement service.

This is not a secure API and no credentials are needed to invoke this API.

## Use Case

The user receives the push message on the device and wishes to communicate with engagement server about the status like message was opened.The push ID can be obtained from the push received on the device.

## **URL**

The HTTP URL for Update Push Open Status to Volt MX Foundry Engagement Services API is:

```
http://<host or ip>:<port>/api/v1/messages/open/$pushId
```

> **_Note:_** Update Push Open Status to Volt MX Foundry Engagement Services API does not require authentication.

## Method

GET

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                          |
| --------------- | -------- | ---- | ------------------------------------ |
| pushId          | Yes      | long | Unique ID assigned to a push message |

## Sample Response

```
{
"id" : "5548467000644206387",
"message" : "Succesfully updated the Message Status"
}
```

## Response Status

| Code       | Description                                 |
| ---------- | ------------------------------------------- |
| Status 200 | Succesfully updated the message status      |
| Status 400 | Push was not delivered with the provided ID |
| Status 401 | Unauthorized request                        |
| Status 500 | Server failure to process request.          |
