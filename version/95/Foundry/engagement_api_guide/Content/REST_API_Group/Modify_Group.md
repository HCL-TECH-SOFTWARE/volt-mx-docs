
# Modify Group

The **Modify Group** API modifies a group's details.

## URL

The HTTP URL for **Modify Group** API is:

```
http://<host>:<port>/api/v1/accessmgmt/group/<id>/modify
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

POST

## Header

The payload's request header includes Content-Type for JSON as application/json;charset=UTF-8;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter       | Required | Type         | Description                                  |
| --------------------- | -------- | ------------ | -------------------------------------------- |
| groupName             | Yes      | alphanumeric | A unique name assigned to a group            |
| email                 | Yes      | string       | An email ID assigned to a group              |
| groupDescription      | Optional | string       | Details about the objective of a group       |
| activeFlag            | Optional | boolean      | Whether the group is active                  |
| selectedUserIds       | Optional | long         | Selected user IDs assigned to a group        |
| selectedPermissionIds | Yes      | long         | Selected permission IDs assigned to a group. |
| allowAllApps          | Optional | boolean      | Whether apps have permissions                |
| selectedAppIds        | Yes      |              | An array of selected app IDs                 |

## Sample Request

```
{
"groupName": "Engagement Services Dev",
"email": "samplegrup1@voltmx.com",
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
   "message" : "Details updated successfully",  
   "id" : "groupId"  
}

```

## Response Status

| Code       | Description                                                                                                                                                                                                                                                       |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Status 200 | Details updated successfully                                                                                                                                                                                                                                      |
| Status 400 | Application permissions can be enabled only for the group who has ADHOC_PUSH permissionGroup name is requiredEmail is requiredInvalid request payload. Error occurred at property selectedPermissionIdsInvalid group ID provided, or No group found with given ID |
| Status 401 | Unauthorized request                                                                                                                                                                                                                                              |
| Status 500 | Server failure to process request                                                                                                                                                                                                                                 |
