---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Delete Campaign
===============

The **Delete Campaign** API deletes an unpublished Campaign from Volt MX Foundry Engagement server, if the Campaign is not in use. This service accepts the Campaign ID as an input parameter to delete a Campaign.

URL
---

The HTTP URL for **Delete Campaign** API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/campaigns/<id>/delete
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
| Campaign ID | Yes | long | The unique id assigned to the campaign |

Sample Response
---------------

{% highlight voltMx %}{
  "id" : "2",
  "message" : "Campaign deleted successfully"
}
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Campaign deleted successfully |
| Status 400 | Running campaigns can not be deletedInvalid campaign ID provided or no campaign found with given ID |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
