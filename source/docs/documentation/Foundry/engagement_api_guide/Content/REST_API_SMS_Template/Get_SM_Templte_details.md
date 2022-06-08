---
layout: "documentation"
category: "engagement_api_guide"
---

# Get SMS Template Details by ID

The **Get SMS Template Details by ID** API accepts the SMS template ID as an input parameter and provides SMS message details matching the template ID.

> **_Note:_** This API will return SMS Template details for both Text as well as Voice SMS.

## URL

The HTTP URL for Get SMS Template Details by ID API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/templates/smstemplates/<id>
{% endhighlight %}

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter    | Type   | Description                                               |
| ------------------- | ------ | --------------------------------------------------------- |
| id                  | long   | The unique ID assigned to a template                      |
| templateName        | string | Unique name assigned to a template                        |
| template            | string | SMS template details                                      |
| lastModifiedBy      | string | A user name that shows who last modified the SMS template |
| lastModifiedDateStr | string | Date on which the SMS template was last modified          |
| createdDateStr      | string | Date on which the SMS template is created                 |
| createdBy           | string | A user name that shows who created the SMS template       |

## Sample Response

{% highlight voltMx %}{
"id" : 3,
"templateName" : "Amazon online books sale",
"template" : "##Mobile Number####First Name##",
"lastModifiedBy" : "admin",
"lastModifiedDateStr" : "06/29/2016 04:29:36 PM IST",
"createdDateStr" : "06/29/2016 04:29:36 PM IST",
"createdBy" : "admin"
}
{% endhighlight %}

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Array of SMS template details     |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
