                           

Apple
=====

The 'Apple' service connects a device user to Apple server.

Use Case
--------

The user can call the service from an application and fetch the input parameters. Once the input parameters are verified, the user can connect to Apple server.

This service implements ‘Gateway Filter for Authentication’ to authenticate access of the service by a user.

URL
---

The HTTP URL for 'Apple ' service is:

```
http://<localhost>:<8080>/api/v1/connectiontest/apple/appid
```

Method
------

GET

Header
------

The payload's request header includes "Content-Type" for JSON as “application/json;charset=UTF-8".

Input Parameters
----------------

Following fields are the input parameters:

  
| Input Parameter | Type | Description |
| --- | --- | --- |
| prod = 'True' | Boolean | If prod is true or false |
| iPad = 'True' | Boolean | If iPad is available or not |

  
To pass the input parameters, follow these steps:

1.  Type the service URL in your application.
    
    For ‘GET’ method, the input parameters are passed through URL.
    

Sample Response
---------------

### JSON

```
// The request has succeeded.  
{  
"message" : "Apple Cloud Connection Test Successful.",  
"id" : "ApplicationID"  
}  

```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Connection Successful |
| Status 401 | Unauthorized request |
| Status 500 | Server Failure to process request |
