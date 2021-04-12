---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Delete SMS Template
===================

The **Delete SMS Template** API deletes an unpublished SMS template from Engagement server. The API accepts the template ID as an input parameter to delete a template.

> **_Note:_** This API will delete SMS Templates for both Text as well as Voice SMS.

URL
---

The HTTP URL for **Delete SMS Template** API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/templates/smstemplates/<id>
{% endhighlight %}

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
  "id" : "4",
  "message" : "SMS Template deleted successfully"
}
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | SMS template deleted successfully |
| Status 400 | Invalid SMS template ID provided or no SMS template found with given ID |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
