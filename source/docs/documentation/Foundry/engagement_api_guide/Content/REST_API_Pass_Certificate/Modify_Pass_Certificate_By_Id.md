---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Modify Pass Certificate by ID
=============================

The Modify Pass Certificate by ID API modifies the details of an pass certificate.

URL
---

The HTTP URL for Modify Pass Certificate by ID API is:

{% highlight voltMx %}http://<<host>>:<<port>>/api/v1/passcerts/id
{% endhighlight %}

This service implements ‘Gateway Filter for Authentication’ to authenticate access of the service by a user.

Method
------

POST

Sample Request
--------------

{% highlight voltMx %}

FORM params:

passCert: .p12 file

passCertPassPhrase: password

certName: certificate Name


{% endhighlight %}

Sample Response
---------------

{% highlight voltMx %}{  
	"message": "Details updated successfully",
	   "id": "id"
}
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Details updated successfully |
| Status 400 | Invalid request format |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
