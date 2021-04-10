---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Get Push Message Template by ID
===============================

The **Get Push Message Template by ID** API accepts the push message template ID as an input parameter and responds with the push message template details matching with the ID.

URL
---

The HTTP URL for **Get Push Message Template by ID** API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/templates/pushtemplate/{id}
{% endhighlight %}

Method
------

GET

Output Parameters
-----------------

The following fields are output parameters:

  
| Output Parameter | Type | Description |
| --- | --- | --- |
| id | long | A unique ID assigned to the push message template |
| templateName | string | Name of the push message template |
| templateTitle | string | Title of the template |
| templateType | string | Template type as basic or rich push |
| template | string | Displayed text message on the push message template |
| lastModifiedDateStr | string | The date on which the template was last modified |
| lastModifiedBy | string | The user who changed the push message template |
| createdDateStr | string | The date on which the template was created |
| createdBy | string | The user who created the push message template |

Sample Response
---------------

{% highlight voltMx %}{
  "id" : 1,
  "templateName" : "xxxxxxxxxxxxx",
  "templateTitle" : "xxxxx",
  "templateType" : "BASIC",
  "template" : "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "lastModifiedDateStr" : "11/05/2015 04:26:15 AM EST",
  "lastModifiedBy" : "xxxxx",
  "createdDateStr" : "11/05/2015 04:26:10 AM EST",
  "createdBy" : "xxxx"
}

{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Push message template details |
| Status 400 | Invalid Push Template ID provided or No push template found with given ID |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">DR</td></tr></tbody></table>
