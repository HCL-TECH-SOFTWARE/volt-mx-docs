
# Modify Push Message Template

The **Modify Push Message Template** API updates a push message template.

## URL

The HTTP URL for Modify Push Message Template API is:

```
http://<host>:<port>/api/v1/templates/pushtemplate/{id}/modify
```

This service implements ‘Gateway Filter for Authentication’ to authenticate access of the service by a user.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type   | Description                                   |
| --------------- | -------- | ------ | --------------------------------------------- |
| templateName    | Yes      | string | Unique name assigned to push message template |
| templateTitle   | No       | string | Title of the template                         |
| templateType    | Yes      | string | Template type as basic or rich push           |
| template        | Yes      | string | Push message string                           |

## Sample Request

```
{
"templateName" : "xxxxxxxxxxxxx",
"templateTitle" : "",
"templateType" : "BASIC",
"template" : "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
}
```

## Sample Responses

```
{
"message" : "Details updated successfully",
"id" : " message ID"
}
```

## Response Status

| Code       | Description                                                                                                    |
| ---------- | -------------------------------------------------------------------------------------------------------------- |
| Status 200 | Details updated successfully                                                                                   |
| Status 400 | Template name is requiredInvalid request payload. Error occurred at property template typeTemplate is required |
| Status 401 | Unauthorized request                                                                                           |
| Status 500 | Server failure to process request                                                                              |
