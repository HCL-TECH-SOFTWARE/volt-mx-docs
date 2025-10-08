                           


Get SMS Config
==============

The **Get SMS Config** API returns the current SMS configuration details.

URL
---

The HTTP URL for the Get SMS Config API is:

```
http://<<host>>:<<port>>/api/v1/smsconfig
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

Method
------

GET

Output Parameters
-----------------

The following fields are output parameters:

### TWILIO, NEXMO, and CLICKATELL

  
| Output Parameter | Level-Two | Type | Description |
| --- | --- | --- | --- |
| protocol |   | string | A protocol about a standard method used at each end of a communication channel. You must use a mail client to access a mail server. The mail client and mail server can exchange information with each other using protocols. For example, SMTP and SMTPS protocols are used to access emails. Similarly, HTTP and SMPP protocols are used to access SMS. |
| provider |   | string | SMS service provider, for example: Nexmo |
| inboundSecurityEnabled |   | boolean | To enable inbound security option. If Enable Inbound Security option is enabled, then all inbound SMS request are validated to check, if the request is from a valid source |
| properties |   |   | An array of SMS provider properties |
|   | key - value pair (user authentication) | NA | The key value pair for user authentication. For Nexmo, it is API Key and API Secret. For ClickaTell, it is user name and password. For Twilio, it is account SID and auth token |
|   | key - value pair (From) | NA | The phone number or client identifier that initiated the call. |
|   | key - value pair (host URL) | URL | Based on the selected provider, the Host URL is set. |
|   | key - value pair (Header Content Type) | string | Based on the selected provider, this field is set with the header content type as application/xwww- formurlencoded. The application/xwww- formurlencoded is the contenttype headers for HTTP POST requests that browsers must support. This request sends a list of name/value pairs to the server |
|   | key - value pair (Maximum Character Limit) | long | Maximum number of characters allowed in an SMS message |
|   | key - value pair (port) For Nexmo only. | String | For Nexmo a port is to be set. |
|   | key - value pair (inboundWhitelistIPs) For Nexmo only. | String | For Nexmo a list of inbound white list IPs. For White listing IPs, load balance or reverse proxy server IP must also be white listed. |

### SALESFORCE

  
| Output Parameter | Level-Two | Type | Description |
| --- | --- | --- | --- |
| protocol |   | string | A protocol about a standard method used at each end of a communication channel. You must use a mail client to access a mail server. The mail client and mail server can exchange information with each other using protocols. For example, SMTP and SMTPS protocols are used to access emails. Similarly, HTTP and SMPP protocols are used to access SMS. Enter HTTP. |
| provider |   | string | SMS service provider. Enter SALESFORCE. |
| inboundSecurityEnabled |   | boolean | If inbound security is enabled or not. By default, it is set to false. |
| properties |   |   | An array of SMS provider properties |
|   | key - value pair (Client ID) | string | The key value pair for user authentication. Enter the Client ID provided by your Salesforce account. |
|   | key - value pair (Client Secret) | string | The key value pair for user authentication. Enter the Client Secret provided by your Salesforce account. |
|   | key - value pair (subdomain) | string | Enter the Subdomain provided by Salesforce in this field. https://<subdomain>.rest.marketingcloudapis.com/ |
|   | key - value pair (Auth Type) | string | Choose the authentication type. There are two options: oauth2 and oauthlegacy. |
|   | key - value pair (Auth Host URL) | string | Based on the selected Auth Type, the Auth Host URL is set. |
|   | key - value pair (API Key) | string | Enter the API Key provided by Salesforce in this field. |
|   | key - value pair (host URL) | string | Based on the selected provider, the Host URL is set. |
|   | key - value pair (Allow Subscribe) | string | To allow a new subscription to be created on your Salesforce account set this value to true. |
|   | key - value pair (Allow Resubscribe) | string | To allow an existing subscription to be reactivated on your Salesforce account set this value to true. |
|   | key - value pair (Keyword) | string | Based on Keyword given for the selected app in the Salesforce Marketing Cloud Account. The default value is JOIN. |
|   | key - value pair (Header Content Type) | string | This field is set with the header content type as application/json. The application/json is the contenttype headers for HTTP POST requests that browsers must support. This request sends a list of name/value pairs to the server. |
|   | key - value pair (Maximum Character Limit) | string | Maximum number of characters allowed in a SMS message. |

Sample Response
---------------

### TWILIO

```
{
	"protocol": "HTTP",
	"inboundSecurityEnabled": false,
	"provider": "TWILIO",
	"properties": [{
		"key": "Account SID",
		"value": "accsid"
	}, {
		"key": "Auth Token",
		"value": "auth123"
	}, {
		"key": "From",
		"value": "Hale"
	}, {
		"key": "Host URL",
		"value": "http://vpnsqa.kitspl.com:9090/SMSStub/smsStub?type=twilio"
	}, {
		"key": "Header Content Type",
		"value": "application/x-www-form-urlencoded"
	}, {
		"key": "Maximum Character Limit",
		"value": "140"
	}]
}
```

### NEXMO

```
{

	"protocol": "SMPP",
	"provider": "NEXMO",
	"inboundSecurityEnabled": "true",
	"properties": [{
		"key": "Account SID",
		"value": "smppclient1"
	}, {
		"key": "Secret Key",
		"value": "*******"

	}, {
		"key": "Sender ID",
		"value": "1234"
	}, {
		"key": "Host URL",
		"value": "localhost"
	}, {
		"key": "Maximum Character Limit",
		"value": "140"
	}, {
		"key": "Port",
		"value": "2775"
	}, {
		"key": "inboundWhitelistIPs",
		"value": "a1-a2.b1-b2.c1-c2.d1-d2,a3.b3.c3.d3"
	}]
}
```

### CLICKATELL

```
{
  "inboundSecurityEnabled": "false",
  "provider": "CLICKATELL",
  "inboundEnabled": "false",
  "properties": [
    {
      "value": "AC945045c1bec0cc8",
      "key": "User Name"
    },
    {
      "value": "ca35551c5b94f4a4",
      "key": "Password"
    },
    {
      "value": "46464644611",
      "key": "From"
    },
    {
      "value": "application/x-www-form-urlencoded",
      "key": "Header Content Type"
    },
    {
      "value": "150",
      "key": "Maximum Character Limit"
    },
    {
      "value": "AAABBBCCC",
      "key": "API ID"
    }
  ]
}

