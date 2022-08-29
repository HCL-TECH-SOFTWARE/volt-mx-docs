
# Push Message

The **Push Message** API sends push messages to the subscribed app users.

## URL

The HTTP URL for Push Message API is:

```
http://<hostname/IP>:<port>/api/v1/messages/push
```

The API implements Gateway Filter for Authentication to authenticate access of the API by a user.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8 for JSON payload and text/xml;charset=UTF-8 for XML payload.

content-type: application/json;charset=UTF-8 OR text/xml;charset=UTF-8 (any one at a time)  
Authorization : Required

## Input Parameters

The following fields are input parameters:

| Input Parameter | Level – Two           | Level – Three                        | Required | Type             | Description                                                                                                                                                              |
| --------------- | --------------------- | ------------------------------------ | -------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| messageRequest  |                       |                                      |          |                  | An array of messageRequest objects                                                                                                                                       |
|                 | appId                 |                                      | Yes      | long             | Unique ID assigned to an app                                                                                                                                             |
|                 | global                |                                      | Optional |                  | An array of global objects                                                                                                                                               |
|                 |                       | subscribers                          |          |                  | An array of subscribers                                                                                                                                                  |
|                 |                       | subscriber: ksid OR ufid OR deviceId | Optional | string           | Array of subscribers' ksid or ufid or deviceId                                                                                                                           |
|                 | messages              |                                      |          |                  | An array of messages objects                                                                                                                                             |
|                 |                       | message                              |          |                  | An array of message objects                                                                                                                                              |
|                 |                       | message:expiryTimestamp              | Optional | string           | Date on which the push message will expire                                                                                                                               |
|                 |                       | message: overrideMessageId           | Optional | long             | If you change the push message and yet the message is not sent, then you must pass the old message ID in a sample request to update the existing push message to be sent |
|                 |                       | message: refId                       | Optional | alphanumeric     | The reference ID tracks failed push messages. refId is a unique identifier of the push message. Based on your requirement you can define a reference ID                  |
|                 |                       | message: startTimestamp              | Optional | date time format | Time relative to a starting point                                                                                                                                        |
|                 |                       | message: expiryTimestamp             | Optional | date time format | Time relative to an ending point                                                                                                                                         |
|                 |                       | message: type                        | Yes      | string           | Type of channel, such as push                                                                                                                                            |
|                 |                       | message: subscribers                 |          |                  | An array of subscribers objects- segmentCriteria                                                                                                                         |
|                 |                       | subscriber: ksid OR ufid OR deviceId | Yes      | string           | Array of subscribers' ksid or ufid or deviceId                                                                                                                           |
|                 | platformSpecificProps |                                      | Optional |                  | An array of platform specific properties, For more details, [see](Push_Message_APIs.md#platformspecificprops-input-parameters)                                         |
|                 | content               |                                      |          |                  | An array of content objects                                                                                                                                              |
|                 |                       | mimeType                             | Optional | string           | Label for data such as text/plain                                                                                                                                        |
|                 |                       | priorityService                      | Optional | boolean          | If it is priority service or not                                                                                                                                         |
|                 |                       | data                                 | Optional | string           | push message description                                                                                                                                                 |

> **_Note:_** In a Global or Local array, you can pass a UFID or deviceId as an input parameter to send push content.  
> **\- UFID:** The User Friendly Identifier, or UFID, is used when you subscribe to Volt MX Foundry Engagement Services. The UFID is an alphanumeric value. For example: xxx@VoltMX.com or 2890XZCY. It can be used to map devices to the user using the value as a reconciliation key. If you are sending a push message using UFID, then the push will send to all the devices that match the UFID.  
> **\- deviceId:** A device identification, or deviceId, is a distinctive number associated with a device.

> **_Important:_** When a standard push message is sent to Android devices, the app for which the push is sent is launched in the background (if it is not already running) before the standard push message is processed, This causes the creation of a session.  
> When a standard push message is sent to iOS devices, the push message is displayed by the platform and no session is created.

When a silent push message is sent to Android devices, the app for which the push is sent is launched in the background (if it is not already running) before the silent push is processed. This causes the creation of a session.  
For the iOS devices, when a silent push is received and the app for which the message is sent is not running (because the app is killed by the user), then the message is not processed and no session is created.  
For the iOS devices, when a silent push is received and the app for which the message is sent is not running (because the app is killed by the device due to a lack of resources or something similar), then the message is processed by launching the app in the background and a session is created.

## Sample Request

### XML

```
  
 <?xml version="1.0" encoding="UTF-8"?>
<messageRequest>
<appId>15810-4190527911</appId>
<global>
<subscribers>
<subscriber>
<ksid>6338461620036073083</ksid> - OR -
<ufid>emailid@voltmx.com</ufid> - OR -
<deviceId>12345</deviceId>
</subscriber>
</subscribers>
</global>
<messages>
<message>
<content>
<data>You have received a message</data>
<mimeType>text/plain</mimeType>
<priorityService>true</priorityService>
</content>
<expiryTimestamp>0</expiryTimestamp>
<overrideMessageId>0</overrideMessageId>
<platformSpecificProps>
<android>
<bodyLocArgs>
<bodyLocArg>
<element>bodyArg1</element>
<element>bodyArg2</element>
<element>bodyArg3</element>
</bodyLocArg>
</bodyLocArgs>
<bodyLocKey>bodyLocKey</bodyLocKey>
<clickAction>Click action123</clickAction>
<color>red</color>
<delayWhileIdle>true</delayWhileIdle>
<icon>twitter.png</icon>
<key>
<name>xxxx</name>
<value>xxxx</value>
</key>
<priority>normal/high</priority>
<sound>bell.wav</sound>
<timeToLive>2490875</timeToLive>
<title>Android Tile</title>
<titleLocArgs>
<titleLocArg>
<element>titleArg1</element>
<element>titleArg2</element>
<element>titleArg3</element>
</titleLocArg>
</titleLocArgs>
<titleLocKey>titleLocKey</titleLocKey>
</android>
<blackberry>
<header>
<name>useEncoding</name>
<value>UTF-8</value>
</header>
</blackberry>
<iphone>
<actionLocKey>VIEW</actionLocKey>
<badge>1</badge>
<category>DOWNLOAD_CATEGORY</category>
<contentAvailable>1</contentAvailable>
<customData>
<key>
<content>userCustomData</content>
<name>userData</name>
</key>
</customData>
<launchImage>LaunchImage.png</launchImage>
<locArgs>
<locArg>
<element>Joe</element>
<element>Jane</element>
</locArg>
</locArgs>
<locKey>REPLYTO</locKey>
<sound>sample.wav</sound>
<title>Offer for you</title>
<titleLocArgs>
<titleLocArg>200</titleLocArg>
</titleLocArgs>
<titleLocKey>TITLE</titleLocKey>
</iphone>
<windows>
<badge>3</badge>
<imagePath>http://background.images.com/background</imagePath>
<notificationType>TILE</notificationType>
<title>New Message</title>
</windows>
<web>
<clickAction>Click action123</clickAction>
<icon>twitter.png</icon>
<key>
<name>xxxx</name>
<value>xxxx</value>
</key>
</web>
</platformSpecificProps>
<startTimestamp>0</startTimestamp>
<subscribers>
<segmentCriteria>##1## OR ##2##</segmentCriteria> - OR -
<subscriber>
<ksid>6338461620036073083</ksid> - OR -
<ufid>emailid@voltmx.com3</ksid> - OR -
<deviceId>12345</ksid>
</subscriber>
</subscribers>
<type>PUSH</type>
</message>
</messages>
</messageRequest>

```

### JSON

### Sample Request with Local Parameter

```
  
 {
"messageRequest": {
"appId": "25016-9447884208",
"messages": {
"message": {
"expiryTimestamp": "0",
"overrideMessageId": "0",
"refId": "4567223425667",
"startTimestamp": "0",
"type": "PUSH",
"subscribers": {
   "segmentCriteria": "##4## OR ##3##" - OR -
"subscriber": {
"ksid": "6338461620036073083", - OR -
"ufid": "emailid@voltmx.com", - OR -
"deviceId": "12345"
},
},
"platformSpecificProps": {
"iphone": {
 "badge": "1",
   "sound": "sample.wav",
   "category": "DOWNLOAD_CATE",
    "contentAvailable": "1",
      "actionLocKey": "VIEW",
     "locKey": "REPLYTO",
"locArgs": {
    "locArg": [
"Joe",
"Jane"
]
},
"launchImage":"x.png",
"title": "Offer",
"titleLocKey": "TITLE",
"titleLocArgs": {
    "titleLocArg": "200"
},
"customData": {
"key": {
"name": "user",
"content": "userData"
}
}
},
"android": {
"title": "Android Tile",
"delayWhileIdle": true,
"priority": "normal/high",
"timeToLive": "2490875",
"sound": "bell.wav",
"icon": "twitter.png",
"color": "red",
"clickAction": "ac123",
"bodyLocKey": "bLKey",
"titleLocKey": "tLKey",
"titleLocArgs": {
"titleLocArg": [
"titleArg1", "titleArg2", "titleArg3"
]
},
"bodyLocArgs": {
"bodyLocArg": [
"bodyArg1", "bodyArg2", "bodyArg3"
]
},
"key": {
"name": "xxxx",
"value": "xxxx"
}
},
"blackberry": {
"header": {
"name": "useEncoding",
"value": "UTF-8"
}
},  
 "web": {
"title": "webTile",
"icon": "twitter.png",
"clickAction": "ac123",
"key": {
"name": "xxxx",
"value": "xxxx"
}
},
"windows": {
"notificationType": "TILE",
"title": "New Message",
"badge": "3",
"imagePath":  
"http://background.images.com/background"  
 }
},
"content": {
"mimeType": "text/plain",
"priorityService": "true",
"data": "You have a message"
}
}
}
}
}
```

### Sample Request with Global Parameter

```
  
 {
"messageRequest": {
"appId": "25016-9447884208",
"global": {
"subscribers": {
"subscriber": [{
"ksid": "9217145330768714746"
- OR -
"ufid": "emailid@voltmx.com"
- OR -
"deviceId": "12345"
}, {
"ksid": "9217178177779285998"
- OR -
"ufid": "emailid@voltmx.com"
- OR -
"deviceId": "12345"
}]
}
},
"messages": {
"message": {
"expiryTimestamp": "0",
"overrideMessageId": "0",
"refId": "45672234256622",
"startTimestamp": "0",
"type": "PUSH",
"subscribers": {
        "segmentCriteria": "##4## OR ##3##" - OR -
"subscriber": {
"ksid": "6338461620036073083" - OR -
"ufid": "emailid@voltmx.com" - OR -
"deviceId": "12345"
},
},
"platformSpecificProps": {
"iphone": {
         "badge": "1",
"sound": "sample.wav",
"category" "DOWNLOAD",
"contentAvailable": "1",
"actionLocKey": "VIEW",
"locKey": "REPLYTO",
"locArgs": {
"locArg": [
    "Joe",
    "Jane"
]
},
"launchImage": "x.png",
"title": "Offer for you",
"titleLocKey": "TITLE",
"titleLocArgs": {
"titleLocArg": "200"
},
"customData": {
"key": {
"name": "user",
"content": "userData"
}
}
},
"android": {
"title": "Android",
"delayWhileIdle": true,
"priority": "normal/high",
"timeToLive": "2490875",
"sound": "bell.wav",
"icon": "twitter.png",
"color": "red",
"clickAction": "ac123",
"bodyLocKey": "bLKey",
"titleLocKey": "tLKey",
"titleLocArgs": {
  "titleLocArg": [
"titleArg1",
 "titleArg2", "titleArg3"
]
},
"bodyLocArgs": {
  "bodyLocArg": [
"bodyArg1", "bodyArg2", "bodyArg3"
]
},
"key": {
 "name": "xxxx",
 "value": "xxxx"
}
},
"blackberry": {
"header": {
"name": "useEncoding",
"value": "UTF-8"
}
"web": {
"title": "webTile",
"icon": "twitter.png",
"clickAction": "ac123",
"key": {
"name": "xxxx",
"value": "xxxx"
}
},
},
"windows": {
   "notificationType": "TILE",
 "title": "New Message",
 "badge": "3",
 "imagePath":  
"http://background.images.com/background"
}
},
"content": {
"mimeType": "text/plain",
"priorityService": "true",
"data": "You have a message"
}
}
}
}
}
```

## Output Parameters

The following fields are output parameters:

| Output Parameter | Level-Two   | Type        | Description                                                                                                           |
| ---------------- | ----------- | ----------- | --------------------------------------------------------------------------------------------------------------------- |
| details          |             |             | An array of details objects                                                                                           |
|                  | refId       | alphanumric | Push message reference ID                                                                                             |
|                  | description | string      | Displays the total number of pushes sent                                                                              |
|                  | msgId       | long        | Here, msgId refers to an ID that is used to map messagerequest table and messageentry table for internal data record. |
| id               |             |             | Here, id refers to request ID displayed under Settings > Status > List view > Request ID column                       |
| message          |             | string      | Response status message                                                                                               |

## Sample Response

```
{
"details" : [ {
"refId" : "",
"description" : "Number of Pushes queued:4",
"msgId" : "0"
} ],
"id" : "9221229698214870954",
"message" : "Request Queued. "
}
```

> **_Note:_** If the push message request is valid, the supplied reference ID in the push message request is not reflected in the push message response. If the request is invalid, the reference ID is displayed with a valid response status.

## Response Status

| Code       | Description                                                                                  |
| ---------- | -------------------------------------------------------------------------------------------- |
| Status 200 | Request queued                                                                               |
| Status 400 | Invalid voltmx appId or application is not published with given appIdInvalid request format. |
| Status 401 | Unauthorized request.                                                                        |
| Status 500 | Server failure to process request                                                            |
