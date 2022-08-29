                           


Get Voice SMS Configuration Details
===================================

The **Get Voice SMS Config Details** API returns the current Voice SMS configuration details.

URL
---

```
http://<<host>>:<<port>>/vpns/api/v1/voiceconfig
```

This API implements Gateway Filter for Authentication/Basic Authentication to authenticate access of the service by a user.

Method
------

GET

Output Parameters
-----------------

The following fields are output parameters:

### Twilio and Nexmo

  
| Output Parameter | Level-Two | Required | Type | Description |
| --- | --- | --- | --- | --- |
| protocol |   | Yes | string | A protocol about a standard method used at each end of a communication channel. You must use a mail client to access a mail server. The mail client and mail server can exchange information with each other using protocols. HTTP is the standard input for this field. |
| provider |   | Yes | string | SMS service provider, for example: Twilio. |
| inboundSecurityEnabled |   | Yes | boolean | Must always be set to **false**. To enable inbound security option. If Enable Inbound Security option is enabled, then all inbound SMS request are validated to check, if the request is from a valid source |
| properties |   | Yes |   | An array of SMS provider properties |
|   | key - value pair (User Authentication) | Yes | NA | The key value pair for user authentication. For **Twilio**, it is account SID and auth token.For **Nexmo**, it is App ID and Public & Private Key. |
|   | key - value pair (From) | Yes | NA | The phone number or client identifier that initiated the call. |
|   | key - value pair (host URL) | Yes | String | Based on the selected provider, the Host URL is set. |
|   | key - value pair (twiMLURL) For **Twilio** only. | Yes | String | Twilio provides you a TwiMLURL for your Voice enabled Twilio account. Enter this URL provided by Twilio in this field. For more information refer to, [TwiML docs](https://www.twilio.com/docs/voice/twiml/say). |
|   | key - value pair (Header Content Type) | Yes | String | Based on the selected provider, this field is set with the header content type as `application/xwww-formurlencoded` or `application/json`. The application/xwww- formurlencoded is the contenttype header for HTTP POST requests that browsers must support. This request sends a list of name/value pairs to the server.For **Twilio**, it is `application/xwww-formurlencoded`.For **Nexmo**, it is `application/json`. |
|   | key - value pair (Maximum Character Limit) | Yes | String | Maximum number of characters allowed in an SMS message. |
|   | key - value pair (Voice Type) For **Twilio** only. | Yes | String | For Twilio, from a given list of default voices you can select your choice of voice in which the message will be read out to the receiver. For example, Man, Woman, Alice, etc. |
|   | key - value pair (Language) For **Twilio** only. | Yes | String | For Twilio, from a given list of default languages and locales you can select the language and dialect in which the message should be read out to the receiver. For example, en-US, etc. |
|   | key - value pair (Voice Name) For **Nexmo** only. | Yes | String | For Nexmo from a list of voice and locales, you can select your choice of voice, language, and locales in which the message will be read out to the receiver. For example, Mizuki (Japan Japanese), Amy (United Kingdom English), etc. |
|   | key - value pair (Message Repeat Times) | Yes | String | Choose the number of times the same message should be repeated to the receiver. You can choose any number of repetitions from 1 to 5. |

Sample Response Payload
-----------------------

### TWILIO

The following is a sample response payload for Twilio.

```
{
  "protocol" : "HTTP",
  "inboundSecurityEnabled" : false,
  "provider" : "TWILIO_VOICE",
  "properties" : [ {
    "key" : "Account SID",
    "value" : "xxxx"
  }, {
    "key" : "Auth Token",
    "value" : "xxx"
  }, {
    "key" : "From",
    "value" : "xxxx"
  }, {
    "key" : "Host URL",
    "value" : "https://api.twilio.com/2010-04-01/Accounts/##AccountSid##/Calls.json"
  }, {
    "key" : "TwiML URL",
    "value" : "http://xxxx.com/echo"
  }, {
    "key" : "Header Content Type",
    "value" : "application/x-www-form-urlencoded"
  }, {
    "key" : "Maximum Character Limit",
    "value" : "200"
  }, {
    "key" : "Voice Type",
    "value" : "alice"
  }, {
    "key" : "Language",
    "value" : "en-US"
  }, {
    "key" : "Message Repeat Times",
    "value" : "1"
  } ]
}

```

### NEXMO

The following is a sample response payload for Nexmo.

```
{
  "protocol" : "HTTP",
  "inboundSecurityEnabled" : false,
  "provider" : "NEXMO_VOICE",
  "properties" : [ {
    "key" : "App Id",
    "value" : "70465ff7-41db-43c7-8448-2ca0404cf1a7"
  }, {
    "key" : "Private Key",
    "value" : "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCB "
  }, {
    "key" : "From",
    "value" : "+919133285464"
  }, {
    "key" : "Host URL",
    "value" : "https://api.nexmo.com/v1/calls"
  }, {
    "key" : "Header Content Type",
    "value" : "application/json"
  }, {
    "key" : "Maximum Character Limit",
    "value" : "500"
  }, {
    "key" : "Voice Name",
    "value" : "Amy"
  }, {
    "key" : "Message Repeat Times",
    "value" : "1"
  } ]
}

```

Response Status
---------------

The following table displays the standard status response messages:

  
| Code | Description |
| --- | --- |
| Status 200 | Successfully shows the SMS config details |
| Status 400 | Invalid request format |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |
