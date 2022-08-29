                           


Modify Campaign with Upload Images
==================================

The **Modify Campaign with Upload Images** service as a multipart form provides a payload for campaigns along with required images to use in passes. This service accepts the Campaign payload field name as campaignPayload, and images can be provided as a part of multipart request. The image field names must be provided in the campaignPayload under the images section.

Use Case
--------

If you wish to create a pass with uploaded images instead of providing the image URL, then you need to post the input parameters as given below:

1.  Send the form data as a key-value pair.
    1.  Post the complete payload as a key-value pair (campaignPayload : payload body in the text format).
    2.  Post the image details as a key value pair such as icon: selected file format from the image location.

URL
---

The HTTP URL for **Modify Campaign with Upload Images** service is:

```
http://<<host>>:<<port>>/api/v1/campaigns/<id>/modify
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

Method
------

POST

Input Parameters
----------------

Following fields are the input parameters:

  
| Input Parameter | Level – Two | Level – Three | Type | Description |
| --- | --- | --- | --- | --- |
| name |   |   | string | Name of the campaign |
| campaignType |   |   | string | Type of the campaign |
| zone |   |   | string | Selected time zone for the campaign |
| startDateStr |   |   | string | Date and time on which the campaign starts |
| endDateStr |   |   | string | Date and time on which the campaign ends |
| campaignSegments |   |   |   | An array of campaign segments |
|   | segment ID |   | string | Unique ID assigned to the campaign |
|   | name |   | string | Segment name |
| campaignMessages |   |   |   | An array of campaign message parameters, for more details, [see](Campaign.md#campaignmessages) |
|   |   | platformSpecificProps |   | Properties pertaining to specific platforms: iOS, Windows, BlackBerry Android, and Web, for more details, [see](Campaign.md#platformspecificprops-input-output-parameters) |
| campaignMails |   |   |   | An array of campaign mail parameters, for more details, [see](Campaign.md#campaignmails) |
| campaignSms |   |   |   | An array of campaign SMS parameters, for more details, [see](Campaign.md#campaignsms) |
| campaignVoiceSms |   |   |   | An array of campaign Voice SMS parameters, for more details, [see](Campaign.md#campaignvoicesms) |
| campaignPasses |   |   |   | An array of campaign passes parameters, for more details, [see](Campaign.md#campaignpasses) |
| campaignChannelPriorities |   |   |   | An array of campaign channel priorities. |
| Status |   |   | string | Current status of the campaign such as running |

Sample Request
--------------

```

            {
	"name": "Validate Campaign API 2",
	"campaignType": "",
	"zone": "(GMT+05:30) Chennai, Mumbai, New Delhi",
	"startDateStr": "06/29/2016 04:55:13 PM",
	"endDateStr": "08/30/2016 12:00:00 AM",
	"campaignSegments": [{
		"segment": {
			"id": 2,
			"name": "sample segment"
		}
	}, {
		"segment": {
			"id": 1,
			"name": "All Users"
		}
	}],
	"campaignMessages": [{
		"name": "Hi",
		"message": "##First Name####Last Name##",
		"richContent": "",
		"application": {
			"appId": "20096-6548262167",
			"applicationName": "AppforAll"
		},
		"subscribers": 2,
		"pushesSent": 0,
		"pushesOpened": 0,
		"platformSpecificProps": {
			"title": "Hi",
			"iphone": {
				"badge": "",
				"sound": "",
				"category": "",
				"contentAvailable": "",
				"actionLocKey": "",
				"locKey": "",
				"locArgs": "",
				"launchImage": "",
				"title": "Hi",
				"titleLocKey": "",
				"titleLocArgs": "",
				"customData": {
					"key": []
				}
			},
			"blackberry": {
				"header": []
			},
			"android": {
				"title": "Hi",
				"sound": "",
				"icon": "",
				"color": "",
				"clickAction": "",
				"bodyLocKey": "",
				"tag": "",
				"collapseKey": "",
				"priority": "",
				"delayWhileIdle": "",
				"restrictedPackageName": "",
				"bodyLocArgs": "",
				"titleLocKey": "",
				"titleLocArgs": "",
				"key": []
			},
                       "web": {
				"title": "Hi",
				"icon": "",
                               "clickAction": "",
				"key": [{
					"name": "title",
					"value": "Hi"
				}]
			},
			"jpush": {
				"key": [{
					"name": "title",
					"value": "Hi"
				}]
			},
			"windows": {
				"notificationType": "TOAST",
				"text1": "Hi",
				"text2": "##First Name####Last Name##",
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
				"text1": "Hi",
				"text2": "##First Name####Last Name##",
				"screenName": "",
				"params": {
					"key": []
				},
				"template": "",
				"version": "",
				"fallback": "",
				"badge": "",
				"image": "",
				"text": "",
				"value": ""
			}
		}
	}],
	"campaignMails": [{
		"subject": "Hi",
		"contentType": "text.html",
		"senderEmail": "aron.hale@voltmx.com",
		"senderName": "admin",
		"content": "##First Name####Email##",
		"mailsSent": 0,
		"mailsOpened": 0
	}],
	"campaignSms": [],
	"campaignVoiceSms": [],
	"campaignPasses": [{
		"passName": "eBay Summer Sale coupons",
		"passType": "COUPON",
		"passOpened": 0,
		"passSent": 0,
		"passIntegrationConfig": {
			"passIssueNotificationDetails": [{
				"channel": "SMS",
				"enabled": true,
				"messageContent":   
"Online shopping June 2016",
				"subject": "",
				"senderName": "",
				"senderEmail": ""
			}]
		},
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
				"timezone": "  
(GMT-05:00) Eastern Time (US & Canada)",
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
					"imageType": "ICON",
					"imageFieldName": "icon",
					"blob": "true"
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
				"stopAfter": "09/30/2016 12:00:00 AM",
				"expiryDate": "",
				"voided": false,
				"dateRestriction": "DONOT_ISSUE_AFTER"
			},
			"languageDetails": {
				"originalFields": [],
				"languageEntries": [],
				"passLanguage": "EN"
			}
		}
	}],
	"campaignChannelPriorities": [],
	"status": "Running"
}
```

Sample Response
---------------

```
{
  "id" : "7",
  "message" : "Details updated successfully"
}
```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Details updated successfully |
| Status 400 | Invalid request format |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |
