---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Get User Details by ID
======================

The **Get User Details by ID** API accepts the **User ID** as an input parameter and fetches a user information matching with the user ID.

URL
---

The HTTP URL for the **Get User Details by ID** API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/accessmgmt/users/<id>
{% endhighlight %}

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

Method
------

GET

Output Parameters
-----------------

The following fields are output parameters:

  
| Output Parameter | Type | Description |
| --- | --- | --- |
| id | long | A unique ID assigned to a user |
| email | string | Email ID of an user |
| displayName | string | Name of the user |
| mobileNo | long | Mobile number of the user |
| activeFlag | boolean | Whether a user is active or inactive |
| lastModifiedBy | string | When the user who last modified the user details |
| lastModifiedDate | string | Date on which the user details were last modified |
| createdDate | string | When the user was created |
| createdBy | string | Displays name of a user who created the group |
| allowAllApps | boolean | Whether access to all apps is allowed |
| selectedAppIds | string | Displays the selected application IDs |
| userName | string | Name of the administrator |
| selectedPermissionIds |   | An array of selected permission IDs |
| selectedGroupIds |   | An array of selected groups IDs |

Sample Response
---------------

{% highlight voltMx %}            {
  "id" : 3,
  "email" : "aron.hale@voltmx.com",
  "displayName" : "Aron Hale",
  "mobileNo" : "+919080706050",
  "activeFlag" : true,
  "lastModifiedBy" : "admin",
  "lastModifiedDate" : "06/22/2016 06:07:20 PM IST",
  "createdDate" : "06/22/2016 05:51:39 PM IST",
  "createdBy" : "admin",
  "userName" : "108",
  "selectedPermissionIds" : [ 16, 18, 17 ],
  "selectedGroupIds" : [ 1 ]
}
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Array of user details |
| Status 400 | Invalid user ID provided or no user found with provided ID |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
