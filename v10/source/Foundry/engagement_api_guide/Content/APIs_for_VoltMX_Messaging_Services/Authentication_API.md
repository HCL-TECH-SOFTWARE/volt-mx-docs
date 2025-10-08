                          


Authentication
==============

The Authentication section explains about how to authenticate yourself using the following authentication types:

*   [On Premises Authentication](#on-premises-authentication)
*   [Cloud Authentication](#cloud-authentication)

On Premises Authentication
--------------------------

On Premises authentication includes following sections:

*   [Database Authentication](#database-authentication)
*   [MBaaS Authentication](#mbaas-authentication)

### Database Authentication

The Database authentication mechanism is used with a standalone engagement server installation or an on-premise engagement server installation.

In this approach, the default admin/password created during the engagement server installation or the user IDs/passwords created by the admin are used to access the APIs.

Users will need to send user credentials in **Authorization** header for user validation at Volt MX Foundry Engagement server side.

The Authorization header is constructed as follows:

*   Username and password are combined into a string "username:password"
*   The resulting string is then encoded using the `RFC2045-MIME` variant of Base64, except not limited to 76 char/line
*   The authorization method and a space, such as **Basic <space> encoded string**.

For example, if the user agent uses _Aladdin_ as the username and _open sesame_ as the password, then the header is formed as given below:

```
Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==
```

### MBaaS Authentication

The MBaaS Authentication service is used to get Access Token and Access Secret to use Volt MX Foundry Engagement Services cloud services.

#### URL

The HTTP URL for MBaaS Authentication API is:

```
http://<host>:<port>/authService/accounts/login
```

#### Method

POST

#### Header

The payload's request header includes Content-Type as application/json;charset=UTF-8;charset=UTF-8.

#### Authorization

The raw data (user ID, password, provider, and domain) given below is sent in the POST request.

```
{
	"userid": "USERID / EMAIL",
	"password": "PASSWORD",
	"provider": "Provider name",
	"domain": "Domain name"
}
```

Also “x-www-form-urlencoded” option can be chosen to send the user ID and password as shown above.

> **_Note:_** The `userid` and `password` are mandatory data for user authorization. The `domain` and `provider` (identity providers) are optional data for user authorization.  
For example, when a user wants to generate a claims token using a provider (such as, Active Directory or SiteMinder), the `provider key` is required to pass in the Post request. Similarly, when multiple domains are under one provider, the specific domain names are required to pass in the post request.

> **_Important:_** Currently, Identity Providers support is not there for Cloud.

#### Sample Responses

```
{
  "profile" : {
    "email" : "EMAIL ID",
    "userid" : "xxxxxxxxx",
    "firstname" : "xxxxxxx",
    "lastname" : "xxxxxx"
  },
  "refresh_token" : "xxxxxxxxxx",
  "claims_token" : {
    "value" : "xxxxxxxxxx",
    "exp" : 1408953838000
  }
}
```

The claims\_token will need to be included in the **X-VoltMX-Authorization** header to invoke the Engagement server APIs. The refresh\_token is used to generate a new claims\_token after it expires. The "exp" value is the timestamp in milliseconds (milliseconds elapsed since the start of Unix Epoch) at which the claims\_token will expire.

#### Example

```
Sample URL: http://<host>/api/v1/applications
```

#### Headers

*   Content-Type: application/json;charset=UTF-8;charset=UTF-8
*   X-VoltMX-Authorization: xxxxxxxxxxx

Cloud Authentication
--------------------

Cloud authentication involves following types:

*   [MBaaS Authentication (Cloud)](#mbaas-authentication-api-cloud)
*   [OAuth/Cloud /Accounts authentication](#oauth-authentication-api)

### MBaaS Authentication API (Cloud)

The MBaaS Authentication service is used to get X-VoltMX-Authorization and AccessSecret to use Volt MX Foundry Engagement Services cloud services.

#### URL

The HTTP URL for MBaaS Authentication API is:

```
https://accounts.auth.voltmxcloud.com/login
```

#### Method

POST

#### Header

The payload's request header includes "Content-Type" for JSON as “application/json;charset=UTF-8;charset=UTF-8".

#### Authorization

This **raw** data (user ID and password) given below is sent in the POST request.

```
{
  "userid" : "USERID / EMAIL",
  "password" : "PASSWORD"
}
```

Also “x-www-form-urlencoded” option can be chosen to send the userid and password as shown above.

#### Sample Responses

```
{
  "profile" : {
    "email" : "EMAIL ID",
    "userid" : "xxxxxxxxx",
    "firstname" : "xxxxxxx",
    "lastname" : "xxxxxx"
  },
  "refresh_token" : "xxxxxxxxxx",
  "claims_token" : {
    "value" : "xxxxxxxxxx",
    "exp" : 1408953838000
  }
}
```

The claims\_token will need to be included in the **X-VoltMX-Authorization** header to invoke the Engagement server APIs. The refresh\_token is used to generate a new claims\_token after it expires. The "exp" value is the timestamp in milliseconds (milliseconds elapsed since the start of Unix Epoch) at which the claims\_token will expire.

### OAuth Authentication API

The OAuth Authentication service is used to get Access Token and AccessSecret to use Volt MX Foundry Engagement cloud services.

#### URL

The HTTP URL for OAuth Authentication API service is:

```
http://<host>/api/v1/oauth/accesstoken
```

#### Method

GET

#### Header

The payload's request header includes "Content-Type" for JSON as “application/json;charset=UTF-8;charset=UTF8".

#### Authorization

Authorization: Basic xxxxxx

> **_Note:_** xxxxxx is base 64 encoded text of OAuth credentials (login ID and password).

#### Sample Responses

```
{“AccessToken” : “xxxxxxxxxxxxxxxx”, “AccessSecret”: “xxxxxxxxxxxxx”}  

```

Use both the Access Token and AccessSecret as headers to send the request for Volt MX Foundry Messaging API’s

**Example:**

```
Sample URL: http://<host>/api/v1/applications
```

**Headers:**

```
Content-Type : application/json;charset=UTF-8;charset=UTF-8  
AccessToken : xxxxxxxxxxx  
AccessSecret: xxxxxxxxxxxx
```

X –Device -AuthToken
--------------------

You need to set the X-Device-AuthToken in the header when you set the authentication token for device side API (In Engagement Services console > Configuration >Security section).

> **_Important:_** This is applicable for all the device side APIs only.

X-VoltMX-App-API-Key
------------------

This authorization will enable invoking all application side APIs using the App API key. You can [add](../REST_API_Application/AddAppApiKey.md) multiple new App API keys for a given application. These App API keys can be [modified](../REST_API_Application/ModifyAppApiKey.md), refreshed, and deleted as per your requirements.
