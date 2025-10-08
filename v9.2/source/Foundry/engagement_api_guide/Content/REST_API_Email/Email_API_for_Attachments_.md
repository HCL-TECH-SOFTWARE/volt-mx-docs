                           

Sending Attachments using Email API
===================================

The Engagement Server supports sending **Attachments using the Email API**. It accepts an email with multiple attachments and sends email messages to the users.

URL
---

The HTTP URL for **Email API with Attachments** API is:

```
http://<host or ip>:<port>/api/v1/message/email
```

Method
------

POST

Header
------

The payload's request header includes:

*   Content-Type \[Optional\]: multipart/form-data
*   Form Data Keys \[Mandatory\] : **attachment** (type: File) → File attachments; **requestJson** (type: Text) → Email API JSON payload.

Body
----

*   attachment - You can add multiple attachments by adding them to the body. For example:
```
attachment: filename.pdf
attachment : filename1.pdf
attachment : filename2.pdf
```*   requestJson - Email API JSON Payload. For example, to go the [Sample Request](#sample-request).

Input Parameters
----------------

The following fields are input parameters:

  
| Input Parameter | Level – Two | Level – Three | Level – Four | Level - Five | Level - Six | Required | Type | Description |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| emailServiceRequest |   |   |   |   |   |   |   | An array of emailServiceRequest objects |
|   | emails |   |   |   |   |   |   | An array of multiple email objects |
|   |   | email |   |   |   |   |   | An array of email objects |
|   |   |   | recipients |   |   | emailId(Required / Optional if **id** is given) type(Required) id(Required / Optional if **emailId** is given) |   | An array of recipients objects:emailId (User email ID)type (Email recipients such as To, CC and BCC)id (Unique ID assigned to an audience member) |
|   |   |   | copyTo |   |   | Optional | String | If you want to send the email message to other recipient users, then provide the email IDs. |
|   |   |   | senderEmail |   |   | Optional | String | When sending emails, the default sender email ID is used. For example, aron.hale@gmail.com. |
|   |   |   | senderName |   |   | Optional | String | Name of the user who sends an email |
|   |   |   | templateId |   |   | Optional | String | Template ID, can be obtained from [Get Templates by Pagination](../REST_API_Email_Template/Get_Email_Templates_By_Pagination.md). |
|   |   |   | subject |   |   | Required/Optional if **templateId** is provided | String | Email subject |
|   |   |   | content |   |   | Required/Optional if **templateId** is provided | String | Email message details |
|   |   |   | priority |   |   | Required | boolean | The priority must be set to "true" to enable sending attachments. |
|   |   |   | startTimeStamp |   |   | Optional | String | Time relative to a starting point |
|   |   |   | endTimeStamp |   |   | Optional | String | Time relative to an ending point |
|   |   |   | attachmenURLs |   |   |   |   | An array of multiple attachmentURL objects. |
|   |   |   |   | attachementURL |   |   |   | An array of attachmentURL objects. |
|   |   |   |   |   | fileURL | Required | String | URL of the attachment. |
|   |   |   |   |   | fileName | Optional | String | Name of the file attached. |

> **_Note:_** When attachments are added to an email, the **priority** must be set to **true** since the attachments do not get stored on the server.

> **_Note:_** If in an email payload you provide the templateId, subject, and content, the engagement server will give preference to the template ID.

Sample Request
--------------

```
{
  "emailServiceRequest" : {
    "emails" : {
      "email" : {
        "recipients" : {
          "recipient" : [ 
           {
            "emailId" : "div.d@hcl.com",
            "type" : "TO"
          },
          {
            "emailId" : "div.d@gmail.com",
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

Sample Response
---------------

```
{
"id" : "7696229420545333674",
"message" : "Request Queued."
} 
```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Request queued. |
| Status 400 | xxxx is an invalid email address. No active audience members found. Recipient type is required. Mandatory parameters not filled. Subject and content are mandatory. File type of one or more attachments is not supported. Supported types are pdf,xls,xlsx,csv,txt,doc,docx,ppt,pptx,pps,zip,rar,tar,gzip,log,jpeg,jpg,png. Size of attachment ##FILE\_NAME## exceeds the configured file size of 10.0 MB. Total size of the attachments exceed the configured max size of 10.0 MB (after base64 encoding). No. of attachments cannot be more than 4. File Not Found. Exception during processing of email attachment(s). |
| Status 401 | Unauthorized request. |
| Status 500 | Server failure to process request. |
