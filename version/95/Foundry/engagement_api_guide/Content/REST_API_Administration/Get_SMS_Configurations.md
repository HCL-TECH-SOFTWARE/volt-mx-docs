                           

Get SMS Configurations
======================

The Get SMS Configurations service is used to configure SMS.

Use Case
--------

This service implements ‘Gateway Filter for Authentication’ to authenticate access of the service by a user.

URL
---

The HTTP URL for Get SMS Configurations service is:

```
http://<<host>>:<<port>>/api/v1/smsconfig
```

Method
------

Get

Sample Response
---------------

##### JSON

```


{

"provider": "CLICKATELL",

"properties": [

{

"key": "Account SID",

"value": "qAsds23"

},

{

"key": "Auth Token",

"value": "zAew123_aPd"

},

{

"key": "User Name",

"value": "krishna"

},

{

"key": "Host URL",

"value": "http://api.clickatell.com/http/sendmsg"

},

{

"key": "Header Content Type",

"value": "application/x-www-form-urlencoded"

},

{

"key": "Maximum Character Limit",

"value": "140"

},

{

"key": "API ID",

"value": "qWxds"

}

]

}


```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | JSON Of SMS Configurations |
| Status 400 | Bad Request |
| Status 401 | Unauthorized request. |
| Status 500 | Server Failure to process request. |
