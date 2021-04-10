---
layout: "documentation"
category: "engagement_api_guide"
---
                             


Publish App
===========

The **Publish App** service publishes an application that is added into Volt MX Foundry Engagement Services. The service accepts App ID as an input parameter to publish an application.

URL
---

The HTTP URL for **Publish App** API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/applications/id/publish
{% endhighlight %}

This service implements Gateway Filter for Authentication/Basic Authentication to authenticate access of the service by a user.

> **_Note:_** Provide the unique appId assigned to an app to publish it.  

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
| Application ID | Yes | long | The unique ID assigned to the application. |

Output Parameters
-----------------

The following fields are output parameters:

  
| Output Parameter | Type | Description |
| --- | --- | --- |
| id | long | Unique app ID assigned to an app |
| message | string | Response status message |

Sample Response
---------------

{% highlight voltMx %}{
  "id" : "300966548262167",
  "message" : "Application published successfully"
}
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Application published successfully |
| Status 400 | Application not found for publishing/unpublishing |
| Status 401 | Unauthorized request. |
| Status 500 | Server failure to process request. |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
