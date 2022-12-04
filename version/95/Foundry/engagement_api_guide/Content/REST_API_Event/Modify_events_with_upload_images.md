
# Modify Pass Events with Upload Images

The **Modify Pass Events with Upload Images** API is used to modify an event with your custom images, which are not available as part of the web URL reference.

## Use Case

If you wish to update a pass with new uploaded images instead of providing the image URL, then you need to post the input parameters as given below:

1.  Send the form data as a key-value pair.
    1.  Post the complete payload as a key-value pair (eventPayload : payload body in the text format)
    2.  Post the image details as a key value pair such as logo: selected file format from the image location.

## URL

The HTTP URL for Modify event with upload images API is:

```
http://<<host>>:<<port>>/api/v1/events/<id>/modify
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

POST

## Input Parameters

The following fields are input parameters:

| Input Parameter | Level – Two           | Required | Type   | Description                                                                                                               |
| --------------- | --------------------- | -------- | ------ | ------------------------------------------------------------------------------------------------------------------------- |
| name            |                       | Yes      | string | The unique name assigned to an event.                                                                                     |
| description     |                       | Yes      | string | Event description defining objective of the event.                                                                        |
| Event Type      |                       | Optional | string | The event type assigned with an event.                                                                                    |
| eventPass       |                       |          |        | An array of eventPass objects. For more details, [see](Event.md#passtemplatedata)                                       |
| eventPushes     |                       |          |        | An array of eventPushes objects including platform specific properties. For more details, [see](Event.md#eventpushes)   |
|                 | platformSpecificProps |          |        | An array of platformSpecificProps properties. For more details, [see](Event.md#platformspecificprops-output-parameters) |
| eventMails      |                       |          |        | An array of eventMails objects. For more details, [see](Event.md#eventmails)                                            |
| eventful        |                       |          |        | An array of eventSms objects. For more details, [see](Event.md#eventsms)                                                |

## Sample Request

```
  
 {
"name": "eBay Online Shopping June 2018",
"description": "online shopping Home Goods",
"eventType": "",
"eventPass": {
"id": 1,
"passName": "eBay Summer Sale coupons",
"subscribers": "",
"passOpened": "",
"passSent": "",
"passContent": {
"basicDetails": {
"passTypeIdentifier":  
"pass.com.vms.passbook2",
"passSerialNumber": "",
"groupIdentifier": "",
"appLaunchURL": "",
"ituneIdentifiers": "",
"webServiceUrl":  
"http://localhost:8181/vpns/",
"timezone":  
"(GMT-05:00) Eastern Time (US & Canada)",
"passType": "COUPON",
"organizationName": "eBay",
"description": "Online shopping",
"passSerialNumberType": "AUTO_GEN",
"eventTicketType": "",
"customJsonData": {}
},
"appearance": {
"bgColor": "#64798c",
"labelColor": "#ccdae9",
"valueColor": "#ffffff",
"suppressStripShine": false,
"images": [{
"blob": true,
"extension": "png",
"imageType": "ICON",
"imageFieldName": "icon"
}]
},
"frontLayout": {
"logoText": "eBay",
"headerFields": [{
"label": "Computer",
"data": "Laptops",
"changeMessage": "",
"displayRelatively": false,
"ignoreTimezone": false,
"key": "Summer Sale 2016",
"dataType": "TEXT",
"numberFormat": "",
"currency": "",
"dateTimeFormat": "",
"alignment": "LEFT",
"autolink": []
}],
"primaryFields": [],
"auxiliaryFields": [],
"secondaryFields": [],
"barcodeDetails": {
"message": "",
"alternateText": "",
"barcodeType": "PDF417",
"embeddedMessageType":  
"PASS_SERIAL_NO",
"alternativeTextType":  
"BARCODE_CONTENTS",
"embeddedFormat": "UTF_8"
},
"transitType": ""
},
"backLayout": {
"fields": [{
"label": "Electronic Goods ",
"data": "Laptops and Gadgets",
"changeMessage": "",
"displayRelatively": false,
"ignoreTimezone": false,
"key": "Electronic",
"dataType": "TEXT",
"numberFormat": "",
"currency": "",
"dateTimeFormat": "",
"alignment": "",
"autolink": []
}],
"enableAutoUpdates": false
},
"passRelevance": {
"relevantDate": "",
"ignoreTimezone": false,
"relevantLocations": [],
"relevantBeacons": [],
"maxDistance": ""
},
"passRules": {
"stopAfter":"06/30/2016 12:00:00 AM",
"expiryDate": "",
"voided": false,
"dateRestriction":"DONOT_ISSUE_AFTER"
},
"languageDetails": {
"originalFields": [],
"languageEntries": [],
"passLanguage": "EN"
}
},
"passIntegrationConfig": {
"passIssueNotificationDetails": [{
"channel": "SMS",
"enabled": true,
"messageContent": "Online shopping",
"subject": "",
"senderName": "",
"senderEmail": ""
}]
}
},
"registrationId": "4928500176715381493",
"eventPushes": [{
"messageName": "summer sale",
"message": "##First Name####Last Name##",
"richContent": "",
"platformSpecificProps": {
"title": "June 16 sale",
"iphone": {
"badge": "1",
"sound": "sound.mp4",
"category": "",
"contentAvailable": "1",
"actionLocKey": "actionkey",
"locKey": "",
"locArgs": {
"locArg": "locArg"
},
"launchImage": "",
"title": "June 216 sale",
"titleLocKey": "",
"titleLocArgs": {
"titleLocArg": "titleLocArg"
},
"customData": {
"key": []
}
},
"blackberry": {
"header": []
},
"android": {
"title": "June 216 sale"
},
"jpush": {
"key": [{
"name": "title",
"value": "June 216 sale"
}]
},
"web": {
"title": "June 216 sale"
},
"windows": {
"notificationType": "TOAST",
"text1": "June 216 sale",
"text2": "##Last Name##",
"screenName": "",
"params": {
"key": []
},
"title": "",
"badge": "",
"imagePath": ""
},
"wns": {
"notificationType": "TOAST",
"text1": "June 216 sale",
"text2":"##Last Name##"
}
},
"appId": "20096-6548262167",
"subscribers": 0,
"pushesSent": 0,
"pushesOpened": 0
}],
"eventMails": [{
"mailName": "eBay Online Shopping",
"mailSubject": "summer sale 2016",
"mailContent": "##Email##",
"contentType": "text.html",
"senderMailId": "aron.hale@voltmx.com",
"senderMailName": "admin",
"mailDesignsList": [],
"subscribers": 0,
"mailsOpened": 0,
"mailsSent": 0
}],
"eventSms": [{
"smsName": "summer sale 2016",
"smsContent": "##Mobile Number##",
"subscribers": 0,
"smsSent": 0,
"smsOpened": 0
}]
}
```

## Output Parameters

The following fields are output parameters:

| Output Parameter | Type   | Description                    |
| ---------------- | ------ | ------------------------------ |
| id               | long   | Unique ID assigned to an event |
| message          | string | Response status message        |

## Sample Response

```
{
"id" : "3",
"message" : "Details updated successfully"
}
```

## Response Status

| Code       | Description                                               |
| ---------- | --------------------------------------------------------- |
| Status 200 | Details updated successfully                              |
| Status 400 | Invalid event ID provided or no event found with given ID |
| Status 401 | Unauthorized request                                      |
| Status 500 | Server failure to process request                         |
