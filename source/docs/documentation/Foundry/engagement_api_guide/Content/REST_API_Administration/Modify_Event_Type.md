---
layout: "documentation"
category: "engagement_api_guide"
---

# Modify Event Type

The **Modify Event Type** API updates the details of an event.

## URL

The HTTP URL for **Modify Event Type** API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/admin/eventtypes/<id>/modify
{% endhighlight %}

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                        |
| --------------- | -------- | ---- | ---------------------------------- |
| id              | Yes      | long | The unique ID assigned to an event |

## Sample Request

{% highlight voltMx %}{"name":"updatedEventType"}
{% endhighlight %}

## Output Parameters

The following fields are output parameters:

| Output Parameter | Type   | Description                          |
| ---------------- | ------ | ------------------------------------ |
| id               | long   | A unique ID assigned to a event type |
| message          | string | Response status message              |

## Sample Response

{% highlight voltMx %}{
"id" : "4",
"message" : "Details updated successfully"
}
{% endhighlight %}

## Response Status

| Code       | Description                                                                         |
| ---------- | ----------------------------------------------------------------------------------- |
| Status 200 | Details updated successfully                                                        |
| Status 400 | Event type name should not be blank and should contain alphanumeric characters only |
| Status 401 | Unauthorized request                                                                |
| Status 500 | Server failure to process request                                                   |
