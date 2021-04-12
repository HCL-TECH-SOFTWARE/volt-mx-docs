---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Pass Distribution with Import pkPass
====================================

The **Pass Distribution with Import PKPass** API imports pkPasses.

URL
---

The HTTP URL for **Pass Distribution with Import pkPass** API is:

{% highlight voltMx %}http://<<host>>:<<port>>/api/v1/message/pass/import
{% endhighlight %}

The Create App service implements Gateway Filter for Authentication to authenticate access of the service by a user.

Method
------

POST

Sample Request
--------------

{% highlight voltMx %}"pkPass": pkPassFile,
passContent: {
  "recipients": {
    "recipient": [
      {
        "id": "48494"
      }
    ]
  },
   "passIntegrationConfig": {
    "passIssueNotificationDetails": [
      {
        "channel": "SMS",
        "messageContent": "Pass Issue SMS",
        "enabled": true
      },
      {
        "channel": "EMAIL",
        "subject": "Pass Issued",
        "senderEmail": "abcd@gmail.com",
        "senderName": "Test User",
        "messageContent": "Pass Issue content Email &lt;a href='##Email Pass Link##'&gt;click here&lt;/a&gt;",
        "enabled": true
      }
    ],
    "passUpdateNotificationDetails": [
      {
        "channel": "SMS",
        "messageContent": "Pass Update SMS",
        "enabled": true
      },
      {
        "channel": "EMAIL",
        "subject": "Pass Update",
        "senderEmail": "abcd@gmail.com",
        "senderName": "Test User",
        "messageContent": "Pass update content Email",
        "enabled": true
      }
    ]
  },
  "priority": true,
  "startTimeStamp": 0,
  "endTimeStamp": 0
}
{% endhighlight %}

Sample Response
---------------

{% highlight voltMx %}{"requestId":"2318508739642895844","description":"Request Queued. "}
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Request queued |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
