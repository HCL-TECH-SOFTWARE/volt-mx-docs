---
layout: "documentation"
category: "engagement_api_guide"
---

# Delete Users

The **Delete Users** API deletes a user from Volt MX Foundry Engagement Services. This service accepts the user ID as an input parameter to delete a user.

## URL

The HTTP URL for Delete Users API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/audience/<id>/delete
{% endhighlight %}

This API implements Gateway Filter for Authentication/Basic Authentication to authenticate access of the service by a user.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                      |
| --------------- | -------- | ---- | -------------------------------- |
| User ID         | Yes      | long | The unique ID assigned to a user |

## Sample Response

{% highlight voltMx %}{
"id" : "8",
"message" : "User deleted successfully"
}
{% endhighlight %}

## Response Status

| Code       | Description                                                                   |
| ---------- | ----------------------------------------------------------------------------- |
| Status 200 | User deleted successfully                                                     |
| Status 400 | Invalid audience member ID provided or no audience member found with given ID |
| Status 401 | Unauthorized request                                                          |
| Status 500 | Server failure to process request                                             |
