
# Create Push Message Template

The **Create Push Message Template** API creates a push message template. A user can create push message templates to send messages with information that infrequently changes from message to message.

## URL

The HTTP URL for **Create Push Message Template** API is:

```
http://<host>:<port>/api/v1/templates/pushtemplate
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
"id" : "9",
"message" : "Details added successfully"
}
```

## Response Status

| Code       | Description                                                                                                                                                    |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Status 200 | Details added successfully                                                                                                                                     |
| Status 400 | Template name is requiredInvalid request payload. Error occurred at property template typeTemplate is requiredA message template already exists with this name |
| Status 401 | Unauthorized request                                                                                                                                           |
| Status 500 | Server failure to process request                                                                                                                              |
