---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Delete Email Template
=====================

The **Delete Email Template** API deletes an unpublished email template from Engagement server. The API accepts the template ID as an input parameter to delete a template.

URL
---

The HTTP URL for Delete Email Template API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/templates/emails/<id>
{% endhighlight %}

This service implements ‘Gateway Filter for Authentication’ to authenticate access of the service by a user.

Method
------

DELETE

Header
------

The payload's request header includes Content-Type as application/json;charset=UTF-8.

Input Parameters
----------------

The following fields are input parameters:

  
| Input Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| Template ID | Yes | long | The unique ID assigned to a template |

Sample Response
---------------

{% highlight voltMx %}{
  "id" : "7",
  "message" : "Email Template deleted successfully"
}
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Email Template deleted successfully |
| Status 400 | Invalid email template ID provided or no email template found with given ID |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
