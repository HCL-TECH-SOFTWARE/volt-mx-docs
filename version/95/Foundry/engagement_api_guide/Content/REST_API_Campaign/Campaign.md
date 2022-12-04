                           


Campaign
========

Campaign module enables you to perform various tasks related with a Campaign, such as adding a Campaign or modifying a Campaign. For each functionality available under Campaign module, following restful services are provided

Campaign APIs are as follows:

*   [Get All Campaigns by Pagination](Get_All_Campaigns_by_Pagination.md)
*   [Get Campaign Details by ID](Get_Details.md)
*   [Create Campaign](Create_campaign.md)
*   [Modify Campaign](Modify_campaign.md)
*   [Delete Campaign](Delete_campaign.md)
*   [Start Campaign](Start_Campaign.md)
*   [Terminate Campaign](Terminate_Campaign_-_MBaaS.md)
*   [Validate Campaign Criteria](Validate_Campaign_Criteria_-_MBaaS.md)
*   [Create Campaign with Upload Images](Create_campaign_with_upload_images.md)
*   [Modify Campaign with Upload Images](Modify_Campaign_with_Upload_Images.md)
*   [Pause Campaign](Campaign_Pause_Service.md)
*   [Resume Campaign](Campaign_Resume_Service.md)

Common Input/Output Parameters
------------------------------

The following tables lists standard output parameters that are common to all the Campaign APIs.

### platformSpecificProps Input/Output Parameters

#### iOS

  
| Output Parameter | Level - Two | Level -Three | Type | Description |
| --- | --- | --- | --- | --- |
| platformSpecificProps |   |   |   | An array of platform specific properties |
|   | title |   | string | Message title for the repeat message |
|   | iPhone |   |   | An array of iPhone specific properties |
|   |   | badge |   | The number is used to display the badge of the application icon. If this property is absent, the badge is not changed. |
|   |   | sound |   | Name of the sound file. The sound in this file is played as an alert. |
|   |   | category | string | Key with a string value to define custom actions. |
|   |   | contentAvailable | int | Int value representing the content details |
|   |   | actionLocKey | string | The string is used as a key to get a localized string |
|   |   | locKey | string | The string is used as a key to get a localized string based on the user’s language preference |
|   |   | locArg | string | An array of locArg:Variable string values to appear in place of the format specifiers in loc-key. |
|   |   | launchImage |   | image path to locate the image |
|   |   | title | string | message title string |
|   |   | titleLocKey | string | The key to a title string in the Localizable.strings file for the current localization |
|   |   | titleLocArgs | string | Variable string values to appear in place of the format specifiers in titleloc- key. |
|   |   | customData | string | Name value pair for the custom data |

#### Windows

  
| Output Parameter | Level - Two | Type | Description |
| --- | --- | --- | --- |
| windows |   |   | An array of Windows platform specific properties |
|   | notificationType | string | Notification type as Toast, Tile, Raw or Badge |
|   | screenName | string | Screen name to display. |
|   | params | string | Key and value pair to link with the screen name. The params help to navigate to the specific screen. |
|   | title | string | A title for the tile notification. |
|   | badge | string | The number displays the badge of the application icon. |
|   | imagePath | string | Path of the image file that is used as the background for the application icon. |
|   | interval | int | define interval duration such as 1 day |
|   | intervalUnit | int | hours, days or weeks |

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

### Channel specific Input/Output Parameters

