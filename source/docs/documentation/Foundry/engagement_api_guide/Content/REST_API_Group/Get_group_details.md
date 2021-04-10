---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Get Group Details by ID
=======================

The **Get Group Details by ID** API accepts a group ID as an input parameter and returns all the group details. The ID is a group's unique ID.

URL
---

The HTTP URL for **Get Group Details by ID** API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/accessmgmt/groups/<id>
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
| id | long | The unique ID assigned to the group |
| email | string | The email ID of the group |
| groupName | string | The displayed name of the group |
| groupDescription | string | Description of the group |
| activeFlag | boolean | Whether the group is active or inactive |
| lastModifiedBy | string | User who last modified the group |
| lastModifiedDate | string | When the group was last modified |
| createdDate | string | When the group was created |
| createdBy | string | User who created the group |
| allowAllApps | boolean | Whether the group has access to all the apps |
| selectedAppIds |   | An array of selected app IDs |
| selectedUserIDs |   | An array of selected user IDs |
| selectedPermissionIds |   | An array of selected permission IDs |

Sample Response
---------------

{% highlight voltMx %}{
    "id": 2,
    "groupName": "test",
    "email": "test@tmail.com",
    "groupDescription": "",
    "activeFlag": true,
    "lastModifiedBy": "admin",
    "lastModifiedDate": "07/15/2015 02:45:35 AM EDT",
    "createdDate": "07/15/2015 02:45:09 AM EDT",
    "createdBy": "admin",
    "allowAllApps": false,
    "selectedAppIds": [
        "AppForAll"
    ],
    "selectedUserIds": [
        1,
        3
    ],
    "selectedPermissionIds": [
        13,
        15,
        12,
        14
    ]
}
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Array of group details |
| Status 400 | Invalid request format |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
