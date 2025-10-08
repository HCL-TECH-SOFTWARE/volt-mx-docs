
# Download Windows MPNS Certificate

The **Download Windows MPNS Certificate** API downloads the Windows MPNS certificate.

## URL

The HTTP URL for **Download Windows MPNS Certificate** API is:

```
http://<host>:<port>/api/v1/applications/downloadwindowscert?appId={appId}
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

> **_Note:_** <id>: While creating an app, a unique ID is assigned to an application. Provide the unique identifier for the app in REST URL.

## Method

GET

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                               |
| --------------- | -------- | ---- | ----------------------------------------- |
| Application ID  | Yes      | long | The unique id assigned to the application |

## Sample Response

```
Cerificate to download
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Details added successfully        |
| Status 400 | Invalid request format            |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
