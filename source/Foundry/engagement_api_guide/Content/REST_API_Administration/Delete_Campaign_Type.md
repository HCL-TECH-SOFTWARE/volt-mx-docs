
# Delete Campaign Type

The **Delete Campaign Type** API deletes a campaign type from Engagement Services.

## URL

The HTTP URL for **Delete Campaign Type** API is:

```
http://<host>:<port>/api/v1/admin/campaigntypes/<id>/delete
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                           |
| --------------- | -------- | ---- | ------------------------------------- |
| id              | Yes      | long | Unique ID assigned to a campaign type |

## Sample Response

```
{
"id" : "2",
"message" : "Campaign Type deleted Successfully"
}
```

## Response Status

| Code       | Description                                                   |
| ---------- | ------------------------------------------------------------- |
| Status 200 | Campaign type deleted successfully                            |
| Status 400 | Unable to delete the campaign type as it is used in campaigns |
| Status 401 | Unauthorized request                                          |
| Status 500 | Server failure to process request                             |
