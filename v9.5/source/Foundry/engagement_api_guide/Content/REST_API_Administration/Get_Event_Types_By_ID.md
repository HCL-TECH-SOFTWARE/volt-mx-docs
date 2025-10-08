
# Get Event Types by ID

The **Get Event Types by ID** API provides the details about a particular event. This API responds with an event details matching the ID.

## URL

The HTTP URL for **Get Event Types by ID** API is:

```
http://<host>:<port>/api/v1/admin/eventtypes/<id>
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

GET

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                             |
| --------------- | -------- | ---- | --------------------------------------- |
| id              | Yes      | long | The unique id assigned to an event type |

## Output Parameters

The following fields are output parameters:

| Output Parameter | Type   | Description                               |
| ---------------- | ------ | ----------------------------------------- |
| id               | long   | The unique ID assigned to an event type   |
| name             | string | The unique name assigned to an event type |

## Sample Response

```
{
"name" : "Finance",
"id" : 2
}
```

## Response Status

| Code       | Description                                                         |
| ---------- | ------------------------------------------------------------------- |
| Status 200 | Array of event types                                                |
| Status 401 | Invalid event type ID provided or no event type found with given ID |
| Status 500 | Server failure to process request                                   |
