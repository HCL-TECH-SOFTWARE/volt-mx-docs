
# Delete Segment

The **Delete Segment** API deletes a segment from Volt MX Foundry Engagement Services. This service accepts the Segment ID as an input parameter to delete a segment.

## URL

The HTTP URL for **Delete Segment** API is:

```
http://<host>:<port>/api/v1/segments/<id>/delete
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                          |
| --------------- | -------- | ---- | ------------------------------------ |
| Segment ID      | Yes      | long | The unique id assigned to a segment. |

## Output Parameters

The following fields are output parameters:

| Output Parameter | Type   | Description                     |
| ---------------- | ------ | ------------------------------- |
| id               | long   | Unique ID assigned to a segment |
| message          | string | Response status message         |

## Sample Response

```
{
"id" : "5",
"message" : "Segment deleted successfully"
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Segment deleted successfully      |
| Status 400 | Invalid request format            |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
