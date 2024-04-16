                           


Send SMS API without Audience Member Registration
=================================================

The **Send SMS API** accepts the mobile number of a user as an input parameter and sends the SMS messages regardless of whether the mobile number is of a registered audience member or not.

URL
---

The HTTP URL for **Send SMS API without Audience Member Registration** is:

```
http://<host or ip>:<port>/api/v1/message/sms?checkUserExistence=false
```

The `checkUserExistence` Request Parameter is by default set to true. Therefore you must explicitly set it to false.

Method
------

POST

Header
------

Based on the content format, the payload's request header includes Content-Type for:

*   XML is text/xml;charset=UTF-8
*   JSON is application/json;charset=UTF-8

Input Parameters
----------------

The following fields are input parameters:

  
| Input Parameter | Level – Two | Level – Three | Level – Four | Required | Type | Description |
| --- | --- | --- | --- | --- | --- | --- |
| smsServiceRequest |   |   |   |   |   | An array of smsServiceRequest objects |
|   | messages |   |   |   |   | An array of messages objects |
|   |   | message |   |   |   | An array of message objects |
|   |   |   | startTimestamp | Optional | string | Time relative to a starting point |
|   |   |   | expiryTimestamp | Optional | string | Time relative to an ending point |
|   |   |   | priorityService | Required | boolean | If priority service or not |
|   |   |   | recipients | mobile (Required) |   | An array of recipients objects: -mobile |
|   |   |   | content | Optional | string | SMS description |
|   |   |   | channel | Optional | string | Used to define type of SMS. For example Voice SMS or Text SMS. |
|   |   |   | sendVoiceSmsOnFailure | Optional | boolean | If sending the text SMS fails (response code is not `SUBMITTED`), send a voice SMS to the recipient.<br>The engagement server does not send a voice SMS in the following scenarios:<br>1.The parameter is not specified<br>2.The parameter value is `false`<br>3.The channel value is not `TEXT`<br>4.The SMS provider is not configured for Voice SMS |

Sample Request
--------------

### XML

```
<smsServiceRequest>  
<messages>  
<message>  
<startTimestamp>0</startTimestamp>  
<expiryTimestamp>0</expiryTimestamp>  
<priorityService>false</priorityService>  
<recipients>  
<recipient mobile="+917799622269"/>  
</recipients>  
<content>sample sms message</content>  
<sendVoiceSmsOnFailure>true</sendVoiceSmsOnFailure>
</message>  
</messages>  
</smsServiceRequest>  

```

### XML for Voice

```
<smsServiceRequest>  
<messages>  
<message>  
<channel>voicesms</channel>  
<startTimestamp>0</startTimestamp>  
<expiryTimestamp>0</expiryTimestamp>  
<priorityService>false</priorityService>  
<recipients>  
<recipient mobile="+917799622269"/>  
</recipients>  
<content>sample sms message</content>  
</message>  
</messages>  
</smsServiceRequest>  

```

### JSON

```
{
  "smsServiceRequest": {
    "messages": {
      "message": {
        "startTimestamp": "0",
        "expiryTimestamp": "0",
        "priorityService": "true",
        "recipients": {
          "recipient": [{
            "mobile": "+919866694753"
			}, {
			"mobile": "+919900990091"
          }]
        },
        "content": "sample SMS message",
        "sendVoiceSmsOnFailure": true
      }
    }
  }
}
```

### JSON for Voice SMS

```
{
  "smsServiceRequest": {
    "messages": {
      "message": {
        "startTimestamp": "0",
        "expiryTimestamp": "0",
        "priorityService": "true",
        "recipients": {
          "recipient": [{
            "mobile": "+919866694753"
			}, {
			"mobile": "+919900990091"
          }]
        },
        "content": "sample SMS message"
      },
        "channel": "voicesms"
      }

    }
  }
}
```

Sample Response
---------------

### XML

```
<smsResponse>  
<code>200</code>  
<description>Request Queued. </description>  
<requestId>2318520209657194583</requestId>  
</smsResponse>  

```

### JSON

```
{
	"id": "4718462567639063760",
	"message": "Request Queued. "
}
```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Request queued |
| Status 400 | Failed to parse the input request |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |
