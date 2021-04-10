---
layout: "documentation"
category: "engagement_api_guide"
---
                           


Broadcasting
============

Volt MX  Foundry Engagement Services provides flexibility to send push notifications to all active subscribers of an application with a single API request. You can send same notification to devices on multiple platforms.

> **_Important:_** The Broadcasting API is maintained here to preserve backward compatibility. We encourage you to use [Broadcasting](../Push_Message_APIs/Broadcasting.html)

URL
---

The HTTP URL for Broadcasting API is:

{% highlight voltMx %}http://<hostname or ip>:<portnumber>/<contextroot>/message
{% endhighlight %}

Content Type
------------

Based on the content format, the payload's request header includes Content-Type for:

*   **XML** is text/xml;charset=UTF-8
*   **JSON** is application/json;charset=UTF-8

### Method

POST

### Sample Request

### XML

{% highlight voltMx %}<?xml version='1.0' encoding='UTF-8'?>
<messageRequest appId="APPLICATION_ID">
  <global>
    <subscribers/>
    <platformSpecificProps/>
  </global>
  <messages>
    <message expiryTimestamp="0" overrideMessageId="0" refId="" startTimestamp="0" type="PUSH">
      <subscribers>
        **<subscriber allActive="true"/>**
      </subscribers>
      <platformSpecificProps>
      </platformSpecificProps>
      <content>
        <mimeType>text/plain</mimeType>
        <priorityService>false</priorityService>
        <data>PUSH_ MESSAGE</data>
      </content>
    </message>
  </messages>
</messageRequest>

{% endhighlight %}

### JSON

{% highlight voltMx %}{
  "messageRequest": {
    "appId": "APPLICATIONID",
    "global": {
      
    },
    "messages": {
      "message": {
        "content": {
          "priorityService": "false",
          "data": "PUSH_MESSAGE",
          "mimeType": "text/plain"
        },
        "overrideMessageId": 0,
        "startTimestamp": 0,
        "expiryTimestamp": 0,
        "subscribers": {
          "subscriber": [
            {
              "allActive": "true"
            }
          ]
        },
        "platformSpecificProps": {
          
        },
        "type": "PUSH"
      }
    }
  }
}
{% endhighlight %}

> **_Note:_** All push notifications are sent using this API will be treated as **priorityService: false**.

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
