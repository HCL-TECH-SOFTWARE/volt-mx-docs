---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Cancel Email
============

The **Cancel Email** API accepts the Email Request ID as an input parameter and cancels an email message. You can cancel only those email messages that are scheduled later.

URL
---

The HTTP URL for **Cancel Email** API is:

For **POST** method:

{% highlight voltMx %}http://<host or ip>:<port>/api/v1/email/{emailRequest ID}/cancel
{% endhighlight %}

For **DELETE** method:

{% highlight voltMx %}http://<localhost or ip>:<8080>/api/v1/email/{emailRequest ID}
{% endhighlight %}

> **_Note:_** You can view email request ID under Settings > Status >Email Queue> Request ID

This service implements ‘Gateway Filter for Authentication’ to authenticate access of the service by a user.

Method
------

Based on a requirement, a user can use POST or DELETE method.

Header
------

The payload's request header includes Content-Type as application/json;charset=UTF-8.

Input Parameters
----------------

The following fields are input parameters:

  
| Input Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| id | Yes | long | The unique request ID assigned to an email message |

Sample Response
---------------

{% highlight voltMx %}{
  "id" : "",
  "message" : "Cancelled  4 Email entries of the EmailRequest with ID : 7131002087805116277"
}
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Cancelled xxx email entries of the emailRequest with ID |
| Status 400 | No cancellable messages found |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
