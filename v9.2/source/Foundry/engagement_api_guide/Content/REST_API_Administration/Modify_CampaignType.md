
# Modify Campaign Type

The **Modify Campaign Type** API updates the details of a campaign type.

## URL

The HTTP URL for **Modify Campaign Type** API is:

```
http://<host>:<port>/api/v1/admin/campaigntypes/<id>/modify
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type   | Description                                 |
| --------------- | -------- | ------ | ------------------------------------------- |
| name            | Yes      | string | The unique name assigned to a campaign type |

## Sample Request

```
{"name":"CampaignType"}
```

## Output Parameters

The following fields are output parameters:

| Output Parameter | Type   | Description                                 |
| ---------------- | ------ | ------------------------------------------- |
| name             | string | The unique name assigned to a campaign type |
| id               | long   | Unique ID assigned to a campaign type       |

## Sample Response

```
{
"id" : "9",
"message" : "Details updated successfully"
}
```

## Response Status

| Code       | Description                                                                            |
| ---------- | -------------------------------------------------------------------------------------- |
| Status 200 | Details updated successfully                                                           |
| Status 400 | Campaign type name should not be blank and should contain alphanumeric characters only |
| Status 401 | Unauthorized request.                                                                  |
| Status 500 | Server failure to process request                                                      |
