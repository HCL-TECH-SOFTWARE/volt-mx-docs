
# Get Beacon by ID

The **Get Beacon by ID** API accepts the beacon ID as input parameter and responds with a beacon details.

## URL

The HTTP URL for **Get Beacon by ID** API is:

```
http://<<host>>:<<port>>/api/v1/beacon/{id}
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter    | Type         | Description                                                                                                                                                                                               |
| ------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                  | long         | Unique ID assigned to a beacon                                                                                                                                                                            |
| name                | string       | The unique name assigned to a beacon                                                                                                                                                                      |
| details             | string       | Description of the beacon                                                                                                                                                                                 |
| uuid                | alphanumeric | Universally Unique Identifier Number (UUID) assigned to the Beacon. UUID contains 32 hexadecimal digits, split into 5 groups, and separated by dashes, for example, f7826da6-4fa2-4e98-8024- bc5b71e0893e |
| major               | long         | Major ID is a major identifier of a Bluetooth beacon                                                                                                                                                      |
| minor               | long         | Minor ID is a minor identifier of a Bluetooth beacon                                                                                                                                                      |
| createdBy           | string       | A user name that shows who created the beacon                                                                                                                                                             |
| lastModifiedBy      | string       | A user name that shows who last modified the beacon                                                                                                                                                       |
| lastModifiedDateStr | string       | Date on which the beacon was last modified                                                                                                                                                                |
| isDeleted           | boolean      | The IsDeleted property indicates whether the beacon is deleted or not                                                                                                                                     |
| createdDateStr      | string       | Date on which the beacon is created                                                                                                                                                                       |

## Sample Response

```
{
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
}
```

## Response Status

| Code       | Description                                               |
| ---------- | --------------------------------------------------------- |
| Status 200 | Array of beacon details                                   |
| Status 400 | Invalid beacon ID provided or no beacon found with the ID |
| Status 401 | Unauthorized request                                      |
| Status 500 | Server failure to process request.                        |
