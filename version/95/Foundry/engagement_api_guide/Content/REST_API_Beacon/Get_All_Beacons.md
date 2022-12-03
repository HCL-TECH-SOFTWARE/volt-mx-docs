
# Get All Beacons

.The **Get All Beacons** API accepts start and pageSize as input parameters and returns all beacons details like total number of beacons, and array of beacons. The pageSize represents the maximum number of beacons for which the details are to be returned. If the start is specified, the number of beacons that are returned are from start position to pageSize value. For example: if the start is zero and pageSize is five, then six beacons from position zero to five are returned.

## URL

The HTTP URL for **Get All Beacons** API is:

```
http://<<host>>:<<port>>/api/v1/beacon?start=0&pageSize=10
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter | Level- Two          | Type         | Description                                                                                                                                                                                               |
| ---------------- | ------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| total            |                     | long         | Total number of beacons                                                                                                                                                                                   |
| beacons          |                     |              | An array of beacons objects                                                                                                                                                                               |
|                  | id                  | long         | Unique ID assigned to a beacon                                                                                                                                                                            |
|                  | name                | string       | The unique name assigned to a beacon                                                                                                                                                                      |
|                  | details             | string       | Description of the beacon                                                                                                                                                                                 |
|                  | uuid                | alphanumeric | Universally Unique Identifier Number (UUID) assigned to the Beacon. UUID contains 32 hexadecimal digits, split into 5 groups, and separated by dashes, for example, f7826da6-4fa2-4e98-8024- bc5b71e0893e |
|                  | major               | long         | Major ID is a major identifier of a Bluetooth beacon                                                                                                                                                      |
|                  | minor               | long         | Minor ID is a minor identifier of a Bluetooth beacon                                                                                                                                                      |
|                  | createdBy           | string       | A user name that shows who created the beacon                                                                                                                                                             |
|                  | lastModifiedBy      | string       | A user name that shows who last modified the beacon                                                                                                                                                       |
|                  | lastModifiedDateStr | string       | Date on which the beacon was last modified                                                                                                                                                                |
|                  | isDeleted           | boolean      | The IsDeleted property indicates whether the beacon is deleted or not                                                                                                                                     |
|                  | createdDateStr      | string       | Date on which the beacon is created                                                                                                                                                                       |

## Sample Response

```
{
"total" : 3,
"beacons" : [ {
"id" : 1,
"name" : "eBay shopping beacon",
"details" : "eBay shopping beacon",
"uuid" : "1000",
"major" : 10,
"minor" : 5,
"createdBy" : "admin",
"lastModifiedBy" : "admin",
"lastModifiedDateStr" : "07/01/2016 06:57:50 AM EDT",
"isDeleted" : false,
"createdDateStr" : "07/01/2016 06:57:50 AM EDT"
}, {
"id" : 2,
"name" : "Amazon shopping beacon",
"details" : "Amazon shopping beacon",
"uuid" : "2000",
"major" : 200,
"minor" : 20,
"createdBy" : "admin",
"lastModifiedBy" : "admin",
"lastModifiedDateStr" : "07/01/2016 06:58:16 AM EDT",
"isDeleted" : false,
"createdDateStr" : "07/01/2016 06:58:16 AM EDT"
}, {
"id" : 3,
"name" : "BeaconCreateName",
"details" : "BeaconCreateDetails",
"uuid" : "Beacon-Create-UUID",
"major" : 500,
"minor" : 100,
"createdBy" : "admin",
"lastModifiedBy" : "admin",
"lastModifiedDateStr" : "08/02/2016 11:36:51 AM EDT",
"isDeleted" : false,
"createdDateStr" : "08/02/2016 11:36:51 AM EDT"
} ]
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Array of beacons                  |
| Status 400 | Bad request                       |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
