
# All App Details by Pagination

The **All Apps Details by Pagination** API accepts start and pageSize as input parameters and returns all app details like application name, targeted platforms(s) and application status. The **PageSize** represents the maximum number of the applications for which the details are to be returned. If the **start** is specified, the number of the applications that are returned are from **start** position to **pageSize** value. For example: if the start is zero and pageSize is five, then six applications from position zero to five are returned.

## URL

The HTTP URL for All App Detail By pagination API is:

```
http://<host>:<port>/api/v1/applications?start=<0>&pageSize=<10>
```

This service implements Gateway Filter for Authentication/Basic Authentication to authenticate access of the service by a user.

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter | Level Two              | Type                    | Description                                                                                                                                 |
| ---------------- | ---------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| total            |                        | long                    | Total number of applications                                                                                                                |
| applications     |                        |                         | An array of application objects                                                                                                             |
|                  | appId                  | alphanumeric            | Unique app ID assigned to an app                                                                                                            |
|                  | applicationName        | alphanumeric            | The unique name assigned to an app                                                                                                          |
|                  | status                 | string                  | The current status of the application as published or unpublished                                                                           |
|                  | blackBerryAppId        | alphanumeric            | The unique ID assigned for BlackBerry                                                                                                       |
|                  | blackBerryAppPwd       | alphanumeric(no spaces) | System-generated unique password                                                                                                            |
|                  | blackBerryUrl          | string                  | Primary URL for the resource                                                                                                                |
|                  | googleApiKey           | alphanumeric            | System- generated unique Google API key                                                                                                     |
|                  | jpushAppKey            | alphanumeric            | System-generated unique key to log-in to a JPush account. The jpushAppKey and jpushMasterSecret are log-in credentials for a JPush account. |
|                  | jpushMasterSecret      | alphanumeric            | System- generated unique secret to log-in to JPush account.                                                                                 |
|                  | webFcmApiKey           | alphanumeric            | System- generated unique Firebase API key                                                                                                   |
|                  | windows8ClientId       | alphanumeric            | A security identifier that is a unique, immutable identifier of a user, user group, or other security principal                             |
|                  | windowsPhone8          | boolean                 | Whether WindowsPhone8 is required                                                                                                           |
|                  | windows8ClientSecret   | alphanumeric            | Secret key assigned to Windows 8 for authentication                                                                                         |
|                  | windowsPhone7          | boolean                 | Whether WindowsPhone 7 is required or not                                                                                                   |
|                  | windowsCertUrl         | string                  | Valid URL for Windows certificate                                                                                                           |
|                  | windowsCertPassPhrase  | string                  | PassPharse to access Windows                                                                                                                |
|                  | windowsCertExpiry      | string                  | Date after that Windows certifiacte expires                                                                                                 |
|                  | appleCertUrl           | string                  | A valid URL for an Apple certificate                                                                                                        |
|                  | appleCertPassPhrase    | alphanumeric            | An alphanumeric password for an Apple certificate                                                                                           |
|                  | appleBundleId          | alphanumeric            | Bundle Identifier of the iPhone Push Certificate.                                                                                           |
|                  | appleCertExpiry        | string                  | The expiry date for an Apple certificate                                                                                                    |
|                  | appleCertDevUrl        | string                  | A valid URL for an Apple certificate                                                                                                        |
|                  | appleDevCertPassPhrase | alphanumeric            | A pass phrase for Apple certificate development                                                                                             |
|                  | appleDevBundleId       | alphanumeric            | Bundle Identifier of the iPhone Developer Push Certificate.                                                                                 |
|                  | appleDevCertExpiry     | string                  | An expiry date for Apple certificate                                                                                                        |
|                  | ipadCertUrl            | string                  | A valid URL for an iPad certificate                                                                                                         |
|                  | ipadCertPassPhrase     | alphanumeric            | A passphrase for an iPad certificate                                                                                                        |
|                  | ipadBundleId           | alphanumeric            | Bundle Identifier of the iPad Push Certificate.                                                                                             |
|                  | ipadCertExpiry         | string                  | An expiry date after which an iPad certificate is not viable                                                                                |
|                  | ipadCertDevUrl         | string                  | A valid URL to generate an iPad certificate ©                                                                                               |
|                  | ipadDevCertPassPhrase  | alphanumeric            | A pass phrase for iPad certificate development                                                                                              |
|                  | ipadDevBundleId        | alphanumeric            | Bundle Identifier of the iPad Developer Push Certificate.                                                                                   |
|                  | ipadDevCertExpiry      | string                  | An expiry date for iPad certificate                                                                                                         |
|                  | appleApplicationMode   | boolean                 | Displays whether the Apple application mode is true or false                                                                                |
|                  | ipadCertAvailable      | boolean                 | Displays whether the iPad certificate is available or not                                                                                   |
|                  | messageOpenStatus      | boolean                 | Boolean value as true or false                                                                                                              |
|                  | categoryName           | string                  | Application category like business                                                                                                          |
|                  | createdDateStr         | string                  | Date on which the application is created                                                                                                    |
|                  | createdBy              | string                  | A user name that shows who created the application                                                                                          |
|                  | lastModifiedBy         | string                  | A user name that shows who last modified the application                                                                                    |
|                  | lastModifiedDateStr    | string                  | Date on which the application was last modified                                                                                             |

