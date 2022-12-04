
# Delete Pass Template

The Delete Pass Template API deletes a pass template from Engagement server, if the template is not in use. The service accepts the Template ID as an input parameter to delete a pass template.

## URL

The HTTP URL for Delete Pass Template API is:

```
http://<<host>>:<<port>>/api/v1/templates/passbook/{id}
```

This service implements ‘Gateway Filter for Authentication’ to authenticate access of the service by a user.

## Method

DELETE

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                      |
| --------------- | -------- | ---- | -------------------------------- |
| Template ID     | Yes      | long | Unique ID assigned to a template |

## Sample Response

```
{
"id" : "2",
"message" : "Pass template deleted successfully."
}
```

## Response Status

| Code       | Description                                                               |
| ---------- | ------------------------------------------------------------------------- |
| Status 200 | Pass template deleted successfully                                        |
| Status 400 | Invalid pass template ID provided or No pass template found with given ID |
| Status 401 | Unauthorized request                                                      |
| Status 500 | Server failure to process request                                         |
