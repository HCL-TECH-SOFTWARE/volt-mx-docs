
# Email API with Segments

The **Email API with Segments** accepts **audience ID** or **segment ID** as input parameters and sends email messages to users.

## URL

The HTTP URL for **Email API with Segments** is:

```
http://<host or ip>:<port>/api/v1/message/email
```

This service implements ‘Gateway Filter for Authentication’ to authenticate access of the service by a user.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter     | Level – Two | Level – Three | Level – Four   | Required                                                         | Type    | Description                                                                                                                                                                                |
| ------------------- | ----------- | ------------- | -------------- | ---------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| emailServiceRequest |             |               |                |                                                                  |         | An array of emailServiceRequest objects                                                                                                                                                    |
|                     | emails      |               |                |                                                                  |         | An array of emails objects                                                                                                                                                                 |
|                     |             | email         |                |                                                                  |         | An array of email objects                                                                                                                                                                  |
|                     |             |               | recipients     | segmentCriteria (Required) recipientType (Required) id(Required) | string  | An array of recipients objects: An array of segments objects: - recipientType (recipient type as TO, CC and BCC)- segmentCriteria (segment id) An array of recipient objects:-id (user ID) |
|                     |             |               | copyTo         | Optional                                                         | string  | If you want to send the email message to other recipients users, then provide the email IDs.                                                                                               |
|                     |             |               | senderEmail    | Optional                                                         | string  | Email ID of the sender.                                                                                                                                                                    |
|                     |             |               | senderName     | Optional                                                         | string  | Name of the sender                                                                                                                                                                         |
|                     |             |               | subject        | Required                                                         | string  | The place in email that describes what the email is about                                                                                                                                  |
|                     |             |               | content        | Required                                                         | string  | Email message string                                                                                                                                                                       |
|                     |             |               | priority       | Optional                                                         | boolean | If email delivery is a priority or not                                                                                                                                                     |
|                     |             |               | startTimeStamp | Optional                                                         | string  | Time relative to a starting point                                                                                                                                                          |
|                     |             |               | endTimeStamp   | Optional                                                         | stringt | Time relative to an ending point                                                                                                                                                           |

## Sample Request

### With Segment Criteria

```
{
"emailServiceRequest": {
"emails": {
"email": {
"copyTo": "",
"senderName": "VMS API Automation",
"startTimeStamp": "0",
"recipients": {
"recipient": [
{
"emailId": "MfUser511@VoltMX.com",
"type": "TO"
}
]
},
"subject": "mail subject",
"emailNamePairs": {
"key": [
{
"name": "test",
"content": "value for key-test"
}
]
},
"senderEmail": "vmsmaildemo@voltmx.com",
"endTimeStamp": "0",
"priority": "true",
"templateId": "9",
"content": "mail message"
}
}
}
}{
"emailServiceRequest": {
"emails": {
"email": {
"recipients": {
"segments": [
{
"recipientType": "TO",
"segmentCriteria": "##2##"
},
{
"recipientType": "CC",
"segmentCriteria": "##1##"
},
{
"recipientType": "BCC",
"segmentCriteria": "##4##"
}
],
"recipient": [
{
"id": "",
"type": "TO"
}
]
},
"copyTo": "aron.hale@voltmx.com",
"senderEmail": "aron.hale@voltmx.com",
"senderName": "Aron",
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
```
{
"emailServiceRequest": {
"emails": {
"email": {
"recipients": {
"segments": \[
{
"recipientType": "TO",
"segmentCriteria": "##2##"
},
{
"recipientType": "CC",
"segmentCriteria": "##1##"
},
{
"recipientType": "BCC",
"segmentCriteria": "##4##"
}
\],
"recipient": \[
{
"id": "",
"type": "TO"
}
\]
},
"copyTo": "aron.hale@voltmx.com",
"senderEmail": "aron.hale@voltmx.com",
"senderName": "Aron",
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

### With Receipent ID

```
{
"emailServiceRequest": {
"emails": {
"email": {
"recipients": {

    				"recipient": [{
    					"id": "2",
    					"type": "TO"
    				}]
    			},
    			"copyTo": "aron.hale@voltmx.com",
    			"senderEmail": "aron.hale@voltmx.com",
    			"senderName": "Aron",
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

## Sample Response

```
{
"id" : "7130402565596084278",
"message" : "Request Queued. "
}
```

## Response Status

| Code       | Description                                                                                                                                                                                                                                                                 |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Status 200 | Request queued                                                                                                                                                                                                                                                              |
| Status 400 | xxxx is an Invalid Email addressEither recipient list or segment criteria is allowed for the TO recipient type, not both Mandatory parameters not filled. Subject and content are mandatoryNo Active Audience Members foundRecipient type and segment criteria are required |
| Status 401 | Unauthorized request.                                                                                                                                                                                                                                                       |
| Status 500 | Server failure to process request                                                                                                                                                                                                                                           |
