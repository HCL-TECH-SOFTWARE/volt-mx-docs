                           


Modify Campaign
===============

The **Modify Campaign** API modifies the details of a campaign and updates the supported platform details based on a requirement.

URL
---

The HTTP URL for **Modify Campaign** API is:

```
http://<host>:<port>/api/v1/campaigns/<id>/modify
```

> **_Note:_** If you want to update as well as restart a completed or terminated campaign, append the **restart** query parameter to the URL as follows:

`http://<host>:<port>/api/v1/campaigns/<id>/modify?restart=true`

This service implements Gateway Filter for Authentication/Basic Authentication to authenticate access of the service by a user.

Method
------

POST

Header
------

The payload's request header includes Content-Type for JSON as application/json;charset=UTF-8.

Input Parameters
----------------

The following fields are input parameters:

  
| Input Parameter | Level – Two | Level – Three | Required | Type | Description |
| --- | --- | --- | --- | --- | --- |
| name |   |   | Yes | string | Name of the campaign |
| campaignType |   |   | Optional | string | Type of the campaign |
| zone |   |   | Optional | string | Selected time zone for the campaign |
| startDateStr |   |   | Yes | string | Date and time on which the campaign starts |
| endDateStr |   |   | Yes | string | Date and time on which the campaign ends |
| campaignSegments |   |   |   |   | An array of campaign segments |
|   | segment ID |   | Yes | string | Unique ID assigned to the campaign |
|   | name |   | Yes | string | Segment name |
| campaignMessages |   |   |   |   | An array of campaign message parameters, for more details, [see](Campaign.md#campaignmessages) |
|   |   | platformSpecificProps |   |   | Properties pertaining to specific platforms: iOS, Windows, BlackBerry Android, and Web, for more details, [see](Campaign.md#platformspecificprops-input-output-parameters) |
| campaignMails |   |   |   |   | An array of campaign mail parameters, for more details, [see](Campaign.md#campaignmails) |
| campaignSms |   |   |   |   | An array of campaign SMS parameters, for more details, [see](Campaign.md#campaignsms) |
| campaignVoiceSms |   |   |   |   | An array of campaign Voice SMS parameters, for more details, [see](Campaign.md#campaignvoicesms) |
| campaignPasses |   |   |   |   | An array of campaign passes parameters, for more details, [see](Campaign.md#campaignpasses) |
| campaignChannelPriorities |   |   |   |   | An array of campaign channel priorities. |
| Status |   |   |   | string | Current status of the campaign such as running |

 

Sample Request
--------------

```
{

  "name" : " Do Online Shopping at Snapdeal",
  "campaignType" : "",
  "zone" : "(GMT+04:30) Kabul",
  "startDateStr" : "05/24/2016 04:38:51 PM",
  "endDateStr" : "07/31/2016 12:00:00 AM",
  "campaignSegments" : [ {
    "segment" : {
      "id" : 51,
      "name" : "Seg 1464041356880"
    }
  } ],
  "campaignMessages" : [ {
    "name" : "Deals of the Day",
    "message" : "##First Name####Last Name##",
    "richContent" : "<h3 class=\"r\" style=\"font-size: 18px; margin: 0px; padding: 0px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: rgb(34, 34, 34); font-family: arial, sans-serif;\"><a href=\"http://www.snapdeal.com/\" style=\"color: rgb(102, 0, 153); cursor: pointer; text-decoration: none;\">Online Shopping in India at Snapdeal - Buy Books, Mobiles, Laptops ...</a></h3>\n",
    "application" : {
      "appId" : "1464111957848",
      "applicationName" : "App  1464041244280"
    },
    "subscribers" : 0,
    "pushesSent" : 0,
    "pushesOpened" : 0
  } ],
  "campaignMails" : [ {
    "subject" : "Mobiles &amp; Tablets",
    "contentType" : "text.html",
    "senderEmail" : "aron.hale@voltmx.com",
    "senderName" : "admin",
    "content" : "##First Name####Last Name##",
    "mailsSent" : 1,
    "mailsOpened" : 0
  } ],
  "campaignSms" : [ {
    "name" : "Buy mobiles online",
    "smsMessage" : "##Mobile Number##",
    "smsSent" : 1,
    "smsOpened" : 0
  } ],
  "campaignVoiceSms" : [ {
    "name" : "Buy mobiles online",
    "smsMessage" : "Voice SMS Message",
    "smsSent" : 0,
    "smsOpened" : 0
  } ],
  "campaignPasses" : [ {
    "passName" : "Coupon_661",
    "passType" : "COUPON",
    "passOpened" : 0,
    "passSent" : 1,
    "passIntegrationConfig" : {
      "passIssueNotificationDetails" : [ {
        "channel" : "EMAIL",
        "enabled" : true,
        "messageContent" : "Pass Issue content Email <a href='##Email Pass Link##'>click here</a>",
        "subject" : "Pass Issue Email",
        "senderName" : "",
        "senderEmail" : ""
      } ]
    },
    "passContent" : {
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
        "logoText" : "LzqH",
        "headerFields" : [ {
          "label" : "GATE",
          "data" : "ImRH",
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
          "data" : "jaDm",
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
          "data" : "kmuf",
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
          "message" : "fJoY",
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
          "data" : "VfMJ",
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
    }
  } ],
  "campaignChannelPriorities" : [ ],
  "status" : "Running"
}
```

Modify Campaign with Rich Push
------------------------------

```
{
    "name": "RichPushCampaign_Test",
    "campaignType": "",
    "zone": "GMT-05:00",
    "startDateStr": "05/30/2016 12:18:16 PM",
    "endDateStr":   "09/05/2016 12:18:16 PM",
    "campaignSegments": [
        {
            "segment": {
                "id": 1
            }
        }
    ],
    "campaignMessages": [
        {
            "name": "Rich message",
            "message": "Rich Push from campaign",
            "richContent": "sample rich content associated with campaigns",
            "application": {
                "appId": "11898-2802150175"
            }
        }
    ]
}
```

Sample Response
---------------

```
{  
   "message" : "Details updated successfully",  
   "id" : "campaignId"  
}  

```

Response Status
---------------

| Code | Description |
| --- | --- |
| Status 200 | Details updated successfully |
| Status 400 | Invalid campaign ID provided or no campaign found with given IDInvalid segment ID provided or segment is not publishedInvalid app ID provided or app is not publishedCampaign name is requiredCampaign start date is requiredCampaign end date is requiredEmail message should not contain name value pairsInvalid email message content provided. Email content cannot be nullInvalid campaign type providedCampaign start date must be of format MM/dd/yyyy hh:mm:ss aaCampaign end date must be of format MM/dd/yyyy hh:mm:ss aaCampaign end date cannot be less than start date |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |
