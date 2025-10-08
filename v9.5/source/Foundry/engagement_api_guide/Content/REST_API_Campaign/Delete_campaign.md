
# Delete Campaign

The **Delete Campaign** API deletes an unpublished Campaign from Volt MX Foundry Engagement server, if the Campaign is not in use. This service accepts the Campaign ID as an input parameter to delete a Campaign.

## URL

The HTTP URL for **Delete Campaign** API is:

```
http://<host>:<port>/api/v1/campaigns/<id>/delete
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                            |
| --------------- | -------- | ---- | -------------------------------------- |
| Campaign ID     | Yes      | long | The unique id assigned to the campaign |

## Sample Response

```
{
"id" : "2",
"message" : "Campaign deleted successfully"
}
```

## Response Status

| Code       | Description                                                                                         |
| ---------- | --------------------------------------------------------------------------------------------------- |
| Status 200 | Campaign deleted successfully                                                                       |
| Status 400 | Running campaigns can not be deletedInvalid campaign ID provided or no campaign found with given ID |
| Status 401 | Unauthorized request                                                                                |
| Status 500 | Server failure to process request                                                                   |
