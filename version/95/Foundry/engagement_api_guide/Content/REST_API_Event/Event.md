                           


Event
=====

Event module enables you to add events and configure them. For each functionality available under Event module, following restful services are provided.

*   [Activate Event](Publish_Event.md)
*   [Create Event](Create_Event.md)
*   [Create Pass Event with Upload Images](Create_Event_with_upload_images.md)
*   [Deactivate Event](Unpublish_Event.md)
*   [Delete Event](Delete_Event.md)
*   [Event Message Request Payload with Audience Properties](Event__JSON_Messge_request_payload_with_audience_properties__Local_Audience_property_.md)
*   [Event Message Request Payload with Common Properties](Event_JSON_Messge_request_payload_with_audience_properties__Global_Audience_property_.md)
*   [Event Payload](Event_Payload.md)
*   [Event Push Message](Event_Push_Message.md)
*   [Export Events](Export_Events.md)
*   [Get All Event Details by Pagination](Get_All_Event_Details_By_pagination.md)
*   [Get Event Details by ID](Get_Details_-Events.md)
*   [Import Events](Import_Events.md)
*   [Modify Event](Modify_Event.md)
*   [Modify Pass Events with Upload Images](Modify_events_with_upload_images.md)

Common Output Parameters
------------------------

The following table lists standard output parameters that are common to all the Events APIs.

### platformSpecificProps Output Parameters

#### iOS

  
| Output Parameter | Level - Two | Level -Three | Type | Description |
| --- | --- | --- | --- | --- |
| platformSpecificProps |   |   |   | An array of platform specific properties |
|   | iPhone |   |   | An array of iPhone specific properties |
|   |   | badge |   | The number is used to display the badge of the application icon. If this property is absent, the badge is not changed. |
|   |   | sound |   | Name of the sound file. The sound in this file is played as an alert. |
|   |   | category | string | Key with a string value to define custom actions. |
|   |   | contentAvailable | int | Int value representing the content details |
|   |   | actionLocKey | string | The string is used as a key to get a localized string |
|   |   | locKey | string | The string is used as a key to get a localized string based on the user’s language preference |
|   |   | locArg | string | An array of locArg:Variable string values to appear in place of the format specifiers in loc-key. |

#### Windows

  
| Output Parameter | Level - Two | Type | Description |
| --- | --- | --- | --- |
| windows |   |   | An array of Windows platform specific properties |
|   | notificationType | string | Notification type as Toast, Tile, Raw or Badge |
|   | screenName | string | Screen name to display. |
|   | params | string | key and value pair to link with the screen name. The params help to navigate to the specific screen. |
|   | title | string | A title for the tile notification. |
|   | badge | string | The number displays the badge of the application icon. |
|   | imagePath | string | Path of the image file that is used as the background for the application icon. |

#### Android

  
| Output Parameter | Level - Two | Type | Description |
| --- | --- | --- | --- |
| android |   |   | An array of android platform properties |
|   | title | string | Platform title |
|   | sound | music format | The sound name parameter indicates a sound to play when the device receives the notification. Supports the default sound or a sound resource bundled in the app. |
|   | icon | image format | The icon parameter indicates the notification icon. |
|   | color | RGB value | The color parameter indicates color of the icon, expressed in #rrggbb format. |
|   | clickAction |   | The click action is associated with a user who clicks on the notification. |
|   | bodyLocKey |   | The body localization key parameter indicates a key to the body string (meant for localization). |
|   | priority |   | The selected priority, for example high |
|   | delayWhileIdle | boolean | boolean value |
|   | restrictedPackageName | string | Restricted package details |
|   | bodyLocArgs |   | An array of bodyLocArgs |
|   | titleLocKey |   | The title localization key indicates a key to the title string for localization. |
|   | titleLocArg |   | The title localization args are the comma seperated string values to replace the format specifiers in the title string for localization. |
|   | jpush |   | An array of JPush key-value pair |

#### Web

  
| Input  Parameter | Level - Two | Type | Description |
| --- | --- | --- | --- |
| webfcm |   |   | An array of web platform properties |
|   | icon | image format | The icon parameter indicates the notification icon. |
|   | clickAction |   | The click action is associated with a user who clicks on the notification. |

#### BlackBerry

  
| Output Parameter | Level - Two | Type | Description |
| --- | --- | --- | --- |
| blackberry |   |   | An array of blackberry platform properties |
|   | header |   | An array of header objects |

### Channel specific Output Parameters

