                            


Get App API Key(s)
==================

The **Get App API Key(s)** service fetches the details of existing App API key(s) for a published application. This service displays the date of expiration and description of the App API key(s). To use this API you can send user credentials in the X-VoltMX-Authorization header or even use the X-VoltMX-App-API-Key for user validation at Volt MX Foundry Engagement server side.

URL
---

The HTTP URL for **Get App API Key(s)** API is:

```
http://<host>:<port>/api/v1/applications/key?appId=<app-id>
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
    *   X-VoltMX-App-API-Key: App API key

Input Parameters
----------------

The following fields are input parameters:

  
| Input Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| appId | Yes | String | The unique ID/name of the application. |

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

> **_Note:_** If you provide expiresOn and enable neverExpires, the key will never expire.

Sample Response
---------------

```
{
    "status": 200,
    "result": [
        {
            "appAPIKey": "8e7f30c6-f074-4ce5-ac66-ee09011f5e18",
            "description": "testing with sample description ",
            "neverExpires": false,
            "createdOn": "09/18/2019 13:21:58 WEST",
            "updatedOn": "09/18/2019 13:28:17 WEST",
            "expiresOn": "09/28/2019 13:26:18 WEST"
        },
        {
            "appAPIKey": "659d778e-a63b-479b-82cf-b92c692824f0",
            "description": "testing with sample description ",
            "neverExpires": false,
            "createdOn": "09/18/2019 13:26:18 WEST",
            "updatedOn": "09/18/2019 13:28:57 WEST",
            "expiresOn": "09/28/2019 13:26:18 WEST"
        },
        {
            "appAPIKey": "03fb1ae7-5c6b-4ee4-9ac9-47878368b394",
            "description": "testing with modified description ",
            "neverExpires": true,
            "createdOn": "09/20/2019 06:44:59 WEST",
            "updatedOn": "09/20/2019 09:56:23 WEST",
            "expiresOn": null
        }
    ]
}
```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | App API key details retrieved successfully |
| Status 400 | Invalid AppId entered, No App API keys found. Required data is missing. |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |
