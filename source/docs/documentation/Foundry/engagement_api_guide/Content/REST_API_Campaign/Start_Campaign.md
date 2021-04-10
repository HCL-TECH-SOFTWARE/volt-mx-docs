---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Start Campaign
==============

The **Start Campaign** API starts an already created campaign from Volt MX Foundry Engagement Services that is scheduled to run on a future date. This service accepts the Campaign ID as input parameter to start a campaign.

URL
---

The HTTP URL for **Start Campaign** API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/campaigns/<id>/start
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
| Campaign ID | Yes | long | The unique ID assigned to a campaign |

Sample Response
---------------

{% highlight voltMx %}{
  "id" : "3",
  "message" : "Campaign execution intiated successfully. "
}
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Campaign execution intiated successfully |
| Status 400 | Invalid request format |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
