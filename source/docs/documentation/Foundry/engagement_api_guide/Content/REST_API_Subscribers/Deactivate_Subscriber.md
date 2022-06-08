---
layout: "documentation"
category: "engagement_api_guide"
---

# Inactivate Subscriber

The **Inactivate Subscriber** API deactivates a subscriber with current status as active in Volt MX Foundry Engagement Services. To deactivate a subscriber, you need to pass the KSID in URL.

## URL

The HTTP URL for **Inactivate Subscriber** API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/subscribers/<id>/inactivate
{% endhighlight %}

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                            |
| --------------- | -------- | ---- | -------------------------------------- |
| ID              | Yes      | long | The unique ID assigned to a subscriber |

## Output Parameters

The following fields are output parameters:

| Output Parameter | Type   | Description             |
| ---------------- | ------ | ----------------------- |
| id               | long   | Unique response id      |
| message          | string | Response status message |

## Sample Response

{% highlight voltMx %}{
"id" : "4927718950329103027",
"message" : "Subscriber Status updated successfully. "
}
{% endhighlight %}

## Response Status

| Code       | Description                            |
| ---------- | -------------------------------------- |
| Status 200 | Subscriber status updated successfully |
| Status 400 | Invalid request format                 |
| Status 401 | Unauthorized request                   |
| Status 500 | Failed to update subscriber status     |
