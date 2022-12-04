                           


Get All Campaigns by Pagination
===============================

The **Get All Campaigns by Pagination** API returns the total number of the entries. This service accepts start and pageSize as input parameters and returns all campaign details.The pageSize represents the maximum number of the campaigns for which the details are to be returned. If the start parameter is specified, the number of the campaigns that are returned are from start position to pageSize value.

Use Case
--------

When data needs to be rendered in multiple pages, a user can use **Get All Campaigns by Pagination** API. In a real scenario Facebook or Google use such APIs to get a comprehensive list of the all the running campaigns.

URL
---

The HTTP URL for Get All Campaigns by Pagination API is:

```
http://<host>:<port>/api/v1/campaigns?start=0&pageSize=10
```

This API implements Gateway Filter for Authentication/Basic Authentication to authenticate access of the API by a user.

Method
------

GET

Output Parameters
-----------------

The following fields are output parameters:

  
| Output Parameter | Level - Two | Level - Three | Type | Description |
| --- | --- | --- | --- | --- |
| total |   |   | long | Total number of campaigns |
| campaigns |   |   |   | An array of campaign object details |
|   | id |   | long | Unique ID assigned to the campaign |
|   | name |   | string | Campaign name |
|   | campaignType |   | string | Type of the campaign |
|   | zone |   | string | Greenwich Mean Time (time zone), Selected time zone for the campaign |
|   | startDateStr |   | string | Date and time on which the campaign starts |
|   | endDateStr |   | string | Date and time on which the campaign ends |
|   | terminatedDateStr |   | string | Date and time on which the campaign was terminated |
|   | pausedDateStr |   | string | Date and time on which the campaign was paused |
|   | lastModifiedBy |   | string | User name showing who last modified the campaign |
|   | lastModifiedDateStr |   | string | Date the campaign was last modified |
|   | createdBy |   | string | User name showing who created the campaign |
|   | createdDateStr |   | string | Date and time campaign is created |
|   | campaignSegments |   |   | An array of campaign segments parameters |
|   |   | id | string | The segment ID |
|   |   | name | string | The segment name |
|   | campaignMessages |   |   | An array of campaign messages parameters, for more details, [see](Campaign.md#campaignmessages) |
|   |   | platformSpecificProps |   | Properties pertaining to specific platforms: iOS, Windows, BlackBerry Android, and Web, for more details, [see](Campaign.md#platformspecificprops-input-output-parameters) |
|   | campaignMails |   |   | An array of campaign mail parameters, for more details, [see](Campaign.md#campaignmails) |
|   | campaignSms |   |   | An array of campaign SMS parameters, for more details, [see](Campaign.md#campaignsms) |
|   | campaignVoiceSms |   |   | An array of campaign Voice SMS parameters, for more details, [see](Campaign.md#campaignvoicesms) |
|   | campaignPasses |   |   | An array of campaign passes parameters, for more details, [see](Campaign.md#campaignpasses) |
|   | campaignChannelPriorities |   | array | An array of campaign channel priorities. |
|   | Status |   | string | Current status of the campaign such as running |

Sample Response
---------------

```
{
	"total": 180,
	"campaigns": [{
		"id": 3,
		"name": "camp_dev_-589977426256209935",
		"campaignType": "",
		"zone": "(GMT+05:30) Chennai, Mumbai, New Delhi",
		"startDateStr": "05/15/2016 07:11:00 PM",
		"endDateStr": "05/16/2016 01:41:00 PM",
		"terminatedDateStr": "",
		"pausedDateStr": "",
		"lastModifiedBy": "admin",
		"lastModifiedDateStr": "05/15/2016 06:11:01 PM AFT",
		"createdBy": "admin",
		"createdDateStr": "05/15/2016 06:11:01 PM AFT",
		"campaignSegments": [{
			"segment": {
				"id": 3,
				"name": "seg_9204934527647938338"
			}
		}, {
			"segment": {
				"id": 4,
				"name": "seg_5904113333813405840"
			}
		}],
		"campaignMessages": [{
			"name": "campmsg3994",
			"message": "Hi, ##First Name##",
			"richContent": "",
			"application": {
				"appId": "app_1180000587829382429",
				"applicationName": "app_name_1180"
			},
			"subscribers": 0,
			"pushesSent": 0,
			"pushesOpened": 0,
			"platformSpecificProps": ""
		}],
		"campaignMails": [],
		"campaignSms": [],
		"campaignVoiceSms": [],
		"campaignPasses": [],
		"campaignChannelPriorities": [],
		"status": "Running"
	}, {
		"id": 4,
		"name": "camp_dev_-1179941211146423645",
		"campaignType": "camtype1180000587829382429",
		"zone": "(GMT+05:30) Chennai, Mumbai, New Delhi",
		"startDateStr": "05/15/2016 07:11:01 PM",
		"endDateStr": "05/16/2016 01:41:01 PM",
		"terminatedDateStr": "",
		"pausedDateStr": "",
		"lastModifiedBy": "admin",
		"lastModifiedDateStr": "05/15/2016 06:11:01 PM AFT",
		"createdBy": "admin",
		"createdDateStr": "05/15/2016 06:11:01 PM AFT",
		"campaignSegments": [{
			"segment": {
				"id": 4,
				"name": "seg_5904113333813405840"
			}
		}, {
			"segment": {
				"id": 3,
				"name": "seg_9204934527647938338"
			}
		}],
		"campaignMessages": [{
			"name": "campmsg3994",
			"message": "Hi, ##First Name##",
			"richContent": "",
			"application": {
				"appId": "app_1180000587829382429",
				"applicationName": "app_name_1180"
			},
			"subscribers": 0,
			"pushesSent": 0,
			"pushesOpened": 0,
			"platformSpecificProps": ""
		}],
		"campaignMails": [{
			"subject": "subject1",
			"contentType": .html",
			"senderEmail": "vms.admin@gmail.com",
			"senderName": "VMS Admin",
			"content": " < h1 > Sample Mail < /h1>Hello   
< br > Volt MX < br > ",
			"mailsSent": 0,
			"mailsOpened": 0
		}, {
			"subject": "subject2",
			"contentType": .html",
			"senderEmail": "vms.admin@gmail.com",
			"senderName": "VMS Admin",
			"content": " < h1 > Sample Mail < /h1>Hello   
,  < br > Volt MX < br > ",
			"mailsSent": 0,
			"mailsOpened": 0
		}],
		"campaignSms": [],
		"campaignVoiceSms": [],
		"campaignPasses": [],
		"campaignChannelPriorities": [],
		"status": "Running"
	}, {
		"id": 5,
		"name": "camp_dev_6844319163717401591",
		"campaignType": "camtype1180000587829382429",
		"zone": "(GMT+05:30) Chennai, Mumbai, New Delhi",
		"startDateStr": "05/15/2016 07:11:02 PM",
		"endDateStr": "05/16/2016 01:41:02 PM",
		"terminatedDateStr": "",
		"pausedDateStr": "",
		"lastModifiedBy": "admin",
		"lastModifiedDateStr": "05/15/2016 06:11:02 PM AFT",
		"createdBy": "admin",
		"createdDateStr": "05/15/2016 06:11:02 PM AFT",
		"campaignSegments": [{
			"segment": {
				"id": 3,
				"name": "seg_9204934527647938338"
			}
		}, {
			"segment": {
				"id": 4,
				"name": "seg_5904113333813405840"
			}
		}],
		"campaignMessages": [{
			"name": "campmsg3994",
			"message": "Hi, ##First Name##",
			"richContent": "",
			"application": {
				"appId": "app_1180000587829382",
				"applicationName": "app_name_1180"
			},
			"subscribers": 0,
			"pushesSent": 0,
			"pushesOpened": 0,
			"platformSpecificProps": ""
		}],
		"campaignMails": [],
		"campaignSms": [],
		"campaignVoiceSms": [],
		"campaignPasses": [],
		"campaignChannelPriorities": [],
		"status": "Running"
	}, {
		"id": 6,
		"name": "Rich Push Campaign_1_IAyGl",
		"campaignType": "",
		"zone": "(GMT-05:00) Bogota, Lima, Quito",
		"startDateStr": "05/16/2016 01:41:02 PM",
		"endDateStr": "05/17/2016 01:41:02 PM",
		"terminatedDateStr": "",
		"pausedDateStr": "",
		"lastModifiedBy": "admin",
		"lastModifiedDateStr": "05/15/2016 06:11:03 PM AFT",
		"createdBy": "admin",
		"createdDateStr": "05/15/2016 06:11:03 PM AFT",
		"campaignSegments": [{
			"segment": {
				"id": 3,
				"name": "seg_9204934527647938338"
			}
		}],
		"campaignMessages": [{
			"name": "Rich message1",
			"message": "Rich Push from campaign",
			"richContent": " rich content",

			"application": {
				"appId": "app_1180000587829382429",
				"applicationName": "app_name_1180"
			},
			"subscribers": 0,
			"pushesSent": 0,
			"pushesOpened": 0,
			"platformSpecificProps": ""
		}],
		"campaignMails": [],
		"campaignSms": [],
		"campaignVoiceSms": [],
		"campaignPasses": [],
		"campaignChannelPriorities": [],
		"status": "Pending"
	}, {
		"id": 7,
		"name": "camp_5186994510271804155",
		"campaignType": "camtype1180000587829382429",
		"zone": "(GMT+05:30) Chennai, Mumbai, New Delhi",
		"startDateStr": "05/15/2016 07:11:03 PM",
		"endDateStr": "05/16/2016 01:41:02 PM",
		"terminatedDateStr": "",
		"pausedDateStr": "",
		"lastModifiedBy": "admin",
		"lastModifiedDateStr": "05/15/2016 06:11:03 PM AFT",
		"createdBy": "admin",
		"createdDateStr": "05/15/2016 06:11:03 PM AFT",
		"campaignSegments": [{
			"segment": {
				"id": 4,
				"name": "seg_5904113333813405840"
			}
		}, {
			"segment": {
				"id": 3,
				"name": "seg_9204934527647938338"
			}
		}],
		"campaignMessages": [],
		"campaignMails": [],
		"campaignSms": [{
			"name": "campmsg3994",
			"smsMessage": "Hi, ##First Name##",
			"smsSent": 0,
			"smsOpened": 0
		}],
		"campaignVoiceSms": [{
			"name": "campmsg3995",
			"smsMessage": "Voice SMS Message",
			"smsSent": 0,
			"smsOpened": 0
		}],
		"campaignPasses": [],
		"campaignChannelPriorities": [],
		"status": "Running"
	}, {
		"id": 8,
		"name": "camp_dev_-589955403921860823",
		"campaignType": "camtype1180000587829382429",
		"zone": "(GMT+05:30) Chennai, Mumbai, New Delhi",
		"startDateStr": "05/15/2016 07:11:03 PM",
		"endDateStr": "05/16/2016 01:41:03 PM",
		"terminatedDateStr": "",
		"pausedDateStr": "",
		"lastModifiedBy": "admin",
		"lastModifiedDateStr": "05/15/2016 06:11:03 PM AFT",
		"createdBy": "admin",
		"createdDateStr": "05/15/2016 06:11:03 PM AFT",
		"campaignSegments": [{
			"segment": {
				"id": 4,
				"name": "seg_5904113333813405840"
			}
		}, {
			"segment": {
				"id": 3,
				"name": "seg_9204934527647938338"
			}
		}],
		"campaignMessages": [{
			"name": "campmsg3994",
			"message": "Hi, ##First Name##",
			"richContent": "",
			"application": {
				"appId": "app_1180000587829382429",
				"applicationName": "app_name_1180"
			},
			"subscribers": 0,
			"pushesSent": 0,
			"pushesOpened": 0,
			"platformSpecificProps": ""
		}],
		"campaignMails": [],
		"campaignSms": [],
		"campaignVoiceSms": [],
		"campaignPasses": [],
		"campaignChannelPriorities": [],
		"status": "Running"
	}, {
		"id": 9,
		"name": "API Test Same Repeat Push",
		"campaignType": "",
		"zone": "(GMT-05:00) Bogota, Lima, Quito",
		"startDateStr": "05/15/2016 01:41:03 PM",
		"endDateStr": "05/16/2016 01:41:03 PM",
		"terminatedDateStr": "",
		"pausedDateStr": "",
		"lastModifiedBy": "admin",
		"lastModifiedDateStr": "05/15/2016 06:11:04 PM AFT",
		"createdBy": "admin",
		"createdDateStr": "05/15/2016 06:11:03 PM AFT",
		"campaignSegments": [{
			"segment": {
				"id": 3,
				"name": "seg_9204934527647938338"
			}
		}],
		"campaignMessages": [{
			"name": "SameRepeatPush",
			"message": "SameRepeatPush",
			"richContent": "",
			"application": {
				"appId": "app_1180000587829382429",
				"applicationName": "app_name_1180"
			},
			"repeatMessage": {
				"name": "SameRepeatPush",
				"message": "SameRepeatPush",
				"richContent": "",
				"subscribers": 0,
				"pushesSent": 0,
				"pushesOpened": 0,
				"platformSpecificProps": "",
				"interval": 20,
				"intervalUnit": "Weeks"
			},
			"subscribers": 0,
			"pushesSent": 0,
			"pushesOpened": 0,
			"platformSpecificProps": ""
		}],
		"campaignMails": [],
		"campaignSms": [],
		"campaignVoiceSms": [],
		"campaignPasses": [],
		"campaignChannelPriorities": [],
		"status": "Running"
	}, {
		"id": 10,
		"name": "API Test Different Repeat All",
		"campaignType": "",
		"zone": "(GMT-05:00) Bogota, Lima, Quito",
		"startDateStr": "05/15/2016 01:41:03 PM",
		"endDateStr": "05/16/2016 01:41:03 PM",
		"terminatedDateStr": "",
		"pausedDateStr": "",
		"lastModifiedBy": "admin",
		"lastModifiedDateStr": "05/15/2016 06:11:04 PM AFT",
		"createdBy": "admin",
		"createdDateStr": "05/15/2016 06:11:04 PM AFT",
		"campaignSegments": [{
			"segment": {
				"id": 3,
				"name": "seg_9204934527647938338"
			}
		}],
		"campaignMessages": [{
			"name": "DifferentRepeatAllPush",
			"message": "DifferentRepeatAllPush",
			"richContent": "",
			"application": {
				"appId": "app_1180000587829382429",
				"applicationName": "app_name_1180"
			},
			"repeatMessage": {
				"name": "DiffRepeatAllPushRepeat",
				"message": "DiffRepeatAllPushRepeat",
				"richContent": "",
				"subscribers": 0,
				"pushesSent": 0,
				"pushesOpened": 0,
				"platformSpecificProps": "",
				"interval": 12,
				"intervalUnit": "Weeks"
			},
			"subscribers": 0,
			"pushesSent": 0,
			"pushesOpened": 0,
			"platformSpecificProps": ""
		}],
		"campaignMails": [{
			"subject": "DiffRepeatAllEmail",
			"contentType": "text.html",
			"senderEmail": "DiffRepeatAll@gmail.com",
			"senderName": "Test",
			"content": "DiffRepeatAllEmail",
			"mailsSent": 0,
			"mailsOpened": 0,
			"repeatMessage": {
				"subject": "DiffRepeatAllEmailRepeat",
				"contentType": "text.html",
				"senderEmail": "DiffReAll@gmail.com",
				"senderName": "Test",
				"content":"DiffRepeatAllEmailRepeat",
				"mailsSent": 0,
				"mailsOpened": 0,
				"interval": 10,
				"intervalUnit": "Days"
			}
		}],
		"campaignSms": [{
			"name": "DifferentRepeatAllSms",
			"smsMessage": "DifferentRepeatAllSms",
			"smsSent": 0,
			"smsOpened": 0,
			"repeatMessage": {
				"name": "DiffRepeatAllSmsRepeat",
				"smsMessage": "DiffReAllSmsRepeat",
				"smsSent": 0,
				"smsOpened": 0,
				"interval": 15,
				"intervalUnit": "Hours"
			}
		}],
		"campaignVoiceSms": [{
			"name": "DifferentRepeatAllSms",
			"smsMessage": "DifferentRepeatAllSms",
			"smsSent": 0,
			"smsOpened": 0,
		}],
		"campaignPasses": [],
		"campaignChannelPriorities": [],
		"status": "Running"
	}, {
		"id": 11,
		"name": "API Test Same Repeat Multiple All",
		"campaignType": "",
		"zone": "(GMT-05:00) Bogota, Lima, Quito",
		"startDateStr": "05/15/2016 01:41:03 PM",
		"endDateStr": "05/16/2016 01:41:03 PM",
		"terminatedDateStr": "",
		"pausedDateStr": "",
		"lastModifiedBy": "admin",
		"lastModifiedDateStr": "05/15/2016 06:11:04 PM AFT",
		"createdBy": "admin",
		"createdDateStr": "05/15/2016 06:11:04 PM AFT",
		"campaignSegments": [{
			"segment": {
				"id": 3,
				"name": "seg_9204934527647938338"
			}
		}],
		"campaignMessages": [{
			"name": "SameRepeatAllPush1",
			"message": "SameRepeatAllPush1",
			"richContent": "",
			"application": {
				"appId": "app_1180000587829382429",
				"applicationName": "app_name_1180"
			},
			"repeatMessage": {
				"name": "SameRepeatAllPush1",
				"message": "SameRepeatAllPush1",
				"richContent": "",
				"subscribers": 0,
				"pushesSent": 0,
				"pushesOpened": 0,
				"platformSpecificProps": "",
				"interval": 12,
				"intervalUnit": "Hours"
			},
			"subscribers": 0,
			"pushesSent": 0,
			"pushesOpened": 0,
			"platformSpecificProps": ""
		}, {
			"name": "SameRepeatAllPush2",
			"message": "SameRepeatAllPush2",
			"richContent": "",
			"application": {
				"appId": "app_1180000587829382429",
				"applicationName": "app_name_1180"
			},
			"repeatMessage": {
				"name": "SameRepeatAllPush2",
				"message": "SameRepeatAllPush2",
				"richContent": "",
				"subscribers": 0,
				"pushesSent": 0,
				"pushesOpened": 0,
				"platformSpecificProps": "",
				"interval": 12,
				"intervalUnit": "Days"
			},
			"subscribers": 0,
			"pushesSent": 0,
			"pushesOpened": 0,
			"platformSpecificProps": ""
		}, {
			"name": "SameRepeatAllPush3",
			"message": "SameRepeatAllPush3",
			"richContent": "",
			"application": {
				"appId": "app_1180000587829382429",
				"applicationName": "app_name_1180"
			},
			"repeatMessage": {
				"name": "SameRepeatAllPush3",
				"message": "SameRepeatAllPush3",
				"richContent": "",
				"subscribers": 0,
				"pushesSent": 0,
				"pushesOpened": 0,
				"platformSpecificProps": "",
				"interval": 12,
				"intervalUnit": "Weeks"
			},
			"subscribers": 0,
			"pushesSent": 0,
			"pushesOpened": 0,
			"platformSpecificProps": ""
		}],
		"campaignMails": [{
			"subject": "SameRepeatAllEmail1",
			"contentType": "text.html",
			"senderEmail": "SameRepeatAll@gmail.com",
			"senderName": "Test",
			"content": "SameRepeatAllEmail1",
			"mailsSent": 0,
			"mailsOpened": 0,
			"repeatMessage": {
				"subject": "SameRepeatAllEmail1",
				"contentType": "text.html",
				"senderEmail": "SameReAll@gmail.com",
				"senderName": "Test",
				"content": "SameRepeatAllEmail1",
				"mailsSent": 0,
				"mailsOpened": 0,
				"interval": 10,
				"intervalUnit": "Days"
			}
		}, {
			"subject": "SameRepeatAllEmail2",
			"contentType": "text.html",
			"senderEmail": "SameRepeatAll@gmail.com",
			"senderName": "Test",
			"content": "SameRepeatAllEmail2",
			"mailsSent": 0,
			"mailsOpened": 0,
			"repeatMessage": {
				"subject": "SameRepeatAllEmail2",
				"contentType": "text.html",
				"senderEmail": "SameReAll@gmail.com",
				"senderName": "Test",
				"content": "SameRepeatAllEmail2",
				"mailsSent": 0,
				"mailsOpened": 0,
				"interval": 10,
				"intervalUnit": "Days"
			}
		}, {
			"subject": "SameRepeatAllEmail3",
			"contentType": "text.html",
			"senderEmail": "SameRepeatAll@gmail.com",
			"senderName": "Test",
			"content": "SameRepeatAllEmail3",
			"mailsSent": 0,
			"mailsOpened": 0,
			"repeatMessage": {
				"subject": "SameRepeatAllEmail3",
				"contentType": "text.html",
				"senderEmail": "SameReAll@gmail.com",
				"senderName": "Test",
				"content": "SameRepeatAllEmail3",
				"mailsSent": 0,
				"mailsOpened": 0,
				"interval": 10,
				"intervalUnit": "Days"
			}
		}],
		"campaignSms": [{
			"name": "SameRepeatAllSms1",
			"smsMessage": "SameRepeatAllSms1",
			"smsSent": 0,
			"smsOpened": 0,
			"repeatMessage": {
				"name": "SameRepeatAllSms1",
				"smsMessage": "SameRepeatAllSms1",
				"smsSent": 0,
				"smsOpened": 0,
				"interval": 15,
				"intervalUnit": "Hours"
			}
		}, {
			"name": "SameRepeatAllSms2",
			"smsMessage": "SameRepeatAllSms2",
			"smsSent": 0,
			"smsOpened": 0,
			"repeatMessage": {
				"name": "SameRepeatAllSms2",
				"smsMessage": "SameRepeatAllSms2",
				"smsSent": 0,
				"smsOpened": 0,
				"interval": 15,
				"intervalUnit": "Days"
			}
		}, {
			"name": "SameRepeatAllSms3",
			"smsMessage": "SameRepeatAllSms3",
			"smsSent": 0,
			"smsOpened": 0,
			"repeatMessage": {
				"name": "SameRepeatAllSms3",
				"smsMessage": "SameRepeatAllSms3",
				"smsSent": 0,
				"smsOpened": 0,
				"interval": 15,
				"intervalUnit": "Weeks"
			}
		}],
		"campaignPasses": [],
		"campaignChannelPriorities": [],
		"status": "Running"
	}, {
		"id": 12,
		"name": "API Test Different Repeat Multiple All",
		"campaignType": "",
		"zone": "(GMT-05:00) Bogota, Lima, Quito",
		"startDateStr": "05/15/2016 01:41:04 PM",
		"endDateStr": "05/16/2016 01:41:04 PM",
		"terminatedDateStr": "",
		"pausedDateStr": "",
		"lastModifiedBy": "admin",
		"lastModifiedDateStr": "05/15/2016 06:11:04 PM AFT",
		"createdBy": "admin",
		"createdDateStr": "05/15/2016 06:11:04 PM AFT",
		"campaignSegments": [{
			"segment": {
				"id": 3,
				"name": "seg_9204934527647938338"
			}
		}],
		"campaignMessages": [{
			"name": "DifferentRepeatAllPush1",
			"message": "DifferentRepeatAllPush1",
			"richContent": "",
			"application": {
				"appId": "app_1180000587829382429",
				"applicationName": "app_name_1180"
			},
			"repeatMessage": {
				"name": "DiffRepeatAllPushRepeat1",
				"message": "DiffRepeatAllPushRepeat1",
				"richContent": "",
				"subscribers": 0,
				"pushesSent": 0,
				"pushesOpened": 0,
				"platformSpecificProps": "",
				"interval": 12,
				"intervalUnit": "Hours"
			},
			"subscribers": 0,
			"pushesSent": 0,
			"pushesOpened": 0,
			"platformSpecificProps": ""
		}, {
			"name": "DifferentRepeatAllPush2",
			"message": "DifferentRepeatAllPush2",
			"richContent": "",
			"application": {
				"appId": "app_1180000587829382429",
				"applicationName": "app_name_1180"
			},
			"repeatMessage": {
				"name": "DifRepeatAllPushRepeat2",
				"message": "DifRepeatAllPushRepeat2",
				"richContent": "",
				"subscribers": 0,
				"pushesSent": 0,
				"pushesOpened": 0,
				"platformSpecificProps": "",
				"interval": 12,
				"intervalUnit": "Days"
			},
			"subscribers": 0,
			"pushesSent": 0,
			"pushesOpened": 0,
			"platformSpecificProps": ""
		}, {
			"name": "DifferentRepeatAllPush3",
			"message": "DifferentRepeatAllPush3",
			"richContent": "",
			"application": {
				"appId": "app_1180000587829382429",
				"applicationName": "app_name_1180"
			},
			"repeatMessage": {
				"name": "DiffRepeatAllPushRepeat3",
				"message": "DifRepeatAllPushRepeat3",
				"richContent": "",
				"subscribers": 0,
				"pushesSent": 0,
				"pushesOpened": 0,
				"platformSpecificProps": "",
				"interval": 12,
				"intervalUnit": "Weeks"
			},
			"subscribers": 0,
			"pushesSent": 0,
			"pushesOpened": 0,
			"platformSpecificProps": ""
		}],
		"campaignMails": [{
			"subject": "DifferentRepeatAllEmail1",
			"contentType": "text.html",
			"senderEmail": "DiffRepeatAll@gmail.com",
			"senderName": "Test",
			"content": "DifferentRepeatAllEmail1",
			"mailsSent": 0,
			"mailsOpened": 0,
			"repeatMessage": {
				"subject": "DifReAllEmailRepeat1",
				"contentType": "text.html",
				"senderEmail": "DifRepAll@gmail.com",
				"senderName": "Test",
				"content": "DiffRepAllEmailRepeat1",
				"mailsSent": 0,
				"mailsOpened": 0,
				"interval": 10,
				"intervalUnit": "Days"
			}
		}, {
			"subject": "DifferentRepeatAllEmail2",
			"contentType": "text.html",
			"senderEmail": "DiffRepeatAll@gmail.com",
			"senderName": "Test",
			"content": "DifferentRepeatAllEmail2",
			"mailsSent": 0,
			"mailsOpened": 0,
			"repeatMessage": {
				"subject": "DifferentRepeatAllEmailRepeat2",
				"contentType": "text.html",
				"senderEmail": "DiffReAll@gmail.com",
				"senderName": "Test",
				"content": "DifRepAllEmailRepeat2",
				"mailsSent": 0,
				"mailsOpened": 0,
				"interval": 10,
				"intervalUnit": "Days"
			}
		}, {
			"subject": "DifferentRepeatAllEmail3",
			"contentType": "text.html",
			"senderEmail": "DiffRepeatAll@gmail.com",
			"senderName": "Test",
			"content": "DifferentRepeatAllEmail3",
			"mailsSent": 0,
			"mailsOpened": 0,
			"repeatMessage": {
				"subject": "DiffReAllEmailRepeat3",
				"contentType": "text.html",
				"senderEmail": "DifReAll@gmail.com",
				"senderName": "Test",
				"content": "DiffReAllEmailRepeat3",
				"mailsSent": 0,
				"mailsOpened": 0,
				"interval": 10,
				"intervalUnit": "Days"
			}
		}],
		"campaignSms": [{
			"name": "DifferentRepeatAllSms1",
			"smsMessage": "DifferentRepeatAllSms1",
			"smsSent": 0,
			"smsOpened": 0,
			"repeatMessage": {
				"name": "DifRepeatAllSmsRepeat1",
				"smsMessage": "DiffReAllSmsRepeat1",
				"smsSent": 0,
				"smsOpened": 0,
				"interval": 15,
				"intervalUnit": "Hours"
			}
		}, {
			"name": "DifferentRepeatAllSms2",
			"smsMessage": "DifferentRepeatAllSms2",
			"smsSent": 0,
			"smsOpened": 0,
			"repeatMessage": {
				"name": "DiffReAllSmsRepeat2",
				"smsMessage": "DiffReAllSmsRepeat2",
				"smsSent": 0,
				"smsOpened": 0,
				"interval": 15,
				"intervalUnit": "Days"
			}
		}, {
			"name": "DifferentRepeatAllSms3",
			"smsMessage": "DifferentRepeatAllSms3",
			"smsSent": 0,
			"smsOpened": 0,
			"repeatMessage": {
				"name": "DiffRepeatAllSmsRepeat3",
				"smsMessage": "DiffReAllSmsRepeat3",
				"smsSent": 0,
				"smsOpened": 0,
				"interval": 15,
				"intervalUnit": "Weeks"
			}
		}],
		"campaignPasses": [],
		"campaignChannelPriorities": [],
		"status": "Running"
	}]
}
```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Array of campaigns info |
| Status 400 | Invalid request format |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |
