                          


JSON Files for Import and Export
================================

When you import or export events or templates, the files you import or export are zip files that contain condensed JSON files. This section describes the JSON files.

> **_Note:_** For more information of [importing](../../../Foundry/vms_console_user_guide/Content/Events/Importing_event.md) and [exporting](../../../Foundry/vms_console_user_guide/Content/Events/Exporting_events.md) Events, refer to the [Engagement User Guide](../../../Foundry/vms_console_user_guide/Content/Events/Events.md).

> **_Important:_** These descriptions are provided for information only. Developers should not create or edit these files.

JSON Files for Importing and Exporting Events
---------------------------------------------

When you import or export events, the following files are compressed in the zip file:

#### EventNames

The **EventNames.json** file contains the names of the events that are being imported or exported. Each name must be unique.

The file also contains the channels that are enabled in the event. The list of channels applies to all the names in the list. If one of the channels applies to any of the events, the channel is listed as enabled. For example, f there are two events in the file and the SMS channel applies to both, **hasSMS** is true. If the SMS channel applies to only one event, **hasSMS** is true. The value will be false only if the channel does not apply to all events in the file. In the example below, all channels are enabled for both events, even though the event "eventPush5895" does not use the Pass channel.

**Example EventNames.json**

```
{
   "events" : [ "EventAllChannels749", "eventPush5895" ],
   "hasApplication" : true,
   "hasEmail" : true,
   "hasSMS" : true,
   "hasPass" : true
}
```

#### Dependencies

The Dependencies.json file contains the dependencies for the channels. For example, as shown in the file below, the event "EventAllChannels749" has "push" enabled, so it requires an appId. Similarly, "pass" is enabled so the passTypeIdentifier is required. These values were created when the template was created.

**Example Dependencies.json**

```

{
   "dependencies" : [ {
      "name" : "EventAllChannels749",
      "push" : {
         "appId" : "AppForAll1"
      },
      "pass" : {
         "passTypeIdentifier" : "pass.com.vms.passbook1"
      }
   }, {
      "name" : "eventPush5895",
      "eventType" : "EventForAll14",
      "push" : {
         "appId" : "AppForAll1"
      }
   } ]
}
```

#### Events

The **Events.json** file contains all the information about the event, including event name, description, information for the channels, and any platform-specific information.

> **_Note:_** Events can contain templates. In this case, the template data is included in the **Events.json** file.

**Example Events.json file**

