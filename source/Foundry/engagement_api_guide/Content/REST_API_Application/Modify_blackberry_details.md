
# Modify BlackBerry Details

The **Modify BlackBerry Details** API updates the BlackBerry certificates.

## URL

The HTTP URL for **Modify BlackBerry Details** API is:

```
http://<host>:<port>/api/v1/applications/<id>/blackberry
```

This service implements Gateway Filter for Authentication/Basic Authentication to authenticate access of the service by a user.

> **_Note:_** <id>: While creating an app, a unique ID is assigned to an application. Provide the unique identifier for the app in REST URL.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter   | Required | Type                    | Description                                                       |
| ----------------- | -------- | ----------------------- | ----------------------------------------------------------------- |
|  blackBerryAppId  | Yes      | alphanumeric            | The unique id assigned to BlackBerry App.(Production credentials) |
|  blackBerryAppPwd | Yes      | alphanumeric(no spaces) | The unique app password (Production credentials)                  |
|  blackBerryUrl    | Yes      | string                  | BlackBerry Push URL                                               |

## Sample Request

```
{  
   "blackBerryAppId" : "2936-596a4aR8e4e775936O0r1128m8h07M1R490",  
   "blackBerryAppPwd" : "Whxk3txQ",  
   "blackBerryUrl" : "https://cp2936-   596a4aR8e4e775936O0r1128m8h07M1R490.pushapi.eval.blackberry.com/mss/PD_pushRequest"  
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

"message" : "Details updated successfully",  
"id" : "appId"  
}

```

## Response Status

| Code       | Description                                                                                                                                  |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Status 200 | Details updated successfully                                                                                                                 |
| Status 400 | Valid characters in 'BlackBerry URL' are a-z,A-Z,0-9. BlackBerry app ID is requiredBlackBerry password is requiredBlackBerry URL is required |
| Status 401 | Unauthorized request.                                                                                                                        |
| Status 500 | Server failure to process request                                                                                                            |
