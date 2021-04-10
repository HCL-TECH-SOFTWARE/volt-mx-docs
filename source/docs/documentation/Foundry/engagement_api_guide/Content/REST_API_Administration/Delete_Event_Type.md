---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Delete Event Type
=================

The **Delete Event Type** API deletes an event from Engagement Services.

URL
---

The HTTP URL for **Delete Event Type** API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/admin/eventtypes/<id>/delete
{% endhighlight %}

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

Method
------

POST

Header
------

The payload's request header includes Content-Type for JSON as application/json;charset=UTF-8.

Input Parameters
----------------

The following fields are input parameters:

  
| Input Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| id | Yes | long | The unique ID assigned to an event |

Sample Response
---------------

{% highlight voltMx %}{
  "id" : "6",
  "message" : "Event Type deleted Successfully"
}
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Event type deleted successfully |
| Status 400 | Unable to delete the event type as it is used in events |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">Au</td></tr></tbody></table>
