  

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


#### Request Method

POST


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
| email | Optional | Specifies the email address of the subscriber to which the notification is sent. |
| ksid | Optional | Specifies the ksid value of the subscriber. The ksid value is used to communicate with the Engagement server. |

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
     [
     {
      "ksid": $ksid / "ufid": $email
     }
     ]
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
      [
      {
       "name": "title",
       "value": "$title"
      }
      ]
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


<table>
  <tr>
    <th>Description/Message</th>
    <th>Reason</th>
    <th>Sample Error Response</th>
  </tr>
  <tbody>
    <tr>
      <td>Invalid Subscribers</td>
      <td>The ksid, email ID, or subscriber ID is not valid.</td>
      <td>
        <pre class="prettyprint">{
 "opstatus_getToken": "0",
 "requestid": "-1",
 "opstatus": 0,
 "description": "Invalid Subscribers",
 "message": "",
 "opstatus_adhocPush": "0",
 "httpStatusCode": "200"
}</pre>
      </td>
    </tr>
    <tr>
      <td>Invalid VoltMX AppId or Application is not published with given AppId</td>
      <td>The specified appId is not valid, or the specified app is not published.</td>
      <td>
        <pre class="prettyprint">{
 "opstatus_getToken": "0",
 "requestid": "null",
 "opstatus": 0,
 "description": "Invalid VoltMX AppId or Application is not published with given AppId",
 "message": "",
 "opstatus_adhocPush": "0",
 "httpStatusCode": "200"
}</pre>
      </td>
    </tr>
    <tr>
      <td>Invalid request format. Please provide a valid value for text2 for notificationType TOAST</td>
      <td>One or more mandatory fields (message, appid, or title) are empty.</td>
      <td>
        <pre class="prettyprint">{
 "opstatus_getToken": "0",
 "requestid": "null",
 "opstatus": 0,
 "description": "Invalid request format. Please provide a valid value for text2 for notificationType TOAST",
 "message": "",
 "opstatus_adhocPush": "0",
 "httpStatusCode": "200"
}</pre>
      </td>
    </tr>
    <tr>
      <td>Authentication fail, Invalid credentials</td>
      <td>The specified username or password is not valid.</td>
      <td>
          <pre class="prettyprint">{
  "errmsg_adhocPush": "Backend request failed for service sendPush with HTTP status code 401.",
  "errmsg_getToken": "Backend request failed for service sendPush with HTTP status code 401.",
  "opstatus_getToken": "8009",
  "requestid": "",
  "opstatus": 20013,
  "errmsg": "One or more of the services failed in composite service.",
  "description": "",
  "message": "Authentication fail, Invalid credentials",
  "opstatus_adhocPush": "8009",
  "httpStatusCode": "401"
  }</pre>
      </td>
    </tr>
  </tbody>
</table>












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
| email | Optional (if using ksid) | Specifies the email address of the subscriber to which the notification is sent. |
| ksid | Optional (if using email) | Specifies the ksid value of the subscriber. The ksid value is used to communicate with the Engagement server. |

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
     [
     {
      "ksid": $ksid / "ufid": $email
     }
     ]
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
      [
      {
       "name": "title",
       "value": "$title"
      }
      ]
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

<table>
  <tr>
    <th>Description/Message</th>
    <th>Reason</th>
    <th>Sample Error Response</th>
  </tr>
  <tbody>
    <tr>
      <td>Invalid Subscribers</td>
      <td>The ksid, email ID, or subscriber ID is not valid.</td>
      <td>
        <pre class="prettyprint">{
 "opstatus_getToken": "0",
 "requestid": "-1",
 "opstatus": 0,
 "description": "Invalid Subscribers",
 "message": "",
 "opstatus_adhocPush": "0",
 "httpStatusCode": "200"
}</pre>
      </td>
    </tr>
    <tr>
      <td>Invalid VoltMX AppId or Application is not published with given AppId</td>
      <td>The specified appId is not valid, or the specified app is not published.</td>
      <td>
        <pre class="prettyprint">{
 "opstatus_getToken": "0",
 "requestid": "null",
 "opstatus": 0,
 "description": "Invalid VoltMX AppId or Application is not published with given AppId",
 "message": "",
 "opstatus_adhocPush": "0",
 "httpStatusCode": "200"
}</pre>
      </td>
    </tr>
    <tr>
      <td>Invalid request format. Please provide a valid value for text2 for notificationType TOAST</td>
      <td>One or more mandatory fields (message, appid, or title) are empty.</td>
      <td>
        <pre class="prettyprint">{
 "opstatus_getToken": "0",
 "requestid": "null",
 "opstatus": 0,
 "description": "Invalid request format. Please provide a valid value for text2 for notificationType TOAST",
 "message": "",
 "opstatus_adhocPush": "0",
 "httpStatusCode": "200"
}</pre>
      </td>
    </tr>
    <tr>
      <td>Invalid X-VoltMX-App-API-Key</td>
      <td>The specified Engagement app API Key is not valid.</td>
      <td>
        <pre class="prettyprint">{
 "errmsg_adhocEmailAPIKey": "Backend request failed for service sendEmailWithAPIKey with HTTP status code 401.",
 "requestid": "",
 "opstatus": 20013,
 "errmsg": "One or more of the services failed in composite service.",
 "message": "Invalid X-VoltMX-App-API-Key",
 "opstatus_adhocEmailAPIKey": "8009",
 "httpStatusCode": "401"
}</pre>
      </td>
    </tr>
  </tbody>
