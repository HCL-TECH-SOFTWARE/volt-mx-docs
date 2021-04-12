---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Pause Campaign
==============

The **Pause Campaign** API pauses a running campaign.This campaign can later resume with a call to the Resume Campaign API.

Use Case
--------

You run various campaigns, but there may come a time when you want to give one or more of them a break. Suppose you run a campaign (called warm biz) to sell warm jackets.The campaign is to run only during winter. When the temperatures rise in summer, you pause the campaign. When winter returns, you resume the warm biz campaign.

URL
---

The HTTP URL for Pause Campaign service is:

{% highlight voltMx %}http://<host> : port>/api/v1/campaigns/id/pause
{% endhighlight %}

This service implements the Gateway Filter for Authentication to authenticate access of the service by a user

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
  "id" : "4",
  "message" : "Campaign execution paused successfully. "
}
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Campaign execution paused successfully |
| Status 400 | Invalid campaign ID provided or no campaign found with given ID |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
