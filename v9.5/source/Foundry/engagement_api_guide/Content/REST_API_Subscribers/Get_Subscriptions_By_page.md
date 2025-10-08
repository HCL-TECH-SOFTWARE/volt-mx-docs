
# Get Subscriber Details by Page

The **Get Subscriber Details by Page** API accepts start and pageSize as input parameters and returns all the subscriber's details. The pageSize represents the maximum number of the subscribers for which the details are to be returned. If the start is specified, the number of the subscribers that are returned are from start position to pageSize value. For example: if the start is zero and pageSize is five, then six subscribers from position zero to five are returned.

## URL

The HTTP URL for **Get Subscriber Details by Page** API is:

```
http://<host>:<port>/api/v1/subscribers?start=0&pageSize=5
```

This service implements Gateway Filter for Authentication/Basic Authentication to authenticate access of the service by a user.

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter | Level-Two          | Type    | Description                                                                                                                                                                                                                                                                                                |
| ---------------- | ------------------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| total            |                    | long    | Total number of subscribers                                                                                                                                                                                                                                                                                |
| subscribers      |                    |         | An array of subscriber’s attributes, as below                                                                                                                                                                                                                                                              |
|                  | ksid               | long    | Subscriber Volt MX security ID                                                                                                                                                                                                                                                                             |
|                  | appId              | long    | Unique ID assigned to an app                                                                                                                                                                                                                                                                               |
|                  | ufid               | string  | The User Friendly Identifier or UFID is used when you subscribe to Volt MX Foundry Engagement Services. Based on your requirement, you can provide an UFID. It is alphanumeric, for example xxx@voltmx.com or 2890XZCY. It can be used to map devices to the user using the value as a reconciliation key. |
|                  | deviceId           | string  | Subscriber device ID                                                                                                                                                                                                                                                                                       |
|                  | deviceName         | string  | Subscriber device name                                                                                                                                                                                                                                                                                     |
|                  | sid                | string  | The subscription ID serial number                                                                                                                                                                                                                                                                          |
|                  | osType             | string  | The current operating system (iOS or Android)                                                                                                                                                                                                                                                              |
|                  | phoneNo            | long    | Phone number of the subscriber                                                                                                                                                                                                                                                                             |
|                  | createdDateStr     | string  | Date and time on which the subscriber record was creation                                                                                                                                                                                                                                                  |
|                  | userAgent          | string  | User agent                                                                                                                                                                                                                                                                                                 |
|                  | ipAddress          | string  | IP address                                                                                                                                                                                                                                                                                                 |
|                  | subscriptionStatus | boolean | Whether the subscriber is active                                                                                                                                                                                                                                                                           |
|                  | cloudStatus        | boolean | Whether the cloud status is active                                                                                                                                                                                                                                                                         |

## Sample Response

```
  
 {
"total" : 6,
"subscribers" : [ {
"ksid" : 4931474178235588403,
"appId" : "20096-6548262167",
"ufid" : "aron.hale@voltmx.com",
"deviceId" : "123457",
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
"deviceName" : "First Device",
"sid" : "9002390B",
"osType" : "windows",
"phoneNo" : "",
"createdDateStr" : "06/22/2016 12:40:35 PM IST",
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
"osType" : "webfcm",
"phoneNo" : "",
"createdDateStr" : "06/20/2016 11:04:11 AM IST",
"userAgent" : "Mozilla/5.0 ](Windows NT 10.0; WOW64) AppleWebKit/537.36 (.md, like Gecko) Chrome/51.0.2704.103 Safari/537.36",
"ipAddress" : "10.10.30.89",
"subscriptionStatus" : true,
"cloudStatus" : true
}, {
"ksid" : 4927562634448402412,
"appId" : "20096-6548262167",
"ufid" : "aron.hale@voltmx.com",
"deviceId" : "800ABC1",
"deviceName" : "Second Device",
"sid" : "9002390C",
"osType" : "windows",
"phoneNo" : "",
"createdDateStr" : "06/22/2016 12:42:20 PM IST",
"userAgent" : "Mozilla/5.0 ](Windows NT 10.0; WOW64) AppleWebKit/537.36 (.md, like Gecko) Chrome/51.0.2704.103 Safari/537.36",
"ipAddress" : "10.10.30.89",
"subscriptionStatus" : true,
"cloudStatus" : true
}, ]
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Array of subscriber details       |
| Status 400 | Invalid request                   |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
