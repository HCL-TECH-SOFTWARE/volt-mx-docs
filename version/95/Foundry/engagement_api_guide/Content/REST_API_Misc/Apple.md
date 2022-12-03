
# Validate APNS and Bundle Identifier with Apple

This API validates the APNS certificate or the Bundle Identifier that is configured with an application in the Engagement Server. For validation, the API takes an App ID as an input parameter and fetches data from the Engagement Server before communicating with Apple.

## URL

The HTTP URL for Apple API is:

```
http://<host>:<port>/api/v1/connectiontest/apple/appid
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

GET

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type         | Description                   |
| --------------- | -------- | ------------ | ----------------------------- |
| id              | Yes      | alphanumeric | Unique ID assigned to the app |

## Sample Response

```
{  
  "message" : "Apple Cloud Connection Test Successful.",  
  "id" : "ApplicationID"  
}

```

## Response Status

| Code       | Description                            |
| ---------- | -------------------------------------- |
| Status 200 | Apple cloud connection test successful |
| Status 401 | Unauthorized request                   |
| Status 500 | Server failure to process request      |