```

{
   "events" : [ {
      "name" : "EventAllChannels749",
      "description" : "To create an event with All channels",
      "eventSms" : [ {
         "smsName" : "EventAllSMSTest",
         "smsContent" : "Dear ##First Name## Your Salary of Rs. ##version## is credited in to your account."
      } ],
      "eventVoiceSms" : [ {
         "smsName" : "EventAllSMSTest",
         "smsContent" : "Voice SMS Content"
      } ],
      "eventMails" : [ {
         "mailName" : "EventAllEmailTest",
         "mailSubject" : "EventAllSubject",
         "mailContent" : "Dear ##Last Name## Your Mail ID ##Email## is registered to the ##Application##",
         "contentType" : "text.html",
         "senderMailId" : "vmstest@gmail.com",
         "senderMailName" : "VMS Event Mail Sender"
      } ],
      "eventPushes" : [ {
         "messageName" : "EventAllPushTest",
         "message" : "Dear user ##Email## your app is Upgraded to version ##bank balance##  .",
         "richContent" : "<h1>Hello</h1>",
         "appId" : "AppForAll1",
         "platformSpecificProps" : {
            "iphone" : {
               "badge" : 1,
               "sound" : "sound.mp4",
               "actionLocKey" : "actionkey",
               "locKey" : "lockey",
               "locArgs" : {
                  "locArg" : [ "locArg" ]
               },
               "launchImage" : "launchImage",
               "title" : "title",
               "titleLocKey" : "titleLocKey",
               "titleLocArgs" : {
                  "titleLocArg" : [ "titleLocArg" ]
               },
               "customData" : {
                  "key" : [ {
                     "content" : "value",
                     "name" : "cust"
                  } ]
               }
            },
            
            "android" : {
               "sound" : "d.wav",
               "icon" : "flipkart",
               "color" : "#ffeegg",
               "clickAction" : "clickActKey",
               "bodyLocKey" : "bodyLocKey",
               "priority" : "HIGH",
               "delayWhileIdle" : "TRUE",
               "bodyLocArgs" : {
                  "bodyLocArg" : [ "bodyLocArgs1", "bodyLocArgs2" ]
               },
               "titleLocKey" : "titleLocKey",
               "titleLocArgs" : {
                  "titleLocArg" : [ "titleLocArgs" ]
               },
               "key" : [ {
                  "name" : "gcmKey1",
                  "value" : "gcmValue1"
               }, {
                  "name" : "gcmKey2",
                  "value" : "gcmValue2"
               } ]
            },
            "jpush" : {
               "key" : [ {
                  "name" : "title",
                  "value" : "Message Title Comes"
               }, {
                  "name" : "jPushKey1",
                  "value" : "jPushValue1"
               }, {
                  "name" : "jPushKey2",
                  "value" : "jPushValue2"
               } ]
            },
            "web" : {
               "icon" : "flipkart",
               "clickAction" : "clickActKey",
               "key" : [ {
                  "name" : "fcmKey1",
                  "value" : "fcmValue1"
               } ]
            },
            "windows" : {
               "notificationType" : "TILE",
               "title" : "New Message",
               "badge" : 3,
               "imagePath" : "http://background.images.com/background"
            },
            "wns" : {
               "notificationType" : "TOAST",
               "text1" : "Message Title Comes",
               "text2" : "Body here for all messages",
               "screenName" : "screen1.xaml",
               "params" : {
                  "key" : [ {
                     "name" : "wnsKey1",
                     "value" : "wnsValue1"
                  }, {
                     "name" : "wnsKey2",
                     "value" : "wnsValue2"
                  } ]
               }
            }
         }
      } ],
      "eventPass" : {
         "passName" : "BoardingPassAuto11",
         "passType" : "BOARDING",
         "passContent" : {
            "basicDetails" : {
               "passTypeIdentifier" : "pass.com.vms.passbook1",
               "ituneIdentifiers" : "823580694",
               "webServiceUrl" : "http://mbaastest19.hcl.net:7001/vpns/",
               "timezone" : "IST",
               "passType" : "BOARDING",
               "organizationName" : "VoltMX Automation",
               "description" : "Creating Boarding Pass Template Through API",
               "passSerialNumberType" : "AUTO_GEN"
            },
            "appearance" : {
               "bgColor" : "#FFF17F",
               "labelColor" : "#7E7100",
               "valueColor" : "#181500",
               "suppressStripShine" : false,
               "images" : [ {
                  "url" : "http://icons.iconarchive.com/icons/martz90/circle-addon2/256/plane-flight-icon.png",
                  "blob" : false,
                  "size" : 20376,
                  "extension" : "png",
                  "imageType" : "ICON"
               }, {
                  "url" : "http://icons.iconarchive.com/icons/martz90/circle-addon2/256/plane-flight-icon.png",
                  "blob" : false,
                  "size" : 20376,
                  "extension" : "png",
                  "imageType" : "LOGO"
               } ]
            },
            "frontLayout" : {
               "logoText" : "Brd-Auto-1",
               "headerFields" : [ {
                  "label" : "header1",
                  "data" : "GATE",
                  "displayRelatively" : false,
                  "ignoreTimezone" : false,
                  "key" : "header1",
                  "dataType" : "TEXT",
                  "alignment" : "CENTER"
               }, {
                  "label" : "Head2",
                  "data" : "2header",
                  "displayRelatively" : false,
                  "ignoreTimezone" : false,
                  "key" : "header2",
                  "dataType" : "TEXT",
                  "alignment" : "LEFT"
               } ],
               "secondaryFields" : [ {
                  "label" : "sLabel1",
                  "data" : "sdata1",
                  "displayRelatively" : false,
                  "ignoreTimezone" : false,
                  "key" : "skey1",
                  "dataType" : "TEXT",
                  "alignment" : "LEFT"
               }, {
                  "label" : "sLabel2",
                  "data" : "sdata2",
                  "displayRelatively" : false,
                  "ignoreTimezone" : false,
                  "key" : "skey2",
                  "dataType" : "TEXT",
                  "alignment" : "LEFT"
               } ],
               "barcodeDetails" : {
                  "message" : "Boarding Message Automation2",
                  "alternateText" : "Alternative Text message",
                  "barcodeType" : "PDF417",
                  "embeddedMessageType" : "HARDCODED_MESSAGE",
                  "alternativeTextType" : "HARDCODED_MESSAGE",
                  "embeddedFormat" : "UTF_8"
               },
               "transitType" : "AIR"
            },
            "backLayout" : {
               "fields" : [ {
                  "label" : "Contact-Us",
                  "data" : "website: www.voltmx.com",
                  "displayRelatively" : false,
                  "ignoreTimezone" : false,
                  "key" : "bkey1",
                  "dataType" : "TEXT"
               }, {
                  "label" : "Mobile Number",
                  "data" : "9.20E+11",
                  "displayRelatively" : false,
                  "ignoreTimezone" : false,
                  "key" : "bkey2",
                  "dataType" : "TEXT"
               } ],
               "enableAutoUpdates" : false
            },
            "passRelevance" : {
               "ignoreTimezone" : false,
               "maxDistance" : 10.0
            },
            "passRules" : {
               "voided" : false,
               "dateRestriction" : "PERMANENTLY_AVAILABLE"
            },
            "languageDetails" : {
               "passLanguage" : "EN"
            }
         },
         "passIntegrationConfig" : {
            "passIssueNotificationDetails" : [ {
               "channel" : "EMAIL",
               "enabled" : true,
               "messageContent" : "Pass Issue content Email  < a >href = '##Email Pass Link##' > click here < /a>",
               "subject" : "Sending Boarding Pass Automation - Test case-01"
            } ]
         }
      }
   }, {
      "name" : "eventPush5895",
      "description" : "Creating an event for sending messages",
      "eventType" : "EventForAll14",
      "eventSms" : [ {
         "smsName" : "qGPAPit",
         "smsContent" : "Sending Push Message through Event with one Valid KSID and the KSID is ##KSID##"
      } ],
      "eventVoiceSms" : [ {
         "smsName" : "rSGDYns",
         "smsContent" : "Voice SMS Message"
      } ],
      "eventMails" : [ {
         "mailName" : "lparGrU",
         "mailSubject" : "Mail subject from event mail",
         "mailContent" : "Sending Push Message through Event with one Valid KSID and the KSID is ##KSID##",
         "contentType" : "text.html",
         "senderMailId" : "vmstest@gmail.com",
         "senderMailName" : "VMS Event Mail Sender"
      } ],
      "eventPushes" : [ {
         "messageName" : "UEFgXaF",
         "message" : "$message",
         "richContent" : "%lt;h1%gt;Hello%lt;/h1%gt;",
         "appId" : "AppForAll1",
         "platformSpecificProps" : {
            "iphone" : {
               "badge" : 1,
               "sound" : "sound.mp4",
               "actionLocKey" : "actionkey",
               "locKey" : "lockey",
               "locArgs" : {
                  "locArg" : [ "locArg" ]
               },
               "launchImage" : "launchImage",
               "title" : "title",
               "titleLocKey" : "titleLocKey",
               "titleLocArgs" : {
                  "titleLocArg" : [ "titleLocArg" ]
               },
               "customData" : {
                  "key" : [ {
                     "content" : "value",
                     "name" : "cust"
                  } ]
               }
            },
            
            "android" : {
               "sound" : "d.wav",
               "icon" : "flipkart",
               "color" : "#ffeegg",
               "clickAction" : "clickActKey",
               "bodyLocKey" : "bodyLocKey",
               "priority" : "HIGH",
               "delayWhileIdle" : "TRUE",
               "bodyLocArgs" : {
                  "bodyLocArg" : [ "bodyLocArgs1", "bodyLocArgs2" ]
               },
               "titleLocKey" : "titleLocKey",
               "titleLocArgs" : {
                  "titleLocArg" : [ "titleLocArgs" ]
               },
               "key" : [ {
                  "name" : "gcmKey1",
                  "value" : "gcmValue1"
               }, {
                  "name" : "gcmKey2",
                  "value" : "gcmValue2"
               } ]
            },
            "jpush" : {
               "key" : [ {
                  "name" : "title",
                  "value" : "Message Title Comes"
               }, {
                  "name" : "jPushKey1",
                  "value" : "jPushValue1"
               }, {
                  "name" : "jPushKey2",
                  "value" : "jPushValue2"
               } ]
            },
            "web" : {
               "icon" : "flipkart",
               "clickAction" : "clickActKey",
               "bodyLocArgs" : {
                  "bodyLocArg" : [ "bodyLocArgs1", "bodyLocArgs2" ]
               },
               "titleLocKey" : "titleLocKey",
               "titleLocArgs" : {
                  "titleLocArg" : [ "titleLocArgs" ]
               },
               "key" : [ {
                  "name" : "fcmKey1",
                  "value" : "fcmValue1"
               } ]
            },
            "windows" : {
               "notificationType" : "TILE",
               "title" : "New Message",
               "badge" : 3,
               "imagePath" : "http://background.images.com/background"
            },
            "wns" : {
               "notificationType" : "TOAST",
               "text1" : "Message Title Comes",
               "text2" : "Body here for all messages",
               "screenName" : "screen1.xaml",
               "params" : {
                  "key" : [ {
                     "name" : "wnsKey1",
                     "value" : "wnsValue1"
                  }, {
                     "name" : "wnsKey2",
                     "value" : "wnsValue2"
                  } ]
               }
            }
         }
      } ]
   } ]
}
		
```

