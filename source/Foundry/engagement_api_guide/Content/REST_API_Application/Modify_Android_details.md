
# Modify Android Details

The **Modify Android Details** API updates the Google API key.

## URL

The HTTP URL for **Modify Android Details** API is:

```
http://<host>:<port>/api/v1/applications/<id>/android
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

> **_Note:_** **<id>**: While creating an app, a unique ID is assigned to an application. Provide the unique identifier for the app in REST URL.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type         | Description                                                                     |
| --------------- | -------- | ------------ | ------------------------------------------------------------------------------- |
| googleApiKey    | Yes      | alphanumeric | Google Cloud Messaging service sends data from a server to Android application. |

## Sample Request

```
{
"appId": "300966548262167",
"applicationName": "SampleAppforDemo",
"categoryName": "Finance",
"googleApiKey": "AIzaSyBmZDbw2vobnWMAIHU3ozTlNT_tr-m9hUU",
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
}
```

## Output Parameters

The following fields are output parameters:

| Output Parameter | Type   | Description                      |
| ---------------- | ------ | -------------------------------- |
| id               | long   | Unique app ID assigned to an app |
| message          | string | Response status message          |

## Sample Response

```
{
"id" : "300966548262167",
"message" : "Details updated successfully"
}
```

## Response Status

| Code       | Description                                                        |
| ---------- | ------------------------------------------------------------------ |
| Status 200 | Details updated successfully                                       |
| Status 400 | Invalid appID provided or no application found with provided appID |
| Status 401 | Unauthorized request                                               |
| Status 500 | Server failure to process request                                  |
