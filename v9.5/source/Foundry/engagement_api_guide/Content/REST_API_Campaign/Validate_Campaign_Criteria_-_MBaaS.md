
# Validate Campaign Criteria

The **Validate Campaign Criteria** API validates the segment definition. This service accepts a Campaign ID as an input parameter to validate the segment definition.

## URL

The HTTP URL for **Validate Campaign Criteria** API is:

```
http://<host>:<port>/api/v1/campaigns/<id>/validate
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

GET

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Output Parameter | Required | Type | Description                            |
| ---------------- | -------- | ---- | -------------------------------------- |
| Campaign ID      | Yes      | long | The unique ID assigned to the campaign |

## Sample Response

```
{
"id" : "4",
"message" : "Campaign Criteria is valid. Audience Members Count: 1"
}
```

## Response Status

| Code       | Description                                                     |
| ---------- | --------------------------------------------------------------- |
| Status 200 | Campaign criteria is valid                                      |
| Status 400 | Invalid campaign ID provided or no campaign found with given ID |
| Status 401 | Unauthorized request                                            |
| Status 500 | Server failure to process request                               |