## Sample Response

```
{
"total": 2,
"applications": [{
"appId": "12345678",
"applicationName": "testApp12345678",
"status": "Published",
"blackBerryAppId": "",
"blackBerryAppPwd": "",
"blackBerryUrl": "",
"googleApiKey":  
"AIzaSyBg_DkwihdcU9RjsRl1BkxsJQ_2OMmEDy8",
"appleCertUrl": "",
"appleCertPassPhrase": "",
               "appleBundleId": "",
"appleCertExpiry": "",
"appleCertDevUrl": "",
"appleDevCertPassPhrase": "",           
              "appleDevBundleId": "",
"appleDevCertExpiry": "",
"ipadCertUrl": "",
"ipadCertPassPhrase": "",
             "ipadBundleId": "",
"ipadCertExpiry": "",
"ipadCertDevUrl": "",
"ipadDevCertPassPhrase": "",
             "ipadDevBundleId": "",
"ipadDevCertExpiry": "",
"appleApplicationMode": false,
"ipadCertAvailable": false,
"webFcmApiKey": "",
"windows8ClientId": "",
"windows8ClientSecret": "",
"windowsPhone7": false,
"windowsPhone8": false,
"windowsCertUrl": "",
"windowsCertPassPhrase": "",
"windowsCertExpiry": "",
"messageOpenStatus": true,
"categoryName": "Business",
"jpushAppKey": "",
"jpushMasterSecret": "",
"createdDateStr": "06/10/2016 03:16:26 PM IST",
"createdBy": "admin",
"lastModifiedBy": "admin",
"lastModifiedDateStr": "06/10/2016 03:16:26 PM IST"
}, {
"appId": "1465551847738",
"applicationName": "App 1465551847738",
"status": "Unpublished",
"blackBerryAppId": "",
"blackBerryAppPwd": "",
"blackBerryUrl": "",
"googleApiKey":  
"AIzaSyBg_DkwihdcU9RjsRl1BkxsJQ_2OMmEDy8",
"appleCertUrl": "",
"appleCertPassPhrase": "",
"appleCertExpiry": "",
"appleCertDevUrl": "",
"appleDevCertPassPhrase": "",
"appleDevCertExpiry": "",
"ipadCertUrl": "",
"ipadCertPassPhrase": "",
"ipadCertExpiry": "",
"ipadCertDevUrl": "",
"ipadDevCertPassPhrase": "",
"ipadDevCertExpiry": "",
"appleApplicationMode": false,
"ipadCertAvailable": false,
"webFcmApiKey": "",
"windows8ClientId":  
"ms-app://s-1-15-2-213995348-1368721946-2967673374-1428200323-1145738169-1646738291-64223294",
"windows8ClientSecret":  
"DJ1uYWdv7gvYAQaVj7v1Kh9UDtecD-6S",
"windowsPhone7": false,
"windowsPhone8": true,
"windowsCertUrl": "",
"windowsCertPassPhrase": "",
"windowsCertExpiry": "",
"messageOpenStatus": true,
"categoryName": "Business",
"jpushAppKey": "",
"jpushMasterSecret": "",
"createdDateStr": "06/10/2016 03:14:08 PM IST",
"createdBy": "admin",
"lastModifiedBy": "admin",
"lastModifiedDateStr": "06/10/2016 03:14:09 PM IST"

    }]

}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Array of app details              |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
