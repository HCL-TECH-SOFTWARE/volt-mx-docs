
# Modify Event Type

The **Modify Event Type** API updates the details of an event.

## URL

The HTTP URL for **Modify Event Type** API is:

```
http://<host>:<port>/api/v1/admin/eventtypes/<id>/modify
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                        |
| --------------- | -------- | ---- | ---------------------------------- |
| id              | Yes      | long | The unique ID assigned to an event |

## Sample Request

```
{"name":"updatedEventType"}
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
"id" : "4",
"message" : "Details updated successfully"
}
```

## Response Status

| Code       | Description                                                                         |
| ---------- | ----------------------------------------------------------------------------------- |
| Status 200 | Details updated successfully                                                        |
| Status 400 | Event type name should not be blank and should contain alphanumeric characters only |
| Status 401 | Unauthorized request                                                                |
| Status 500 | Server failure to process request                                                   |
