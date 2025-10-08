
# Modify User

The **Modify User** API modifies a user details.

## URL

The HTTP URL for **Modify User** API is:

```
http://<host>:<port>/api/v1/accessmgmt/users/<id>/modify
```

The Modify User API implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter       | Required | Type                    | Description                             |
| --------------------- | -------- | ----------------------- | --------------------------------------- |
| userName              | Yes      | string                  | The unique name of a user               |
| email                 | Yes      | string                  | The unique email ID of a user           |
| password              | Yes      | alphanumeric(no spaces) | System generated unique password        |
| displayName           | Yes      | string                  | A user name displayed on the screen     |
| activeFlag            | Optional | boolean                 | Whether a user is active                |
| mobileNo              | Optional | long                    | The mobile number of a user             |
| selectedPermissionIds | Yes      | long                    | Selected permissions assigned to a user |
| selectedGroupIds      | Optional | long                    | Selected groups assigned to a user      |

## Sample Request

```
{
"userName": "Aron",
"email": "sampleus1r@voltmx.com",
"password": "VoltMX@123",
"displayName": "Buckminsterfullerene",
"activeFlag": "true",
"mobileNo": "+917235551234",
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
"message" : "Details updated successfully",  
"id" : "userId"  
}

```

## Response Status

| Code       | Description                                                                                                                                                    |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Status 200 | Details updated successfully                                                                                                                                   |
| Status 400 | Invalid User ID provided or No User found with given IDEmail is requiredDisplay Name is requiredInvalid 'userName' provided. 'userName' should not be modified |
| Status 401 | Unauthorized request                                                                                                                                           |
| Status 500 | Server failure to process request                                                                                                                              |
