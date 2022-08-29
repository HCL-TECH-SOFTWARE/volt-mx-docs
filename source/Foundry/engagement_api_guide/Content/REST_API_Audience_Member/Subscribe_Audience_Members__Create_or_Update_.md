                           


Subscribe Users (Create or Update)
==================================

The **Subscribe Users (Create or Update)** API creates a new user and adds that user to the list. This API also updates parameter details of a user.

URL
---

The HTTP URL for Subscribe Users (Create or Update) API is:

```
http://<<host>>:<<port>>/api/v1/subscribeaudience/
```

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
| ksid | Yes | long | Volt MX Subscription Identification number of the application |
| lastName | Yes | string | Last name of the user |
| email | Yes | string | Email ID of the user |
| active | Optional | boolean | Defines if the subscription is active or inactive |
| firstName | Yes | string | First name of the user |
| mobileNumber | Optional | long | Mobile number of the user. If **mobileNumber** is specified as the [reconciliationKey](../REST_API_Administration/Modify_Details_General_.md), then it is a required value and must be specified for all users. An empty value will cause an error. |
| state | Yes | string | If the selected country is USA, the state option is mandatory |
| country | Yes | string | Country to which user belongs to |
| emailSubscription | Optional | boolean | If a user is subscribed to send and receive emails or not |
| smsSubscription | Optional | boolean | If a user is subscribed to send and receive SMS or not |
| voiceSubscription | Optional | boolean | If a user is subscribed to send and receive Voice SMS or not |
| phonenumber | Yes | string | This is a user defined mandatory attribute |
| authToken | Optional | alphanumeric | User configured authentication token in Volt MX Foundry Messaging |
| lastActiveDate | Optional | string | The date when the user is last active |

Sample Request
--------------

```

            {
 "ksid" : "9117786204812949329",
 "lastName" : "Jordan",
 "email" : "Jordan@voltmx.com",
 "active" : true,
 "firstName" : "Rapp",
 "mobileNumber" : "+919876543210",
 "phonenumber" : "4072908110",
 "emailSubscription": true,
 "smsSubscription": true,
 "voiceSubscription": true,
 "country" : "United States",
 "state":"New York"
 "lastActiveDate" : "12/23/2018 12:08:59 PM"
 }
```

Sample Response
---------------

```
{
  "id" : "9222005853954242485",
  "message" : "Details added successfully"
}
```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Details added successfully |
| Status 400 | Attribute phonenumber is a mandatory field. Please provide a valid value for the sameInvalid KSIDLast Name is requiredUser already exists with the given mobile numberEmail is requiredFirst Name is requiredMobile Number is requiredCountry is required |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |
