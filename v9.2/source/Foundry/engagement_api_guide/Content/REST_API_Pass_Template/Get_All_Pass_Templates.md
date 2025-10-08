
# Get All Pass Templates by Pagination

The **Get All Pass Templates by Pagination** API accepts start and pageSize as input parameters and returns all the pass template details. The pageSize represents the maximum number of the pass templates for which the details are to be returned. If the start is specified, the number of the pass templates that are returned are from start position to pageSize value. For example: if the start is zero and pageSize is five, then six pass templates from position zero to five are returned.

## URL

The HTTP URL for Get All Pass Templates by Pagination API is:

```
http://<<host>>:<<port>>/api/v1/templates/passbook?start=0&pageSize=10
```

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter | Level – Two           | Level – Three                | Level - Four   | Description                                                                                      |
| ---------------- | --------------------- | ---------------------------- | -------------- | ------------------------------------------------------------------------------------------------ |
| total            |                       |                              |                | Total number of pass templates                                                                   |
| passtemplates    |                       |                              |                | An array of passtemplates objects                                                                |
|                  | id                    |                              |                | Unique pass ID assigned to a pass template                                                       |
|                  | name                  |                              |                | The unique name assigned to a pass template                                                      |
|                  | passIntegrationConfig |                              |                | An array of passIntegrationConfig objects                                                        |
|                  |                       | passIssueNotificationDetails |                | An array of passIssueNotificationDetails objects                                                 |
|                  |                       |                              | channel        | Channel type as push , SMS or email                                                              |
|                  |                       |                              | enabled        | If channel type is enabled or not                                                                |
|                  |                       |                              | messageContent | Message description                                                                              |
|                  |                       |                              | subject        | Subject of the pass template. The subject convey the essence of the pass template                |
|                  |                       |                              | senderName     | Name of the sender                                                                               |
|                  |                       |                              | senderEmail    | Email ID of the sender                                                                           |
|                  | createdBy             |                              |                | A user name that shows who created the pass template                                             |
|                  | createdDate           |                              |                | Date on which the pass template is created                                                       |
|                  | lastModifiedBy        |                              |                | User name showing who last modified the pass template                                            |
|                  | lastModifiedDate      |                              |                | Date the pass template was last modified                                                         |
|                  | passContent           |                              |                | An array of passContent objects                                                                  |
|                  |                       | basicDetails                 |                | An array of basicDetails objects. For more details, [see](Pass_Template.md#passtemplates)      |
|                  |                       | appearance                   |                | An array of appearance objects. For more details, [see](Pass_Template.md#appearance)           |
|                  |                       | frontLayout                  |                | An array of frontLayout objects. For more details, [see](Pass_Template.md#frontLayout)         |
|                  |                       | backLayout                   |                | An array of backLayout objects. For more details, [see](Pass_Template.md#backLayout)           |
|                  |                       | passRelevance                |                | An array of passRelevance objects. For more details, [see](Pass_Template.md#passRelevance)     |
|                  |                       | passRules                    |                | An array of passRules objects. For more details, [see](Pass_Template.md#passRules)             |
|                  |                       | languageDetails              |                | An array of languageDetails objects. For more details, [see](Pass_Template.md#languageDetails) |

## Sample Response

```
{
"total" : 1,
"passtemplates" : [ {
"id" : 1,
"name" : "eBay membership pass",
"passIntegrationConfig" : {
"passIssueNotificationDetails" : [ {
"channel" : "SMS",
"enabled" : true,
"messageContent" : "##First Name####Last Name##",
"subject" : "",
"senderName" : "",
"senderEmail" : ""
} ]
},
"createdBy" : "admin",
"createdDate" : "06/30/2016 05:19:58 AM GMT",
"lastModifiedBy" : "admin",
"lastModifiedDate" : "08/29/2016 01:00:15 PM GMT",
"passContent" : {
"basicDetails" : {
"passTypeIdentifier" : "pass.com.vms.passbook2",
"passSerialNumber" : "",
"groupIdentifier" : "",
"appLaunchURL" : "",
"ituneIdentifiers" : "",
"webServiceUrl" : "",
"timezone" : "(GMT-05:00) Eastern Time (US & Canada)",
"passType" : "GENERIC",
"organizationName" : "eBay",
"description" : "eBay membership pass",
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
"url" : "https://upload.wikimedia.org/wikipedia/commons/4/48/EBay_logo.png",
"blob" : false,
"size" : 9633,
"extension" : "png",
"imageType" : "ICON",
"imageId" : ""
} ]
},
"frontLayout" : {
"logoText" : "eBay",
"headerFields" : [ {
"label" : "SummerSale ",
"data" : "2016",
"changeMessage" : "",
"displayRelatively" : false,
"ignoreTimezone" : false,
"key" : "Membership Card",
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
"fields" : [ ],
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
"stopAfter" : "",
"expiryDate" : "",
"voided" : false,
"dateRestriction" : "PERMANENTLY_AVAILABLE"
},
"languageDetails" : {
"originalFields" : [ "eBay passes for shopping" ],
"languageEntries" : [ {
"data" : [ {
"localText" : "eBay geht zum Einkaufen"
} ],
"images" : [ ],
"language" : "DE"
} ],
"passLanguage" : "EN"
}
}
} ]
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Array of pass templates           |
| Status 400 | Bad request                       |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
