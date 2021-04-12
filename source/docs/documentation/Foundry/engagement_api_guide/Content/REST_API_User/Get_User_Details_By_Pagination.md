---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Get User Details by Pagination
==============================

The **Get User Details by Pagination** API accepts start and pageSize as input parameters and returns all users' details. The pageSize represents the maximum number of the users for which the details are to be returned. If the start is specified, the number of users that are returned are from start position to pageSize value. For example: if the start is zero and pageSize is five, then six users from position zero to five are returned.

URL
---

The HTTP URL for **Get User Details by Pagination** API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/accessmgmt/users?start=0&pageSize=10
{% endhighlight %}

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

Method
------

GET

Output Parameters
-----------------

The following fields are output parameters:

  
| Output Parameter | Level-Two | Type | Description |
| --- | --- | --- | --- |
| total |   | long | Displays the total number of users |
| Users |   |   | An array of user properties |
|   | id | long | A unique ID assigned to a user |
|   | email | string | Email ID of an user |
|   | displayName | string | Name of the user |
|   | mobileNo | long | Mobile number of the user |
|   | activeFlag | Boolean | Displays if the user is active or inactive |
|   | lastModifiedBy | string | Name of the user who last modified the user details |
|   | lastModifiedDate | string | Date on which the user details were last modified |
|   | createdDate | string | The date on which the user was created |
|   | createdBy | string | Displays a user name who created the group |
|   | userName | string | name of the administrator |
|   | selectedPermissionIds |   | An array of selected permission IDs |
|   | selectedGroupIds |   | An array of selected groups IDs |

Sample Response
---------------

{% highlight voltMx %}{
  "total" : 3,
  "users" : [ {
    "id" : 1,
    "email" : "admin@hcl.com",
    "displayName" : "Administrator",
    "mobileNo" : "",
    "activeFlag" : true,
    "lastModifiedBy" : "",
    "lastModifiedDate" : "06/15/2016 02:00:18 PM IST",
    "createdDate" : "06/15/2016 02:00:18 PM IST",
    "createdBy" : "admin",
    "userName" : "admin",
    "selectedPermissionIds" : [ ],
    "selectedGroupIds" : [ 1 ]
  }, {
    "id" : 2,
    "email" : "mobilefoundryadmin@hcl.com",
    "displayName" : "Foundry Administrator",
    "mobileNo" : "",
    "activeFlag" : true,
    "lastModifiedBy" : "",
    "lastModifiedDate" : "06/15/2016 02:00:18 PM IST",
    "createdDate" : "06/15/2016 02:00:18 PM IST",
    "createdBy" : "mobilefoundryadmin",
    "userName" : "mobilefoundryadmin",
    "selectedPermissionIds" : [ ],
    "selectedGroupIds" : [ 1 ]
  }, {
    "id" : 3,
    "email" : "aron.hale@voltmx.com",
    "displayName" : "Aron Hale",
    "mobileNo" : "+919080706050",
    "activeFlag" : true,
    "lastModifiedBy" : "admin",
    "lastModifiedDate" : "06/22/2016 05:51:39 PM IST",
    "createdDate" : "06/22/2016 05:51:39 PM IST",
    "createdBy" : "admin",
    "userName" : "108",
    "selectedPermissionIds" : [ ],
    "selectedGroupIds" : [ ]
  } ]
}
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Array of user details |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