#### passTemplateData

  
| Output Parameter | Level - Two | Level - Three | Required | Type | Description |
| --- | --- | --- | --- | --- | --- |
| eventPass |   |   |   |   | An array of event pass objects |
|   | passName |   | Yes | string | Name of the pass |
|   | passType |   | Optional | string | Type of the pass such as boarding or coupon |
|   | passIntegrationConfig |   |   |   | An array of passIssueNotificationDetails objects |
|   |   | passIssueNotificationDetails-channel (Yes)-enabled (Yes)-messageContent (Yes)-subject (Yes)-senderName (Optional)-senderEmail (Optional) |   |   | An array of passIssueNotificationDetails objects |
|   | passContent |   |   |   | An array of passContent objects |
|   |   | basicDetails-passTypeIdentifier(Yes)-passSerialNumber (Optional)-groupIdentifier (Optional)-appLaunchURL(Optional)-ituneIdentifiers : (int) (Optional)-webServiceUrl: (URL) (Optional) |  |   | An array of basicDetails objects: |
|   |   | basicDetails (continued)-timeZone: (string) (Yes)-passType: (string) (Optional)-organizationName: (string) (Yes)-description: (string) (Yes)-passSerialNumberType: (int) (Optional)-eventTicketType: (string) (Optional)-customJsonData: (An array) (Optiona) |   |   |   |
|   |   | appearance -bgColor: (alphanumeric) (Yes)-labelColor: (string) (Yes)-valueColor: (string) (Yes)-suppressStripShine: (boolean) (Optional)-images: (An array of image objects)  |   |   | An array of appearance objectsIn an Image array (url : Required, blob: Optional, size: Optional, extension: Optional, imageType: Required,imageid: Optional) |
|   |   | frontLayout:-logoText (string) (Yes)-headerFields: (An array of headerFields objects)-primaryFields: (An array of primaryFields objects)-auxiliaryFields: (An array of auxillaryFields objects)-secondaryFields: (An array of secondaryFields objects)-barcodeDetails: (An array of barcodeDetails objects)-transitType |   |   | An array of frontLayout objects |
|   |   | backLayout-fields: (An array of fields objects)-enableAutoUpdates: (boolean) (Optional) |   |   | An array of fields objects:In fields array ( Label (string) (Yes) Data (string) (Yes) changeMessage (string) (Optional) displayRelatively (string) (Optional) ignoreTimezone (string) (Optional) key (string)(Yes) datatype (string)(Yes) numberFormat (int) (Optional) currency (string) (Optional) dateTimeFormat (Optional) alignment (string) (Optional) autolink (array) (Optional) ) |
|   |   | passRelevance-relevantDate (date format) (Optional)-ignoreTimezone (date format) (Optional)-relevantLocations (string) (Optional)-relevantBeacons(string) (Optional)-maxDistance (int) (Optional) |   |   | An array of passRelevance objects |
|   |   | passRules: -stopAfter (string) (Optional)-expiryDate:(date format) (Optional)-voided (string) (Optional)-dateRestriction (date format) (Yes) |   |   | An array of passRules |
|   |   | languageDetails:-originalFields (array) (Optional)-languageEntries (array) (Optional)-passLanguage (string) (Optional) |   |   | An array of languageDetails objects |
|   |   | passIntegrationData:-passIssueNotificationDetails (An array of passIssueNotificationDetails objects)   |   |   | An array of passIntegrationData objects |

> **_Note:_** Passbook template JSON includes a number of internal arrays at Third Level. The third level column displays the parameter data type as REQUIRED or OPTIONAL while creating a sample request payload.For more information about passbook template datatypes, [see](../../../../Foundry/vms_console_user_guide/Content/PassBook_Template/Passbook_Template.md#dding_a_Passbook_Template)

#### eventMails

  
| Output Parameter | Level - Two | Required | Type | Description |
| --- | --- | --- | --- | --- |
| eventMails |   |   |   | An array of eventMails objects |
|   | mailName | Yes | string | Email name |
|   | mailSubject | Yes | string | Subject of the email that reflects its purpose |
|   | mailContent | Yes | string | Email content |
|   | contentType | Optional | string | Content type as text.html |
|   | senderMailId | Optional | email format | Sender's email ID |
|   | senderMailName | Optional | string | A user name that shows who sent the email |

#### eventSms

  
| Output Parameter (Level - One) | Level - Two | Required | Type | Description |
| --- | --- | --- | --- | --- |
| eventSms |   |   |   | An array of eventSms objects |
|   | smsName | Yes | string | Name of the SMS |
|   | smsContent | Yes | string | SMS content with personalization attributes |

#### eventVoiceSMS

  
| Output Parameter (Level - One) | Level - Two | Required | Type | Description |
| --- | --- | --- | --- | --- |
| eventVoiceSms |   |   |   | An array of eventVoiceSms objects |
|   | smsName | Yes | string | Name of the Voice SMS |
|   | smsContent | Yes | string | Voice SMS content with personalization attributes |

#### eventPushes

  
| Output Parameter | Level - Two | Required | Type | Description |
| --- | --- | --- | --- | --- |
| eventPushes |   |   |   | An array of eventPushes objects |
|   | message | Yes | string | Push message content |
|   | messageName | Yes | string | Name of the push message that reflects its purpose |
|   | richContent | Yes | string | An array of associated rich content properties |
|   | appId | Yes | int | ID of the subscribed app to the push message |
