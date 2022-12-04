
# Create Email Template

The **Create Email Template** API adds templates into Engagement server.

## URL

The HTTP URL for Create Email Template API is:

```
http://<host>:<port>/api/v1/templates/emails
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
| templatename    | Yes      | string | The unique name assigned to a template        |
| mailSubject     | Yes      | string | Email title                                   |
| mailContent     | Yes      | string | Email content: It can include images and text |

## Sample Request

```
{
"templateName": "Electronic Gadgets Sale on Amazon",
"mailSubject":"Low Prices on Popular Products",
"mailContent": " Electronic Dictionary,Black TimeR MJ02 Smart Multifunctional Ring"
}
```

## Sample Response

```
{  
  "message" : "Details added successfully",  
  "id" : "templateid"  
}

```

## Response Status

| Code       | Description                                                                                                                                          |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Status 200 | Details added successfully                                                                                                                           |
| Status 400 | An email template already exists with this nameTemplate name is requiredTemplate subject is requiredMail content cannot be blank for code a template |
| Status 401 | Unauthorized request                                                                                                                                 |
| Status 500 | Server failure to process request                                                                                                                    |
