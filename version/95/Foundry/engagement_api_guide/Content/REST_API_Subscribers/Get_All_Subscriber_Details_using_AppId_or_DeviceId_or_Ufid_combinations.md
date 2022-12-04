
# Get All Subscriber Details using Combinations of Data

The **Get All Subscriber Details using Combinations of Data** API retrieves subscriber details using:

- application ID
- device ID
- ufID
- osType
- subscriptionStatus
- cloudStatus

or a combination of all the above input parameters. If none of these input parameters is passed, start=0 and pageSize=20 are assumed and the first 20 subscribers in the system are returned.

## URL

The HTTP URL for Get All Subscriber Details using Combinations of Data API is:

```
http://<IP/HostName>:<Port>/api/v1/subscribers?start=0&pageSize=10&appId=VpXclof&ufid=cKzSQTB@gmail.com&deviceId=testIphoneDevice
```

> **_Note:_** The appId, deviceId, and ufid shown in the URL above are for sample reference only.

This is a secure API. This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

GET

## Output Parameters

The following fields are output parameters.

| Output Parameter | Level-Two          | Type    | Description                                                                                                                                                                                                                                                                                                                      |
| ---------------- | ------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| total            |                    | long    | Total number of subscribers                                                                                                                                                                                                                                                                                                      |
| subscribers      |                    |         | An array of subscriber’s attributes                                                                                                                                                                                                                                                                                              |
|                  | ksid               | long    | Volt MX subscriber ID. This is a unique subscription ID in the Volt MX Engagement Server.                                                                                                                                                                                                                                        |
|                  | appId              | long    | Unique ID assigned to an app                                                                                                                                                                                                                                                                                                     |
|                  | ufid               | string  | The User Friendly Identifier or UFID is used when you subscribe to Volt MX Foundry Engagement Services. This value is alphanumeric, for example xxx@voltmx.com or 2890XZCY. It is usually the email address but it does not have to be. It can be used to map devices to the user and therefore can act as a reconciliation key. |
|                  | deviceId           | string  | Subscriber's device ID                                                                                                                                                                                                                                                                                                           |
|                  | deviceName         | string  | Subscriber's device name                                                                                                                                                                                                                                                                                                         |
|                  | sid                | string  | The subscription ID serial number                                                                                                                                                                                                                                                                                                |
|                  | osType             | string  | The current operating system. Possible values are: androidgcm iPhone iPad Windows Windows8 BlackBerry iWatch webfcm                                                                                                                                                                                                              |
|                  | phoneNo            | string  | Phone number of the subscriber                                                                                                                                                                                                                                                                                                   |
|                  | createdDateStr     | string  | Date and time on which the subscriber record was creation                                                                                                                                                                                                                                                                        |
|                  | userAgent          | string  | User agent                                                                                                                                                                                                                                                                                                                       |
|                  | ipAddress          | string  | IP address                                                                                                                                                                                                                                                                                                                       |
|                  | subscriptionStatus | boolean | Whether the subscriber is active                                                                                                                                                                                                                                                                                                 |
|                  | cloudStatus        | boolean | Whether the cloud status is active                                                                                                                                                                                                                                                                                               |

## Sample Response

```
  
 {
"total" : 6,
"subscribers" : [ {
"ksid" : 4931474178235588403,
"appId" : "20096-6548262167",
"ufid" : "sandra.samual@voltmx.com",
"deviceId" : "423457",
"deviceName" : "MyDeviceName1",
"sid" : "223456",
"osType" : "windows",
"phoneNo" : "",
"createdDateStr" : "06/20/2016 11:03:15 AM IST",
"userAgent" : "Mozilla/5.0 ](Windows NT 10.0; WOW64) AppleWebKit/537.36 (.md, like Gecko) Chrome/51.0.2704.103 Safari/537.36",
"ipAddress" : "10.10.30.89",
"subscriptionStatus" : true,
"cloudStatus" : true
}, {
"ksid" : 4931475945324085095,
"appId" : "20096-6548262167",
"ufid" : "aron.hale@voltmx.com",
"deviceId" : "223457",
"deviceName" : "MyDeviceName2",
"sid" : "323456",
"osType" : "android",
"phoneNo" : "",
"createdDateStr" : "06/20/2016 11:04:11 AM IST",
"userAgent" : "Mozilla/5.0 ](Windows NT 10.0; WOW64) AppleWebKit/537.36 (.md, like Gecko) Chrome/51.0.2704.103 Safari/537.36",
"ipAddress" : "10.10.30.89",
"subscriptionStatus" : true,
"cloudStatus" : true
}, {
"ksid" : 4927560138344326066,
"appId" : "20096-6548262167",
"ufid" : "aron.hale@voltmx.com",
"deviceId" : "800ABC0",
"deviceName" : "First Device",
"sid" : "9002390A",
"osType" : "androidgcm",
"phoneNo" : "",
"createdDateStr" : "06/22/2016 12:39:44 PM IST",
"userAgent" : "Mozilla/5.0 ](Windows NT 10.0; WOW64) AppleWebKit/537.36 (.md, like Gecko) Chrome/51.0.2704.103 Safari/537.36",
"ipAddress" : "10.10.30.89",
"subscriptionStatus" : true,
"cloudStatus" : false
}, {
"ksid" : 4927560955856461268,
"appId" : "300966548262167",
"ufid" : "aron.hale@voltmx.com",
"deviceId" : "800ABC1",
"deviceName" : "Second Device",
"sid" : "9002390B",
"osType" : "windows",
"phoneNo" : "",
"createdDateStr" : "06/22/2016 12:40:35 PM IST",
"userAgent" : "Mozilla/5.0 ](Windows NT 10.0; WOW64) AppleWebKit/537.36 (.md, like Gecko) Chrome/51.0.2704.103 Safari/537.36",
"ipAddress" : "10.10.30.89",
"subscriptionStatus" : true,
"cloudStatus" : true
}, {
"ksid" : 4927562634448402412,
"appId" : "20096-6548262167",
"ufid" : "aron.hale@voltmx.com",
"deviceId" : "800ABC1",
"deviceName" : "Third Device",
"sid" : "9002390C",
"osType" : "windows",
"phoneNo" : "",
"createdDateStr" : "06/22/2016 12:42:20 PM IST",
"userAgent" : "Mozilla/5.0 ](Windows NT 10.0; WOW64) AppleWebKit/537.36 (.md, like Gecko) Chrome/51.0.2704.103 Safari/537.36",
"ipAddress" : "10.10.30.89",
"subscriptionStatus" : true,
"cloudStatus" : true
}, {
"ksid" : 4927560138344326066,
"appId" : "20096-6548262167",
"ufid" : "aron.hale@voltmx.com",
"deviceId" : "800ABC0",
"deviceName" : "First Device",
"sid" : "9002390A",
"osType" : "webfcm",
"phoneNo" : "",
"createdDateStr" : "06/22/2016 12:39:44 PM IST",
"userAgent" : "Mozilla/5.0 ](Windows NT 10.0; WOW64) AppleWebKit/537.36 (.md, like Gecko) Chrome/51.0.2704.103 Safari/537.36",
"ipAddress" : "10.10.30.89",
"subscriptionStatus" : true,
"cloudStatus" : false
} ]
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Array of subscribers              |
| Status 400 | Invalid request format            |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
