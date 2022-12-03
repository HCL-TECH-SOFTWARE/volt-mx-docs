                            


Create Event
============

The **Create Event** API adds events into Engagement Server.

URL
---

The HTTP URL for **Create Event** API is:

```
http://<<host>>:<<port>>/api/v1/events
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

Method
------

POST

Header
------

The payload's request header includes Content-Type for JSON as application/json;charset=UTF-8.

Input Parameters
----------------

The following fields are input parameters:

> **_Note:_** The `name`, `description`, `eventType`, `eventPushes`, `eventMails`, `eventSms`, and `eventPass` are common parameters for all the sample request payloads.

  
| Input Parameter | Level – Two | Level – Three | Required | Type | Description |
| --- | --- | --- | --- | --- | --- |
| name |   |   | Yes | string | Event name |
| description |   |   | Yes | string | Description conveying the essence of the event |
| eventType |   |   | Optional | string | Selected event type |
|   | eventPass |   |   |   | An array of eventPass objects. For more details, [see](Event.md#passtemplatedata) |
|   | eventPushes |   |   |   | An array of event pushes including platform specific properties. For more details, [see](Event.md#eventpushes) |
|   |   | platformSpecificProps |   |   | An array of platform specific properties properties. For more details, [see](Event.md#platformspecificprops-output-parameters) |
|   | eventMails |   |   |   | An array of eventMails objects. For more details, [see](Event.md#eventmails) |
|   | eventSms |   |   |   | An array of eventSms objects. For more details, [see](Event.md#eventsms) |
|   | eventVoiceSms |   |   |   | An array of eventVoiceSms objects. For more details, [see](Event.md#eventvoicesms) |
| **Input Parameters - Create Event with Rich Push** ||||||
| application |   |   | Yes | long | An application associated with the rich push event |
| richContent |   |   | Yes | string | Rich text message |
| isPush |   |   | Optional | boolean | If event rich push message is true or false |
| isEmail |   |   | Optional | boolean | If event rich email message is true or false |
| isSms |   |   | Optional | boolean | If event rich SMS message is true or false |
| **Input Parameters - Create Event with Channel Priorities** ||||||
| channelPriorities |   |   | Optional |   | An array of channel priority objects. The channels are listed in priority order, with the highest priority channel listed first. |
|   | messageChannel |   | Yes | string | The message channel type such as push notification, email, or SMS. |

Sample Request
--------------

```
{
	"name": "Jet Airways Diwali Fair",
	"description": "Jet Airways Boarding Offers",
	"eventType": "",
	"eventPushes": [{
		"messageName": "PushMessageName",
		"message": "Message Content",
		"richContent": "<h1>Rich Push Content</h1>",
		"appId": "25016-9447884208",
		"platformSpecificProps": {
			"iphone": {
				"badge": "1",
				"sound": "sound.wav",
				"contentAvailable": "",
				"actionLocKey": "",
				"locKey": "",
				"locArgs": {
					"locArg": ""
				},
				"launchImage": "",
				"title": "Message Title",
				"titleLocKey": "",
				"titleLocArgs": {
					"titleLocArg": ""
				},
				"customData": {
					"key": {
					"name": "key Name",
					"content": "Key Value"
					}
				}
			},
			"android": {
				"key": {
				"name": "key name",
				"value": "key value"
				}
			},
			"blackberry": {
				"header": {
					"name": "key name",
					"value": "key value"
				}
			},
                      "web": {
				"key": {
				"name": "key name",
				"value": "key value"
				}
			},
			"windows": {
				"notificationType": "TILE",
				"title": "Title",
				"badge": "1",
				"imagePath": "path of the image"
			}
		}
	}],
	"eventMails": [{
		"mailName": "Email Message Name",
		"mailSubject": "Mail subject",
		"mailContent": "<h1>Mail Content</h1>",
		"contentType": "text.html",
		"senderMailId": "xxx@xxx.com",
		"senderMailName": "Sender Name"
	}],
	"eventSms": [{
		"smsName": "SMS Message Name",
		"smsContent": "SMS Content"
	}],
	"eventVoiceSms": [{
		"smsName": "Voice SMS Name",
		"smsContent": "Voice SMS Content"
	}],
	"eventPass": {
		"passName": "BoardingPass",
		"passType": "BOARDING",
		"passIntegrationConfig": {
			"passIssueNotificationDetails": [{
				"channel": "EMAIL",
				"enabled": true,
				"messageContent":  
 "Pass Email< a href = '##Email Pass Link##' >click here< /a>",
				"subject": "Boarding Pass Automation",
				"senderName": "",
				"senderEmail": ""
			}]
		},
		"passContent": {
			"basicDetails": {
				"passTypeIdentifier":  
 "pass.com.vms.passbook5",
				"passSerialNumber": "",
				"groupIdentifier": "",
				"appLaunchURL": "",
				"ituneIdentifiers": "",
				"webServiceUrl": "http://localhost:8080/vpns/x.png",
				"timezone": "(GMT) Casablanca",
				"passType": "BOARDING",
				"organizationName": "Jet Airways",
				"description": "Jet Airways Pass",
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
					"url": "http://icons.com/icons/x.png",
					"blob": false,
					"size": 7445,
					"extension": "png",
					"imageType": "FOOTER",
					"imageId": ""
				}, {
					"url": "image URL",
					"blob": false,
					"size": 7445,
					"extension": "png",
					"imageType": "LOGO",
					"imageId": ""
				}, {
					"url": "http://icons.com/icons/x.png",
					"blob": false,
					"size": 7445,
					"extension": "png",
					"imageType": "ICON",
					"imageId": ""
				}]
			},
			"frontLayout": {
				"logoText": "Logo",
				"headerFields": [{
					"label": "GATE",
					"data": "sample data",
					"changeMessage": "",
					"displayRelatively": false,
					"ignoreTimezone": false,
					"key": "gate",
					"dataType": "TEXT",
					"numberFormat": "",
					"currency": "",
					"dateTimeFormat": "",
					"alignment": "",
					"autolink": []
				}],
				"primaryFields": [{
					"label": "SAN FRANCISCO",
					"data": "xxxxxxxxxxxxxxxxx",
					"changeMessage": "",
					"displayRelatively": false,
					"ignoreTimezone": false,
					"key": "depart",
					"dataType": "TEXT",
					"numberFormat": "",
					"currency": "",
					"dateTimeFormat": "",
					"alignment": "",
					"autolink": []
				}],
				"auxiliaryFields": [{
					"label": "DEPART",
					"data": "xxxxxxxxxxxxxx",
					"changeMessage": "",
					"displayRelatively": false,
					"ignoreTimezone": false,
					"key": "boardingTime",
					"dataType": "TEXT",
					"numberFormat": "",
					"currency": "",
					"dateTimeFormat": "",
					"alignment": "",
					"autolink": []
				}, {
					"label": "FLIGHT",
					"data": "xxxxxxxxxxxxxxxxx",
					"changeMessage": "",
					"displayRelatively": false,
					"ignoreTimezone": false,
					"key": "xxxxxxxxxxxxxxxxxx",
					"dataType": "TEXT",
					"numberFormat": "",
					"currency": "",
					"dateTimeFormat": "",
					"alignment": "",
					"autolink": []
				}, {
					"label": "DESIG",
					"data": "xxxxxxxxxxxxxxxx",
					"changeMessage": "",
					"displayRelatively": false,
					"ignoreTimezone": false,
					"key": "class",
					"dataType": "TEXT",
					"numberFormat": "",
					"currency": "",
					"dateTimeFormat": "",
					"alignment": "",
					"autolink": []
				}, {
					"label": "DATE",
					"data": "xxxxxxxxxxxxx",
					"changeMessage": "",
					"displayRelatively": false,
					"ignoreTimezone": false,
					"key": "date",
					"dataType": "TEXT",
					"numberFormat": "",
					"currency": "",
					"dateTimeFormat": "",
					"alignment": "",
					"autolink": []
				}],
				"secondaryFields": [{
					"label": "PASSENGER",
					"data": "xxxxxxxxxxxxxxxxxx",
					"changeMessage": "",
					"displayRelatively": false,
					"ignoreTimezone": false,
					"key": "passenger",
					"dataType": "TEXT",
					"numberFormat": "",
					"currency": "",
					"dateTimeFormat": "",
					"alignment": "",
					"autolink": []
				}],
				"barcodeDetails": {
				"message": "xxxxxxxxxxxxxxx",
				"alternateText": "",
				"barcodeType": "PDF417",
				"embeddedMessageType": "HARDCODED_MESSAGE",
				"alternativeTextType": "DONOT_DISPLAY",
				"embeddedFormat": "UTF_8"
				},
				"transitType": "AIR"
			},
			"backLayout": {
				"fields": [{
					"label": "PASSPORT",
					"data": "xxxxxxxxxxxxxxx",
					"changeMessage": "",
					"displayRelatively": false,
					"ignoreTimezone": false,
					"key": "passport",
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
				"maxDistance": 10.0
			},
			"passRules": {
				"stopAfter": "",
				"expiryDate": "09/29/2018 06:00:00 AM",
				"voided": false,
				"dateRestriction": "PERMANENTLY_AVAILABLE"
			},
			"languageDetails": {
				"originalFields": [],
				"languageEntries": [],
				"passLanguage": "EN"
			}
		}
	}
	
}
```

Create Event with Rich Push
---------------------------

```
{
    "name": "Rich Push Event Message",
    "description": "Event With Rich Push",
    "application": "AppforAll",
    "message": "CreateEventWithRichPush ##name##",
    "richContent": "Sample rich content",
    "eventType": null,
    "isPush": "true",
    "isEmail": "false",
    "isSms": "false"
}
```

Create Event with Channel Priorities
------------------------------------

```
{
	"name": "channel Priority Event",
	"description": "Creating an Event Push for channel priority",
	"eventType": "",
	"eventPushes": [{
		"messageName": "Event Message",
		"appId": "messaging",
		"richContent": "<h1>Hello</h1>",
		"message": "Creating an Event Push for channel priority",
		"platformSpecificProps": {
			"blackberry": {
				"header": {
					"name": "useEncoding",
					"value": "UTF-8"
				}
			},
			"android": {
				"restrictedPackageName": "",
				"color": "#ffeegg",
				"titleLocKey": "titleLocKey",
				"sound": "d.wav",
				"icon": "flipkart",
				"delayWhileIdle": "TRUE",
				"bodyLocKey": "bodyLocKey",
				"title": "",
				"priority": "HIGH",
				"bodyLocArgs": {
					"bodyLocArg": [
						"bodyLocArgs1",
						"bodyLocArgs2"
					]
				},
				"titleLocArgs": {
					"titleLocArg": [
						"titleLocArgs"
					]
				},
				"key": [{
						"name": "gcmKey1",
						"value": "gcmValue1"
					},
					{
						"name": "gcmKey2",
						"value": "gcmValue2"
					}
				],
				"clickAction": "clickActKey"
			},
			"windows": {
				"badge": "3",
				"imagePath": "http://images.com/background",
				"notificationType": "TILE",
				"title": "New Message"
			},
                      "web": {
				"icon": "flipkart",
				"title": "",
				"key": [{
						"name": "fcmKey1",
						"value": "fcmValue1"
					}
				],
				"clickAction": "clickActKey"
			},
			"iphone": {
				"locArgs": {
					"locArg": "locArg"
				},
				"badge": "1",
				"actionLocKey": "actionkey",
				"titleLocKey": "titleLocKey",
				"sound": "sound.mp4",
				"launchImage": "launchImage",
				"locKey": "lockey",
				"customData": {
					"key": {
						"name": "cust",
						"content": "value"
					}
				},
				"titleLocArgs": {
					"titleLocArg": "titleLocArg"
				},
				"title": "title"
			},
			"wns": {
				"text1": "Message Title Comes",
				"text2": "Body here for all messages",
				"notificationType": "TOAST",
				"screenName": "screen1.xaml",
				"params": {
					"key": [{
							"name": "wnsKey1",
							"value": "wnsValue1"
						},
						{
							"name": "wnsKey2",
							"value": "wnsValue2"
						}
					]
				}
			},
			"jpush": {
				"key": [{
						"name": "title",
						"value": "Message Title Comes"
					},
					{
						"name": "jPushKey1",
						"value": "jPushValue1"
					},
					{
						"name": "jPushKey2",
						"value": "jPushValue2"
					}
				]
			}
		}
	}],
	"eventMails": [{
		"mailName": "Channel Priority Message",
		"mailSubject": "Mail subject from event mail",
		"mailContent": "Creating an Event Push for channel priority",
		"senderMailId": "admin@voltmx.com",
		"senderMailName": "VMS Event Mail Sender",
		"contentType": "text.html"
	}],
	"eventSms": [{
		"smsName": "Channel Priority SMS Message",
		"smsContent": "Creating an Event Push for channel priority"
	}],
	"eventVoiceSms": [{
		"smsName": "Channel Priority Voice SMS Message",
		"smsContent": "Voice SMS Content"
	}],
	"channelPriorities": [{
			"messageChannel": "PUSH"
		},
		{
			"messageChannel": "Email"
		},
		{
			"messageChannel": "SMS"
		}
	]
}
```

Output Parameters
-----------------

The following fields are output parameters:

  
| Output Parameter | Type | Description |
| --- | --- | --- |
| id | long | Unique ID assigned to an event |
| message | string | Response status message |

Sample Response
---------------

```
{  
"message" : "Details added successfully",  
"id" : "eventId"  
}  

```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Details added successfully |
| Status 400 | Invalid Request Format/Duplicate Details ProvidedEmail Name is requiredEmail subject is requiredEmail content is requiredSMS Name is requiredSMS Content is requiredEvent message name is required. SMScontent is requiredPass name is emptyInvalid Request Payload. Error occurred at property eventPass->passIntegrationConfig->passIssueNotificationDetails->null at index 0->channelEnable at least one pass issue notification channelEmail notification content is requiredEmail notification subject is requiredPass timezone is requiredOrganization name is requiredPass description is requiredBackground color is required Label text color is required Value Text Color is requiredImage type is required Pass date restriction is required Field Label for field passport is empty. Field data for field passport is emptyField name is empty Embedded message type is required. Alternative text type is requiredFOOTER not a valid image. Only png type(s) allowed |
| Status 401 | Unauthorized request |
| Status 500 | Server Failure to process request |
