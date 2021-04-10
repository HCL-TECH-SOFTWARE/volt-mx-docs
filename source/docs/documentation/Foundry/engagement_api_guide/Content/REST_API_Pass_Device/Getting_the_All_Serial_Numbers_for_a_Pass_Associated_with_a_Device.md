---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Getting the All Serial Numbers for a Pass Associated with a Device
==================================================================

The Getting the All Serial Numbers for a Pass Associated with a Device API fetches all the serial numbers for a specific pass associated with a device.

URL
---

The HTTP URL for Getting the All Serial Numbers for a Pass Associated with a Device API is:

{% highlight voltMx %}http://<<host>>:<<port>>/api/v1/devices/deviceLibraryIdentifier/registrations/passTypeIdentifier?passesUpdatedSince=tag
{% endhighlight %}

Method
------

GET

Output Parameters
-----------------

The following fields are output parameters:

  
| Output Parameter | Type | Description |
| --- | --- | --- |
| passesUpdatedSince=timeStamp | string | time stamp since the pass is updated. |

Sample Response
---------------

{% highlight voltMx %}{"lastUpdated":"1410171755358",  
"serialNumbers":["gT6zrHkaW","gT6zrHkaW","gT6zrHkaW","gT6zrHkaW","gT6zrHkaW"]}  

{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Array of serial numbers |
| Status 400 | Invalid request. Device is not registered with this pass |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
