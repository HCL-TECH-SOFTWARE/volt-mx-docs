---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Update Push Open Status to Volt MX Foundry Engagement Services
=============================================================

The **Update Push Open Status to Volt MX Foundry Engagement Services** API sends acknowledgment to Volt MX Foundry Engagement Services when a message is viewed on the device. This API is expected to be invoked by the application on the device to communicate the status like **Opened** to the engagement service.  

This is not a secure API and no credentials are needed to invoke this API.

Use Case
--------

The user receives the push message on the device and wishes to communicate with engagement server about the status like message was opened.The push ID can be obtained from the push received on the device.

**URL**
-------

The HTTP URL for Update Push Open Status to Volt MX Foundry Engagement Services API is:

{% highlight voltMx %}http://<host or ip>:<port>/api/v1/messages/open/$pushId
{% endhighlight %}

> **_Note:_** Update Push Open Status to Volt MX Foundry Engagement Services API does not require authentication.

Method
------

GET

Input Parameters
----------------

The following fields are input parameters:

  
| Input Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| pushId | Yes | long | Unique ID assigned to a push message |

Sample Response
---------------

{% highlight voltMx %}{
  "id" : "5548467000644206387",
  "message" : "Succesfully updated the Message Status"
}
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Succesfully updated the message status |
| Status 400 | Push was not delivered with the provided ID |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request. |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
