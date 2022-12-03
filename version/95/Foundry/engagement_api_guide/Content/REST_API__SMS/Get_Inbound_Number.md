
# Get Inbound Number

An inbound number instance resource represents a long number or short code purchased from TWILIO or NEXMO or CLICKATELL. The **Get Inbound Number** API enables you to retrieve a long number or a short code from Engagement Services.

## URL

The HTTP URL for Get Inbound Number API is:

```
http://<host>>:<<port>>/api/v1/twowaysms/number/<number-id>
```

> **_Note:_** <number-id>: Here, number ID refers to an ID that is used to map inbound number with internal data record.

This service implements ‘Gateway Filter for Authentication’ to authenticate access of the service by a user.

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter    | Type   | Description                                                                                                                                        |
| ------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                  | long   | A unique ID assigned to the inbound number                                                                                                         |
| name                | string | A unique name assigned to the number such as Customer Banking Number                                                                               |
| code                | string | Short code/ Long Number                                                                                                                            |
| description         | string | Description of the inbound number                                                                                                                  |
| replyForInvalidReq  | string | SMS to be sent for invalid requests that are sent to this number. If this field is left blank, then no reply SMS will be sent for invalid requests |
| createdBy           | string | Name of the user who added the inbound number                                                                                                      |
| createdDateStr      | string | Date on which the inbound number was added                                                                                                         |
| lastModifiedBy      | string | Name of the user who last modified the inbound number                                                                                              |
| lastModifiedDateStr | string | Date on which the inbound number was last modified                                                                                                 |

## Sample Response

```
{
"id" : 2,
"name" : "Apollo Online Help",
"code" : "55315",
"description" : "online appointment booking",
"replyForInvalidReq" : "Please enter correct code",
"createdBy" : "admin",
"createdDateStr" : "08/18/2016 02:01:22 PM IST",
"lastModifiedBy" : "admin",
"lastModifiedDateStr" : "08/18/2016 02:01:22 PM IST"
}
```

## Response Status

| Code       | Description                                                                       |
| ---------- | --------------------------------------------------------------------------------- |
| Status 200 | Inbound Number JSON                                                               |
| Status 400 | Invalid Inbound Number ID provided or no valid Inbound Number found with given ID |
| Status 401 | Unauthorized request                                                              |
| Status 500 | Server failure to process request                                                 |
