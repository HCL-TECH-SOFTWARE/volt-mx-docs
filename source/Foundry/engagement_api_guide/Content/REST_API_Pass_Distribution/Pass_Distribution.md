
# Pass Distribution

The **Pass Distribution** API is used to distribute passes.

## URL

The HTTP URL for **Pass Distribution** API is:

```
http://<<host>>:<<port>>/api/v1/message/pass
```

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter    | Level – Two     | Level - Three | Level -Four              | Required | Type   | Description                                                                                                        |
| ------------------ | --------------- | ------------- | ------------------------ | -------- | ------ | ------------------------------------------------------------------------------------------------------------------ |
| passServiceRequest |                 |               |                          |          |        | An array of passServiceRequest objects                                                                             |
|                    | passes          |               |                          |          |        | An array of passes objects                                                                                         |
|                    |                 | pass          |                          |          |        | An array of pass objects                                                                                           |
|                    |                 |               | recipients:-recipient-id | Yes      | string | An array of recipients objects: Includes an array of recipient objects: Unique ID assigned to an recipient         |
| passContent        |                 |               |                          |          |        | An array of passContent objects                                                                                    |
|                    | basicDetails    |               |                          |          |        | An array of basicDetails objects. For more details, [see](Pass_Distribution_main.md#passtemplates)               |
|                    | appearance      |               |                          |          |        | An array of appearance objects. For more details, [see](Pass_Distribution_main.md#appearance_for_dist)           |
|                    | frontLayout     |               |                          |          |        | An array of frontLayout objects. For more details, [see](Pass_Distribution_main.md#frontLayout_for_dist)         |
|                    | backLayout      |               |                          |          |        | An array of backLayout objects. For more details, [see](Pass_Distribution_main.md#backLayout_for_dist)           |
|                    | passRelevance   |               |                          |          |        | An array of passRelevance objects. For more details, [see](Pass_Distribution_main.md#passRelevance_for_dist)     |
|                    | passRules       |               |                          |          |        | An array of passRules objects. For more details, [see](Pass_Distribution_main.md#passRules_for_dist)             |
|                    | languageDetails |               |                          |          |        | An array of languageDetails objects. For more details, [see](Pass_Distribution_main.md#languageDetails_for_dist) |

## Sample Request

```
{
"passServiceRequest": {
"passes": {
"pass": {
"recipients": {
"recipient": [
{
"id": "48494"
}
]
},
"passContent": {
"basicDetails": {
"passType": "A Constant value applicable for PassType",
"passTypeIdentifier": "",
"passSerialNumberType": "A Constant value applicable for PassSerialNumberType",
"passSerialNumber": "",
"groupIdentifier": "",
"appLaunchURL": "",
"ituneIdentifiers": "Comma separated iTunes Identifier values.",
"customJsonData": "",
"timezone": "A Constant value applicable for TimeZones",
"organizationName": "",
"description": ""
},
"appearance": {
"bgColor": "the color value in hexadecimal",
"labelColor": "the color value in hexadecimal",
"valueColor": "the color value in hexadecimal",
"suppressStripShine": "true / false",
"images": [
{
"imageType": "A Constant value applicable for ImageType",
"blob": "true if you are uploading image or using imageId False if you are providing link ",
"url": "url of the image",
"imageId": "the image id stored in Volt MX Foundry Messaging system",
"imageFieldName": "name of the field from the request parameters that is applicable here"
}
]
},
"frontLayout": {
"logoText": "",
"transitType": "A Constant value applicable for TransitType",
"headerFields": [
{
"label": "",
"data": "",
"dataType": "A Constant value applicable for PassDataType",
"numberFormat": "A Constant value applicable for NumberFormatType",
"currency": "A Constant value applicable for CurrencyFormat",
"dateTimeFormat": "A Constant value applicable for DateFormatType",
"displayRelatively": "true / false",
"ignoreTimezone": "true / false",
"alignment": "A Constant value applicable for PassFieldAlignment",
"autolink": "A Constant value applicable for DataDetectorType",
"key": ""
}
],
"primaryFields": [
{
"label": "",
"data": "",
"dataType": "A Constant value applicable for PassDataType",
"numberFormat": "A Constant value applicable for NumberFormatType",
"currency": "A Constant value applicable for CurrencyFormat",
"dateTimeFormat": "A Constant value applicable for DateFormatType",
"displayRelatively": "true / false",
"ignoreTimezone": "true / false",
"alignment": "A Constant value applicable for PassFieldAlignment",
"autolink": "A Constant value applicable for DataDetectorType",
"key": ""
}
],
"auxiliaryFields": [
{
"label": "",
"data": "",
"dataType": "A Constant value applicable for PassDataType",
"numberFormat": "A Constant value applicable for NumberFormatType",
"currency": "A Constant value applicable for CurrencyFormat",
"dateTimeFormat": "A Constant value applicable for DateFormatType",
"displayRelatively": "true / false",
"ignoreTimezone": "true / false",
"alignment": "A Constant value applicable for PassFieldAlignment",
"autolink": "A Constant value applicable for DataDetectorType",
"key": ""
}
],
"secondaryFields": [
{
"label": "",
"data": "",
"dataType": "A Constant value applicable for PassDataType",
"numberFormat": "A Constant value applicable for NumberFormatType",
"currency": "A Constant value applicable for CurrencyFormat",
"dateTimeFormat": "A Constant value applicable for DateFormatType",
"displayRelatively": "true / false",
"ignoreTimezone": "true / false",
"alignment": "A Constant value applicable for PassFieldAlignment",
"autolink": "A Constant value applicable for DataDetectorType",
"key": ""
}
],
"barcodeDetails": {
"barcodeType": "A Constant value applicable for BarcodeType",
"embeddedMessageType": "A Constant value applicable for barcodeType BarcodeMsgType",
"message": "",
"alternativeTextType": "A Constant value applicable for barcodeType BarcodeAltTextType",
"alternateText": "",
"embeddedFormat": "A Constant value applicable for barcodeType EncodingType"
}
},
"backLayout": {
"fields": [
{
"label": "",
"data": "",
"dataType": "A Constant value applicable for PassDataType",
"numberFormat": "A Constant value applicable for NumberFormatType",
"currency": "A Constant value applicable for CurrencyFormat",
"dateTimeFormat": "A Constant value applicable for DateFormatType",
"displayRelatively": "true / false",
"ignoreTimezone": "true / false",
"alignment": "A Constant value applicable for PassFieldAlignment",
"autolink": "A Constant value applicable for DataDetectorType",
"key": ""
}
],
"enableAutoUpdates": "true if the VMS server is secured with HTTPS else FALSE"
},
"passRelevance": {
"relevantDate": "09/18/2014 12:00:00 AM",
"ignoreTimezone": "true / false",
"relevantLocations": [
{
"id": "##id of the location stored in Volt MX Foundry Messaging##",
"relevantText": "Relevant text to appear when user is in the given location"
}
],
"maxDistance": "Max radial distance that the pass is applicable for the above given locations",
"relevantBeacons": [
{
"id": "##id of the beacon stored in Volt MX Foundry Messaging##",
"relevantText": "Relevant text to appear when user is in the given beacon region"
}
]
},
"passRules": {
"dateRestriction": "A Constant value applicable for PassDateRestriction",
"stopAfter": "",
"expiryDate": "09/26/2014 07:00:00 AM",
"voided": "true / false"
},
"languageDetails": {
"originalFields": [
"field1",
"field2",
"field3"
],
"languageEntries": [
{
"language": "A Constant value applicable for Language",
"data": [
{
"localText": "translation for field1"
},
{
"localText": "translation for field2"
},
{
"localText": "translation for field3"
}
],
"images": [
{
"imageType": "A Constant value applicable for ImageType",
"blob": "true if you are uploading image or using imageId False if you are providing link",
"url": "url of the image",
"imageId": "the image id stored in Volt MX Foundry Messaging system",
"imageFieldName": "name of the field from the request parameters that is applicable here"
}
]
}
],
"passLanguage": "A Constant value applicable for Language"
}
},
"passIntegrationConfig": {
"passIssueNotificationDetails": [
{
"channel": "SMS",
"enabled": "true / false",
"messageContent": "Content of your email. Using place holder ##SMS Pass Link## will generate pass download link."
},
{
"channel": "EMAIL",
"enabled": "true / false",
"messageContent": "Content of your email. Using place holder ##Email Pass Link## will generate pass download link.",
"subject": "subject for the mail",
"senderName": "The email will be sent on this name",
"senderEmail": "The email will be sent from this Email ID"
}
],
"passUpdateNotificationDetails": [
{
"channel": "SMS",
"enabled": "true / false",
"messageContent": "SMS to be sent when the user downloads the pass."
},
{
"channel": "EMAIL",
"enabled": "true / false",
"messageContent": "Email to be sent when the user downloads the pass.",
"subject": "subject for the mail",
"senderName": "The email will be sent on this name",
"senderEmail": "The email will be sent from this Email ID"
}
]
},
"priority": true,
"startTimeStamp": 0,
"endTimeStamp": 0
}
}
}
}
```

## Sample Response

```
{"requestId":"2318508739642895844","description":"Request Queued. "}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Request queued                    |
| Status 400 | Unauthorized request              |
| Status 500 | Server failure to process request |

## Sending Updates to the Sent/Installed Passes on a Device

### Prerequisites

If the Engagement Server is not secure with HTTPS, then pass updates are not possible.

### Procedure

To update an installed pass or an already sent pass on a device, follow these steps:

1.  When the pass is sent and installed on the device, use the same REST API (Pass Distribution) to send updates on the pass as well.
2.  But in the payload passTypeIdentifier, passType and passSerialNumber should have the same values of the sent pass.
3.  Based on your requirement, modify the pass payload to send an update to the already sent pass.
4.  Verify the payload before sending the pass. Now send the pass again to the device.
5.  Do not install the pass again on the device. The device automatically updates the pass with the changes you made in the payload.
