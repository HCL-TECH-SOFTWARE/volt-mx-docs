                           


Different types of Email APIs
============================= 

*   [Email API with Audience ID, Email, or Template ID](#email-api-with-audience-id-email-or-template-id)
*   [Email API with Attachments as Form data parameters](#email-api-with-attachments-as-form-data-parameters)
*   [Email API with Attachment URLs](#email-api-with-attachment-urls)
*   [Email API with Attachments as Form data parameters and from Attachment URLs](#email-api-with-attachments-as-form-data-parameters-and-from-attachment-urls)

### Common URL

The HTTP URL for all **Email APIs** is:

```
http://<host or ip>:<port>/api/v1/message/email?checkUserExistence=false
```

If the `checkUserExistence` Request Parameter is set to false the existence of a user with the email ID to which the email has been triggered is not necessary in the Engagement Console DB.

The `checkUserExistence` Request Parameter is by default set to true. When the parameter is set to true, the email ID to which the email has been triggered must be available in the Engagement Console DB. Therefore you must explicitly set it to false in order to send emails to email IDs that do not exist in the Engagement Console DB.

### Common Method

POST

Email API with Audience ID or Email using Template ID
-------------------------------------------------

The **sending email with Audience ID or Email using a Template ID API** accepts audience ID or email ID using a template ID as input parameter and sends email messages to audience members. When both Audience ID and Email are submitted the ID is given preference. When the subject and content, and Template ID are all submitted then Template ID is given preference over subject and content. You will need to fetch Audience ID or email or Template ID first using the respective GET APIs and use these as an input parameter to send push messages using this API.  

This is a secure API.

### Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

### Input Parameters

  
| Input Parameter | Level – Two | Level – Three | Level – Four | Required | Type | Description |
| --- | --- | --- | --- | --- | --- | --- |
| emailServiceRequest |   |   |   |   |   | An array of emailServiceRequest objects |
|   | emails |   |   |   |   | An array of emails objects |
|   |   | email |   |   |   | An array of email objects |
|   |   |   | recipients | emailId(Required / Optional if **id** is given) type(Required) id(Required / Optional if **emailId** is given) |   | An array of recipients objects:emailId (User email ID)type (Email recipients such as To, CC and BCC)id (Unique ID assigned to an audience member) |
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

### Sample Request

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

Email API with Attachments as Form data parameters
--------------------------------------------------

The Engagement Server supports **sending attachments using the Email API**. It accepts an email with multiple attachments and sends the email message to the users. This attachment however will not be saved in the engagement server when the message is sent. The **priority** must be set to "true" to enable sending attachments. The default value for priority is false.  

*   Supported types of attachments are pdf, xls, xlsx, csv, txt, doc, docx, ppt, pptx, pps, zip, rar, tar, gzip, log, jpeg, jpg, png.
*   Size of the attachments should not exceed the configured file size of 10.0 MB.
*   Total size of the attachments should not exceed the configured max size of 10.0 MB (after base64 encoding).

    A base64 encoded file is generally 1.4 times > original size.

*   The number of attachments cannot be more than 4.

This is a secure API.



### Header

The payload's request header includes:

*   Content-Type \[Optional\]: multipart/form-data
*   Form Data Keys \[Mandatory\] : **attachment** (type: File) → File attachments; **requestJson** (type: Text) → Email API JSON payload.

### Body

*   attachment - You can add multiple attachments by adding them to the body. For example:  

```
attachment: filename.pdf
attachment: filename1.pdf
attachment: filename2.pdf

```
*   requestJson - Email API JSON Payload. For example, to go the [Sample Request](#sample-request).

Input Parameters
----------------

  
| Input Parameter | Level – Two | Level – Three | Level – Four | Required | Type | Description |
| --- | --- | --- | --- | --- | --- | --- |
| emailServiceRequest |   |   |   |   |   | An array of emailServiceRequest objects |
|   | emails |   |   |   |   | An array of multiple email objects |
|   |   | email |   |   |   | An array of email objects |
|   |   |   | recipients | emailId(Required / Optional if **id** is given) type(Required) id(Required / Optional if **emailId** is given) |   | An array of recipients objects:emailId (User email ID)type (Email recipients such as To, CC and BCC)id (Unique ID assigned to an audience member) |
|   |   |   | copyTo | Optional | String | If you want to send the email message to other recipient users, then provide the email IDs. |
|   |   |   | senderEmail | Optional | String | When sending emails, the default sender email ID is used. For example, aron.hale@gmail.com. |
|   |   |   | senderName | Optional | String | Name of the user who sends an email |
|   |   |   | templateId | Optional | String | Template ID, can be obtained from [Get Templates by Pagination](../REST_API_Email_Template/Get_Email_Templates_By_Pagination.md). |
|   |   |   | subject | Required/Optional if **templateId** is provided | String | Email subject |
|   |   |   | content | Required/Optional if **templateId** is provided | String | Email message details |
|   |   |   | priority | Required | boolean | The priority must be set to "true" to enable sending attachments. |
|   |   |   | startTimeStamp | Optional | String | Time relative to a starting point |
|   |   |   | endTimeStamp | Optional | String | Time relative to an ending point |


| Level – Four | Level - Five | Level - Six | Required | Type | Description |
| --- | --- | --- | --- | --- | --- |
| attachmenURLs |   |   |   |   | An array of multiple attachmentURL objects. |
|   | attachementURL |   |   |   | An array of attachmentURL objects. |
|   |   | fileURL | Required | String | URL of the attachment. |
|   |   | fileName | Optional | String | Name of the file attached. |


The **priority** must be set to "**true**" to enable sending attachments. The default value for priority is false. This is mandatory since the attachments do not get stored on the server.


### Sample Request

```
{
  "emailServiceRequest" : {
    "emails" : {
      "email" : {
        "recipients" : {
          "recipient" : [ 
           {
            "emailId" : "aron.hale@hcl.com",
            "type" : "TO"
          },
          {
            "emailId" : "mark.kobar@gmail.com",
            "type" : "CC"
          }]
        },
        "copyTo" : "",
        "senderName" : "Vikash",
        "subject" : "This is subject",
        "content" : "This is content!",
        "priority" : "true",
        "startTimeStamp" : 0,
        "endTimeStamp" : 0
      }
    }
  }
}
```

Email API with Attachment URLs
------------------------------

The Engagement Server supports **sending attachments from attachment URLs using the Email API**. It downloads attachments from multiple attachment URLs and sends email messages to the users. The URLs must be signed URLs.

This is a secure API.


### Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

### Sample Request

```
{
  "emailServiceRequest" : {
    "emails" : {
      "email" : {
        "recipients" : {
          "recipient" : [ 
           {
            "emailId" : "aron.hale@hcl.com",
            "type" : "TO"
          },
          {
            "emailId" : "mark.kobar@gmail.com",
            "type" : "CC"
          }]
        },
        "copyTo" : "",
        "senderName" : "Divyanath",
        "subject" : "This is the subject",
        "content" : "This is the content.",
        "priority" : "true",
        "startTimeStamp" : 0,
        "endTimeStamp" : 0,
        "attachmentURLs" :{
          "attachmentURL" : [
          {
              "fileURL" : "https://file-examples.com/wp-content/uploads/2017/10/file-example_PDF_1MB.pdf",
              "fileName" : "attachment1"
          },
          {
              "fileURL" : "https://file-examples.com/wp-content/uploads/2017/02/file-sample_100kB.doc",
              "fileName" : "attachment2"
          }]
        }
      }
    }
  }
}
```

Email API with Attachments as Form data parameters and from Attachment URLs
---------------------------------------------------------------------------

The Engagement Server supports **sending attachments as form data parameters and from attachment URLs using the Email API**. It accepts an email with multiple attachments as form data parameters and downloads attachments from attachment URLs and sends email messages to the users.

This is a secure API.

*   Supported types of attachments are pdf, xls, xlsx, csv, txt, doc, docx, ppt, pptx, pps, zip, rar, tar, gzip, log, jpeg, jpg, png.
*   Size of the attachments should not exceed the configured file size of 10.0 MB.
*   Total size of the attachments should not exceed the configured max size of 10.0 MB (after base64 encoding).

    A base64 encoded file is generally 1.4 times > original size.

*   The number of attachments cannot be more than 4.

### Header

The payload's request header includes:

*   Content-Type \[Optional\]: multipart/form-data for attachments and application/json;charset=UTF-8 for attachment URLs.
*   Form Data Keys \[Mandatory\] : **attachment** (type: File) → File attachments; **requestJson** (type: Text) → Email API JSON payload.

### Body

*   attachment - You can add multiple attachments by adding them to the body. For example:

```
attachment: filename.pdf
attachment: filename1.pdf
attachment: filename2.pdf
```  

*   requestJson - Email API JSON Payload. For example, to go the [Sample Request](#sample-request).

When attachments are added to an email, the **priority** must be set to **true** since the attachments do not get stored on the server.

### Sample Request

```
{
  "emailServiceRequest" : {
    "emails" : {
      "email" : {
        "recipients" : {
          "recipient" : [ 
           {
            "emailId" : "aron.hale@hcl.com",
            "type" : "TO"
          },
          {
            "emailId" : "mark.kobar@gmail.com",
            "type" : "CC"
          }]
        },
        "copyTo" : "",
        "senderName" : "Divyanath",
        "subject" : "This is the subject",
        "content" : "This is the content.",
        "priority" : "true",
        "startTimeStamp" : 0,
        "endTimeStamp" : 0,
        "attachmentURLs" :{
          "attachmentURL" : [
          {
              "fileURL" : "https://file-examples.com/wp-content/uploads/2017/10/file-example_PDF_1MB.pdf",
              "fileName" : "attachment1"
          },
          {
              "fileURL" : "https://file-examples.com/wp-content/uploads/2017/02/file-sample_100kB.doc",
              "fileName" : "attachment2"
          }]
        }
      }
    }
  }
}
```

### Common Sample Response

```
{
"id" : "7696229420545333674",
"message" : "Request Queued."
} 
```

Response for an email sent using an invalid **templateID**,

```
{
"id" : "-1",
"message" : "Invalid TemplateId"
}
```

### Common Response Status Table

  
| Code | Description |
| --- | --- |
| Status 200 | Request queued. |
| Status 400 | xxxx is an invalid email address. No active audience members found. Recipient type is required. Mandatory parameters not filled. Subject and content are mandatory. File type of one or more attachments is not supported. Supported types are pdf,xls,xlsx,csv,txt,doc,docx,ppt,pptx,pps,zip,rar,tar,gzip,log,jpeg,jpg,png. Size of attachment ##FILE\_NAME## exceeds the configured file size of 10.0 MB. Total size of the attachments exceed the configured max size of 10.0 MB (after base64 encoding). A base64 encoded file is generally 1.4 times. No. of attachments cannot be more than 4. File Not Found. Exception during processing of email attachment(s). |
| Status 401 | Unauthorized request. |
| Status 500 | Server failure to process request. |
