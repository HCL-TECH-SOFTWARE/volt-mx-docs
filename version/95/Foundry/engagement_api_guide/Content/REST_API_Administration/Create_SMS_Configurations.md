
# Create SMS Configurations

The **Create SMS Configuration** API configures SMS settings.

## URL

The HTTP URL for Create SMS Configuration API is:

```
http://<<host>>:<<port>>/api/v1/smsconfig
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter        | Level – Two                                              | Required                                        | Type         | Description                                                                                                                                                                                                                                                                                                                                        |
| ---------------------- | -------------------------------------------------------- | ----------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| provider               |                                                          | Yes                                             | string       | SMS service providers: TWILIO, NEXMO, and CLICKATELL                                                                                                                                                                                                                                                                                               |
| inboundSecurityEnabled |                                                          | Optional                                        | boolean      | if inbound security option is enabled or not. If Enable Inbound Security option is enabled, then all inbound SMS request are validated to check, if the request is from a valid source. For TWILIO, a header that TWILIO sends validates SMS requests.For CLICKATELL or NEXMO, SMS requests are validated by the IP address of the request origin. |
| properties             |                                                          |                                                 |              | An array of service provider properties                                                                                                                                                                                                                                                                                                            |
|                        | key - value pair (user authentication)                   | Yes                                             |              | The key value pair for user authentication. For Nexmo, it is API Key and API Secret. For ClickaTell, it is user name and password. For Twilio, it is account SID and auth token.                                                                                                                                                                   |
|                        | key - value pair (From)                                  | For Twilio , Nexmo:Yes For Clickatell: Optional | NA           | The phone number or client identifier that initiated the call. Phone numbers are formatted with a + sign and a country code, such as +91xxxxxxxxxx                                                                                                                                                                                                 |
|                        | key - value pair (Header Content Type)                   | Yes                                             | URL          | Based on a selected provider, this field is set with the header content type as application/x-www-form-urlencoded. The application/x-www-form-urlencoded is the content-type headers for HTTP POST requests that browsers must support. This request sends a list of name/value pairs to the server                                                |
|                        | key - value pair (Maximum Character Limit)               | Yes                                             | int          | Maximum number of characters allowed in a SMS message                                                                                                                                                                                                                                                                                              |
|                        | key - value pair (API ID)                                | Yes                                             | alphanumeric | Applicable for Clickatell only                                                                                                                                                                                                                                                                                                                     |
|                        | key - value pair (inboundWhitelistIPs)                   | Optional                                        |              | A list of inbound white list IPs. For White listing IPs, load balance or reverse proxy server IP must also be white listed                                                                                                                                                                                                                         |
|                        | key - value pair (Mobile Originated) For Clickatell only |                                                 |              | For Clickatell, if inbound SMS is enabled, this parameter should be set to 1 to enable the reply for a message. This parameter when set to 1 will enable Clickatell to use a specific carrier to deliver the message. This can be left blank, if two way messaging is not enabled for the account.                                                 |

## Sample Request

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

## Sample Response

```
{
"id" : "",
"message" : "Details added successfully"
}
```

## Response Status

| Code       | Description                                                      |
| ---------- | ---------------------------------------------------------------- |
| Status 200 | Details added successfully                                       |
| Status 400 | Unable to connect to the SMS provider with the given credentials |
| Status 401 | Unauthorized request                                             |
| Status 500 | Server failure to process request                                |
