---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Unsubscribe Users or Delete Users
=================================

The **Unsubscribe Users or Delete Users** API accepts the KSID as an input parameter and deletes a user from Engagement server.

URL
---

The HTTP URL for Unsubscribe Users or Delete Users API is:

{% highlight voltMx %}http://<<host>>:<<port>>/api/v1/subscribeaudience/XXXXXX
{% endhighlight %}

This API implements Gateway Filter for Authentication/Basic Authentication to authenticate access of the API by a user.

Method
------

DELETE

Input Parameters
----------------

The following fields are input parameters:

  
| Input Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| ksid | Yes | long | Volt MX Subscription Identification number of the application |

Sample Response
---------------

{% highlight voltMx %}{
  "id" : "5979294531974952062",
  "message" : "Audience Member deleted successfully"
}
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Audience member deleted successfully |
| Status 400 | No Audience Member found mapping to the given KSID or Audience Registration ID |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