```

### SALESFORCE

```
{
    "protocol": "HTTP",
    "inboundSecurityEnabled": false,
    "provider": "SALESFORCE",
    "properties": [{
        "key": "Client Id",
        "value": "9z3lurtcdzsenvposmq1w9i4"
    }, {
        "key": "Client Secret",
        "value": "ToM4fPmYESN9fGpinKwY4ImY"
    }, {
        "key": "Subdomain",
        "value": "mc5c4kbhbldhw7sgl86rfc6q16j4"
    }, {
        "key": "Auth Type",
        "value": "oauth2"
    }, {
        "key": "Auth Host URL",
        "value": "https://##Subdomain##.auth.marketingcloudapis.com/v2/token"
    }, {
        "key": "API Key",
        "value": "Mjo3ODow"
    }, {
        "key": "Host URL",
        "value": "https://##Subdomain##.rest.marketingcloudapis.com/sms/v1/messageContact/##ApiKey##/send"
    }, {
        "key": "Allow Subscribe",
        "value": "false"
    }, {
        "key": "Allow Resubscribe",
        "value": "false"
    }, {
        "key": "Keyword",
        "value": "JOIN"
    }, {
        "key": "Header Content Type",
        "value": "application/json"
    }, {
        "key": "Maximum Character Limit",
        "value": "150"
    }]
}

```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Successfully shows the SMS config details |
| Status 400 | Invalid request format |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |
