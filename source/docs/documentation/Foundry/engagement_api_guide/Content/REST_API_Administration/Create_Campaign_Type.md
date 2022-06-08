---
layout: "documentation"
category: "engagement_api_guide"
---

# Create Campaign Type

The **Create Campaign** **Type** API adds campaign types into Engagement Services.

## URL

The HTTP URL for **Create Campaign** **Type** API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/admin/campaigntypes
{% endhighlight %}

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

{% highlight voltMx %}{
"name":"CampaignType"
}
{% endhighlight %}

## Output Parameters

The following fields are output parameters:

| Output Parameter | Type   | Description                                 |
| ---------------- | ------ | ------------------------------------------- |
| name             | string | The unique name assigned to a campaign type |
| id               | long   | Unique ID assigned to a campaign type       |

## Sample Response

{% highlight voltMx %}{
"id" : "9",
"message" : "Details added successfully"
}
{% endhighlight %}

## Response Status

| Code       | Description                                                                                                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Status 200 | Details added successfully                                                                                                                                 |
| Status 400 | Duplicate name provided. Another campaign type exists with same nameCampaign type name should not be blank and should contain alphanumeric characters only |
| Status 401 | Unauthorized request                                                                                                                                       |
| Status 500 | Server failure to process request                                                                                                                          |
