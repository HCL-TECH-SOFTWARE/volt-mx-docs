
# Create Group

The **Create Group** API creates a new group. A group is a collection of users with the same security permissions. Based on requirements, an administrator can create a new group with users with required permissions.

## URL

The HTTP URL for **Create Group** API is:

```
http://<host>:<port>/api/v1/accessmgmt/groups
```

This service implements the Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter       | Required | Type    | Description                                     |
| --------------------- | -------- | ------- | ----------------------------------------------- |
| groupName             | Yes      | string  | A unique name assigned to a group               |
| email                 | Yes      | string  | An email ID assigned to a group                 |
| groupDescription      | Optional | string  | Particulars about objective of a group          |
| activeFlag            | Optional | boolean | If the group is active or not                   |
| selectedUserIds       | Optional | long    | The selected user IDs assigned to a group       |
| selectedPermissionIds | Yes      | long    | The selected permission IDs assigned to a group |
| allowAllApps          | Optional | boolean | If permission is allowed to apps or not         |
| selectedAppIds        | Yes      |         | An array of selected app IDs                    |

## Sample Request

```
{
"groupName": "Engagement Services Dev",
"email": "samplegrup@voltmx.com",
"groupDescription": "Engagement Services DevGroup",
"activeFlag": "true",
"selectedUserIds": [],
"selectedPermissionIds": [16, 18, 15, 17, 14, 2, 4, 5, 6, 11, 1, 3, 7, 8, 13, 10, 12, 9],
"allowAllApps":true,
"selectedAppIds":["SampleAppforDemo"]
}
```

## Sample Response

```
{
"id" : "3",
"message" : "Details added successfully"
}
```

## Response Status

| Code       | Description                                                                                                                                                                                                                                                       |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Status 200 | Details Added successfully                                                                                                                                                                                                                                        |
| Status 400 | Application permissions can be enabled only for the group who has ADHOC_PUSH permissionGroup name is requiredEmail is requiredInvalid request payload. Error occurred at property selectedPermissionIdsInvalid group ID provided, or No group found with given ID |
| Status 401 | Unauthorized request.                                                                                                                                                                                                                                             |
| Status 500 | Server failure to process request                                                                                                                                                                                                                                 |
