---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Cancel Message
==============

The **Cancel Message** API cancels a SMS messages(s) that is in a message queue to be sent to users. You can cancel only those SMS messages that are scheduled later.

> **_Note:_** This API will cancel message for both Text as well as Voice SMS.

URL
---

The HTTP URL for **Cancel Message** API is:

{% highlight voltMx %}/api/v1/messages/sms/{sms_request_id}
{% endhighlight %}

> **_Note:_** You need to fetch SMS request ID to cancel a SMS message. You can view SMS request ID under Settings > Status > SMS Queue > Request ID.

This service implements ‘Gateway Filter for Authentication’ to authenticate access of the service by a user.

Method
------

DELETE

Header
------

The payload's request header includes Content-Type as application/json;charset=UTF-8.

Input Parameters
----------------

The following fields are input parameters:

  
| Input Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| Request ID | Yes | long | The unique ID assigned to a SMS |

Sample Response
---------------

{% highlight voltMx %}{
  "id" : "",
  "message" : "Cancelled  4 message entries of the Message with ID : 4713025406550859686"
}
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Cancelled 4 message entries of the Message with ID : xxxxxxxxx |
| Status 400 | Invalid Request. Request method not allowed |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
