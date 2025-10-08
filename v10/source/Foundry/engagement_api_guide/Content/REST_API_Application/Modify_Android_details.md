
# Modify Android Details

The **Modify Android Details** API updates the FCM Project URL and Service Account key.

## URL

The HTTP URL for **Modify Android Details** API is:

```
http://<host>:<port>/api/v1/applications/<id>/fcmhttpv1
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

> **_Note:_** **<id>**: While creating an app, a unique ID is assigned to an application. Provide the unique identifier for the app in REST URL.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter   | Required | Type               | Description                                                                     |
| ----------------- | -------- | ------------------ | ------------------------------------------------------------------------------- |
| fcmProjectURL     | Yes      | URL                | Firebase Cloud Messaging service sends data from a server to a web application. |
| serviceAccountKey | Yes      | file(json)         | Firebase Cloud Messaging service sends data from a server to a web application. |

## Sample Request

**form-data**

```
"fcmProjectURL": "xxxxxxxxxxxxxxx",
"serviceAccountKey": "FCM_Service_Accountkey.json",
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
