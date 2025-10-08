                            


Get All Event Details by Pagination
===================================

The **Get All Event Details by Pagination** API returns the total number of the entries. This service accepts start and pageSize as input parameters and returns all event details. The pageSize represents the maximum number of the events for which the details are to be returned. If the start parameter is specified, the number of the events that are returned are from start position to pageSize value.

URL
---

The HTTP URL for **Get All Event Details by Pagination** API is:

```
http://<host>:<port>/api/v1/events?start=0&pageSize=10
```

This service implements Gateway Filter for Authentication/Basic Authentication to authenticate access of the service by a user.

Method
------

GET

Input Parameters
----------------

The following fields are input parameters:

  
| Input Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| start | Optional | long | Start index of the element |
| pageSize | Yes | long | Number of elements for a page. By default, pageSize is set to 20. Based on your requirement, you can set the pageSize. |

Output Parameters
-----------------

The following fields are output parameters:

  
| Output Parameter | Level -Two | Level Three | Type | Description |
| --- | --- | --- | --- | --- |
| total |   |   | long | Total number of events |
| events |   |   |   | An array of event messages such as push messages, pass messages, email messages, and SMS messages |
|   | id |   | long | Unique ID assigned to the event |
|   | name |   | string | Event name |
|   | description |   | string | Event description |
|   | owner |   | string | Name of th user who created the event |
|   | status |   | string | The current event status (published or unpublished) |
|   | stale |   | boolean | Whether the event is stale |
|   | lastModifiedDateStr |   | string | Date and time when event was last modified |
|   | lastModifiedBy |   | string | Name of the user who last modified the event |
|   | createdDateStr |   | string | Date and time when event was created |
|   | createdBy |   | string | Name of the user who created the event |
|   | eventType |   | string | Event type |
|   | eventPass |   |   | An array of eventPass objects. For more details, [see](Event.md#passtemplatedata) |
|   | eventPushes |   |   | An array of eventPushes objects including platform specific properties. For more details, [see](Event.md#eventpushes) |
|   |   | platformSpecificProps |   | An array of platformSpecificProps properties. For more details, [see](Event.md#platformspecificprops-output-parameters) |
|   | eventMails |   |   | An array of eventMails objects. For more details, [see](Event.md#eventmails) |
|   | eventSms |   |   | An array of eventSms objects. For more details, [see](Event.md#eventsms) |
|   | eventVoiceSms |   |   | An array of eventVoiceSms objects. For more details, [see](Event.md#eventvoicesms) |

Sample Response
---------------

```

            {
  "total" : 1,
  "events" : [ {
    "id" : 1,
    "name" : "eBay Online Shopping",
    "description" : "summer sale 2016",
    "owner" : "admin",
    "status" : "Unpublished",
    "stale" : false,
    "lastModifiedDateStr" : "06/15/2016 05:28:19 AM EDT",
    "lastModifiedBy" : "admin",
    "createdDateStr" : "06/15/2016 05:28:19 AM EDT",
    "createdBy" : "admin",
    "eventType" : "",
    "eventPass" : {
      "id" : 1,
      "passName" : "eBay Summer Sale coupons",
      "subscribers" : "",
      "passOpened" : "",
      "passSent" : "",
      "passContent" : {
        "basicDetails" : {
          "passTypeIdentifier" : "pass.com.vms.passbook2",
          "passSerialNumber" : "",
          "groupIdentifier" : "",
          "appLaunchURL" : "",
          "ituneIdentifiers" : "",
          "webServiceUrl" : "http://localhost:8181/vpns/",
          "timezone" : "(GMT-05:00) Eastern Time (US & Canada)",
          "passType" : "COUPON",
          "organizationName" : "eBay",
          "description" : "Online shopping",
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
            "url" : "",
            "blob" : true,
            "size" : 9905,
            "extension" : "png",
            "imageType" : "ICON",
            "imageId" : "4927291638535968159"
          } ]
        },
        "frontLayout" : {
          "logoText" : "eBay",
          "headerFields" : [ {
            "label" : "Computer",
            "data" : "Laptops",
            "changeMessage" : "",
            "displayRelatively" : false,
            "ignoreTimezone" : false,
            "key" : "Summer Sale 2016",
            "dataType" : "TEXT",
            "numberFormat" : "",
            "currency" : "",
            "dateTimeFormat" : "",
            "alignment" : "LEFT",
            "autolink" : [ ]
          } ],
          "primaryFields" : [ ],
          "auxiliaryFields" : [ ],
          "secondaryFields" : [ ],
          "barcodeDetails" : {
            "message" : "",
            "alternateText" : "",
            "barcodeType" : "PDF417",
            "embeddedMessageType" : "PASS_SERIAL_NO",
            "alternativeTextType" : "BARCODE_CONTENTS",
            "embeddedFormat" : "UTF_8"
          },
          "transitType" : ""
        },
        "backLayout" : {
          "fields" : [ {
            "label" : "Electronic Goods ",
            "data" : "Laptops and Gadgets",
            "changeMessage" : "",
            "displayRelatively" : false,
            "ignoreTimezone" : false,
            "key" : "Electronic",
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
          "maxDistance" : ""
        },
        "passRules" : {
          "stopAfter" : "06/30/2016 12:00:00 AM",
          "expiryDate" : "",
          "voided" : false,
          "dateRestriction" : "DONOT_ISSUE_AFTER"
        },
        "languageDetails" : {
          "originalFields" : [ ],
          "languageEntries" : [ ],
          "passLanguage" : "EN"
        }
      },
      "passIntegrationConfig" : {
        "passIssueNotificationDetails" : [ {
          "channel" : "SMS",
          "enabled" : true,
          "messageContent" : "Online shopping June 2016",
          "subject" : "",
          "senderName" : "",
          "senderEmail" : ""
        } ]
      }
    },
    "registrationId" : "4928500176715381493",
    "eventPushes" : [ {
      "messageName" : "summer sale",
      "message" : "##First Name####Last Name##",
      "richContent" : "",
      "platformSpecificProps" : {
        "title" : "June 216 sale",
        "iphone" : {
          "badge" : "",
          "sound" : "",
          "category" : "",
          "contentAvailable" : "",
          "actionLocKey" : "",
          "locKey" : "",
          "locArgs" : "",
          "launchImage" : "",
          "title" : "June 216 sale",
          "titleLocKey" : "",
          "titleLocArgs" : "",
          "customData" : {
            "key" : [ ]
          }
        },
        "blackberry" : {
          "header" : [ ]
        },
        "android" : {
          "title" : "June 216 sale",
          "sound" : "",
          "icon" : "",
          "color" : "",
          "clickAction" : "",
          "bodyLocKey" : "",
          "tag" : "",
          "collapseKey" : "",
          "priority" : "",
          "delayWhileIdle" : "",
          "restrictedPackageName" : "",
          "bodyLocArgs" : "",
          "titleLocKey" : "",
          "titleLocArgs" : "",
          "key" : [ ]
        },
        "jpush" : {
          "key" : [ {
            "name" : "title",
            "value" : "June 216 sale"
          } ]
        },
      "web" : {
          "title" : "June 216 sale",
          "icon" : "",
           "clickAction" : "",
           "key" : [{
            "name" : "title",
            "value" : "June 216 sale"
          } ]
        },
        "windows" : {
          "notificationType" : "TOAST",
          "text1" : "June 216 sale",
          "text2" : "##First Name####Last Name##",
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
          "text1" : "June 216 sale",
          "text2" : "##First Name####Last Name##",
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
      "appId" : "20096-6548262167",
      "subscribers" : 0,
      "pushesSent" : 0,
      "pushesOpened" : 0
    } ],
    "eventMails" : [ {
      "mailName" : "eBay Online Shopping",
      "mailSubject" : "summer sale 2016",
      "mailContent" : "##Email##",
      "contentType" : "text.html",
      "senderMailId" : "aron.hale@voltmx.com",
      "senderMailName" : "admin",
      "mailDesignsList" : [ ],
      "subscribers" : 0,
      "mailsOpened" : 0,
      "mailsSent" : 0
    } ],
    "eventSms" : [ {
      "smsName" : "Summer sale 2016",
      "smsContent" : "##Mobile Number##",
      "subscribers" : 0,
      "smsSent" : 0,
      "smsOpened" : 0
    } ],
	"eventVoiceSms" : [ {
	"smsName" : "Summer sale 2016",
	"smsContent" : "Voice SMS content",
	"smsSent" : 0,
	"smsOpened" : 0
	} ]
  } ]
}
```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Array of event details |
| Status 400 | Invalid request format |
| Status 401 | Unauthorized request |
| Status 500 | Server Failure to process request |
