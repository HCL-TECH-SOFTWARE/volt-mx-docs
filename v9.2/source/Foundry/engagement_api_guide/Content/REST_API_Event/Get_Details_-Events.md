
# Get Event Details by ID

The **Get Event Details by ID** API accepts the event ID as an input parameter and responds with an event details matching the event ID.

## URL

The HTTP URL for **Get Event Details by ID** API is:

```
http://<host>:<port>/api/v1/events/id
```

> **_Note:_** <id>: Here, id refers to an id that is used to map an event with internal data record.

This service implements Gateway Filter for Authentication/Basic Authentication to authenticate access of the service by a user.

## Method

GET

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type   | Description                                                                     |
| --------------- | -------- | ------ | ------------------------------------------------------------------------------- |
| id              | Yes      | string | Here, id refers to an id that is used to map an event with internal data record |

## Output Parameters

The following fields are output parameters:

| Output Parameter    | Level -Two            | Type    | Description                                                                                                               |
| ------------------- | --------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------- |
| id                  |                       | long    | Unique ID number assigned to an event                                                                                     |
| name                |                       | string  | Event name                                                                                                                |
| description         |                       | string  | Description conveying the essence of the message                                                                          |
| owner               |                       | string  | User name showing who created the file                                                                                    |
| status              |                       | string  | Event status as published or unpublished                                                                                  |
| stale               |                       | boolean | Whether the event is stale                                                                                                |
| lastModifiedDateStr |                       | string  | Date and time on which the event was last modified                                                                        |
| lastModifiedBy      |                       | string  | User name showing who last modified the event                                                                             |
| createdDateStr      |                       | string  | Date and time on which the event was created                                                                              |
| createdBy           |                       | string  | User name showing who created the event                                                                                   |
| eventType           |                       | string  | Event type                                                                                                                |
| eventPass           |                       |         | An array of eventPass objects. For more details, [see](Event.md#passtemplatedata)                                       |
| eventPushes         |                       |         | An array of eventPushes objects including platform specific properties. For more details, [see](Event.md#eventpushes)   |
|                     | platformSpecificProps | N/A     | An array of platformSpecificProps properties. For more details, [see](Event.md#platformspecificprops-output-parameters) |
| eventMails          |                       |         | An array of eventMails objects. For more details, [see](Event.md#eventmails)                                            |
| eventSms            |                       |         | An array of eventSms objects. For more details, [see](Event.md#eventsms)                                                |
| eventVoiceSms       |                       |         | An array of eventVoiceSms objects. For more details, [see](Event.md#eventvoicesms)                                      |

## Sample Response

```

{
"id" : 1,
"name" : "eBay Coupons and Offers 2016",
"description" : "Active eBay Coupons and Offers 2016",
"owner" : "admin",
"status" : "Unpublished",
"stale" : false,
"lastModifiedDateStr" : "05/25/2016 05:21:54 PM AFT",
"lastModifiedBy" : "admin",
"createdDateStr" : "05/25/2016 05:21:54 PM AFT",
"createdBy" : "admin",
"eventType" : "eventType1627965127573184164",
"eventPass" : {
"id" : 1,
"passName" : "Coupon_253",
"subscribers" : "",
"passOpened" : "",
"passSent" : "",
"passTemplateData" : {
"basicDetails" : {
"passTypeIdentifier" : "pass.com.vms.passbook3",
"passSerialNumber" : "",
"groupIdentifier" : "",
"appLaunchURL" : "",
"ituneIdentifiers" : "",
"webServiceUrl" : "http://10.10.1.185:8080/vpns/",
"timezone" : "(GMT) Casablanca",
"passType" : "COUPON",
"organizationName" : "VoltMX Labs",
"description" : "Test Template From Service",
"passSerialNumberType" : "AUTO_GEN",
"eventTicketType" : "",
"customJsonData" : { }
},
"appearance" : {
"bgColor" : "#64798c",
"labelColor" : "#ccdae9",
"valueColor" : "#ffffff",
"suppressStripShine" : false,
"images" : [ {
"url" : "http://localhost:8080/vpns/images/AppIcon.png",
"blob" : false,
"size" : 7445,
"extension" : "png",
"imageType" : "LOGO",
"imageId" : ""
}, {
"url" : "http://localhost:8080/vpns/images/AppIcon.png",
"blob" : false,
"size" : 7445,
"extension" : "png",
"imageType" : "ICON",
"imageId" : ""
} ]
},
"frontLayout" : {
"logoText" : "Ucuo",
"headerFields" : [ {
"label" : "GATE",
"data" : "QDyc",
"changeMessage" : "",
"displayRelatively" : false,
"ignoreTimezone" : false,
"key" : "gate",
"dataType" : "TEXT",
"numberFormat" : "",
"currency" : "",
"dateTimeFormat" : "",
"alignment" : "",
"autolink" : [ ]
} ],
"primaryFields" : [ {
"label" : "SAN FRANCISCO",
"data" : "XgSi",
"changeMessage" : "",
"displayRelatively" : false,
"ignoreTimezone" : false,
"key" : "depart",
"dataType" : "TEXT",
"numberFormat" : "",
"currency" : "",
"dateTimeFormat" : "",
"alignment" : "",
"autolink" : [ ]
} ],
"auxiliaryFields" : [ ],
"secondaryFields" : [ {
"label" : "PASSENGER",
"data" : "WziV",
"changeMessage" : "",
"displayRelatively" : false,
"ignoreTimezone" : false,
"key" : "passenger",
"dataType" : "TEXT",
"numberFormat" : "",
"currency" : "",
"dateTimeFormat" : "",
"alignment" : "",
"autolink" : [ ]
} ],
"barcodeDetails" : {
"message" : "LXjv",
"alternateText" : "",
"barcodeType" : "PDF417",
"embeddedMessageType" : "HARDCODED_MESSAGE",
"alternativeTextType" : "DONOT_DISPLAY",
"embeddedFormat" : "UTF_8"
},
"transitType" : ""
},
"backLayout" : {
"fields" : [ {
"label" : "PASSPORT",
"data" : "Cwaq",
"changeMessage" : "",
"displayRelatively" : false,
"ignoreTimezone" : false,
"key" : "passport",
"dataType" : "TEXT",
"numberFormat" : "",
"currency" : "",
"dateTimeFormat" : "",
"alignment" : "",
"autolink" : [ ]
} ],
"enableAutoUpdates" : false
},
"passRelevance" : {
"relevantDate" : "",
"ignoreTimezone" : false,
"relevantLocations" : [ ],
"relevantBeacons" : [ ],
"maxDistance" : 10.0
},
"passRules" : {
"stopAfter" : "",
"expiryDate" : "09/29/2018 06:00:00 AM",
"voided" : false,
"dateRestriction" : "PERMANENTLY_AVAILABLE"
},
"languageDetails" : {
"originalFields" : [ ],
"languageEntries" : [ ],
"passLanguage" : "EN"
}
},
"passIntegrationData" : {
"passIssueNotificationDetails" : [ {
"channel" : "EMAIL",
"enabled" : true,
"messageContent" : "Pass Issue content Email
<a href='##Email Pass Link##'>click here</a>",
"subject" : "Pass Issue Email",
"senderName" : "",
"senderEmail" : ""
} ]
}
},
"registrationId" : "7474626598958218990",
"eventPushes" : [ {
"messageName" : "Active eBay Coupons and Offers 2016",
"message" : "##Email##",
"richContent" : "

<p>
    <strong>Coupons and Offers 2016</strong>
</p>\n",
    "platformSpecificProps" : {
      "title" : "Coupons and Offers 2016",
      "iphone" : {
        "badge" : "",
        "sound" : "",
        "category" : "",
        "contentAvailable" : "",
        "actionLocKey" : "",
        "locKey" : "",
        "locArgs" : "",
        "launchImage" : "",
        "title" : "Coupons and Offers 2016",
        "titleLocKey" : "",
        "titleLocArgs" : "",
        "customData" : {
          "key" : [ ]
        }
      },
      "android" : {
        "title" : "",
        "sound" : "",
        "icon" : "",
        "color" : "",
        "clickAction" : "",
        "bodyLocKey" : "",
        "tagx" : "",
        "priority" : "",
        "delayWhileIdle" : "",
        "timeToLive" : "",
        "restrictedPackageName" : "",
        "bodyLocArgs" : "",
        "titleLocKey" : "",
        "titleLocArgs" : "",
        "key" : [ ]
      },
      "jpush" : {
        "key" : [ {
          "name" : "title",
          "value" : "Coupons and Offers 2016"
        } ]
      },
      "web" : {
        "title" : "",
        "icon" : "",
        "clickAction" : "",
        "key" : [{
          "name" : "title",
          "value" : "Coupons and Offers 2016"
        } ]
      },
      "windows" : {
        "notificationType" : "TOAST",
        "text1" : "Coupons and Offers 2016",
        "text2" : "##Email##",
        "screenName" : "",
        "params" : {
          "key" : [ ]
        },
        "title" : "",
        "badge" : "",
        "imagePath" : ""
      },
      "wns" : {
        "notificationType" : "TOAST",
        "text1" : "Coupons and Offers 2016",
        "text2" : "##Email##",
        "screenName" : "",
        "params" : {
          "key" : [ ]
        },
        "template" : "",
        "version" : "",
        "fallback" : "",
        "badge" : "",
        "image" : "",
        "text" : "",
        "value" : ""
      }
    },
    "appId" : "1464111957848",
    "subscribers" : 27,
    "pushesSent" : 0,
    "pushesOpened" : 0
  } ],
  "eventMails" : [ {
    "mailName" : "Find the best coupons and offers",
    "mailSubject" : "Best coupons to offer",
    "mailContent" : "##Email##",
    "contentType" : "text.html",
    "senderMailId" : "aron.hale@voltmx.com",
    "senderMailName" : "admin",
    "mailDesignsList" : [ ],
    "subscribers" : 974,
    "mailsOpened" : 0,
    "mailsSent" : 0
  } ],
  "eventSms" : [ {
    "smsName" : "Active eBay Coupons",
    "smsContent" : "##First Name####Last Name##",
    "subscribers" : 974,
    "smsSent" : 0,
    "smsOpened" : 0
  } ],
	"eventVoiceSms" : [ {
	"smsName" : "Voice SMS Name",
	"smsContent" : "Voice SMS Content",
	"smsSent" : 0,
	"smsOpened" : 0
	} ]

}
```

## Response Status

| Code       | Description                                               |
| ---------- | --------------------------------------------------------- |
| Status 200 | Array of event details                                    |
| Status 400 | Invalid event ID provided or no event found with given ID |
| Status 401 | Unauthorized request                                      |
| Status 500 | Server failure to process request                         |
