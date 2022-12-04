
# Validate Segment Criteria

The **Validate Segment Criteria** API validates the added audience member attributes to a segment and fetches total number of audiences.

## URL

The HTTP URL for the **Validate Segment Criteria** API is:

```
http://<host>:<port>/api/v1/segments/<id>/validate
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

GET

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
"id" : "7",
"message" : "Segment Criteria is valid. Audience Members Count: 4"
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Segment criteria is valid         |
| Status 400 | Invalid request format            |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