JSON Files for Importing and Exporting Templates
------------------------------------------------

When you import or export email templates, pass templates, push templates, and SMS templates the following files are compressed in the zip file:

#### TemplateNames

The **TemplateNames.json** file contains the names of the templates that are being imported or exported. Each name must be unique.

**Example TemplateNames.json file for Pass templates**

```
{
   "pass" : [ "BoardingPassAuto189", "EventPassAuto753" ]
}
```

#### Dependencies

The **Dependencies.json** file contains the dependencies for the templates. Only pass templates have a Dependencies.json file. The email, push, and SMS templates do not have dependencies.

**Example Dependencies.json**

```

{
   "dependencies" : [ {
      "name" : "BoardingPassAuto189",
      "passTypeIdentifier" : "pass.com.vms.passbook1"
   }, {
      "name" : "EventPassAuto753",
      "passTypeIdentifier" : "pass.com.vms.passbook1",
      "beacons" : [ {
         "id" : 156,
         "name" : "PassBeacon9105"
      } ],
      "locations" : [ {
         "id" : 193,
         "name" : "PassLocation6758"
      } ]
   } ]
}
```

#### <Template>

The <Template>.json file contains all the information for the template. This name of this file is the template type, either Email.json, Pass.json, Push.json, or SMS.json. The following example shows the information for a pass template.

