---
layout: "documentation"
category: "engagement_api_guide"
---

# Modify SMS Template

The **Modify SMS Template** API modifies the details of a SMS template.

> **_Note:_** This API will modify SMS Templates for both Text as well as Voice SMS.

## URL

The HTTP URL for **Modify SMS Template** API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/templates/smstemplates/<id>
{% endhighlight %}

## Method

PUT

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type   | Description                            |
| --------------- | -------- | ------ | -------------------------------------- |
| templateName    | Yes      | string | The unique name assigned to a template |
| template        | Yes      | string | SMS template details                   |

## Sample Request

{% highlight voltMx %}{
"templateName": "Amazon Customer Service",
"template": "Need help?##Mobile Number####First Name##"

}
{% endhighlight %}

## Sample Response

{% highlight voltMx %}{  
  "message" : "Details updated successfully",  
   "id" : "templateid"  
}

{% endhighlight %}

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Details updated successfully      |
| Status 400 | Invalid request format            |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
