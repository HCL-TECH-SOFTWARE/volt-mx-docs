---
layout: "documentation"
category: "engagement_api_guide"
---
                            

Get Apple WWRD Certificate
==========================

The **Get Apple WWRD Certificate** API is used to get Apple WWRD certificate.

URL
---

The HTTP URL for **Get Apple WWRD Certificate** API is:

{% highlight voltMx %}http://<<host>>:<<port>>/api/v1/passcerts/applewwrdc
{% endhighlight %}

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

Method
------

GET

Sample Response
---------------

{% highlight voltMx %}{
  "issuerDN": {
    "commonName": "Apple Root CA",
    "orginationUnit": "Apple Certification Authority",
    "orgination": "US",
    "country": ""
  },
  "subjectDN": {
    "subjectCN": "Apple Worldwide Developer Relations Certification Authority",
    "subjectOU": "Apple Worldwide Developer Relations",
    "subjectUID": ""
  },
  "startDateStr": "02/15/2008 12:26:35 AM GMT+05:30",
  "expiryDateStr": "02/15/2016 12:26:35 AM GMT+05:30"
}
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Pass cert |
| Status 400 | Bad request |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
