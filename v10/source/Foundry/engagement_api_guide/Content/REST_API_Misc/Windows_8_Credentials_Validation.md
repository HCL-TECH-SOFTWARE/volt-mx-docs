
# Windows 8 Credentials Validation

The **Windows 8 Credentials Validation** API validates Windows 8 credentials.

## URL

The HTTP URL for **Windows 8 Credentials Validation** API is:

```
http://<host>:<port>/api/v1/connectiontest/windows8/<appId>
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

GET

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type         | Description                   |
| --------------- | -------- | ------------ | ----------------------------- |
| appId           | Yes      | alphanumeric | Unique ID assigned to the app |

## Sample Response

```
{
"id" : "20096-6548262167",
"message" : "Windows8 cloud credentials are valid."
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Valid credentials                 |
| Status 400 | Credentials not found for the app |
| Status 400 | Invalid credentials               |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
