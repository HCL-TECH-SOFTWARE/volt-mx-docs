
# Get All Users by Pagination

The **Get All Users by Pagination** API accepts start and pageSize as input parameters and returns all user details. The **pageSize** represents the maximum number of users for which the details are to be returned. If the **start** is specified, the number of users that are returned are from **start** position to **pageSize** value. For example: if the start is zero and pageSize is five, then six users from position zero to five are returned.

## URL

The HTTP URL for **Get All Users by Pagination** API is:

```
http://<host>:<port>/api/v1/audience?start=0&pageSize=20
```

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter | Level-Two           | Type    | Description                                          |
| ---------------- | ------------------- | ------- | ---------------------------------------------------- |
| total            |                     | long    | Total number of audiences                            |
| audience         |                     |         | An array of audience member's objects                |
|                  | lastName            | string  | Last name (surname) of the user                      |
|                  | country             | string  | Country where the user lives                         |
|                  | createdDateStr      | string  | Date and time when the user was created              |
|                  | mobileNumber        | string  | Mobile number of the user                            |
|                  | active              | boolean | Whether the user is active                           |
|                  | smsSubscription     | boolean | Whether SMS subscription is enabled                  |
|                  | firstName           | string  | First (given) name of the user                       |
|                  | lastModifiedDateStr | string  | Date and time user was last modified                 |
|                  | state               | string  | State (United State of America) where the user lives |
|                  | id                  | long    | Unique ID assigned to the user                       |
|                  | emailSubscription   | boolean | Whether email subscription is enabled                |
|                  | email               | string  | Email address of the user                            |
|                  | lastActiveDateStr   | string  | The last active date when the user is active.        |

## Sample Response

```
{
"total": 3,
"audience": [{
"lastName": "One",
"country": "India",
"createdDateStr": "08/28/2017 12:23:28 PM IST",
"mobileNumber": "+919030952000",
"active": true,
"smsSubscription": true,
"firstName": "User",
"lastModifiedDateStr": "08/28/2017 12:23:28 PM IST",
"emailSubscription": true,
"id": 1,
"state": "",
"email": "user.one@voltmx.com",
"lastActiveDateStr": "08/28/2017 05:30:00 AM IST"
}, {
"lastName": "Two",
"country": "India",
"createdDateStr": "08/28/2017 12:31:26 PM IST",
"mobileNumber": "+919030909090",
"active": true,
"smsSubscription": true,
"firstName": "User",
"lastModifiedDateStr": "08/28/2017 12:31:26 PM IST",
"emailSubscription": true,
"id": 2,
"state": "",
"email": "user.two@voltmx.com",
"lastActiveDateStr": "08/28/2017 05:30:00 AM IST"
}, {
"lastName": "Three",
"country": "India",
"createdDateStr": "08/28/2017 12:32:49 PM IST",
"mobileNumber": "+919030303030",
"active": true,
"smsSubscription": true,
"firstName": "User",
"lastModifiedDateStr": "08/28/2017 12:32:49 PM IST",
"emailSubscription": true,
"id": 4,
"state": "",
"email": "user.three@voltmx.com",
"lastActiveDateStr": "08/28/2017 05:30:00 AM IST"
}]
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Array of user details             |
| Status 400 | Invalid request format            |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
