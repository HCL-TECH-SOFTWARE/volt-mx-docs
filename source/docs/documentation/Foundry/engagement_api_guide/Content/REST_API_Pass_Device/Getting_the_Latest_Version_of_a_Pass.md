---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Getting the Latest Version of a Pass
====================================

The **Getting the Latest Version of a Pass** API fetches the latest version of a pass.

URL
---

The HTTP URL for **Getting the Latest Version of a Pass** API is:

{% highlight voltMx %}http://<<host>>:<<port>>/api/v1/passes/passTypeIdentifier/serialNumber
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

{% highlight voltMx %}.pkpass file stream
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | .pkpass file stream |
| Status 400 | Invalid requestPass is not found or pass is not delivered |
| Status 401 | Invalid authentication token |
| Status 304 | Pass is not modified |
| Status 500 | Unable to get the pkPass file |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
