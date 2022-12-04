
# Delete User

The **Delete User** API deletes a user from Engagement Services. This API accepts the User ID as an input parameter to delete a user.

## URL

The HTTP URL for **Delete User** API is:

```
http://<host>:<port>/api/v1/accessmgmt/users/<id>/delete
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

Following fields are the input parameters:

| Input Parameter | Required | Type | Description                        |
| --------------- | -------- | ---- | ---------------------------------- |
| User ID         | Yes      | long | .The unique ID assigned to a user. |

## Sample Response

```
{  
   "message" : "User deleted successfully ",  
   "id" : "userID"  
}

```

## Response Status

| Code       | Description                                                                                     |
| ---------- | ----------------------------------------------------------------------------------------------- |
| Status 200 | User deleted successfully                                                                       |
| Status 400 | Delete is not allowed on active usersInvalid user ID provided or no user found with provided ID |
| Status 401 | Unauthorized request                                                                            |
| Status 500 | Server failure to process request                                                               |
