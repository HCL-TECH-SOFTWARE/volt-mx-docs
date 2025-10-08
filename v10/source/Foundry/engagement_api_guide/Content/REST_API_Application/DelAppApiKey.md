                            


Delete App API Key
==================

The **Delete App API Key** service deletes the existing App API key for a published application. To use this API you can send user credentials in the X-VoltMX-Authorization header or even use the X-VoltMX-App-API-key for user validation at Volt MX Foundry Engagement server side.

URL
---

The HTTP URL for **Delete App API Key** API is:

```
http://<host>:<port>/api/v1/applications/key/<app-key>
```

Method
------

DELETE

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

  
| Output Parameter | Type | Description |
| --- | --- | --- |
| id | String | The App API key of the app |
| message | String | Response status message |

Sample Response
---------------

```
{
  "id" : "03fb1ae7-5c6b-4ee4-9ac9-47878368b394",
  "message" : "App API key deleted successfully"
}
```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | App API key deleted successfully. |
| Status 400 | App API key not found for deletion. |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |
