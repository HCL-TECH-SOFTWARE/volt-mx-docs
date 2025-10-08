                            


Get App API Key Details
=======================

The **Get App API Key Details** service fetches the details of an existing App API key for a published application. This service displays the date of expiration and description of the App API key. To use this API you can send user credentials in the X-VoltMX-Authorization header or even use the X-VoltMX-App-API-Key for user validation at Volt MX Foundry Engagement server side.

URL
---

The HTTP URL for **Get App API Key Details** API is:

```
http://<host>:<port>/api/v1/applications/key/<app-key>
```

Method
------

GET

Header
------

The payload's request header includes:

*   Content-Type as application/x-www-form-urlencoded.
*   You will need to send user credentials in **Authorization** header for user validation at Volt MX Foundry Engagement server side.
    *   X-VoltMX-Authorization: xxxxxxxxxxx.
    *   X-VoltMX-App-API-Key: App API Key

Output Parameters
-----------------

The following fields are output parameters:

  
| Output Parameter | Level Two | Type | Description |
| --- | --- | --- | --- |
| status |   | int | Response status |
| result |   | String | Response status message |
|   | appAPIKey | String | The App API key for which the details are requested. |
|   | description | String | The details given in the App API key. |
|   | neverExpires | Boolean | The status of the Never Expires parameter. |
|   | createdOn | String | The date and time of creation of the App API key. |
|   | updatedOn | String | The date and time of the last update made to the App API key. |
|   | expiresOn | String | The date and time at which the App API key is set to expire. |

Sample Response
---------------

```
{
    "status": 200,
    "result": {
        "appAPIKey": "03fb1ae7-5c6b-4ee4-9ac9-47878368b394",
        "description": "testing with modified description ",
        "neverExpires": false,
        "createdOn": "09/20/2019 06:44:59 WEST",
        "updatedOn": "09/20/2019 07:49:40 WEST",
        "expiresOn": "09/28/2019 13:26:18 WEST"
    }
}
```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | App API key details retrieved successfully |
| Status 400 | App API key not found |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |
