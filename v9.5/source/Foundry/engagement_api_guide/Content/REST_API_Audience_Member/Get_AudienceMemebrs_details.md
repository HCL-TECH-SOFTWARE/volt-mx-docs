                           


Get User Details by ID
======================

The **Get User Details by ID** API accepts the user ID as an input parameter and responds with a user's details.

URL
---

The HTTP URL for **Get User Details by ID** API is:

```
http://<host>:<port>/api/v1/audience/<id>
```

This API implements Gateway Filter for Authentication/Basic Authentication to authenticate access of the service by a user.

Method
------

GET

Output Parameters
-----------------

The following fields are output parameters:

  
| Output Parameter | Type | Description |
| --- | --- | --- |
| lastName | string | Last name (surname) of the user |
| country | string | Country where the user lives |
| createdDateStr | string | Date and time when the user was created |
| mobileNumber | string | Mobile number of the user |
| active | boolean | Whether the user is active |
| smsSubscription | boolean | Whether SMS subscription is enabled |
| voiceSubscription | boolean | Whether Voice SMS subscription is enabled |
| firstName | string | First (given) name of the user |
| lastModifiedDateStr | string | Date and time user was last modified |
| state | string | State (United State of America) where the user lives |
| id | long | Unique ID assigned to the user |
| emailSubscription | boolean | Whether email subscription is enabled |
| email | string | Email address of the user |
| lastActiveDateStr | string | The date when the user is last active |

Sample Response
---------------

```
{
  "lastName" : "One",
  "country" : "United States",
  "createdDateStr" : "08/31/2017 12:04:02 PM EDT",
  "mobileNumber" : "+1214322418812",
  "active" : true,
  "smsSubscription" : true,
  "voiceSubscription" : true,
  "firstName" : "User",
  "lastModifiedDateStr" : "08/31/2017 12:04:02 PM EDT",
  "emailSubscription" : true,
  "id" : 1,
  "state" : "California",
  "email" : "user.one@voltmx.com",
  "lastActiveDateStr" : "08/16/2017 02:30:00 PM EDT"
}

```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Array of user details |
| Status 400 | Invalid Audience Member ID provided or no audience member found with given ID |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |
