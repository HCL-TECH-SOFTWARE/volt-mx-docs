
# Get All User Details

The **Get All User Details** API fetches information about currently authenticated users.

## URL

The HTTP URL for **Get All User Details** API is:

```
http://<host>:<port>/api/v1/accessmgmt/users
```

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter | Level-Two             | Type    | Description                                         |
| ---------------- | --------------------- | ------- | --------------------------------------------------- |
| total            |                       | long    | Displays the total number of users                  |
| Users            |                       |         | An array of user properties                         |
|                  | id                    | long    | A unique ID assigned to a user                      |
|                  | email                 | string  | Email ID of a user                                  |
|                  | displayName           | string  | Name of the user                                    |
|                  | mobileNo              | long    | Mobile number of the user                           |
|                  | activeFlag            | boolean | Displays whether a user is active or inactive       |
|                  | lastModifiedBy        | string  | Name of the user who last modified the user details |
|                  | lastModifiedDate      | string  | When the user details were last modified            |
|                  | createdDate           | string  | When the user was created                           |
|                  | createdBy             | string  | Displays name of a user who created the group       |
|                  | userName              | string  | Name of the administrator                           |
|                  | selectedPermissionIds |         | An array of selected permission IDs                 |
|                  | selectedGroupIds      |         | An array of selected groups IDs                     |

## Sample Response

```
{
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
"lastModifiedDate" : "06/22/2016 06:07:20 PM IST",
"createdDate" : "06/22/2016 05:51:39 PM IST",
"createdBy" : "admin",
"userName" : "108",
"selectedPermissionIds" : [ 16, 18, 17 ],
"selectedGroupIds" : [ 1 ]
} ]
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Array of user details             |
| Status 400 | Invalid request format            |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
