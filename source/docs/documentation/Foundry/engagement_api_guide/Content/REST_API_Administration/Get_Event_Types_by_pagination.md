---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Get Event Types by Pagination
=============================

The **Get Event Types by Pagination** API accepts start and pageSize as input parameters and returns all event types details like total number of events, and an array of event types. The pageSize represents the maximum number of the event types for which the details are to be returned. If the start is specified, the number of the event types that are returned are from start position to pageSize value. For example: if the start is zero and pageSize is five, then six event types from position zero to five are returned.

URL
---

The HTTP URL for **Get Event Types by Pagination** API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/admin/eventtypes?start=0&pageSize=10
{% endhighlight %}

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

Method
------

GET

Output Parameters
-----------------

The following fields are output parameters:

  
| Output Parameter | Level-Two | Type | Description |
| --- | --- | --- | --- |
| total |   | long | Total number of event types |
| eventTypes |   |   | An array of event types |
|   | id | long | Unique ID assigned to an event type |
|   | name | string | The unique name assigned to an event type |

Sample Response
---------------

{% highlight voltMx %}{
  "total" : 5,
  "eventTypes" : [ {
    "name" : "Business",
    "id" : 1
  }, {
    "name" : "Finance",
    "id" : 2
  }, {
    "name" : "Coupon",
    "id" : 3
  }, {
    "name" : "Travel",
    "id" : 4
  }, {
    "name" : "Entertainment",
    "id" : 5
  } ]
}
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Array of event types |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">Au</td></tr></tbody></table>
