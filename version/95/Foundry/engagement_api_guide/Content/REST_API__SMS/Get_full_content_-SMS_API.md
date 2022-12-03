
# Get Full Content

The **Get Full Content** API accepts the SMS ID as an input parameter and returns the SMS message content and selected personalization attribute details like first name, last name, email, mobile number, country and state.

> **_Note:_** This API will return content for both Text as well as Voice SMS.

## Use Case

A user may need to retrieve the content of a SMS message to display the same in a custom built application. The Get Full Content API requires SMS ID to retrieve the data.

You need to select the SMS ID from Settings > Status > SMS Queue list view. Select the required SMS ID under the SMS ID column.

## URL

The HTTP URL for Get Full Content API is:

```
/api/v1/messages/sms/content/{sms_id}
```

> **_Note:_** The Get Full Content API does not require authentication. It is not a secure API

## Method

GET

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type   | Description                            |
| --------------- | -------- | ------ | -------------------------------------- |
| sms_id          | Yes      | string | SMS message string / Voice SMS string. |

## Sample Response

```
{
"content": "Thomas Smith thomassmith@gmail.com +917809654277 \n\nAmazon Electronic Gadgets Sale 2016\n\nBuy your stuff online…"
}
```

## Response Status

| Code       | Description                                           |
| ---------- | ----------------------------------------------------- |
| Status 200 | SMS config details JSON                               |
| Status 400 | Invalid SMS ID. No message found with the provided ID |
| Status 401 | Unauthorized request.                                 |
| Status 500 | Server failure to process request                     |
