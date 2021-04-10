---
layout: "documentation"
category: "engagement_api_guide"
---
                             


Modify Windows Details
======================

The **Modify Windows Details** API updates Windows certificate..

URL
---

The HTTP URL for **Modify Windows details** API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/applications/<id>/windows
{% endhighlight %}

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

> **_Note:_** <id>: While creating an app, a unique ID is assigned to an application. Provide the unique identifier for the app in REST URL.  

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
| App ID | Yes | long | The unique ID assigned to an app. It is supplied in REST URL |
|  windowsPhone7 | Optional | boolean | If Windows Phone 7 device is required or not |
|  windowsPhone8 | Optional | boolean | If Windows Phone 8 device is required or not |
| wndows8ClientSecret  | Yes | alphanumeric | Required to enable the target platform. |
| windows8ClientId | Yes | alphanumeric | Required to enable the target platform. |

Sample Request
--------------

{% highlight voltMx %}{  
   "windowsPhone7" : true,  
   "windowsPhone8" : true,  
   "windows8ClientSecret":"xxxx",  
   "windows8ClientId":"xxx"  
}  

{% endhighlight %}

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
"message" : "Details updated successfully",  
"id" : "appId"  
}  

{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Details updated successfully |
| Status 400 | Windows8 cloud credentials are invalid |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
