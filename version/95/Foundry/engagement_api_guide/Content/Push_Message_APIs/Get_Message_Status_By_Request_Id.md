
# Get Message Status by Request ID

The **Get Message Status by Request** ID API uses the request -ID as an input parameter and returns the push message status details. In the console, to view push message status, select the required request ID from the Settings > Status > Message Queue list view.

> **_Note:_** Though only requestId is provided in the input, it is possible that multiple message data is returned in the **message array** as only requestId is provided for a bulk push.

## URL

The HTTP URL for **Get Message Status by Request ID** API is:

```
http://<host>:<port>/api/v1/status/push/request/{requestid}
```

## How to get the Request ID

The request ID is an unique ID assigned to a push message. The request ID is used to track the status of the push message. You can view the request ID assigned to a push message under Engagement Services Console > Settings > Status > Message Queue > Request ID column.

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter | Level-Two     | Type   | Description                                                                                                                                                                                                                                                                                               |
| ---------------- | ------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Total            |               | long   | Total number of the push messages                                                                                                                                                                                                                                                                         |
| messages         |               |        | An array of message objects                                                                                                                                                                                                                                                                               |
|                  | pushID        | long   | The unique ID assigned to a push message                                                                                                                                                                                                                                                                  |
|                  | Status        | string | The current status of the push message such as initial or submitted                                                                                                                                                                                                                                       |
|                  | ksid          | long   | Displays Volt MX Subscription Identification serial number. The KSID is used to communicate with Volt MX Foundry Engagement Server. Volt MX Foundry Engagement Services generates the KSID based on provided details when you send a request for subscription such as application ID, device ID, and SID. |
|                  | statusMessage | string | The push message string                                                                                                                                                                                                                                                                                   |

## Sample Response

```
{
"total": 2,
"messages": [{
"pushId": "6825024193890020717",
"ksid": "5904057110541530543",
"statusMessage": "Push Opened.",
"status": "Opened"
}, {
"pushId": "9038362357706665905",
"ksid": "5904097732703254450",
"statusMessage": "GCM Authorization Key missing for the application",
"status": "Not Attempted"
}]
}
```

## Response Status

| Code       | Description                                               |
| ---------- | --------------------------------------------------------- |
| Status 200 | Push status details                                       |
| Status 400 | Invalid request ID. No request found with the provided ID |
| Status 401 | Unauthorized request                                      |
| Status 405 | Invalid request. Request method not allowed               |
| Status 500 | Server failure to process request                         |
