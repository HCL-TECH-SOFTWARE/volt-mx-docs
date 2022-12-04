
# Create Pass Template

The **Create Pass Template** API adds pass templates into Engagement Services.

## URL

The HTTP URL for Create Pass Template API is:

```
http://<<host>>:<<port>>/api/v1/templates/passbook
```

This service implements **Gateway Filter for Authentication** to authenticate access of the service by a user.

## Method

POST

## Header

The payload's request header includes Content-Type for JSON as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter       | Level – Two                  | Level – Three   | Type    | Description                                                                                      |
| --------------------- | ---------------------------- | --------------- | ------- | ------------------------------------------------------------------------------------------------ |
| name                  |                              |                 | string  | The unique name assigned to a pass template                                                      |
| passIntegrationConfig |                              |                 |         | An array of passIntegrationConfig objects                                                        |
|                       | passIssueNotificationDetails |                 |         | An array of passIssueNotificationDetails objects                                                 |
|                       |                              | channel         | string  | Channel type as push , SMS or email                                                              |
|                       |                              | enabled         | boolean | If channel type is enabled or not                                                                |
|                       |                              | messageContent  | string  | Message description                                                                              |
|                       |                              | subject         | string  | Subject of the pass template. The subject convey the essence of the pass template                |
|                       |                              | senderName      | string  | Name of the sender                                                                               |
|                       |                              | senderEmail     | string  | Email ID of the sender                                                                           |
|                       | passContent                  |                 |         | An array of passContent objects                                                                  |
|                       |                              | basicDetails    |         | An array of basicDetails objects. For more details, [see](Pass_Template.md#passtemplates)      |
|                       |                              | appearance      |         | An array of appearance objects. For more details, [see](Pass_Template.md#appearance)           |
|                       |                              | frontLayout     |         | An array of frontLayout objects. For more details, [see](Pass_Template.md#frontLayout)         |
|                       |                              | backLayout      |         | An array of backLayout objects. For more details, [see](Pass_Template.md#backLayout)           |
|                       |                              | passRelevance   |         | An array of passRelevance objects. For more details, [see](Pass_Template.md#passRelevance)     |
|                       |                              | passRules       |         | An array of passRules objects. For more details, [see](Pass_Template.md#passRules)             |
|                       |                              | languageDetails |         | An array of languageDetails objects. For more details, [see](Pass_Template.md#languageDetails) |

## Sample Request

```
  
 {
"name": "TestTemplate",
"passIntegrationConfig": {
"passIssueNotificationDetails": [{
"channel": "SMS",
"enabled": true / false,
"messageContent": "Content of your email. Using place holder
##SMS Pass Link## will generate pass download link."
},
{
"channel": "EMAIL",
"enabled": true / false,
"messageContent": "Content of your email. Using place holder
##Email Pass Link## will generate pass download link.",
"subject": "subject for the mail",
"senderName": "The email will be sent on this name",
"senderEmail": "The email will be sent from this email ID"
}
],
"passUpdateNotificationDetails": [{
"channel": "SMS",
"enabled": true / false,
"messageContent": "SMS to be sent when the user downloads the pass."
},
{
"channel": "EMAIL",
"enabled": true / false,
"messageContent": "Email to be sent when the user downloads the pass.",
"subject": "subject for the mail",
"senderName": "The email will be sent on this name",
"senderEmail": "The email will be sent from this email ID"
}
]
},
"passContent": {
"basicDetails": {
"passType": "A Constant value applicable for PassType",
"passTypeIdentifier": "A valid Pass type Identifier added in the Volt MX Foundry Messaging system",
"passSerialNumberType": "A Constant value applicable for PassSerialNumberType",
"passSerialNumber": " ",
"groupIdentifier": "",
"appLaunchURL": "",
"ituneIdentifiers": "Comma separated iTunes Identifier values.",
"customJsonData": {

},
"timezone": "A Constant value applicable for TimeZones",
"organizationName": "",
"description": ""
},
"appearance": {
"bgColor": "the color value in hexadecimal",
"labelColor": "the color value in hexadecimal",
"valueColor": "the color value in hexadecimal",
"suppressStripShine": true / false,
"images": [{
"imageType": "A Constant value applicable for ImageType",
"blob": trueifyouareuploadingimageorusingimageId,
Falseifyouareprovidinglink.,
"url": "url of the image",
"imageId": "the image id stored in Volt MX Foundry Messaging system",
"imageFieldName": "name of the field from the request parameters that is applicable here"
}]
},
"frontLayout": {
"logoText": "",
"transitType": "A Constant value applicable for TransitType",
"headerFields": [
arrayoffieldswithstructure {
"label": "field label",
"data": "field value",
"dataType": "A Constant value applicable for PassDataType",
"numberFormat": "A Constant value applicable for NumberFormatType",
"currency": "A Constant value applicable for CurrencyFormat",
"dateTimeFormat": "A Constant value applicable for DateFormatType",
"displayRelatively": true / false,
"ignoreTimezone": true / false,
"alignment": "A Constant value applicable for PassFieldAlignment",
"key": "Unique field name"
}
],
"primaryFields": [
arrayoffieldswithstructure {
"label": "field label",
"data": "field value",
"dataType": "A Constant value applicable for PassDataType",
"numberFormat": "A Constant value applicable for NumberFormatType",
"currency": "A Constant value applicable for CurrencyFormat",
"dateTimeFormat": "A Constant value applicable for DateFormatType",
"displayRelatively": true / false,
"ignoreTimezone": true / false,
"key": "Unique field name"
}
],
"auxiliaryFields": [
arrayoffieldswithstructure {
"label": "field label",
"data": "field value",
"dataType": "A Constant value applicable for PassDataType",
"numberFormat": "A Constant value applicable for NumberFormatType",
"currency": "A Constant value applicable for CurrencyFormat",
"dateTimeFormat": "A Constant value applicable for DateFormatType",
"displayRelatively": true / false,
"ignoreTimezone": true / false,
"alignment": "A Constant value applicable for PassFieldAlignment",
"key": "Unique field name"
}
],
"secondaryFields": [
arrayoffieldswithstructure {
"label": "field label",
"data": "field value",
"dataType": "A Constant value applicable for PassDataType",
"numberFormat": "A Constant value applicable for NumberFormatType",
"currency": "A Constant value applicable for CurrencyFormat",
"dateTimeFormat": "A Constant value applicable for DateFormatType",
"displayRelatively": true / false,
"ignoreTimezone": true / false,
"alignment": "A Constant value applicable for PassFieldAlignment",
"key": "Unique field name"
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
"enableAutoUpdates": true / false,
"fields": [
arrayoffieldswithstructure {
"label": "field label",
"data": "field value",
"dataType": "A Constant value applicable for PassDataType",
"numberFormat": "A Constant value applicable for NumberFormatType",
"currency": "A Constant value applicable for CurrencyFormat",
"dateTimeFormat": "A Constant value applicable for DateFormatType",
"displayRelatively": true / false,
"ignoreTimezone": true / false,
"autolink": "A Constant value applicable for DataDetectorType",
"key": "Unique field name"
}
]
},
"passRelevance": {
"relevantDate": "09/18/2014 12:00:00 AM",
"ignoreTimezone": true / false,
"relevantLocations": [
arrayoflocationswithstructure {
"id": ##idofthelocationstoredinVoltMXFoundryMessaging##,
"relevantText": "Relevant text to appear when user is in the given location"
}
],
"maxDistance": Maxradialdistancethatthepassisapplicablefortheabovegivenlocations,
"relevantBeacons": [
arrayofbeaconswithstructure {
"id": ##idofthebeaconstoredinVoltMXFoundryMessaging##,
"relevantText": "Relevant text to appear when user is in the given beacon region"
}
]
},
"passRules": {
"dateRestriction": "A Constant value applicable for PassDateRestriction",
"stopAfter": "A date after which pass should not be distributed",
"expiryDate": "09/26/2014 07:00:00 AM",
"voided": true / false
},
"languageDetails": {
"originalFields": [
"field1",
"field2",
"field3".......
],
"languageEntries": [
Arrayoflanguageentries {
"language": "A Constant value applicable for Language",
"data": [
Arrayoftranslationsfortheselectedlanguage {
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
arrayofimagesfortheselectedlanguagewithstructure {
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
"passLanguage": "A Constant value applicable for Language. This is the Pass default language"
}
}
}
```

## Sample Response

```
{   
"message": "Details added successfully",
   "id": "templateid"
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Details added successfully        |
| Status 400 | Invalid request format            |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
