
# Push Messages

The **Push Messages** API push messages to the subscribed app users.

## URL

The HTTP URL for **Push Messages** API is:

```
<host>:<port>/api/v1/message
```

The Push Messages API applies the Gateway Filter for Authentication to authenticate a user's credentials and allow access to the service.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

Following fields are the input parameters:

| Input Parameter            | Second Level | Third Level           | Fourth Level | Type             | Description                                                                                                                                                                       |
| -------------------------- | ------------ | --------------------- | ------------ | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| messageRequest (mandatory) |              |                       |              |                  | An array of messageRequest objects                                                                                                                                                |
|                            | appId        |                       |              | alphanumeric     | Unique ID assigned to an app                                                                                                                                                      |
|                            | global       |                       |              |                  | An array of global objects                                                                                                                                                        |
|                            | messages     |                       |              |                  | An array of messages objects                                                                                                                                                      |
|                            |              | message               |              |                  | An array of message objects                                                                                                                                                       |
|                            |              |                       | content      |                  | An array of content objects:- priorityService-data-mimeType                                                                                                                       |
|                            |              | overrideMessageId     |              | int              | If you wish to change the push message and yet the message is not sent, then you need to pass the old message ID in sample request to update the existing push message to be sent |
|                            |              | startTimestamp        |              | date time format | Time relative to a starting point                                                                                                                                                 |
|                            |              | expiryTimestamp       |              | date time format | Time relative to an ending point                                                                                                                                                  |
|                            |              | subscribers           |              |                  | An array of subscribers objects- ksid- allActive                                                                                                                                  |
|                            |              | platformSpecificProps |              |                  | An array of platform specific properties, For more details, [see](Push_Message_APIs.md#platformspecificprops-input-parameters)                                                  |
|                            | type         |                       |              | string           | Type of channel, such as push                                                                                                                                                     |

## Content Type

Based on the content format, the payload's request header Content-Type for:

- XML is text/xml;charset=UTF-8
- JSON is application/json;charset=UTF-8

## Sample Request

### XML

```
<?xml version="1.0" encoding="UTF-8"?>

   <messageRequest appId="20096-6548262167">
      <global />
      <messages>
         <message>
            <content>
               <data>new data</data>
               <mimeType>text/plain</mimeType>
               <priorityService>false</priorityService>
            </content>
            <expiryTimestamp>0</expiryTimestamp>
            <overrideMessageId>0</overrideMessageId>
            <platformSpecificProps>
               <android>
                  <key>
                     <element>
                        <name>title</name>
                        <value>Aron Hale</value>
                     </element>
                     <element>
                        <name>jpushtitle</name>
                        <value>sample title</value>
                     </element>
                  </key>
               </android>
               <iphone>
                  <actionLocKey null="true" />
                  <badge>1</badge>
                  <contentAvailable>1</contentAvailable>
                  <launchImage>launchImage</launchImage>
                  <locArgs>
                     <locArg>
                        <element>changeit</element>
                        <element>22</element>
                     </locArg>
                  </locArgs>
                  <locKey>lockey</locKey>
                  <sound>sound.mp4</sound>
                  <title>Aron:title</title>
                  <titleLocArgs>
                     <titleLocArg null="true" />
                  </titleLocArgs>
                  <titleLocKey null="true" />
               </iphone>
            </platformSpecificProps>
            <startTimestamp>0</startTimestamp>
            <subscribers>
               <subscriber ksid ="4931474178235588403"></subscriber>
            </subscribers>
            <type>PUSH</type>
         </message>
      </messages>
   </messageRequest>

```

### JSON

```
{
"messageRequest": {
"appId": "20096-6548262167",
"global": {},
"messages": {
"message": {
"content": {
"priorityService": "false",
"data": "new data",
"mimeType": "text/plain"
},
"overrideMessageId": 0,
"startTimestamp": 0,
"expiryTimestamp": 0,
"subscribers": {
"subscriber": [
{
"ksid": "4927821427136428978",
"allActive" : true
}
]
},
"platformSpecificProps": {
"iphone": {
"badge": "1",
"sound": "sound.mp4",
"contentAvailable": "1",
"actionLocKey": "null",
"locKey": "lockey",
"locArgs": {
"locArg": [
"changeit",
"22"
]
},
"launchImage": "launchImage",
"title": "Aron:title",
"titleLocKey": "null",
"titleLocArgs": {
"titleLocArg": "null"
}
},
"android": {
"key": [
{
"name": "title",
"value": "Aron Hale"
},
{
"name": "jpushtitle",
"value": "sample title"
}
]
}
},
"type": "PUSH"
}
}
}
}

```

## Sample Response

### XML

```
<messageResponse>
<code>200</code>
<description>Request Queued. </description>
<requestId>4929228564460268532</requestId>
<messages>
<message  msgId="4929228564460568424" description="Queued" />
</messages>
</messageResponse>
```

### JSON

```
{
"messageResponse": {
"code": 200,
"requestId": "9215887794872700927",
"description": "Request Queued. ",
"messages": [{
"msgId": 0,
"description": "Number of Pushes queued:3"
}]
}
}
```

```
{
"messageResponse": {
"code": 200,
"requestId": "4929213133436091499",
"description": "Request Queued. ",
"messages": [{
"msgId": 4929213133435985838
}]
}
}
```

## Response Status

| Code       | Description                                                                              |
| ---------- | ---------------------------------------------------------------------------------------- |
| Status 200 | Request Queued. As you have selected silent push, actual message content will be ignored |
| Status 400 | Invalid segment criteriaInvalid Subscribers                                              |
| Status 401 | Unauthorized request.                                                                    |
| Status 500 | Server failure to process request.                                                       |
