---
layout: "documentation"
category: "engagement_api_guide"
---
                           


Update Push Open Status to Volt MX Foundry Engagement Services
=============================================================

The **Update Push Open Status to Engagement Services** API is used to send acknowledgment to Volt MX Foundry Engagement Services when a message is viewed properly.

> **_Important:_** The Update Push Open Status to Volt MX Foundry Engagement Services API is maintained here to preserve backward compatibility.  
We encourage you to use [Update Push Open Status to Volt MX Foundry Engagement Services](../Push_Message_APIs/pdate_Push_Open_Status_to_VoltMX_Foundry_Messaging.html)

**URL**
-------

The HTTP URL for Update Push Open Status to Volt MX Foundry Engagement Services API is:

{% highlight voltMx %}http://<host or ip>:<port>/service/entrydata/status/$pushId
{% endhighlight %}

Method
------

POST

Input Parameters
----------------

PushID is appended at the end of the URL.

Response Code
-------------

Success response code is _200._

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
