                           


Get User Details by Subscription ID
===================================

The **Get User Details by Subscription ID** API accepts the KSID as an input parameter and returns the user details.

URL
---

The HTTP URL for the Get User Details by Subscription ID API is:

```
http://<<host>>:<<port>>/api/v1/subscribeaudience/<<KSID>>
```

Method
------

GET

Output Parameters
-----------------

The following fields are output parameters:

  
| Output Parameter | Type | Description |
| --- | --- | --- |
| lastName | string | Last name of the user |
| country | string | Country to which the user belongs to |
| pushSubscription | boolean | Defines if the subscription for pushes is true or false |
| createdDateStr | string | The date and time when the user was initially created |
| campaignsSent | long | Total number of the campaigns sent to the user |
| mobileNumber | long | Mobile number of the user |
| phonenumber | long | Phone number of the user |
| active | boolean | Defines if the user is active or inactive |
| smsSubscription | boolean | Defines if the SMS subscription is true or false |
| voiceSubscription | boolean | Defines if the Voice SMS subscription is true or false |
| pushesSent | long | Number of pushes sent to the user |
| firstName | string | First name of the user |
| lastModifiedDateStr | long | The date on which a user was last modified |
| County Zip code | string | Optional user attribute |
| Driving License | string | Optional user attribute |
| Street Address | string | Optional user attribute |
| Social Security No. | string | Optional user attribute |
| emailSubscription | boolean | Defines if the email subscription is true or false |
| id | long | Unique ID assigned to the audience member |
| state | string | If the user is not a USA national, the response displays a blank string |
| email | string | Email ID of the audience member |
| lastActiveDateStr | string | The date when the user is last active |

Sample Response
---------------

```
{
  "lastName" : "Hale",
  "country" : "India",
  "pushSubscription" : true,
  "createdDateStr" : "06/28/2016 12:19:41 PM IST",
  "campaignsSent" : 3,
  "mobileNumber" : "+917704894373",
  "phonenumber" : "4072908110",
  "active" : true,
  "smsSubscription" : true,
  "voiceSubscription" : true,
  "pushesSent" : 24,
  "firstName" : "Aron",
  "lastModifiedDateStr" : "09/15/2016 09:55:19 PM IST",
  "County Zip code" : "",
  "Driving License" : "",
  "Street Address" : "",
  "Social Security No." : "",
  "emailSubscription" : true,
  "id" : "5979294531974952062",
  "state" : "",
  "email" : "aron.hale@gmail.com",
  "lastActiveDateStr" : "12/23/2018 12:08:59 PM"
}
```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Array of user details |
| Status 400 | No audience member found mapping to the given KSID or audience ID |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process requestFailed to process the request |
