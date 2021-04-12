---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Create Audience Attribute
=========================

The **Create Audience Attribute** API adds the audience attributes that needs to be associated with an audience.

URL
---

The HTTP URL for **Create Audience Attribute** API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/admin/attributes
{% endhighlight %}

Method
------

POST

Header
------

The payload's request header includes Content-Type as application/json;charset=UTF-8.

Input Parameters
----------------

The following fields are the input parameters:

  
| Input Parameter | Required | Type | Description |
| --- | --- | --- | --- |
|  attributeName | Yes | string | The unique name assigned to an attribute |
|  attributeType | Yes | string | The type of an attribute |
| allowedValues | Optional | string | Values assigned to an attribute |
|  attributeRequired | Optional | boolean | If the attribute is required or not |
| allowedReconciliationKey | Optional | boolean | If the reconciliation key is required or not |

Sample Request
--------------

{% highlight voltMx %}{  
  "attributeName" : "PhoneNumber",  
  "attributeType" : "Number",  
  "allowedValues" : "",  
  "attributeRequired" : false,  
  "allowedReconciliationKey" : false  
}  

{% endhighlight %}

> **_Note:_** The following permissions are required to create a user attribute:  
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

{% highlight voltMx %}{
  "id" : "3",
  "message" : "Details added successfully"
}
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Details added successfully |
| Status 400 | Invalid Request. Request Method not allowedAttribute already exists with this nameInvalid Attribute Type. Allowed values are : String, Number, Pick List, Date |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">Au</td></tr></tbody></table>
