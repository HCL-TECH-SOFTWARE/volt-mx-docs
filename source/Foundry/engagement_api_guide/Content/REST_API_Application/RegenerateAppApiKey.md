                            

Regenerate App API Key
======================

The **Regenerate App API Key** service regenerates an existing expired App API key for a published application. This service helps regenerate or extend the date of expiration of the API key and modify its description. To use this API you can send user credentials in the X-VoltMX-Authorization header or even use the X-VoltMX-App-API-Key for user validation at Volt MX Foundry Engagement server side.

URL
---

The HTTP URL for **Regenerate App API Key** API is:

```
http://<host>:<port>/api/v1/applications/key/<app-key>
```

Method
------

POST

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
| expiresOn | Optional. Not required, if **Never Expires** is set to true. | String | Specify the date of expiry for the App key. You must always specify the date and time of expiry. The format is mm/dd/yyyy hh:mm:ss. |
| neverExpires | Optional. Not required, if **Expires On** is provided. | Boolean | Setting this parameter to true ensures that the App key never expires. The Expires On parameter is invalid once you set this to true. |
| description | Optional | String | A description to define the App key. |

> **_Note:_** If you provide expiresOn and enable neverExpires, the key will never expire.

Output Parameters
-----------------

The following fields are output parameters:

  
| Output Parameter | Type | Description |
| --- | --- | --- |
| id | String | The App key assigned to the app |
| message | String | Response status message |

Sample Response
---------------

```
{
  "id" : "03fb1ae7-5c6b-4ee4-9ac9-47878368b394",
  "message" : "App API key regenerated successfully"
}
```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | App API key regenerated successfully |
| Status 400 | App API key not found for regeneration. The description exceeds 100 characters. The expiresOn date is invalid (a date that has already passed). Required data is missing. |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |
