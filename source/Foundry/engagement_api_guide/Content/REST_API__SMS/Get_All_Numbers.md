
# Get All Numbers

The **Get All Numbers** API enables you to get all numbers that are configured with service providers. An inbound number resource represents a long number or short code purchased from Twilio or Nexmo or Clickatell.

## URL

The HTTP URL for Get All Number API is:

```
http://:<host>:<port>/api/v1/twowaysms/number?start=0&pageSize=20
```

This service implements ‘Gateway Filter for Authentication’ to authenticate access of the service by a user.

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter  | Level – Two         | Type   | Description                                                                                                                                        |
| ----------------- | ------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| total             |                     | long   | Total inbound numbers                                                                                                                              |
| inboundSMSNumbers |                     |        | An array of inboundSMSNumbers objects                                                                                                              |
|                   | id                  | long   | A unique ID assigned to the inbound number                                                                                                         |
|                   | name                | string | A unique name assigned to the number such as Customer Banking Number                                                                               |
|                   | code                | string | Short code/ Long Number                                                                                                                            |
|                   | description         | string | Description of the inbound number                                                                                                                  |
|                   | replyForInvalidReq  | string | SMS to be sent for invalid requests that are sent to this number. If this field is left blank, then no reply SMS will be sent for invalid requests |
|                   | createdBy           | string | Name of the user who added the inbound number                                                                                                      |
|                   | createdDateStr      | date   | Date on which the inbound number was added                                                                                                         |
|                   | lastModifiedBy      | string | Name of the user who last modified the inbound number                                                                                              |
|                   | lastModifiedDateStr | string | Date on which the inbound number was last modified                                                                                                 |

## Sample Response

```
{
"total" : 1,
"inboundSMSNumbers" : [ {
"id" : 1,
"name" : "Twilio Inbound",
"code" : "+19803025884",
"description" : "BALANCE ENQUIRY",
"replyForInvalidReq" : "NO COMMANDS FOUND",
"createdBy" : "admin",
"createdDateStr" : "07/19/2016 02:51:54 PM IST",
"lastModifiedBy" : "admin",
"lastModifiedDateStr" : "07/19/2016 02:54:10 PM IST"
} ]
}

```

## Response Status

| Code       | Description                                                                                                                  |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Status 200 | Inbound number details JSON                                                                                                  |
| Status 400 | Invalid request. Request method not allowedInvalid inbound number ID provided or no valid inbound number found with given ID |
| Status 401 | Unauthorized request.                                                                                                        |
| Status 500 | Server failure to process request                                                                                            |
