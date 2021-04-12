---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Registering a Device to Receive Push Notifications for a Pass
=============================================================

The **Registering a Device to Receive Push Notifications for a Pass** API is used to register a device so it can receive push notification for a pass.

URL
---

The HTTP URL for Registering a Device to Receive Push Notifications for a Pass API is:

{% highlight voltMx %}http://<<host>>:<<port>>/api/v1/devices/deviceLibraryIdentifier/registrations/passTypeIdentifier/serialNumber
{% endhighlight %}

This service implements Gateway Filter for Authentication/Basic Authentication to authenticate access of the service by a user.

Method
------

POST

Header
------

The payload's request header includes authorization: ApplePass xxxxx

Input Parameters
----------------

The following fields are input parameters:

  
| Input Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| Apple Pass Authroization | Yes | string | Apple pass authorization details |

Sample Request
--------------

{% highlight voltMx %}{"pushToken":"xxxxxx"}
{% endhighlight %}

Sample Response
---------------

{% highlight voltMx %}{  
   "message": "Details added successfully",  
   "id": "KPID"  
}  

{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Details added successfully |
| Status 400 | Payload should contain value for 'pushToken' keyUnable to parse the input payload or Invalid JSON payload |
| Status 401 | Invalid authentication token |
| Status 500 | Failed to save pass device registration |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
