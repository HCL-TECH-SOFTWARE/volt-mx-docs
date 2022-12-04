
# Get Campaign Details by ID

The **Get Campaign Details by ID** API provides details of a campaign. This API accepts the **Campaign ID** as an input parameter and responds with a campaign details matching the Campaign ID.

## URL

The HTTP URL for **Get Campaign Details by ID** API is:

```
http://<host>:<port>/api/v1/campaigns/<id>
```

This API implements Gateway Filter for Authentication/Basic Authentication to authenticate access of the API by a user.

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter          | Level - Two | Level - Three         | Type   | Description                                                                                                                    |
| ------------------------- | ----------- | --------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------ |
| id                        |             |                       | long   | Unique ID assigned to the campaign                                                                                             |
| name                      |             |                       | string | Campaign name                                                                                                                  |
| campaignType              |             |                       | string | Campaign type                                                                                                                  |
| zone                      |             |                       | string | The selected time zone for the campaign dates                                                                                  |
| startDateStr              |             |                       | string | Date on which the campaign starts                                                                                              |
| endDateStr                |             |                       | string | Date on which the campaign ends                                                                                                |
| terminatedDateStr         |             |                       | string | Date on which the campaign is terminated                                                                                       |
| pausedDateStr             |             |                       | string | Date on which the campaign was paused                                                                                          |
| lastModifiedBy            |             |                       | string | User name showing who last modified the campaign data                                                                          |
| lastModifiedDateStr       |             |                       | string | Date and time at which the campaign was last modified                                                                          |
| createdBy                 |             |                       | string | User name showing who created the campaign data                                                                                |
| createdDateStr            |             |                       | string | Date on which the campaign was created                                                                                         |
| campaignSegments          |             |                       |        | An array of campaign segments                                                                                                  |
|                           | segment     |                       | array  | Provides information about a campaign segment, including: id name                                                              |
| campaignMessages          |             |                       | array  | An array of compaign message information, for more details, [see](Campaign.md#campaignmessages)                              |
|                           |             | platformSpecificProps |        | An array of platform specific properties, for more details, [see](Campaign.md#platformspecificprops-input-output-parameters) |
| campaignMails             |             |                       | Array  | An array of campaign mail objects, for more details, [see](Campaign.md#campaignmails)                                        |
| campaignSms               |             |                       | array  | An array of campaign SMS objects, for more details, [see](Campaign.md#campaignsms)                                           |
| campaignVoiceSms          |             |                       | array  | An array of campaign Voice SMS objects, for more details, [see](Campaign.md#campaignvoicesms)                                |
| campaignPasses            |             |                       | array  | An array of campaign passes, for more details, [see](Campaign.md#campaignvoicesms)                                           |
| campaignChannelPriorities |             |                       | array  | An array of campaign channel (push, email and SMS ) priorities                                                                 |
| status                    |             |                       | string | The current status of the campaign as draft, pending or running                                                                |

## Sample Response

```
{
"id": 109,
"name": "CompleteAPIForCampaign",
"campaignType": "Promotions",
"zone": "(GMT+05:30) Chennai, Mumbai, New Delhi",
"startDateStr": "03/04/2016 05:44:57 PM",
"endDateStr": "03/05/2016 09:03:08 AM",
"terminatedDateStr": "",
"pausedDateStr": "",
"lastModifiedBy": "admin",
"lastModifiedDateStr": "03/04/2016 05:44:58 PM IST",
"createdBy": "admin",
"createdDateStr": "03/04/2016 05:44:57 PM IST",
"campaignSegments": [
{
"segment": {
"id": 2,
"name": "SegGeolocation152"
}
},
{
"segment": {
"id": 1,
"name": "SegEmailContiansCom173"
}
}
],
"campaignMessages": [
{
"name": "iphone India Promotion",
"message": "Hi ##First Name##, We are glad to announce flat 20% discount on iphone 6S. The offer ends by 30th March 2016. Hurry!!",
"richContent": "

<p>
    <s>
        <strong>Some Rich Content to promote the offer</strong>
    </s>
</p>\n",
            "application": {
                "appId": "AppForAll1",
                "applicationName": "AppForAll1"
            },
            "repeatMessage": {
                "name": "repeat Promotion iPhone India",
                "message": "Message box contents for repeat different message.\n Hi, ##First Name## ##Last Name## Hurry!! 20% discount on iphone 6s. The offer ends by 30th March 2016",
                "richContent": "",
                "subscribers": 4,
                "pushesSent": 0,
                "pushesOpened": 0,
                "platformSpecificProps": {
                    "title": "message title for repeat Promotion iPhone India",
                    "iphone": {
                        "badge": 1,
                        "sound": "repeat sound name",
                        "category": "repeat category",
                        "contentAvailable": 1,
                        "actionLocKey": "repeat alk",
                        "locKey": "repeat lk",
                        "locArgs": {
                            "locArg": [
                                "Repeat la1",
                                "Repeat la2"
                            ]
                        },
                        "launchImage": "./images/repeatMessageImage",
                        "title": "message title for repeat different message",
                        "titleLocKey": "repeat tlk",
                        "titleLocArgs": {
                            "titleLocArg": [
                                "repeat TLA",
                                " repeat Tla2"
                            ]
                        },
                        "customData": {
                            "key": [
                                {
                                    "content": "1",
                                    "name": "Hit"
                                },
                                {
                                    "content": "0",
                                    "name": "Miss"
                                }
                            ]
                        }
                    },
                    "android": {
                        "key": [
                            {
                                "name": "HitAndroid",
                                "value": "1"
                            },
                            {
                                "name": "MissAndroid",
                                "value": "0"
                            }
                        ]
                    },
                    "web": {
                        "key": [
                            {
                                "name": "HitWeb",
                                "value": "1"
                            },
                            {
                                "name": "MissWeb",
                                "value": "0"
                            }
                        ]
                    },
                    "jpush": {
                        "key": [
                            {
                                "name": "title",
                                "value": "message title for repeat different message"
                            },
                            {
                                "name": "HitJPush",
                                "value": "1"
                            },
                            {
                                "name": "MissJPush",
                                "value": "0"
                            }
                        ]
                    },
                    "windows": {
                        "notificationType": "RAW",
                        "text1": "",
                        "text2": "",
                        "screenName": "",
                        "params": "",
                        "title": "",
                        "badge": "",
                        "imagePath": ""
                    },
                    "wns": {
                        "notificationType": "RAW",
                        "text1": "",
                        "text2": "",
                        "screenName": "",
                        "params": "",
                        "template": "",
                        "version": "",
                        "fallback": "",
                        "badge": "",
                        "image": "",
                        "text": "",
                        "value": ""
                    }
                },
                "interval": 1,
                "intervalUnit": "Days"
            },
            "subscribers": 4,
            "pushesSent": 4,
            "pushesOpened": 0,
            "platformSpecificProps": {
                "title": "message title",
                "iphone": {
                    "badge": 1,
                    "sound": "soundname",
                    "category": "buisniess",
                    "contentAvailable": 12,
                    "actionLocKey": "alk",
                    "locKey": "lk",
                    "locArgs": {
                        "locArg": [
                            "la1",
                            "la2"
                        ]
                    },
                    "launchImage": "/image/launchimage",
                    "title": "message title",
                    "titleLocKey": "tlk",
                    "titleLocArgs": {
                        "titleLocArg": [
                            "tla1",
                            "tla2"
                        ]
                    },
                    "customData": {
                        "key": [
                            {
                                "content": "apple value",
                                "name": "apple "
                            }
                        ]
                    }
                },
                "android": {
                    "key": [
                        {
                            "name": "gcm key",
                            "value": "gcm  vlaue"
                        }
                    ]
                },
               "web": {
                    "key": [
                        {
                            "name": "fcm key",
                            "value": "fcm vlaue"
                        }
                    ]
                },
                "jpush": {
                    "key": [
                        {
                            "name": "title",
                            "value": "message title"
                        },
                        {
                            "name": "jpush",
                            "value": "jpush value"
                        }
                    ]
                },
                "windows": {
                    "notificationType": "TOAST",
                    "text1": "",
                    "text2": "",
                    "screenName": "screen name",
                    "params": {
                        "key": [
                            {
                                "name": "mpns params key",
                                "value": "mpns value"
                            }
                        ]
                    },
                    "title": "",
                    "badge": "",
                    "imagePath": ""
                },
                "wns": {
                    "notificationType": "TILE",
                    "text1": "",
                    "text2": "",
                    "screenName": "",
                    "params": "",
                    "template": "wns template",
                    "version": 1,
                    "fallback": "fallback",
                    "badge": "11",
                    "image": {
                        "key": [
                            {
                                "source": "image"
                            }
                        ]
                    },
                    "text": {
                        "key": [
                            {
                                "value": "text1"
                            },
                            {
                                "value": "text2"
                            }
                        ]
                    },
                    "value": ""
                }
            }
        },
        {
            "name": "Another message For Different App",
            "message": "Hi ##First Name##, We are glad to announce flat 20% discount on iphone 6s. The offer ends by 30th March 2016. Hurry!!",
            "richContent": "some rich content",
            "application": {
                "appId": "JPushSpecificApp",
                "applicationName": "JPushSpecificApp"
            },
            "repeatMessage": {
                "name": "Another message For Different App REPEAT",
                "message": "Message box contents for repeat different message.\n 
Hi, ##First Name## ##Last Name## Hurry!! 20% discount on iphone 6s. The offer ends by 30th March 2016",
                "richContent": "",
                "subscribers": 1,
                "pushesSent": 0,
                "pushesOpened": 0,
                "platformSpecificProps": {
                    "title": "Hello China",
                    "iphone": {
                        "badge": 1,
                        "sound": "tada",
                        "category": "Anniversary",
                        "contentAvailable": 1,
                        "actionLocKey": "Celebrate",
                        "locKey": "lockey",
                        "locArgs": {
                            "locArg": [
                                "locArg"
                            ]
                        },
                        "launchImage": "/yungyankan",
                        "title": "Hello China",
                        "titleLocKey": "tlk",
                        "titleLocArgs": {
                            "titleLocArg": [
                                "tla"
                            ]
                        },
                        "customData": {
                            "key": [
                                {
                                    "content": "1",
                                    "name": "surprise"
                                }
                            ]
                        }
                    },
                    "android": {
                        "key": [
                            {
                                "name": "surprise",
                                "value": "1"
                            }
                        ]
                    },
                    "web": {
                        "key": [
                            {
                                "name": "surprise",
                                "value": "1"
                            }
                        ]
                    },
                    "jpush": {
                        "key": [
                            {
                                "name": "title",
                                "value": "Hello China"
                            },
                            {
                                "name": "surprise",
                                "value": "1"
                            }
                        ]
                    },
                    "windows": {
                        "notificationType": "TILE",
                        "text1": "",
                        "text2": "",
                        "screenName": "",
                        "params": "",
                        "title": "mpnstitle",
                        "badge": 11,
                        "imagePath": "/mpns/surprise"
                    },
                    "wns": {
                        "notificationType": "BADGE",
                        "text1": "",
                        "text2": "",
                        "screenName": "",
                        "params": "",
                        "template": "",
                        "version": "",
                        "fallback": "",
                        "badge": "",
                        "image": "",
                        "text": "",
                        "value": "attention"
                    }
                },
                "interval": 1,
                "intervalUnit": "Hours"
            },
            "subscribers": 1,
            "pushesSent": 1,
            "pushesOpened": 0,
            "platformSpecificProps": {
                "title": "Hello China",
                "iphone": {
                    "badge": 1,
                    "sound": "tada",
                    "category": "Anniversary",
                    "contentAvailable": 1,
                    "actionLocKey": "Celebrate",
                    "locKey": "lockey",
                    "locArgs": {
                        "locArg": [
                            "locArg"
                        ]
                    },
                    "launchImage": "/yungyankan",
                    "title": "Hello China",
                    "titleLocKey": "tlk",
                    "titleLocArgs": {
                        "titleLocArg": [
                            "tla"
                        ]
                    },
                    "customData": {
                        "key": [
                            {
                                "content": "1",
                                "name": "surprise"
                            }
                        ]
                    }
                },
                "android": {
                    "key": [
                        {
                            "name": "surprise",
                            "value": "1"
                        }
                    ]
                },
                "web": {
                    "key": [
                        {
                            "name": "surprise",
                            "value": "1"
                        }
                    ]
                },
                "jpush": {
                    "key": [
                        {
                            "name": "title",
                            "value": "Hello China"
                        },
                        {
                            "name": "surprise",
                            "value": "1"
                        }
                    ]
                },
                "windows": {
                    "notificationType": "TOAST",
                    "text1": "",
                    "text2": "",
                    "screenName": "screen name",
                    "params": {
                        "key": [
                            {
                                "name": "mpns params key",
                                "value": "mpns value"
                            }
                        ]
                    },
                    "title": "",
                    "badge": "",
                    "imagePath": ""
                },
                "wns": {
                    "notificationType": "TOAST",
                    "text1": "",
                    "text2": "",
                    "screenName": "screen name",
                    "params": {
                        "key": [
                            {
                                "name": "wns params key",
                                "value": "wns value"
                            }
                        ]
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
        }
    ],
    "campaignMails": [
        {
            "subject": "email subject",
            "contentType": "text.html",
            "senderEmail": "",
            "senderName": "",
            "content": "compose message",
            "mailsSent": 0,
            "mailsOpened": 0,
            "repeatMessage": {
                "subject": "repeat email subject",
                "contentType": "text.html",
                "senderEmail": "",
                "senderName": "",
                "content": "##First Name##",
                "mailsSent": 0,
                "mailsOpened": 0,
                "interval": 1,
                "intervalUnit": "Weeks"
            }
        }
    ],
    "campaignSms": [
        {
            "name": "sms message name",
            "smsMessage": "message box!##Last Name##",
            "smsSent": 0,
            "smsOpened": 0,
            "repeatMessage": {
                "name": "sms message name",
                "smsMessage": "message box!##Last Name##",
                "smsSent": 0,
                "smsOpened": 0,
                "interval": 1,
                "intervalUnit": "Hours"
            }
        }
    ],
			
  "campaignVoiceSms" : [ {
    "name" : "campaign voice sms",
    "smsMessage" : "campaing voice sms for this campaign",
    "smsSent" : 0,
    "smsOpened" : 0
  } ],

    "campaignPasses": [
        {
            "passName": "BoardingPassAuto11",
            "passType": "BOARDING",
            "passOpened": 0,
            "passSent": 28,
            "passIntegrationConfig": {
                "passIssueNotificationDetails": [
                    {
                        "channel": "EMAIL",
                        "enabled": true,
                        "messageContent": "Pass Issue content Email

< a href = '##Email Pass Link##' > click here < /a>",
"subject": "Sending Boarding Pass Automation - Test case-01",
"senderName": "",
"senderEmail": ""
}
],
"passUpdateNotificationDetails": [
{
"channel": "EMAIL",
"enabled": true,
"messageContent": "Pass Updated into the device",
"subject": "Boarding Pass Updated - Automation - TestCase -01",
"senderName": "",
"senderEmail": ""
}
]
},
"passContent": {
"basicDetails": {
"passTypeIdentifier": "pass.com.vms.passbook1",
"passSerialNumber": "",
"groupIdentifier": "",
"appLaunchURL": "",
"ituneIdentifiers": "823580694",
"webServiceUrl": "http://10.10.24.48:9091/vpns/",
"timezone": "(GMT+05:30) Chennai, Mumbai, New Delhi",
"passType": "BOARDING",
"organizationName": "VoltMX Automation",
"description": "Creating Boarding Pass Template Through API",
"passSerialNumberType": "AUTO_GEN",
"eventTicketType": "",
"customJsonData": {

                    }
                },
                "appearance": {
                    "bgColor": "#FFF17F",
                    "labelColor": "#7E7100",
                    "valueColor": "#181500",
                    "suppressStripShine": false,
                    "images": [
                        {
                            "url": "http://icons.iconarchive.com/icons/martz90/circle-addon2/256/plane-flight-icon.png",
                            "blob": false,
                            "size": 20376,
                            "extension": "png",
                            "imageType": "LOGO",
                            "imageId": ""
                        },
                        {
                            "url":

"http://icons.iconarchive.com/icons/martz90/circle-addon2/256/plane-flight-icon.png",
"blob": false,
"size": 20376,
"extension": "png",
"imageType": "ICON",
"imageId": ""
}
]
},
"frontLayout": {
"logoText": "Brd-Auto-1",
"headerFields": [
{
"label": "header1",
"data": "GATE",
"changeMessage": "",
"displayRelatively": false,
"ignoreTimezone": false,
"key": "header1",
"dataType": "TEXT",
"numberFormat": "",
"currency": "",
"dateTimeFormat": "",
"alignment": "CENTER",
"autolink": [

                            ]
                        },
                        {
                            "label": "Head2",
                            "data": "2header",
                            "changeMessage": "",
                            "displayRelatively": false,
                            "ignoreTimezone": false,
                            "key": "header2",
                            "dataType": "TEXT",
                            "numberFormat": "",
                            "currency": "",
                            "dateTimeFormat": "",
                            "alignment": "LEFT",
                            "autolink": [

                            ]
                        }
                    ],
                    "primaryFields": [

                    ],
                    "auxiliaryFields": [

                    ],
                    "secondaryFields": [
                        {
                            "label": "sLabel1",
                            "data": "sdata1",
                            "changeMessage": "",
                            "displayRelatively": false,
                            "ignoreTimezone": false,
                            "key": "skey1",
                            "dataType": "TEXT",
                            "numberFormat": "",
                            "currency": "",
                            "dateTimeFormat": "",
                            "alignment": "LEFT",
                            "autolink": [

                            ]
                        },
                        {
                            "label": "sLabel2",
                            "data": "sdata2",
                            "changeMessage": "",
                            "displayRelatively": false,
                            "ignoreTimezone": false,
                            "key": "skey2",
                            "dataType": "TEXT",
                            "numberFormat": "",
                            "currency": "",
                            "dateTimeFormat": "",
                            "alignment": "LEFT",
                            "autolink": [

                            ]
                        }
                    ],
                    "barcodeDetails": {
                        "message": "Boarding Message Automation2",
                        "alternateText": "Alternative Text message",
                        "barcodeType": "PDF417",
                        "embeddedMessageType": "HARDCODED_MESSAGE",
                        "alternativeTextType": "HARDCODED_MESSAGE",
                        "embeddedFormat": "UTF_8"
                    },
                    "transitType": "AIR"
                },
                "backLayout": {
                    "fields": [
                        {
                            "label": "Contact-Us",
                            "data": "website: www.voltmx.com",
                            "changeMessage": "",
                            "displayRelatively": false,
                            "ignoreTimezone": false,
                            "key": "bkey1",
                            "dataType": "TEXT",
                            "numberFormat": "",
                            "currency": "",
                            "dateTimeFormat": "",
                            "alignment": "",
                            "autolink": [

                            ]
                        },
                        {
                            "label": "Mobile Number",
                            "data": "9.20E+11",
                            "changeMessage": "",
                            "displayRelatively": false,
                            "ignoreTimezone": false,
                            "key": "bkey2",
                            "dataType": "TEXT",
                            "numberFormat": "",
                            "currency": "",
                            "dateTimeFormat": "",
                            "alignment": "",
                            "autolink": [

                            ]
                        }
                    ],
                    "enableAutoUpdates": false
                },
                "passRelevance": {
                    "relevantDate": "",
                    "ignoreTimezone": false,
                    "relevantLocations": [

                    ],
                    "relevantBeacons": [

                    ],
                    "maxDistance": 10.0
                },
                "passRules": {
                    "stopAfter": "",
                    "expiryDate": "",
                    "voided": false,
                    "dateRestriction": "PERMANENTLY_AVAILABLE"
                },
                "languageDetails": {
                    "originalFields": [

                    ],
                    "languageEntries": [

                    ],
                    "passLanguage": "EN"
                }
            }
        }
    ],
    "campaignChannelPriorities": [
        {
            "messageChannel": "PUSH"
        },
        {
            "messageChannel": "Email"
        },
        {
            "messageChannel": "SMS"
        }
    ],
    "status": "Running"

}
```

## Response Status

| Code       | Description                                                     |
| ---------- | --------------------------------------------------------------- |
| Status 200 | Array of campaigns info                                         |
| Status 400 | Invalid campaign ID provided or no campaign found with given ID |
| Status 401 | Unauthorized request                                            |
| Status 500 | Server failure to process request                               |