#### campaignPasses

  
| Level -One | Level - Two | Level - Three | Description |
| --- | --- | --- | --- |
| campaignPasses |   |   | An array of pass objects |
|   | passName |   | Name of the pass |
|   | passType |   | Type of the pass such as coupon or boarding |
|   | passOpened |   | Total number of passes opened |
|   | passSent |   | Total number of passes sent |
|   | passIntegrationConfig |   | An array of passIntegrationConfig parameters |
|   |   | passIssueNotificationDetails | An array of passIssueNotificationDetails parameters- channel:(string) email/SMS/push notification - enabled: (boolean) Boolean value - messageContent: (string) Message string- subject: (string)Subject for the pass that clearly defines its objective- senderName: (string) Sender's name- senderEmail: (string) Sender's email |
|   | passContent |   | An array of passContent parameters |
|   |   | basicDetails: | An array of basic details objects- passTypeIdentifier: (string)Pass type such as Boarding or Coupon- passSerialNumber: (int) No two passes with the same pass type identifier may have the same serial number \-groupIdentifier: (string) Applicable only for the Boarding pass and the event passes -appLaunchURL: (URL) Need to pass to the associated app when launching it - ituneIdentifiers: (int) iTunes Store item identifiers for the associated app |
|   |   |   | basicDetails (continued) - webServiceUrl: (URL) Web service URL - timeZone: (string) Based on location selected timezone -passType: (string) Selected pass type as boarding or coupon -organizationName: (string) Organization that issues the pass type -description: (string) Pass description -passSerialNumberType: (int) - Auto-generated or entered at pass creation - eventTicketType: (string) Event pass details - customJsonData: An array of customJsonData objects |
|   |   | appearance | An array of appearence objects- bgColor: (alphanumeric) Selected color value from the color palette -labelColor: (string) Selected color value from the color palette -valueColor: (string) Selected color value from the color palette -suppressStripShine: (boolean) To remove the shining effect from the uploaded image - images: (An array of image objects: url , blob, size, extension , imageType , imageID) |
|   |   | frontLayout | An array of frontLayout objects. For more details, [see](../../../../Foundry/vms_console_user_guide/Content/PassBook_Template/Passbook_Template.md#Entering_Front_Layout_d)\- logoText - headerFields: (An array of headerFields objects)- primaryFields: (An array of primaryFields objects)- auxiliaryFields: (An array of auxillaryFields objects)-secondaryFields: (An array of secondaryFields objects)- barcodeDetails: (An array of barcodeDetails objects)- transitType |
|   |   | backLayout: fields: | An array of backLayout objects. For more details, [see](../../../../Foundry/vms_console_user_guide/Content/PassBook_Template/Passbook_Template.md#Entering_Back_Layout_d) |
|   |   | passRelevance | An array of passRelevance objects. For more details, [see](../../../../Foundry/vms_console_user_guide/Content/PassBook_Template/Passbook_Template.md#Entering_Relevance_d) |
|   |   | passRules | An array of passRules objects. For more details, [see](../../../../Foundry/vms_console_user_guide/Content/PassBook_Template/Passbook_Template.md#Entering_Rules_d) |
|   |   | languageDetails | An array of languageDetails objects. For more details, [see](../../../../Foundry/vms_console_user_guide/Content/PassBook_Template/Passbook_Template.md#Entering_Languages_d) |
| campaignChannelPriorities |   |   | An array of campaignChannelPriorities |
| status |   |   | Current campaign status, such as Running |

#### campaignMails

  
| Level -One | Level - Two | Level - Three | Type | Description |
| --- | --- | --- | --- | --- |
| campaignMails |   |   |   | An array of campaign mails parameters |
|   | subject |   | string | Subject of the mail. The subject convey the essence of the email message. |
|   | contentType |   | string | Type of content as text.html |
|   | senderEmail |   | string | Email ID of the sender |
|   | senderName |   | string | Name of the sender |
|   | content |   | string | mail message content |
|   | mailsSent |   | int | Total number of mails sent |
|   | mailsOpened |   | int | Total number of mails opened |
|   | repeatMessage |   |   | An array of repeat message objects |
|   |   | subject | string | Subject of the mail |
|   |   | contentType | string | Type of content as text.html |
|   |   | senderEmail | string | Email ID of the sender |
|   |   | senderName | string | Name of the sender |
|   |   | content | string | Mail message content |
|   |   | mailsSent | int | Total number of mails sent |
|   |   | mailsOpened | int | Total number of mails opened |
|   |   | interval | int | Define interval duration such as 1 day |
|   |   | intervalUnit | int | Hours, days or weeks |

#### campaignMessages

  
| Level -One | Level - Two | Level - Three | Type | Description |
| --- | --- | --- | --- | --- |
| campaignMessages |   |   | array | An array of campaign message information |
|   | name |   | string | Campaign message name |
|   | message |   | string | The message to be sent as a push notification for the app |
|   | application |   | array | An array of application properties: appId applicationName |
|   | repeatMessage |   |   | An array of repeatMessage properties |
|   |   | name | string | Name of the repeat message |
|   |   | message | string | Repeat message string |
|   |   | richContent | string | Rich content string |
|   |   | subscribers | int | Total number of subscribers |
|   |   | pushesSent | int | Total number of the pushes sent |
|   |   | pushesOpened | int | Total number of the pushes opened |
|   | subscribers |   | int | Number of subscribers |
|   | pushesSent |   | int | Number of pushes sent |
|   | pushesOpened |   | int | Number of pushes opened |
|   | interval |   | int | define interval duration such as 1 day |
|   | intervalUnit |   | int | hours, days or weeks |

#### campaignSms

  
| Level -One | Level - Two | Level - Three | Type | Description |
| --- | --- | --- | --- | --- |
| campaignSms |   |   | array | An array of campaign SMS objects |
|   | smsMessage |   | string | SMS message content |
|   | smsSent |   | int | Total number of SMS sent |
|   | smsOpened |   | int | Total number of SMS opened |
|   | repeatMessage |   |   | An array of repeat SMS objects |
|   |   | name | string | subject of the SMS |
|   |   | smsMessage | string | Message description |
|   |   | smsSent | int | Total number of SMS sent |
|   |   | smsOpened | int | Total number of SMS opened |
|   |   | interval | int | Defined interval duration such as 1 day |
|   |   | intervalUnit | int | Hours, days or weeks |

#### campaignVoiceSms

  
| Level -One | Level - Two | Level - Three | Type | Description |
| --- | --- | --- | --- | --- |
| campaignVoiceSms |   |   | array | An array of campaign Voice SMS objects |
|   | Name |   | string | Subject of the Voice SMS message content |
|   | smsMessage |   | string | Voice SMS message content |
|   | smsSent |   | int | Total number of Voice SMS sent |
|   | smsOpened |   | int | Total number of Voice SMS opened |
|   | repeatMessage |   |   | An array of repeat SMS objects |
|   |   | name | string | subject of the SMS |
|   |   | smsMessage | string | Message description |
|   |   | smsSent | int | Total number of SMS sent |
|   |   | smsOpened | int | Total number of SMS opened |
|   |   | interval | int | Defined interval duration such as 1 day |
|   |   | intervalUnit | int | Hours, days or weeks |
