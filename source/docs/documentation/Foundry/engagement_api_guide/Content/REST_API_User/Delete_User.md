---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Delete User
===========

The **Delete User** API deletes a user from Engagement Services. This API accepts the User ID as an input parameter to delete a user.

URL
---

The HTTP URL for **Delete User** API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/accessmgmt/users/<id>/delete
{% endhighlight %}

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

Method
------

POST

Header
------

The payload's request header includes Content-Type as application/json;charset=UTF-8.

Input Parameters
----------------

Following fields are the input parameters:

  
| Input Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| User ID | Yes | long | .The unique ID assigned to a user. |

Sample Response
---------------

{% highlight voltMx %}{  
   "message" : "User  deleted  successfully ",  
   "id" : "userID"  
}  

{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | User deleted successfully |
| Status 400 | Delete is not allowed on active usersInvalid user ID provided or no user found with provided ID |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
