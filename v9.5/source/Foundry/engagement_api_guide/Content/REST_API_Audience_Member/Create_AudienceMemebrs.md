                           


Create Users
============

The **Create Users** API adds users into Engagement Services. This API creates a new user and returns an ID for that user in the engagement server.

URL
---

The HTTP URL for **Create Users** API is:

```
http://<host>:<port>/api/v1/audience
```

This API implements Gateway Filter for Authentication/Basic Authentication to authenticate access of the service by a user.

Method
------

POST

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
| smsSubscription | optional | boolean | Whether SMS subscription is enabled. |
| voiceSubscription | optional | boolean | Whether Voice SMS subscription is enabled. |
| emailSubscription | optional | boolean | Whether email subscription is enabled. |
| lastActiveDate | Optional | string | The date when the user is last active. |

Sample Request
--------------

```
            
            {
            "firstName" : "Latha",
            "lastName" : "Ganesh",
            "country" : "India",
            "mobileNumber" : "",
            "email" : "latha.ganesh@voltmx.com",
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
  "id" : "9",
  "message" : "Details added successfully"
}
```

> **_Note:_** If the user already exists in the Engagement Server, either with an email ID or a mobile number or any dynamic attributes (marked as reconciliation key), then the response throws an error message along with the existing user ID in the system.

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Details added successfully |
| Status 400 | Attribute 'phonenumber' is a mandatory field. Please provide a valid value for the sameMobile number should have country code followed by ten digit numberUser already exists with this mobile numberThe request contains invalid attributesUser already exists with this Email latha.ganesh@gmail.com |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |
