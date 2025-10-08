
# Registering a Device to Receive Push Notifications for a Pass

The **Registering a Device to Receive Push Notifications for a Pass** API is used to register a device so it can receive push notification for a pass.

## URL

The HTTP URL for Registering a Device to Receive Push Notifications for a Pass API is:

```
http://<<host>>:<<port>>/api/v1/devices/deviceLibraryIdentifier/registrations/passTypeIdentifier/serialNumber
```

This service implements Gateway Filter for Authentication/Basic Authentication to authenticate access of the service by a user.

## Method

POST

## Header

The payload's request header includes authorization: ApplePass xxxxx

## Input Parameters

The following fields are input parameters:

| Input Parameter          | Required | Type   | Description                      |
| ------------------------ | -------- | ------ | -------------------------------- |
| Apple Pass Authroization | Yes      | string | Apple pass authorization details |

## Sample Request

```
{"pushToken":"xxxxxx"}
```

## Sample Response

```
{  
   "message": "Details added successfully",  
   "id": "KPID"  
}

```

## Response Status

| Code       | Description                                                                                               |
| ---------- | --------------------------------------------------------------------------------------------------------- |
| Status 200 | Details added successfully                                                                                |
| Status 400 | Payload should contain value for 'pushToken' keyUnable to parse the input payload or Invalid JSON payload |
| Status 401 | Invalid authentication token                                                                              |
| Status 500 | Failed to save pass device registration                                                                   |
