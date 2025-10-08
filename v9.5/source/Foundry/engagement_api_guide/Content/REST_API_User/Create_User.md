
# Create User

The **Create User** API creates a new user.

## URL

The HTTP URL for **Create User** API is:

```
http://<host>:<port>/api/v1/accessmgmt/users
```

This service implements the Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter       | Required | Type                    | Description                                      |
| --------------------- | -------- | ----------------------- | ------------------------------------------------ |
| userName              | Yes      | String                  | The unique name of a user                        |
| email                 | Yes      | string                  | The unique email-ID of a user                    |
| password              | Yes      | alphanumeric(no spaces) | System- generated unique password                |
| displayName           | Yes      | string                  | The user name that is displayed on screen        |
| activeFlag            | Optional | boolean                 | Whether the user is active                       |
| mobileNo              | Optional | long                    | The mobile number of a user                      |
| selectedPermissionIds | Yes      | long                    | Selected permissions that are assigned to a user |
| selectedGroupIds      | Optional | long                    | Selected groups that are assigned to a user      |
| allowAllApps          | Optional | boolean                 | Whether permission is granted to apps            |
| selectedAppIds        | Optional |                         | An array of selected app IDs                     |

## Sample Request

```
{
"userName": "EngagementServicesUser",
"email": "sampleuser@voltmx.com",
"password": "VoltMX@123",
"displayName": "EngagementServicesUser",
"activeFlag": "true",
"mobileNo": "+911235551234",
"selectedPermissionIds":["3","4","6"],
"selectedGroupIds":["1"]
}
```

## Output Parameters

The following fields are output parameters:

| Output Parameter | Type   | Description                    |
| ---------------- | ------ | ------------------------------ |
| id               | long   | A unique ID assigned to a user |
| message          | string | Response status message        |

## Sample Response

```
{
"id" : "4",
"message" : "Details added successfully"
}
```

## Response Status

| Code       | Description                           |
| ---------- | ------------------------------------- |
| Status 200 | Details added successfully            |
| Status 400 | User already exists with this user ID |
| Status 401 | Unauthorized request                  |
| Status 500 | Server failure to process request     |
