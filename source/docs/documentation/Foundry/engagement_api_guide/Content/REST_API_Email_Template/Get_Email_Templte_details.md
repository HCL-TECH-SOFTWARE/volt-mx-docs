---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Get Email Template Details by ID
================================

The **Get Email Template Details by ID** API accepts the email template ID as an input parameter and provides email message details matching the template ID.

URL
---

The HTTP URL for Get Email Template details by ID API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/templates/emails/<id>
{% endhighlight %}

Method
------

GET

Output Parameters
-----------------

The following fields are output parameters:

  
| Output Parameter | Type | Description |
| --- | --- | --- |
| id | long | The unique ID assigned to a template |
| templateName | string | Unique name assigned to a template |
| mailSubject | string | Email title |
| templateType | string | Template type as basic or code a template |
| mailContent | string | Email content: It can include images and text |
| lastModifiedDateStr | string | Date on which the email template was last modified |
| lastModifiedBy | string | A user name that shows who last modified the email template |
| createdDateStr | string | Date on which the email template is created |
| createdBy | string | A user name that shows who created the email template |

Sample Response
---------------

{% highlight voltMx %}{
  "id" : 4,
  "templateName" : "ShopClues",
  "mailSubject" : "Online Sale",
  "templateType" : "Code a Template",
  "mailContent" : "Happy Weekend Sale",
  "lastModifiedDateStr" : "08/23/2016 12:48:22 PM IST",
  "lastModifiedBy" : "admin",
  "createdDateStr" : "08/23/2016 12:48:22 PM IST",
  "createdBy" : "admin"
}
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Email template JSON |
| Status 400 | Invalid email template ID provided or no email template found with given ID" |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
