---
layout: "documentation"
category: "engagement_api_guide"
---

# Delete Push Message Template

The **Delete Push Message Template** service accepts the template ID as an input parameter to delete a push message template.

## URL

{% highlight voltMx %}http://<host>:<port>/api/v1/templates/pushtemplate/{id}/delete
{% endhighlight %}

This service implements ‘Gateway Filter for Authentication’ to authenticate access of the service by a user.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                                       |
| --------------- | -------- | ---- | ------------------------------------------------- |
| id              | Yes      | long | A unique ID assigned to the push message template |

## Sample Response

{% highlight voltMx %}{
"message" : "Message Template deleted successfully",
"id" : "1"
}
{% endhighlight %}

## Response Status

| Code       | Description                                                               |
| ---------- | ------------------------------------------------------------------------- |
| Status 200 | Message template deleted successfully                                     |
| Status 400 | Invalid Push Template ID provided or No Push Template found with given ID |
| Status 401 | Unauthorized request                                                      |
| Status 500 | Server failure to process request                                         |
