---
layout: "documentation"
category: "engagement_api_guide"
---

# Terminate Campaign

The **Terminate Campaign** API terminates a campaign before the set expiry date so that no notifications are sent to subscribers from this campaign. This API accepts the Campaign ID as an input parameter to terminate a campaign.

## URL

The HTTP URL for **Terminate Campaign** API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/campaigns/<id>/terminate
{% endhighlight %}

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                            |
| --------------- | -------- | ---- | -------------------------------------- |
| Campaign ID     | Yes      | long | The unique ID assigned to the campaign |

## Sample Response

{% highlight voltMx %}{
"id" : "3",
"message" : "Campaign execution stopped successfully. "
}
{% endhighlight %}

## Response Status

| Code       | Description                                                     |
| ---------- | --------------------------------------------------------------- |
| Status 200 | Campaign terminated successfully                                |
| Status 400 | Invalid campaign ID provided or no campaign found with given ID |
| Status 401 | Unauthorized request                                            |
| Status 500 | Server failure to process request                               |
