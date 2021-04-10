---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Fetch All Email API
===================

The **Fetch All Email API** API accepts the Email ID or User ID as an input parameter and returns all the sent email messages details.

URL
---

The HTTP URL for **Fetch All Email** API is:

{% highlight voltMx %}http://<host or ip>:<port>/api/v1/email/fetch
{% endhighlight %}

> **_Note:_** This is not a secure API and no credentials are needed to invoke this API.

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
| emailId | Yes | string | Email ID of the user |
| id | Yes | long | Unique ID assigned to a user |

Sample Request
--------------

### With email ID

{% highlight voltMx %}{  
   "emailId":"sampleuser@sample.com"  
}  

{% endhighlight %}

### With ID

{% highlight voltMx %}{  
   "id":"xx"  
}  

{% endhighlight %}

Output Parameters
-----------------

The following fields are output parameters:

  
| Output Parameter | Level- Two | Type | Description |
| --- | --- | --- | --- |
| unreadEmails |   | long | The total number of emails as unread |
| totalEmails |   | long | The total number of emails |
| openedEmails |   | long | The total number of emails as opened |
| Emails |   |   | An array of Emails objects |
|   | fetchId | long | The unique fetch ID assigned to an email |
|   | subject | string | Email subject text |
|   | content | string | Email content text |
|   | status | string | The current status of email s submitted, cancelled, opened or rejected |

Sample Response
---------------

{% highlight voltMx %}{
  "unreadEmails": 2,
  "totalEmails": 2,
  "openedEmails": 0,
  "Emails": [
    {
      "fetchId": "7129463178641309424",
      "subject": "Online Sale",
      "content": "Happy Weekend Sale",
      "status": "Submitted"
    },
    {
      "fetchId": "6791140933766021031",
      "subject": "Flipkart shopping sale",
      "content": "",
      "status": "Submitted"
    }
  ]
}
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Submitted |
| Status 400 | Invalid Request. Request method not allowedNo audience found with the given email IDNo audience found with the given id |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
