                           


Fetch SMS Status
================

The **Fetch SMS Status** API accepts the request ID, audience ID and mobile number as input parameters and fetches the current SMS status.

> **_Note:_** This API will fetch the SMS status for both Text as well as Voice SMS.

URL
---

The HTTP URL for Fetch SMS Status API is:

```
http://<hostname/ip>:<port>/vpns/api/v1/status/sms
```

This API implements Gateway Filter for Authentication to authenticate access of the API by a user.

Method
------

POST

Header
------

The payload's request header includes Content-Type as application/json;charset=UTF-8.

Input Parameters
----------------

The following fields are input parameters:

  
| Input Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| requestId | Optional | string | Request ID is generated as a SMS message response |
| audienceId | Optional | string | User reference ID |
| mobileNumber | Optional | string | Mobile number of the user |
| sentDate | Optional | string | The date on which the SMS message was sent |
| endDate | Optional | string | The date on which the SMS message ends |
| startElement | Optional | string | Start index of the element |
| elementsPerPage | Optional | string | Number of elements for a page |

Sample Request
--------------

```
{
 "requestId": "7058003863786749784",
 "audienceId": "1",
 "mobileNumber": "+919848022331",
 "sentDate": "mm/dd/yyyy",
 "endDate": "mm/dd/yyyy",
 "startElement": "0",
 "elementsPerPage": "20"
}
```

Output Parameters
-----------------

The following fields are output parameters:

  
| Output Parameter | Level-Two | Type | Description |
| --- | --- | --- | --- |
| submitted |   | string | The current message status as submitted |
| initial |   | string | The current message status as initial |
| rejected |   | string | The current message status as rejected |
| opened |   | string | The current message status as opened |
| not attempted |   | string | The current message status as not attempted |
| undelivered |   | string | The current message status as undelivered |
| cancelled |   | string | The current message status as cancelled |
| total |   | long | Total number of SMS sent |
| messages |   |   | An array of messages objects |
|   | sentDate | string | The date on which the SMS message was sent |
|   | smsId | long | SMS message ID |
|   | lastActivityDate | string | The date on which the SMS was last active |
|   | mobileNumber | string | Mobile number of the user |
|   | requestId | long | Unique ID assigned to a SMS |
|   | audienceId | long | Unique ID assigned to a user |
|   | statusMessage | string | The current SMS message status as initial, rejected, opened, not attempted, undelivered, or cancelled |
|   | status | string | Current SMS message status text |

Sample Response
---------------

```
{
 "submitted": 1,
 "initial": 1,
 "rejected": 0,
 "opened": 0,
 "not attempted": 0,
 "undelivered": 0,
 "cancelled": 0,
 "total": 2,
 "messages": [{
  "sentDate": "1473315673830",
  "smsId": "6407522544573374439",
  "lastActivityDate": "1473315673830",
  "mobileNumber": "+218899776642",
  "requestId": "6407522544467702398",
  "audienceId": "1",
  "statusMessage": "SMS request sent to TWILIO Gateway",
  "status": "Submitted"
 }, {
  "sentDate": "1473315673830",
  "smsId": "5139578893093515164",
  "lastActivityDate": "1473315673830",
  "mobileNumber": "+218899776642",
  "requestId": "5139578892823687076",
  "audienceId": "1",
  "statusMessage": "Initial",
  "status": "Initial"
 }]
}
```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | List of SMS(s) status messages in JSON format |
| Status 400 | Request ID should not contain alphabets or special charactersThe Request Contains Invalid keysPlease provide sent date |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |
