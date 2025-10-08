
# Unregistering a Device for not to Receive Push Notifications for a Pass

The **Unregistering a Device for not to Receive Push Notifications for a Pass** API is used to unregister a device so the device cannot receive push notifications for a pass.

## URL

The HTTP URL for Unregistering a Device for not to Receive Push Notifications for a Pass API is:

```
http://<<host>>:<<port>>/api/v1/devices/deviceLibraryIdentifier/registrations/passTypeIdentifier/serialNumber
```

This service implements Gateway Filter for Authentication/Basic Authentication to authenticate access of the service by a user.

## Method

DELETE

## Header

The payload's request header includes Authorization: ApplePass xxxxx

## Input Parameters

The following fields are input parameters:

| Input Parameter          | Required | Type   | Description                      |
| ------------------------ | -------- | ------ | -------------------------------- |
| Apple Pass Authroization | Yes      | string | Apple pass authorization details |

## Sample Response

```


{  
   "message": "Unregistered succesfully.",

"id": "KPID"  
}

```

## Response Status

| Code       | Description                            |
| ---------- | -------------------------------------- |
| Status 200 | Unregistered successfully              |
| Status 400 | Invalid Request. No registration found |
| Status 401 | Invalid authentication token           |
| Status 500 | Failed to deregister pass device       |
