
# Delete Event Type

The **Delete Event Type** API deletes an event from Engagement Services.

## URL

The HTTP URL for **Delete Event Type** API is:

```
http://<host>:<port>/api/v1/admin/eventtypes/<id>/delete
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

POST

## Header

The payload's request header includes Content-Type for JSON as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                        |
| --------------- | -------- | ---- | ---------------------------------- |
| id              | Yes      | long | The unique ID assigned to an event |

## Sample Response

```
{
"id" : "6",
"message" : "Event Type deleted Successfully"
}
```

## Response Status

| Code       | Description                                             |
| ---------- | ------------------------------------------------------- |
| Status 200 | Event type deleted successfully                         |
| Status 400 | Unable to delete the event type as it is used in events |
| Status 401 | Unauthorized request                                    |
| Status 500 | Server failure to process request                       |
