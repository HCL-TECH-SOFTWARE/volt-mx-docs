---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Download Windows MPNS Certificate
=================================

The **Download Windows MPNS Certificate** API downloads the Windows MPNS certificate.

URL
---

The HTTP URL for **Download Windows MPNS Certificate** API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/applications/downloadwindowscert?appId={appId}
{% endhighlight %}

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

> **_Note:_** <id>: While creating an app, a unique ID is assigned to an application. Provide the unique identifier for the app in REST URL.  

Method
------

GET

Header
------

The payload's request header includes Content-Type as application/json;charset=UTF-8.

Input Parameters
----------------

The following fields are input parameters:

  
| Input Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| Application ID | Yes | long | The unique id assigned to the application |

Sample Response
---------------

{% highlight voltMx %}Cerificate to download
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Details added successfully |
| Status 400 | Invalid request format |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
