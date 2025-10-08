                           

Email API with Audience ID, Email, and Template ID
==================================================

The **Email API with Audience ID, Email, and Template ID** accepts audience ID or email or the template ID as input parameters and sends email messages to audience members. When both Audience ID and Email are submitted, Audience ID is given preference. When the Audience ID, Email, and Template ID are all submitted then Template ID is given the highest preference. You will need to fetch Audience ID or email or Template ID first using the respective GET APIs and use these as an input parameter to send push messages using this API.

URL
---

The HTTP URL for **Email API with Audience ID, Email, and Template ID** API is:

```
http://<host or ip>:<port>/api/v1/message/email
```

Method
------

POST

Header
------

The payload's request header includes Content-Type as application/json;charset=UTF-8.

Input Parameters
----------------

The following fields are input parameters:

  
| Input Parameter | Level – Two | Level – Three | Level – Four | Required | Type | Description |
| --- | --- | --- | --- | --- | --- | --- |
| emailServiceRequest |   |   |   |   |   | An array of emailServiceRequest objects |
|   | emails |   |   |   |   | An array of emails objects |
|   |   | email |   |   |   | An array of email objects |
|   |   |   | recipients | emailId (Requiredl) type (Required) id (Optional) |   | An array of recipients objects:-emailId (User email ID)-type (Email recipients such as To, CC and BCC)- id (Unique ID assigned to an audience member) |
|   |   |   | copyTo | Optional | string | If you want to send the email message to other recipients users, then provide the email IDs. |
|   |   |   | senderEmail | Optional | string | When sending emails, the default sender email ID is used, for example xxxxx@xxx.com. |
|   |   |   | senderName | Optional | string | Name of the user who sends an email |
|   |   |   | templateId | Optional | string | Template ID, can be obtained from [Get Templates by Pagination](../REST_API_Email_Template/Get_Email_Templates_By_Pagination.md). |
|   |   |   | subject | Required/Optional if **templateId** is provided | string | Email subject |
|   |   |   | content | Required/Optional if **templateId** is provided | string | Email message details |
|   |   |   | priority | Optional | boolean | If the email message is priority or not |
|   |   |   | startTimeStamp | Optional | string | Time relative to a starting point |
|   |   |   | endTimeStamp | Optional | string | Time relative to an ending point |

> **_Note:_** If in an email payload you provide the templateId, subject, and content, the engagement server will give preference to the template ID.

Sample Request
--------------

Sending an email using **subject** and **content**.

```
{
    "emailServiceRequest": {
        "emails": {
            "email": {
                "copyTo": "",
                "senderName": "VMS API Automation",
                "startTimeStamp": "0",
                "recipients": {
                    "recipient": [{
                        "emailId": "MfUser511@VoltMX.com",
                        "type": "TO"
                    }]
                },
                "**subject**": "mail subject",
                "emailNamePairs": {
                    "key": [{
                        "name": "test",
                        "content": "value for key-test"
                    }]
                },
                "senderEmail": "vmsmaildemo@voltmx.com",
                "endTimeStamp": "0",
                "priority": "true",
                "**content**": "mail message"
            }
        }
    }
}

```

Sending an email using **templateId**.

```
{
    "emailServiceRequest": {
        "emails": {
            "email": {
                "copyTo": "",
                "senderName": "VMS API Automation",
                "startTimeStamp": "0",
                "recipients": {
                    "recipient": [{
                        "emailId": "MfUser511@VoltMX.com",
                        "type": "TO"
                    }]
                },
                "emailNamePairs": {
                    "key": [{
                        "name": "test",
                        "content": "value for key-test"
                    }]
                },
                "senderEmail": "vmsmaildemo@voltmx.com",
                "endTimeStamp": "0",
                "priority": "true",
                "**templateId**": "9",
            }
        }
    }
}

```

Sending an email using **templateId**, **subject**, and **content**. The engagement server will give preference to the template ID.

```
{
    "emailServiceRequest": {
        "emails": {
            "email": {
                "copyTo": "",
                "senderName": "VMS API Automation",
                "startTimeStamp": "0",
                "recipients": {
                    "recipient": [{
                        "emailId": "MfUser511@VoltMX.com",
                        "type": "TO"
                    }]
                },
                "**subject**": "mail subject",
                "emailNamePairs": {
                    "key": [{
                        "name": "test",
                        "content": "value for key-test"
                    }]
                },
                "senderEmail": "vmsmaildemo@voltmx.com",
                "endTimeStamp": "0",
                "priority": "true",
                "**templateId**": "9",
                "**content**": "mail message"
            }
        }
    }
}

```

Sending an email using an invalid **templateId**.

```
 {
  "emailServiceRequest" : {
    "emails" : {
      "email" : {
        "recipients" : {
        "recipient" : [ {
            "emailId" : "aron.hale@voltmx.com",
            "type" : "TO"
          } ]
        },
       "**templateId**" : 9910,
       "subject" : "email Subject",
        "content" : "This is the content",
        "priority" : "true",
        "startTimeStamp" : 0,
        "endTimeStamp" : 0
      }
    }
  }
}
```

Sample Response
---------------

Response for an email sent using **subject** and **content**.

```
{
"id" : "7696229422545333674",
"message" : "Request Queued. "
} 
```

Response for an email sent using **templateId**.

```
  {
     "id" : "7696392635046903364",
     "message" : "Request Queued. "
   }
```

Response for an email sent using **templateId**, **subject**, and **content**.

```
{
"id" : "7696476153235921165",
"message" : "Request Queued. "
}
```

> **_Note:_** If in an email payload you provide the templateId, subject, and content, the engagement server will give preference to the template ID.

Response for an email sent using an invalid **templateID**,

```
{
"id" : "-1",
"message" : "Invalid TemplateId"
}
```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Request queued |
| Status 400 | xxxx is an invalid email address.No active audience members found.Recipient type is required.Mandatory parameters not filled. Subject and content are mandatory. |
| Status 401 | Unauthorized request. |
| Status 500 | Server failure to process request |
