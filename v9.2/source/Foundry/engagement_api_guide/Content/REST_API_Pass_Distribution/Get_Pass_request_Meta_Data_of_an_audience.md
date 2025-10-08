
# Get Pass Request Meta Data of an Audience

The Get Pass request Meta Data of an audience API is used to fetch meta data details of an audience.

## URL

The HTTP URL of Get Pass request Meta Data of an audience API is:

```
http://<<host>>:<<port>>/api/v1/pass/meta/<<reqId>>/<<audId>>
```

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter | Level – Two        | Type    | Description                                                                                                                                                                                                                                                               |
| ---------------- | ------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| passRequests     |                    |         | An array of passRequests objects                                                                                                                                                                                                                                          |
|                  | id                 | long    | Unique ID assigned to a pass                                                                                                                                                                                                                                              |
|                  | audienceId         | long    | Unique ID assigned to a user                                                                                                                                                                                                                                              |
|                  | passType           | string  | Type of pass such as boarding, coupon, event, membership or store card                                                                                                                                                                                                    |
|                  | passTypeIdentifier | string  | Pass Type Identifier is a string chosen by you that defines a class or category of passes. It always begins with pass and uses reverse DNS style—for example, pass.com.example.membership-card. The pass type identifier must match the certificate used to sign the pass |
|                  | stopDateStr        | string  | The date on which the pass ends.                                                                                                                                                                                                                                          |
|                  | passExpiryDateStr  | string  | The date on which the pass expires                                                                                                                                                                                                                                        |
|                  | barcodeMsg         | string  | For the options **Encode Pass Serial Number** and **Encode the pass unique ID**, the system uses the Pass Serial Number and Pass Unique ID respectively as barcode message                                                                                                |
|                  | barcodeAltMsg      | string  | This is the text that appears below the barcode                                                                                                                                                                                                                           |
|                  | importPass         | boolean | If pass is imported or not                                                                                                                                                                                                                                                |

## Sample Response

```
{
"passRequests": {
"id": 2338359586113193902,
"audienceId": 1,
"passType": "BOARDING",
"serialNumber": "3988279136211971088",
"passTypeIdentifier": "pass.com.VoltMX Foundry Messaging.pass1",
"stopDateStr": "",
"passExpiryDateStr": "",
"barcodeMsg": "",
"barcodeAltMsg": "",
"importPass": false
}
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Array of pass requests            |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
