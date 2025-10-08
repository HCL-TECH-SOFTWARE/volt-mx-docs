
# Create Event Type

The **Create Event Type** API adds event types into Engagement Services.

## URL

The HTTP URL for **Create Event Type** API is:

```
http://<host>:<port>/api/v1/admin/eventtypes
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type   | Description                               |
| --------------- | -------- | ------ | ----------------------------------------- |
| name            | Yes      | string | The unique name assigned to an event type |

## Sample Request

```
{"name":"EventType"}
```

## Output Parameters

The following fields are output parameters:

| Output Parameter | Type   | Description                          |
| ---------------- | ------ | ------------------------------------ |
| id               | long   | A unique ID assigned to a event type |
| message          | string | Response status message              |

## Sample Response

```
{
"id" : "6",
"message" : "Details added successfully"
}
```

## Response Status

| Code       | Description                                                                                                                                          |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Status 200 | Details added successfully                                                                                                                           |
| Status 400 | Duplicate name provided. Another event type exists with same nameEvent type name should not be blank and should contain alphanumeric characters only |
| Status 401 | Unauthorized request                                                                                                                                 |
| Status 500 | Server failure to process request                                                                                                                    |
