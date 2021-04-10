---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Get Campaign Type by ID
=======================

The **Get Campaign Type by ID** API provides the details about a particular campaign type. This service responds with a campaign details matching the ID.

URL
---

The HTTP URL for **Get Campaign Type by ID** API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/admin/campaigntypes/<id>
{% endhighlight %}

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

Method
------

GET

Output Parameters
-----------------

The following fields are output parameters:

  
| Output Parameter | Type | Description |
| --- | --- | --- |
| name | string | The unique name assigned to a campaign type |
| id | long | Unique ID assigned to a campaign type |

Sample Response
---------------

{% highlight voltMx %}{
  "name" : "flipkart",
  "id" : 3
}
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Array of campaign types |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">Au</td></tr></tbody></table>
