                            


Create App
==========

The **Create App** API adds new applications into Engagement Server.

URL
---

The HTTP URL for Create App API is:

```
http://<host>:<port>/api/v1/applications/
```

The Create App service implements Gateway Filter for Authentication to authenticate access of the service by a user.

Method
------

POST

Header
------

The payload's request header includes Content-Type as application/json;charset=UTF-8.

Input Parameters
----------------

The following fields are the input parameters:

  
| Input Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| appId | Yes | alphanumeric | Unique app ID assigned to an Engagement app |
| categoryName | Yes | N/A | Category assigned to an app such as business or finance |
| foundryBaseAppId | Optional | String | Unique app ID assigned to a Foundry app |
| foundryAppId | Optional | String | The app ID assigned to an app when it is created. It remains same as foundryBaseAppId until the Foundry app has a new version. |
| applicationName | Yes | alphanumeric | The unique name assigned to an app |
| googleApiKey | Based on selected platform need to add details | alphanumeric | System- generated unique Google API key |
| jpushAppKey | Based on selected platform need to add details | alphanumeric | System-generated unique key to log-in to a JPush account. The jpushAppKey and jpushMasterSecret are log-in credentials for a JPush account. |
| jpushMasterSecret | Based on selected platform need to add details | alphanumeric | System- generated unique secret to log-in to JPush account. |
| webFcmApiKey | Based on selected platform need to add details | alphanumeric | System- generated unique Firebase API key |
| appleBundleId | Based on selected platform need to add details | alphanumeric | Bundle Identifier of the iPhone Push Certificate. |
| appleDevBundleId | Based on selected platform need to add details | alphanumeric | Bundle Identifier of the iPhone Developer Push Certificate. |
| ipadBundleId | Based on selected platform need to add details | alphanumeric | Bundle Identifier of the iPad Push Certificate. |
| ipadDevBundleId | Based on selected platform need to add details | alphanumeric | Bundle Identifier of the iPad Developer Push Certificate. |
| windows8ClientId | Based on selected platform need to add details | alphanumeric | A security identifier that is a unique, immutable identifier of a user, user group, or other security principal |
| windowsPhone8 | Based on selected platform need to add details | boolean | Whether WindowsPhone8 is required |
| windows8ClientSecret | Based on selected platform need to add details | alphanumeric | Secret key assigned to Windows 8 for authentication |
| windows8AuthToken | Based on selected platform need to add details | alphanumeric | System generated authentication token |
| windowsPhone7 | Based on selected platform need to add details | boolean | Whether WindowsPhone 7 is required or not |
| blackBerryAppId | Based on selected platform need to add details | alphanumeric | The unique ID assigned to a BlackBerry app |
| blackBerryUrl | Based on selected platform need to add details | string | Primary URL for the resource. |
|  blackBerryAppPwd | Based on selected platform need to add details | alphanumeric(no spaces) | System-generated unique password. |

Sample Request
--------------

```
{
  "appId": "300966548262167",
  "applicationName": "SampleAppforDemo",
  "categoryName": "Business",
  "foundryAppBaseId":"fromService",
  "foundryAppId":"fromService",
  "googleApiKey": "AIzaSyCFd4pwKxLDMuk76Rk9XRrwDpXanjrj4Zk",
  "appleBundleId": "xxxxxxxxxx",
  "appleDevBundleId": "xxxxxxxxxx",
  "ipadBundleId": "xxxxxxxxxx",
  "ipadDevBundleId": "xxxxxxxxxx",
  "blackBerryAppId": "",
  "blackBerryUrl": "",
  "blackBerryAppPwd": "",
  "windows8ClientId": "ms-app://s-1-15-2-213995348-1368721946-2967673374-1428200323-1145738169-1646738291-64223294",
  "windows8ClientSecret": "DJ1uYWdv7gvYAQaVj7v1Kh9UDtecD-6S",
  "windowsPhone7": true,
  "windowsPhone8": true,
  "windows8AuthToken": "",
  "jpushAppKey" : "71d7cde4c164dd3d997f86e1",
  "jpushMasterSecret" : "fad621972177276a4071577d"
  "webFcmApiKey": "",
}
```

Output Parameters
-----------------

  
| Output Parameter | Type | Description |
| --- | --- | --- |
| id | alphanumeric | Unique app ID assigned to an app |
| message | string | Response status message |

Sample Response
---------------

```
{
  "id" : "300966548262167",
  "message" : "Details added successfully"
}
```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Details added successfully |
| Status 400 | AppID is requiredApplication name is requiredApp category is required |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |
