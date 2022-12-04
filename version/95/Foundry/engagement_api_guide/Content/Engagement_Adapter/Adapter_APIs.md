  

Engagement Adapter APIs
=======================

The Engagement Adapter provides the following operations:

*   [Push API](#push-api)
    *   [sendPush](#sendpush)
    *   [sendPushWithAPIKey](#sendpushwithapikey)
*   [Email API](#email-api)
    *   [sendEmail](#sendemail)
    *   [sendEmailWithAPIKey](#sendemailwithapikey)
*   [SMS API](#sms-api)
    *   [sendSMS](#sendsms)
    *   [sendSMSWithAPIKey](#sendsmswithapikey)

  
To use the Engagement Adapter APIs with authentication, before invoking any API, use the [getToken](#gettoken) API to fetch the **X-VoltMX-Authorization** token and store it in the session.

Accounts API
------------

### getToken

The getToken operation is used to sign-in to the Engagement Server, fetch the X-VoltMX-Authorization token, and store the token value in the session. The token is used to authorize the use of the Engagement Adapter APIs.

#### URL

```
https://<Server URL>/authService/accounts
```

#### Request Method

POST

#### Request Body Parameters

  
| Parameter | Required | Description |
| --- | --- | --- |
| Content-Type | Required | Specifies the type of content that is used for the parameters.  
The content type must be `application/json` |

#### Body

  
| Parameter | Required | Description |
| --- | --- | --- |
| userid | Required | The username for the Engagement login credentials |
| password | Required | The password for the Engagement login credentials |

Sample Request
```
{
  "userid”: "<Username>",
  "password”: "<Password>"
}
```

Push API
--------

### sendPush

The sendPush API is used to send a push notification to the specified email addresses or devices. This API uses the authentication mechanism to connect to the Engagement Server.

#### URL

```
https://<Engagement URL>/api/v1/message
```

#### Request Method

POST

#### Request Body Parameters

*   Make sure that you provide a value for the **email** parameter or the **ksid** parameter.
*   If you provide a value for both parameters (email and ksid), the adapter uses the **ksid** parameter.

  
| Parameter | Required | Description |
| --- | --- | --- |
| appId | Required | Specifies the name of the Engagement app that is used to invoke the APIs. |
| title | Required | Specifies the title of the push notification. |
| message | Required | Specifies the message of the push notification. |
| email | Optional  
(if using ksid) | Specifies the email address of the subscriber to which the notification is sent. |
| ksid | Optional  
(if using email) | Specifies the ksid value of the subscriber. The ksid value is used to communicate with the Engagement server. |

Sample Request JSONIn the following code snippet, `$keyname` is a dynamic value that must be replaced with user provided inputs.

```
{
 "messageRequest":
 {
  "appId": "testApp",
  "global": { },
  "messages":
  {
   "message":
   {
    "content":
    {
     "priorityService": "true",
     "data": "$message",
     "mimeType": "text/plain"
    },
    "overrideMessageId": 0,
    "startTimestamp": "0",
    "expiryTimestamp": "0",
    "subscribers":
    {
     "subscriber":
     \[
     {
      "ksid": $ksid / "ufid": $email
     }
     \]
    },
    "platformSpecificProps":
    {
     "title": "$title",
     "iphone":
     {
      "title": "$title",
      "customData": { }
     },
     "blackberry": { },
     "android":
     {
      "title": "$title"
     },
     "jpush":
     {
      "key":
      \[
      {
       "name": "title",
       "value": "$title"
      }
      \]
     },
     "windows":
     {
      "notificationType": "TOAST",
      "text1": "$title",
      "text2": "$message",
      "params": { }
     },
     "wns":
     {
      "notificationType": "TOAST",
      "text1": "$title",
      "text2": "$message",
      "params": { },
      "image": { },
      "text": { }
     },
     "webfcm": { }
    },
    "type": "PUSH"
   }
  }
 }
}

```
Error Responses

If the Engagement server returns an error response for an API call, the value of the **requestid** key is **\-1** or **null**. The error responses are differentiated based on the **description** or the **message**.

For more information about the error responses, refer to the following table.

  
| Description/Message | Reason | Sample Error Response |
| --- | --- | --- |
| Invalid Subscribers | 
The ksid, email ID, or subscriber ID is not valid.

 | ```
{
 "opstatus\_getToken": "0",
 "requestid": "-1",
 "opstatus": 0,
 "description": "Invalid Subscribers",
 "message": "",
 "opstatus\_adhocPush": "0",
 "httpStatusCode": "200"
}
``` |
| Invalid VoltMX AppId or Application is not published with given AppId | The specified appId is not valid, or the specified app is not published. | ```
{
 "opstatus\_getToken": "0",
 "requestid": "null",
 "opstatus": 0,
 "description": "Invalid VoltMX AppId or Application is not published with given AppId",
 "message": "",
 "opstatus\_adhocPush": "0",
 "httpStatusCode": "200"
}
``` |
| Invalid request format. Please provide a valid value for text2 for notificationType TOAST | One or more mandatory fields (message, appid, or title) are empty. | ```
{
 "opstatus\_getToken": "0",
 "requestid": "null",
 "opstatus": 0,
 "description": "Invalid request format. Please provide a valid value for text2 for notificationType TOAST",
 "message": "",
 "opstatus\_adhocPush": "0",
 "httpStatusCode": "200"
}
``` |
| Authentication fail, Invalid credentials | The specified username or password is not valid. | ```
{
 "errmsg\_adhocPush": "Backend request failed for service sendPush with HTTP status code 401.",
 "errmsg\_getToken": "Backend request failed for service sendPush with HTTP status code 401.",
 "opstatus\_getToken": "8009",
 "requestid": "",
 "opstatus": 20013,
 "errmsg": "One or more of the services failed in composite service.",
 "description": "",
 "message": "Authentication fail, Invalid credentials",
 "opstatus\_adhocPush": "8009",
 "httpStatusCode": "401"
}
``` |

### sendPushWithAPIKey

The sendPushWithAPIKey API is used to send a push notification to the specified email addresses or devices. This API uses the API Key to connect to the Engagement Server.

#### URL

```
https://<Engagement URL>/api/v1/message
```

#### Request Method

POST

#### Request Body Parameters

*   Make sure that you provide a value for the **email** parameter or the **ksid** parameter.
*   If you provide a value for both parameters (email and ksid), the adapter uses the **ksid** parameter.

  
| Parameter | Required | Description |
| --- | --- | --- |
| appId | Required | Specifies the name of the Engagement app that is used to invoke the APIs. |
| title | Required | Specifies the title of the push notification. |
| message | Required | Specifies the message of the push notification. |
| email | Optional  
(if using ksid) | Specifies the email address of the subscriber to which the notification is sent. |
| ksid | Optional  
(if using email) | Specifies the ksid value of the subscriber. The ksid value is used to communicate with the Engagement server. |

Sample Request JSONIn the following code snippet, `$keyname` is a dynamic value that must be replaced with user provided inputs.

```
{
 "messageRequest":
 {
  "appId": "testApp",
  "global": { },
  "messages":
  {
   "message":
   {
    "content":
    {
     "priorityService": "true",
     "data": "$message",
     "mimeType": "text/plain"
    },
    "overrideMessageId": 0,
    "startTimestamp": "0",
    "expiryTimestamp": "0",
    "subscribers":
    {
     "subscriber":
     \[
     {
      "ksid": $ksid / "ufid": $email
     }
     \]
    },
    "platformSpecificProps":
    {
     "title": "$title",
     "iphone":
     {
      "title": "$title",
      "customData": { }
     },
     "blackberry": { },
     "android":
     {
      "title": "$title"
     },
     "jpush":
     {
      "key":
      \[
      {
       "name": "title",
       "value": "$title"
      }
      \]
     },
     "windows":
     {
      "notificationType": "TOAST",
      "text1": "$title",
      "text2": "$message",
      "params": { }
     },
     "wns":
     {
      "notificationType": "TOAST",
      "text1": "$title",
      "text2": "$message",
      "params": { },
      "image": { },
      "text": { }
     },
     "webfcm": { }
    },
    "type": "PUSH"
   }
  }
 }
}

```
Error Responses

If the Engagement server returns an error response for an API call, the value of the **requestid** key is **\-1** or **null**. The error responses are differentiated based on the **description** or the **message**.

For more information about the error responses, refer to the following table.

  
| Description/Message | Reason | Sample Error Response |
| --- | --- | --- |
| Invalid Subscribers | 
The ksid, email ID, or subscriber ID is not valid.

 | ```
{
 "opstatus\_getToken": "0",
 "requestid": "-1",
 "opstatus": 0,
 "description": "Invalid Subscribers",
 "message": "",
 "opstatus\_adhocPush": "0",
 "httpStatusCode": "200"
}
``` |
| Invalid VoltMX AppId or Application is not published with given AppId | The specified appId is not valid, or the specified app is not published. | ```
{
 "opstatus\_getToken": "0",
 "requestid": "null",
 "opstatus": 0,
 "description": "Invalid VoltMX AppId or Application is not published with given AppId",
 "message": "",
 "opstatus\_adhocPush": "0",
 "httpStatusCode": "200"
}
``` |
| Invalid request format. Please provide a valid value for text2 for notificationType TOAST | One or more mandatory fields (message, appid, or title) are empty. | ```
{
 "opstatus\_getToken": "0",
 "requestid": "null",
 "opstatus": 0,
 "description": "Invalid request format. Please provide a valid value for text2 for notificationType TOAST",
 "message": "",
 "opstatus\_adhocPush": "0",
 "httpStatusCode": "200"
}
``` |
| Invalid X-VoltMX-App-API-Key | The specified Engagement app API Key is not valid. | ```
{
 "errmsg\_adhocEmailAPIKey": "Backend request failed for service sendEmailWithAPIKey with HTTP status code 401.",
 "requestid": "",
 "opstatus": 20013,
 "errmsg": "One or more of the services failed in composite service.",
 "message": "Invalid X-VoltMX-App-API-Key",
 "opstatus\_adhocEmailAPIKey": "8009",
 "httpStatusCode": "401"
}
``` |

Email API
---------

### sendEmail

The sendEmail API is used to send an email to the specified recipients. This API uses the authentication mechanism to connect to the Engagement Server.

#### URL

```
https://<Engagement URL>/api/v1/message/email
```

#### Request Method

POST

#### Request Body Parameters

  
| Parameter | Required | Description |
| --- | --- | --- |
| emailList | Required | Specifies the list of email addresses of the recipients. You can provide multiple values by separating them with a comma (`,`). |
| Subject | Required | Specifies the subject of the email. |
| message | Required | Specifies the message of the email. |

Error Responses

If the Engagement server returns an error response for an API call, the value of the **requestid** key is **\-1** or **null**. The error responses are differentiated based on the **description** or the **message**.

For more information about the error responses, refer to the following table.

  
| Description/Message | Reason | Sample Error Response |
| --- | --- | --- |
| Mandatory parameters not filled. Subject and Content are mandatory. | 
One or more mandatory fields (message or subject) are empty.

 | ```
{
 "opstatus\_getToken": "0",
 "requestid": "-1",
 "opstatus\_adhocEmail": "8009",
 "opstatus": 20013,
 "errmsg": "One or more of the services failed in composite service.",
 "errmsg\_adhocEmail": "Backend request failed for service sendEmail with HTTP status code 400.",
 "message": "Mandatory parameters not filled. Subject and Content are mandatory.",
 "httpStatusCode": "200"
}
``` |
| Authentication fail, Invalid credentials | The specified username or password is not valid. | ```
{
 "errmsg\_adhocPush": "Backend request failed for service sendPush with HTTP status code 401.",
 "errmsg\_getToken": "Backend request failed for service sendPush with HTTP status code 401.",
 "opstatus\_getToken": "8009",
 "requestid": "",
 "opstatus": 20013,
 "errmsg": "One or more of the services failed in composite service.",
 "description": "",
 "message": "Authentication fail, Invalid credentials",
 "opstatus\_adhocPush": "8009",
 "httpStatusCode": "401"
}
``` |

### sendEmailWithAPIKey

The sendEmailWithAPIKey API is used to send an email to the specified recipients. This API uses the API Key to connect to the Engagement Server.

#### URL

```
https://<Engagement URL>/api/v1/message/email
```

#### Request Method

POST

#### Request Body Parameters

  
| Parameter | Required | Description |
| --- | --- | --- |
| emailList | Required | Specifies the list of email addresses of the recipients. You can provide multiple values by separating them with a comma (`,`). |
| Subject | Required | Specifies the subject of the email. |
| message | Required | Specifies the message of the email. |

Error Responses

If the Engagement server returns an error response for an API call, the value of the **requestid** key is **\-1** or **null**. The error responses are differentiated based on the **description** or the **message**.

For more information about the error responses, refer to the following table.

  
| Description/Message | Reason | Sample Error Response |
| --- | --- | --- |
| Mandatory parameters not filled. Subject and Content are mandatory. | 
One or more mandatory fields (message or subject) are empty.

 | ```
{
 "opstatus\_getToken": "0",
 "requestid": "-1",
 "opstatus\_adhocEmail": "8009",
 "opstatus": 20013,
 "errmsg": "One or more of the services failed in composite service.",
 "errmsg\_adhocEmail": "Backend request failed for service sendEmail with HTTP status code 400.",
 "message": "Mandatory parameters not filled. Subject and Content are mandatory.",
 "httpStatusCode": "200"
}
``` |
| Invalid X-VoltMX-App-API-Key | The specified Engagement app API Key is not valid. | ```
{
 "errmsg\_adhocEmailAPIKey": "Backend request failed for service sendEmailWithAPIKey with HTTP status code 401.",
 "requestid": "",
 "opstatus": 20013,
 "errmsg": "One or more of the services failed in composite service.",
 "message": "Invalid X-VoltMX-App-API-Key",
 "opstatus\_adhocEmailAPIKey": "8009",
 "httpStatusCode": "401"
}
``` |

SMS API
-------

### sendSMS

The sendSMS API is used to send an SMS to the specified phone numbers. This API uses the authentication mechanism to connect to the Engagement Server.

#### URL

```
https://<Engagement URL>/api/v1/message/sms
```

#### Request Method

POST

#### Request Body Parameters

  
| Parameter | Required | Description |
| --- | --- | --- |
| message | Required | Specifies the message of the SMS. |
| mobileNoList | Required | Specifies the mobile numbers of the recipients. You can provide multiple values by separating them with a comma (`,`). |

Error Responses

If the Engagement server returns an error response for an API call, the value of the **requestid** key is **\-1** or **null**. The error responses are differentiated based on the **description** or the **message**.

For more information about the error responses, refer to the following table.

  
| Description/Message | Reason | Sample Error Response |
| --- | --- | --- |
| No Active Audience Members found | 
One or more of the specified mobile numbers are not valid.

 | ```
{
 "errmsg\_adhocSMS": "Backend request failed for service sendSMS with HTTP status code 400.",
 "opstatus\_adhocSMS": "8009",
 "opstatus\_getToken": "0",
 "requestid": "",
 "opstatus": 20013,
 "errmsg": "One or more of the services failed in composite service.",
 "message": "No Active Audience Members found",
 "httpStatusCode": "200"
}
``` |
| Authentication fail, Invalid credentials | The specified username or password is not valid. | ```
{
 "errmsg\_adhocPush": "Backend request failed for service sendPush with HTTP status code 401.",
 "errmsg\_getToken": "Backend request failed for service sendPush with HTTP status code 401.",
 "opstatus\_getToken": "8009",
 "requestid": "",
 "opstatus": 20013,
 "errmsg": "One or more of the services failed in composite service.",
 "description": "",
 "message": "Authentication fail, Invalid credentials",
 "opstatus\_adhocPush": "8009",
 "httpStatusCode": "401"
}
``` |

### sendSMSWithAPIKey

The sendSMSWithAPIKey API is used to send an SMS to the specified phone numbers. This API uses the API Key to connect to the Engagement Server.

#### URL

```
https://<Engagement URL>/api/v1/message/sms
```

#### Request Method

POST

#### Request Body Parameters

  
| Parameter | Required | Description |
| --- | --- | --- |
| message | Required | Specifies the message of the SMS. |
| mobileNoList | Required | Specifies the mobile numbers of the recipients. You can provide multiple values by separating them with a comma (`,`). |

Error Responses

If the Engagement server returns an error response for an API call, the value of the **requestid** key is **\-1** or **null**. The error responses are differentiated based on the **description** or the **message**.

For more information about the error responses, refer to the following table.

  
| Description/Message | Reason | Sample Error Response |
| --- | --- | --- |
| No Active Audience Members found | 
One or more of the specified mobile numbers are not valid.

 | ```
{
 "errmsg\_adhocSMS": "Backend request failed for service sendSMS with HTTP status code 400.",
 "opstatus\_adhocSMS": "8009",
 "opstatus\_getToken": "0",
 "requestid": "",
 "opstatus": 20013,
 "errmsg": "One or more of the services failed in composite service.",
 "message": "No Active Audience Members found",
 "httpStatusCode": "200"
}
``` |
| Invalid X-VoltMX-App-API-Key | The specified Engagement app API Key is not valid. | ```
{
 "errmsg\_adhocEmailAPIKey": "Backend request failed for service sendEmailWithAPIKey with HTTP status code 401.",
 "requestid": "",
 "opstatus": 20013,
 "errmsg": "One or more of the services failed in composite service.",
 "message": "Invalid X-VoltMX-App-API-Key",
 "opstatus\_adhocEmailAPIKey": "8009",
 "httpStatusCode": "401"
}
``` |

URL
---

The HTTP URL for **Email API without an Audience Member** API is:

```
https://<Server URL>/authService/accounts
```

Operation Name
--------------

```
sendEmail
```

Method
------

POST

Header
------

The payload's request header includes Content-Type as application/json;charset=UTF-8.

The header also contains the following parameters:

   
| Input Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| X-VoltMX-Authorization | Required (Fetched from the login session) | string | The key that authorizes the user to send requests to the engagement server |
| Email | 
Required

 | string | The email address of the recipient |
| message | Required | string | Email message details |
| Subject | Required | string | Email subject |

Input Parameters
----------------

The following fields are input parameters:

      
| Input Parameter | Level – Two | Level – Three | Level – Four | Required | Type | Description |
| --- | --- | --- | --- | --- | --- | --- |
| emailServiceRequest |   |   |   |   |   | An array of emailServiceRequest objects |
|   | emails |   |   |   |   | An array of emails objects |
|   |   | email |   |   |   | An array of email objects |
|   |   |   | recipients | 
emailId(optional)

type(Required)

id(Required)

 |   | An array of recipients objects:  

\-emailId (User email ID)

\-type (Email recipients such as To, CC and BCC)

\- id (Unique ID assigned to an audience member)

 |
|   |   |   | copyTo | Optional | string | If you want to send the email message to other recipients users, then provide the email IDs. |
|   |   |   | senderEmail | Optional | string | When sending emails, the default sender email ID is used, for example xxxxx@xxx.com. |
|   |   |   | senderName | Optional | string | Name of the user who sends an email |
|   |   |   | subject | Required | string | Email subject |
|   |   |   | content | Required | string | Email message details |
|   |   |   | priority | Optional | boolean | If the email message is priority or not |
|   |   |   | startTimeStamp | Optional | string | Time relative to a starting point |
|   |   |   | endTimeStamp | Optional | string | Time relative to an ending point |

Sample Request
--------------

```
            {
	"emailServiceRequest": {
		"emails": {
			"email": {
				"recipients": {
					"recipient": \[{
						"emailId":"xx@x.com",
						"type": "TO"
					}, {
						"id": "2",
						"type": "TO"
					}\]
				},
				"copyTo": "aron\_hale@yahoo.com",
				"senderEmail": "aron\_hale@voltmx.com",
				"senderName": "aron",
				"subject": "This is subject",
				"content": "this is content",
				"priority": "true",
				"startTimeStamp": 0,
				"endTimeStamp": 0
			}
		}
	}
}
```

Sample Response
---------------

```
{
  "id" : "7129786336408690545",
  "message" : "Request Queued. "
}
```

Response Status
---------------

 
| Code | Description |
| --- | --- |
| Status 200 | Request queued |
| Status 400 | 
xxxx is an invalid email address  
No active audience members found  
Recipient type is required  
Mandatory parameters not filled. Subject and content are mandatory.  


 |
| Status 401 | Unauthorized request. |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" madcap:conditions="Default.HTML" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
