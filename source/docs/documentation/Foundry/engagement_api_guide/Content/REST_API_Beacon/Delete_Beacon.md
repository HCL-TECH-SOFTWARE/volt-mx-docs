---
layout: "documentation"
category: "engagement_api_guide"
---

# Delete Beacon

The **Delete Beacon** API deletes beacons.This service accepts ID as an input parameter to delete a beacon.

## URL

The HTTP URL for Delete Beacon API is:

{% highlight voltMx %}http://<<host>>:<<port>>/api/v1/beacon/{id}
{% endhighlight %}

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

DELETE

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                      |
| --------------- | -------- | ---- | -------------------------------- |
| id              | Yes      | long | A unquie ID assigned to a beacon |

## Output Parameters

The following fields are output parameters:

| Output Parameter | Type   | Description                    |
| ---------------- | ------ | ------------------------------ |
| id               | long   | Unique ID assigned to a beacon |
| message          | string | Response status message        |

## Sample Response

{% highlight voltMx %}{
"id" : "3",
"message" : "Beacon Deleted Successfully"
}
{% endhighlight %}

## Response Status

| Code       | Description                                                 |
| ---------- | ----------------------------------------------------------- |
| Status 200 | Details deleted successfully                                |
| Status 400 | Invalid beacon ID provided or no beacon found with given ID |
| Status 401 | Unauthorized request.                                       |
| Status 500 | Server failure to process request                           |
