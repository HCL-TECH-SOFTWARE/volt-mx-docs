
# Start Campaign

The **Start Campaign** API starts an already created campaign from Volt MX Foundry Engagement Services that is scheduled to run on a future date. This service accepts the Campaign ID as input parameter to start a campaign.

## URL

The HTTP URL for **Start Campaign** API is:

```
http://<host>:<port>/api/v1/campaigns/<id>/start
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
| Campaign ID     | Yes      | long | The unique ID assigned to a campaign |

## Sample Response

```
{
"id" : "3",
"message" : "Campaign execution intiated successfully. "
}
```

## Response Status

| Code       | Description                              |
| ---------- | ---------------------------------------- |
| Status 200 | Campaign execution intiated successfully |
| Status 400 | Invalid request format                   |
| Status 401 | Unauthorized request                     |
| Status 500 | Server failure to process request        |