**Example Pass.json file**

```

{
   "pass" : [ {
      "name" : "BoardingPassAuto189",
      "passContent" : {
         "basicDetails" : {
            "passTypeIdentifier" : "pass.com.vms.passbook1",
            "ituneIdentifiers" : "823580694",
            "timezone" : "IST",
            "passType" : "BOARDING",
            "organizationName" : "VoltMX Automation",
            "description" : "Creating Boarding Pass Template Through API",
            "passSerialNumberType" : "AUTO_GEN"
          },
          "appearance" : {
            "bgColor" : "#FFF17F",
            "labelColor" : "#7E7100",
            "valueColor" : "#181500",
            "suppressStripShine" : false,
            "images" : [ {
               "url" : "http://icons.iconarchive.com/icons/martz90/circle-addon2/256/plane-flight-icon.png",
               "blob" : false,
               "size" : 20376,
               "extension" : "png",
               "imageType" : "ICON"
            }, {
               "url" : "http://icons.iconarchive.com/icons/martz90/circle-addon2/256/plane-flight-icon.png",
               "blob" : false,
               "size" : 20376,
               "extension" : "png",
               "imageType" : "LOGO"
            } ]
         },
         "frontLayout" : {
            "logoText" : "Brd-Auto-1",
            "headerFields" : [ {
               "label" : "header1",
               "data" : "GATE",
               "displayRelatively" : false,
               "ignoreTimezone" : false,
               "key" : "header1",
               "dataType" : "TEXT",
               "alignment" : "CENTER"
			}, {
               "label" : "Head2",
               "data" : "2header",
               "displayRelatively" : false,
               "ignoreTimezone" : false,
               "key" : "header2",
               "dataType" : "TEXT",
               "alignment" : "LEFT"
            } ],
               "secondaryFields" : [ {
               "label" : "sLabel1",
               "data" : "sdata1",
               "displayRelatively" : false,
               "ignoreTimezone" : false,
               "key" : "skey1",
               "dataType" : "TEXT",
               "alignment" : "LEFT"
            }, {
               "label" : "sLabel2",
               "data" : "sdata2",
               "displayRelatively" : false,
               "ignoreTimezone" : false,
               "key" : "skey2",
               "dataType" : "TEXT",
               "alignment" : "LEFT"
            } ],
            "barcodeDetails" : {
               "message" : "Boarding Message Automation2",
               "alternateText" : "Alternative Text message",
               "barcodeType" : "PDF417",
               "embeddedMessageType" : "HARDCODED_MESSAGE",
               "alternativeTextType" : "HARDCODED_MESSAGE",
               "embeddedFormat" : "UTF_8"
            },
            "transitType" : "AIR"
         },
         "backLayout" : {
            "fields" : [ {
               "label" : "Contact-Us",
               "data" : "website: www.voltmx.com"
               "displayRelatively" : false,
               "ignoreTimezone" : false,
               "key" : "bkey1",
               "dataType" : "TEXT",
               "alignment" : "LEFT"
            }, {
               "label" : "Mobile Number",
               "data" : "9.20E+11",
               "displayRelatively" : false,
               "ignoreTimezone" : false,
               "key" : "bkey2",
               "dataType" : "TEXT",
               "alignment" : "LEFT"
            } ],
            "enableAutoUpdates" : false
         },
         "passRelevance" : {
            "ignoreTimezone" : false,
            "maxDistance" : 10.0
         },
         "passRules" : {
            "voided" : false,
            "dateRestriction" : "PERMANENTLY_AVAILABLE"
         },
         "languageDetails" : {
            "passLanguage" : "EN"
         }
      },
      "passIntegrationConfig" : {
         "passIssueNotificationDetails" : [ {
            "channel" : "EMAIL",
            "enabled" : true,
            "messageContent" : "Pass Issue content Email <a href='##Email Pass Link##'>click here</a>",
            "subject" : "Sending Boarding Pass Automation - Test case-01",
            "senderName" : "User"
         } ]
      }
   }, {
      "name" : "EventPassAuto753",
      "passContent" : {
         "basicDetails" : {
            "passTypeIdentifier" : "pass.com.vms.passbook1",
            "ituneIdentifiers" : "823580694",
            "timezone" : "IST",
            "passType" : "EVENTTICKET",
            "organizationName" : "VoltMX Automation",
            "description" : "Creating Event Pass Template ThroughAPI",
            "passSerialNumberType" : "AUTO_GEN",
            "eventTicketType" : "STRIP"
         },
         "appearance" : {
            "bgColor" : "#989581",
            "labelColor" : "#2A2922",
            "valueColor" : "#443945",
            "suppressStripShine" : false,
            "images" : [ {
               "url" : "http://icons.iconarchive.com/icons/hamzasaleem/stock-style-3/256/App-store-icon.png",
               "blob" : false,
               "size" : 22334,
               "extension" : "png",
               "imageType" : "ICON"
            }, {
               "url" : "http://icons.iconarchive.com/icons/hamzasaleem/stock-style-3/256/App-store-icon.png",
               "blob" : false,
               "size" : 22334,
               "extension" : "png",
               "imageType" : "STRIP"
            }, {
               "url" : "http://icons.iconarchive.com/icons/vargas21/aquave-metal/256/Sample-icon.png",
               "blob" : false,
               "size" : 51306,
               "extension" : "png",
               "imageType" : "LOGO"
            } ]
         },
         "frontLayout" : {
            "logoText" : "Event Strip",
            "headerFields" : [ {
               "label" : "Place",
               "data" : "Hyd",
               "displayRelatively" : false,
               "ignoreTimezone" : false,
               "key" : "head1",
               "dataType" : "TEXT",
               "alignment" : "LEFT"
            }, {
               "label" : "On",
               "data" : "10/12/2015",
               "displayRelatively" : false,
               "ignoreTimezone" : false,
               "key" : "header2",
               "dataType" : "DATE",
               "dateTimeFormat" : "SHORT",
               "alignment" : "RIGHT"
            } ],
            "primaryFields" : [ {
               "data" : "Classical",
               "displayRelatively" : false,
               "ignoreTimezone" : false,
               "key" : "pkey1",
               "dataType" : "TEXT",
               "alignment" : "LEFT"
            } ],
            "auxiliaryFields" : [ {
               "label" : "aLabel1",
               "data" : "aData2",
               "displayRelatively" : false,
               "ignoreTimezone" : false,
               "key" : "akey1",
               "dataType" : "TEXT",
               "alignment" : "LEFT"
            }, {
               "label" : "aLabel2",
               "data" : "aData2",
               "displayRelatively" : false,
               "ignoreTimezone" : false,
               "key" : "akey2",
               "dataType" : "TEXT",
               "alignment" : "LEFT"
            } ],
            "secondaryFields" : [ {
               "label" : "sLabel1",
               "data" : "sdata1",
               "displayRelatively" : false,
               "ignoreTimezone" : false,
               "key" : "skey1",
               "dataType" : "TEXT",
               "alignment" : "LEFT"
            }, {
               "label" : "sLabel2",
               "data" : "sdata2",
               "displayRelatively" : false,
               "ignoreTimezone" : false,
               "key" : "skey2",
               "dataType" : "TEXT",
               "alignment" : "LEFT"
            } ],
            "barcodeDetails" : {
               "message" : "Event Message Automation2",
               "alternateText" : "Alternative Text message",
               "barcodeType" : "PDF417",
               "embeddedMessageType" : "HARDCODED_MESSAGE",
               "alternativeTextType" : "HARDCODED_MESSAGE",
               "embeddedFormat" : "UTF_8"
            }
         },
         "backLayout" : {
            "fields" : [ {
               "label" : "Contact-Us",
               "data" : "website: www.voltmx.com",
               "displayRelatively" : false,
               "ignoreTimezone" : false,
               "key" : "bkey1",
               "dataType" : "TEXT",
               "alignment" : "LEFT"
            }, {
               "label" : "Mobile Number",
               "data" : "9199923322",
               "displayRelatively" : false,
               "ignoreTimezone" : false,
               "key" : "bkey2",
               "dataType" : "TEXT",
               "alignment" : "LEFT"
            } ],
            "enableAutoUpdates" : false
         },
         "passRelevance" : {
            "ignoreTimezone" : false,
            "relevantLocations" : [ {
               "id" : 193,
               "relevantText" : "Location sample text3235"
            } ],
            "relevantBeacons" : [ {
               "id" : 156,
               "relevantText" : "Beacon sample text5053"
            } ]
         },
         "passRules" : {
            "voided" : false,
            "dateRestriction" : "PERMANENTLY_AVAILABLE"
         },
         "languageDetails" : {
            "passLanguage" : "EN"
         }
      },
      "passIntegrationConfig" : {
         "passIssueNotificationDetails" : [ {
            "channel" : "EMAIL",
            "enabled" : true,
            "messageContent" : "Event Pass Issue content Email <a href='##Email Pass Link##>'click here</a>",
            "subject" : "Sending Event Pass Automation - Test case-01",
            "senderName" : "User"
         } ]
      }
   } ]
}
			
```
