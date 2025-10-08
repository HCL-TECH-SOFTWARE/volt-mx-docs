                           


Modify Users
============

The **Modify Users** API modifies a user's details.

URL
---

The HTTP URL for **Modify Users** API is:

```
http://<host>:<port>/api/v1/audience/<id>
```

This API implements Gateway Filter for Authentication/Basic Authentication to authenticate access of the service by a user.

Method
------

PUT

Header
------

The payload's request header includes Content-Type as application/json;charset=UTF-8.

Input Parameters
----------------

The following fields are input parameters:

  
| Input Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| firstName | Yes | string | First (given) name of the user |
| lastName | Yes | string | Last name (surname) of the user |
| state | Yes | string | If the selected country is USA, the state option is mandatory |
| country | Yes | string | Country to which the user belongs |
| email | Yes | string | Email address of the user |
| mobileNumber | Optional | long | Mobile phone number of the user. If **mobileNumber** is specified as the [reconciliationKey](../REST_API_Administration/Modify_Details_General_.md), then it is a required value and must be specified for all users. An empty value will cause an error. |
| smsSubscription | optional | boolean | Whether SMS subscription is enabled |
| voiceSubscription | optional | boolean | Whether Voice SMS subscription is enabled |
| emailSubscription | optional | boolean | Whether email subscription is enabled |
| lastActiveDateStr | optional | string | The date when the user is last active |

Sample Request
--------------

```
{
            "firstName" : "Latha",
            "lastName" : "Ganesh",
            "country" : "India",
            "mobileNumber" : "",
            "email" : "latha.ganesh@gmail.com",
            "smsSubscription" : true,
            "voiceSubscription" : true,
            "emailSubscription" : true,
            "state" : "",
            "lastActiveDate":"08/23/2017"
}
```

Output Parameters
-----------------

The following fields are output parameters:

  
| Output Parameter | Type | Description |
| --- | --- | --- |
| id | long | Unique id assigned to a user |
| message | string | Response status message |

Sample Response
---------------

```
{  
   "message" : "Details updated successfully",  
   "id" : "1"  
}  

```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Details updated successfully |
| Status 400 | Invalid request format |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |
