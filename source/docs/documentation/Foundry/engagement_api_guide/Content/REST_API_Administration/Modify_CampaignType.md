---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Modify Campaign Type
====================

The **Modify Campaign Type** API updates the details of a campaign type.

URL
---

The HTTP URL for **Modify Campaign Type** API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/admin/campaigntypes/<id>/modify
{% endhighlight %}

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

Method
------

POST

Header
------

The payload's request header includes Content-Type as application/json;charset=UTF-8.

Input Parameters
----------------

The following fields are input parameters:

  
| Input Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| name | Yes | string | The unique name assigned to a campaign type |

Sample Request
--------------

{% highlight voltMx %}{"name":"CampaignType"}
{% endhighlight %}

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
  "id" : "9",
  "message" : "Details updated successfully"
}
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Details updated successfully |
| Status 400 | Campaign type name should not be blank and should contain alphanumeric characters only |
| Status 401 | Unauthorized request. |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">Au</td></tr></tbody></table>
