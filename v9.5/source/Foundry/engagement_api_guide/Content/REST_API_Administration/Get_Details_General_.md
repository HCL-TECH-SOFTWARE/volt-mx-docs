
# Get Details(General)

The **Get Details(General)** API returns details related to:

- Basic engagement services configuration
- Setting campaign types
- Setting event types
- Setting security features

## URL

The HTTP URL for **Get Details(General)** API is:

```
http://<host>:<port>/api/v1/admin
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

GET

## Output Parameters

The following fields are output parameters:

> **_Important:_** While creating a request payload, provide details for all the mandatory and optional fields. If you do not provide details for the optional fields, the system updates the payload with default values.

| Output Parameter          | Type         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| retriesPerNotification    | long         | Number of retries for each notification. When push notifications delivery fails, you can attempt to deliver the notifications again. You configure a retry schedule for each delivery                                                                                                                                                                                                                                                                            |
| reconciliationKey         | string       | Volt MX Foundry Engagement Services allows you to configure only one reconciliation key                                                                                                                                                                                                                                                                                                                                                                          |
| campaignExecutionIntervel | long         | The scheduled campaign execution interval time                                                                                                                                                                                                                                                                                                                                                                                                                   |
| preferredTimeZone         | string       | Time Zones are a geographical world globe division starting at Greenwich, in England. You can set a time zone for times and dates according to your locale                                                                                                                                                                                                                                                                                                       |
| lastModifiedBy            | string       | A user name that shows who last modified the push notification                                                                                                                                                                                                                                                                                                                                                                                                   |
| lastModifiedDateStr       | string       | Date and time at which the general settings were last modified                                                                                                                                                                                                                                                                                                                                                                                                   |
| createdDateStr            | string       | Date and time at which the general settings were created                                                                                                                                                                                                                                                                                                                                                                                                         |
| createdBy                 | string       | A user name showing who created the general settings                                                                                                                                                                                                                                                                                                                                                                                                             |
| corsRequired              | boolean      | If Cors allowed or not. XMLHttpRequest for \[URL\] required Cross Origin Resource Sharing (CORS). An XMLHttpRequest is made to a domain that is different than your page's domain.                                                                                                                                                                                                                                                                               |
| allowedCorsDomains        | NA           | A list of allowed cors domains. Allowed domains to allow CORS settings, e.g. `*.google.com`                                                                                                                                                                                                                                                                                                                                                                      |
| apiAuthToken              | alphanumeric | Auth token to be used for all device side calls to the Engagement Server                                                                                                                                                                                                                                                                                                                                                                                         |
| basicAuthRequired         | boolean      | If basic authentication is required or not                                                                                                                                                                                                                                                                                                                                                                                                                       |
| identityTokenRefId        | alphanumeric | The client identifier issued to the application that requested                                                                                                                                                                                                                                                                                                                                                                                                   |
| androidPayloadType        | string       | You can choose between the following options **fcm_notification**: Both notification and data payloads will be sent to the client application. **fcm_data**: Only Data message of the FCM will be sent to the client application. **fcm_notification_gcm_v2**: This option is provided mainly for the backward compatibility. The GCM v2 support allows the notification payload to be copied into the data payload. Hence the app works for both FCM and GCMv2. |
| identityAuth              | boolean      | If identity authentication is required or not                                                                                                                                                                                                                                                                                                                                                                                                                    |
| keyId                     | string       | It is a 10-character string. Get the keyId of your app from your Apple Developer Account.                                                                                                                                                                                                                                                                                                                                                                        |
| teamId                    | string       | It is a unique 10-character string associated with an Apple Developer Account. Get the teamId of your app from your Apple Developer Account.                                                                                                                                                                                                                                                                                                                     |
| apnsProviderPrivateKey    | string       | It is a unique key that is generated when you create an APNS certificate. Get the apnsProviderPrivateKey of your app from your Apple Developer Account.                                                                                                                                                                                                                                                                                                          |

## Sample Response

```
{
"retriesPerNotification": 8,
"reconciliationKey": "Email",
"campaignExecutionIntervel": 2,
"preferredTimeZone": "(GMT+05:30) Chennai, Mumbai, New Delhi",
"lastModifiedBy": "admin",
"lastModifiedDateStr": "08/09/2016 03:36:06 PM IST",
"createdDateStr": "08/01/2016 12:19:00 PM IST",
"createdBy": "admin",
"corsRequired": true,
"allowedCorsDomains": "\*",
"apiAuthToken": "authtokenForDeviceSideAPIsForAddedSecurity",
"basicAuthRequired": true,
"identityTokenRefId": 8,
"isAndroid3PayloadEnabled": true,
"identityAuth": false
      "keyId" : "5M80QD7GB2"
      "teamId" : "DP7853I8YE"
      "apnsProviderPrivateKey" : "MIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgQ
        3iDy26Mx6diayfNhjUaANGv0k95tye45hWCC6wN/oOgCgYIKoZIzj0DAQehRANCAAQ6hwi1Iouod  
        UG9+AD95RpQOpWr8gFmbCGaB7HjSbXuyigkx2wlYVxiTgV//fqQZVGpXYrW0gUruiAe+Ej5JQxy"
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Array of admin details            |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
