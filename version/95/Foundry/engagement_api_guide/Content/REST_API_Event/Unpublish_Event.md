
# Deactivate Event

The **Deactivate Event** API deactivates an event that was activated into Volt MX Foundry Engagement server. The service accepts Event ID as an input parameter to deactivate an event.

## URL

The HTTP URL for **Deactivate Event** API is:

```
http://<host>:<port>/api/v1/events/<id>/unpublish
```

> **_Note:_** <id>: Here, id refers to an id that is used to map an event with internal data record.

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

POST

## Header

The payload's request header includes Content Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                                                                      |
| --------------- | -------- | ---- | -------------------------------------------------------------------------------- |
| Event ID        | Yes      | long | Here, id refers to an id that is used to map an event with internal data record. |

## Sample Response

```
{
"id" : "2",
"message" : "Event deactivated successfully"
}

```

> **_Note:_** Here, id displayed in sample response refers to an id that is used to map an event with internal data record.

## Response Status

| Code       | Description                                               |
| ---------- | --------------------------------------------------------- |
| Status 200 | Event deactivated successfully                            |
| Status 401 | Invalid event ID provided or no event found with given ID |
| Status 500 | Server failure to process request                         |
