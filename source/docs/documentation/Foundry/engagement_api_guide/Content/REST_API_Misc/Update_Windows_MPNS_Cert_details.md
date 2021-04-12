---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Update Windows MPNS Cert details
================================

The **Update Windows MPNS Cert Details** API updates the MPNS certificate.

URL
---

The HTTP URL for **Update Windows MPNS Cert Details** API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/applications/{appId}/windows
{% endhighlight %}

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

Method
------

POST

Input Parameters
----------------

The following fields are the input parameters:

  
| Input Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| appId | Yes | alphanumeric | Unique ID assigned to the app |

Sample Request
--------------

{% highlight voltMx %}Form Params:
mpnsCert:  .p12 file
mpnsCertPassPhrase: Certificate password
{% endhighlight %}

Sample Response
---------------

{% highlight voltMx %}{
 "message" : "Details updated successfully",
 "id" : "appid"
}
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Details updated successfully |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">DR</td></tr></tbody></table>
