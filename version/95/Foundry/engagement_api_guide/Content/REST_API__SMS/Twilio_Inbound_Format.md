                           

Twilio Inbound Format
=====================

Use Case
--------

URL
---

```
http://<<host>>:<<port>>/api/v1/messages/sms/inbound/provider
```

Method
------

POST

Input Parameters
----------------

The request parameters sent via a POST to URL include the following parameters.

  
| Parameter | Type | Value |
| --- | --- | --- |
| ToCountry | string |   |
| ToState | string |   |
| SmsMessageSid | string |   |
| FromZip |   |   |
| keyword | string |   |

Sample Request Payload
----------------------

### JSON Schema for Payload

The following request payload displays the request parameters used in TWILIO inbound format.

```
ToCountry=US&ToState=AZ&SmsMessageSid=SM4039741cca72c8ff47c7cd4c74ee9930&NumMedia=0&ToCity=&FromZip=&SmsSid=SM4039741cca72c8ff47c7cd4c74ee9930&FromState=Andhra+Pradesh&SmsStatus=received&FromCity=&Body=test&FromCountry=IN&To=%2B14803970203&ToZip=&MessageSid=SM4039741cca72c8ff47c7cd4c74ee9930&AccountSid=AC0a5231340df6e216fb19549482ea3c91&From=%2B919703204770&ApiVersion=2010-04-01
```

Sample Response Payload
-----------------------

### JSON Schema for Payload

The following sample response payload displays the current status of the inbound message with assigned unique ID.

```


{

    "message" : "Request Queued",

    "id" : "123456789123456789"

}


```

Response Status
---------------

The following table displays the standard status respons emessages:

  
| Code | Description |
| --- | --- |
| Status 200 | Always |
