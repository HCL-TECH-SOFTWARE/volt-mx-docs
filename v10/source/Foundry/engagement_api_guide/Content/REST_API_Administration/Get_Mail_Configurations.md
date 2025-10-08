
# Get Mail Configurations

The **Get Mail Configuration** API fetches the configured mail details.

## URL

The HTTP URL for Get Mail Configurations API is:

```
http://<<host>>:<<port>>/api/v1/mailconfig
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

GET

## Output Parameters

| Output Parameter                  | Level-Two   | Type    | Description                                                                                                                                                                                                                                    |
| --------------------------------- | ----------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| protocol                          |             | string  | A protocol about a standard method used at each end of a communication channel. You must use a mail client to access a mail server. The mail client and mail server can exchange information with each other using a protocols.like SMTP/SMTPS |
| port                              |             | long    | Port is an endpoint of communication. Port is always associated with an IP address of a host and the protocol type of the communication                                                                                                        |
| defaultSenderId                   |             | string  | Email ID of the sender                                                                                                                                                                                                                         |
| securityMode                      |             | string  | The security protocols. For example, The Transport Layer Security (TLS) protocol, and Secure Sockets Layer (SSL) protocol                                                                                                                      |
| host                              |             | string  | Host is like a store (a website) on a server so that it can be accessed over the Internet, for example: localhost                                                                                                                              |
| authRequired                      |             | boolean | If user authentication is required or not                                                                                                                                                                                                      |
| authUser                          |             | string  | Credentials to access the system                                                                                                                                                                                                               |
| authPwd                           |             | string  | Authentication password, It is in combination with authUser                                                                                                                                                                                    |
| unsubscribeAllowed                |             | boolean | Specifies whether the user can unsubscribe from emails.                                                                                                                                                                                        |
| supportedAttachmentFileTypes      |             | String  | The attachment file types supported by the SMTP service provider. By default, the types of attachments allowed are: .pdf, .xls, .xlsx, .csv, .txt, .doc, .docx, .ppt, .pptx, .pps, .zip, .rar, .tar, .gzip, .log, .jpeg, .jpg, .png.           |
| maxSizeOfIndividualAttachmentInMB |             | double  | This configuration restricts the max size of any attachment in the email. By default, the size of an attachment in the email should not exceed 10MB.                                                                                           |
| maxSizeOfAllAttachmentsInMB       |             | double  | This is the maximum size of the Email message including attachments and content (after base64 encoding), supported by your SMTP service provider. By default, the total size of attachments in the email should not exceed 10MB.               |
| maxNumberOfAttachments            |             | integer | This configuration restricts the max no. of attachments that can be sent in the email. By default, the maximum number of attachments that can be sent in an email is set to 4.                                                                 |
| customProps                       |             |         | An array of custom properties                                                                                                                                                                                                                  |
|                                   | configKey   | string  | Key value pair                                                                                                                                                                                                                                 |
|                                   | configValue | string  | Key value pair                                                                                                                                                                                                                                 |

## Sample Response

```
{
"protocol": "SMTP",
"port": 10025,
"defaultSenderId": "vmsmaildemo@voltmx.com",
"securityMode": "",
"host": "vpnsqa.kitspl.com",
"authRequired": false,
"authUser": "",
"authPwd": "",
"unsubcribeAllowed": true,
"supportedAttachmentFileTypes": "pdf,xls,xlsx,csv,txt,doc,docx,ppt,pptx,pps,zip,rar,tar,gzip,log,jpeg,jpg,png",
"maxSizeOfIndividualAttachmentInMB": 10.0,
"maxSizeOfAllAttachmentsInMB": 10.0,
"maxNumberOfAttachments": 4,
"customProps": [{
"configKey": "mail.smtp.ehlo",
"configValue": "true"
}]
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Array of mail configurations      |
| Status 400 | Bad request                       |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
