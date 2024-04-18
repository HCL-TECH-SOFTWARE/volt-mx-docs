                           


Push Message
============

The primary purpose of Push Message API is to set the recipients to receive push notifications. For each functionality, like updating push notification status or broadcasting, following restful services are provided.

*   [Get Push Messages Status by RequestID](Get_Message_Status_By_Request_Id.md)
*   [Push Message](Adhoc_Push.md)
*   [Update Push Open Status to Engagement Services](pdate_Push_Open_Status_to_VoltMX_Foundry_Messaging.md)
*   [Broadcasting](Broadcasting.md)
*   [Broadcast Push Message with Filters](Broadcast_Push_Message_with_Filters.md)
*   [Bulk Push](Bulk_Message_Upload.md)
*   [Get Rich Content](Get_Rich_Content.md)
*   [Send Rich Push](Send_Rich_Push.md)
*   [Fetch Message Content from Engagement Services](Fetch_Message_Content_from_VoltMX_Foundry_Messaging.md)
*   [Fetch All Messages from Engagement Services](Fetch_All_Messages_from_VoltMX_Foundry_Messaging.md)
*   [Fetch Push Status](Fetch_Push_Status.md)
*   [Fetch Push Sent Payload](Fetch_Push_Sent_Payload.md)
*   [Cancel Scheduled Messages from Volt MX Foundry Engagement Services – First Method](Cancel_Scheduled_Messages_from_VoltMX_Foundry_Engagement_Services___Second_Method.md)
*   [Cancel Scheduled Messages from Volt MX Foundry Engagement Services – Second Method](Cancel_Scheduled_Messages_from_VoltMX_Foundry_Messaging.md)

Common Input Parameter
----------------------

### platformSpecificProps Input Parameters

#### iOS

  
| Input Parameter | Level - Two | Level -Three | Type | Description |
| --- | --- | --- | --- | --- |
| platformSpecificProps |   |   |   | An array of platform specific properties |
|   | iPhone |   |   | An array of iPhone specific properties |
|   |   | badge |   | The number is used to display the badge of the application icon. If this property is absent, the badge is not changed. |
|   |   | sound |   | Name of the sound file. The sound in this file is played as an alert. |
|   |   | category | string | Key with a string value to define custom actions. |
|   |   | contentAvailable | int | Int value representing the content details |
|   |   | actionLocKey | string | The string is used as a key to get a localized string |
|   |   | locKey | string | The string is used as a key to get a localized string based on the user’s language preference |
|   |   | locArg | string | An array of locArg:Variable string values to appear in place of the format specifiers in loc-key |

#### Windows

  
| Input Parameter | Level - Two | Type | Description |
| --- | --- | --- | --- |
| windows |   |   | An array of Windows platform specific properties |
|   | notificationType | string | Notification type as Toast, Tile, Raw or Badge |
|   | screenName | string | Screen name to display. |
|   | params | string | key and value pair to link with the screen name. The params help to navigate to the specific screen. |
|   | title | string | A title for the tile notification. |
|   | badge | string | The number displays the badge of the application icon. |
|   | imagePath | string | Path of the image file that is used as the background for the application icon. |

#### Android

  
| Input  Parameter | Level - Two | Type | Description |
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

  
| Input Parameter | Level - Two | Type | Description |
| --- | --- | --- | --- |
| blackberry |   |   | An array of blackberry platform properties |
|   | header |   | An array of header objects |

### Message Objects

  
| Input Parameter | Level - Two | Required | Type | Description |
| --- | --- | --- | --- | --- |
| message |   | Yes |   | An array of message objects |
|   | expiryTimestamp | Optional | Unix timestamp | The time and date when the push message expires |
|   | overrideMessageId | Optional | number | If you wish to change the push message and yet the message is not sent, then you need to pass the old message ID in sample request to update the existing push message to be sent |
|   | startTimestamp | Optional | Unix timestamp | The time and date when the push message starts |
|   | type |   | string | The type of channel, such as push |
|   | subscribers |   |   | An array of subscribers objects - subscriber - deviceId |
