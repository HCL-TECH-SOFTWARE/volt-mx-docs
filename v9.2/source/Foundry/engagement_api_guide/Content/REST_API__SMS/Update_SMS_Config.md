                           


Update SMS Config
=================

With the **Update SMS Config** API, you can update the SMS configuration details in Engagement Services.

> **_Note:_** Volt MX Foundry Engagement Services supports HTTP and SMPP protocols for SMS distribution. We recommend using the HTTP protocol only as the SMPP protocol consumes significant resources on Engagement server. SMPP protocol is recommended only for a high volume of messaging. In a clustered environment, the provider cannot open as many sessions as the number of servers, so all the servers cannot take part in the message submission.  

URL
---

The HTTP URL for Update SMS Config API is:

```
http://<<host>>:<<port>>/api/v1/smsconfig
```

This service implements ‘Gateway Filter for Authentication’ to authenticate access of the service by a user.

Method
------

POST

Header
------

The payload's request header includes Content-Type as application/json;charset=UTF-8.

Input Parameters
----------------

The following fields are input parameters:

### TWILIO, NEXMO, and CLICKATELL

  
| Input Parameter | Level – Two | Required | Type | Description |
| --- | --- | --- | --- | --- |
| provider |   | Yes | string | SMS service providers: TWILIO, NEXMO, and CLICKATELL |
| inboundSecurityEnabled |   | Optional | boolean | Use to enable the inbound security option. If Enable Inbound Security option is enabled, then all inbound SMS request are validated to check, if the request is from a valid source. For TWILIO, a header that TWILIO sends validates SMS requests. For CLICKATELL or NEXMO, SMS requests are validated by the IP address of the request origin. |
| inboundEnabled For Clickatell |   | Optional | boolean | Use to enable inbound option. If Enable Inbound option is enabled, then all inbound SMS request are allowed. |
| properties |   |   |   | An array of service provider properties |
|   | key - value pair (user authentication) | Yes |   | The key value pair for user authentication. For Nexmo, it is API Key and API Secret. For ClickaTell, it is user name and password. For Twilio, it is account SID and auth token. |
|   | key - value pair (From) | For Twilio , Nexmo:Yes For Clickatell: Optional | NA | The phone number or client identifier that initiated the call. Phone numbers are formatted with a + sign and a country code, such as +91xxxxxxxxxx |
|   | key - value pair (Header Content Type) | Yes | URL | Based on a selected provider, this field is set with the header content type as application/x-www-form-urlencoded. The application/x-www-form-urlencoded is the content-type headers for HTTP POST requests that browsers must support. This request sends a list of name/value pairs to the server |
|   | key - value pair (Maximum Character Limit) | Yes | long | Maximum number of characters allowed in an SMS message |
|   | key - value pair (API ID) | Yes | alphanumeric | Applicable for Clickatell only |
|   | key - value pair (inboundWhitelistIPs) | Optional |   | A list of inbound white list IPs. For White listing IPs, load balance or reverse proxy server IP must also be white listed |
|   | key - value pair (Mobile Originated) For Clickatell only | Yes |   | For Clickatell, if inbound SMS is enabled, this parameter should be set to 1 to enable the reply for a message. This parameter when set to 1 will enable Clickatell to use a specific carrier to deliver the message. This can be left blank, if two way messaging is not enabled for the account. |

### SALESFORCE

  
| Output Parameter | Level-Two | Type | Description |
| --- | --- | --- | --- |
| protocol |   | string | A protocol about a standard method used at each end of a communication channel. You must use a mail client to access a mail server. The mail client and mail server can exchange information with each other using protocols. For example, SMTP and SMTPS protocols are used to access emails. Similarly, HTTP and SMPP protocols are used to access SMS. Enter HTTP. |
| provider |   | string | SMS service provider. Enter SALESFORCE. |
| inboundSecurityEnabled |   | boolean | Use to enable inbound security option. If Enable Inbound Security option is enabled, then all inbound SMS requests are validated to check if the requests are from a valid source. |
| inboundEnabled |   | boolean(Optional) | Use to enable inbound option. If Enable Inbound option is enabled, then all inbound SMS request are allowed. |
| properties |   |   | An array of SMS provider properties |
|   | key - value pair (Client ID) | string | The key value pair for user authentication. Enter the Client ID provided by your Salesforce account. |
|   | key - value pair (Client Secret) | string | The key value pair for user authentication. Enter the Client Secret provided by your Salesforce account. |
|   | key - value pair (subdomain) | string | Enter the Subdomain provided by Salesforce in this field. https://<subdomain>.rest.marketingcloudapis.com/ |
|   | key - value pair (Auth Type) | string | Choose the authentication type. There are two options: oauth2 and oauthlegacy. |
|   | key - value pair (Auth Host URL) | string | Based on the selected Auth Type, the Auth Host URL is set. |
|   | key - value pair (API Key) | string | Enter the API Key provided by Salesforce in this field. |
|   | key - value pair (host URL) | string | Based on the selected provider, the Host URL is set. |
|   | key - value pair (Allow Subscribe) | string | To allow a new subscription to be created on your Salesforce account, set this value to true. |
|   | key - value pair (Allow Resubscribe) | string | To allow an existing subscription to be reactivated on your Salesforce account, set this value to true. |
|   | key - value pair (Keyword) | string | Based on the **Keyword** given for the selected app in the Salesforce Marketing Cloud Account. The default value is **JOIN**. |
|   | key - value pair (Header Content Type) | string | This field is set with the header content type as application/json. The application/json is the content-type headers for HTTP POST requests that browsers must support. This request sends a list of name/value pairs to the server. |
|   | key - value pair (Maximum Character Limit) | string | Maximum number of characters allowed in an SMS message. |

