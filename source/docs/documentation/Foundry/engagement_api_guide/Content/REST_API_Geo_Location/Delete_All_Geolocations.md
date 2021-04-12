---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Delete All Geolocations
=======================

The **Delete All Geolocations** API deletes all geolocations present in the Engagement server. Only locations that are not associated with any segments will be deleted. If there are geoboundaries in the engagement server that are associated with segments, they will not be deleted.

URL
---

The HTTP URL for **Create Geolocation** API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/geolocations/delete?deleteAll=true
{% endhighlight %}

This API is protected and implements Gateway Filter for Authentication to authenticate access of the API by a user.

Method
------

POST

Header
------

The payload's request header includes Content-Type as application/json;charset=UTF-8.

Output Parameters
-----------------

The following fields are output parameters:

  
| Output Parameter | Type | Description |
| --- | --- | --- |
| message | string | Message associated with response status code. |
| id | long | Unique ID associated with this transaction. |

Sample Response
---------------

{% highlight voltMx %}{  
   "message" : "Location(s) which are not assigned to Segments are deleted successfully.",  
   "id" : "1"  
)  

{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Location(s) which are not assigned to Segments are deleted successfully. |
| Status 400 | Only Location(s) which are not assigned to Segments are allowed to be deleted. |
| Status 401 | Unauthorized request. |
| Status 500 | Failed to delete Location(s). |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.3</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">SS</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">SS</td></tr></tbody></table>
