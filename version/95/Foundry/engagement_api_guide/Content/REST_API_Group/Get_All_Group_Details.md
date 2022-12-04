
# Get All Group Details

The **Get All Group Details** API fetches details of all the groups.

## URL

The HTTP URL for the **Get All Group Details** API is:

```
http://<host>:<port>/api/v1/accessmgmt/groups
```

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter | Level-Two             | Type    | Description                                  |
| ---------------- | --------------------- | ------- | -------------------------------------------- |
| total            |                       | long    | Total number of groups                       |
| groups           |                       |         | An array of groups objects                   |
|                  | id                    | long    | The unique ID assigned to the group          |
|                  | email                 | string  | The email ID of the group                    |
|                  | groupName             | string  | The displayed name of the group              |
|                  | groupDescription      | string  | Description of the group                     |
|                  | activeFlag            | boolean | Whether the group is active or inactive      |
|                  | lastModifiedBy        | string  | User who last modified the group             |
|                  | lastModifiedDate      | string  | When the group was last modified             |
|                  | createdDate           | string  | When the group was created                   |
|                  | createdBy             | string  | User who created the group                   |
|                  | allowAllApps          | boolean | Whether the group has access to all the apps |
|                  | selectedUserIDs       |         | An array of selected user IDs                |
|                  | selectedPermissionIds |         | An array of selected permission IDs          |

## Sample Response

```
{
"total" : 2,
"groups" : [ {
"id" : 1,
"groupName" : "AdminGroup",
"email" : "admin@hcl.com",
"groupDescription" : "Admin Groups",
"activeFlag" : true,
"lastModifiedBy" : "",
"lastModifiedDate" : "06/15/2016 02:00:18 PM IST",
"createdDate" : "06/15/2016 02:00:18 PM IST",
"createdBy" : "admin",
"allowAllApps" : true,
"selectedUserIds" : [ 1, 3, 4, 5, 6, 2 ],
"selectedPermissionIds" : [ 16, 18, 15, 17, 14, 2, 4, 5, 6, 11, 1, 3, 7, 8, 13, 10, 12, 9 ]
}, {
"id" : 2,
"groupName" : "Engagement Services Group",
"email" : "aron.hale@voltmx.com",
"groupDescription" : "Engagement Services group ",
"activeFlag" : true,
"lastModifiedBy" : "admin",
"lastModifiedDate" : "06/23/2016 12:55:53 PM IST",
"createdDate" : "06/23/2016 12:55:25 PM IST",
"createdBy" : "admin",
"allowAllApps" : true,
"selectedUserIds" : [ 1, 3 ],
"selectedPermissionIds" : [ 16, 18, 15, 17, 14, 2, 4, 5, 6, 11, 1, 3, 7, 8, 13, 10, 12, 9 ]
} ]
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Array of group details            |
| Status 400 | Invalid request format            |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
