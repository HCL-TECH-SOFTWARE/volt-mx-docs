
# Add Inbound Number

An inbound number instance resource represents a long number or short code purchased from TWILIO or NEXMO or CLICKATELL. The **Add Inbound Number** API helps you to add a new long number or a new short code in Engagement Services. Assume that a customers sends an SMS such as BAL to 53535, where 53535 is an inbound number and BAL is the inbound command. You can configure multiple commands for an inbound number.

> **_Important:_** Before adding a number, make sure that you have proper settings at the provider site. For more information, see [SMS Configuration > Inbound > Provider Settings](../../../../Foundry/vms_console_user_guide/Content/Administration/SMS_Configuration.md)

## URL

The HTTP URL for Add Inbound Number API is:

```
http://<host>>:<<port>>/api/v1/twowaysms/number
```

This service implements ‘Gateway Filter for Authentication’ to authenticate access of the service by a user.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter    | Required | Type   | Description                                                                                                                                         |
| ------------------ | -------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| name               | Yes      | string | A unique name assigned to the number such as Customer Banking Number                                                                                |
| code               | Yes      | long   | Short code/ Long Number. This is the purchase number from the provider. This value should be same as displayed on provider's number page.           |
| description        | Optional | string | Description of the inbound number                                                                                                                   |
| replyForInvalidReq | Optional | string | SMS to be sent for invalid requests that are sent to this number. If this field is left blank, then no reply SMS will be sent for invalid requests. |

## Sample Request

> **_Note:_** The short code or long number should be same as provider sends to Volt MX FoundryEngagement Services in the callback. Usually it is the same value displayed on the providers dashboard.

```
{
"name": "Customer Care",
"code": "57079",
"description": "Previous Due",
"replyForInvalidReq": "Invalid message, Please type Due for previous due"
}
```

## Sample Response

```
{   
"message": "Details added successfully",
   "id": "12"
}
```

## Response Status

| Code       | Description                                    |
| ---------- | ---------------------------------------------- |
| Status 200 | Details added successfully                     |
| Status 400 | Number name is requiredNumber code is required |
| Status 401 | Unauthorized request.                          |
| Status 500 | Server failure to process request              |
