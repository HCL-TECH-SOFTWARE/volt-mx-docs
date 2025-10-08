
# Inbound Status API

The Inbound Status API lets you query the status of inbound SMS.

## URL

The HTTP URL for Inbound Status API is:

```
http://<<host>>:<<port>>/api/v1/twowaysms/<requestId>
```

> **_Note:_** Navigate to Settings > Status > Inbound SMS tab > List view > Inbound Status column. Use the SMS ID displayed in the column to use in URL as request ID.

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter   | Type         | Description                               |
| ------------------ | ------------ | ----------------------------------------- |
| audienceId         | long         | Unique ID assigned to a user              |
| audienceMemberName | string       | User name                                 |
| inbRequestId       | long         | Inbound request ID                        |
| inbNumber          | long         | inbound number                            |
| inbCommand         | alphanumeric | inbound command                           |
| phoneNumber        | long         | Phone number of the user                  |
| inbCreatedDateStr  | string       | Date on which the inbound SMS was created |
| inbUpdatedDateStr  | string       | Date on which the inbound SMS was updated |
| inbStatusMessage   | string       | Inbound SMS status message string         |
| outbStatusMessage  | string       | Outbound SMS status message string        |
| outbSmsContent     | string       | Outbound SMS message string               |
| outbSmsId          | string       | Outbound SMS message ID                   |
| outbUpdatedDateStr | string       | Date on which the outbound SMS is updated |
| outbCreatedDateStr | string       | Date on which the outbound SMS is created |
| inbStatus          | string       | Current inboud SMS message description    |
| outbStatus         | string       | Current outbound SMS message description  |

## Sample Response

```
{
"audienceId" : 2,
"audienceMemberName" : "Latha Ganesh",
"inbRequestId" : "7131636866524315584",
"inbNumber" : "5OCX12769CVB005432X",
"inbCommand" : "Bill",
"phoneNumber" : "+919648092200",
"inbCreatedDateStr" : "08/23/2016 10:15:13 PM IST",
"inbUpdatedDateStr" : "08/23/2016 10:15:17 PM IST",
"inbStatusMessage" : "No Inbound number found.",
"outbStatusMessage" : "Not attempted.",
"outbSmsContent" : "",
"outbSmsId" : "",
"outbUpdatedDateStr" : "",
"outbCreatedDateStr" : "",
"inbStatus" : "Invalid",
"outbStatus" : "Not Attempted"
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Inbound status                    |
| Status 400 | No data found                     |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