</table>




















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

  

<table>
  <tr class="TableStyle-Basic-Head-Header1">
    <th class="TableStyle-Basic-HeadE-Column1-Header1">Description/Message</th>
    <th class="TableStyle-Basic-HeadE-Column1-Header1">Reason</th>
    <th class="TableStyle-Basic-HeadD-Column1-Header1">Sample Error Response</th>
  </tr>
  <tbody>
    <tr class="TableStyle-Basic-Body-Body1">
      <td class="TableStyle-Basic-BodyE-Column1-Body1">Mandatory parameters not filled. Subject and Content are mandatory.</td>
      <td class="TableStyle-Basic-BodyE-Column1-Body1">One or more mandatory fields (message or subject) are empty.</td>
      <td class="TableStyle-Basic-BodyD-Column1-Body1">
        <pre class="prettyprint">{
 "opstatus_getToken": "0",
 "requestid": "-1",
 "opstatus_adhocEmail": "8009",
 "opstatus": 20013,
 "errmsg": "One or more of the services failed in composite service.",
 "errmsg_adhocEmail": "Backend request failed for service sendEmail with HTTP status code 400.",
 "message": "Mandatory parameters not filled. Subject and Content are mandatory.",
 "httpStatusCode": "200"
}</pre>
      </td>
    </tr>
    <tr class="TableStyle-Basic-Body-Body1">
      <td class="TableStyle-Basic-BodyB-Column1-Body1">Authentication fail, Invalid credentials</td>
      <td class="TableStyle-Basic-BodyB-Column1-Body1">The specified username or password is not valid.</td>
      <td class="TableStyle-Basic-BodyA-Column1-Body1">
        <pre class="prettyprint">{
 "errmsg_adhocPush": "Backend request failed for service sendPush with HTTP status code 401.",
 "errmsg_getToken": "Backend request failed for service sendPush with HTTP status code 401.",
 "opstatus_getToken": "8009",
 "requestid": "",
 "opstatus": 20013,
 "errmsg": "One or more of the services failed in composite service.",
 "description": "",
 "message": "Authentication fail, Invalid credentials",
 "opstatus_adhocPush": "8009",
 "httpStatusCode": "401"
}</pre>
      </td>
    </tr>
  </tbody>
</table>










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


<table>
  <tr class="TableStyle-Basic-Head-Header1">
    <th class="TableStyle-Basic-HeadE-Column1-Header1">Description/Message</th>
    <th class="TableStyle-Basic-HeadE-Column1-Header1">Reason</th>
    <th class="TableStyle-Basic-HeadD-Column1-Header1">Sample Error Response</th>
  </tr>
  <tbody>
    <tr class="TableStyle-Basic-Body-Body1">
      <td class="TableStyle-Basic-BodyE-Column1-Body1">Mandatory parameters not filled. Subject and Content are mandatory.</td>
      <td class="TableStyle-Basic-BodyE-Column1-Body1">One or more mandatory fields (message or subject) are empty.</td>
      <td class="TableStyle-Basic-BodyD-Column1-Body1">
        <pre class="prettyprint">{
 "opstatus_getToken": "0",
 "requestid": "-1",
 "opstatus_adhocEmail": "8009",
 "opstatus": 20013,
 "errmsg": "One or more of the services failed in composite service.",
 "errmsg_adhocEmail": "Backend request failed for service sendEmail with HTTP status code 400.",
 "message": "Mandatory parameters not filled. Subject and Content are mandatory.",
 "httpStatusCode": "200"
}</pre>
      </td>
    </tr>
    <tr class="TableStyle-Basic-Body-Body1">
      <td class="TableStyle-Basic-BodyB-Column1-Body1">Invalid X-VoltMX-App-API-Key</td>
      <td class="TableStyle-Basic-BodyB-Column1-Body1">The specified Engagement app API Key is not valid.</td>
      <td class="TableStyle-Basic-BodyA-Column1-Body1">
        <pre class="prettyprint">{
 "errmsg_adhocEmailAPIKey": "Backend request failed for service sendEmailWithAPIKey with HTTP status code 401.",
 "requestid": "",
 "opstatus": 20013,
 "errmsg": "One or more of the services failed in composite service.",
 "message": "Invalid X-VoltMX-App-API-Key",
 "opstatus_adhocEmailAPIKey": "8009",
 "httpStatusCode": "401"
}</pre>
      </td>
    </tr>
  </tbody>
