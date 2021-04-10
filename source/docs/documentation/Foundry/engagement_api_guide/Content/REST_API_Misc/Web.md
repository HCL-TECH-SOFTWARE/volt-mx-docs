---
layout: "documentation"
category: "engagement_api_guide"
---
                             


Web
===

The **Web** API connects a device user to FCM HTTP connection server.

URL
---

The HTTP URL for Web API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/connectiontest/web/fcm/appid
{% endhighlight %}

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

Method
------

GET

Input Parameters
----------------

The following fields are input parameters:

  
| Input Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| appId | Yes | alphanumeric | Unique ID assigned to the app |

Sample Response
---------------

{% highlight voltMx %}{
"id" : "ApplicationID"  
"message" : "WebFCM Cloud Connection Test Successful.",  
}  

{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | WebFCM cloud connection test successful |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">8.4</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">DR</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">DR</td></tr></tbody></table>
