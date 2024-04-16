                           

Push Message
============

The Push Message API is used to push messages to subscribed applications.

Content Format
--------------

*   **XML**: API payload in XML file format.
*   **JSON**: API payload in JSON file format.

URL
---

```
http://<host or ip>:<port>/api/v1/messages
```

Request Method
--------------

HTTP POST

### Content Type

Based on the content format, the payload's request header includes "Content-Type" for:

*   **XML** is "text/xml;charset=UTF-8"
*   **JSON** is "application/json;charset=UTF-8"

Authentication
--------------

If you have selected the **Authentication for Message API** check box in the **Administration** > **General** tab > **Security** in **VoltMX Foundry Messaging Console**, then in the header section of Push Message API, you need to provide basic authentication with Volt MX Foundry Messaging console user ID and password. The Authorization example is given below:

```
Authorization: Basic xxxxxx
```

> **_Note:_** Here, xxxxxx is base 64 encoded text of Volt MX Foundry Messaging console User ID and Password.

For more details, refer [Authentication APIs](Authentication_API.md#The_Authentication_API)

Sample Payload
--------------

### XML

```


<?xml version='1.0' encoding='UTF-8'?>

<messageRequest appId="xxx">

<global>

<subscribers>

</subscribers>

<platformSpecificProps/>

</global>

<messages>

<message expiryTimestamp="0" overrideMessageId="0" refId="" startTimestamp="0" type="PUSH">

<subscribers>

<subscriber ksid=""/>

<segmentCriteria>xxxx</segmentCriteria>

</subscribers>

<platformSpecificProps>

</platformSpecificProps>

<content>

<mimeType>text/plain</mimeType>

<priorityService>false</priorityService>

<data>xxxx</data>

</content>

</message>

</messages>

</messageRequest>


```

### JSON

```
{
     "messageRequest": {
       "appId": "xxxx",
       "global": {
      
    },
       "messages": {
         "message": {
           "content": {
                "priorityService": "false",
                "data": "xxxx",
                "mimeType": "text/plain"   
        },
           "overrideMessageId": 0,
        //Thisfieldneedstobefilledwithjavatimestampvalueforthetimeyouwantthismessagetobetriggeredforpushing.Ifyouprovidevalueaszero,
        themessagewillbepickedforpushingimmediately.   "startTimestamp": 0,
        //Thisisthejavatimestampvalueofthetimetillthemessagewillbetriedforpushing.Ifyouprovidethevalueasazero,
        themessagewillneverbeexpired.   "expiryTimestamp": 0,
           "subscribers": {
             "subscriber": [
            {
                 "ksid": "xxxx"
            }
          ],
             "segmentCriteria": "xxx"
        },
           "platformSpecificProps": {
          
        },
           "type": "PUSH"
      }
    }
  }
```

Sample Payload with Platform Specific Properties
------------------------------------------------

### XML

```
<?xml version="1.0" encoding="UTF-8"?>
<messageRequest appId="SampleApp">
  <global>
    <subscribers>
      <subscriber ksid="1234567890123456789"/>
    </subscribers>
    <platformSpecificProps/>
  </global>
  <messages>
    <message expiryTimestamp="0" overrideMessageId="0" refId="" startTimestamp="0" type="PUSH">
      <subscribers>
        <segmentCriteria>##1## OR ##2##</segmentCriteria>
      </subscribers>
      <platformSpecificProps>
		<iphone>
			<badge>1</badge>
			<sound>sample.wav</sound>
			<category>DOWNLOAD_CATEGORY</category>
			<contentAvailable>1</contentAvailable>
			<actionLocKey>VIEW</actionLocKey>
			<locKey>REPLYTO</locKey>
			<locArgs>
			  <locArg>Joe</locArg>
			  <locArg>Jane</locArg>
			</locArgs>
			<launchImage>LaunchImage.png</launchImage>
			<title>Offer for you</title>
			<titleLocKey>TITLE</titleLocKey>
			<titleLocArgs>
			  <titleLocArg>200</titleLocArg>
			</titleLocArgs>
			<customData>
				<key name="userData">userCustomData</key>
			</customData>
		</iphone>
        
        <android>
          <key name="url" value="http://voltmx.com"/>
        </android>
        <windows>
          <notificationType>TILE</notificationType>
		  <title>New Message</title>
		  <badge>3</badge>
		  <imagePath>http://background.images.com/background</imagePath>
        </windows>
      </platformSpecificProps>
      <content>
        <mimeType>text/plain</mimeType>
        <priorityService>true</priorityService>
        <data>You have received a message</data>
      </content>
    </message>
  </messages>
</messageRequest>
```

### JSON

```
{
  "messageRequest": {
    "appId": "SampleApp",
    "global": {
      "subscribers": {
        "subscriber": { "ksid": "1234567890123456789" }
      }
    },
    "messages": {
      "message": {
        "expiryTimestamp": "0",
        "overrideMessageId": "0",
        "startTimestamp": "0",
        "type": "PUSH",
        "subscribers": { "segmentCriteria": "##1## OR ##2##" },
        "platformSpecificProps": {
          "iphone": {
            "badge": "1",
            "sound": "sample.wav",
            "category": "DOWNLOAD_CATEGORY",
            "contentAvailable": "1",
            "actionLocKey": "VIEW",
            "locKey": "REPLYTO",
            "locArgs": {
              "locArg": [
                "Joe",
                "Jane"
              ]
            },
            "launchImage": "LaunchImage.png",
            "title": "Offer for you",
            "titleLocKey": "TITLE",
            "titleLocArgs": { "titleLocArg": "200" },
            "customData": {
              "key": {
                "name": "userData",
                "content": "userCustomData"
              }
            }
          },
                   "android": {
            "key": {
              "name": "url",
              "value": "http://voltmx.com"
            }
          },
          "windows": {
            "notificationType": "TILE",
            "title": "New Message",
            "badge": "3",
            "imagePath": "http://background.images.com/background"
          }
        },
        "content": {
          "mimeType": "text/plain",
          "priorityService": "true",
          "data": "You have received a message"
        }
      }
    }
  }
}
```

Sample Responses
----------------

### XML

```


<messageResponse>

<code>200</code>

<description>Request Queued. </description>

<requestId>requestId</requestId>

<messages>

</messages>

</messageResponse>


```

### JSON

```
{
  "messageResponse": {
    "requestId": "requestId",
    "description": "Request Queued. ",
    "code": 200,
    "messages": [
      
    ]
  }
}
```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| 200 | Request Queued |
| 400 | Invalid request format |
| 404 | Invalid Volt MX AppId or Application is not published with given AppId |
| 500 | Server failed to process the request |

Messaging Elements
------------------

The following is the attribute of the **Message Request Element**:

  
| Parameter | Required or Optional | Description |
| --- | --- | --- |
| AppID | Required | A Volt MX application identifier to which the messages are to be sent |

The following are the parameters of the **Message Request Element**:

  
| Parameter | Required or Optional | Description |
| --- | --- | --- |
| global | Optional | This element contains global declarations that are applicable to all messages. The global declarations can be subscribers or platformSpecificProps |
| messages | Required | This element declares the set of messages to be sent. Each message is declared in the Message Element. |

> **_Important:_** For Android, Platform specific property values will be sent in encoded format. Application developer needs to decode the values before displaying the message on the device.

The following are the attributes of the **Message Element:**

  
| Parameter | Required or Optional | Description |
| --- | --- | --- |
| refId | Required | A numeric reference identifier for a message request to identify the message in the response from the Volt MX Foundry Messaging. The response from the Volt MX Foundry Messaging usually contains a list of generated identifiers for the messages. The identifiers are in a sequence in which the messages are sent. You can find the message element in the response using the refid. |
| type | Required | Specifies how the message must be sent. The type is "PUSH". |
| startTimestamp | Optional | Specifies when the Volt MX Foundry Messaging must make the first attempt to send the message. This attribute accepts a value of type long specifying the epoch seconds. |
| expiryTimestamp | Optional | Specifies the time after which Volt MX Foundry Messaging will not attempt to send a message. This attribute accepts a value of type long specifying the epoch seconds. If this value is not provided, Apple push notification server will try the push only once and will not retry if failed. In order for APNS to retry the messages this value has to be filled. Thus it will retried until this time. |
| overrideMessageId | Optional | Used to override the scheduled message with the new or updated message. |

The following are the parameters of the **Message Element:**

  
| Parameter | Required or Optional | Description |
| --- | --- | --- |
| segmentCriteria | Optional | Specifies the segment criteria with targeted subscribers and matching audience members criteria. For example, ##1## AND ##2##, where 1 and 2 are segment ids |
| subscribers | Optional | Specifies the list of subscribers to whom a message must be sent. Each of the subscribers is specified by the subscriber element The subscribers element can be specified globally through the global element. If you add a list of subscribers in this element, the added list will also be added to the list of subscribers that is specified globally |

The following are the attributes of the **subscriber Element:**

  
| Parameter | Required or Optional | Description |
| --- | --- | --- |
| ksid | Optional | It is the Volt MX Subscription Identifier. You receive this identifier after a successful subscription with the Volt MX Foundry Messaging. If you specify this attribute, the sid or PhoneNo is retrieved from the subscriber lookup service and you need not specify any other attribute |
| ufid | Optional | It is the User Friendly Identifier.You provide this identifier during subscription. If you specify this attribute, the sid or PhoneNo is retrieved from the subscriber lookup service and you need not specify any other attribute. |
| deviceID | Optional | It is the Device Identifier. It is the identifier that you provided during subscription. If you specify this attribute, the sid or PhoneNo is retrieved from the subscriber lookup service and you need not specify any other attribute |
| sid | Optional | It is the Subscription Identifier. This attribute is required by the Push Notifications Service provider to send a message to a subscriber who has not subscribed to Volt MX Foundry Messaging |
| osType | Required for Push | Specifies the operating system for which the push notifications are sent. |
| content | Required | Specifies the content of the message and has the following sub-elements:<br>- **mimeType (Optional)**: Specifies the mime type of the content. Default: text/plain<br>- **data (Optional)**: You can use this element to send simple character data (for example, simple text). You must make sure that you specify either the data or the URL element.<br>- **url (Optional)**: You can use this element if you need to access content from a URL. You must make sure that you specify either the data or the URL element. |
| platformSpecificProps | Optional | You can use this element, if you need a fine control on messages at a platform level. The platformSpecificProps element can be specified globally through the global element.The properties that you specify for this element will override the global declarations. |

The following are the parameters of the **platformSpecificProps Element**::

  
| Parameter | Required or Optional | Description |
| --- | --- | --- |
| iPhone | Optional | This element is iPhone specific and has the following parameters:<br>**badge (Optional)**: The number to be displayed as the badge of the application icon. If you do not specify this property, any currently displayed number is removed<br>- **sound (Optional)**: The name of the sound file in the application bundle. If the sound file does not exist or if you specify the sound file as default, the default alert sound is played<br>- **actionLockKey (Optional)**: The string as a key for localizing the text on the right button title is "View". If the value is set to null and a notification arrives, an alert with an "OK" button is displayed<br>- **lockey (Optional)**: A key to an alert message string in a Localizable.strings file in the device for the current localization (which is set by the user’s language preference). The key string can be formatted with %@ and %n$@ specifiers to take the variables specified in locArgs<br>- **locArgs (Optional)**: Specifies the variable string values that must appear in place of the format specifiers in theocKey. Values should be part of <logArg> tag<br>- **launchImage (Optional)**: The file name of the image in the application bundle that must be used as the launch image of the message |
| iPhone | Optional | \- **customData (Optional)**: This element has the custom data that can be in key-value pairs. The key is a string and the value is any data in JSON format. You must specify the key-value pair using the key element as follows: &lt;key name=”customArr1”&gt;[“value1”, “value2”]&lt;/key&gt;<br>- **category**: When iOS sees a push notification with a category key, it looks up the categories that were registered by the app. If iOS finds a match, it displays the corresponding actions with the notification<br>- **contentAvailable**: Provides this key with a value of 1 to indicate that new content is available. Including this key and value indicates that when your app is launched in the background or resumed. Property with a value of 1 lets the remote notification act as a “silent” notification. When a silent notification arrives, iOS wakes up your app in the background so that you can get new data from your server or do background information processing. Users are not told about the new or changed information that results from a silent notification, but they can find out about it the next time they open your app.<br>- **title**: A short string that describes the purpose of the notification. Apple Watch displays this string as a part of the notification interface. This string is displayed only briefly and should be crafted so that it can be understood quickly<br>- **titleLocKey** : The key to a title string in the Localizable.strings file for the current localization. The key string can be formatted with %@ and %n$@ specifiers to take the variables specified in the titleLocArgs array |
| Windows | Optional | This element allows you to customize the following elements:<br>- **notificationType (Required)**: Specifies how the message is displayed on the device. You can choose the notification type as RAW, TILE or TOAST You can send the data set in the content element only if you set the notification type as RAW<br>- **text1 (Applicable for TOAST notifications)**: It is the first line of text in the notification<br>**\- text2 (Applicable for TOAST notifications):** It is the second line of text in the notification<br>**\- title (Applicable for TILE notifications)**: It is title of the TILE notification<br>- **badge (Applicable for TILE notifications)**: It is the number to be specified as the badge on the application<br>**icon - imagePath (Applicable for TILE notifications)**: It is the path of the image that must be used as the background for the application icon |
| Android | Optional | For Android, the only customization possible is providing the key-value pairs. Both the Key and the value must be of type string and must be specified in the key element as follows: &lt;key name=”customKey” value=”test”/&gt;<br> |

> **_Important:_** Custom properties with the key name as ‘mid’ are reserved in Volt MX Foundry Messaging, so do not use any custom property with the key name as 'mid'.
