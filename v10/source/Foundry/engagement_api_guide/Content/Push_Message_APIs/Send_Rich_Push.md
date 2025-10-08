
# Send Rich Push

The **Send Rich Push** API sends a rich push.You can send a rich push through the device-ID or UFID.

## URL

The HTTP URL for **Send Rich Push** API is:

```
http://<host>:<port>/api/v1/messages/push
```

This API implements Gateway Filter for Authentication/Basic Authentication to authenticate access of the API by a user.

## Method

POST

## Header

Based on the content format, the payload's request header Content-Type for:

- **XML** is text/xml;charset=UTF-8
- **JSON** is application/json;charset=UTF-8

## Input Parameters

The following fields are input parameters:

| Input Parameter | Level – Two | Level – Three         | Level- Four     | Required | Type    | Description                                                                                                          |
| --------------- | ----------- | --------------------- | --------------- | -------- | ------- | -------------------------------------------------------------------------------------------------------------------- |
| messageRequest  |             |                       |                 |          |         | An array of messageRequest objects                                                                                   |
|                 | appId       |                       |                 | Yes      | long    | Unique ID assigned to an app                                                                                         |
|                 | global      |                       |                 | Optional |         | An array of global objects. It can include an array of subscribers objects with deviceId or ufid as input parameters |
|                 | messages    |                       |                 | Yes      |         | An array of messages objects                                                                                         |
|                 |             | message               |                 | Yes      |         | An array of message objects. For more details, [see](Push_Message_APIs.md#message-objects)                         |
|                 |             | platformSpecificProps |                 |          |         | For platform specific properties, [see](Push_Message_APIs.md#platformspecificprops-input-parameters)               |
|                 |             | content               |                 |          |         | An array of content objects                                                                                          |
|                 |             |                       | mimeType        | Optional | string  | Type of content, such as text/plain                                                                                  |
|                 |             |                       | priorityService | Optional | boolean | data (type of data such as, rich push                                                                                |
|                 |             |                       | richContent     | Yes      |         | an array of rich content objects                                                                                     |

> **_Note:_** In Global array, you can pass UFID or device ID as an input parameter to send rich push content.  
> UFID : The User Friendly Identifier or UFID is used when you subscribe to Volt MX Foundry Engagement Services. Based on your requirement, you can provide an UFID. It is alphanumeric, for example xxx@voltmx.com or 2890XZCY. It can be used to map devices to the user using the value as a reconciliation key.  
> Device ID: A device ID (device identification) is a distinctive number associated with a device.

## Sample Request

### XML

```
  
 <?xml version="1.0" encoding="utf-8"?>
<messageRequest appId="25053-8664676767">
 <global>
   <subscribers/>
   <platformSpecificProps/>
 </global>
 <messages>
   <message expiryTimestamp="0" overrideMessageId="0" refId="" startTimestamp="0" type="PUSH">
     <subscribers>
       <subscriber deviceId="123456"/>
     </subscribers>
     <content>
       <mimeType>text/plain</mimeType>
       <priorityService>false</priorityService>
       <data>sample rich push data</data>
       <richContent> sample rich push data</richContent>
     </content>
   </message>
 </messages>
</messageRequest>
```

### JSON

### JSON Payload with local parameter (deviceId)

```
{
"messageRequest": {

    "appId": "25053-8664676767",
    "global": {},
    "messages": {
      "message": {
        "expiryTimestamp": "0",
        "overrideMessageId": "0",
        "startTimestamp": "0",
        "type": "PUSH",
        "subscribers": {
          "subscriber": {
            "deviceId": "123456"
          }
        },
        "platformSpecificProps": {},
        "content": {
          "mimeType": "text/plain",
          "priorityService": "false",
          "data": "sample rich push data",
          "richContent": {
            "value": "<h1> Sample Mail </h1>Hello,<br><div class=\"float_left\"></div>This is a sample Mail.<br>Regards,<br>VoltMX<br>"
          }
        }
      }
    }

}
}
```

> **_Important:_** Enter the app-ID not the app name in the request payload.

### JSON Payload with Global parameter (deviceId)

```
{
"messageRequest": {
"appId": "25016-9447884208",
"global": {
"subscribers": {
"subscriber": [{
"deviceId": "82345600X"
}, {
"deviceId": "92345600XZ"
}]
}

    	},
    	"messages": {
    		"message": {
    			"expiryTimestamp": "0",
    			"overrideMessageId": "0",
    			"startTimestamp": "0",
    			"type": "PUSH",
    			"platformSpecificProps": {

    			},
    			"content": {
    				"mimeType": "text/plain",
    				"priorityService": "false",
    				"data": "sample rich push data",
    				"richContent": {
    "value": "<h1> Sample</h1>Hello,<br><div class=\"float_left\"></div>sample Mail.<br>Regards,<br>VoltMX<br>"
    				}
    			}
    		}
    	}
    }

}
```

### JSON Payload with local parameter (ufid)

```
{
"messageRequest": {

    	"appId": "22874-10836483458",
    	"global": {},
    	"messages": {
    		"message": {
    			"expiryTimestamp": "0",
    			"overrideMessageId": "0",
    			"startTimestamp": "0",
    			"type": "PUSH",
    			"subscribers": {
    				"subscriber": {
    			"ufid": "latha.ganesh@gmail.com"
    				}
    			},
    			"platformSpecificProps": {},
    			"content": {
    				"mimeType": "text/plain",
    				"priorityService": "false",
    				"data": "sample rich push data",
    				"richContent": {
    	"value": "<h1> Sample Mail </h1>Hello,<br><div
    		class=\"float_left\"></div>This is a sample Mail.<br>Regards,<br>VoltMX<br>"
    				}
    			}
    		}
    	}
    }

}
```

## Output Parameters

| Output Parameter | Level – Two | Type         | Description                                                                             |
| ---------------- | ----------- | ------------ | --------------------------------------------------------------------------------------- |
| details          |             | array        | An array of details objects                                                             |
|                  | refId       | alphanumeric | Push message reference ID                                                               |
|                  | description | string       | Current status of the push message                                                      |
|                  | msgId       | int          | Message ID assigned to the push message                                                 |
| message          |             | string       | Displays the current status of the message as queue or initial or not attempted         |
| id               |             |              | Reference ID assigned to the push message to track push message in the Status list view |

## Sample Responses

### Status 200

```
{
"details" : [ {
"refId" : "",
"description" : "Queued",
"msgId" : "9072115305247374011"
} ],
"id" : "9072115305219664811",
"message" : "Request Queued. "
}
```

### Status 400

```
{
"details" : [ {
"refId" : "",
"description" : "No Subscribers found",
"msgId" : "-1"
} ],
"id" : "",
"message" : "Invalid Subscribers"
}
```

## Response Status

| Code       | Description                                                                                                                                    |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Status 200 | Request queued                                                                                                                                 |
| Status 400 | Invalid subscribersNo subscribers foundInvalid ufidInvalid Volt MX appId or application is not published with given appIdRich content is emtpy |
| Status 401 | Unauthorized request                                                                                                                           |
| Status 500 | Server failure to process request                                                                                                              |
