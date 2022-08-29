
# Pause Campaign

The **Pause Campaign** API pauses a running campaign.This campaign can later resume with a call to the Resume Campaign API.

## Use Case

You run various campaigns, but there may come a time when you want to give one or more of them a break. Suppose you run a campaign (called warm biz) to sell warm jackets.The campaign is to run only during winter. When the temperatures rise in summer, you pause the campaign. When winter returns, you resume the warm biz campaign.

## URL

The HTTP URL for Pause Campaign service is:

```
http://<host> : port>/api/v1/campaigns/id/pause
```

This service implements the Gateway Filter for Authentication to authenticate access of the service by a user

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
"id" : "4",
"message" : "Campaign execution paused successfully. "
}
```

## Response Status

| Code       | Description                                                     |
| ---------- | --------------------------------------------------------------- |
| Status 200 | Campaign execution paused successfully                          |
| Status 400 | Invalid campaign ID provided or no campaign found with given ID |
| Status 401 | Unauthorized request                                            |
| Status 500 | Server failure to process request                               |
