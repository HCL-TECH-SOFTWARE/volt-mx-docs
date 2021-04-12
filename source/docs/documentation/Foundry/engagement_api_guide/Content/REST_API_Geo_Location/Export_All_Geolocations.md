---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Export All Geolocations
=======================

The **Export All Geolocations** API exports all geolocations in the engagement server to a .csv file.

URL
---

The HTTP URL for **Export All Geolocations** API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/geolocations/export?exportAll=true
{% endhighlight %}

This API is protected and implements Gateway Filter for Authentication/Basic Authentication to authenticate access of the API by a user.

Method
------

GET

Output Parameters
-----------------

If the export is successful, a .csv file containing the geolocation data is returned. Otherwise, an error message is returned.

The following fields are output parameters if the export fails.

  
| Output Parameter | Type | Description |
| --- | --- | --- |
| message | string | The error message if the export fails. |

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Successful export |
| Status 401 | Unauthorized request |
| Status 500 | Failed to export the data |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.3</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">SS</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">SS</td></tr></tbody></table>
