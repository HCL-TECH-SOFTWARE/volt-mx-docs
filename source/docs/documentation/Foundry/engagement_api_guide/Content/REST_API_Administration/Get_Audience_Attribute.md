---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Get Audience Attribute by ID
============================

The **Get Audience Attribute by ID** API provides the attribute details of an audience member. This API accepts the audience attribute ID as an input parameter and responds with details matching the ID.

URL
---

The HTTP URL for **Get Audience Attribute by ID** API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/admin/attributes/<id>
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
| id | long | Unique ID assigned to an audience attribute |
| attributeName | string | Audience attribute name such as: street address |
| attributeType | NA | The selected attribute type as string, number, pick list or date |
| allowedValues | string | Based on selected attribute type, allowed values are entered. |
| attributeRequired | boolean | If the attribute is required or not |
| allowedReconciliationKey | boolean | If the reconciliation key is required or not |
| lastModifiedBy | string | A user name that shows who last modified the audience attributes |
| lastModifiedDateStr | string | Date on which the audience attributes was last modified |
| createdDateStr | string | Date on which the audience attribute is created |
| createdBy | string | A user name that shows who created the application |

Sample Response
---------------

> **_Note:_** Either of the following permissions is required to get a user's attributes:  
ROLE\_CONFIGURATIONS  
ROLE\_CREATE\_ATTRIBUTES  

{% highlight voltMx %}{
  "id" : 2,
  "attributeName" : "Social Security No.",
  "attributeType" : "Number",
  "allowedValues" : "",
  "attributeRequired" : false,
  "allowedReconciliationKey" : false,
  "lastModifiedBy" : "admin",
  "lastModifiedDateStr" : "08/04/2016 10:49:32 AM EDT",
  "createdDateStr" : "08/04/2016 10:49:32 AM EDT",
  "createdBy" : "admin"
}
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Array of audience attributes |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">Au</td></tr></tbody></table>
