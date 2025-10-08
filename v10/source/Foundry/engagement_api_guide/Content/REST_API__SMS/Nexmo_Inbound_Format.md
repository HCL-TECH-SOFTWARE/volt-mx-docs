                           

Nexmo Inbound Format
====================

The **Nexmo Inbound Format** API defines the inbound message format.

Use Case
--------

You need to set up an inbound message format that you can use to send inbound messages.The request parameters are sent via POST method to your Callback URL and Nexmo expects response 200 OK.

You can get details of an inbound number through **Miscellaneous** > **Settings** > **SMS Configuration** > **Inbound Settings**.

URL
---

The HTTP URL for Nexmo Inbound Format service is:

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
| msisdn | int | Sender ID |
| messageId | alphanumeric | Nexmo Message ID |
| text | string | Inbound message body |
| timestamp | timestamp | Time (UTC) when Nexmo started to push the message to your callback URL in the following format YYYY-MM-DD HH:MM:SS e.g. 2012-04-05 09:22:57 |
| keyword | string | First word in the message body, typically used with short codes |

Sample Request Payload
----------------------

### JSON Schema for Payload

The following request payload displays the request parameters used in NEXMO inbound format.

```
msisdn=919676026708&to=46769432710&messageId=0300000068593BA7&text=Nexmo+test+302+2-5-2015&type=text&keyword=NEXMO&message-timestamp=2015-02-05+09%3A29%3A33
```

Sample Response Payload
-----------------------

### JSON Schema for Payload

The following sample response payload displays the standard response status message.

```


{

   "message" : "Request Queued",

   "id" : "123456789123456789"

}


```

Response Status
---------------

The following table displays the standard status response messages:.

  
| Code | Description |
| --- | --- |
| Status 200 | Always |
