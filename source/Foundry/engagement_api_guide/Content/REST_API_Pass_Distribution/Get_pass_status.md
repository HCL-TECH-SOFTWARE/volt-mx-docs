
# Get Pass Status

The **Get Pass Status** API accepts the pass ID as an input parameter and fetches the pass details.

## URL

The HTTP URL for **Get Pass Status** API is:

```
http://<<host>>:<<port>>/api/v1/pass/<<passid>>/status
```

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter | Level – Two        | Level – Three | Type   | Description                                                                                                                                                                                                                                                               |
| ---------------- | ------------------ | ------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| passStatusData   |                    |               |        | An array of passStatusData objects                                                                                                                                                                                                                                        |
|                  | id                 |               | long   | Unique ID assigned to a pass                                                                                                                                                                                                                                              |
|                  | passtypeIdentifier |               | string | Pass Type Identifier is a string chosen by you that defines a class or category of passes. It always begins with pass and uses reverse DNS style—for example, pass.com.example.membership-card. The pass type identifier must match the certificate used to sign the pass |
|                  | seriealNumber      |               | string | The assigned serial number to a pass.                                                                                                                                                                                                                                     |
|                  | audienceId         |               | long   | Unique ID assigned to a user                                                                                                                                                                                                                                              |
|                  | barcodeMessage     |               | string | For the options Encode Pass Serial Number and Encode the pass unique ID, the system uses the Pass Serial Number and Pass Unique ID respectively as barcode message                                                                                                        |
|                  | channelStatusList  |               |        | An array of channelStatusList objects                                                                                                                                                                                                                                     |
|                  |                    | channelType   | string | The channel type as email or SMS                                                                                                                                                                                                                                          |
|                  |                    | passStatus    | string | The current pass status as submitted or rejected                                                                                                                                                                                                                          |
|                  |                    | channelStatus | string | The current channel status as initial, submitted, queued, delivered, undelivered, cancelled, opened, not attempted or rejected                                                                                                                                            |

## Sample Response

```
{
"passStatusData": {
"id": 2338546026820740145,
"passtypeIdentifier": "pass.com.VoltMX Foundry Messaging.pass1",
"seriealNumber": "",
"audienceId": 1,
"barcodeMessage": "3988395953726884337",
"channelStatusList": [
{
"channelType": "EMAIL",
"passStatus": "Submitted",
"channelStatus": ""
},
{
"channelType": "SMS",
"passStatus": "Rejected",
"channelStatus": ""
}
]
}
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Array of passStatusData           |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
