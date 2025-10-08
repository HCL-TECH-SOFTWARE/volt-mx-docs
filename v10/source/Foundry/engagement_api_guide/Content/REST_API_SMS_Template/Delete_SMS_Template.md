
# Delete SMS Template

The **Delete SMS Template** API deletes an unpublished SMS template from Engagement server. The API accepts the template ID as an input parameter to delete a template.

> **_Note:_** This API will delete SMS Templates for both Text as well as Voice SMS.

## URL

The HTTP URL for **Delete SMS Template** API is:

```
http://<host>:<port>/api/v1/templates/smstemplates/<id>
```

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
"id" : "4",
"message" : "SMS Template deleted successfully"
}
```

## Response Status

| Code       | Description                                                             |
| ---------- | ----------------------------------------------------------------------- |
| Status 200 | SMS template deleted successfully                                       |
| Status 400 | Invalid SMS template ID provided or no SMS template found with given ID |
| Status 401 | Unauthorized request                                                    |
| Status 500 | Server failure to process request                                       |
