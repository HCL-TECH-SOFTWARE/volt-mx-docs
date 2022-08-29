
# Update Email Template

The **Update Email Template** API modifies the details of a template based on a requirement.

## URL

The HTTP URL for Update Email Template API is:

```
http://<host>:<port>/api/v1/templates/emails/<id>
```

This service implements ‘Gateway Filter for Authentication’ to authenticate access of the service by a user.

## Method

PUT

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type   | Description                            |
| --------------- | -------- | ------ | -------------------------------------- |
| templatename    | Yes      | string | The unique name assigned to a template |
| mailSubject     | Yes      | string | The subject of the email               |
| mailContent     | Yes      | string | The content of the email               |

## Sample Request

```
{
"templateName": "Electronic Gadgets Sale on Amazon 2016",
"mailSubject":"Low Prices on Popular Products",
"mailContent": " Electronic Dictionary,Black TimeR MJ02 Smart Multifunctional Ring"
}
```

## Sample Response

```
{  
  "message" : "Details updated successfully",  
  "id" : "templateid"  
}

```

## Response Status

| Code       | Description                                                                                           |
| ---------- | ----------------------------------------------------------------------------------------------------- |
| Status 200 | Details updated successfully                                                                          |
| Status 400 | Template name is requiredTemplate subject is requiredMail content cannot be blank for code a template |
| Status 401 | Unauthorized request                                                                                  |
| Status 500 | Server failure to process request                                                                     |