</table>







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


<table>
  <tr class="TableStyle-Basic-Head-Header1">
    <th class="TableStyle-Basic-HeadE-Column1-Header1">Description/Message</th>
    <th class="TableStyle-Basic-HeadE-Column1-Header1">Reason</th>
    <th class="TableStyle-Basic-HeadD-Column1-Header1">Sample Error Response</th>
  </tr>
  <tr class="TableStyle-Basic-Body-Body1">
    <td class="TableStyle-Basic-BodyE-Column1-Body1">No Active Audience Members found</td>
    <td class="TableStyle-Basic-BodyE-Column1-Body1">One or more of the specified mobile numbers are not valid.</td>
    <td class="TableStyle-Basic-BodyD-Column1-Body1">
      <pre class="prettyprint">{
 "errmsg_adhocSMS": "Backend request failed for service sendSMS with HTTP status code 400.",
 "opstatus_adhocSMS": "8009",
 "opstatus_getToken": "0",
 "requestid": "",
 "opstatus": 20013,
 "errmsg": "One or more of the services failed in composite service.",
 "message": "No Active Audience Members found",
 "httpStatusCode": "200"
}</pre>
    </td>
  </tr>
  <tr class="TableStyle-Basic-Body-Body1">
    <td class="TableStyle-Basic-BodyB-Column1-Body1">Authentication fail, Invalid credentials</td>
    <td class="TableStyle-Basic-BodyB-Column1-Body1">The specified username or password is not valid.</td>
    <td class="TableStyle-Basic-BodyA-Column1-Body1">
      <pre class="prettyprint">{
 "errmsg_adhocPush": "Backend request failed for service sendPush with HTTP status code 401.",
 "errmsg_getToken": "Backend request failed for service sendPush with HTTP status code 401.",
 "opstatus_getToken": "8009",
 "requestid": "",
 "opstatus": 20013,
 "errmsg": "One or more of the services failed in composite service.",
 "description": "",
 "message": "Authentication fail, Invalid credentials",
 "opstatus_adhocPush": "8009",
 "httpStatusCode": "401"
}</pre>
    </td>
  </tr>
</table>





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

<table>
  <tr class="TableStyle-Basic-Head-Header1">
    <th class="TableStyle-Basic-HeadE-Column1-Header1">Description/Message</th>
    <th class="TableStyle-Basic-HeadE-Column1-Header1">Reason</th>
    <th class="TableStyle-Basic-HeadD-Column1-Header1">Sample Error Response</th>
  </tr>
  <tr class="TableStyle-Basic-Body-Body1">
    <td class="TableStyle-Basic-BodyE-Column1-Body1">No Active Audience Members found</td>
    <td class="TableStyle-Basic-BodyE-Column1-Body1">One or more of the specified mobile numbers are not valid.</td>
    <td class="TableStyle-Basic-BodyD-Column1-Body1">
      <pre class="prettyprint">{
 "errmsg_adhocSMS": "Backend request failed for service sendSMS with HTTP status code 400.",
 "opstatus_adhocSMS": "8009",
 "opstatus_getToken": "0",
 "requestid": "",
 "opstatus": 20013,
 "errmsg": "One or more of the services failed in composite service.",
 "message": "No Active Audience Members found",
 "httpStatusCode": "200"
}</pre>
    </td>
  </tr>
  <tr class="TableStyle-Basic-Body-Body1">
    <td class="TableStyle-Basic-BodyB-Column1-Body1">Invalid X-VoltMX-App-API-Key</td>
    <td class="TableStyle-Basic-BodyB-Column1-Body1">The specified Engagement app API Key is not valid.</td>
    <td class="TableStyle-Basic-BodyA-Column1-Body1">
      <pre class="prettyprint">{
 "errmsg_adhocEmailAPIKey": "Backend request failed for service sendEmailWithAPIKey with HTTP status code 401.",
 "requestid": "",
 "opstatus": 20013,
 "errmsg": "One or more of the services failed in composite service.",
 "message": "Invalid X-VoltMX-App-API-Key",
 "opstatus_adhocEmailAPIKey": "8009",
 "httpStatusCode": "401"
}</pre>
    </td>
  </tr>
</table>


