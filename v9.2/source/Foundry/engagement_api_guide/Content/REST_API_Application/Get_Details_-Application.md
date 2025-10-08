
# Get App Details by ID

The **Get App Details by ID** service provides details of an application. The service accepts the App ID as an input parameter and responds with application details matching the App ID.

## URL

The HTTP URL for **Get Details** API is:

```
http://<host>:<8080>/api/v1/applications/<id>
```

The Get App Details by ID service implements Gateway Filter for Authentication to authenticate access of the service by a user.

> **_Note:_** <id>: While creating an app, a unique ID is assigned to an application. Provide the unique identifier for the app in REST URL.

## Method

GET

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                                            |
| --------------- | -------- | ---- | ------------------------------------------------------ |
| id              | Yes      | long | The application id for which the details are returned. |

## Output Parameters

The following fields are output parameters:

| Output Parameter       | Type         | Description                                                                                        |
| ---------------------- | ------------ | -------------------------------------------------------------------------------------------------- |
| App ID                 | alphanumeric | The unique ID assigned to an application                                                           |
| applicationName        | string       | Name of the application                                                                            |
| status                 | boolean      | Displays whether application status as published or unpublished                                    |
| blackBerryAppId        | string       | App ID for BlackBerry                                                                              |
| blackBerryAppPwd       | string       | Password for BlackBerry                                                                            |
| blackBerryUrl          | URL          | BlackBerry URL                                                                                     |
| googleApiKey           | alphanumeric | API key for Google                                                                                 |
| appleCertUrl           | URL          | A valid URL for an Apple certificate                                                               |
| appleCertPassPhrase    | alphanumeric | An alphanumeric password for an Apple certificate                                                  |
| appleBundleId          | alphanumeric | Bundle Identifier of the iPhone Push Certificate.                                                  |
| appleCertExpiry        | date format  | The expiry date for an Apple certificate                                                           |
| appleCertDevUrl        | URL          | A URL for Apple certificate development                                                            |
| appleDevCertPassPhrase | alphanumeric | A pass phrase for Apple certificate development                                                    |
| appleDevBundleId       | alphanumeric | Bundle Identifier of the iPhone Developer Push Certificate.                                        |
| appleDevCertExpiry     | Date Format  | An expiry date for Apple certificate                                                               |
| ipadCertUr             | URL          | A valid URL for an iPad certificate                                                                |
| ipadCertPassPhrase     | alphanumeric | A passphrase for an iPad certificate                                                               |
| ipadBundleId           | alphanumeric | Bundle Identifier of the iPad Push Certificate.                                                    |
| ipadCertExpiry         | Date Format  | An expiry date after which an iPad certificate cannot be created                                   |
| ipadCertDevUrl         | URL          | A valid URL to generate an iPad certificate                                                        |
| ipadDevCertPassPhrase  | alphanumeric | A pass phrase for iPad certificate development                                                     |
| ipadDevBundleId        | alphanumeric | Bundle Identifier of the iPad Developer Push Certificate.                                          |
| ipadDevCertExpiry      | Date Format  | An expiry date for iPad certificate                                                                |
| appleApplicationMode   | boolean      | Displays whether the Apple application mode is true or false                                       |
| ipadCertAvailable      | boolean      | Displays whether the iPad certificate is available or not                                          |
| windows8ClientId       | alphanumeric | A client ID for Windows 8                                                                          |
| windows8ClientSecret   | alphanumeric | A client secret for Windows 8                                                                      |
| windowsPhone7          | boolean      | Whether Windows Phone 7 is available                                                               |
| windowsPhone8          | boolean      | Whether Windows Phone 8 is available                                                               |
| messageOpenStatus      | boolean      | Boolean value as true or false                                                                     |
| categoryName           | string       | Application category like business                                                                 |
| jpushAppKey            | alphanumeric | Unique JPush application key                                                                       |
| jpushMasterSecret      | alphanumeric | Unique JPush application master secret. The JPush app key and master secret are log-in credentials |
| webFcmApiKey           | alphanumeric | System- generated unique Firebase API key                                                          |
| createdDateStr         | date format  | Date on which the application is created                                                           |
| createdBy              | string       | A user name that shows who created the application                                                 |
| lastModifiedBy         | string       | A user name that shows who last modified the application                                           |
| lastModifiedDateStr    | date format  | Date on which the application was last modified.                                                   |

## Sample Response

```
{
"appId" : "20096-6548262167",
"applicationName" : "AppforAll",
"status" : "Published",
"blackBerryAppId" : "",
"blackBerryAppPwd" : "",
"blackBerryUrl" : "",
"googleApiKey" : "AIzaSyCFd4pwKxLDMuk76Rk9XRrwDpXanjrj4Zk",
"appleCertUrl" : "",
"appleCertPassPhrase" : "",
"appleBundleId": "",
"appleCertExpiry" : "",
"appleCertDevUrl" : "",
"appleDevCertPassPhrase" : "",
  "appleDevBundleId": "",
"appleDevCertExpiry" : "",
"ipadCertUrl" : "",
"ipadCertPassPhrase" : "",
  "ipadBundleId": "",
"ipadCertExpiry" : "",
"ipadCertDevUrl" : "",
"ipadDevCertPassPhrase" : "",
"ipadDevBundleId": "",
"ipadDevCertExpiry" : "",
"appleApplicationMode" : true,
"ipadCertAvailable" : false,
"windows8ClientId" : "ms-app://s-1-15-2-213995348-1368721946-2967673374-1428200323-1145738169-1646738291-64223294",
"windows8ClientSecret" : "DJ1uYWdv7gvYAQaVj7v1Kh9UDtecD-6S",
"windowsPhone7" : false,
"windowsPhone8" : false,
"windowsCertUrl" : "",
"windowsCertPassPhrase" : "",
"windowsCertExpiry" : "",
"messageOpenStatus" : true,
"categoryName" : "Business",
"jpushAppKey" : "71d7cde4c164dd3d997f86e1",
"jpushMasterSecret" : "fad621972177276a4071577d",
"webFcmApiKey": "",
"createdDateStr" : "06/15/2016 02:55:46 PM IST",
"createdBy" : "admin",
"lastModifiedBy" : "admin",
"lastModifiedDateStr" : "06/15/2016 02:55:56 PM IST"
}
```

## Response Status

| Code       | Description                                                        |
| ---------- | ------------------------------------------------------------------ |
| Status 200 | An array of app details                                            |
| Status 400 | Invalid appID provided or no application found with provided appID |
| Status 401 | Unauthorized request                                               |
| Status 500 | Server Failure to process request                                  |
