                            


Add App API Key
===============

The **Add App API Key** service adds a new App API Key for a published application. This service helps create a new API key for a specific app. The key can be used to send push notifications to the associated app and also to invoke non-app specific APIs if the user has the correct set of permissions. To use this API you will need to send user credentials in the X-VoltMX-Authorization header for user validation at Volt MX Foundry Engagement server side.

> **_Note:_** Only published applications can send push notifications.

URL
---

The HTTP URL for **Add App API Key** API is:

```
http://<host>:<port>/api/v1/applications/key
```

Method
------

POST

Header
------

The payload's request header includes:

*   Content-Type as application/x-www-form-urlencoded.
*   X-VoltMX-Authorization: xxxxxxxxxxx. You will need to send user credentials in **Authorization** header for user validation at Volt MX Foundry Engagement server side.

Input Parameters
----------------

The following fields are input parameters:

  
| Input Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| appId | Yes | String | The unique ID/name of the application. |
| expiresOn | Optional. Not required, if **Never Expire** is set to true. | String | Specify the date of expiry for the App API Key. You must always specify the date and time of expiry. The format is mm/dd/yyyy hh:mm:ss. |
| neverExpires | Optional. Not required, if **Expires On** is provided. | Boolean | Setting this parameter to true ensures that the App API Key never expires. The Expires On parameter is invalid once you set this to true. |
| description | Optional | String | A description to define the App API Key. |

> **_Note:_** If you provide expiresOn and enable neverExpires, the key will never expire.

Output Parameters
-----------------

The following fields are output parameters:

  
| Output Parameter | Type | Description |
| --- | --- | --- |
| id | String | The newly created App API Key assigned to the app |
| message | string | Response status message |

Sample Response
---------------

```
{
  "id" : "03fb1ae7-5c6b-4ee4-9ac9-47878368b394",
  "message" : "App API key Added successfully"
}
```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | App API Key created successfully |
| Status 400 | The appId entered is incorrect. The description exceeds 100 characters The expiresOn date is invalid (a date that has already passed). Required data is missing. |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |
