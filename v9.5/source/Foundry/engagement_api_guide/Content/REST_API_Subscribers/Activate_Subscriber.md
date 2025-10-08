
# Activate Subscriber

The **Activate Subscriber** service activates a subscriber. To activate a subscriber, you need to pass the KSID in URL.

## URL

The HTTP URL for **Activate Subscriber** API is:

```
http://<host>:<port>/api/v1/subscribers/<id>/activate
```

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                            |
| --------------- | -------- | ---- | -------------------------------------- |
| ID              | Yes      | long | The unique ID assigned to a subscriber |

## Output Parameters

The following fields are output parameters:

| Output Parameter | Type   | Description             |
| ---------------- | ------ | ----------------------- |
| id               | long   | Unique response id      |
| message          | string | Response status message |

## Sample Response

```
{
"id" : "4927718950329103027",
"message" : "Subscriber Status updated successfully. "
}
```

## Response Status

| Code       | Description                            |
| ---------- | -------------------------------------- |
| Status 200 | Subscriber status updated successfully |
| Status 400 | Invalid request format                 |
| Status 401 | Unauthorized request                   |
| Status 500 | Failed to update subscriber status     |