Sample Request
--------------

### NEXMO

```
{
	"provider": "NEXMO",
	"inboundSecurityEnabled": "true",
	"properties": [{
		"key": "API Key",
		"value": "qAsds23"
	}, {
		"key": "API Secret",
		"value": "zAew123_aPd"
	}, {
		"key": "From",
		"value": "wZdfws"
	}, {
		"key": "Header Content Type",
		"value": "application/x-www-form-urlencoded"
	}, {
		"key": "Maximum Character Limit",
		"value": "140"
	}, {
		"key": "inboundWhitelistIPs",
		"value": "1-255.1-255.1-255.1-255"
	}]
}
```

### CLICKATELL

```
{
	"provider": "CLICKATELL",
	"inboundEnabled": "true",
	"inboundSecurityEnabled": "true",
	"protocol": "HTTP",

	"properties": [

		{
			"key": "User Name",
			"value": "krishna"
		}, {
			"key": "Password",
			"value": "68038de1743b7e51714f140f16237ad3"

		}, {
			"key": "From",
			"value": "+13478481875"

		}, {
			"key": "Header Content Type",
			"value": "application/x-www-form-urlencoded"
		}, {
			"key": "Maximum Character Limit",
			"value": "140"
		}, {
			"key": "API ID",
			"value": "qWxds"
		}, {
			"key": "inboundWhitelistIPs",
			"value": "1-255.1-255.1-255.1-255"
		}, {
			"key": "Mobile Originated",
			"value": "200"
		}

	]
}
```

### TWILIO

```
{
	"provider": "TWILIO",
	"inboundSecurityEnabled": "true",

	"properties": [{
			"key": "Account SID",
			"value": "qAsds23"
		}, {
			"key": "Auth Token",
			"value": "zAew123_aPd"
		},

		{
			"key": "Header Content Type",
			"value": "application/x-www-form-urlencoded"
		}, {
			"key": "Maximum Character Limit",
			"value": "140"
		},

		{
			"key": "From",
			"value": "+9090293240"
		}

	]
}
```

### SALESFORCE

```
{
    "provider": "SALESFORCE",
    "inboundEnabled": false,
    "inboundSecurityEnabled": false,
    "properties": [{
            "key": "Client Id",
            "value": "9z3lurtcdzsenvkksmq1w9i4"
        },
        {
            "key": "Client Secret",
            "value": "ToM4fPmYESN9fGpanKwY4ImY"
        },
        {
            "key": "Subdomain",
            "value": "mc5c4kbhbldhw7snl86rfc6q16j4"
        },
        {
            "key": "Auth Type",
            "value": "oauth2"
        },
        {
            "key": "Auth Host URL",
            "value": "https://##Subdomain##.auth.marketingcloudapis.com/v2/token"
        },
        {
            "key": "API Key",
            "value": "Mjo3ODow"
        },
        {
            "key": "Auth Host URL",
            "value": "https://##Subdomain##.auth.marketingcloudapis.com/v2/token"
        },
        {
            "key": "Keyword",
            "value": "JOIN"
        },
        {
            "key": "Allow Subscribe",
            "value": "false"
        },
        {
            "key": "Allow Resubscribe",
            "value": "false"
        },
        {
            "key": "Header Content Type",
            "value": "application/json"
        },
        {
            "key": "Maximum Character Limit",
            "value": "150"
        }
    ]
}

```

Sample Response
---------------

```
{
"message" : "Details updated successfully",
"id" : 
}
```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Details updated successfully. |
| Status 400 | Unable to connect to the SMS provider with the given credentials. Value is required for mobile originated. Invalid keys provided. |
| Status 401 | Unauthorized request. |
| Status 500 | Server failure to process request. |

> **_Note:_** When the SMPP protocol is used, Engagement Services validates the details. Engagement Services establishes a test connection to the gateway by sending the BIND\_TRANSCIEVER command. Unless Engagement Services establishes the SMPP session successfully with the gateway, you cannot update the configuration.

> **_Note:_**  
• Engagement Services supports SMPP 3.4 protocol.  
• Engagement Services uses BIND\_TRANSCIEVER command to establish a SMPP session with the gateway.  
• Engagement Services maintains persistent socket connection with the gateway. To keep the  session alive, Engagement Services periodically sends ENQUIRE\_LINK command to the gateway.  
 Engagement Services sends the SUBMIT\_SM command asynchronously which means, it does not wait for the response before sending the next request.
