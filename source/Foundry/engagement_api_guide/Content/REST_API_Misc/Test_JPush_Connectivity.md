
# Test JPush Connectivity

The **Test JPush Connectivity** API is used to test, if the application is connected with JPush console or not.

## URL

The HTTP URL for **Test JPush Connectivity** API is:

```
<host>:<port>/api/v1/connectiontest/android/jpush/<app-id>
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
"message" : "JPush Cloud Connection Test Successful.",
"id" : "appId"
}
```

## Response Status

| Code       | Description                                                        |
| ---------- | ------------------------------------------------------------------ |
| Status 200 | JPush cloud connection test successful                             |
| Status 400 | Invalid AppID provided or No application found with provided AppID |
| Status 401 | Unauthorized request                                               |
| Status 500 | Server failure to process request                                  |
