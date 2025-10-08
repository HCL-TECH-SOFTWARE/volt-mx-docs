
# Get Pass Request Meta Data

The **Get Pass Request Metadata** API accepts start and pageSize as input parameters and returns all pass details like pass type, pass type identifier, and pass expiry date. The PageSize represents the maximum number of passes for which the details are to be returned. If the start is specified, the number of passes that are returned are from start position to pageSize value. For example: if the start is zero and pageSize is five, then six passes from position zero to five are returned.

## URL

The HTTP URL for **Get Pass Request Meta Data** API is:

```
http://<<host>>:<<port>>/api/v1/pass/meta/<<reqid>>?start=0&pageSize=10
```

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter | Level – Two        | Type    | Description                                                                                                                                                                                                                                                               |
| ---------------- | ------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| total            |                    | long    | Total number of passRequests                                                                                                                                                                                                                                              |
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
"total": 1,
"passRequests": [
{
"id": 2338359586113193902,
"audienceId": 1,
"passType": "BOARDING""serialNumber": "3988279136211971088",
"passTypeIdentifier": "pass.com.VoltMX Foundry Messaging.pass1",
"stopDateStr": "",
"passExpiryDateStr": "",
"barcodeMsg": "",
"barcodeAltMsg": "",
"importPass": false
}
]
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Array of pass requests            |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
