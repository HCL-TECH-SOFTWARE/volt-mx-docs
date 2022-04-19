---
layout: "documentation"
category: "engagement_api_guide"
---

# Delete Pass Certificate

The **Delete Pass Certificate** API deletes a pass certificate from Engagement Server. This service accepts pass certificate id to delete a specific pass certificate.

## URL

The HTTP URL for **Delete Pass Certificate** API is:

{% highlight voltMx %}http://<<host>>:<<port>>/api/v1/passcerts/id
{% endhighlight %}

This service implements ‘Gateway Filter for Authentication’ to authenticate access of the service by a user.

## Method

DELETE

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                                                    |
| --------------- | -------- | ---- | -------------------------------------------------------------- |
| ID              | Yes      | long | The unique ID is generated when a pass certificate is uploaded |

## Sample Response

{% highlight voltMx %}{  
"message": "Pass Certificate deleted successfully",
  "id": "id"
}
{% endhighlight %}

> **_Note:_** In response pay load ID will be the deleted pass certificate ID.

## Response Status

| Code       | Description                           |
| ---------- | ------------------------------------- |
| Status 200 | Pass certificate deleted successfully |
| Status 400 | Bad request                           |
| Status 401 | Unauthorized request                  |
| Status 500 | Server failure to process request     |
