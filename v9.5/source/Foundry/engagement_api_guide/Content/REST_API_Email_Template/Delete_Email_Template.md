
# Delete Email Template

The **Delete Email Template** API deletes an unpublished email template from Engagement server. The API accepts the template ID as an input parameter to delete a template.

## URL

The HTTP URL for Delete Email Template API is:

```
http://<host>:<port>/api/v1/templates/emails/<id>
```

This service implements ‘Gateway Filter for Authentication’ to authenticate access of the service by a user.

## Method

DELETE

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                          |
| --------------- | -------- | ---- | ------------------------------------ |
| Template ID     | Yes      | long | The unique ID assigned to a template |

## Sample Response

```
{
"id" : "7",
"message" : "Email Template deleted successfully"
}
```

## Response Status

| Code       | Description                                                                 |
| ---------- | --------------------------------------------------------------------------- |
| Status 200 | Email Template deleted successfully                                         |
| Status 400 | Invalid email template ID provided or no email template found with given ID |
| Status 401 | Unauthorized request                                                        |
| Status 500 | Server failure to process request                                           |
