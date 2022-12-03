
# Activate Event

The **Activate Event** API activates an event that is added into Volt MX Foundry Engagement server. This service accepts Event ID as an input parameter to activate an event. Only activated events are used for push notifications.

## URL

The HTTP URL for **Activate Event** API is:

```
http://<host>:<port>/api/v1/events/<id>/publish
```

> **_Note:_** <id>: Refers to an ID that is used to map an event with internal data record.

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

POST

## Header

The payload's request header includes Content-Type for JSON as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                                                                      |
| --------------- | -------- | ---- | -------------------------------------------------------------------------------- |
| Event id        | Yes      | long | Here, id refers to an ID that is used to map an event with internal data record. |

## Sample Response

```
{
"id" : "3",
"message" : "Event activated successfully"
}
```

> **_Note:_** Here, id displayed in sample response refers to an ID that is used to map an event with internal data record.

## Response Status

| Code       | Description                                               |
| ---------- | --------------------------------------------------------- |
| Status 200 | Event activated successfully                              |
| Status 401 | Invalid event ID provided or no event found with given ID |
| Status 500 | Server failure to process request                         |
