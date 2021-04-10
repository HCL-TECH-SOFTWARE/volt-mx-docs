---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Resume Campaign
===============

The **Resume Campaign** API resumes a paused campaign.The Resume Campaign API takes Campaign ID as an input parameter

Use Case
--------

You run various campaigns, but there may come a time when you want to give one or more of them a break. Let us assume you run a campaign (named as warm biz) to sell warm jackets to run only in winter season. When the temperatures rise in summer, you pause the campaign. Then, when the winter season is back, you resume the warm biz campaign.

URL
---

The HTTP URL for Resume Campaign API is:

{% highlight voltMx %}http://<host> : port>/api/v1/campaigns/id/resume
{% endhighlight %}

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

Method
------

POST

Input Parameters
----------------

The following fields are input parameters:

  
| Input Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| Campaign ID | Yes | long | The unique ID assigned to a campaign |

Sample Response
---------------

{% highlight voltMx %}{
  "id" : "4",
  "message" : "Campaign execution resumed successfully. "
}
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Campaign execution resumed successfully |
| Status 400 | Invalid request format |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
