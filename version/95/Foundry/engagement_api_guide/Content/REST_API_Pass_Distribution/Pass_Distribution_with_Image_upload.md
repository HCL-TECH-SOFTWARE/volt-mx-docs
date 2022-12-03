
# Pass Distribution with Image Upload

The Pass Distribution with Image upload API is used to distribute passes with images uploaded.

## URL

The HTTP URL for **Pass Distribution with Image Upload** API is:

```
http://<<host>>:<<port>>/api/v1/message/pass
```

## Method

POST

## Sample Request

```
"imageFieldName1": image,
"imageFieldName2": image,
passContent: {
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
"ituneIdentifiers": "Comma seperated iTunes Identifier values.",
"customJsonData": "",
"timezone": "A Constant value applicable for TimeZones",
"organizationName": "",
"description": ""
},
"appearance": {
"bgColor": "the color value in hexadecimal",
"labelColor": "the color value in hexadecimal",
"valueColor": "the color value in hexadecimal",
"suppressStripShine": true/false,
"images": [
{
"imageType": "A Constant value applicable for ImageType",
"blob": trueifyouareuploadingimageorusingimageId,
Falseifyouareprovidinglink.,
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
arrayoffieldswithstructure{
"label": "",
"data": "",
"dataType": "A Constant value applicable for PassDataType",
"numberFormat": "A Constant value applicable for NumberFormatType",
"currency": "A Constant value applicable for CurrencyFormat",
"dateTimeFormat": "A Constant value applicable for DateFormatType",
"displayRelatively": true/false,
"ignoreTimezone": true/false,
"alignment": "A Constant value applicable for PassFieldAlignment",
"autolink": "A Constant value applicable for DataDetectorType",
"key": ""
}
],
"primaryFields": [
arrayoffieldswithstructure{
"label": "",
"data": "",
"dataType": "A Constant value applicable for PassDataType",
"numberFormat": "A Constant value applicable for NumberFormatType",
"currency": "A Constant value applicable for CurrencyFormat",
"dateTimeFormat": "A Constant value applicable for DateFormatType",
"displayRelatively": true/false,
"ignoreTimezone": true/false,
"alignment": "A Constant value applicable for PassFieldAlignment",
"autolink": "A Constant value applicable for DataDetectorType",
"key": ""
}
],
"auxiliaryFields": [
arrayoffieldswithstructure{
"label": "",
"data": "",
"dataType": "A Constant value applicable for PassDataType",
"numberFormat": "A Constant value applicable for NumberFormatType",
"currency": "A Constant value applicable for CurrencyFormat",
"dateTimeFormat": "A Constant value applicable for DateFormatType",
"displayRelatively": true/false,
"ignoreTimezone": true/false,
"alignment": "A Constant value applicable for PassFieldAlignment",
"autolink": "A Constant value applicable for DataDetectorType",
"key": ""
}
],
"secondaryFields": [
arrayoffieldswithstructure{
"label": "",
"data": "",
"dataType": "A Constant value applicable for PassDataType",
"numberFormat": "A Constant value applicable for NumberFormatType",
"currency": "A Constant value applicable for CurrencyFormat",
"dateTimeFormat": "A Constant value applicable for DateFormatType",
"displayRelatively": true/false,
"ignoreTimezone": true/false,
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
arrayoffieldswithstructure{
"label": "",
"data": "",
"dataType": "A Constant value applicable for PassDataType",
"numberFormat": "A Constant value applicable for NumberFormatType",
"currency": "A Constant value applicable for CurrencyFormat",
"dateTimeFormat": "A Constant value applicable for DateFormatType",
"displayRelatively": true/false,
"ignoreTimezone": true/false,
"alignment": "A Constant value applicable for PassFieldAlignment",
"autolink": "A Constant value applicable for DataDetectorType",
"key": ""
}
]
},
"passRelevance": {
"relevantDate": "09/18/2014 12:00:00 AM",
"ignoreTimezone": true/false,
"relevantLocations": [
arrayoflocationswithstructure{
"id": ##idofthelocationstoredinVoltMXFoundryMessaging##,
"relevantText": "Relevant text to appear when user is in the given location"
}
],
"maxDistance": Maxradialdistancethatthepassisapplicablefortheabovegivenlocations,
"relevantBeacons": [
arrayofbeaconswithstructure{
"id": ##idofthebeaconstoredinVoltMXFoundryMessaging##,
"relevantText": "Relevant text to appear when user is in the given beacon region"
}
]
},
"passRules": {
"dateRestriction": "A Constant value applicable for PassDateRestriction",
"stopAfter": "",
"expiryDate": "09/26/2014 07:00:00 AM",
"voided": true/false
},
"languageDetails": {
"originalFields": [
"field1",
"field2",
"field3".......
],
"languageEntries": [
Arrayoflanguageentries{
"language": "A Constant value applicable for Language",
"data": [
Arrayoftranslationsfortheselectedlanguage{
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
arrayofimagesfortheselectedlanguagewithstructure{
"imageType": "A Constant value applicable for ImageType",
"blob": trueifyouareuploadingimageorusingimageId,
Falseifyouareprovidinglink.,
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
"enabled": true/false,
"messageContent": "Content of your email. Using place holder ##SMS Pass Link## will generate pass download link."
},
{
"channel": "EMAIL",
"enabled": true/false,
"messageContent": "Content of your email. Using place holder ##Email Pass Link## will generate pass download link.",
"subject": "subject for the mail",
"senderName": "The email will be sent on this name",
"senderEmail": "The email will be sent from this email ID"
}
],
"passUpdateNotificationDetails": [
{
"channel": "SMS",
"enabled": true/false,
"messageContent": "SMS to be sent when the user downloads the pass."
},
{
"channel": "EMAIL",
"enabled": true/false,
"messageContent": "Email to be sent when the user downloads the pass.",
"subject": "subject for the mail",
"senderName": "The email will be sent on this name",
"senderEmail": "The email will be sent from this Email ID."
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
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
