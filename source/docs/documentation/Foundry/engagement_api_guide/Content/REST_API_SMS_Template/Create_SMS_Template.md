---
layout: "documentation"
category: "engagement_api_guide"
---

# Create SMS Template

The **Create SMS Template** API adds SMS templates into Engagement server.

> **_Note:_** This API will create an SMS Template for both Text as well as Voice SMS.

## URL

The HTTP URL for **Create SMS Template** API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/templates/smstemplates
{% endhighlight %}

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type   | Description                            |
| --------------- | -------- | ------ | -------------------------------------- |
| templatename    | Yes      | string | The unique name assigned to a template |
| template        | Yes      | string | SMS template details                   |

## Sample Request

{% highlight voltMx %}{
"templateName": "Amazon Customer Service",
"template": " Hello. How we can help you ##Mobile Number##"

}
{% endhighlight %}

## Sample Response

{% highlight voltMx %}{
"id" : "4",
"message" : "Details added successfully"
}
{% endhighlight %}

## Response Status

| Code       | Description                                                                            |
| ---------- | -------------------------------------------------------------------------------------- |
| Status 200 | Details added successfully                                                             |
| Status 400 | Template already existing with given nameTemplate name is requiredTemplate is required |
| Status 401 | Unauthorized request                                                                   |
| Status 500 | Server failure to process request                                                      |
