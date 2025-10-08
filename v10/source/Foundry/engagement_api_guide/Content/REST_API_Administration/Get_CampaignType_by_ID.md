
# Get Campaign Type by ID

The **Get Campaign Type by ID** API provides the details about a particular campaign type. This service responds with a campaign details matching the ID.

## URL

The HTTP URL for **Get Campaign Type by ID** API is:

```
http://<host>:<port>/api/v1/admin/campaigntypes/<id>
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter | Type   | Description                                 |
| ---------------- | ------ | ------------------------------------------- |
| name             | string | The unique name assigned to a campaign type |
| id               | long   | Unique ID assigned to a campaign type       |

## Sample Response

```
{
"name" : "flipkart",
"id" : 3
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Array of campaign types           |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
