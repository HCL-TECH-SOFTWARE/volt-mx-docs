
# BlackBerry

The BlackBerry API connects a device user to BlackBerry server.

## URL

The HTTP URL for BlackBerry API is:

```
http://<host>:<port>/api/v1/connectiontest/blackberry/appid
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

GET

## Header

The payload's request header includes Content-Type for JSON as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type         | Description                   |
| --------------- | -------- | ------------ | ----------------------------- |
| id              | Yes      | alphanumeric | Unique ID assigned to the app |

## Sample Response

```
 {  
  "message" : "BlackBerry Cloud Connection Test Successful.",  
  "id" : "ApplicationID"  
}

```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Connection Successful             |
| Status 400 | Unauthorized request              |
| Status 500 | Server failure to process request |
