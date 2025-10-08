
# Delete Group

The **Delete Group** API deletes a group from Engagement Services. The API accepts the Group ID as input parameter to delete a group.

## URL

The HTTP URL for **Delete Group** API is:

```
http://<host>:<port>/api/v1/accessmgmt/groups/<id>/delete
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                       |
| --------------- | -------- | ---- | --------------------------------- |
| Group ID        | Yes      | long | The unique ID assigned to a group |

## Sample Response

```
{
"id" : "3",
"message" : "Group Deleted successfully"
}
```

## Response Status

| Code       | Description                                                                                     |
| ---------- | ----------------------------------------------------------------------------------------------- |
| Status 200 | Group deleted successfully                                                                      |
| Status 400 | Delete is not allowed on active groupInvalid Group ID provided or No Group found with given ID" |
| Status 401 | Unauthorized request                                                                            |
| Status 500 | Server failure to process request                                                               |
