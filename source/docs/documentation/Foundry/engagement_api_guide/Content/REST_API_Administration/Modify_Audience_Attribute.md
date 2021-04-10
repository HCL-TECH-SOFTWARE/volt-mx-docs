---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Modify Audience Attribute
=========================

The **Modify Audience Attribute** API updates the attributes of an audience.

URL
---

The HTTP URL for **Modify Audience Attribute** API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/admin/attributes/<id>/modify
{% endhighlight %}

This is a secure API and this service implements Gateway Filter for Authentication to authenticate access of the service by a user..

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
| attributeName | Yes | string | The unique name assigned to an attribute |
| attributeType | Yes | string | The type of an attribute |
| allowedValues | Optional | string | Values assigned to an attribute |
| attributeRequired | Optional | boolean | If the attribute is required or not |
| allowedReconciliationKey | Optional | boolean | If the reconciliation key is required or not |

Sample Request
--------------

{% highlight voltMx %}{
  "attributeName" : "County Zip code",
  "attributeType" : "Number",
  "allowedValues" : "",
  "attributeRequired" : "",
  "allowedReconciliationKey" :"" 
}
{% endhighlight %}

> **_Note:_** The following permissions are required to modify a user attribute:  
ROLE\_CONFIGURATIONS  
ROLE\_CREATE\_ATTRIBUTES  

Output Parameters
-----------------

The following fields are output parameters:

  
| Output Parameter | Type | Description |
| --- | --- | --- |
| id | long | A unique ID assigned to an audience attribute |
| message | string | Response status message |

Sample Response
---------------

> **_Note:_** The returned id is the identifier in the database.

{% highlight voltMx %}{
  "id" : "4",
  "message" : "Details updated successfully"
}
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Details updated successfully |
| Status 400 | Invalid attribute type. Allowed values are : String, Number, Pick List, Date |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
