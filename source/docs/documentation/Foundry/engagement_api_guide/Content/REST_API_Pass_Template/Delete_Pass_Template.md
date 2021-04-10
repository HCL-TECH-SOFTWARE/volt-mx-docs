---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Delete Pass Template
====================

The Delete Pass Template API deletes a pass template from Engagement server, if the template is not in use. The service accepts the Template ID as an input parameter to delete a pass template.

URL
---

The HTTP URL for Delete Pass Template API is:

{% highlight voltMx %}http://<<host>>:<<port>>/api/v1/templates/passbook/{id}
{% endhighlight %}

This service implements ‘Gateway Filter for Authentication’ to authenticate access of the service by a user.

Method
------

DELETE

Input Parameters
----------------

The following fields are input parameters:

  
| Input Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| Template ID | Yes | long | Unique ID assigned to a template |

Sample Response
---------------

{% highlight voltMx %}{
  "id" : "2",
  "message" : "Pass template deleted successfully."
}
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Pass template deleted successfully |
| Status 400 | Invalid pass template ID provided or No pass template found with given ID |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
